/*! For license information please see 59.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"243":function(t,r,n){"use strict";n.r(r),n.d(r,"taro_navigator_core",(function(){return c}));var i=n(45),a=n(275),s=n(28),c=function(){function e(t){Object(i.g)(this,t),this.onSuccess=Object(i.c)(this,"cuccess",7),this.onFail=Object(i.c)(this,"fail",7),this.onComplete=Object(i.c)(this,"Complete",7),this.openType="navigate",this.isHover=!1,this.delta=0}return e.prototype.onClick=function(){var t=this,r=t.openType,n=t.onSuccess,i=t.onFail,a=t.onComplete,c=Promise.resolve();switch(r){case"navigate":c=s.navigateTo({"url":this.url});break;case"redirect":c=s.redirectTo({"url":this.url});break;case"switchTab":c=s.switchTab({"url":this.url});break;case"reLaunch":c=s.reLaunch({"url":this.url});break;case"navigateBack":c=s.navigateBack({"delta":this.delta});break;case"exit":c=Promise.reject(new Error('navigator:fail 暂不支持"openType: exit"'))}c&&c.then((function(t){n.emit(t)})).catch((function(t){i.emit(t)})).finally((function(){a.emit()}))},e.prototype.render=function(){var t,r=this.isHover,n=this.hoverClass;return Object(i.e)(i.a,{"class":Object(a.a)((t={},t[n]=r,t))})},e}();c.style=".navigator-hover{background:#efefef}"},"275":function(t,r,n){"use strict";n.d(r,"a",(function(){return s}));var i=n(6),a=n.n(i);var s=function createCommonjsModule(t,r,n){return t(n={"path":r,"exports":{},"require":function require(t,r){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}((function(t){!function(){var r={}.hasOwnProperty;function o(){for(var t=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var s=a()(i);if("string"===s||"number"===s)t.push(i);else if(Array.isArray(i)){if(i.length){var c=o.apply(null,i);c&&t.push(c)}}else if("object"===s)if(i.toString===Object.prototype.toString)for(var u in i)r.call(i,u)&&i[u]&&t.push(u);else t.push(i.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):window.classNames=o}()}))}}]);