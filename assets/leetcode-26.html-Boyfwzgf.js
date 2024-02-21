import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "_26-删除有序数组中的重复项",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#_26-删除有序数组中的重复项",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 26. 删除有序数组中的重复项")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "升序排列",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "nums",
  -1
  /* HOISTED */
);
const _hoisted_4 = {
  href: "http://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "只出现一次",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "相对顺序",
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "一致",
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "nums",
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<p>考虑 <code>nums</code> 的唯一元素的数量为 <code>k</code> ，你需要做以下事情确保你的题解可以被通过：</p><ul><li>更改数组 <code>nums</code> ，使 <code>nums</code> 的前 <code>k</code> 个元素包含唯一元素，并按照它们最初在 <code>nums</code> 中出现的顺序排列。<code>nums</code> 的其余元素与 <code>nums</code> 的大小不重要。</li><li>返回 <code>k</code> 。</li></ul><p><strong>判题标准:</strong></p><p>系统会用下面的代码来测试你的题解:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int[] nums = [...]; // 输入数组\nint[] expectedNums = [...]; // 长度正确的期望答案\n\nint k = removeDuplicates(nums); // 调用\n\nassert k == expectedNums.length;\nfor (int i = 0; i &lt; k; i++) {\n    assert nums[i] == expectedNums[i];\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果所有断言都通过，那么您的题解将被 <strong>通过</strong>。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [1,1,2]\n输出：2, nums = [1,2,_]\n解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [0,0,1,1,1,2,2,3,3,4]\n输出：5, nums = [0,1,2,3,4]\n解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 3 * 104</code></li><li><code>-104 &lt;= nums[i] &lt;= 104</code></li><li><code>nums</code> 已按 <strong>升序</strong> 排列</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>使用快慢指针进行解题</li><li>定义一个慢指针p1指向第一个值，快指针p2指向第二个值</li><li>当p2小于数组长度时，进行遍历；即终止条件为p2大于数组长度</li><li>如果p1指向的元素不等于p2指向的元素，将慢指针p1向右移动一位，同时将p1指向的元素替换成p2指向的元素，从而删除了一个相同的元素</li><li>如果p1指向的元素等于p2指向的元素，就将快指针p2向右移动一位</li><li>直到遍历完，此时[0, p1]区间就是数组中所有未重复的元素，返回p1+1；因为最开始p1是从0开始的，所以最终结果需要+1</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">removeDuplicates</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> nums<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>\n    \n    <span class="token comment">// 定义慢指针，指向第一个元素</span>\n    <span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token number">0</span>\n\n    <span class="token comment">// 定义快指针，指向第二个元素</span>\n    <span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token number">1</span>\n\n    <span class="token comment">// 终止条件：p2 &gt; nums.length</span>\n    <span class="token keyword">while</span><span class="token punctuation">(</span>p2 <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">!==</span> nums<span class="token punctuation">[</span>p2<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            p1<span class="token operator">++</span>\n            nums<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>p2<span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n        p2<span class="token operator">++</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> p1<span class="token operator">+</span><span class="token number">1</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 15);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("给你一个 "),
      _hoisted_2,
      createTextVNode(" 的数组 "),
      _hoisted_3,
      createTextVNode(" ，请你**"),
      createBaseVNode("a", _hoisted_4, [
        createTextVNode(" 原地"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("** 删除重复出现的元素，使每个元素 "),
      _hoisted_5,
      createTextVNode(" ，返回删除后数组的新长度。元素的 "),
      _hoisted_6,
      createTextVNode(" 应该保持 "),
      _hoisted_7,
      createTextVNode(" 。然后返回 "),
      _hoisted_8,
      createTextVNode(" 中唯一元素的个数。")
    ]),
    _hoisted_9
  ]);
}
const leetcode26_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "leetcode-26.html.vue"]]);
export {
  leetcode26_html as default
};
