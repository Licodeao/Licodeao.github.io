import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, e as withCtx, b as createTextVNode, a as createBaseVNode, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="起因" tabindex="-1"><a class="header-anchor" href="#起因" aria-hidden="true">#</a> 起因</h2><p>最近在写 Next （v14 App Router）时，发现运行 <code>next build</code> 出现了以下错误：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Linting and checking validity of types ...Failed compile.\n&quot;src/app/home/updatelog/bugfix/page.tsx&quot; has an invalid &quot;default&quot; export: Type &quot;{ type: number; }&quot; is not valid.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看报错是在 Next 进行类型检查时出现的，根据给出的文件路径查看相关文件：</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// updatelog/bugfix/page.tsx</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">BugFixPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现组件定义并没有错，而且传入的参数的类型也没写错。</p><p>但报错却出现了 <code>export: Type &quot;{ type: number; }&quot; is not valid.</code> ，试着取消传递参数，再重新 build 时，发现就没报错了。</p><p>在其父文件中，是这样定义的：</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// updatelog/page.tsx</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">UpdateLogPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>updatePage<span class="token punctuation">,</span> setUpdatePage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;/home/updatelog/newfeature&quot;</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">renderContent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">switch</span> <span class="token punctuation">(</span>updatePage<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 这样的做法是错误的❌</span>\n      <span class="token keyword">case</span> <span class="token string">&quot;/home/updateLog/newfeature&quot;</span><span class="token operator">:</span>\n        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NewFeature</span></span> <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>\n      <span class="token keyword">case</span> <span class="token string">&quot;/home/updateLog/bugfix&quot;</span><span class="token operator">:</span>\n        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BugFixPage</span></span> <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>\n      <span class="token keyword">default</span><span class="token operator">:</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h2><p>由于 Next 的路由是基于文件系统的，也就是说每个页面都是一个单独的组件文件，当然这里说的&quot;每个页面&quot;指的是在 <code>pages</code> 目录下或者 <code>app</code> 目录下的页面。正是由于这样的特点，Next 就不能像传统的 SPA 应用一样在组件之间传递 Props 了。但这并不是说 Next 的页面组件不能接受参数，它可以接受参数，但并不能像 SPA 应用一样可以接收从另一个组件传递过来的参数。</p>', 11);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "getStaticProps",
  -1
  /* HOISTED */
);
const _hoisted_13 = /* @__PURE__ */ createStaticVNode('<p>如果需要在<strong>构建时使用 Props</strong>，则可以使用 <code>getStaticProps</code> 方法，它是在构建时运行的服务端函数，并返回一个对象，该对象作为 Props 传递给组件。</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> GetStaticProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> getStaticProps<span class="token operator">:</span> <span class="token function-variable function">GetStaticProps</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchAPI</span><span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    props<span class="token operator">:</span> <span class="token punctuation">{</span>\n      result<span class="token operator">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ResultPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> result <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token punctuation">{</span>result<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 2);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "getServerSideProps",
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createStaticVNode('<p>如果需要在<strong>请求时使用 Props</strong>，可以使用 <code>getServerSideProps</code> 方法，它也是一个服务端函数，但会针对每个请求运行。</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> GetServerSideProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> getServerSideProps<span class="token operator">:</span> <span class="token function-variable function">GetServerSideProps</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchAPI</span><span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    props<span class="token operator">:</span> <span class="token punctuation">{</span>\n      result<span class="token operator">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ResultPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> result <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token punctuation">{</span>result<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 2);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "fetch",
  -1
  /* HOISTED */
);
const _hoisted_19 = /* @__PURE__ */ createStaticVNode('<p>Next 扩展了原生的 <code>fetch Web API</code> ，额外添加了 <code>配置缓存</code> 和 <code>重新验证行为</code>。</p><p>可以在 <code>服务器组件(Server Component)</code>、<code>路由处理程序(页面目录的API路由)</code>、<code>服务器操作(Server Action，在服务器上执行的异步函数)</code></p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 配置缓存</span>\n    cache<span class="token operator">:</span> <span class="token string">&#39;force-cache&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 重新验证行为</span>\n    next<span class="token operator">:</span> <span class="token punctuation">{</span>\n      revalidate<span class="token operator">:</span> <span class="token number">3600</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">FetchPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>i <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>i<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 3);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("要在 Next 中的页面之间传递属性，可以通过 getStaticProps 、 getServerSideProps、fetch 等数据获取方法")
      ]),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("blockquote", null, [
      _hoisted_12,
      createBaseVNode("p", null, [
        createTextVNode("仅限 "),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("Pages Router")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode(" 模式下才能使用")
      ])
    ]),
    _hoisted_13,
    createBaseVNode("blockquote", null, [
      _hoisted_15,
      createBaseVNode("p", null, [
        createTextVNode("仅限 "),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("Pages Router")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode(" 模式下才能使用")
      ])
    ]),
    _hoisted_16,
    createBaseVNode("blockquote", null, [
      _hoisted_18,
      createBaseVNode("p", null, [
        createTextVNode("在 "),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("App Router")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode(" 模式下，可以直接 fetch 来获取数据")
      ])
    ]),
    _hoisted_19
  ]);
}
const nextProps_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "next-props.html.vue"]]);
export {
  nextProps_html as default
};