import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, d as createVNode, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="_160-相交链表" tabindex="-1"><a class="header-anchor" href="#_160-相交链表" aria-hidden="true">#</a> 160. 相交链表</h2><p>给你两个单链表的头节点 <code>headA</code> 和 <code>headB</code> ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 <code>null</code> 。</p><p>图示两个链表在节点 <code>c1</code> 开始相交**：**</p>', 3);
const _hoisted_4 = {
  href: "https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "img",
  {
    src: "https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/160_statement.png",
    alt: "img"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createStaticVNode("<p>题目数据 <strong>保证</strong> 整个链式结构中不存在环。</p><p><strong>注意</strong>，函数返回结果后，链表必须 <strong>保持其原始结构</strong> 。</p><p><strong>自定义评测：</strong></p><p><strong>评测系统</strong> 的输入如下（你设计的程序 <strong>不适用</strong> 此输入）：</p><ul><li><code>intersectVal</code> - 相交的起始节点的值。如果不存在相交节点，这一值为 <code>0</code></li><li><code>listA</code> - 第一个链表</li><li><code>listB</code> - 第二个链表</li><li><code>skipA</code> - 在 <code>listA</code> 中（从头节点开始）跳到交叉节点的节点数</li><li><code>skipB</code> - 在 <code>listB</code> 中（从头节点开始）跳到交叉节点的节点数</li></ul><p>评测系统将根据这些输入创建链式数据结构，并将两个头节点 <code>headA</code> 和 <code>headB</code> 传递给你的程序。如果程序能够正确返回相交节点，那么你的解决方案将被 <strong>视作正确答案</strong> 。</p><p><strong>示例 1：</strong></p>", 7);
const _hoisted_13 = {
  href: "https://assets.leetcode.com/uploads/2018/12/13/160_example_1.png",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "img",
  {
    src: "https://assets.leetcode.com/uploads/2021/03/05/160_example_1_1.png",
    alt: "img"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createStaticVNode('<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3\n输出：Intersected at &#39;8&#39;\n解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。\n从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,6,1,8,4,5]。\n在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。\n— 请注意相交节点的值不为 1，因为在链表 A 和链表 B 之中值为 1 的节点 (A 中第二个节点和 B 中第三个节点) 是不同的节点。换句话说，它们在内存中指向两个不同的位置，而链表 A 和链表 B 中值为 8 的节点 (A 中第三个节点，B 中第四个节点) 在内存中指向相同的位置。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>', 2);
const _hoisted_17 = {
  href: "https://assets.leetcode.com/uploads/2018/12/13/160_example_2.png",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "img",
  {
    src: "https://assets.leetcode.com/uploads/2021/03/05/160_example_2.png",
    alt: "img"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_19 = /* @__PURE__ */ createStaticVNode('<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1\n输出：Intersected at &#39;2&#39;\n解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。\n从各自的表头开始算起，链表 A 为 [1,9,1,2,4]，链表 B 为 [3,2,4]。\n在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p>', 2);
const _hoisted_21 = {
  href: "https://assets.leetcode.com/uploads/2018/12/13/160_example_3.png",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "img",
  {
    src: "https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/160_example_3.png",
    alt: "img"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createStaticVNode('<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2\n输出：null\n解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。\n由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。\n这两个链表不相交，因此返回 null 。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>listA</code> 中节点数目为 <code>m</code></li><li><code>listB</code> 中节点数目为 <code>n</code></li><li><code>1 &lt;= m, n &lt;= 3 * 104</code></li><li><code>1 &lt;= Node.val &lt;= 105</code></li><li><code>0 &lt;= skipA &lt;= m</code></li><li><code>0 &lt;= skipB &lt;= n</code></li><li>如果 <code>listA</code> 和 <code>listB</code> 没有交点，<code>intersectVal</code> 为 <code>0</code></li><li>如果 <code>listA</code> 和 <code>listB</code> 有交点，<code>intersectVal == listA[skipA] == listB[skipB]</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>第一种做法（快慢指针）：两个链表进行相减，取到其链表长度的差。然后让长度较长的链表先走|长度差|步，之后再一起走。如果有相交节点的话，那么就会相遇。</li><li>第二种做法（双指针）：两个链表同时走，当较短的链表碰到null，即走完时跳到较长的链表上继续走；当较长的链表碰到null时，跳到较短的链表上继续走，这种走法等于抵消掉了原本的长度差。那么，意味着如果有相交的节点时，肯定会碰到；反之，如果没有相交节点时，两者的值都会为null</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 第一种做法: 快慢指针</span>\n\n<span class="token keyword">function</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span>headA<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> headB<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 边界判断</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>headA <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> headB <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">null</span>\n    <span class="token punctuation">}</span>\n\n  	<span class="token comment">// 计算链表A的长度</span>\n    <span class="token keyword">let</span> <span class="token constant">A</span> <span class="token operator">=</span> headA\n    <span class="token keyword">let</span> lenA <span class="token operator">=</span> <span class="token number">0</span>\n    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token constant">A</span> <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        lenA<span class="token operator">++</span>\n        <span class="token constant">A</span> <span class="token operator">=</span> <span class="token constant">A</span><span class="token punctuation">.</span>next\n    <span class="token punctuation">}</span>\n\n  	<span class="token comment">// 计算链表B的长度</span>\n    <span class="token keyword">let</span> <span class="token constant">B</span> <span class="token operator">=</span> headB\n    <span class="token keyword">let</span> lenB <span class="token operator">=</span> <span class="token number">0</span>\n    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token constant">B</span> <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        lenB<span class="token operator">++</span>\n        <span class="token constant">B</span> <span class="token operator">=</span> <span class="token constant">B</span><span class="token punctuation">.</span>next\n    <span class="token punctuation">}</span>\n\n  	<span class="token comment">// 由于一开始并不知道哪个链表长，所以要分情况，让较长的链表先走|长度差|步</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>lenA <span class="token operator">&gt;</span> lenB<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> lenA <span class="token operator">-</span> lenB<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            headA <span class="token operator">=</span> headA<span class="token punctuation">.</span>next\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>lenA <span class="token operator">&lt;</span> lenB<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> lenB <span class="token operator">-</span> lenA<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            headB <span class="token operator">=</span> headB<span class="token punctuation">.</span>next\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n  	<span class="token comment">// 最后一起走</span>\n    <span class="token keyword">while</span><span class="token punctuation">(</span>headA <span class="token operator">!==</span> headB<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        headA <span class="token operator">=</span> headA<span class="token punctuation">.</span>next\n        headB <span class="token operator">=</span> headB<span class="token punctuation">.</span>next\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> headA\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 第二种做法: 双指针</span>\n\n<span class="token keyword">function</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span>headA<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> headB<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 边界判断</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>headA <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> headB <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">null</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">let</span> <span class="token constant">A</span> <span class="token operator">=</span> headA\n    <span class="token keyword">let</span> <span class="token constant">B</span> <span class="token operator">=</span> headB\n\n    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token constant">A</span> <span class="token operator">!=</span> <span class="token constant">B</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      	<span class="token comment">// 查看A链表走完没，如果走完了就跳到B链表去，否则继续走下去</span>\n        <span class="token constant">A</span> <span class="token operator">=</span> <span class="token constant">A</span> <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> headB <span class="token operator">:</span> <span class="token constant">A</span><span class="token punctuation">.</span>next\n      	<span class="token comment">// B链表同理</span>\n        <span class="token constant">B</span> <span class="token operator">=</span> <span class="token constant">B</span> <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> headA <span class="token operator">:</span> <span class="token constant">B</span><span class="token punctuation">.</span>next\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 返回A或B都行</span>\n    <span class="token keyword">return</span> <span class="token constant">A</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 7);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_4, [
        _hoisted_5,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_6,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_13, [
        _hoisted_14,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_15,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_17, [
        _hoisted_18,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_19,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_21, [
        _hoisted_22,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_23
  ]);
}
const leetcode160_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "leetcode-160.html.vue"]]);
export {
  leetcode160_html as default
};
