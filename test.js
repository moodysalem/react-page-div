import React, { DOM, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { ReactPageDivFactory } from './index';

const assert = require('assert'),
  jsdom = require('jsdom').jsdom;

global.window = jsdom('<html><body><div id="test-container"></div></body></html>').defaultView;
global.document = window.document;

const testContainer = document.getElementById('test-container');

describe('exports', function () {
  it('should be a function', function () {
    assert(typeof ReactPageDivFactory === 'function');
  });
});

describe('height calculation', function () {
  it('should calculate some increment of page height', function (done) {
    ReactDOM.render(ReactPageDivFactory({
      height: 11,
      heightUnit: 'in',
      width: 8.5,
      widthUnit: 'in'
    }, DOM.div({ height: 400 }, 'Hello World')), testContainer);

    done();

    //console.log(testContainer.innerHTML);
  });
});