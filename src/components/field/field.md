# Field 输入框

### 介绍

用户可以在文本框内输入或编辑文字。

### 引入

在 Taro 文件中引入组件

```js
 import { Field } from "taro-vantui" 
```

## 代码演示

### 基础用法

```jsx
<CellGroup>
  <Field
    value={value}
    placeholder="请输入用户名"
    border={false}
    onChange={onChange}
  />
</vanCellGroup> 
```

```js
const [value, setValue] = useState("");

function onChange(event) {
  // event.detail 为当前输入的值
  console.log(event.detail);
} 
```

### 双向绑定

最低基础库版本在 2.9.3 以上时，可以使用[简易双向绑定](https://developers.weixin.qq.com/miniprogram/dev/framework/view/twoWayBindings.html)。

```jsx
<CellGroup>
  <Field
    model:value={value}
    placeholder="请输入用户名"
    border={false}
  />
</vanCellGroup> 
```

```js
const [value, setValue] = useState(""); 
```

### 自定义类型

根据`type`属性定义不同类型的输入框。

```jsx
<CellGroup>
  <Field
    value={username}
    required
    clearable
    label="用户名"
    icon={questionO}
    placeholder="请输入用户名"
    onClickIcon={onClickIcon}
  />

  <Field
    value={password}
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
    border={false}
  />
</vanCellGroup> 
```

### 禁用输入框

```jsx
<CellGroup>
  <Field
    value="输入框已禁用"
    label="用户名"
    leftIcon="contact"
    disabled
    border={false}
  />
</vanCellGroup> 
```

### 错误提示

通过`error`或者`errorMessage`属性增加对应的错误提示。

```jsx
<CellGroup>
  <Field
    value={username}
    label="用户名"
    placeholder="请输入用户名"
    error
  />
  <Field
    value={phone}
    label="手机号"
    placeholder="请输入手机号"
    errorMessage="手机号格式错误"
    border={false}
  />
</vanCellGroup> 
```

### 内容对齐方式

可以通过`inputAlign`属性设置内容的对齐方式。

```jsx
<CellGroup>
  <Field
    value="{{ username3 }}"
    label="用户名"
    placeholder="请输入用户名"
    inputAlign="right"
  />
</vanCellGroup> 
```

### 高度自适应

对于 textarea，可以通过`autosize`属性设置高度自适应。

```jsx
<CellGroup>
  <Field
    value={message}
    label="留言"
    type="textarea"
    placeholder="请输入留言"
    autosize
    border={false}
  />
</vanCellGroup> 
```

### 插入按钮

通过 button slot 可以在输入框尾部插入按钮。

```jsx
<CellGroup>
  <Field
    value={sms}
    center
    clearable
    label="短信验证码"
    placeholder="请输入短信验证码"
    border={false}
    useButtonSlot
  >
    <Button slot="button" size="small" type="primary">
      发送验证码
    </vanButton>
  </vanField>
</vanCellGroup> 
```

## 常见问题

### 真机上为什么会出现聚焦时 placeholder 加粗、闪烁的现象？

由于微信小程序的 input 组件和 textarea 组件是原生组件，聚焦时会将原生的输入框覆盖在对应位置上，导致了这个现象的产生。

相关的讨论可以查看[微信开放社区](https://developers.weixin.qq.com/community/search?query=placeholder%20%E9%97%AA%E7%83%81%20%E5%8A%A0%E7%B2%97)。

### 真机上 placeholder 为什么会盖过 popup 等其它组件？

由于微信小程序的 input 组件和 textarea 组件是原生组件，遵循原生组件的限制，详情可以查看[原生组件说明](https://developers.weixin.qq.com/miniprogram/dev/component/nativeComponent.html)。

### textarea 的 placeholder 在真机上为什么会偏移？

微信小程序的 textarea 组件在 Android 和 iOS 中默认样式不同，在 iOS 中会有默认的 `padding`，且无法置 0。

同时 `placeholderStyle` 对 `verticalAlign`、`lineHeight` 等大量 css 属性都不生效。

这一系列的问题导致了 placeholder 在真机上可能会出现偏移。

微信已经在 `2.10.0` 基础库版本后支持移除默认的 `padding`，但低版本仍有问题。详情可以查看 [微信开放社区](https://developers.weixin.qq.com/community/develop/issue/96)。

### 手写输入法为什么会丢失部分字符 / 手写输入法为什么不会触发 input 事件？

这是微信小程序的 input 组件本身的问题，如果需要兼容手写输入法的场景，可以在 `blur` 事件中取到输入的值。

相关的讨论可以查看[微信开放社区](https://developers.weixin.qq.com/community/search?query=input%20%E6%89%8B%E5%86%99%E8%BE%93%E5%85%A5&page=1&block=1&random=1567079239098)。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 在表单内提交时的标识符 | _string_ | - |
| label | 输入框左侧文本 | _string_ | - |
| size | 单元格大小，可选值为 `large` | _string_ | - |
| value | 当前输入的值 | _string \| number_ | - |
| type | 可设置为任意原生类型, 如 `number` `idcard` `textarea` `digit` | _string_ | `text` |
| fixed | 如果 type 为 `textarea` 且在一个 `position:fixed` 的区域，需要显示指定属性 fixed 为 true | _boolean_ | `false` |
| focus | 获取焦点 | _boolean_ | `false` |
| border | 是否显示内边框 | _boolean_ | `true` |
| disabled | 是否禁用输入框 | _boolean_ | `false` |
| readonly | 是否只读 | _boolean_ | `false` |
| clearable | 是否启用清除控件 | _boolean_ | `false` |
| clickable | 是否开启点击反馈 | _boolean_ | `false` |
| required | 是否显示表单必填星号 | _boolean_ | `false` |
| center | 是否使内容垂直居中 | _boolean_ | `false` |
| password | 是否是密码类型 | _boolean_ | `false` |
| titleWidth | 标题宽度 | _string_ | `6.2em` |
| maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | _number_ | `-1` |
| placeholder | 输入框为空时占位符 | _string_ | - |
| placeholderStyle | 指定 placeholder 的样式 | _string_ | - |
| customStyle | 自定义样式 | _string_ | - |
| isLink | 是否展示右侧箭头并开启点击反馈 | _boolean_ | `false` |
| arrowDirection | 箭头方向，可选值为 `left` `up` `down` | _string_ | - |
| showWordLimit | 是否显示字数统计，需要设置`maxlength`属性 | _boolean_ | `false` |
| error | 是否将输入内容标红 | _boolean_ | `false` |
| errorMessage | 底部错误提示文案，为空时不展示 | _string_ | `''` |
| errorMessageAlign | 底部错误提示文案对齐方式，可选值为 `center` `right` | _string_ | `''` |
| inputAlign | 输入框内容对齐方式，可选值为 `center` `right` | _string_ | `left` |
| autosize | 是否自适应内容高度，只对 textarea 有效，<br>可传入对象,如 { maxHeight: 100, minHeight: 50 }，<br>单位为`px` | _boolean \| object_ | `false` |
| leftIcon | 左侧图标名称或图片链接，可选值见 [Icon 组件](#/icon) | _string_ | - |
| rightIcon | 右侧图标名称或图片链接，可选值见 [Icon 组件](#/icon) | _string_ | - |
| confirmType | 设置键盘右下角按钮的文字，仅在 type='text' 时生效 | _string_ | `done` |
| confirmHold | 点击键盘右下角按钮时是否保持键盘不收起，在 type='textarea' 时无效 | _boolean_ | `false` |
| holdKeyboard | focus 时，点击页面的时候不收起键盘 | _boolean_ | `false` |
| cursorSpacing | 输入框聚焦时底部与键盘的距离 | _number_ | `50` |
| adjustPosition | 键盘弹起时，是否自动上推页面 | _boolean_ | `true` |
| showConfirmBar | 是否显示键盘上方带有”完成“按钮那一栏，只对 textarea 有效 | _boolean_ | `true` |
| selectionStart | 光标起始位置，自动聚集时有效，需与 selectionEnd 搭配使用 | _number_ | `-1` |
| selectionEnd | 光标结束位置，自动聚集时有效，需与 selectionStart 搭配使用 | _number_ | `-1` |
| autoFocus | 自动聚焦，拉起键盘 | _boolean_ | `false` |
| disableDefaultPadding | 是否去掉 iOS 下的默认内边距，只对 textarea 有效 | _boolean_ | `true` |
| cursor | 指定 focus 时的光标位置 | _number_ | `-1` |
| clearTrigger `v1.8.4` | 显示清除图标的时机，`always` 表示输入框不为空时展示，<br>`focus` 表示输入框聚焦且不为空时展示 | _string_ | `focus` |

### Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| onInput | 输入内容时触发 | event.detail: 当前输入值 |
| onChange | 输入内容时触发 | event.detail: 当前输入值 |
| onConfirm | 点击完成按钮时触发 | event.detail: 当前输入值 |
| onClickIcon | 点击尾部图标时触发 | - |
| onFocus | 输入框聚焦时触发 | event.detail.value: 当前输入值; <br>event.detail.height: 键盘高度 |
| onBlur | 输入框失焦时触发 | event.detail.value: 当前输入值; <br>event.detail.cursor: 游标位置(如果 `type` 不为 `textarea`，值为 `0`) |
| onClear | 点击清空控件时触发 | - |
| onClickInput | 点击输入区域时触发 | - |
| onLinechange | 输入框行数变化时调用，只对 textarea 有效 | event.detail = { height: 0, heightRpx: 0, lineCount: 0 } |
| onKeyboardheightchange | 键盘高度发生变化的时候触发此事件 | event.detail = { height: height, duration: duration } |

### Slot

| 名称       | 说明                                                       |
| ---------- | ---------------------------------------------------------- |
| label      | 自定义输入框标签，如果设置了`label`属性则不生效            |
| leftIcon  | 自定义输入框头部图标                                       |
| rightIcon | 自定义输入框尾部图标                                       |
| button     | 自定义输入框尾部按钮                                       |
| input      | 自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效 |

### 外部样式类

| 类名             | 说明           |
| ---------------- | -------------- |
| labelClass      | 左侧文本样式类 |
| inputClass      | 输入框样式类   |
| rightIconClass | 右侧图标样式类 |