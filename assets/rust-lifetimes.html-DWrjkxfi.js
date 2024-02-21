import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, e as withCtx, b as createTextVNode, a as createBaseVNode, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "生命周期",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#生命周期",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 生命周期")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Rust 中每一个引用都有其生命周期（lifetime），也就是引用保持有效的作用域。正如大部分类型是可以推断的，大部分时候生命周期也是可以推断的。",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "避免悬垂引用",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#避免悬垂引用",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 避免悬垂引用")
  ],
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> x<span class="token punctuation">;</span>\n\n  <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">66</span><span class="token punctuation">;</span>\n    x <span class="token operator">=</span> <span class="token operator">&amp;</span>y<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;x: {}&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码中有一个外部作用域和一个内部作用域，可能你会发现变量 <code>x</code> 并没有值，这好像与 「Rust 中并不允许有空值」的结论相悖，这取决于你有没有在它还没赋值前使用它。如果你在它还没有赋值前就使用了它，这就会报错；反之，则不会。</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">;</span>\n\n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;x: {}&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出为：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token number">2</span> <span class="token operator">|</span>   <span class="token keyword">let</span> x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">;</span>\n  <span class="token operator">|</span>       <span class="token operator">-</span> binding declared here but left uninitialized\n<span class="token number">3</span> <span class="token operator">|</span>\n<span class="token number">4</span> <span class="token operator">|</span>   <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;x: {}&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token operator">|</span>                     <span class="token operator">^</span> `x` used here but it isn<span class="token lifetime-annotation symbol">&#39;t</span> initialized\n  <span class="token operator">|</span>\n  <span class="token operator">=</span> note<span class="token punctuation">:</span> this error originates <span class="token keyword">in</span> the <span class="token keyword">macro</span> `<span class="token variable">$crate</span><span class="token punctuation">::</span>format_args_nl` which comes from the expansion of the <span class="token keyword">macro</span> `println` <span class="token punctuation">(</span><span class="token keyword">in</span> <span class="token class-name">Nightly</span> builds<span class="token punctuation">,</span> run with <span class="token operator">-</span><span class="token class-name">Z</span> <span class="token keyword">macro</span><span class="token operator">-</span>backtrace <span class="token keyword">for</span> more info<span class="token punctuation">)</span>\nhelp<span class="token punctuation">:</span> consider assigning a value\n  <span class="token operator">|</span>\n<span class="token number">2</span> <span class="token operator">|</span>   <span class="token keyword">let</span> x<span class="token punctuation">:</span> <span class="token keyword">i32</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token operator">|</span>              <span class="token operator">+</span><span class="token operator">+</span><span class="token operator">+</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>未赋值前就使用，会在编译时出现一个错误。</p><p>再回到讨论生命周期的问题，在代码中外部作用域声明了没有初始化的变量 <code>x</code>，在内部作用域中声明了一个初始值为 <code>55</code> 的变量 <code>y</code>，并尝试将 <code>x</code> 的值设置为一个 <code>y</code> 的引用，接着打印变量 <code>x</code> 的值。使用 <code>cargo run </code> 运行程序后：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code>  <span class="token operator">|</span>\n<span class="token number">5</span> <span class="token operator">|</span>     <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">66</span><span class="token punctuation">;</span>\n  <span class="token operator">|</span>         <span class="token operator">-</span> binding `y` declared here\n<span class="token number">6</span> <span class="token operator">|</span>     x <span class="token operator">=</span> <span class="token operator">&amp;</span>y<span class="token punctuation">;</span>\n  <span class="token operator">|</span>         <span class="token operator">^</span><span class="token operator">^</span> borrowed value does not live long enough\n<span class="token number">7</span> <span class="token operator">|</span>   <span class="token punctuation">}</span>\n  <span class="token operator">|</span>   <span class="token operator">-</span> `y` dropped here <span class="token keyword">while</span> still borrowed\n<span class="token number">8</span> <span class="token operator">|</span>\n<span class="token number">9</span> <span class="token operator">|</span>   <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;x: {}&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token operator">|</span>                     <span class="token operator">-</span> borrow later used here\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现并不能通过编译器编译，因为变量 <code>x</code> 引用的值在尝试使用前就已经离开了作用域了。错误信息也说明了 <code>borrowed value does not live long enough</code> ，借用的值活的不够久，也即变量 <code>x</code> 并没有存在的足够久。原因是变量 <code>x</code> 到达第 7 行内部作用域结束时就离开了作用域，不过变量 <code>y</code> 在外部作用域仍然是有效的。</p><blockquote><p>Rust 如何避免这种情况的？</p></blockquote><p>倘若我们假设出错的代码行之有效，这会造成一个问题就是变量 <code>x</code> 将会引用在 <code>x</code> 离开作用域时被释放的内存，这时尝试任何对 <code>x</code> 的操作都不能正常了。当然这是假设的情况，那么 Rust 是怎么避免这种情况的呢？这得益于借用检查器。</p><blockquote><p>什么是借用检查器？</p></blockquote>', 12);
const _hoisted_16 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> x<span class="token punctuation">;</span>          			<span class="token comment">// ---------+-- &#39;a</span>\n                        <span class="token comment">//          |</span>\n  <span class="token punctuation">{</span>                     <span class="token comment">//          |</span>\n      <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">66</span><span class="token punctuation">;</span>  			<span class="token comment">// -+-- &#39;b  |</span>\n      x <span class="token operator">=</span> <span class="token operator">&amp;</span>y<span class="token punctuation">;</span>           <span class="token comment">//  |       |</span>\n  <span class="token punctuation">}</span>                     <span class="token comment">// -+       |</span>\n                        <span class="token comment">//          |</span>\n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;x: {}&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//          |</span>\n<span class="token punctuation">}</span>                       <span class="token comment">// ---------+</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "x",
  -1
  /* HOISTED */
);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "'a",
  -1
  /* HOISTED */
);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "y",
  -1
  /* HOISTED */
);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "'b",
  -1
  /* HOISTED */
);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "x",
  -1
  /* HOISTED */
);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "y",
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "'a",
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "'b",
  -1
  /* HOISTED */
);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "x",
  -1
  /* HOISTED */
);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "'b",
  -1
  /* HOISTED */
);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "'b",
  -1
  /* HOISTED */
);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "'a",
  -1
  /* HOISTED */
);
const _hoisted_29 = /* @__PURE__ */ createStaticVNode('<p>再来看看能通过编译的正确的写法的生命周期：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">66</span><span class="token punctuation">;</span>      			<span class="token comment">// ----------+-- &#39;b</span>\n                        <span class="token comment">//           |</span>\n  <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token operator">&amp;</span>x<span class="token punctuation">;</span>     			<span class="token comment">// --+-- &#39;a  |</span>\n                        <span class="token comment">//   |       |</span>\n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;y: {}&quot;</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//   |       |</span>\n                        <span class="token comment">// --+       |</span>\n<span class="token punctuation">}</span>                       <span class="token comment">// ----------+</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 2);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "'a",
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "'b",
  -1
  /* HOISTED */
);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "'b",
  -1
  /* HOISTED */
);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "'a",
  -1
  /* HOISTED */
);
const _hoisted_35 = /* @__PURE__ */ createStaticVNode('<h3 id="泛型生命周期参数" tabindex="-1"><a class="header-anchor" href="#泛型生命周期参数" aria-hidden="true">#</a> 泛型生命周期参数</h3><p>倘若我们有一个函数，这个函数接受两个字符串 <code>slice</code> 类型的参数，并返回一个字符串 <code>slice</code> ：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">fn</span> <span class="token function-definition function">compare_string</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">str</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">str</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token keyword">str</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> x<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> y<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      x\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      y\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token string">&quot;abcdefghijklmn&quot;</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">compare_string</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s1<span class="token punctuation">,</span> <span class="token operator">&amp;</span>s2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;The longest string is {}&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初看实现好像没什么问题，但是使用 <code>cargo run</code> 运行程序后会出现以下问题：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code>  <span class="token operator">|</span>\n<span class="token number">2</span> <span class="token operator">|</span>   <span class="token keyword">fn</span> <span class="token function-definition function">compare_string</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">str</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">str</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token keyword">str</span> <span class="token punctuation">{</span>\n  <span class="token operator">|</span>                        <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>     <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>     <span class="token operator">^</span> expected named lifetime parameter\n  <span class="token operator">|</span>\n  <span class="token operator">=</span> help<span class="token punctuation">:</span> this function<span class="token lifetime-annotation symbol">&#39;s</span> <span class="token keyword">return</span> <span class="token keyword">type</span> <span class="token type-definition class-name">contains</span> a borrowed value<span class="token punctuation">,</span> but the signature does not say whether it is borrowed from `x` or `y`\nhelp<span class="token punctuation">:</span> consider introducing a named lifetime parameter\n  <span class="token operator">|</span>\n<span class="token number">2</span> <span class="token operator">|</span>   <span class="token keyword">fn</span> <span class="token function-definition function">compare_string</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span> <span class="token punctuation">{</span>\n  <span class="token operator">|</span>                    <span class="token operator">+</span><span class="token operator">+</span><span class="token operator">+</span><span class="token operator">+</span>     <span class="token operator">+</span><span class="token operator">+</span>          <span class="token operator">+</span><span class="token operator">+</span>          <span class="token operator">+</span><span class="token operator">+</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>错误信息提示了返回值需要一个生命周期参数，因为 Rust 并不知道返回的引用是指向 <code>x</code> 还是 <code>y</code> ，同样借用检查器也无法确认 <code>x</code> 和 <code>y</code> 的生命周期如何与返回值的生命周期相关联，解决这个问题，需要使用泛型生命周期参数来定义引用之间的关系，以便借用检查器分析。</p><h3 id="生命周期注解语法" tabindex="-1"><a class="header-anchor" href="#生命周期注解语法" aria-hidden="true">#</a> 生命周期注解语法</h3>', 7);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "注解语法")
  ],
  -1
  /* HOISTED */
);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "&",
  -1
  /* HOISTED */
);
const _hoisted_44 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">i32</span> <span class="token comment">// 显式的生命周期的引用</span>\n<span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">mut</span> <span class="token keyword">i32</span> <span class="token comment">// 显式的生命周期的可变引用</span>\n<span class="token operator">&amp;</span><span class="token keyword">i32</span> <span class="token comment">// 引用</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个没有生命周期参数的 <code>i32</code> 的引用，一个有叫做 <code>&#39;a</code> 的生命周期参数的 <code>i32</code>的引用，和一个生命周期也是 <code>&#39;a</code> 的 <code>i32</code> 的可变引用。</p><p>给之前的 <code>compare_string</code> 函数添加上泛型生命周期注解：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">fn</span> <span class="token function-definition function">compare_string</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> x<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> y<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      x\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      y\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token string">&quot;abcdefghijklmn&quot;</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">compare_string</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s1<span class="token punctuation">,</span> <span class="token operator">&amp;</span>s2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;The longest string is {}&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 输出</span>\n<span class="token comment">// The longest string is abcdefghijklmn</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生命周期注解告诉了 Rust 编译器多个引用的泛型生命周期参数之间是如何相互联系的。<code>compare_string</code> 函数有一个生命周期 <code>&#39;a</code> 的 <code>字符串 slice</code> 的引用的参数 <code>x</code>。还有另一个同样是生命周期 <code>&#39;a</code> 的 <code>字符串 slice</code>的引用的参数 <code>y</code>。这两个生命周期注解意味着引用 <code>x</code> 和 <code>y</code> 必须与这泛型生命周期存在得一样久，函数也会返回一个同样也与生命周期 <code>&#39;a</code> 存在的一样长的 <code>字符串 slice</code>。</p>', 5);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "'a",
  -1
  /* HOISTED */
);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "x",
  -1
  /* HOISTED */
);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "y",
  -1
  /* HOISTED */
);
const _hoisted_52 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">fn</span> <span class="token function-definition function">compare_string</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> x<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> y<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      x\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      y\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Rust&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> result<span class="token punctuation">;</span>\n\n  <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Cargo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    result <span class="token operator">=</span> <span class="token function">compare_string</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">as_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> s2<span class="token punctuation">.</span><span class="token function">as_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;The longest string is {}&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码使用 <code>cargo run</code> 运行后：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token number">14</span> <span class="token operator">|</span>     <span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Cargo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token operator">|</span>         <span class="token operator">-</span><span class="token operator">-</span> binding `s2` declared here\n<span class="token number">15</span> <span class="token operator">|</span>     result <span class="token operator">=</span> <span class="token function">compare_string</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">as_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> s2<span class="token punctuation">.</span><span class="token function">as_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token operator">|</span>                                          <span class="token operator">^</span><span class="token operator">^</span> borrowed value does not live long enough\n<span class="token number">16</span> <span class="token operator">|</span>   <span class="token punctuation">}</span>\n   <span class="token operator">|</span>   <span class="token operator">-</span> `s2` dropped here <span class="token keyword">while</span> still borrowed\n<span class="token number">17</span> <span class="token operator">|</span>\n<span class="token number">18</span> <span class="token operator">|</span>   <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;The longest string is {}&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token operator">|</span>                                        <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> borrow later used here\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个错误揭示了 <code>result</code> 的引用的生命周期必须是两个参数中较短的那个，也即函数的返回值如果是个引用值，就能保证在两个参数的生命周期之间较短的那个生命周期结束之前保持有效。通过生命周期参数告诉 Rust 的是： <code>compare_string</code> 函数返回的引用的生命周期应该与传入参数的生命周期中较短那个保持一致。</p><p>另外，<code>as_str()</code> 方法的作用是提取包含整个字符串的字符串切片，也就是说将 <code>String</code> 类型转换为 <code>字符串 Slice</code> 类型。</p>', 5);
const _hoisted_57 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#![allow(unused)]</span>\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">fn</span> <span class="token function-definition function">compare_string</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">str</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span> <span class="token punctuation">{</span>\n    x\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token string">&quot;abcdefghijklmn&quot;</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">compare_string</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">as_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;The longest string is {}&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为参数 <code>x</code> 和返回值指定了生命周期参数 <code>&#39;a</code>，不过没有为参数 <code>y</code> 指定，因为 <code>y</code> 的生命周期与参数 <code>x</code>和返回值的生命周期没有任何关系。</p>', 2);
const _hoisted_59 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#![allow(unused)]</span>\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">fn</span> <span class="token function-definition function">compare_string</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">str</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">str</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Rust&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    result<span class="token punctuation">.</span><span class="token function">as_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出为：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code>  <span class="token operator">|</span>\n<span class="token number">5</span> <span class="token operator">|</span>     result<span class="token punctuation">.</span><span class="token function">as_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token operator">|</span>     <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span>\n  <span class="token operator">|</span>     <span class="token operator">|</span>\n  <span class="token operator">|</span>     returns a value referencing data owned by the current function\n  <span class="token operator">|</span>     `result` is borrowed here\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即使返回值指定了生命周期参数 <code>&#39;a</code>，但是也仍然通不过编译，因为返回值的生命周期与参数完全没有关联。<code>result</code> 将在函数调用结束后离开作用域并被清理，而代码尝试从函数中返回一个 <code>result</code> 的引用，仍然是经典的悬垂引用问题。</p>', 4);
const _hoisted_63 = /* @__PURE__ */ createStaticVNode('<h3 id="结构体中的生命周期注解" tabindex="-1"><a class="header-anchor" href="#结构体中的生命周期注解" aria-hidden="true">#</a> 结构体中的生命周期注解</h3><p>结构体定义中的每一个引用可以添加生命周期注解。</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#![allow(unused)]</span>\n<span class="token keyword">struct</span> <span class="token type-definition class-name">Person</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span><span class="token punctuation">,</span>\n  age<span class="token punctuation">:</span> <span class="token keyword">u8</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n    name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Rust&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">as_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    age<span class="token punctuation">:</span> <span class="token number">21</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中的结构体有一个字段 <code>name</code> ，它存放了一个 <code>字符串 slice</code> ，这是一个引用。类似于泛型参数类型，必须在结构体名称后面的尖括号中声明泛型生命周期参数，以便在结构体中定义使用生命周期参数。</p><h3 id="生命周期省略" tabindex="-1"><a class="header-anchor" href="#生命周期省略" aria-hidden="true">#</a> 生命周期省略</h3><p>每一个引用都有一个生命周期，而且我们需要为那些使用了引用的函数或结构体指定生命周期。在早期 Rust 版本中，每一个引用都必须有明确的生命周期，当时的函数签名是这样的：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">dep</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种明确且强制的要求，导致了很多重复代码的出现，总是重复地编写一摸一样的生命周期注解。Rust 团队随后就把这些可预测的并且遵循几个明确的模式，编码进了 Rust 编译器，如此借用检查器在这些情况下就能推断出生命周期而不再强制开发者显式地增加注解。</p>', 8);
const _hoisted_71 = /* @__PURE__ */ createStaticVNode('<ul><li>编译器为每一个引用参数都分配一个生命周期参数，也就是说函数有一个引用参数，就有一个生命周期参数</li><li>如果只有一个输入生命周期参数，那么它被赋予所有输出生命周期参数</li><li>如果方法有多个输入生命周期参数并且其中一个参数是 <code>&amp;self</code> 或 <code>&amp;mut self</code> ，说明是个对象的方法，那么所有输出生命周期参数被赋予给 <code>self</code> 的生命周期。</li></ul><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token comment">// 普通函数</span>\n<span class="token keyword">fn</span> <span class="token function-definition function">dep</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">str</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token keyword">str</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// 应用第一条规则</span>\n<span class="token keyword">fn</span> <span class="token function-definition function">dep</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token keyword">str</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// 应用第二条规则</span>\n<span class="token keyword">fn</span> <span class="token function-definition function">dep</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// 应用第三条规则(只适用于方法签名)</span>\n<span class="token keyword">struct</span> <span class="token type-definition class-name">Person</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">impl</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span> <span class="token class-name">Person</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">fn</span> <span class="token function-definition function">value</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">,</span> p<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">str</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token keyword">str</span> <span class="token punctuation">{</span>\n   	<span class="token keyword">self</span><span class="token punctuation">.</span>name\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 三条规则都不适用，则会报错</span>\n<span class="token keyword">fn</span> <span class="token function-definition function">dep</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token punctuation">,</span> <span class="token lifetime-annotation symbol">&#39;b</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;b</span> <span class="token keyword">str</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token keyword">str</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法中的生命周期注解" tabindex="-1"><a class="header-anchor" href="#方法中的生命周期注解" aria-hidden="true">#</a> 方法中的生命周期注解</h3><p>当为带有生命周期的结构体实现方法时，其语法依然类似于结构体中的生命周期注解语法。</p><p>实现方法时，结构体字段的生命周期必须总是在 <code>impl</code> 关键字后声明，并在结构体名称之后使用。</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">struct</span> <span class="token type-definition class-name">Person</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">impl</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span> <span class="token class-name">Person</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">fn</span> <span class="token function-definition function">value</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">,</span> p<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">str</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token keyword">str</span> <span class="token punctuation">{</span>\n   	<span class="token keyword">self</span><span class="token punctuation">.</span>name\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>impl</code> 之后和类型名称之后的生命周期参数是必要的。这里有两个输入生命周期，所以 Rust 应用第一条生命周期省略规则并给予 <code>&amp;self</code> 和 <code>p</code> 它们各自的生命周期。接着，因为其中一个参数是 <code>&amp;self</code> ，返回值类型被赋予了 <code>&amp;self</code> 的生命周期。</p><h3 id="静态生命周期" tabindex="-1"><a class="header-anchor" href="#静态生命周期" aria-hidden="true">#</a> 静态生命周期</h3>', 8);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "'static",
  -1
  /* HOISTED */
);
const _hoisted_80 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> s<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;static</span> <span class="token keyword">str</span> <span class="token operator">=</span> <span class="token string">&quot;Hello Rust&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个字符串的文本被直接存储在程序的二进制文件中，而且这个二进制文件总是可用的。</p><h3 id="结合-trait-bounds" tabindex="-1"><a class="header-anchor" href="#结合-trait-bounds" aria-hidden="true">#</a> 结合 <code>trait bounds</code></h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#![allow(unused)]</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>fmt<span class="token punctuation">::</span></span><span class="token class-name">Display</span><span class="token punctuation">;</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">fn</span> <span class="token function-definition function">value</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>\n    x<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span><span class="token punctuation">,</span>\n    y<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span><span class="token punctuation">,</span> \n    z<span class="token punctuation">:</span> <span class="token class-name">T</span>\n  <span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span>\n  <span class="token keyword">where</span> \n    <span class="token class-name">T</span><span class="token punctuation">:</span> <span class="token class-name">Display</span>\n  <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> x<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> y<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      x\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      y\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为生命周期也是泛型，所以生命周期参数 <code>&#39;a</code> 和泛型类型参数 <code>T</code> 都位于函数名后的同一尖括号列表中。</p>', 5);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("生命周期确保了引用有效")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_2,
    _hoisted_3,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("避免悬垂引用，是生命周期的主要作用")
      ]),
      _: 1
      /* STABLE */
    }),
    createTextVNode("。回顾一下悬垂引用带来的问题：它会导致程序引用了非预期引用的数据。"),
    _hoisted_4,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("在 Rust 编译器中，存在一个借用检查器（borrow checker），它比较作用域来确保所有的借用都是有效的")
      ]),
      _: 1
      /* STABLE */
    }),
    createTextVNode("。如何去比较？在借用检查器中，每个变量都有一个生命周期注释，"),
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("通过生命周期注释标注的范围来进行比较")
      ]),
      _: 1
      /* STABLE */
    }),
    createTextVNode("。比如上方代码的生命周期注释是："),
    _hoisted_16,
    createBaseVNode("p", null, [
      createTextVNode("这里将变量 "),
      _hoisted_17,
      createTextVNode(" 的生命周期标记为 "),
      _hoisted_18,
      createTextVNode("，将变量 "),
      _hoisted_19,
      createTextVNode(" 的生命周期标记为 "),
      _hoisted_20,
      createTextVNode(" 。可以看到，变量 "),
      _hoisted_21,
      createTextVNode(" 的生命周期是要比变量 "),
      _hoisted_22,
      createTextVNode(" 的生命周期大的，Rust 编译器在编译时会比较这两个生命周期的大小，并发现 "),
      _hoisted_23,
      createTextVNode(" 的生命周期比 "),
      _hoisted_24,
      createTextVNode(" 的生命周期要大得多，不过变量 "),
      _hoisted_25,
      createTextVNode(" 引用了一个拥有生命周期 "),
      _hoisted_26,
      createTextVNode(" 的变量，Rust 编译器发现生命周期 "),
      _hoisted_27,
      createTextVNode(" 要比生命周期 "),
      _hoisted_28,
      createTextVNode(" 小得多，也即是："),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("被引用的对象的生命周期比它的引用者的生命周期还要小，这种情况编译器拒绝编译")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_29,
    createBaseVNode("p", null, [
      createTextVNode("从代码看出，生命周期 "),
      _hoisted_31,
      createTextVNode(" 比生命周期 "),
      _hoisted_32,
      createTextVNode(" 要小得多，而被引用的对象的生命周期是 "),
      _hoisted_33,
      createTextVNode(" ，而引用者的生命周期是 "),
      _hoisted_34,
      createTextVNode(" ，完美符合编译器的原则："),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("「一个有效的引用，是被引用的对象的生命周期有着比引用者更长的生命周期」")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，也即是：数据比引用有着更长的生命周期。其实也不难理解，被引用的对象如果生命周期过短，很容易造成引用者的指针指向被释放的内存了，这就是悬垂引用产生的原因。当然，这些生命周期注释图并不是可视化的，而是 Rust 编译器在编译时其内部判断的规则。")
    ]),
    _hoisted_35,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("生命周期注解语法并不能改变任何引用的生命周期的长短，它只负责描述多个引用生命周期相互的关系")
      ]),
      _: 1
      /* STABLE */
    }),
    createTextVNode("。与函数签名中指定了泛型类型参数后就可以接受任何类型的参数一样，"),
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("当指定了泛型生命周期参数后，函数就可以接受任何生命周期的引用了")
      ]),
      _: 1
      /* STABLE */
    }),
    createTextVNode("。"),
    _hoisted_42,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("生命周期参数名称以撇号 `'` 开头")
      ]),
      _: 1
      /* STABLE */
    }),
    createTextVNode("，名称通常是小写。生命周期参数注解位于引用 "),
    _hoisted_43,
    createTextVNode(" 之后，并用一个空格来将引用类型和生命周期注解分隔开。"),
    _hoisted_44,
    createBaseVNode("p", null, [
      createTextVNode("在函数签名中指定生命周期参数时，并没有改变任何传入值或返回值的生命周期，而是指出任何不满足这个约束条件的值都将被借用检查器拒绝。函数签名包含生命周期意味着 Rust 编译器的工作更加简单了。"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("因为我们用相同的生命周期参数 "),
          _hoisted_49,
          createTextVNode(" 标注了返回的引用值，所以返回的引用值就能保证在 "),
          _hoisted_50,
          createTextVNode(" 和 "),
          _hoisted_51,
          createTextVNode(" 中较短的那个生命周期结束之前保持有效")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_52,
    createBaseVNode("p", null, [
      createTextVNode("对于函数签名，我们"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("也可以只给其中一个参数指定生命周期注解，这样这个函数就总是返回其中一个参数了")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，而不是两个参数之间生命周期较短的引用。")
    ]),
    _hoisted_57,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("当从函数中返回一个引用，返回值的生命周期参数需要与一个参数的生命周期参数相匹配")
      ]),
      _: 1
      /* STABLE */
    }),
    createTextVNode("。如果返回的引用没有指向任何一个参数，那么唯一的可能是其函数内部创建的值。然而它将会是一个悬垂引用，因为它将在函数结束时离开作用域，这时指向的就是一块被释放的内存了。"),
    _hoisted_59,
    createBaseVNode("p", null, [
      createTextVNode("总结就是"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("生命周期语法用于将函数的多个参数与其返回值的生命周期进行关联")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。一旦它们形成了某种关联，Rust 就能够阻止悬垂指针等内存安全问题了。")
    ]),
    _hoisted_63,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("被编码进 Rust 引用分析的模式被称为生命周期省略规则（lifetime elision rules）")
      ]),
      _: 1
      /* STABLE */
    }),
    createTextVNode("。这为开发者提供了便利，这些规则是一些特定的场景，编译器会考虑如果代码符合这些场景，就无需明确指定生命周期。这些省略规则并不提供完整的推断，如果 Rust 在明确遵守这些规则的前提下变量的生命周期注解来解决错误问题的地方给出一个提示，而不是进行推断或猜测。"),
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("函数或方法的参数的生命周期被称为输入生命周期（input lifetimes），而返回值的生命周期被称为输出生命周期（output lifetimes）")
      ]),
      _: 1
      /* STABLE */
    }),
    createTextVNode("。"),
    createBaseVNode("p", null, [
      createTextVNode("编译器使用"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("三条规则")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("来判断引用何时不需要明确的注解：")
    ]),
    _hoisted_71,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("静态生命周期是一种特殊的生命周期，使用 `'static` 定义，其生命周期能够存活于整个程序期间")
      ]),
      _: 1
      /* STABLE */
    }),
    createTextVNode("。所有的字符串字面值都拥有 "),
    _hoisted_79,
    createTextVNode(" 生命周期。"),
    _hoisted_80
  ]);
}
const rustLifetimes_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "rust-lifetimes.html.vue"]]);
export {
  rustLifetimes_html as default
};
