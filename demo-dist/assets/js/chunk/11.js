(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"263":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(5),c=n.n(r),i=n(7),s=n.n(i),a=n(15),d=n.n(a),l=n(16),o=n.n(l),j=n(262),h=n(25),u=n.n(h),x=(n(264),n(36)),f=function(e){d()(Index,e);var t=o()(Index);function Index(){return c()(this,Index),t.call(this)}return s()(Index,[{"key":"render","value":function render(){var e=this.props,t=e.padding,n=e.title,r=e.card;return Object(x.jsxs)(j.l,{"className":"custom-class demo-block van-clearfix "+(t?"demo-block--padding":""),"children":[n&&Object(x.jsx)(j.l,{"className":"demo-block__title","children":n}),r?Object(x.jsx)(j.l,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(u.a.Component)},"264":function(e,t,n){},"267":function(e,t,n){var r=n(48);e.exports=Array.isArray||function isArray(e){return"Array"==r(e)}},"268":function(e,t,n){var r=n(19),c=n(14),i=n(68),s=c("species");e.exports=function(e){return i>=51||!r((function(){var t=[];return(t.constructor={})[s]=function(){return{"foo":1}},1!==t[e](Boolean).foo}))}},"269":function(e,t,n){var r=n(270);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"270":function(e,t,n){var r=n(267),c=n(108),i=n(26),s=n(14)("species");e.exports=function(e){var t;return r(e)&&(t=e.constructor,(c(t)&&(t===Array||r(t.prototype))||i(t)&&null===(t=t[s]))&&(t=void 0)),void 0===t?Array:t}},"272":function(e,t,n){var r=n(70),c=n(69),i=n(47),s=n(67),a=n(269),d=[].push,createMethod=function(e){var t=1==e,n=2==e,l=3==e,o=4==e,j=6==e,h=7==e,u=5==e||j;return function(x,f,p,b){for(var O,v,g=i(x),m=c(g),w=r(f,p,3),k=s(m),y=0,I=b||a,C=t?I(x,k):n||h?I(x,0):void 0;k>y;y++)if((u||y in m)&&(v=w(O=m[y],y,g),e))if(t)C[y]=v;else if(v)switch(e){case 3:return!0;case 5:return O;case 6:return y;case 2:d.call(C,O)}else switch(e){case 4:return!1;case 7:d.call(C,O)}return j?-1:l||o?o:C}};e.exports={"forEach":createMethod(0),"map":createMethod(1),"filter":createMethod(2),"some":createMethod(3),"every":createMethod(4),"find":createMethod(5),"findIndex":createMethod(6),"filterReject":createMethod(7)}},"273":function(e,t,n){"use strict";var r=n(46),c=n(272).map;r({"target":"Array","proto":!0,"forced":!n(268)("map")},{"map":function map(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}})},"648":function(e,t,n){},"708":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n(5),c=n.n(r),i=n(7),s=n.n(i),a=n(21),d=n.n(a),l=n(15),o=n.n(l),j=n(16),h=n.n(j),u=n(8),x=n.n(u),f=(n(273),n(262)),p=n(25),b=n.n(p),O=n(265),v=n(263),g=(n(648),n(36)),m=function(e){o()(Index,e);var t=h()(Index);function Index(){var e;return c()(this,Index),e=t.call(this),x()(d()(e),"state",{"fits":["contain","cover","fill","none","scale-down","widthFix","heightFix"],"src":"https://img.yzcdn.cn/vant/cat.jpeg"}),e}return s()(Index,[{"key":"render","value":function render(){var e=this.state,t=e.src,n=e.fits;return Object(g.jsxs)(f.a,{"children":[Object(g.jsx)(v.a,{"title":"基础用法","padding":!0,"children":Object(g.jsx)(O.Q,{"children":Object(g.jsx)(O.C,{"width":"100","height":"100","src":t})})}),Object(g.jsx)(v.a,{"title":"填充模式","padding":!0,"children":Object(g.jsx)(O.Q,{"gutter":"20","children":n.map((function(e,n){return Object(g.jsxs)(O.k,{"span":"8","children":[Object(g.jsx)(O.C,{"fit":e,"width":"100%","height":"27vw","src":t}),Object(g.jsx)(f.l,{"className":"text","children":e})]},e.fit)}))})}),Object(g.jsx)(v.a,{"title":"圆形图片","padding":!0,"children":Object(g.jsx)(O.Q,{"gutter":"20","children":n.map((function(e,n){return Object(g.jsxs)(O.k,{"span":"8","children":[Object(g.jsx)(O.C,{"round":!0,"fit":e,"width":"100%","height":"27vw","src":t}),Object(g.jsx)(f.l,{"className":"text","children":e})]},e.fit)}))})}),Object(g.jsx)(v.a,{"title":"加载中提示","padding":!0,"children":Object(g.jsxs)(O.Q,{"gutter":"20","children":[Object(g.jsxs)(O.k,{"span":"8","children":[Object(g.jsx)(O.C,{"width":"100%","height":"27vw"}),Object(g.jsx)(f.l,{"className":"text","children":"默认提示"})]}),Object(g.jsxs)(O.k,{"span":"8","children":[Object(g.jsx)(O.C,{"width":"100%","height":"27vw","useLoadingSlot":!0,"renderLoading":Object(g.jsx)(f.a,{"children":Object(g.jsx)(O.F,{"type":"spinner","size":"20","vertical":!0})})}),Object(g.jsx)(f.l,{"className":"text","children":"自定义提示"})]})]})}),Object(g.jsx)(v.a,{"title":"加载失败提示","padding":!0,"children":Object(g.jsxs)(O.Q,{"gutter":"20","children":[Object(g.jsxs)(O.k,{"span":"8","children":[Object(g.jsx)(O.C,{"width":"100%","height":"27vw","src":"x"}),Object(g.jsx)(f.l,{"className":"text","children":"默认提示"})]}),Object(g.jsxs)(O.k,{"span":"8","children":[Object(g.jsx)(O.C,{"width":"100%","height":"27vw","src":"x","useErrorSlot":!0,"renderError":Object(g.jsx)(f.a,{"children":Object(g.jsx)(f.i,{"children":"加载失败"})})}),Object(g.jsx)(f.l,{"className":"text","children":"自定义提示"})]})]})})]})}}]),Index}(b.a.Component)}}]);