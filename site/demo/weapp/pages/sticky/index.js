(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/sticky/index"], {

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/sticky/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/sticky/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return Index; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js");
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! taro-vantui */ "./node_modules/taro-vantui/dist/index.esm.js");
/* harmony import */ var _components_demo_block_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/demo-block/index */ "./src/components/demo-block/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.scss */ "./src/pages/sticky/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);

















      var Index = /*#__PURE__*/function (_React$Component) {
        _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Index, _React$Component);

        var _super = _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_5___default()(Index);

        function Index() {
          var _this;

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Index);

          _this = _super.call(this);

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "state", {
            container: null,
            scrollTop: 0,
            offsetTop: 0
          });

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onReady", function () {
            _this.setState({
              container: function container() {
                return Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_9__["createSelectorQuery"])().select('#container');
              }
            });
          });

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onScroll", function (event) {
            Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_9__["createSelectorQuery"])().select('#scroller').boundingClientRect(function (res) {
              console.log('#scroller:', res.top);

              _this.setState({
                scrollTop: event.detail.scrollTop,
                offsetTop: res.top
              });
            }).exec();
          });

          return _this;
        }

        _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Index, [{
          key: "render",
          value: function render() {
            var _this$state = this.state,
              container = _this$state.container,
              scrollTop = _this$state.scrollTop,
              offsetTop = _this$state.offsetTop;
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "l"], {
              className: "sticky-page",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
                title: "\u57FA\u7840\u7528\u6CD5",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Sticky */ "Z"], {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Button */ "c"], {
                    type: "primary",
                    style: "margin-left: 15px",
                    children: "\u57FA\u7840\u7528\u6CD5"
                  })
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
                title: "\u5438\u9876\u8DDD\u79BB",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Sticky */ "Z"], {
                  offsetTop: 50,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Button */ "c"], {
                    type: "info",
                    style: "margin-left: 115px",
                    children: "\u5438\u9876\u8DDD\u79BB"
                  })
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
                title: "\u6307\u5B9A\u5BB9\u5668",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "l"], {
                  id: "container",
                  style: "height: 150px; background-color: #fff;",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Sticky */ "Z"], {
                    container: container,
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Button */ "c"], {
                      type: "warning",
                      style: "margin-left: 215px;",
                      children: "\u6307\u5B9A\u5BB9\u5668"
                    })
                  })
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
                title: "\u5D4C\u5957\u5728 scroll-view \u5185\u4F7F\u7528",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* ScrollView */ "h"], {
                  onScroll: this.onScroll,
                  scrollY: true,
                  id: "scroller",
                  style: "height: 200px; background-color: #fff;",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "l"], {
                    style: "height: 400px;",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Sticky */ "Z"], {
                      scrollTop: scrollTop,
                      offsetTop: offsetTop,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Button */ "c"], {
                        type: "warning",
                        children: "\u5D4C\u5957\u5728 scroll-view \u5185"
                      })
                    })
                  })
                })
              })]
            });
          }
        }]);

        return Index;
      }(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



      /***/
}),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
      /* eslint-disable regexp/no-useless-quantifier -- testing */
      var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
      var regexpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
      var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");
      var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
      var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
      var getInternalState = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js").get;
      var UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ "./node_modules/core-js/internals/regexp-unsupported-dot-all.js");
      var UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ "./node_modules/core-js/internals/regexp-unsupported-ncg.js");

      var nativeExec = RegExp.prototype.exec;
      var nativeReplace = shared('native-string-replace', String.prototype.replace);

      var patchedExec = nativeExec;

      var UPDATES_LAST_INDEX_WRONG = (function () {
        var re1 = /a/;
        var re2 = /b*/g;
        nativeExec.call(re1, 'a');
        nativeExec.call(re2, 'a');
        return re1.lastIndex !== 0 || re2.lastIndex !== 0;
      })();

      var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

      // nonparticipating capturing group, copied from es5-shim's String#split patch.
      var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

      var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

      if (PATCH) {
        // eslint-disable-next-line max-statements -- TODO
        patchedExec = function exec(string) {
          var re = this;
          var state = getInternalState(re);
          var str = toString(string);
          var raw = state.raw;
          var result, reCopy, lastIndex, match, i, object, group;

          if (raw) {
            raw.lastIndex = re.lastIndex;
            result = patchedExec.call(raw, str);
            re.lastIndex = raw.lastIndex;
            return result;
          }

          var groups = state.groups;
          var sticky = UNSUPPORTED_Y && re.sticky;
          var flags = regexpFlags.call(re);
          var source = re.source;
          var charsAdded = 0;
          var strCopy = str;

          if (sticky) {
            flags = flags.replace('y', '');
            if (flags.indexOf('g') === -1) {
              flags += 'g';
            }

            strCopy = str.slice(re.lastIndex);
            // Support anchored sticky behavior.
            if (re.lastIndex > 0 && (!re.multiline || re.multiline && str.charAt(re.lastIndex - 1) !== '\n')) {
              source = '(?: ' + source + ')';
              strCopy = ' ' + strCopy;
              charsAdded++;
            }
            // ^(? + rx + ) is needed, in combination with some str slicing, to
            // simulate the 'y' flag.
            reCopy = new RegExp('^(?:' + source + ')', flags);
          }

          if (NPCG_INCLUDED) {
            reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
          }
          if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

          match = nativeExec.call(sticky ? reCopy : re, strCopy);

          if (sticky) {
            if (match) {
              match.input = match.input.slice(charsAdded);
              match[0] = match[0].slice(charsAdded);
              match.index = re.lastIndex;
              re.lastIndex += match[0].length;
            } else re.lastIndex = 0;
          } else if (UPDATES_LAST_INDEX_WRONG && match) {
            re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
          }
          if (NPCG_INCLUDED && match && match.length > 1) {
            // Fix browsers whose `exec` methods don't consistently return `undefined`
            // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
            nativeReplace.call(match[0], reCopy, function () {
              for (i = 1; i < arguments.length - 2; i++) {
                if (arguments[i] === undefined) match[i] = undefined;
              }
            });
          }

          if (match && groups) {
            match.groups = object = create(null);
            for (i = 0; i < groups.length; i++) {
              group = groups[i];
              object[group[0]] = match[group[1]];
            }
          }

          return match;
        };
      }

      module.exports = patchedExec;


      /***/
}),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

      // `RegExp.prototype.flags` getter implementation
      // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
      module.exports = function () {
        var that = anObject(this);
        var result = '';
        if (that.global) result += 'g';
        if (that.ignoreCase) result += 'i';
        if (that.multiline) result += 'm';
        if (that.dotAll) result += 's';
        if (that.unicode) result += 'u';
        if (that.sticky) result += 'y';
        return result;
      };


      /***/
}),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function (module, exports, __webpack_require__) {

      var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
      var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

      // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
      var $RegExp = global.RegExp;

      exports.UNSUPPORTED_Y = fails(function () {
        var re = $RegExp('a', 'y');
        re.lastIndex = 2;
        return re.exec('abcd') != null;
      });

      exports.BROKEN_CARET = fails(function () {
        // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
        var re = $RegExp('^r', 'gy');
        re.lastIndex = 2;
        return re.exec('str') != null;
      });


      /***/
}),

/***/ "./node_modules/core-js/internals/regexp-unsupported-dot-all.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-unsupported-dot-all.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function (module, exports, __webpack_require__) {

      var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
      var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

      // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
      var $RegExp = global.RegExp;

      module.exports = fails(function () {
        var re = $RegExp('.', 's');
        return !(re.dotAll && re.exec('\n') && re.flags === 's');
      });


      /***/
}),

/***/ "./node_modules/core-js/internals/regexp-unsupported-ncg.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-unsupported-ncg.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function (module, exports, __webpack_require__) {

      var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
      var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

      // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
      var $RegExp = global.RegExp;

      module.exports = fails(function () {
        var re = $RegExp('(?<a>b)', 'g');
        return re.exec('b').groups.a !== 'b' ||
          'b'.replace(re, '$<a>c') !== 'bc';
      });


      /***/
}),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
      var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

      // `RegExp.prototype.exec` method
      // https://tc39.es/ecma262/#sec-regexp.prototype.exec
      $({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
        exec: exec
      });


      /***/
}),

/***/ "./src/pages/sticky/index.js":
/*!***********************************!*\
  !*** ./src/pages/sticky/index.js ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.js */ "./node_modules/babel-loader/lib/index.js!./src/pages/sticky/index.js");


      var config = { "navigationBarTitleText": "Sticky 粘性布局" };


      var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/sticky/index', { root: { cn: [] } }, config || {}))



      /***/
}),

/***/ "./src/pages/sticky/index.scss":
/*!*************************************!*\
  !*** ./src/pages/sticky/index.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      // extracted by mini-css-extract-plugin

      /***/
})

}, [["./src/pages/sticky/index.js", "runtime", "taro", "vendors", "common"]]]);
//# sourceMappingURL=index.js.map