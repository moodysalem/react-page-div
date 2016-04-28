import React, { Component, PropTypes, createFactory } from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

import ReactPageDiv from './index.jsx';

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
};

class RichEditorWithControls extends React.Component {
  constructor(props) {
    super(props);
    this.focus = () => this.refs.editor.focus();

    this.handleKeyCommand = (command) => this._handleKeyCommand(command);
    this.toggleBlockType = (type) => this._toggleBlockType(type);
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
  }

  onChange(newEditorState) {
    const { onChange } = this.props;
    onChange(newEditorState);
  }

  _handleKeyCommand(command) {
    const { editorState } = this.props,
      newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.props.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.props.editorState,
        inlineStyle
      )
    );
  }

  render() {
    const { editorState } = this.props;

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <div className="RichEditor-root">
        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <div className={className} onClick={this.focus}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={(editorState) => this.onChange(editorState)}
            ref="editor"
            spellCheck={true}
          />
        </div>
      </div>
    );
  }
}

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote';
    default:
      return null;
  }
}

class StyleButton extends React.Component {
  onToggle(e) {
    e.preventDefault();
    const { onToggle, style } = this.props;
    onToggle(style);
  }

  render() {
    const { label, active } = this.props;

    let className = 'RichEditor-styleButton';
    if (active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span className={className} onMouseDown={(e) => this.onToggle(e)}>
        {label}
      </span>
    );
  }
}

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' }
];

const BlockStyleControls = (props) => {
  const { editorState, onToggle } = props,
    selection = editorState.getSelection(),
    blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) => {
        const { style, label } = type;
        return <StyleButton key={label} active={style === blockType} label={label} onToggle={onToggle} style={style}/>;
      })}
    </div>
  );
};

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' }
];

const InlineStyleControls = (props) => {
  const { editorState, onToggle } = props,
    currentStyle = editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type => {
        const { label, style } = type;
        return (
          <StyleButton key={label} active={currentStyle.has(style)} label={label} onToggle={onToggle} style={style}/>
        );
      })}
    </div>
  );
};

const PaperSize = (props) => {
  const { width, widthUnit, height, heightUnit } = props.paperSize;
  return (
    <ReactPageDiv {...props} width={width} widthUnit={widthUnit} height={height} heightUnit={heightUnit}>
      {props.children}
    </ReactPageDiv>
  );
};

const PAGE_SIZES = {
  Letter: { width: 8.5, widthUnit: 'in', height: 11, heightUnit: 'in' },
  Legal: { width: 11, widthUnit: 'in', height: 14, heightUnit: 'in' },
  A4: { width: 210, widthUnit: 'mm', height: 297, heightUnit: 'mm' }
};

class Demo extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      editorState: EditorState.createEmpty(),
      paperSize: 'Letter'
    };
  }

  handleEditorChange(editorState) {
    this.setState({ editorState });
  }

  render() {
    const { editorState, paperSize } = this.state;

    return (
      <div style={{display: 'flex'}}>
        <div style={{ flex: '1 1', position: 'relative' }} className="hidden-print">
          <div
            style={{ display: 'flex', flexFlow: 'column', position: 'absolute', top: 5, bottom: 5, left: 5, right: 5, overflow: 'auto' }}>
            <div key="select" style={{ flex: 'none'}}>
              <select value={paperSize} onChange={(e) => this.setState({ paperSize: e.target.value })}>
                {
                  Object.keys(PAGE_SIZES).map((size) => <option key={size} value={size}>{size}</option>)
                }
              </select>
            </div>
            <div style={{backgroundColor: 'white'}}>
              <RichEditorWithControls onChange={(editorState) => this.setState({ editorState })}
                                      editorState={editorState}/>
            </div>
          </div>
        </div>
        <div style={{ flex: 'none' }} className="window-padding-5">
          <PaperSize className="paper" paperSize={PAGE_SIZES[paperSize]}>
            <div dangerouslySetInnerHTML={{ __html: stateToHTML(editorState.getCurrentContent()) }}></div>
          </PaperSize>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('demo'));