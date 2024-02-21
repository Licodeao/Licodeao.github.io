import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="起因" tabindex="-1"><a class="header-anchor" href="#起因" aria-hidden="true">#</a> 起因</h2><p>每次使用create-react-app脚手架来创建新项目，是真的龟速啊。</p><p>表面上：wait a couple of minutes</p><p>实际上：刷了近半小时bilibili，还停留在install</p><p>难崩🤣</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><p>调侃的同时，也可以理解为什么速度慢，因为要拉取各种资源。按照React团队的设计，create-react-app会生成一个纯客户端应用，这意味着用它创建的每个应用都包含一个空的HTML文件、一个带有React的script标签和应用包，问题就出现在应用包这一块。create-react-app通过将多个工具组合在一个包中，以达到花费少量精力让所有工具协同工作。那么，在创建应用时，应用包的大小不可忽视，因此，在网速不佳的情况下，导致下载过慢。</p><h3 id="换源" tabindex="-1"><a class="header-anchor" href="#换源" aria-hidden="true">#</a> 换源</h3>', 8);
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将registry换成淘宝源</span>\n<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过以下方式验证是否配置成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config get registry\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果显示 https://registry.npm.taobao.org，即表示配置成功。</p><h3 id="向vite迁移" tabindex="-1"><a class="header-anchor" href="#向vite迁移" aria-hidden="true">#</a> 向Vite迁移</h3><p>另外一种解决办法，或许可以向vite迁移，因为vite实在是太快啦。</p>', 6);
const _hoisted_15 = {
  href: "https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_16 = /* @__PURE__ */ createStaticVNode('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># npm 7+, extra double-dash is needed:</span>\n<span class="token function">npm</span> create vite@latest react-ts-app -- <span class="token parameter variable">--template</span> react-ts\n\n<span class="token comment"># yarn</span>\n<span class="token function">yarn</span> create vite react-ts-app <span class="token parameter variable">--template</span> react-ts\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 1);
const _hoisted_17 = {
  href: "https://github.com/vitejs/vite/tree/main/packages/create-vite",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("解决办法是 "),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("换源")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    createBaseVNode("p", null, [
      createTextVNode("由于"),
      createVNode(_component_font, { color: "blue" }, {
        default: withCtx(() => [
          createTextVNode("create-react-app指令默认调用npm")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，所以直接设置npm registry即可")
    ]),
    _hoisted_9,
    createBaseVNode("p", null, [
      createTextVNode("使用"),
      createBaseVNode("a", _hoisted_15, [
        createTextVNode("create vite"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("创建想要使用的模板，当然使用指令前，必须得install vite才行。")
    ]),
    _hoisted_16,
    createBaseVNode("p", null, [
      createTextVNode("更多模板与细节在"),
      createBaseVNode("a", _hoisted_17, [
        createTextVNode("vite的模板库"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
const solveCra_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "solve-cra.html.vue"]]);
export {
  solveCra_html as default
};
