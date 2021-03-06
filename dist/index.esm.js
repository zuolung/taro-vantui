import _toConsumableArray from "@babel/runtime-corejs3/helpers/toConsumableArray";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _slicedToArray from "@babel/runtime-corejs3/helpers/slicedToArray";
import _typeof from "@babel/runtime-corejs3/helpers/typeof";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/index-of";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$assign from "@babel/runtime-corejs3/core-js-stable/object/assign";
import _Object$getOwnPropertyNames from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-names";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _Symbol from "@babel/runtime-corejs3/core-js-stable/symbol";
import _Symbol$for from "@babel/runtime-corejs3/core-js-stable/symbol/for";
import _Symbol$iterator from "@babel/runtime-corejs3/core-js-stable/symbol/iterator";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _trimInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/trim";
import _WeakMap from "@babel/runtime-corejs3/core-js-stable/weak-map";
import _Map from "@babel/runtime-corejs3/core-js-stable/map";
import _Reflect$construct from "@babel/runtime-corejs3/core-js-stable/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _Object$freeze from "@babel/runtime-corejs3/core-js-stable/object/freeze";
import _entriesInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/entries";
import _JSON$stringify from "@babel/runtime-corejs3/core-js-stable/json/stringify";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _parseInt from "@babel/runtime-corejs3/core-js-stable/parse-int";
import _reduceInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/reduce";
import _includesInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/includes";
import _Promise from "@babel/runtime-corejs3/core-js-stable/promise";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/slice";
import _Array$from from "@babel/runtime-corejs3/core-js-stable/array/from";
import _someInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/some";
import _fillInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/fill";
import _sortInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/sort";
import _parseFloat from "@babel/runtime-corejs3/core-js-stable/parse-float";
import _spliceInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/splice";
import _findIndexInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/find-index";
import _findInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/find";
import _valuesInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/values";
import _Number$MAX_SAFE_INTEGER from "@babel/runtime-corejs3/core-js-stable/number/max-safe-integer";
import _reverseInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/reverse";
import Taro, { createSelectorQuery, getSystemInfoSync as getSystemInfoSync$2, usePageScroll as usePageScroll$1, Events, useReady } from '@tarojs/taro';
export { pxTransform } from '@tarojs/taro';
import require$$0, { useState, useEffect, useRef, useCallback, useMemo, isValidElement, cloneElement, forwardRef, useImperativeHandle, memo, useLayoutEffect } from 'react';
import { View, Image, Block, ScrollView, Text, Navigator, Canvas, CoverView, Textarea, Input, Video, Button } from '@tarojs/components';
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && _indexOfInstanceProperty(e).call(e, p) < 0) t[p] = s[p];
  }

  if (s != null && typeof _Object$getOwnPropertySymbols === "function") for (var i = 0, p = _Object$getOwnPropertySymbols(s); i < p.length; i++) {
    if (_indexOfInstanceProperty(e).call(e, p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

var jsxRuntime = {
  exports: {}
};
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = _Object$getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    var _context, _context2;

    if (!_Object$assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (_Object$getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = _mapInstanceProperty(_context = _Object$getOwnPropertyNames(test2)).call(_context, function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};

    _forEachInstanceProperty(_context2 = 'abcdefghijklmnopqrst'.split('')).call(_context2, function (letter) {
      test3[letter] = letter;
    });

    if (_Object$keys(_Object$assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? _Object$assign : function (target, source) {
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

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var f$1 = require$$0,
    g$1 = 60103;
reactJsxRuntime_production_min.Fragment = 60107;

if ("function" === typeof _Symbol && _Symbol$for) {
  var h$1 = _Symbol$for;
  g$1 = h$1("react.element");
  reactJsxRuntime_production_min.Fragment = h$1("react.fragment");
}

var m$1 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    n$1 = Object.prototype.hasOwnProperty,
    p$1 = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function q$1(c, a, k) {
  var b,
      d = {},
      e = null,
      l = null;
  void 0 !== k && (e = "" + k);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (l = a.ref);

  for (b in a) {
    n$1.call(a, b) && !p$1.hasOwnProperty(b) && (d[b] = a[b]);
  }

  if (c && c.defaultProps) for (b in a = c.defaultProps, a) {
    void 0 === d[b] && (d[b] = a[b]);
  }
  return {
    $$typeof: g$1,
    type: c,
    key: e,
    ref: l,
    props: d,
    _owner: m$1.current
  };
}

reactJsxRuntime_production_min.jsx = q$1;
reactJsxRuntime_production_min.jsxs = q$1;
var reactJsxRuntime_development = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (exports) {
  if (process.env.NODE_ENV !== "production") {
    (function () {
      var React = require$$0;
      var _assign = objectAssign; // ATTENTION
      // When adding new symbols to this file,
      // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.

      var REACT_ELEMENT_TYPE = 0xeac7;
      var REACT_PORTAL_TYPE = 0xeaca;
      exports.Fragment = 0xeacb;
      var REACT_STRICT_MODE_TYPE = 0xeacc;
      var REACT_PROFILER_TYPE = 0xead2;
      var REACT_PROVIDER_TYPE = 0xeacd;
      var REACT_CONTEXT_TYPE = 0xeace;
      var REACT_FORWARD_REF_TYPE = 0xead0;
      var REACT_SUSPENSE_TYPE = 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = 0xead8;
      var REACT_MEMO_TYPE = 0xead3;
      var REACT_LAZY_TYPE = 0xead4;
      var REACT_BLOCK_TYPE = 0xead9;
      var REACT_SERVER_BLOCK_TYPE = 0xeada;
      var REACT_FUNDAMENTAL_TYPE = 0xead5;
      var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
      var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

      if (typeof _Symbol === 'function' && _Symbol$for) {
        var symbolFor = _Symbol$for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        REACT_PORTAL_TYPE = symbolFor('react.portal');
        exports.Fragment = symbolFor('react.fragment');
        REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
        REACT_PROFILER_TYPE = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
        REACT_MEMO_TYPE = symbolFor('react.memo');
        REACT_LAZY_TYPE = symbolFor('react.lazy');
        REACT_BLOCK_TYPE = symbolFor('react.block');
        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
        symbolFor('react.scope');
        symbolFor('react.opaque.id');
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
        symbolFor('react.offscreen');
        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
      }

      var MAYBE_ITERATOR_SYMBOL = typeof _Symbol === 'function' && _Symbol$iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator';

      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || _typeof(maybeIterable) !== 'object') {
          return null;
        }

        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

        if (typeof maybeIterator === 'function') {
          return maybeIterator;
        }

        return null;
      }

      var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

      function error(format) {
        {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          printWarning('error', format, args);
        }
      }

      function printWarning(level, format, args) {
        // When changing this logic, you might want to also
        // update consoleWithStackDev.www.js as well.
        {
          var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame.getStackAddendum();

          if (stack !== '') {
            format += '%s';
            args = _concatInstanceProperty(args).call(args, [stack]);
          }

          var argsWithFormat = _mapInstanceProperty(args).call(args, function (item) {
            return '' + item;
          }); // Careful: RN currently depends on this prefix


          argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
          // breaks IE9: https://github.com/facebook/react/issues/13610
          // eslint-disable-next-line react-internal/no-production-logging

          Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      } // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.


      var enableScopeAPI = false; // Experimental Create Event Handle API.

      function isValidElementType(type) {
        if (typeof type === 'string' || typeof type === 'function') {
          return true;
        } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


        if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
          return true;
        }

        if (_typeof(type) === 'object' && type !== null) {
          if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
            return true;
          }
        }

        return false;
      }

      function getWrappedName(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || '';
        return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
      }

      function getContextName(type) {
        return type.displayName || 'Context';
      }

      function getComponentName(type) {
        if (type == null) {
          // Host root, text node or just invalid type.
          return null;
        }

        {
          if (typeof type.tag === 'number') {
            error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
          }
        }

        if (typeof type === 'function') {
          return type.displayName || type.name || null;
        }

        if (typeof type === 'string') {
          return type;
        }

        switch (type) {
          case exports.Fragment:
            return 'Fragment';

          case REACT_PORTAL_TYPE:
            return 'Portal';

          case REACT_PROFILER_TYPE:
            return 'Profiler';

          case REACT_STRICT_MODE_TYPE:
            return 'StrictMode';

          case REACT_SUSPENSE_TYPE:
            return 'Suspense';

          case REACT_SUSPENSE_LIST_TYPE:
            return 'SuspenseList';
        }

        if (_typeof(type) === 'object') {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + '.Consumer';

            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + '.Provider';

            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, 'ForwardRef');

            case REACT_MEMO_TYPE:
              return getComponentName(type.type);

            case REACT_BLOCK_TYPE:
              return getComponentName(type._render);

            case REACT_LAZY_TYPE:
              {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;

                try {
                  return getComponentName(init(payload));
                } catch (x) {
                  return null;
                }
              }
          }
        }

        return null;
      } // Helpers to patch console.logs to avoid logging during side-effect free
      // replaying on render function. This currently only patches the object
      // lazily which won't cover if the log function was extracted eagerly.
      // We could also eagerly patch the method.


      var disabledDepth = 0;
      var prevLog;
      var prevInfo;
      var prevWarn;
      var prevError;
      var prevGroup;
      var prevGroupCollapsed;
      var prevGroupEnd;

      function disabledLog() {}

      disabledLog.__reactDisabledLog = true;

      function disableLogs() {
        {
          if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true
            }; // $FlowFixMe Flow thinks console is immutable.

            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
            /* eslint-enable react-internal/no-production-logging */
          }

          disabledDepth++;
        }
      }

      function reenableLogs() {
        {
          disabledDepth--;

          if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */
            var props = {
              configurable: true,
              enumerable: true,
              writable: true
            }; // $FlowFixMe Flow thinks console is immutable.

            Object.defineProperties(console, {
              log: _assign({}, props, {
                value: prevLog
              }),
              info: _assign({}, props, {
                value: prevInfo
              }),
              warn: _assign({}, props, {
                value: prevWarn
              }),
              error: _assign({}, props, {
                value: prevError
              }),
              group: _assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: _assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: _assign({}, props, {
                value: prevGroupEnd
              })
            });
            /* eslint-enable react-internal/no-production-logging */
          }

          if (disabledDepth < 0) {
            error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
          }
        }
      }

      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
      var prefix;

      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === undefined) {
            // Extract the VM specific prefix used by each line.
            try {
              throw Error();
            } catch (x) {
              var _context3;

              var match = _trimInstanceProperty(_context3 = x.stack).call(_context3).match(/\n( *(at )?)/);

              prefix = match && match[1] || '';
            }
          } // We use the prefix to ensure our stacks line up with native stack frames.


          return '\n' + prefix + name;
        }
      }

      var reentry = false;
      var componentFrameCache;
      {
        var PossiblyWeakMap = typeof _WeakMap === 'function' ? _WeakMap : _Map;
        componentFrameCache = new PossiblyWeakMap();
      }

      function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) {
          return '';
        }

        {
          var frame = componentFrameCache.get(fn);

          if (frame !== undefined) {
            return frame;
          }
        }
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        {
          previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
          // for warnings.

          ReactCurrentDispatcher.current = null;
          disableLogs();
        }

        try {
          // This should throw.
          if (construct) {
            // Something should be setting the props in the constructor.
            var Fake = function Fake() {
              throw Error();
            }; // $FlowFixMe


            Object.defineProperty(Fake.prototype, 'props', {
              set: function set() {
                // We use a throwing setter instead of frozen or non-writable props
                // because that won't throw in a non-strict mode function.
                throw Error();
              }
            });

            if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' && _Reflect$construct) {
              // We construct a different control for this case to include any extra
              // frames added by the construct call.
              try {
                _Reflect$construct(Fake, []);
              } catch (x) {
                control = x;
              }

              _Reflect$construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }

              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }

            fn();
          }
        } catch (sample) {
          // This is inlined manually because closure doesn't do it for us.
          if (sample && control && typeof sample.stack === 'string') {
            // This extracts the first frame from the sample that isn't also in the control.
            // Skipping one frame that we assume is the frame that calls the two.
            var sampleLines = sample.stack.split('\n');
            var controlLines = control.stack.split('\n');
            var s = sampleLines.length - 1;
            var c = controlLines.length - 1;

            while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
              // We expect at least one stack frame to be shared.
              // Typically this will be the root most one. However, stack frames may be
              // cut off due to maximum stack limits. In this case, one maybe cut off
              // earlier than the other. We assume that the sample is longer or the same
              // and there for cut off earlier. So we should find the root most frame in
              // the sample somewhere in the control.
              c--;
            }

            for (; s >= 1 && c >= 0; s--, c--) {
              // Next we find the first one that isn't the same which should be the
              // frame that called our sample function and the control.
              if (sampleLines[s] !== controlLines[c]) {
                // In V8, the first line is describing the message but other VMs don't.
                // If we're about to return the first line, and the control is also on the same
                // line, that's a pretty good indicator that our sample threw at same line as
                // the control. I.e. before we entered the sample frame. So we ignore this result.
                // This can happen if you passed a class to function component, or non-function.
                if (s !== 1 || c !== 1) {
                  do {
                    s--;
                    c--; // We may still have similar intermediate frames from the construct call.
                    // The next one that isn't the same should be our match though.

                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                      // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                      var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                      {
                        if (typeof fn === 'function') {
                          componentFrameCache.set(fn, _frame);
                        }
                      } // Return the line we found.

                      return _frame;
                    }
                  } while (s >= 1 && c >= 0);
                }

                break;
              }
            }
          }
        } finally {
          reentry = false;
          {
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
          }
          Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.


        var name = fn ? fn.displayName || fn.name : '';
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
        {
          if (typeof fn === 'function') {
            componentFrameCache.set(fn, syntheticFrame);
          }
        }
        return syntheticFrame;
      }

      function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
          return describeNativeComponentFrame(fn, false);
        }
      }

      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }

      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
          return '';
        }

        if (typeof type === 'function') {
          {
            return describeNativeComponentFrame(type, shouldConstruct(type));
          }
        }

        if (typeof type === 'string') {
          return describeBuiltInComponentFrame(type);
        }

        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame('Suspense');

          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame('SuspenseList');
        }

        if (_typeof(type) === 'object') {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);

            case REACT_MEMO_TYPE:
              // Memo may contain any component type so we recursively resolve it.
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

            case REACT_BLOCK_TYPE:
              return describeFunctionComponentFrame(type._render);

            case REACT_LAZY_TYPE:
              {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;

                try {
                  // Lazy may contain any component type so we recursively resolve it.
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {}
              }
          }
        }

        return '';
      }

      var loggedTypeFailures = {};
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

      function setCurrentlyValidatingElement(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame.setExtraStackFrame(null);
          }
        }
      }

      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          // $FlowFixMe This is okay but Flow doesn't know it.
          var has = Function.call.bind(Object.prototype.hasOwnProperty);

          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
              // fail the render phase where it didn't fail before. So we log it.
              // After these have been cleaned up, we'll let them throw.

              try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== 'function') {
                  var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                  err.name = 'Invariant Violation';
                  throw err;
                }

                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
              } catch (ex) {
                error$1 = ex;
              }

              if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, _typeof(error$1));
                setCurrentlyValidatingElement(null);
              }

              if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error('Failed %s type: %s', location, error$1.message);
                setCurrentlyValidatingElement(null);
              }
            }
          }
        }
      }

      var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      var specialPropKeyWarningShown;
      var specialPropRefWarningShown;
      var didWarnAboutStringRefs;
      {
        didWarnAboutStringRefs = {};
      }

      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, 'ref')) {
            var getter = _Object$getOwnPropertyDescriptor(config, 'ref').get;

            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.ref !== undefined;
      }

      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, 'key')) {
            var getter = _Object$getOwnPropertyDescriptor(config, 'key').get;

            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.key !== undefined;
      }

      function warnIfStringRefCannotBeAutoConverted(config, self) {
        {
          if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
            var componentName = getComponentName(ReactCurrentOwner.current.type);

            if (!didWarnAboutStringRefs[componentName]) {
              error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
              didWarnAboutStringRefs[componentName] = true;
            }
          }
        }
      }

      function defineKeyPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingKey = function warnAboutAccessingKey() {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;
              error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
            }
          };

          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
      }

      function defineRefPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingRef = function warnAboutAccessingRef() {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;
              error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
            }
          };

          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
      }
      /**
       * Factory method to create a new React element. This no longer adheres to
       * the class pattern, so do not use new to call it. Also, instanceof check
       * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
       * if something is a React Element.
       *
       * @param {*} type
       * @param {*} props
       * @param {*} key
       * @param {string|object} ref
       * @param {*} owner
       * @param {*} self A *temporary* helper to detect places where `this` is
       * different from the `owner` when React.createElement is called, so that we
       * can warn. We want to get rid of owner and replace string `ref`s with arrow
       * functions, and as long as `this` and owner are the same, there will be no
       * change in behavior.
       * @param {*} source An annotation object (added by a transpiler or otherwise)
       * indicating filename, line number, and/or other information.
       * @internal
       */


      var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
        var element = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,
          // Built-in properties that belong on the element
          type: type,
          key: key,
          ref: ref,
          props: props,
          // Record the component responsible for creating this element.
          _owner: owner
        };
        {
          // The validation flag is currently mutative. We put it on
          // an external backing store so that we can freeze the whole object.
          // This can be replaced with a WeakMap once they are implemented in
          // commonly used development environments.
          element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
          // the validation flag non-enumerable (where possible, which should
          // include every environment we run tests in), so the test framework
          // ignores it.

          Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          }); // self and source are DEV only properties.

          Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
          }); // Two elements created in two different places should be considered
          // equal for testing purposes and therefore we hide it from enumeration.

          Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });

          if (_Object$freeze) {
            _Object$freeze(element.props);

            _Object$freeze(element);
          }
        }
        return element;
      };
      /**
       * https://github.com/reactjs/rfcs/pull/107
       * @param {*} type
       * @param {object} props
       * @param {string} key
       */


      function jsxDEV(type, config, maybeKey, source, self) {
        {
          var propName; // Reserved names are extracted

          var props = {};
          var key = null;
          var ref = null; // Currently, key can be spread in as a prop. This causes a potential
          // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
          // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
          // but as an intermediary step, we will use jsxDEV for everything except
          // <div {...props} key="Hi" />, because we aren't currently able to tell if
          // key is explicitly declared to be undefined or not.

          if (maybeKey !== undefined) {
            key = '' + maybeKey;
          }

          if (hasValidKey(config)) {
            key = '' + config.key;
          }

          if (hasValidRef(config)) {
            ref = config.ref;
            warnIfStringRefCannotBeAutoConverted(config, self);
          } // Remaining properties are added to a new props object


          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          } // Resolve default props


          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;

            for (propName in defaultProps) {
              if (props[propName] === undefined) {
                props[propName] = defaultProps[propName];
              }
            }
          }

          if (key || ref) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }

            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }

          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
      }

      var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

      function setCurrentlyValidatingElement$1(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
          }
        }
      }

      var propTypesMisspellWarningShown;
      {
        propTypesMisspellWarningShown = false;
      }
      /**
       * Verifies the object is a ReactElement.
       * See https://reactjs.org/docs/react-api.html#isvalidelement
       * @param {?object} object
       * @return {boolean} True if `object` is a ReactElement.
       * @final
       */

      function isValidElement(object) {
        {
          return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
      }

      function getDeclarationErrorAddendum() {
        {
          if (ReactCurrentOwner$1.current) {
            var name = getComponentName(ReactCurrentOwner$1.current.type);

            if (name) {
              return '\n\nCheck the render method of `' + name + '`.';
            }
          }

          return '';
        }
      }

      function getSourceInfoErrorAddendum(source) {
        {
          if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
            var lineNumber = source.lineNumber;
            return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
          }

          return '';
        }
      }
      /**
       * Warn if there's no key explicitly set on dynamic arrays of children or
       * object keys are not valid. This allows us to keep track of children between
       * updates.
       */


      var ownerHasKeyUseWarning = {};

      function getCurrentComponentErrorInfo(parentType) {
        {
          var info = getDeclarationErrorAddendum();

          if (!info) {
            var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }

          return info;
        }
      }
      /**
       * Warn if the element doesn't have an explicit key assigned to it.
       * This element is in an array. The array could grow and shrink or be
       * reordered. All children that haven't already been validated are required to
       * have a "key" property assigned to it. Error statuses are cached so a warning
       * will only be shown once.
       *
       * @internal
       * @param {ReactElement} element Element that requires a key.
       * @param {*} parentType element's parent's type.
       */


      function validateExplicitKey(element, parentType) {
        {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }

          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }

          ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
          // property, it may be the creator of the child that's responsible for
          // assigning it a key.

          var childOwner = '';

          if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
            // Give the component that originally created this child.
            childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
          }

          setCurrentlyValidatingElement$1(element);
          error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
          setCurrentlyValidatingElement$1(null);
        }
      }
      /**
       * Ensure that every element either is passed in a static location, in an
       * array with an explicit keys property defined, or in an object literal
       * with valid key property.
       *
       * @internal
       * @param {ReactNode} node Statically passed child of any type.
       * @param {*} parentType node's parent's type.
       */


      function validateChildKeys(node, parentType) {
        {
          if (_typeof(node) !== 'object') {
            return;
          }

          if (Array.isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];

              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            // This element was passed in a valid location.
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);

            if (typeof iteratorFn === 'function') {
              // Entry iterators used to provide implicit keys,
              // but now we print a separate warning for them later.
              if (iteratorFn !== _entriesInstanceProperty(node)) {
                var iterator = iteratorFn.call(node);
                var step;

                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
      }
      /**
       * Given an element, validate that its props follow the propTypes definition,
       * provided by the type.
       *
       * @param {ReactElement} element
       */


      function validatePropTypes(element) {
        {
          var type = element.type;

          if (type === null || type === undefined || typeof type === 'string') {
            return;
          }

          var propTypes;

          if (typeof type === 'function') {
            propTypes = type.propTypes;
          } else if (_typeof(type) === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          type.$$typeof === REACT_MEMO_TYPE)) {
            propTypes = type.propTypes;
          } else {
            return;
          }

          if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentName(type);
            checkPropTypes(propTypes, element.props, 'prop', name, element);
          } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

            var _name = getComponentName(type);

            error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
          }

          if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
            error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
          }
        }
      }
      /**
       * Given a fragment, validate that it can only be provided with fragment props
       * @param {ReactElement} fragment
       */


      function validateFragmentProps(fragment) {
        {
          var keys = _Object$keys(fragment.props);

          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];

            if (key !== 'children' && key !== 'key') {
              setCurrentlyValidatingElement$1(fragment);
              error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
              setCurrentlyValidatingElement$1(null);
              break;
            }
          }

          if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error('Invalid attribute `ref` supplied to `React.Fragment`.');
            setCurrentlyValidatingElement$1(null);
          }
        }
      }

      function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        {
          var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
          // succeed and there will likely be errors in render.

          if (!validType) {
            var info = '';

            if (type === undefined || _typeof(type) === 'object' && type !== null && _Object$keys(type).length === 0) {
              info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
            }

            var sourceInfo = getSourceInfoErrorAddendum(source);

            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }

            var typeString;

            if (type === null) {
              typeString = 'null';
            } else if (Array.isArray(type)) {
              typeString = 'array';
            } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
              info = ' Did you accidentally export a JSX literal instead of a component?';
            } else {
              typeString = _typeof(type);
            }

            error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
          }

          var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
          // TODO: Drop this when these are no longer allowed as the type argument.

          if (element == null) {
            return element;
          } // Skip key warning if the type isn't valid since our key validation logic
          // doesn't expect a non-string/function type and can throw confusing errors.
          // We don't want exception behavior to differ between dev and prod.
          // (Rendering will throw with a helpful message and as soon as the type is
          // fixed, the key warnings will appear.)


          if (validType) {
            var children = props.children;

            if (children !== undefined) {
              if (isStaticChildren) {
                if (Array.isArray(children)) {
                  for (var i = 0; i < children.length; i++) {
                    validateChildKeys(children[i], type);
                  }

                  if (_Object$freeze) {
                    _Object$freeze(children);
                  }
                } else {
                  error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
                }
              } else {
                validateChildKeys(children, type);
              }
            }
          }

          if (type === exports.Fragment) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }

          return element;
        }
      } // These two functions exist to still get child warnings in dev
      // even with the prod transform. This means that jsxDEV is purely
      // opt-in behavior for better messages but that we won't stop
      // giving you warnings if you use production apis.


      function jsxWithValidationStatic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, true);
        }
      }

      function jsxWithValidationDynamic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, false);
        }
      }

      var jsx = jsxWithValidationDynamic; // we may want to special case jsxs internally to take advantage of static children.
      // for now we can ship identical prod functions

      var jsxs = jsxWithValidationStatic;
      exports.jsx = jsx;
      exports.jsxs = jsxs;
    })();
  }
})(reactJsxRuntime_development);

if (process.env.NODE_ENV === 'production') {
  jsxRuntime.exports = reactJsxRuntime_production_min;
} else {
  jsxRuntime.exports = reactJsxRuntime_development;
}

function Index$16(props) {
  var onGetUserInfo = props.onGetUserInfo,
      onFail = props.onFail,
      desc = props.desc,
      children = props.children,
      others = __rest(props, ["onGetUserInfo", "onFail", "desc", "children"]);

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      userProfile = _useState2[0],
      setUserProfile = _useState2[1];

  useEffect(function () {
    var canIUse = false;

    if (process.env.TARO_ENV !== 'h5') {
      try {
        canIUse = Taro.canIUse('getUserProfile');
      } catch (_a) {}
    }

    setUserProfile(canIUse);
  }, []);

  var getUserProfile = function getUserProfile() {
    Taro.getUserProfile({
      desc: desc || '??????????????????',
      success: function success(res) {
        onGetUserInfo(res);
      },
      fail: function fail(error) {
        onFail(error);
      }
    });
  };

  var getTTUserInfo = function getTTUserInfo() {
    Taro.getUserInfo({
      success: function success(res) {
        onGetUserInfo(res);
      },
      fail: function fail(error) {
        onFail(error);
      }
    });
  };

  var getUserInfo = function getUserInfo(e) {
    if (process.env.TARO_ENV === 'alipay') {
      my.getOpenUserInfo({
        fail: function fail(e) {
          onFail({
            errMsg: e.errorMessage || _JSON$stringify(e)
          });
        },
        success: function success(res) {
          var userInfo = JSON.parse(res.response).response; // ???????????????????????????????????? response

          onGetUserInfo(userInfo);
        }
      });
    } else {
      if (e.detail) {
        onGetUserInfo(e.detail);
      } else {
        onFail(e);
      }
    }
  };

  var getError = function getError(e) {
    var _a, _b, _c;

    onFail({
      errMsg: /??????/.test((_b = (_a = e.detail) === null || _a === void 0 ? void 0 : _a.errorMessage) !== null && _b !== void 0 ? _b : '') ? 'getUserInfo:fail auth deny' : (_c = e.detail) === null || _c === void 0 ? void 0 : _c.errorMessage
    });
  };

  if (process.env.TARO_ENV === 'alipay') {
    return jsxRuntime.exports.jsx(Index$16, _Object$assign({}, others, {
      openType: "getAuthorize",
      scope: "userInfo",
      onError: getError,
      onGetAuthorize: getUserInfo
    }, {
      children: children
    }), void 0);
  }

  return jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, {
    children: userProfile ? jsxRuntime.exports.jsx(Index$16, _Object$assign({}, others, {
      onClick: getUserProfile
    }, {
      children: children
    }), void 0) : process.env.TARO_ENV === 'tt' ? jsxRuntime.exports.jsx(Index$16, _Object$assign({}, others, {
      onClick: getTTUserInfo
    }, {
      children: children
    }), void 0) : jsxRuntime.exports.jsx(Index$16, _Object$assign({}, others, {
      openType: "getUserInfo",
      onGetUserInfo: getUserInfo
    }, {
      children: children
    }), void 0)
  }, void 0);
}

function Index$15(props) {
  var onGetLoginCode = props.onGetLoginCode,
      onFail = props.onFail,
      children = props.children,
      others = __rest(props, ["onGetLoginCode", "onFail", "children"]);

  var onLogin = function onLogin() {
    if (process.env.TARO_ENV === 'alipay') {
      my.getAuthCode({
        scopes: ['auth_base'],
        success: function success(res) {
          if (res.authCode) {
            onGetLoginCode({
              errMsg: 'login:ok',
              code: res.authCode
            });
          } else {
            onFail({
              errMsg: res.errorMessage || 'login:error'
            });
          }
        },
        fail: function fail(e) {
          onFail({
            errMsg: e.errorMessage
          });
        }
      });
    } else {
      Taro.login({
        success: function success(res) {
          onGetLoginCode(res);
        },
        fail: function fail(e) {
          onFail(e);
        }
      });
    }
  };

  return jsxRuntime.exports.jsx(Index$16, _Object$assign({}, others, {
    onClick: onLogin
  }, {
    children: children
  }), void 0);
}

function Index$14(props) {
  var onGetPhone = props.onGetPhone,
      onFail = props.onFail,
      children = props.children,
      others = __rest(props, ["onGetPhone", "onFail", "children"]);

  var getPhone = function getPhone(e) {
    if (process.env.TARO_ENV === 'alipay') {
      my.getPhoneNumber({
        success: function success(res) {
          if (res.response) {
            onGetPhone({
              encryptedData: res.response,
              iv: '',
              errMsg: 'getPhoneNumber:ok'
            });
          }
        },
        fail: function fail(e) {
          onFail({
            errMsg: e.errorMessage || _JSON$stringify(e)
          });
        }
      });
    } else {
      if (e.detail) {
        onGetPhone(e.detail);
      } else {
        onFail(e);
      }
    }
  };

  var getError = function getError(e) {
    var _a, _b, _c;

    onFail({
      errMsg: /??????/.test((_b = (_a = e.detail) === null || _a === void 0 ? void 0 : _a.errorMessage) !== null && _b !== void 0 ? _b : '') ? 'getUserInfo:fail auth deny' : (_c = e.detail) === null || _c === void 0 ? void 0 : _c.errorMessage
    });
  };

  return jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, {
    children: process.env.TARO_ENV === 'alipay' ? jsxRuntime.exports.jsx(Index$16, _Object$assign({}, others, {
      openType: "getAuthorize",
      scope: "phoneNumber",
      onError: getError,
      onGetAuthorize: getPhone
    }, {
      children: children
    }), void 0) : jsxRuntime.exports.jsx(Index$16, _Object$assign({}, others, {
      openType: "getPhoneNumber",
      onGetPhoneNumber: getPhone
    }, {
      children: children
    }), void 0)
  }, void 0);
}

function Index$13(props) {
  var onGetUserInfo = props.onGetUserInfo,
      onFail = props.onFail,
      desc = props.desc,
      children = props.children,
      others = __rest(props, ["onGetUserInfo", "onFail", "desc", "children"]);

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      userProfile = _useState4[0],
      setUserProfile = _useState4[1];

  useEffect(function () {
    var canIUse = false;

    if (process.env.TARO_ENV !== 'h5') {
      try {
        canIUse = Taro.canIUse('getUserProfile');
      } catch (_a) {}
    }

    setUserProfile(canIUse);
  }, []);

  var getUserProfile = function getUserProfile() {
    Taro.getUserProfile({
      desc: desc || '??????????????????',
      success: function success(res) {
        onGetUserInfo(res);
      },
      fail: function fail(error) {
        onFail(error);
      }
    });
  };

  var getTTUserInfo = function getTTUserInfo() {
    Taro.getUserInfo({
      success: function success(res) {
        onGetUserInfo(res);
      },
      fail: function fail(error) {
        onFail(error);
      }
    });
  };

  var getUserInfo = function getUserInfo(e) {
    if (process.env.TARO_ENV === 'alipay') {
      my.getOpenUserInfo({
        fail: function fail(e) {
          onFail({
            errMsg: e.errorMessage || _JSON$stringify(e)
          });
        },
        success: function success(res) {
          var userInfo = JSON.parse(res.response).response; // ???????????????????????????????????? response

          onGetUserInfo(userInfo);
        }
      });
    } else {
      if (e.detail) {
        onGetUserInfo(e.detail);
      } else {
        onFail(e);
      }
    }
  };

  var getError = function getError(e) {
    var _a, _b, _c;

    onFail({
      errMsg: /??????/.test((_b = (_a = e.detail) === null || _a === void 0 ? void 0 : _a.errorMessage) !== null && _b !== void 0 ? _b : '') ? 'getUserInfo:fail auth deny' : (_c = e.detail) === null || _c === void 0 ? void 0 : _c.errorMessage
    });
  };

  if (process.env.TARO_ENV === 'alipay') {
    return jsxRuntime.exports.jsx(Index$16, _Object$assign({}, others, {
      openType: "getAuthorize",
      scope: "userInfo",
      onError: getError,
      onGetAuthorize: getUserInfo
    }, {
      children: children
    }), void 0);
  }

  return jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, {
    children: userProfile ? jsxRuntime.exports.jsx(Index$16, _Object$assign({}, others, {
      onClick: getUserProfile
    }, {
      children: children
    }), void 0) : process.env.TARO_ENV === 'tt' ? jsxRuntime.exports.jsx(Index$16, _Object$assign({}, others, {
      onClick: getTTUserInfo
    }, {
      children: children
    }), void 0) : jsxRuntime.exports.jsx(Index$16, _Object$assign({}, others, {
      openType: "getUserInfo",
      onGetUserInfo: getUserInfo
    }, {
      children: children
    }), void 0)
  }, void 0);
}

function isArray(array) {
  return array && toString.call(array) === '[object Array]';
}

var REGEXP = new RegExp('{|}|"', 'g');

function keys(obj) {
  var _context4;

  return _mapInstanceProperty(_context4 = _JSON$stringify(obj).replace(REGEXP, '').split(',')).call(_context4, function (item) {
    return item.split(':')[0];
  });
}

var PREFIX = 'van-';

function join(name, mods) {
  name = PREFIX + name;
  mods = _mapInstanceProperty(mods).call(mods, function (mod) {
    return name + '--' + mod;
  });
  mods.unshift(name);
  return mods.join(' ');
}

function traversing(mods, conf) {
  if (!conf) {
    return;
  } // ?????????


  if (typeof conf === 'string' || typeof conf === 'number') {
    mods.push(conf);
  } else if (isArray(conf)) {
    // ?????????
    _forEachInstanceProperty(conf).call(conf, function (item) {
      traversing(mods, item);
    });
  } else if (_typeof(conf) === 'object') {
    var _context5;

    // ?????????
    _forEachInstanceProperty(_context5 = keys(conf)).call(_context5, function (key) {
      conf[key] && mods.push(key);
    });
  }
}

function _bem(name, conf) {
  var mods = [];
  traversing(mods, conf);
  return join(name, mods);
}
/**
 * Simple memoize
 * wxs doesn't support fn.apply, so this memoize only support up to 2 args
 */

/* eslint-disable */


function isPrimitive(value) {
  var type = _typeof(value);

  return type === 'boolean' || type === 'number' || type === 'string' || type === 'undefined' || value === null;
} // mock simple fn.call in wxs


function call(fn, args) {
  if (args.length === 2) {
    return fn(args[0], args[1]);
  }

  if (args.length === 1) {
    return fn(args[0]);
  }

  return fn();
}

function serializer(args) {
  if (args.length === 1 && isPrimitive(args[0])) {
    return args[0];
  }

  var obj = {};

  for (var i = 0; i < args.length; i++) {
    obj['key' + i] = args[i];
  }

  return _JSON$stringify(obj);
}

function memoize(fn) {
  var cache = {};
  return function () {
    var key = serializer(arguments);

    if (cache[key] === undefined) {
      cache[key] = call(fn, arguments);
    }

    return cache[key];
  };
}

function addUnit$1(value) {
  if (value == null) {
    return undefined;
  }

  return /^-?\d+(\.\d+)?$/.test('' + value) ? Taro.pxTransform(value) : value;
}

function kebabCase$1(word) {
  var newWord = word.replace(new RegExp('[A-Z]', 'g'), function (i) {
    return '-' + i;
  }).toLowerCase();
  return newWord;
}

function style(styles) {
  if (isArray(styles)) {
    var _context6;

    return _mapInstanceProperty(_context6 = _filterInstanceProperty(styles).call(styles, function (item) {
      return item != null && item !== '';
    })).call(_context6, function (item) {
      return style(item);
    }).join(';');
  }

  if (toString.call(styles) === '[object Object]') {
    var _context7, _context8;

    return _mapInstanceProperty(_context7 = _filterInstanceProperty(_context8 = keys(styles)).call(_context8, function (key) {
      return styles[key] != null && styles[key] !== '';
    })).call(_context7, function (key) {
      return [kebabCase$1(key), [styles[key]]].join(':');
    }).join(';');
  }

  return styles;
}

var bem = memoize(_bem);
var RED = '#ee0a24';
var BLUE$1 = '#1989fa';
var GREEN = '#07c160';
var GRAY = '#323233';
var GRAY_DARK$1 = '#969799'; // eslint-disable-next-line @typescript-eslint/ban-types

function isFunction(val) {
  return typeof val === 'function';
}

function isPlainObject(val) {
  return val !== null && _typeof(val) === 'object' && !Array.isArray(val);
}

function isPromise(val) {
  return isPlainObject(val) && isFunction(val.then) && isFunction(val.catch);
}

function isDef(value) {
  return value !== undefined && value !== null;
}

function isObj$1(x) {
  var type = _typeof(x);

  return x !== null && (type === 'object' || type === 'function');
}

function isBoolean(value) {
  return typeof value === 'boolean';
}

var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
var VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;

function isImageUrl(url) {
  return IMAGE_REGEXP.test(url);
}

function isVideoUrl(url) {
  return VIDEO_REGEXP.test(url);
}

function compareVersion(v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  var len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push('0');
  }

  while (v2.length < len) {
    v2.push('0');
  }

  for (var i = 0; i < len; i++) {
    var num1 = _parseInt(v1[i], 10);

    var num2 = _parseInt(v2[i], 10);

    if (num1 > num2) {
      return 1;
    }

    if (num1 < num2) {
      return -1;
    }
  }

  return 0;
}

var systemInfo$1;

function getSystemInfoSync$1() {
  if (systemInfo$1 == null) {
    systemInfo$1 = Taro.getSystemInfoSync();
  }

  return systemInfo$1;
}

function gte(version) {
  var system = getSystemInfoSync$1();
  return compareVersion(system.SDKVersion, version) >= 0;
}

function canIUseModel() {
  return gte('2.9.3');
}

function range$1(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

var systemInfo;

function getSystemInfoSync() {
  if (systemInfo == null) {
    systemInfo = getSystemInfoSync$2();
  }

  return systemInfo;
}

var menuInfo;

function getMenuButtonBoundingClientRect() {
  if (menuInfo == null) {
    menuInfo = Taro.getMenuButtonBoundingClientRect();
  }

  return menuInfo;
}

function addUnit(value) {
  if (!isDef(value)) {
    return undefined;
  }

  return /^-?\d+(\.\d+)?$/.test('' + value) ? Taro.pxTransform(value) : value;
}

function requestAnimationFrame$1(cb) {
  var systemInfo = getSystemInfoSync();

  if (systemInfo.platform === 'devtools') {
    return setTimeout(function () {
      cb();
    }, 33.333333333333336);
  }

  return createSelectorQuery().selectViewport().boundingClientRect().exec(function () {
    cb();
  });
}

function pickExclude(obj, keys) {
  var _context9;

  if (!isPlainObject(obj)) {
    return {};
  }

  return _reduceInstanceProperty(_context9 = _Object$keys(obj)).call(_context9, function (prev, key) {
    if (!_includesInstanceProperty(keys).call(keys, key)) {
      prev[key] = obj[key];
    }

    return prev;
  }, {});
}

function getRect(context, selector) {
  return new _Promise(function (resolve) {
    var query = createSelectorQuery();

    if (context) {
      query = query.in(context);
    }

    query.select(selector).boundingClientRect().exec(function () {
      var rect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return resolve(rect[0]);
    });
  });
}

function getAllRect(context, selector) {
  return new _Promise(function (resolve) {
    var query = createSelectorQuery();

    if (context) {
      query = query.in(context);
    }

    query.selectAll(selector).boundingClientRect().exec(function () {
      var rect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return resolve(rect[0]);
    });
  });
}

function toPromise(promiseLike) {
  if (isPromise(promiseLike)) {
    return promiseLike;
  }

  return _Promise.resolve(promiseLike);
}

function getCurrentPage() {
  var pages = Taro.getCurrentPages();
  return pages[pages.length - 1];
}

function pivotText(pivotText, percentage) {
  return pivotText || percentage + '%';
}

function rootStyle$c(data) {
  return style({
    height: data.strokeWidth ? addUnit$1(data.strokeWidth) : '',
    background: data.trackColor
  });
}

function portionStyle(data) {
  return style({
    background: data.inactive ? '#cacaca' : data.color,
    width: data.percentage ? data.percentage + '%' : ''
  });
}

function pivotStyle(data) {
  return style({
    color: data.textColor,
    visibility: data.right === 0 ? 'hidden' : 'visible',
    right: data.right + 'px',
    background: data.pivotColor ? data.pivotColor : data.inactive ? '#cacaca' : data.color
  });
}

function Index$12(props) {
  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      right = _useState6[0],
      setRight = _useState6[1];

  useEffect(function () {
    Taro.nextTick(function () {
      _Promise.all([getRect(null, '.van-progress'), getRect(null, '.van-progress__pivot')]).then(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            portion = _ref3[0],
            pivot = _ref3[1];

        if (portion && pivot) {
          setRight(pivot.width * (props.percentage - 100) / 100);
        }
      });
    });
  }, [props.percentage]);

  var _props$strokeWidth = props.strokeWidth,
      strokeWidth = _props$strokeWidth === void 0 ? 4 : _props$strokeWidth,
      trackColor = props.trackColor,
      percentage = props.percentage,
      inactive = props.inactive,
      _props$color = props.color,
      color = _props$color === void 0 ? BLUE$1 : _props$color,
      _props$textColor = props.textColor,
      textColor = _props$textColor === void 0 ? '#ffffff' : _props$textColor,
      pivotColor = props.pivotColor,
      pivotText$1 = props.pivotText,
      _props$showPivot = props.showPivot,
      showPivot = _props$showPivot === void 0 ? true : _props$showPivot,
      style$1 = props.style,
      className = props.className,
      others = __rest(props, ["strokeWidth", "trackColor", "percentage", "inactive", "color", "textColor", "pivotColor", "pivotText", "showPivot", "style", "className"]);

  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: 'van-progress custom-class ' + className,
    style: style([rootStyle$c({
      strokeWidth: strokeWidth,
      trackColor: trackColor
    }), style$1])
  }, others, {
    children: jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-progress__portion",
      style: portionStyle({
        percentage: percentage,
        inactive: inactive,
        color: color
      })
    }, {
      children: showPivot && pivotText(pivotText$1, percentage) && jsxRuntime.exports.jsx(View, _Object$assign({
        style: pivotStyle({
          textColor: textColor,
          pivotColor: pivotColor,
          inactive: inactive,
          color: color,
          right: right
        }),
        className: "van-progress__pivot"
      }, {
        children: pivotText(pivotText$1, percentage)
      }), void 0)
    }), void 0)
  }), void 0);
}

var Popup = 1010;
var Overlay = 1000;
var Navbar = 805;
var Tabbar = 805;
var Sticky = 800;
var Tabs = 600; // import { addUnit } from '../wxs/add-unit'

function wrapStyle(data) {
  return style({
    transform: data.transform ? 'translate3d(0, ' + data.transform + 'px, 0)' : '',
    top: data.fixed ? data.offsetTop + 'px' : '',
    'z-index': data.zIndex
  });
}

function containerStyle(data) {
  return style({
    height: data.fixed ? data.height + 'px' : '',
    'z-index': data.zIndex
  });
}

var ROOT_ELEMENT = '.van-sticky';
var comIndex$2 = 0;

function Index$11(props) {
  var indexRef = useRef(comIndex$2);

  var _useState7 = useState({
    height: 0,
    fixed: false,
    transform: 0
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      state = _useState8[0],
      setState = _useState8[1];

  var _props$zIndex = props.zIndex,
      zIndex = _props$zIndex === void 0 ? Sticky : _props$zIndex,
      _props$offsetTop = props.offsetTop,
      offsetTop = _props$offsetTop === void 0 ? 0 : _props$offsetTop,
      scrollTop = props.scrollTop,
      disabled = props.disabled,
      container = props.container,
      onScroll = props.onScroll,
      style$1 = props.style,
      className = props.className,
      children = props.children,
      others = __rest(props, ["zIndex", "offsetTop", "scrollTop", "disabled", "container", "onScroll", "style", "className", "children"]);

  var ref = useRef({});
  useEffect(function () {
    comIndex$2++;
    indexRef.current = comIndex$2;
  }, []);
  var getContainerRect = useCallback(function () {
    var nodesRef = container === null || container === void 0 ? void 0 : container();
    return new _Promise(function (resolve) {
      return nodesRef === null || nodesRef === void 0 ? void 0 : nodesRef.boundingClientRect().exec(function () {
        var rect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return resolve(rect[0]);
      });
    });
  }, [container]);
  var setDataAfterDiff = useCallback(function (data) {
    var _context10;

    var diff = _reduceInstanceProperty(_context10 = _Object$keys(data)).call(_context10, function (prev, key) {
      if (data[key] !== state[key]) {
        prev[key] = data[key];
      }

      return prev;
    }, {});

    if (_Object$keys(diff).length > 0) {
      setState(function (pre) {
        return _Object$assign(_Object$assign({}, pre), diff);
      });
    }

    onScroll === null || onScroll === void 0 ? void 0 : onScroll({
      detail: {
        scrollTop: ref.current.scrollTop,
        isFixed: data.fixed || state.fixed
      }
    });
  }, [onScroll, state]);
  var onMyScroll = useCallback(function (scrollTop) {
    var _context12;

    if (disabled) {
      setDataAfterDiff({
        fixed: false,
        transform: 0
      });
      return;
    }

    ref.current.scrollTop = scrollTop || ref.current.scrollTop;

    if (typeof container === 'function') {
      var _context11;

      _Promise.all([getRect(null, _concatInstanceProperty(_context11 = ".sticky-com-index".concat(indexRef.current)).call(_context11, ROOT_ELEMENT)), getContainerRect()]).then(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            root = _ref5[0],
            container = _ref5[1];

        if (root && container) {
          if (offsetTop + root.height > container.height + container.top) {
            setDataAfterDiff({
              fixed: false,
              transform: container.height - root.height
            });
          } else if (offsetTop >= root.top) {
            setDataAfterDiff({
              fixed: true,
              height: root.height,
              transform: 0
            });
          } else {
            setDataAfterDiff({
              fixed: false,
              transform: 0
            });
          }
        }
      }).catch(function (e) {
        console.log(e);
      });

      return;
    }

    getRect(null, _concatInstanceProperty(_context12 = ".sticky-com-index".concat(indexRef.current)).call(_context12, ROOT_ELEMENT)).then(function (root) {
      if (!isDef(root)) {
        return;
      }

      if (offsetTop >= root.top) {
        setDataAfterDiff({
          fixed: true,
          height: root.height
        }); // this.transform = 0
      } else {
        setDataAfterDiff({
          fixed: false
        });
      }
    });
  }, [container, disabled, getContainerRect, offsetTop, setDataAfterDiff]);
  useEffect(function () {
    onMyScroll(scrollTop);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [scrollTop, container, disabled, offsetTop]);
  usePageScroll$1(function (e) {
    onMyScroll(e.scrollTop);
  }); // console.log()

  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: "sticky-com-index".concat(indexRef.current, " ") + 'custom-class van-sticky ' + className,
    style: style([containerStyle({
      fixed: state.fixed,
      height: state.height,
      zIndex: zIndex
    }), style$1])
  }, others, {
    children: jsxRuntime.exports.jsx(View, _Object$assign({
      className: bem('sticky-wrap', {
        fixed: state.fixed
      }) + " ".concat(className || ''),
      style: style([wrapStyle({
        fixed: state.fixed,
        offsetTop: offsetTop,
        transform: state.transform,
        zIndex: zIndex
      }), style$1])
    }, {
      children: children
    }), void 0)
  }), void 0);
}

function Index$10(props) {
  var dot = props.dot,
      _props$info = props.info,
      info = _props$info === void 0 ? null : _props$info,
      customStyle = props.customStyle,
      style$1 = props.style,
      className = props.className,
      others = __rest(props, ["dot", "info", "customStyle", "style", "className"]);

  return jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, {
    children: (info || info === 0 || dot) && jsxRuntime.exports.jsx(View, _Object$assign({
      className: 'van-info ' + bem('info', {
        dot: dot
      }) + ' custom-class ' + className,
      style: style([customStyle, style$1])
    }, others, {
      children: dot ? '' : info
    }), void 0)
  }, void 0);
}

function isImage(name) {
  return _indexOfInstanceProperty(name).call(name, '/') !== -1;
}

function rootClass(data) {
  var classes = ['custom-class'];

  if (data.classPrefix != null) {
    classes.push(data.classPrefix);
  }

  if (isImage(data.name)) {
    classes.push('van-icon--image');
  } else if (data.classPrefix != null) {
    classes.push(data.classPrefix + '-' + data.name);
  }

  return classes.join(' ');
}

function rootStyle$b(data) {
  return style([{
    color: data.color,
    'font-size': addUnit$1(data.size)
  }, data.customStyle]);
}

function Index$$(props) {
  var _props$classPrefix = props.classPrefix,
      classPrefix = _props$classPrefix === void 0 ? 'van-icon' : _props$classPrefix,
      name = props.name,
      customStyle = props.customStyle,
      color = props.color,
      size = props.size,
      dot = props.dot,
      info = props.info,
      style$1 = props.style,
      className = props.className,
      others = __rest(props, ["classPrefix", "name", "customStyle", "color", "size", "dot", "info", "style", "className"]);

  return jsxRuntime.exports.jsxs(View, _Object$assign({
    className: rootClass({
      classPrefix: classPrefix,
      name: name
    }) + " ".concat(className || ''),
    style: style([rootStyle$b({
      customStyle: customStyle,
      color: color,
      size: size
    }), style$1])
  }, others, {
    children: [(info || info === 0 || dot) && jsxRuntime.exports.jsx(Index$10, {
      dot: dot,
      info: info,
      className: "van-icon__info"
    }, void 0), isImage(name) && jsxRuntime.exports.jsx(Image, {
      src: name,
      mode: "aspectFit",
      className: "van-icon__image"
    }, void 0)]
  }), void 0);
}

function barStyle(data) {
  return style({
    'z-index': data.zIndex,
    'padding-top': data.fromTop + 'px',
    height: data.height + 'px'
  });
}

function Index$_(props) {
  var _useState9 = useState({
    height: 40,
    fromTop: 44,
    fromLeft: 7,
    menuHeight: 32,
    menuWidth: 87,
    screenWidth: 375
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      state = _useState10[0],
      setState = _useState10[1];

  var _props$fixed = props.fixed,
      fixed = _props$fixed === void 0 ? true : _props$fixed,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? true : _props$placeholder,
      _props$border = props.border,
      border = _props$border === void 0 ? true : _props$border,
      _props$zIndex2 = props.zIndex,
      zIndex = _props$zIndex2 === void 0 ? Navbar : _props$zIndex2,
      renderTitle = props.renderTitle,
      customStyle = props.customStyle,
      homeUrl = props.homeUrl,
      _props$buttonColor = props.buttonColor,
      buttonColor = _props$buttonColor === void 0 ? 'white' : _props$buttonColor,
      title = props.title,
      style$1 = props.style,
      className = props.className,
      others = __rest(props, ["fixed", "placeholder", "border", "zIndex", "renderTitle", "customStyle", "homeUrl", "buttonColor", "title", "style", "className"]);

  var height = state.height,
      fromTop = state.fromTop,
      fromLeft = state.fromLeft,
      menuHeight = state.menuHeight,
      menuWidth = state.menuWidth,
      screenWidth = state.screenWidth;
  var handleGoBack = useCallback(function () {
    Taro.navigateBack({
      delta: 1
    });
  }, []);
  var handleGoHome = useCallback(function () {
    Taro.reLaunch({
      url: homeUrl
    });
  }, [homeUrl]);

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      backButton = _useState12[0],
      setBackButton = _useState12[1];

  var _useState13 = useState(false),
      _useState14 = _slicedToArray(_useState13, 2),
      homeButton = _useState14[0],
      setHomeButton = _useState14[1];

  useEffect(function () {
    var pages = Taro.getCurrentPages();

    if (pages.length >= 1) {
      var ins = pages[pages.length - 1];
      var url = ins.route || ins.__route__ || ins['$taroPath'];

      if (url !== homeUrl) {
        setHomeButton(true);
      }

      if (pages.length > 1) {
        setBackButton(true);
      }
    }
  }, [homeUrl]);
  useEffect(function () {
    var sysInfo = getSystemInfoSync();
    var menuInfo = getMenuButtonBoundingClientRect();

    if (sysInfo && menuInfo) {
      setState({
        height: (menuInfo.top - sysInfo.statusBarHeight) * 2 + menuInfo.height,
        fromTop: sysInfo.statusBarHeight,
        fromLeft: sysInfo.screenWidth - menuInfo.right,
        menuHeight: menuInfo.height,
        menuWidth: menuInfo.width,
        screenWidth: sysInfo.screenWidth
      });
    }
  }, []);
  return jsxRuntime.exports.jsxs(Block, {
    children: [fixed && placeholder && jsxRuntime.exports.jsx(View, {
      style: {
        height: "".concat(height + fromTop, "px")
      }
    }, void 0), jsxRuntime.exports.jsx(View, _Object$assign({
      className: bem('mini-nav-bar', {
        fixed: fixed
      }) + ' custom-class ' + (border ? 'van-hairline--bottom' : '') + " ".concat(className || ''),
      style: style([barStyle({
        zIndex: zIndex,
        fromTop: fromTop,
        height: height,
        fromLeft: fromLeft
      }) + '; ' + customStyle, style$1])
    }, others, {
      children: jsxRuntime.exports.jsxs(View, _Object$assign({
        className: "van-mini-nav-bar__content"
      }, {
        children: [jsxRuntime.exports.jsxs(View, _Object$assign({
          className: "van-mini-nav-bar__left",
          style: {
            left: "".concat(fromLeft, "px")
          }
        }, {
          children: [backButton && jsxRuntime.exports.jsx(View, _Object$assign({
            className: "van-mini-nav-bar__left-menu van-mini-nav-bar__left-menu-".concat(buttonColor),
            onClick: handleGoBack,
            style: {
              width: "".concat(menuHeight, "px"),
              height: "".concat(menuHeight, "px")
            }
          }, {
            children: jsxRuntime.exports.jsx(Index$$, {
              name: "arrow-left",
              size: 40
            }, void 0)
          }), void 0), homeButton && jsxRuntime.exports.jsx(View, _Object$assign({
            className: "van-mini-nav-bar__left-menu van-mini-nav-bar__left-menu-".concat(buttonColor),
            onClick: handleGoHome,
            style: {
              width: "".concat(menuHeight, "px"),
              height: "".concat(menuHeight, "px")
            }
          }, {
            children: jsxRuntime.exports.jsx(Index$$, {
              name: "wap-home",
              size: 40
            }, void 0)
          }), void 0)]
        }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
          className: "van-mini-nav-bar__title title-class van-ellipsis",
          style: {
            width: "".concat(screenWidth - menuWidth * 2 - fromLeft * 4, "px")
          }
        }, {
          children: title ? jsxRuntime.exports.jsx(Block, {
            children: title
          }, void 0) : renderTitle
        }), void 0), jsxRuntime.exports.jsx(View, {
          className: "van-mini-nav-bar__right"
        }, void 0)]
      }), void 0)
    }), void 0)]
  }, void 0);
}

function Index$Z(props) {
  var _useState15 = useState({
    height: 40,
    fromTop: 44,
    fromLeft: 7,
    menuHeight: 32,
    menuWidth: 87,
    screenWidth: 375
  }),
      _useState16 = _slicedToArray(_useState15, 2),
      state = _useState16[0],
      setState = _useState16[1];

  var _props$fixed2 = props.fixed,
      fixed = _props$fixed2 === void 0 ? true : _props$fixed2,
      _props$placeholder2 = props.placeholder,
      placeholder = _props$placeholder2 === void 0 ? true : _props$placeholder2,
      _props$border2 = props.border,
      border = _props$border2 === void 0 ? true : _props$border2,
      _props$zIndex3 = props.zIndex,
      zIndex = _props$zIndex3 === void 0 ? Navbar : _props$zIndex3,
      renderTitle = props.renderTitle,
      customStyle = props.customStyle,
      homeUrl = props.homeUrl,
      _props$buttonColor2 = props.buttonColor,
      buttonColor = _props$buttonColor2 === void 0 ? 'white' : _props$buttonColor2,
      title = props.title,
      style$1 = props.style,
      className = props.className,
      others = __rest(props, ["fixed", "placeholder", "border", "zIndex", "renderTitle", "customStyle", "homeUrl", "buttonColor", "title", "style", "className"]);

  var height = state.height,
      fromTop = state.fromTop,
      fromLeft = state.fromLeft,
      menuHeight = state.menuHeight,
      menuWidth = state.menuWidth,
      screenWidth = state.screenWidth;
  var handleGoBack = useCallback(function () {
    Taro.navigateBack({
      delta: 1
    });
  }, []);
  var handleGoHome = useCallback(function () {
    Taro.reLaunch({
      url: homeUrl
    });
  }, [homeUrl]);

  var _useState17 = useState(false),
      _useState18 = _slicedToArray(_useState17, 2),
      backButton = _useState18[0],
      setBackButton = _useState18[1];

  var _useState19 = useState(false),
      _useState20 = _slicedToArray(_useState19, 2),
      homeButton = _useState20[0],
      setHomeButton = _useState20[1];

  useEffect(function () {
    var pages = Taro.getCurrentPages();

    if (pages.length >= 1) {
      var ins = pages[pages.length - 1];
      var url = ins.route || ins.__route__ || ins['$taroPath'];

      if (url !== homeUrl) {
        setHomeButton(true);
      }

      if (pages.length > 1) {
        setBackButton(true);
      }
    }
  }, [homeUrl]);
  useEffect(function () {
    var sysInfo = getSystemInfoSync();
    var menuInfo = getMenuButtonBoundingClientRect();

    if (sysInfo && menuInfo) {
      setState({
        height: (menuInfo.top - sysInfo.statusBarHeight) * 2 + menuInfo.height,
        fromTop: sysInfo.statusBarHeight,
        fromLeft: sysInfo.screenWidth - menuInfo.right,
        menuHeight: menuInfo.height,
        menuWidth: menuInfo.width,
        screenWidth: sysInfo.screenWidth
      });
    }
  }, []);
  return jsxRuntime.exports.jsxs(Block, {
    children: [fixed && placeholder && jsxRuntime.exports.jsx(View, {
      style: {
        height: "".concat(height + fromTop, "px")
      }
    }, void 0), jsxRuntime.exports.jsx(View, _Object$assign({
      className: bem('mini-nav-bar', {
        fixed: fixed
      }) + ' custom-class ' + (border ? 'van-hairline--bottom' : '') + " ".concat(className || ''),
      style: style([barStyle({
        zIndex: zIndex,
        fromTop: fromTop,
        height: height,
        fromLeft: fromLeft
      }) + '; ' + customStyle, style$1])
    }, others, {
      children: jsxRuntime.exports.jsxs(View, _Object$assign({
        className: "van-mini-nav-bar__content"
      }, {
        children: [jsxRuntime.exports.jsxs(View, _Object$assign({
          className: "van-mini-nav-bar__left",
          style: {
            left: "".concat(fromLeft, "px")
          }
        }, {
          children: [backButton && jsxRuntime.exports.jsx(View, _Object$assign({
            className: "van-mini-nav-bar__left-menu van-mini-nav-bar__left-menu-".concat(buttonColor),
            onClick: handleGoBack,
            style: {
              width: "".concat(menuHeight, "px"),
              height: "".concat(menuHeight, "px")
            }
          }, {
            children: jsxRuntime.exports.jsx(Index$$, {
              name: "arrow-left",
              size: 40
            }, void 0)
          }), void 0), homeButton && jsxRuntime.exports.jsx(View, _Object$assign({
            className: "van-mini-nav-bar__left-menu van-mini-nav-bar__left-menu-".concat(buttonColor),
            onClick: handleGoHome,
            style: {
              width: "".concat(menuHeight, "px"),
              height: "".concat(menuHeight, "px")
            }
          }, {
            children: jsxRuntime.exports.jsx(Index$$, {
              name: "wap-home",
              size: 40
            }, void 0)
          }), void 0)]
        }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
          className: "van-mini-nav-bar__title title-class van-ellipsis",
          style: {
            width: "".concat(screenWidth - menuWidth * 2 - fromLeft * 4, "px")
          }
        }, {
          children: title ? jsxRuntime.exports.jsx(Block, {
            children: title
          }, void 0) : renderTitle
        }), void 0), jsxRuntime.exports.jsx(View, {
          className: "van-mini-nav-bar__right"
        }, void 0)]
      }), void 0)
    }), void 0)]
  }, void 0);
}
/* eslint-disable */


function popupStyle(data) {
  return style([{
    'z-index': data.zIndex,
    '-webkit-transition-duration': data.currentDuration + 'ms',
    'transition-duration': data.currentDuration + 'ms'
  }, data.display ? null : 'display: none']);
}

var getClassNames = function getClassNames(name) {
  var _context13, _context14, _context15, _context16;

  return {
    enter: _concatInstanceProperty(_context13 = "van-".concat(name, "-enter van-")).call(_context13, name, "-enter-active enter-class enter-active-class"),
    'enter-to': _concatInstanceProperty(_context14 = "van-".concat(name, "-enter-to van-")).call(_context14, name, "-enter-active enter-to-class enter-active-class"),
    leave: _concatInstanceProperty(_context15 = "van-".concat(name, "-leave van-")).call(_context15, name, "-leave-active leave-class leave-active-class"),
    'leave-to': _concatInstanceProperty(_context16 = "van-".concat(name, "-leave-to van-")).call(_context16, name, "-leave-active leave-to-class leave-active-class")
  };
};

function useTransition(_ref6) {
  var _ref6$show = _ref6.show,
      show = _ref6$show === void 0 ? false : _ref6$show,
      _ref6$duration = _ref6.duration,
      duration = _ref6$duration === void 0 ? 300 : _ref6$duration,
      _ref6$name = _ref6.name,
      name = _ref6$name === void 0 ? 'fade' : _ref6$name,
      onBeforeEnter = _ref6.onBeforeEnter,
      onBeforeLeave = _ref6.onBeforeLeave,
      onAfterEnter = _ref6.onAfterEnter,
      onAfterLeave = _ref6.onAfterLeave,
      onEnter = _ref6.onEnter,
      onLeave = _ref6.onLeave;
  var transitionEnded = useRef(false);
  var status = useRef('');

  var _useState21 = useState(false),
      _useState22 = _slicedToArray(_useState21, 2),
      display = _useState22[0],
      setDisplay = _useState22[1];

  var _useState23 = useState(false),
      _useState24 = _slicedToArray(_useState23, 2),
      inited = _useState24[0],
      setInited = _useState24[1];

  var _useState25 = useState(0),
      _useState26 = _slicedToArray(_useState25, 2),
      currentDuration = _useState26[0],
      setCurrentDuration = _useState26[1];

  var _useState27 = useState(''),
      _useState28 = _slicedToArray(_useState27, 2),
      classes = _useState28[0],
      setClasses = _useState28[1];

  var onTransitionEnd = useCallback(function () {
    if (transitionEnded.current) {
      return;
    }

    transitionEnded.current = true;

    if (status.current === 'enter') {
      onAfterEnter === null || onAfterEnter === void 0 ? void 0 : onAfterEnter();
    } else {
      onAfterLeave === null || onAfterLeave === void 0 ? void 0 : onAfterLeave();
    }

    if (!show && display) {
      // this.setData({ display: false })
      setDisplay(false);
    }
  }, [display, onAfterEnter, onAfterLeave, show]);

  var _enter = useCallback(function () {
    // const { duration, name } = this.data
    var classNames = getClassNames(name);
    var currentDuration = isObj$1(duration) ? duration.enter : duration;
    status.current = 'enter'; // this.$emit('before-enter')

    onBeforeEnter === null || onBeforeEnter === void 0 ? void 0 : onBeforeEnter();
    requestAnimationFrame(function () {
      if (status.current !== 'enter') {
        return;
      }

      onEnter === null || onEnter === void 0 ? void 0 : onEnter();
      setInited(true);
      setDisplay(true);
      setClasses(classNames.enter);
      setCurrentDuration(currentDuration);
      requestAnimationFrame(function () {
        if (status.current !== 'enter') {
          return;
        }

        transitionEnded.current = false;
        setClasses(classNames['enter-to']);
      });
    });
  }, [duration, name, onBeforeEnter, onEnter]);

  var _leave = useCallback(function () {
    if (!display) {
      return;
    } // const { duration, name } = this.data


    var classNames = getClassNames(name);
    var currentDuration = isObj$1(duration) ? duration.leave : duration;
    status.current = 'leave';
    onBeforeLeave === null || onBeforeLeave === void 0 ? void 0 : onBeforeLeave();
    requestAnimationFrame(function () {
      if (status.current !== 'leave') {
        return;
      } // this.$emit('leave')


      onLeave === null || onLeave === void 0 ? void 0 : onLeave();
      setClasses(classNames.leave);
      setCurrentDuration(currentDuration);
      requestAnimationFrame(function () {
        if (status.current !== 'leave') {
          return;
        }

        transitionEnded.current = false;
        setTimeout(function () {
          return onTransitionEnd();
        }, currentDuration);
        setClasses(classNames['leave-to']);
      });
    });
  }, [display, duration, name, onBeforeLeave, onLeave, onTransitionEnd]);

  useEffect(function () {
    show ? _enter() : _leave();
  }, [_enter, _leave, show]);
  return {
    display: display,
    inited: inited,
    currentDuration: currentDuration,
    classes: classes,
    onTransitionEnd: onTransitionEnd
  };
}
/* eslint-disable */


function rootStyle$a(data) {
  return style([{
    '-webkit-transition-duration': data.currentDuration + 'ms',
    'transition-duration': data.currentDuration + 'ms'
  }, data.display ? null : 'display: none', data.style]);
}

function Index$Y(props) {
  var onBeforeEnter = props.onBeforeEnter,
      onBeforeLeave = props.onBeforeLeave,
      onAfterEnter = props.onAfterEnter,
      onAfterLeave = props.onAfterLeave,
      onEnter = props.onEnter,
      onLeave = props.onLeave,
      duration = props.duration,
      name = props.name,
      show = props.show,
      children = props.children,
      style$1 = props.style,
      className = props.className,
      enterClass = props.enterClass,
      enterActiveClass = props.enterActiveClass,
      enterToClass = props.enterToClass,
      leaveClass = props.leaveClass,
      leaveActiveClass = props.leaveActiveClass,
      leaveToClass = props.leaveToClass,
      others = __rest(props, ["onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave", "onEnter", "onLeave", "duration", "name", "show", "children", "style", "className", "enterClass", "enterActiveClass", "enterToClass", "leaveClass", "leaveActiveClass", "leaveToClass"]);

  var _useTransition = useTransition({
    show: show,
    duration: duration,
    name: name,
    enterClass: enterClass,
    enterActiveClass: enterActiveClass,
    enterToClass: enterToClass,
    leaveClass: leaveClass,
    leaveActiveClass: leaveActiveClass,
    leaveToClass: leaveToClass,
    onBeforeEnter: onBeforeEnter,
    onBeforeLeave: onBeforeLeave,
    onAfterEnter: onAfterEnter,
    onAfterLeave: onAfterLeave,
    onEnter: onEnter,
    onLeave: onLeave
  }),
      currentDuration = _useTransition.currentDuration,
      classes = _useTransition.classes,
      display = _useTransition.display,
      onTransitionEnd = _useTransition.onTransitionEnd;

  return jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, {
    children: jsxRuntime.exports.jsx(View, _Object$assign({
      className: 'van-transition ' + classes + " ".concat(className || ''),
      style: style([rootStyle$a({
        currentDuration: currentDuration,
        display: display
      }), style$1]),
      onTransitionEnd: onTransitionEnd
    }, others, {
      catchMove: true
    }, {
      children: children
    }), void 0)
  }, void 0);
}

function Index$X(props) {
  var show = props.show,
      _props$zIndex4 = props.zIndex,
      zIndex = _props$zIndex4 === void 0 ? Overlay : _props$zIndex4,
      style$1 = props.style,
      className = props.className,
      _props$lockScroll = props.lockScroll,
      lockScroll = _props$lockScroll === void 0 ? true : _props$lockScroll,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 300 : _props$duration,
      children = props.children,
      others = __rest(props, ["show", "zIndex", "style", "className", "lockScroll", "duration", "children"]);

  var _noop = useCallback(function (event) {
    event.stopPropagation();
    event.preventDefault();
  }, []);

  return lockScroll ? jsxRuntime.exports.jsx(Index$Y, _Object$assign({
    show: show,
    className: 'van-overlay' + "  ".concat(className),
    style: style([{
      'z-index': zIndex
    }, style$1]),
    duration: duration,
    onTouchMove: _noop
  }, others, {
    children: children
  }), void 0) : jsxRuntime.exports.jsx(Index$Y, _Object$assign({
    show: show,
    className: 'van-overlay' + "  ".concat(className || ''),
    style: style([{
      'z-index': zIndex
    }, style$1]),
    duration: duration
  }, others, {
    children: children
  }), void 0);
}

function Index$W(props) {
  var show = props.show,
      _props$duration2 = props.duration,
      duration = _props$duration2 === void 0 ? 300 : _props$duration2,
      round = props.round,
      closeable = props.closeable,
      overlayStyle = props.overlayStyle,
      transition = props.transition,
      _props$zIndex5 = props.zIndex,
      zIndex = _props$zIndex5 === void 0 ? Popup : _props$zIndex5,
      _props$overlay = props.overlay,
      overlay = _props$overlay === void 0 ? true : _props$overlay,
      _props$closeIcon = props.closeIcon,
      closeIcon = _props$closeIcon === void 0 ? 'cross' : _props$closeIcon,
      _props$closeIconPosit = props.closeIconPosition,
      closeIconPosition = _props$closeIconPosit === void 0 ? 'top-right' : _props$closeIconPosit,
      _props$closeOnClickOv = props.closeOnClickOverlay,
      closeOnClickOverlay = _props$closeOnClickOv === void 0 ? true : _props$closeOnClickOv,
      _props$position = props.position,
      position = _props$position === void 0 ? 'center' : _props$position,
      _props$safeAreaInsetB = props.safeAreaInsetBottom,
      safeAreaInsetBottom = _props$safeAreaInsetB === void 0 ? true : _props$safeAreaInsetB,
      _props$safeAreaInsetT = props.safeAreaInsetTop,
      safeAreaInsetTop = _props$safeAreaInsetT === void 0 ? false : _props$safeAreaInsetT,
      _props$lockScroll2 = props.lockScroll,
      lockScroll = _props$lockScroll2 === void 0 ? true : _props$lockScroll2,
      children = props.children,
      onClickOverlay = props.onClickOverlay,
      onBeforeEnter = props.onBeforeEnter,
      onBeforeLeave = props.onBeforeLeave,
      onAfterEnter = props.onAfterEnter,
      onAfterLeave = props.onAfterLeave,
      onEnter = props.onEnter,
      onLeave = props.onLeave,
      onClose = props.onClose,
      style$1 = props.style,
      className = props.className,
      others = __rest(props, ["show", "duration", "round", "closeable", "overlayStyle", "transition", "zIndex", "overlay", "closeIcon", "closeIconPosition", "closeOnClickOverlay", "position", "safeAreaInsetBottom", "safeAreaInsetTop", "lockScroll", "children", "onClickOverlay", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave", "onEnter", "onLeave", "onClose", "style", "className"]);

  var _onClickCloseIcon = useCallback(function () {
    onClose === null || onClose === void 0 ? void 0 : onClose();
  }, [onClose]);

  var _onClickOverlay = useCallback(function () {
    onClickOverlay === null || onClickOverlay === void 0 ? void 0 : onClickOverlay();

    if (closeOnClickOverlay) {
      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  }, [closeOnClickOverlay, onClickOverlay, onClose]);

  var _useState29 = useState(''),
      _useState30 = _slicedToArray(_useState29, 2),
      _name = _useState30[0],
      setName = _useState30[1];

  var _useState31 = useState(duration),
      _useState32 = _slicedToArray(_useState31, 2),
      _duration = _useState32[0],
      setDuration = _useState32[1];

  var originDuration = useRef(null);
  useEffect(function () {
    setName(transition || position);

    if (transition === 'none') {
      setDuration(0);
      originDuration.current = duration;
    } else if (originDuration.current != null) {
      setDuration(originDuration.current);
    }
  }, [duration, position, transition]);

  var _useTransition2 = useTransition({
    show: show,
    duration: _duration,
    name: _name,
    onBeforeEnter: onBeforeEnter,
    onBeforeLeave: onBeforeLeave,
    onAfterEnter: onAfterEnter,
    onAfterLeave: onAfterLeave,
    onEnter: onEnter,
    onLeave: onLeave
  }),
      inited = _useTransition2.inited,
      currentDuration = _useTransition2.currentDuration,
      classes = _useTransition2.classes,
      display = _useTransition2.display,
      onTransitionEnd = _useTransition2.onTransitionEnd; // observeShow(value, old) {
  //   if (value === old) {
  //     return
  //   }
  //   value ? this.enter() : this.leave()
  // },


  var getClassName = useCallback(function (name) {
    return name.replace(/([A-Z])/g, function (_, $1) {
      return '-' + $1.toLowerCase();
    });
  }, []);
  return jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
    children: [overlay && jsxRuntime.exports.jsx(Index$X, {
      show: show,
      zIndex: zIndex,
      style: overlayStyle,
      duration: duration,
      onClick: _onClickOverlay,
      lockScroll: lockScroll
    }, void 0), inited && jsxRuntime.exports.jsxs(View, _Object$assign({
      className: classes + ' ' + bem('popup', [position, {
        round: round,
        safe: safeAreaInsetBottom,
        safeTop: safeAreaInsetTop
      }]) + "  ".concat(className || ''),
      style: style([popupStyle({
        zIndex: zIndex,
        currentDuration: currentDuration,
        display: display
      }), style$1]),
      onTransitionEnd: onTransitionEnd
    }, others, {
      children: [children, closeable && // @ts-check
      jsxRuntime.exports.jsx(Index$$, {
        name: closeIcon,
        className: 'close-icon-class van-popup__close-icon van-popup__close-icon--' + getClassName(closeIconPosition),
        onClick: _onClickCloseIcon
      }, void 0)]
    }), void 0)]
  }, void 0);
}

var toArray$1 = {};
var interopRequireDefault = {
  exports: {}
};

(function (module) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  module.exports = _interopRequireDefault;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
})(interopRequireDefault);

var reactIs = {
  exports: {}
};
var reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b = "function" === typeof _Symbol && _Symbol$for,
    c = b ? _Symbol$for("react.element") : 60103,
    d = b ? _Symbol$for("react.portal") : 60106,
    e = b ? _Symbol$for("react.fragment") : 60107,
    f = b ? _Symbol$for("react.strict_mode") : 60108,
    g = b ? _Symbol$for("react.profiler") : 60114,
    h = b ? _Symbol$for("react.provider") : 60109,
    k = b ? _Symbol$for("react.context") : 60110,
    l = b ? _Symbol$for("react.async_mode") : 60111,
    m = b ? _Symbol$for("react.concurrent_mode") : 60111,
    n = b ? _Symbol$for("react.forward_ref") : 60112,
    p = b ? _Symbol$for("react.suspense") : 60113,
    q = b ? _Symbol$for("react.suspense_list") : 60120,
    r = b ? _Symbol$for("react.memo") : 60115,
    t = b ? _Symbol$for("react.lazy") : 60116,
    v = b ? _Symbol$for("react.block") : 60121,
    w = b ? _Symbol$for("react.fundamental") : 60117,
    x = b ? _Symbol$for("react.responder") : 60118,
    y = b ? _Symbol$for("react.scope") : 60119;

function z(a) {
  if ("object" === _typeof(a) && null !== a) {
    var u = a.$$typeof;

    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;

              default:
                return u;
            }

        }

      case d:
        return u;
    }
  }
}

function A(a) {
  return z(a) === m;
}

reactIs_production_min.AsyncMode = l;
reactIs_production_min.ConcurrentMode = m;
reactIs_production_min.ContextConsumer = k;
reactIs_production_min.ContextProvider = h;
reactIs_production_min.Element = c;
reactIs_production_min.ForwardRef = n;
reactIs_production_min.Fragment = e;
reactIs_production_min.Lazy = t;
reactIs_production_min.Memo = r;
reactIs_production_min.Portal = d;
reactIs_production_min.Profiler = g;
reactIs_production_min.StrictMode = f;
reactIs_production_min.Suspense = p;

reactIs_production_min.isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};

reactIs_production_min.isConcurrentMode = A;

reactIs_production_min.isContextConsumer = function (a) {
  return z(a) === k;
};

reactIs_production_min.isContextProvider = function (a) {
  return z(a) === h;
};

reactIs_production_min.isElement = function (a) {
  return "object" === _typeof(a) && null !== a && a.$$typeof === c;
};

reactIs_production_min.isForwardRef = function (a) {
  return z(a) === n;
};

reactIs_production_min.isFragment = function (a) {
  return z(a) === e;
};

reactIs_production_min.isLazy = function (a) {
  return z(a) === t;
};

reactIs_production_min.isMemo = function (a) {
  return z(a) === r;
};

reactIs_production_min.isPortal = function (a) {
  return z(a) === d;
};

reactIs_production_min.isProfiler = function (a) {
  return z(a) === g;
};

reactIs_production_min.isStrictMode = function (a) {
  return z(a) === f;
};

reactIs_production_min.isSuspense = function (a) {
  return z(a) === p;
};

reactIs_production_min.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === _typeof(a) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};

reactIs_production_min.typeOf = z;
var reactIs_development = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== "production") {
  (function () {
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof _Symbol === 'function' && _Symbol$for;
    var REACT_ELEMENT_TYPE = hasSymbol ? _Symbol$for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? _Symbol$for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? _Symbol$for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? _Symbol$for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? _Symbol$for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? _Symbol$for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? _Symbol$for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? _Symbol$for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? _Symbol$for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? _Symbol$for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? _Symbol$for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? _Symbol$for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? _Symbol$for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? _Symbol$for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? _Symbol$for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? _Symbol$for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? _Symbol$for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? _Symbol$for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (_typeof(object) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    reactIs_development.AsyncMode = AsyncMode;
    reactIs_development.ConcurrentMode = ConcurrentMode;
    reactIs_development.ContextConsumer = ContextConsumer;
    reactIs_development.ContextProvider = ContextProvider;
    reactIs_development.Element = Element;
    reactIs_development.ForwardRef = ForwardRef;
    reactIs_development.Fragment = Fragment;
    reactIs_development.Lazy = Lazy;
    reactIs_development.Memo = Memo;
    reactIs_development.Portal = Portal;
    reactIs_development.Profiler = Profiler;
    reactIs_development.StrictMode = StrictMode;
    reactIs_development.Suspense = Suspense;
    reactIs_development.isAsyncMode = isAsyncMode;
    reactIs_development.isConcurrentMode = isConcurrentMode;
    reactIs_development.isContextConsumer = isContextConsumer;
    reactIs_development.isContextProvider = isContextProvider;
    reactIs_development.isElement = isElement;
    reactIs_development.isForwardRef = isForwardRef;
    reactIs_development.isFragment = isFragment;
    reactIs_development.isLazy = isLazy;
    reactIs_development.isMemo = isMemo;
    reactIs_development.isPortal = isPortal;
    reactIs_development.isProfiler = isProfiler;
    reactIs_development.isStrictMode = isStrictMode;
    reactIs_development.isSuspense = isSuspense;
    reactIs_development.isValidElementType = isValidElementType;
    reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs.exports = reactIs_production_min;
} else {
  reactIs.exports = reactIs_development;
}

var _interopRequireDefault = interopRequireDefault.exports;
Object.defineProperty(toArray$1, "__esModule", {
  value: true
});

var _default = toArray$1.default = toArray;

var _react = _interopRequireDefault(require$$0);

var _reactIs = reactIs.exports;

function toArray(children) {
  var _context17;

  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ret = [];

  _forEachInstanceProperty(_context17 = _react.default.Children).call(_context17, children, function (child) {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return;
    }

    if (Array.isArray(child)) {
      ret = _concatInstanceProperty(ret).call(ret, toArray(child));
    } else if ((0, _reactIs.isFragment)(child) && child.props) {
      ret = _concatInstanceProperty(ret).call(ret, toArray(child.props.children, option));
    } else {
      ret.push(child);
    }
  });

  return ret;
}

function tabClass(active, ellipsis) {
  var classes = ['tab-class'];

  if (active) {
    classes.push('tab-active-class');
  }

  if (ellipsis) {
    classes.push('van-ellipsis');
  }

  return classes.join(' ');
}

function tabStyle(data) {
  var titleColor = data.active ? data.titleActiveColor : data.titleInactiveColor;
  var ellipsis = data.scrollable && data.ellipsis; // card theme color

  if (data.type === 'card') {
    return style({
      'border-color': data.color,
      'background-color': !data.disabled && data.active ? data.color : null,
      color: titleColor || (!data.disabled && !data.active ? data.color : null),
      'flex-basis': ellipsis ? 88 / data.swipeThreshold + '%' : null
    });
  }

  return style({
    color: titleColor,
    'flex-basis': ellipsis ? 88 / data.swipeThreshold + '%' : null
  });
}

function navStyle(color, type) {
  return style({
    'border-color': type === 'card' && color ? color : null
  });
}

function trackStyle(data) {
  if (!data.animated) {
    return '';
  }

  return style({
    left: -100 * data.currentIndex + '%',
    'transition-duration': data.duration + 's',
    '-webkit-transition-duration': data.duration + 's'
  });
}

function lineStyle(data) {
  return style({
    visibility: data.lineOffsetLeft === 0 ? 'hidden' : 'visible',
    width: addUnit$1(data.lineWidth),
    transform: 'translateX(' + data.lineOffsetLeft + 'px)',
    '-webkit-transform': 'translateX(' + data.lineOffsetLeft + 'px)',
    'background-color': data.color,
    height: data.lineHeight !== -1 ? addUnit$1(data.lineHeight) : null,
    'border-radius': data.lineHeight !== -1 ? addUnit$1(data.lineHeight) : null,
    'transition-duration': !data.skipTransition ? data.duration + 's' : null,
    '-webkit-transition-duration': !data.skipTransition ? data.duration + 's' : null
  });
}

var MIN_DISTANCE$2 = 10;

function getDirection$2(x, y) {
  if (x > y && x > MIN_DISTANCE$2) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE$2) {
    return 'vertical';
  }

  return '';
}

function parseTabList$2(children) {
  var _context18, _context19;

  return _filterInstanceProperty(_context18 = _mapInstanceProperty(_context19 = _default(children)).call(_context19, function (node) {
    if ( /*#__PURE__*/isValidElement(node)) {
      var key = node.key !== undefined ? String(node.key) : undefined;
      return _Object$assign(_Object$assign({
        key: key
      }, node.props), {
        node: node
      });
    }

    return null;
  })).call(_context18, function (tab) {
    return tab;
  });
}

var comIndex$1 = 0;

function Index$V(props) {
  var ref = useRef({
    skipInit: false,
    direction: '',
    deltaX: 0,
    deltaY: 0,
    offsetX: 0,
    offsetY: 0,
    startX: 0,
    startY: 0,
    swiping: false
  });
  var indexRef = useRef(comIndex$1);

  var _useState33 = useState({
    tabs: [],
    scrollLeft: 0,
    scrollable: false,
    currentIndex: 0,
    container: undefined,
    skipTransition: true,
    scrollWithAnimation: false,
    lineOffsetLeft: 0
  }),
      _useState34 = _slicedToArray(_useState33, 2),
      state = _useState34[0],
      setState = _useState34[1];

  var scrollLeft = state.scrollLeft,
      scrollable = state.scrollable,
      currentIndex = state.currentIndex,
      container = state.container,
      skipTransition = state.skipTransition,
      scrollWithAnimation = state.scrollWithAnimation,
      lineOffsetLeft = state.lineOffsetLeft;

  var swipeable = props.swipeable,
      _props$active = props.active,
      active = _props$active === void 0 ? 0 : _props$active,
      _props$lazyRender = props.lazyRender,
      lazyRender = _props$lazyRender === void 0 ? true : _props$lazyRender,
      _props$type = props.type,
      type = _props$type === void 0 ? 'line' : _props$type,
      sticky = props.sticky,
      _props$zIndex6 = props.zIndex,
      zIndex = _props$zIndex6 === void 0 ? Tabs : _props$zIndex6,
      _props$offsetTop2 = props.offsetTop,
      offsetTop = _props$offsetTop2 === void 0 ? 0 : _props$offsetTop2,
      border = props.border,
      color = props.color,
      _props$ellipsis = props.ellipsis,
      ellipsis = _props$ellipsis === void 0 ? true : _props$ellipsis,
      _props$lineHeight = props.lineHeight,
      lineHeight = _props$lineHeight === void 0 ? -1 : _props$lineHeight,
      _props$duration3 = props.duration,
      duration = _props$duration3 === void 0 ? 0.3 : _props$duration3,
      _props$lineWidth = props.lineWidth,
      lineWidth = _props$lineWidth === void 0 ? 40 : _props$lineWidth,
      titleActiveColor = props.titleActiveColor,
      titleInactiveColor = props.titleInactiveColor,
      _props$swipeThreshold = props.swipeThreshold,
      swipeThreshold = _props$swipeThreshold === void 0 ? 5 : _props$swipeThreshold,
      animated = props.animated,
      renderNavLeft = props.renderNavLeft,
      renderNavRight = props.renderNavRight,
      onScroll = props.onScroll,
      onClick = props.onClick,
      onChange = props.onChange,
      onDisabled = props.onDisabled,
      style = props.style,
      className = props.className,
      children = props.children,
      others = __rest(props, ["swipeable", "active", "lazyRender", "type", "sticky", "zIndex", "offsetTop", "border", "color", "ellipsis", "lineHeight", "duration", "lineWidth", "titleActiveColor", "titleInactiveColor", "swipeThreshold", "animated", "renderNavLeft", "renderNavRight", "onScroll", "onClick", "onChange", "onDisabled", "style", "className", "children"]);

  useEffect(function () {
    comIndex$1++;
    indexRef.current = comIndex$1;
  }, []);
  var tabs = useMemo(function () {
    return parseTabList$2(children);
  }, [children]);
  var newChildren = useMemo(function () {
    return _mapInstanceProperty(tabs).call(tabs, function (tab, index) {
      return /*#__PURE__*/cloneElement(tab.node, {
        key: index,
        active: currentIndex === index,
        lazyRender: lazyRender,
        animated: animated,
        index: index
      });
    });
  }, [animated, currentIndex, lazyRender, tabs]);

  var trigger = function trigger(eventName, child) {
    var _a;

    var currentChild = child || newChildren[currentIndex];

    if (!isDef(currentChild)) {
      return;
    }

    var func = {
      onClick: onClick,
      onChange: onChange,
      onDisabled: onDisabled
    };
    (_a = func[eventName]) === null || _a === void 0 ? void 0 : _a.call(func, {
      detail: {
        index: currentChild.props.index,
        name: currentChild.props.name || currentChild.props.index,
        title: currentChild.props.title
      }
    });
  };

  var getCurrentName = function getCurrentName() {
    var activeTab = newChildren[currentIndex];

    if (activeTab) {
      return activeTab.props.name || activeTab.props.index;
    }
  };

  var setCurrentIndex = function setCurrentIndex(cIndex) {
    if (!isDef(cIndex) || cIndex >= newChildren.length || cIndex < 0) {
      return;
    }

    if (cIndex === currentIndex) {
      return;
    }

    var shouldEmitChange = currentIndex !== null;
    setState(function (pre) {
      return _Object$assign(_Object$assign({}, pre), {
        currentIndex: cIndex
      });
    });
    requestAnimationFrame$1(function () {
      resize(cIndex);
      scrollIntoView(cIndex);
    });
    Taro.nextTick(function () {
      if (shouldEmitChange) {
        trigger('onChange', newChildren[cIndex]);
      }
    });
  };

  var setCurrentIndexByName = function setCurrentIndexByName(name) {
    var matched = _filterInstanceProperty(newChildren).call(newChildren, function (child) {
      return (child.props.name || child.props.index) === name;
    });

    if (matched.length) {
      setCurrentIndex(matched[0].props.index);
    }
  };

  var resize = function resize(index) {
    if (type !== 'line') {
      return;
    }

    index = index !== null && index !== void 0 ? index : currentIndex;

    _Promise.all([getAllRect(null, ".tabs-com-index".concat(indexRef.current, " .van-tab")), getRect(null, ".tabs-com-index".concat(indexRef.current, " .van-tabs__line"))]).then(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
          _ref8$ = _ref8[0],
          rects = _ref8$ === void 0 ? [] : _ref8$,
          lineRect = _ref8[1];

      if (rects && lineRect) {
        var _context20;

        var rect = rects[index];

        if (rect == null) {
          return;
        }

        var _lineOffsetLeft = _reduceInstanceProperty(_context20 = _sliceInstanceProperty(rects).call(rects, 0, index)).call(_context20, function (prev, curr) {
          return prev + curr.width;
        }, 0);

        _lineOffsetLeft += (rect.width - lineRect.width) / 2 + (ellipsis ? 0 : 8);
        setState(function (pre) {
          return _Object$assign(_Object$assign({}, pre), {
            lineOffsetLeft: _lineOffsetLeft
          });
        });
        ref.current.swiping = true;

        if (skipTransition) {
          Taro.nextTick(function () {
            setState(function (pre) {
              return _Object$assign(_Object$assign({}, pre), {
                skipTransition: false
              });
            });
          });
        }
      }
    });
  };

  var onTap = function onTap(event) {
    var index = event.currentTarget.dataset.index;
    index = _parseInt(index);
    var child = newChildren[index];

    if (child.props.disabled) {
      trigger('onDisabled', child);
    } else {
      setCurrentIndex(index);
      Taro.nextTick(function () {
        trigger('onClick', child);
      });
    }
  };

  var scrollIntoView = function scrollIntoView(index) {
    if (!scrollable) {
      return;
    }

    index = index !== null && index !== void 0 ? index : currentIndex;

    _Promise.all([getAllRect(null, ".tabs-com-index".concat(indexRef.current, " .van-tab")), getRect(null, ".tabs-com-index".concat(indexRef.current, " .van-tabs__nav"))]).then(function (_ref9) {
      var _ref10 = _slicedToArray(_ref9, 2),
          tabRects = _ref10[0],
          navRect = _ref10[1];

      if (tabRects && navRect) {
        var _context21;

        var tabRect = tabRects[index];

        var offsetLeft = _reduceInstanceProperty(_context21 = _sliceInstanceProperty(tabRects).call(tabRects, 0, index)).call(_context21, function (prev, curr) {
          return prev + curr.width;
        }, 0);

        setState(function (pre) {
          return _Object$assign(_Object$assign({}, pre), {
            scrollLeft: offsetLeft - (navRect.width - tabRect.width) / 2
          });
        });

        if (!scrollWithAnimation) {
          Taro.nextTick(function () {
            setState(function (pre) {
              return _Object$assign(_Object$assign({}, pre), {
                scrollWithAnimation: true
              });
            });
          });
        }
      }
    });
  };

  var resetTouchStatus = function resetTouchStatus() {
    ref.current.direction = '';
    ref.current.deltaX = 0;
    ref.current.deltaY = 0;
    ref.current.offsetX = 0;
    ref.current.offsetY = 0;
  };

  var touchStart = function touchStart(event) {
    resetTouchStatus();
    var touch = event.touches[0];
    ref.current.startX = touch.clientX;
    ref.current.startY = touch.clientY;
  };

  var touchMove = function touchMove(event) {
    var touch = event.touches[0];
    ref.current.deltaX = touch.clientX - ref.current.startX;
    ref.current.deltaY = touch.clientY - ref.current.startY;
    ref.current.offsetX = Math.abs(ref.current.deltaX);
    ref.current.offsetY = Math.abs(ref.current.deltaY);
    ref.current.direction = ref.current.direction || getDirection$2(ref.current.offsetX, ref.current.offsetY);
  };

  var getAvaiableTab = function getAvaiableTab(direction) {
    var step = direction > 0 ? -1 : 1;

    for (var i = step; currentIndex + i < tabs.length && currentIndex + i >= 0; i += step) {
      var _index = currentIndex + i;

      if (_index >= 0 && _index < tabs.length && tabs[_index] && !tabs[_index].disabled) {
        return _index;
      }
    }

    return -1;
  };

  var onTouchStart = function onTouchStart(event) {
    if (!swipeable) return;
    touchStart(event);
  };

  var onTouchMove = function onTouchMove(event) {
    if (!swipeable || ref.current.swiping) return;
    touchMove(event);
  };

  var onTouchEnd = function onTouchEnd() {
    if (!swipeable) return;
    var _ref$current = ref.current,
        direction = _ref$current.direction,
        deltaX = _ref$current.deltaX,
        offsetX = _ref$current.offsetX;
    var minSwipeDistance = 50;

    if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
      var _index2 = getAvaiableTab(deltaX);

      if (_index2 !== -1) {
        setCurrentIndex(_index2);
      }
    }

    ref.current.swiping = false;
  };

  useEffect(function () {
    ref.current.swiping = true;
    setState(function (pre) {
      return _Object$assign(_Object$assign({}, pre), {
        container: function container() {
          return Taro.createSelectorQuery().select(".tabs-com-index".concat(indexRef.current, ".van-tabs"));
        }
      });
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(function () {
    Taro.nextTick(function () {
      setTimeout(function () {
        resize();
        scrollIntoView();
      }, 300);
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [lineWidth]);
  useEffect(function () {
    if (active !== getCurrentName()) {
      Taro.nextTick(function () {
        setTimeout(function () {
          setCurrentIndexByName(active);
        }, 300);
      });
    }
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [active]);
  useEffect(function () {
    setState(function (pre) {
      return _Object$assign(_Object$assign({}, pre), {
        scrollable: newChildren.length > swipeThreshold || !ellipsis
      });
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [swipeThreshold]);
  return jsxRuntime.exports.jsxs(View, _Object$assign({
    className: "tabs-com-index".concat(indexRef.current, " ") + 'custom-class ' + bem('tabs', [type] + " ".concat(className || '')),
    style: style
  }, others, {
    children: [jsxRuntime.exports.jsx(Index$11, _Object$assign({
      disabled: !sticky,
      zIndex: zIndex,
      offsetTop: offsetTop,
      container: container,
      onScroll: onScroll
    }, {
      children: jsxRuntime.exports.jsxs(View, _Object$assign({
        className: bem('tabs__wrap', {
          scrollable: scrollable
        }) + ' ' + (type === 'line' && border ? 'van-hairline--top-bottom' : '')
      }, {
        children: [renderNavLeft, jsxRuntime.exports.jsx(ScrollView, _Object$assign({
          scrollX: scrollable,
          scrollWithAnimation: scrollWithAnimation,
          scrollLeft: scrollLeft,
          className: bem('tabs__scroll', [type]),
          style: color ? 'border-color: ' + color : ''
        }, {
          children: jsxRuntime.exports.jsxs(View, _Object$assign({
            className: bem('tabs__nav', [type, {
              complete: !ellipsis
            }]) + ' nav-class',
            style: navStyle(color, type)
          }, {
            children: [type === 'line' && jsxRuntime.exports.jsx(View, {
              className: "van-tabs__line",
              style: lineStyle({
                color: color,
                lineOffsetLeft: lineOffsetLeft,
                lineHeight: lineHeight,
                skipTransition: skipTransition,
                duration: duration,
                lineWidth: lineWidth
              })
            }, void 0), _mapInstanceProperty(tabs).call(tabs, function (item, index) {
              return jsxRuntime.exports.jsx(View, _Object$assign({
                "data-index": index,
                className: tabClass(index === currentIndex, ellipsis) + ' ' + bem('tab', {
                  active: index === currentIndex,
                  disabled: item.disabled,
                  complete: !ellipsis
                }),
                style: tabStyle({
                  active: index === currentIndex,
                  ellipsis: ellipsis,
                  color: color,
                  type: type,
                  disabled: item.disabled,
                  titleActiveColor: titleActiveColor,
                  titleInactiveColor: titleInactiveColor,
                  swipeThreshold: swipeThreshold,
                  scrollable: scrollable
                }),
                onClick: onTap
              }, {
                children: jsxRuntime.exports.jsxs(View, _Object$assign({
                  className: ellipsis ? 'van-ellipsis' : '',
                  style: item.titleStyle
                }, {
                  children: [item.title, (item.info !== null || item.dot) && jsxRuntime.exports.jsx(Index$10, {
                    info: item.info,
                    dot: item.dot,
                    className: "van-tab__title__info"
                  }, void 0)]
                }), void 0)
              }), index);
            })]
          }), void 0)
        }), void 0), renderNavRight]
      }), void 0)
    }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-tabs__content",
      onTouchStart: onTouchStart,
      onTouchMove: onTouchMove,
      onTouchEnd: onTouchEnd,
      onTouchCancel: onTouchEnd
    }, {
      children: jsxRuntime.exports.jsx(View, _Object$assign({
        className: bem('tabs__track', [{
          animated: animated
        }]) + ' van-tabs__track',
        style: trackStyle({
          duration: duration,
          currentIndex: currentIndex,
          animated: animated
        })
      }, {
        children: newChildren
      }), void 0)
    }), void 0)]
  }), void 0);
}

function Index$U(props) {
  var _useState35 = useState(false),
      _useState36 = _slicedToArray(_useState35, 2),
      inited = _useState36[0],
      setInited = _useState36[1];

  var children = props.children,
      style$1 = props.style,
      className = props.className,
      active = props.active,
      lazyRender = props.lazyRender,
      animated = props.animated,
      others = __rest(props, ["children", "style", "className", "active", "lazyRender", "animated"]);

  useEffect(function () {
    setInited(function (pre) {
      return pre || active;
    });
  }, [active]);
  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: 'custom-class ' + bem('tab__pane', {
      active: active,
      inactive: !active
    }) + " ".concat(className || ''),
    style: style([active || animated ? '' : 'display: none;', style$1])
  }, others, {
    children: (inited || !lazyRender) && children
  }), void 0);
}

function rootStyle$9(data) {
  return style([{
    width: addUnit$1(data.width),
    height: addUnit$1(data.height),
    'border-radius': addUnit$1(data.radius)
  }, data.radius ? 'overflow: hidden' : null]);
}

var FIT_MODE_MAP = {
  none: 'center',
  fill: 'scaleToFill',
  cover: 'aspectFill',
  contain: 'aspectFit',
  widthFix: 'widthFix',
  heightFix: 'heightFix',
  scaleDown: 'aspectFit'
};

function mode(fit) {
  return FIT_MODE_MAP[fit];
}

function Index$T(props) {
  var src = props.src,
      round = props.round,
      width = props.width,
      height = props.height,
      radius = props.radius,
      lazyLoad = props.lazyLoad,
      showMenuByLongpress = props.showMenuByLongpress,
      fit = props.fit,
      _props$showError = props.showError,
      showError = _props$showError === void 0 ? true : _props$showError,
      _props$showLoading = props.showLoading,
      showLoading = _props$showLoading === void 0 ? true : _props$showLoading,
      className = props.className,
      style$1 = props.style,
      renderError = props.renderError,
      renderLoading = props.renderLoading,
      others = __rest(props, ["src", "round", "width", "height", "radius", "lazyLoad", "showMenuByLongpress", "fit", "showError", "showLoading", "className", "style", "renderError", "renderLoading"]);

  var _useState37 = useState(),
      _useState38 = _slicedToArray(_useState37, 2),
      loading = _useState38[0],
      setLoading = _useState38[1];

  var _useState39 = useState(false),
      _useState40 = _slicedToArray(_useState39, 2),
      error = _useState40[0],
      setError = _useState40[1];

  useEffect(function () {
    if (loading === undefined) setLoading(true);
    setError(false);
  }, [loading]);
  var onLoad = useCallback(function () {
    setLoading(false);
  }, []);
  var onError = useCallback(function () {
    setError(true);
  }, []); //???????????????img?????????webCompoent

  var styleH5 = useMemo(function () {
    var style = {};

    if (process.env.TARO_ENV === 'h5') {
      if (fit === 'heightFix' || fit === 'widthFix') {
        style = {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        };
      }
    }

    return style;
  }, [fit]);
  return jsxRuntime.exports.jsxs(View, _Object$assign({
    style: style([rootStyle$9({
      width: width,
      height: height,
      radius: radius
    }), style$1]),
    className: 'custom-class ' + bem('image', {
      round: round
    }) + ' ' + className,
    onClick: others.onClick
  }, others, {
    children: [!error && jsxRuntime.exports.jsx(Image, {
      src: src,
      mode: mode(fit || 'none'),
      lazyLoad: lazyLoad,
      className: "image-class van-image__img",
      showMenuByLongpress: showMenuByLongpress,
      onLoad: onLoad,
      onError: onError,
      style: styleH5
    }, void 0), loading && showLoading && jsxRuntime.exports.jsx(View, _Object$assign({
      className: "loading-class van-image__loading"
    }, {
      children: renderLoading || jsxRuntime.exports.jsx(Index$$, {
        name: "photo",
        className: "van-image__loading-icon"
      }, void 0)
    }), void 0), error && showError && jsxRuntime.exports.jsx(View, _Object$assign({
      className: "error-class van-image__error"
    }, {
      children: renderError || jsxRuntime.exports.jsx(Index$$, {
        name: "photo-fail",
        className: "van-image__error-icon"
      }, void 0)
    }), void 0)]
  }), void 0);
}

function rootStyle$8(data) {
  if (!data.gutter) {
    return '';
  }

  return style({
    'padding-right': addUnit$1(data.gutter / 2),
    'padding-left': addUnit$1(data.gutter / 2)
  });
}

function Index$S(props) {
  var span = props.span,
      offset = props.offset,
      _props$gutter = props.gutter,
      gutter = _props$gutter === void 0 ? 14 : _props$gutter,
      children = props.children,
      className = props.className,
      style$1 = props.style,
      others = __rest(props, ["span", "offset", "gutter", "children", "className", "style"]);

  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: 'custom-class ' + bem('col', [span]) + ' ' + (offset ? 'van-col--offset-' + offset : '') + ' ' + className,
    style: style([rootStyle$8({
      gutter: gutter
    }), style$1])
  }, others, {
    children: children
  }), void 0);
}

function rootStyle$7(data) {
  if (!data.gutter) {
    return '';
  }

  return style({
    'margin-right': addUnit$1(-data.gutter / 2),
    'margin-left': addUnit$1(-data.gutter / 2)
  });
}

function Index$R(props) {
  var gutter = props.gutter,
      children = props.children,
      className = props.className,
      style$1 = props.style,
      others = __rest(props, ["gutter", "children", "className", "style"]);

  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: "van-row custom-class ".concat(className),
    style: style([rootStyle$7({
      gutter: gutter
    }), style$1])
  }, others, {
    children: children
  }), void 0);
}

function spinnerStyle(data) {
  return style({
    color: data.color,
    width: addUnit$1(data.size),
    height: addUnit$1(data.size)
  });
}

function textStyle(data) {
  return style({
    'font-size': addUnit$1(data.textSize)
  });
}

function Index$Q(props) {
  var vertical = props.vertical,
      type = props.type,
      color = props.color,
      size = props.size,
      textSize = props.textSize,
      className = props.className,
      children = props.children,
      style$1 = props.style,
      others = __rest(props, ["vertical", "type", "color", "size", "textSize", "className", "children", "style"]);

  var _useState41 = useState(_Array$from({
    length: 12
  })),
      _useState42 = _slicedToArray(_useState41, 1),
      array12 = _useState42[0];

  return jsxRuntime.exports.jsxs(View, _Object$assign({
    className: 'custom-class ' + bem('loading', {
      vertical: vertical
    }) + ' ' + className,
    style: style([style$1])
  }, others, {
    children: [jsxRuntime.exports.jsx(View, _Object$assign({
      className: 'van-loading__spinner van-loading__spinner--' + type,
      style: spinnerStyle({
        color: color,
        size: size
      })
    }, {
      children: type === 'spinner' && jsxRuntime.exports.jsx(Block, {
        children: _mapInstanceProperty(array12).call(array12, function (_, index) {
          return jsxRuntime.exports.jsx(View, {
            className: "van-loading__dot"
          }, "van-loading__dot_".concat(index));
        })
      }, void 0)
    }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-loading__text",
      style: textStyle({
        textSize: textSize
      })
    }, {
      children: children
    }), void 0)]
  }), void 0);
}

var events$2 = new Events();

function trigger$2(eventName) {
  var _context22;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return events$2.trigger.apply(events$2, _concatInstanceProperty(_context22 = [eventName]).call(_context22, args));
}

function on$2(eventName, listener) {
  return events$2.on(eventName, listener);
}

function off$2(eventName, listener) {
  return events$2.off(eventName, listener);
}

function parseOptions$2(message) {
  return isObj$1(message) ? message : {
    message: message
  };
}

var createMethod = function createMethod(type) {
  return function (options) {
    return Toast(_Object$assign({
      type: type
    }, parseOptions$2(options)));
  };
};

var Toast = function Toast(options) {
  trigger$2('show', options);
};

Toast.loading = createMethod('loading');
Toast.success = createMethod('success');
Toast.fail = createMethod('fail');

Toast.clear = function (options) {
  trigger$2('clear', options);
};

Toast.setDefaultOptions = function (options) {
  trigger$2('setDefaultOptions', options);
};

Toast.resetDefaultOptions = function () {
  trigger$2('resetDefaultOptions');
};

var defaultOptions$1 = {
  show: true,
  zIndex: 1000,
  duration: 2000,
  mask: false,
  forbidClick: false,
  type: 'text',
  position: 'middle',
  message: '',
  loadingType: 'circular',
  selector: '#van-toast'
}; // let queue: any = []

var currentOptions = _Object$assign({}, defaultOptions$1);

var timer$1 = null;

function parseOptions$1(message) {
  return isObj$1(message) ? message : {
    message: message
  };
}

function Index$P(props) {
  var _context23;

  var _useState43 = useState({
    show: false,
    zIndex: 1000,
    duration: 2000,
    mask: false,
    forbidClick: false,
    type: 'text',
    position: 'middle',
    message: '',
    loadingType: 'circular',
    selector: '#van-toast'
  }),
      _useState44 = _slicedToArray(_useState43, 2),
      state = _useState44[0],
      setState = _useState44[1];
  /* eslint-disable-next-line */


  var style = props.style,
      className = props.className,
      children = props.children,
      others = __rest(props, ["style", "className", "children"]);

  useEffect(function () {
    /* eslint-disable-next-line */
    var others = __rest(props, ["style", "className", "children"]);

    setState(function (state) {
      return _Object$assign(_Object$assign({}, state), others);
    });
  }, [props]);

  var noop = function noop() {};

  var clear = useCallback(function (toastOptions) {
    var _a;

    setState(function (state) {
      return _Object$assign(_Object$assign({}, state), {
        show: false
      });
    });
    (_a = toastOptions === null || toastOptions === void 0 ? void 0 : toastOptions.onClose) === null || _a === void 0 ? void 0 : _a.call(toastOptions);
  }, []);
  useEffect(function () {
    on$2('show', function (toastOptions) {
      var action = function action() {
        var options = _Object$assign(_Object$assign({}, currentOptions), parseOptions$1(toastOptions)); // queue.push(toastOptions)


        setState(function (state) {
          return _Object$assign(_Object$assign({}, state), options);
        });
        clearTimeout(timer$1);

        if (options.duration != null && options.duration > 0) {
          timer$1 = setTimeout(function () {
            clear(toastOptions); // queue = queue.filter((item: any) => item.sel !== toast)
          }, options.duration);
        }
      };

      action(); // const selector = toastOptions.selector || defaultOptions.selector
      // if (process.env.TARO_ENV === 'h5') {
      //   if (document.querySelector(selector)) {
      //     action()
      //   }
      // } else {
      //   if (process.env.TARO_ENV === 'alipay') {
      //     action()
      //   } else {
      //     const query = Taro.createSelectorQuery()
      //     query.select(selector).node()
      //     query.exec((res) => {
      //       if (res?.[0]) {
      //         action()
      //       }
      //     })
      //   }
      // }
    });
    on$2('clear', function (toastOptions) {
      clear(toastOptions); // queue.forEach((toast: any) => {
      //   toast.clear()
      // })
      // queue = []
    });
    on$2('setDefaultOptions', function (options) {
      currentOptions = _Object$assign(currentOptions, options);
    });
    on$2('resetDefaultOptions', function () {
      currentOptions = _Object$assign({}, defaultOptions$1);
    });
    return function () {
      off$2('show');
      off$2('clear');
      off$2('setDefaultOptions');
      off$2('resetDefaultOptions');
    };
    /* eslint-disable-next-line */
  }, []);
  return jsxRuntime.exports.jsxs(View, {
    children: [(state.mask || state.forbidClick) && jsxRuntime.exports.jsx(Index$X, {
      show: state.show,
      zIndex: state.zIndex,
      style: state.mask ? '' : 'background-color: transparent;'
    }, void 0), jsxRuntime.exports.jsx(Index$Y, _Object$assign({
      show: state.show,
      style: 'z-index: ' + state.zIndex,
      className: "van-toast__container"
    }, {
      children: jsxRuntime.exports.jsxs(View, _Object$assign({
        id: "van-toast",
        className: 'van-toast van-toast--' + (state.type === 'text' ? 'text' : 'icon') + _concatInstanceProperty(_context23 = " van-toast--".concat(state.position, " ")).call(_context23, className),
        style: style,
        onTouchMove: noop
      }, others, {
        children: [state.type === 'text' ? jsxRuntime.exports.jsx(Text, {
          children: state.message
        }, void 0) : jsxRuntime.exports.jsxs(View, _Object$assign({
          className: "van-toast__box"
        }, {
          children: [state.type === 'loading' ? jsxRuntime.exports.jsx(Index$Q, {
            color: "white",
            type: state.loadingType,
            className: "van-toast__loading"
          }, void 0) : jsxRuntime.exports.jsx(Index$$, {
            className: "van-toast__icon",
            name: state.type
          }, void 0), state.message && jsxRuntime.exports.jsx(Text, _Object$assign({
            className: "van-toast__text"
          }, {
            children: state.message
          }), void 0)]
        }), void 0), children]
      }), void 0)
    }), void 0)]
  }, void 0);
}

Index$P.show = Toast;
Index$P.loading = Toast.loading;
Index$P.success = Toast.success;
Index$P.fail = Toast.fail;
Index$P.clear = Toast.clear;
Index$P.setDefaultOptions = Toast.setDefaultOptions;
Index$P.resetDefaultOptions = Toast.resetDefaultOptions;
var PRESETS = ['error', 'search', 'default', 'network'];

function imageUrl(image) {
  if (_indexOfInstanceProperty(PRESETS).call(PRESETS, image) !== -1) {
    return 'https://img.yzcdn.cn/vant/empty-image-' + image + '.png';
  }

  return image;
}

function Index$O(props) {
  var _props$image = props.image,
      image = _props$image === void 0 ? 'default' : _props$image,
      description = props.description,
      renderImage = props.renderImage,
      renderDescription = props.renderDescription,
      style = props.style,
      className = props.className,
      children = props.children,
      others = __rest(props, ["image", "description", "renderImage", "renderDescription", "style", "className", "children"]);

  return jsxRuntime.exports.jsxs(View, _Object$assign({
    className: "custom-class van-empty ".concat(className),
    style: style
  }, others, {
    children: [jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-empty__image"
    }, {
      children: renderImage
    }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-empty__image"
    }, {
      children: image && jsxRuntime.exports.jsx(Image, {
        className: "van-empty__image__img",
        src: imageUrl(image)
      }, void 0)
    }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-empty__description"
    }, {
      children: renderDescription
    }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-empty__description"
    }, {
      children: description
    }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-empty__bottom"
    }, {
      children: children
    }), void 0)]
  }), void 0);
}

function rootStyle$6(data) {
  return style([{
    'border-color': data.borderColor,
    color: data.textColor,
    'font-size': addUnit$1(data.fontSize)
  }, data.customStyle]);
}

function Index$N(props) {
  var _props$dashed = props.dashed,
      dashed = _props$dashed === void 0 ? false : _props$dashed,
      _props$hairline = props.hairline,
      hairline = _props$hairline === void 0 ? false : _props$hairline,
      contentPosition = props.contentPosition,
      borderColor = props.borderColor,
      textColor = props.textColor,
      fontSize = props.fontSize,
      style$1 = props.style,
      className = props.className,
      children = props.children,
      others = __rest(props, ["dashed", "hairline", "contentPosition", "borderColor", "textColor", "fontSize", "style", "className", "children"]);

  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: 'custom-class ' + bem('divider', [{
      dashed: dashed,
      hairline: hairline
    }, contentPosition]) + " ".concat(className || ''),
    style: style([rootStyle$6({
      borderColor: borderColor,
      textColor: textColor,
      fontSize: fontSize
    }), style$1])
  }, others, {
    children: children
  }), void 0);
}

function rootStyle$5(data) {
  return style({
    color: data.color,
    'background-color': data.backgroundColor,
    background: data.background
  });
}

var NOTICE_BAR_INDEX = 0;

function Index$M(props) {
  var _useState45 = useState({
    ready: false,
    show: true,
    animationData: {
      actions: []
    },
    unitag: 0
  }),
      _useState46 = _slicedToArray(_useState45, 2),
      state = _useState46[0],
      setState = _useState46[1];

  var params = {
    animation: null,
    resetAnimation: null,
    timer: null,
    wrapWidth: undefined,
    contentWidth: undefined,
    duration: undefined
  };
  var ref = useRef(params);

  var _props$text = props.text,
      text = _props$text === void 0 ? '' : _props$text,
      _props$mode = props.mode,
      mode = _props$mode === void 0 ? '' : _props$mode,
      _props$url = props.url,
      url = _props$url === void 0 ? '' : _props$url,
      _props$openType = props.openType,
      openType = _props$openType === void 0 ? 'navigate' : _props$openType,
      _props$delay = props.delay,
      delay = _props$delay === void 0 ? 1 : _props$delay,
      _props$speed = props.speed,
      speed = _props$speed === void 0 ? 60 : _props$speed,
      _props$scrollable = props.scrollable,
      scrollable = _props$scrollable === void 0 ? null : _props$scrollable,
      _props$leftIcon = props.leftIcon,
      leftIcon = _props$leftIcon === void 0 ? '' : _props$leftIcon,
      _props$color2 = props.color,
      color = _props$color2 === void 0 ? '#ed6a0c' : _props$color2,
      _props$backgroundColo = props.backgroundColor,
      backgroundColor = _props$backgroundColo === void 0 ? '#fffbe8' : _props$backgroundColo,
      background = props.background,
      wrapable = props.wrapable,
      renderLeftIcon = props.renderLeftIcon,
      renderRightIcon = props.renderRightIcon,
      onClick = props.onClick,
      onClose = props.onClose,
      style$1 = props.style,
      className = props.className,
      children = props.children,
      others = __rest(props, ["text", "mode", "url", "openType", "delay", "speed", "scrollable", "leftIcon", "color", "backgroundColor", "background", "wrapable", "renderLeftIcon", "renderRightIcon", "onClick", "onClose", "style", "className", "children"]);

  useEffect(function () {
    setState(function (state) {
      return _Object$assign(_Object$assign({}, state), {
        unitag: NOTICE_BAR_INDEX++
      });
    });
  }, []);
  Taro.useReady(function () {
    ref.current.resetAnimation = Taro.createAnimation({
      duration: 0,
      timingFunction: 'linear'
    });
    setState(function (state) {
      return _Object$assign(_Object$assign({}, state), {
        ready: true
      });
    });
  });
  useEffect(function () {
    if (text && state.ready) {
      init();
    }

    return function () {
      /* eslint-disable-next-line */
      ref.current.timer && clearTimeout(ref.current.timer);
    };
    /* eslint-disable-next-line */
  }, [text, speed, state.ready]);
  var scroll = useCallback(function () {
    ref.current.timer && clearTimeout(ref.current.timer);
    ref.current.timer = null;
    setState(function (state) {
      return _Object$assign(_Object$assign({}, state), {
        animationData: ref.current.resetAnimation.translateX(ref.current.wrapWidth).step().export()
      });
    });
    setTimeout(function () {
      requestAnimationFrame$1(function () {
        setState(function (state) {
          return _Object$assign(_Object$assign({}, state), {
            animationData: ref.current.animation.translateX(-ref.current.contentWidth).step().export()
          });
        });
      });
    }, 10);
    ref.current.timer = setTimeout(function () {
      scroll();
    }, ref.current.duration);
  }, []);
  var init = useCallback(function () {
    requestAnimationFrame$1(function () {
      _Promise.all([getRect(null, ".van-notice-bar__content_".concat(state.unitag)), getRect(null, ".van-notice-bar__wrap_".concat(state.unitag))]).then(function (rects) {
        var contentRect = rects[0];
        var wrapRect = rects[1];

        if (contentRect == null || wrapRect == null || !contentRect.width || !wrapRect.width || scrollable === false) {
          return;
        }

        Taro.nextTick(function () {
          if (scrollable || wrapRect.width <= contentRect.width) {
            ref.current.wrapWidth = wrapRect.width;
            ref.current.contentWidth = contentRect.width;
            ref.current.duration = (wrapRect.width + contentRect.width) / speed * 1000;
            ref.current.animation = Taro.createAnimation({
              duration: ref.current.duration,
              timingFunction: 'linear',
              delay: delay
            });
            scroll();
          }
        });
      });
    });
  }, [state.unitag, scrollable, speed, delay, scroll]);
  var onClickIcon = useCallback(function (event) {
    if (mode === 'closeable') {
      ref.current.timer && clearTimeout(ref.current.timer);
      ref.current.timer = null;
      setState(function (state) {
        return _Object$assign(_Object$assign({}, state), {
          show: false
        });
      });
      onClose === null || onClose === void 0 ? void 0 : onClose(event);
    }
  }, [mode, onClose]);
  return state.show && jsxRuntime.exports.jsxs(View, _Object$assign({
    className: bem('notice-bar', {
      withicon: mode,
      wrapable: wrapable
    }) + " ".concat(className || ''),
    style: style([rootStyle$5({
      color: color,
      backgroundColor: backgroundColor,
      background: background
    }), style$1])
  }, others, {
    onClick: onClick
  }, {
    children: [leftIcon ? jsxRuntime.exports.jsx(Index$$, {
      size: 32,
      name: leftIcon,
      className: "van-notice-bar__left-icon"
    }, void 0) : renderLeftIcon, jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-notice-bar__wrap van-notice-bar__wrap_".concat(state.unitag)
    }, {
      children: jsxRuntime.exports.jsxs(View, _Object$assign({
        className: "van-notice-bar__content van-notice-bar__content_".concat(state.unitag, " ") + (scrollable === false && !wrapable ? 'van-ellipsis' : ''),
        animation: state.animationData
      }, {
        children: [text, !text && children]
      }), void 0)
    }), void 0), mode === 'closeable' ? jsxRuntime.exports.jsx(Index$$, {
      className: "van-notice-bar__right-icon",
      name: "cross",
      onClick: onClickIcon
    }, void 0) : mode === 'link' ? jsxRuntime.exports.jsx(Navigator, _Object$assign({
      url: url,
      openType: openType
    }, {
      children: jsxRuntime.exports.jsx(Index$$, {
        className: "van-notice-bar__right-icon",
        name: "arrow"
      }, void 0)
    }), void 0) : renderRightIcon]
  }), void 0);
}

function Index$L(props) {
  var value = props.value,
      _props$accordion = props.accordion,
      accordion = _props$accordion === void 0 ? false : _props$accordion,
      _props$border3 = props.border,
      border = _props$border3 === void 0 ? true : _props$border3,
      onOpen = props.onOpen,
      onClose = props.onClose,
      onChange = props.onChange,
      style = props.style,
      className = props.className,
      children = props.children,
      others = __rest(props, ["value", "accordion", "border", "onOpen", "onClose", "onChange", "style", "className", "children"]);

  var handleSwitch = useCallback(function (event, name, expanded) {
    var changeItem = name;

    if (!accordion) {
      var _context24, _context25;

      name = expanded ? _concatInstanceProperty(_context24 = value || []).call(_context24, name) : _filterInstanceProperty(_context25 = value || []).call(_context25, function (activeName) {
        return activeName !== name;
      });
    } else {
      name = expanded ? name : '';
    }

    Object.defineProperty(event, 'detail', {
      value: changeItem,
      writable: true
    });

    if (expanded) {
      onOpen === null || onOpen === void 0 ? void 0 : onOpen(event);
    } else {
      onClose === null || onClose === void 0 ? void 0 : onClose(event);
    }

    event.detail = name;
    onChange === null || onChange === void 0 ? void 0 : onChange(event);
  }, [value, accordion, onOpen, onClose, onChange]);
  var newChildren = useMemo(function () {
    return children === null || children === void 0 ? void 0 : _mapInstanceProperty(children).call(children, function (child, index) {
      return /*#__PURE__*/cloneElement(child, {
        key: index,
        parent: {
          index: index,
          handleSwitch: handleSwitch,
          data: {
            value: value,
            accordion: accordion
          }
        }
      });
    });
  }, [children, value, accordion, handleSwitch]);
  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: 'custom-class van-collapse ' + (border ? 'van-hairline--top-bottom' : '') + " ".concat(className || ''),
    style: style
  }, others, {
    children: newChildren
  }), void 0);
}

function jumpLink(url, linkType) {
  linkType = linkType !== null && linkType !== void 0 ? linkType : 'navigateTo';

  if (url) {
    if (linkType === 'navigateTo' && Taro.getCurrentPages().length > 9) {
      Taro.redirectTo({
        url: url
      });
    } else {
      switch (linkType) {
        case 'navigateTo':
          Taro.navigateTo({
            url: url
          });
          break;

        case 'reLaunch':
          Taro.reLaunch({
            url: url
          });
          break;

        case 'redirectTo':
          Taro.redirectTo({
            url: url
          });
      }
    }
  }
}

function titleStyle(data) {
  return style([{
    'max-width': addUnit$1(data.titleWidth),
    'min-width': addUnit$1(data.titleWidth)
  }, data.titleStyle]);
}

function Index$K(props) {
  var url = props.url,
      linkType = props.linkType,
      size = props.size,
      center = props.center,
      required = props.required,
      _props$border4 = props.border,
      border = _props$border4 === void 0 ? true : _props$border4,
      isLink = props.isLink,
      clickable = props.clickable,
      customStyle = props.customStyle,
      icon = props.icon,
      titleWidth = props.titleWidth,
      titleStyle$1 = props.titleStyle,
      title = props.title,
      label = props.label,
      value = props.value,
      arrowDirection = props.arrowDirection,
      onClick = props.onClick,
      renderIcon = props.renderIcon,
      renderTitle = props.renderTitle,
      renderLabel = props.renderLabel,
      renderRightIcon = props.renderRightIcon,
      renderExtra = props.renderExtra,
      children = props.children,
      style$1 = props.style,
      className = props.className,
      others = __rest(props, ["url", "linkType", "size", "center", "required", "border", "isLink", "clickable", "customStyle", "icon", "titleWidth", "titleStyle", "title", "label", "value", "arrowDirection", "onClick", "renderIcon", "renderTitle", "renderLabel", "renderRightIcon", "renderExtra", "children", "style", "className"]);

  var _click = useCallback(function (event) {
    onClick === null || onClick === void 0 ? void 0 : onClick(event);
    if (url && linkType) jumpLink(url, linkType);
  }, [linkType, onClick, url]);

  return jsxRuntime.exports.jsxs(View, _Object$assign({
    className: 'custom-class ' + bem('cell', [size, {
      center: center,
      required: required,
      borderless: !border,
      clickable: isLink || clickable
    }]) + " ".concat(className || ''),
    hoverClass: "van-cell--hover hover-class",
    hoverStayTime: 70,
    style: style([customStyle, style$1]),
    onClick: _click
  }, others, {
    children: [icon ? jsxRuntime.exports.jsx(Index$$, {
      name: icon,
      className: "van-cell__left-icon-wrap van-cell__left-icon"
    }, void 0) : renderIcon, jsxRuntime.exports.jsxs(View, _Object$assign({
      style: titleStyle({
        titleWidth: titleWidth,
        titleStyle: titleStyle$1
      }),
      className: "van-cell__title title-class"
    }, {
      children: [title || title === 0 ? jsxRuntime.exports.jsx(Block, {
        children: title
      }, void 0) : renderTitle, (label || renderLabel) && jsxRuntime.exports.jsx(View, _Object$assign({
        className: "van-cell__label label-class"
      }, {
        children: renderLabel || label && jsxRuntime.exports.jsx(Block, {
          children: label
        }, void 0)
      }), void 0)]
    }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-cell__value value-class"
    }, {
      children: value || value === 0 ? jsxRuntime.exports.jsx(Block, {
        children: value
      }, void 0) : children
    }), void 0), isLink ? jsxRuntime.exports.jsx(Index$$, {
      name: arrowDirection ? 'arrow' + '-' + arrowDirection : 'arrow',
      className: "van-cell__right-icon-wrap right-icon-class van-cell__right-icon"
    }, void 0) : renderRightIcon, renderExtra]
  }), void 0);
} // function useAnimate(context: any, expanded: any, mounted: any, height: any) {
//   const selector = '.van-collapse-item__wrapper'
//   if (expanded) {
//     context.animate(
//       selector,
//       [
//         { height: 0, ease: 'ease-in-out', offset: 0 },
//         { height: `${height}px`, ease: 'ease-in-out', offset: 1 },
//         { height: `auto`, ease: 'ease-in-out', offset: 1 },
//       ],
//       mounted ? 300 : 0,
//       () => {
//         context.clearAnimation(selector)
//       },
//     )
//     return
//   }
//   context.animate(
//     selector,
//     [
//       { height: `${height}px`, ease: 'ease-in-out', offset: 0 },
//       { height: 0, ease: 'ease-in-out', offset: 1 },
//     ],
//     300,
//     () => {
//       context.clearAnimation(selector)
//     },
//   )
// }


function useAnimation(expanded, mounted, height, setState) {
  var animation = Taro.createAnimation({
    duration: 0,
    timingFunction: 'ease-in-out'
  });

  if (expanded) {
    if (height === 0) {
      animation.height('auto').top(1).step();
    } else {
      animation.height(height).top(1).step({
        duration: mounted ? 300 : 1
      }).height('auto').step();
    }

    var animationclass = animation.export();
    setState === null || setState === void 0 ? void 0 : setState(function (state) {
      return _Object$assign(_Object$assign({}, state), {
        animation: animationclass
      });
    });
  } else {
    animation.height(height).top(0).step({
      duration: 1
    }).height(0).step({
      duration: 300
    });

    var _animationclass = animation.export();

    setState === null || setState === void 0 ? void 0 : setState(function (state) {
      return _Object$assign(_Object$assign({}, state), {
        animation: process.env.TARO_ENV === 'h5' ? "".concat(_animationclass, "--1") : _animationclass
      });
    });
  }
}

function setContentAnimate(context, expanded, mounted, setState, ref) {
  getRect(context, '.van-collapse-item__content').then(function (rect) {
    return process.env.TARO_ENV === 'h5' ? ref.current.clientHeight : rect.height;
  }).then(function (height) {
    useAnimation(expanded, mounted, height, setState);
  });
}

function Index$J(props) {
  var ref = useRef({
    mounted: false
  });

  var _useState47 = useState({
    index: undefined,
    expanded: false,
    animation: {
      actions: []
    },
    ready: false
  }),
      _useState48 = _slicedToArray(_useState47, 2),
      state = _useState48[0],
      setState = _useState48[1];

  var parent = props.parent,
      _props$name = props.name,
      name = _props$name === void 0 ? null : _props$name,
      _props$title = props.title,
      title = _props$title === void 0 ? '' : _props$title,
      _props$value = props.value,
      value = _props$value === void 0 ? '' : _props$value,
      icon = props.icon,
      label = props.label,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$clickable = props.clickable,
      clickable = _props$clickable === void 0 ? false : _props$clickable,
      _props$border5 = props.border,
      border = _props$border5 === void 0 ? true : _props$border5,
      _props$isLink = props.isLink,
      isLink = _props$isLink === void 0 ? true : _props$isLink,
      renderTitle = props.renderTitle,
      renderIcon = props.renderIcon,
      renderRightIcon = props.renderRightIcon,
      renderValue = props.renderValue,
      style = props.style,
      className = props.className,
      children = props.children,
      others = __rest(props, ["parent", "name", "title", "value", "icon", "label", "disabled", "clickable", "border", "isLink", "renderTitle", "renderIcon", "renderRightIcon", "renderValue", "style", "className", "children"]);

  useReady(function () {
    setState(function (state) {
      return _Object$assign(_Object$assign({}, state), {
        ready: true
      });
    });
  });
  var refDom = useRef(null);
  var updateExpanded = useCallback(function () {
    var _context26;

    if (!parent) {
      return;
    }

    var _ref11 = parent === null || parent === void 0 ? void 0 : parent.data,
        value = _ref11.value,
        accordion = _ref11.accordion;

    var index = parent === null || parent === void 0 ? void 0 : parent.index;
    var currentName = name == null ? index : name;
    var expanded = accordion ? value === currentName : _someInstanceProperty(_context26 = value || []).call(_context26, function (name) {
      return name === currentName;
    });

    if (expanded !== state.expanded) {
      setContentAnimate(null, expanded, ref.current.mounted, setState, refDom);
    }

    setState(function (state) {
      return _Object$assign(_Object$assign({}, state), {
        index: index,
        expanded: expanded
      });
    });
  }, [parent, name, state.expanded]);
  useEffect(function () {
    if (state.ready) {
      updateExpanded();
      ref.current.mounted = true;
    }
  }, [state.ready, updateExpanded]);
  useEffect(function () {
    if (state.ready) {
      updateExpanded();
    }
  }, [state.ready, updateExpanded, parent.data]);
  var onClick = useCallback(function (event) {
    if (disabled) {
      return;
    }

    var currentName = name == null ? parent === null || parent === void 0 ? void 0 : parent.index : name;
    parent === null || parent === void 0 ? void 0 : parent.handleSwitch(event, currentName, !state.expanded);
  }, [parent, disabled, name, state.expanded]);
  return jsxRuntime.exports.jsxs(View, _Object$assign({
    className: 'van-collapse-item custom-class ' + (state.index !== 0 ? 'van-hairline--top' : '') + " ".concat(className || ''),
    style: style
  }, others, {
    children: [jsxRuntime.exports.jsx(Index$K, _Object$assign({
      title: title,
      icon: icon,
      value: value,
      label: label,
      isLink: isLink,
      clickable: clickable,
      border: border && state.expanded,
      className: bem('collapse-item__title', {
        disabled: disabled,
        expanded: state.expanded
      }) + ' van-cell',
      onClick: onClick,
      renderTitle: jsxRuntime.exports.jsx(Block, {
        children: renderTitle
      }, void 0),
      renderIcon: jsxRuntime.exports.jsx(Block, {
        children: renderIcon
      }, void 0),
      renderRightIcon: jsxRuntime.exports.jsx(Block, {
        children: renderRightIcon
      }, void 0)
    }, {
      children: renderValue
    }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
      className: bem('collapse-item__wrapper', {}) + ' van-collapse-item__animation-box',
      animation: state.animation
    }, {
      children: jsxRuntime.exports.jsx(View, _Object$assign({
        className: "van-collapse-item__content content-class",
        ref: refDom
      }, {
        children: children
      }), void 0)
    }), void 0)]
  }), void 0);
}

function adaptor(ctx) {
  return _Object$assign(ctx, {
    setStrokeStyle: function setStrokeStyle(val) {
      ctx.strokeStyle = val;
    },
    setLineWidth: function setLineWidth(val) {
      ctx.lineWidth = val;
    },
    setLineCap: function setLineCap(val) {
      ctx.lineCap = val;
    },
    setFillStyle: function setFillStyle(val) {
      ctx.fillStyle = val;
    },
    setFontSize: function setFontSize(val) {
      ctx.font = String(val);
    },
    setGlobalAlpha: function setGlobalAlpha(val) {
      ctx.globalAlpha = val;
    },
    setLineJoin: function setLineJoin(val) {
      ctx.lineJoin = val;
    },
    setTextAlign: function setTextAlign(val) {
      ctx.textAlign = val;
    },
    setMiterLimit: function setMiterLimit(val) {
      ctx.miterLimit = val;
    },
    setShadow: function setShadow(offsetX, offsetY, blur, color) {
      ctx.shadowOffsetX = offsetX;
      ctx.shadowOffsetY = offsetY;
      ctx.shadowBlur = blur;
      ctx.shadowColor = color;
    },
    setTextBaseline: function setTextBaseline(val) {
      ctx.textBaseline = val;
    },
    createCircularGradient: function createCircularGradient() {},
    draw: function draw() {}
  });
}

function format(rate) {
  return Math.min(Math.max(rate, 0), 100);
}

var PERIMETER = 2 * Math.PI;
var BEGIN_ANGLE = -Math.PI / 2;
var STEP = 1;
var CIRCLE_INDEX = 0;

function Index$I(props) {
  var _useState49 = useState({
    ready: false,
    hoverColor: '',
    unitag: 'van-circle'
  }),
      _useState50 = _slicedToArray(_useState49, 2),
      state = _useState50[0],
      setState = _useState50[1];

  var ref = useRef({
    inited: false,
    currentValue: undefined,
    interval: undefined
  });

  var text = props.text,
      _props$lineCap = props.lineCap,
      lineCap = _props$lineCap === void 0 ? 'round' : _props$lineCap,
      _props$value2 = props.value,
      value = _props$value2 === void 0 ? 0 : _props$value2,
      _props$speed2 = props.speed,
      speed = _props$speed2 === void 0 ? 50 : _props$speed2,
      _props$size = props.size,
      size = _props$size === void 0 ? 100 : _props$size,
      fill = _fillInstanceProperty(props),
      _props$layerColor = props.layerColor,
      layerColor = _props$layerColor === void 0 ? '#ffffff' : _props$layerColor,
      _props$color3 = props.color,
      color = _props$color3 === void 0 ? '#1989fa' : _props$color3,
      _props$type2 = props.type,
      type = _props$type2 === void 0 ? '' : _props$type2,
      _props$strokeWidth2 = props.strokeWidth,
      strokeWidth = _props$strokeWidth2 === void 0 ? 4 : _props$strokeWidth2,
      _props$clockwise = props.clockwise,
      clockwise = _props$clockwise === void 0 ? true : _props$clockwise,
      style = props.style,
      className = props.className,
      children = props.children,
      others = __rest(props, ["text", "lineCap", "value", "speed", "size", "fill", "layerColor", "color", "type", "strokeWidth", "clockwise", "style", "className", "children"]);

  useEffect(function () {
    setState(function (state) {
      return _Object$assign(_Object$assign({}, state), {
        // unitag: process.env.TARO_ENV === 'h5' ? `van-circle_uni_${CIRCLE_INDEX++}` : 'van-circle',
        unitag: "van-circle_uni_".concat(CIRCLE_INDEX++)
      });
    });
  }, []);
  Taro.useReady(function () {
    // taro h5 nativeProps?????????????????? hack??????
    Taro.nextTick(function () {
      var _a;

      if (process.env.TARO_ENV === 'h5') {
        var taroCanvas = document.querySelector(".".concat(state.unitag));
        var canvas = (_a = taroCanvas === null || taroCanvas === void 0 ? void 0 : taroCanvas.children) === null || _a === void 0 ? void 0 : _a[0];
        canvas === null || canvas === void 0 ? void 0 : canvas.setAttribute('width', String(size));
        canvas === null || canvas === void 0 ? void 0 : canvas.setAttribute('height', String(size));
      }

      setState(function (state) {
        return _Object$assign(_Object$assign({}, state), {
          ready: true
        });
      });
    });
  });
  var getContext = useCallback(function () {
    console.log('getContext');

    if (type === '') {
      var ctx = Taro.createCanvasContext(state.unitag);
      return _Promise.resolve(ctx);
    }

    var dpr = getSystemInfoSync().pixelRatio;
    return new _Promise(function (resolve) {
      createSelectorQuery().select(".".concat(state.unitag)).node().exec(function (res) {
        var canvas = res[0].node;
        var ctx = canvas.getContext(type);

        if (!ref.current.inited) {
          ref.current.inited = true;
          canvas.width = size * dpr;
          canvas.height = size * dpr;
          ctx.scale(dpr, dpr);
        }

        resolve(adaptor(ctx));
      });
    });
  }, [size, type, state.unitag]);

  var setHoverColor = function setHoverColor() {
    console.log('setHoverColor');

    if (isObj$1(color)) {
      var _color = color;
      return getContext().then(function (context) {
        var _context27, _context28;

        var LinearColor = context.createLinearGradient(size, 0, 0, 0);

        _mapInstanceProperty(_context27 = _sortInstanceProperty(_context28 = _Object$keys(color)).call(_context28, function (a, b) {
          return _parseFloat(a) - _parseFloat(b);
        })).call(_context27, function (key) {
          return LinearColor.addColorStop(_parseFloat(key) / 100, _color[key]);
        });

        setState(function (state) {
          return _Object$assign(_Object$assign({}, state), {
            hoverColor: LinearColor
          });
        });
      });
    }

    setState(function (state) {
      return _Object$assign(_Object$assign({}, state), {
        hoverColor: color
      });
    });
    return _Promise.resolve();
  };

  var presetCanvas = useCallback(function (context, strokeStyle, beginAngle, endAngle, fill) {
    var position = size / 2;
    var radius = position - strokeWidth / 2;
    context.setStrokeStyle(strokeStyle);
    context.setLineWidth(strokeWidth);
    context.setLineCap(lineCap);
    context.beginPath();
    context.arc(position, position, radius, beginAngle, endAngle, !clockwise);
    context.stroke();

    if (fill) {
      context.setFillStyle(fill);

      _fillInstanceProperty(context).call(context);
    }
  }, [clockwise, lineCap, size, strokeWidth]);
  var renderLayerCircle = useCallback(function (context) {
    presetCanvas(context, layerColor, 0, PERIMETER, fill);
  }, [fill, layerColor, presetCanvas]);
  var renderHoverCircle = useCallback(function (context, formatValue) {
    // ????????????
    var progress = PERIMETER * (formatValue / 100);
    var endAngle = clockwise ? BEGIN_ANGLE + progress : 3 * Math.PI - (BEGIN_ANGLE + progress);
    presetCanvas(context, state.hoverColor, BEGIN_ANGLE, endAngle);
  }, [clockwise, presetCanvas, state.hoverColor]);
  var drawCircle = useCallback(function (currentValue) {
    console.log('drawCircle');
    getContext().then(function (context) {
      context.clearRect(0, 0, size, size);
      renderLayerCircle(context);
      var formatValue = format(currentValue);

      if (formatValue !== 0) {
        renderHoverCircle(context, formatValue);
      }

      context.draw();
    });
  }, [getContext, renderHoverCircle, renderLayerCircle, size]);

  var clearMockInterval = function clearMockInterval() {
    if (ref.current.interval) {
      clearTimeout(ref.current.interval);
      ref.current.interval = null;
    }
  };

  var reRender = useCallback(function () {
    console.log('reRender');

    if (speed <= 0 || speed > 1000) {
      drawCircle(value);
      return;
    }

    clearMockInterval();
    ref.current.currentValue = ref.current.currentValue || 0;

    var run = function run() {
      ref.current.interval = setTimeout(function () {
        if (ref.current.currentValue !== value) {
          if (Math.abs(ref.current.currentValue - value) < STEP) {
            ref.current.currentValue = value;
          } else if (ref.current.currentValue < value) {
            ref.current.currentValue += STEP;
          } else {
            ref.current.currentValue -= STEP;
          }

          drawCircle(ref.current.currentValue);
          run();
        } else {
          clearMockInterval();
        }
      }, 1000 / speed);
    };

    run();
  }, [drawCircle, speed, value]);
  useEffect(function () {
    if (state.ready) {
      reRender();
    }
  }, [reRender, state.ready, value]);
  useEffect(function () {
    if (state.ready) {
      drawCircle(ref.current.currentValue);
    } // eslint-disable-next-line

  }, [state.ready, size]);
  useEffect(function () {
    if (state.ready) {
      setHoverColor().then(function () {
        drawCircle(ref.current.currentValue);
      });
    } // eslint-disable-next-line

  }, [state.ready, color]);
  useEffect(function () {
    // if (process.env.TARO_ENV !== 'h5') {
    //   if (state.ready) {
    //     ref.current.currentValue = value
    //     setHoverColor().then(() => {
    //       // if (process.env.TARO_ENV === 'h5') {
    //       // reRender()
    //       // } else {
    //       //   drawCircle(ref.current.currentValue)
    //       // }
    //       drawCircle(ref.current.currentValue)
    //     })
    //   }
    // }
    return function () {
      clearMockInterval();
    };
    /* eslint-disable-next-line */
  }, [state.ready]);
  return jsxRuntime.exports.jsxs(View, _Object$assign({
    className: "van-circle ".concat(className),
    style: style
  }, others, {
    children: [jsxRuntime.exports.jsx(Canvas // eslint-disable-next-line
    // @ts-ignore
    , {
      // eslint-disable-next-line
      // @ts-ignore
      width: size,
      height: size,
      nativeProps: {
        width: size,
        height: size
      },
      className: "van-circle__canvas ".concat(state.unitag),
      type: type,
      style: 'width: ' + "".concat(size, "px") + ';height:' + "".concat(size, "px"),
      id: state.unitag,
      canvasId: state.unitag
    }, void 0), !text ? jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-circle__text"
    }, {
      children: children
    }), void 0) : jsxRuntime.exports.jsx(CoverView, _Object$assign({
      className: "van-circle__text"
    }, {
      children: text
    }), void 0)]
  }), void 0);
}

function iconStyle$1(data) {
  var styles = {
    'font-size': addUnit$1(data.iconSize)
  };

  if (data.checkedColor && data.value && !data.disabled && !data.parentDisabled) {
    styles['border-color'] = data.checkedColor;
    styles['background-color'] = data.checkedColor;
  }

  return style(styles);
}

function Index$H(props) {
  var _useState51 = useState({
    parentDisabled: false,
    direction: 'vertical'
  }),
      _useState52 = _slicedToArray(_useState51, 2),
      state = _useState52[0],
      setState = _useState52[1];

  var parent = props.parent,
      name = props.name,
      value = props.value,
      disabled = props.disabled,
      _props$checkedColor = props.checkedColor,
      checkedColor = _props$checkedColor === void 0 ? '#1989fa' : _props$checkedColor,
      _props$labelPosition = props.labelPosition,
      labelPosition = _props$labelPosition === void 0 ? 'right' : _props$labelPosition,
      labelDisabled = props.labelDisabled,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'round' : _props$shape,
      _props$iconSize = props.iconSize,
      iconSize = _props$iconSize === void 0 ? 40 : _props$iconSize,
      renderIcon = props.renderIcon,
      onChange = props.onChange,
      style = props.style,
      className = props.className,
      children = props.children,
      others = __rest(props, ["parent", "name", "value", "disabled", "checkedColor", "labelPosition", "labelDisabled", "shape", "iconSize", "renderIcon", "onChange", "style", "className", "children"]);

  useEffect(function () {
    if (!parent) {
      return;
    }

    var _parent$data = parent.data,
        disabled = _parent$data.disabled,
        direction = _parent$data.direction;
    setState(function (state) {
      return _Object$assign(_Object$assign({}, state), {
        direction: direction,
        parentDisabled: disabled
      });
    });
  }, [parent]);
  var setParentValue = useCallback(function (parent, event) {
    var _context29;

    var parentValue = _sliceInstanceProperty(_context29 = parent.value).call(_context29);

    var value = event.detail;
    var max = parent.data.max;

    if (value) {
      if (max && parentValue.length >= max) {
        return;
      }

      if (_indexOfInstanceProperty(parentValue).call(parentValue, name) === -1) {
        parentValue.push(name);
        event.detail = parentValue;
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
      }
    } else {
      var _index3 = _indexOfInstanceProperty(parentValue).call(parentValue, name);

      if (_index3 !== -1) {
        _spliceInstanceProperty(parentValue).call(parentValue, _index3, 1);

        event.detail = parentValue;
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
      }
    }
  }, [name, onChange]);
  var emitChange = useCallback(function (event) {
    if (parent) {
      setParentValue(parent, event);
    } else {
      onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }
  }, [parent, onChange, setParentValue]);
  var toggle = useCallback(function (event) {
    if (!disabled && !state.parentDisabled) {
      Object.defineProperty(event, 'detail', {
        value: !value,
        writable: true
      });
      emitChange(event);
    }
  }, [disabled, emitChange, state.parentDisabled, value]);
  var onClickLabel = useCallback(function (event) {
    if (!disabled && !labelDisabled && !state.parentDisabled) {
      Object.defineProperty(event, 'detail', {
        value: !value,
        writable: true
      });
      emitChange(event);
    }
  }, [disabled, emitChange, labelDisabled, state.parentDisabled, value]);
  return jsxRuntime.exports.jsxs(View, _Object$assign({
    className: bem('checkbox', [{
      horizontal: state.direction === 'horizontal'
    }]) + " custom-class ".concat(className),
    style: style
  }, others, {
    children: [labelPosition === 'left' && jsxRuntime.exports.jsx(View, _Object$assign({
      className: 'label-class ' + bem('checkbox__label', [labelPosition, {
        disabled: disabled || state.parentDisabled
      }]),
      onClick: onClickLabel
    }, {
      children: children
    }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-checkbox__icon-wrap",
      onClick: toggle
    }, {
      children: renderIcon || jsxRuntime.exports.jsx(Index$$, {
        name: "success",
        size: "0.8em",
        className: bem('checkbox__icon', [shape, {
          disabled: disabled || state.parentDisabled,
          checked: value
        }]) + ' icon-class',
        style: iconStyle$1({
          checkedColor: checkedColor,
          value: value,
          disabled: disabled,
          parentDisabled: state.parentDisabled,
          iconSize: iconSize
        }),
        customStyle: "line-height: 1.25em;"
      }, void 0)
    }), void 0), labelPosition === 'right' && jsxRuntime.exports.jsx(View, _Object$assign({
      className: 'label-class ' + bem('checkbox__label', [labelPosition, {
        disabled: disabled || state.parentDisabled
      }]),
      onClick: onClickLabel
    }, {
      children: children
    }), void 0)]
  }), void 0);
}

function Index$G(props) {
  var max = props.max,
      _props$value3 = props.value,
      value = _props$value3 === void 0 ? [] : _props$value3,
      _props$disabled2 = props.disabled,
      disabled = _props$disabled2 === void 0 ? false : _props$disabled2,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'vertical' : _props$direction,
      onChange = props.onChange,
      style = props.style,
      className = props.className,
      children = props.children,
      others = __rest(props, ["max", "value", "disabled", "direction", "onChange", "style", "className", "children"]);

  var newChildren = useMemo(function () {
    var _children = isArray(children) ? children : [children];

    return _children === null || _children === void 0 ? void 0 : _mapInstanceProperty(_children).call(_children, function (child, index) {
      var _a;

      return /*#__PURE__*/cloneElement(child, {
        key: index,
        value: _indexOfInstanceProperty(value).call(value, (_a = child.props) === null || _a === void 0 ? void 0 : _a.name) !== -1,
        onChange: onChange,
        parent: {
          value: value,
          data: {
            max: max,
            disabled: disabled,
            direction: direction
          }
        }
      });
    });
  }, [children, direction, disabled, max, value, onChange]);
  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: bem('checkbox-group', [{
      horizontal: direction === 'horizontal'
    }]) + " ".concat(className || ''),
    style: style
  }, others, {
    children: newChildren
  }), void 0);
}

function inputStyle$1(autosize) {
  if (autosize && autosize.constructor === 'Object') {
    return style({
      'min-height': addUnit$1(autosize.minHeight),
      'max-height': addUnit$1(autosize.maxHeight)
    });
  }

  return '';
}

function Index$F(props) {
  var ref = useRef({
    focused: false
  });

  var _useState53 = useState({
    innerValue: '',
    showClear: false
  }),
      _useState54 = _slicedToArray(_useState53, 2),
      state = _useState54[0],
      setState = _useState54[1];

  var innerValue = state.innerValue,
      showClear = state.showClear;
  var size = props.size,
      leftIcon = props.leftIcon,
      center = props.center,
      _props$border6 = props.border,
      border = _props$border6 === void 0 ? true : _props$border6,
      isLink = props.isLink,
      required = props.required,
      clickable = props.clickable,
      _props$titleWidth = props.titleWidth,
      titleWidth = _props$titleWidth === void 0 ? '6.2em' : _props$titleWidth,
      customStyle = props.customStyle,
      arrowDirection = props.arrowDirection,
      label = props.label,
      disabled = props.disabled,
      _props$type3 = props.type,
      type = _props$type3 === void 0 ? 'text' : _props$type3,
      inputAlign = props.inputAlign,
      _props$clearIcon = props.clearIcon,
      clearIcon = _props$clearIcon === void 0 ? 'clear' : _props$clearIcon,
      rightIcon = props.rightIcon,
      icon = props.icon,
      iconClass = props.iconClass,
      value = props.value,
      _props$maxlength = props.maxlength,
      maxlength = _props$maxlength === void 0 ? -1 : _props$maxlength,
      showWordLimit = props.showWordLimit,
      errorMessageAlign = props.errorMessageAlign,
      error = props.error,
      errorMessage = props.errorMessage,
      fixed = props.fixed,
      focus = props.focus,
      _props$cursor = props.cursor,
      cursor = _props$cursor === void 0 ? -1 : _props$cursor,
      autoFocus = props.autoFocus,
      readonly = props.readonly,
      placeholder = props.placeholder,
      placeholderStyle = props.placeholderStyle,
      autosize = props.autosize,
      _props$cursorSpacing = props.cursorSpacing,
      cursorSpacing = _props$cursorSpacing === void 0 ? 50 : _props$cursorSpacing,
      _props$adjustPosition = props.adjustPosition,
      adjustPosition = _props$adjustPosition === void 0 ? true : _props$adjustPosition,
      _props$showConfirmBar = props.showConfirmBar,
      showConfirmBar = _props$showConfirmBar === void 0 ? true : _props$showConfirmBar,
      holdKeyboard = props.holdKeyboard,
      _props$selectionEnd = props.selectionEnd,
      selectionEnd = _props$selectionEnd === void 0 ? -1 : _props$selectionEnd,
      _props$selectionStart = props.selectionStart,
      selectionStart = _props$selectionStart === void 0 ? -1 : _props$selectionStart,
      _props$disableDefault = props.disableDefaultPadding,
      disableDefaultPadding = _props$disableDefault === void 0 ? true : _props$disableDefault,
      confirmType = props.confirmType,
      confirmHold = props.confirmHold,
      password = props.password,
      clearable = props.clearable,
      _props$clearTrigger = props.clearTrigger,
      clearTrigger = _props$clearTrigger === void 0 ? 'focus' : _props$clearTrigger,
      renderLefticon = props.renderLefticon,
      renderTitle = props.renderTitle,
      renderInput = props.renderInput,
      renderRighticon = props.renderRighticon,
      renderIcon = props.renderIcon,
      renderButton = props.renderButton,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onClear = props.onClear,
      onConfirm = props.onConfirm,
      onInput = props.onInput,
      onClickInput = props.onClickInput,
      onClickIcon = props.onClickIcon,
      onLineChange = props.onLineChange,
      onKeyboardHeightChange = props.onKeyboardHeightChange;

  var emitChange = function emitChange(event) {
    event = event || {
      detail: {
        value: ''
      }
    };
    Object.defineProperty(event, 'detail', {
      value: event.detail.value
    });
    setState(function (pre) {
      return _Object$assign(_Object$assign({}, pre), {
        innerValue: event.detail
      });
    });
    Taro.nextTick(function () {
      onInput === null || onInput === void 0 ? void 0 : onInput(event);
      onChange === null || onChange === void 0 ? void 0 : onChange(event);
    });
  };

  var setShowClear = function setShowClear(value) {
    var showClear = false;

    if (clearable && !readonly) {
      var hasValue = !!value;

      var _trigger = clearTrigger === 'always' || clearTrigger === 'focus' && ref.current.focused;

      showClear = hasValue && _trigger;
    }

    setState(function (pre) {
      return _Object$assign(_Object$assign({}, pre), {
        showClear: showClear
      });
    });
  };

  var _input = function _input(event) {
    var _ref12 = event.detail || {},
        _ref12$value = _ref12.value,
        value = _ref12$value === void 0 ? '' : _ref12$value;

    setShowClear(value);
    emitChange(event);
  };

  var _focus = function _focus(event) {
    ref.current.focused = true;
    setShowClear(innerValue);
    Object.defineProperty(event, 'detail', {
      value: event.detail.value
    });
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
  };

  var _blur = function _blur(event) {
    ref.current.focused = false;
    setShowClear(innerValue);
    Object.defineProperty(event, 'detail', {
      value: event.detail.value
    });
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
  };

  var _clear = function _clear() {
    setState(function (pre) {
      return _Object$assign(_Object$assign({}, pre), {
        innerValue: ''
      });
    });
    setShowClear('');
    Taro.nextTick(function () {
      emitChange();
      onClear === null || onClear === void 0 ? void 0 : onClear();
    });
  };

  var _confirm = function _confirm(event) {
    var _ref13 = event.detail || {},
        _ref13$value = _ref13.value,
        value = _ref13$value === void 0 ? '' : _ref13$value;

    setShowClear(value);
    Object.defineProperty(event, 'detail', {
      value: event.detail.value
    });
    onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(event);
  }; // setValue(value) {
  //   this.value = value
  //   this.setShowClear()
  //   if (value === '') {
  //     this.setData({ innerValue: '' })
  //   }
  //   this.emitChange()
  // },


  useEffect(function () {
    setShowClear(innerValue);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [readonly, clearable]);
  useEffect(function () {
    setState(function (pre) {
      return _Object$assign(_Object$assign({}, pre), {
        innerValue: value
      });
    });
  }, [value]);
  return jsxRuntime.exports.jsxs(Index$K, _Object$assign({
    size: size,
    icon: leftIcon,
    center: center,
    border: border,
    isLink: isLink,
    required: required,
    clickable: clickable,
    titleWidth: titleWidth,
    titleStyle: "margin-right: 12px;",
    customStyle: customStyle,
    arrowDirection: arrowDirection,
    className: "van-field",
    renderIcon: jsxRuntime.exports.jsx(Block, {
      children: renderLefticon
    }, void 0),
    renderTitle: jsxRuntime.exports.jsx(Block, {
      children: label ? jsxRuntime.exports.jsx(View, _Object$assign({
        className: 'label-class ' + bem('field__label', {
          disabled: disabled
        })
      }, {
        children: label
      }), void 0) : renderTitle
    }, void 0)
  }, {
    children: [jsxRuntime.exports.jsxs(View, _Object$assign({
      className: bem('field__body', [type])
    }, {
      children: [jsxRuntime.exports.jsx(View, _Object$assign({
        className: bem('field__control', [inputAlign, 'custom']),
        onClick: onClickInput
      }, {
        children: renderInput
      }), void 0), type === 'textarea' ? jsxRuntime.exports.jsx(Textarea, {
        className: bem('field__control', [inputAlign, type, {
          disabled: disabled,
          error: error
        }]) + ' input-class',
        fixed: fixed,
        focus: focus,
        cursor: cursor,
        value: innerValue,
        autoFocus: autoFocus,
        disabled: disabled || readonly,
        maxlength: maxlength,
        placeholder: placeholder,
        placeholderStyle: placeholderStyle,
        placeholderClass: bem('field__placeholder', {
          error: error,
          disabled: disabled
        }),
        autoHeight: !!autosize,
        style: inputStyle$1(autosize),
        cursorSpacing: cursorSpacing,
        adjustPosition: adjustPosition,
        showConfirmBar: showConfirmBar,
        holdKeyboard: holdKeyboard,
        selectionEnd: selectionEnd,
        selectionStart: selectionStart,
        disableDefaultPadding: disableDefaultPadding,
        onInput: _input,
        onClick: onClickInput,
        onBlur: _blur,
        onFocus: _focus,
        onConfirm: _confirm,
        onLineChange: onLineChange,
        onKeyboardHeightChange: onKeyboardHeightChange
      }, void 0) : jsxRuntime.exports.jsx(Input, {
        className: bem('field__control', [inputAlign, {
          disabled: disabled,
          error: error
        }]) + ' input-class',
        type: type,
        focus: focus,
        cursor: cursor,
        value: innerValue,
        autoFocus: autoFocus,
        disabled: disabled || readonly,
        maxlength: maxlength,
        placeholder: placeholder,
        placeholderStyle: placeholderStyle,
        placeholderClass: bem('field__placeholder', {
          error: error
        }),
        confirmType: confirmType,
        confirmHold: confirmHold,
        holdKeyboard: holdKeyboard,
        cursorSpacing: cursorSpacing,
        adjustPosition: adjustPosition,
        selectionEnd: selectionEnd,
        selectionStart: selectionStart,
        password: password,
        onInput: _input,
        onClick: onClickInput,
        onBlur: _blur,
        onFocus: _focus,
        onConfirm: _confirm,
        onKeyboardHeightChange: onKeyboardHeightChange
      }, void 0), showClear && jsxRuntime.exports.jsx(Index$$, {
        name: clearIcon,
        className: "van-field__clear-root van-field__icon-root",
        onTouchStart: _clear
      }, void 0), jsxRuntime.exports.jsxs(View, _Object$assign({
        className: "van-field__icon-container",
        onClick: onClickIcon
      }, {
        children: [(rightIcon || icon) && jsxRuntime.exports.jsx(Index$$, {
          name: rightIcon || icon,
          className: 'van-field__icon-root ' + iconClass + ' right-icon-class'
        }, void 0), renderRighticon, renderIcon]
      }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
        className: "van-field__button"
      }, {
        children: renderButton
      }), void 0)]
    }), void 0), showWordLimit && maxlength && jsxRuntime.exports.jsxs(View, _Object$assign({
      className: "van-field__word-limit"
    }, {
      children: [jsxRuntime.exports.jsx(View, _Object$assign({
        className: bem('field__word-num', {
          full: innerValue.length >= maxlength
        })
      }, {
        children: innerValue.length >= maxlength ? maxlength : innerValue.length
      }), void 0), '/' + maxlength]
    }), void 0), errorMessage && jsxRuntime.exports.jsx(View, _Object$assign({
      className: bem('field__error-message', [errorMessageAlign, {
        disabled: disabled,
        error: error
      }])
    }, {
      children: errorMessage
    }), void 0)]
  }), void 0);
}

function iconStyle(data) {
  var styles = {
    'font-size': addUnit$1(data.iconSize)
  };

  if (data.checkedColor && !(data.disabled || data.parentDisabled) && data.value === data.name) {
    styles['border-color'] = data.checkedColor;
    styles['background-color'] = data.checkedColor;
  }

  return style(styles);
}

function iconCustomStyle(data) {
  return style({
    'line-height': addUnit$1(data.iconSize),
    'font-size': '.8em',
    display: 'block'
  });
}

function Index$E(props) {
  var _useState55 = useState({
    direction: '',
    parentDisabled: false
  }),
      _useState56 = _slicedToArray(_useState55, 2),
      state = _useState56[0],
      setState = _useState56[1];

  var parent = props.parent,
      name = props.name,
      value = props.value,
      _props$disabled3 = props.disabled,
      disabled = _props$disabled3 === void 0 ? false : _props$disabled3,
      checkedColor = props.checkedColor,
      _props$labelPosition2 = props.labelPosition,
      labelPosition = _props$labelPosition2 === void 0 ? 'right' : _props$labelPosition2,
      _props$labelDisabled = props.labelDisabled,
      labelDisabled = _props$labelDisabled === void 0 ? false : _props$labelDisabled,
      _props$shape2 = props.shape,
      shape = _props$shape2 === void 0 ? 'round' : _props$shape2,
      _props$iconSize2 = props.iconSize,
      iconSize = _props$iconSize2 === void 0 ? 40 : _props$iconSize2,
      renderIcon = props.renderIcon,
      onChange = props.onChange,
      style = props.style,
      className = props.className,
      children = props.children,
      others = __rest(props, ["parent", "name", "value", "disabled", "checkedColor", "labelPosition", "labelDisabled", "shape", "iconSize", "renderIcon", "onChange", "style", "className", "children"]);

  useEffect(function () {
    if (!parent) {
      return;
    }

    var _parent$data2 = parent.data,
        disabled = _parent$data2.disabled,
        direction = _parent$data2.direction;
    setState(function (state) {
      return _Object$assign(_Object$assign({}, state), {
        direction: direction,
        parentDisabled: disabled
      });
    });
  }, [parent]);
  var emitChange = useCallback(function (event) {
    onChange === null || onChange === void 0 ? void 0 : onChange(event);
    setState(function (state) {
      return _Object$assign(_Object$assign({}, state), {
        value: event.detail
      });
    });
  }, [onChange]);
  var onClick = useCallback(function (event) {
    if (!disabled && !state.parentDisabled) {
      Object.defineProperty(event, 'detail', {
        value: name,
        writable: true
      });
      emitChange(event);
    }
  }, [disabled, emitChange, name, state.parentDisabled]);
  var onClickLabel = useCallback(function (event) {
    if (!(disabled || state.parentDisabled) && !labelDisabled) {
      Object.defineProperty(event, 'detail', {
        value: name,
        writable: true
      });
      emitChange(event);
    }
  }, [disabled, emitChange, labelDisabled, name, state.parentDisabled]);
  return jsxRuntime.exports.jsxs(View, _Object$assign({
    className: bem('radio', [state.direction]) + " custom-class ".concat(className),
    style: style
  }, others, {
    children: [labelPosition === 'left' && jsxRuntime.exports.jsx(View, _Object$assign({
      className: bem('radio__label', [labelPosition, {
        disabled: disabled || state.parentDisabled
      }]) + ' label-class',
      onClick: onClickLabel
    }, {
      children: children
    }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-radio__icon-wrap",
      style: 'font-size: ' + addUnit$1(iconSize),
      onClick: onClick
    }, {
      children: renderIcon || jsxRuntime.exports.jsx(Index$$, {
        name: "success",
        className: bem('radio__icon', [shape, {
          disabled: disabled || state.parentDisabled,
          checked: value === name
        }]) + ' icon-class',
        style: iconStyle({
          iconSize: iconSize,
          checkedColor: checkedColor,
          disabled: disabled,
          parentDisabled: state.parentDisabled,
          value: value,
          name: name
        }),
        customStyle: iconCustomStyle({
          iconSize: iconSize
        })
      }, void 0)
    }), void 0), labelPosition === 'right' && jsxRuntime.exports.jsx(View, _Object$assign({
      className: 'label-class ' + bem('radio__label', [labelPosition, {
        disabled: disabled || state.parentDisabled
      }]),
      onClick: onClickLabel
    }, {
      children: children
    }), void 0)]
  }), void 0);
}

function Index$D(props) {
  var _props$value4 = props.value,
      value = _props$value4 === void 0 ? null : _props$value4,
      _props$direction2 = props.direction,
      direction = _props$direction2 === void 0 ? 'vertical' : _props$direction2,
      _props$disabled4 = props.disabled,
      disabled = _props$disabled4 === void 0 ? false : _props$disabled4,
      onChange = props.onChange,
      children = props.children,
      style = props.style,
      className = props.className,
      others = __rest(props, ["value", "direction", "disabled", "onChange", "children", "style", "className"]);

  var newChildren = useMemo(function () {
    var _children = isArray(children) ? children : [children];

    return _children === null || _children === void 0 ? void 0 : _mapInstanceProperty(_children).call(_children, function (child, index) {
      return /*#__PURE__*/cloneElement(child, {
        key: index,
        value: value,
        onChange: onChange,
        parent: {
          data: {
            disabled: disabled,
            direction: direction
          }
        }
      });
    });
  }, [children, direction, disabled, onChange, value]);
  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: bem('radio-group', [direction]) + " ".concat(className || ''),
    style: style
  }, others, {
    children: newChildren
  }), void 0);
}

function rootStyle$4(data) {
  var currentColor = data.checked ? data.activeColor : data.inactiveColor;
  return style({
    'font-size': addUnit$1(data.size),
    'background-color': currentColor
  });
}

var BLUE = '#1989fa';
var GRAY_DARK = '#969799';

function loadingColor(data) {
  return data.checked ? data.activeColor || BLUE : data.inactiveColor || GRAY_DARK;
}

function Index$C(props) {
  var _props$checked = props.checked,
      checked = _props$checked === void 0 ? false : _props$checked,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      _props$disabled5 = props.disabled,
      disabled = _props$disabled5 === void 0 ? false : _props$disabled5,
      _props$activeColor = props.activeColor,
      activeColor = _props$activeColor === void 0 ? '#1989fa' : _props$activeColor,
      _props$inactiveColor = props.inactiveColor,
      inactiveColor = _props$inactiveColor === void 0 ? '#ffffff' : _props$inactiveColor,
      _props$size2 = props.size,
      size = _props$size2 === void 0 ? '60' : _props$size2,
      _props$activeValue = props.activeValue,
      activeValue = _props$activeValue === void 0 ? true : _props$activeValue,
      _props$inactiveValue = props.inactiveValue,
      inactiveValue = _props$inactiveValue === void 0 ? false : _props$inactiveValue,
      onChange = props.onChange,
      style$1 = props.style,
      className = props.className,
      others = __rest(props, ["checked", "loading", "disabled", "activeColor", "inactiveColor", "size", "activeValue", "inactiveValue", "onChange", "style", "className"]);

  var onClick = useCallback(function (event) {
    if (disabled || loading) {
      return;
    }

    var value = checked === activeValue ? inactiveValue : activeValue;
    Object.defineProperty(event, 'detail', {
      value: value
    });
    onChange === null || onChange === void 0 ? void 0 : onChange(event);
  }, [activeValue, checked, disabled, inactiveValue, loading, onChange]);
  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: bem('switch', {
      on: checked === activeValue,
      disabled: disabled
    }) + " custom-class ".concat(className),
    style: style([rootStyle$4({
      size: size,
      checked: checked,
      activeColor: activeColor,
      inactiveColor: inactiveColor
    }), style$1])
  }, others, {
    onClick: onClick
  }, {
    children: jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-switch__node node-class"
    }, {
      children: loading && jsxRuntime.exports.jsx(Index$Q, {
        color: loadingColor({
          checked: checked,
          activeColor: activeColor,
          inactiveColor: inactiveColor
        }),
        className: "van-switch__loading"
      }, void 0)
    }), void 0)
  }), void 0);
}

function sizeStyle(data) {
  return style({
    width: addUnit$1(data.previewSize),
    height: addUnit$1(data.previewSize)
  });
}

function isImageFile(item) {
  if (item.isImage != null) {
    return item.isImage;
  }

  if (item.type) {
    return item.type === 'image';
  }

  if (item.url) {
    return isImageUrl(item.url);
  }

  return false;
}

function isVideoFile(item) {
  if (item.isVideo != null) {
    return item.isVideo;
  }

  if (item.type) {
    return item.type === 'video';
  }

  if (item.url) {
    return isVideoUrl(item.url);
  }

  return false;
}

function formatImage(res) {
  if (res.tempFiles) {
    var _context30;

    return _mapInstanceProperty(_context30 = res.tempFiles).call(_context30, function (item) {
      return _Object$assign(_Object$assign({}, pickExclude(item, ['path'])), {
        type: 'image',
        url: item.path,
        thumb: item.path
      });
    });
  } else if (res.tempFilePaths) {
    var _context31;

    return _mapInstanceProperty(_context31 = res.tempFilePaths).call(_context31, function (item) {
      return {
        type: 'image',
        url: item,
        thumb: item
      };
    });
  }
}

function formatVideo(res) {
  return [_Object$assign(_Object$assign({}, pickExclude(res, ['tempFilePath', 'thumbTempFilePath', 'errMsg'])), {
    type: 'video',
    url: res.tempFilePath,
    thumb: res.thumbTempFilePath
  })];
}

function formatMedia(res) {
  var _context32;

  return _mapInstanceProperty(_context32 = res.tempFiles).call(_context32, function (item) {
    return _Object$assign(_Object$assign({}, pickExclude(item, ['fileType', 'thumbTempFilePath', 'tempFilePath'])), {
      type: res.type,
      url: item.tempFilePath,
      thumb: res.type === 'video' ? item.thumbTempFilePath : item.tempFilePath
    });
  });
}

function formatFile(res) {
  var _context33;

  return _mapInstanceProperty(_context33 = res.tempFiles).call(_context33, function (item) {
    return _Object$assign(_Object$assign({}, pickExclude(item, ['path'])), {
      url: item.path
    });
  });
}

function chooseFile(_ref14) {
  var accept = _ref14.accept,
      multiple = _ref14.multiple,
      capture = _ref14.capture,
      compressed = _ref14.compressed,
      maxDuration = _ref14.maxDuration,
      sizeType = _ref14.sizeType,
      camera = _ref14.camera,
      maxCount = _ref14.maxCount;
  return new _Promise(function (resolve, reject) {
    switch (accept) {
      case 'image':
        Taro.chooseImage({
          count: multiple ? Math.min(maxCount, 9) : 1,
          sourceType: capture,
          sizeType: sizeType,
          success: function success(res) {
            return resolve(formatImage(res));
          },
          fail: reject
        });
        break;

      case 'media':
        Taro.chooseMedia({
          count: multiple ? Math.min(maxCount, 9) : 1,
          sourceType: capture,
          maxDuration: maxDuration,
          sizeType: sizeType,
          camera: camera,
          success: function success(res) {
            return resolve(formatMedia(res));
          },
          fail: reject
        });
        break;

      case 'video':
        Taro.chooseVideo({
          sourceType: capture,
          compressed: compressed,
          maxDuration: maxDuration,
          camera: camera,
          success: function success(res) {
            return resolve(formatVideo(res));
          },
          fail: reject
        });
        break;

      default:
        Taro.chooseMessageFile({
          count: multiple ? maxCount : 1,
          type: accept,
          success: function success(res) {
            return resolve(formatFile(res));
          },
          fail: reject
        });
        break;
    }
  });
}

function Index$B(props) {
  var _context38;

  var _useState57 = useState({
    lists: [],
    isInCount: true
  }),
      _useState58 = _slicedToArray(_useState57, 2),
      state = _useState58[0],
      setState = _useState58[1];

  var disabled = props.disabled,
      multiple = props.multiple,
      uploadText = props.uploadText,
      useBeforeRead = props.useBeforeRead,
      _props$previewSize = props.previewSize,
      previewSize = _props$previewSize === void 0 ? 160 : _props$previewSize,
      _props$name2 = props.name,
      name = _props$name2 === void 0 ? '' : _props$name2,
      _props$accept = props.accept,
      accept = _props$accept === void 0 ? 'image' : _props$accept,
      _props$fileList = props.fileList,
      fileList = _props$fileList === void 0 ? [] : _props$fileList,
      _props$maxSize = props.maxSize,
      maxSize = _props$maxSize === void 0 ? Number.MAX_VALUE : _props$maxSize,
      _props$maxCount = props.maxCount,
      maxCount = _props$maxCount === void 0 ? 100 : _props$maxCount,
      _props$deletable = props.deletable,
      deletable = _props$deletable === void 0 ? true : _props$deletable,
      _props$showUpload = props.showUpload,
      showUpload = _props$showUpload === void 0 ? true : _props$showUpload,
      _props$previewImage = props.previewImage,
      previewImage = _props$previewImage === void 0 ? true : _props$previewImage,
      _props$previewFullIma = props.previewFullImage,
      previewFullImage = _props$previewFullIma === void 0 ? true : _props$previewFullIma,
      _props$imageFit = props.imageFit,
      imageFit = _props$imageFit === void 0 ? 'scaleToFill' : _props$imageFit,
      _props$uploadIcon = props.uploadIcon,
      uploadIcon = _props$uploadIcon === void 0 ? 'photograph' : _props$uploadIcon,
      capture = props.capture,
      compressed = props.compressed,
      maxDuration = props.maxDuration,
      sizeType = props.sizeType,
      camera = props.camera,
      onError = props.onError,
      onDelete = props.onDelete,
      onBeforeRead = props.onBeforeRead,
      onAfterRead = props.onAfterRead,
      onOversize = props.onOversize,
      onClickPreview = props.onClickPreview,
      style = props.style,
      className = props.className,
      children = props.children,
      others = __rest(props, ["disabled", "multiple", "uploadText", "useBeforeRead", "previewSize", "name", "accept", "fileList", "maxSize", "maxCount", "deletable", "showUpload", "previewImage", "previewFullImage", "imageFit", "uploadIcon", "capture", "compressed", "maxDuration", "sizeType", "camera", "onError", "onDelete", "onBeforeRead", "onAfterRead", "onOversize", "onClickPreview", "style", "className", "children"]);

  var formatFileList = useCallback(function (fileList) {
    var lists = _mapInstanceProperty(fileList).call(fileList, function (item) {
      return _Object$assign(_Object$assign({}, item), {
        isImage: isImageFile(item),
        isVideo: isVideoFile(item),
        deletable: isBoolean(item.deletable) ? item.deletable : true
      });
    });

    setState(function (state) {
      return _Object$assign(_Object$assign({}, state), {
        lists: lists,
        isInCount: lists.length < maxCount
      });
    });
  }, [maxCount]);
  var getDetail = useCallback(function (index) {
    return {
      name: name,
      index: index == null ? fileList.length : index
    };
  }, [fileList.length, name]);

  var _onAfterRead = useCallback(function (event) {
    var file = event.detail.file;
    var oversize = Array.isArray(file) ? _someInstanceProperty(file).call(file, function (item) {
      return item.size > maxSize;
    }) : file.size > maxSize;

    if (oversize) {
      event.detail = _Object$assign({
        file: file
      }, getDetail());
      onOversize === null || onOversize === void 0 ? void 0 : onOversize(event);
      return;
    }

    event.detail = _Object$assign({
      file: file
    }, getDetail());
    onAfterRead === null || onAfterRead === void 0 ? void 0 : onAfterRead(event);
  }, [getDetail, maxSize, onAfterRead, onOversize]);

  var _onBeforeRead = useCallback(function (event) {
    var file = event.detail.file;
    var res = true;

    if (useBeforeRead) {
      res = new _Promise(function (resolve, reject) {
        var params = _Object$assign(_Object$assign({
          file: file
        }, getDetail()), {
          callback: function callback(ok) {
            ok ? resolve() : reject();
          }
        });

        event.detail = params;
        onBeforeRead === null || onBeforeRead === void 0 ? void 0 : onBeforeRead(event);
      }).catch(function (err) {
        console.log('err: ', err);
      });
    }

    if (!res) {
      return;
    }

    if (isPromise(res)) {
      res.then(function (data) {
        event.detail = {
          file: data || file
        };
        return _onAfterRead(event);
      });
    } else {
      event.detail = {
        file: file
      };

      _onAfterRead(event);
    }
  }, [_onAfterRead, getDetail, onBeforeRead, useBeforeRead]);

  var startUpload = useCallback(function (event) {
    if (disabled) return;
    chooseFile({
      accept: accept,
      multiple: multiple,
      capture: capture,
      compressed: compressed,
      maxDuration: maxDuration,
      sizeType: sizeType,
      camera: camera,
      maxCount: maxCount - state.lists.length
    }).then(function (res) {
      Object.defineProperty(event, 'detail', {
        value: {
          file: multiple ? res : res[0]
        },
        writable: true
      });

      _onBeforeRead(event);
    }).catch(function (error) {
      onError === null || onError === void 0 ? void 0 : onError(error);
    });
  }, [_onBeforeRead, disabled, maxCount, multiple, onError, state.lists.length, accept, camera, capture, compressed, maxDuration, sizeType]);
  var deleteItem = useCallback(function (event) {
    var index = event.currentTarget.dataset.index;

    var params = _Object$assign(_Object$assign({}, getDetail(index)), {
      file: fileList[index]
    });

    Object.defineProperty(event, 'detail', {
      value: params,
      writable: true
    });
    onDelete === null || onDelete === void 0 ? void 0 : onDelete(event);
  }, [fileList, getDetail, onDelete]);
  var onPreviewImage = useCallback(function (event) {
    var _context34, _context35;

    if (!previewFullImage) return;
    var index = event.currentTarget.dataset.index;
    var item = state.lists[index];
    Taro.previewImage({
      urls: _mapInstanceProperty(_context34 = _filterInstanceProperty(_context35 = state.lists).call(_context35, function (item) {
        return isImageFile(item);
      })).call(_context34, function (item) {
        return item.url;
      }),
      current: item.url,
      fail: function fail() {
        Taro.showToast({
          title: '??????????????????',
          icon: 'none'
        });
      }
    });
  }, [previewFullImage, state.lists]);
  var onPreviewVideo = useCallback(function () {
    if (!previewFullImage) return; // const { index } = event.currentTarget.dataset

    if (process.env.TARO_ENV === 'weapp') {
      var _context36, _context37;

      // eslint-disable-next-line
      // @ts-ignore
      wx.previewMedia({
        sources: _mapInstanceProperty(_context36 = _filterInstanceProperty(_context37 = state.lists).call(_context37, function (item) {
          return isVideoFile(item);
        })).call(_context36, function (item) {
          return _Object$assign(_Object$assign({}, item), {
            type: 'video'
          });
        }),
        // current: index,
        // success() {
        //   Taro.showToast({ title: '??????????????????', icon: 'none' })
        // },
        fail: function fail() {
          Taro.showToast({
            title: '??????????????????',
            icon: 'none'
          });
        }
      });
    }
  }, [previewFullImage, state.lists]);
  var onPreviewFile = useCallback(function (event) {
    var index = event.currentTarget.dataset.index;
    Taro.openDocument({
      filePath: state.lists[index].url,
      showMenu: true
    });
  }, [state.lists]);

  var _onClickPreview = useCallback(function (event) {
    var index = event.currentTarget.dataset.index;
    var item = state.lists[index];
    Object.defineProperty(event, 'detail', {
      value: _Object$assign(_Object$assign({}, item), getDetail(index)),
      writable: true
    });
    onClickPreview === null || onClickPreview === void 0 ? void 0 : onClickPreview(event);
  }, [getDetail, onClickPreview, state.lists]);

  useEffect(function () {
    formatFileList(fileList); // eslint-disable-next-line
  }, [fileList]);
  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: "van-uploader ".concat(className),
    style: style
  }, others, {
    children: jsxRuntime.exports.jsxs(View, _Object$assign({
      className: "van-uploader__wrapper"
    }, {
      children: [previewImage && jsxRuntime.exports.jsx(View, _Object$assign({
        className: "van-uploader__box"
      }, {
        children: _mapInstanceProperty(_context38 = state.lists).call(_context38, function (item, index) {
          return jsxRuntime.exports.jsxs(View, _Object$assign({
            className: "van-uploader__preview",
            "data-index": index,
            onClick: _onClickPreview
          }, {
            children: [item.isImage ? jsxRuntime.exports.jsx(Image, {
              mode: imageFit,
              src: item.thumb || item.url,
              // eslint-disable-next-line
              // @ts-ignore
              alt: item.name || '??????' + index,
              className: "van-uploader__preview-image",
              style: sizeStyle({
                previewSize: previewSize
              }),
              "data-index": index,
              onClick: onPreviewImage
            }, void 0) : item.isVideo ? jsxRuntime.exports.jsx(Video, {
              src: item.url,
              title: item.name || '??????' + index,
              poster: item.thumb,
              autoplay: item.autoplay,
              className: "van-uploader__preview-image",
              style: sizeStyle({
                previewSize: previewSize
              }),
              "data-index": index,
              onClick: onPreviewVideo
            }, void 0) : jsxRuntime.exports.jsxs(View, _Object$assign({
              className: "van-uploader__file",
              style: sizeStyle({
                previewSize: previewSize
              }),
              "data-index": index,
              onClick: onPreviewFile
            }, {
              children: [jsxRuntime.exports.jsx(Index$$, {
                name: "description",
                className: "van-uploader__file-icon"
              }, void 0), jsxRuntime.exports.jsx(View, _Object$assign({
                className: "van-uploader__file-name van-ellipsis"
              }, {
                children: item.name || item.url
              }), void 0)]
            }), void 0), (item.status === 'uploading' || item.status === 'failed') && jsxRuntime.exports.jsxs(View, _Object$assign({
              className: "van-uploader__mask"
            }, {
              children: [item.status === 'failed' ? jsxRuntime.exports.jsx(Index$$, {
                name: "close",
                className: "van-uploader__mask-icon"
              }, void 0) : jsxRuntime.exports.jsx(Index$Q, {
                className: "van-uploader__loading"
              }, void 0), item.message && jsxRuntime.exports.jsx(Text, _Object$assign({
                className: "van-uploader__mask-message"
              }, {
                children: item.message
              }), void 0)]
            }), void 0), deletable && item.deletable && jsxRuntime.exports.jsx(View, _Object$assign({
              "data-index": index,
              className: "van-uploader__preview-delete",
              onClick: deleteItem
            }, {
              children: jsxRuntime.exports.jsx(Index$$, {
                name: "cross",
                className: "van-uploader__preview-delete-icon"
              }, void 0)
            }), void 0)]
          }), item.index);
        })
      }), void 0), state.isInCount && jsxRuntime.exports.jsxs(View, _Object$assign({
        className: "van-uploader__box"
      }, {
        children: [jsxRuntime.exports.jsx(View, _Object$assign({
          className: "van-uploader__slot",
          onClick: startUpload
        }, {
          children: children
        }), void 0), showUpload && jsxRuntime.exports.jsxs(View, _Object$assign({
          className: 'van-uploader__upload ' + (disabled ? 'van-uploader__upload--disabled' : ''),
          style: sizeStyle({
            previewSize: previewSize
          }),
          onClick: startUpload
        }, {
          children: [jsxRuntime.exports.jsx(Index$$, {
            name: uploadIcon,
            className: "van-uploader__upload-icon"
          }, void 0), uploadText && jsxRuntime.exports.jsx(Text, _Object$assign({
            className: "van-uploader__upload-text"
          }, {
            children: uploadText
          }), void 0)]
        }), void 0)]
      }), void 0)]
    }), void 0)
  }), void 0);
}

var comIndex = 0;

function Index$A(props) {
  var _props$count = props.count,
      count = _props$count === void 0 ? 5 : _props$count,
      gutter = props.gutter,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? 'star' : _props$icon,
      _props$voidIcon = props.voidIcon,
      voidIcon = _props$voidIcon === void 0 ? 'star-o' : _props$voidIcon,
      disabled = props.disabled,
      size = props.size,
      disabledColor = props.disabledColor,
      color = props.color,
      voidColor = props.voidColor,
      allowHalf = props.allowHalf,
      readonly = props.readonly,
      _props$touchable = props.touchable,
      touchable = _props$touchable === void 0 ? true : _props$touchable,
      value = props.value,
      onChange = props.onChange,
      style$1 = props.style,
      className = props.className,
      _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === void 0 ? 5 : _props$defaultValue,
      others = __rest(props, ["count", "gutter", "icon", "voidIcon", "disabled", "size", "disabledColor", "color", "voidColor", "allowHalf", "readonly", "touchable", "value", "onChange", "style", "className", "defaultValue"]);

  var indexRef = useRef(comIndex);

  var _useState59 = useState(_Array$from({
    length: count
  })),
      _useState60 = _slicedToArray(_useState59, 2),
      countArray = _useState60[0],
      setCountArray = _useState60[1];

  var noControlled = useMemo(function () {
    return typeof value === 'undefined';
  }, [value]);

  var _useState61 = useState(noControlled ? defaultValue : value),
      _useState62 = _slicedToArray(_useState61, 2),
      innerValue = _useState62[0],
      setInnerValue = _useState62[1];

  useEffect(function () {
    comIndex++;
    indexRef.current = comIndex;
  }, []);

  var onSelect = function onSelect(event) {
    var score = event.currentTarget.dataset.score;
    Object.defineProperty(event, 'detail', {
      value: +score + 1
    });

    if (!disabled && !readonly) {
      if (noControlled) {
        setInnerValue(event.detail);
      }

      onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }
  }; // touchmove???????????????????????????data-score???????????????


  var onTouchMove = function onTouchMove(event) {
    var _a, _b;

    if (!touchable) return;

    var _ref15 = (_b = (_a = event === null || event === void 0 ? void 0 : event.touches) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : {},
        clientX = _ref15.clientX;

    if (clientX) {
      getAllRect(null, ".rate-com-index".concat(indexRef.current, " .van-rate__icon")).then(function (list) {
        var _context39;

        var targetIndex = _findIndexInstanceProperty(_context39 = _sortInstanceProperty(list).call(list, function (a, b) {
          return a.right - b.right;
        })).call(_context39, function (item) {
          return clientX >= item.left && clientX <= item.right;
        });

        if (targetIndex !== -1) {
          onSelect(_Object$assign(_Object$assign({}, event), {
            currentTarget: {
              dataset: {
                score: allowHalf ? targetIndex / 2 - 0.5 : targetIndex
              }
            }
          }));
        }
      });
    }
  }; // useEffect(
  //   function () {
  //     if (value !== innerValue) {
  //       setInnerValue(value as number)
  //     }
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [value],
  // )


  useEffect(function () {
    setCountArray(_Array$from({
      length: count
    }));
  }, [count]);
  var rateValue = noControlled ? innerValue : value;
  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: "rate-com-index".concat(indexRef.current, " ") + bem('rate') + ' custom-class ' + className,
    style: style$1,
    onTouchMove: onTouchMove
  }, others, {
    children: _mapInstanceProperty(countArray).call(countArray, function (_item, index) {
      var _context40, _context41;

      return jsxRuntime.exports.jsxs(View, _Object$assign({
        className: bem('rate__item'),
        style: style({
          paddingRight: index !== count - 1 ? addUnit$1(gutter) : null
        })
      }, {
        children: [jsxRuntime.exports.jsx(Index$$, {
          name: index + 1 <= rateValue ? icon : voidIcon,
          className: bem('rate__icon', [{
            disabled: disabled,
            full: index + 1 <= rateValue
          }]) + " icon-class",
          style: style({
            fontSize: addUnit$1(size)
          }),
          id: _concatInstanceProperty(_context40 = "rate-com-index".concat(indexRef.current, "-rate__")).call(_context40, index),
          "data-score": index,
          color: disabled ? disabledColor : index + 1 <= rateValue ? color : voidColor,
          onClick: onSelect
        }, void 0), allowHalf && jsxRuntime.exports.jsx(Index$$, {
          name: index + 0.5 <= rateValue ? icon : voidIcon,
          className: bem('rate__icon', ['half', {
            disabled: disabled,
            full: index + 0.5 <= rateValue
          }]) + " icon-class",
          style: style({
            fontSize: addUnit$1(size)
          }),
          id: _concatInstanceProperty(_context41 = "rate-com-index".concat(indexRef.current, "-rate__")).call(_context41, index - 0.5),
          "data-score": index - 0.5,
          color: disabled ? disabledColor : index + 0.5 <= rateValue ? color : voidColor,
          onClick: onSelect
        }, void 0)]
      }), index);
    })
  }), void 0);
}

function Index$z(props) {
  var inset = props.inset,
      title = props.title,
      _props$border7 = props.border,
      border = _props$border7 === void 0 ? true : _props$border7,
      children = props.children,
      style = props.style,
      className = props.className,
      others = __rest(props, ["inset", "title", "border", "children", "style", "className"]);

  return jsxRuntime.exports.jsxs(Block, {
    children: [title && jsxRuntime.exports.jsx(View, _Object$assign({
      className: bem('cell-group__title', {
        inset: inset
      })
    }, {
      children: title
    }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
      className: 'custom-class ' + bem('cell-group', {
        inset: inset
      }) + ' ' + (border ? 'van-hairline--top-bottom' : '') + " ".concat(className || ''),
      style: style
    }, others, {
      children: children
    }), void 0)]
  }, void 0);
}

function Index$y(props) {
  var _context42;

  var value = props.value,
      _props$defaultValue2 = props.defaultValue,
      defaultValue = _props$defaultValue2 === void 0 ? '' : _props$defaultValue2,
      label = props.label,
      focus = props.focus,
      error = props.error,
      disabled = props.disabled,
      readonly = props.readonly,
      inputAlign = props.inputAlign,
      showAction = props.showAction,
      _props$leftIcon2 = props.leftIcon,
      leftIcon = _props$leftIcon2 === void 0 ? 'search' : _props$leftIcon2,
      rightIcon = props.rightIcon,
      placeholder = props.placeholder,
      placeholderStyle = props.placeholderStyle,
      _props$actionText = props.actionText,
      actionText = _props$actionText === void 0 ? '??????' : _props$actionText,
      _props$background = props.background,
      background = _props$background === void 0 ? '#ffffff' : _props$background,
      _props$maxlength2 = props.maxlength,
      maxlength = _props$maxlength2 === void 0 ? -1 : _props$maxlength2,
      _props$shape3 = props.shape,
      shape = _props$shape3 === void 0 ? 'square' : _props$shape3,
      _props$clearable = props.clearable,
      clearable = _props$clearable === void 0 ? true : _props$clearable,
      _props$clearTrigger2 = props.clearTrigger,
      clearTrigger = _props$clearTrigger2 === void 0 ? 'focus' : _props$clearTrigger2,
      _props$clearIcon2 = props.clearIcon,
      clearIcon = _props$clearIcon2 === void 0 ? 'clear' : _props$clearIcon2,
      renderLabel = props.renderLabel,
      renderLefticon = props.renderLefticon,
      renderRighticon = props.renderRighticon,
      renderAction = props.renderAction,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onClear = props.onClear,
      onClickInput = props.onClickInput,
      onSearch = props.onSearch,
      onCancel = props.onCancel,
      style$1 = props.style,
      className = props.className,
      others = __rest(props, ["value", "defaultValue", "label", "focus", "error", "disabled", "readonly", "inputAlign", "showAction", "leftIcon", "rightIcon", "placeholder", "placeholderStyle", "actionText", "background", "maxlength", "shape", "clearable", "clearTrigger", "clearIcon", "renderLabel", "renderLefticon", "renderRighticon", "renderAction", "onFocus", "onBlur", "onChange", "onClear", "onClickInput", "onSearch", "onCancel", "style", "className"]);

  var noControlled = useMemo(function () {
    return typeof value === 'undefined';
  }, [value]);

  var _useState63 = useState(noControlled ? defaultValue : value),
      _useState64 = _slicedToArray(_useState63, 2),
      innerValue = _useState64[0],
      setInnerValue = _useState64[1];

  var _change = function _change(event) {
    if (noControlled) {
      setInnerValue(event.detail);
    }

    onChange === null || onChange === void 0 ? void 0 : onChange(event);
  };

  var _cancel = function _cancel(e) {
    /**
     * ?????????????????????????????????????????????????????????????????????????????????
     * https://github.com/youzan/@vant/weapp/issues/1768
     */
    setTimeout(function () {
      e.detail = '';
      setInnerValue('');
      onCancel === null || onCancel === void 0 ? void 0 : onCancel();
      onChange === null || onChange === void 0 ? void 0 : onChange(e);
    }, 200);
  };

  useEffect(function () {
    setInnerValue(value);
  }, [value]);
  var searchValue = noControlled ? innerValue : value;
  return jsxRuntime.exports.jsxs(View, _Object$assign({
    className: _concatInstanceProperty(_context42 = "".concat(bem('search', {
      withaction: showAction || renderAction
    }), " custom-class ")).call(_context42, className),
    style: style([{
      background: background
    }, style$1])
  }, others, {
    children: [jsxRuntime.exports.jsxs(View, _Object$assign({
      className: bem('search__content', [shape])
    }, {
      children: [label ? jsxRuntime.exports.jsx(View, _Object$assign({
        className: "van-search__label"
      }, {
        children: label
      }), void 0) : renderLabel, jsxRuntime.exports.jsx(Index$F, {
        type: "text",
        leftIcon: !renderLefticon ? leftIcon : '',
        "right-icon": !renderRighticon ? rightIcon : '',
        focus: focus,
        error: error,
        border: false,
        confirmType: "search",
        className: "van-search__field field-class",
        value: searchValue,
        disabled: disabled,
        readonly: readonly,
        clearable: clearable,
        clearTrigger: clearTrigger,
        clearIcon: clearIcon,
        maxlength: maxlength,
        inputAlign: inputAlign,
        placeholder: placeholder,
        "placeholder-style": placeholderStyle,
        renderLefticon: renderLefticon,
        renderRighticon: renderRighticon,
        customStyle: "padding: 5px 10px 5px 0; background-color: transparent;",
        onBlur: onBlur,
        onFocus: onFocus,
        onChange: _change,
        onConfirm: onSearch,
        onClear: onClear,
        onClickInput: onClickInput
      }, void 0)]
    }), void 0), (showAction || renderAction) && jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-search__action",
      hoverClass: "van-search__action--hover",
      hoverStayTime: 70
    }, {
      children: renderAction || jsxRuntime.exports.jsx(View, _Object$assign({
        onClick: _cancel,
        className: "cancel-class"
      }, {
        children: actionText
      }), void 0)
    }), void 0)]
  }), void 0);
}

function Index$x(props) {
  var _useState65 = useState({
    isArray: false,
    rowArray: []
  }),
      _useState66 = _slicedToArray(_useState65, 2),
      state = _useState66[0],
      setState = _useState66[1];

  var isArray = state.isArray,
      rowArray = state.rowArray;

  var _props$row = props.row,
      row = _props$row === void 0 ? 0 : _props$row,
      _props$animate = props.animate,
      animate = _props$animate === void 0 ? true : _props$animate,
      avatar = props.avatar,
      _props$avatarShape = props.avatarShape,
      avatarShape = _props$avatarShape === void 0 ? 'round' : _props$avatarShape,
      _props$avatarSize = props.avatarSize,
      avatarSize = _props$avatarSize === void 0 ? Taro.pxTransform(64) : _props$avatarSize,
      _props$titleWidth2 = props.titleWidth,
      titleWidth = _props$titleWidth2 === void 0 ? '40%' : _props$titleWidth2,
      title = props.title,
      _props$rowWidth = props.rowWidth,
      rowWidth = _props$rowWidth === void 0 ? '100%' : _props$rowWidth,
      _props$loading2 = props.loading,
      loading = _props$loading2 === void 0 ? true : _props$loading2,
      children = props.children,
      style = props.style,
      className = props.className,
      others = __rest(props, ["row", "animate", "avatar", "avatarShape", "avatarSize", "titleWidth", "title", "rowWidth", "loading", "children", "style", "className"]);

  useEffect(function () {
    setState(function (pre) {
      return _Object$assign(_Object$assign({}, pre), {
        rowArray: _Array$from({
          length: row
        })
      });
    });
  }, [row]);
  useEffect(function () {
    setState(function (pre) {
      return _Object$assign(_Object$assign({}, pre), {
        isArray: rowWidth instanceof Array
      });
    });
  }, [rowWidth]);
  return loading ? jsxRuntime.exports.jsxs(View, _Object$assign({
    className: 'custom-class ' + bem('skeleton', [{
      animate: animate
    }]) + " ".concat(className || ''),
    style: style
  }, others, {
    children: [avatar && jsxRuntime.exports.jsx(View, {
      className: 'avatar-class ' + bem('skeleton__avatar', [avatarShape]),
      style: 'width:' + avatarSize + ';height:' + avatarSize
    }, void 0), jsxRuntime.exports.jsxs(View, _Object$assign({
      className: bem('skeleton__content')
    }, {
      children: [title && jsxRuntime.exports.jsx(View, {
        className: 'title-class ' + bem('skeleton__title'),
        style: 'width:' + titleWidth
      }, void 0), _mapInstanceProperty(rowArray).call(rowArray, function (_item, index) {
        return jsxRuntime.exports.jsx(View, {
          className: 'row-class ' + bem('skeleton__row'),
          style: 'width:' + (isArray ? rowWidth[index] : rowWidth)
        }, index);
      })]
    }), void 0)]
  }), void 0) : jsxRuntime.exports.jsx(View, _Object$assign({
    className: bem('skeleton__content')
  }, {
    children: children
  }), void 0);
}

function rootStyle$3(data) {
  return style({
    'background-color': data.plain ? '' : data.color,
    color: data.textColor || data.plain ? data.textColor || data.color : ''
  });
}

function Index$w(props) {
  var _props$type4 = props.type,
      type = _props$type4 === void 0 ? 'default' : _props$type4,
      size = props.size,
      mark = props.mark,
      plain = props.plain,
      round = props.round,
      color = props.color,
      textColor = props.textColor,
      closeable = props.closeable,
      children = props.children,
      onClose = props.onClose,
      style$1 = props.style,
      className = props.className,
      others = __rest(props, ["type", "size", "mark", "plain", "round", "color", "textColor", "closeable", "children", "onClose", "style", "className"]);

  return jsxRuntime.exports.jsxs(View, _Object$assign({
    className: 'custom-class ' + bem('tag', [type, size, {
      mark: mark,
      plain: plain,
      round: round
    }]) + " ".concat(className || ''),
    style: style([rootStyle$3({
      plain: plain,
      color: color,
      textColor: textColor
    }), style$1])
  }, others, {
    children: [children, closeable && jsxRuntime.exports.jsx(Index$$, {
      name: "cross",
      className: "van-tag__close",
      onClick: onClose
    }, void 0)]
  }), void 0);
}

function padZero$1(num) {
  var targetLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var str = num + '';

  while (str.length < targetLength) {
    str = '0' + str;
  }

  return str;
}

var SECOND = 1000;
var MINUTE = 60000;
var HOUR = 3600000;
var DAY = 86400000;

function parseTimeData(time) {
  var days = Math.floor(time / DAY);
  var hours = Math.floor(time % DAY / HOUR);
  var minutes = Math.floor(time % HOUR / MINUTE);
  var seconds = Math.floor(time % MINUTE / SECOND);
  var milliseconds = Math.floor(time % SECOND);
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds
  };
}

function parseFormat(format, timeData) {
  var days = timeData.days;
  var hours = timeData.hours,
      minutes = timeData.minutes,
      seconds = timeData.seconds,
      milliseconds = timeData.milliseconds;

  if (_indexOfInstanceProperty(format).call(format, 'DD') === -1) {
    hours += days * 24;
  } else {
    format = format.replace('DD', padZero$1(days));
  }

  if (_indexOfInstanceProperty(format).call(format, 'HH') === -1) {
    minutes += hours * 60;
  } else {
    format = format.replace('HH', padZero$1(hours));
  }

  if (_indexOfInstanceProperty(format).call(format, 'mm') === -1) {
    seconds += minutes * 60;
  } else {
    format = format.replace('mm', padZero$1(minutes));
  }

  if (_indexOfInstanceProperty(format).call(format, 'ss') === -1) {
    milliseconds += seconds * 1000;
  } else {
    format = format.replace('ss', padZero$1(seconds));
  }

  return format.replace('SSS', padZero$1(milliseconds, 3));
}

function isSameSecond(time1, time2) {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}

function simpleTick(fn) {
  return setTimeout(fn, 30);
}

function Index$v(props, ref) {
  var _ref = useRef({
    tid: null,
    counting: false
  });

  var _useState67 = useState({
    formattedTime: '0'
  }),
      _useState68 = _slicedToArray(_useState67, 2),
      state = _useState68[0],
      setState = _useState68[1];

  var formattedTime = state.formattedTime;

  var time = props.time,
      _props$format = props.format,
      format = _props$format === void 0 ? 'HH:mm:ss' : _props$format,
      _props$autoStart = props.autoStart,
      autoStart = _props$autoStart === void 0 ? true : _props$autoStart,
      millisecond = props.millisecond,
      onChange = props.onChange,
      onFinish = props.onFinish,
      children = props.children,
      style = props.style,
      className = props.className,
      others = __rest(props // ??????
  , ["time", "format", "autoStart", "millisecond", "onChange", "onFinish", "children", "style", "className"]); // ??????


  var _pause = useCallback(function () {
    _ref.current.counting = false;
    clearTimeout(_ref.current.tid);
  }, []);

  var getRemain = useCallback(function () {
    return Math.max(_ref.current.endTime - Date.now(), 0);
  }, []);
  var setRemain = useCallback(function (remain) {
    _ref.current.remain = remain;
    var timeData = parseTimeData(remain);

    if (children) {
      onChange === null || onChange === void 0 ? void 0 : onChange({
        detail: timeData
      });
    }

    setState(function (pre) {
      return _Object$assign(_Object$assign({}, pre), {
        formattedTime: parseFormat(format, timeData)
      });
    });

    if (remain === 0) {
      _pause();

      onFinish === null || onFinish === void 0 ? void 0 : onFinish();
    }
  }, [children, format, onChange, onFinish, _pause]);
  var microTick = useCallback(function () {
    _ref.current.tid = simpleTick(function () {
      setRemain(getRemain());

      if (_ref.current.remain !== 0) {
        microTick();
      }
    });
  }, [getRemain, setRemain]);
  var macroTick = useCallback(function () {
    _ref.current.tid = simpleTick(function () {
      var remain = getRemain();

      if (!isSameSecond(remain, _ref.current.remain) || remain === 0) {
        setRemain(remain);
      }

      if (_ref.current.remain !== 0) {
        macroTick();
      }
    });
  }, [getRemain, setRemain]);
  var tick = useCallback(function () {
    if (millisecond) {
      microTick();
    } else {
      macroTick();
    }
  }, [macroTick, microTick, millisecond]); // ??????

  var _start = useCallback(function () {
    if (_ref.current.counting) {
      return;
    }

    _ref.current.counting = true;
    _ref.current.endTime = Date.now() + _ref.current.remain;
    tick();
  }, [tick]); // ??????


  var _reset = useCallback(function () {
    _pause();

    _ref.current.remain = time;
    setRemain(_ref.current.remain);

    if (autoStart) {
      _start();
    }
  }, [autoStart, _pause, setRemain, _start, time]);

  useImperativeHandle(ref, function () {
    return {
      start: function start() {
        _start();
      },
      pause: function pause() {
        _pause();
      },
      reset: function reset() {
        _reset();
      }
    };
  });
  useEffect(function () {
    _reset();
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [time]);
  var tid = _ref.current.tid;
  useEffect(function () {
    return function () {
      tid && clearTimeout(tid);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: "van-count-down ".concat(className),
    style: style
  }, others, {
    children: children ? children : jsxRuntime.exports.jsx(Block, {
      children: formattedTime
    }, void 0)
  }), void 0);
}

var index$3 = /*#__PURE__*/forwardRef(Index$v); // import Button from './../button'

function Index$u(props) {
  var _props$round = props.round,
      round = _props$round === void 0 ? true : _props$round,
      _props$zIndex7 = props.zIndex,
      zIndex = _props$zIndex7 === void 0 ? 100 : _props$zIndex7,
      _props$overlay2 = props.overlay,
      overlay = _props$overlay2 === void 0 ? true : _props$overlay2,
      _props$closeOnClickOv2 = props.closeOnClickOverlay,
      closeOnClickOverlay = _props$closeOnClickOv2 === void 0 ? true : _props$closeOnClickOv2,
      _props$closeOnClickAc = props.closeOnClickAction,
      closeOnClickAction = _props$closeOnClickAc === void 0 ? true : _props$closeOnClickAc,
      _props$safeAreaInsetB2 = props.safeAreaInsetBottom,
      safeAreaInsetBottom = _props$safeAreaInsetB2 === void 0 ? true : _props$safeAreaInsetB2,
      show = props.show,
      title = props.title,
      description = props.description,
      actions = props.actions,
      cancelText = props.cancelText,
      children = props.children,
      onSelect = props.onSelect,
      onCancel = props.onCancel,
      onClose = props.onClose,
      onClickOverlay = props.onClickOverlay,
      className = props.className,
      others = __rest(props, ["round", "zIndex", "overlay", "closeOnClickOverlay", "closeOnClickAction", "safeAreaInsetBottom", "show", "title", "description", "actions", "cancelText", "children", "onSelect", "onCancel", "onClose", "onClickOverlay", "className"]);

  var _onCancel = useCallback(function () {
    onCancel === null || onCancel === void 0 ? void 0 : onCancel();
  }, [onCancel]);

  var _onClose = useCallback(function () {
    onClose === null || onClose === void 0 ? void 0 : onClose();
  }, [onClose]);

  var _onSelect = useCallback(function (event) {
    var index = event.currentTarget.dataset.index; // const { actions, closeOnClickAction, canIUseGetUserProfile } = data

    var item = actions[index];

    if (item) {
      Object.defineProperty(event, 'detail', {
        value: item
      });
      onSelect === null || onSelect === void 0 ? void 0 : onSelect(event);

      if (closeOnClickAction) {
        _onClose();
      }
    }
  }, [_onClose, actions, closeOnClickAction, onSelect]);

  var _onClickOverlay = useCallback(function () {
    onClickOverlay === null || onClickOverlay === void 0 ? void 0 : onClickOverlay();
    onClose === null || onClose === void 0 ? void 0 : onClose();
  }, [onClickOverlay, onClose]);

  return jsxRuntime.exports.jsx(Index$W, _Object$assign({
    show: show,
    position: "bottom",
    round: round,
    zIndex: zIndex,
    overlay: overlay,
    className: "van-action-sheet ".concat(className || ''),
    safeAreaInsetBottom: safeAreaInsetBottom,
    closeOnClickOverlay: closeOnClickOverlay,
    onClose: _onClickOverlay
  }, others, {
    children: jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
      children: [title && jsxRuntime.exports.jsxs(View, _Object$assign({
        className: "van-action-sheet__header"
      }, {
        children: [title, jsxRuntime.exports.jsx(Index$$, {
          name: "cross",
          className: "van-action-sheet__close",
          onClick: _onClose
        }, void 0)]
      }), void 0), description && jsxRuntime.exports.jsx(View, _Object$assign({
        className: "van-action-sheet__description van-hairline--bottom"
      }, {
        children: description
      }), void 0), actions && actions.length && jsxRuntime.exports.jsx(View, {
        children: _mapInstanceProperty(actions).call(actions, function (item, index) {
          var name = item.name,
              subname = item.subname,
              disabled = item.disabled,
              loading = item.loading,
              openType = item.openType,
              color = item.color,
              className = item.className,
              rest = __rest(item, ["name", "subname", "disabled", "loading", "openType", "color", "className"]);

          return jsxRuntime.exports.jsx(Button, _Object$assign({
            openType: disabled || loading ? '' : openType,
            style: color ? 'color: ' + color : '',
            className: bem('action-sheet__item', {
              disabled: disabled || loading
            }) + ' ' + (className || ''),
            hoverClass: "van-action-sheet__item--hover",
            "data-index": index,
            onClick: disabled || loading ? function () {} : _onSelect
          }, rest, {
            children: !loading ? jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
              children: [name, subname && jsxRuntime.exports.jsx(View, _Object$assign({
                className: "van-action-sheet__subname"
              }, {
                children: subname
              }), void 0)]
            }, void 0) : jsxRuntime.exports.jsx(Index$Q, {
              className: "van-action-sheet__loading",
              size: "22px"
            }, void 0)
          }), index);
        })
      }, void 0), children, cancelText && jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
        children: [jsxRuntime.exports.jsx(View, {
          className: "van-action-sheet__gap"
        }, void 0), jsxRuntime.exports.jsx(View, _Object$assign({
          className: "van-action-sheet__cancel",
          hoverClass: "van-action-sheet__cancel--hover",
          // hoverStayTime="70"
          onClick: _onCancel
        }, {
          children: cancelText
        }), void 0)]
      }, void 0)]
    }, void 0)
  }), void 0);
}

function Index$t(props) {
  var wrapperStyle = props.wrapperStyle,
      active = props.active,
      anchorStyle = props.anchorStyle,
      index = props.index,
      children = props.children,
      style$1 = props.style,
      className = props.className,
      others = __rest(props, ["wrapperStyle", "active", "anchorStyle", "index", "children", "style", "className"]);

  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: "van-index-anchor-wrapper ".concat(className || ''),
    style: style([wrapperStyle, style$1])
  }, others, {
    children: jsxRuntime.exports.jsx(View, _Object$assign({
      className: 'van-index-anchor ' + (active ? 'van-index-anchor--active van-hairline--bottom' : ''),
      style: anchorStyle
    }, {
      children: children ? jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, {
        children: children
      }, void 0) : jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, {
        children: jsxRuntime.exports.jsx(Text, {
          children: index
        }, void 0)
      }, void 0)
    }), void 0)
  }), void 0);
}

Index$t.displayName = 'IndexAnchor';

function onPageScroll(event) {
  var _getCurrentPage = getCurrentPage(),
      _getCurrentPage$vanPa = _getCurrentPage.vanPageScroller,
      vanPageScroller = _getCurrentPage$vanPa === void 0 ? [] : _getCurrentPage$vanPa;

  _forEachInstanceProperty(vanPageScroller).call(vanPageScroller, function (scroller) {
    if (typeof scroller === 'function') {
      scroller(event);
    }
  });
}

function usePageScroll(scroller) {
  useEffect(function () {
    var page = getCurrentPage();

    if (Array.isArray(page.vanPageScroller)) {
      page.vanPageScroller.push(scroller.bind(null));
    } else {
      page.vanPageScroller = typeof page.onPageScroll === 'function' ? [page.onPageScroll.bind(page), scroller.bind(null)] : [scroller.bind(null)];
    }

    page.onPageScroll = onPageScroll;
    return function () {
      var _a;

      var page = getCurrentPage();

      if (isDef(page)) {
        page.vanPageScroller = ((_a = page.vanPageScroller) === null || _a === undefined ? undefined : _filterInstanceProperty(_a).call(_a, function (item) {
          return item !== scroller;
        })) || [];
      }
    };
  }, [scroller]);
}

var genIndexList = function genIndexList() {
  var indexList = [];
  var charCodeOfA = 'A'.charCodeAt(0);

  for (var i = 0; i < 26; i++) {
    indexList.push(String.fromCharCode(charCodeOfA + i));
  }

  return indexList;
};

function parseIndexAnchor(children) {
  var _context43, _context44;

  return _filterInstanceProperty(_context43 = _mapInstanceProperty(_context44 = _default(children)).call(_context44, function (node, index) {
    if ( /*#__PURE__*/isValidElement(node)) {
      var key = node.key !== undefined ? String(node.key) : index;
      return _Object$assign(_Object$assign({
        key: key
      }, node.props), {
        node: node
      });
    }

    return null;
  })).call(_context43, function (indexAnchor) {
    return !!indexAnchor;
  });
}

function Index$s(props) {
  var _props$sticky = props.sticky,
      sticky = _props$sticky === void 0 ? true : _props$sticky,
      _props$zIndex8 = props.zIndex,
      zIndex = _props$zIndex8 === void 0 ? 1 : _props$zIndex8,
      _props$highlightColor = props.highlightColor,
      highlightColor = _props$highlightColor === void 0 ? GREEN : _props$highlightColor,
      _props$stickyOffsetTo = props.stickyOffsetTop,
      stickyOffsetTop = _props$stickyOffsetTo === void 0 ? 0 : _props$stickyOffsetTo,
      _props$indexList = props.indexList,
      indexList = _props$indexList === void 0 ? genIndexList() : _props$indexList,
      onSelect = props.onSelect,
      children = props.children,
      className = props.className,
      style$1 = props.style;

  var _useState69 = useState(null),
      _useState70 = _slicedToArray(_useState69, 2),
      activeAnchorIndex = _useState70[0],
      setActiveAnchorIndex = _useState70[1];

  var _useState71 = useState(true),
      _useState72 = _slicedToArray(_useState71, 2),
      showSidebar = _useState72[0],
      setShowSidebar = _useState72[1];

  var _useState73 = useState([]),
      _useState74 = _slicedToArray(_useState73, 2),
      changeData = _useState74[0],
      setChangeData = _useState74[1];

  var timerRef = useRef(null);
  var scrollTopRef = useRef(0);
  var sidebarRef = useRef(null);
  var scrollToAnchorIndexRef = useRef(null);
  var rectRef = useRef({});
  var realAnchor = useRef([]);

  var _children = useMemo(function () {
    var _context45;

    var anchorIndex = 0;
    return _mapInstanceProperty(_context45 = parseIndexAnchor(children)).call(_context45, function (anchor, index) {
      var _a, _b, _c, _d, _e; // index  ????????????  ????????????children


      if (((_b = (_a = anchor.node) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.displayName) === 'IndexAnchor') {
        realAnchor.current[anchorIndex] = _Object$assign(_Object$assign({}, (_c = realAnchor.current[anchorIndex]) !== null && _c !== void 0 ? _c : {
          top: 0,
          height: 0
        }), {
          childIndex: index,
          index: (_e = (_d = anchor.node) === null || _d === void 0 ? void 0 : _d.props) === null || _e === void 0 ? void 0 : _e.index
        });
        anchorIndex += 1;
      }

      var data = changeData[index]; // console.log()

      var defaultProps = {
        key: index
      };
      var props = data ? _Object$assign(_Object$assign({}, defaultProps), data) : defaultProps; // console.log(props, anchor.node?.props?.index)

      return /*#__PURE__*/cloneElement(anchor.node, props);
    });
  }, [changeData, children]); // ????????? ??????????????????


  var _setAnchorsRect = useCallback(function () {
    return getAllRect(null, '.van-index-anchor-wrapper').then(function (rects) {
      realAnchor.current = _mapInstanceProperty(rects).call(rects, function (e, index) {
        var _a;

        return _Object$assign(_Object$assign({}, (_a = realAnchor.current[index]) !== null && _a !== void 0 ? _a : {}), {
          top: e.top,
          height: e.height
        });
      });
    });
  }, []);

  var _scrollIntoView = useCallback(function (top) {
    Taro.pageScrollTo({
      duration: 0,
      scrollTop: top + stickyOffsetTop // + scrollTopRef.current,

    });
  }, [stickyOffsetTop]);

  var _setListRect = useCallback(function () {
    return getRect(null, '.van-index-bar').then(function (rect) {
      rectRef.current = {
        height: rect.height,
        top: rect.top + scrollTopRef.current
      };
    });
  }, []);

  var _setSiderbarRect = useCallback(function () {
    return getRect(null, '.van-index-bar__sidebar').then(function (res) {
      if (!isDef(res)) {
        return;
      }

      sidebarRef.current = {
        height: res.height,
        top: res.top
      };
    });
  }, []);

  var _getActiveAnchorIndex = useCallback(function () {
    var _a;

    var child = realAnchor.current; // console.log(child, scrollTopRef.current)

    for (var i = child.length - 1; i >= 0; i--) {
      var rect = child[i];
      if (!rect) continue;
      var preAnchorHeight = i > 0 ? (_a = child[i - 1]) === null || _a === void 0 ? void 0 : _a.height : 0;
      var reachTop = sticky ? preAnchorHeight + stickyOffsetTop : 0;

      if (reachTop + scrollTopRef.current >= rect.top) {
        return i;
      }
    }

    return -1;
  }, [sticky, stickyOffsetTop]);

  var _setRect = useCallback(function () {
    return _Promise.all([_setAnchorsRect(), _setListRect(), _setSiderbarRect()]);
  }, [_setAnchorsRect, _setListRect, _setSiderbarRect]);

  var _onScroll = useCallback(function () {
    var _a; // console.log('??????', _children?.length)


    if (!(_children === null || _children === void 0 ? void 0 : _children.length)) {
      return;
    }

    var child = realAnchor.current; // const { sticky, stickyOffsetTop, zIndex, highlightColor } = data

    var active = _getActiveAnchorIndex(); // console.log('active:', active)


    setActiveAnchorIndex(active);
    var updateStyle = [];

    if (sticky) {
      var _context46;

      var isActiveAnchorSticky = false;

      if (active !== -1) {
        isActiveAnchorSticky = (((_a = child[active]) === null || _a === void 0 ? void 0 : _a.top) || 0) <= stickyOffsetTop + scrollTopRef.current;
      }

      _forEachInstanceProperty(_context46 = realAnchor.current).call(_context46, function (item, index) {
        var _a;

        if (index === active) {
          var _wrapperStyle = '';
          var anchorStyle = "\n          color: ".concat(highlightColor, ";\n        ");

          if (isActiveAnchorSticky) {
            var _context47, _context48;

            _wrapperStyle = "\n            height: ".concat(item.height, "px;\n          ");
            anchorStyle = _concatInstanceProperty(_context47 = _concatInstanceProperty(_context48 = "\n            position: fixed;\n            top: ".concat(stickyOffsetTop, "px;\n            z-index: ")).call(_context48, zIndex, ";\n            color: ")).call(_context47, highlightColor, ";\n          ");
          }

          updateStyle[item.childIndex] = {
            active: true,
            anchorStyle: anchorStyle,
            wrapperStyle: _wrapperStyle
          }; // setChangeData({
          //   index: item.childIndex,
          //   active: true,
          //   anchorStyle,
          //   wrapperStyle,
          // })
        } else if (index === active - 1) {
          var _context49, _context50;

          // const _children = _getChildren(children)
          var currentAnchor = item; // ?????????????????? ?????????

          var currentOffsetTop = (currentAnchor === null || currentAnchor === void 0 ? void 0 : currentAnchor.top) || 0;
          var targetOffsetTop = index === _children.length - 1 ? rectRef.current.top : (_a = realAnchor.current[index + 1]) === null || _a === void 0 ? void 0 : _a.top;
          var parentOffsetHeight = targetOffsetTop - currentOffsetTop;
          var translateY = parentOffsetHeight - ((currentAnchor === null || currentAnchor === void 0 ? void 0 : currentAnchor.height) || 0);

          var _anchorStyle = _concatInstanceProperty(_context49 = _concatInstanceProperty(_context50 = "\n          position: relative;\n          transform: translate3d(0, ".concat(translateY, "px, 0);\n          z-index: ")).call(_context50, zIndex, ";\n          color: ")).call(_context49, highlightColor, ";\n        ");

          updateStyle[item.childIndex] = {
            active: true,
            anchorStyle: _anchorStyle
          };
        } else {
          updateStyle[item.childIndex] = {
            active: false,
            anchorStyle: '',
            wrapperStyle: ''
          };
        }
      });

      setChangeData(updateStyle); // console.log(realAnchor.current[active])
    }
  }, [_children.length, _getActiveAnchorIndex, highlightColor, sticky, stickyOffsetTop, zIndex]); // const _onScroll = useCallback(throttle(_onScrollOrigin, 100), [
  //   _onScrollOrigin,
  // ])


  var scroller = useCallback(function (event) {
    scrollTopRef.current = (event === null || event === void 0 ? void 0 : event.scrollTop) || 0;

    _onScroll();
  }, [_onScroll]);
  usePageScroll(scroller);

  var _scrollToAnchor = useCallback(function (index) {
    var _context51;

    if (typeof index !== 'number' || scrollToAnchorIndexRef.current === index) {
      return;
    }

    scrollToAnchorIndexRef.current = index;

    var currentItem = _findInstanceProperty(_context51 = realAnchor.current).call(_context51, function (item) {
      return (item === null || item === void 0 ? void 0 : item.index) === indexList[index];
    });

    if (currentItem) {
      // ??????--
      _scrollIntoView(currentItem.top);

      onSelect === null || onSelect === void 0 ? void 0 : onSelect({
        detail: currentItem.index
      });
    }
  }, [_scrollIntoView, indexList, onSelect]);

  var _onClick = useCallback(function (event) {
    _scrollToAnchor(Number(event.target.dataset.index));
  }, [_scrollToAnchor]);

  var _onTouchMove = useCallback(function (event) {
    event.stopPropagation();
    event.preventDefault();
    var sidebarLength = realAnchor.current.length || 0;
    var touch = event.touches[0];
    var itemHeight = sidebarRef.current.height / sidebarLength;
    var index = Math.floor((touch.clientY - sidebarRef.current.top) / itemHeight);

    if (index < 0) {
      index = 0;
    } else if (index > sidebarLength - 1) {
      index = sidebarLength - 1;
    }

    _scrollToAnchor(index);
  }, [_scrollToAnchor]);

  var _onTouchStop = useCallback(function () {
    scrollToAnchorIndexRef.current = null;
  }, []);

  var _updateData = useCallback(function () {
    Taro.nextTick(function () {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(function () {
        setShowSidebar(!!realAnchor.current.length);

        _setRect().then(function () {
          _onScroll();
        });
      }, 100);
    });
  }, [_onScroll, _setRect]);

  useEffect(function () {
    _updateData();
  }, [_updateData]);
  return jsxRuntime.exports.jsxs(View, _Object$assign({
    className: "van-index-bar ".concat(className || ''),
    style: style([style$1])
  }, {
    children: [_children, showSidebar && jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-index-bar__sidebar",
      onClick: _onClick,
      onTouchMove: _onTouchMove,
      onTouchEnd: _onTouchStop,
      onTouchCancel: _onTouchStop
    }, {
      children: _mapInstanceProperty(indexList).call(indexList, function (item, index) {
        return jsxRuntime.exports.jsx(View, _Object$assign({
          className: "van-index-bar__index",
          style: 'z-index: ' + (zIndex + 1) + '; color: ' + (activeAnchorIndex === index ? highlightColor : ''),
          "data-index": index
        }, {
          children: item
        }), index);
      })
    }), void 0)]
  }), void 0);
}

function isObj(x) {
  var type = _typeof(x);

  return x !== null && (type === 'object' || type === 'function');
}

function optionText(option, valueKey) {
  return isObj(option) && option[valueKey] != null ? option[valueKey] : option;
}

function rootStyle$2(data) {
  return style({
    height: addUnit$1(data.itemHeight * data.visibleItemCount)
  });
}

function wrapperStyle$1(data) {
  if (process.env.TARO_ENV === 'h5') {
    var _offset = addUnit$1(data.offset + data.itemHeight * (data.visibleItemCount - 1) / 2);

    return style({
      transition: 'transform ' + data.duration + 'ms',
      'line-height': addUnit$1(data.itemHeight),
      transform: 'translate3d(0, ' + _offset + ', 0)'
    });
  }

  var off = data.offset + data.itemHeight * (data.visibleItemCount - 1) / 2;
  var offNum = Math.ceil(off / data.itemHeight);
  var offset = addUnit$1(offNum * data.itemHeight);
  return style({
    transition: 'transform ' + data.duration + 'ms',
    'line-height': addUnit$1(data.itemHeight),
    transform: 'translate3d(0, ' + offset + ', 0)'
  });
}

var DEFAULT_DURATION = 200;

function Index$r(props, ref) {
  var valueKey = props.valueKey,
      _props$itemHeight = props.itemHeight,
      itemHeight = _props$itemHeight === void 0 ? 48 : _props$itemHeight,
      _props$visibleItemCou = props.visibleItemCount,
      visibleItemCount = _props$visibleItemCou === void 0 ? 5 : _props$visibleItemCou,
      initialOptions = props.initialOptions,
      defaultIndex = props.defaultIndex,
      className = props.className,
      style$1 = props.style,
      onChange = props.onChange,
      curColIndex = props.index,
      others = __rest(props, ["valueKey", "itemHeight", "visibleItemCount", "initialOptions", "defaultIndex", "className", "style", "onChange", "index"]);

  var _useState75 = useState([]),
      _useState76 = _slicedToArray(_useState75, 2),
      options = _useState76[0],
      setOptions = _useState76[1];

  var _useState77 = useState(0),
      _useState78 = _slicedToArray(_useState77, 2),
      currentIndex = _useState78[0],
      setCurrentIndex = _useState78[1];

  var _useState79 = useState(0),
      _useState80 = _slicedToArray(_useState79, 2),
      duration = _useState80[0],
      setDuration = _useState80[1];

  var _useState81 = useState(0),
      _useState82 = _slicedToArray(_useState81, 2),
      startY = _useState82[0],
      setStartY = _useState82[1];

  var _useState83 = useState(0),
      _useState84 = _slicedToArray(_useState83, 2),
      offset = _useState84[0],
      setOffset = _useState84[1];

  var _useState85 = useState(0),
      _useState86 = _slicedToArray(_useState85, 2),
      startOffset = _useState86[0],
      setStartOffset = _useState86[1];

  var _useState87 = useState(true),
      _useState88 = _slicedToArray(_useState87, 2),
      canInit = _useState88[0],
      setCanInit = _useState88[1];

  var isDisabled = useCallback(function (option) {
    return isObj$1(option) && option.disabled;
  }, []);
  var adjustIndex = useCallback(function (index) {
    var initialOptions_ = options;
    var count = initialOptions_.length;
    index = range$1(index, 0, count);

    for (var i = index; i < count; i++) {
      if (!isDisabled(initialOptions_[i])) {
        return i;
      }
    }

    for (var _i = index - 1; _i >= 0; _i--) {
      if (!isDisabled(initialOptions_[_i])) {
        return _i;
      }
    }
  }, [isDisabled, options]);
  var setIndex = useCallback(function (index, userAction) {
    index = adjustIndex(index) || 0;
    var offset = -index * Number(itemHeight);

    if (index !== currentIndex) {
      setCurrentIndex(index);
      setOffset(offset);
      if (onChange && userAction) onChange(curColIndex);
      return;
    }

    return setOffset(offset);
  }, [adjustIndex, curColIndex, currentIndex, itemHeight, onChange]);
  useEffect(function () {
    if (defaultIndex && !currentIndex) setCurrentIndex(defaultIndex || 0);

    if (canInit) {
      setOptions(initialOptions || []);
    }

    setTimeout(function () {
      if (defaultIndex && !currentIndex) {
        setIndex(defaultIndex || 0);
      }
    });
  }, [currentIndex, initialOptions, setIndex, defaultIndex, canInit]);
  var onTouchMove = useCallback(function (event) {
    event.preventDefault();
    event.stopPropagation();
    var deltaY = event.touches[0].clientY - startY;
    setOffset(range$1(startOffset + deltaY, -(options.length * Number(itemHeight)), itemHeight));
  }, [startOffset, itemHeight, options, startY]);
  var onTouchStart = useCallback(function (event) {
    setStartY(event.touches[0].clientY);
    setStartOffset(offset);
    setDuration(0);
  }, [offset]);
  var onTouchEnd = useCallback(function () {
    if (offset !== startOffset) {
      setDuration(DEFAULT_DURATION);

      var _index4 = range$1(Math.round(-offset / Number(itemHeight)), 0, options.length - 1);

      setTimeout(function () {
        setIndex(_index4, true);
      }, 16);
    }
  }, [startOffset, offset, itemHeight, options.length, setIndex]);
  var onClickItem = useCallback(function (event) {
    var index = event.currentTarget.dataset.index;
    setTimeout(function () {
      setIndex(Number(index), true);
    });
  }, [setIndex]);
  var getCurrentIndex = useCallback(function () {
    return currentIndex;
  }, [currentIndex]);
  var getValue = useCallback(function () {
    return options[currentIndex];
  }, [options, currentIndex]);
  var getOptionText = useCallback(function (option) {
    return isObj$1(option) && valueKey && valueKey in option ? option[valueKey] : option;
  }, [valueKey]);
  var setValue = useCallback(function (value) {
    for (var i = 0; i < options.length; i++) {
      if (getOptionText(options[i]) === value) {
        return setIndex(i);
      }
    }

    return _Promise.resolve();
  }, [setIndex, getOptionText, options]);
  useImperativeHandle(ref, function () {
    return {
      getCurrentIndex: getCurrentIndex,
      getValue: getValue,
      setValue: setValue,
      props: props,
      setIndex: setIndex,
      set: function set(opt) {
        return new _Promise(function (resolve) {
          setOptions(opt.options);
          setCanInit(false);
          resolve();
        });
      }
    };
  });
  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: "van-picker-column custom-class ".concat(className),
    style: style([rootStyle$2({
      itemHeight: itemHeight,
      visibleItemCount: visibleItemCount
    }), style$1])
  }, others, {
    children: jsxRuntime.exports.jsx(View, _Object$assign({
      style: wrapperStyle$1({
        offset: offset,
        itemHeight: itemHeight,
        visibleItemCount: visibleItemCount,
        duration: duration
      }),
      onTouchStart: onTouchStart,
      onTouchMove: onTouchMove,
      onTouchEnd: onTouchEnd,
      onTouchCancel: onTouchEnd,
      catchMove: true
    }, {
      children: _mapInstanceProperty(options).call(options, function (option, index) {
        return jsxRuntime.exports.jsx(View, _Object$assign({
          "data-index": index,
          style: {
            height: itemHeight + 'px'
          },
          className: 'van-ellipsis ' + bem('picker-column__item', {
            disabled: option && option.disabled,
            selected: index === currentIndex
          }) + ' ' + (index === currentIndex ? 'active-class' : ''),
          onClick: onClickItem
        }, {
          children: optionText(option, valueKey)
        }), "picker-column__item".concat(index));
      })
    }), void 0)
  }), void 0);
}

var PickerColumn = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(Index$r));
/* eslint-disable */

function columnsStyle(data) {
  return style({
    height: addUnit$1(data.itemHeight * data.visibleItemCount)
  });
}

function maskStyle(data) {
  return style({
    'background-size': '100% ' + addUnit$1(data.itemHeight * (data.visibleItemCount - 1) / 2)
  });
}

function frameStyle(data) {
  return style({
    height: addUnit$1(data.itemHeight)
  });
}

function columns(columns) {
  console.info('--------------', columns);

  if (!isArray(columns)) {
    return [];
  }

  if (columns.length && !_valuesInstanceProperty(columns[0])) {
    return [{
      values: columns
    }];
  }

  return columns;
}

var VanPicker = /*#__PURE__*/forwardRef(function Index(props, ref) {
  var _context55;

  var _props$valueKey = props.valueKey,
      valueKey = _props$valueKey === void 0 ? 'text' : _props$valueKey,
      _props$toolbarPositio = props.toolbarPosition,
      toolbarPosition = _props$toolbarPositio === void 0 ? 'top' : _props$toolbarPositio,
      defaultIndex = props.defaultIndex,
      columns$1 = props.columns,
      title = props.title,
      cancelButtonText = props.cancelButtonText,
      confirmButtonText = props.confirmButtonText,
      _props$itemHeight2 = props.itemHeight,
      itemHeight = _props$itemHeight2 === void 0 ? 48 : _props$itemHeight2,
      _props$visibleItemCou2 = props.visibleItemCount,
      visibleItemCount = _props$visibleItemCou2 === void 0 ? 5 : _props$visibleItemCou2,
      loading = props.loading,
      onChange = props.onChange,
      className = props.className,
      style$1 = props.style,
      onCancel = props.onCancel,
      onConfirm = props.onConfirm,
      _props$showToolbar = props.showToolbar,
      showToolbar = _props$showToolbar === void 0 ? true : _props$showToolbar,
      others = __rest(props, ["valueKey", "toolbarPosition", "defaultIndex", "columns", "title", "cancelButtonText", "confirmButtonText", "itemHeight", "visibleItemCount", "loading", "onChange", "className", "style", "onCancel", "onConfirm", "showToolbar"]);

  var _useState89 = useState(false),
      _useState90 = _slicedToArray(_useState89, 2),
      simple = _useState90[0],
      setSimple = _useState90[1];

  var children = useRef([]);
  useEffect(function () {
    var simple = Boolean(columns$1 && columns$1.length && !columns$1[0]);
    setSimple(simple);

    if (Array.isArray(children) && children.length) {
      setColumns().catch(function () {});
    }
  }, [columns$1, children]);
  var emit = useCallback(function () {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _a;

    var type = (_a = event === null || event === void 0 ? void 0 : event.currentTarget) === null || _a === void 0 ? void 0 : _a.dataset['type'];

    if (typeof event === 'number' || !type) {
      if (onChange) {
        var event_ = {};
        Object.defineProperties(event_, {
          detail: {
            value: {
              picker: {
                setColumnValue: setColumnValue,
                getColumnValue: getColumnValue,
                setColumnValues: setColumnValues,
                getColumnValues: function getColumnValues(index) {
                  return children.current[index].options;
                },
                getIndexes: getIndexes,
                setIndexes: function setIndexes(indexes) {
                  var stack = _mapInstanceProperty(indexes).call(indexes, function (optionIndex, columnIndex) {
                    return setColumnIndex(columnIndex, optionIndex);
                  });

                  return _Promise.all(stack);
                },
                setColumnIndex: setColumnIndex,
                getColumnIndex: getColumnIndex,
                getValues: getValues,
                setColumns: setColumns,
                children: children,
                setValues: setValues,
                columns: columns$1
              },
              value: simple ? getColumnValue(0) : getValues(),
              index: simple ? getColumnIndex(0) : event
            }
          }
        });
        onChange(event_);
      }
    } else if (type === 'cancel') {
      if (onCancel) {
        Object.defineProperty(event, 'detail', {
          value: {
            value: simple ? getColumnValue(0) : getValues(),
            index: simple ? getColumnIndex(0) : getIndexes()
          }
        });
        onCancel(event);
      }
    } else if (type === 'confirm') {
      if (onConfirm) {
        Object.defineProperty(event, 'detail', {
          value: {
            value: simple ? getColumnValue(0) : getValues(),
            index: simple ? getColumnIndex(0) : getIndexes()
          }
        });
        onConfirm(event);
      }
    }
  }, []);
  var getColumnValue = useCallback(function (index) {
    var column = children.current[index];
    return column && column.getValue();
  }, []);
  var getColumnIndex = useCallback(function (columnIndex) {
    return (children.current[columnIndex] || {}).getCurrentIndex();
  }, []);
  var setColumns = useCallback(function () {
    var _context52;

    var columns_ = simple ? [{
      values: columns$1
    }] : columns$1;

    var stack = _mapInstanceProperty(_context52 = columns_ || []).call(_context52, function (column, index) {
      return setColumnValues(index, _valuesInstanceProperty(column));
    });

    return _Promise.all(stack);
  }, [columns$1, simple]);
  var setColumnValues = useCallback(function (index, options) {
    var needReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var column = children.current[index];

    if (column == null) {
      return _Promise.reject(new Error('setColumnValues: ??????????????????'));
    }

    var isSame = _JSON$stringify(column.props.options) === _JSON$stringify(options);

    if (isSame) {
      return _Promise.resolve();
    }

    return column.set({
      options: options
    }).then(function () {
      if (needReset) {
        setTimeout(function () {
          column.setIndex(0);
        });
      }
    });
  }, []);
  var getValues = useCallback(function () {
    var _context53;

    return _mapInstanceProperty(_context53 = children.current).call(_context53, function (child) {
      return child.getValue();
    });
  }, []);
  var getIndexes = useCallback(function () {
    var _context54;

    return _mapInstanceProperty(_context54 = children.current).call(_context54, function (child) {
      return child.getCurrentIndex();
    });
  }, []);
  var onChange_ = emit;
  var onTouchMove = useCallback(function () {}, []);
  var setColumnIndex = useCallback(function (index, optionIndex) {
    var column = children.current[index];

    if (column == null) {
      return _Promise.reject(new Error('setColumnIndex: ??????????????????'));
    }

    return column.setIndex(optionIndex);
  }, []);
  useImperativeHandle(ref, function () {
    return {
      setColumnValue: setColumnValue,
      getColumnValue: getColumnValue,
      setColumnValues: setColumnValues,
      getColumnValues: function getColumnValues(index) {
        return children.current[index].options;
      },
      getIndexes: getIndexes,
      setIndexes: function setIndexes(indexes) {
        var stack = _mapInstanceProperty(indexes).call(indexes, function (optionIndex, columnIndex) {
          return setColumnIndex(columnIndex, optionIndex);
        });

        return _Promise.all(stack);
      },
      setColumnIndex: setColumnIndex,
      getColumnIndex: getColumnIndex,
      getValues: getValues,
      setColumns: setColumns,
      children: children,
      setValues: setValues,
      columns: columns$1
    };
  });

  var setValues = function setValues(values) {
    var stack = _mapInstanceProperty(values).call(values, function (value, index) {
      return setColumnValue(index, value);
    });

    return _Promise.all(stack);
  };

  var setColumnValue = function setColumnValue(index, value) {
    var column = children.current[index] || {};

    if (column == null) {
      return _Promise.reject(new Error('setColumnValue: ??????????????????'));
    }

    return column.setValue(value);
  };

  var onTouchMove_ = useCallback(function (event) {
    event.preventDefault();
    event.stopPropagation();
  }, []);
  return jsxRuntime.exports.jsxs(View, _Object$assign({
    className: "van-picker custom-class ".concat(className),
    style: style([style$1])
  }, others, {
    onTouchMove: onTouchMove_
  }, {
    children: [toolbarPosition === 'top' && showToolbar && jsxRuntime.exports.jsxs(View, _Object$assign({
      className: "van-picker__toolbar toolbar-class"
    }, {
      children: [jsxRuntime.exports.jsx(View, _Object$assign({
        className: "van-picker__cancel",
        hoverClass: "van-picker__cancel--hover",
        hoverStayTime: 70,
        "data-type": "cancel",
        onClick: emit
      }, {
        children: cancelButtonText || '??????'
      }), void 0), title && jsxRuntime.exports.jsx(View, _Object$assign({
        className: "van-picker__title van-ellipsis"
      }, {
        children: title
      }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
        className: "van-picker__confirm",
        hoverClass: "van-picker__confirm--hover",
        hoverStayTime: 70,
        "data-type": "confirm",
        onClick: emit
      }, {
        children: confirmButtonText || '??????'
      }), void 0)]
    }), void 0), loading && jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-picker__loading"
    }, {
      children: jsxRuntime.exports.jsx(Index$Q, {
        color: "#1989fa"
      }, void 0)
    }), void 0), jsxRuntime.exports.jsxs(View, _Object$assign({
      className: "van-picker__columns",
      style: columnsStyle({
        itemHeight: itemHeight,
        visibleItemCount: visibleItemCount
      }),
      onTouchMove: onTouchMove
    }, {
      children: [_mapInstanceProperty(_context55 = columns(columns$1)).call(_context55, function (item, index) {
        return jsxRuntime.exports.jsx(PickerColumn, {
          className: "van-picker__column column-class",
          "data-index": index,
          index: index,
          valueKey: valueKey,
          initialOptions: _valuesInstanceProperty(item),
          defaultIndex: item.defaultIndex || defaultIndex,
          itemHeight: itemHeight,
          visibleItemCount: visibleItemCount,
          activeClass: "active-class",
          onChange: onChange_,
          ref: function ref(el) {
            return children.current[index] = el;
          }
        }, "van-picker__column_".concat(index, "column-class"));
      }), jsxRuntime.exports.jsx(View, {
        className: "van-picker__mask",
        style: maskStyle({
          itemHeight: itemHeight,
          visibleItemCount: visibleItemCount
        })
      }, void 0), jsxRuntime.exports.jsx(View, {
        className: "van-picker__frame van-hairline--top-bottom",
        style: frameStyle({
          itemHeight: itemHeight
        })
      }, void 0)]
    }), void 0), toolbarPosition === 'bottom' && showToolbar && jsxRuntime.exports.jsxs(View, _Object$assign({
      className: "van-picker__toolbar toolbar-class"
    }, {
      children: [jsxRuntime.exports.jsx(View, _Object$assign({
        className: "van-picker__cancel",
        hoverClass: "van-picker__cancel--hover",
        hoverStayTime: 70,
        "data-type": "cancel",
        onClick: emit
      }, {
        children: cancelButtonText
      }), void 0), title && jsxRuntime.exports.jsx(View, _Object$assign({
        className: "van-picker__title van-ellipsis"
      }, {
        children: title
      }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
        className: "van-picker__confirm",
        hoverClass: "van-picker__confirm--hover",
        hoverStayTime: 70,
        "data-type": "confirm",
        onClick: emit
      }, {
        children: confirmButtonText
      }), void 0)]
    }), void 0)]
  }), void 0);
});

function buttonStyle(data) {
  return style({
    width: addUnit$1(data.buttonSize),
    height: addUnit$1(data.buttonSize)
  });
}

function inputStyle(data) {
  return style({
    width: addUnit$1(data.inputWidth),
    height: addUnit$1(data.buttonSize)
  });
}

var LONG_PRESS_START_TIME = 600;
var LONG_PRESS_INTERVAL = 200; // add num and avoid float number

function add(num1, num2) {
  var cardinal = Math.pow(10, 10);
  return Math.round((num1 + num2) * cardinal) / cardinal;
}

function equal(value1, value2) {
  return String(value1) === String(value2);
}

function Index$q(props) {
  var theme = props.theme,
      value = props.value,
      integer = props.integer,
      disabled = props.disabled,
      inputWidth = props.inputWidth,
      buttonSize = props.buttonSize,
      asyncChange = props.asyncChange,
      disableInput = props.disableInput,
      decimalLength = props.decimalLength,
      _props$min = props.min,
      min = _props$min === void 0 ? 1 : _props$min,
      _props$max = props.max,
      max = _props$max === void 0 ? _Number$MAX_SAFE_INTEGER : _props$max,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step,
      _props$showPlus = props.showPlus,
      showPlus = _props$showPlus === void 0 ? true : _props$showPlus,
      _props$showMinus = props.showMinus,
      showMinus = _props$showMinus === void 0 ? true : _props$showMinus,
      disablePlus = props.disablePlus,
      disableMinus = props.disableMinus,
      _props$longPress = props.longPress,
      longPress = _props$longPress === void 0 ? true : _props$longPress,
      className = props.className,
      onFocus = props.onFocus,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onOverlimit = props.onOverlimit,
      onPlus = props.onPlus,
      onMinus = props.onMinus,
      renderMinus = props.renderMinus,
      renderPlus = props.renderPlus,
      others = __rest(props, ["theme", "value", "integer", "disabled", "inputWidth", "buttonSize", "asyncChange", "disableInput", "decimalLength", "min", "max", "step", "showPlus", "showMinus", "disablePlus", "disableMinus", "longPress", "className", "onFocus", "onChange", "onBlur", "onOverlimit", "onPlus", "onMinus", "renderMinus", "renderPlus"]);

  var _useState91 = useState(),
      _useState92 = _slicedToArray(_useState91, 2),
      currentValue = _useState92[0],
      setCurrentValue = _useState92[1];

  var eventTypeRef = useRef('');
  var longPressTimerRef = useRef(0);
  var isLongPressRef = useRef(false); // filter illegal characters

  var _filter = useCallback(function (value) {
    value = String(value).replace(/[^0-9.-]/g, '');

    if (integer && _indexOfInstanceProperty(value).call(value, '.') !== -1) {
      value = value.split('.')[0];
    }

    return value;
  }, [integer]); // limit value range


  var _format = useCallback(function (value) {
    value = _filter(value); // format range

    value = value === '' ? 0 : +value;
    value = Math.max(Math.min(+max, value), +min); // format decimal

    if (isDef(decimalLength)) {
      value = value.toFixed(decimalLength);
    }

    return value;
  }, [decimalLength, _filter, max, min]);

  var _check = useCallback(function () {
    var val = _format(currentValue);

    if (!equal(val, currentValue)) {
      setCurrentValue(val);
    }
  }, [_format, currentValue]);

  var _isDisabled = useCallback(function (type) {
    if (type === 'plus') {
      return disabled || disablePlus || currentValue >= max;
    }

    return disabled || disableMinus || currentValue <= min;
  }, [currentValue, disableMinus, disablePlus, disabled, max, min]);

  var _emitChange = useCallback(function (value) {
    if (!asyncChange) {
      setCurrentValue(value);
    }

    onChange === null || onChange === void 0 ? void 0 : onChange({
      detail: value
    });
  }, [asyncChange, onChange]);

  var _onInput = useCallback(function (event) {
    var _ref16 = event.detail || {},
        _ref16$value = _ref16.value,
        value = _ref16$value === void 0 ? '' : _ref16$value; // allow input to be empty


    if (value === '') {
      return;
    }

    var formatted = _filter(value); // limit max decimal length


    if (isDef(decimalLength) && _indexOfInstanceProperty(formatted).call(formatted, '.') !== -1) {
      var _context56, _context57;

      var pair = formatted.split('.');
      formatted = _concatInstanceProperty(_context56 = "".concat(pair[0], ".")).call(_context56, _sliceInstanceProperty(_context57 = pair[1]).call(_context57, 0, decimalLength));
    }

    _emitChange(formatted);
  }, [decimalLength, _emitChange, _filter]);

  var _onFocus = useCallback(function (event) {
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
  }, [onFocus]);

  var _onBlur = useCallback(function (event) {
    var value = _format(event.detail.value);

    _emitChange(value);

    onBlur === null || onBlur === void 0 ? void 0 : onBlur(_Object$assign(_Object$assign({}, event.detail), {
      value: value
    }));
  }, [_emitChange, _format, onBlur]);

  var _onChange = useCallback(function (currentValue) {
    if (_isDisabled(eventTypeRef.current)) {
      onOverlimit === null || onOverlimit === void 0 ? void 0 : onOverlimit();
      return;
    }

    var diff = eventTypeRef.current === 'minus' ? -step : +step;

    var value = _format(add(+currentValue, diff));

    _emitChange(value); // ????????????----


    if (eventTypeRef.current === 'plus') {
      onPlus === null || onPlus === void 0 ? void 0 : onPlus();
    } else {
      onMinus === null || onMinus === void 0 ? void 0 : onMinus();
    }

    return value;
  }, [_isDisabled, step, asyncChange, onOverlimit, _format, onChange, onPlus, onMinus]);

  var _longPressStep = useCallback(function (currentValue) {
    longPressTimerRef.current = setTimeout(function (t) {
      var cv = _onChange(t);

      _longPressStep(cv);
    }, LONG_PRESS_INTERVAL, currentValue);
  }, [_onChange]);

  var _onTap = useCallback(function (event) {
    var type = event.currentTarget.dataset.type;
    eventTypeRef.current = type;

    _onChange(currentValue);
  }, [_onChange, currentValue]);

  var _onTouchStart = useCallback(function (event) {
    if (!longPress || asyncChange) {
      return;
    }

    clearTimeout(longPressTimerRef.current);
    var type = event.currentTarget.dataset.type;
    eventTypeRef.current = type;
    isLongPressRef.current = false;
    longPressTimerRef.current = setTimeout(function () {
      isLongPressRef.current = true;

      _onChange(currentValue);

      _longPressStep(currentValue);
    }, LONG_PRESS_START_TIME);
  }, [longPress, asyncChange, _longPressStep, _onChange, currentValue]);

  var _onTouchEnd = useCallback(function () {
    if (!longPress || asyncChange) {
      return;
    }

    clearTimeout(longPressTimerRef.current);
  }, [asyncChange, longPress]);

  useEffect(function () {
    _check();
  }, [decimalLength, min, max, integer, _check]);
  useEffect(function () {
    if (!equal(value, currentValue)) {
      setCurrentValue(_format(value));
    } // eslint-disable-next-line

  }, [_format, value]);
  return jsxRuntime.exports.jsxs(View, _Object$assign({
    className: bem('stepper', [theme]) + " ".concat(className || '')
  }, others, {
    children: [showMinus && jsxRuntime.exports.jsx(View, _Object$assign({
      "data-type": "minus",
      style: buttonStyle({
        buttonSize: buttonSize
      }),
      className: 'minus-class ' + bem('stepper__minus', {
        disabled: disabled || disableMinus || currentValue <= min
      }),
      hoverClass: "van-stepper__minus--hover",
      // hoverStayTime="70"
      onClick: _onTap,
      onTouchStart: _onTouchStart,
      onTouchEnd: _onTouchEnd
    }, {
      children: renderMinus
    }), void 0), jsxRuntime.exports.jsx(Input, {
      type: integer ? 'number' : 'digit',
      className: 'input-class ' + bem('stepper__input', {
        disabled: disabled || disableInput
      }),
      style: inputStyle({
        buttonSize: buttonSize,
        inputWidth: inputWidth
      }),
      value: currentValue,
      disabled: disabled || disableInput,
      onInput: _onInput,
      onFocus: _onFocus,
      onBlur: _onBlur
    }, void 0), showPlus && jsxRuntime.exports.jsx(View, _Object$assign({
      "data-type": "plus",
      style: buttonStyle({
        buttonSize: buttonSize
      }),
      className: 'plus-class ' + bem('stepper__plus', {
        disabled: disabled || disablePlus || currentValue >= max
      }),
      hoverClass: "van-stepper__plus--hover",
      // hoverStayTime="70"
      onClick: _onTap,
      onTouchStart: _onTouchStart,
      onTouchEnd: _onTouchEnd
    }, {
      children: renderPlus
    }), void 0)]
  }), void 0);
}

function getStatus(index, active) {
  if (index < active) {
    return 'finish';
  } else if (index === active) {
    return 'process';
  }

  return 'inactive';
}

function Index$p(props) {
  var _props$steps = props.steps,
      steps = _props$steps === void 0 ? [] : _props$steps,
      _props$active2 = props.active,
      active = _props$active2 === void 0 ? 0 : _props$active2,
      _props$direction3 = props.direction,
      direction = _props$direction3 === void 0 ? 'horizontal' : _props$direction3,
      _props$activeColor2 = props.activeColor,
      activeColor = _props$activeColor2 === void 0 ? GREEN : _props$activeColor2,
      _props$inactiveColor2 = props.inactiveColor,
      inactiveColor = _props$inactiveColor2 === void 0 ? GRAY_DARK$1 : _props$inactiveColor2,
      _props$activeIcon = props.activeIcon,
      activeIcon = _props$activeIcon === void 0 ? 'checked' : _props$activeIcon,
      inactiveIcon = props.inactiveIcon,
      className = props.className,
      onClickStep = props.onClickStep,
      others = __rest(props, ["steps", "active", "direction", "activeColor", "inactiveColor", "activeIcon", "inactiveIcon", "className", "onClickStep"]);

  var _onClick = useCallback(function (event) {
    var index = event.currentTarget.dataset.index;
    Object.defineProperty(event, 'detail', {
      value: index
    });
    onClickStep === null || onClickStep === void 0 ? void 0 : onClickStep(event);
  }, [onClickStep]);

  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: bem('steps', [direction]) + " ".concat(className || '')
  }, others, {
    children: jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-step__wrapper"
    }, {
      children: _mapInstanceProperty(steps).call(steps, function (item, index) {
        return jsxRuntime.exports.jsxs(View, _Object$assign({
          onClick: _onClick,
          "data-index": index,
          className: bem('step', [direction, getStatus(index, active)]) + ' van-hairline',
          style: getStatus(index, active) === 'inactive' ? 'color: ' + inactiveColor : ''
        }, {
          children: [jsxRuntime.exports.jsxs(View, _Object$assign({
            className: "van-step__title",
            style: index === active ? 'color: ' + activeColor : ''
          }, {
            children: [jsxRuntime.exports.jsx(View, {
              children: item.text
            }, void 0), jsxRuntime.exports.jsx(View, _Object$assign({
              className: "desc-class"
            }, {
              children: item.desc
            }), void 0)]
          }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
            className: "van-step__circle-container"
          }, {
            children: index !== active ? jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, {
              children: item.inactiveIcon || inactiveIcon ? jsxRuntime.exports.jsx(Index$$, {
                color: getStatus(index, active) === 'inactive' ? inactiveColor : activeColor,
                name: item.inactiveIcon || inactiveIcon || '',
                className: "van-step__icon"
              }, void 0) : jsxRuntime.exports.jsx(View, {
                className: "van-step__circle",
                style: 'background-color: ' + (active !== undefined && index < active ? activeColor : inactiveColor)
              }, void 0)
            }, void 0) : jsxRuntime.exports.jsx(Index$$, {
              name: item.activeIcon || activeIcon,
              color: activeColor,
              className: "van-step__icon"
            }, void 0)
          }), void 0), index !== steps.length - 1 && jsxRuntime.exports.jsx(View, {
            className: "van-step__line",
            style: 'background-color: ' + (active !== undefined && index < active ? activeColor : inactiveColor)
          }, void 0)]
        }), index);
      })
    }), void 0)
  }), void 0);
}

function parseTabList$1(children) {
  var _context58, _context59;

  return _filterInstanceProperty(_context58 = _mapInstanceProperty(_context59 = _default(children)).call(_context59, function (node) {
    if ( /*#__PURE__*/isValidElement(node)) {
      var key = node.key !== undefined ? String(node.key) : undefined;
      return _Object$assign(_Object$assign({
        key: key
      }, node.props), {
        node: node
      });
    }

    return null;
  })).call(_context58, function (tab) {
    return tab;
  });
}

function Index$o(props) {
  var _useState93 = useState({
    height: 50,
    current: 0
  }),
      _useState94 = _slicedToArray(_useState93, 2),
      state = _useState94[0],
      setState = _useState94[1];

  var height = state.height,
      current = state.current;

  var active = props.active,
      activeColor = props.activeColor,
      inactiveColor = props.inactiveColor,
      _props$border8 = props.border,
      border = _props$border8 === void 0 ? true : _props$border8,
      _props$fixed3 = props.fixed,
      fixed = _props$fixed3 === void 0 ? true : _props$fixed3,
      _props$safeAreaInsetB3 = props.safeAreaInsetBottom,
      safeAreaInsetBottom = _props$safeAreaInsetB3 === void 0 ? true : _props$safeAreaInsetB3,
      _props$zIndex9 = props.zIndex,
      zIndex = _props$zIndex9 === void 0 ? Tabbar : _props$zIndex9,
      placeholder = props.placeholder,
      onChange = props.onChange,
      style$1 = props.style,
      className = props.className,
      children = props.children,
      others = __rest(props, ["active", "activeColor", "inactiveColor", "border", "fixed", "safeAreaInsetBottom", "zIndex", "placeholder", "onChange", "style", "className", "children"]);

  var _change = useCallback(function (data) {
    setState(function (pre) {
      return _Object$assign(_Object$assign({}, pre), {
        current: data
      });
    });
    onChange === null || onChange === void 0 ? void 0 : onChange({
      detail: data
    });
  }, [onChange]);

  var tabs = parseTabList$1(children);

  var newChildren = _mapInstanceProperty(tabs).call(tabs, function (tab, index) {
    return /*#__PURE__*/cloneElement(tab.node, {
      key: index,
      index: index,
      active: current,
      activeColor: activeColor,
      inactiveColor: inactiveColor,
      onChange: _change
    });
  });

  useEffect(function () {
    setState(function (pre) {
      return _Object$assign(_Object$assign({}, pre), {
        current: active
      });
    });
  }, [active]);
  useEffect(function () {
    if (!fixed || !placeholder) {
      return;
    }

    Taro.nextTick(function () {
      getRect(null, '.van-tabbar').then(function (res) {
        setState(function (pre) {
          return _Object$assign(_Object$assign({}, pre), {
            height: res.height
          });
        });
      });
    });
  }, [fixed, placeholder]); // useEffect(
  //   function () {
  //     if (!Array.isArray(children) || !children.length) {
  //       return
  //     }
  //     children.forEach((child) => child.updateFromParent())
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [active, activeColor, inactiveColor],
  // )

  return jsxRuntime.exports.jsxs(Block, {
    children: [jsxRuntime.exports.jsx(View, _Object$assign({
      className: (border ? 'van-hairline--top-bottom' : '') + ' ' + bem('tabbar', {
        fixed: fixed,
        safe: safeAreaInsetBottom
      }) + ' custom-class' + " ".concat(className || ''),
      style: style([zIndex ? 'z-index: ' + zIndex : '', style$1])
    }, others, {
      children: newChildren
    }), void 0), fixed && placeholder && jsxRuntime.exports.jsx(View, {
      style: 'height: ' + height + 'px;'
    }, void 0)]
  }, void 0);
}

function Index$n(props) {
  var icon = props.icon,
      name = props.name,
      _props$iconPrefix = props.iconPrefix,
      iconPrefix = _props$iconPrefix === void 0 ? 'van-icon' : _props$iconPrefix,
      dot = props.dot,
      info = props.info,
      renderIconactive = props.renderIconactive,
      renderIcon = props.renderIcon,
      index = props.index,
      active = props.active,
      activeColor = props.activeColor,
      inactiveColor = props.inactiveColor,
      onChange = props.onChange,
      children = props.children,
      style$1 = props.style,
      className = props.className,
      onClick = props.onClick,
      others = __rest(props, ["icon", "name", "iconPrefix", "dot", "info", "renderIconactive", "renderIcon", "index", "active", "activeColor", "inactiveColor", "onChange", "children", "style", "className", "onClick"]);

  var _click = function _click() {
    if (onChange) {
      var _active = name !== null && name !== void 0 ? name : index;

      if (_active !== active) {
        onChange(_active);
      }
    }

    onClick === null || onClick === void 0 ? void 0 : onClick(name !== null && name !== void 0 ? name : index);
  };

  return onChange ? jsxRuntime.exports.jsxs(View, _Object$assign({
    className: bem('tabbar-item', {
      active: active === (name !== null && name !== void 0 ? name : index)
    }) + ' custom-class' + " ".concat(className || ''),
    style: style([{
      color: active === (name !== null && name !== void 0 ? name : index) ? activeColor : inactiveColor
    }, style$1])
  }, others, {
    onClick: _click
  }, {
    children: [jsxRuntime.exports.jsxs(View, _Object$assign({
      className: "van-tabbar-item__icon"
    }, {
      children: [icon ? jsxRuntime.exports.jsx(Index$$, {
        size: 38,
        info: info,
        name: icon,
        classPrefix: iconPrefix,
        className: "van-tabbar-item__icon__inner"
      }, void 0) : jsxRuntime.exports.jsx(Block, {
        children: active === (name !== null && name !== void 0 ? name : index) ? renderIconactive : renderIcon
      }, void 0), jsxRuntime.exports.jsx(Index$10, {
        dot: dot,
        className: "van-tabbar-item__info"
      }, void 0)]
    }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-tabbar-item__text"
    }, {
      children: children
    }), void 0)]
  }), void 0) : jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, {}, void 0);
}

function rootStyle$1(data) {
  return style({
    'z-index': data.zIndex,
    top: addUnit$1(data.top)
  });
}

function notifyStyle(data) {
  return style({
    background: data.background,
    color: data.color
  });
}

var events$1 = new Events();

function trigger$1(eventName) {
  var _context60;

  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return events$1.trigger.apply(events$1, _concatInstanceProperty(_context60 = [eventName]).call(_context60, args));
}

function on$1(eventName, listener) {
  return events$1.on(eventName, listener);
}

function off$1(eventName, listener) {
  return events$1.off(eventName, listener);
}

var Notify = function Notify(options) {
  trigger$1('show', options);
};

Notify.clear = function (options) {
  trigger$1('clear', options);
};

var defaultOptions = {
  selector: '#van-notify',
  message: '',
  background: '',
  type: 'danger',
  color: '#fff',
  duration: 3000,
  zIndex: 110,
  safeAreaInsetTop: false,
  top: 0
};
var timer = null;

function parseOptions(message) {
  if (message == null) {
    return {};
  }

  return typeof message === 'string' ? {
    message: message
  } : message;
}

function Index$m(props) {
  var _useState95 = useState({
    selector: '#van-notify',
    show: false,
    statusBarHeight: undefined,
    message: '',
    background: '',
    type: 'danger',
    color: '#fff',
    duration: 3000,
    zIndex: 110,
    safeAreaInsetTop: false,
    top: 0,
    onClick: function onClick(_data) {},
    onOpened: function onOpened() {},
    onClose: function onClose() {}
  }),
      _useState96 = _slicedToArray(_useState95, 2),
      state = _useState96[0],
      setState = _useState96[1];

  var style$1 = props.style,
      className = props.className,
      others = __rest(props, ["style", "className"]);

  useEffect(function () {
    /* eslint-disable-next-line */
    var others = __rest(props, ["style", "className"]);

    setState(function (state) {
      return _Object$assign(_Object$assign({}, state), others);
    });
  }, [props]);
  useEffect(function () {
    var _getSystemInfoSync = getSystemInfoSync(),
        statusBarHeight = _getSystemInfoSync.statusBarHeight;

    setState(function (state) {
      return _Object$assign(_Object$assign({}, state), {
        statusBarHeight: statusBarHeight
      });
    });
  }, []);
  useEffect(function () {
    on$1('show', function (notifyOptions) {
      var options = _Object$assign(_Object$assign({}, defaultOptions), parseOptions(notifyOptions));

      setState(function (state) {
        return _Object$assign(_Object$assign({}, state), options);
      });
      show(notifyOptions);
    });
    on$1('clear', function (notifyOptions) {
      hide(notifyOptions);
    });
    return function () {
      off$1('show');
      off$1('clear');
    };
    /* eslint-disable-next-line */
  }, []);
  var hide = useCallback(function (notifyOptions) {
    clearTimeout(timer);
    setState(function (state) {
      return _Object$assign(_Object$assign({}, state), {
        show: false
      });
    });
    Taro.nextTick(function () {
      var _a;

      (_a = notifyOptions === null || notifyOptions === void 0 ? void 0 : notifyOptions.onClose) === null || _a === void 0 ? void 0 : _a.call(notifyOptions);
    });
  }, []);
  var show = useCallback(function (notifyOptions) {
    clearTimeout(timer);
    setState(function (state) {
      return _Object$assign(_Object$assign({}, state), {
        show: true
      });
    });
    Taro.nextTick(function () {
      var _a;

      (_a = notifyOptions === null || notifyOptions === void 0 ? void 0 : notifyOptions.onOpened) === null || _a === void 0 ? void 0 : _a.call(notifyOptions);
    });

    if (state.duration > 0 && state.duration !== Infinity) {
      timer = setTimeout(function () {
        hide(notifyOptions);
      }, state.duration);
    }
  }, [hide, state.duration]);
  var onTap = useCallback(function (event) {
    var _a;

    (_a = state.onClick) === null || _a === void 0 ? void 0 : _a.call(state, event);
  }, [state]);
  return jsxRuntime.exports.jsx(Index$Y, _Object$assign({
    name: "slide-down",
    show: state.show,
    className: "van-notify__container ".concat(className),
    style: style([rootStyle$1({
      zIndex: state.zIndex,
      top: state.top
    }), style$1]),
    onClick: onTap
  }, others, {
    children: jsxRuntime.exports.jsxs(View, _Object$assign({
      className: 'van-notify van-notify--' + state.type,
      style: notifyStyle({
        background: state.background,
        color: state.color
      })
    }, {
      children: [state.safeAreaInsetTop && jsxRuntime.exports.jsx(View, {
        style: 'height: ' + state.statusBarHeight + 'px'
      }, void 0), jsxRuntime.exports.jsx(Text, {
        children: state.message
      }, void 0)]
    }), void 0)
  }), void 0);
}

Index$m.show = Notify;
Index$m.clear = Notify.clear;

function rootStyle(data) {
  return style({
    'padding-left': addUnit$1(data.gutter)
  });
}

function Index$l(props) {
  var _props$gutter2 = props.gutter,
      gutter = _props$gutter2 === void 0 ? null : _props$gutter2,
      clickable = props.clickable,
      _props$columnNum = props.columnNum,
      columnNum = _props$columnNum === void 0 ? 4 : _props$columnNum,
      _props$center = props.center,
      center = _props$center === void 0 ? true : _props$center,
      _props$border9 = props.border,
      border = _props$border9 === void 0 ? true : _props$border9,
      direction = props.direction,
      iconSize = props.iconSize,
      square = props.square,
      _props$reverse = _reverseInstanceProperty(props),
      reverse = _props$reverse === void 0 ? false : _props$reverse,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$style = props.style,
      style$1 = _props$style === void 0 ? {} : _props$style,
      others = __rest(props, ["gutter", "clickable", "columnNum", "center", "border", "direction", "iconSize", "square", "reverse", "className", "style"]);

  var childrenInstance = useRef([]);
  var updateChildren = useCallback(function () {
    var _context61;

    _forEachInstanceProperty(_context61 = childrenInstance.current).call(_context61, function (child) {
      child.updateStyle();
    });
  }, []);
  useEffect(function () {
    updateChildren();
  }, [updateChildren]);
  var setChildrenInstance = useCallback(function (index, instance) {
    childrenInstance.current[index] = instance;
  }, []);
  var ResetChildren = useMemo(function () {
    var res = [];

    if (others.children && Array.isArray(others.children)) {
      var _context62;

      _forEachInstanceProperty(_context62 = others.children).call(_context62, function (child, index) {
        res.push( /*#__PURE__*/cloneElement(child, {
          setChildrenInstance: setChildrenInstance,
          key: index,
          index: index,
          parentInstance: {
            columnNum: columnNum,
            border: border,
            square: square,
            gutter: gutter,
            clickable: clickable,
            center: center,
            direction: direction,
            reverse: reverse,
            iconSize: iconSize
          }
        }));
      });
    }

    return res;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [others.children]);
  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: 'van-grid custom-class ' + (border && !gutter ? 'van-hairline--top' : '') + ' ' + className,
    style: style([rootStyle({
      gutter: gutter
    }), style$1])
  }, {
    children: ResetChildren
  }), void 0);
}

function wrapperStyle(data) {
  var width = 100 / data.columnNum + '%';
  return style({
    width: width,
    'padding-top': data.square ? width : null,
    'padding-right': addUnit$1(data.gutter),
    'margin-top': data.index >= data.columnNum && !data.square ? addUnit$1(data.gutter) : null
  });
}

function contentStyle(data) {
  return data.square ? style({
    right: addUnit$1(data.gutter),
    bottom: addUnit$1(data.gutter),
    height: 'auto'
  }) : '';
}

function Index$k(props) {
  var icon = props.icon,
      iconColor = props.iconColor,
      _props$iconPrefix2 = props.iconPrefix,
      iconPrefix = _props$iconPrefix2 === void 0 ? 'van-icon' : _props$iconPrefix2,
      dot = props.dot,
      info = props.info,
      badge = props.badge,
      text = props.text,
      setChildrenInstance = props.setChildrenInstance,
      parentInstance = props.parentInstance,
      index = props.index,
      style$1 = props.style,
      className = props.className,
      others = __rest(props, ["icon", "iconColor", "iconPrefix", "dot", "info", "badge", "text", "setChildrenInstance", "parentInstance", "index", "style", "className"]);

  var _useState97 = useState({}),
      _useState98 = _slicedToArray(_useState97, 2),
      parentState = _useState98[0],
      setParentState = _useState98[1];

  useEffect(function () {
    setChildrenInstance(index, {
      updateStyle: updateStyle
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [index, setChildrenInstance]);
  useEffect(function () {
    updateStyle(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var updateStyle = useCallback(function () {
    var columnNum = parentInstance.columnNum,
        border = parentInstance.border,
        square = parentInstance.square,
        gutter = parentInstance.gutter,
        clickable = parentInstance.clickable,
        center = parentInstance.center,
        direction = parentInstance.direction,
        reverse = _reverseInstanceProperty(parentInstance),
        iconSize = parentInstance.iconSize;

    setParentState({
      center: center,
      border: border,
      square: square,
      gutter: gutter,
      clickable: clickable,
      direction: direction,
      reverse: reverse,
      iconSize: iconSize,
      index: index,
      columnNum: columnNum
    });
  }, [parentInstance, index]);
  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: 'custom-class ' + bem('grid-item', {
      square: parentState === null || parentState === void 0 ? void 0 : parentState.square
    }) + ' ' + className,
    style: style([wrapperStyle({
      square: parentState === null || parentState === void 0 ? void 0 : parentState.square,
      gutter: parentState === null || parentState === void 0 ? void 0 : parentState.gutter,
      columnNum: parentState === null || parentState === void 0 ? void 0 : parentState.columnNum,
      index: parentState === null || parentState === void 0 ? void 0 : parentState.index
    }), style$1]),
    onClick: others.onClick
  }, {
    children: jsxRuntime.exports.jsx(View, _Object$assign({
      className: 'content-class ' + bem('grid-item__content', [parentState === null || parentState === void 0 ? void 0 : parentState.direction, {
        center: parentState === null || parentState === void 0 ? void 0 : parentState.center,
        square: parentState === null || parentState === void 0 ? void 0 : parentState.square,
        reverse: parentState === null || parentState === void 0 ? void 0 : _reverseInstanceProperty(parentState),
        clickable: parentState === null || parentState === void 0 ? void 0 : parentState.clickable,
        surround: (parentState === null || parentState === void 0 ? void 0 : parentState.border) && (parentState === null || parentState === void 0 ? void 0 : parentState.gutter)
      }]) + ' ' + ((parentState === null || parentState === void 0 ? void 0 : parentState.border) ? 'van-hairline--surround' : ''),
      style: contentStyle({
        square: parentState === null || parentState === void 0 ? void 0 : parentState.square,
        gutter: parentState === null || parentState === void 0 ? void 0 : parentState.gutter
      })
    }, {
      children: jsxRuntime.exports.jsx(Block, {
        children: others.children
      }, void 0) || jsxRuntime.exports.jsxs(Block, {
        children: [jsxRuntime.exports.jsx(View, _Object$assign({
          className: "van-grid-item__icon icon-class"
        }, {
          children: icon ? jsxRuntime.exports.jsx(Index$$, {
            name: icon,
            color: iconColor,
            classPrefix: iconPrefix,
            dot: dot,
            info: badge || info,
            size: parentState === null || parentState === void 0 ? void 0 : parentState.iconSize
          }, void 0) : parentState.renderIcon
        }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
          className: "van-grid-item__text text-class"
        }, {
          children: text ? jsxRuntime.exports.jsx(Text, {
            children: text
          }, void 0) : parentState.renderText
        }), void 0)]
      }, void 0)
    }), void 0)
  }), void 0);
}
/* eslint-disable */


function displayTitle(item) {
  var _context63;

  if (item.title) {
    return item.title;
  }

  var match = _filterInstanceProperty(_context63 = item.options).call(_context63, function (option) {
    return option.value === item.value;
  });

  var displayTitle = match.length ? match[0].text : '';
  return displayTitle;
}

var ARRAY$1 = [];
var currentIndexInit = 0;

function Index$j(props) {
  var _context70;

  var activeColor = props.activeColor,
      _props$overlay3 = props.overlay,
      overlay = _props$overlay3 === void 0 ? true : _props$overlay3,
      _props$zIndex10 = props.zIndex,
      zIndex = _props$zIndex10 === void 0 ? 10 : _props$zIndex10,
      _props$duration4 = props.duration,
      duration = _props$duration4 === void 0 ? 200 : _props$duration4,
      _props$direction4 = props.direction,
      direction = _props$direction4 === void 0 ? 'down' : _props$direction4,
      _props$closeOnClickOv3 = props.closeOnClickOverlay,
      closeOnClickOverlay = _props$closeOnClickOv3 === void 0 ? true : _props$closeOnClickOv3,
      _props$closeOnClickOu = props.closeOnClickOutside,
      closeOnClickOutside = _props$closeOnClickOu === void 0 ? true : _props$closeOnClickOu,
      className = props.className,
      style$1 = props.style,
      others = __rest(props, ["activeColor", "overlay", "zIndex", "duration", "direction", "closeOnClickOverlay", "closeOnClickOutside", "className", "style"]);

  var _useState99 = useState([]),
      _useState100 = _slicedToArray(_useState99, 2),
      itemListData = _useState100[0],
      setItemListData = _useState100[1];

  var _useState101 = useState(0),
      _useState102 = _slicedToArray(_useState101, 2),
      windowHeight = _useState102[0],
      setWindowHeight = _useState102[1];

  var childrenInstance = useRef([]);
  var TimerKey = useRef();

  var _useState103 = useState(),
      _useState104 = _slicedToArray(_useState103, 2),
      currentIndex = _useState104[0],
      setCurrentIndex = _useState104[1];

  var close = useCallback(function () {
    var _context64;

    _forEachInstanceProperty(_context64 = childrenInstance.current).call(_context64, function (child) {
      child.toggle(false, {
        immediate: true
      });
    });
  }, []);
  useLayoutEffect(function () {
    var _getSystemInfoSync2 = getSystemInfoSync(),
        windowHeight = _getSystemInfoSync2.windowHeight;

    setWindowHeight(windowHeight);
    TimerKey.current = new Date();
    ARRAY$1.push({
      closeOnClickOutside: closeOnClickOutside,
      TimerKey: TimerKey,
      close: close
    });
  }, [closeOnClickOutside, close]);
  useLayoutEffect(function () {
    updateItemListData(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(function () {
    return function () {
      var _context65;

      ARRAY$1 = _filterInstanceProperty(_context65 = ARRAY$1 || []).call(_context65, function (item) {
        return item && item.TimerKey !== TimerKey;
      });
      setCurrentIndex(currentIndexInit++);
    };
  }, []);
  var updateChildrenData = useCallback(function () {
    var _context66;

    _forEachInstanceProperty(_context66 = childrenInstance.current).call(_context66, function (child) {
      child.updateDataFromParent();
    });
  }, []);

  var updateItemListData = function updateItemListData() {
    setTimeout(function () {
      var _context67;

      setItemListData(_mapInstanceProperty(_context67 = childrenInstance.current).call(_context67, function (child) {
        return child;
      }));
    }, 33);
  };

  var onTitleTap = useCallback(function (event) {
    var index = event.currentTarget.dataset.index;
    var child = childrenInstance.current[index];

    if (!child.disabled) {
      _forEachInstanceProperty(ARRAY$1).call(ARRAY$1, function (menuItem) {
        if (menuItem && menuItem.closeOnClickOutside && menuItem.TimerKey !== TimerKey) {
          menuItem.close();
        }
      });

      setTimeout(function () {
        toggleItem(index);
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  useEffect(function () {
    updateChildrenData();
  }, [updateChildrenData]);
  var setChildrenInstance = useCallback(function (index, instance) {
    childrenInstance.current[index] = instance;
  }, []);
  var getChildWrapperStyle = useCallback(function () {
    return getRect(null, ".van-dropdown-menu".concat(currentIndex)).then(function (rect) {
      var _rect$top = rect.top,
          top = _rect$top === void 0 ? 0 : _rect$top,
          _rect$bottom = rect.bottom,
          bottom = _rect$bottom === void 0 ? 0 : _rect$bottom;
      var offset = direction === 'down' ? bottom : windowHeight - top;
      var wrapperStyle = {
        zIndex: zIndex
      };

      if (direction === 'down') {
        wrapperStyle.top = addUnit(offset * 2);
      } else {
        wrapperStyle.bottom = addUnit(offset * 2);
      }

      return wrapperStyle;
    });
  }, [currentIndex, direction, windowHeight, zIndex]);
  var ResetChildren = useMemo(function () {
    var res = [];

    if (others.children && Array.isArray(others.children)) {
      var _context68;

      _forEachInstanceProperty(_context68 = others.children).call(_context68, function (child, index) {
        res.push( /*#__PURE__*/cloneElement(child, {
          key: index,
          setChildrenInstance: setChildrenInstance,
          index: index,
          parentInstance: {
            overlay: overlay,
            duration: duration,
            activeColor: activeColor,
            closeOnClickOverlay: closeOnClickOverlay,
            direction: direction,
            getChildWrapperStyle: getChildWrapperStyle,
            updateItemListData: updateItemListData
          }
        }));
      });
    }

    return res;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [others.children]);
  var toggleItem = useCallback(function (active) {
    var _context69;

    _forEachInstanceProperty(_context69 = childrenInstance.current).call(_context69, function (item, index) {
      var showPopup = item.showPopup;

      if (index === Number(active)) {
        item.toggle();
      } else if (showPopup) {
        item.toggle(false, {
          immediate: true
        });
      }
    });
  }, []);
  return jsxRuntime.exports.jsxs(View, _Object$assign({
    className: _concatInstanceProperty(_context70 = "van-dropdown-menu van-dropdown-menu".concat(currentIndex, " van-dropdown-menu--top-bottom  ")).call(_context70, className),
    style: style([style$1, {
      position: 'relative'
    }])
  }, {
    children: [_mapInstanceProperty(itemListData).call(itemListData, function (item, index) {
      return jsxRuntime.exports.jsx(View, _Object$assign({
        "data-index": index,
        className: bem('dropdown-menu__item', {
          disabled: item.disabled
        }),
        onClick: onTitleTap
      }, {
        children: jsxRuntime.exports.jsx(View, _Object$assign({
          className: item.titleClass + ' ' + bem('dropdown-menu__title', {
            active: item.showPopup,
            down: item.showPopup === (direction === 'down')
          }),
          style: item.showPopup ? 'color:' + activeColor : ''
        }, {
          children: jsxRuntime.exports.jsx(View, _Object$assign({
            className: "van-ellipsis"
          }, {
            children: displayTitle(item)
          }), void 0)
        }), void 0)
      }), item.index);
    }), ResetChildren]
  }), void 0);
}

function Index$i(props) {
  var value = props.value,
      popupStyle = props.popupStyle,
      direction = props.direction,
      _props$disabled6 = props.disabled,
      disabled = _props$disabled6 === void 0 ? false : _props$disabled6,
      duration = props.duration,
      closeOnClickOverlay = props.closeOnClickOverlay,
      activeColor = props.activeColor,
      setChildrenInstance = props.setChildrenInstance,
      parentInstance = props.parentInstance,
      index = props.index,
      _props$onOpen = props.onOpen,
      onOpen = _props$onOpen === void 0 ? function () {} : _props$onOpen,
      _props$onOpened = props.onOpened,
      onOpened = _props$onOpened === void 0 ? function () {} : _props$onOpened,
      _props$onClose = props.onClose,
      onClose = _props$onClose === void 0 ? function () {} : _props$onClose,
      _props$onClosed = props.onClosed,
      onClosed = _props$onClosed === void 0 ? function () {} : _props$onClosed,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      _props$className2 = props.className,
      className = _props$className2 === void 0 ? '' : _props$className2,
      style$1 = props.style,
      others = __rest(props, ["value", "popupStyle", "direction", "disabled", "duration", "closeOnClickOverlay", "activeColor", "setChildrenInstance", "parentInstance", "index", "onOpen", "onOpened", "onClose", "onClosed", "onChange", "options", "className", "style"]);

  var _useState105 = useState({}),
      _useState106 = _slicedToArray(_useState105, 2),
      parentState = _useState106[0],
      setParentState = _useState106[1];

  var _useState107 = useState(true),
      _useState108 = _slicedToArray(_useState107, 2),
      transition = _useState108[0],
      setTransition = _useState108[1];

  var _useState109 = useState(false),
      _useState110 = _slicedToArray(_useState109, 2),
      showPopup = _useState110[0],
      setShowPopup = _useState110[1];

  var _useState111 = useState(true),
      _useState112 = _slicedToArray(_useState111, 2),
      showWrapper = _useState112[0],
      setShowWrapper = _useState112[1];

  var _useState113 = useState(''),
      _useState114 = _slicedToArray(_useState113, 2),
      displayTitle = _useState114[0],
      setDisplayTitle = _useState114[1];

  var _useState115 = useState(''),
      _useState116 = _slicedToArray(_useState115, 2),
      value_ = _useState116[0],
      setValue = _useState116[1];

  useEffect(function () {
    setValue(value);
  }, [value]);
  var updateDataFromParent = useCallback(function () {
    var overlay = parentInstance.overlay,
        duration = parentInstance.duration,
        activeColor = parentInstance.activeColor,
        closeOnClickOverlay = parentInstance.closeOnClickOverlay,
        direction = parentInstance.direction;
    setParentState({
      overlay: overlay,
      duration: duration,
      activeColor: activeColor,
      closeOnClickOverlay: closeOnClickOverlay,
      direction: direction
    });
  }, [parentInstance]);
  var rerender = useCallback(function () {
    Taro.nextTick(function () {
      if (parentInstance) {
        parentInstance.updateItemListData();
      }
    });
  }, [parentInstance]);
  var toggle = useCallback(function (show) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof show !== 'boolean') {
      show = !showPopup;
    }

    if (show === showPopup) {
      return;
    }

    setTransition(!options.immediate);
    setShowPopup(show);

    if (show) {
      !parentInstance ? void 0 : parentInstance.getChildWrapperStyle().then(function (wrapperStyle) {
        if (wrapperStyle) {
          wrapperStyle.width = '100vw';
          wrapperStyle.height = '100vh';
        }

        setParentState(_Object$assign(_Object$assign({}, parentState), {
          wrapperStyle: wrapperStyle
        }));
        setShowWrapper(true);
        rerender();
      });
    } else {
      rerender();
    }
  }, [showPopup, parentInstance, parentState, rerender]);
  useEffect(function () {
    setChildrenInstance(index, {
      updateDataFromParent: updateDataFromParent,
      disabled: disabled,
      transition: transition,
      showPopup: showPopup,
      index: index,
      setDisplayTitle: setDisplayTitle,
      displayTitle: displayTitle,
      options: options,
      value: value_,
      toggle: toggle
    });
  }, [index, setChildrenInstance, disabled, transition, showPopup, setDisplayTitle, displayTitle, options, value_, toggle, updateDataFromParent]);
  useEffect(function () {
    updateDataFromParent();
  }, [updateDataFromParent]);
  var onClosed_ = useCallback(function () {
    if (onClosed) onClosed();
    setShowWrapper(false);
  }, [onClosed]);

  var onOptionTap = function onOptionTap(_event, option) {
    var shouldEmitChange = value_ !== option.value;
    setShowPopup(false);
    setValue(option.value);
    if (onClose) onClose();
    rerender();

    if (shouldEmitChange) {
      onChange();
    }
  };

  return showWrapper && jsxRuntime.exports.jsx(View, _Object$assign({
    className: bem('dropdown-item', direction) + ' ' + className,
    style: style([parentState.wrapperStyle, style$1])
  }, {
    children: jsxRuntime.exports.jsx(Index$W, _Object$assign({
      show: showPopup,
      style: style([{
        position: 'absolute'
      }, popupStyle]),
      overlayStyle: "position: absolute;",
      overlay: !!parentInstance.overlay,
      position: direction !== 'down' ? 'top' : 'bottom',
      duration: transition ? duration : 0,
      closeOnClickOverlay: closeOnClickOverlay,
      onEnter: onOpen,
      onLeave: onClose,
      onClose: toggle,
      onAfterEnter: onOpened,
      onAfterLeave: onClosed_
    }, {
      children: jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
        children: [_mapInstanceProperty(options).call(options, function (item, index) {
          return jsxRuntime.exports.jsx(Index$K, _Object$assign({
            "data-option": item,
            className: bem('dropdown-item__option', {
              active: item.value === value_
            }),
            clickable: true,
            icon: item.icon,
            onClick: function onClick(e) {
              return onOptionTap(e, item);
            },
            renderTitle: jsxRuntime.exports.jsx(Block, {
              children: jsxRuntime.exports.jsx(View, _Object$assign({
                className: "van-dropdown-item__title",
                style: item.value === value_ ? 'color:' + activeColor : ''
              }, {
                children: item.text
              }), void 0)
            }, void 0)
          }, {
            children: item.value === value_ && jsxRuntime.exports.jsx(Index$$, {
              name: "success",
              className: "van-dropdown-item__icon",
              color: activeColor
            }, void 0)
          }), "".concat(index, "VanCell"));
        }), others.children]
      }, void 0)
    }), void 0)
  }), void 0);
}

function parseTabList(children) {
  var _context71, _context72;

  return _filterInstanceProperty(_context71 = _mapInstanceProperty(_context72 = _default(children)).call(_context72, function (node) {
    if ( /*#__PURE__*/isValidElement(node)) {
      var key = node.key !== undefined ? String(node.key) : undefined;
      return _Object$assign(_Object$assign({
        key: key
      }, node.props), {
        node: node
      });
    }

    return null;
  })).call(_context71, function (tab) {
    return tab;
  });
}

function Index$h(props) {
  var _props$safeAreaInsetB4 = props.safeAreaInsetBottom,
      safeAreaInsetBottom = _props$safeAreaInsetB4 === void 0 ? true : _props$safeAreaInsetB4,
      style = props.style,
      children = props.children,
      className = props.className,
      others = __rest(props, ["safeAreaInsetBottom", "style", "children", "className"]);

  var tabs = parseTabList(children);

  var newChildren = _mapInstanceProperty(tabs).call(tabs, function (tab, index) {
    var _a, _b, _c, _d, _e, _f, _g, _h;

    var isGAB = ((_b = (_a = tab.node) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.displayName) === 'GoodsActionButton';
    var preIsGAB = ((_e = (_d = (_c = tabs[index - 1]) === null || _c === void 0 ? void 0 : _c.node) === null || _d === void 0 ? void 0 : _d.type) === null || _e === void 0 ? void 0 : _e.displayName) === 'GoodsActionButton';
    var nextIsGAB = ((_h = (_g = (_f = tabs[index + 1]) === null || _f === void 0 ? void 0 : _f.node) === null || _g === void 0 ? void 0 : _g.type) === null || _h === void 0 ? void 0 : _h.displayName) === 'GoodsActionButton';
    return /*#__PURE__*/cloneElement(tab.node, {
      key: index,
      index: index,
      isFirst: !preIsGAB && isGAB,
      isLast: !nextIsGAB && isGAB
    });
  });

  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: 'custom-class ' + bem('goods-action', {
      safe: safeAreaInsetBottom
    }) + " ".concat(className || ''),
    style: style
  }, others, {
    children: newChildren
  }), void 0);
}

function Index$g(props) {
  var text = props.text,
      url = props.url,
      linkType = props.linkType,
      plain = props.plain,
      _props$type5 = props.type,
      type = _props$type5 === void 0 ? 'danger' : _props$type5,
      style = props.style,
      isFirst = props.isFirst,
      isLast = props.isLast,
      onClick = props.onClick,
      children = props.children,
      className = props.className,
      others = __rest(props, ["text", "url", "linkType", "plain", "type", "style", "isFirst", "isLast", "onClick", "children", "className"]);

  var _click = useCallback(function (event) {
    onClick === null || onClick === void 0 ? void 0 : onClick(event);
    if (url && linkType) jumpLink(url, linkType);
  }, [linkType, onClick, url]);

  return jsxRuntime.exports.jsxs(Index$16, _Object$assign({
    type: type,
    plain: plain,
    className: bem('goods-action-button', [type, {
      first: isFirst,
      last: isLast,
      plain: plain
    }]) + " van-goods-action-button__inner ".concat(className || ''),
    style: style,
    onClick: _click
  }, others, {
    children: [text, children]
  }), void 0);
}

Index$g.displayName = 'GoodsActionButton';

function Index$f(props) {
  var text = props.text,
      url = props.url,
      linkType = props.linkType,
      dot = props.dot,
      info = props.info,
      icon = props.icon,
      style = props.style,
      onClick = props.onClick,
      renderIcon = props.renderIcon,
      className = props.className,
      others = __rest(props, ["text", "url", "linkType", "dot", "info", "icon", "style", "onClick", "renderIcon", "className"]);

  var _click = useCallback(function (event) {
    onClick === null || onClick === void 0 ? void 0 : onClick(event);
    if (url && linkType) jumpLink(url, linkType);
  }, [linkType, onClick, url]);

  return jsxRuntime.exports.jsxs(Index$16, _Object$assign({
    square: true,
    size: "large",
    className: "van-goods-action-icon ".concat(className),
    style: style,
    onClick: _click
  }, others, {
    children: [icon ? jsxRuntime.exports.jsx(Index$$, {
      name: icon,
      dot: dot,
      info: info,
      className: "van-goods-action-icon__icon icon-class"
    }, void 0) : renderIcon, jsxRuntime.exports.jsx(Text, _Object$assign({
      className: "text-class"
    }, {
      children: text
    }), void 0)]
  }), void 0);
}

var MIN_DISTANCE$1 = 10;

function getDirection$1(x, y) {
  if (x > y && x > MIN_DISTANCE$1) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE$1) {
    return 'vertical';
  }

  return '';
}

var currentIndex = 0;

function Index$e(props) {
  var range = props.range,
      disabled = props.disabled,
      activeColor = props.activeColor,
      inactiveColor = props.inactiveColor,
      _props$max2 = props.max,
      max = _props$max2 === void 0 ? 100 : _props$max2,
      _props$min2 = props.min,
      min = _props$min2 === void 0 ? 0 : _props$min2,
      _props$step2 = props.step,
      step = _props$step2 === void 0 ? 1 : _props$step2,
      _props$value5 = props.value,
      value = _props$value5 === void 0 ? 0 : _props$value5,
      barHeight = props.barHeight,
      _props$vertical = props.vertical,
      vertical = _props$vertical === void 0 ? false : _props$vertical,
      onDrag = props.onDrag,
      onChange = props.onChange,
      onDragStart = props.onDragStart,
      onDragEnd = props.onDragEnd,
      _props$className3 = props.className,
      className = _props$className3 === void 0 ? '' : _props$className3,
      renderButton = props.renderButton,
      renderLeftButton = props.renderLeftButton,
      renderRightButton = props.renderRightButton,
      others = __rest(props, ["range", "disabled", "activeColor", "inactiveColor", "max", "min", "step", "value", "barHeight", "vertical", "onDrag", "onChange", "onDragStart", "onDragEnd", "className", "renderButton", "renderLeftButton", "renderRightButton"]);

  var _useState117 = useState(),
      _useState118 = _slicedToArray(_useState117, 2),
      barStyle = _useState118[0],
      setBarStyle = _useState118[1];

  var _useState119 = useState(),
      _useState120 = _slicedToArray(_useState119, 2),
      wrapperStyle = _useState120[0],
      setWrapperStyle = _useState120[1];

  var _useState121 = useState(),
      _useState122 = _slicedToArray(_useState121, 2),
      value_ = _useState122[0],
      setValue = _useState122[1];

  var _useState123 = useState(),
      _useState124 = _slicedToArray(_useState123, 2),
      dragStatus = _useState124[0],
      setDragStatus = _useState124[1];

  var _useState125 = useState(),
      _useState126 = _slicedToArray(_useState125, 2),
      buttonIndex = _useState126[0],
      setButtonIndex = _useState126[1];

  var _useState127 = useState({}),
      _useState128 = _slicedToArray(_useState127, 2),
      touchState = _useState128[0],
      setTouchState = _useState128[1];

  var _useState129 = useState({}),
      _useState130 = _slicedToArray(_useState129, 2),
      newValue = _useState130[0],
      setNewValue = _useState130[1];

  var _useState131 = useState(),
      _useState132 = _slicedToArray(_useState131, 2),
      startValue = _useState132[0],
      setstartValue = _useState132[1];

  var _useState133 = useState(),
      _useState134 = _slicedToArray(_useState133, 2),
      currentIndex_ = _useState134[0],
      setCurrentIndex = _useState134[1];

  useEffect(function () {
    setCurrentIndex(currentIndex++);
  }, []);
  var resetTouchStatus = useCallback(function () {
    setTouchState(_Object$assign(_Object$assign({}, touchState), {
      direction: '',
      deltaX: 0,
      deltaY: 0,
      offsetX: 0,
      offsetY: 0
    }));
  }, [touchState]);
  var touchStart = useCallback(function (event) {
    resetTouchStatus();
    var touch = event.touches[0];
    setTouchState(_Object$assign(_Object$assign({}, touchState), {
      startX: touch.clientX,
      startY: touch.startY
    }));
  }, [touchState, resetTouchStatus]);
  var touchMove = useCallback(function (event) {
    resetTouchStatus();
    var touch = event.touches[0];

    var newTouchState = _Object$assign(_Object$assign({}, touchState), {
      direction: touchState.direction || getDirection$1(touchState.offsetX, touchState.offsetY),
      deltaX: touch.clientX - (touchState.startX || 0),
      deltaY: touch.clientY - (touchState.startY || 0),
      offsetX: Math.abs(touchState.deltaX),
      offsetY: Math.abs(touchState.deltaY)
    });

    setTouchState(newTouchState);
    return newTouchState;
  }, [touchState, resetTouchStatus]);
  var isRange = useCallback(function (value) {
    return range && Array.isArray(value);
  }, [range]);
  var getScope = useCallback(function (max, min) {
    return Number(max) - Number(min);
  }, []);
  var calcMainAxis = useCallback(function (value_) {
    var scope = getScope(max, min);

    if (isRange(value_)) {
      return "".concat((value_[1] - value_[0]) * 100 / scope, "%");
    }

    return "".concat((value_ - Number(min)) * 100 / scope, "%");
  }, [getScope, isRange, max, min]);
  var calcOffset = useCallback(function (value_) {
    var scope = getScope(max, min);

    if (isRange(value_)) {
      return (value_[0] - Number(min)) * 100 / scope + '%';
    }

    return '0%';
  }, [getScope, isRange, max, min]);
  var format = useCallback(function (value) {
    return Math.round(Math.max(min, Math.min(value, max)) / step) * step;
  }, [max, min, step]);
  var handleOverlap = useCallback(function (value) {
    if (value[0] > value[1]) {
      var _context73;

      return _reverseInstanceProperty(_context73 = _sliceInstanceProperty(value).call(value, 0)).call(_context73);
    }

    return value;
  }, []);
  var updateValue = useCallback(function (value, end, drag) {
    var _styleBar;

    if (isRange(value)) {
      var _context74;

      value = _mapInstanceProperty(_context74 = handleOverlap(value)).call(_context74, function (val) {
        return format(val);
      });
    } else {
      value = format(value);
    }

    var mainAxis = vertical ? 'height' : 'width';
    setValue(value);
    setWrapperStyle(_defineProperty({
      background: inactiveColor || ''
    }, vertical ? 'width' : 'height', addUnit(barHeight) || ''));
    var styleBar = (_styleBar = {}, _defineProperty(_styleBar, mainAxis, calcMainAxis(value)), _defineProperty(_styleBar, "left", vertical ? 0 : calcOffset(value)), _defineProperty(_styleBar, "top", vertical ? calcOffset(value) : 0), _styleBar);
    if (drag) styleBar.transition = 'none';
    setBarStyle(styleBar);

    if (drag && onDrag) {
      onDrag({
        detail: {
          value: value
        }
      });
    }

    if (end && onChange) {
      onChange({
        detail: value
      });
    }

    if ((drag || end) && canIUseModel()) {
      setValue(value);
    }
  }, [calcMainAxis, format, handleOverlap, isRange, onChange, onDrag, barHeight, calcOffset, inactiveColor, vertical]);
  useEffect(function () {
    setValue(value);
    updateValue(value);
  }, [value, updateValue]);

  var _onTouchStart2 = useCallback(function (event, index) {
    if (disabled) return;

    if (typeof index === 'number') {
      setButtonIndex(index || 0);
    }

    touchStart(event);
    setstartValue(format(value_));
    setNewValue(value_);

    if (isRange(value_)) {
      setstartValue(_mapInstanceProperty(value_).call(value_, function (val) {
        return format(val);
      }));
    } else {
      setstartValue(format(value_));
    }

    setDragStatus('start');
  }, [disabled, format, isRange, touchStart, value_]);

  var getRange = useCallback(function () {
    return max - min;
  }, [max, min]);
  var onTouchMove = useCallback(function (event) {
    event.preventDefault();
    if (disabled) return;

    if (dragStatus === 'start') {
      if (onDragStart) onDragStart();
    }

    var touchState = touchMove(event);
    setDragStatus('draging');
    getRect(null, ".van-slider".concat(currentIndex_)).then(function (rect) {
      var diff = touchState.deltaX / rect.width * getRange();

      if (isRange(startValue)) {
        newValue[buttonIndex] = startValue[buttonIndex] + diff;
        setNewValue(newValue);
      } else {
        var newValue_ = newValue;
        newValue_ = (startValue || 0) + diff;
        setNewValue(newValue_);
      }

      updateValue(newValue, false, true);
    });
  }, [buttonIndex, disabled, dragStatus, getRange, isRange, newValue, onDragStart, startValue, touchMove, updateValue, currentIndex_]);
  var onTouchEnd = useCallback(function () {
    if (disabled) return;

    if (dragStatus === 'draging') {
      updateValue(newValue, true);
      if (onDragEnd) onDragEnd();
    }
  }, [disabled, dragStatus, newValue, onDragEnd, updateValue]);
  var onClick = useCallback(function (event) {
    if (disabled) return;
    getRect(null, ".van-slider".concat(currentIndex_, " ")).then(function (rect) {
      var value = (event.target.x - rect.left) / rect.width * getRange() + min;

      if (isRange(value_)) {
        var _value_ = _slicedToArray(value_, 2),
            left = _value_[0],
            right = _value_[1];

        var middle = (left + right) / 2;

        if (value <= middle) {
          updateValue([value, right], true);
        } else {
          updateValue([left, value], true);
        }
      } else {
        updateValue(value, true);
      }
    });
  }, [disabled, getRange, isRange, min, updateValue, value_, currentIndex_]);
  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: 'custom-class ' + bem('slider', {
      disabled: disabled,
      vertical: vertical
    }) + " van-slider".concat(currentIndex_, " ") + className,
    style: style([wrapperStyle, style]),
    onClick: onClick
  }, others, {
    children: jsxRuntime.exports.jsxs(View, _Object$assign({
      className: bem('slider__bar'),
      style: style(_Object$assign(_Object$assign({}, barStyle), {
        backgroundColor: activeColor
      }))
    }, {
      children: [range && jsxRuntime.exports.jsx(View, _Object$assign({
        className: bem('slider__button-wrapper-left'),
        onTouchStart: function onTouchStart(e) {
          return _onTouchStart2(e, 0);
        },
        onTouchMove: onTouchMove,
        onTouchEnd: onTouchEnd,
        onTouchCancel: onTouchEnd
      }, {
        children: renderButton ? renderLeftButton ? renderLeftButton(value_) : '' : jsxRuntime.exports.jsx(View, {
          className: bem('slider__button')
        }, void 0)
      }), void 0), range && jsxRuntime.exports.jsx(View, _Object$assign({
        className: bem('slider__button-wrapper-right'),
        onTouchStart: function onTouchStart(e) {
          return _onTouchStart2(e, 1);
        },
        onTouchMove: onTouchMove,
        onTouchEnd: onTouchEnd,
        onTouchCancel: onTouchEnd
      }, {
        children: renderButton ? renderRightButton ? renderRightButton(value_) : '' : jsxRuntime.exports.jsx(View, {
          className: bem('slider__button')
        }, void 0)
      }), void 0), !range && jsxRuntime.exports.jsx(View, _Object$assign({
        className: bem('slider__button-wrapper'),
        onTouchStart: _onTouchStart2,
        onTouchMove: onTouchMove,
        onTouchEnd: onTouchEnd,
        onTouchCancel: onTouchEnd
      }, {
        children: renderButton ? renderButton(value_) : jsxRuntime.exports.jsx(View, {
          className: bem('slider__button')
        }, void 0)
      }), void 0)]
    }), void 0)
  }), void 0);
}

function Index$d(props) {
  var activeKey = props.activeKey,
      onChange = props.onChange,
      className = props.className,
      children = props.children,
      style$1 = props.style,
      others = __rest(props, ["activeKey", "onChange", "className", "children", "style"]);

  var childrenInstance = useRef([]);
  var setAction = useCallback(function (activeKey) {
    var childrenInstance_ = childrenInstance.current;

    if (!childrenInstance_ || !childrenInstance_.length) {
      return _Promise.resolve();
    } // setcurrentActive(activeKey)


    _forEachInstanceProperty(childrenInstance_).call(childrenInstance_, function (item) {
      item.setActive(false);
    });

    if (childrenInstance_[activeKey]) {
      childrenInstance_[activeKey].setActive(true);
    }

    return _Promise.resolve();
  }, []);
  useEffect(function () {
    setAction(activeKey);
  }, [setAction, activeKey]);
  var setChildren = useCallback(function (index, instance) {
    childrenInstance.current[index] = instance;
  }, []);
  var ResetChildren = useMemo(function () {
    var res = [];

    if (children && Array.isArray(children)) {
      _forEachInstanceProperty(children).call(children, function (child, index) {
        res.push( /*#__PURE__*/cloneElement(child, {
          key: index,
          setChildren: setChildren,
          index: index,
          setAction: setAction,
          onChange: onChange
        }));
      });
    }

    return res;
  }, [children, onChange, setAction, setChildren]);
  return jsxRuntime.exports.jsx(View, _Object$assign({
    style: style([style$1]),
    className: "van-sidebar custom-class ".concat(className)
  }, others, {
    children: ResetChildren
  }), void 0);
}

function Index$c(props) {
  var dot = props.dot,
      badge = props.badge,
      index = props.index,
      renderTitle = props.renderTitle,
      setChildren = props.setChildren,
      setAction = props.setAction,
      onClick = props.onClick,
      onChange = props.onChange,
      info = props.info,
      title = props.title,
      disabled = props.disabled,
      className = props.className,
      style$1 = props.style,
      others = __rest(props, ["dot", "badge", "index", "renderTitle", "setChildren", "setAction", "onClick", "onChange", "info", "title", "disabled", "className", "style"]);

  var _useState135 = useState(),
      _useState136 = _slicedToArray(_useState135, 2),
      selected = _useState136[0],
      setselected = _useState136[1];

  var setActive = useCallback(function (selected) {
    return setselected(selected);
  }, []);
  useEffect(function () {
    setChildren === null || setChildren === void 0 ? void 0 : setChildren(index, {
      setActive: setActive,
      selected: selected
    });
  }, [setActive, index, setChildren, selected]);
  var onClick_ = useCallback(function () {
    if (disabled) return;
    setAction(index).then(function () {
      onChange === null || onChange === void 0 ? void 0 : onChange({
        detail: index
      });
      onClick === null || onClick === void 0 ? void 0 : onClick(index);
    });
  }, [disabled, index, onChange, onClick, setAction]);
  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: bem('sidebar-item', {
      selected: selected,
      disabled: disabled
    }) + ' ' + (selected ? 'active-class' : '') + ' ' + (disabled ? 'disabled-class' : '') + ' custom-class' + ' ' + className,
    hoverClass: "van-sidebar-item--hover",
    hoverStayTime: 70,
    onClick: onClick_,
    style: style([style$1])
  }, others, {
    children: jsxRuntime.exports.jsxs(View, _Object$assign({
      className: "van-sidebar-item__text"
    }, {
      children: [(badge != null || info !== null || dot) && jsxRuntime.exports.jsx(Index$10, {
        dot: dot,
        info: badge != null ? badge : info
      }, void 0), title ? jsxRuntime.exports.jsx(View, {
        children: title
      }, void 0) : renderTitle]
    }), void 0)
  }), void 0);
}

var currentYear = new Date().getFullYear();

function isValidDate(date) {
  return isDef(date) && !isNaN(new Date(date).getTime());
}

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

function padZero(val) {
  var _context75;

  return _sliceInstanceProperty(_context75 = "00".concat(val)).call(_context75, -2);
}

function times(n, iteratee) {
  var index = -1;
  var result = Array(n < 0 ? 0 : n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

function getTrueValue(formattedValue) {
  if (formattedValue === undefined) {
    formattedValue = '1';
  }

  while (isNaN(_parseInt(formattedValue, 10))) {
    formattedValue = _sliceInstanceProperty(formattedValue).call(formattedValue, 1);
  }

  return _parseInt(formattedValue, 10);
}

function getMonthEndDay$1(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}

var defaultFormatter = function defaultFormatter(_type, value) {
  return value;
};

function diff(obj1, obj2) {
  var keys1 = _Object$keys(obj1);

  var keys2 = _Object$keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (var key in obj1) {
      if (!obj2.hasOwnProperty(key)) {
        return false;
      } //????????????


      if (_typeof(obj1[key]) === _typeof(obj2[key])) {
        //??????????????????
        if (_typeof(obj1[key]) === 'object' && _typeof(obj2[key]) === 'object') {
          var _equal = diff(obj1[key], obj2[key]);

          if (!_equal) {
            return false;
          }
        } //????????????????????????


        if (_typeof(obj1[key]) !== 'object' && _typeof(obj2[key]) !== 'object' && obj1[key] !== obj2[key]) {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  return true;
}

function Index$b(props) {
  var _props$value6 = props.value,
      value = _props$value6 === void 0 ? null : _props$value6,
      filter = _filterInstanceProperty(props),
      _props$type6 = props.type,
      type = _props$type6 === void 0 ? 'datetime' : _props$type6,
      _props$showToolbar2 = props.showToolbar,
      showToolbar = _props$showToolbar2 === void 0 ? true : _props$showToolbar2,
      _props$formatter = props.formatter,
      formatter = _props$formatter === void 0 ? defaultFormatter : _props$formatter,
      _props$minDate = props.minDate,
      minDate = _props$minDate === void 0 ? new Date(currentYear - 10, 0, 1).getTime() : _props$minDate,
      _props$maxDate = props.maxDate,
      maxDate = _props$maxDate === void 0 ? new Date(currentYear + 10, 11, 31).getTime() : _props$maxDate,
      _props$minHour = props.minHour,
      minHour = _props$minHour === void 0 ? 0 : _props$minHour,
      _props$maxHour = props.maxHour,
      maxHour = _props$maxHour === void 0 ? 23 : _props$maxHour,
      _props$minMinute = props.minMinute,
      minMinute = _props$minMinute === void 0 ? 0 : _props$minMinute,
      _props$maxMinute = props.maxMinute,
      maxMinute = _props$maxMinute === void 0 ? 59 : _props$maxMinute,
      title = props.title,
      itemHeight = props.itemHeight,
      visibleItemCount = props.visibleItemCount,
      confirmButtonText = props.confirmButtonText,
      cancelButtonText = props.cancelButtonText,
      onInput = props.onInput,
      onChange = props.onChange,
      onCancel = props.onCancel,
      onConfirm = props.onConfirm,
      others = __rest(props, ["value", "filter", "type", "showToolbar", "formatter", "minDate", "maxDate", "minHour", "maxHour", "minMinute", "maxMinute", "title", "itemHeight", "visibleItemCount", "confirmButtonText", "cancelButtonText", "onInput", "onChange", "onCancel", "onConfirm"]);

  var PickRef = useRef(null);

  var _useState137 = useState(Date.now()),
      _useState138 = _slicedToArray(_useState137, 2),
      innerValue = _useState138[0],
      setInnerValue = _useState138[1];

  var _useState139 = useState([]),
      _useState140 = _slicedToArray(_useState139, 2),
      columns = _useState140[0],
      setColumns = _useState140[1];

  var minHour_ = minHour;
  var maxHour_ = maxHour;
  var minMinute_ = minMinute;
  var maxMinute_ = maxMinute;
  var getPicker = useCallback(function () {
    if (PickRef.current) {
      var setColumnValues = PickRef.current.setColumnValues;

      PickRef.current.setColumnValues = function () {
        var _context76;

        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        return setColumnValues.apply(PickRef.current, _concatInstanceProperty(_context76 = []).call(_context76, args, [false]));
      };
    }

    return PickRef.current;
  }, []);
  var getBoundary = useCallback(function (type, innerValue) {
    var _ref17;

    var value = new Date(innerValue); // const boundary = new Date(data[`${type}Date`])

    var boundary = new Date();
    var year = boundary.getFullYear() - 5;
    var month = 1;
    var date = 1;
    var hour = 0;
    var minute = 0;

    if (type === 'max') {
      month = 12;
      date = getMonthEndDay$1(value.getFullYear(), value.getMonth() + 1);
      hour = 23;
      minute = 59;
      year = year + 10;
    } // if (value.getFullYear() === year) {
    //   month = boundary.getMonth() + 1
    //   if (value.getMonth() + 1 === month) {
    //     date = boundary.getDate()
    //     if (value.getDate() === date) {
    //       hour = boundary.getHours()
    //       if (value.getHours() === hour) {
    //         minute = boundary.getMinutes()
    //       }
    //     }
    //   }
    // }


    return _ref17 = {}, _defineProperty(_ref17, "".concat(type, "Year"), year), _defineProperty(_ref17, "".concat(type, "Month"), month), _defineProperty(_ref17, "".concat(type, "Date"), date), _defineProperty(_ref17, "".concat(type, "Hour"), hour), _defineProperty(_ref17, "".concat(type, "Minute"), minute), _ref17;
  }, []);
  var getRanges = useCallback(function () {
    var res = [{
      type: 'hour',
      range: [minHour_, maxHour_]
    }, {
      type: 'minute',
      range: [minMinute_, maxMinute_]
    }];

    if (type === 'time') {
      return res;
    }

    var _getBoundary = getBoundary('max', innerValue),
        maxYear = _getBoundary.maxYear,
        maxDate = _getBoundary.maxDate,
        maxMonth = _getBoundary.maxMonth,
        maxHour = _getBoundary.maxHour,
        maxMinute = _getBoundary.maxMinute;

    var _getBoundary2 = getBoundary('min', innerValue),
        minYear = _getBoundary2.minYear,
        minDate = _getBoundary2.minDate,
        minMonth = _getBoundary2.minMonth,
        minHour = _getBoundary2.minHour,
        minMinute = _getBoundary2.minMinute;

    var result = [{
      type: 'year',
      range: [minYear, maxYear]
    }, {
      type: 'month',
      range: [minMonth, maxMonth]
    }, {
      type: 'day',
      range: [minDate, maxDate]
    }, {
      type: 'hour',
      range: [minHour, maxHour]
    }, {
      type: 'minute',
      range: [minMinute, maxMinute]
    }];
    if (type === 'date') _spliceInstanceProperty(result).call(result, 3, 2);
    if (type === 'year-month') _spliceInstanceProperty(result).call(result, 2, 3);
    return result;
  }, [getBoundary, innerValue, maxHour_, maxMinute_, minHour_, minMinute_, type]);
  var getOriginColumns = useCallback(function () {
    var _context77;

    var results = _mapInstanceProperty(_context77 = getRanges()).call(_context77, function (_ref18) {
      var type = _ref18.type,
          range = _ref18.range;
      var values = times(range[1] - range[0] + 1, function (index) {
        var value = range[0] + index;
        return type === 'year' ? "".concat(value) : padZero(value);
      });

      if (filter) {
        values = filter(type, values);
      }

      return {
        type: type,
        values: values
      };
    });

    return results;
  }, [filter, getRanges]);
  var updateColumns = useCallback(function () {
    var _context78;

    var results = _mapInstanceProperty(_context78 = getOriginColumns()).call(_context78, function (column) {
      var _context79;

      return {
        values: _mapInstanceProperty(_context79 = _valuesInstanceProperty(column)).call(_context79, function (value) {
          return formatter(column.type, value);
        })
      };
    });

    if (!diff(results, columns)) {
      return setColumns(results);
    }
  }, [columns, formatter, getOriginColumns]);
  var updateColumnValue = useCallback(function (value) {
    var values = [];
    var picker = getPicker();

    if (type === 'time') {
      var pair = value.split(':');
      values = [formatter('hour', pair[0]), formatter('minute', pair[1])];
    } else {
      var date = new Date(value);
      values = [formatter('year', "".concat(date.getFullYear())), formatter('month', padZero(date.getMonth() + 1))];

      if (type === 'date') {
        values.push(formatter('day', padZero(date.getDate())));
      }

      if (type === 'datetime') {
        values.push(formatter('day', padZero(date.getDate())), formatter('hour', padZero(date.getHours())), formatter('minute', padZero(date.getMinutes())));
      }
    }

    setInnerValue(value);
    updateColumns();
    return new _Promise(function (resolve) {
      setTimeout(function () {
        picker.setValues(values);
        resolve(value);
      }, 6);
    });
  }, [formatter, getPicker, type, updateColumns]);
  var correctValue = useCallback(function (value) {
    // validate value
    var isDateType = type !== 'time';

    if (isDateType && !isValidDate(value)) {
      value = minDate;
    } else if (!isDateType && !value) {
      value = "".concat(padZero(minHour), ":00");
    } // time type


    if (!isDateType) {
      var _context80;

      var _value$split = value.split(':'),
          _value$split2 = _slicedToArray(_value$split, 2),
          hour = _value$split2[0],
          minute = _value$split2[1];

      hour = padZero(range(hour, minHour, maxHour));
      minute = padZero(range(minute, minMinute, maxMinute));
      return _concatInstanceProperty(_context80 = "".concat(hour, ":")).call(_context80, minute);
    } // date type


    value = Math.max(value, minDate);
    value = Math.min(value, maxDate);
    return value;
  }, [maxDate, maxHour, maxMinute, minDate, minHour, minMinute, type]);
  useEffect(function () {
    var val = correctValue(value);
    var isEqual = val === innerValue;

    if (!isEqual) {
      updateColumnValue(val).then(function () {
        if (onInput) onInput({
          detail: val,
          currentTarget: {
            dataset: {
              type: type
            }
          }
        });
      });
    }
  }, [correctValue, innerValue, onInput, updateColumnValue, value, type]);

  var onChange_ = function onChange_() {
    var value;
    var picker = getPicker();
    var originColumns = getOriginColumns();

    if (type === 'time') {
      var _context81;

      var indexes = picker.getIndexes();
      value = _concatInstanceProperty(_context81 = "".concat(+_valuesInstanceProperty(originColumns[0])[indexes[0]], ":")).call(_context81, +_valuesInstanceProperty(originColumns[1])[indexes[1]]);
    } else {
      var _indexes = picker.getIndexes();

      var values = _mapInstanceProperty(_indexes).call(_indexes, function (value, index) {
        return _valuesInstanceProperty(originColumns[index])[value];
      });

      var year = getTrueValue(values[0]);
      var month = getTrueValue(values[1]);

      var _maxDate = getMonthEndDay$1(year, month);

      var date = getTrueValue(values[2]);

      if (type === 'year-month') {
        date = 1;
      }

      date = date > _maxDate ? _maxDate : date;
      var hour = 0;
      var minute = 0;

      if (type === 'datetime') {
        hour = getTrueValue(values[3]);
        minute = getTrueValue(values[4]);
      }

      value = new Date(year, month - 1, date, hour, minute);
    }

    value = correctValue(value);
    updateColumnValue(value).then(function () {
      if (onInput) onInput({
        detail: value,
        currentTarget: {
          dataset: {
            type: type
          }
        }
      });

      if (onChange) {
        var _e2 = {
          detail: {
            datetimePicker: {
              columns: columns,
              setColumns: setColumns,
              innerValue: innerValue,
              updateColumnValue: updateColumnValue
            }
          }
        };
        onChange(_e2);
      }
    });
  };

  return jsxRuntime.exports.jsx(VanPicker, {
    ref: PickRef,
    className: "van-datetime-picker column-class ".concat(others.className || ''),
    style: style([others.style]),
    title: title,
    columns: columns,
    itemHeight: itemHeight,
    showToolbar: showToolbar,
    visibleItemCount: visibleItemCount,
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText,
    onChange: onChange_,
    onConfirm: useCallback(function () {
      if (onConfirm) onConfirm(innerValue);
    }, [innerValue, onConfirm]),
    onCancel: onCancel
  }, void 0);
}

var PRESET_ICONS = ['qq', 'link', 'weibo', 'wechat', 'poster', 'qrcode', 'weapp-qrcode', 'wechat-moments'];

function getIconURL(icon) {
  if (_indexOfInstanceProperty(PRESET_ICONS).call(PRESET_ICONS, icon) !== -1) {
    return 'https://img.yzcdn.cn/vant/share-sheet-' + icon + '.png';
  }

  return icon;
}

function Index$a(props) {
  var showBorder = props.showBorder,
      onSelect = props.onSelect,
      options = props.options;
  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: bem('share-sheet__options', {
      border: showBorder
    })
  }, {
    children: _mapInstanceProperty(options).call(options, function (item, index) {
      return jsxRuntime.exports.jsxs(View, _Object$assign({
        className: "van-share-sheet__option",
        onClick: function onClick() {
          return onSelect === null || onSelect === void 0 ? void 0 : onSelect(item, index);
        }
      }, {
        children: [jsxRuntime.exports.jsx(Button, _Object$assign({
          className: "van-share-sheet__button",
          "open-type": item.openType || ''
        }, {
          children: jsxRuntime.exports.jsx(Image, {
            src: getIconURL(item.icon),
            className: "van-share-sheet__icon"
          }, void 0)
        }), void 0), item.name && jsxRuntime.exports.jsx(View, _Object$assign({
          className: "van-share-sheet__name"
        }, {
          children: item.name
        }), void 0), item.description && jsxRuntime.exports.jsx(View, _Object$assign({
          className: "van-share-sheet__option-description"
        }, {
          children: item.description
        }), void 0)]
      }), index);
    })
  }), void 0);
}

function isActive(activeList, itemId) {
  if (Array.isArray(activeList)) {
    return _indexOfInstanceProperty(activeList).call(activeList, itemId) > -1;
  }

  return activeList === itemId;
}

function Index$9(props) {
  var _props$items = props.items,
      items = _props$items === void 0 ? [] : _props$items,
      _props$selectedIcon = props.selectedIcon,
      selectedIcon = _props$selectedIcon === void 0 ? 'success' : _props$selectedIcon,
      _props$height = props.height,
      height = _props$height === void 0 ? 300 : _props$height,
      _props$mainActiveInde = props.mainActiveIndex,
      mainActiveIndex = _props$mainActiveInde === void 0 ? 0 : _props$mainActiveInde,
      activeId = props.activeId,
      _props$max3 = props.max,
      max = _props$max3 === void 0 ? Infinity : _props$max3,
      onClickItem = props.onClickItem,
      onClickNav = props.onClickNav,
      renderContent = props.renderContent;

  var _useState141 = useState([]),
      _useState142 = _slicedToArray(_useState141, 2),
      subItems = _useState142[0],
      setSubItems = _useState142[1];

  var _onSelectItem = useCallback(function (event, item) {
    var isArray = Array.isArray(activeId); // ?????????????????????????????????????????????

    var isOverMax = isArray && activeId.length >= max; // ??????????????????????????????, ???????????????????????????????????????????????????

    var isSelected = isArray ? _includesInstanceProperty(activeId).call(activeId, item.id) : activeId === item.id;

    if (!item.disabled && (!isOverMax || isSelected)) {
      Object.defineProperty(event, 'detail', {
        value: item
      });
      onClickItem === null || onClickItem === void 0 ? void 0 : onClickItem(event);
    }
  }, [activeId, max, onClickItem]);

  var _onClickNav = useCallback(function (_ref19) {
    var index = _ref19.detail;
    var item = items[index];

    if (!(item === null || item === void 0 ? void 0 : item.disabled)) {
      onClickNav === null || onClickNav === void 0 ? void 0 : onClickNav({
        detail: {
          index: index
        }
      });
    }
  }, [onClickNav, items]);

  useEffect(function () {
    var _ref20 = items[mainActiveIndex] || {},
        _ref20$children = _ref20.children,
        children = _ref20$children === void 0 ? [] : _ref20$children;

    setSubItems(children);
  }, [items, mainActiveIndex, setSubItems]);
  return jsxRuntime.exports.jsxs(View, _Object$assign({
    className: "van-tree-select",
    style: 'height: ' + addUnit$1(height)
  }, {
    children: [jsxRuntime.exports.jsx(ScrollView, _Object$assign({
      scrollY: true,
      className: "van-tree-select__nav"
    }, {
      children: jsxRuntime.exports.jsx(Index$d, _Object$assign({
        activeKey: mainActiveIndex,
        onChange: _onClickNav,
        className: "van-tree-select__nav__inner"
      }, {
        children: _mapInstanceProperty(items).call(items, function (item, index) {
          return jsxRuntime.exports.jsx(Index$c, {
            className: "main-item-class",
            // activeClass="main-active-class"
            // disabledClass="main-disabled-class"
            badge: item.badge,
            dot: item.dot,
            title: item.text,
            disabled: item.disabled
          }, index);
        })
      }), void 0)
    }), void 0), jsxRuntime.exports.jsxs(ScrollView, _Object$assign({
      scrollY: true,
      className: "van-tree-select__content"
    }, {
      children: [renderContent, _mapInstanceProperty(subItems).call(subItems, function (item) {
        return jsxRuntime.exports.jsxs(View, _Object$assign({
          className: 'van-ellipsis content-item-class ' + bem('tree-select__item', {
            active: isActive(activeId, item.id),
            disabled: item.disabled
          }) + ' ' + (isActive(activeId, item.id) ? 'content-active-class' : '') + ' ' + (item.disabled ? 'content-disabled-class' : ''),
          "data-item": item,
          onClick: function onClick(e) {
            _onSelectItem(e, item);
          }
        }, {
          children: [item.text, isActive(activeId, item.id) && jsxRuntime.exports.jsx(Index$$, {
            name: selectedIcon,
            size: "16px",
            className: "van-tree-select__selected"
          }, void 0)]
        }), item.id);
      })]
    }), void 0)]
  }), void 0);
}

function displayColumns(columns, columnsNum) {
  return _sliceInstanceProperty(columns).call(columns, 0, +columnsNum);
}

var EMPTY_CODE = '000000';

function Index$8(props, ref) {
  var value = props.value,
      areaList = props.areaList,
      _props$columnsNum = props.columnsNum,
      columnsNum = _props$columnsNum === void 0 ? 3 : _props$columnsNum,
      _props$columnsPlaceho = props.columnsPlaceholder,
      columnsPlaceholder = _props$columnsPlaceho === void 0 ? [] : _props$columnsPlaceho,
      onCancel = props.onCancel,
      onChange = props.onChange,
      onConfirm = props.onConfirm,
      title = props.title,
      loading = props.loading,
      itemHeight = props.itemHeight,
      _props$visibleItemCou3 = props.visibleItemCount,
      visibleItemCount = _props$visibleItemCou3 === void 0 ? 6 : _props$visibleItemCou3,
      _props$cancelButtonTe = props.cancelButtonText,
      cancelButtonText = _props$cancelButtonTe === void 0 ? '??????' : _props$cancelButtonTe,
      _props$confirmButtonT = props.confirmButtonText,
      confirmButtonText = _props$confirmButtonT === void 0 ? '??????' : _props$confirmButtonT,
      others = __rest(props, ["value", "areaList", "columnsNum", "columnsPlaceholder", "onCancel", "onChange", "onConfirm", "title", "loading", "itemHeight", "visibleItemCount", "cancelButtonText", "confirmButtonText"]);

  var pickerRef = useRef(null);
  var codeRef = useRef(''); // const [columns, setColumns] = useState<any[]>([
  //   { values: [] },
  //   { values: [] },
  //   { values: [] },
  // ])

  var columns = useMemo(function () {
    return [{
      values: []
    }, {
      values: []
    }, {
      values: []
    }];
  }, []);
  var typeToColumnsPlaceholderRef = useRef({}); // const [typeToColumnsPlaceholder, setTypeToColumnsPlaceholder] = useState<any>(
  //   {},
  // )

  var _parseValues = useCallback(function (values) {
    return _mapInstanceProperty(values).call(values, function (value, index) {
      if (value && (!value.code || value.name === columnsPlaceholder[index])) {
        return _Object$assign(_Object$assign({}, value), {
          code: '',
          name: ''
        });
      }

      return value;
    });
  }, [columnsPlaceholder]);

  var _getConfig = useCallback(function (type) {
    return areaList && areaList["".concat(type, "_list")] || {};
  }, [areaList]);

  var _getList = useCallback(function (type, code) {
    var _context82;

    var _b, _c;

    if (type !== 'province' && !code) {
      return [];
    } // console.log(typeToColumnsPlaceholder)


    var list = _getConfig(type);

    var result = _mapInstanceProperty(_context82 = _Object$keys(list)).call(_context82, function (code) {
      return {
        code: code,
        name: list[code]
      };
    });

    if (code != null) {
      // oversea code
      if (code[0] === '9' && type === 'city') {
        code = '9';
      }

      result = _filterInstanceProperty(result).call(result, function (item) {
        var _context83;

        return _indexOfInstanceProperty(_context83 = item.code).call(_context83, code) === 0;
      });
    }

    if (((_b = typeToColumnsPlaceholderRef.current) === null || _b === void 0 ? void 0 : _b[type]) && result.length) {
      var _context84;

      // set columns placeholder
      var codeFill = type === 'province' ? '' : type === 'city' ? _sliceInstanceProperty(EMPTY_CODE).call(EMPTY_CODE, 2, 4) : _sliceInstanceProperty(EMPTY_CODE).call(EMPTY_CODE, 4, 6);
      result.unshift({
        code: _concatInstanceProperty(_context84 = "".concat(code === undefined ? '' : code)).call(_context84, codeFill),
        name: (_c = typeToColumnsPlaceholderRef.current) === null || _c === void 0 ? void 0 : _c[type]
      });
    }

    return result;
  }, [_getConfig]);

  var _getIndex = useCallback(function (type, code) {
    var _b, _c;

    var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;

    var list = _getList(type, _sliceInstanceProperty(code).call(code, 0, compareNum - 2)); // oversea code


    if (code[0] === '9' && type === 'province') {
      compareNum = 1;
    }

    code = _sliceInstanceProperty(code).call(code, 0, compareNum);

    for (var i = 0; i < list.length; i++) {
      if (((_c = (_b = list === null || list === void 0 ? void 0 : list[i]) === null || _b === void 0 ? void 0 : _b.code) === null || _c === void 0 ? void 0 : _sliceInstanceProperty(_c).call(_c, 0, compareNum)) === code) {
        return i;
      }
    }

    return 0;
  }, [_getList]);

  var _getPicker = useCallback(function () {
    // console.log(picker)
    return pickerRef.current;
  }, []);

  var _onCancel = useCallback(function (event) {
    onCancel === null || onCancel === void 0 ? void 0 : onCancel(event);
  }, [onCancel]);

  var _onConfirm = useCallback(function (event) {
    var index = event.detail.index;
    var value = event.detail.value;
    value = _parseValues(value);
    onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm({
      detail: {
        value: value,
        index: index
      }
    });
  }, [_parseValues, onConfirm]);

  var _getDefaultCode = useCallback(function () {
    if (columnsPlaceholder.length) {
      return EMPTY_CODE;
    }

    var countyCodes = _Object$keys(_getConfig('county'));

    if (countyCodes[0]) {
      return countyCodes[0];
    }

    var cityCodes = _Object$keys(_getConfig('city'));

    if (cityCodes[0]) {
      return cityCodes[0];
    }

    return '';
  }, [_getConfig, columnsPlaceholder]);

  var _setValues = useCallback(function () {
    var _b;

    var picker = _getPicker();

    if (!picker) {
      return;
    }

    var code = (codeRef.current || _getDefaultCode()) + '';

    var provinceList = _getList('province');

    var cityList = _getList('city', _sliceInstanceProperty(code).call(code, 0, 2));

    var stack = [];
    var indexes = [];

    if (columnsNum >= 1) {
      stack.push(picker.setColumnValues(0, provinceList, false));
      indexes.push(_getIndex('province', code));
    }

    if (columnsNum >= 2) {
      stack.push(picker.setColumnValues(1, cityList, false));
      indexes.push(_getIndex('city', code));

      if (cityList.length && _sliceInstanceProperty(code).call(code, 2, 4) === '00') {
        // ;[{ code }] = cityList
        code = (_b = cityList === null || cityList === void 0 ? void 0 : cityList[0]) === null || _b === void 0 ? void 0 : _b.code;
      }
    }

    if (columnsNum === 3) {
      stack.push(picker.setColumnValues(2, _getList('county', _sliceInstanceProperty(code).call(code, 0, 4)), false));
      indexes.push(_getIndex('county', code));
    }

    return _Promise.all(stack).then(function () {
      return picker.setIndexes(indexes);
    }).catch(function () {});
  }, [_getDefaultCode, _getIndex, _getList, _getPicker, columnsNum]);

  var _onChange = useCallback(function (event) {
    var _a;

    var _event$detail = event.detail,
        index = _event$detail.index,
        value = _event$detail.value,
        picker = _event$detail.picker;
    codeRef.current = value[index].code;
    (_a = _setValues()) === null || _a === void 0 ? void 0 : _a.then(function () {
      var event_ = {
        detail: {
          picker: picker,
          values: _parseValues(picker.getValues()),
          index: index
        }
      };
      onChange === null || onChange === void 0 ? void 0 : onChange(event_);
    });
  }, [_parseValues, _setValues, onChange]);

  var _getValues = useCallback(function () {
    var _context85;

    var picker = _getPicker();

    if (!picker) {
      return [];
    }

    return _parseValues(_filterInstanceProperty(_context85 = picker.getValues()).call(_context85, function (value) {
      return !!value;
    }));
  }, [_getPicker, _parseValues]);

  var getDetail = useCallback(function () {
    var values = _getValues();

    var area = {
      code: '',
      country: '',
      province: '',
      city: '',
      county: ''
    };

    if (!values.length) {
      return area;
    }

    var names = _mapInstanceProperty(values).call(values, function (item) {
      return item.name;
    });

    area.code = values[values.length - 1].code;

    if (area.code[0] === '9') {
      area.country = names[1] || '';
      area.province = names[2] || '';
    } else {
      area.province = names[0] || '';
      area.city = names[1] || '';
      area.county = names[2] || '';
    }

    return area;
  }, [_getValues]);
  var reset = useCallback(function (code) {
    codeRef.current = code || '';
    return _setValues();
  }, [_setValues]);
  useEffect(function () {
    typeToColumnsPlaceholderRef.current = {
      province: columnsPlaceholder[0] || '',
      city: columnsPlaceholder[1] || '',
      county: columnsPlaceholder[2] || ''
    };
  }, [columnsPlaceholder]);
  useEffect(function () {
    codeRef.current = value;
  }, [value]);
  useEffect(function () {
    _setValues();
  }, [_setValues, areaList, value]);
  useImperativeHandle(ref, function () {
    return {
      reset: reset,
      getDetail: getDetail
    };
  }); // useEffect(() => {
  //   requestAnimationFrame(() => {
  //     _setValues()
  //     // console.log('?????????????????????')
  //   })
  // }, [])

  return jsxRuntime.exports.jsx(VanPicker, _Object$assign({
    ref: pickerRef,
    className: "van-area__picker",
    showToolbar: true,
    valueKey: "name",
    title: title,
    loading: loading,
    columns: displayColumns(columns, columnsNum),
    // itemHeight={itemHeight}
    visibleItemCount: visibleItemCount,
    cancelButtonText: cancelButtonText,
    confirmButtonText: confirmButtonText,
    onChange: _onChange,
    onConfirm: _onConfirm,
    onCancel: _onCancel
  }, others), void 0);
}

var index$2 = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(Index$8));
var events = new Events();

function trigger(eventName) {
  var _context86;

  for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }

  return events.trigger.apply(events, _concatInstanceProperty(_context86 = [eventName]).call(_context86, args));
}

function on(eventName, listener) {
  return events.on(eventName, listener);
}

function off(eventName, listener) {
  return events.off(eventName, listener);
}

var _defaultOptions = {
  show: false,
  title: '',
  width: null,
  theme: 'default',
  message: '',
  zIndex: 100,
  overlay: true,
  className: '',
  asyncClose: false,
  transition: 'scale',
  messageAlign: '',
  overlayStyle: '',
  confirmButtonText: '??????',
  cancelButtonText: '??????',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  confirmButtonOpenType: ''
};
var dialog = {
  defaultOptions: _Object$assign({}, _defaultOptions),
  alert: function alert(options) {
    var p = new _Promise(function (resolve, reject) {
      var confirmFn = function confirmFn() {
        off('confirm', confirmFn);
        resolve();
      };

      var cancelFn = function cancelFn() {
        off('cancel', cancelFn);
        reject();
      };

      on('confirm', confirmFn);
      on('cancel', cancelFn);
    });
    var innerOptions = (options === null || options === void 0 ? void 0 : options.theme) === 'round-button' ? {
      confirmButtonColor: '#FFFFFF',
      cancelButtonColor: '#FFFFFF'
    } : {};
    trigger('alert', _Object$assign(_Object$assign(_Object$assign(_Object$assign({}, this.defaultOptions), options), innerOptions), {
      show: true
    }));
    return p;
  },
  confirm: function confirm(options) {
    return this.alert(_Object$assign(_Object$assign({}, options), {
      showCancelButton: true
    }));
  },
  close: function close() {
    off('confirm');
    off('cancel');
    trigger('close');
  },
  stopLoading: function stopLoading() {
    trigger('stopLoading');
  },
  setDefaultOptions: function setDefaultOptions(options) {
    this.defaultOptions = _Object$assign(_Object$assign({}, this.defaultOptions), options);
  },
  resetDefaultOptions: function resetDefaultOptions() {
    this.defaultOptions = _Object$assign({}, _defaultOptions);
  }
};

function Index$7(props) {
  var _useState143 = useState({}),
      _useState144 = _slicedToArray(_useState143, 2),
      options = _useState144[0],
      setOptions = _useState144[1];

  var _show = options.show,
      _options$overlay = options.overlay,
      overlay = _options$overlay === void 0 ? true : _options$overlay,
      _options$transition = options.transition,
      transition = _options$transition === void 0 ? 'scale' : _options$transition,
      _options$theme = options.theme,
      theme = _options$theme === void 0 ? 'default' : _options$theme,
      _options$zIndex = options.zIndex,
      zIndex = _options$zIndex === void 0 ? 2000 : _options$zIndex,
      width = options.width,
      overlayStyle = options.overlayStyle,
      closeOnClickOverlay = options.closeOnClickOverlay,
      message = options.message,
      title = options.title,
      messageAlign = options.messageAlign,
      showCancelButton = options.showCancelButton,
      _options$cancelButton = options.cancelButtonColor,
      cancelButtonColor = _options$cancelButton === void 0 ? GRAY : _options$cancelButton,
      _options$confirmButto = options.confirmButtonColor,
      confirmButtonColor = _options$confirmButto === void 0 ? RED : _options$confirmButto,
      _options$cancelButton2 = options.cancelButtonText,
      cancelButtonText = _options$cancelButton2 === void 0 ? '??????' : _options$cancelButton2,
      _options$showConfirmB = options.showConfirmButton,
      showConfirmButton = _options$showConfirmB === void 0 ? true : _options$showConfirmB,
      confirmButtonOpenType = options.confirmButtonOpenType,
      sessionFrom = options.sessionFrom,
      sendMessageTitle = options.sendMessageTitle,
      sendMessagePath = options.sendMessagePath,
      sendMessageImg = options.sendMessageImg,
      showMessageCard = options.showMessageCard,
      appParameter = options.appParameter,
      _options$confirmButto2 = options.confirmButtonText,
      confirmButtonText = _options$confirmButto2 === void 0 ? '??????' : _options$confirmButto2,
      renderTitle = options.renderTitle,
      onClose = options.onClose,
      onConfirm = options.onConfirm,
      onCancel = options.onCancel,
      beforeClose = options.beforeClose,
      asyncClose = options.asyncClose,
      children = options.children,
      style$1 = options.style,
      className = options.className,
      others = __rest(options, ["show", "overlay", "transition", "theme", "zIndex", "width", "overlayStyle", "closeOnClickOverlay", "message", "title", "messageAlign", "showCancelButton", "cancelButtonColor", "confirmButtonColor", "cancelButtonText", "showConfirmButton", "confirmButtonOpenType", "sessionFrom", "sendMessageTitle", "sendMessagePath", "sendMessageImg", "showMessageCard", "appParameter", "confirmButtonText", "renderTitle", "onClose", "onConfirm", "onCancel", "beforeClose", "asyncClose", "children", "style", "className"]);

  var _useState145 = useState(false),
      _useState146 = _slicedToArray(_useState145, 2),
      confirmLoading = _useState146[0],
      setConfirmLoading = _useState146[1];

  var _useState147 = useState(false),
      _useState148 = _slicedToArray(_useState147, 2),
      cancelLoading = _useState148[0],
      setCancelLoading = _useState148[1];

  var _useState149 = useState(_show),
      _useState150 = _slicedToArray(_useState149, 2),
      show = _useState150[0],
      setShow = _useState150[1];

  var _close = useCallback(function (action) {
    setShow(false);
    Taro.nextTick(function () {
      onClose === null || onClose === void 0 ? void 0 : onClose({
        detail: action
      }); // const { callback } = this.data
      // if (callback) {
      //   callback(action, this)
      // }
    });
  }, [onClose]);

  var _onClickOverlay = useCallback(function () {
    _close('overlay');
  }, [_close]);

  var _stopLoading = useCallback(function () {
    setConfirmLoading(false);
    setCancelLoading(false);
  }, []);

  var _handleAction = useCallback(function (action) {
    if (action === 'confirm') {
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm({
        detail: {
          action: action,
          dialog: {
            dialog: null
          }
        }
      });
      trigger('confirm');
    } else if (action === 'cancel') {
      onCancel === null || onCancel === void 0 ? void 0 : onCancel({
        detail: {
          action: action,
          dialog: {
            dialog: null
          }
        }
      });
      trigger('cancel');
    } else {
      trigger('cancel');
    }

    if (!asyncClose && !beforeClose) {
      _close(action);

      return;
    }

    if (action === 'confirm') {
      setConfirmLoading(true);
    } else {
      setCancelLoading(true);
    }

    if (beforeClose) {
      toPromise(beforeClose(action)).then(function (value) {
        if (value) {
          _close(action);

          _stopLoading();
        } else {
          _stopLoading();
        }
      });
    }
  }, [_close, _stopLoading, asyncClose, beforeClose, onCancel, onConfirm]);

  var _onConfirm = useCallback(function () {
    _handleAction('confirm');
  }, [_handleAction]);

  var _onCancel = useCallback(function () {
    _handleAction('cancel');
  }, [_handleAction]);

  useEffect(function () {
    setOptions(_Object$assign({}, props));

    if (!props.show) {
      _stopLoading();
    }

    setShow(props.show); // eslint-disable-next-line
  }, [props]);
  useEffect(function () {
    if (!props.id) {
      return;
    }

    var alertFn = function alertFn() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!(params === null || params === void 0 ? void 0 : params.selector) || props.id === params.selector.replace(/^#/, '')) {
        setOptions(_Object$assign({}, params));
        setShow(!!params.show);
      }
    };

    var stopLoadingFn = function stopLoadingFn() {
      _stopLoading();
    };

    var closeFn = function closeFn() {
      _close('close');
    };

    on('alert', alertFn);
    on('close', closeFn);
    on('stopLoading', stopLoadingFn);
    return function () {
      off('alert', alertFn);
      off('close', closeFn);
      off('stopLoading', stopLoadingFn);
    };
  }, [_close, _stopLoading, options, props.id]);
  useEffect(function () {
    return function () {
      off('confirm');
      off('cancel'); // ?????? ??????

      off('alert');
      off('close');
      off('stopLoading');
    };
  }, []);
  return jsxRuntime.exports.jsxs(Index$W, _Object$assign({
    show: show,
    zIndex: zIndex,
    overlay: overlay,
    transition: transition,
    className: 'van-dialog van-dialog--' + theme + ' ' + "".concat(className || ''),
    style: style(['width: ' + addUnit$1(width) + ';', style$1]),
    overlayStyle: overlayStyle,
    closeOnClickOverlay: closeOnClickOverlay,
    onClose: _onClickOverlay
  }, {
    children: [(title || renderTitle) && jsxRuntime.exports.jsx(View, _Object$assign({
      className: bem('dialog__header', {
        isolated: !(message || renderTitle)
      })
    }, {
      children: renderTitle ? renderTitle : title && jsxRuntime.exports.jsx(Block, {
        children: title
      }, void 0)
    }), void 0), children ? children : message && jsxRuntime.exports.jsx(View, _Object$assign({
      className: bem('dialog__message', [theme, messageAlign, {
        hasTitle: title
      }])
    }, {
      children: jsxRuntime.exports.jsx(Text, _Object$assign({
        className: "van-dialog__message-text"
      }, {
        children: message
      }), void 0)
    }), void 0), theme === 'round-button' ? jsxRuntime.exports.jsxs(Index$h, _Object$assign({
      className: "van-dialog__footer--round-button"
    }, {
      children: [showCancelButton && jsxRuntime.exports.jsx(Index$g, _Object$assign({
        loading: cancelLoading,
        className: "van-dialog__button van-hairline--right van-dialog__cancel",
        style: 'color: ' + cancelButtonColor,
        onClick: _onCancel
      }, {
        children: cancelButtonText
      }), void 0), showConfirmButton && jsxRuntime.exports.jsx(Index$g, _Object$assign({
        className: "van-dialog__button van-dialog__confirm",
        style: 'color: ' + confirmButtonColor,
        loading: confirmLoading,
        openType: confirmButtonOpenType,
        sessionFrom: sessionFrom,
        sendMessageTitle: sendMessageTitle,
        sendMessagePath: sendMessagePath,
        sendMessageImg: sendMessageImg,
        appParameter: appParameter,
        onClick: _onConfirm
      }, others, {
        children: confirmButtonText
      }), void 0)]
    }), void 0) : jsxRuntime.exports.jsxs(View, _Object$assign({
      className: "van-hairline--top van-dialog__footer"
    }, {
      children: [showCancelButton && jsxRuntime.exports.jsx(Index$16, _Object$assign({
        size: "large",
        loading: cancelLoading,
        className: "van-dialog__button van-dialog__cancel",
        style: 'color: ' + cancelButtonColor,
        onClick: _onCancel
      }, {
        children: cancelButtonText
      }), void 0), showConfirmButton && jsxRuntime.exports.jsx(Index$16, _Object$assign({
        size: "large",
        className: "van-dialog__button van-dialog__confirm ".concat(showCancelButton ? 'van-hairline--left' : ''),
        loading: confirmLoading,
        style: 'color: ' + confirmButtonColor,
        openType: confirmButtonOpenType,
        sessionFrom: sessionFrom,
        sendMessageTitle: sendMessageTitle,
        sendMessagePath: sendMessagePath,
        sendMessageImg: sendMessageImg,
        showMessageCard: showMessageCard,
        appParameter: appParameter,
        onClick: _onConfirm
      }, others, {
        children: confirmButtonText
      }), void 0)]
    }), void 0)]
  }), void 0);
}

Index$7.alert = function (options) {
  return dialog.alert(options);
};

Index$7.confirm = function (options) {
  return dialog.confirm(options);
};

Index$7.close = function () {
  dialog.close();
};

Index$7.stopLoading = function () {
  dialog.stopLoading();
};

Index$7.setDefaultOptions = function (options) {
  dialog.setDefaultOptions(options);
};

Index$7.resetDefaultOptions = function () {
  dialog.resetDefaultOptions();
};

var THRESHOLD = 0.3;
var ARRAY = [];
var MIN_DISTANCE = 10;

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}

function Index$6(props, ref) {
  var _useState151 = useState({}),
      _useState152 = _slicedToArray(_useState151, 2),
      wrapperStyle = _useState152[0],
      setWrapperStyle = _useState152[1];

  var _useState153 = useState(0),
      _useState154 = _slicedToArray(_useState153, 2),
      offset = _useState154[0],
      setOffset = _useState154[1];

  var _useState155 = useState({}),
      _useState156 = _slicedToArray(_useState155, 2),
      instanceKey = _useState156[0],
      setInstanceKey = _useState156[1];

  var _useState157 = useState({}),
      _useState158 = _slicedToArray(_useState157, 2),
      touchState = _useState158[0],
      setTouchState = _useState158[1];

  var _useState159 = useState(0),
      _useState160 = _slicedToArray(_useState159, 2),
      startOffset = _useState160[0],
      setStartOffset = _useState160[1];

  var _props$leftWidth = props.leftWidth,
      leftWidth = _props$leftWidth === void 0 ? 0 : _props$leftWidth,
      _props$rightWidth = props.rightWidth,
      rightWidth = _props$rightWidth === void 0 ? 0 : _props$rightWidth,
      style$1 = props.style,
      className = props.className,
      disabled = props.disabled,
      onClick = props.onClick,
      onOpen = props.onOpen,
      onClose = props.onClose,
      asyncClose = props.asyncClose,
      children = props.children,
      renderRight = props.renderRight,
      renderLeft = props.renderLeft,
      others = __rest(props, ["leftWidth", "rightWidth", "style", "className", "disabled", "onClick", "onOpen", "onClose", "asyncClose", "children", "renderRight", "renderLeft"]);

  var swipeMove = useCallback(function () {
    var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var dragging = arguments.length > 1 ? arguments[1] : undefined;
    var offset_ = range$1(offset, -rightWidth, leftWidth);
    setOffset(offset_);
    var transform = "translate3d(".concat(offset_, "px, 0, 0)");
    var transition = dragging ? 'none' : 'transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)';

    var wrapperStyle_ = _Object$assign(_Object$assign({}, wrapperStyle), {
      '-webkit-transform': transform,
      '-webkit-transition': transition,
      transform: transform,
      transition: transition
    });

    setWrapperStyle(wrapperStyle_);
  }, [leftWidth, rightWidth, wrapperStyle]);
  var close = useCallback(function () {
    swipeMove(0);
  }, [swipeMove]);
  useEffect(function () {
    var k = new Date();

    if (!instanceKey) {
      setInstanceKey({
        key: k,
        close: close
      });
      ARRAY.push(k);
    }

    return function () {
      ARRAY = _filterInstanceProperty(ARRAY).call(ARRAY, function (item) {
        return item.key !== instanceKey.key;
      });
    };
  }, [close, instanceKey]);
  var resetTouchStatus = useCallback(function () {
    setTouchState(_Object$assign(_Object$assign({}, touchState), {
      direction: '',
      deltaX: 0,
      deltaY: 0,
      offsetX: 0,
      offsetY: 0
    }));
  }, [touchState]);
  var touchStart = useCallback(function (event) {
    resetTouchStatus();
    var touch = event.touches[0];
    setTouchState(_Object$assign(_Object$assign({}, touchState), {
      startX: touch.clientX,
      startY: touch.startY
    }));
  }, [touchState, resetTouchStatus]);
  var touchMove = useCallback(function (event) {
    resetTouchStatus();
    var touch = event.touches[0];

    var newTouchState = _Object$assign(_Object$assign({}, touchState), {
      direction: touchState.direction || getDirection(touchState.offsetX, touchState.offsetY),
      deltaX: touch.clientX - (touchState.startX || 0),
      deltaY: touch.clientY - (touchState.startY || 0),
      offsetX: Math.abs(touchState.deltaX),
      offsetY: Math.abs(touchState.deltaY)
    });

    setTouchState(newTouchState);
    return newTouchState;
  }, [touchState, resetTouchStatus]);
  var open = useCallback(function (position) {
    var offset = position === 'left' ? leftWidth : -rightWidth;
    swipeMove(offset);

    if (onOpen) {
      var _e3 = {
        detail: {
          position: position,
          name: name
        }
      };
      onOpen(_e3);
    }
  }, [leftWidth, onOpen, rightWidth, swipeMove]);
  var swipeLeaveTransition = useCallback(function () {
    if (rightWidth > 0 && -offset > rightWidth * THRESHOLD) {
      open('right');
    } else if (leftWidth > 0 && offset > leftWidth * THRESHOLD) {
      open('left');
    } else {
      swipeMove(0);
    }
  }, [leftWidth, offset, open, rightWidth, swipeMove]);
  var onClick_ = useCallback(function (event) {
    var _event$currentTarget$ = event.currentTarget.dataset.key,
        position = _event$currentTarget$ === void 0 ? 'outside' : _event$currentTarget$;
    Object.defineProperties(event, {
      detail: {
        value: {
          position: position
        }
      }
    });
    if (onClick) onClick(event);
    if (offset) return;

    if (asyncClose && onClose) {
      onClose(event);
    } else {
      swipeMove(0);
    }
  }, [asyncClose, offset, onClick, onClose, swipeMove]);
  var startDrag = useCallback(function (event) {
    if (disabled) return;
    setStartOffset(offset);
    touchStart(event);
  }, [disabled, offset, touchStart]);
  var onDrag = useCallback(function (event) {
    var _context87;

    if (disabled) return;
    var touchState = touchMove(event);

    _forEachInstanceProperty(_context87 = _filterInstanceProperty(ARRAY).call(ARRAY, function (item) {
      return item.key !== instanceKey.key;
    })).call(_context87, function (item) {
      return item.close();
    });

    swipeMove(startOffset + touchState.deltaX, true);
  }, [disabled, instanceKey.key, startOffset, swipeMove, touchMove]);
  var endDrag = useCallback(function () {
    if (disabled) return;
    swipeLeaveTransition();
  }, [disabled, swipeLeaveTransition]);
  useImperativeHandle(ref, function () {
    return {
      close: close,
      open: open
    };
  });
  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: "van-swipe-cell custom-class ".concat(className),
    "data-key": "cell",
    style: style([style$1]),
    onClick: onClick_,
    onTouchStart: startDrag,
    onTouchMove: onDrag,
    onTouchEnd: endDrag,
    onTouchCancel: endDrag
  }, others, {
    children: jsxRuntime.exports.jsxs(View, _Object$assign({
      style: wrapperStyle
    }, {
      children: [leftWidth && jsxRuntime.exports.jsx(View, _Object$assign({
        className: "van-swipe-cell__left",
        "data-key": "left",
        onClick: onClick_,
        style: {
          width: leftWidth + 'px'
        }
      }, {
        children: renderLeft
      }), void 0), children, rightWidth && jsxRuntime.exports.jsx(View, _Object$assign({
        className: "van-swipe-cell__right",
        "data-key": "right",
        onClick: onClick_,
        style: {
          width: rightWidth + 'px'
        }
      }, {
        children: renderRight
      }), void 0)]
    }), void 0)
  }), void 0);
}

var index$1 = /*#__PURE__*/forwardRef(Index$6);
var ROW_HEIGHT$1 = 64;

function formatMonthTitle$1(date) {
  var _context88;

  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  return _concatInstanceProperty(_context88 = "".concat(date.getFullYear(), "\u5E74")).call(_context88, date.getMonth() + 1, "\u6708");
}

function compareMonth$1(date1, date2) {
  if (!(date1 instanceof Date)) {
    date1 = new Date(date1);
  }

  if (!(date2 instanceof Date)) {
    date2 = new Date(date2);
  }

  var year1 = date1.getFullYear();
  var year2 = date2.getFullYear();
  var month1 = date1.getMonth();
  var month2 = date2.getMonth();

  if (year1 === year2) {
    return month1 === month2 ? 0 : month1 > month2 ? 1 : -1;
  }

  return year1 > year2 ? 1 : -1;
}

function compareDay(day1, day2) {
  if (!(day1 instanceof Date)) {
    day1 = new Date(day1);
  }

  if (!(day2 instanceof Date)) {
    day2 = new Date(day2);
  }

  var compareMonthResult = compareMonth$1(day1, day2);

  if (compareMonthResult === 0) {
    var date1 = day1.getDate();
    var date2 = day2.getDate();
    return date1 === date2 ? 0 : date1 > date2 ? 1 : -1;
  }

  return compareMonthResult;
}

function getDayByOffset(date, offset) {
  date = new Date(date);
  date.setDate(date.getDate() + offset);
  return date;
}

function getPrevDay(date) {
  return getDayByOffset(date, -1);
}

function getNextDay(date) {
  return getDayByOffset(date, 1);
}

function getToday() {
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

function calcDateNum(date) {
  var day1 = new Date(date[0]).getTime();
  var day2 = new Date(date[1]).getTime();
  return (day2 - day1) / 86400000 + 1;
}

function copyDates(dates) {
  if (Array.isArray(dates)) {
    return _mapInstanceProperty(dates).call(dates, function (date) {
      if (date === null) {
        return date;
      }

      return new Date(date);
    });
  }

  return new Date(dates);
}

function getMonthEndDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}

function getMonths$1(minDate, maxDate) {
  var months = [];
  var cursor = new Date(minDate);
  cursor.setDate(1);

  do {
    months.push(cursor.getTime());
    cursor.setMonth(cursor.getMonth() + 1);
  } while (compareMonth$1(cursor, maxDate) !== 1);

  return months;
}
/* eslint-disable */


function compareMonth(date1, date2) {
  date1 = new Date(date1);
  date2 = new Date(date2);
  var year1 = date1.getFullYear();
  var year2 = date2.getFullYear();
  var month1 = date1.getMonth();
  var month2 = date2.getMonth();

  if (year1 === year2) {
    return month1 === month2 ? 0 : month1 > month2 ? 1 : -1;
  }

  return year1 > year2 ? 1 : -1;
}

function getMonths(minDate, maxDate) {
  var months = [];
  var cursor = new Date(minDate);
  cursor.setDate(1);

  do {
    months.push(cursor.getTime());
    cursor.setMonth(cursor.getMonth() + 1);
  } while (compareMonth(cursor, new Date(maxDate)) !== 1);

  return months;
}

function getButtonDisabled(type, currentDate) {
  if (currentDate == null) {
    return true;
  }

  if (type === 'range') {
    return !currentDate[0] || !currentDate[1];
  }

  if (type === 'multiple') {
    return !currentDate.length;
  }

  return !currentDate;
}

function getMark(date) {
  return new Date(date).getMonth() + 1;
}

var ROW_HEIGHT = 64;

function getDayStyle(type, index, date, rowHeight, color, firstDayOfWeek) {
  var style = [];
  var current = new Date(date).getDay() || 7;
  var offset = current < firstDayOfWeek ? 7 - firstDayOfWeek + current : current === 7 && firstDayOfWeek === 0 ? 0 : current - firstDayOfWeek;

  if (index === 0) {
    style.push(['margin-left', 100 * offset / 7 + '%']);
  }

  if (rowHeight !== ROW_HEIGHT) {
    style.push(['height', rowHeight + 'px']);
  }

  if (color) {
    if (type === 'start' || type === 'end' || type === 'start-end' || type === 'multiple-selected' || type === 'multiple-middle') {
      style.push(['background', color]);
    } else if (type === 'middle') {
      style.push(['color', color]);
    }
  }

  return _mapInstanceProperty(style).call(style, function (item) {
    return item.join(':');
  }).join(';');
}

function formatMonthTitle(date) {
  date = new Date(date);
  return date.getFullYear() + '???' + (date.getMonth() + 1) + '???';
}

function getMonthStyle(visible, date, rowHeight) {
  if (!visible) {
    date = new Date(date);
    var totalDay = getMonthEndDay(date.getFullYear(), date.getMonth() + 1);
    var offset = new Date(date).getDay();
    var padding = Math.ceil((totalDay + offset) / 7) * rowHeight;
    return 'padding-bottom:' + padding + 'px';
  }

  return '';
}

function Index$5(props, ref) {
  var date = props.date,
      rowHeight = props.rowHeight,
      showMonthTitle = props.showMonthTitle,
      showMark = props.showMark,
      color = props.color,
      type = props.type,
      firstDayOfWeek = props.firstDayOfWeek,
      currentDate = props.currentDate,
      onClick = props.onClick,
      minDate = props.minDate,
      maxDate = props.maxDate,
      allowSameDay = props.allowSameDay,
      formatter = props.formatter,
      className = props.className,
      id = props.id;

  var _useState161 = useState(true),
      _useState162 = _slicedToArray(_useState161, 2),
      visible = _useState162[0],
      setVisible = _useState162[1];

  var _useState163 = useState([]),
      _useState164 = _slicedToArray(_useState163, 2),
      days = _useState164[0],
      setDays_ = _useState164[1];

  var onClick_ = useCallback(function (event) {
    var index = event.currentTarget.dataset.index;
    var item = days[index];

    if (item.type !== 'disabled') {
      if (onClick) onClick(item);
    }
  }, [days, onClick]);
  var getMultipleDayType = useCallback(function (day) {
    if (!Array.isArray(currentDate)) {
      return '';
    }

    var isSelected = function isSelected(date) {
      return _someInstanceProperty(currentDate).call(currentDate, function (item) {
        return compareDay(item, date) === 0;
      });
    };

    if (isSelected(day)) {
      var prevDay = getPrevDay(day);
      var nextDay = getNextDay(day);
      var prevSelected = isSelected(prevDay);
      var nextSelected = isSelected(nextDay);

      if (prevSelected && nextSelected) {
        return 'multiple-middle';
      }

      if (prevSelected) {
        return 'end';
      }

      return nextSelected ? 'start' : 'multiple-selected';
    }

    return '';
  }, [currentDate]);
  var getRangeDayType = useCallback(function (day) {
    if (!Array.isArray(currentDate)) {
      return '';
    }

    var _currentDate = _slicedToArray(currentDate, 2),
        startDay = _currentDate[0],
        endDay = _currentDate[1];

    if (!startDay) {
      return '';
    }

    var compareToStart = compareDay(day, startDay);

    if (!endDay) {
      return compareToStart === 0 ? 'start' : '';
    }

    var compareToEnd = compareDay(day, endDay);

    if (compareToStart === 0 && compareToEnd === 0 && allowSameDay) {
      return 'start-end';
    }

    if (compareToStart === 0) {
      return 'start';
    }

    if (compareToEnd === 0) {
      return 'end';
    }

    if (compareToStart > 0 && compareToEnd < 0) {
      return 'middle';
    }

    return '';
  }, [allowSameDay, currentDate]);
  var getDayType = useCallback(function (day) {
    if (compareDay(day, minDate) < 0 || compareDay(day, maxDate) > 0) {
      return 'disabled';
    }

    if (type === 'single') {
      return compareDay(day, currentDate) === 0 ? 'selected' : '';
    }

    if (type === 'multiple') {
      return getMultipleDayType(day);
    }
    /* istanbul ignore else */


    if (type === 'range') {
      return getRangeDayType(day);
    }

    return '';
  }, [currentDate, getMultipleDayType, getRangeDayType, maxDate, minDate, type]);
  var getBottomInfo = useCallback(function (type_) {
    if (type === 'range') {
      if (type_ === 'start') {
        return '??????';
      }

      if (type_ === 'end') {
        return '??????';
      }

      if (type_ === 'start-end') {
        return '??????/??????';
      }
    }
  }, [type]);
  var setDays = useCallback(function () {
    var days = [];
    var startDate = new Date(date || 0);
    var year = startDate.getFullYear();
    var month = startDate.getMonth();
    var totalDay = getMonthEndDay(startDate.getFullYear(), startDate.getMonth() + 1);

    for (var day = 1; day <= totalDay; day++) {
      var _date = new Date(year, month, day);

      var _type2 = getDayType(_date);

      var config = {
        date: _date,
        type: _type2,
        text: day,
        bottomInfo: getBottomInfo(_type2)
      };

      if (formatter) {
        config = formatter(config);
      }

      days.push(config);
    }

    setDays_(days);
  }, [date, formatter, getBottomInfo, getDayType]);
  useEffect(function () {
    setDays();
  }, [setDays]);
  useImperativeHandle(ref, function () {
    return {
      setVisible: setVisible,
      visible: visible
    };
  });
  return jsxRuntime.exports.jsxs(View, _Object$assign({
    id: id,
    className: "van-calendar__month ".concat(className),
    style: getMonthStyle(visible, date, rowHeight ? Number(rowHeight) : 0)
  }, {
    children: [showMonthTitle && jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-calendar__month-title"
    }, {
      children: formatMonthTitle(date)
    }), void 0), visible && jsxRuntime.exports.jsxs(View, _Object$assign({
      className: "van-calendar__days"
    }, {
      children: [showMark && jsxRuntime.exports.jsx(View, _Object$assign({
        className: "van-calendar__month-mark"
      }, {
        children: getMark(date)
      }), void 0), _mapInstanceProperty(days).call(days, function (item, index) {
        return jsxRuntime.exports.jsx(View, _Object$assign({
          style: getDayStyle(item.type, index, date, rowHeight, color, firstDayOfWeek),
          className: bem('calendar__day', [item.type]) + ' ' + item.className,
          "data-index": index,
          onClick: onClick_
        }, {
          children: item.type === 'selected' || currentDate === item.date.getTime() ? jsxRuntime.exports.jsxs(View, _Object$assign({
            className: "van-calendar__selected-day",
            style: 'background: ' + color
          }, {
            children: [item.topInfo && jsxRuntime.exports.jsx(View, _Object$assign({
              className: "van-calendar__top-info"
            }, {
              children: item.topInfo
            }), void 0), item.text, item.bottomInfo && jsxRuntime.exports.jsx(View, _Object$assign({
              className: "van-calendar__bottom-info"
            }, {
              children: item.bottomInfo
            }), void 0)]
          }), void 0) : jsxRuntime.exports.jsxs(View, {
            children: [item.topInfo && jsxRuntime.exports.jsx(View, _Object$assign({
              className: "van-calendar__top-info"
            }, {
              children: item.topInfo
            }), void 0), item.text, item.bottomInfo && jsxRuntime.exports.jsx(View, _Object$assign({
              className: "van-calendar__bottom-info"
            }, {
              children: item.bottomInfo
            }), void 0)]
          }, void 0)
        }), item.index);
      })]
    }), void 0)]
  }), void 0);
}

var Month = /*#__PURE__*/forwardRef(Index$5);

function Index$4(props) {
  var _props$title2 = props.title,
      title = _props$title2 === void 0 ? '????????????' : _props$title2,
      showTitle = props.showTitle,
      subtitle = props.subtitle,
      showSubtitle = props.showSubtitle,
      firstDayOfWeek = props.firstDayOfWeek,
      renderTitle = props.renderTitle,
      onClickSubtitle = props.onClickSubtitle;

  var _useState165 = useState([]),
      _useState166 = _slicedToArray(_useState165, 2),
      weekdays = _useState166[0],
      setWeekDays = _useState166[1];

  var initWeekDay = useCallback(function () {
    var _context89;

    var defaultWeeks = ['???', '???', '???', '???', '???', '???', '???'];
    var firstDayOfWeek_ = firstDayOfWeek || 0;
    setWeekDays(_concatInstanceProperty(_context89 = []).call(_context89, _toConsumableArray(_sliceInstanceProperty(defaultWeeks).call(defaultWeeks, firstDayOfWeek_, 7)), _toConsumableArray(_sliceInstanceProperty(defaultWeeks).call(defaultWeeks, 0, firstDayOfWeek_))));
  }, [firstDayOfWeek]);
  useEffect(function () {
    initWeekDay();
  }, [initWeekDay]);
  return jsxRuntime.exports.jsxs(View, _Object$assign({
    className: "van-calendar__header"
  }, {
    children: [showTitle && jsxRuntime.exports.jsxs(View, {
      children: [renderTitle && jsxRuntime.exports.jsx(View, _Object$assign({
        className: "van-calendar__header-title"
      }, {
        children: renderTitle
      }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
        className: "van-calendar__header-title"
      }, {
        children: title
      }), void 0)]
    }, void 0), showSubtitle && jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-calendar__header-subtitle",
      onClick: onClickSubtitle
    }, {
      children: subtitle
    }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-calendar__weekdays"
    }, {
      children: _mapInstanceProperty(weekdays).call(weekdays, function (item) {
        return jsxRuntime.exports.jsx(View, _Object$assign({
          className: "van-calendar__weekday"
        }, {
          children: item
        }), item.index);
      })
    }), void 0)]
  }), void 0);
}

var initialMinDate = getToday().getTime();
var init = 0;

var initialMaxDate = function () {
  var now = getToday();
  return new Date(now.getFullYear(), now.getMonth() + 6, now.getDate()).getTime();
}();

function Index$3(props, ref) {
  var _context92, _context94;

  var _props$title3 = props.title,
      title = _props$title3 === void 0 ? '????????????' : _props$title3,
      color = props.color,
      show = props.show,
      formatter = props.formatter,
      _props$confirmText = props.confirmText,
      confirmText = _props$confirmText === void 0 ? '??????' : _props$confirmText,
      rangePrompt = props.rangePrompt,
      defaultDate = props.defaultDate,
      allowSameDay = props.allowSameDay,
      _props$type7 = props.type,
      type = _props$type7 === void 0 ? 'single' : _props$type7,
      _props$confirmDisable = props.confirmDisabledText,
      confirmDisabledText = _props$confirmDisable === void 0 ? '??????' : _props$confirmDisable,
      _props$minDate2 = props.minDate,
      minDate = _props$minDate2 === void 0 ? initialMinDate : _props$minDate2,
      _props$maxDate2 = props.maxDate,
      maxDate = _props$maxDate2 === void 0 ? initialMaxDate : _props$maxDate2,
      _props$position2 = props.position,
      position = _props$position2 === void 0 ? 'bottom' : _props$position2,
      _props$rowHeight = props.rowHeight,
      rowHeight = _props$rowHeight === void 0 ? ROW_HEIGHT$1 : _props$rowHeight,
      _props$round2 = props.round,
      round = _props$round2 === void 0 ? true : _props$round2,
      _props$poppable = props.poppable,
      poppable = _props$poppable === void 0 ? true : _props$poppable,
      _props$showMark = props.showMark,
      showMark = _props$showMark === void 0 ? true : _props$showMark,
      _props$showTitle = props.showTitle,
      showTitle = _props$showTitle === void 0 ? true : _props$showTitle,
      _props$showConfirm = props.showConfirm,
      showConfirm = _props$showConfirm === void 0 ? true : _props$showConfirm,
      _props$showSubtitle = props.showSubtitle,
      showSubtitle = _props$showSubtitle === void 0 ? true : _props$showSubtitle,
      _props$safeAreaInsetB5 = props.safeAreaInsetBottom,
      safeAreaInsetBottom = _props$safeAreaInsetB5 === void 0 ? true : _props$safeAreaInsetB5,
      _props$closeOnClickOv4 = props.closeOnClickOverlay,
      closeOnClickOverlay = _props$closeOnClickOv4 === void 0 ? true : _props$closeOnClickOv4,
      _props$showRangePromp = props.showRangePrompt,
      showRangePrompt = _props$showRangePromp === void 0 ? true : _props$showRangePromp,
      maxRange = props.maxRange,
      onClose = props.onClose,
      onOpen = props.onOpen,
      onClosed = props.onClosed,
      onOpened = props.onOpened,
      onConfirm = props.onConfirm,
      onSelect = props.onSelect,
      _props$firstDayOfWeek = props.firstDayOfWeek,
      firstDayOfWeek = _props$firstDayOfWeek === void 0 ? 0 : _props$firstDayOfWeek,
      overRange = props.overRange,
      onUnselect = props.onUnselect,
      onClickSubtitle = props.onClickSubtitle,
      renderTitle = props.renderTitle,
      renderFooter = props.renderFooter,
      className = props.className,
      style$1 = props.style,
      others = __rest(props, ["title", "color", "show", "formatter", "confirmText", "rangePrompt", "defaultDate", "allowSameDay", "type", "confirmDisabledText", "minDate", "maxDate", "position", "rowHeight", "round", "poppable", "showMark", "showTitle", "showConfirm", "showSubtitle", "safeAreaInsetBottom", "closeOnClickOverlay", "showRangePrompt", "maxRange", "onClose", "onOpen", "onClosed", "onOpened", "onConfirm", "onSelect", "firstDayOfWeek", "overRange", "onUnselect", "onClickSubtitle", "renderTitle", "renderFooter", "className", "style"]);

  var _useState167 = useState(''),
      _useState168 = _slicedToArray(_useState167, 2),
      subtitle = _useState168[0],
      setSubtitle = _useState168[1];

  var _useState169 = useState(),
      _useState170 = _slicedToArray(_useState169, 2),
      currentDate = _useState170[0],
      setCurrentDate = _useState170[1];

  var _useState171 = useState(''),
      _useState172 = _slicedToArray(_useState171, 2),
      scrollIntoView = _useState172[0],
      setScrollIntoView = _useState172[1];

  var contentObserver = useRef();

  var _useState173 = useState(0),
      _useState174 = _slicedToArray(_useState173, 2),
      compIndex = _useState174[0],
      setComindex = _useState174[1];

  useEffect(function () {
    setComindex(init++);
  }, []);
  var limitDateRange = useCallback(function (date) {
    var minDateD = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var maxDateD = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    minDateD = minDateD || minDate;
    maxDateD = maxDateD || maxDate;

    if (compareDay(date, minDateD) === -1) {
      return minDateD;
    }

    if (compareDay(date, maxDateD) === 1) {
      return maxDateD;
    }

    return date;
  }, [maxDate, minDate]);
  var getInitialDate = useCallback(function () {
    var defaultDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var now = getToday().getTime();

    if (type === 'range') {
      if (!Array.isArray(defaultDate)) {
        defaultDate = [];
      }

      var _ref21 = defaultDate || [],
          _ref22 = _slicedToArray(_ref21, 2),
          startDay = _ref22[0],
          endDay = _ref22[1];

      var start = limitDateRange(startDay || now, minDate, getPrevDay(new Date(maxDate)).getTime());
      var end = limitDateRange(endDay || now, getNextDay(new Date(minDate)).getTime());
      return [start, end];
    }

    if (type === 'multiple') {
      if (Array.isArray(defaultDate)) {
        return _mapInstanceProperty(defaultDate).call(defaultDate, function (date) {
          return limitDateRange(date);
        });
      }

      return [limitDateRange(now)];
    }

    if (!defaultDate || Array.isArray(defaultDate)) {
      defaultDate = now;
    }

    return limitDateRange(defaultDate);
  }, [limitDateRange, maxDate, minDate, type]);
  var scrollIntoViewFn = useCallback(function () {
    requestAnimationFrame$1(function () {
      var targetDate = type === 'single' ? currentDate : currentDate[0];
      var displayed = show || !poppable;

      if (!targetDate || !displayed) {
        return;
      }

      var months = getMonths$1(minDate, maxDate);

      _someInstanceProperty(months).call(months, function (month, index) {
        if (compareMonth$1(month, targetDate) === 0) {
          setScrollIntoView("month".concat(index));
          return true;
        }

        return false;
      });
    });
  }, [currentDate, maxDate, minDate, poppable, show, type]);
  var reset = useCallback(function () {
    setCurrentDate(getInitialDate());
    scrollIntoViewFn();
  }, [getInitialDate, scrollIntoViewFn]);
  var initRectH5 = useCallback(function () {
    if (contentObserver.current != null) {
      contentObserver.current.disconnect();
    }

    var contentObserver_ = new IntersectionObserver(function (res) {
      for (var i = 0; i < res.length; i++) {
        if (res[i].intersectionRatio > 0.6) {
          var item = Number(res[i].target.id.split(' ')[1].replace('month', ''));
          setSubtitle(formatMonthTitle$1(item));
        }
      }
    }, {
      threshold: [0.6] // root: document.getElementsByClassName('van-calendar__body')[0],

    });
    contentObserver.current = contentObserver_;
    var targets = document.getElementsByClassName('month');

    if (targets.length) {
      for (var i = 0; i < targets.length; i++) {
        contentObserver.current.observe(targets[i]);
      }
    }
  }, []);
  var initRect = useCallback(function () {
    if (process.env.TARO_ENV === 'h5') {
      return initRectH5();
    }

    if (contentObserver.current != null) {
      contentObserver.current.disconnect();
    }

    var pages = Taro.getCurrentPages();
    var curePage = pages[pages.length - 1];

    if (process.env.TARO_ENV === 'alipay') {
      curePage = Taro;
    }

    var contentObserver_ = curePage.createIntersectionObserver({
      thresholds: [0.5, 0.8, 1],
      observeAll: true,
      selectAll: true
    });
    contentObserver.current = contentObserver_;
    contentObserver.current.relativeTo(".van-calendar__body".concat(compIndex));
    contentObserver.current.observe('.month', function (res) {
      if (res.intersectionRatio) {
        var item = Number(res.id.split(' ')[1].replace('month', ''));
        setSubtitle(formatMonthTitle$1(item));
      }
    });
  }, [initRectH5, compIndex]);
  var emit = useCallback(function (date) {
    var getTime = function getTime(date) {
      return date instanceof Date ? date.getTime() : date;
    };

    setCurrentDate(Array.isArray(date) ? _mapInstanceProperty(date).call(date, getTime) : getTime(date));
    var e = {
      detail: {
        value: copyDates(date)
      }
    };
    if (onSelect) onSelect(e);
  }, [onSelect]);
  var checkRange = useCallback(function (date) {
    if (maxRange && calcDateNum(date) > maxRange) {
      if (showRangePrompt) {
        Toast({
          // duration: 0,
          message: rangePrompt || "\u9009\u62E9\u5929\u6570\u4E0D\u80FD\u8D85\u8FC7 ".concat(maxRange, " \u5929")
        });
      }

      if (overRange) overRange();
      return false;
    }

    return true;
  }, [maxRange, overRange, rangePrompt, showRangePrompt]); // eslint-disable-next-line react-hooks/exhaustive-deps

  function select(date, complete) {
    if (Array.isArray(date)) {
      var _context90;

      date = _mapInstanceProperty(_context90 = _filterInstanceProperty(date).call(date, function (d) {
        return !!d;
      })).call(_context90, function (item) {
        return typeof item === 'number' ? new Date(item) : item;
      });
    }

    if (complete && type === 'range') {
      var valid = checkRange(date);

      if (!valid) {
        // auto selected to max range if showConfirm
        if (showConfirm) {
          emit([date[0], getDayByOffset(date[0], (maxRange || 0) - 1)]);
        } else {
          emit(date);
        }

        return;
      }
    }

    emit(date);

    if (complete && !showConfirm) {
      onConfirm_(null, date);
    }
  }

  var unselect = useCallback(function (dateArray) {
    var date = dateArray[0];

    if (date && unselect) {
      var _e4 = {
        detail: {
          value: copyDates(date)
        }
      };
      if (onUnselect) onUnselect(_e4);
    }
  }, [onUnselect]);
  var onClickDay = useCallback(function (event) {
    var date = event.date;
    var currentDate_ = JSON.parse(_JSON$stringify(currentDate));

    if (type === 'range') {
      var _currentDate_ = _slicedToArray(currentDate_, 2),
          startDay = _currentDate_[0],
          endDay = _currentDate_[1];

      if (startDay && !endDay) {
        var compareToStart = compareDay(date, startDay);

        if (compareToStart === 1) {
          select([startDay, date], true);
        } else if (compareToStart === -1) {
          select([date, null]);
        } else if (allowSameDay) {
          select([date, date]);
        }
      } else {
        select([date, null]);
      }
    } else if (type === 'multiple') {
      var selectedIndex;

      var selected = _someInstanceProperty(currentDate_).call(currentDate_, function (dateItem, index) {
        var equal = compareDay(dateItem, date) === 0;

        if (equal) {
          selectedIndex = index;
        }

        return equal;
      });

      if (selected) {
        var cancelDate = _spliceInstanceProperty(currentDate_).call(currentDate_, selectedIndex, 1);

        setCurrentDate(currentDate_);
        unselect(cancelDate);
      } else {
        var _context91;

        select(_concatInstanceProperty(_context91 = []).call(_context91, _toConsumableArray(currentDate_), [date]));
      }
    } else {
      select(date, true);
    }
  }, [allowSameDay, currentDate, select, type, unselect]);
  var onConfirm_ = useCallback(function (_, date) {
    if (type === 'range' && !checkRange(currentDate)) {
      return;
    }

    var e = {
      detail: {
        value: date || copyDates(currentDate)
      }
    };
    console.info(e);
    if (onConfirm) onConfirm(e);
  }, [checkRange, currentDate, onConfirm, type]);
  useLayoutEffect(function () {
    if (defaultDate) setCurrentDate(getInitialDate(defaultDate || new Date().getTime()));
  }, [defaultDate, getInitialDate]);
  useEffect(function () {
    if (show || !poppable) {
      setTimeout(function () {
        initRect();
        setTimeout(function () {
          scrollIntoViewFn();
        }, 66);
      }, 66);
    }
  }, [initRect, poppable, scrollIntoViewFn, show]);
  useEffect(function () {
    reset();
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [type]);
  useImperativeHandle(ref, function () {
    return {
      reset: reset
    };
  });
  return jsxRuntime.exports.jsxs(Block, {
    children: [poppable ? jsxRuntime.exports.jsx(Index$W, _Object$assign({
      className: 'van-calendar__popup--' + position,
      show: show,
      round: round,
      position: position,
      closeable: showTitle || showSubtitle,
      closeOnClickOverlay: closeOnClickOverlay,
      onEnter: onOpen,
      onClose: onClose,
      onAfterEnter: onOpened,
      onAfterLeave: onClosed
    }, {
      children: jsxRuntime.exports.jsxs(View, _Object$assign({
        className: "van-calendar ".concat(className || ''),
        style: style([style$1])
      }, others, {
        children: [jsxRuntime.exports.jsx(Index$4, {
          title: title,
          showTitle: showTitle,
          subtitle: subtitle,
          showSubtitle: showSubtitle,
          firstDayOfWeek: firstDayOfWeek,
          onClickSubtitle: function onClickSubtitle() {},
          renderTitle: renderTitle
        }, void 0), jsxRuntime.exports.jsx(ScrollView, _Object$assign({
          className: "van-calendar__body  van-calendar__body".concat(compIndex),
          scrollY: true,
          scrollIntoView: scrollIntoView
        }, {
          children: _mapInstanceProperty(_context92 = getMonths(minDate, maxDate)).call(_context92, function (item, index) {
            var _context93;

            return jsxRuntime.exports.jsx(Month, {
              id: _concatInstanceProperty(_context93 = "month".concat(index, " month")).call(_context93, item),
              className: "month",
              date: item,
              type: type,
              color: color,
              minDate: minDate,
              maxDate: maxDate,
              showMark: showMark,
              formatter: formatter,
              rowHeight: rowHeight,
              currentDate: currentDate,
              showSubtitle: showSubtitle,
              allowSameDay: allowSameDay,
              showMonthTitle: index !== 0 || !showSubtitle,
              firstDayOfWeek: firstDayOfWeek,
              onClick: onClickDay
            }, "van-calendar-month___".concat(index));
          })
        }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
          className: bem('calendar__footer', {
            safeAreaInsetBottom: safeAreaInsetBottom
          })
        }, {
          children: renderFooter
        }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
          className: bem('calendar__footer', {
            safeAreaInsetBottom: safeAreaInsetBottom
          })
        }, {
          children: showConfirm && jsxRuntime.exports.jsx(Index$16, _Object$assign({
            round: true,
            block: true,
            type: "danger",
            color: color,
            className: "van-calendar__confirm",
            disabled: getButtonDisabled(type, currentDate),
            // nativeType="text"
            onClick: onConfirm_
          }, {
            children: getButtonDisabled(type, currentDate) ? confirmDisabledText : confirmText
          }), void 0)
        }), void 0)]
      }), void 0)
    }), void 0) : jsxRuntime.exports.jsxs(View, _Object$assign({
      className: "van-calendar ".concat(className || ''),
      style: style([style$1])
    }, others, {
      children: [jsxRuntime.exports.jsx(Index$4, {
        title: title,
        showTitle: showTitle,
        subtitle: subtitle,
        showSubtitle: showSubtitle,
        firstDayOfWeek: firstDayOfWeek,
        onClickSubtitle: onClickSubtitle,
        renderTitle: jsxRuntime.exports.jsx(Block, {
          children: renderTitle
        }, void 0)
      }, void 0), jsxRuntime.exports.jsx(ScrollView, _Object$assign({
        className: "van-calendar__body van-calendar__body".concat(compIndex),
        scrollY: true,
        scrollIntoView: scrollIntoView
      }, {
        children: _mapInstanceProperty(_context94 = getMonths(minDate, maxDate)).call(_context94, function (item, index) {
          var _context95;

          return jsxRuntime.exports.jsx(Month, {
            id: _concatInstanceProperty(_context95 = "month".concat(index, " month")).call(_context95, item),
            className: "month",
            date: item,
            type: type,
            color: color,
            minDate: minDate,
            maxDate: maxDate,
            showMark: showMark,
            formatter: formatter,
            rowHeight: rowHeight,
            currentDate: currentDate,
            showSubtitle: showSubtitle,
            allowSameDay: allowSameDay,
            showMonthTitle: index !== 0 || !showSubtitle,
            firstDayOfWeek: firstDayOfWeek,
            onClick: onClickDay
          }, "van-calendar-month___".concat(index));
        })
      }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
        className: bem('calendar__footer', {
          safeAreaInsetBottom: safeAreaInsetBottom
        })
      }, {
        children: renderFooter
      }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
        className: bem('calendar__footer', {
          safeAreaInsetBottom: safeAreaInsetBottom
        })
      }, {
        children: showConfirm && jsxRuntime.exports.jsx(Index$16, _Object$assign({
          round: true,
          block: true,
          type: "danger",
          color: color,
          className: "van-calendar__confirm",
          disabled: getButtonDisabled(type, currentDate),
          // nativeType="text"
          onClick: onConfirm_
        }, {
          children: getButtonDisabled(type, currentDate) ? confirmDisabledText : confirmText
        }), void 0)
      }), void 0)]
    }), void 0), jsxRuntime.exports.jsx(Index$P, {
      id: "van-toast"
    }, void 0)]
  }, void 0);
}

var index = /*#__PURE__*/forwardRef(Index$3);

function kebabCase(word) {
  var newWord = word.replace(/[A-Z]/g, function (i) {
    return '-' + i;
  }).toLowerCase().replace(/^-/, '');
  return newWord;
}

function mapThemeVarsToCSSVars(themeVars) {
  var _context96;

  var cssVars = {};

  _forEachInstanceProperty(_context96 = keys(themeVars)).call(_context96, function (key) {
    var cssVarsKey = '--' + kebabCase(key);
    cssVars[cssVarsKey] = themeVars[key];
  });

  return style(cssVars);
}

function Index$2(props) {
  var _props$themeVars = props.themeVars,
      themeVars = _props$themeVars === void 0 ? {} : _props$themeVars,
      children = props.children,
      style$1 = props.style,
      className = props.className,
      others = __rest(props, ["themeVars", "children", "style", "className"]);

  return jsxRuntime.exports.jsx(View, _Object$assign({
    className: "van-config-provider ".concat(className || ''),
    style: style([mapThemeVarsToCSSVars(themeVars), style$1])
  }, others, {
    children: children
  }), void 0);
}

function Index$1(props) {
  var tipIcon = props.tipIcon,
      tip = props.tip,
      label = props.label,
      _props$currency = props.currency,
      currency = _props$currency === void 0 ? '??' : _props$currency,
      suffixLabel = props.suffixLabel,
      _props$buttonType = props.buttonType,
      buttonType = _props$buttonType === void 0 ? 'danger' : _props$buttonType,
      price = props.price,
      loading = props.loading,
      disabled = props.disabled,
      buttonText = props.buttonText,
      _props$safeAreaInsetB6 = props.safeAreaInsetBottom,
      safeAreaInsetBottom = _props$safeAreaInsetB6 === void 0 ? true : _props$safeAreaInsetB6,
      renderTop = props.renderTop,
      renderTip = props.renderTip,
      decimalLength = props.decimalLength,
      onSubmit = props.onSubmit,
      children = props.children,
      style = props.style,
      className = props.className,
      others = __rest(props, ["tipIcon", "tip", "label", "currency", "suffixLabel", "buttonType", "price", "loading", "disabled", "buttonText", "safeAreaInsetBottom", "renderTop", "renderTip", "decimalLength", "onSubmit", "children", "style", "className"]);

  var _useState175 = useState({
    hasTip: false,
    integerStr: '',
    decimalStr: '',
    hasPrice: false
  }),
      _useState176 = _slicedToArray(_useState175, 2),
      state = _useState176[0],
      setState = _useState176[1];

  var hasTip = state.hasTip,
      integerStr = state.integerStr,
      decimalStr = state.decimalStr,
      hasPrice = state.hasPrice;
  useEffect(function () {
    setState(function (pre) {
      return _Object$assign(_Object$assign({}, pre), {
        hasTip: typeof tip === 'string'
      });
    });
  }, [tip]);
  useEffect(function () {
    var priceStrArr = typeof price === 'number' && (price / 100).toFixed(decimalLength).split('.');
    setState(function (pre) {
      return _Object$assign(_Object$assign({}, pre), {
        hasPrice: typeof price === 'number',
        integerStr: priceStrArr && priceStrArr[0],
        decimalStr: decimalLength && priceStrArr ? ".".concat(priceStrArr[1]) : ''
      });
    });
  }, [decimalLength, price]);
  return jsxRuntime.exports.jsxs(View, _Object$assign({
    className: "van-submit-bar custom-class ".concat(className || ''),
    style: style
  }, others, {
    children: [renderTop, jsxRuntime.exports.jsxs(View, _Object$assign({
      className: "van-submit-bar__tip"
    }, {
      children: [tipIcon && jsxRuntime.exports.jsx(Index$$, {
        size: "12px",
        name: tipIcon,
        className: "van-submit-bar__tip-icon"
      }, void 0), hasTip && jsxRuntime.exports.jsx(View, _Object$assign({
        className: "van-submit-bar__tip-text"
      }, {
        children: tip
      }), void 0), renderTip]
    }), void 0), jsxRuntime.exports.jsxs(View, _Object$assign({
      className: "bar-class van-submit-bar__bar"
    }, {
      children: [children, hasPrice && jsxRuntime.exports.jsxs(View, _Object$assign({
        className: "van-submit-bar__text"
      }, {
        children: [jsxRuntime.exports.jsx(Text, {
          children: label || '?????????'
        }, void 0), jsxRuntime.exports.jsxs(Text, _Object$assign({
          className: "van-submit-bar__price price-class"
        }, {
          children: [jsxRuntime.exports.jsx(Text, _Object$assign({
            className: "van-submit-bar__currency"
          }, {
            children: currency
          }), void 0), jsxRuntime.exports.jsx(Text, _Object$assign({
            className: "van-submit-bar__price-integer"
          }, {
            children: integerStr
          }), void 0), jsxRuntime.exports.jsx(Text, {
            children: decimalStr
          }, void 0)]
        }), void 0), jsxRuntime.exports.jsx(Text, _Object$assign({
          className: "van-submit-bar__suffix-label"
        }, {
          children: suffixLabel
        }), void 0)]
      }), void 0), jsxRuntime.exports.jsx(Index$16, _Object$assign({
        round: true,
        type: buttonType,
        loading: loading,
        disabled: disabled,
        className: "van-submit-bar__button button-class",
        onClick: onSubmit
      }, {
        children: loading ? '' : buttonText
      }), void 0)]
    }), void 0), safeAreaInsetBottom && jsxRuntime.exports.jsx(View, {
      className: "van-submit-bar__safe"
    }, void 0)]
  }), void 0);
}

function Index(props) {
  var tag = props.tag,
      num = props.num,
      desc = props.desc,
      thumb = props.thumb,
      title = props.title,
      price = props.price,
      centered = props.centered,
      lazyLoad = props.lazyLoad,
      thumbLink = props.thumbLink,
      originPrice = props.originPrice,
      _props$thumbMode = props.thumbMode,
      thumbMode = _props$thumbMode === void 0 ? 'aspectFit' : _props$thumbMode,
      _props$currency2 = props.currency,
      currency = _props$currency2 === void 0 ? '??' : _props$currency2,
      renderFooter = props.renderFooter,
      renderBottom = props.renderBottom,
      renderNum = props.renderNum,
      renderOriginPrice = props.renderOriginPrice,
      renderPriceTop = props.renderPriceTop,
      renderThumb = props.renderThumb,
      renderPrice = props.renderPrice,
      renderDesc = props.renderDesc,
      renderTag = props.renderTag,
      renderTitle = props.renderTitle,
      renderTags = props.renderTags,
      style = props.style,
      className = props.className,
      others = __rest(props, ["tag", "num", "desc", "thumb", "title", "price", "centered", "lazyLoad", "thumbLink", "originPrice", "thumbMode", "currency", "renderFooter", "renderBottom", "renderNum", "renderOriginPrice", "renderPriceTop", "renderThumb", "renderPrice", "renderDesc", "renderTag", "renderTitle", "renderTags", "style", "className"]);

  var _useState177 = useState({
    integerStr: '',
    decimalStr: ''
  }),
      _useState178 = _slicedToArray(_useState177, 2),
      state = _useState178[0],
      setState = _useState178[1];

  var integerStr = state.integerStr,
      decimalStr = state.decimalStr;
  useEffect(function () {
    var priceArr = price.toString().split('.');
    setState(function (pre) {
      return _Object$assign(_Object$assign({}, pre), {
        integerStr: priceArr[0],
        decimalStr: priceArr[1] ? ".".concat(priceArr[1]) : ''
      });
    });
  }, [price]);
  return jsxRuntime.exports.jsxs(View, _Object$assign({
    className: "van-card custom-class ".concat(className || ''),
    style: style
  }, others, {
    children: [jsxRuntime.exports.jsxs(View, _Object$assign({
      className: bem('card__header', {
        center: centered
      })
    }, {
      children: [jsxRuntime.exports.jsxs(View, _Object$assign({
        className: "van-card__thumb",
        onClick: function onClick() {
          thumbLink && jumpLink(thumbLink);
        }
      }, {
        children: [thumb ? jsxRuntime.exports.jsx(Image, {
          src: thumb,
          mode: thumbMode,
          lazyLoad: lazyLoad,
          className: "van-card__img thumb-class"
        }, void 0) : renderThumb, tag ? jsxRuntime.exports.jsx(Index$w, _Object$assign({
          mark: true,
          type: "danger",
          className: "van-card__tag"
        }, {
          children: tag
        }), void 0) : renderTag]
      }), void 0), jsxRuntime.exports.jsxs(View, _Object$assign({
        className: 'van-card__content ' + bem('card__content', {
          center: centered
        })
      }, {
        children: [jsxRuntime.exports.jsxs(View, {
          children: [title ? jsxRuntime.exports.jsx(View, _Object$assign({
            className: "van-card__title title-class"
          }, {
            children: title
          }), void 0) : renderTitle, desc ? jsxRuntime.exports.jsx(View, _Object$assign({
            className: "van-card__desc desc-class"
          }, {
            children: desc
          }), void 0) : renderDesc, renderTags]
        }, void 0), jsxRuntime.exports.jsxs(View, _Object$assign({
          className: "van-card__bottom"
        }, {
          children: [renderPriceTop, price ? jsxRuntime.exports.jsxs(View, _Object$assign({
            className: "van-card__price price-class"
          }, {
            children: [jsxRuntime.exports.jsx(Text, {
              children: currency
            }, void 0), jsxRuntime.exports.jsx(Text, _Object$assign({
              className: "van-card__price-integer"
            }, {
              children: integerStr
            }), void 0), jsxRuntime.exports.jsx(Text, _Object$assign({
              className: "van-card__price-decimal"
            }, {
              children: decimalStr
            }), void 0)]
          }), void 0) : renderPrice, originPrice ? jsxRuntime.exports.jsx(View, _Object$assign({
            className: "van-card__origin-price origin-price-class"
          }, {
            children: currency + ' ' + originPrice
          }), void 0) : renderOriginPrice, num ? jsxRuntime.exports.jsx(View, _Object$assign({
            className: "van-card__num num-class"
          }, {
            children: 'x ' + num
          }), void 0) : renderNum, renderBottom]
        }), void 0)]
      }), void 0)]
    }), void 0), jsxRuntime.exports.jsx(View, _Object$assign({
      className: "van-card__footer"
    }, {
      children: renderFooter
    }), void 0)]
  }), void 0);
}

export { Index$u as ActionSheet, index$2 as Area, Index$16 as Button, index as Calendar, Index as Card, Index$K as Cell, Index$z as CellGroup, Index$H as Checkbox, Index$G as CheckboxGroup, Index$I as Circle, Index$S as Col, Index$L as Collapse, Index$J as CollapseItem, Index$2 as ConfigProvider, index$3 as CountDown, Index$b as DatetimePicker, Index$7 as Dialog, Index$N as Divider, Index$i as DropdownItem, Index$j as DropdownMenu, Index$O as Empty, Index$F as Field, Index$h as GoodsAction, Index$g as GoodsActionButton, Index$f as GoodsActionIcon, Index$l as Grid, Index$k as GridItem, Index$$ as Icon, Index$T as Image, Index$t as IndexAnchor, Index$s as IndexBar, Index$10 as Info, Index$Q as Loading, Index$15 as MiniLoginButton, Index$Z as MiniNavBar, Index$14 as MiniPhoneButton, Index$13 as MiniUserButton, Index$_ as NavBar, Index$M as NoticeBar, Index$m as Notify, Index$X as Overlay, VanPicker as Picker, Index$W as Popup, Index$12 as Progress, Index$E as Radio, Index$D as RadioGroup, Index$A as Rate, Index$R as Row, Index$y as Search, Index$a as ShareSheet, Index$d as Sidebar, Index$c as SidebarItem, Index$x as Skeleton, Index$e as Slider, Index$q as Stepper, Index$p as Steps, Index$11 as Sticky, Index$1 as SubmitBar, index$1 as SwipeCell, Index$C as Switch, Index$U as Tab, Index$o as Tabbar, Index$n as TabbarItem, Index$V as Tabs, Index$w as Tag, Index$P as Toast, Index$Y as Transition, Index$9 as TreeSelect, Index$B as Uploader, dialog, Notify as notify, Toast as toast };
//# sourceMappingURL=index.esm.js.map
