<div class="van-doc-card">
  <div class="van-doc-intro">
    <img class="van-doc-intro__logo" style="width: 120px; height: 120px; box-shadow: none;" src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png">
    <h2 style="margin: 0; font-size: 32px; line-height: 60px;">taro-vantui</h2>
    <p>轻量、可靠的taro-react UI 组件库</p>
  </div>
</div>

### 介绍
目前市场上基于taro的reactUI框架十分少，taro-vantui基于[vant-weapp](https://youzan.github.io/vant-weapp/#/home)编译为taro,react-hooks重构后实现

### 特别说明
目前主要支持h5、微信小程序、支付宝小程序，小程序组件如：calendar、area等组件存在部分问题

slot的支持, 编译过来的文档部分代码描述不准确

```jsx
// vant-weapp中之前slot的使用方式
<van-image use-loading-slot>
  <van-loading slot="loading" type="spinner" size="20" vertical />
</van-image>
// 转换后的使用
<Image 
  src="xxx"
  useLoadingSlot
  renderLoadding={(
    <Loading slot="loading" type="spinner" size="20" vertical />
  )}
>
```
组件API中的selectComponent, 转换为react的ref获取到的实例
```jsx
const ref = useRef(null)
<Picker ref={el => ref= el} ... />
```