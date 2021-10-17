# Sticky 粘性布局

### 介绍

Sticky 组件与 CSS 中`position: sticky`属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。

### 引入

在 Taro 文件中引入组件

```js
 import { Sticky } from "taro-vantui" 
```

> Vant Weapp 1.0 版本开始支持此组件，升级方式参见[快速上手](#/quickstart)

## 代码演示

### 基础用法

将内容包裹在`Sticky`组件内即可。

```jsx
<Sticky>
  <Button type="primary">基础用法</vanButton>
</vanSticky> 
```

### 吸顶距离

通过`offsetTop`属性可以设置组件在吸顶时与顶部的距离。

```jsx
<Sticky offsetTop="{{ 50 }}">
  <Button type="info">吸顶距离</vanButton>
</vanSticky> 
```

### 指定容器

通过`container`属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会返回原位置。

```jsx
<view id="container" style="height: 150px;">
  <Sticky container={container}>
    <Button type="warning">指定容器</vanButton>
  </vanSticky>
</view> 
```

```js
const [container, setContainer] = useState(null);

function onReady() {
  setContainer(() => wx.createSelectorQuery().select('#container'));
} 
```

### 嵌套在 scrollView 内使用

通过 `scrollTop` 与 `offsetTop` 属性可以实现在 scrollView 内嵌套使用。

```jsx
<ScrollView
  onScroll={onScroll}
  scrollY
  id="scroller"
  style="height: 200px;"
>
  <view style="height: 400px; paddingTop: 50px;">
    <Sticky scrollTop="{{ scrollTop }}" offsetTop="{{ offsetTop }}">
      <Button type="warning">嵌套在 scrollView 内</vanButton>
    </vanSticky>
  </view>
</scrollView> 
```

```js
const [scrollTop, setScrollTop] = useState(0);
const [offsetTop, setOffsetTop] = useState(0);

function onScroll(event) {
  wx.createSelectorQuery().select('#scroller').boundingClientRect(res => {
    setScrollTop(event.detail.scrollTop);
    setOffsetTop(res.top);
  }).exec();
} 
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| offsetTop | 吸顶时与顶部的距离，单位`px` | _number_ | `0` |
| zIndex | 吸顶时的 zIndex | _number_ | `99` |
| container | 一个函数，返回容器对应的 NodesRef 节点 | _function_ | - |
| scrollTop | 当前滚动区域的滚动位置，非 `null` 时会禁用页面滚动事件的监听 | _number_ | - |

### Events

| 事件名 | 说明       | 回调参数                                       |
| ------ | ---------- | ---------------------------------------------- |
| scroll | 滚动时触发 | { scrollTop: 距离顶部位置, isFixed: 是否吸顶 } |