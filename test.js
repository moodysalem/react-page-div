const React = require('react'),
  d = React.DOM,
  dom = require('react-dom'),
  PageDiv = require('./index'),
  PageDivFactory = React.createFactory(PageDiv),
  assert = require('assert'),
  jsdom = require('jsdom').jsdom;

window = jsdom('<html><body><div id="test-container"></div></body></html>').defaultView;

const testContainer = window.document.getElementById('test-container');

describe('exports', function () {
  it('should be a function', function () {
    assert(typeof PageDiv === 'function');
    assert(typeof PageDivFactory === 'function');
  });
});

describe('height calculation', function () {
  it('should calculate some increment of page height', function (done) {
    dom.render(PageDivFactory({
      height: 11,
      heightUnit: 'in',
      width: 8.5,
      widthUnit: 'in'
    }, d.div({ height: 400 }, 'Hello World')), testContainer);

    //console.log(testContainer.innerHTML);
  });
});