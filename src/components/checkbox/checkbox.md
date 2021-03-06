# Checkbox 复选框

### 介绍

在一组备选项中进行多选。

### 引入

在 Taro 文件中引入组件

```js
import { Checkbox } from "taro-vantui";
import { CheckboxGroup } from "taro-vantui"; 
```

## 代码演示

### 基础用法

通过`value`绑定复选框的勾选状态。

```jsx
<View>
  <Checkbox
    value={ `${ this.checked }` }
    onChange={ this.onChange }
  >
    复选框
  </Checkbox>
</View>
 
```

```js
this.state = {
  checked: true
};

function onChange(event) {
  this.setData({
    checked: event.detail
  });
} 
```

### 禁用状态

通过设置`disabled`属性可以禁用复选框。

```jsx
<View>
  <Checkbox
    disabled={ true }
    value={ `${ this.checked }` }
    onChange={ this.onChange }
  >
    复选框
  </Checkbox>
</View>
 
```

### 自定义形状

将`shape`属性设置为`square`，复选框的形状会变成方形。

```jsx
<View>
  <Checkbox
    value={ `${ this.checked }` }
    shape="square"
    onChange={ this.onChange }
  >
    复选框
  </Checkbox>
</View>
 
```

### 自定义颜色

通过`checkedColor`属性可以自定义选中状态下的图标颜色。

```jsx
<View>
  <Checkbox
    value={ `${ this.checked }` }
    checkedColor="#07c160"
    onChange={ this.onChange }
  >
    复选框
  </Checkbox>
</View>
 
```

### 自定义大小

通过`iconSize`属性可以自定义图标的大小。

```jsx
<View>
  <Checkbox
    value={ `${ this.checked }` }
    iconSize="25px"
  >
    复选框
  </Checkbox>
</View>
 
```

### 自定义图标

通过 icon 插槽自定义图标。

```jsx
<View>
  <Checkbox
    useIconSlot={ true }
    value={ `${ this.checked }` }
    onChange={ this.onChange }
    renderIcon={ (
          <Image
            slot="icon"
            src={ `${ checked ? activeIcon : inactiveIcon }` }
          />

        ) }
  >
    自定义图标
  </Checkbox>
</View>
 
```

```js
this.state = {
  checked: true,
  activeIcon: '//img.yzcdn.cn/iconActive.png',
  inactiveIcon: '//img.yzcdn.cn/iconNormal.png'
};

function onChange(event) {
  this.setData({
    checked: event.detail
  });
} 
```

### 禁用文本点击

通过设置`labelDisabled`属性可以禁用复选框文本点击。

```jsx
<View>
  <Checkbox
    value={ `${ this.checked }` }
    labelDisabled={ true }
  >
    复选框
  </Checkbox>
</View>
 
```

### 复选框组

需要与`vanCheckboxGroup`一起使用，选中值是一个数组，通过`value`绑定在`vanCheckboxGroup`上，数组中的项即为选中的`Checkbox`的`name`属性设置的值。

```jsx
<View>
  <CheckboxGroup
    value={ `${ this.result }` }
    onChange={ this.onChange }
  >
    <Checkbox name="a">
      复选框 a
    </Checkbox>
    <Checkbox name="b">
      复选框 b
    </Checkbox>
    <Checkbox name="c">
      复选框 c
    </Checkbox>
  </CheckboxGroup>
</View>
 
```

```js
this.state = {
  result: ['a', 'b']
};

function onChange(event) {
  this.setData({
    result: event.detail
  });
} 
```

### 限制最大可选数

```jsx
<View>
  <CheckboxGroup
    value={ `${ this.result }` }
    onChange={ this.onChange }
    max={ `${ 2 }` }
  >
    <Checkbox name="a">
      复选框 a
    </Checkbox>
    <Checkbox name="b">
      复选框 b
    </Checkbox>
    <Checkbox name="c">
      复选框 c
    </Checkbox>
  </CheckboxGroup>
</View>
 
```

### 搭配单元格组件使用

此时你需要再引入`Cell`和`CellGroup`组件，并通过 checkbox 的 toggle 方法手动触发切换。

```jsx
<View>
  <CheckboxGroup
    value={ `${ this.result }` }
    onChange={ this.onChange }
  >
    <CellGroup>
      { list.map((item, index) => (
          <Cell
            key={ `${index}` }
            title={ `复选框 ${ item }` }
            valueClass="valueClass"
            clickable={ true }
            dataIndex={ `${ index }` }
            onClick={ toggle }
          >
            <Checkbox
              class={ `checkboxes-${ index }` }
              name={ `${ item }` }
            />
          </Cell>
        
        )) }
    </CellGroup>
  </CheckboxGroup>
</View>
 
```

```js
this.state = {
  list: ['a', 'b', 'c'],
  result: ['a', 'b']
};

function onChange(event) {
  this.setData({
    result: event.detail
  });
}

function toggle(event) {
  const {
    index
  } = event.currentTarget.dataset;
  const checkbox = this.selectComponent(`.checkboxes-${index}`);
  checkbox.toggle();
}

function noop() {} 
```

```css
.valueClass {
  flex: none !important;
}
```

## API

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标识 Checkbox 名称 | _string_ | - |
| shape | 形状，可选值为 `round` `square` | _string_ | `round` |
| value | 是否为选中状态 | _boolean_ | `false` |
| disabled | 是否禁用单选框 | _boolean_ | `false` |
| labelDisabled | 是否禁用单选框内容点击 | _boolean_ | `false` |
| labelPosition | 文本位置，可选值为 `left` | _string_ | `right` |
| useIconSlot | 是否使用 icon slot | _boolean_ | `false` |
| checkedColor | 选中状态颜色 | _string_ | `#1989fa` |
| iconSize | icon 大小 | _string \| number_ | `20px` |

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 在表单内提交时的标识符 | _string_ | - |
| value | 所有选中项的 name | _Array_ | - |
| disabled | 是否禁用所有单选框 | _boolean_ | `false` |
| max | 设置最大可选数 | _number_ | `0`（无限制） |
| direction `v1.7.0` | 排列方向，可选值为 `horizontal` | _string_ | `vertical` |

### Checkbox Event

| 事件名      | 说明                     | 回调参数     |
| ----------- | ------------------------ | ------------ |
| onChange | 当绑定值变化时触发的事件 | 当前组件的值 |

### Checkbox 外部样式类

| 类名         | 说明           |
| ------------ | -------------- |
| className | 根节点样式类   |
| iconClass   | 图标样式类     |
| labelClass  | 描述信息样式类 |

### CheckboxGroup Event

| 事件名      | 说明                     | 回调参数     |
| ----------- | ------------------------ | ------------ |
| onChange | 当绑定值变化时触发的事件 | 当前组件的值 |

### Checkbox Slot

| 名称 | 说明       |
| ---- | ---------- |
| -    | 自定义文本 |
| icon | 自定义图标 |

### Checkbox 方法

通过 selectComponent 可以获取到 checkbox 实例并调用实例方法。

| 方法名 | 参数 | 返回值 | 介绍         |
| ------ | ---- | ------ | ------------ |
| toggle | -    | -      | 切换选中状态 |
