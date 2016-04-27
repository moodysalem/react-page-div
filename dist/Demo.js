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

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _draftJs = __webpack_require__(3);

	var _draftJsExportHtml = __webpack_require__(4);

	var _ReactPageDiv = __webpack_require__(13);

	var _ReactPageDiv2 = _interopRequireDefault(_ReactPageDiv);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RichEditorWithControls = function (_React$Component) {
	  _inherits(RichEditorWithControls, _React$Component);

	  function RichEditorWithControls(props) {
	    _classCallCheck(this, RichEditorWithControls);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RichEditorWithControls).call(this, props));

	    _this.focus = function () {
	      return _this.refs.editor.focus();
	    };

	    _this.handleKeyCommand = function (command) {
	      return _this._handleKeyCommand(command);
	    };
	    _this.toggleBlockType = function (type) {
	      return _this._toggleBlockType(type);
	    };
	    _this.toggleInlineStyle = function (style) {
	      return _this._toggleInlineStyle(style);
	    };
	    return _this;
	  }

	  _createClass(RichEditorWithControls, [{
	    key: 'onChange',
	    value: function onChange(newEditorState) {
	      var onChange = this.props.onChange;

	      onChange(newEditorState);
	    }
	  }, {
	    key: '_handleKeyCommand',
	    value: function _handleKeyCommand(command) {
	      var editorState = this.props.editorState;
	      var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);
	      if (newState) {
	        this.onChange(newState);
	        return true;
	      }
	      return false;
	    }
	  }, {
	    key: '_toggleBlockType',
	    value: function _toggleBlockType(blockType) {
	      this.onChange(_draftJs.RichUtils.toggleBlockType(this.props.editorState, blockType));
	    }
	  }, {
	    key: '_toggleInlineStyle',
	    value: function _toggleInlineStyle(inlineStyle) {
	      this.onChange(_draftJs.RichUtils.toggleInlineStyle(this.props.editorState, inlineStyle));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var editorState = this.props.editorState;

	      // If the user changes block type before entering any text, we can
	      // either style the placeholder or hide it. Let's just hide it now.

	      var className = 'RichEditor-editor';
	      var contentState = editorState.getCurrentContent();
	      if (!contentState.hasText()) {
	        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
	          className += ' RichEditor-hidePlaceholder';
	        }
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: 'RichEditor-root' },
	        _react2.default.createElement(BlockStyleControls, {
	          editorState: editorState,
	          onToggle: this.toggleBlockType
	        }),
	        _react2.default.createElement(InlineStyleControls, {
	          editorState: editorState,
	          onToggle: this.toggleInlineStyle
	        }),
	        _react2.default.createElement(
	          'div',
	          { className: className, onClick: this.focus },
	          _react2.default.createElement(_draftJs.Editor, {
	            blockStyleFn: getBlockStyle,
	            customStyleMap: styleMap,
	            editorState: editorState,
	            handleKeyCommand: this.handleKeyCommand,
	            onChange: function onChange(editorState) {
	              return _this2.onChange(editorState);
	            },
	            ref: 'editor',
	            spellCheck: true
	          })
	        )
	      );
	    }
	  }]);

	  return RichEditorWithControls;
	}(_react2.default.Component);

	// Custom overrides for "code" style.


	var styleMap = {
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

	var StyleButton = function (_React$Component2) {
	  _inherits(StyleButton, _React$Component2);

	  function StyleButton() {
	    _classCallCheck(this, StyleButton);

	    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(StyleButton).call(this));

	    _this3.onToggle = function (e) {
	      e.preventDefault();
	      _this3.props.onToggle(_this3.props.style);
	    };
	    return _this3;
	  }

	  _createClass(StyleButton, [{
	    key: 'render',
	    value: function render() {
	      var className = 'RichEditor-styleButton';
	      if (this.props.active) {
	        className += ' RichEditor-activeButton';
	      }

	      return _react2.default.createElement(
	        'span',
	        { className: className, onMouseDown: this.onToggle },
	        this.props.label
	      );
	    }
	  }]);

	  return StyleButton;
	}(_react2.default.Component);

	var BLOCK_TYPES = [{ label: 'H1', style: 'header-one' }, { label: 'H2', style: 'header-two' }, { label: 'Blockquote', style: 'blockquote' }, { label: 'UL', style: 'unordered-list-item' }, { label: 'OL', style: 'ordered-list-item' }, { label: 'Code Block', style: 'code-block' }];

	var BlockStyleControls = function BlockStyleControls(props) {
	  var editorState = props.editorState;
	  var selection = editorState.getSelection();
	  var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

	  return _react2.default.createElement(
	    'div',
	    { className: 'RichEditor-controls' },
	    BLOCK_TYPES.map(function (type) {
	      return _react2.default.createElement(StyleButton, { active: type.style === blockType, label: type.label, onToggle: props.onToggle, style: type.style });
	    })
	  );
	};

	var INLINE_STYLES = [{ label: 'Bold', style: 'BOLD' }, { label: 'Italic', style: 'ITALIC' }, { label: 'Underline', style: 'UNDERLINE' }, { label: 'Monospace', style: 'CODE' }];

	var InlineStyleControls = function InlineStyleControls(props) {
	  var currentStyle = props.editorState.getCurrentInlineStyle();
	  return _react2.default.createElement(
	    'div',
	    { className: 'RichEditor-controls' },
	    INLINE_STYLES.map(function (type) {
	      return _react2.default.createElement(StyleButton, {
	        active: currentStyle.has(type.style), label: type.label, onToggle: props.onToggle, style: type.style
	      });
	    })
	  );
	};

	var Letter = function Letter(props) {
	  return _react2.default.createElement(
	    _ReactPageDiv2.default,
	    _extends({ width: 8.5, height: 11 }, props),
	    props.children
	  );
	};

	var Demo = function (_Component) {
	  _inherits(Demo, _Component);

	  function Demo(props, context) {
	    _classCallCheck(this, Demo);

	    var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).call(this, props, context));

	    _this4.state = {
	      editorState: _draftJs.EditorState.createEmpty()
	    };
	    return _this4;
	  }

	  _createClass(Demo, [{
	    key: 'handleEditorChange',
	    value: function handleEditorChange(editorState) {
	      this.setState({ editorState: editorState });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;

	      var editorState = this.state.editorState;


	      return _react2.default.createElement(
	        'div',
	        { style: { display: 'flex' } },
	        _react2.default.createElement(
	          'div',
	          { style: { flex: '1 1', position: 'relative' }, className: 'hidden-print' },
	          _react2.default.createElement(
	            'div',
	            {
	              style: { display: 'flex', flexFlow: 'column', position: 'absolute', top: 5, bottom: 5, left: 5, right: 5, overflow: 'auto' } },
	            _react2.default.createElement(
	              'div',
	              { style: { backgroundColor: 'white' } },
	              _react2.default.createElement(RichEditorWithControls, { onChange: function onChange(editorState) {
	                  return _this5.setState({ editorState: editorState });
	                },
	                editorState: editorState })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { flex: 'none' }, className: 'window-padding-5' },
	          _react2.default.createElement(
	            Letter,
	            { className: 'paper' },
	            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: (0, _draftJsExportHtml.stateToHTML)(editorState.getCurrentContent()) } })
	          )
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
/***/ function(module, exports) {

	module.exports = Draft;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stateToHTML = __webpack_require__(5);

	Object.defineProperty(exports, 'stateToHTML', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_stateToHTML).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ENTITY_ATTR_MAP, _DATA_TO_ATTR;

	exports.default = stateToHTML;

	var _draftJs = __webpack_require__(3);

	var _draftJsUtils = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var BOLD = _draftJsUtils.INLINE_STYLE.BOLD;
	var CODE = _draftJsUtils.INLINE_STYLE.CODE;
	var ITALIC = _draftJsUtils.INLINE_STYLE.ITALIC;
	var STRIKETHROUGH = _draftJsUtils.INLINE_STYLE.STRIKETHROUGH;
	var UNDERLINE = _draftJsUtils.INLINE_STYLE.UNDERLINE;

	var INDENT = '  ';
	var BREAK = '<br/>';

	// Map entity data to element attributes.
	var ENTITY_ATTR_MAP = (_ENTITY_ATTR_MAP = {}, _defineProperty(_ENTITY_ATTR_MAP, _draftJsUtils.ENTITY_TYPE.LINK, { url: 'href', rel: 'rel', target: 'target', title: 'title', className: 'class' }), _defineProperty(_ENTITY_ATTR_MAP, _draftJsUtils.ENTITY_TYPE.IMAGE, { src: 'src', height: 'height', width: 'width', alt: 'alt', className: 'class' }), _ENTITY_ATTR_MAP);

	// Map entity data to element attributes.
	var DATA_TO_ATTR = (_DATA_TO_ATTR = {}, _defineProperty(_DATA_TO_ATTR, _draftJsUtils.ENTITY_TYPE.LINK, function (entityType, entity) {
	  var attrMap = ENTITY_ATTR_MAP.hasOwnProperty(entityType) ? ENTITY_ATTR_MAP[entityType] : {};
	  var data = entity.getData();
	  var attrs = {};
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = Object.keys(data)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var dataKey = _step.value;

	      var dataValue = data[dataKey];
	      if (attrMap.hasOwnProperty(dataKey)) {
	        var attrKey = attrMap[dataKey];
	        attrs[attrKey] = dataValue;
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  return attrs;
	}), _defineProperty(_DATA_TO_ATTR, _draftJsUtils.ENTITY_TYPE.IMAGE, function (entityType, entity) {
	  var attrMap = ENTITY_ATTR_MAP.hasOwnProperty(entityType) ? ENTITY_ATTR_MAP[entityType] : {};
	  var data = entity.getData();
	  var attrs = {};
	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;

	  try {
	    for (var _iterator2 = Object.keys(data)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var dataKey = _step2.value;

	      var dataValue = data[dataKey];
	      if (attrMap.hasOwnProperty(dataKey)) {
	        var attrKey = attrMap[dataKey];
	        attrs[attrKey] = dataValue;
	      }
	    }
	  } catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion2 && _iterator2.return) {
	        _iterator2.return();
	      }
	    } finally {
	      if (_didIteratorError2) {
	        throw _iteratorError2;
	      }
	    }
	  }

	  return attrs;
	}), _DATA_TO_ATTR);

	// The reason this returns an array is because a single block might get wrapped
	// in two tags.
	function getTags(blockType) {
	  switch (blockType) {
	    case _draftJsUtils.BLOCK_TYPE.HEADER_ONE:
	      return ['h1'];
	    case _draftJsUtils.BLOCK_TYPE.HEADER_TWO:
	      return ['h2'];
	    case _draftJsUtils.BLOCK_TYPE.HEADER_THREE:
	      return ['h3'];
	    case _draftJsUtils.BLOCK_TYPE.HEADER_FOUR:
	      return ['h4'];
	    case _draftJsUtils.BLOCK_TYPE.HEADER_FIVE:
	      return ['h5'];
	    case _draftJsUtils.BLOCK_TYPE.HEADER_SIX:
	      return ['h6'];
	    case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
	    case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
	      return ['li'];
	    case _draftJsUtils.BLOCK_TYPE.BLOCKQUOTE:
	      return ['blockquote'];
	    case _draftJsUtils.BLOCK_TYPE.CODE:
	      return ['pre', 'code'];
	    default:
	      return ['p'];
	  }
	}

	function getWrapperTag(blockType) {
	  switch (blockType) {
	    case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
	      return 'ul';
	    case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
	      return 'ol';
	    default:
	      return null;
	  }
	}

	var MarkupGenerator = function () {
	  function MarkupGenerator(contentState) {
	    _classCallCheck(this, MarkupGenerator);

	    this.contentState = contentState;
	  }

	  _createClass(MarkupGenerator, [{
	    key: 'generate',
	    value: function generate() {
	      this.output = [];
	      this.blocks = this.contentState.getBlocksAsArray();
	      this.totalBlocks = this.blocks.length;
	      this.currentBlock = 0;
	      this.indentLevel = 0;
	      this.wrapperTag = null;
	      while (this.currentBlock < this.totalBlocks) {
	        this.processBlock();
	      }
	      this.closeWrapperTag();
	      return this.output.join('').trim();
	    }
	  }, {
	    key: 'processBlock',
	    value: function processBlock() {
	      var block = this.blocks[this.currentBlock];
	      var blockType = block.getType();
	      var newWrapperTag = getWrapperTag(blockType);
	      if (this.wrapperTag !== newWrapperTag) {
	        if (this.wrapperTag) {
	          this.closeWrapperTag();
	        }
	        if (newWrapperTag) {
	          this.openWrapperTag(newWrapperTag);
	        }
	      }
	      this.indent();
	      this.writeStartTag(blockType);
	      this.output.push(this.renderBlockContent(block));
	      // Look ahead and see if we will nest list.
	      var nextBlock = this.getNextBlock();
	      if (canHaveDepth(blockType) && nextBlock && nextBlock.getDepth() === block.getDepth() + 1) {
	        this.output.push('\n');
	        // This is a litle hacky: temporarily stash our current wrapperTag and
	        // render child list(s).
	        var thisWrapperTag = this.wrapperTag;
	        this.wrapperTag = null;
	        this.indentLevel += 1;
	        this.currentBlock += 1;
	        this.processBlocksAtDepth(nextBlock.getDepth());
	        this.wrapperTag = thisWrapperTag;
	        this.indentLevel -= 1;
	        this.indent();
	      } else {
	        this.currentBlock += 1;
	      }
	      this.writeEndTag(blockType);
	    }
	  }, {
	    key: 'processBlocksAtDepth',
	    value: function processBlocksAtDepth(depth) {
	      var block = this.blocks[this.currentBlock];
	      while (block && block.getDepth() === depth) {
	        this.processBlock();
	        block = this.blocks[this.currentBlock];
	      }
	      this.closeWrapperTag();
	    }
	  }, {
	    key: 'getNextBlock',
	    value: function getNextBlock() {
	      return this.blocks[this.currentBlock + 1];
	    }
	  }, {
	    key: 'writeStartTag',
	    value: function writeStartTag(blockType) {
	      var tags = getTags(blockType);
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;

	      try {
	        for (var _iterator3 = tags[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var tag = _step3.value;

	          this.output.push('<' + tag + '>');
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'writeEndTag',
	    value: function writeEndTag(blockType) {
	      var tags = getTags(blockType);
	      if (tags.length === 1) {
	        this.output.push('</' + tags[0] + '>\n');
	      } else {
	        var output = [];
	        var _iteratorNormalCompletion4 = true;
	        var _didIteratorError4 = false;
	        var _iteratorError4 = undefined;

	        try {
	          for (var _iterator4 = tags[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	            var tag = _step4.value;

	            output.unshift('</' + tag + '>');
	          }
	        } catch (err) {
	          _didIteratorError4 = true;
	          _iteratorError4 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion4 && _iterator4.return) {
	              _iterator4.return();
	            }
	          } finally {
	            if (_didIteratorError4) {
	              throw _iteratorError4;
	            }
	          }
	        }

	        this.output.push(output.join('') + '\n');
	      }
	    }
	  }, {
	    key: 'openWrapperTag',
	    value: function openWrapperTag(wrapperTag) {
	      this.wrapperTag = wrapperTag;
	      this.indent();
	      this.output.push('<' + wrapperTag + '>\n');
	      this.indentLevel += 1;
	    }
	  }, {
	    key: 'closeWrapperTag',
	    value: function closeWrapperTag() {
	      if (this.wrapperTag) {
	        this.indentLevel -= 1;
	        this.indent();
	        this.output.push('</' + this.wrapperTag + '>\n');
	        this.wrapperTag = null;
	      }
	    }
	  }, {
	    key: 'indent',
	    value: function indent() {
	      this.output.push(INDENT.repeat(this.indentLevel));
	    }
	  }, {
	    key: 'renderBlockContent',
	    value: function renderBlockContent(block) {
	      var blockType = block.getType();
	      var text = block.getText();
	      if (text === '') {
	        // Prevent element collapse if completely empty.
	        return BREAK;
	      }
	      text = this.preserveWhitespace(text);
	      var charMetaList = block.getCharacterList();
	      var entityPieces = (0, _draftJsUtils.getEntityRanges)(text, charMetaList);
	      return entityPieces.map(function (_ref) {
	        var _ref2 = _slicedToArray(_ref, 2);

	        var entityKey = _ref2[0];
	        var stylePieces = _ref2[1];

	        var content = stylePieces.map(function (_ref3) {
	          var _ref4 = _slicedToArray(_ref3, 2);

	          var text = _ref4[0];
	          var style = _ref4[1];

	          var content = encodeContent(text);
	          // These are reverse alphabetical by tag name.
	          if (style.has(BOLD)) {
	            content = '<strong>' + content + '</strong>';
	          }
	          if (style.has(UNDERLINE)) {
	            content = '<ins>' + content + '</ins>';
	          }
	          if (style.has(ITALIC)) {
	            content = '<em>' + content + '</em>';
	          }
	          if (style.has(STRIKETHROUGH)) {
	            content = '<del>' + content + '</del>';
	          }
	          if (style.has(CODE)) {
	            // If our block type is CODE then we are already wrapping the whole
	            // block in a `<code>` so don't wrap inline code elements.
	            content = blockType === _draftJsUtils.BLOCK_TYPE.CODE ? content : '<code>' + content + '</code>';
	          }
	          return content;
	        }).join('');
	        var entity = entityKey ? _draftJs.Entity.get(entityKey) : null;
	        var entityType = entity == null ? null : entity.getType();
	        if (entityType != null && entityType === _draftJsUtils.ENTITY_TYPE.LINK) {
	          var attrs = DATA_TO_ATTR.hasOwnProperty(entityType) ? DATA_TO_ATTR[entityType](entityType, entity) : null;
	          var strAttrs = stringifyAttrs(attrs);
	          return '<a' + strAttrs + '>' + content + '</a>';
	        } else if (entityType != null && entityType === _draftJsUtils.ENTITY_TYPE.IMAGE) {
	          var _attrs = DATA_TO_ATTR.hasOwnProperty(entityType) ? DATA_TO_ATTR[entityType](entityType, entity) : null;
	          var _strAttrs = stringifyAttrs(_attrs);
	          return '<img' + _strAttrs + '/>';
	        } else {
	          return content;
	        }
	      }).join('');
	    }
	  }, {
	    key: 'preserveWhitespace',
	    value: function preserveWhitespace(text) {
	      var length = text.length;
	      // Prevent leading/trailing/consecutive whitespace collapse.
	      var newText = new Array(length);
	      for (var i = 0; i < length; i++) {
	        if (text[i] === ' ' && (i === 0 || i === length - 1 || text[i - 1] === ' ')) {
	          newText[i] = '\xA0';
	        } else {
	          newText[i] = text[i];
	        }
	      }
	      return newText.join('');
	    }
	  }]);

	  return MarkupGenerator;
	}();

	function stringifyAttrs(attrs) {
	  if (attrs == null) {
	    return '';
	  }
	  var parts = [];
	  var _iteratorNormalCompletion5 = true;
	  var _didIteratorError5 = false;
	  var _iteratorError5 = undefined;

	  try {
	    for (var _iterator5 = Object.keys(attrs)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	      var attrKey = _step5.value;

	      var attrValue = attrs[attrKey];
	      if (attrValue != null) {
	        parts.push(' ' + attrKey + '="' + encodeAttr(attrValue + '') + '"');
	      }
	    }
	  } catch (err) {
	    _didIteratorError5 = true;
	    _iteratorError5 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion5 && _iterator5.return) {
	        _iterator5.return();
	      }
	    } finally {
	      if (_didIteratorError5) {
	        throw _iteratorError5;
	      }
	    }
	  }

	  return parts.join('');
	}

	function canHaveDepth(blockType) {
	  switch (blockType) {
	    case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
	    case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
	      return true;
	    default:
	      return false;
	  }
	}

	function encodeContent(text) {
	  return text.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('\xA0').join('&nbsp;').split('\n').join(BREAK + '\n');
	}

	function encodeAttr(text) {
	  return text.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('"').join('&quot;');
	}

	function stateToHTML(content) {
	  return new MarkupGenerator(content).generate();
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Constants = __webpack_require__(7);

	Object.keys(_Constants).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Constants[key];
	    }
	  });
	});
	Object.defineProperty(exports, 'Constants', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Constants).default;
	  }
	});

	var _getEntityRanges = __webpack_require__(8);

	Object.defineProperty(exports, 'getEntityRanges', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_getEntityRanges).default;
	  }
	});

	var _getSelectedBlocks = __webpack_require__(10);

	Object.defineProperty(exports, 'getSelectedBlocks', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_getSelectedBlocks).default;
	  }
	});

	var _selectionContainsEntity = __webpack_require__(11);

	Object.defineProperty(exports, 'selectionContainsEntity', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_selectionContainsEntity).default;
	  }
	});

	var _callModifierForSelectedBlocks = __webpack_require__(12);

	Object.defineProperty(exports, 'callModifierForSelectedBlocks', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_callModifierForSelectedBlocks).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var BLOCK_TYPE = exports.BLOCK_TYPE = {
	  // This is used to represent a normal text block (paragraph).
	  UNSTYLED: 'unstyled',
	  HEADER_ONE: 'header-one',
	  HEADER_TWO: 'header-two',
	  HEADER_THREE: 'header-three',
	  HEADER_FOUR: 'header-four',
	  HEADER_FIVE: 'header-five',
	  HEADER_SIX: 'header-six',
	  UNORDERED_LIST_ITEM: 'unordered-list-item',
	  ORDERED_LIST_ITEM: 'ordered-list-item',
	  BLOCKQUOTE: 'blockquote',
	  PULLQUOTE: 'pullquote',
	  CODE: 'code-block',
	  ATOMIC: 'atomic'
	};

	var ENTITY_TYPE = exports.ENTITY_TYPE = {
	  LINK: 'LINK',
	  IMAGE: 'IMAGE'
	};

	var INLINE_STYLE = exports.INLINE_STYLE = {
	  BOLD: 'BOLD',
	  CODE: 'CODE',
	  ITALIC: 'ITALIC',
	  STRIKETHROUGH: 'STRIKETHROUGH',
	  UNDERLINE: 'UNDERLINE'
	};

	exports.default = {
	  BLOCK_TYPE: BLOCK_TYPE,
	  ENTITY_TYPE: ENTITY_TYPE,
	  INLINE_STYLE: INLINE_STYLE
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EMPTY_SET = undefined;
	exports.default = getEntityRanges;

	var _immutable = __webpack_require__(9);

	var EMPTY_SET = exports.EMPTY_SET = new _immutable.OrderedSet();

	function getEntityRanges(text, charMetaList) {
	  var charEntity = null;
	  var prevCharEntity = null;
	  var ranges = [];
	  var rangeStart = 0;
	  for (var i = 0, len = text.length; i < len; i++) {
	    prevCharEntity = charEntity;
	    var meta = charMetaList.get(i);
	    charEntity = meta ? meta.getEntity() : null;
	    if (i > 0 && charEntity !== prevCharEntity) {
	      ranges.push([prevCharEntity, getStyleRanges(text.slice(rangeStart, i), charMetaList.slice(rangeStart, i))]);
	      rangeStart = i;
	    }
	  }
	  ranges.push([charEntity, getStyleRanges(text.slice(rangeStart), charMetaList.slice(rangeStart))]);
	  return ranges;
	}

	function getStyleRanges(text, charMetaList) {
	  var charStyle = EMPTY_SET;
	  var prevCharStyle = EMPTY_SET;
	  var ranges = [];
	  var rangeStart = 0;
	  for (var i = 0, len = text.length; i < len; i++) {
	    prevCharStyle = charStyle;
	    var meta = charMetaList.get(i);
	    charStyle = meta ? meta.getStyle() : EMPTY_SET;
	    if (i > 0 && !(0, _immutable.is)(charStyle, prevCharStyle)) {
	      ranges.push([text.slice(rangeStart, i), prevCharStyle]);
	      rangeStart = i;
	    }
	  }
	  ranges.push([text.slice(rangeStart), charStyle]);
	  return ranges;
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = Immutable;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Returns an array of all `ContentBlock` instances within two block keys
	 *
	 * @param  {object} contentState A draft.js `ContentState` instance
	 * @param  {string} anchorKey    The block key to start searching from
	 * @param  {string} focusKey     The block key until which to search
	 *
	 * @return {array} An array containing the found content blocks
	 */

	exports.default = function (contentState, anchorKey, focusKey) {
	  var isSameBlock = anchorKey === focusKey;
	  var startingBlock = contentState.getBlockForKey(anchorKey);

	  if (!startingBlock) {
	    return [];
	  }

	  var selectedBlocks = [startingBlock];

	  if (!isSameBlock) {
	    var blockKey = anchorKey;

	    while (blockKey !== focusKey) {
	      var nextBlock = contentState.getBlockAfter(blockKey);

	      if (!nextBlock) {
	        selectedBlocks = [];
	        break;
	      }

	      selectedBlocks.push(nextBlock);
	      blockKey = nextBlock.getKey();
	    }
	  }

	  return selectedBlocks;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getSelectedBlocks = __webpack_require__(10);

	var _getSelectedBlocks2 = _interopRequireDefault(_getSelectedBlocks);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (strategy) {
	  return function (editorState, selection) {
	    var contentState = editorState.getCurrentContent();
	    var currentSelection = selection || editorState.getSelection();
	    var startKey = currentSelection.getStartKey();
	    var endKey = currentSelection.getEndKey();
	    var startOffset = currentSelection.getStartOffset();
	    var endOffset = currentSelection.getEndOffset();

	    var isSameBlock = startKey === endKey;
	    var selectedBlocks = (0, _getSelectedBlocks2.default)(contentState, startKey, endKey);
	    var entityFound = false;

	    // We have to shift the offset to not get false positives when selecting
	    // a character just before or after an entity
	    var finalStartOffset = startOffset + 1;
	    var finalEndOffset = endOffset - 1;

	    selectedBlocks.forEach(function (block) {
	      strategy(block, function (start, end) {
	        if (entityFound) {
	          return;
	        }

	        var blockKey = block.getKey();

	        if (isSameBlock && (end < finalStartOffset || start > finalEndOffset)) {
	          return;
	        } else if (blockKey === startKey && end < finalStartOffset) {
	          return;
	        } else if (blockKey === endKey && start > finalEndOffset) {
	          return;
	        }

	        entityFound = true;
	      });
	    });

	    return entityFound;
	  };
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _draftJs = __webpack_require__(3);

	var _getSelectedBlocks = __webpack_require__(10);

	var _getSelectedBlocks2 = _interopRequireDefault(_getSelectedBlocks);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Calls a provided `modifier` function with a selection for each
	 * selected block in the current editor selection. Passes through additional
	 * arguments to the modifier.
	 *
	 * Note: At the moment it will retain the original selection and override
	 * possible selection changes from modifiers
	 *
	 * @param  {object} editorState The current draft.js editor state object
	 *
	 * @param  {function} modifier  A modifier function to be executed.
	 *                              Must have the signature (editorState, selection, ...)
	 *
	 * @param  {mixed} ...args      Additional arguments to be passed through to the modifier
	 *
	 * @return {object} The new editor state
	 */

	exports.default = function (editorState, modifier) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  var contentState = editorState.getCurrentContent();
	  var currentSelection = editorState.getSelection();

	  var startKey = currentSelection.getStartKey();
	  var endKey = currentSelection.getEndKey();
	  var startOffset = currentSelection.getStartOffset();
	  var endOffset = currentSelection.getEndOffset();

	  var isSameBlock = startKey === endKey;
	  var selectedBlocks = (0, _getSelectedBlocks2.default)(contentState, startKey, endKey);

	  var finalEditorState = editorState;
	  selectedBlocks.forEach(function (block) {
	    var currentBlockKey = block.getKey();
	    var selectionStart = startOffset;
	    var selectionEnd = endOffset;

	    if (currentBlockKey === startKey) {
	      selectionStart = startOffset;
	      selectionEnd = isSameBlock ? endOffset : block.getText().length;
	    } else if (currentBlockKey === endKey) {
	      selectionStart = isSameBlock ? startOffset : 0;
	      selectionEnd = endOffset;
	    } else {
	      selectionStart = 0;
	      selectionEnd = block.getText().length;
	    }

	    var selection = new _draftJs.SelectionState({
	      anchorKey: currentBlockKey,
	      anchorOffset: selectionStart,
	      focusKey: currentBlockKey,
	      focusOffset: selectionEnd
	    });

	    finalEditorState = modifier.apply(undefined, [finalEditorState, selection].concat(args));
	  });

	  return _draftJs.EditorState.forceSelection(finalEditorState, currentSelection);
	};

/***/ },
/* 13 */
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