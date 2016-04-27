import React, { Component, PropTypes, createFactory } from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

import ReactPageDiv from './dist/ReactPageDiv';


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

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote';
    default:
      return null;
  }
}

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
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
  const {editorState} = props,
    selection = editorState.getSelection(),
    blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) =>
        <StyleButton active={type.style === blockType} label={type.label} onToggle={props.onToggle} style={type.style}/>
      )}
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
  const currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type =>
        <StyleButton
          active={currentStyle.has(type.style)} label={type.label} onToggle={props.onToggle} style={type.style}
        />
      )}
    </div>
  );
};


const Letter = (props) => {
  return <ReactPageDiv width={8.5} height={11} {...props}>{props.children}</ReactPageDiv>;
};

class Demo extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  handleEditorChange(editorState) {
    this.setState({ editorState });
  }

  render() {
    const { editorState } = this.state;

    return (
      <div style={{display: 'flex'}}>
        <div style={{ flex: '1 1', position: 'relative' }} className="hidden-print">
          <div
            style={{ display: 'flex', flexFlow: 'column', position: 'absolute', top: 5, bottom: 5, left: 5, right: 5, overflow: 'auto' }}>
            <div style={{backgroundColor: 'white'}}>
              <RichEditorWithControls onChange={(editorState) => this.setState({ editorState })}
                                      editorState={editorState}/>
            </div>
          </div>
        </div>
        <div style={{ flex: 'none' }} className="window-padding-5">
          <Letter className="paper">
            <div dangerouslySetInnerHTML={{ __html: stateToHTML(editorState.getCurrentContent()) }}></div>
          </Letter>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('demo'));