import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="引用与借用" tabindex="-1"><a class="header-anchor" href="#引用与借用" aria-hidden="true">#</a> 引用与借用</h2><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  	<span class="token comment">// 解构</span>\n    <span class="token keyword">let</span> <span class="token punctuation">(</span>s2<span class="token punctuation">,</span> len<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">calculate_length</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;The length of &#39;{}&#39; is {}.&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">calculate_length</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> length <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// len() 返回字符串的长度</span>\n\n    <span class="token punctuation">(</span>s<span class="token punctuation">,</span> length<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上方代码里，必须要将 <code>String</code> 返回给调用函数，以便在调用 <code>calculate_length</code> 函数后仍然能使用 <code>String</code>，因为 <code>String</code> 被移动到了 <code>calculate_length</code> 中，这显然是不方便的。</p><h3 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h3>', 4);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "引用",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "references",
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> slen <span class="token operator">=</span> <span class="token function">calculate_string</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;The length of &#39;{}&#39; is {}.&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> slen<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">calculate_string</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">usize</span> <span class="token punctuation">{</span>\n  s<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码就是使用了引用。</p><p><code>&amp;String s</code> 指向 <code>String s1</code> 的内存示意图：</p><img src="https://kaisery.github.io/trpl-zh-cn/img/trpl04-05.svg"><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code>  <span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> slen <span class="token operator">=</span> <span class="token function">calculate_string</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 5);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "&s1",
  -1
  /* HOISTED */
);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "s1",
  -1
  /* HOISTED */
);
const _hoisted_14 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">calculate_string</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">usize</span> <span class="token punctuation">{</span>\n  s<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "&String",
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "s",
  -1
  /* HOISTED */
);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "s",
  -1
  /* HOISTED */
);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "s",
  -1
  /* HOISTED */
);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "借用",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#借用",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 借用")
  ],
  -1
  /* HOISTED */
);
const _hoisted_20 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">change</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">change</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  s<span class="token punctuation">.</span><span class="token function">push_str</span><span class="token punctuation">(</span><span class="token string">&quot;{}, World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面，我们尝试修改借用的值，在编译后发现行不通。</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code>    <span class="token operator">|</span>\n<span class="token number">105</span> <span class="token operator">|</span>   s<span class="token punctuation">.</span><span class="token function">push_str</span><span class="token punctuation">(</span><span class="token string">&quot;{}, World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token operator">|</span>   <span class="token operator">^</span> `s` is a `<span class="token operator">&amp;</span>` reference<span class="token punctuation">,</span> so the data it refers to cannot be borrowed <span class="token keyword">as</span> mutable\n    <span class="token operator">|</span>\nhelp<span class="token punctuation">:</span> consider changing this to be a mutable reference\n    <span class="token operator">|</span>\n<span class="token number">104</span> <span class="token operator">|</span> <span class="token keyword">fn</span> <span class="token function-definition function">change</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token operator">|</span>               <span class="token operator">+</span><span class="token operator">+</span><span class="token operator">+</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 3);
const _hoisted_23 = /* @__PURE__ */ createStaticVNode('<h3 id="可变引用" tabindex="-1"><a class="header-anchor" href="#可变引用" aria-hidden="true">#</a> 可变引用</h3><p>既然默认不可以改变引用的值，那么还是有办法去改变引用的值。</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> <span class="token keyword">mut</span> s1 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">change</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> s1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">change</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  s<span class="token punctuation">.</span><span class="token function">push_str</span><span class="token punctuation">(</span><span class="token string">&quot;{}, World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将变量 <code>s1</code> 变为可变的，然后在调用 <code>change</code> 函数的地方创建一个可变引用 <code>&amp;mut s1</code> ，同时更新 <code>change</code> 函数可以接受一个可变引用 <code>s: &amp;mut String</code> ，这就表明了 <code>change</code> 函数将改变它所借用的值。</p>', 4);
const _hoisted_27 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> <span class="token keyword">mut</span> s <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> r1 <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> s<span class="token punctuation">;</span>\n<span class="token keyword">let</span> r2 <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> s<span class="token punctuation">;</span>\n\n<span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}, {}&quot;</span><span class="token punctuation">,</span> r1<span class="token punctuation">,</span> r2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code>    <span class="token operator">|</span>\n<span class="token number">101</span> <span class="token operator">|</span>   <span class="token keyword">let</span> r1 <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> s<span class="token punctuation">;</span>\n    <span class="token operator">|</span>            <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> first mutable borrow occurs here\n<span class="token number">102</span> <span class="token operator">|</span>   <span class="token keyword">let</span> r2 <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> s<span class="token punctuation">;</span>\n    <span class="token operator">|</span>            <span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span> second mutable borrow occurs here\n<span class="token number">103</span> <span class="token operator">|</span>\n<span class="token number">104</span> <span class="token operator">|</span>   <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}, {}&quot;</span><span class="token punctuation">,</span> r1<span class="token punctuation">,</span> r2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token operator">|</span>                      <span class="token operator">-</span><span class="token operator">-</span> first borrow later used here\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个报错说明我们不能同一时间创建多个可变变量借用。第一个可变的借用在 <code>r1</code> 中，它持续到了 <code>println!</code> 。但是在 <code>r1</code> 可变引用的创建和使用之间，又创建了一个可变引用。</p>', 3);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "数据竞争可以由三个行为造成：",
  -1
  /* HOISTED */
);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "两个或更多指针同时访问同一数据"),
    /* @__PURE__ */ createBaseVNode("li", null, "至少有一个指针被用来写入数据"),
    /* @__PURE__ */ createBaseVNode("li", null, "没有同步数据访问的机制")
  ],
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "数据竞争会导致未定义行为的出现，难以在运行时追踪，Rust 避免了这种情况发生，因为 Rust 在编译时就不会出现数据竞争的代码！",
  -1
  /* HOISTED */
);
const _hoisted_33 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> <span class="token keyword">mut</span> s <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">{</span>\n    <span class="token keyword">let</span> r1 <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> s<span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token comment">// r1 在这里离开了作用域，所以我们完全可以创建一个新的引用</span>\n\n<span class="token keyword">let</span> r2 <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> s<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再拥有不可变引用时，又会有怎样的问题出现？</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> <span class="token keyword">mut</span> s <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> r1 <span class="token operator">=</span> <span class="token operator">&amp;</span>s<span class="token punctuation">;</span> <span class="token comment">// 不可变引用</span>\n<span class="token keyword">let</span> r2 <span class="token operator">=</span> <span class="token operator">&amp;</span>s<span class="token punctuation">;</span> <span class="token comment">// 不可变引用</span>\n<span class="token keyword">let</span> r3 <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> s<span class="token punctuation">;</span> <span class="token comment">// 可变引用</span>\n\n<span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}, {}, {}&quot;</span><span class="token punctuation">,</span> r1<span class="token punctuation">,</span> r2<span class="token punctuation">,</span> r3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>错误如下：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code>    <span class="token operator">|</span>\n<span class="token number">101</span> <span class="token operator">|</span>   <span class="token keyword">let</span> r1 <span class="token operator">=</span> <span class="token operator">&amp;</span>s<span class="token punctuation">;</span> <span class="token comment">// 不可变引用</span>\n    <span class="token operator">|</span>            <span class="token operator">-</span><span class="token operator">-</span> immutable borrow occurs here\n<span class="token number">102</span> <span class="token operator">|</span>   <span class="token keyword">let</span> r2 <span class="token operator">=</span> <span class="token operator">&amp;</span>s<span class="token punctuation">;</span> <span class="token comment">// 不可变引用</span>\n<span class="token number">103</span> <span class="token operator">|</span>   <span class="token keyword">let</span> r3 <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> s<span class="token punctuation">;</span> <span class="token comment">// 可变引用</span>\n    <span class="token operator">|</span>            <span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span> mutable borrow occurs here\n<span class="token number">104</span> <span class="token operator">|</span>   \n<span class="token number">105</span> <span class="token operator">|</span>   <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}, {}, {}&quot;</span><span class="token punctuation">,</span> r1<span class="token punctuation">,</span> r2<span class="token punctuation">,</span> r3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token operator">|</span>                          <span class="token operator">-</span><span class="token operator">-</span> immutable borrow later used here\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 5);
const _hoisted_38 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> <span class="token keyword">mut</span> s <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> r1 <span class="token operator">=</span> <span class="token operator">&amp;</span>s<span class="token punctuation">;</span> <span class="token comment">// 不可变引用</span>\n<span class="token keyword">let</span> r2 <span class="token operator">=</span> <span class="token operator">&amp;</span>s<span class="token punctuation">;</span> <span class="token comment">// 不可变引用</span>\n<span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{} and {}&quot;</span><span class="token punctuation">,</span> r1<span class="token punctuation">,</span> r2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 此位置之后 r1 和 r2 不再使用</span>\n\n<span class="token keyword">let</span> r3 <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> s<span class="token punctuation">;</span> <span class="token comment">// 可变引用</span>\n<span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> r3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "悬垂引用",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#悬垂引用",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 悬垂引用")
  ],
  -1
  /* HOISTED */
);
const _hoisted_40 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token function">dangling_pointer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">dangling_pointer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token class-name">String</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token operator">&amp;</span>s\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会出现以下错误：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code>    <span class="token operator">|</span>\n<span class="token number">101</span> <span class="token operator">|</span>   <span class="token keyword">fn</span> <span class="token function-definition function">dangling_pointer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token class-name">String</span> <span class="token punctuation">{</span>\n    <span class="token operator">|</span>                            <span class="token operator">^</span> expected named lifetime parameter\n    <span class="token operator">|</span>\n    <span class="token operator">=</span> help<span class="token punctuation">:</span> this function<span class="token lifetime-annotation symbol">&#39;s</span> <span class="token keyword">return</span> <span class="token keyword">type</span> <span class="token type-definition class-name">contains</span> a borrowed value<span class="token punctuation">,</span> but there is no value <span class="token keyword">for</span> it to be borrowed from\nhelp<span class="token punctuation">:</span> consider using the `<span class="token lifetime-annotation symbol">&#39;static</span>` lifetime\n    <span class="token operator">|</span>\n<span class="token number">101</span> <span class="token operator">|</span>   <span class="token keyword">fn</span> <span class="token function-definition function">dangling_pointer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;static</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个错误揭示了 <code>dangling_pointer</code> 函数返回了一个不可变引用，但是没有找到这个引用。</p><p>为什么会这样呢？</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token function">dangling_pointer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">dangling_pointer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token class-name">String</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 变量 s 在 dangling_pointer 方法中创建</span>\n\n  <span class="token operator">&amp;</span>s <span class="token comment">// 返回字符串 s 的不可变引用</span>\n<span class="token punctuation">}</span> <span class="token comment">// 这里作用域结束，变量 s 被丢弃，其内存被释放</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为变量 <code>s</code> 是在 <code>dangling_pointer</code> 方法中创建的，当该方法执行完毕后，变量 <code>s</code> 也被释放了。这时返回它的引用，该引用指向的是一个无效的 <code>String</code> !</p><p>解决办法就是直接返回 <code>String</code>:</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">dangling_pointer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  \n  s\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于引用总结就是：</p><ul><li>可变引用和不可变引用不能同时存在，同时要注意不能对同一数据创建多个可变引用</li><li>引用总是有效的，无效的引用会造成悬垂引用的问题</li></ul>', 11);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("Rust 提供了一个"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("不用获取所有权就可以使用值的功能，叫做 "),
          _hoisted_5,
          createTextVNode("（"),
          _hoisted_6,
          createTextVNode("）")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，引用像一个指针，因为它是一个地址，由此可以访问存储于该地址的其他变量的数据，同时"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("引用能够确保指向某个特定类型的有效值")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_7,
    createBaseVNode("p", null, [
      _hoisted_12,
      createTextVNode(" 创建了一个指向 "),
      _hoisted_13,
      createTextVNode(" 的引用，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("正因为是引用，所以不是拥有它。因为没有拥有，所以当引用停止使用时，它所指向的值也不会被丢弃")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_14,
    createBaseVNode("p", null, [
      createTextVNode("同理，函数签名使用了 "),
      _hoisted_15,
      createTextVNode(" 表明了函数参数 "),
      _hoisted_16,
      createTextVNode(" 是一个引用。当 "),
      _hoisted_17,
      createTextVNode(" 停止使用时并不丢弃引用所指向的数据，因为 "),
      _hoisted_18,
      createTextVNode(" 没有所有权。"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("当函数使用引用而不是实际值作为参数，无需返回值来交还所有权")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，因为从来没有拥有过。")
    ]),
    _hoisted_19,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("将创建一个引用的行为称为借用（borrowing）")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_20,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("正如变量是不可变的，引用也一样，默认不允许修改引用的值。")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_23,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("允许我们去修改一个借用的值，这就是可变引用（mutable reference）")
      ]),
      _: 1
      /* STABLE */
    }),
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("可变引用有一个限制：如果你有一个对该变量的可变引用，就不能再创建对该变量的引用。")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_27,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("防止同一时间对同一数据存在多个可变引用，这个好处就是 Rust 可以在编译时避免数据竞争。")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_30,
    _hoisted_31,
    _hoisted_32,
    createBaseVNode("p", null, [
      createTextVNode("可以"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode('使用大括号来创建一个新的作用域，以允许拥有多个可变引用，但是不能 "同时" 拥有')
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("：")
    ]),
    _hoisted_33,
    createBaseVNode("p", null, [
      createTextVNode("我们也"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("不能在拥有不可变引用时，同时拥有可变引用！")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("多个不可变引用是可以的！")
    ]),
    _hoisted_38,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("一个引用的作用域是从声明的地方开始一直持续到最后一次使用为止")
      ]),
      _: 1
      /* STABLE */
    }),
    createTextVNode("。所以以上代码是能够通过编译的。"),
    _hoisted_39,
    createBaseVNode("p", null, [
      createTextVNode("在具有指针的语言，很容易出现"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("释放内存时保留指向它的指针而错误地生成悬垂指针")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("悬垂指针是指"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("其指向的内存可能已经被分配给其他持有者了")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。在 Rust 中编译器确保引用永远不会出现悬垂指针的情况。")
    ]),
    _hoisted_40
  ]);
}
const rustReferenceBorrowing_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "rust-reference-borrowing.html.vue"]]);
export {
  rustReferenceBorrowing_html as default
};
