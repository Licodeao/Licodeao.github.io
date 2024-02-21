import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "什么是装饰器",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#什么是装饰器",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 什么是装饰器?")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "函数",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "扩展类和类的成员",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="启用装饰器语法" tabindex="-1"><a class="header-anchor" href="#启用装饰器语法" aria-hidden="true">#</a> 启用装饰器语法</h2><p>为了能够使用装饰器语法，需要在tsconfig.json中将experimentalDecorators开启，以此来消除警告。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token string-property property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="装饰器用法" tabindex="-1"><a class="header-anchor" href="#装饰器用法" aria-hidden="true">#</a> 装饰器用法</h2><blockquote><p>因为装饰器本身是一个函数，并且它可以用来修饰类</p><p>那么，它的参数意味着什么？</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">Decorator</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">Decorator</span></span>\n<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 6);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "这个target是什么？",
  -1
  /* HOISTED */
);
const _hoisted_11 = /* @__PURE__ */ createStaticVNode('<p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230604180307484.png" alt="image-20230604180307484"></p><p>将ts文件编译成js文件后</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> __decorate <span class="token operator">=</span>\n  <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>__decorate<span class="token punctuation">)</span> <span class="token operator">||</span>\n  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">decorators<span class="token punctuation">,</span> target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> desc</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> c <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">,</span>\n      r <span class="token operator">=</span>\n        c <span class="token operator">&lt;</span> <span class="token number">3</span>\n          <span class="token operator">?</span> target\n          <span class="token operator">:</span> desc <span class="token operator">===</span> <span class="token keyword">null</span>\n          <span class="token operator">?</span> <span class="token punctuation">(</span>desc <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span>\n          <span class="token operator">:</span> desc<span class="token punctuation">,</span>\n      d<span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> Reflect <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> Reflect<span class="token punctuation">.</span>decorate <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span>\n      r <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">decorate</span><span class="token punctuation">(</span>decorators<span class="token punctuation">,</span> target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> desc<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">else</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> decorators<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>d <span class="token operator">=</span> decorators<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n          r <span class="token operator">=</span> <span class="token punctuation">(</span>c <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token operator">?</span> <span class="token function">d</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token operator">:</span> c <span class="token operator">&gt;</span> <span class="token number">3</span> <span class="token operator">?</span> <span class="token function">d</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> r<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">d</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span> r<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> c <span class="token operator">&gt;</span> <span class="token number">3</span> <span class="token operator">&amp;&amp;</span> r <span class="token operator">&amp;&amp;</span> Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">,</span> r<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">Decorator</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> Animal <span class="token operator">=</span> <span class="token doc-comment comment">/** <span class="token keyword">@class</span> */</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">function</span> <span class="token function">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  Animal <span class="token operator">=</span> <span class="token function">__decorate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>Decorator<span class="token punctuation">]</span><span class="token punctuation">,</span> Animal<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> Animal<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 3);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "那么，还有一个疑问：为什么__decorate方法可以传一个Decorator数组？",
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "一个类可以有多个装饰器",
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "装饰器是倒序执行的",
  -1
  /* HOISTED */
);
const _hoisted_17 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">Decorator</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  target<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&quot;animal&quot;</span><span class="token punctuation">;</span>\n  target<span class="token punctuation">.</span><span class="token function-variable function">getType</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>type<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  target<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">eat</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;eat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  target<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;run&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">Decorator</span></span>\n<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Animal <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 1);
const _hoisted_18 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">OverwriteAnimal</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token keyword">extends</span></span> target <span class="token punctuation">{</span>\n    <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// parent eat</span>\n      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;child eat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">OverwriteAnimal</span></span>\n<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>\n  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;parent eat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> animal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>animal<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// child eat</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 1);
const _hoisted_19 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">Enum</span><span class="token punctuation">(</span>isEum<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> descriptor<span class="token operator">:</span> PropertyDescriptor<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 此时target指向的是类的原型，key为方法，descriptor为属性描述器</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    descriptor<span class="token punctuation">.</span>enumerable <span class="token operator">=</span> isEum<span class="token punctuation">;</span>\n\n    <span class="token comment">// 进行函数增强</span>\n    <span class="token keyword">let</span> originalValue <span class="token operator">=</span> descriptor<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n    descriptor<span class="token punctuation">.</span><span class="token function-variable function">value</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;eat prev&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token function">originalValue</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;eat next&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>\n  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Enum</span></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;parent eat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> animal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>animal<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230604182940317.png" alt="image-20230604182940317"></p>', 2);
const _hoisted_21 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">valueToUpper</span><span class="token punctuation">(</span>\n  target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>\n  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  descriptor<span class="token operator">:</span> PropertyDescriptor\n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> originalValue <span class="token operator">=</span> descriptor<span class="token punctuation">.</span>set<span class="token punctuation">;</span>\n\n  descriptor<span class="token punctuation">.</span><span class="token function-variable function">set</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    originalValue<span class="token operator">?.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> newValue<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>\n  <span class="token keyword">private</span> _value<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n\n  <span class="token decorator"><span class="token at operator">@</span><span class="token function">valueToUpper</span></span>\n  <span class="token keyword">set</span> <span class="token function">value</span><span class="token punctuation">(</span>newValue<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>_value <span class="token operator">=</span> newValue<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> animal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nanimal<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;hhhhh&quot;</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>animal<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/89dbd5326c08563da41f3ce9bc944b0.png" alt=""></p><p>通过这些例子，可以感知出来：</p>', 3);
const _hoisted_24 = /* @__PURE__ */ createStaticVNode('<h2 id="装饰器的执行流程" tabindex="-1"><a class="header-anchor" href="#装饰器的执行流程" aria-hidden="true">#</a> 装饰器的执行流程</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">Decorator</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>\n    target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>\n    key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n    descriptor<span class="token operator">?</span><span class="token operator">:</span> PropertyDescriptor <span class="token operator">|</span> <span class="token builtin">number</span>\n  <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">Decorator</span></span><span class="token punctuation">(</span><span class="token string">&quot;类装饰器&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">class</span> <span class="token class-name">Flow</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Decorator</span></span><span class="token punctuation">(</span><span class="token string">&quot;构造函数参数装饰器&quot;</span><span class="token punctuation">)</span> val<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Decorator</span></span><span class="token punctuation">(</span><span class="token string">&quot;静态属性装饰器&quot;</span><span class="token punctuation">)</span>\n  <span class="token keyword">static</span> type <span class="token operator">=</span> <span class="token string">&quot;flow&quot;</span><span class="token punctuation">;</span>\n\n  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Decorator</span></span><span class="token punctuation">(</span><span class="token string">&quot;静态方法装饰器&quot;</span><span class="token punctuation">)</span>\n  <span class="token keyword">static</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>type<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Decorator</span></span><span class="token punctuation">(</span><span class="token string">&quot;实例属性装饰器&quot;</span><span class="token punctuation">)</span>\n  <span class="token keyword">public</span> name<span class="token operator">!</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n\n  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Decorator</span></span><span class="token punctuation">(</span><span class="token string">&quot;实例/原型方法装饰器&quot;</span><span class="token punctuation">)</span>\n  <span class="token function">run</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Decorator</span></span><span class="token punctuation">(</span><span class="token string">&quot;函数参数装饰器&quot;</span><span class="token punctuation">)</span> val<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Decorator</span></span><span class="token punctuation">(</span><span class="token string">&quot;属性访问器装饰器&quot;</span><span class="token punctuation">)</span>\n  <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/75113db60624925bcfb16044c869145.png" alt=""></p><blockquote><p>一直会是这个固定的顺序吗？</p><p>不是。</p></blockquote><p>倘若将静态方法装饰器和静态属性装饰器交换位置，会出现如下图：</p><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230605141703049.png" alt="image-20230605141703049"></p>', 6);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "方法和属性之间没有顺序关系，谁先写谁先执行",
  -1
  /* HOISTED */
);
const _hoisted_31 = /* @__PURE__ */ createStaticVNode('<p>那么，根据此结论，可以将代码这样分：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">Decorator</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>\n    target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>\n    key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n    descriptor<span class="token operator">?</span><span class="token operator">:</span> PropertyDescriptor <span class="token operator">|</span> <span class="token builtin">number</span>\n  <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 最后执行</span>\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">Decorator</span></span><span class="token punctuation">(</span><span class="token string">&quot;类装饰器&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">class</span> <span class="token class-name">Flow</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 倒数第二个执行</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Decorator</span></span><span class="token punctuation">(</span><span class="token string">&quot;构造函数参数装饰器&quot;</span><span class="token punctuation">)</span> val<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n  <span class="token comment">// 以下两个，谁先写谁先执行</span>\n  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Decorator</span></span><span class="token punctuation">(</span><span class="token string">&quot;静态方法装饰器&quot;</span><span class="token punctuation">)</span>\n  <span class="token keyword">static</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>type<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Decorator</span></span><span class="token punctuation">(</span><span class="token string">&quot;静态属性装饰器&quot;</span><span class="token punctuation">)</span>\n  <span class="token keyword">static</span> type <span class="token operator">=</span> <span class="token string">&quot;flow&quot;</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 以下三个，谁先写谁先执行</span>\n  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Decorator</span></span><span class="token punctuation">(</span><span class="token string">&quot;属性访问器装饰器&quot;</span><span class="token punctuation">)</span>\n  <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Decorator</span></span><span class="token punctuation">(</span><span class="token string">&quot;实例/原型方法装饰器&quot;</span><span class="token punctuation">)</span>\n  <span class="token function">run</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Decorator</span></span><span class="token punctuation">(</span><span class="token string">&quot;函数参数装饰器&quot;</span><span class="token punctuation">)</span> val<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Decorator</span></span><span class="token punctuation">(</span><span class="token string">&quot;实例属性装饰器&quot;</span><span class="token punctuation">)</span>\n  <span class="token keyword">public</span> name<span class="token operator">!</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230605142543688.png" alt="image-20230605142543688"></p><blockquote><p>这里可能会有一个疑问：明明实例/原型方法装饰器写在了函数参数装饰器之上，怎么和之前说的不一样？</p></blockquote><p>其实很好理解，执行函数时肯定要先找参数，随后在执行函数体中的逻辑，来完成函数的功能。所以会先执行函数参数装饰器，再执行实例/原型方法装饰器。</p>', 5);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "实例 -> 静态 -> 构造函数 -> 类",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode("装饰器"),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("本质上是一个"),
            _hoisted_2,
            createTextVNode("，用来"),
            _hoisted_3
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _hoisted_4,
    createBaseVNode("blockquote", null, [
      _hoisted_10,
      createBaseVNode("p", null, [
        createTextVNode("实际上，"),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("这个target就是class Animal，它指向类本身")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("p", null, [
        createTextVNode("另外，"),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("target除了指向类之外，就是类的原型了")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode("。")
      ])
    ]),
    _hoisted_11,
    createBaseVNode("p", null, [
      createTextVNode("可以看到在"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("__decorate方法中第二个参数就为target，而其对应的值就是Animal。")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_14,
    createBaseVNode("p", null, [
      createTextVNode("因为，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          _hoisted_15,
          createTextVNode("，并且在最后通过d函数去处理装饰器，将结果赋值给r，最后返回r")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("再观察循环的方式，可以发现："),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          _hoisted_16,
          createTextVNode("，也就是说先执行离自己最近的那个装饰器，再向上执行")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。实际上，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("整个执行的流程有点类似于洋葱模型")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    createBaseVNode("blockquote", null, [
      createVNode(_component_font, { color: "blue" }, {
        default: withCtx(() => [
          createTextVNode("扩展类的属性和原型")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_17,
    createBaseVNode("blockquote", null, [
      createVNode(_component_font, { color: "blue" }, {
        default: withCtx(() => [
          createTextVNode("返回子类，这个子类用于重写父类")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_18,
    createBaseVNode("blockquote", null, [
      createVNode(_component_font, { color: "blue" }, {
        default: withCtx(() => [
          createTextVNode("扩展类中的方法")
        ]),
        _: 1
        /* STABLE */
      }),
      createBaseVNode("p", null, [
        createTextVNode("（"),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("装饰器函数在修饰成员函数时一定会执行，无论有没有创建实例")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode("）")
      ])
    ]),
    _hoisted_19,
    createBaseVNode("blockquote", null, [
      createVNode(_component_font, { color: "blue" }, {
        default: withCtx(() => [
          createTextVNode("扩展属性访问器")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_21,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("如果需要在装饰器中传参的话，需要在装饰器函数外先包一层，但最终还是需要返回一个函数。")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _hoisted_24,
    createBaseVNode("p", null, [
      createTextVNode("由此可得出："),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          _hoisted_30
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_31,
    createBaseVNode("p", null, [
      createTextVNode("但整个装饰器执行的流程不变，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("总体分为："),
          _hoisted_36
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ])
  ]);
}
const TypeScriptDecorator_yi__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "TypeScript-Decorator(yi).html.vue"]]);
export {
  TypeScriptDecorator_yi__html as default
};
