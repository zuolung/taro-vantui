# Radio 单选框

### 介绍

在一组备选项中进行单选。

### 引入

在 Taro 文件中引入组件

```js
 import { Radio } from "taro-vantui"
 import { RadioGroup } from "taro-vantui" 
```

## 代码演示

### 基础用法

通过`value`绑定值当前选中项的 name 。

```jsx
<RadioGroup value={radio} onChange={onChange}>
  <Radio name="1">单选框 1</vanRadio>
  <Radio name="2">单选框 2</vanRadio>
</vanRadioGroup> 
```

```js
const [radio, setRadio] = useState("1");

function onChange(event) {
  setRadio(event.detail);
} 
```

### 水平排列

将`direction`属性设置为`horizontal`后，单选框组会变成水平排列。

```jsx
<RadioGroup
  value={radio}
  onChange={onChange}
  direction="horizontal"
>
  <Radio name="1">单选框 1</vanRadio>
  <Radio name="2">单选框 2</vanRadio>
</vanRadioGroup> 
```

### 禁用状态

通过`disabled`属性禁止选项切换，在`Radio`上设置`diabled`可以禁用单个选项。

```jsx
<RadioGroup value={radio} disabled onChange={onChange}>
  <Radio name="1">单选框 1</vanRadio>
  <Radio name="2">单选框 2</vanRadio>
</vanRadioGroup> 
```

### 自定义形状

将`shape`属性设置为`square`，单选框的形状会变成方形。

```jsx
<RadioGroup value={radio} onChange={onChange}>
  <Radio name="1" shape="square">单选框 1</vanRadio>
  <Radio name="2" shape="square">单选框 2</vanRadio>
</vanRadioGroup> 
```

### 自定义颜色

通过`checkedColor`属性设置选中状态的图标颜色。

```jsx
<RadioGroup value={radio} onChange={onChange}>
  <Radio name="1" checkedColor="#07c160">单选框 1</vanRadio>
  <Radio name="2" checkedColor="#07c160">单选框 2</vanRadio>
</vanRadioGroup> 
```

### 自定义大小

通过`iconSize`属性可以自定义图标的大小。

```jsx
<RadioGroup value={radio} onChange={onChange}>
  <Radio name="1" iconSize="24px">单选框 1</vanRadio>
  <Radio name="2" iconSize="24px">单选框 2</vanRadio>
</vanRadioGroup> 
```

### 自定义图标

通过`icon`插槽自定义图标，需要设置`useIconSlot`属性。

```jsx
<RadioGroup value={radio} onChange={onChange}>
  <Radio useIconSlot value={radio} name="1">
    自定义图标
    <image slot="icon" src="{{ radio === '1' ? icon.active : icon.normal }}" />
  </vanRadio>
  <Radio useIconSlot value={radio} name="2">
    自定义图标
    <image slot="icon" src="{{ radio === '2' ? icon.active : icon.normal }}" />
  </vanRadio>
</vanRadioGroup> 
```

```js
const [radio, setRadio] = useState(true);
const [icon, setIcon] = useState({
  "normal": "//img.yzcdn.cn/iconNormal.png",
  "active": "//img.yzcdn.cn/iconActive.png"
});

function onChange(event) {
  setRadio(event.detail);
} 
```

### 禁用文本点击

通过设置`labelDisabled`属性可以禁用单选框文本点击。

```jsx
<RadioGroup value={radio} onChange={onChange}>
  <Radio name="1" labelDisabled>单选框 1</vanRadio>
  <Radio name="2" labelDisabled>单选框 2</vanRadio>
</vanRadioGroup> 
```

### 与 Cell 组件一起使用

此时你需要再引入`Cell`和`CellGroup`组件。

```jsx
<RadioGroup value={radio} onChange={onChange}>
  <CellGroup>
    <Cell title="单选框 1" clickable dataName="1" onClick={onClick}>
      <Radio slot={rightIcon} name="1" />
    </vanCell>
    <Cell title="单选框 2" clickable dataName="2" onClick={onClick}>
      <Radio slot={rightIcon} name="2" />
    </vanCell>
  </vanCellGroup>
</vanRadioGroup> 
```

```js
const [radio, setRadio] = useState("1");

function onChange(event) {
  setRadio(event.detail);
}

function onClick(event) {
  const {
    name
  } = event.currentTarget.dataset;
  setRadio(name);
} 
```

## API

### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 在表单内提交时的标识符 | _string_ | - |
| value | 当前选中项的标识符 | _any_ | - |
| disabled | 是否禁用所有单选框 | _boolean_ | `false` |
| direction `v1.6.7` | 排列方向，可选值为 `horizontal` | _string_ | `vertical` |

### Radio Props

| 参数           | 说明                      | 类型               | 默认值    |
| -------------- | ------------------------- | ------------------ | --------- |
| name           | 标识符                    | _string_           | -         |
| shape          | 形状，可选值为 `square`   | _string_           | `round`   |
| disabled       | 是否为禁用状态            | _boolean_          | `false`   |
| labelDisabled | 是否禁用文本内容点击      | _boolean_          | `false`   |
| labelPosition | 文本位置，可选值为 `left` | _string_           | `right`   |
| iconSize      | 图标大小，默认单位为`px`  | _string \| number_ | `20px`    |
| checkedColor  | 选中状态颜色              | _string_           | `#1989fa` |
| useIconSlot  | 是否使用 icon 插槽        | _boolean_          | `false`   |

### Radio Event

| 事件名      | 说明                     | 回调参数          |
| ----------- | ------------------------ | ----------------- |
| onChange | 当绑定值变化时触发的事件 | 当前选中项的 name |

### Radio 外部样式类

| 类名         | 说明           |
| ------------ | -------------- |
| customClass | 根节点样式类   |
| iconClass   | 图标样式类     |
| labelClass  | 描述信息样式类 |

### RadioGroup Event

| 事件名      | 说明                     | 回调参数          |
| ----------- | ------------------------ | ----------------- |
| onChange | 当绑定值变化时触发的事件 | 当前选中项的 name |