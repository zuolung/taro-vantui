(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index-bar/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/index-bar/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/index-bar/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













var indexList = [];
var charCodeOfA = 'A'.charCodeAt(0);

for (var i = 0; i < 26; i++) {
  indexList.push(String.fromCharCode(charCodeOfA + i));
}

var Index = /*#__PURE__*/function (_React$Component) {
  _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Index, _React$Component);

  var _super = _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_5___default()(Index);

  function Index() {
    var _this;

    _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Index);

    _this = _super.call(this);

    _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "state", {
      activeTab: 0,
      indexList: indexList,
      customIndexList: [1, 2, 3, 4, 5, 6, 8, 9, 10],
      scrollTop: 0
    });

    _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onChange", function (event) {
      _this.setState({
        activeTab: event.detail.name
      });
    });

    _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onPageScroll", function (event) {
      _this.setState({
        scrollTop: event.scrollTop
      });
    });

    return _this;
  }

  _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Index, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          activeTab = _this$state.activeTab,
          scrollTop = _this$state.scrollTop,
          indexList = _this$state.indexList,
          customIndexList = _this$state.customIndexList;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Tabs */ "gb"], {
        active: activeTab,
        onChange: this.onChange,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Tab */ "db"], {
          title: "\u57FA\u7840\u7528\u6CD5",
          children: activeTab === 0 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* IndexBar */ "E"], {
            scrollTop: scrollTop,
            children: indexList.map(function (item, index) {
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* IndexAnchor */ "D"], {
                  index: item
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Cell */ "f"], {
                  title: "\u6587\u672C"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Cell */ "f"], {
                  title: "\u6587\u672C"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Cell */ "f"], {
                  title: "\u6587\u672C"
                })]
              }, item.item);
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Tab */ "db"], {
          title: "\u81EA\u5B9A\u4E49\u7D22\u5F15\u5217\u8868",
          children: activeTab === 1 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* IndexBar */ "E"], {
            indexList: customIndexList,
            scrollTop: scrollTop,
            children: customIndexList.map(function (item, index) {
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* IndexAnchor */ "D"], {
                  useSlot: true,
                  index: item,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "i"], {
                    children: '标题' + item
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Cell */ "f"], {
                  title: "\u6587\u672C"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Cell */ "f"], {
                  title: "\u6587\u672C"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Cell */ "f"], {
                  title: "\u6587\u672C"
                })]
              }, item.index);
            })
          })
        })]
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ }),

/***/ "./src/pages/index-bar/index.js":
/*!**************************************!*\
  !*** ./src/pages/index-bar/index.js ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.js */ "./node_modules/babel-loader/lib/index.js!./src/pages/index-bar/index.js");


var config = {"navigationBarTitleText":"IndexBar 索引栏"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index-bar/index', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/index-bar/index.js","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map