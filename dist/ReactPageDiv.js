(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactPageDiv"] = factory(require("react"));
	else
		root["ReactPageDiv"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	  assign = __webpack_require__(2),
	  d = React.DOM,
	  rpt = React.PropTypes,
	  ALLOWED_UNITS = rpt.oneOf([ 'in', 'px', 'cm' ]),
	  INCHES_TO_CENTIMETERS = 2.54;

	module.exports = React.createClass({
	  displayName: 'React Page Div',

	  propTypes: {
	    // the width of one page
	    width: rpt.number.isRequired,
	    widthUnit: ALLOWED_UNITS,

	    // the height of one page
	    height: rpt.number.isRequired,
	    heightUnit: ALLOWED_UNITS,

	    // the dpi of the user agent, used to convert inches to pixels
	    dpi: rpt.number.isRequired,

	    // how often to verify the proper number of page increments are displayed in ms, or null if all dom updates are happening
	    // through the div and no timer needs to be set
	    checkInterval: rpt.number,

	    // the style to apply to the page break marker
	    pageMarkerStyle: rpt.object
	  },

	  getDefaultProps: function () {
	    return {
	      widthUnit: 'in',
	      fixed: 'width',
	      dpi: 96,
	      checkInterval: null,
	      pageMarkerStyle: {
	        borderTop: '2px dashed rgba(0,0,0,0.5)'
	      }
	    };
	  },

	  getInitialState: function () {
	    return {
	      increments: 1,
	      calculateTimer: null
	    };
	  },

	  componentDidMount: function () {
	    this.calculateHeight();
	    this.checkHeight();
	  },

	  componentDidUpdate: function (prevProps, prevState) {
	    this.calculateHeight();

	    if (prevProps.checkInterval !== this.props.checkInterval) {
	      this.checkHeight();
	    }
	  },

	  checkHeight: function () {
	    if (this.isMounted()) {
	      this.calculateHeight();

	      if (this.props.checkInterval !== null) {
	        setTimeout(function () {
	          this.checkHeight();
	        }.bind(this), this.props.checkInterval);
	      }
	    }
	  },

	  calculateHeight: function () {
	    var hidden = this.refs.hidden,
	      pxHeight = hidden.scrollHeight;

	    if (typeof pxHeight === 'undefined') {
	      return;
	    }

	    // calculate the minimum height of the page
	    var heightUnitHeight;
	    var heightUnit = this.props.heightUnit;
	    if (heightUnit === 'in') {
	      heightUnitHeight = (pxHeight / this.props.dpi);
	    } else if (heightUnit === 'px') {
	      heightUnitHeight = pxHeight;
	    } else if (heightUnit === 'cm') {
	      heightUnitHeight = (pxHeight / this.props.dpi) * INCHES_TO_CENTIMETERS;
	    }

	    // calculate the number of increments of one page that we should extend
	    var increments = Math.ceil(heightUnitHeight / this.props.height);
	    if (this.state.increments !== increments) {
	      this.setState({
	        increments: increments
	      });
	    }
	  },

	  getPageMarkers: function () {
	    var pm = [];
	    for (var i = 1; i < this.state.increments; i++) {
	      pm.push(d.div({
	        key: i,
	        style: assign({}, this.props.pageMarkerStyle, {
	          position: 'absolute',
	          left: 0,
	          right: 0,
	          top: (i * this.props.height) + this.props.heightUnit
	        })
	      }));
	    }
	    return pm;
	  },

	  getWidth: function () {
	    return (this.props.width + this.props.widthUnit);
	  },

	  getHiddenDiv: function () {
	    return d.div({
	      key: 'hidden',
	      ref: 'hidden',
	      className: this.props.className,
	      style: assign({}, this.props.style, {
	        position: 'absolute',
	        width: this.getWidth(),
	        height: 0,
	        visibility: 'hidden'
	      })
	    }, this.props.children);
	  },

	  getVisibleDiv: function () {
	    return d.div({
	      key: 'visible',
	      ref: 'visible',
	      className: this.props.className,
	      style: assign({}, this.props.style, {
	        overflow: 'hidden',
	        position: 'relative',
	        height: (this.props.height * this.state.increments) + this.props.heightUnit,
	        width: this.getWidth()
	      })
	    }, this.getPageMarkers().concat(this.props.children));
	  },

	  render: function () {
	    return d.div({}, [
	      // a hidden container used to calculate height of children elements
	      this.getHiddenDiv(),

	      // the visible div with the appropriate increment of height
	      this.getVisibleDiv()
	    ]);
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }
/******/ ])
});
;