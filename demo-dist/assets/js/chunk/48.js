(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"263":function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var c=n(5),a=n.n(c),i=n(7),s=n.n(i),r=n(15),o=n.n(r),d=n(16),l=n.n(d),h=n(262),b=n(25),j=n.n(b),f=(n(264),n(36)),x=function(e){o()(Index,e);var t=l()(Index);function Index(){return a()(this,Index),t.call(this)}return s()(Index,[{"key":"render","value":function render(){var e=this.props,t=e.padding,n=e.title,c=e.card;return Object(f.jsxs)(h.l,{"className":"custom-class demo-block van-clearfix "+(t?"demo-block--padding":""),"children":[n&&Object(f.jsx)(h.l,{"className":"demo-block__title","children":n}),c?Object(f.jsx)(h.l,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(j.a.Component)},"264":function(e,t,n){},"667":function(e,t,n){},"723":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var c=n(5),a=n.n(c),i=n(7),s=n.n(i),r=n(21),o=n.n(r),d=n(15),l=n.n(d),h=n(16),b=n.n(h),j=n(8),f=n.n(j),x=n(262),v=n(25),g=n.n(v),u=n(28),O=n(265),m=n(263),p=(n(667),n(36)),C=function(e){l()(Index,e);var t=b()(Index);function Index(){var e;return a()(this,Index),e=t.call(this),f()(o()(e),"state",{"active":0,"active2":"home","active3":0,"active4":0,"active5":0,"active6":0,"icon":{"normal":"https://img.yzcdn.cn/vant/user-inactive.png","active":"https://img.yzcdn.cn/vant/user-active.png"}}),f()(o()(e),"onChange",(function(t){var n=t.currentTarget.dataset.key;e.setState(f()({},n,t.detail))})),f()(o()(e),"handleChange",(function(t){var n=t.currentTarget.dataset.key;e.setState(f()({},n,t.detail)),Object(u.showToast)({"title":"点击标签 ".concat(t.detail+1),"icon":"none"})})),e}return s()(Index,[{"key":"render","value":function render(){var e=this,t=this.state,n=t.active,c=t.active2,a=t.active3,i=t.active4,s=t.icon,r=t.active5,o=t.active6;return Object(p.jsxs)(x.a,{"children":[Object(p.jsx)(m.a,{"title":"基础用法","children":Object(p.jsxs)(O.eb,{"active":n,"className":"tabbar-position","safeAreaInsetBottom":!1,"onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"active"}},"target":{"dataset":{"key":"active"}}})},"children":[Object(p.jsx)(O.fb,{"icon":"home-o","children":"标签"}),Object(p.jsx)(O.fb,{"icon":"search","children":"标签"}),Object(p.jsx)(O.fb,{"icon":"friends-o","children":"标签"}),Object(p.jsx)(O.fb,{"icon":"setting-o","children":"标签"})]})}),Object(p.jsx)(m.a,{"title":"通过名称匹配","children":Object(p.jsxs)(O.eb,{"active":c,"className":"tabbar-position","safeAreaInsetBottom":!1,"onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"active2"}},"target":{"dataset":{"key":"active2"}}})},"children":[Object(p.jsx)(O.fb,{"name":"home","icon":"home-o","children":"标签"}),Object(p.jsx)(O.fb,{"name":"search","icon":"search","children":"标签"}),Object(p.jsx)(O.fb,{"name":"friends","icon":"friends-o","children":"标签"}),Object(p.jsx)(O.fb,{"name":"setting","icon":"setting-o","children":"标签"})]})}),Object(p.jsx)(m.a,{"title":"显示徽标","children":Object(p.jsxs)(O.eb,{"active":a,"className":"tabbar-position","safeAreaInsetBottom":!1,"onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"active3"}},"target":{"dataset":{"key":"active3"}}})},"children":[Object(p.jsx)(O.fb,{"icon":"home-o","children":"标签"}),Object(p.jsx)(O.fb,{"icon":"search","dot":!0,"children":"标签"}),Object(p.jsx)(O.fb,{"icon":"friends-o","info":"5","children":"标签"}),Object(p.jsx)(O.fb,{"icon":"setting-o","info":"20","children":"标签"})]})}),Object(p.jsx)(m.a,{"title":"自定义图标","children":Object(p.jsxs)(O.eb,{"active":i,"className":"tabbar-position","safeAreaInsetBottom":!1,"onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"active4"}},"target":{"dataset":{"key":"active4"}}})},"children":[Object(p.jsx)(O.fb,{"info":"3","renderIcon":Object(p.jsx)(x.a,{"children":Object(p.jsx)(O.C,{"src":s.normal,"mode":"aspectFit","style":"width: 30px; height: 18px;"})}),"renderIconactive":Object(p.jsx)(x.a,{"children":Object(p.jsx)(O.C,{"src":s.active,"mode":"aspectFit","style":"width: 30px; height: 18px;"})}),"children":"自定义"}),Object(p.jsx)(O.fb,{"icon":"search","children":"标签"}),Object(p.jsx)(O.fb,{"icon":"setting-o","children":"标签"})]})}),Object(p.jsx)(m.a,{"title":"自定义颜色","children":Object(p.jsxs)(O.eb,{"active":r,"className":"tabbar-position","activeColor":"#07c160","inactiveColor":"#000","safeAreaInsetBottom":!1,"onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"active5"}},"target":{"dataset":{"key":"active5"}}})},"children":[Object(p.jsx)(O.fb,{"icon":"home-o","children":"标签"}),Object(p.jsx)(O.fb,{"icon":"search","children":"标签"}),Object(p.jsx)(O.fb,{"icon":"friends-o","children":"标签"}),Object(p.jsx)(O.fb,{"icon":"setting-o","children":"标签"})]})}),Object(p.jsx)(m.a,{"title":"切换标签事件","children":Object(p.jsxs)(O.eb,{"active":o,"className":"tabbar-position","safeAreaInsetBottom":!1,"onChange":function onChange(t){e.handleChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"active6"}},"target":{"dataset":{"key":"active6"}}})},"children":[Object(p.jsx)(O.fb,{"icon":"home-o","children":"标签1"}),Object(p.jsx)(O.fb,{"icon":"search","children":"标签2"}),Object(p.jsx)(O.fb,{"icon":"friends-o","children":"标签3"}),Object(p.jsx)(O.fb,{"icon":"setting-o","children":"标签4"})]})})]})}}]),Index}(g.a.Component)}}]);