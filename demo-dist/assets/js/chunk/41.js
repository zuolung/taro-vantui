(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"263":function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var o=n(5),i=n.n(o),c=n(7),s=n.n(c),a=n(15),l=n.n(a),r=n(16),d=n.n(r),h=n(262),m=n(25),u=n.n(m),p=(n(264),n(36)),j=function(e){l()(Index,e);var t=d()(Index);function Index(){return i()(this,Index),t.call(this)}return s()(Index,[{"key":"render","value":function render(){var e=this.props,t=e.padding,n=e.title,o=e.card;return Object(p.jsxs)(h.l,{"className":"custom-class demo-block van-clearfix "+(t?"demo-block--padding":""),"children":[n&&Object(p.jsx)(h.l,{"className":"demo-block__title","children":n}),o?Object(p.jsx)(h.l,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(u.a.Component)},"264":function(e,t,n){},"718":function(e,t,n){},"768":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var o=n(4),i=n.n(o),c=n(5),s=n.n(c),a=n(7),l=n.n(a),r=n(21),d=n.n(r),h=n(15),m=n.n(h),u=n(16),p=n.n(u),j=n(8),b=n.n(j),w=n(262),x=n(25),S=n.n(x),f=n(265),k=n(263),O=(n(718),n(36)),C=function(e){m()(Index,e);var t=p()(Index);function Index(){var e;return s()(this,Index),e=t.call(this),b()(d()(e),"state",{"show":{"basic":!1,"withDesc":!1,"multiLine":!1,"customIcon":!1},"options":[{"name":"微信","icon":"wechat","openType":"share"},{"name":"朋友圈","icon":"wechat-moments"},{"name":"QQ","icon":"qq"},{"name":"微博","icon":"weibo"},{"name":"复制链接","icon":"link"},{"name":"分享海报","icon":"poster"},{"name":"二维码","icon":"qrcode"},{"name":"小程序码","icon":"weapp-qrcode"}],"multiLineOptions":[[{"name":"微信","icon":"wechat"},{"name":"微博","icon":"weibo"},{"name":"QQ","icon":"qq"}],[{"name":"复制链接","icon":"link"},{"name":"分享海报","icon":"poster"},{"name":"二维码","icon":"qrcode"}]],"customIconOptions":[{"name":"名称","icon":"https://img.yzcdn.cn/vant/custom-icon-fire.png"},{"name":"名称","icon":"https://img.yzcdn.cn/vant/custom-icon-light.png"},{"name":"名称","icon":"https://img.yzcdn.cn/vant/custom-icon-water.png"}],"optionsWithDesc":[{"name":"微信","icon":"wechat"},{"name":"微博","icon":"weibo"},{"name":"复制链接","icon":"link","description":"描述信息"},{"name":"分享海报","icon":"poster"},{"name":"二维码","icon":"qrcode"}]}),b()(d()(e),"onShowShareSheet",(function(t){e.setState({"show":i()(i()({},e.state.show),{},b()({},t.target.dataset.type,!0))})})),b()(d()(e),"onClose",(function(){e.setState({"show":{"basic":!1,"withDesc":!1,"multiLine":!1,"customIcon":!1}})})),b()(d()(e),"onSelect",(function(t){Object(f.ob)(t.detail.name),e.onClose()})),e}return l()(Index,[{"key":"render","value":function render(){var e=this,t=this.state,n=t.show,o=t.options,i=t.multiLineOptions,c=t.customIconOptions,s=t.optionsWithDesc;return Object(O.jsxs)(w.a,{"children":[Object(O.jsxs)(k.a,{"card":!0,"title":"基础用法","children":[Object(O.jsx)(f.f,{"isLink":!0,"title":"显示分享面板","onClick":function onClick(t){e.onShowShareSheet({"detail":t.detail,"currentTarget":{"dataset":{"type":"basic"}},"target":{"dataset":{"type":"basic"}}})}}),Object(O.jsx)(f.S,{"show":n.basic,"title":"立即分享给好友","options":o,"onClose":this.onClose,"onSelect":this.onSelect})]}),Object(O.jsxs)(k.a,{"card":!0,"title":"展示多行选项","children":[Object(O.jsx)(f.f,{"isLink":!0,"title":"显示分享面板","onClick":function onClick(t){e.onShowShareSheet({"detail":t.detail,"currentTarget":{"dataset":{"type":"multiLine"}},"target":{"dataset":{"type":"multiLine"}}})}}),Object(O.jsx)(f.S,{"show":n.multiLine,"title":"立即分享给好友","options":i,"onClose":this.onClose,"onSelect":this.onSelect})]}),Object(O.jsxs)(k.a,{"card":!0,"title":"自定义图标","children":[Object(O.jsx)(f.f,{"isLink":!0,"title":"显示分享面板","onClick":function onClick(t){e.onShowShareSheet({"detail":t.detail,"currentTarget":{"dataset":{"type":"customIcon"}},"target":{"dataset":{"type":"customIcon"}}})}}),Object(O.jsx)(f.S,{"show":n.customIcon,"options":c,"onClose":this.onClose,"onSelect":this.onSelect})]}),Object(O.jsxs)(k.a,{"card":!0,"title":"展示描述信息","children":[Object(O.jsx)(f.f,{"isLink":!0,"title":"显示分享面板","onClick":function onClick(t){e.onShowShareSheet({"detail":t.detail,"currentTarget":{"dataset":{"type":"withDesc"}},"target":{"dataset":{"type":"withDesc"}}})}}),Object(O.jsx)(f.S,{"show":n.withDesc,"title":"立即分享给好友","options":s,"description":"描述信息","onClose":this.onClose,"onSelect":this.onSelect})]}),Object(O.jsx)(f.ib,{"id":"van-toast"})]})}}]),Index}(S.a.Component)}}]);