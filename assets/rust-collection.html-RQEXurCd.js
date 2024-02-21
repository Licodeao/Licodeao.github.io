import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "常见集合",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#常见集合",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 常见集合")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "vector",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "hash map",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "vector",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#vector",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Vector")
  ],
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "vector",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Vec<T>",
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "vector",
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<blockquote><p>创建 vector</p></blockquote><p>通过 <code>Vec::new</code> 可以创建一个空的 <code>vector</code></p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> v<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;v is {}&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为了方便，Rust 也提供了一个更简短地创建 <code>vector</code> 的 <code>vec! </code> 宏：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> v <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">666</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;v = {:?}&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里没有显式地标注类型，是因为在此时 Rust 可以自动推断类型。</p><p>还可以通过 <code>Vec::from</code> 创建一个 <code>vector</code></p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> v <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">666</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;v = {:?}&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>修改 vector</p></blockquote><p>通过 <code>push</code> 方法向 <code>vector</code> 增加元素：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">666</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nv<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">777</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;v = {:?}&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意⚠️：这时候需要使用 <code>mut</code> 关键字使其可变，因为需要改变 <code>vector</code> 的值。</p><p>通过 <code>remove</code> 方法删除 <code>vector</code> 中某个元素，通过索引来删除具体元素：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">666</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nv<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">777</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;v = {:?}&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nv<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;v = {:?}&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>clear</code> 方法直接清空 <code>vector</code> 里的元素</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">666</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nv<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">777</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;v = {:?}&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nv<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;v = {:?}&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nv<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;v = {:?}&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// v = [666, 666, 666, 777]</span>\n<span class="token comment">// v = [666, 666, 666]</span>\n<span class="token comment">// v = []</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过 索引或 <code>get</code> 方法，来获取 <code>vector</code> 中的元素：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#![allow(unused)]</span>\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> v <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">666</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 索引方式</span>\n  <span class="token keyword">let</span> first_element <span class="token operator">=</span> <span class="token operator">&amp;</span>v<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;index pattern: {first_element}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// Option get方式</span>\n  <span class="token keyword">let</span> first_element<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token operator">&amp;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span> <span class="token operator">=</span>  v<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">match</span> first_element <span class="token punctuation">{</span>\n      <span class="token class-name">Some</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;ele: {}&quot;</span><span class="token punctuation">,</span> ele<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token class-name">None</span> <span class="token operator">=&gt;</span> <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;None&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过索引访问一个不存在的元素，即引用一个不存在的元素时，Rust 会造成 <code>panic</code> 。</p><p>通过 <code>get</code> 方法访问一个不存在的元素时，Rust 不会造成 <code>panic</code> 而是返回 <code>None</code> ，它可以容忍偶尔出现超过 <code>vector</code> 范围的访问，也就是说这种方式下出现越界访问属于正常情况，不会造成 <code>panic</code> 。</p><p>在使用索引方式来获取 <code>vector</code> 中的元素时，需要特别注意借用规则：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#![allow(unused)]</span>\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> v <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">666</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 索引方式</span>\n  <span class="token keyword">let</span> first_element <span class="token operator">=</span> <span class="token operator">&amp;</span>v<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  v<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;index pattern: {first_element}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码通过索引方式来访问 <code>vector</code> 中元素时，就与借用规则产生了冲突，不可变引用和可变引用不能同时存在于相同作用域中。</p><blockquote><p>那为什么 <code>vector</code> 结尾的变化会关联到第一个元素的引用？</p></blockquote><p>是由于 <code>vector</code> 的工作方式，在没有足够空间并在 <code>vector</code> 的结尾增加新元素时，所有元素依次相邻存放，可能会要求分配新内存并老的元素拷贝到新空间内。这时，第一个元素的引用就指向了被释放的内存。于是，借用规则防止了这个情况的发生。</p><p>使用 <code>for</code> 循环来获取 <code>vector</code> 中的每一个元素的不可变引用</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#![allow(unused)]</span>\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> v <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">666</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  \n  <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token operator">&amp;</span>v <span class="token punctuation">{</span>\n    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遍历可变 <code>vector</code> 中的每一个元素的可变引用以便能改变它们</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#![allow(unused)]</span>\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">666</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  \n  <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> v <span class="token punctuation">{</span>\n    <span class="token comment">// 为了修改可变引用所指向的值，必须使用解引用运算符 (*) 来获取 i 的值</span>\n    <span class="token operator">*</span>i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{:?}&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>使用枚举来存储多种类型</p></blockquote><p><code>vector</code> 只能存储相同类型的值，这固然满足不了某些场景。结合枚举，就能在 <code>vector</code> 中存放多种类型了。由于枚举的成员都被定义为相同的枚举类型，所以当需要在 <code>vector</code> 中存储不同的类型值时，可以定义一个枚举。</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">enum</span> <span class="token type-definition class-name">Apple</span> <span class="token punctuation">{</span>\n    <span class="token class-name">SmallApple</span><span class="token punctuation">(</span><span class="token keyword">i32</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token class-name">MiddleApple</span><span class="token punctuation">(</span><span class="token keyword">f64</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token class-name">BigApple</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">let</span> v <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span>\n    <span class="token class-name">Apple</span><span class="token punctuation">::</span><span class="token class-name">SmallApple</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token class-name">Apple</span><span class="token punctuation">::</span><span class="token class-name">MiddleApple</span><span class="token punctuation">(</span><span class="token number">6.6</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token class-name">Apple</span><span class="token punctuation">::</span><span class="token class-name">BigApple</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;BigApple&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token operator">&amp;</span>v <span class="token punctuation">{</span>\n    <span class="token keyword">match</span> i <span class="token punctuation">{</span>\n      <span class="token class-name">Apple</span><span class="token punctuation">::</span><span class="token class-name">SmallApple</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;SmallApple: {}&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token class-name">Apple</span><span class="token punctuation">::</span><span class="token class-name">MiddleApple</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;MiddleApple: {}&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token class-name">Apple</span><span class="token punctuation">::</span><span class="token class-name">BigApple</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;BigApple: {}&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 输出为</span>\n<span class="token class-name">SmallApple</span><span class="token punctuation">:</span> <span class="token number">6</span>\n<span class="token class-name">MiddleApple</span><span class="token punctuation">:</span> <span class="token number">6.6</span>\n<span class="token class-name">BigApple</span><span class="token punctuation">:</span> <span class="token class-name">BigApple</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 32);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "vector",
  -1
  /* HOISTED */
);
const _hoisted_41 = /* @__PURE__ */ createStaticVNode('<blockquote><p><code>vector</code> 在离开作用域时会被释放</p></blockquote><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#![allow(unused)]</span>\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> v <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token comment">// v 被释放掉了</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 2);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "字符串",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#字符串",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 字符串")
  ],
  -1
  /* HOISTED */
);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "String",
  -1
  /* HOISTED */
);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  " &str",
  -1
  /* HOISTED */
);
const _hoisted_46 = /* @__PURE__ */ createStaticVNode('<p>通过 <code>String::new</code> 方法新建一个空的字符串</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> <span class="token keyword">mut</span> s <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以通过 <code>String::from</code> 方法从字符串字面值创建 <code>String</code></p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Rust!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>String</code> 的大小可以增加，其内容也可以改变，因为它是一种可增长、可变、可拥有、UTF-8 编码的字符串类型。</p><p>可以使用 <code>push</code> 或 <code>push_str</code> 来更新字符串</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> <span class="token keyword">mut</span> s1 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  s1<span class="token punctuation">.</span><span class="token function">push_str</span><span class="token punctuation">(</span><span class="token string">&quot; Rust&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 7);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "push",
  -1
  /* HOISTED */
);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "String",
  -1
  /* HOISTED */
);
const _hoisted_55 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> <span class="token keyword">mut</span> s1 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  s1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token char">&#39;!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于复杂的字符串链接，可以使用 <code>format!</code> 宏：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> s3 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token macro property">format!</span><span class="token punctuation">(</span><span class="token string">&quot;{}-{}{}&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> s3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 3);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "hash-map",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#hash-map",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Hash Map")
  ],
  -1
  /* HOISTED */
);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Hash Map",
  -1
  /* HOISTED */
);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "key",
  -1
  /* HOISTED */
);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "HashMap<K, V>",
  -1
  /* HOISTED */
);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "HashMap<K, V>",
  -1
  /* HOISTED */
);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "K",
  -1
  /* HOISTED */
);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "V",
  -1
  /* HOISTED */
);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Hash Map",
  -1
  /* HOISTED */
);
const _hoisted_66 = /* @__PURE__ */ createStaticVNode('<p>新建一个 <code>Hash Map</code> ，可以通过 <code>new</code> 创建一个空的 <code>HashMap</code>：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">HashMap</span><span class="token punctuation">;</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> <span class="token keyword">mut</span> company <span class="token operator">=</span> <span class="token class-name">HashMap</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  company<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Boss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  company<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Worker&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;company: {:?}&quot;</span><span class="token punctuation">,</span> company<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过 <code>get</code> 方法来从 <code>Hash Map</code> 中获取值，该方法返回 <code>Option&lt;&amp;V&gt;</code>，如果某个键在 <code>Hash Map</code> 中没有对应的值，会返回 <code>None</code>：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">HashMap</span><span class="token punctuation">;</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> <span class="token keyword">mut</span> company <span class="token operator">=</span> <span class="token class-name">HashMap</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  company<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Boss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  company<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Worker&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Boss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> age <span class="token operator">=</span> company<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">copied</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap_or</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;age: {:?}&quot;</span><span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出为：56</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 4);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Hash Map",
  -1
  /* HOISTED */
);
const _hoisted_71 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">HashMap</span><span class="token punctuation">;</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> <span class="token keyword">mut</span> company <span class="token operator">=</span> <span class="token class-name">HashMap</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  company<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Boss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  company<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Worker&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token operator">&amp;</span>company <span class="token punctuation">{</span>\n    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}: {}&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>更新 Hash Map</p></blockquote>', 2);
const _hoisted_73 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">HashMap</span><span class="token punctuation">;</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> <span class="token keyword">mut</span> company <span class="token operator">=</span> <span class="token class-name">HashMap</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  company<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Boss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  company<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Worker&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  company<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Boss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token operator">&amp;</span>company <span class="token punctuation">{</span>\n    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}: {}&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果哈希 <code>Map</code> 中键已经存在，则不做任何操作；如果不存在则连同值一块插入。这种判断非常常见，在 Rust 有一个专门的 API 用于描述，叫做 <code>entry</code> 。它获取我们想要检查的键作为参数，返回一个枚举 <code>Entry</code> 。</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">HashMap</span><span class="token punctuation">;</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> <span class="token keyword">mut</span> company <span class="token operator">=</span> <span class="token class-name">HashMap</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  company<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Boss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  company<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Worker&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  company<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Boss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  company<span class="token punctuation">.</span><span class="token function">entry</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Manager&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">or_insert</span><span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token operator">&amp;</span>company <span class="token punctuation">{</span>\n    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}: {}&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 3);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Entry",
  -1
  /* HOISTED */
);
const _hoisted_77 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "or_insert",
  -1
  /* HOISTED */
);
const _hoisted_78 = /* @__PURE__ */ createStaticVNode('<p>输出为：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token class-name">Manager</span><span class="token punctuation">:</span> <span class="token number">45</span>\n<span class="token class-name">Boss</span><span class="token punctuation">:</span> <span class="token number">88</span>\n<span class="token class-name">Worker</span><span class="token punctuation">:</span> <span class="token number">32</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，遍历 <code>Hash Map</code> 会以任意顺序进行输出。</p>', 3);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("Rust 标准库中包含了一系列被称为集合（collections）的非常有用的数据结构，集合可以包含多个值，并且不同于内建的数据或元组类型，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("集合内的数据是存储在堆上的，这意味着集合内数据的数量不必在编译时知道")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。在 Rust 中，"),
      _hoisted_2,
      createTextVNode(" 、字符串、"),
      _hoisted_3,
      createTextVNode(" 这三个是比较常用的集合类型。")
    ]),
    _hoisted_4,
    createBaseVNode("p", null, [
      _hoisted_5,
      createTextVNode(" 允许我们"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("一个挨着一个地存储一系列数量可变的值")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，其类型是 "),
      _hoisted_6,
      createTextVNode("。"),
      _hoisted_7,
      createTextVNode(),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("只能存储相同类型的值")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_8,
    createBaseVNode("p", null, [
      createTextVNode("Rust 在编译时就必须准确地知道 "),
      _hoisted_40,
      createTextVNode(" 中类型的原因是因为"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("编译器需要知道存储每个元素到底需要多少内存")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_41,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("当 `vector` 被丢弃时，所有其内容也会被丢弃！")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_43,
    createBaseVNode("p", null, [
      createTextVNode("字符串是字符的集合。"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("字符串可能指的是 "),
          _hoisted_44,
          createTextVNode(" 或 string slice "),
          _hoisted_45,
          createTextVNode(" 类型，而不仅仅是其中一种类型")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_46,
    createBaseVNode("p", null, [
      _hoisted_53,
      createTextVNode(" 方法获取一个"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("单独的字符")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("作为参数，并附加到 "),
      _hoisted_54,
      createTextVNode(" 中。")
    ]),
    _hoisted_55,
    createBaseVNode("p", null, [
      createTextVNode("与其他语言不一样，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("Rust 的字符串并不支持索引")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("！")
    ]),
    _hoisted_58,
    createBaseVNode("p", null, [
      _hoisted_59,
      createTextVNode(" 允许我们将值与一个特定的 "),
      _hoisted_60,
      createTextVNode(" 相关联，其类型为 "),
      _hoisted_61,
      createTextVNode(" 。"),
      _hoisted_62,
      createTextVNode(" 类型存储了一个键类型 "),
      _hoisted_63,
      createTextVNode(" 对应一个值类型 "),
      _hoisted_64,
      createTextVNode(" 的映射。它通过一个哈希函数来实现映射，决定如何将键和值放入内存中。"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          _hoisted_65,
          createTextVNode(" 存储的数据都储存在堆上")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_66,
    createBaseVNode("p", null, [
      createTextVNode("遍历 "),
      _hoisted_70,
      createTextVNode("，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("会以任意顺序打印出每一个键值对")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_71,
    createBaseVNode("p", null, [
      createTextVNode("如果插入了一个键值对，并且"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("用相同的键插入了一个不同的值，与这个值相关联的旧值将被覆盖")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_73,
    createBaseVNode("p", null, [
      _hoisted_76,
      createTextVNode(" 的 "),
      _hoisted_77,
      createTextVNode(" 方法"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("在键对应的值存在时，就返回这个值对应的可变引用；如果不存在则将参数作为新值插入并返回新值的可变引用")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_78
  ]);
}
const rustCollection_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "rust-collection.html.vue"]]);
export {
  rustCollection_html as default
};
