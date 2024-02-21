import { _ as _export_sfc, o as openBlock, c as createElementBlock, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="_142-环形链表-ii" tabindex="-1"><a class="header-anchor" href="#_142-环形链表-ii" aria-hidden="true">#</a> 142. 环形链表 II</h2><p>给定一个链表的头节点 <code>head</code> ，返回链表开始入环的第一个节点。 <em>如果链表无环，则返回 <code>null</code>。</em></p><p>如果链表中有某个节点，可以通过连续跟踪 <code>next</code> 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 <code>pos</code> 来表示链表尾连接到链表中的位置（<strong>索引从 0 开始</strong>）。如果 <code>pos</code> 是 <code>-1</code>，则在该链表中没有环。<strong>注意：<code>pos</code> 不作为参数进行传递</strong>，仅仅是为了标识链表的实际情况。</p><p><strong>不允许修改</strong> 链表。</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png" alt="img"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [3,2,0,-4], pos = 1\n输出：返回索引为 1 的链表节点\n解释：链表中有一个环，其尾部连接到第二个节点。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png" alt="img"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2], pos = 0\n输出：返回索引为 0 的链表节点\n解释：链表中有一个环，其尾部连接到第一个节点。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png" alt="img"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1], pos = -1\n输出：返回 null\n解释：链表中没有环。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>链表中节点的数目范围在范围 <code>[0, 104]</code> 内</li><li><code>-105 &lt;= Node.val &lt;= 105</code></li><li><code>pos</code> 的值为 <code>-1</code> 或者链表中的一个有效索引</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>找到指针相交的点，先查看是否成环，然后再统计节点个数，最后一样的套路：让一个指针先走n（即节点个数）步，然后再同时走，最后会发现指针会在环的入口处相遇，返回慢指针即可。可以画个小环模拟一下，确实是这样的。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">detectCycle</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 边界条件：空或自成环</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">===</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> head\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 找出指针相交的点</span>\n    <span class="token keyword">let</span> fast <span class="token operator">=</span> head\n    <span class="token keyword">let</span> slow <span class="token operator">=</span> head\n    <span class="token keyword">while</span><span class="token punctuation">(</span>fast <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next\n        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>fast <span class="token operator">===</span> slow<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">break</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 统计节点个数前，判断是不是环</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>fast <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> fast<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">null</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 统计节点个数</span>\n    <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">1</span>\n    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// slow停止，让fast去走，统计个数</span>\n        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next\n        <span class="token keyword">if</span><span class="token punctuation">(</span>fast <span class="token operator">===</span> slow<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">break</span>\n        <span class="token punctuation">}</span>\n        n<span class="token operator">++</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 找入口，指针会在入口处相遇</span>\n    <span class="token keyword">let</span> prev <span class="token operator">=</span> head\n    <span class="token keyword">let</span> last <span class="token operator">=</span> head\n    <span class="token comment">// 让last先走n步</span>\n    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        last <span class="token operator">=</span> last<span class="token punctuation">.</span>next\n    <span class="token punctuation">}</span>\n	<span class="token comment">// 同时走</span>\n    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 判断是否已经相遇，并且这时候相遇是在入口处，返回prev即可</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>last <span class="token operator">===</span> prev<span class="token punctuation">)</span> <span class="token keyword">return</span> prev\n        last <span class="token operator">=</span> last<span class="token punctuation">.</span>next\n        prev <span class="token operator">=</span> prev<span class="token punctuation">.</span>next\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 18);
const _hoisted_19 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_19);
}
const leetcode142_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "leetcode-142.html.vue"]]);
export {
  leetcode142_html as default
};