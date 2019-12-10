module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-rte/lib/Draft.global.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-rte/lib/Draft.global.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"DraftEditor-root": "Draft-global__DraftEditor-root___YGvS6",
	"DraftEditor-editorContainer": "Draft-global__DraftEditor-editorContainer___3n2QW",
	"public-DraftEditor-content": "Draft-global__public-DraftEditor-content___2pNO0",
	"public-DraftEditor-block": "Draft-global__public-DraftEditor-block___3WBx2",
	"DraftEditor-alignLeft": "Draft-global__DraftEditor-alignLeft___qez-Y",
	"public-DraftEditorPlaceholder-root": "Draft-global__public-DraftEditorPlaceholder-root___-s_44",
	"DraftEditor-alignCenter": "Draft-global__DraftEditor-alignCenter___3zTBd",
	"DraftEditor-alignRight": "Draft-global__DraftEditor-alignRight___UPes1",
	"public-DraftEditorPlaceholder-hasFocus": "Draft-global__public-DraftEditorPlaceholder-hasFocus___1GvbK",
	"DraftEditorPlaceholder-hidden": "Draft-global__DraftEditorPlaceholder-hidden___2J08G",
	"public-DraftStyleDefault-block": "Draft-global__public-DraftStyleDefault-block___2Fu4U",
	"public-DraftStyleDefault-ltr": "Draft-global__public-DraftStyleDefault-ltr___3OFdI",
	"public-DraftStyleDefault-rtl": "Draft-global__public-DraftStyleDefault-rtl___2W8d6",
	"public-DraftStyleDefault-listLTR": "Draft-global__public-DraftStyleDefault-listLTR___1uhoG",
	"public-DraftStyleDefault-listRTL": "Draft-global__public-DraftStyleDefault-listRTL___18A4c",
	"public-DraftStyleDefault-ul": "Draft-global__public-DraftStyleDefault-ul___qovvb",
	"public-DraftStyleDefault-ol": "Draft-global__public-DraftStyleDefault-ol___3LWnN",
	"public-DraftStyleDefault-depth0": "Draft-global__public-DraftStyleDefault-depth0___5q4ms",
	"public-DraftStyleDefault-depth1": "Draft-global__public-DraftStyleDefault-depth1___16UTz",
	"public-DraftStyleDefault-depth2": "Draft-global__public-DraftStyleDefault-depth2___j4UjL",
	"public-DraftStyleDefault-depth3": "Draft-global__public-DraftStyleDefault-depth3___2L_Ed",
	"public-DraftStyleDefault-depth4": "Draft-global__public-DraftStyleDefault-depth4___2Zlhd",
	"public-DraftStyleDefault-unorderedListItem": "Draft-global__public-DraftStyleDefault-unorderedListItem___1KGn1",
	"public-DraftStyleDefault-orderedListItem": "Draft-global__public-DraftStyleDefault-orderedListItem___1Jn3J",
	"public-DraftStyleDefault-reset": "Draft-global__public-DraftStyleDefault-reset___3R56j"
};

/***/ }),

/***/ "./node_modules/react-rte/lib/RichTextEditor.css":
/*!*******************************************************!*\
  !*** ./node_modules/react-rte/lib/RichTextEditor.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "RichTextEditor__root___3vaJL",
	"editor": "RichTextEditor__editor___1XFl4",
	"hidePlaceholder": "RichTextEditor__hidePlaceholder___3Ej3q",
	"paragraph": "RichTextEditor__paragraph___20x9t",
	"codeBlock": "RichTextEditor__codeBlock___31eOK",
	"blockquote": "RichTextEditor__blockquote___4rkAP",
	"block": "RichTextEditor__block___DK2WG"
};

/***/ }),

/***/ "./node_modules/react-rte/lib/RichTextEditor.js":
/*!******************************************************!*\
  !*** ./node_modules/react-rte/lib/RichTextEditor.js ***!
  \******************************************************/
/*! exports provided: default, EditorValue, decorator, createEmptyValue, createValueFromString, ButtonGroup, Button, Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorator", function() { return decorator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmptyValue", function() { return createEmptyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createValueFromString", function() { return createValueFromString; });
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "babel-runtime/helpers/defineProperty");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var draft_js_lib_getDefaultKeyBinding__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! draft-js/lib/getDefaultKeyBinding */ "draft-js/lib/getDefaultKeyBinding");
/* harmony import */ var draft_js_lib_getDefaultKeyBinding__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(draft_js_lib_getDefaultKeyBinding__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_changeBlockDepth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/changeBlockDepth */ "./node_modules/react-rte/lib/lib/changeBlockDepth.js");
/* harmony import */ var _lib_changeBlockType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/changeBlockType */ "./node_modules/react-rte/lib/lib/changeBlockType.js");
/* harmony import */ var _lib_getBlocksInSelection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/getBlocksInSelection */ "./node_modules/react-rte/lib/lib/getBlocksInSelection.js");
/* harmony import */ var _lib_insertBlockAfter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/insertBlockAfter */ "./node_modules/react-rte/lib/lib/insertBlockAfter.js");
/* harmony import */ var _lib_isListItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/isListItem */ "./node_modules/react-rte/lib/lib/isListItem.js");
/* harmony import */ var draft_js_lib_isSoftNewlineEvent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! draft-js/lib/isSoftNewlineEvent */ "draft-js/lib/isSoftNewlineEvent");
/* harmony import */ var draft_js_lib_isSoftNewlineEvent__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(draft_js_lib_isSoftNewlineEvent__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _lib_EditorToolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/EditorToolbar */ "./node_modules/react-rte/lib/lib/EditorToolbar.js");
/* harmony import */ var _lib_EditorValue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/EditorValue */ "./node_modules/react-rte/lib/lib/EditorValue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorValue", function() { return _lib_EditorValue__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _lib_LinkDecorator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/LinkDecorator */ "./node_modules/react-rte/lib/lib/LinkDecorator.js");
/* harmony import */ var _lib_ImageDecorator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/ImageDecorator */ "./node_modules/react-rte/lib/lib/ImageDecorator.js");
/* harmony import */ var _lib_composite__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lib/composite */ "./node_modules/react-rte/lib/lib/composite.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var class_autobind__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! class-autobind */ "class-autobind");
/* harmony import */ var class_autobind__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(class_autobind__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! events */ "events");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var draft_js_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! draft-js-utils */ "draft-js-utils");
/* harmony import */ var draft_js_utils__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(draft_js_utils__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _Draft_global_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Draft.global.css */ "./node_modules/react-rte/lib/Draft.global.css");
/* harmony import */ var _Draft_global_css__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_Draft_global_css__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _RichTextEditor_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./RichTextEditor.css */ "./node_modules/react-rte/lib/RichTextEditor.css");
/* harmony import */ var _RichTextEditor_css__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_RichTextEditor_css__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _ui_ButtonGroup__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ui/ButtonGroup */ "./node_modules/react-rte/lib/ui/ButtonGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return _ui_ButtonGroup__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ui/Button */ "./node_modules/react-rte/lib/ui/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _ui_Button__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _ui_Dropdown__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ui/Dropdown */ "./node_modules/react-rte/lib/ui/Dropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _ui_Dropdown__WEBPACK_IMPORTED_MODULE_31__["default"]; });

































var MAX_LIST_DEPTH = 2; // Custom overrides for "code" style.

var styleMap = {
  CODE: {
    backgroundColor: '#f3f3f3',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
};

var RichTextEditor = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(RichTextEditor, _Component);

  function RichTextEditor() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, RichTextEditor);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, (RichTextEditor.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default()(RichTextEditor)).apply(this, arguments));

    _this._keyEmitter = new events__WEBPACK_IMPORTED_MODULE_25___default.a();
    class_autobind__WEBPACK_IMPORTED_MODULE_24___default()(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(RichTextEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var autoFocus = this.props.autoFocus;

      if (!autoFocus) {
        return;
      }

      this._focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _cx;

      var _props = this.props,
          value = _props.value,
          className = _props.className,
          toolbarClassName = _props.toolbarClassName,
          editorClassName = _props.editorClassName,
          placeholder = _props.placeholder,
          customStyleMap = _props.customStyleMap,
          readOnly = _props.readOnly,
          disabled = _props.disabled,
          toolbarConfig = _props.toolbarConfig,
          blockStyleFn = _props.blockStyleFn,
          customControls = _props.customControls,
          keyBindingFn = _props.keyBindingFn,
          rootStyle = _props.rootStyle,
          toolbarStyle = _props.toolbarStyle,
          editorStyle = _props.editorStyle,
          otherProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(_props, ['value', 'className', 'toolbarClassName', 'editorClassName', 'placeholder', 'customStyleMap', 'readOnly', 'disabled', 'toolbarConfig', 'blockStyleFn', 'customControls', 'keyBindingFn', 'rootStyle', 'toolbarStyle', 'editorStyle']);

      var editorState = value.getEditorState();
      customStyleMap = customStyleMap ? babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, styleMap, customStyleMap) : styleMap; // If the user changes block type before entering any text, we can either
      // style the placeholder or hide it. Let's just hide it for now.

      var combinedEditorClassName = classnames__WEBPACK_IMPORTED_MODULE_23___default()((_cx = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_cx, _RichTextEditor_css__WEBPACK_IMPORTED_MODULE_28___default.a.editor, true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_cx, _RichTextEditor_css__WEBPACK_IMPORTED_MODULE_28___default.a.hidePlaceholder, this._shouldHidePlaceholder()), _cx), editorClassName);

      if (readOnly == null) {
        readOnly = disabled;
      }

      var editorToolbar = void 0;

      if (!readOnly) {
        editorToolbar = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_lib_EditorToolbar__WEBPACK_IMPORTED_MODULE_18__["default"], {
          rootStyle: toolbarStyle,
          className: toolbarClassName,
          keyEmitter: this._keyEmitter,
          editorState: editorState,
          onChange: this._onChange,
          focusEditor: this._focus,
          toolbarConfig: toolbarConfig,
          customControls: customControls
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('div', {
        className: classnames__WEBPACK_IMPORTED_MODULE_23___default()(_RichTextEditor_css__WEBPACK_IMPORTED_MODULE_28___default.a.root, className),
        style: rootStyle
      }, editorToolbar, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('div', {
        className: combinedEditorClassName,
        style: editorStyle
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(draft_js__WEBPACK_IMPORTED_MODULE_10__["Editor"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, otherProps, {
        blockStyleFn: Object(_lib_composite__WEBPACK_IMPORTED_MODULE_22__["default"])(defaultBlockStyleFn, blockStyleFn),
        customStyleMap: customStyleMap,
        editorState: editorState,
        handleReturn: this._handleReturn,
        keyBindingFn: keyBindingFn || this._customKeyHandler,
        handleKeyCommand: this._handleKeyCommand,
        onTab: this._onTab,
        onChange: this._onChange,
        placeholder: placeholder,
        ref: 'editor',
        spellCheck: true,
        readOnly: readOnly
      }))));
    }
  }, {
    key: '_shouldHidePlaceholder',
    value: function _shouldHidePlaceholder() {
      var editorState = this.props.value.getEditorState();
      var contentState = editorState.getCurrentContent();

      if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
          return true;
        }
      }

      return false;
    }
  }, {
    key: '_handleReturn',
    value: function _handleReturn(event) {
      var handleReturn = this.props.handleReturn;

      if (handleReturn != null && handleReturn(event)) {
        return true;
      }

      if (this._handleReturnSoftNewline(event)) {
        return true;
      }

      if (this._handleReturnEmptyListItem()) {
        return true;
      }

      if (this._handleReturnSpecialBlock()) {
        return true;
      }

      return false;
    } // `shift + return` should insert a soft newline.

  }, {
    key: '_handleReturnSoftNewline',
    value: function _handleReturnSoftNewline(event) {
      var editorState = this.props.value.getEditorState();

      if (draft_js_lib_isSoftNewlineEvent__WEBPACK_IMPORTED_MODULE_17___default()(event)) {
        var selection = editorState.getSelection();

        if (selection.isCollapsed()) {
          this._onChange(draft_js__WEBPACK_IMPORTED_MODULE_10__["RichUtils"].insertSoftNewline(editorState));
        } else {
          var content = editorState.getCurrentContent();
          var newContent = draft_js__WEBPACK_IMPORTED_MODULE_10__["Modifier"].removeRange(content, selection, 'forward');
          var newSelection = newContent.getSelectionAfter();

          var _block = newContent.getBlockForKey(newSelection.getStartKey());

          newContent = draft_js__WEBPACK_IMPORTED_MODULE_10__["Modifier"].insertText(newContent, newSelection, '\n', _block.getInlineStyleAt(newSelection.getStartOffset()), null);

          this._onChange(draft_js__WEBPACK_IMPORTED_MODULE_10__["EditorState"].push(editorState, newContent, 'insert-fragment'));
        }

        return true;
      }

      return false;
    } // If the cursor is in an empty list item when return is pressed, then the
    // block type should change to normal (end the list).

  }, {
    key: '_handleReturnEmptyListItem',
    value: function _handleReturnEmptyListItem() {
      var editorState = this.props.value.getEditorState();
      var selection = editorState.getSelection();

      if (selection.isCollapsed()) {
        var contentState = editorState.getCurrentContent();
        var blockKey = selection.getStartKey();

        var _block2 = contentState.getBlockForKey(blockKey);

        if (Object(_lib_isListItem__WEBPACK_IMPORTED_MODULE_16__["default"])(_block2) && _block2.getLength() === 0) {
          var depth = _block2.getDepth();

          var newState = depth === 0 ? Object(_lib_changeBlockType__WEBPACK_IMPORTED_MODULE_13__["default"])(editorState, blockKey, draft_js_utils__WEBPACK_IMPORTED_MODULE_26__["BLOCK_TYPE"].UNSTYLED) : Object(_lib_changeBlockDepth__WEBPACK_IMPORTED_MODULE_12__["default"])(editorState, blockKey, depth - 1);

          this._onChange(newState);

          return true;
        }
      }

      return false;
    } // If the cursor is at the end of a special block (any block type other than
    // normal or list item) when return is pressed, new block should be normal.

  }, {
    key: '_handleReturnSpecialBlock',
    value: function _handleReturnSpecialBlock() {
      var editorState = this.props.value.getEditorState();
      var selection = editorState.getSelection();

      if (selection.isCollapsed()) {
        var contentState = editorState.getCurrentContent();
        var blockKey = selection.getStartKey();

        var _block3 = contentState.getBlockForKey(blockKey);

        if (!Object(_lib_isListItem__WEBPACK_IMPORTED_MODULE_16__["default"])(_block3) && _block3.getType() !== draft_js_utils__WEBPACK_IMPORTED_MODULE_26__["BLOCK_TYPE"].UNSTYLED) {
          // If cursor is at end.
          if (_block3.getLength() === selection.getStartOffset()) {
            var newEditorState = Object(_lib_insertBlockAfter__WEBPACK_IMPORTED_MODULE_15__["default"])(editorState, blockKey, draft_js_utils__WEBPACK_IMPORTED_MODULE_26__["BLOCK_TYPE"].UNSTYLED);

            this._onChange(newEditorState);

            return true;
          }
        }
      }

      return false;
    }
  }, {
    key: '_onTab',
    value: function _onTab(event) {
      var editorState = this.props.value.getEditorState();
      var newEditorState = draft_js__WEBPACK_IMPORTED_MODULE_10__["RichUtils"].onTab(event, editorState, MAX_LIST_DEPTH);

      if (newEditorState !== editorState) {
        this._onChange(newEditorState);
      }
    }
  }, {
    key: '_customKeyHandler',
    value: function _customKeyHandler(event) {
      // Allow toolbar to catch key combinations.
      var eventFlags = {};

      this._keyEmitter.emit('keypress', event, eventFlags);

      if (eventFlags.wasHandled) {
        return null;
      } else {
        return draft_js_lib_getDefaultKeyBinding__WEBPACK_IMPORTED_MODULE_11___default()(event);
      }
    }
  }, {
    key: '_handleKeyCommand',
    value: function _handleKeyCommand(command) {
      var editorState = this.props.value.getEditorState();
      var newEditorState = draft_js__WEBPACK_IMPORTED_MODULE_10__["RichUtils"].handleKeyCommand(editorState, command);

      if (newEditorState) {
        this._onChange(newEditorState);

        return true;
      } else {
        return false;
      }
    }
  }, {
    key: '_onChange',
    value: function _onChange(editorState) {
      var _props2 = this.props,
          onChange = _props2.onChange,
          value = _props2.value;

      if (onChange == null) {
        return;
      }

      var newValue = value.setEditorState(editorState);
      var newEditorState = newValue.getEditorState();

      this._handleInlineImageSelection(newEditorState);

      onChange(newValue);
    }
  }, {
    key: '_handleInlineImageSelection',
    value: function _handleInlineImageSelection(editorState) {
      var selection = editorState.getSelection();
      var blocks = Object(_lib_getBlocksInSelection__WEBPACK_IMPORTED_MODULE_14__["default"])(editorState);

      var selectImage = function selectImage(block, offset) {
        var imageKey = block.getEntityAt(offset);
        draft_js__WEBPACK_IMPORTED_MODULE_10__["Entity"].mergeData(imageKey, {
          selected: true
        });
      };

      var isInMiddleBlock = function isInMiddleBlock(index) {
        return index > 0 && index < blocks.size - 1;
      };

      var isWithinStartBlockSelection = function isWithinStartBlockSelection(offset, index) {
        return index === 0 && offset > selection.getStartOffset();
      };

      var isWithinEndBlockSelection = function isWithinEndBlockSelection(offset, index) {
        return index === blocks.size - 1 && offset < selection.getEndOffset();
      };

      blocks.toIndexedSeq().forEach(function (block, index) {
        _lib_ImageDecorator__WEBPACK_IMPORTED_MODULE_21__["default"].strategy(block, function (offset) {
          if (isWithinStartBlockSelection(offset, index) || isInMiddleBlock(index) || isWithinEndBlockSelection(offset, index)) {
            selectImage(block, offset);
          }
        });
      });
    }
  }, {
    key: '_focus',
    value: function _focus() {
      this.refs.editor.focus();
    }
  }]);

  return RichTextEditor;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RichTextEditor);

function defaultBlockStyleFn(block) {
  var result = _RichTextEditor_css__WEBPACK_IMPORTED_MODULE_28___default.a.block;

  switch (block.getType()) {
    case 'unstyled':
      return classnames__WEBPACK_IMPORTED_MODULE_23___default()(result, _RichTextEditor_css__WEBPACK_IMPORTED_MODULE_28___default.a.paragraph);

    case 'blockquote':
      return classnames__WEBPACK_IMPORTED_MODULE_23___default()(result, _RichTextEditor_css__WEBPACK_IMPORTED_MODULE_28___default.a.blockquote);

    case 'code-block':
      return classnames__WEBPACK_IMPORTED_MODULE_23___default()(result, _RichTextEditor_css__WEBPACK_IMPORTED_MODULE_28___default.a.codeBlock);

    default:
      return result;
  }
}

var decorator = new draft_js__WEBPACK_IMPORTED_MODULE_10__["CompositeDecorator"]([_lib_LinkDecorator__WEBPACK_IMPORTED_MODULE_20__["default"], _lib_ImageDecorator__WEBPACK_IMPORTED_MODULE_21__["default"]]);

function createEmptyValue() {
  return _lib_EditorValue__WEBPACK_IMPORTED_MODULE_19__["default"].createEmpty(decorator);
}

function createValueFromString(markup, format, options) {
  return _lib_EditorValue__WEBPACK_IMPORTED_MODULE_19__["default"].createFromString(markup, format, decorator, options);
} // $FlowIssue - This should probably not be done this way.


babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(RichTextEditor, {
  EditorValue: _lib_EditorValue__WEBPACK_IMPORTED_MODULE_19__["default"],
  decorator: decorator,
  createEmptyValue: createEmptyValue,
  createValueFromString: createValueFromString,
  ButtonGroup: _ui_ButtonGroup__WEBPACK_IMPORTED_MODULE_29__["default"],
  Button: _ui_Button__WEBPACK_IMPORTED_MODULE_30__["default"],
  Dropdown: _ui_Dropdown__WEBPACK_IMPORTED_MODULE_31__["default"]
});



/***/ }),

/***/ "./node_modules/react-rte/lib/lib/EditorToolbar.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-rte/lib/lib/EditorToolbar.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "EditorToolbar__root___2j51r"
};

/***/ }),

/***/ "./node_modules/react-rte/lib/lib/EditorToolbar.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-rte/lib/lib/EditorToolbar.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/array/from */ "babel-runtime/core-js/array/from");
/* harmony import */ var babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/map */ "babel-runtime/core-js/map");
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "babel-runtime/helpers/defineProperty");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ "babel-runtime/helpers/typeof");
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var draft_js_lib_KeyBindingUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! draft-js/lib/KeyBindingUtil */ "draft-js/lib/KeyBindingUtil");
/* harmony import */ var draft_js_lib_KeyBindingUtil__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(draft_js_lib_KeyBindingUtil__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var draft_js_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! draft-js-utils */ "draft-js-utils");
/* harmony import */ var draft_js_utils__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(draft_js_utils__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _EditorToolbarConfig__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./EditorToolbarConfig */ "./node_modules/react-rte/lib/lib/EditorToolbarConfig.js");
/* harmony import */ var _StyleButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./StyleButton */ "./node_modules/react-rte/lib/lib/StyleButton.js");
/* harmony import */ var _ui_PopoverIconButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ui/PopoverIconButton */ "./node_modules/react-rte/lib/ui/PopoverIconButton.js");
/* harmony import */ var _ui_ButtonGroup__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ui/ButtonGroup */ "./node_modules/react-rte/lib/ui/ButtonGroup.js");
/* harmony import */ var _ui_Dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../ui/Dropdown */ "./node_modules/react-rte/lib/ui/Dropdown.js");
/* harmony import */ var _ui_IconButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../ui/IconButton */ "./node_modules/react-rte/lib/ui/IconButton.js");
/* harmony import */ var _getEntityAtCursor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./getEntityAtCursor */ "./node_modules/react-rte/lib/lib/getEntityAtCursor.js");
/* harmony import */ var _clearEntityForRange__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./clearEntityForRange */ "./node_modules/react-rte/lib/lib/clearEntityForRange.js");
/* harmony import */ var class_autobind__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! class-autobind */ "class-autobind");
/* harmony import */ var class_autobind__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(class_autobind__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _EditorToolbar_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./EditorToolbar.css */ "./node_modules/react-rte/lib/lib/EditorToolbar.css");
/* harmony import */ var _EditorToolbar_css__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_EditorToolbar_css__WEBPACK_IMPORTED_MODULE_25__);



























var EditorToolbar = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(EditorToolbar, _Component);

  function EditorToolbar() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, EditorToolbar);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default()(this, (EditorToolbar.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default()(EditorToolbar)).apply(this, arguments));

    class_autobind__WEBPACK_IMPORTED_MODULE_23___default()(_this);
    _this.state = {
      showLinkInput: false,
      showImageInput: false,
      customControlState: {}
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(EditorToolbar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // Technically, we should also attach/detach event listeners when the
      // `keyEmitter` prop changes.
      this.props.keyEmitter.on('keypress', this._onKeypress);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.keyEmitter.removeListener('keypress', this._onKeypress);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          toolbarConfig = _props.toolbarConfig,
          rootStyle = _props.rootStyle;

      if (toolbarConfig == null) {
        toolbarConfig = _EditorToolbarConfig__WEBPACK_IMPORTED_MODULE_15__["default"];
      }

      var display = toolbarConfig.display || _EditorToolbarConfig__WEBPACK_IMPORTED_MODULE_15__["default"].display;
      var buttonGroups = display.map(function (groupName) {
        switch (groupName) {
          case 'INLINE_STYLE_BUTTONS':
            {
              return _this2._renderInlineStyleButtons(groupName, toolbarConfig);
            }

          case 'BLOCK_TYPE_DROPDOWN':
            {
              return _this2._renderBlockTypeDropdown(groupName, toolbarConfig);
            }

          case 'LINK_BUTTONS':
            {
              return _this2._renderLinkButtons(groupName, toolbarConfig);
            }

          case 'IMAGE_BUTTON':
            {
              return _this2._renderImageButton(groupName, toolbarConfig);
            }

          case 'BLOCK_TYPE_BUTTONS':
            {
              return _this2._renderBlockTypeButtons(groupName, toolbarConfig);
            }

          case 'HISTORY_BUTTONS':
            {
              return _this2._renderUndoRedo(groupName, toolbarConfig);
            }
        }
      });
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement('div', {
        className: classnames__WEBPACK_IMPORTED_MODULE_24___default()(_EditorToolbar_css__WEBPACK_IMPORTED_MODULE_25___default.a.root, className),
        style: rootStyle
      }, buttonGroups, this._renderCustomControls());
    }
  }, {
    key: '_renderCustomControls',
    value: function _renderCustomControls() {
      var _this3 = this;

      var _props2 = this.props,
          customControls = _props2.customControls,
          editorState = _props2.editorState;

      if (customControls == null) {
        return;
      }

      return customControls.map(function (f) {
        switch (typeof f === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4___default()(f)) {
          case 'function':
            {
              return f(_this3._setCustomControlState, _this3._getCustomControlState, editorState);
            }

          default:
            {
              return f;
            }
        }
      });
    }
  }, {
    key: '_setCustomControlState',
    value: function _setCustomControlState(key, value) {
      this.setState(function (_ref) {
        var customControlState = _ref.customControlState;
        return {
          customControlState: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, customControlState, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, key, value))
        };
      });
    }
  }, {
    key: '_getCustomControlState',
    value: function _getCustomControlState(key) {
      return this.state.customControlState[key];
    }
  }, {
    key: '_renderBlockTypeDropdown',
    value: function _renderBlockTypeDropdown(name, toolbarConfig) {
      var blockType = this._getCurrentBlockType();

      var choices = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_1___default.a((toolbarConfig.BLOCK_TYPE_DROPDOWN || []).map(function (type) {
        return [type.style, {
          label: type.label,
          className: type.className
        }];
      }));

      if (!choices.has(blockType)) {
        blockType = babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(choices.keys())[0];
      }

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_ui_ButtonGroup__WEBPACK_IMPORTED_MODULE_18__["default"], {
        key: name
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_ui_Dropdown__WEBPACK_IMPORTED_MODULE_19__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, toolbarConfig.extraProps, {
        choices: choices,
        selectedKey: blockType,
        onChange: this._selectBlockType
      })));
    }
  }, {
    key: '_renderBlockTypeButtons',
    value: function _renderBlockTypeButtons(name, toolbarConfig) {
      var _this4 = this;

      var blockType = this._getCurrentBlockType();

      var buttons = (toolbarConfig.BLOCK_TYPE_BUTTONS || []).map(function (type, index) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_StyleButton__WEBPACK_IMPORTED_MODULE_16__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, toolbarConfig.extraProps, {
          key: String(index),
          isActive: type.style === blockType,
          label: type.label,
          onToggle: _this4._toggleBlockType,
          style: type.style,
          className: type.className
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_ui_ButtonGroup__WEBPACK_IMPORTED_MODULE_18__["default"], {
        key: name
      }, buttons);
    }
  }, {
    key: '_renderInlineStyleButtons',
    value: function _renderInlineStyleButtons(name, toolbarConfig) {
      var _this5 = this;

      var editorState = this.props.editorState;
      var currentStyle = editorState.getCurrentInlineStyle();
      var buttons = (toolbarConfig.INLINE_STYLE_BUTTONS || []).map(function (type, index) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_StyleButton__WEBPACK_IMPORTED_MODULE_16__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, toolbarConfig.extraProps, {
          key: String(index),
          isActive: currentStyle.has(type.style),
          label: type.label,
          onToggle: _this5._toggleInlineStyle,
          style: type.style,
          className: type.className
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_ui_ButtonGroup__WEBPACK_IMPORTED_MODULE_18__["default"], {
        key: name
      }, buttons);
    }
  }, {
    key: '_renderLinkButtons',
    value: function _renderLinkButtons(name, toolbarConfig) {
      var editorState = this.props.editorState;
      var selection = editorState.getSelection();

      var entity = this._getEntityAtCursor();

      var hasSelection = !selection.isCollapsed();
      var isCursorOnLink = entity != null && entity.type === draft_js_utils__WEBPACK_IMPORTED_MODULE_14__["ENTITY_TYPE"].LINK;
      var shouldShowLinkButton = hasSelection || isCursorOnLink;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_ui_ButtonGroup__WEBPACK_IMPORTED_MODULE_18__["default"], {
        key: name
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_ui_PopoverIconButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
        label: 'Link',
        iconName: 'link',
        isDisabled: !shouldShowLinkButton,
        showPopover: this.state.showLinkInput,
        onTogglePopover: this._toggleShowLinkInput,
        onSubmit: this._setLink
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_ui_IconButton__WEBPACK_IMPORTED_MODULE_20__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, toolbarConfig.extraProps, {
        label: 'Remove Link',
        iconName: 'remove-link',
        isDisabled: !isCursorOnLink,
        onClick: this._removeLink,
        focusOnClick: false
      })));
    }
  }, {
    key: '_renderImageButton',
    value: function _renderImageButton(name) {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_ui_ButtonGroup__WEBPACK_IMPORTED_MODULE_18__["default"], {
        key: name
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_ui_PopoverIconButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
        label: 'Image',
        iconName: 'image',
        showPopover: this.state.showImageInput,
        onTogglePopover: this._toggleShowImageInput,
        onSubmit: this._setImage
      }));
    }
  }, {
    key: '_renderUndoRedo',
    value: function _renderUndoRedo(name, toolbarConfig) {
      var editorState = this.props.editorState;
      var canUndo = editorState.getUndoStack().size !== 0;
      var canRedo = editorState.getRedoStack().size !== 0;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_ui_ButtonGroup__WEBPACK_IMPORTED_MODULE_18__["default"], {
        key: name
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_ui_IconButton__WEBPACK_IMPORTED_MODULE_20__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, toolbarConfig.extraProps, {
        label: 'Undo',
        iconName: 'undo',
        isDisabled: !canUndo,
        onClick: this._undo,
        focusOnClick: false
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_ui_IconButton__WEBPACK_IMPORTED_MODULE_20__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, toolbarConfig.extraProps, {
        label: 'Redo',
        iconName: 'redo',
        isDisabled: !canRedo,
        onClick: this._redo,
        focusOnClick: false
      })));
    }
  }, {
    key: '_onKeypress',
    value: function _onKeypress(event, eventFlags) {
      // Catch cmd+k for use with link insertion.
      if (Object(draft_js_lib_KeyBindingUtil__WEBPACK_IMPORTED_MODULE_10__["hasCommandModifier"])(event) && event.keyCode === 75) {
        var _editorState = this.props.editorState;

        if (!_editorState.getSelection().isCollapsed()) {
          this.setState({
            showLinkInput: true
          });
          eventFlags.wasHandled = true;
        }
      }
    }
  }, {
    key: '_toggleShowLinkInput',
    value: function _toggleShowLinkInput(event) {
      var isShowing = this.state.showLinkInput; // If this is a hide request, decide if we should focus the editor.

      if (isShowing) {
        var shouldFocusEditor = true;

        if (event && event.type === 'click') {
          // TODO: Use a better way to get the editor root node.
          var editorRoot = react_dom__WEBPACK_IMPORTED_MODULE_12___default.a.findDOMNode(this).parentNode;
          var _document = document,
              activeElement = _document.activeElement;
          var wasClickAway = activeElement == null || activeElement === document.body;

          if (!wasClickAway && !editorRoot.contains(activeElement)) {
            shouldFocusEditor = false;
          }
        }

        if (shouldFocusEditor) {
          this.props.focusEditor();
        }
      }

      this.setState({
        showLinkInput: !isShowing
      });
    }
  }, {
    key: '_toggleShowImageInput',
    value: function _toggleShowImageInput(event) {
      var isShowing = this.state.showImageInput; // If this is a hide request, decide if we should focus the editor.

      if (isShowing) {
        var shouldFocusEditor = true;

        if (event && event.type === 'click') {
          // TODO: Use a better way to get the editor root node.
          var editorRoot = react_dom__WEBPACK_IMPORTED_MODULE_12___default.a.findDOMNode(this).parentNode;
          var _document2 = document,
              activeElement = _document2.activeElement;
          var wasClickAway = activeElement == null || activeElement === document.body;

          if (!wasClickAway && !editorRoot.contains(activeElement)) {
            shouldFocusEditor = false;
          }
        }

        if (shouldFocusEditor) {
          this.props.focusEditor();
        }
      }

      this.setState({
        showImageInput: !isShowing
      });
    }
  }, {
    key: '_setImage',
    value: function _setImage(src) {
      var editorState = this.props.editorState;
      var contentState = editorState.getCurrentContent();
      var selection = editorState.getSelection();
      contentState = contentState.createEntity(draft_js_utils__WEBPACK_IMPORTED_MODULE_14__["ENTITY_TYPE"].IMAGE, 'IMMUTABLE', {
        src: src
      });
      var entityKey = contentState.getLastCreatedEntityKey();
      var newContentState = draft_js__WEBPACK_IMPORTED_MODULE_13__["Modifier"].insertText(contentState, selection, ' ', null, entityKey);
      this.setState({
        showImageInput: false
      });
      this.props.onChange(draft_js__WEBPACK_IMPORTED_MODULE_13__["EditorState"].push(editorState, newContentState));

      this._focusEditor();
    }
  }, {
    key: '_setLink',
    value: function _setLink(url) {
      var editorState = this.props.editorState;
      var contentState = editorState.getCurrentContent();
      var selection = editorState.getSelection();
      contentState = contentState.createEntity(draft_js_utils__WEBPACK_IMPORTED_MODULE_14__["ENTITY_TYPE"].LINK, 'MUTABLE', {
        url: url
      });
      var entityKey = contentState.getLastCreatedEntityKey();
      var newEditorState = draft_js__WEBPACK_IMPORTED_MODULE_13__["EditorState"].push(editorState, contentState);
      this.setState({
        showLinkInput: false
      });
      this.props.onChange(draft_js__WEBPACK_IMPORTED_MODULE_13__["RichUtils"].toggleLink(newEditorState, selection, entityKey));

      this._focusEditor();
    }
  }, {
    key: '_removeLink',
    value: function _removeLink() {
      var editorState = this.props.editorState;
      var entity = Object(_getEntityAtCursor__WEBPACK_IMPORTED_MODULE_21__["default"])(editorState);

      if (entity != null) {
        var blockKey = entity.blockKey,
            startOffset = entity.startOffset,
            endOffset = entity.endOffset;
        this.props.onChange(Object(_clearEntityForRange__WEBPACK_IMPORTED_MODULE_22__["default"])(editorState, blockKey, startOffset, endOffset));
      }
    }
  }, {
    key: '_getEntityAtCursor',
    value: function _getEntityAtCursor() {
      var editorState = this.props.editorState;
      var contentState = editorState.getCurrentContent();
      var entity = Object(_getEntityAtCursor__WEBPACK_IMPORTED_MODULE_21__["default"])(editorState);
      return entity == null ? null : contentState.getEntity(entity.entityKey);
    }
  }, {
    key: '_getCurrentBlockType',
    value: function _getCurrentBlockType() {
      var editorState = this.props.editorState;
      var selection = editorState.getSelection();
      return editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
    }
  }, {
    key: '_selectBlockType',
    value: function _selectBlockType() {
      this._toggleBlockType.apply(this, arguments);

      this._focusEditor();
    }
  }, {
    key: '_toggleBlockType',
    value: function _toggleBlockType(blockType) {
      this.props.onChange(draft_js__WEBPACK_IMPORTED_MODULE_13__["RichUtils"].toggleBlockType(this.props.editorState, blockType));
    }
  }, {
    key: '_toggleInlineStyle',
    value: function _toggleInlineStyle(inlineStyle) {
      this.props.onChange(draft_js__WEBPACK_IMPORTED_MODULE_13__["RichUtils"].toggleInlineStyle(this.props.editorState, inlineStyle));
    }
  }, {
    key: '_undo',
    value: function _undo() {
      var editorState = this.props.editorState;
      this.props.onChange(draft_js__WEBPACK_IMPORTED_MODULE_13__["EditorState"].undo(editorState));
    }
  }, {
    key: '_redo',
    value: function _redo() {
      var editorState = this.props.editorState;
      this.props.onChange(draft_js__WEBPACK_IMPORTED_MODULE_13__["EditorState"].redo(editorState));
    }
  }, {
    key: '_focusEditor',
    value: function _focusEditor() {
      var _this6 = this; // Hacky: Wait to focus the editor so we don't lose selection.


      setTimeout(function () {
        _this6.props.focusEditor();
      }, 50);
    }
  }]);

  return EditorToolbar;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (EditorToolbar);

/***/ }),

/***/ "./node_modules/react-rte/lib/lib/EditorToolbarConfig.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-rte/lib/lib/EditorToolbarConfig.js ***!
  \***************************************************************/
/*! exports provided: INLINE_STYLE_BUTTONS, BLOCK_TYPE_DROPDOWN, BLOCK_TYPE_BUTTONS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INLINE_STYLE_BUTTONS", function() { return INLINE_STYLE_BUTTONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_TYPE_DROPDOWN", function() { return BLOCK_TYPE_DROPDOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_TYPE_BUTTONS", function() { return BLOCK_TYPE_BUTTONS; });
var INLINE_STYLE_BUTTONS = [{
  label: 'Bold',
  style: 'BOLD'
}, {
  label: 'Italic',
  style: 'ITALIC'
}, {
  label: 'Strikethrough',
  style: 'STRIKETHROUGH'
}, {
  label: 'Monospace',
  style: 'CODE'
}, {
  label: 'Underline',
  style: 'UNDERLINE'
}];
var BLOCK_TYPE_DROPDOWN = [{
  label: 'Normal',
  style: 'unstyled'
}, {
  label: 'Heading Large',
  style: 'header-one'
}, {
  label: 'Heading Medium',
  style: 'header-two'
}, {
  label: 'Heading Small',
  style: 'header-three'
}, {
  label: 'Code Block',
  style: 'code-block'
}];
var BLOCK_TYPE_BUTTONS = [{
  label: 'UL',
  style: 'unordered-list-item'
}, {
  label: 'OL',
  style: 'ordered-list-item'
}, {
  label: 'Blockquote',
  style: 'blockquote'
}];
var EditorToolbarConfig = {
  display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'IMAGE_BUTTON', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
  INLINE_STYLE_BUTTONS: INLINE_STYLE_BUTTONS,
  BLOCK_TYPE_DROPDOWN: BLOCK_TYPE_DROPDOWN,
  BLOCK_TYPE_BUTTONS: BLOCK_TYPE_BUTTONS
};
/* harmony default export */ __webpack_exports__["default"] = (EditorToolbarConfig);

/***/ }),

/***/ "./node_modules/react-rte/lib/lib/EditorValue.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-rte/lib/lib/EditorValue.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "babel-runtime/helpers/defineProperty");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var draft_js_export_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! draft-js-export-html */ "draft-js-export-html");
/* harmony import */ var draft_js_export_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(draft_js_export_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var draft_js_import_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! draft-js-import-html */ "draft-js-import-html");
/* harmony import */ var draft_js_import_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(draft_js_import_html__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var draft_js_export_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! draft-js-export-markdown */ "draft-js-export-markdown");
/* harmony import */ var draft_js_export_markdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(draft_js_export_markdown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var draft_js_import_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! draft-js-import-markdown */ "draft-js-import-markdown");
/* harmony import */ var draft_js_import_markdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(draft_js_import_markdown__WEBPACK_IMPORTED_MODULE_8__);










var EditorValue = function () {
  function EditorValue(editorState) {
    var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, EditorValue);

    this._cache = cache;
    this._editorState = editorState;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(EditorValue, [{
    key: 'getEditorState',
    value: function getEditorState() {
      return this._editorState;
    }
  }, {
    key: 'setEditorState',
    value: function setEditorState(editorState) {
      return this._editorState === editorState ? this : new EditorValue(editorState);
    }
  }, {
    key: 'toString',
    value: function toString(format, options) {
      var fromCache = this._cache[format];

      if (fromCache != null) {
        return fromCache;
      }

      return this._cache[format] = _toString(this.getEditorState(), format, options);
    }
  }, {
    key: 'setContentFromString',
    value: function setContentFromString(markup, format, options) {
      var editorState = draft_js__WEBPACK_IMPORTED_MODULE_4__["EditorState"].push(this._editorState, fromString(markup, format, options), 'secondary-paste');
      return new EditorValue(editorState, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, format, markup));
    }
  }], [{
    key: 'createEmpty',
    value: function createEmpty(decorator) {
      var editorState = draft_js__WEBPACK_IMPORTED_MODULE_4__["EditorState"].createEmpty(decorator);
      return new EditorValue(editorState);
    }
  }, {
    key: 'createFromState',
    value: function createFromState(editorState) {
      return new EditorValue(editorState);
    }
  }, {
    key: 'createFromString',
    value: function createFromString(markup, format, decorator, options) {
      var contentState = fromString(markup, format, options);
      var editorState = draft_js__WEBPACK_IMPORTED_MODULE_4__["EditorState"].createWithContent(contentState, decorator);
      return new EditorValue(editorState, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, format, markup));
    }
  }]);

  return EditorValue;
}();

/* harmony default export */ __webpack_exports__["default"] = (EditorValue);

function _toString(editorState, format, options) {
  var contentState = editorState.getCurrentContent();

  switch (format) {
    case 'html':
      {
        return Object(draft_js_export_html__WEBPACK_IMPORTED_MODULE_5__["stateToHTML"])(contentState, options);
      }

    case 'markdown':
      {
        return Object(draft_js_export_markdown__WEBPACK_IMPORTED_MODULE_7__["stateToMarkdown"])(contentState);
      }

    case 'raw':
      {
        return babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_4__["convertToRaw"])(contentState));
      }

    default:
      {
        throw new Error('Format not supported: ' + format);
      }
  }
}

function fromString(markup, format, options) {
  switch (format) {
    case 'html':
      {
        return Object(draft_js_import_html__WEBPACK_IMPORTED_MODULE_6__["stateFromHTML"])(markup, options);
      }

    case 'markdown':
      {
        return Object(draft_js_import_markdown__WEBPACK_IMPORTED_MODULE_8__["stateFromMarkdown"])(markup, options);
      }

    case 'raw':
      {
        return Object(draft_js__WEBPACK_IMPORTED_MODULE_4__["convertFromRaw"])(JSON.parse(markup));
      }

    default:
      {
        throw new Error('Format not supported: ' + format);
      }
  }
}

/***/ }),

/***/ "./node_modules/react-rte/lib/lib/ImageDecorator.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-rte/lib/lib/ImageDecorator.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_ImageSpan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ImageSpan */ "./node_modules/react-rte/lib/ui/ImageSpan.js");
/* harmony import */ var draft_js_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! draft-js-utils */ "draft-js-utils");
/* harmony import */ var draft_js_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(draft_js_utils__WEBPACK_IMPORTED_MODULE_1__);



function findImageEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();

    if (entityKey != null) {
      var entity = contentState ? contentState.getEntity(entityKey) : null;
      return entity != null && entity.getType() === draft_js_utils__WEBPACK_IMPORTED_MODULE_1__["ENTITY_TYPE"].IMAGE;
    }

    return false;
  }, callback);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  strategy: findImageEntities,
  component: _ui_ImageSpan__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./node_modules/react-rte/lib/lib/LinkDecorator.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-rte/lib/lib/LinkDecorator.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var draft_js_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! draft-js-utils */ "draft-js-utils");
/* harmony import */ var draft_js_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(draft_js_utils__WEBPACK_IMPORTED_MODULE_1__);



function Link(props) {
  var _props$contentState$g = props.contentState.getEntity(props.entityKey).getData(),
      url = _props$contentState$g.url;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('a', {
    href: url
  }, props.children);
}

function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();

    if (entityKey != null) {
      var entity = contentState ? contentState.getEntity(entityKey) : null;
      return entity != null && entity.getType() === draft_js_utils__WEBPACK_IMPORTED_MODULE_1__["ENTITY_TYPE"].LINK;
    }

    return false;
  }, callback);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  strategy: findLinkEntities,
  component: Link
});

/***/ }),

/***/ "./node_modules/react-rte/lib/lib/StyleButton.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-rte/lib/lib/StyleButton.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ui_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/IconButton */ "./node_modules/react-rte/lib/ui/IconButton.js");
/* harmony import */ var class_autobind__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! class-autobind */ "class-autobind");
/* harmony import */ var class_autobind__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(class_autobind__WEBPACK_IMPORTED_MODULE_9__);











var StyleButton = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(StyleButton, _Component);

  function StyleButton() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, StyleButton);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (StyleButton.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(StyleButton)).apply(this, arguments));

    class_autobind__WEBPACK_IMPORTED_MODULE_9___default()(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(StyleButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          onToggle = _props.onToggle,
          otherProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props, ['style', 'onToggle']); // eslint-disable-line no-unused-vars


      var iconName = style.toLowerCase(); // `focusOnClick` will prevent the editor from losing focus when a control
      // button is clicked.

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ui_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, otherProps, {
        iconName: iconName,
        onClick: this._onClick,
        focusOnClick: false
      }));
    }
  }, {
    key: '_onClick',
    value: function _onClick() {
      this.props.onToggle(this.props.style);
    }
  }]);

  return StyleButton;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StyleButton);

/***/ }),

/***/ "./node_modules/react-rte/lib/lib/changeBlockDepth.js":
/*!************************************************************!*\
  !*** ./node_modules/react-rte/lib/lib/changeBlockDepth.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return changeBlockDepth; });
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_0__);

function changeBlockDepth(editorState, blockKey, newDepth) {
  var content = editorState.getCurrentContent();
  var block = content.getBlockForKey(blockKey);
  var depth = block.getDepth();

  if (depth === newDepth) {
    return editorState;
  }

  var newBlock = block.set('depth', newDepth);
  var newContent = content.merge({
    blockMap: content.getBlockMap().set(blockKey, newBlock)
  });
  return draft_js__WEBPACK_IMPORTED_MODULE_0__["EditorState"].push(editorState, newContent, 'adjust-depth');
}

/***/ }),

/***/ "./node_modules/react-rte/lib/lib/changeBlockType.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-rte/lib/lib/changeBlockType.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return changeBlockType; });
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_0__);

function changeBlockType(editorState, blockKey, newType) {
  var content = editorState.getCurrentContent();
  var block = content.getBlockForKey(blockKey);
  var type = block.getType();

  if (type === newType) {
    return editorState;
  }

  var newBlock = block.set('type', newType);
  var newContent = content.merge({
    blockMap: content.getBlockMap().set(blockKey, newBlock)
  });
  return draft_js__WEBPACK_IMPORTED_MODULE_0__["EditorState"].push(editorState, newContent, 'change-block-type');
}

/***/ }),

/***/ "./node_modules/react-rte/lib/lib/clearEntityForRange.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-rte/lib/lib/clearEntityForRange.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return clearEntityForRange; });
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_0__);

function clearEntityForRange(editorState, blockKey, startOffset, endOffset) {
  var contentState = editorState.getCurrentContent();
  var blockMap = contentState.getBlockMap();
  var block = blockMap.get(blockKey);
  var charList = block.getCharacterList();
  var newCharList = charList.map(function (char, i) {
    if (i >= startOffset && i < endOffset) {
      return draft_js__WEBPACK_IMPORTED_MODULE_0__["CharacterMetadata"].applyEntity(char, null);
    } else {
      return char;
    }
  });
  var newBlock = block.set('characterList', newCharList);
  var newBlockMap = blockMap.set(blockKey, newBlock);
  var newContentState = contentState.set('blockMap', newBlockMap);
  return draft_js__WEBPACK_IMPORTED_MODULE_0__["EditorState"].push(editorState, newContentState, 'apply-entity');
}

/***/ }),

/***/ "./node_modules/react-rte/lib/lib/composite.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-rte/lib/lib/composite.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function composite(defaultFunc, customFunc) {
  return function (input) {
    if (customFunc) {
      var result = customFunc(input);

      if (result != null) {
        return result;
      }
    }

    return defaultFunc(input);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (composite);

/***/ }),

/***/ "./node_modules/react-rte/lib/lib/getBlocksInSelection.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-rte/lib/lib/getBlocksInSelection.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBlocksInSelection; });
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);


function getBlocksInSelection(editorState) {
  var contentState = editorState.getCurrentContent();
  var blockMap = contentState.getBlockMap();
  var selection = editorState.getSelection();

  if (selection.isCollapsed()) {
    return new immutable__WEBPACK_IMPORTED_MODULE_1__["OrderedMap"]();
  }

  var startKey = selection.getStartKey();
  var endKey = selection.getEndKey();

  if (startKey === endKey) {
    return new immutable__WEBPACK_IMPORTED_MODULE_1__["OrderedMap"]({
      startKey: contentState.getBlockForKey(startKey)
    });
  }

  var blocksUntilEnd = blockMap.takeUntil(function (block, key) {
    return key === endKey;
  });
  return blocksUntilEnd.skipUntil(function (block, key) {
    return key === startKey;
  });
}

/***/ }),

/***/ "./node_modules/react-rte/lib/lib/getEntityAtCursor.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-rte/lib/lib/getEntityAtCursor.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getEntityAtCursor; });
function getEntityAtOffset(block, offset) {
  var entityKey = block.getEntityAt(offset);

  if (entityKey == null) {
    return null;
  }

  var startOffset = offset;

  while (startOffset > 0 && block.getEntityAt(startOffset - 1) === entityKey) {
    startOffset -= 1;
  }

  var endOffset = startOffset;
  var blockLength = block.getLength();

  while (endOffset < blockLength && block.getEntityAt(endOffset + 1) === entityKey) {
    endOffset += 1;
  }

  return {
    entityKey: entityKey,
    blockKey: block.getKey(),
    startOffset: startOffset,
    endOffset: endOffset + 1
  };
}

function getEntityAtCursor(editorState) {
  var selection = editorState.getSelection();
  var startKey = selection.getStartKey();
  var startBlock = editorState.getCurrentContent().getBlockForKey(startKey);
  var startOffset = selection.getStartOffset();

  if (selection.isCollapsed()) {
    // Get the entity before the cursor (unless the cursor is at the start).
    return getEntityAtOffset(startBlock, startOffset === 0 ? startOffset : startOffset - 1);
  }

  if (startKey !== selection.getEndKey()) {
    return null;
  }

  var endOffset = selection.getEndOffset();
  var startEntityKey = startBlock.getEntityAt(startOffset);

  for (var i = startOffset; i < endOffset; i++) {
    var _entityKey = startBlock.getEntityAt(i);

    if (_entityKey == null || _entityKey !== startEntityKey) {
      return null;
    }
  }

  return {
    entityKey: startEntityKey,
    blockKey: startBlock.getKey(),
    startOffset: startOffset,
    endOffset: endOffset
  };
}

/***/ }),

/***/ "./node_modules/react-rte/lib/lib/insertBlockAfter.js":
/*!************************************************************!*\
  !*** ./node_modules/react-rte/lib/lib/insertBlockAfter.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return insertBlockAfter; });
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_0__);

function insertBlockAfter(editorState, blockKey, newType) {
  var content = editorState.getCurrentContent();
  var blockMap = content.getBlockMap();
  var block = blockMap.get(blockKey);
  var blocksBefore = blockMap.toSeq().takeUntil(function (v) {
    return v === block;
  });
  var blocksAfter = blockMap.toSeq().skipUntil(function (v) {
    return v === block;
  }).rest();
  var newBlockKey = Object(draft_js__WEBPACK_IMPORTED_MODULE_0__["genKey"])();
  var newBlock = new draft_js__WEBPACK_IMPORTED_MODULE_0__["ContentBlock"]({
    key: newBlockKey,
    type: newType,
    text: '',
    characterList: block.getCharacterList().slice(0, 0),
    depth: 0
  });
  var newBlockMap = blocksBefore.concat([[blockKey, block], [newBlockKey, newBlock]], blocksAfter).toOrderedMap();
  var selection = editorState.getSelection();
  var newContent = content.merge({
    blockMap: newBlockMap,
    selectionBefore: selection,
    selectionAfter: selection.merge({
      anchorKey: newBlockKey,
      anchorOffset: 0,
      focusKey: newBlockKey,
      focusOffset: 0,
      isBackward: false
    })
  });
  return draft_js__WEBPACK_IMPORTED_MODULE_0__["EditorState"].push(editorState, newContent, 'split-block');
}

/***/ }),

/***/ "./node_modules/react-rte/lib/lib/isListItem.js":
/*!******************************************************!*\
  !*** ./node_modules/react-rte/lib/lib/isListItem.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isListItem; });
/* harmony import */ var draft_js_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! draft-js-utils */ "draft-js-utils");
/* harmony import */ var draft_js_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(draft_js_utils__WEBPACK_IMPORTED_MODULE_0__);

function isListItem(block) {
  var blockType = block.getType();
  return blockType === draft_js_utils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].UNORDERED_LIST_ITEM || blockType === draft_js_utils__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].ORDERED_LIST_ITEM;
}

/***/ }),

/***/ "./node_modules/react-rte/lib/ui/Button.css":
/*!**************************************************!*\
  !*** ./node_modules/react-rte/lib/ui/Button.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "Button__root___3atw7"
};

/***/ }),

/***/ "./node_modules/react-rte/lib/ui/Button.js":
/*!*************************************************!*\
  !*** ./node_modules/react-rte/lib/ui/Button.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var class_autobind__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! class-autobind */ "class-autobind");
/* harmony import */ var class_autobind__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(class_autobind__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Button.css */ "./node_modules/react-rte/lib/ui/Button.css");
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_10__);












var Button = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Button, _Component);

  function Button() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Button);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Button.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(Button)).apply(this, arguments));

    class_autobind__WEBPACK_IMPORTED_MODULE_9___default()(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Button, [{
    key: 'render',
    value: function render() {
      var props = this.props;

      var className = props.className,
          isDisabled = props.isDisabled,
          focusOnClick = props.focusOnClick,
          formSubmit = props.formSubmit,
          otherProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(props, ['className', 'isDisabled', 'focusOnClick', 'formSubmit']);

      className = classnames__WEBPACK_IMPORTED_MODULE_8___default()(className, _Button_css__WEBPACK_IMPORTED_MODULE_10___default.a.root);
      var onMouseDown = focusOnClick === false ? this._onMouseDownPreventDefault : props.onMouseDown;
      var type = formSubmit ? 'submit' : 'button';
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('button', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        type: type
      }, otherProps, {
        onMouseDown: onMouseDown,
        className: className,
        disabled: isDisabled
      }), props.children);
    }
  }, {
    key: '_onMouseDownPreventDefault',
    value: function _onMouseDownPreventDefault(event) {
      event.preventDefault();
      var onMouseDown = this.props.onMouseDown;

      if (onMouseDown != null) {
        onMouseDown(event);
      }
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./node_modules/react-rte/lib/ui/ButtonGroup.css":
/*!*******************************************************!*\
  !*** ./node_modules/react-rte/lib/ui/ButtonGroup.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "ButtonGroup__root___3n3-B"
};

/***/ }),

/***/ "./node_modules/react-rte/lib/ui/ButtonGroup.js":
/*!******************************************************!*\
  !*** ./node_modules/react-rte/lib/ui/ButtonGroup.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonGroup; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ButtonGroup_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ButtonGroup.css */ "./node_modules/react-rte/lib/ui/ButtonGroup.css");
/* harmony import */ var _ButtonGroup_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ButtonGroup_css__WEBPACK_IMPORTED_MODULE_3__);




function ButtonGroup(props) {
  var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.className, _ButtonGroup_css__WEBPACK_IMPORTED_MODULE_3___default.a.root);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    className: className
  }));
}

/***/ }),

/***/ "./node_modules/react-rte/lib/ui/ButtonWrap.css":
/*!******************************************************!*\
  !*** ./node_modules/react-rte/lib/ui/ButtonWrap.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "ButtonWrap__root___27BLJ"
};

/***/ }),

/***/ "./node_modules/react-rte/lib/ui/ButtonWrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-rte/lib/ui/ButtonWrap.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonWrap; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ButtonWrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ButtonWrap.css */ "./node_modules/react-rte/lib/ui/ButtonWrap.css");
/* harmony import */ var _ButtonWrap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ButtonWrap_css__WEBPACK_IMPORTED_MODULE_3__);




function ButtonWrap(props) {
  var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.className, _ButtonWrap_css__WEBPACK_IMPORTED_MODULE_3___default.a.root);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    className: className
  }));
}

/***/ }),

/***/ "./node_modules/react-rte/lib/ui/Dropdown.css":
/*!****************************************************!*\
  !*** ./node_modules/react-rte/lib/ui/Dropdown.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "Dropdown__root___33ZpU",
	"value": "Dropdown__value___2Cb8j"
};

/***/ }),

/***/ "./node_modules/react-rte/lib/ui/Dropdown.js":
/*!***************************************************!*\
  !*** ./node_modules/react-rte/lib/ui/Dropdown.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/array/from */ "babel-runtime/core-js/array/from");
/* harmony import */ var babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var class_autobind__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! class-autobind */ "class-autobind");
/* harmony import */ var class_autobind__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(class_autobind__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Dropdown_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Dropdown.css */ "./node_modules/react-rte/lib/ui/Dropdown.css");
/* harmony import */ var _Dropdown_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Dropdown_css__WEBPACK_IMPORTED_MODULE_12__);














var Dropdown = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Dropdown, _Component);

  function Dropdown() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Dropdown);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, (Dropdown.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default()(Dropdown)).apply(this, arguments));

    class_autobind__WEBPACK_IMPORTED_MODULE_10___default()(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Dropdown, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          choices = _props.choices,
          selectedKey = _props.selectedKey,
          className = _props.className,
          otherProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(_props, ['choices', 'selectedKey', 'className']);

      className = classnames__WEBPACK_IMPORTED_MODULE_11___default()(className, _Dropdown_css__WEBPACK_IMPORTED_MODULE_12___default.a.root);
      var selectedItem = selectedKey == null ? null : choices.get(selectedKey);
      var selectedValue = selectedItem && selectedItem.label || '';
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('span', {
        className: className,
        title: selectedValue
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('select', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, otherProps, {
        value: selectedKey,
        onChange: this._onChange
      }), this._renderChoices()), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('span', {
        className: _Dropdown_css__WEBPACK_IMPORTED_MODULE_12___default.a.value
      }, selectedValue));
    }
  }, {
    key: '_onChange',
    value: function _onChange(event) {
      var value = event.target.value;
      this.props.onChange(value);
    }
  }, {
    key: '_renderChoices',
    value: function _renderChoices() {
      var choices = this.props.choices;

      var entries = babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(choices.entries());

      return entries.map(function (_ref) {
        var _ref2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
            key = _ref2[0],
            _ref2$ = _ref2[1],
            label = _ref2$.label,
            className = _ref2$.className;

        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('option', {
          key: key,
          value: key,
          className: className
        }, label);
      });
    }
  }]);

  return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./node_modules/react-rte/lib/ui/IconButton.css":
/*!******************************************************!*\
  !*** ./node_modules/react-rte/lib/ui/IconButton.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "IconButton__root___3ubci",
	"icon": "IconButton__icon___9CL7y",
	"isActive": "IconButton__isActive___zr1kx",
	"icon-undo": "IconButton__icon-undo___1Rdae IconButton__icon___9CL7y",
	"icon-redo": "IconButton__icon-redo___2UVfm IconButton__icon___9CL7y",
	"icon-unordered-list-item": "IconButton__icon-unordered-list-item___2i-zx IconButton__icon___9CL7y",
	"icon-ordered-list-item": "IconButton__icon-ordered-list-item___39BUO IconButton__icon___9CL7y",
	"icon-blockquote": "IconButton__icon-blockquote___2o0Lb IconButton__icon___9CL7y",
	"icon-bold": "IconButton__icon-bold___YBIbn IconButton__icon___9CL7y",
	"icon-italic": "IconButton__icon-italic___2NsSN IconButton__icon___9CL7y",
	"icon-underline": "IconButton__icon-underline___12oxS IconButton__icon___9CL7y",
	"icon-strikethrough": "IconButton__icon-strikethrough___1CON7 IconButton__icon___9CL7y",
	"icon-code": "IconButton__icon-code___2MVMO IconButton__icon___9CL7y",
	"icon-link": "IconButton__icon-link___3kMB5 IconButton__icon___9CL7y",
	"icon-remove-link": "IconButton__icon-remove-link___3pyM5 IconButton__icon___9CL7y",
	"icon-image": "IconButton__icon-image___lBd3h IconButton__icon___9CL7y",
	"icon-cancel": "IconButton__icon-cancel___2KCIf IconButton__icon___9CL7y",
	"icon-accept": "IconButton__icon-accept___2qMrA IconButton__icon___9CL7y"
};

/***/ }),

/***/ "./node_modules/react-rte/lib/ui/IconButton.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-rte/lib/ui/IconButton.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "babel-runtime/helpers/defineProperty");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Button */ "./node_modules/react-rte/lib/ui/Button.js");
/* harmony import */ var _ButtonWrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ButtonWrap */ "./node_modules/react-rte/lib/ui/ButtonWrap.js");
/* harmony import */ var _IconButton_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./IconButton.css */ "./node_modules/react-rte/lib/ui/IconButton.css");
/* harmony import */ var _IconButton_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_IconButton_css__WEBPACK_IMPORTED_MODULE_12__);














var IconButton = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(IconButton, _Component);

  function IconButton() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, IconButton);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, (IconButton.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default()(IconButton)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(IconButton, [{
    key: 'render',
    value: function render() {
      var _cx;

      var props = this.props;

      var className = props.className,
          iconName = props.iconName,
          label = props.label,
          children = props.children,
          isActive = props.isActive,
          otherProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(props, ['className', 'iconName', 'label', 'children', 'isActive']);

      className = classnames__WEBPACK_IMPORTED_MODULE_9___default()(className, (_cx = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_cx, _IconButton_css__WEBPACK_IMPORTED_MODULE_12___default.a.root, true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_cx, _IconButton_css__WEBPACK_IMPORTED_MODULE_12___default.a.isActive, isActive), _cx));
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ButtonWrap__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_10__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, otherProps, {
        title: label,
        className: className
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement('span', {
        className: _IconButton_css__WEBPACK_IMPORTED_MODULE_12___default.a['icon-' + iconName]
      })), children);
    }
  }]);

  return IconButton;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (IconButton);

/***/ }),

/***/ "./node_modules/react-rte/lib/ui/ImageSpan.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-rte/lib/ui/ImageSpan.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "ImageSpan__root___1yT5R",
	"resize": "ImageSpan__resize___KmpIr",
	"resizeHandle": "ImageSpan__resizeHandle___p1wOb"
};

/***/ }),

/***/ "./node_modules/react-rte/lib/ui/ImageSpan.js":
/*!****************************************************!*\
  !*** ./node_modules/react-rte/lib/ui/ImageSpan.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var class_autobind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! class-autobind */ "class-autobind");
/* harmony import */ var class_autobind__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(class_autobind__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ImageSpan_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ImageSpan.css */ "./node_modules/react-rte/lib/ui/ImageSpan.css");
/* harmony import */ var _ImageSpan_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ImageSpan_css__WEBPACK_IMPORTED_MODULE_9__);









 // TODO: Use a more specific type here.

var ImageSpan = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ImageSpan, _Component);

  function ImageSpan(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ImageSpan);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (ImageSpan.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(ImageSpan)).call(this, props));

    class_autobind__WEBPACK_IMPORTED_MODULE_5___default()(_this);
    var entity = props.contentState.getEntity(props.entityKey);

    var _entity$getData = entity.getData(),
        width = _entity$getData.width,
        height = _entity$getData.height;

    _this.state = {
      width: width,
      height: height
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ImageSpan, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _state = this.state,
          width = _state.width,
          height = _state.height;
      var entity = this.props.contentState.getEntity(this.props.entityKey);
      var image = new Image();

      var _entity$getData2 = entity.getData(),
          src = _entity$getData2.src;

      image.src = src;

      image.onload = function () {
        if (width == null || height == null) {
          // TODO: isMounted?
          _this2.setState({
            width: image.width,
            height: image.height
          });

          draft_js__WEBPACK_IMPORTED_MODULE_8__["Entity"].mergeData(_this2.props.entityKey, {
            width: image.width,
            height: image.height,
            originalWidth: image.width,
            originalHeight: image.height
          });
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          width = _state2.width,
          height = _state2.height;
      var className = this.props.className;
      var entity = this.props.contentState.getEntity(this.props.entityKey);

      var _entity$getData3 = entity.getData(),
          src = _entity$getData3.src;

      className = classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, _ImageSpan_css__WEBPACK_IMPORTED_MODULE_9___default.a.root);
      var imageStyle = {
        verticalAlign: 'bottom',
        backgroundImage: 'url("' + src + '")',
        backgroundSize: width + 'px ' + height + 'px',
        lineHeight: height + 'px',
        fontSize: height + 'px',
        width: width,
        height: height,
        letterSpacing: width
      };
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('span', {
        className: className,
        style: imageStyle,
        onClick: this._onClick
      }, this.props.children);
    }
  }, {
    key: '_onClick',
    value: function _onClick() {
      console.log('image clicked');
    }
  }, {
    key: '_handleResize',
    value: function _handleResize(event, data) {
      var _data$size = data.size,
          width = _data$size.width,
          height = _data$size.height;
      this.setState({
        width: width,
        height: height
      });
      draft_js__WEBPACK_IMPORTED_MODULE_8__["Entity"].mergeData(this.props.entityKey, {
        width: width,
        height: height
      });
    }
  }]);

  return ImageSpan;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ImageSpan);

/***/ }),

/***/ "./node_modules/react-rte/lib/ui/InputPopover.css":
/*!********************************************************!*\
  !*** ./node_modules/react-rte/lib/ui/InputPopover.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "InputPopover__root___BkRF-",
	"inner": "InputPopover__inner___2eDG8",
	"input": "InputPopover__input___3ao32",
	"buttonGroup": "InputPopover__buttonGroup___AD290"
};

/***/ }),

/***/ "./node_modules/react-rte/lib/ui/InputPopover.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-rte/lib/ui/InputPopover.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IconButton */ "./node_modules/react-rte/lib/ui/IconButton.js");
/* harmony import */ var _ButtonGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ButtonGroup */ "./node_modules/react-rte/lib/ui/ButtonGroup.js");
/* harmony import */ var class_autobind__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! class-autobind */ "class-autobind");
/* harmony import */ var class_autobind__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(class_autobind__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _InputPopover_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./InputPopover.css */ "./node_modules/react-rte/lib/ui/InputPopover.css");
/* harmony import */ var _InputPopover_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_InputPopover_css__WEBPACK_IMPORTED_MODULE_11__);













var InputPopover = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(InputPopover, _Component);

  function InputPopover() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, InputPopover);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (InputPopover.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(InputPopover)).apply(this, arguments));

    class_autobind__WEBPACK_IMPORTED_MODULE_9___default()(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(InputPopover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('click', this._onDocumentClick);
      document.addEventListener('keydown', this._onDocumentKeydown);

      if (this._inputRef) {
        this._inputRef.focus();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this._onDocumentClick);
      document.removeEventListener('keydown', this._onDocumentKeydown);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var className = classnames__WEBPACK_IMPORTED_MODULE_10___default()(props.className, _InputPopover_css__WEBPACK_IMPORTED_MODULE_11___default.a.root);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('div', {
        className: className
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('div', {
        className: _InputPopover_css__WEBPACK_IMPORTED_MODULE_11___default.a.inner
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('input', {
        ref: this._setInputRef,
        type: 'text',
        placeholder: 'https://example.com/',
        className: _InputPopover_css__WEBPACK_IMPORTED_MODULE_11___default.a.input,
        onKeyPress: this._onInputKeyPress
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ButtonGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: _InputPopover_css__WEBPACK_IMPORTED_MODULE_11___default.a.buttonGroup
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: 'Cancel',
        iconName: 'cancel',
        onClick: props.onCancel
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: 'Submit',
        iconName: 'accept',
        onClick: this._onSubmit
      }))));
    }
  }, {
    key: '_setInputRef',
    value: function _setInputRef(inputElement) {
      this._inputRef = inputElement;
    }
  }, {
    key: '_onInputKeyPress',
    value: function _onInputKeyPress(event) {
      if (event.which === 13) {
        // Avoid submitting a <form> somewhere up the element tree.
        event.preventDefault();

        this._onSubmit();
      }
    }
  }, {
    key: '_onSubmit',
    value: function _onSubmit() {
      var value = this._inputRef ? this._inputRef.value : '';
      this.props.onSubmit(value);
    }
  }, {
    key: '_onDocumentClick',
    value: function _onDocumentClick(event) {
      var rootNode = react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.findDOMNode(this);

      if (!rootNode.contains(event.target)) {
        // Here we pass the event so the parent can manage focus.
        this.props.onCancel(event);
      }
    }
  }, {
    key: '_onDocumentKeydown',
    value: function _onDocumentKeydown(event) {
      if (event.keyCode === 27) {
        this.props.onCancel();
      }
    }
  }]);

  return InputPopover;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (InputPopover);

/***/ }),

/***/ "./node_modules/react-rte/lib/ui/PopoverIconButton.js":
/*!************************************************************!*\
  !*** ./node_modules/react-rte/lib/ui/PopoverIconButton.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IconButton */ "./node_modules/react-rte/lib/ui/IconButton.js");
/* harmony import */ var _InputPopover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./InputPopover */ "./node_modules/react-rte/lib/ui/InputPopover.js");
/* harmony import */ var class_autobind__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! class-autobind */ "class-autobind");
/* harmony import */ var class_autobind__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(class_autobind__WEBPACK_IMPORTED_MODULE_10__);












var PopoverIconButton = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(PopoverIconButton, _Component);

  function PopoverIconButton() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, PopoverIconButton);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (PopoverIconButton.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(PopoverIconButton)).apply(this, arguments));

    class_autobind__WEBPACK_IMPORTED_MODULE_10___default()(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(PopoverIconButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onTogglePopover = _props.onTogglePopover,
          showPopover = _props.showPopover,
          props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props, ['onTogglePopover', 'showPopover']); // eslint-disable-line no-unused-vars


      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
        onClick: onTogglePopover
      }), this._renderPopover());
    }
  }, {
    key: '_renderPopover',
    value: function _renderPopover() {
      if (!this.props.showPopover) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_InputPopover__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onSubmit: this._onSubmit,
        onCancel: this._hidePopover
      });
    }
  }, {
    key: '_onSubmit',
    value: function _onSubmit() {
      var _props2;

      (_props2 = this.props).onSubmit.apply(_props2, arguments);
    }
  }, {
    key: '_hidePopover',
    value: function _hidePopover() {
      if (this.props.showPopover) {
        var _props3;

        (_props3 = this.props).onTogglePopover.apply(_props3, arguments);
      }
    }
  }]);

  return PopoverIconButton;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PopoverIconButton);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rte_lib_RichTextEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rte/lib/RichTextEditor */ "./node_modules/react-rte/lib/RichTextEditor.js");
var _jsxFileName = "/Users/franklinrodriguez/Desktop/next-test/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = () => __jsx("div", {
  style: {
    marginBottom: "4rem"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(react_rte_lib_RichTextEditor__WEBPACK_IMPORTED_MODULE_1__["default"], {
  readOnly: true //   rootStyle={rootStyle()}
  ,
  editorStyle: {
    fontFamily: "Open Sans",
    // color: `${color("secondaryBrand")}`,
    // color: "#c2c2c2",
    padding: "3rem 6rem"
  } //   blockRenderMap={Draft.DefaultDraftBlockRenderMap.merge(
  //     Map({
  //       "header-one": {
  //         element: "h3",
  //         wrapper: "<span"
  //       },
  //       "header-two": {
  //         element: "h4",
  //         wrapper: <Text size="h4_new" fontWeight="bold" />
  //       },
  //       "header-three": {
  //         element: "h5",
  //         wrapper: <Text size="h5_new" fontWeight="bold" />
  //       },
  //       "unordered-list-item": {
  //         element: "li",
  //         wrapper: <Text size="body1_new" textAs="ul" />
  //       },
  //       "ordered-list-item": {
  //         element: "li",
  //         wrapper: <Text size="body1_new" textAs="ol" />
  //       },
  //       unstyled: {
  //         element: "div",
  //         wrapper: <Text size="body1_new" textAs="div" />
  //       }
  //     })
  //   )}
  ,
  toolbarStyle: {
    fontFamily: "Open Sans",
    color: "#424d5d"
  } //   toolbarConfig={{
  //     display: [
  //       "INLINE_STYLE_BUTTONS",
  //       "BLOCK_TYPE_BUTTONS",
  //       "LINK_BUTTONS",
  //       "BLOCK_TYPE_DROPDOWN",
  //       "HISTORY_BUTTONS"
  //     ],
  //     INLINE_STYLE_BUTTONS: [
  //       {
  //         label: "Bold",
  //         style: "BOLD",
  //         className: "custom-css-class"
  //       },
  //       { label: "Italic", style: "ITALIC" },
  //       { label: "Underline", style: "UNDERLINE" }
  //     ],
  //     BLOCK_TYPE_DROPDOWN: [
  //       { label: "Normal", style: "unstyled" },
  //       { label: "Heading Large", style: "header-one" },
  //       { label: "Heading Medium", style: "header-two" },
  //       { label: "Heading Small", style: "header-three" }
  //     ],
  //     BLOCK_TYPE_BUTTONS: [
  //       { label: "UL", style: "unordered-list-item" },
  //       { label: "OL", style: "ordered-list-item" }
  //     ]
  //   }}
  ,
  value: react_rte_lib_RichTextEditor__WEBPACK_IMPORTED_MODULE_1__["default"].createValueFromString("- 1st", "markdown"),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/franklinrodriguez/Desktop/next-test/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "babel-runtime/core-js/array/from":
/*!***************************************************!*\
  !*** external "babel-runtime/core-js/array/from" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/array/from");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),

/***/ "babel-runtime/core-js/map":
/*!********************************************!*\
  !*** external "babel-runtime/core-js/map" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/map");

/***/ }),

/***/ "babel-runtime/core-js/object/assign":
/*!******************************************************!*\
  !*** external "babel-runtime/core-js/object/assign" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),

/***/ "babel-runtime/core-js/object/get-prototype-of":
/*!****************************************************************!*\
  !*** external "babel-runtime/core-js/object/get-prototype-of" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ "babel-runtime/helpers/defineProperty":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/defineProperty" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),

/***/ "babel-runtime/helpers/extends":
/*!************************************************!*\
  !*** external "babel-runtime/helpers/extends" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/*!*************************************************!*\
  !*** external "babel-runtime/helpers/inherits" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),

/***/ "babel-runtime/helpers/objectWithoutProperties":
/*!****************************************************************!*\
  !*** external "babel-runtime/helpers/objectWithoutProperties" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/*!******************************************************************!*\
  !*** external "babel-runtime/helpers/possibleConstructorReturn" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "babel-runtime/helpers/slicedToArray":
/*!******************************************************!*\
  !*** external "babel-runtime/helpers/slicedToArray" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),

/***/ "babel-runtime/helpers/typeof":
/*!***********************************************!*\
  !*** external "babel-runtime/helpers/typeof" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),

/***/ "class-autobind":
/*!*********************************!*\
  !*** external "class-autobind" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-autobind");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "draft-js":
/*!***************************!*\
  !*** external "draft-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),

/***/ "draft-js-export-html":
/*!***************************************!*\
  !*** external "draft-js-export-html" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js-export-html");

/***/ }),

/***/ "draft-js-export-markdown":
/*!*******************************************!*\
  !*** external "draft-js-export-markdown" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js-export-markdown");

/***/ }),

/***/ "draft-js-import-html":
/*!***************************************!*\
  !*** external "draft-js-import-html" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js-import-html");

/***/ }),

/***/ "draft-js-import-markdown":
/*!*******************************************!*\
  !*** external "draft-js-import-markdown" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js-import-markdown");

/***/ }),

/***/ "draft-js-utils":
/*!*********************************!*\
  !*** external "draft-js-utils" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js-utils");

/***/ }),

/***/ "draft-js/lib/KeyBindingUtil":
/*!**********************************************!*\
  !*** external "draft-js/lib/KeyBindingUtil" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js/lib/KeyBindingUtil");

/***/ }),

/***/ "draft-js/lib/getDefaultKeyBinding":
/*!****************************************************!*\
  !*** external "draft-js/lib/getDefaultKeyBinding" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js/lib/getDefaultKeyBinding");

/***/ }),

/***/ "draft-js/lib/isSoftNewlineEvent":
/*!**************************************************!*\
  !*** external "draft-js/lib/isSoftNewlineEvent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js/lib/isSoftNewlineEvent");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map