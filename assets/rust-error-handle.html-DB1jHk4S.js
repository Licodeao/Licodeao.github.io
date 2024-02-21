import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "错误处理",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#错误处理",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 错误处理")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Result<T, E>",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "panic!",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h3 id="panic-宏" tabindex="-1"><a class="header-anchor" href="#panic-宏" aria-hidden="true">#</a> <code>panic!</code> 宏</h3><p><code>panic!</code> 宏用于处理不可恢复的错误，在 Rust 中有两种方法造成 <code>panic</code>：</p><ul><li>执行代码造成 <code>panic</code></li><li>显式地调用 <code>panic!</code> 宏</li></ul><p><code>panic</code> 会打印出错误信息，可以通过一个环境变量，你也可以让 Rust 在 <code>panic</code> 发生时打印调用堆栈以便于定位 <code>panic</code> 出现的原因，因为通常情况下，<code>panic</code> 在打印错误信息后，会展开并清理栈数据，然后退出。</p><p>可以在 <code>Cargo.toml</code> 文件中设置不展开调用堆栈：</p><div class="language-toml line-numbers-mode" data-ext="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">profile.release</span><span class="token punctuation">]</span>\n<span class="token key property">panic</span> <span class="token punctuation">=</span> <span class="token string">&quot;abort&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>[profile.release]</code> 表示了在 <code>release</code> 模式下 <code>panic</code> 会直接终止，当然你也可以在 <code>dev</code> 模式下终止 <code>panic</code>：</p><div class="language-toml line-numbers-mode" data-ext="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">profile.dev</span><span class="token punctuation">]</span>\n<span class="token key property">panic</span> <span class="token punctuation">=</span> <span class="token string">&quot;abort&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>有一种情况是：在自己的项目中使用了别人的库，别人的库中使用了 <code>panic!</code> 宏，那么如何去寻找别人代码里出现的问题呢？</p></blockquote><p>使用 <code>panic!</code> 宏的 <code>backtrace</code> 。</p>', 10);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "RUST_BACKTRACE",
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "backtrace",
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "backtrace",
  -1
  /* HOISTED */
);
const _hoisted_17 = /* @__PURE__ */ createStaticVNode('<blockquote><p>倘若我们运行一个会出现 <code>panic</code> 的程序时，如果在输出看到 <code>backtrace</code> ？</p></blockquote><p>将 <code>RUST_BACKTRACE</code> 环境变量设置为任何不是 0 的值来获取 <code>backtrace</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">RUST_BACKTRACE</span><span class="token operator">=</span><span class="token number">1</span> <span class="token function">cargo</span> run\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以一个访问不存在的无效索引为例子，来看看 <code>backtrace</code> ：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> v <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  v<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>RUST_BACKTRACE</code> 环境变量的输出为：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code>thread <span class="token lifetime-annotation symbol">&#39;main</span>&#39; panicked at src<span class="token operator">/</span>main<span class="token punctuation">.</span>rs<span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">:</span>\nindex out of bounds<span class="token punctuation">:</span> the len is <span class="token number">3</span> but the index is <span class="token number">10</span>\nstack backtrace<span class="token punctuation">:</span>\n   <span class="token number">0</span><span class="token punctuation">:</span> rust_begin_unwind\n             at <span class="token operator">/</span>rustc<span class="token operator">/</span>cc66ad468955717ab92600c770da8c1601a4ff33<span class="token operator">/</span>library<span class="token operator">/</span>std<span class="token operator">/</span>src<span class="token operator">/</span>panicking<span class="token punctuation">.</span>rs<span class="token punctuation">:</span><span class="token number">595</span><span class="token punctuation">:</span><span class="token number">5</span>\n   <span class="token number">1</span><span class="token punctuation">:</span> <span class="token namespace">core<span class="token punctuation">::</span>panicking<span class="token punctuation">::</span></span>panic_fmt\n             at <span class="token operator">/</span>rustc<span class="token operator">/</span>cc66ad468955717ab92600c770da8c1601a4ff33<span class="token operator">/</span>library<span class="token operator">/</span>core<span class="token operator">/</span>src<span class="token operator">/</span>panicking<span class="token punctuation">.</span>rs<span class="token punctuation">:</span><span class="token number">67</span><span class="token punctuation">:</span><span class="token number">14</span>\n   <span class="token number">2</span><span class="token punctuation">:</span> <span class="token namespace">core<span class="token punctuation">::</span>panicking<span class="token punctuation">::</span></span>panic_bounds_check\n             at <span class="token operator">/</span>rustc<span class="token operator">/</span>cc66ad468955717ab92600c770da8c1601a4ff33<span class="token operator">/</span>library<span class="token operator">/</span>core<span class="token operator">/</span>src<span class="token operator">/</span>panicking<span class="token punctuation">.</span>rs<span class="token punctuation">:</span><span class="token number">162</span><span class="token punctuation">:</span><span class="token number">5</span>\nnote<span class="token punctuation">:</span> <span class="token class-name">Some</span> details are omitted<span class="token punctuation">,</span> run with `<span class="token constant">RUST_BACKTRACE</span><span class="token operator">=</span>full` <span class="token keyword">for</span> a verbose backtrace<span class="token punctuation">.</span>\n<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>    <span class="token number">36990</span> abort      <span class="token constant">RUST_BACKTRACE</span><span class="token operator">=</span><span class="token number">1</span> cargo run\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="result-t-e-类型" tabindex="-1"><a class="header-anchor" href="#result-t-e-类型" aria-hidden="true">#</a> <code>Result&lt;T, E&gt;</code> 类型</h3><p><code>Result&lt;T, E&gt;</code> 类型用于处理可恢复的错误，它是一样枚举并且它有两个成员：<code>Ok</code> 和 <code>Err</code>：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">enum</span> <span class="token type-definition class-name">Result</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token class-name">E</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n  <span class="token class-name">Ok</span><span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token class-name">Err</span><span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以打开某个文件为例子，使用 <code>match</code> 表达式来处理返回的 <code>Result&lt;T, E&gt;</code> 成员</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#![allow(unused)]</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>fs<span class="token punctuation">::</span></span><span class="token class-name">File</span><span class="token punctuation">;</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> file <span class="token operator">=</span> <span class="token keyword">match</span> result <span class="token punctuation">{</span>\n    <span class="token class-name">Ok</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> file<span class="token punctuation">,</span>\n    <span class="token class-name">Err</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token macro property">panic!</span><span class="token punctuation">(</span><span class="token string">&quot;There was a problem opening the file: {:?}&quot;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token class-name">There</span> was a problem opening the file<span class="token punctuation">:</span> <span class="token class-name">Os</span> <span class="token punctuation">{</span> code<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> kind<span class="token punctuation">:</span> <span class="token class-name">NotFound</span><span class="token punctuation">,</span> message<span class="token punctuation">:</span> <span class="token string">&quot;No such file or directory&quot;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>匹配不同的错误</p></blockquote><p>在 <code>Err</code> 成员中，还可以匹配不同的错误。</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#![allow(unused)]</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span><span class="token punctuation">{</span><span class="token namespace">fs<span class="token punctuation">::</span></span><span class="token class-name">File</span><span class="token punctuation">,</span> <span class="token namespace">io<span class="token punctuation">::</span></span><span class="token class-name">ErrorKind</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> file <span class="token operator">=</span> <span class="token keyword">match</span> result <span class="token punctuation">{</span>\n    <span class="token class-name">Ok</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> file<span class="token punctuation">,</span>\n    <span class="token class-name">Err</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">match</span> error<span class="token punctuation">.</span><span class="token function">kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token class-name">ErrorKind</span><span class="token punctuation">::</span><span class="token class-name">NotFound</span> <span class="token operator">=&gt;</span> <span class="token keyword">match</span> <span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Ok</span><span class="token punctuation">(</span>fc<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> fc<span class="token punctuation">,</span>\n        <span class="token class-name">Err</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token macro property">panic!</span><span class="token punctuation">(</span><span class="token string">&quot;Problem creating the file: {:?}&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      other_error <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token macro property">panic!</span><span class="token punctuation">(</span><span class="token string">&quot;Problem opening the file: {:?}&quot;</span><span class="token punctuation">,</span> other_error<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在代码中可以看到有三个 <code>match</code> 分支，它们分别处理对应不同的情况。</p><p><code>File::open</code> 返回的 <code>Err</code> 成员中的值类型是 <code>io::Error</code>，它是一个结构体，这个结构体中有一个返回 <code>io::ErrorKind</code> 值的 <code>kind</code> 方法可以调用。<code>io::ErrorKind</code> 是一个标准库提供的枚举，里面有 <code>NotFound</code> 等枚举成员。</p><blockquote><p>失败时 <code>panic</code> 的简写</p></blockquote><p>上方 <code>match</code> 的写法可以看到比较乱且冗长。<code>Result&lt;T, E&gt;</code> 类型中有 <code>unwrap</code> 这个方法，它可以辅助我们进行处理并以简洁的形式代替之前相同的工作。它类似于 <code>match</code> 语句：</p><ul><li>如果 <code>Result</code> 的值是成员 <code>Ok</code>，<code>unwrap</code> 会返回 <code>Ok</code> 中的值</li><li>如果 <code>Result</code> 的值是成员 <code>Err</code> ，<code>unwrap</code> 会调用 <code>panic!</code></li></ul><p>还有一个 <code>expect</code> 方法，它允许我们选择 <code>panic!</code> 的错误信息，也就是自定义 <code>panic!</code> 的错误信息。</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span><span class="token string">&quot;expect message&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>知道了 <code>unwrap</code> 和 <code>expect</code> ，就可以重写之前的“匹配不同错误”中的例子了：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>fs<span class="token punctuation">::</span></span><span class="token class-name">File</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>io<span class="token punctuation">::</span></span><span class="token class-name">ErrorKind</span><span class="token punctuation">;</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> greeting_file <span class="token operator">=</span> <span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap_or_else</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>error<span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> error<span class="token punctuation">.</span><span class="token function">kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">ErrorKind</span><span class="token punctuation">::</span><span class="token class-name">NotFound</span> <span class="token punctuation">{</span>\n            <span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap_or_else</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>error<span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">{</span>\n                <span class="token macro property">panic!</span><span class="token punctuation">(</span><span class="token string">&quot;Problem creating the file: {:?}&quot;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token macro property">panic!</span><span class="token punctuation">(</span><span class="token string">&quot;Problem opening the file: {:?}&quot;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>传播错误</p></blockquote>', 27);
const _hoisted_44 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#![allow(unused)]</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span><span class="token punctuation">{</span><span class="token namespace">fs<span class="token punctuation">::</span></span><span class="token class-name">File</span><span class="token punctuation">,</span> <span class="token namespace">io<span class="token punctuation">::</span></span><span class="token punctuation">{</span><span class="token class-name">Read</span><span class="token punctuation">,</span> <span class="token keyword">self</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">fn</span> <span class="token function-definition function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token namespace">io<span class="token punctuation">::</span></span><span class="token class-name">Error</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> file <span class="token operator">=</span> <span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">let</span> <span class="token keyword">mut</span> result <span class="token operator">=</span> <span class="token keyword">match</span> file <span class="token punctuation">{</span>\n      <span class="token class-name">Ok</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> file<span class="token punctuation">,</span>\n      <span class="token class-name">Err</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">return</span> <span class="token class-name">Err</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">let</span> <span class="token keyword">mut</span> name <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">match</span> result<span class="token punctuation">.</span><span class="token function">read_to_string</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token class-name">Ok</span><span class="token punctuation">(</span>_<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token class-name">Ok</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token class-name">Err</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token class-name">Err</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数以调用 <code>File::open</code> 函数开始，接着使用 <code>match</code> 处理函数返回值 <code>Result</code> 。继续执行，在 <code>Err</code> 的情况下，没有调用 <code>panic!</code> 宏，而是使用了 <code>return</code> 关键字提前结束整个函数，并将来自 <code>File::open</code> 的错误值作为函数的错误值传回给调用者。可以看到，在最后一个 <code>match</code> 表达式里的 <code>Err</code> 模式下并没有调用 <code>return</code> 语句，因为这是函数的最后一个表达式。</p><blockquote><p>传播错误的简写</p></blockquote><p>Rust 提供了 <code>?</code> 问号运算符来使其更易于处理。</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#![allow(unused)]</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span><span class="token punctuation">{</span><span class="token namespace">fs<span class="token punctuation">::</span></span><span class="token class-name">File</span><span class="token punctuation">,</span> <span class="token namespace">io<span class="token punctuation">::</span></span><span class="token punctuation">{</span><span class="token class-name">Read</span><span class="token punctuation">,</span> <span class="token keyword">self</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">fn</span> <span class="token function-definition function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token namespace">io<span class="token punctuation">::</span></span><span class="token class-name">Error</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> <span class="token keyword">mut</span> file <span class="token operator">=</span> <span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> <span class="token keyword">mut</span> name <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    file<span class="token punctuation">.</span><span class="token function">read_to_string</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> name<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>\n    <span class="token class-name">Ok</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一个问号 <code>?</code> 与 传播错误中的第一个 <code>match</code> 表达式有着完全相同的工作方式。如果 <code>Result</code> 的值是 <code>Ok</code>，那么这个表达式就会返回 <code>Ok</code> 中的值而程序将继续执行。如果值是 <code>Err</code> ，<code>Err</code> 将作为整个函数的返回值，就好像使用了 <code>return</code> 关键字一样，这样错误就被传播给了调用者。</p><p>总的来说就是，<code>File::open</code> 调用结尾的 <code>?</code> 会将 <code>Ok</code> 中的值返回给变量 <code>file</code>。如果发生了错误，<code>?</code> 运算符会使整个函数提前返回并将任何 <code>Err</code> 值返回给调用者。</p>', 7);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "?",
  -1
  /* HOISTED */
);
const _hoisted_52 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#![allow(unused)]</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span><span class="token punctuation">{</span><span class="token namespace">fs<span class="token punctuation">::</span></span><span class="token class-name">File</span><span class="token punctuation">,</span> <span class="token namespace">io<span class="token punctuation">::</span></span><span class="token punctuation">{</span><span class="token class-name">Read</span><span class="token punctuation">,</span> <span class="token keyword">self</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">fn</span> <span class="token function-definition function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token namespace">io<span class="token punctuation">::</span></span><span class="token class-name">Error</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> <span class="token keyword">mut</span> name <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">read_to_string</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> name<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>\n    \n    <span class="token class-name">Ok</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>什么可选链？（幻视</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">read_to_string</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> name<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这一行代码可以看成是 “逻辑与” 的关系：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">)</span><span class="token operator">?</span> <span class="token operator">&amp;&amp;</span> <span class="token function">read_to_string</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> name<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', 5);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  'File::open("hello.txt")?',
  -1
  /* HOISTED */
);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "read_to_string",
  -1
  /* HOISTED */
);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "File::open",
  -1
  /* HOISTED */
);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "read_to_string",
  -1
  /* HOISTED */
);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "name",
  -1
  /* HOISTED */
);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Ok",
  -1
  /* HOISTED */
);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Err",
  -1
  /* HOISTED */
);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Err",
  -1
  /* HOISTED */
);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("虽然 "),
    /* @__PURE__ */ createBaseVNode("code", null, "?"),
    /* @__PURE__ */ createTextVNode(" 问号运算符能使代码更简洁，但是也不是所有地方都可以使用问号运算符的。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createTextVNode("哪里可以使用 "),
      /* @__PURE__ */ createBaseVNode("code", null, "?"),
      /* @__PURE__ */ createTextVNode(" 问号运算符呢？")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "?",
  -1
  /* HOISTED */
);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "?",
  -1
  /* HOISTED */
);
const _hoisted_69 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "?",
  -1
  /* HOISTED */
);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "?",
  -1
  /* HOISTED */
);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Err",
  -1
  /* HOISTED */
);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Result",
  -1
  /* HOISTED */
);
const _hoisted_73 = /* @__PURE__ */ createStaticVNode('<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#![allow(unused)]</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>fs<span class="token punctuation">::</span></span><span class="token class-name">File</span><span class="token punctuation">;</span>\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> file <span class="token operator">=</span> <span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码就是 <code>?</code> 问号运算符作用的值与函数返回值不兼容的情况。</p><p>会出现以下错误提示：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code>  <span class="token operator">|</span>\n<span class="token number">3</span> <span class="token operator">|</span> <span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token operator">|</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> this function should <span class="token keyword">return</span> `<span class="token class-name">Result</span>` or `<span class="token class-name">Option</span>` to accept `<span class="token operator">?</span>`\n<span class="token number">4</span> <span class="token operator">|</span>   <span class="token keyword">let</span> file <span class="token operator">=</span> <span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>\n  <span class="token operator">|</span>                                     <span class="token operator">^</span> cannot <span class="token keyword">use</span> the `<span class="token operator">?</span>` operator <span class="token keyword">in</span> a function that returns `<span class="token punctuation">(</span><span class="token punctuation">)</span>`\n  <span class="token operator">|</span>\n  <span class="token operator">=</span> help<span class="token punctuation">:</span> the <span class="token keyword">trait</span> `<span class="token class-name">FromResidual</span><span class="token operator">&lt;</span><span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token class-name">Infallible</span><span class="token punctuation">,</span> <span class="token namespace">std<span class="token punctuation">::</span>io<span class="token punctuation">::</span></span><span class="token class-name">Error</span><span class="token operator">&gt;&gt;</span>` is not implemented <span class="token keyword">for</span> `<span class="token punctuation">(</span><span class="token punctuation">)</span>`\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>main</code> 函数返回的是一个空类型 <code>()</code> ，而 <code>?</code> 问号运算符作用的 <code>File::open</code> 返回的是一个 <code>Result</code> 类型，两者不兼容，于是报错。</p><h3 id="处理原则" tabindex="-1"><a class="header-anchor" href="#处理原则" aria-hidden="true">#</a> 处理原则</h3>', 6);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "panic!",
  -1
  /* HOISTED */
);
const _hoisted_80 = /* @__PURE__ */ createStaticVNode("<ul><li>有害状态是非预期行为，与偶尔发生的行为相对，如用户偶尔输错数据，这不属于有害状态</li><li>在这之后代码的运行依赖不处于这种有害状态</li><li>有害状态必须处理，而无法通过编码进所使用的类型中来解决</li></ul><p>当错误预期会出现时，使用 <code>Result</code> 会比调用 <code>panic!</code> 更加合适。</p><p>总结就是错误是自己能预见的，就使用 <code>Result</code> 类型去处理错误，反之使用 <code>panic!</code> 宏。</p>", 3);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("Rust 中的错误处理能够使得程序更加健壮，因为它可以确保你在将代码部署到生产环境之前就能发现错误并进行适当的处理。在 Rust 中，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("将错误分为两大类：可恢复的和不可恢复的")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。可以恢复的错误，可以尝试重试解决；不可恢复的错误，会是bug出现的前兆。大多数语言并不区分这两种错误，但 Rust 会。"),
      _hoisted_2,
      createTextVNode(" 类型来处理可恢复的错误；"),
      _hoisted_3,
      createTextVNode(" 宏用于处理不可恢复的错误，在程序遇到不可恢复的错误时停止执行。")
    ]),
    _hoisted_4,
    createBaseVNode("p", null, [
      createTextVNode("可以通过设置 "),
      _hoisted_14,
      createTextVNode(" 环境变量来得到一个 "),
      _hoisted_15,
      createTextVNode(" 。"),
      _hoisted_16,
      createTextVNode(" 是一个"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("执行到目前位置所有被调用的函数的列表")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_17,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("除了在当前函数中处理错误外，可以让调用者知道这个错误并决定该如何处理，这个过程被称为传播错误")
      ]),
      _: 1
      /* STABLE */
    }),
    createTextVNode("。"),
    _hoisted_44,
    createBaseVNode("p", null, [
      createTextVNode("我们甚至可以在 "),
      _hoisted_51,
      createTextVNode(" 之后直接使用"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("链式调用")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("来进一步缩短代码！")
    ]),
    _hoisted_52,
    createBaseVNode("p", null, [
      _hoisted_57,
      createTextVNode(" 的结果直接链式调用了 "),
      _hoisted_58,
      createTextVNode(" ，当 "),
      _hoisted_59,
      createTextVNode(" 和 "),
      _hoisted_60,
      createTextVNode(),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("都成功没有失败时")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，函数才返回变量 "),
      _hoisted_61,
      createTextVNode(" 的 "),
      _hoisted_62,
      createTextVNode(" 值。也就是前者如果返回 "),
      _hoisted_63,
      createTextVNode(" 值，则整个函数直接返回 "),
      _hoisted_64,
      createTextVNode(" 值并结束。")
    ]),
    _hoisted_65,
    _hoisted_66,
    createBaseVNode("p", null, [
      _hoisted_67,
      createTextVNode(" 问号运算符"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("只能用于返回值与 "),
          _hoisted_68,
          createTextVNode(" 作用的值相兼容的函数")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。因为 "),
      _hoisted_69,
      createTextVNode(" 问号运算符"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("被定义为从函数中提前返回一个值")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。例如使用 "),
      _hoisted_70,
      createTextVNode(" 问号运算符提早返回了一个 "),
      _hoisted_71,
      createTextVNode(" 值，函数的返回值必须是 "),
      _hoisted_72,
      createTextVNode(" 才能与这个提早返回的值相兼容。")
    ]),
    _hoisted_73,
    createBaseVNode("p", null, [
      createTextVNode("当有可能会导致有害状态的情况下，建议使用 "),
      _hoisted_79,
      createTextVNode("。"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("有害状态是指无效的值、自相矛盾的值或者被传递了不存在的值")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("等等情况。")
    ]),
    _hoisted_80
  ]);
}
const rustErrorHandle_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "rust-error-handle.html.vue"]]);
export {
  rustErrorHandle_html as default
};
