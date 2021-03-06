# DatetimePicker 时间选择

### 介绍

用于选择时间，支持日期、时分等时间维度，通常与 [弹出层](#/popup) 组件配合使用。

### 引入

在 Taro 文件中引入组件

```js
import { DatetimePicker } from "taro-vantui"; 
```

## 代码演示

### 选择完整时间

`value` 为时间戳。

```jsx
<View>
  <DatetimePicker
    type="datetime"
    value={ `${ this.currentDate }` }
    minDate={ `${ this.minDate }` }
    maxDate={ `${ this.maxDate }` }
    onInput={ this.onInput }
  />
</View>
 
```

```js
this.state = {
  minHour: 10,
  maxHour: 20,
  minDate: new Date().getTime(),
  maxDate: new Date(2019, 10, 1).getTime(),
  currentDate: new Date().getTime()
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
<View>
  <DatetimePicker
    type="date"
    value={ `${ this.currentDate }` }
    onInput={ this.onInput }
    minDate={ `${ this.minDate }` }
    formatter={ `${ this.formatter }` }
  />
</View>
 
```

```js
this.state = {
  currentDate: new Date().getTime(),
  minDate: new Date().getTime(),

  formatter(type, value) {
    if (type === 'year') {
      return `${value}年`;
    }

    if (type === 'month') {
      return `${value}月`;
    }

    return value;
  }

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
<View>
  <DatetimePicker
    type="yearMonth"
    value={ `${ this.currentDate }` }
    minDate={ `${ this.minDate }` }
    onInput={ this.onInput }
  />
</View>
 
```

```js
this.state = {
  currentDate: new Date().getTime(),
  minDate: new Date().getTime()
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
<View>
  <DatetimePicker
    type="time"
    value={ `${ this.currentDate }` }
    minHour={ `${ this.minHour }` }
    maxHour={ `${ this.maxHour }` }
    onInput={ this.onInput }
  />
</View>
 
```

```js
this.state = {
  currentDate: '12:00',
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
<View>
  <DatetimePicker
    type="time"
    value={ `${ this.currentDate }` }
    filter={ `${ this.filter }` }
  />
</View>
 
```

```js
this.state = {
  currentDate: '12:00',

  filter(type, options) {
    if (type === 'minute') {
      return options.filter(option => option % 5 === 0);
    }

    return options;
  }

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
