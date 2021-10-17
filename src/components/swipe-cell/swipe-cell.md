# SwipeCell 滑动单元格

### 介绍

可以左右滑动来展示操作按钮的单元格组件。

### 引入

在 Taro 文件中引入组件

```js
 import { SwipeCell } from "taro-vantui" 
```

## 代码演示

### 基础用法

```jsx
<SwipeCell rightWidth="{{ 65 }}" leftWidth="{{ 65 }}">
  <view slot="left">选择</view>
  <CellGroup>
    <Cell title="单元格" value="内容" />
  </vanCellGroup>
  <view slot="right">删除</view>
</vanSwipeCell> 
```

### 异步关闭

当开启`asyncClose`时， 通过绑定`close`事件，可以自定义两侧滑动内容点击时的关闭行为。

```jsx
<SwipeCell
  id={swipeCell}
  rightWidth="{{ 65 }}"
  leftWidth="{{ 65 }}"
  asyncClose
  onClose={onClose}
>
  <view slot="left">选择</view>
  <CellGroup>
    <Cell title="单元格" value="内容" />
  </vanCellGroup>
  <view slot="right">删除</view>
</vanSwipeCell> 
```

```js
function onClose(event) {
  const {
    position,
    instance
  } = event.detail;

  switch (position) {
    case 'left':
    case 'cell':
      instance.close();
      break;

    case 'right':
      Dialog.confirm({
        message: '确定删除吗？'
      }).then(() => {
        instance.close();
      });
      break;
  }
} 
```

### 主动打开

```jsx
<SwipeCell
  id="swipeCell2"
  rightWidth="{{ 65 }}"
  leftWidth="{{ 65 }}"
  name="示例"
  onOpen={onOpen}
>
  <view slot="left" class="vanSwipeCell__left">选择</view>
  <CellGroup>
    <Cell title="单元格" value="内容" />
  </vanCellGroup>
  <view slot="right" class="vanSwipeCell__right">删除</view>
</vanSwipeCell> 
```

```js
function onOpen(event) {
  const {
    position,
    name
  } = event.detail;

  switch (position) {
    case 'left':
      Notify({
        type: 'primary',
        message: `${name}${position}部分展示open事件被触发`
      });
      break;

    case 'right':
      Notify({
        type: 'primary',
        message: `${name}${position}部分展示open事件被触发`
      });
      break;
  }
} 
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标识符，可以在 close 事件的参数中获取到 | _string \| number_ | - |
| leftWidth | 左侧滑动区域宽度 | _number_ | `0` |
| rightWidth | 右侧滑动区域宽度 | _number_ | `0` |
| asyncClose | 是否异步关闭 | _boolean_ | `false` |
| disabled `v1.3.4` | 是否禁用滑动 | _boolean_ | `false` |

### Slot

| 名称  | 说明           |
| ----- | -------------- |
| -     | 自定义显示内容 |
| left  | 左侧滑动内容   |
| right | 右侧滑动内容   |

### Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| click | 点击时触发 | 关闭时的点击位置 (`left` `right` `cell` `outside`) |
| close | 关闭时触发 | { position: 'left' \| 'right' , instance , name: string } |
| open | 打开时触发 | { position: 'left' \| 'right' , name: string } |

### close 参数

| 参数     | 类型     | 说明                                               |
| -------- | -------- | -------------------------------------------------- |
| position | _string_ | 关闭时的点击位置 (`left` `right` `cell` `outside`) |
| instance | _object_ | SwipeCell 实例                                     |
| name     | 标识符   | _string_                                           |

### 方法

通过 selectComponent 可以获取到 SwipeCell 实例并调用实例方法

| 方法名 | 参数                      | 返回值 | 介绍             |
| ------ | ------------------------- | ------ | ---------------- |
| open   | position: `left \| right` | -      | 打开单元格侧边栏 |
| close  | -                         | -      | 收起单元格侧边栏 |