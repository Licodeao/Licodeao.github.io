import { _ as _export_sfc, o as openBlock, c as createElementBlock, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="_19-删除链表的倒数第n个结点" tabindex="-1"><a class="header-anchor" href="#_19-删除链表的倒数第n个结点" aria-hidden="true">#</a> 19. 删除链表的倒数第N个结点</h2><p>给你一个链表，删除链表的倒数第 <code>n</code> 个结点，并且返回链表的头结点。</p><p><strong>示例 1：</strong></p><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/remove_ex1.jpg" alt="img"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2,3,4,5], n = 2\n输出：[1,2,3,5]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1], n = 1\n输出：[]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2], n = 1\n输出：[1]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>链表中结点的数目为 <code>sz</code></li><li><code>1 &lt;= sz &lt;= 30</code></li><li><code>0 &lt;= Node.val &lt;= 100</code></li><li><code>1 &lt;= n &lt;= sz</code></li></ul><p>**进阶：**你能尝试使用一趟扫描实现吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题和之前返回中间结点的题一样，同样可以使用快慢指针和统计节点个数的方法来做。</p><p>但在这道题中，使用统计节点个数的方法来做会更简单一点，因为要删除链表中的节点是需要找到其前驱节点的。</p><p>如果使用快慢指针来做的话，相当于快指针先走k-1步。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 快慢指针</span>\n\n<span class="token keyword">function</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 边界判断</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> head\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">let</span> fast <span class="token operator">=</span> head\n    <span class="token keyword">let</span> slow <span class="token operator">=</span> head\n\n    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 如果fast为空，表示删除的是头结点</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">.</span>next\n        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">while</span><span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next\n        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 此时快指针已经走完了，通过慢指针来删除第n个节点</span>\n    slow<span class="token punctuation">.</span>next <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next\n\n    <span class="token keyword">return</span> head\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 统计节点个数</span>\n\n<span class="token keyword">function</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 边界判断</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> head\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 统计节点个数</span>\n    <span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span>\n    <span class="token comment">// 借助临时变量来遍历链表</span>\n    <span class="token keyword">let</span> h <span class="token operator">=</span> head\n\n    <span class="token keyword">while</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        k<span class="token operator">++</span>\n        h <span class="token operator">=</span> h<span class="token punctuation">.</span>next\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 第index节点，即为需要删除的节点</span>\n    <span class="token keyword">let</span> index <span class="token operator">=</span> k <span class="token operator">-</span> n <span class="token operator">+</span> <span class="token number">1</span>\n    <span class="token comment">// index节点的前驱节点</span>\n    <span class="token keyword">let</span> pre <span class="token operator">=</span> head\n\n    <span class="token comment">// 删除的是第一个节点时</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">.</span>next\n\n    <span class="token comment">// 寻找需要删除的节点</span>\n    <span class="token keyword">while</span><span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        index<span class="token operator">--</span>\n        pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 进行删除</span>\n    pre<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next\n\n    <span class="token keyword">return</span> head\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 18);
const _hoisted_19 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_19);
}
const leetcode19_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "leetcode-19.html.vue"]]);
export {
  leetcode19_html as default
};