import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "所有权",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#所有权",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 所有权")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "所有权是什么？")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "所有权机制",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#所有权机制",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 所有权机制")
  ],
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h3 id="变量作用域" tabindex="-1"><a class="header-anchor" href="#变量作用域" aria-hidden="true">#</a> 变量作用域</h3><p>在 Rust 变量的作用域范围如下：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 作用域范围</span>\n<span class="token punctuation">{</span> <span class="token comment">// 这里是无效的，因为 name 还没有声明</span>\n	<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">;</span> <span class="token comment">// name 变量的作用域范围从这里开始</span>\n  <span class="token punctuation">...</span>\n<span class="token punctuation">}</span> <span class="token comment">// 作用域范围到这里结束 🔚</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内存与分配" tabindex="-1"><a class="header-anchor" href="#内存与分配" aria-hidden="true">#</a> 内存与分配</h3><p>字符串字面值都是硬编码进二进制文件的，但是总有一些未知大小的字符串字面量，这些如何处理？</p><p>在 Rust 中，为了处理这些未知大小的字符串字面量，有一个 <code>String</code> 类型，它支持一个可变、可增长的文本值，并且将值分配给堆来存放内容。</p><p>这意味着：</p><ul><li>必须在运行时向内存分配器申请内存空间</li><li>需要一个当 <code>String</code> 处理完时，将内存返还给内存分配器的方法</li></ul><p>这看起来很像是生命周期的概念...</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nname<span class="token punctuation">.</span><span class="token function">push_str</span><span class="token punctuation">(</span><span class="token string">&quot;, World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{name}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依据所有权规则，<code>name</code> 变量在作用域结束时就被抛弃了，换句话说就是被自动释放了。</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token punctuation">{</span>\n  <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// name 变量已声明，作用域开始</span>\n  \n  <span class="token punctuation">...</span><span class="token punctuation">.</span> <span class="token comment">// 使用 name 变量有效</span>\n<span class="token punctuation">}</span> <span class="token comment">// 作用域结束，调用 drop 函数</span>\n<span class="token comment">// 使用 name 变量无效，在这里就会将 String 需要的内存返还给内存分配器</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在变量离开作用域，即作用域结束时，Rust 提供了一个 <code>drop</code> 函数，在结尾的 <code>}</code> 处自动调用 <code>drop</code> 函数。</p><h3 id="多个变量使用在堆上" tabindex="-1"><a class="header-anchor" href="#多个变量使用在堆上" aria-hidden="true">#</a> 多个变量使用在堆上</h3><h4 id="移动" tabindex="-1"><a class="header-anchor" href="#移动" aria-hidden="true">#</a> 移动</h4><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> y <span class="token operator">=</span> x<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将 6 绑定到变量 x 上，并且生成一个 x 的拷贝绑定到变量 y 上</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> s2 <span class="token operator">=</span> s1<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://kaisery.github.io/trpl-zh-cn/img/trpl04-01.svg"><p><code>String</code> 类型由三部分组成：一个指向存放字符串内容内存的指针（堆上存放内容的内存部分）、一个长度（表示当前使用了多少字节的内存）、一个容量（从内存分配器总共获取了多少字节的内存）。</p><p>将 <code>s1</code> 赋值给 <code>s2</code> ，这意味着复制了 <code>s1</code> 的指针、长度、容量，但没有复制堆上的数据。</p><img src="https://kaisery.github.io/trpl-zh-cn/img/trpl04-02.svg">', 22);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "drop",
  -1
  /* HOISTED */
);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "s1",
  -1
  /* HOISTED */
);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "s2",
  -1
  /* HOISTED */
);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "s1",
  -1
  /* HOISTED */
);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "s2",
  -1
  /* HOISTED */
);
const _hoisted_31 = /* @__PURE__ */ createStaticVNode('<p>为了保证内存的安全，Rust 在 <code>let s2 = s1</code> 后，认为变量 <code>s1</code> 不再有效，因此 Rust 不需要在 <code>s1</code> 离开作用域后清理任何东西。</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> s2 <span class="token operator">=</span> s1<span class="token punctuation">;</span>\n\n<span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{s1}, World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token number">99</span>  <span class="token operator">|</span>   <span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token operator">|</span>       <span class="token operator">-</span><span class="token operator">-</span> <span class="token keyword">move</span> occurs because `s1` has <span class="token keyword">type</span> `<span class="token class-name">String</span>`<span class="token punctuation">,</span> which does not implement the `<span class="token class-name">Copy</span>` <span class="token keyword">trait</span>\n<span class="token type-definition class-name">100</span> <span class="token operator">|</span>   <span class="token keyword">let</span> s2 <span class="token operator">=</span> s1<span class="token punctuation">;</span>\n    <span class="token operator">|</span>            <span class="token operator">-</span><span class="token operator">-</span> value moved here\n<span class="token number">101</span> <span class="token operator">|</span>\n<span class="token number">102</span> <span class="token operator">|</span>   <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}, world!&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token operator">|</span>                          <span class="token operator">^</span><span class="token operator">^</span> value borrowed here after <span class="token keyword">move</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Rust 禁止你去使用无效的引用。</p>', 4);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("code", null, "s1"),
    /* @__PURE__ */ createTextVNode(" 被移动到了 "),
    /* @__PURE__ */ createBaseVNode("code", null, "s2"),
    /* @__PURE__ */ createTextVNode(" 中，具体发生了什么，下图可以解释：")
  ],
  -1
  /* HOISTED */
);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "img",
  { src: "https://kaisery.github.io/trpl-zh-cn/img/trpl04-04.svg" },
  null,
  -1
  /* HOISTED */
);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("code", null, "s1"),
    /* @__PURE__ */ createTextVNode(" 变为无效的了，因为只有 "),
    /* @__PURE__ */ createBaseVNode("code", null, "s2"),
    /* @__PURE__ */ createTextVNode(" 是有效的，当其离开作用域，它就释放自己的内存了。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "h4",
  {
    id: "克隆",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#克隆",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 克隆")
  ],
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "clone",
  -1
  /* HOISTED */
);
const _hoisted_40 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> s2 <span class="token operator">=</span> s1<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;s1 = {}, s2 = {}&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code>➜ cargo run \n   <span class="token class-name">Compiling</span> rust_tests v0<span class="token number">.1</span><span class="token punctuation">.</span><span class="token number">0</span> <span class="token punctuation">(</span><span class="token operator">/</span><span class="token class-name">Users</span><span class="token operator">/</span>liaoyangwu<span class="token operator">/</span><span class="token class-name">Desktop</span><span class="token operator">/</span><span class="token class-name">Coding</span><span class="token operator">/</span><span class="token class-name">Rust</span>学习<span class="token operator">/</span>rust_tests<span class="token punctuation">)</span>\n    <span class="token class-name">Finished</span> dev <span class="token punctuation">[</span>unoptimized <span class="token operator">+</span> debuginfo<span class="token punctuation">]</span> <span class="token function">target</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">.</span>43s\n     <span class="token class-name">Running</span> `target<span class="token operator">/</span>debug<span class="token operator">/</span>rust_tests`\ns1 <span class="token operator">=</span> hello<span class="token punctuation">,</span> s2 <span class="token operator">=</span> hello\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="拷贝" tabindex="-1"><a class="header-anchor" href="#拷贝" aria-hidden="true">#</a> 拷贝</h4>', 3);
const _hoisted_43 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> y <span class="token operator">=</span> x<span class="token punctuation">;</span>\n\n<span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;x = {}, y = {}&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code>   <span class="token class-name">Compiling</span> rust_tests v0<span class="token number">.1</span><span class="token punctuation">.</span><span class="token number">0</span> <span class="token punctuation">(</span><span class="token operator">/</span><span class="token class-name">Users</span><span class="token operator">/</span>liaoyangwu<span class="token operator">/</span><span class="token class-name">Desktop</span><span class="token operator">/</span><span class="token class-name">Coding</span><span class="token operator">/</span><span class="token class-name">Rust</span>学习<span class="token operator">/</span>rust_tests<span class="token punctuation">)</span>\n    <span class="token class-name">Finished</span> dev <span class="token punctuation">[</span>unoptimized <span class="token operator">+</span> debuginfo<span class="token punctuation">]</span> <span class="token function">target</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">.</span>07s\n     <span class="token class-name">Running</span> `target<span class="token operator">/</span>debug<span class="token operator">/</span>rust_tests`\nx <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">6</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码看起来和之前说的有冲突呀，为什么没有调用 <code>clone</code> 函数，<code>x</code> 依然有效且没有被移动到了 <code>y</code> 呢？</p><p>原因是：像整型这样的在编译时已知大小的类型被整个存储在栈上。</p>', 4);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Copy trait",
  -1
  /* HOISTED */
);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Copy trait",
  -1
  /* HOISTED */
);
const _hoisted_49 = /* @__PURE__ */ createStaticVNode('<p>Rust 不允许自身或其任何部分实现了 <code>Drop trait</code> 的类型使用 <code>Copy trait</code>，以下是一些常见的 <code>Copy</code> 的类型：</p><ul><li>所有整数类型</li><li>布尔类型</li><li>所有浮点数类型</li><li>字符类型</li><li>元组（当且仅当其包含的类型也都实现 <code>Copye</code> 的时候），如 <code>(i32, i32)</code> 实现了 <code>Copy</code> ，但 <code>(i32, String)</code> 就没有</li></ul><h3 id="所有权与函数" tabindex="-1"><a class="header-anchor" href="#所有权与函数" aria-hidden="true">#</a> 所有权与函数</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// s 进入作用域</span>\n\n    <span class="token function">takes_ownership</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>             <span class="token comment">// s 的值移动到函数里 ...</span>\n                                    <span class="token comment">// ... 所以到这里不再有效</span>\n\n    <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>                      <span class="token comment">// x 进入作用域</span>\n\n    <span class="token function">makes_copy</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>                  <span class="token comment">// x 应该移动函数里，</span>\n                                    <span class="token comment">// 但 i32 是 Copy 的，</span>\n                                    <span class="token comment">// 所以在后面可继续使用 x</span>\n\n<span class="token punctuation">}</span> <span class="token comment">// 这里，x 先移出了作用域，然后是 s。但因为 s 的值已被移走，</span>\n  <span class="token comment">// 没有特殊之处</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">takes_ownership</span><span class="token punctuation">(</span>some_string<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// some_string 进入作用域</span>\n    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> some_string<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token comment">// 这里，some_string 移出作用域并调用 `drop` 方法。</span>\n  <span class="token comment">// 占用的内存被释放</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">makes_copy</span><span class="token punctuation">(</span>some_integer<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// some_integer 进入作用域</span>\n    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> some_integer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token comment">// 这里，some_integer 移出作用域。没有特殊之处</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回值与作用域" tabindex="-1"><a class="header-anchor" href="#返回值与作用域" aria-hidden="true">#</a> 返回值与作用域</h3><p>返回值可以转移所有权</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token function">gives_ownership</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// gives_ownership 将返回值</span>\n                                        <span class="token comment">// 转移给 s1</span>\n\n    <span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// s2 进入作用域</span>\n\n    <span class="token keyword">let</span> s3 <span class="token operator">=</span> <span class="token function">takes_and_gives_back</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// s2 被移动到</span>\n                                        <span class="token comment">// takes_and_gives_back 中，</span>\n                                        <span class="token comment">// 它也将返回值移给 s3</span>\n<span class="token punctuation">}</span> <span class="token comment">// 这里，s3 移出作用域并被丢弃。s2 也移出作用域，但已被移走，</span>\n  <span class="token comment">// 所以什么也不会发生。s1 离开作用域并被丢弃</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">gives_ownership</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>             <span class="token comment">// gives_ownership 会将</span>\n                                             <span class="token comment">// 返回值移动给</span>\n                                             <span class="token comment">// 调用它的函数</span>\n\n    <span class="token keyword">let</span> some_string <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;yours&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// some_string 进入作用域。</span>\n\n    some_string                              <span class="token comment">// 返回 some_string </span>\n                                             <span class="token comment">// 并移出给调用的函数</span>\n                                             <span class="token comment">// </span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// takes_and_gives_back 将传入字符串并返回该值</span>\n<span class="token keyword">fn</span> <span class="token function-definition function">takes_and_gives_back</span><span class="token punctuation">(</span>a_string<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span> <span class="token comment">// a_string 进入作用域</span>\n                                                      <span class="token comment">// </span>\n\n    a_string  <span class="token comment">// 返回 a_string 并移出给调用的函数</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 7);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "drop",
  -1
  /* HOISTED */
);
const _hoisted_57 = /* @__PURE__ */ createStaticVNode('<p>可以使用元组返回多个值：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  	<span class="token comment">// 解构</span>\n    <span class="token keyword">let</span> <span class="token punctuation">(</span>s2<span class="token punctuation">,</span> len<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">calculate_length</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;The length of &#39;{}&#39; is {}.&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">calculate_length</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> length <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// len() 返回字符串的长度</span>\n\n    <span class="token punctuation">(</span>s<span class="token punctuation">,</span> length<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码可以通过引用来解决不用获取所有权就能够使用值的情况。</p>', 3);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("所有权是 Rust 语言最为显著的特点，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("它让程序不用进行垃圾回收即可保证内存安全")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_2,
    createBaseVNode("p", null, [
      createTextVNode("有的编程语言拥有属于自己的垃圾回收机制，有的编程语言则需要开发者自己去实现垃圾回收，而 "),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("Rust 则是使用了第三种方式——拥有属于自己的所有权系统来管理内存")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("编译器在编译的时候，会根据一系列规则来进行检查，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("如果违反了某些规则，程序则不能通过编译")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。在运行时，所有权的一系列功能都不会影响程序，从而保证了原有程序的性能。也就是说，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("所有权不影响程序的性能")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("理解了所有权机制，就不用纠结栈和堆的问题，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("所有权机制的主要目的是为了管理堆上的数据")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_3,
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("Rust 中每个值都有自己的所有者（Owner），且每个值在任意时刻有且仅有一个所有者")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("当所有者或变量离开作用域时，这个值就会被抛弃")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _hoisted_4,
    createBaseVNode("p", null, [
      createTextVNode("根据所有权的原则，当变量离开作用域后，Rust 会自动调用 "),
      _hoisted_26,
      createTextVNode(" 函数并清理变量的堆内存。此时 "),
      _hoisted_27,
      createTextVNode(" 和 "),
      _hoisted_28,
      createTextVNode(" 指向了同一个同一内存，那么当 "),
      _hoisted_29,
      createTextVNode(" 和 "),
      _hoisted_30,
      createTextVNode(" 离开作用域后，它们会尝试释放相同的内存。"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("这是一个二次释放（double free）的错误。两次释放相同的内存会导致内存被污染，并导致可能存在潜在的安全漏洞")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_31,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode('拷贝了指针、长度、容量但没有拷贝堆上的数据，且 Rust 会同时使第一个变量无效，这被称为"移动"（move）')
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_35,
    _hoisted_36,
    _hoisted_37,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("Rust 永远也不会自动创建数据的 “深拷贝”。因此，任何 **自动** 的复制都可以被认为是对运行时性能影响较小的。")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_38,
    createBaseVNode("p", null, [
      createTextVNode("如果确实需要"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("深度复制堆上的数据，而不仅仅是栈上的数据")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，可以使用一个通用的函数 "),
      _hoisted_39
    ]),
    _hoisted_40,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("拷贝只适用于拷贝栈上的数据")
      ]),
      _: 1
      /* STABLE */
    }),
    createTextVNode("。"),
    _hoisted_43,
    createBaseVNode("p", null, [
      createTextVNode("Rust 有一个 "),
      _hoisted_47,
      createTextVNode(" 的特殊注解，可以用在类似整型这样的存储在栈上的类型上。"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("如果一个类型实现了 "),
          _hoisted_48,
          createTextVNode(" ，那么一个旧的变量在赋值给其他变量后仍然可用")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_49,
    createBaseVNode("p", null, [
      createTextVNode("变量的所有权总是遵循相同的模式："),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("将值赋给另一个变量时移动它。当持有堆中数据值的变量离开作用域时，其值将通过 "),
          _hoisted_56,
          createTextVNode(" 被清理掉，除非数据被移动为另一个变量所有")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_57
  ]);
}
const rustOwnership_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "rust-ownership.html.vue"]]);
export {
  rustOwnership_html as default
};
