import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "_27-移除元素",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#_27-移除元素",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 27. 移除元素")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "nums",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "val",
  -1
  /* HOISTED */
);
const _hoisted_4 = {
  href: "https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "val",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "O(1)",
  -1
  /* HOISTED */
);
const _hoisted_7 = {
  href: "https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<p>元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。</p><p><strong>说明:</strong></p><p>为什么返回数值是整数，但输出的答案是数组呢?</p><p>请注意，输入数组是以**「引用」**方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。</p><p>你可以想象内部操作如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝\nint len = removeElement(nums, val);\n\n// 在函数里修改输入数组对于调用者是可见的。\n// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。\nfor (int i = 0; i &lt; len; i++) {\n    print(nums[i]);\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [3,2,2,3], val = 3\n输出：2, nums = [2,2]\n解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [0,1,2,2,3,0,4,2], val = 2\n输出：5, nums = [0,1,4,0,3]\n解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>0 &lt;= nums.length &lt;= 100</code></li><li><code>0 &lt;= nums[i] &lt;= 50</code></li><li><code>0 &lt;= val &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>由于题目不允许使用额外的数组空间，因此使用双指针来解题。</p><p>关键点在于：如何在一个数组中进行移除操作？</p><ul><li>可能会直接想到使用语言的API，但显然这没有什么意义</li><li>我们可以在数组中将所有元素进行分类，需要删除的元素放到一起即可</li><li>而分类实际上是元素进行交换</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">removeElement</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 双指针法</span>\n\n    <span class="token comment">// 边界判断</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> nums<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 定义左指针</span>\n    <span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token number">0</span>\n\n    <span class="token comment">// 定义右指针</span>\n    <span class="token keyword">let</span> r <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>\n\n    <span class="token comment">// 结束条件：l &gt; r</span>\n    <span class="token keyword">while</span><span class="token punctuation">(</span>l <span class="token operator">&lt;=</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      	<span class="token comment">// 需要删除的元素</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span>\n            nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span>\n            nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">=</span> temp\n            r<span class="token operator">--</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            l<span class="token operator">++</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n  	<span class="token comment">// 由于需要返回数组的新长度，其实在整个过程中，我们使用左指针来指定需要删除的元素</span>\n  	<span class="token comment">// 那么，实际上我们可以认为左指针代表的就是数组的新长度</span>\n    <span class="token keyword">return</span> l\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 17);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("给你一个数组 "),
      _hoisted_2,
      createTextVNode(" 和一个值 "),
      _hoisted_3,
      createTextVNode("，你需要 "),
      createBaseVNode("strong", null, [
        createBaseVNode("a", _hoisted_4, [
          createTextVNode("原地"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createTextVNode(" 移除所有数值等于 "),
      _hoisted_5,
      createTextVNode(" 的元素，并返回移除后数组的新长度。")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("不要使用额外的数组空间，你必须仅使用 "),
      _hoisted_6,
      createTextVNode(" 额外空间并 "),
      createBaseVNode("strong", null, [
        createBaseVNode("a", _hoisted_7, [
          createTextVNode("原地 "),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode("修改输入数组")
      ]),
      createTextVNode("。")
    ]),
    _hoisted_8
  ]);
}
const leetcode27_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "leetcode-27.html.vue"]]);
export {
  leetcode27_html as default
};
