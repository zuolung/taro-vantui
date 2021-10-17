# Overlay 遮罩层

### 介绍

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

### 引入

在 Taro 文件中引入组件

```js
 import { Overlay } from "taro-vantui" 
```

## 代码演示

### 基础用法

```jsx
<Button type="primary" onClick={onClickShow}>显示遮罩层</vanButton>
<Overlay show={show} onClick={onClickHide} /> 
```

```js
const [show, setShow] = useState(false);

function onClickShow() {
  setShow(true);
}

function onClickHide() {
  setShow(false);
} 
```

### 嵌入内容

通过默认插槽可以在遮罩层上嵌入任意内容。

```jsx
<Button type="primary" onClick={onClickShow}>嵌入内容</vanButton>
<Overlay show={show} onClick={onClickHide}>
  <view class="wrapper">
    <view class="block" catch:tap="noop" />
  </view>
</vanOverlay> 
```

```js
const [show, setShow] = useState(false);

function onClickShow() {
  setShow(true);
}

function onClickHide() {
  setShow(false);
}

function noop() {} 
```

```css
.wrapper {
  display: flex;
  alignItems: center;
  justifyContent: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  backgroundColor: #fff;
}
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否展示遮罩层 | _boolean_ | `false` |
| zIndex | zIndex 层级 | _string \| number_ | `1` |
| duration | 动画时长，单位秒 | _string \| number_ | `0.3` |
| className | 自定义类名 | _string_ | - |
| customStyle | 自定义样式 | _string_ | - |
| lockScroll `v1.7.3` | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | _boolean_ | true |

### Events

| 事件名     | 说明       | 回调参数 |
| ---------- | ---------- | -------- |
| onClick | 点击时触发 | -        |

### Slots

| 名称 | 说明                               |
| ---- | ---------------------------------- |
| -    | 默认插槽，用于在遮罩层上方嵌入内容 |
