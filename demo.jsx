import React, { Component, PropTypes, createFactory } from 'react';
import ReactDOM from 'react-dom';

import ReactPageDiv from './dist/ReactPageDiv';

const Letter = (props) => {
  return <ReactPageDiv width={8.5} height={11} {...props}>{props.children}</ReactPageDiv>;
};

const STARTING = `# Keys to win

* Make a good effort
* Don't drop the ball
* Score points

** Don't lose **

_play good_

___


This is WYSIWYP`;

const MarkdownRenderer = (props) => <div {...props} dangerouslySetInnerHTML={{__html: markdown.toHTML(props.value)}}/>;

class Demo extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      markdown: STARTING
    };
  }

  handleMarkdownChange(value) {
    this.setState({
      markdown: value
    });
  }

  render() {
    const { markdown } = this.state;

    return (
      <div style={{display: 'flex'}}>
        <div style={{ flex: '1 1', position: 'relative' }} className="hidden-print">
          <div style={{position: 'absolute', top: 5, bottom: 5, left: 5, right: 5 }}>
            <textarea style={{ width:'100%', height: '100%' }} value={markdown}
                      onChange={(e) => this.setState({ markdown: e.target.value })}/>
          </div>
        </div>
        <div style={{ flex: '0' }} className="window-padding-5">
          <Letter className="paper">
            <MarkdownRenderer value={markdown}/>
          </Letter>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('demo'));