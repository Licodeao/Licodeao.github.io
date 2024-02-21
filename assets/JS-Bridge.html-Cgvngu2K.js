import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="什么是js-bridge" tabindex="-1"><a class="header-anchor" href="#什么是js-bridge" aria-hidden="true">#</a> 什么是JS Bridge?</h2><p>从名字上看，JS Bridge不就是用JavaScript搭建的桥吗？诶，好像有这么个意思了。但这桥连接的是哪里？肯定是用JavaScript无法覆盖的地方，哪些地方呢？如各种系统的Native API。譬如IOS、Android系统，都无法通过JavaScript直接调用其Native API，需要通过一些特定的&quot;格式&quot;来调用，而这些格式其实就是JS Bridge了。</p><blockquote><p>什么是JS Bridge？</p><p>由于JavaScript无法直接调用Native API，需要通过一些特定的&quot;格式&quot;来调用，这些&quot;格式&quot;统称为JS Bridge。</p></blockquote><p>而在日常生活中，我们肯定使用过基于JS Bridge实现的功能。例如微信JS-SDK，它能让基于微信内的网页，高效地使用拍照、选图、语音、获取位置等手机系统的能力。JS Bridge实际上仍然是一堆JavaScript代码，只不过是封装了Native API提供的能力而已。</p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230716160422622.png" width="100%"><p>话说，微信里为什么能打开一个网页呢？微信也不是一个浏览器啊！</p><p>其实，当我们通过微信的扫一扫功能打开一个网页时，这个H5网页是由WebView来承载的。而WebView又是啥呢？WebView其实是App里的一个组件，通过它就能像浏览器一样去展示一个网页了。经常用的Chrome浏览器，它实际上也可以看作是一个App，它展示一个网页实际上也是通过WebView组件来实现的，为啥不叫Chrome App呢，因为Chrome的大部分功能都是与网页有关的，叫App反而有点不合适了。</p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230716162207905.png" width="100%"><p>观看上方的层级图，应该能明白，JavaScript不能直接穿过WebView去调用微信App包含的功能。</p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230716163139615.png" width="100%"><h2 id="js-bridge实现的方式" tabindex="-1"><a class="header-anchor" href="#js-bridge实现的方式" aria-hidden="true">#</a> JS Bridge实现的方式</h2><ul><li><p><strong>注册全局API</strong></p><ul><li>如在window对象上添加全局属性或注册全局事件</li><li>这种方式的缺点是不合适处理异步的情况，会造成卡顿</li></ul></li><li><p><strong>URL Scheme</strong></p><ul><li><p>这种方式是如今比较成熟的方案</p></li><li><p>对于在网页中请求网络资源，都会先经过App层中转后，再向外发出；返回资源时，仍然是先经过App层后，再返回给网页</p></li><li><p>正是由于这个特点，App可以自定义一些内置协议标准，如果网页发出的请求符合某个自定义的协议，便直接拦截掉并返回；当然，http请求并不会拦截，而是保持原样处理。</p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230716180500040.png" width="100%"></li><li><p>如微信js sdk的URL scheme：<code>weixin://dl/scan</code>；在Chrome浏览器的地址栏输入<code>chrome://version</code>可以查看版本信息，输入<code>chrome://dino</code>就能玩一个类似于跳一跳的小游戏，这些都属于URL Scheme的方式。</p></li></ul></li></ul>', 12);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("p", null, [
      createTextVNode("最近老是在公司项目中看到各种bridge，尤其JS Bridge居多。碰上不懂的问题肯定得去了解一下，本着"),
      createVNode(_component_font, { style: { "text-decoration": "line-through" } }, {
        default: withCtx(() => [
          createTextVNode("好奇心害死猫")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("（热爱学习）的原则，就来探索一下什么是JS Bridge？")
    ]),
    _hoisted_1
  ]);
}
const JSBridge_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "JS-Bridge.html.vue"]]);
export {
  JSBridge_html as default
};
