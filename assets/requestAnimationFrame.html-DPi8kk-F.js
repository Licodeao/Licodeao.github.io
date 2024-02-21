import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "requestanimationframe是什么",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#requestanimationframe是什么",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" requestAnimationFrame是什么")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "requestanimationframe解决了什么问题",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#requestanimationframe解决了什么问题",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" requestAnimationFrame解决了什么问题？")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<blockquote><p>假如将setInterval或setTimeout的时间间隔设置为16.67，会怎么样？</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">16.67</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', 2);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "那么，requestAnimationFrame的出现就解决了以上问题。",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<ul><li>requestAnimationFrame的时间间隔是由系统来控制，而非setInterval、setTimeout的时间间隔由我们来控制</li><li>因此，这就可以解释：在requestAnimationFrame的语法使用上，为什么不用指定时间间隔了</li></ul><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> timer1 <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">let</span> timer2 <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">let</span> timer3 <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 1 -&gt; 2 -&gt; 3</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样地，requestAnimationFrame也可以像setInterval、setTimeout一样访问到当前的timer</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> timer1 <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timer1<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">let</span> timer2 <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timer2<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">let</span> timer3 <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timer3<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 1 -&gt; 2 -&gt; 3</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与clearTimeout和clearInterval一样，requestAnimationFrame也有着自己的清除定时器的API（cancelAnimationFrame）。</p>', 6);
const _hoisted_12 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/API/Window/cancelAnimationFrame#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_13 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// requestID -&gt; 先前调用window.requestAnimationFrame()方法时返回的ID</span>\n\nwindow<span class="token punctuation">.</span><span class="token function">mozCancelAnimationFrame</span><span class="token punctuation">(</span>requestID<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Firefox浏览器</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> timer1 <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timer1<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">let</span> timer2 <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timer2<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">let</span> timer3 <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timer3<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token function">cancelAnimationFrame</span><span class="token punctuation">(</span>timer1<span class="token punctuation">)</span>\n\n<span class="token comment">// 2 -&gt; 3</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="兼容性处理" tabindex="-1"><a class="header-anchor" href="#兼容性处理" aria-hidden="true">#</a> 兼容性处理</h2><blockquote><p>由于requestAnimationFrame是HTML5新增的一个API，那么必然存在着兼容性的问题</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>requestAnimationFrame<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">requestAnimationFrame</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试例子" tabindex="-1"><a class="header-anchor" href="#测试例子" aria-hidden="true">#</a> 测试例子</h2><blockquote><p>以下导航条的测试例子</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>setInterval<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span>\n      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\n        width: 0px;\n        height: 12px;\n        line-height: 12px;\n        background-color: lightblue;\n        margin: 10px 0;\n      <span class="token punctuation">&quot;</span></span></span>\n    <span class="token punctuation">&gt;</span></span>\n      0%\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>setTimeout<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test1<span class="token punctuation">&quot;</span></span>\n      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\n        width: 0px;\n        height: 12px;\n        line-height: 12px;\n        background-color: lightsalmon;\n        margin: 10px 0;\n      <span class="token punctuation">&quot;</span></span></span>\n    <span class="token punctuation">&gt;</span></span>\n      0%\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>requestAnimationFrame<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test2<span class="token punctuation">&quot;</span></span>\n      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\n        width: 0px;\n        height: 12px;\n        line-height: 12px;\n        background-color: lightgreen;\n        margin: 10px 0;\n      <span class="token punctuation">&quot;</span></span></span>\n    <span class="token punctuation">&gt;</span></span>\n      0%\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n      <span class="token comment">// setInterval</span>\n      <span class="token keyword">let</span> Test <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      Test<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>Test<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            Test<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>Test<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">;</span>\n            Test<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>Test<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token string">&quot;%&quot;</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n      <span class="token comment">// setTimeout</span>\n      <span class="token keyword">let</span> Test1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      Test1<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>Test1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            Test1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>Test1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">;</span>\n            Test1<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>Test1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token string">&quot;%&quot;</span><span class="token punctuation">;</span>\n            timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n      <span class="token comment">// requestAnimationFrame</span>\n      <span class="token keyword">let</span> Test2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;test2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      Test2<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>Test2<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            Test2<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>Test2<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">;</span>\n            Test2<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>Test2<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token string">&quot;%&quot;</span><span class="token punctuation">;</span>\n            timer <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token function">cancelAnimationFrame</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>效果视频</p></blockquote><p><video controls width="80%" src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/e9fa7720cb73cdbbf6755d0ad32d8129.mp4"></video></p><p>可以明显的看出，requestAnimationFrame更快。当然，也不是非得用requestAnimationFrame，只是在做相对复杂的动画效果时，它能带来更好的用户体验。</p>', 11);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode("语法："),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("requestAnimationFrame(callback)")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("p", null, [
        createTextVNode("requestAnimationFrame告诉浏览器——你"),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode("。该方法"),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode("。")
      ]),
      createBaseVNode("p", null, [
        createTextVNode("⚠"),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("requestAnimationFrame()是一次性的")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createTextVNode("也就是说，"),
          createVNode(_component_font, { color: "blue" }, {
            default: withCtx(() => [
              createTextVNode("若你想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用requestAnimationFrame()")
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ]),
    _hoisted_2,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("它本质上"),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("解决了定时器时间间隔不稳定")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode("的问题，"),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("可以将它看作是setInterval和setTimeout更好的解决方案")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createTextVNode("因为"),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("显示屏的刷新频率是60HZ，也就是每秒刷新60次。那么1000ms下，刷新60次所需时间为1000/60≈16.67ms，这就是浏览器所显示的最大的刷新频率了")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode("。")
      ]),
      createBaseVNode("li", null, [
        createTextVNode("如果"),
        createVNode(_component_font, { color: "blue" }, {
          default: withCtx(() => [
            createTextVNode("刷新频率＞16.67ms，并不会提升用户体验")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode("；反之，我们需要找到靠近16.67ms的时间，也就是16或者17，在这个时间下的动画就会显得比较平滑了。")
      ])
    ]),
    _hoisted_3,
    createBaseVNode("p", null, [
      createTextVNode("众所周知，setInterval和setTimeout都属于异步API，并且也属于宏任务。那么它们就需要等待同步任务以及微任务完成以后，才会执行传入的回调函数。这就造成了一个问题："),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("无法精准地将时间定位到16.67，即使换成16或者17，也无法精确定位。")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_5,
    createBaseVNode("p", null, [
      createTextVNode("首先，需要明确的一点是："),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("requestAnimationFrame不是由JavaScript控制的，而是由系统的时间间隔来控制")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。这样带来的"),
      createVNode(_component_font, { color: "blue" }, {
        default: withCtx(() => [
          createTextVNode("好处就是，不会因为JavaScript代码，导致当前任务时间间隔不准的问题")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("所以，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("requestAnimationFrame的解决方式就是采用系统的时间间隔")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("从而，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("requestAnimationFrame与setInterval、setTimeout的区别就是")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("：")
    ]),
    _hoisted_6,
    createBaseVNode("p", null, [
      createTextVNode("但"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("值得注意的是：window.cancelAnimationFrame是一个Experimental功能，即是一个实验中的功能")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。那么意味着此功能某些浏览器尚在开发中，请参考"),
      createBaseVNode("a", _hoisted_12, [
        createTextVNode("浏览器兼容性表格"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("以得到在不同浏览器中适合使用的前缀。")
    ]),
    _hoisted_13
  ]);
}
const requestAnimationFrame_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "requestAnimationFrame.html.vue"]]);
export {
  requestAnimationFrame_html as default
};
