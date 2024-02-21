import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "模块系统",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#模块系统",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 模块系统")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "crate",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#crate",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(),
    /* @__PURE__ */ createBaseVNode("code", null, "crate")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "crate",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createTextVNode("什么是 "),
      /* @__PURE__ */ createBaseVNode("code", null, "crate"),
      /* @__PURE__ */ createTextVNode(" ?")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "crate",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createStaticVNode("<p>一个 <code>crate</code> 可以包含多个模块，这些模块可以包含函数、结构体、枚举等 Rust 代码。<code>crate root</code> 是一个源文件，Rust 编译器以它为起始点，去构成你的 <code>crate</code> 的根模块。<code>crate root</code> 文件将由 <code>Cargo</code> 传递给 <code>rustc</code> 来实际构建库或者二进制项目。</p><p>每一个 <code>crate</code> 都有一个唯一的名称，同时也对应着一个 <code>.rs</code> 文件或一个目录。<code>crate</code> 的名称通常与其文件或目录的名称相匹配，<code>crate</code> 的文件或目录中的代码可以通过 <code>mod</code> 关键字来组织为模块，并使用 <code>pub</code> 关键字来指定对外可见性。</p><p>通过在 Rust 代码中使用 <code>use</code> 关键字，可以导入其他 crate 或模块的功能，使得它们可以在当前 crate 中使用。这样可以实现代码的模块化和复用，并支持构建大型的 Rust 项目。</p>", 3);
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<h3 id="包" tabindex="-1"><a class="header-anchor" href="#包" aria-hidden="true">#</a> 包</h3><p>一个包可以包含任意多个二进制 <code>crate</code> 项、一个可选的 <code>crate</code> 库和一个 <code>Cargo.toml</code> 文件。</p><p><code>Cargo.toml</code> 文件描述了如何去构建这些 <code>crate</code>。<code>Cargo</code> 是一个构建代码的二进制包，同时 <code>Cargo</code> 也包含这些二进制项所依赖的库。</p><p>包更倾向于包含二进制 <code>crate</code> ，可以有任意个，或至多包含一个库 <code>crate</code> ，但至少包含一个 <code>crate</code> ，无论它是库 <code>crate</code> 还是二进制 <code>crate</code>。</p><h3 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h3><p>模块拥有一系列规则，组织代码时可以参考这些规则：</p>', 6);
const _hoisted_15 = /* @__PURE__ */ createStaticVNode("<li><p>从 <code>crate root</code> 根节点开始</p><p>编译一个 <code>crate</code> 时，编译器首先在 <code>crate</code> 根文件中寻找需要被编译的代码。</p><p>对于一个库 <code>crate</code> 而言，其文件是 <code>src/lib.rs</code> ；对于一个二进制 <code>crate</code> 而言，其文件是 <code>src/main.rs</code></p></li><li><p>声明模块</p><p>使用 <code>mod</code> 关键字声明模块，如 <code>mod module</code>，编译器会在以下路径中寻找模块代码：</p><ul><li>内联，也即当前模块内</li><li>在文件 <code>src/module.ts</code></li><li>在文件 <code>src/module/mod.rs</code></li></ul></li><li><p>声明子模块</p><p>可以在其他文件中定义子模块，如 <code>mod sub_module</code>，编译器会在以下路径中寻找模块代码：</p><ul><li>内联，也即当前模块内</li><li>在文件 <code>src/module/sub_module.rs</code></li><li>在文件 <code>src/module/sub_module/mod.rs</code></li></ul></li><li><p>模块中的代码路径</p><p>一旦一个模块是 <code>crate</code> 的一部分，那就可以通过代码路径来引用该模块的代码，如 <code>crate::module::sub_module::get_values</code></p></li>", 4);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "私有或公有",
  -1
  /* HOISTED */
);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "pub",
  -1
  /* HOISTED */
);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "use"),
      /* @__PURE__ */ createTextVNode(" 关键字")
    ]),
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "use"),
      /* @__PURE__ */ createTextVNode(" 关键字可以创建一个成员的快捷方式，用来减少长路径的重复。")
    ]),
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createTextVNode("如 "),
      /* @__PURE__ */ createBaseVNode("code", null, "use crate::module::sub_module::get_values"),
      /* @__PURE__ */ createTextVNode(" 创建了一个快捷方式，随后则可以使用 "),
      /* @__PURE__ */ createBaseVNode("code", null, "get_values")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "mod",
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createStaticVNode('<p>来写个例子尝试一下这些规则，整个文件结构为以下结构：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code>rust_tests\n├── <span class="token class-name">Cargo</span><span class="token punctuation">.</span>lock\n├── <span class="token class-name">Cargo</span><span class="token punctuation">.</span>toml\n└── src\n    ├── module\n    │   └── sub_module<span class="token punctuation">.</span>rs\n    ├── module<span class="token punctuation">.</span>rs\n    └── main<span class="token punctuation">.</span>rs\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>main.rs</code> 中的代码为：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>module<span class="token punctuation">::</span>sub_module<span class="token punctuation">::</span></span><span class="token class-name">Example</span><span class="token punctuation">;</span>\n\n<span class="token keyword">pub</span> <span class="token keyword">mod</span> <span class="token module-declaration namespace">module</span><span class="token punctuation">;</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> example <span class="token operator">=</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>\n    name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Licodeao&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    age<span class="token punctuation">:</span> <span class="token number">21</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  \n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Name: {}, Age: {}&quot;</span><span class="token punctuation">,</span> example<span class="token punctuation">.</span>name<span class="token punctuation">,</span> example<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到在 <code>main.rs</code> 中使用了 <code>pub mod module</code> ，这告诉了编译器应该包含 <code>src/module.rs</code> 中的代码。</p><p><code>module.rs</code> 中代码如下：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">mod</span> <span class="token module-declaration namespace">sub_module</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 <code>module.rs</code> 中又告诉编译器需要包含 <code>src/module/sub_module.rs</code> 中的代码，<code>sub_module.rs</code> 中的代码为：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">Example</span> <span class="token punctuation">{</span>\n  <span class="token keyword">pub</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span>\n  <span class="token keyword">pub</span> age<span class="token punctuation">:</span> <span class="token keyword">u8</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>sub_module.rs</code> 中，定义了一个公用的结构体 <code>Example</code> ，在该结构体中有 <code>name</code> 和 <code>age</code> 两个字段。</p><p>使用 <code>cargo run</code> 运行程序后，输出为：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token class-name">Name</span><span class="token punctuation">:</span> <span class="token class-name">Licodeao</span><span class="token punctuation">,</span> <span class="token class-name">Age</span><span class="token punctuation">:</span> <span class="token number">21</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>回顾整个过程，就会发现在 Rust 中使用 <code>pub mod 模块名</code> 的形式来让编译器不断加入模块中的代码，这似乎也是一种引用关系，有点依赖图的影子，<code>main.rs -&gt; module.rs -&gt; sub_module.rs</code>。</p><blockquote><p>模块中分组</p></blockquote><p>模块可以让我们将一个 <code>crate</code> 中的代码进行分组，以提高代码可读性与重用性。</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">mod</span> <span class="token module-declaration namespace">factory</span> <span class="token punctuation">{</span>\n  <span class="token keyword">mod</span> <span class="token module-declaration namespace">assembly_line</span> <span class="token punctuation">{</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    \n    <span class="token keyword">fn</span> <span class="token function-definition function">assemble_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  \n  <span class="token keyword">mod</span> <span class="token module-declaration namespace">executive_room</span> <span class="token punctuation">{</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">pay_salary</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    \n    <span class="token keyword">fn</span> <span class="token function-definition function">check_company_status</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上方，我们定义了一个工厂模块，而工厂中又分为了流水线模块和高管办公室模块，每个模块都在干着属于自己的事情，互不相扰。这样基于分组的模块，在下次向代码中添加新功能时，显而易见地能知道放到哪里，有利于代码的组织性。</p><blockquote><p>引用模块的路径</p></blockquote><p>路径有两种方式：</p><ul><li>绝对路径：以 <code>crate</code> 根开头的全路径</li><li>相对路径：从当前模块开始，以 <code>self</code> 、<code>super</code> 或当前模块的标识符（模块名）开头</li></ul><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">mod</span> <span class="token module-declaration namespace">factory</span> <span class="token punctuation">{</span>\n  <span class="token keyword">mod</span> <span class="token module-declaration namespace">assembly_line</span> <span class="token punctuation">{</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">market</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 绝对路径</span>\n  <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>factory<span class="token punctuation">::</span>assembly_line<span class="token punctuation">::</span></span><span class="token function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  \n  <span class="token comment">// 相对路径</span>\n  <span class="token namespace">factory<span class="token punctuation">::</span>assembly_line<span class="token punctuation">::</span></span><span class="token function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>market</code> 函数是此时 <code>crate</code> 库的一个公共 API，所以使用 <code>pub</code> 关键字来标记。</p><p>选择使用绝对路径还是相对路径，要取决于你的项目，但更倾向于使用绝对路径。</p><blockquote><p>使用 <code>pub</code> 暴露路径</p></blockquote><p>上方代码编译后，会出现以下错误：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code>  <span class="token operator">|</span>\n<span class="token number">9</span> <span class="token operator">|</span>     <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>factory<span class="token punctuation">::</span>assembly_line<span class="token punctuation">::</span></span><span class="token function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token operator">|</span>                     <span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span>  <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> function `pick_up_goods` is not publicly re<span class="token operator">-</span>exported\n  <span class="token operator">|</span>                     <span class="token operator">|</span>\n  <span class="token operator">|</span>                     private module\n  <span class="token operator">|</span>\nnote<span class="token punctuation">:</span> the module `assembly_line` is defined here\n <span class="token operator">-</span><span class="token punctuation">-&gt;</span> src<span class="token operator">/</span>lib<span class="token punctuation">.</span>rs<span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">5</span>\n  <span class="token operator">|</span>\n<span class="token number">2</span> <span class="token operator">|</span>     <span class="token keyword">mod</span> <span class="token module-declaration namespace">assembly_line</span> <span class="token punctuation">{</span>\n  <span class="token operator">|</span>     <span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span>\n\nerror<span class="token punctuation">[</span><span class="token constant">E0603</span><span class="token punctuation">]</span><span class="token punctuation">:</span> module `assembly_line` is private\n  <span class="token operator">-</span><span class="token punctuation">-&gt;</span> src<span class="token operator">/</span>lib<span class="token punctuation">.</span>rs<span class="token punctuation">:</span><span class="token number">12</span><span class="token punctuation">:</span><span class="token number">14</span>\n   <span class="token operator">|</span>\n<span class="token number">12</span> <span class="token operator">|</span>     <span class="token namespace">factory<span class="token punctuation">::</span>assembly_line<span class="token punctuation">::</span></span><span class="token function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token operator">|</span>              <span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span>  <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> function `pick_up_goods` is not publicly re<span class="token operator">-</span>exported\n   <span class="token operator">|</span>              <span class="token operator">|</span>\n   <span class="token operator">|</span>              private module\n   <span class="token operator">|</span>\nnote<span class="token punctuation">:</span> the module `assembly_line` is defined here\n  <span class="token operator">-</span><span class="token punctuation">-&gt;</span> src<span class="token operator">/</span>lib<span class="token punctuation">.</span>rs<span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">5</span>\n   <span class="token operator">|</span>\n<span class="token number">2</span>  <span class="token operator">|</span>     <span class="token keyword">mod</span> <span class="token module-declaration namespace">assembly_line</span> <span class="token punctuation">{</span>\n   <span class="token operator">|</span>     <span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 26);
const _hoisted_49 = /* @__PURE__ */ createStaticVNode('<p>将 <code>mod assembly_line</code> 变成公有模块试试：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">mod</span> <span class="token module-declaration namespace">factory</span> <span class="token punctuation">{</span>\n  <span class="token keyword">pub</span> <span class="token keyword">mod</span> <span class="token module-declaration namespace">assembly_line</span> <span class="token punctuation">{</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">market</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 绝对路径</span>\n  <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>factory<span class="token punctuation">::</span>assembly_line<span class="token punctuation">::</span></span><span class="token function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  \n  <span class="token comment">// 相对路径</span>\n  <span class="token namespace">factory<span class="token punctuation">::</span>assembly_line<span class="token punctuation">::</span></span><span class="token function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>cargo build</code> 编译后，出现以下错误：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code>  <span class="token operator">|</span>\n<span class="token number">9</span> <span class="token operator">|</span>     <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>factory<span class="token punctuation">::</span>assembly_line<span class="token punctuation">::</span></span><span class="token function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token operator">|</span>                                    <span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span> private function\n  <span class="token operator">|</span>\nnote<span class="token punctuation">:</span> the function `pick_up_goods` is defined here\n <span class="token operator">-</span><span class="token punctuation">-&gt;</span> src<span class="token operator">/</span>lib<span class="token punctuation">.</span>rs<span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token number">7</span>\n  <span class="token operator">|</span>\n<span class="token number">3</span> <span class="token operator">|</span>       <span class="token keyword">fn</span> <span class="token function-definition function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token operator">|</span>       <span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span>\n\nerror<span class="token punctuation">[</span><span class="token constant">E0603</span><span class="token punctuation">]</span><span class="token punctuation">:</span> function `pick_up_goods` is private\n  <span class="token operator">-</span><span class="token punctuation">-&gt;</span> src<span class="token operator">/</span>lib<span class="token punctuation">.</span>rs<span class="token punctuation">:</span><span class="token number">12</span><span class="token punctuation">:</span><span class="token number">29</span>\n   <span class="token operator">|</span>\n<span class="token number">12</span> <span class="token operator">|</span>     <span class="token namespace">factory<span class="token punctuation">::</span>assembly_line<span class="token punctuation">::</span></span><span class="token function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token operator">|</span>                             <span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span> private function\n   <span class="token operator">|</span>\nnote<span class="token punctuation">:</span> the function `pick_up_goods` is defined here\n  <span class="token operator">-</span><span class="token punctuation">-&gt;</span> src<span class="token operator">/</span>lib<span class="token punctuation">.</span>rs<span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token number">7</span>\n   <span class="token operator">|</span>\n<span class="token number">3</span>  <span class="token operator">|</span>       <span class="token keyword">fn</span> <span class="token function-definition function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n   <span class="token operator">|</span>       <span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现，虽然 <code>mod assembly_line</code> 变为公有了，但是其模块内的 <code>pick_up_goods</code> 依据报错来看，依然还是私有。</p>', 5);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "pub",
  -1
  /* HOISTED */
);
const _hoisted_55 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">mod</span> <span class="token module-declaration namespace">factory</span> <span class="token punctuation">{</span>\n  <span class="token keyword">pub</span> <span class="token keyword">mod</span> <span class="token module-declaration namespace">assembly_line</span> <span class="token punctuation">{</span>\n    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n  \n<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">market</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 绝对路径</span>\n    <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>factory<span class="token punctuation">::</span>assembly_line<span class="token punctuation">::</span></span><span class="token function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 相对路径</span>\n    <span class="token namespace">factory<span class="token punctuation">::</span>assembly_line<span class="token punctuation">::</span></span><span class="token function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <code>pick_up_goods</code> 函数变为公有，再使用 <code>cargo build</code> 命令时，就不会出现错误了。</p><blockquote><p>super 开始的相对路径</p></blockquote>', 3);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "super",
  -1
  /* HOISTED */
);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "crate",
  -1
  /* HOISTED */
);
const _hoisted_60 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token keyword">mod</span> <span class="token module-declaration namespace">factory</span> <span class="token punctuation">{</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">assembly_line</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">fn</span> <span class="token function-definition function">executive_room</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>assembly_line</code> 函数在 <code>factory</code> 模块中，所以可以使用 <code>super</code> 进入 <code>factory</code> 父模块，也就是 <code>crate</code> 根。</p><blockquote><p>use 关键字将路径引入作用域</p></blockquote><p>使用 <code>use</code> 关键字创建一个短路径，然后就能够在作用域中的任何地方使用更短的名字了。</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token comment">// lib.rs</span>\n\n<span class="token keyword">mod</span> <span class="token module-declaration namespace">factory</span> <span class="token punctuation">{</span>\n    <span class="token keyword">pub</span> <span class="token keyword">mod</span> <span class="token module-declaration namespace">assembly_line</span> <span class="token punctuation">{</span>\n        <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>factory<span class="token punctuation">::</span></span>assembly_line<span class="token punctuation">;</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token namespace">assembly_line<span class="token punctuation">::</span></span><span class="token function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意⚠️：<code>use</code> 只能创建 <code>use</code> 所在的特定作用域内的短路径。</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token comment">// lib.rs</span>\n\n<span class="token keyword">mod</span> <span class="token module-declaration namespace">factory</span> <span class="token punctuation">{</span>\n    <span class="token keyword">pub</span> <span class="token keyword">mod</span> <span class="token module-declaration namespace">assembly_line</span> <span class="token punctuation">{</span>\n        <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>factory<span class="token punctuation">::</span></span>assembly_line<span class="token punctuation">;</span>\n\n<span class="token keyword">mod</span> <span class="token module-declaration namespace">anthor_factory</span> <span class="token punctuation">{</span>\n    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token namespace">assembly_line<span class="token punctuation">::</span></span><span class="token function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>cargo build</code> 后，会出错：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code>   <span class="token operator">|</span>\n<span class="token number">11</span> <span class="token operator">|</span>         <span class="token namespace">assembly_line<span class="token punctuation">::</span></span><span class="token function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n   <span class="token operator">|</span>         <span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span> <span class="token keyword">use</span> of undeclared <span class="token keyword">crate</span> <span class="token module-declaration namespace">or</span> module `assembly_line`\n   <span class="token operator">|</span>\nhelp<span class="token punctuation">:</span> consider importing this module through its public re<span class="token operator">-</span>export\n   <span class="token operator">|</span>\n<span class="token number">10</span> <span class="token operator">+</span>     <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>assembly_line</span><span class="token punctuation">;</span>\n   <span class="token operator">|</span>\n\nwarning<span class="token punctuation">:</span> unused import<span class="token punctuation">:</span> `<span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>factory<span class="token punctuation">::</span></span>assembly_line`\n <span class="token operator">-</span><span class="token punctuation">-&gt;</span> src<span class="token operator">/</span>lib<span class="token punctuation">.</span>rs<span class="token punctuation">:</span><span class="token number">7</span><span class="token punctuation">:</span><span class="token number">5</span>\n  <span class="token operator">|</span>\n<span class="token number">7</span> <span class="token operator">|</span> <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>factory<span class="token punctuation">::</span></span>assembly_line<span class="token punctuation">;</span>\n  <span class="token operator">|</span>     <span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span>\n  <span class="token operator">|</span>\n  <span class="token operator">=</span> note<span class="token punctuation">:</span> `<span class="token attribute attr-name">#[warn(unused_imports)]</span>` on by default\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>使用 <code>pub use</code> 重导出</p></blockquote><p>尽管 <code>use</code> 关键字可以将某个名称导入当前作用域，这个名称可以在此作用域内使用，但是对此作用域外还是私有的。</p>', 11);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "pub use",
  -1
  /* HOISTED */
);
const _hoisted_72 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token comment">// lib.rs</span>\n\n<span class="token keyword">mod</span> <span class="token module-declaration namespace">factory</span> <span class="token punctuation">{</span>\n    <span class="token keyword">pub</span> <span class="token keyword">mod</span> <span class="token module-declaration namespace">assembly_line</span> <span class="token punctuation">{</span>\n        <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">pub</span> <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>factory<span class="token punctuation">::</span></span>assembly_line<span class="token punctuation">;</span>\n\n<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token namespace">assembly_line<span class="token punctuation">::</span></span><span class="token function">pick_up_goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>嵌套路径</p></blockquote><p>使用嵌套路径可以消除大量的 <code>use</code> 行</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cmp<span class="token punctuation">::</span></span><span class="token class-name">Ordering</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span>io<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上可以合并为一个 <code>use</code> 行：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span><span class="token punctuation">{</span><span class="token namespace">cmp<span class="token punctuation">::</span></span><span class="token class-name">Ordering</span><span class="token punctuation">,</span> io<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在合并为一个 <code>use</code> 行时，也可以使用 <code>self</code> ，场景是一个路径是另一个的子路径！</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span>io<span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>io<span class="token punctuation">::</span></span><span class="token class-name">Write</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>self</code> 合并后：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>io<span class="token punctuation">::</span></span><span class="token punctuation">{</span><span class="token keyword">self</span><span class="token punctuation">,</span> <span class="token class-name">Write</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这一行便将 <code>std::io</code> 和 <code>std::io::Write</code> 同时引入作用域。</p>', 11);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("p", null, [
      _hoisted_3,
      createTextVNode(" 是 Rust 在"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("编译时最小的代码单位")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_4,
    createBaseVNode("p", null, [
      _hoisted_5,
      createTextVNode(" 是指"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("一个编译单元或模块的单位")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，它"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("可以是一个库（library crate）或一个二进制可执行程序（binary crate）")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_6,
    createBaseVNode("p", null, [
      createTextVNode("总而言之，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("crate 是 Rust 中代码组织和封装的基本单位，可以理解为一个某个小的片段，它允许将代码组织为模块，并提供了模块化、复用和共享的机制")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_9,
    createBaseVNode("ul", null, [
      _hoisted_15,
      createBaseVNode("li", null, [
        _hoisted_19,
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("一个模块里的代码默认对其父模块私有")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode("。如果要使一个模块公用，可以在声明时使用 "),
        _hoisted_20,
        createTextVNode(" 关键字来定义模块。"),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("模块默认私有，则没有关键字")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode("。")
      ]),
      _hoisted_21
    ]),
    createBaseVNode("p", null, [
      _hoisted_22,
      createTextVNode(" 关键字声明了模块，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("Rust 则会在与模块同名的文件中查找模块的代码")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_23,
    createBaseVNode("p", null, [
      createTextVNode("在 Rust 中，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("父模块中的项不能使用子模块中的私有项，但是子模块中的项可以使用它们父模块中的项")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。这是因为子模块封装并隐藏了它们的实现详情，但是子模块可以看到它们定义的上下文。")
    ]),
    _hoisted_49,
    createBaseVNode("p", null, [
      createTextVNode("这说明："),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("使模块公有并不使得其内容也是公有的")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，模块上的 "),
      _hoisted_54,
      createTextVNode(" 关键字"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("只允许其父模块引用它，而不允许访问内部代码")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_55,
    createBaseVNode("p", null, [
      createTextVNode("在路径的开头使用 "),
      _hoisted_58,
      createTextVNode(" ，表示"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("从父模块开始构建相对路径")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，而不是从当前模块或者 "),
      _hoisted_59,
      createTextVNode(" 根开始。")
    ]),
    _hoisted_60,
    createBaseVNode("p", null, [
      createTextVNode("如果想要让此名称在某个作用域外还能够使用，可以使用 "),
      _hoisted_71,
      createTextVNode(' 来定义该名称，称为 "重导出"。'),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("不仅将一个名称导入了当前作用域，还允许别人把它导入他们的作用域")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_72
  ]);
}
const rustPackageCrateMod_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "rust-package-crate-mod.html.vue"]]);
export {
  rustPackageCrateMod_html as default
};
