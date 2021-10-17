# NavBar 导航栏

### 介绍

为页面提供导航功能，常用于页面顶部。

### 引入

在 Taro 文件中引入组件

```js
 import { NavBar } from "taro-vantui" 
```

## 代码演示

### 基础用法

```jsx
<NavBar
  title="标题"
  leftText="返回"
  rightText="按钮"
  leftArrow
  onClickLeft={onClickLeft}
  onClickRight={onClickRight}
/> 
```

```js
function onClickLeft() {
  wx.showToast({
    title: '点击返回',
    icon: 'none'
  });
}

function onClickRight() {
  wx.showToast({
    title: '点击按钮',
    icon: 'none'
  });
} 
```

### 高级用法

通过 slot 定制内容。

```jsx
<NavBar title="标题" leftText="返回" leftArrow>
  <Icon name="search" slot="right" />
</vanNavBar> 
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | _string_ | `''` |
| leftText | 左侧文案 | _string_ | `''` |
| rightText | 右侧文案 | _string_ | `''` |
| leftArrow | 是否显示左侧箭头 | _boolean_ | `false` |
| fixed | 是否固定在顶部 | _boolean_ | `false` |
| placeholder | 固定在顶部时是否开启占位 | _boolean_ | `false` |
| border | 是否显示下边框 | _boolean_ | `true` |
| zIndex | 元素 zIndex | _number_ | `1` |
| customStyle | 根节点自定义样式 | _string_ | - |
| safeAreaInsetTop | 是否留出顶部安全距离（状态栏高度） | _boolean_ | `true` |

### Slot

| 名称  | 说明               |
| ----- | ------------------ |
| title | 自定义标题         |
| left  | 自定义左侧区域内容 |
| right | 自定义右侧区域内容 |

### Events

| 事件名           | 说明               | 参数 |
| ---------------- | ------------------ | ---- |
| onClickLeft  | 点击左侧按钮时触发 | -    |
| onClickRight | 点击右侧按钮时触发 | -    |

### 外部样式类

| 类名         | 说明         |
| ------------ | ------------ |
| customClass | 根节点样式类 |
| titleClass  | 标题样式类   |
