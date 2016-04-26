import React, { Component, PropTypes, createFactory } from 'react';
import ReactDOM from 'react-dom';

//console.log(React);
import ReactPageDiv from './dist/ReactPageDiv';

const Letter = (props) => {
  return <ReactPageDiv width={8.5} height={11} {...props}>{props.children}</ReactPageDiv>;
};

class Demo extends Component {

  render() {
    return (
      <Letter className="paper container">
        Hello World
        <div style={{backgroundColor: 'pink', height: 1100}}>More Content</div>
        <div style={{backgroundColor: 'aliceblue', height: 200}}>Print Me</div>
      </Letter>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('demo'));