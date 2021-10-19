(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/tab/index"], {

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/tab/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/tab/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return Index; });
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
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! taro-vantui */ "./node_modules/taro-vantui/dist/index.esm.js");
/* harmony import */ var _components_demo_block_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/demo-block/index */ "./src/components/demo-block/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.scss */ "./src/pages/tab/index.scss");
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
            tabs2: [1, 2],
            tabs3: [1, 2, 3],
            tabs4: [1, 2, 3, 4],
            tabs6: [1, 2, 3, 4, 5, 6],
            tabsWithName: [{
              name: 'a',
              index: 1
            }, {
              name: 'b',
              index: 2
            }, {
              name: 'c',
              index: 3
            }]
          });

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onClickDisabled", function (event) {
            Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_9__["showToast"])({
              title: "\u6807\u7B7E ".concat(event.detail.index + 1, " \u5DF2\u88AB\u7981\u7528"),
              icon: 'none'
            });
          });

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onChange", function (event) {
            Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_9__["showToast"])({
              title: "\u5207\u6362\u5230\u6807\u7B7E ".concat(event.detail.index + 1),
              icon: 'none'
            });
          });

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onClickNavRight", function () {
            Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_9__["showToast"])({
              title: '点击 right nav',
              icon: 'none'
            });
          });

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onClick", function (event) {
            Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_9__["showToast"])({
              title: "\u70B9\u51FB\u6807\u7B7E ".concat(event.detail.index + 1),
              icon: 'none'
            });
          });

          return _this;
        }

        _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Index, [{
          key: "render",
          value: function render() {
            var _this$state = this.state,
              tabs4 = _this$state.tabs4,
              tabsWithName = _this$state.tabsWithName,
              tabs6 = _this$state.tabs6,
              tabs3 = _this$state.tabs3,
              tabs2 = _this$state.tabs2;
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "l"], {
              className: "tab-page",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
                title: "\u57FA\u7840\u7528\u6CD5",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Tabs */ "gb"], {
                  active: 1,
                  onChange: this.onChange,
                  children: tabs4.map(function (item, index) {
                    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Tab */ "db"], {
                      title: '标签 ' + item,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "l"], {
                        className: "content",
                        children: '内容' + item
                      })
                    }, index);
                  })
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
                title: "\u901A\u8FC7\u540D\u79F0\u5339\u914D",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Tabs */ "gb"], {
                  active: "b",
                  children: tabsWithName.map(function (item, index) {
                    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Tab */ "db"], {
                      name: item.name,
                      title: '标签 ' + index,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "l"], {
                        className: "content",
                        children: '内容' + item.index
                      })
                    }, index);
                  })
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
                title: "\u6A2A\u5411\u6EDA\u52A8",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Tabs */ "gb"], {
                  children: tabs6.map(function (item, index) {
                    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Tab */ "db"], {
                      title: '标签 ' + item,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "l"], {
                        className: "content",
                        children: '内容' + item
                      })
                    }, index);
                  })
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
                title: "\u7981\u7528\u6807\u7B7E",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Tabs */ "gb"], {
                  onDisabled: this.onClickDisabled,
                  children: tabs3.map(function (item, index) {
                    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Tab */ "db"], {
                      disabled: index === 1,
                      title: '标签 ' + item,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "l"], {
                        className: "content",
                        children: '内容' + item
                      })
                    }, index);
                  })
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
                title: "\u6837\u5F0F\u98CE\u683C",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Tabs */ "gb"], {
                  type: "card",
                  tabClass: "special-tab",
                  children: tabs3.map(function (item, index) {
                    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Tab */ "db"], {
                      title: '标签 ' + item,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "l"], {
                        className: "content-2",
                        children: '内容' + item
                      })
                    }, index);
                  })
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
                title: "\u70B9\u51FB\u4E8B\u4EF6",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Tabs */ "gb"], {
                  onClick: this.onClick,
                  children: tabs2.map(function (item, index) {
                    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Tab */ "db"], {
                      title: '标签 ' + item,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "l"], {
                        className: "content",
                        children: '内容' + item
                      })
                    }, index);
                  })
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
                title: "\u7C98\u6027\u5E03\u5C40",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Tabs */ "gb"], {
                  sticky: true,
                  children: tabs4.map(function (item, index) {
                    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Tab */ "db"], {
                      title: '标签 ' + item,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "l"], {
                        className: "content",
                        children: '内容' + item
                      })
                    }, index);
                  })
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
                title: "\u5207\u6362\u52A8\u753B",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Tabs */ "gb"], {
                  animated: true,
                  children: tabs4.map(function (item, index) {
                    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Tab */ "db"], {
                      title: '标签 ' + item,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "l"], {
                        className: "content",
                        children: '内容' + item
                      })
                    }, index);
                  })
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
                title: "\u6ED1\u52A8\u5207\u6362",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Tabs */ "gb"], {
                  swipeable: true,
                  children: tabs4.map(function (item, index) {
                    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Tab */ "db"], {
                      title: '标签 ' + item,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "l"], {
                        className: "content",
                        children: '内容' + item
                      })
                    }, index);
                  })
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
                title: "\u81EA\u5B9A\u4E49\u6807\u9898",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Tabs */ "gb"], {
                  active: 1,
                  onChange: this.onChange,
                  tabClass: "special-tab",
                  tabActiveClass: "special-tab-active",
                  renderNavright: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Block */ "a"], {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Icon */ "B"], {
                      name: "search",
                      className: "right-nav",
                      onClick: this.onClickNavRight
                    })
                  }),
                  children: tabs4.map(function (item, index) {
                    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_10__[/* Tab */ "db"], {
                      title: '标签 ' + item,
                      dot: index === 1,
                      info: index === 2 ? 99 : null,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "l"], {
                        className: "content",
                        children: '内容' + item
                      })
                    }, index);
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

/***/ "./src/pages/tab/index.js":
/*!********************************!*\
  !*** ./src/pages/tab/index.js ***!
  \********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.js */ "./node_modules/babel-loader/lib/index.js!./src/pages/tab/index.js");


      var config = { "navigationBarTitleText": "Tab 标签页" };


      var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/tab/index', { root: { cn: [] } }, config || {}))



      /***/
}),

/***/ "./src/pages/tab/index.scss":
/*!**********************************!*\
  !*** ./src/pages/tab/index.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      // extracted by mini-css-extract-plugin

      /***/
})

}, [["./src/pages/tab/index.js", "runtime", "taro", "vendors", "common"]]]);
//# sourceMappingURL=index.js.map