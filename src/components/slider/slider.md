# Slider 滑块

### 介绍

滑动输入条，用于在给定的范围内选择一个值。

### 引入

在 Taro 文件中引入组件

```javascript
import { Slider } from "taro-vantui"; 
```

## 代码演示

### 基本用法

```jsx
<Slider value="50" onChange={onChange} /> 
```

```javascript
this.state = {};

function onChange(event) {
  wx.showToast({
    icon: 'none',
    title: `当前值：${event.detail}`
  });
} 
```

### 指定选择范围

```jsx
<Slider min="50" max="50" /> 
```

### 禁用

```jsx
<Slider value="50" disabled /> 
```

### 指定步长

```jsx
<Slider value="50" step="10" /> 
```

### 自定义样式

```jsx
<Slider value="50" barHeight="4px" activeColor="#ee0a24" /> 
```

### 自定义按钮

```jsx
<Slider value={ currentValue } useButtonSlot onDrag={onDrag}>
  <view class={customButton} slot="button">{{ currentValue }}/100</view>
</Slider> 
```

```javascript
this.state = {
  currentValue: 50
};

function onDrag(event) {
  this.setData({
    currentValue: event.detail.value
  });
} 
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前进度百分比，在双滑块模式下为数组格式 | _number \| number[]_ | `0` |
| disabled | 是否禁用滑块 | _boolean_ | `false` |
| max | 最大值 | _number_ | `100` |
| min | 最小值 | _number_ | `0` |
| step | 步长 | _number_ | `1` |
| barHeight | 进度条高度，默认单位为 `px` | _string \| number_ | `2px` |
| activeColor | 进度条激活态颜色 | _string_ | `#1989fa` |
| inactiveColor | 进度条默认颜色 | _string_ | `#e5e5e5` |
| useSlotButton | 是否使用按钮插槽 | _boolean_ | `false` |
| range `v1.8.4` | 是否开启双滑块模式 | _boolean_ | `false` |

### Events

| 事件名          | 说明             | 参数                         |
| --------------- | ---------------- | ---------------------------- |
| onDrag       | 拖动进度条时触发 | event.detail.value: 当前进度 |
| onChange     | 进度值改变后触发 | event.detail: 当前进度       |
| onDragStart | 开始拖动时触发   | -                            |
| onDragEnd   | 结束拖动时触发   | -                            |

### 外部样式类

| 类名         | 说明         |
| ------------ | ------------ |
| customClass | 根节点样式类 |

### Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| button | 自定义滑块按钮 | _{ value: number }_ |
| leftButton `v1.8.4` | 自定义左侧滑块按钮（双滑块模式下） | _{ value: number }_ |
| rightButton `v1.8.4` | 自定义右侧滑块按钮 （双滑块模式下） | _{ value: number }_ |
