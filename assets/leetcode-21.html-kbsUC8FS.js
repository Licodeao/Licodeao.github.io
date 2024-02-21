import { _ as _export_sfc, o as openBlock, c as createElementBlock, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="_21-合并两个有序链表" tabindex="-1"><a class="header-anchor" href="#_21-合并两个有序链表" aria-hidden="true">#</a> 21. 合并两个有序链表</h2><p>将两个升序链表合并为一个新的 <strong>升序</strong> 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" alt="img"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：l1 = [1,2,4], l2 = [1,3,4]\n输出：[1,1,2,3,4,4]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：l1 = [], l2 = []\n输出：[]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：l1 = [], l2 = [0]\n输出：[0]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>两个链表的节点数目范围是 <code>[0, 50]</code></li><li><code>-100 &lt;= Node.val &lt;= 100</code></li><li><code>l1</code> 和 <code>l2</code> 均按 <strong>非递减顺序</strong> 排列</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题使用dummyHead解法会更容易一点，否则需要在循环中写较多判断。同样的，也可以使用递归。</p><p>思路：两个链表依次进行比较，值较小的就添加到辅助链表中，直至链表遍历完成。值相等的情况下，随便哪个都行。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// dummyHead</span>\n\n<span class="token keyword">function</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>list1<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> list2<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 边界判断</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>list1 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> list2\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>list2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> list1\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 创建虚拟头结点</span>\n    <span class="token keyword">let</span> list3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>\n    <span class="token comment">// 辅助链表</span>\n    <span class="token keyword">let</span> temp <span class="token operator">=</span> list3\n\n    <span class="token keyword">while</span><span class="token punctuation">(</span>list1 <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> list2 <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>list1<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> list2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            temp<span class="token punctuation">.</span>next <span class="token operator">=</span> list1\n            list1 <span class="token operator">=</span> list1<span class="token punctuation">.</span>next\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            temp<span class="token punctuation">.</span>next <span class="token operator">=</span> list2\n            list2 <span class="token operator">=</span> list2<span class="token punctuation">.</span>next\n        <span class="token punctuation">}</span>\n        temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 出循环后继续串联</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>list1 <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        temp<span class="token punctuation">.</span>next <span class="token operator">=</span> list1\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>list2 <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        temp<span class="token punctuation">.</span>next <span class="token operator">=</span> list2\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> list3<span class="token punctuation">.</span>next\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 递归</span>\n\n<span class="token keyword">function</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>list1<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> list2<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 边界判断</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>list1 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> list2\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>list2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> list1\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">while</span><span class="token punctuation">(</span>list1 <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> list2 <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>list1<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> list2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            list1<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>list1<span class="token punctuation">.</span>next<span class="token punctuation">,</span> list2<span class="token punctuation">)</span>\n            <span class="token keyword">return</span> list1\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            list2<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>list1<span class="token punctuation">,</span> list2<span class="token punctuation">.</span>next<span class="token punctuation">)</span>\n            <span class="token keyword">return</span> list2\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 16);
const _hoisted_17 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_17);
}
const leetcode21_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "leetcode-21.html.vue"]]);
export {
  leetcode21_html as default
};