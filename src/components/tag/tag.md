# Tag 标签

### 介绍

用于标记关键词和概括主要内容。

### 引入

在 Taro 文件中引入组件

```js
 import { Tag } from "taro-vantui" 
```

## 代码演示

### 基础用法

通过 `type` 属性控制标签颜色，默认为灰色。

```jsx
<Tag type="primary">标签</vanTag>
<Tag type="success">标签</vanTag>
<Tag type="danger">标签</vanTag>
<Tag type="warning">标签</vanTag> 
```

### 空心样式

设置 `plain` 属性设置为空心样式。

```jsx
<Tag plain type="primary">标签</vanTag>
<Tag plain type="success">标签</vanTag>
<Tag plain type="danger">标签</vanTag>
<Tag plain type="warning">标签</vanTag> 
```

### 圆角样式

通过 `round` 设置为圆角样式。

```jsx
<Tag round type="primary">标签</vanTag>
<Tag round type="success">标签</vanTag>
<Tag round type="danger">标签</vanTag>
<Tag round type="warning">标签</vanTag> 
```

### 标记样式

通过 `mark` 设置为标记样式(半圆角)。

```jsx
<Tag mark type="primary">标签</vanTag>
<Tag mark type="success">标签</vanTag>
<Tag mark type="danger">标签</vanTag>
<Tag mark type="warning">标签</vanTag> 
```

### 自定义颜色

```jsx
<Tag color="#f2826a">标签</vanTag>
<Tag color="#7232dd">标签</vanTag>
<Tag color="#7232dd" plain>标签</vanTag>
<Tag color="#ffe1e1" textColor="#ad0000">标签</vanTag> 
```

### 标签大小

```jsx
<Tag type="danger">标签</vanTag>
<Tag type="danger" size="medium">标签</vanTag>
<Tag type="danger" size="large">标签</vanTag> 
```

### 可关闭标签

添加 `closeable` 属性表示标签是可关闭的，关闭标签时会触发 `close` 事件，在 `close` 事件中可以执行隐藏标签的逻辑。

```jsx
<Tag
  wx:if="{{ show.primary }}"
  closeable
  size="medium"
  type="primary"
  id="primary"
  onClose={onClose}
>
  标签
</vanTag>
<Tag
  wx:if="{{ show.success }}"
  closeable
  size="medium"
  type="success"
  id="success"
  onClose={onClose}
>
  标签
</vanTag> 
```

```js
const [show, setShow] = useState({
  "primary": true,
  "success": true
});

function onClose(event) {
  setSetxxxx(false);
} 
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `success` `danger` `warning` | _string_ | - |
| size | 大小, 可选值为 `large` `medium` | _string_ | - |
| color | 标签颜色 | _string_ | - |
| plain | 是否为空心样式 | _boolean_ | `false` |
| round | 是否为圆角样式 | _boolean_ | `false` |
| mark | 是否为标记样式 | _boolean_ | `false` |
| textColor | 文本颜色，优先级高于 `color` 属性 | _string_ | `white` |
| closeable | 是否为可关闭标签 | _boolean_ | `false` |

### Slot

| 名称 | 说明                |
| ---- | ------------------- |
| -    | 自定义 Tag 显示内容 |

### Events

| 事件名 | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| close  | 关闭标签时触发 | -        |

### 外部样式类

| 类名         | 说明         |
| ------------ | ------------ |
| customClass | 根节点样式类 |