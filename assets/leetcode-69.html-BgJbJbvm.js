import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="_69-x的平方根" tabindex="-1"><a class="header-anchor" href="#_69-x的平方根" aria-hidden="true">#</a> 69. x的平方根</h2><p>给你一个非负整数 <code>x</code> ，计算并返回 <code>x</code> 的 <strong>算术平方根</strong> 。</p><p>由于返回类型是整数，结果只保留 <strong>整数部分</strong> ，小数部分将被 <strong>舍去 。</strong></p><p>**注意：**不允许使用任何内置指数函数和算符，例如 <code>pow(x, 0.5)</code> 或者 <code>x ** 0.5</code> 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：x = 4\n输出：2\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：x = 8\n输出：2\n解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>0 &lt;= x &lt;= 231 - 1</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>', 11);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "因此，可以使用二分查找来解题",
  -1
  /* HOISTED */
);
const _hoisted_13 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">mySqrt</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n  	<span class="token comment">// 定义左边界（下界）</span>\n    <span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  	<span class="token comment">// 定义右边界（上界）</span>\n    <span class="token keyword">let</span> r <span class="token operator">=</span> x<span class="token punctuation">;</span>\n  	<span class="token comment">// 这里取等，是因为题目范围是个闭区间</span>\n    <span class="token keyword">while</span><span class="token punctuation">(</span>l <span class="token operator">&lt;=</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 当收缩范围直到只有两个数时，左边界不确定，因此借助r*r &gt; x来判断我们需要的数</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> l <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> r <span class="token operator">*</span> r <span class="token operator">&gt;</span> x <span class="token operator">?</span> l <span class="token operator">:</span> r<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      	<span class="token comment">// 定义中间值</span>\n        <span class="token keyword">let</span> mid <span class="token operator">=</span> l <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>r <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      	<span class="token comment">// 这道题求下界，代表着当mid*mid &lt; x时，我们无法确定左边界，因此直接使用mid来模糊确定左边界</span>\n      	<span class="token comment">// 而当mid*mid &gt; x时，我们能直接收缩右边界的范围，是因为符合mid*mid &gt; x的数并不是需要的数</span>\n      	<span class="token comment">// 因此，我们可以直接收缩右边界范围</span>\n      	<span class="token comment">// 当然，如果mid*mid == x时，就代表找到了符合的数，直接返回即可</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>mid<span class="token operator">*</span>mid <span class="token operator">&gt;</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            r <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>mid<span class="token operator">*</span>mid <span class="token operator">==</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> mid\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            l <span class="token operator">=</span> mid\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230406222748526.png" alt="image-20230406222748526"></p>', 2);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "另外，这道题还可以进行变形",
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "比如当 x = 8 时，x 的平方根大约是 2.8，那我们的答案就是 3，也就是求上界",
  -1
  /* HOISTED */
);
const _hoisted_17 = /* @__PURE__ */ createStaticVNode('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">myUpperSqrt</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 定义左边界（下界）</span>\n  <span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token comment">// 定义右边界（上界）</span>\n  <span class="token keyword">let</span> r <span class="token operator">=</span> x<span class="token punctuation">;</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;=</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> l <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 当收缩范围直到只有两个数时，右边界不确定，因此借助l*l &gt; x来判断我们需要的数</span>\n      <span class="token keyword">return</span> l <span class="token operator">*</span> l <span class="token operator">&gt;</span> x <span class="token operator">?</span> l <span class="token operator">:</span> r<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 相当于 let mid = l + Math.floor((r - l) / 2)</span>\n    <span class="token keyword">let</span> mid <span class="token operator">=</span> l <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>r <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token doc-comment comment">/**\n    *	同样的思路，右边界不确定，借助mid来模糊确定右边界\n    * 左边界确定，直接收缩左边界范围即可\n    */</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>mid <span class="token operator">*</span> mid <span class="token operator">&gt;</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      r <span class="token operator">=</span> mid<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>mid <span class="token operator">*</span> mid <span class="token operator">==</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> mid<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      l <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 1);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode('示例2中，从"小数部分被舍去"可知，这是在'),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("求二分法的下界")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _hoisted_12
    ]),
    _hoisted_13,
    createBaseVNode("blockquote", null, [
      _hoisted_15,
      createBaseVNode("p", null, [
        createTextVNode("也即是：将问题变成"),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("求上界")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _hoisted_16
    ]),
    _hoisted_17
  ]);
}
const leetcode69_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "leetcode-69.html.vue"]]);
export {
  leetcode69_html as default
};
