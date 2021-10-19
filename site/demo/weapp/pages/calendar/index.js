(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/calendar/index"], {

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/calendar/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/calendar/index.js ***!
  \*********************************************************************/
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
/* harmony import */ var _antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! taro-vantui */ "./node_modules/taro-vantui/dist/index.esm.js");
/* harmony import */ var _components_demo_block_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/demo-block/index */ "./src/components/demo-block/index.js");
/* harmony import */ var _index_wxs_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.wxs.js */ "./src/pages/calendar/index.wxs.js");
/* harmony import */ var _index_wxs_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_wxs_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.scss */ "./src/pages/calendar/index.scss");
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
            date: {
              maxRange: [],
              selectSingle: null,
              selectRange: [],
              selectMultiple: [],
              quickSelect1: null,
              quickSelect2: [],
              customColor: [],
              customConfirm: [],
              customRange: null,
              customDayText: [],
              customPosition: null
            },
            type: 'single',
            round: true,
            color: undefined,
            minDate: Date.now(),
            maxDate: new Date(new Date().getFullYear(), new Date().getMonth() + 6, new Date().getDate()).getTime(),
            maxRange: undefined,
            position: undefined,
            formatter: undefined,
            showConfirm: false,
            showCalendar: false,
            tiledMinDate: new Date(2012, 0, 10).getTime(),
            tiledMaxDate: new Date(2012, 2, 20).getTime(),
            confirmText: undefined,
            confirmDisabledText: undefined,
            firstDayOfWeek: 0
          });

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onConfirm", function (event) {
            console.log(event);

            _this.setState({
              showCalendar: false
            });

            _this.setState(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, "date.".concat(_this.state.id), Array.isArray(event.detail) ? event.detail.map(function (date) {
              return date.valueOf();
            }) : event.detail.valueOf()));
          });

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onSelect", function (event) {
            console.log(event);
          });

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onUnselect", function (event) {
            console.log(event);
          });

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onClose", function () {
            _this.setState({
              showCalendar: false
            });
          });

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onOpen", function () {
            console.log('open');
          });

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onOpened", function () {
            console.log('opened');
          });

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onClosed", function () {
            console.log('closed');
          });

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "resetSettings", function () {
            _this.setState({
              round: true,
              color: null,
              minDate: Date.now(),
              maxDate: new Date(new Date().getFullYear(), new Date().getMonth() + 6, new Date().getDate()).getTime(),
              maxRange: null,
              position: 'bottom',
              formatter: null,
              showConfirm: true,
              confirmText: '确定',
              confirmDisabledText: null
            });
          });

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "show", function (event) {
            _this.resetSettings();

            var _event$currentTarget$ = event.currentTarget.dataset,
              type = _event$currentTarget$.type,
              id = _event$currentTarget$.id;
            var data = {
              id: id,
              type: type,
              showCalendar: true
            };

            switch (id) {
              case 'quickSelect1':
              case 'quickSelect2':
                data.showConfirm = false;
                break;

              case 'customColor':
                data.color = '#07c160';
                break;

              case 'customConfirm':
                data.confirmText = '完成';
                data.confirmDisabledText = '请选择结束时间';
                break;

              case 'customRange':
                data.minDate = new Date(2010, 0, 1).getTime();
                data.maxDate = new Date(2010, 0, 31).getTime();
                break;

              case 'customDayText':
                data.minDate = new Date(2010, 4, 1).getTime();
                data.maxDate = new Date(2010, 4, 31).getTime();
                data.formatter = _this.dayFormatter;
                break;

              case 'customPosition':
                data.round = false;
                data.position = 'right';
                break;

              case 'maxRange':
                data.maxRange = 3;
                break;
            }

            _this.setState(data);
          });

          _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "dayFormatter", function (day) {
            var month = day.date.getMonth() + 1;
            var date = day.date.getDate();

            if (month === 5) {
              if (date === 1) {
                day.topInfo = '劳动节';
              } else if (date === 4) {
                day.topInfo = '五四青年节';
              } else if (date === 11) {
                day.text = '今天';
              }
            }

            if (day.type === 'start') {
              day.bottomInfo = '入店';
            } else if (day.type === 'end') {
              day.bottomInfo = '离店';
            }

            return day;
          });

          return _this;
        }

        _Users_mac_Desktop_iframe_vantui_packages_vantui_demo_node_modules_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Index, [{
          key: "render",
          value: function render() {
            var _this2 = this;

            var _this$state = this.state,
              date = _this$state.date,
              tiledMinDate = _this$state.tiledMinDate,
              tiledMaxDate = _this$state.tiledMaxDate,
              firstDayOfWeek = _this$state.firstDayOfWeek,
              showCalendar = _this$state.showCalendar,
              type = _this$state.type,
              color = _this$state.color,
              round = _this$state.round,
              position = _this$state.position,
              minDate = _this$state.minDate,
              maxDate = _this$state.maxDate,
              maxRange = _this$state.maxRange,
              formatter = _this$state.formatter,
              showConfirm = _this$state.showConfirm,
              confirmText = _this$state.confirmText,
              confirmDisabledText = _this$state.confirmDisabledText;
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Block */ "a"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
                title: "\u57FA\u7840\u7528\u6CD5",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Cell */ "f"], {
                  isLink: true,
                  title: "\u9009\u62E9\u5355\u4E2A\u65E5\u671F",
                  value: _index_wxs_js__WEBPACK_IMPORTED_MODULE_11___default.a.formatFullDate(date.selectSingle),
                  onClick: function onClick(e) {
                    _this2.show({
                      detail: e.detail,
                      currentTarget: {
                        dataset: {
                          type: 'single',
                          id: 'selectSingle'
                        }
                      },
                      target: {
                        dataset: {
                          type: 'single',
                          id: 'selectSingle'
                        }
                      }
                    });
                  }
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Cell */ "f"], {
                  isLink: true,
                  title: "\u9009\u62E9\u591A\u4E2A\u65E5\u671F",
                  value: _index_wxs_js__WEBPACK_IMPORTED_MODULE_11___default.a.formatMultiple(date.selectMultiple),
                  onClick: function onClick(e) {
                    _this2.show({
                      detail: e.detail,
                      currentTarget: {
                        dataset: {
                          type: 'multiple',
                          id: 'selectMultiple'
                        }
                      },
                      target: {
                        dataset: {
                          type: 'multiple',
                          id: 'selectMultiple'
                        }
                      }
                    });
                  }
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Cell */ "f"], {
                  isLink: true,
                  title: "\u9009\u62E9\u65E5\u671F\u533A\u95F4",
                  value: _index_wxs_js__WEBPACK_IMPORTED_MODULE_11___default.a.formatRange(date.selectRange),
                  onClick: function onClick(e) {
                    _this2.show({
                      detail: e.detail,
                      currentTarget: {
                        dataset: {
                          type: 'range',
                          id: 'selectRange'
                        }
                      },
                      target: {
                        dataset: {
                          type: 'range',
                          id: 'selectRange'
                        }
                      }
                    });
                  }
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
                title: "\u5FEB\u6377\u9009\u62E9",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Cell */ "f"], {
                  isLink: true,
                  title: "\u9009\u62E9\u5355\u4E2A\u65E5\u671F",
                  value: _index_wxs_js__WEBPACK_IMPORTED_MODULE_11___default.a.formatFullDate(date.quickSelect1),
                  onClick: function onClick(e) {
                    _this2.show({
                      detail: e.detail,
                      currentTarget: {
                        dataset: {
                          type: 'single',
                          id: 'quickSelect1'
                        }
                      },
                      target: {
                        dataset: {
                          type: 'single',
                          id: 'quickSelect1'
                        }
                      }
                    });
                  }
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Cell */ "f"], {
                  isLink: true,
                  title: "\u9009\u62E9\u65E5\u671F\u533A\u95F4",
                  value: _index_wxs_js__WEBPACK_IMPORTED_MODULE_11___default.a.formatRange(date.quickSelect2),
                  onClick: function onClick(e) {
                    _this2.show({
                      detail: e.detail,
                      currentTarget: {
                        dataset: {
                          type: 'range',
                          id: 'quickSelect2'
                        }
                      },
                      target: {
                        dataset: {
                          type: 'range',
                          id: 'quickSelect2'
                        }
                      }
                    });
                  }
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
                title: "\u81EA\u5B9A\u4E49\u65E5\u5386",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Cell */ "f"], {
                  isLink: true,
                  title: "\u81EA\u5B9A\u4E49\u989C\u8272",
                  value: _index_wxs_js__WEBPACK_IMPORTED_MODULE_11___default.a.formatRange(date.customColor),
                  onClick: function onClick(e) {
                    _this2.show({
                      detail: e.detail,
                      currentTarget: {
                        dataset: {
                          type: 'range',
                          id: 'customColor'
                        }
                      },
                      target: {
                        dataset: {
                          type: 'range',
                          id: 'customColor'
                        }
                      }
                    });
                  }
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Cell */ "f"], {
                  isLink: true,
                  title: "\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4",
                  value: _index_wxs_js__WEBPACK_IMPORTED_MODULE_11___default.a.formatFullDate(date.customRange),
                  onClick: function onClick(e) {
                    _this2.show({
                      detail: e.detail,
                      currentTarget: {
                        dataset: {
                          type: 'single',
                          id: 'customRange'
                        }
                      },
                      target: {
                        dataset: {
                          type: 'single',
                          id: 'customRange'
                        }
                      }
                    });
                  }
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Cell */ "f"], {
                  isLink: true,
                  title: "\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57",
                  value: _index_wxs_js__WEBPACK_IMPORTED_MODULE_11___default.a.formatRange(date.customConfirm),
                  onClick: function onClick(e) {
                    _this2.show({
                      detail: e.detail,
                      currentTarget: {
                        dataset: {
                          type: 'range',
                          id: 'customConfirm'
                        }
                      },
                      target: {
                        dataset: {
                          type: 'range',
                          id: 'customConfirm'
                        }
                      }
                    });
                  }
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Cell */ "f"], {
                  isLink: true,
                  title: "\u81EA\u5B9A\u4E49\u65E5\u671F\u6587\u6848",
                  value: _index_wxs_js__WEBPACK_IMPORTED_MODULE_11___default.a.formatRange(date.customDayText),
                  onClick: function onClick(e) {
                    _this2.show({
                      detail: e.detail,
                      currentTarget: {
                        dataset: {
                          type: 'range',
                          id: 'customDayText'
                        }
                      },
                      target: {
                        dataset: {
                          type: 'range',
                          id: 'customDayText'
                        }
                      }
                    });
                  }
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Cell */ "f"], {
                  isLink: true,
                  title: "\u81EA\u5B9A\u4E49\u5F39\u51FA\u4F4D\u7F6E",
                  value: _index_wxs_js__WEBPACK_IMPORTED_MODULE_11___default.a.formatFullDate(date.customPosition),
                  onClick: function onClick(e) {
                    _this2.show({
                      detail: e.detail,
                      currentTarget: {
                        dataset: {
                          type: 'single',
                          id: 'customPosition'
                        }
                      },
                      target: {
                        dataset: {
                          type: 'single',
                          id: 'customPosition'
                        }
                      }
                    });
                  }
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Cell */ "f"], {
                  isLink: true,
                  title: "\u65E5\u671F\u533A\u95F4\u6700\u5927\u8303\u56F4",
                  value: _index_wxs_js__WEBPACK_IMPORTED_MODULE_11___default.a.formatRange(date.maxRange),
                  onClick: function onClick(e) {
                    _this2.show({
                      detail: e.detail,
                      currentTarget: {
                        dataset: {
                          type: 'range',
                          id: 'maxRange'
                        }
                      },
                      target: {
                        dataset: {
                          type: 'range',
                          id: 'maxRange'
                        }
                      }
                    });
                  }
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_demo_block_index__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
                title: "\u5E73\u94FA\u5C55\u793A",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Calendar */ "d"], {
                  title: "\u65E5\u5386",
                  poppable: false,
                  showConfirm: false,
                  minDate: tiledMinDate,
                  maxDate: tiledMaxDate,
                  firstDayOfWeek: firstDayOfWeek,
                  className: "tiled-calendar"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_antmjs_vantui__WEBPACK_IMPORTED_MODULE_9__[/* Calendar */ "d"], {
                show: showCalendar,
                type: type,
                color: color,
                round: round,
                position: position,
                minDate: minDate,
                maxDate: maxDate,
                maxRange: maxRange,
                formatter: formatter,
                showConfirm: showConfirm,
                confirmText: confirmText,
                confirmDisabledText: confirmDisabledText,
                firstDayOfWeek: firstDayOfWeek,
                onConfirm: this.onConfirm,
                onSelect: this.onSelect,
                onUnselect: this.onUnselect,
                onOpen: this.onOpen,
                onOpened: this.onOpened,
                onClose: this.onClose,
                onClosed: this.onClosed
              })]
            });
          }
        }]);

        return Index;
      }(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



      /***/
}),

/***/ "./src/pages/calendar/index.js":
/*!*************************************!*\
  !*** ./src/pages/calendar/index.js ***!
  \*************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.js */ "./node_modules/babel-loader/lib/index.js!./src/pages/calendar/index.js");


      var config = { "navigationBarTitleText": "Calendar 日历" };


      var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/calendar/index', { root: { cn: [] } }, config || {}))



      /***/
}),

/***/ "./src/pages/calendar/index.scss":
/*!***************************************!*\
  !*** ./src/pages/calendar/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      // extracted by mini-css-extract-plugin

      /***/
}),

/***/ "./src/pages/calendar/index.wxs.js":
/*!*****************************************!*\
  !*** ./src/pages/calendar/index.wxs.js ***!
  \*****************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function (module, exports) {

      /* eslint-disable */
      function formatDate(date) {
        if (date) {
          date = getDate(date);
          return date.getMonth() + 1 + '/' + date.getDate();
        }
      }

      function formatFullDate(date) {
        if (date) {
          date = getDate(date);
          return date.getFullYear() + '/' + formatDate(date);
        }
      }

      function formatMultiple(dates) {
        if (dates.length) {
          return '选择了 ' + dates.length + '个日期';
        }
      }

      function formatRange(dateRange) {
        if (dateRange.length) {
          return formatDate(dateRange[0]) + ' - ' + formatDate(dateRange[1]);
        }
      }

      module.exports = {
        formatDate: formatDate,
        formatFullDate: formatFullDate,
        formatMultiple: formatMultiple,
        formatRange: formatRange
      };

      /***/
})

}, [["./src/pages/calendar/index.js", "runtime", "taro", "vendors", "common"]]]);
//# sourceMappingURL=index.js.map