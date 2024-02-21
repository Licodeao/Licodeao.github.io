import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "作为一个前端 er，初次了解 Rust 还是在字节推出 Rspack 的时候。在此之前，从未学习过可以直接与系统进行交互的编程语言，一开始接触编程即是通过 JavaScript 上手。学习 Rust，也是为了补齐编程生涯的一块空白，毕竟作为一个程序员没有与计算机底层交互过，某种意义上来说是否算是一种遗憾呢。All In Rust ～",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Rust 是一门静态强类型编程语言，也就是编译器必须在编译期间知道所有变量的类型，对于前端 er 来说，如果有了解 TypeScript，那能够感受到一点亲切感，但是 Rust 与 TypeScript 的类型检测的底层不太一样。Rust 的语法类似于 C++，所以初次写 Rust 代码可能会非常不适应，但任何语言都是一样的，只有语言能够调教你，而你不能去调教语言:D，主打一个自适应。不得不说的是，Rust 的学习曲线比较陡峭，但再硬的骨头也是能够啃下来的，毕竟教员曾经说过一句话：办法总比困难多。Rust 与前端还是有很多相似之处，Rust 有类型检测机制、包管理工具、项目依赖文件等等，前端社区中有关 Rust 的身影越来越多，相信 Rust 能够在前端中大放异彩。",
  -1
  /* HOISTED */
);
const _hoisted_3 = {
  href: "https://course.rs/first-try/installation.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<p>安装完成后，需要检查 Rust 是否安装成功：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 注意都是大写</span>\n$ rustc <span class="token parameter variable">-V</span>\n$ <span class="token function">cargo</span> <span class="token parameter variable">-V</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在安装 Rust 的同时，也会在本地安装一个文档服务，方便离线阅读</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 通过浏览器打开本地文档</span>\n$ rustup doc\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="为什么要用-rust" tabindex="-1"><a class="header-anchor" href="#为什么要用-rust" aria-hidden="true">#</a> 为什么要用 Rust ？</h2><p>Rust 可以用来替换 C/C++，Rust 和它们具有相同的性能，但是很多常见的 bug 都能在编译时被消灭。</p><p>Rust 是一种通用的编程语言，但是它更善于以下场景：</p><ul><li>需要运行时的速度，高性能</li><li>需要内存安全</li><li>需要更好地利用多处理器，高并发</li></ul><h2 id="新建项目" tabindex="-1"><a class="header-anchor" href="#新建项目" aria-hidden="true">#</a> 新建项目</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cargo</span> new project_name\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Rust 项目主要分为两种：</p><ul><li>bin：可运行项目</li><li>lib：依赖库项目</li></ul><h3 id="查看项目结构" tabindex="-1"><a class="header-anchor" href="#查看项目结构" aria-hidden="true">#</a> 查看项目结构</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 通过该命令展示项目结构</span>\n$ tree\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.\n .git\n .gitignore\n Cargo.toml\n src\n  main.rs\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行项目" tabindex="-1"><a class="header-anchor" href="#运行项目" aria-hidden="true">#</a> 运行项目</h2><h3 id="cargo-run" tabindex="-1"><a class="header-anchor" href="#cargo-run" aria-hidden="true">#</a> cargo run</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cargo</span> run\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', 18);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "cargo run",
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "debug",
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "--release",
  -1
  /* HOISTED */
);
const _hoisted_25 = /* @__PURE__ */ createStaticVNode('<h3 id="手动编译和运行项目" tabindex="-1"><a class="header-anchor" href="#手动编译和运行项目" aria-hidden="true">#</a> 手动编译和运行项目</h3><p>通过 <code>cargo build</code> 命令进行手动编译</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cargo</span> build\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行编译后的文件，如 <code>./target/debug/hello_world</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ./target/debug/hello_world\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="验证代码正确性" tabindex="-1"><a class="header-anchor" href="#验证代码正确性" aria-hidden="true">#</a> 验证代码正确性</h2><p>在项目越来越大时，使用 <code>cargo run</code> 和 <code>cargo build</code> 命令变得慢，<code>cargo check</code> 呼之欲出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 快速检查代码是否能编译通过（该命令速度非常快）</span>\n$ <span class="token function">cargo</span> check\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cargo-核心文件" tabindex="-1"><a class="header-anchor" href="#cargo-核心文件" aria-hidden="true">#</a> Cargo 核心文件</h2><p><code>Cargo.toml</code> 和 <code>Cargo.lock</code> 是 Cargo 的核心文件</p><h3 id="cargo-toml" tabindex="-1"><a class="header-anchor" href="#cargo-toml" aria-hidden="true">#</a> Cargo.toml</h3>', 11);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Cargo.toml",
  -1
  /* HOISTED */
);
const _hoisted_37 = /* @__PURE__ */ createStaticVNode('<h3 id="cargo-lock" tabindex="-1"><a class="header-anchor" href="#cargo-lock" aria-hidden="true">#</a> Cargo.lock</h3><p><code>Cargo.lock</code> 是 Cargo 根据项目的 <code>toml</code> 文件生成的项目依赖详细清单</p><blockquote><p>基于前面说的 Rust 项目主要分为 bin 项目和 lib 项目，那什么时候该上传 <code>Cargo.lock</code> 文件呢？</p></blockquote><ul><li>当项目是 bin 项目（可运行项目）时，需要将 <code>Cargo.lock</code> 文件上传到 Git 仓库中</li><li>当项目是 lib 项目（依赖库项目）时，不需要将 <code>Cargo.lock</code> 文件上传到 Git 仓库中，即将该文件添加到 <code>.gitignore</code> 文件中</li></ul><h2 id="配置镜像源" tabindex="-1"><a class="header-anchor" href="#配置镜像源" aria-hidden="true">#</a> 配置镜像源</h2><blockquote><p>官方的镜像源 <a href="https://crates.io/">crates.io</a></p></blockquote>', 6);
const _hoisted_43 = /* @__PURE__ */ createStaticVNode('<p>由于官方镜像源地址是在国外的，难免出现下载依赖缓慢的问题，为了解决这个问题可以使用以下两种：</p><ul><li><p>新增镜像地址（不推荐，项目过大时，修改依赖版本很麻烦）</p></li><li><p>覆盖默认的镜像地址（推荐）</p><p>在环境变量配置的 toml 文件中 <code>$HOME/.cargo/config.toml</code> 添加以下内容</p><blockquote><p>这个 toml 文件的意思是：</p><p>首先创建一个新的镜像源 <code>[source.ustc]</code> , 然后将默认的 <code>crates.io</code> 镜像源替换成 <code>ustc</code></p></blockquote><div class="language-toml line-numbers-mode" data-ext="toml"><pre class="language-toml"><code> <span class="token punctuation">[</span><span class="token table class-name">source.crates-io</span><span class="token punctuation">]</span>\n <span class="token key property">replace-with</span> <span class="token punctuation">=</span> <span class="token string">&quot;ustc&quot;</span>\n\n <span class="token punctuation">[</span><span class="token table class-name">source.ustc</span><span class="token punctuation">]</span>\n <span class="token key property">registry</span> <span class="token punctuation">=</span> <span class="token string">&quot;git://mirrors.ustc.edu.cn/crates.io-index&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>', 2);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("p", null, [
      createTextVNode("安装 Rust 的教程网上非常多，这里就引用其中的一篇"),
      createBaseVNode("a", _hoisted_3, [
        createTextVNode("安装教程"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("。")
    ]),
    _hoisted_4,
    createBaseVNode("p", null, [
      _hoisted_22,
      createTextVNode(" 实际上"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("等同于手动编译和运行项目")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("这个两个命令，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("默认运行 "),
          _hoisted_23,
          createTextVNode(" 模式")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，这种模式下会产生很多 debug 输出，如果不想要这么多输出，可以使用 "),
      _hoisted_24,
      createTextVNode(" 参数使用生产发布的模式。")
    ]),
    _hoisted_25,
    createBaseVNode("p", null, [
      _hoisted_36,
      createTextVNode(" 是 Cargo 的"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("项目数据描述文件")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，其"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("存储了项目的所有元配置信息")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_37,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("事实上，翻墙工具默认开启的仅仅是浏览器的翻墙代理，对于命令行或者软件中的访问，并不会代理流量，因此这些访问还是通过正常网络进行的，自然会失败。")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_43
  ]);
}
const rustConfiguraion_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "rust-configuraion.html.vue"]]);
export {
  rustConfiguraion_html as default
};
