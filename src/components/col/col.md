# Layout 布局

### 介绍

Layout 提供了`Row`和`Col`两个组件来进行行列布局。

### 引入

在 Taro 文件中引入组件

```js
 import { Row } from "taro-vantui"
 import { Col } from "taro-vantui" 
```

## 代码演示

### 基本用法

Layout 组件提供了`24列栅格`，通过在`Col`上添加`span`属性设置列所占的宽度百分比。此外，添加`offset`属性可以设置列的偏移宽度，计算方式与 span 相同。

```jsx
<Row>
  <Col span="8">span: 8</vanCol>
  <Col span="8">span: 8</vanCol>
  <Col span="8">span: 8</vanCol>
</vanRow>

<Row>
  <Col span="4">span: 4</vanCol>
  <Col span="10" offset="4">offset: 4, span: 10</vanCol>
</vanRow>

<Row>
  <Col offset="12" span="12">offset: 12, span: 12</vanCol>
</vanRow> 
```

### 设置列元素间距

通过`gutter`属性可以设置列元素之间的间距，默认间距为 0。

```jsx
<Row gutter="20">
  <Col span="8">span: 8</vanCol>
  <Col span="8">span: 8</vanCol>
  <Col span="8">span: 8</vanCol>
</vanRow> 
```

## API

### Row Props

| 参数   | 说明                          | 类型               | 默认值 |
| ------ | ----------------------------- | ------------------ | ------ |
| gutter | 列元素之间的间距（单位为 px） | _string \| number_ | -      |

### Col Props

| 参数   | 说明           | 类型               | 默认值 |
| ------ | -------------- | ------------------ | ------ |
| span   | 列元素宽度     | _string \| number_ | -      |
| offset | 列元素偏移距离 | _string \| number_ | -      |

### 外部样式类

| 类名         | 说明         |
| ------------ | ------------ |
| customClass | 根节点样式类 |