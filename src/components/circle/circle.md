# Circle 环形进度条

### 介绍

圆环形的进度条组件，支持进度渐变动画。

### 引入

在 Taro 文件中引入组件

```js
import { Circle } from "taro-vantui"; 
```

## 代码演示

### 基础用法

`value`属性表示进度条的目标进度。

```jsx
<View>
  <Circle
    value={ `${ 30 }` }
    text="text"
  />
</View>
 
```

### 宽度定制

通过`strokeWidth`属性来控制进度条宽度。

```jsx
<View>
  <Circle
    value={ `${ this.value }` }
    strokeWidth="6"
    text="宽度定制"
  />
</View>
 
```

### 颜色定制

通过`color`属性来控制进度条颜色，`layerColor`属性来控制轨道颜色。

```jsx
<View>
  <Circle
    value={ `${ this.value }` }
    layerColor="#eeeeee"
    color="#ee0a24"
    text="颜色定制"
  />
</View>
 
```

### 渐变色

`color`属性支持传入对象格式来定义渐变色。

```jsx
<View>
  <Circle
    value={ `${ this.value }` }
    color={ `${ this.gradientColor }` }
    text="渐变色"
  />
</View>
 
```

```js
this.state = {
  value: 25,
  gradientColor: {
    '0%': '#ffd01e',
    '100%': '#ee0a24'
  }
}; 
```

### 逆时针方向

将`clockwise`设置为`false`，进度会从逆时针方向开始。

```jsx
<View>
  <Circle
    value={ `${ this.value }` }
    color="#07c160"
    clockwise={ `${ false }` }
    text="逆时针"
  />
</View>
 
```

### 大小定制

通过`size`属性设置圆环直径。

```jsx
<View>
  <Circle
    value={ `${ this.value }` }
    size="120"
    text="大小定制"
  />
</View>
 
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 目标进度 | _number_ | `0` |
| type | 指定 canvas 类型，可选值为 `2d` | _string_ | - |
| size | 圆环直径，默认单位为 `px` | _number_ | `100` |
| color | 进度条颜色，传入对象格式可以定义渐变色 | _string \| object_ | `#1989fa` |
| layerColor | 轨道颜色 | _string_ | `#fff` |
| fill | 填充颜色 | _string_ | - |
| speed | 动画速度（单位为 value/s） | _number_ | `50` |
| text | 文字 | _string_ | - |
| strokeWidth | 进度条宽度 | _number_ | `4` |
| clockwise | 是否顺时针增加 | _boolean_ | `true` |

### Slots

| 名称 | 说明                                                       |
| ---- | ---------------------------------------------------------- |
| -    | 自定义文字内容，如果设置了`fill`，插槽内容会被原生组件覆盖 |
