(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"263":function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(5),c=n.n(a),r=n(7),o=n.n(r),i=n(15),s=n.n(i),l=n(16),d=n.n(l),h=n(262),u=n(25),x=n.n(u),b=(n(264),n(36)),j=function(e){s()(Index,e);var t=d()(Index);function Index(){return c()(this,Index),t.call(this)}return o()(Index,[{"key":"render","value":function render(){var e=this.props,t=e.padding,n=e.title,a=e.card;return Object(b.jsxs)(h.l,{"className":"custom-class demo-block van-clearfix "+(t?"demo-block--padding":""),"children":[n&&Object(b.jsx)(h.l,{"className":"demo-block__title","children":n}),a?Object(b.jsx)(h.l,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(x.a.Component)},"264":function(e,t,n){},"267":function(e,t,n){var a=n(19),c=n(14),r=n(67),o=c("species");e.exports=function(e){return r>=51||!a((function(){var t=[];return(t.constructor={})[o]=function(){return{"foo":1}},1!==t[e](Boolean).foo}))}},"269":function(e,t,n){"use strict";var a=n(46),c=n(278).map;a({"target":"Array","proto":!0,"forced":!n(267)("map")},{"map":function map(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}})},"699":function(e,t,n){},"751":function(t,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return C}));var c=a(5),r=a.n(c),o=a(7),i=a.n(o),s=a(21),l=a.n(s),d=a(15),h=a.n(d),u=a(16),x=a.n(u),b=a(8),j=a.n(b),k=(a(269),a(262)),g=a(25),m=a.n(g),f=a(265),v=a(263),p=(a(699),a(36)),C=function(t){h()(Index,t);var n=x()(Index);function Index(){var e;return r()(this,Index),e=n.call(this),j()(l()(e),"state",{"checkbox1":!0,"checkbox2":!0,"checkbox3":!0,"checkboxLabel":!0,"checkboxSize":!0,"checkboxShape":!0,"list":["a","b","c"],"result":["a","b"],"result2":[],"result3":[],"result4":[],"activeIcon":"https://img.yzcdn.cn/vant/user-active.png","inactiveIcon":"https://img.yzcdn.cn/vant/user-inactive.png"}),j()(l()(e),"onChange",(function(t){var n=t.currentTarget.dataset.key;e.setState(j()({},n,t.detail))})),j()(l()(e),"onClick",(function(t){var n=t.currentTarget.dataset.value;e.setState({"radio3":n})})),j()(l()(e),"toggle",(function(t){var n=t.currentTarget.dataset,a=n.index,c=n.name,r=e.state[c];r[a]=!r[a],e.setState(j()({},c,r))})),j()(l()(e),"noop",(function(){})),e}return i()(Index,[{"key":"render","value":function render(){var t=this,n=this.state,a=n.checkbox1,c=n.checkboxShape,r=n.checkbox2,o=n.checkboxSize,i=n.checkbox3,s=n.activeIcon,l=n.inactiveIcon,d=n.checkboxLabel,h=n.result,u=n.list,x=n.result4,b=n.result2,j=n.result3;return Object(p.jsxs)(k.a,{"children":[Object(p.jsx)(v.a,{"title":"基本用法","children":Object(p.jsx)(f.h,{"value":a,"className":"demo-checkbox","onChange":function onChange(e){t.onChange({"detail":e.detail,"currentTarget":{"dataset":{"key":"checkbox1"}},"target":{"dataset":{"key":"checkbox1"}}})},"children":"复选框"})}),Object(p.jsxs)(v.a,{"title":"禁用状态","children":[Object(p.jsx)(f.h,{"disabled":!0,"value":!1,"className":"demo-checkbox","children":"复选框"}),Object(p.jsx)(f.h,{"disabled":!0,"value":!0,"className":"demo-checkbox","children":"复选框"})]}),Object(p.jsx)(v.a,{"title":"自定义形状","children":Object(p.jsx)(f.h,{"value":c,"shape":"square","className":"demo-checkbox","onChange":function onChange(e){t.onChange({"detail":e.detail,"currentTarget":{"dataset":{"key":"checkboxShape"}},"target":{"dataset":{"key":"checkboxShape"}}})},"children":"复选框"})}),Object(p.jsx)(v.a,{"title":"自定义颜色","children":Object(p.jsx)(f.h,{"value":r,"checkedColor":"#07c160","className":"demo-checkbox","onChange":function onChange(e){t.onChange({"detail":e.detail,"currentTarget":{"dataset":{"key":"checkbox2"}},"target":{"dataset":{"key":"checkbox2"}}})},"children":"复选框"})}),Object(p.jsx)(v.a,{"title":"自定义大小","children":Object(p.jsx)(f.h,{"iconSize":"25px","value":o,"className":"demo-checkbox","onChange":function onChange(e){t.onChange({"detail":e.detail,"currentTarget":{"dataset":{"key":"checkboxSize"}},"target":{"dataset":{"key":"checkboxSize"}}})},"children":"复选框"})}),Object(p.jsx)(v.a,{"title":"自定义图标","children":Object(p.jsx)(f.h,{"useIconSlot":!0,"value":i,"className":"demo-checkbox","onChange":function onChange(e){t.onChange({"detail":e.detail,"currentTarget":{"dataset":{"key":"checkbox3"}},"target":{"dataset":{"key":"checkbox3"}}})},"renderIcon":Object(p.jsx)(k.a,{"children":Object(p.jsx)(f.C,{"className":"icon","mode":"widthFix","src":i?s:l})}),"children":"自定义图标"})}),Object(p.jsx)(v.a,{"title":"禁用文本点击","children":Object(p.jsx)(f.h,{"labelDisabled":!0,"value":d,"className":"demo-checkbox","onChange":function onChange(e){t.onChange({"detail":e.detail,"currentTarget":{"dataset":{"key":"checkboxLabel"}},"target":{"dataset":{"key":"checkboxLabel"}}})},"children":"复选框"})}),Object(p.jsx)(v.a,{"title":"复选框组","children":Object(p.jsx)(f.i,{"value":h,"onChange":function onChange(e){t.onChange({"detail":e.detail,"currentTarget":{"dataset":{"key":"result"}},"target":{"dataset":{"key":"result"}}})},"children":u.map((function(e,t){return Object(p.jsx)(f.h,{"name":e,"className":"demo-checkbox","children":"复选框 "+e},e)}))})}),Object(p.jsx)(v.a,{"title":"水平排列","children":Object(p.jsx)(f.i,{"direction":"horizontal","value":x,"onChange":function onChange(e){t.onChange({"detail":e.detail,"currentTarget":{"dataset":{"key":"result4"}},"target":{"dataset":{"key":"result4"}}})},"children":u.map((function(e,t){return Object(p.jsx)(f.h,{"name":e,"className":"demo-checkbox","children":"复选框 "+e},e)}))})}),Object(p.jsx)(v.a,{"title":"限制最大可选数","children":Object(p.jsx)(f.i,{"value":b,"max":"2","onChange":function onChange(e){t.onChange({"detail":e.detail,"currentTarget":{"dataset":{"key":"result2"}},"target":{"dataset":{"key":"result2"}}})},"children":u.map((function(e,t){return Object(p.jsx)(f.h,{"name":e,"className":"demo-checkbox","children":"复选框 "+e},e)}))})}),Object(p.jsx)(v.a,{"title":"搭配单元格组件使用","children":Object(p.jsx)(f.i,{"value":j,"data-key":"result3","children":Object(p.jsx)(f.g,{"children":u.map((function(n,a){return Object(p.jsx)(f.f,{"title":"复选框 "+n,"valueClass":"value-class","clickable":!0,"data-index":a,"data-name":"result3","children":Object(p.jsx)(f.h,{"value":j[a],"onChange":function onChange(n){t.toggle({"detail":e.detail,"currentTarget":{"dataset":{"index":a,"name":"result3"}},"target":{"dataset":{"index":a,"name":"result3"}}})},"className":"checkboxes-"+a,"name":n})},n)}))})})})]})}}]),Index}(m.a.Component)}}]);