# IndexBar 索引栏

### 介绍

用于列表的索引分类显示和快速定位。

### 引入

在 Taro 文件中引入组件

```js
import { IndexBar } from "taro-vantui";
import { IndexAnchor } from "taro-vantui"; 
```

> Vant Weapp 1.0 版本开始支持此组件，升级方式参见[快速上手](#/quickstart)

## 代码演示

### 基础用法

点击索引栏时，会自动跳转到对应的`IndexAnchor`锚点位置。

```jsx
<View>
  <IndexBar>
    <View>
      <IndexAnchor index="A" />
      <Cell title="文本" />
      <Cell title="文本" />
      <Cell title="文本" />
    </View>
    <View>
      <IndexAnchor index="B" />
      <Cell title="文本" />
      <Cell title="文本" />
      <Cell title="文本" />
    </View>
    ...
  </IndexBar>
</View>
 
```

### 自定义索引列表

可以通过`indexList`属性自定义展示的索引字符列表。

```jsx
<View>
  <IndexBar indexList={ `${ this.indexList }` }>
    <View>
      <IndexAnchor index="1">
        标题1
      </IndexAnchor>
      <Cell title="文本" />
      <Cell title="文本" />
      <Cell title="文本" />
    </View>
    <View>
      <IndexAnchor index="2">
        标题2
      </IndexAnchor>
      <Cell title="文本" />
      <Cell title="文本" />
      <Cell title="文本" />
    </View>
    ...
  </IndexBar>
</View>
 
```

```js
this.state = {
  indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}; 
```

## API

### IndexBar Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| indexList | 索引字符列表 | _string[] \| number[]_ | `A-Z` | - |
| zIndex | zIndex 层级 | _number_ | `1` | - |
| sticky | 是否开启锚点自动吸顶 | _boolean_ | `true` | - |
| stickyOffsetTop | 锚点自动吸顶时与顶部的距离 | _number_ | `0` | - |
| highlightColor | 索引字符高亮颜色 | _string_ | `#07c160` | - |

### IndexAnchor Props

| 参数     | 说明                     | 类型               | 默认值  | 版本 |
| -------- | ------------------------ | ------------------ | ------- | ---- |
| useSlot | 是否使用自定义内容的插槽 | _boolean_          | `false` | -    |
| index    | 索引字符                 | _string \| number_ | -       | -    |

### IndexBar Events

| 事件名 | 说明           | 回调参数        |
| ------ | -------------- | --------------- |
| select | 选中字符时触发 | index: 索引字符 |

### IndexAnchor Slots

| 名称 | 说明                             |
| ---- | -------------------------------- |
| -    | 锚点位置显示内容，默认为索引字符 |

## 常见问题

### 嵌套在滚动元素中 IndexAnchor 失效？

由于 `<IndexBar />` 内部使用 wx.pageScrollTo 滚动到指定位置，因此只支持页面级滚动，无法在滚动元素中嵌套使用，例如：`view` 使用 `overflow: scroll;` 或者 `scrollView`，具体可查看[微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html)。历史 issue: [#4252](https://github.com/youzan/vantWeapp/issues/4252)
