(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/tree-select/index"], {

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/tree-select/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/tree-select/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return Index; });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/objectSpread2.js");
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js");
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _antmjs_vantui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! taro-vantui */ "./node_modules/taro-vantui/dist/index.esm.js");
/* harmony import */ var _components_demo_block_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/demo-block/index */ "./src/components/demo-block/index.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./config.js */ "./src/pages/tree-select/config.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./index.scss */ "./src/pages/tree-select/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);























      var items = [{
        text: _config_js__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].pro1Name,
        children: _config_js__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].pro1
      }, {
        text: _config_js__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].pro2Name,
        children: _config_js__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].pro2
      }, {
        text: _config_js__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].pro3Name,
        disabled: true,
        children: _config_js__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].pro3
      }];

      var Index = /*#__PURE__*/function (_React$Component) {
        _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Index, _React$Component);

        var _super = _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_9___default()(Index);

        function Index() {
          var _this;

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Index);

          _this = _super.call(this);

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "state", {
            items: items,
            badgeItems: items.slice(0, 2).map(function (item, index) {
              if (index === 0) {
                return _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_4___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_4___default()({}, item), {}, {
                  dot: true
                });
              }

              if (index === 1) {
                return _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_4___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_4___default()({}, item), {}, {
                  badge: 5
                });
              }

              return item;
            }),
            mainActiveIndex: 0,
            activeId: 0,
            mainActiveIndexMulti: 0,
            activeIdMulti: []
          });

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "onClickNav", function (_ref) {
            var detail = _ref.detail;

            _this.setState({
              mainActiveIndex: detail.index || 0
            });
          });

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "onClickItem", function (_ref2) {
            var detail = _ref2.detail;
            var activeId = _this.state.activeId === detail.id ? null : detail.id;

            _this.setState({
              activeId: activeId
            });
          });

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "onClickNavMulti", function (_ref3) {
            var detail = _ref3.detail;

            _this.setState({
              mainActiveIndexMulti: detail.index || 0
            });
          });

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "onClickItemMulti", function (_ref4) {
            var detail = _ref4.detail;
            var activeIdMulti = _this.state.activeIdMulti;
            var idx = activeIdMulti.indexOf(detail.id);

            if (idx > -1) {
              activeIdMulti.splice(idx, 1);
            } else {
              activeIdMulti.push(detail.id);
            }

            _this.setState({
              activeIdMulti: activeIdMulti
            });
          });

          return _this;
        }

        _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Index, [{
          key: "render",
          value: function render() {
            var _this$state = this.state,
              items = _this$state.items,
              mainActiveIndex = _this$state.mainActiveIndex,
              activeId = _this$state.activeId,
              mainActiveIndexMulti = _this$state.mainActiveIndexMulti,
              activeIdMulti = _this$state.activeIdMulti,
              badgeItems = _this$state.badgeItems;
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* Block */ "a"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
                title: "\u5355\u9009\u6A21\u5F0F",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_13__[/* TreeSelect */ "kb"], {
                  items: items,
                  mainActiveIndex: mainActiveIndex,
                  activeId: activeId,
                  onClickItem: this.onClickItem,
                  onClickNav: this.onClickNav
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
                title: "\u591A\u9009\u6A21\u5F0F",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_13__[/* TreeSelect */ "kb"], {
                  max: "2",
                  items: items,
                  mainActiveIndex: mainActiveIndexMulti,
                  activeId: activeIdMulti,
                  onClickItem: this.onClickItemMulti,
                  onClickNav: this.onClickNavMulti
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
                title: "\u81EA\u5B9A\u4E49\u5185\u5BB9",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_13__[/* TreeSelect */ "kb"], {
                  items: [{
                    text: '分组 1'
                  }, {
                    text: '分组 2'
                  }],
                  height: "55vw",
                  mainActiveIndex: mainActiveIndex,
                  activeId: activeId,
                  onClickItem: this.onClickItem,
                  onClickNav: this.onClickNav,
                  renderContent: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* Block */ "a"], {
                    children: mainActiveIndex === 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_13__[/* Image */ "C"], {
                      src: "https://img.yzcdn.cn/vant/apple-1.jpg",
                      width: "100%",
                      height: "100%"
                    }) : mainActiveIndex === 1 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_13__[/* Image */ "C"], {
                      src: "https://img.yzcdn.cn/vant/apple-2.jpg",
                      width: "100%",
                      height: "100%",
                      slot: "content"
                    })
                  })
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
                title: "\u5FBD\u6807\u63D0\u793A",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_13__[/* TreeSelect */ "kb"], {
                  items: badgeItems,
                  mainActiveIndex: mainActiveIndex,
                  activeId: activeId,
                  onClickItem: this.onClickItem,
                  onClickNav: this.onClickNav
                })
              })]
            });
          }
        }]);

        return Index;
      }(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);



      /***/
}),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
      var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
      var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
      var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
      var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
      var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
      var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
      var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
      var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
      var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

      var SPECIES = wellKnownSymbol('species');
      var nativeSlice = [].slice;
      var max = Math.max;

      // `Array.prototype.slice` method
      // https://tc39.es/ecma262/#sec-array.prototype.slice
      // fallback for not array-like ES3 strings and DOM objects
      $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
        slice: function slice(start, end) {
          var O = toIndexedObject(this);
          var length = lengthOfArrayLike(O);
          var k = toAbsoluteIndex(start, length);
          var fin = toAbsoluteIndex(end === undefined ? length : end, length);
          // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
          var Constructor, result, n;
          if (isArray(O)) {
            Constructor = O.constructor;
            // cross-realm fallback
            if (isConstructor(Constructor) && (Constructor === Array || isArray(Constructor.prototype))) {
              Constructor = undefined;
            } else if (isObject(Constructor)) {
              Constructor = Constructor[SPECIES];
              if (Constructor === null) Constructor = undefined;
            }
            if (Constructor === Array || Constructor === undefined) {
              return nativeSlice.call(O, k, fin);
            }
          }
          result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
          for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
          result.length = n;
          return result;
        }
      });


      /***/
}),

/***/ "./src/pages/tree-select/config.js":
/*!*****************************************!*\
  !*** ./src/pages/tree-select/config.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
        pro1Name: '浙江',
        pro1: [{
          text: '杭州',
          id: 1
        }, {
          text: '温州',
          id: 2
        }, {
          text: '宁波',
          id: 3,
          disabled: true
        }, {
          text: '义乌',
          id: 4
        }],
        pro2Name: '江苏',
        pro2: [{
          text: '南京',
          id: 5
        }, {
          text: '无锡',
          id: 6
        }, {
          text: '徐州',
          id: 7
        }, {
          text: '苏州',
          id: 8
        }],
        pro3Name: '福建',
        pro3: [{
          text: '泉州',
          id: 9
        }, {
          text: '厦门',
          id: 10
        }]
      });

      /***/
}),

/***/ "./src/pages/tree-select/index.js":
/*!****************************************!*\
  !*** ./src/pages/tree-select/index.js ***!
  \****************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.js */ "./node_modules/babel-loader/lib/index.js!./src/pages/tree-select/index.js");


      var config = { "navigationBarTitleText": "TreeSelect 分类选择" };


      var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/tree-select/index', { root: { cn: [] } }, config || {}))



      /***/
}),

/***/ "./src/pages/tree-select/index.scss":
/*!******************************************!*\
  !*** ./src/pages/tree-select/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      // extracted by mini-css-extract-plugin

      /***/
})

}, [["./src/pages/tree-select/index.js", "runtime", "taro", "vendors", "common"]]]);
//# sourceMappingURL=index.js.map