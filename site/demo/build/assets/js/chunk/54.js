(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"684":function(e,t,n){},"736":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return X}));var c=n(5),i=n.n(c),l=n(7),j=n.n(l),r=n(21),s=n.n(r),a=n(15),u=n.n(a),d=n(16),x=n.n(d),b=n(8),o=n.n(b),h=n(262),O=n(25),f=n.n(O),v=n(265),p=(n(684),n(36)),X=function(e){u()(Index,e);var t=x()(Index);function Index(){var e;return i()(this,Index),e=t.call(this),o()(s()(e),"state",{"value":1}),o()(s()(e),"onChange",(function(t){v.ob.loading({"forbidClick":!0}),setTimeout((function(){v.ob.clear(),e.setState({"value":t.detail})}),500)})),e}return j()(Index,[{"key":"render","value":function render(){var e=this.state.value;return Object(p.jsxs)(h.a,{"children":[Object(p.jsx)(v.f,{"center":!0,"title":"基础用法","children":Object(p.jsx)(v.X,{"value":1})}),Object(p.jsx)(v.f,{"center":!0,"title":"步长设置","children":Object(p.jsx)(v.X,{"value":1,"step":"2"})}),Object(p.jsx)(v.f,{"center":!0,"title":"限制输入范围","children":Object(p.jsx)(v.X,{"value":1,"min":"5","max":"8"})}),Object(p.jsx)(v.f,{"center":!0,"title":"限制输入整数","children":Object(p.jsx)(v.X,{"value":1,"integer":!0})}),Object(p.jsx)(v.f,{"center":!0,"title":"禁用状态","children":Object(p.jsx)(v.X,{"value":1,"disabled":!0})}),Object(p.jsx)(v.f,{"center":!0,"title":"禁用长按","children":Object(p.jsx)(v.X,{"value":1,"longPress":!1})}),Object(p.jsx)(v.f,{"center":!0,"title":"固定小数位数","children":Object(p.jsx)(v.X,{"value":1,"step":"0.2","decimalLength":1})}),Object(p.jsx)(v.f,{"center":!0,"title":"异步变更","children":Object(p.jsx)(v.X,{"value":e,"asyncChange":!0,"onChange":this.onChange})}),Object(p.jsx)(v.f,{"center":!0,"title":"自定义大小","children":Object(p.jsx)(v.X,{"value":1,"inputWidth":"40px","buttonSize":"32px"})}),Object(p.jsx)(v.f,{"center":!0,"title":"圆角风格","children":Object(p.jsx)(v.X,{"value":1,"theme":"round","buttonSize":"22px"})}),Object(p.jsx)(v.ib,{"id":"van-toast"})]})}}]),Index}(f.a.Component)}}]);