(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/circle/index"], {

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/circle/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/circle/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return Index; });
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! taro-vantui */ "./node_modules/taro-vantui/dist/index.esm.js");
/* harmony import */ var _components_demo_block_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/demo-block/index */ "./src/components/demo-block/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.scss */ "./src/pages/circle/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
















      var format = function format(rate) {
        return Math.min(Math.max(rate, 0), 100);
      };

      var Index = /*#__PURE__*/function (_React$Component) {
        _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Index, _React$Component);

        var _super = _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_5___default()(Index);

        function Index() {
          var _this;

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Index);

          _this = _super.call(this);

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "state", {
            value: 25,
            gradientColor: {
              '0%': '#ffd01e',
              '100%': '#ee0a24'
            }
          });

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "run", function (e) {
            var step = parseFloat(e.currentTarget.dataset.step);

            _this.setState({
              value: format(_this.state.value + step)
            });
          });

          return _this;
        }

        _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Index, [{
          key: "render",
          value: function render() {
            var _this2 = this;

            var _this$state = this.state,
              value = _this$state.value,
              gradientColor = _this$state.gradientColor;
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Block */ "a"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
                title: "\u57FA\u7840\u7528\u6CD5",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Circle */ "j"], {
                  type: "2d",
                  value: value,
                  text: value + '%'
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
                title: "\u6837\u5F0F\u5B9A\u5236",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Circle */ "j"], {
                  value: value,
                  strokeWidth: 6,
                  text: "\u5BBD\u5EA6\u5B9A\u5236"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Circle */ "j"], {
                  value: value,
                  layerColor: "#eee",
                  color: "#ee0a24",
                  text: "\u989C\u8272\u5B9A\u5236"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Circle */ "j"], {
                  value: value,
                  color: gradientColor,
                  text: "\u6E10\u53D8\u8272"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Circle */ "j"], {
                  value: value,
                  color: "#07c160",
                  clockwise: false,
                  text: "\u9006\u65F6\u9488"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Circle */ "j"], {
                  value: value,
                  size: "120",
                  text: "\u5927\u5C0F\u5B9A\u5236"
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Button */ "c"], {
                type: "primary",
                size: "small",
                onClick: function onClick(e) {
                  _this2.run({
                    detail: e.detail,
                    currentTarget: {
                      dataset: {
                        step: '10'
                      }
                    },
                    target: {
                      dataset: {
                        step: '10'
                      }
                    }
                  });
                },
                children: "\u589E\u52A0"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Button */ "c"], {
                type: "danger",
                size: "small",
                onClick: function onClick(e) {
                  _this2.run({
                    detail: e.detail,
                    currentTarget: {
                      dataset: {
                        step: '-10'
                      }
                    },
                    target: {
                      dataset: {
                        step: '-10'
                      }
                    }
                  });
                },
                children: "\u51CF\u5C11"
              })]
            });
          }
        }]);

        return Index;
      }(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



      /***/
}),

/***/ "./node_modules/core-js/internals/number-parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-float.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function (module, exports, __webpack_require__) {

      var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
      var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
      var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
      var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
      var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

      var $parseFloat = global.parseFloat;
      var Symbol = global.Symbol;
      var ITERATOR = Symbol && Symbol.iterator;
      var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity
        // MS Edge 18- broken with boxed symbols
        || (ITERATOR && !fails(function () { $parseFloat(Object(ITERATOR)); }));

      // `parseFloat` method
      // https://tc39.es/ecma262/#sec-parsefloat-string
      module.exports = FORCED ? function parseFloat(string) {
        var trimmedString = trim(toString(string));
        var result = $parseFloat(trimmedString);
        return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
      } : $parseFloat;


      /***/
}),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function (module, exports, __webpack_require__) {

      var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
      var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
      var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

      var whitespace = '[' + whitespaces + ']';
      var ltrim = RegExp('^' + whitespace + whitespace + '*');
      var rtrim = RegExp(whitespace + whitespace + '*$');

      // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
      var createMethod = function (TYPE) {
        return function ($this) {
          var string = toString(requireObjectCoercible($this));
          if (TYPE & 1) string = string.replace(ltrim, '');
          if (TYPE & 2) string = string.replace(rtrim, '');
          return string;
        };
      };

      module.exports = {
        // `String.prototype.{ trimLeft, trimStart }` methods
        // https://tc39.es/ecma262/#sec-string.prototype.trimstart
        start: createMethod(1),
        // `String.prototype.{ trimRight, trimEnd }` methods
        // https://tc39.es/ecma262/#sec-string.prototype.trimend
        end: createMethod(2),
        // `String.prototype.trim` method
        // https://tc39.es/ecma262/#sec-string.prototype.trim
        trim: createMethod(3)
      };


      /***/
}),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function (module, exports) {

      // a string of all valid unicode whitespaces
      module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
        '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


      /***/
}),

/***/ "./node_modules/core-js/modules/es.parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
      var $parseFloat = __webpack_require__(/*! ../internals/number-parse-float */ "./node_modules/core-js/internals/number-parse-float.js");

      // `parseFloat` method
      // https://tc39.es/ecma262/#sec-parsefloat-string
      $({ global: true, forced: parseFloat != $parseFloat }, {
        parseFloat: $parseFloat
      });


      /***/
}),

/***/ "./src/pages/circle/index.js":
/*!***********************************!*\
  !*** ./src/pages/circle/index.js ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.js */ "./node_modules/babel-loader/lib/index.js!./src/pages/circle/index.js");


      var config = { "navigationBarTitleText": "Circle 进度条" };


      var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/circle/index', { root: { cn: [] } }, config || {}))



      /***/
}),

/***/ "./src/pages/circle/index.scss":
/*!*************************************!*\
  !*** ./src/pages/circle/index.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      // extracted by mini-css-extract-plugin

      /***/
})

}, [["./src/pages/circle/index.js", "runtime", "taro", "vendors", "common"]]]);
//# sourceMappingURL=index.js.map