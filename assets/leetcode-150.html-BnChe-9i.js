import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "_150-逆波兰表达式求值",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#_150-逆波兰表达式求值",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 150. 逆波兰表达式求值")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "tokens",
  -1
  /* HOISTED */
);
const _hoisted_3 = {
  href: "https://baike.baidu.com/item/%E9%80%86%E6%B3%A2%E5%85%B0%E5%BC%8F/128437",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<p>请你计算该表达式。返回一个表示表达式值的整数。</p><p><strong>注意：</strong></p><ul><li>有效的算符为 <code>&#39;+&#39;</code>、<code>&#39;-&#39;</code>、<code>&#39;*&#39;</code> 和 <code>&#39;/&#39;</code> 。</li><li>每个操作数（运算对象）都可以是一个整数或者另一个表达式。</li><li>两个整数之间的除法总是 <strong>向零截断</strong> 。</li><li>表达式中不含除零运算。</li><li>输入是一个根据逆波兰表示法表示的算术表达式。</li><li>答案及所有中间计算结果可以用 <strong>32 位</strong> 整数表示。</li></ul><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：tokens = [&quot;2&quot;,&quot;1&quot;,&quot;+&quot;,&quot;3&quot;,&quot;*&quot;]\n输出：9\n解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：tokens = [&quot;4&quot;,&quot;13&quot;,&quot;5&quot;,&quot;/&quot;,&quot;+&quot;]\n输出：6\n解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：tokens = [&quot;10&quot;,&quot;6&quot;,&quot;9&quot;,&quot;3&quot;,&quot;+&quot;,&quot;-11&quot;,&quot;*&quot;,&quot;/&quot;,&quot;*&quot;,&quot;17&quot;,&quot;+&quot;,&quot;5&quot;,&quot;+&quot;]\n输出：22\n解释：该算式转化为常见的中缀算术表达式为：\n  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5\n= ((10 * (6 / (12 * -11))) + 17) + 5\n= ((10 * (6 / -132)) + 17) + 5\n= ((10 * 0) + 17) + 5\n= (0 + 17) + 5\n= 17 + 5\n= 22\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= tokens.length &lt;= 104</code></li><li><code>tokens[i]</code> 是一个算符（<code>&quot;+&quot;</code>、<code>&quot;-&quot;</code>、<code>&quot;*&quot;</code> 或 <code>&quot;/&quot;</code>），或是在范围 <code>[-200, 200]</code> 内的一个整数</li></ul><p><strong>逆波兰表达式：</strong></p><p>逆波兰表达式是一种后缀表达式，所谓后缀就是指运算符写在后面。</p><ul><li>平常使用的算式则是一种中缀表达式，如 <code>( 1 + 2 ) * ( 3 + 4 )</code> 。</li><li>该算式的逆波兰表达式写法为 <code>( ( 1 2 + ) ( 3 4 + ) * )</code> 。</li></ul><p>逆波兰表达式主要有以下两个优点：</p><ul><li>去掉括号后表达式无歧义，上式即便写成 <code>1 2 + 3 4 + * </code>也可以依据次序计算出正确结果。</li><li>适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>逆波兰表达式是一种后缀表达式，而后缀表达式在二叉树中为后序遍历。</p><p>遇到数字就进栈，遇到符号时，将处于栈顶的两个元素取出，并结合当前符号进行运算，得出的结果再放入栈中。</p>', 19);
const _hoisted_23 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">evalRPN</span><span class="token punctuation">(</span>tokens<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 创建一个栈</span>\n    <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> tokens<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> s <span class="token operator">=</span> tokens<span class="token punctuation">[</span>i<span class="token punctuation">]</span>\n        <span class="token comment">// 数字入栈</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>s <span class="token operator">===</span> <span class="token string">&quot;+&quot;</span> <span class="token operator">||</span> s <span class="token operator">===</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">||</span> s <span class="token operator">===</span> <span class="token string">&quot;*&quot;</span> <span class="token operator">||</span> s <span class="token operator">===</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 取出栈顶两个元素</span>\n            <span class="token keyword">let</span> s1 <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n            <span class="token keyword">let</span> s2 <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n            <span class="token keyword">switch</span> <span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">case</span> <span class="token string">&quot;+&quot;</span><span class="token operator">:</span>\n                    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s1 <span class="token operator">+</span> s2<span class="token punctuation">)</span>\n                    <span class="token keyword">break</span>\n                <span class="token keyword">case</span> <span class="token string">&quot;-&quot;</span><span class="token operator">:</span>\n                    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s2 <span class="token operator">-</span> s1<span class="token punctuation">)</span>\n                    <span class="token keyword">break</span>\n                <span class="token keyword">case</span> <span class="token string">&quot;*&quot;</span><span class="token operator">:</span>\n                    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s1 <span class="token operator">*</span> s2<span class="token punctuation">)</span>\n                    <span class="token keyword">break</span>\n                <span class="token keyword">case</span> <span class="token string">&quot;/&quot;</span><span class="token operator">:</span>\n                    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span>s2 <span class="token operator">/</span> s1<span class="token punctuation">)</span><span class="token punctuation">)</span>\n                    <span class="token keyword">break</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 栈中只剩一个元素</span>\n    <span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 1);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("给你一个字符串数组 "),
      _hoisted_2,
      createTextVNode(" ，表示一个根据 "),
      createBaseVNode("a", _hoisted_3, [
        createTextVNode("逆波兰表示法"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" 表示的算术表达式。")
    ]),
    _hoisted_4,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("Math.trunc() ")
      ]),
      _: 1
      /* STABLE */
    }),
    createTextVNode("静态方法"),
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("通过删除任何小数位返回数字的整数部分")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_23
  ]);
}
const leetcode150_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "leetcode-150.html.vue"]]);
export {
  leetcode150_html as default
};
