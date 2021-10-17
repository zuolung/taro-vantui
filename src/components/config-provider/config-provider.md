# ConfigProvider 全局配置

### 介绍

用于配置 Vant Weapp 组件的主题样式，从 `v1.7.0` 版本开始支持。

### 引入

在 Taro 文件中引入组件

```js
 import { ConfigProvider } from "taro-vantui" 
```

## 定制主题

### 介绍

Vant Weapp 组件通过丰富的 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来组织样式，通过覆盖这些 CSS 变量，可以实现**定制主题、动态切换主题**等效果。

#### 示例

以 Button 组件为例，查看组件的样式，可以看到 `.vanButton--primary` 类名上存在以下变量：

```css
.vanButton--primary {
  color: var(--buttonPrimaryColor, #fff);
  background: var(--buttonPrimaryBackgroundColor, #07c160);
  border: var(--buttonBorderWidth, 1px) solid var(
      --buttonPrimaryBorderColor,
      #07c160
    );
}
```

### 自定义 CSS 变量

#### 通过 CSS 覆盖

你可以直接在代码中覆盖这些 CSS 变量，Button 组件的样式会随之发生改变：

```css
/* 添加这段样式后，Primary Button 会变成红色 */
page {
  --buttonPrimaryBackgroundColor: red;
}
```

#### 通过 ConfigProvider 覆盖

`ConfigProvider` 组件提供了覆盖 CSS 变量的能力，你需要在根节点包裹一个 `ConfigProvider` 组件，并通过 `themeVars` 属性来配置一些主题变量。

```jsx
<ConfigProvider themeVars="{{ themeVars }}">
  <CellGroup>
    <Field label="评分">
      <view slot="input" style="width: 100%">
        <Rate
          model:value={rate}
          dataKey="rate"
          onChange={onChange}
        />
      </view>
    </vanField>
    <Field label="滑块" border={false}>
      <view slot="input" style="width: 100%">
        <Slider
          value={slider}
          dataKey="slider"
          onChange={onChange}
        />
      </view>
    </vanField>
  </vanCellGroup>

  <view style="margin: 16px">
    <Button round block type="primary">提交</vanButton>
  </view>
</vanConfigProvider> 
```

```js
const [rate, setRate] = useState(4);
const [slider, setSlider] = useState(50);
const [themeVars, setThemeVars] = useState({
  {rateIconFullColor}: "#07c160",
  {sliderBarHeight}: "4px",
  {sliderButtonWidth}: "20px",
  {sliderButtonHeight}: "20px",
  {sliderActiveBackgroundColor}: "#07c160",
  {buttonPrimaryBorderColor}: "#07c160",
  {buttonPrimaryBackgroundColor}: "#07c160"
});

function onChange(event) {
  const {
    key
  } = event.currentTarget.dataset;
  setKey(event.detail);
} 
```

## API

### Props

| 参数       | 说明           | 类型     | 默认值 |
| ---------- | -------------- | -------- | ------ |
| themeVars | 自定义主题变量 | _object_ | -      |
