# DatetimePicker 时间选择

### 介绍

用于选择时间，支持日期、时分等时间维度，通常与 [弹出层](#/popup) 组件配合使用。

### 引入

在 Taro 文件中引入组件

```javascript
import { DatetimePicker } from "taro-vantui"; 
```

## 代码演示

### 选择完整时间

`value` 为时间戳。

```jsx
<DatetimePicker
  type="datetime"
  value={ currentDate }
  minDate={ minDate }
  maxDate={ maxDate }
  onInput={onInput}
/> 
```

```javascript
this.state = {
  minHour: 10,
  maxHour: 20,
  minDate: 1634531151533,
  maxDate: 1572537600000,
  currentDate: 1634531151533
};

function onInput(event) {
  this.setData({
    currentDate: event.detail
  });
} 
```

### 选择日期（年月日）

`value` 为时间戳，通过传入 `formatter` 函数对选项文字进行处理。

```jsx
<DatetimePicker
  type="date"
  value={ currentDate }
  onInput={onInput}
  minDate={ minDate }
  formatter={ formatter }
/> 
```

```javascript
this.state = {
  currentDate: 1634531151534,
  minDate: 1634531151534,
  formatter: undefined
};

function onInput(event) {
  this.setData({
    currentDate: event.detail
  });
} 
```

### 选择日期（年月）

`value` 为时间戳。

```jsx
<DatetimePicker
  type={yearMonth}
  value={ currentDate }
  minDate={ minDate }
  onInput={onInput}
/> 
```

```javascript
this.state = {
  currentDate: 1634531151535,
  minDate: 1634531151535
};

function onInput(event) {
  this.setData({
    currentDate: event.detail
  });
} 
```

### 选择时间

`value` 为字符串。

```jsx
<DatetimePicker
  type="time"
  value={ currentDate }
  minHour={ minHour }
  maxHour={ maxHour }
  onInput={onInput}
/> 
```

```javascript
this.state = {
  currentDate: "12:00",
  minHour: 10,
  maxHour: 20
};

function onInput(event) {
  this.setData({
    currentDate: event.detail
  });
} 
```

### 选项过滤器

通过传入 `filter` 函数，可以对选项数组进行过滤，实现自定义时间间隔。

```jsx
<DatetimePicker
  type="time"
  value={ currentDate }
  filter={ filter }
/> 
```

```javascript
this.state = {
  currentDate: "12:00",
  filter: undefined
}; 
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中值 | _string \| number_ | - |
| type | 类型，可选值为 `date` `time` `yearMonth` <br> <strong>不建议动态修改</strong> | _string_ | `datetime` |
| minDate | 可选的最小时间，精确到分钟 | _number_ | 十年前 |
| maxDate | 可选的最大时间，精确到分钟 | _number_ | 十年后 |
| minHour | 可选的最小小时，针对 time 类型 | _number_ | `0` |
| maxHour | 可选的最大小时，针对 time 类型 | _number_ | `23` |
| minMinute | 可选的最小分钟，针对 time 类型 | _number_ | `0` |
| maxMinute | 可选的最大分钟，针对 time 类型 | _number_ | `59` |
| filter | 选项过滤函数 | _(type, values) => values_ | - |
| formatter | 选项格式化函数 | _(type, value) => value_ | - |
| title | 顶部栏标题 | _string_ | `''` |
| showToolbar | 是否显示顶部栏 | _boolean_ | `true` |
| loading | 是否显示加载状态 | _boolean_ | `false` |
| itemHeight | 选项高度 | _number_ | `44` |
| confirmButtonText | 确认按钮文字 | _string_ | `确认` |
| cancelButtonText | 取消按钮文字 | _string_ | `取消` |
| visibleItemCount | 可见的选项个数 | _number_ | `6` |

### Events

| 事件名称 | 说明                     | 回调参数   |
| -------- | ------------------------ | ---------- |
| input    | 当值变化时触发的事件     | 当前 value |
| change   | 当值变化时触发的事件     | 组件实例   |
| confirm  | 点击完成按钮时触发的事件 | 当前 value |
| cancel   | 点击取消按钮时触发的事件 | -          |

### change 事件

在`change`事件中，可以获取到组件实例，对组件进行相应的更新等操作：

| 函数                           | 说明                                       |
| ------------------------------ | ------------------------------------------ |
| getColumnValue(index)          | 获取对应列中选中的值                       |
| setColumnValue(index, value)   | 设置对应列中选中的值                       |
| getColumnValues(index)         | 获取对应列中所有的备选值                   |
| setColumnValues(index, values) | 设置对应列中所有的备选值                   |
| getValues()                    | 获取所有列中被选中的值，返回一个数组       |
| setValues(values)              | `values`为一个数组，设置所有列中被选中的值 |

### 外部样式类

| 类名          | 说明         |
| ------------- | ------------ |
| activeClass  | 选中项样式类 |
| toolbarClass | 顶部栏样式类 |
| columnClass  | 列样式类     |
