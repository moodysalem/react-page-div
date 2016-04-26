/******/ (function(modules) { // webpackBootstrap
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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	//console.log(React);


	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _ReactPageDiv = __webpack_require__(3);

	var _ReactPageDiv2 = _interopRequireDefault(_ReactPageDiv);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Letter = function Letter(props) {
	  return _react2.default.createElement(
	    _ReactPageDiv2.default,
	    _extends({ width: 8.5, height: 11 }, props),
	    props.children
	  );
	};

	var Demo = function (_Component) {
	  _inherits(Demo, _Component);

	  function Demo() {
	    _classCallCheck(this, Demo);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).apply(this, arguments));
	  }

	  _createClass(Demo, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        Letter,
	        { className: 'paper container' },
	        'Hello World',
	        _react2.default.createElement(
	          'div',
	          { style: { backgroundColor: 'pink', height: 1100 } },
	          'More Content'
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { backgroundColor: 'aliceblue', height: 200 } },
	          'Print Me'
	        )
	      );
	    }
	  }]);

	  return Demo;
	}(_react.Component);

	_reactDom2.default.render(_react2.default.createElement(Demo, null), document.getElementById('demo'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1));
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

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.ReactPageDivFactory = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _react = __webpack_require__(1);

		var _react2 = _interopRequireDefault(_react);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var assign = __webpack_require__(2),
		    ALLOWED_UNITS = _react.PropTypes.oneOf(['in', 'px', 'cm']),
		    INCHES_TO_CENTIMETERS = 2.54;

		var ReactPageDiv = function (_Component) {
		  _inherits(ReactPageDiv, _Component);

		  function ReactPageDiv(props, context) {
		    _classCallCheck(this, ReactPageDiv);

		    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactPageDiv).call(this, props, context));

		    _this.state = {
		      increments: 1,
		      calculateTimer: null
		    };
		    return _this;
		  }

		  /**
		   * When mounting, start off the timer for checking the height
		   */


		  _createClass(ReactPageDiv, [{
		    key: 'componentDidMount',
		    value: function componentDidMount() {
		      this.checkHeight();
		    }

		    /**
		     * Whenever updated, we need to recalculate our height immediately
		     * @param prevProps
		     * @param prevState
		     */

		  }, {
		    key: 'componentDidUpdate',
		    value: function componentDidUpdate(prevProps, prevState) {
		      this.calculateHeight();

		      // we weren't running the check timer so kick it back off
		      if (prevProps.calculateTimer === null) {
		        this.checkHeight();
		      }
		    }

		    /**
		     * This function checks height on an interval
		     */

		  }, {
		    key: 'checkHeight',
		    value: function checkHeight() {
		      var _this2 = this;

		      this.calculateHeight();

		      var checkInterval = this.props.checkInterval;


		      if (checkInterval !== null) {
		        var calculateTimer = setTimeout(function () {
		          return _this2.checkHeight();
		        }, checkInterval);

		        this.setState({ calculateTimer: calculateTimer });
		      }
		    }
		  }, {
		    key: 'calculateHeight',
		    value: function calculateHeight() {
		      var hidden = this.refs.hidden;
		      var _props = this.props;
		      var heightUnit = _props.heightUnit;
		      var dpi = _props.dpi;
		      var height = _props.height;
		      var increments = this.state.increments;
		      var scrollHeight = hidden.scrollHeight;


		      if (typeof scrollHeight === 'undefined') {
		        return;
		      }

		      // calculate the height of the page in pixels based on the dpi
		      var heightUnitHeight = void 0;

		      if (heightUnit === 'in') {
		        heightUnitHeight = scrollHeight / dpi;
		      } else if (heightUnit === 'px') {
		        heightUnitHeight = scrollHeight;
		      } else if (heightUnit === 'cm') {
		        heightUnitHeight = scrollHeight / dpi * INCHES_TO_CENTIMETERS;
		      }

		      // calculate the number of increments of one page that we should extend
		      var newIncrements = Math.ceil(heightUnitHeight / height);
		      if (increments !== newIncrements) {
		        this.setState({ increments: newIncrements });
		      }
		    }
		  }, {
		    key: 'getPageMarkers',
		    value: function getPageMarkers() {
		      var increments = this.state.increments;
		      var _props2 = this.props;
		      var pageMarkerClassName = _props2.pageMarkerClassName;
		      var pageMarkerStyle = _props2.pageMarkerStyle;
		      var height = _props2.height;
		      var heightUnit = _props2.heightUnit;
		      var pageMarkers = [];

		      for (var i = 1; i < increments; i++) {
		        var markerStyle = assign({}, pageMarkerStyle, {
		          position: 'absolute',
		          left: 0,
		          right: 0,
		          top: i * height + heightUnit
		        });

		        pageMarkers.push(_react2.default.createElement('div', { key: i, className: pageMarkerClassName, style: markerStyle }));
		      }

		      return pageMarkers;
		    }
		  }, {
		    key: 'getWidth',
		    value: function getWidth() {
		      var _props3 = this.props;
		      var width = _props3.width;
		      var widthUnit = _props3.widthUnit;

		      return width + widthUnit;
		    }
		  }, {
		    key: 'getHiddenDiv',
		    value: function getHiddenDiv() {
		      var _props4 = this.props;
		      var style = _props4.style;
		      var className = _props4.className;
		      var children = _props4.children;


		      var divStyle = assign({}, style, {
		        position: 'absolute',
		        width: this.getWidth(),
		        height: 0,
		        visibility: 'hidden'
		      });

		      return _react2.default.createElement(
		        'div',
		        { key: 'hidden', ref: 'hidden', className: className, style: divStyle },
		        children
		      );
		    }
		  }, {
		    key: 'getVisibleDiv',
		    value: function getVisibleDiv() {
		      var _props5 = this.props;
		      var height = _props5.height;
		      var className = _props5.className;
		      var style = _props5.style;
		      var heightUnit = _props5.heightUnit;
		      var children = _props5.children;
		      var increments = this.state.increments;


		      var divStyle = assign({}, style, {
		        overflow: 'hidden',
		        position: 'relative',
		        height: height * increments + heightUnit,
		        width: this.getWidth()
		      });

		      return _react2.default.createElement(
		        'div',
		        { key: 'visible', ref: 'visible', className: className, style: divStyle },
		        this.getPageMarkers(),
		        children
		      );
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      return _react2.default.createElement(
		        'div',
		        null,
		        this.getHiddenDiv(),
		        this.getVisibleDiv()
		      );
		    }
		  }]);

		  return ReactPageDiv;
		}(_react.Component);

		ReactPageDiv.propTypes = {
		  // the width of one page
		  width: _react.PropTypes.number.isRequired,
		  widthUnit: ALLOWED_UNITS,

		  // the height of one page
		  height: _react.PropTypes.number.isRequired,
		  heightUnit: ALLOWED_UNITS,

		  // the dpi of the user agent, used to convert inches to pixels
		  dpi: _react.PropTypes.number.isRequired,

		  // how often to verify the proper number of page increments are displayed in ms, or null if all dom updates are happening
		  // through the div and no timer needs to be set
		  checkInterval: _react.PropTypes.number,

		  // the style to apply to the page break marker
		  pageMarkerStyle: _react.PropTypes.object,
		  pageMarkerClassName: _react.PropTypes.string
		};

		ReactPageDiv.defaultProps = {
		  widthUnit: 'in',
		  heightUnit: 'in',
		  dpi: 96,
		  checkInterval: null,
		  pageMarkerStyle: {
		    borderTop: '2px dashed rgba(0,0,0,0.5)'
		  },
		  pageMarkerClassName: null
		};

		exports.default = ReactPageDiv;

		var ReactPageDivFactory = (0, _react.createFactory)(ReactPageDiv);
		exports.ReactPageDivFactory = ReactPageDivFactory;

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

/***/ }
/******/ ]);