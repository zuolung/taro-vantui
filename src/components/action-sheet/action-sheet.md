# ActionSheet 动作面板

### 介绍

底部弹起的模态面板，包含与当前情境相关的多个选项。

### 引入

在 Taro 文件中引入组件

```javascript
import { ActionSheet } from "taro-vantui"; 
```

## 代码演示

### 基础用法

需要传入一个`actions`的数组，数组的每一项是一个对象，对象属性见文档下方表格。

```jsx
<ActionSheet
  show={ show }
  actions={ actions }
  onClose={onClose}
  onSelect={onSelect}
/> 
```

```javascript
this.state = {
  show: false,
  actions: [{
    "name": "选项"
  }, {
    "name": "选项"
  }, {
    "name": "选项",
    "subname": "描述信息",
    "openType": "share"
  }]
};

function onClose() {
  this.setData({
    show: false
  });
}

function onSelect(event) {
  console.log(event.detail);
} 
```

### 选项状态

选项可以设置为加载状态或禁用状态。

```jsx
<ActionSheet
  show={ show }
  actions={ actions }
  cancelText="取消"
/> 
```

```javascript
this.state = {
  show: false,
  actions: [{
    "name": "着色选项",
    "color": "#ee0a24"
  }, {
    "loading": true
  }, {
    "name": "禁用选项",
    "disabled": true
  }]
}; 
```

### 展示取消按钮

设置`cancelText`属性后，会在底部展示取消按钮，点击后关闭当前菜单。

```jsx
<ActionSheet
  show={ show }
  actions={ actions }
  cancelText="取消"
/> 
```

### 展示描述信息

设置`description`属性后，会在选项上方显示描述信息。

```jsx
<ActionSheet
  show={ show }
  actions={ actions }
  description="这是一段描述信息"
/> 
```

### 展示标题栏

通过设置`title`属性展示标题栏，同时可以使用插槽自定义菜单内容。

```jsx
<ActionSheet show={ show } title="标题">
  <view>内容</view>
</ActionSheet> 
```

### 微信开放能力

需要传入一个`actions`的数组，数组的每一项是一个对象，对象属性见文档下方表格。

```jsx
<ActionSheet
  show={ show }
  actions={ actions }
  onClose={onClose}
  onGetuserinfo={onGetUserInfo}
/> 
```

```javascript
this.state = {
  show: false,
  actions: [{
    "name": "获取用户信息",
    "color": "#07c160",
    "openType": "getUserInfo"
  }]
};

function onClose() {
  this.setData({
    show: false
  });
}

function onGetUserInfo(e) {
  console.log(e.detail);
} 
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| actions | 菜单选项 | _Array_ | `[]` |
| title | 标题 | _string_ | - |
| description `v1.0.0` | 选项上方的描述信息 | _string_ | - |
| zIndex | zIndex 层级 | _number_ | `100` |
| cancelText | 取消按钮文字 | _string_ | - |
| overlay | 是否显示遮罩层 | _boolean_ | - |
| round `v1.0.0` | 是否显示圆角 | _boolean_ | `true` |
| closeOnClickAction | 是否在点击选项后关闭 | _boolean_ | `true` |
| closeOnClickOverlay | 点击遮罩是否关闭菜单 | _boolean_ | - |
| safeAreaInsetBottom | 是否为 iPhoneX 留出底部安全距离 | _boolean_ | `true` |

### Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| onSelect | 选中选项时触发，禁用或加载状态下不会触发 | event.detail: 选项对应的对象 |
| onClose | 关闭时触发 | - |
| onCancel | 取消按钮点击时触发 | - |
| onClickOverlay | 点击遮罩层时触发 | - |
| onGetuserinfo | 用户点击该按钮时，会返回获取到的用户信息，回调的 detail 数据与 wx.getUserInfo 返回的一致，<a href="#/actionSheet#actions">openType</a>="getUserInfo"时有效 | - |
| onContact | 客服消息回调，<a href="#/actionSheet#actions">openType</a>="contact"时有效 | - |
| onGetphonenumber | 获取用户手机号回调，<a href="#/actionSheet#actions">openType</a>="getPhoneNumber"时有效 | - |
| onError | 当使用开放能力时，发生错误的回调，<a href="#/actionSheet#actions">openType</a>="launchApp"时有效 | - |
| onLaunchapp | 打开 APP 成功的回调，<a href="#/actionSheet#actions">openType</a>="launchApp"时有效 | - |
| onOpensetting | 在打开授权设置页后回调，<a href="#/actionSheet#actions">openType</a>="openSetting"时有效 | - |

### actions

`API`中的`actions`为一个对象数组，数组中的每一个对象配置每一列，每一列有以下`key`：

| 键名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标题 | _string_ | - |
| subname | 二级标题 | _string_ | - |
| color | 选项文字颜色 | _string_ | - |
| loading | 是否为加载状态 | _boolean_ | - |
| disabled | 是否为禁用状态 | _boolean_ | - |
| className | 为对应列添加额外的 class 类名 | _string_ | - |
| openType | 微信开放能力，具体支持可参考 [微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | _string_ | - |
| lang | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文 | _string_ | `en` |
| sessionFrom | 会话来源，openType="contact"时有效 | _string_ | - |
| sendMessageTitle | 会话内消息卡片标题，openType="contact"时有效 | _string_ | 当前标题 |
| sendMessagePath | 会话内消息卡片点击跳转小程序路径，openType="contact"时有效 | _string_ | 当前分享路径 |
| sendMessageImg | 会话内消息卡片图片，openType="contact"时有效 | _string_ | 截图 |
| showMessageCard | 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，openType="contact"时有效 | _string_ | `false` |
| appParameter | 打开 APP 时，向 APP 传递的参数，openType=launchApp 时有效 | _string_ | - |
