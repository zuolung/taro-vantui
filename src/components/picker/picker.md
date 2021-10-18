# Picker 选择器

### 介绍

提供多个选项集合供用户选择，支持单列选择和多列级联，通常与 [弹出层](#/popup) 组件配合使用。

### 引入

在 Taro 文件中引入组件

```javascript
import { Picker } from "taro-vantui"; 
```

## 代码演示

### 基础用法

```jsx
<Picker columns={ columns } onChange={onChange} /> 
```

```javascript
this.state = {
  columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"]
};

function onChange(event) {
  const {
    picker,
    value,
    index
  } = event.detail;
  Toast(`当前值：${value}, 当前索引：${index}`);
} 
```

### 默认选中项

单列选择器可以直接通过`defaultIndex`属性设置初始选中项的索引值。

```jsx
<Picker
  columns={ columns }
  defaultIndex={ 2 }
  onChange={onChange}
/> 
```

### 展示顶部栏

```jsx
<Picker
  showToolbar
  title="标题"
  columns={ columns }
  onCancel={onCancel}
  onConfirm={onConfirm}
/> 
```

```javascript
this.state = {
  columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"]
};

function onConfirm(event) {
  const {
    picker,
    value,
    index
  } = event.detail;
  Toast(`当前值：${value}, 当前索引：${index}`);
}

function onCancel() {
  Toast('取消');
} 
```

### 多列联动

```jsx
<Picker columns={ columns } onChange={onChange} /> 
```

```javascript
this.state = {
  columns: [{
    "values": [],
    "className": "column1"
  }, {
    "className": "column2",
    "defaultIndex": 2
  }]
};

function onChange(event) {
  const {
    picker,
    value,
    index
  } = event.detail;
  picker.setColumnValues(1, citys[value[0]]);
} 
```

### 禁用选项

选项可以为对象结构，通过设置 disabled 来禁用该选项。

```jsx
<Picker columns={ columns } /> 
```

```javascript
this.state = {
  columns: [{
    "text": "杭州",
    "disabled": true
  }, {
    "text": "宁波"
  }, {
    "text": "温州"
  }]
}; 
```

### 加载状态

当 Picker 数据是通过异步获取时，可以通过 `loading` 属性显示加载提示。

```jsx
<Picker columns={ columns } loading /> 
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 对象数组，配置每一列显示的数据 | _Array_ | `[]` |
| showToolbar | 是否显示顶部栏 | _boolean_ | `false` |
| toolbarPosition | 顶部栏位置，可选值为`bottom` | _string_ | `top` |
| title | 顶部栏标题 | _string_ | `''` |
| loading | 是否显示加载状态 | _boolean_ | `false` |
| valueKey | 选项对象中，文字对应的 key | _string_ | `text` |
| itemHeight | 选项高度 | _number_ | `44` |
| confirmButtonText | 确认按钮文字 | _string_ | `确认` |
| cancelButtonText | 取消按钮文字 | _string_ | `取消` |
| visibleItemCount | 可见的选项个数 | _number_ | `6` |
| defaultIndex | 单列选择器的默认选中项索引，<br>多列选择器请参考下方的 Columns 配置 | _number_ | `0` |

### Events

Picker 组件的事件会根据 columns 是单列或多列返回不同的参数。

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| confirm | 点击完成按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引 |
| cancel | 点击取消按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引 |
| change | 选项改变时触发 | 单列：Picker 实例，选中值，选中值对应的索引<br>多列：Picker 实例，所有列选中值，当前列对应的索引 |

### Columns 数据结构

当传入多列数据时，`columns`为一个对象数组，数组中的每一个对象配置每一列，每一列有以下`key`。

| key          | 说明                       |
| ------------ | -------------------------- |
| values       | 列中对应的备选值           |
| defaultIndex | 初始选中项的索引，默认为 0 |

### 外部样式类

| 类名          | 说明         |
| ------------- | ------------ |
| customClass  | 根节点样式类 |
| activeClass  | 选中项样式类 |
| toolbarClass | 顶部栏样式类 |
| columnClass  | 列样式类     |

### 方法

通过 selectComponent 可以获取到 picker 实例并调用实例方法。

| 方法名 | 参数 | 返回值 | 介绍 |
| --- | --- | --- | --- |
| getValues | - | values | 获取所有列选中的值 |
| setValues | values | - | 设置所有列选中的值 |
| getIndexes | - | indexes | 获取所有列选中值对应的索引 |
| setIndexes | indexes | - | 设置所有列选中值对应的索引 |
| getColumnValue | columnIndex | value | 获取对应列选中的值 |
| setColumnValue | columnIndex, value | - | 设置对应列选中的值 |
| getColumnIndex | columnIndex | optionIndex | 获取对应列选中项的索引 |
| setColumnIndex | columnIndex, optionIndex | - | 设置对应列选中项的索引 |
| getColumnValues | columnIndex | values | 获取对应列中所有选项 |
| setColumnValues | columnIndex, values | - | 设置对应列中所有选项 |
