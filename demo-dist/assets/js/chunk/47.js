(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"263":function(e,n,c){"use strict";c.d(n,"a",(function(){return u}));var t=c(5),i=c.n(t),d=c(7),a=c.n(d),s=c(15),r=c.n(s),o=c(16),h=c.n(o),l=c(262),j=c(25),x=c.n(j),b=(c(264),c(36)),u=function(e){r()(Index,e);var n=h()(Index);function Index(){return i()(this,Index),n.call(this)}return a()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,c=e.title,t=e.card;return Object(b.jsxs)(l.l,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[c&&Object(b.jsx)(l.l,{"className":"demo-block__title","children":c}),t?Object(b.jsx)(l.l,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(x.a.Component)},"264":function(e,n,c){},"663":function(e,n,c){},"718":function(e,n,c){"use strict";c.r(n),c.d(n,"default",(function(){return O}));var t=c(5),i=c.n(t),d=c(7),a=c.n(d),s=c(21),r=c.n(s),o=c(15),h=c.n(o),l=c(16),j=c.n(l),x=c(8),b=c.n(x),u=c(262),g=c(25),p=c.n(g),k=c(265),f=c(263),C=(c(663),c(36)),O=function(e){h()(Index,e);var n=j()(Index);function Index(){var e;return i()(this,Index),e=n.call(this),b()(r()(e),"state",{"checked":!0,"checked2":!0}),b()(r()(e),"onChange",(function(n){var c=n.detail;e.setState({"checked":c})})),b()(r()(e),"onChange2",(function(n){var c=n.detail;k.mb.confirm({"title":"提示","message":"是否切换开关？"}).then((function(n){e.setState({"checked2":c})}))})),e}return a()(Index,[{"key":"render","value":function render(){var e=this.state,n=e.checked,c=e.checked2;return Object(C.jsxs)(u.a,{"children":[Object(C.jsx)(f.a,{"title":"基础用法","padding":!0,"children":Object(C.jsx)(k.cb,{"checked":n,"onChange":this.onChange})}),Object(C.jsx)(f.a,{"title":"禁用状态","padding":!0,"children":Object(C.jsx)(k.cb,{"checked":n,"disabled":!0,"onChange":this.onChange})}),Object(C.jsx)(f.a,{"title":"加载状态","padding":!0,"children":Object(C.jsx)(k.cb,{"checked":n,"loading":!0,"onChange":this.onChange})}),Object(C.jsx)(f.a,{"title":"自定义大小","padding":!0,"children":Object(C.jsx)(k.cb,{"checked":n,"size":"24px","onChange":this.onChange})}),Object(C.jsx)(f.a,{"title":"自定义颜色","padding":!0,"children":Object(C.jsx)(k.cb,{"checked":n,"activeColor":"#07c160","inactiveColor":"#ee0a24","onChange":this.onChange})}),Object(C.jsx)(f.a,{"title":"异步控制","padding":!0,"children":Object(C.jsx)(k.cb,{"checked":c,"size":"36px","onChange":this.onChange2})}),Object(C.jsx)(k.q,{"id":"van-dialog"})]})}}]),Index}(p.a.Component)}}]);