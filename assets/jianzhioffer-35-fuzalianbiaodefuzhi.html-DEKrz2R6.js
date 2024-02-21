import { _ as _export_sfc, o as openBlock, c as createElementBlock, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="剑指-offer-35-复杂链表的复制" tabindex="-1"><a class="header-anchor" href="#剑指-offer-35-复杂链表的复制" aria-hidden="true">#</a> 剑指 Offer 35. 复杂链表的复制</h2><p>请实现 <code>copyRandomList</code> 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 <code>next</code> 指针指向下一个节点，还有一个 <code>random</code> 指针指向链表中的任意节点或者 <code>null</code>。</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/01/09/e1.png" alt="img"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]\n输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/01/09/e2.png" alt="img"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [[1,1],[2,1]]\n输出：[[1,1],[2,1]]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><p><strong><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/01/09/e3.png" alt="img"></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [[3,null],[3,0],[3,null]]\n输出：[[3,null],[3,0],[3,null]]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 4：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = []\n输出：[]\n解释：给定的链表为空（空指针），因此返回 null。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>-10000 &lt;= Node.val &lt;= 10000</code></li><li><code>Node.random</code> 为空（null）或指向链表中的节点。</li><li>节点数目不超过 1000 。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>思路：复制+拆分</p><ul><li>复制： <ul><li>A -&gt; B -&gt; C -&gt; D</li><li>进行复制节点：A -&gt; A&#39; -&gt; B -&gt; B&#39; -&gt; C -&gt; C&#39; -&gt; D -&gt; D&#39; -&gt; null</li><li>让复制节点互相指向 <ul><li>cur指向A节点，cur.random指向C节点</li><li>cur.next.random = cur.random.next，即A&#39; -&gt; C&#39;</li></ul></li></ul></li><li>拆分 <ul><li>由于原节点和复制节点没有指向的问题，也就是在个指个的</li><li>那么，就可以拆分成两个链表：原节点链表和复制节点链表 <ul><li>A -&gt; B -&gt; C -&gt; D</li><li>A&#39; -&gt; B&#39; -&gt; C&#39; -&gt; D&#39;</li></ul></li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">copyRandomList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 边界判断</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> head\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 复制链表节点</span>\n    <span class="token keyword">let</span> cur <span class="token operator">=</span> head\n    <span class="token keyword">while</span><span class="token punctuation">(</span>cur <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 保存后驱节点</span>\n        <span class="token keyword">let</span> next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next\n        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span>\n        cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">=</span> next\n        cur <span class="token operator">=</span> next\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 复制随机节点</span>\n    cur <span class="token operator">=</span> head\n    <span class="token keyword">while</span><span class="token punctuation">(</span>cur <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> newCur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next\n        newCur<span class="token punctuation">.</span>random <span class="token operator">=</span> cur<span class="token punctuation">.</span>random <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> cur<span class="token punctuation">.</span>random<span class="token punctuation">.</span>next\n        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 拆分</span>\n    <span class="token keyword">let</span> newHead <span class="token operator">=</span> head<span class="token punctuation">.</span>next\n    cur <span class="token operator">=</span> head\n    <span class="token comment">// 随机节点</span>\n    <span class="token keyword">let</span> curNew <span class="token operator">=</span> head<span class="token punctuation">.</span>next\n    <span class="token keyword">while</span><span class="token punctuation">(</span>cur <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next\n        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next\n        curNew<span class="token punctuation">.</span>next <span class="token operator">=</span> cur <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> cur<span class="token punctuation">.</span>next\n        curNew <span class="token operator">=</span> curNew<span class="token punctuation">.</span>next\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> newHead\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 19);
const _hoisted_20 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_20);
}
const jianzhioffer35Fuzalianbiaodefuzhi_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "jianzhioffer-35-fuzalianbiaodefuzhi.html.vue"]]);
export {
  jianzhioffer35Fuzalianbiaodefuzhi_html as default
};