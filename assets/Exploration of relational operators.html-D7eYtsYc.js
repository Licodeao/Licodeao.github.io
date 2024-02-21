import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="前瞻" tabindex="-1"><a class="header-anchor" href="#前瞻" aria-hidden="true">#</a> 前瞻</h2><p>此篇内容并不是关系运算符的全部探索，仅仅是我学习过程中遇到的比较新奇的point，以此来记录一下。</p><h2 id="关系运算符" tabindex="-1"><a class="header-anchor" href="#关系运算符" aria-hidden="true">#</a> 关系运算符</h2><h3 id="起因" tabindex="-1"><a class="header-anchor" href="#起因" aria-hidden="true">#</a> 起因</h3><blockquote><p>Object类型与其他数据类型进行比较时，都会得到false。</p><p>有什么办法将结果变为true呢？</p></blockquote><h3 id="奇特的point" tabindex="-1"><a class="header-anchor" href="#奇特的point" aria-hidden="true">#</a> 奇特的point</h3><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20220819170141494.png" alt=""></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> foo1 <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>\n<span class="token keyword">let</span> foo2 <span class="token operator">=</span> <span class="token number">0</span>\n\n<span class="token comment">// ==运算符，在类型不相同的情况下，会先将运算元转成Number类型的值，再进行比较(隐式转换)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo1 <span class="token operator">==</span> foo2<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">true</span>\n\n<span class="token comment">// ===运算符，在类型不相同的情况下，直接返回false，因为该运算符在类型不相同的情况下不会做任何的类型转换</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo1 <span class="token operator">===</span> foo2<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">false</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Object类型与其他数据类型比较</p></blockquote>', 9);
const _hoisted_10 = {
  href: "https://262.ecma-international.org/5.1/#sec-11.9.3",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = {
  href: "https://262.ecma-international.org/5.1/#sec-8",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "x",
  -1
  /* HOISTED */
);
const _hoisted_13 = {
  href: "https://262.ecma-international.org/5.1/#sec-8",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "y",
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "x",
  -1
  /* HOISTED */
);
const _hoisted_16 = {
  href: "https://262.ecma-international.org/5.1/#sec-9.1",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "y",
  -1
  /* HOISTED */
);
const _hoisted_18 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> foo1 <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>\n<span class="token keyword">let</span> foo2 <span class="token operator">=</span> <span class="token keyword">null</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo1 <span class="token operator">==</span> foo2<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">false</span>\n\n<span class="token doc-comment comment">/**\n*	根据上面的原文，可以发现：如果比较的类型有Object类型或null，那么此类型会被ToPrimitive函数转换为初始值\n* 而初始值是哪些呢？ 就在上方的图中\n* 依据上图，ToPrimitive(null)没有返回值，因为null没有对应的初始值\n* 故比较结果为false\n*/</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决疑惑" tabindex="-1"><a class="header-anchor" href="#解决疑惑" aria-hidden="true">#</a> 解决疑惑</h3><blockquote><p>如何将有变量为Object类型的比较的结果变为true呢？</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;licodeao&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n  <span class="token comment">// 在对象中写入[Symbol.toPrimitive]，并重写toPrimitive函数，修改其返回值即可</span>\n  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>toPrimitive<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token number">123</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 实现将有变量为Object类型的比较的结果变为true</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo <span class="token operator">==</span> <span class="token number">123</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><ul><li><strong>严格相等运算符不会进行任何的类型转换</strong></li><li>使用<strong>关系运算符进行比较</strong>时，当<strong>运算元中出现了Object类型</strong>时，可以<strong>重写其toPrimitive函数</strong>，<strong>修改其返回值为期望值</strong>即可</li></ul>', 6);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("查阅"),
      createBaseVNode("a", _hoisted_10, [
        createTextVNode("ECMA文档"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("，第11.9.3点的第8条原文如下：")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("If "),
      createBaseVNode("a", _hoisted_11, [
        createTextVNode("Type"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("("),
      _hoisted_12,
      createTextVNode(") is either String or Number and "),
      createBaseVNode("a", _hoisted_13, [
        createTextVNode("Type"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("("),
      _hoisted_14,
      createTextVNode(") is Object, return the result of the comparison "),
      _hoisted_15,
      createTextVNode(" == "),
      createBaseVNode("a", _hoisted_16, [
        createTextVNode("ToPrimitive"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("("),
      _hoisted_17,
      createTextVNode(").")
    ]),
    _hoisted_18
  ]);
}
const Exploration_of_relational_operators_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Exploration of relational operators.html.vue"]]);
export {
  Exploration_of_relational_operators_html as default
};
