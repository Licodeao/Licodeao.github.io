import { _ as _export_sfc, o as openBlock, c as createElementBlock, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>忽然发现近一个月没有更新博客了，难道是太忙了？可能是吧，每天都在赶需求，外加备战秋招，没有面试的时候，就做做测评，好像时间所剩无几了... 是啊，时间真快啊~ 转眼间已经实习了近3个月了，虽然累但逐渐喜欢上了目前的生活节奏，因为这里有充分的自由时间来做自己喜欢的事情，这3个月里，收获了太多，以至于像个老油条一样了...</p><p>实习期间，面了几家提前批，突然就很享受这种面试状态，在面试复盘中，我能够回到当初面试时的感觉，能够回忆出面试官的问题以及我的回答，这就导致我每次面试完都能够准确无误地梳理出每个问题，以及针对性地解决那些不会或答的不好的问题。虽然将这些问题解决后梳理在了思维导图上，但难以详细地去解释为什么（因为篇幅有限），并且思维导图的记录也只是某个点，无法扩散到面。所以，想了想还是应该开个分类去记录以及长篇大论一下原因，这样如果看思维导图时，某个点想不起来了就可以去对应的文章中去看。</p><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><ul><li><p>实现：并发数为2的scheduler调度算法，你需要实现一个addTask函数，以实现以下输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>addTask(1000, &quot;1&quot;)\n\naddTask(500, &quot;2&quot;)\n\naddTask(300, &quot;3&quot;)\n\naddTask(400, &quot;4&quot;)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>开始时，执行两个任务 1、2</p></li><li><p>500ms时，2执行完毕，3加入</p></li><li><p>800ms时，3执行完毕，4加入</p></li><li><p>1000ms时，1执行完毕</p></li><li><p>1400ms时，4执行完毕</p></li><li><p>输出：2 - 3 - 1 - 4</p></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>观察题目，&quot;并发&quot;、&quot;调度算法&quot;两个词异常亮眼，那么它们是什么？</p><h3 id="什么是并发" tabindex="-1"><a class="header-anchor" href="#什么是并发" aria-hidden="true">#</a> 什么是并发？</h3><blockquote><p>并发是指系统中多个任务或操作在<strong>同一时间段</strong>内执行</p></blockquote><p>那么题目中的并发数指定了在同一时间段内，有相应数量的任务或操作执行</p><h3 id="什么是调度算法" tabindex="-1"><a class="header-anchor" href="#什么是调度算法" aria-hidden="true">#</a> 什么是调度算法？</h3><blockquote><p>调度算法指用于决定任务或作业执行顺序和资源分配</p></blockquote><h3 id="调度算法有哪些" tabindex="-1"><a class="header-anchor" href="#调度算法有哪些" aria-hidden="true">#</a> 调度算法有哪些？</h3><ul><li>先来先服务（FCFS）：按照任务到达的顺序进行调度，先到达的任务先执行</li><li>最短作业优先（SJF）：在每个时间点选择执行时间最短的任务进行调度</li><li>优先级调度：为每个任务分配优先级，并按照优先级调用任务</li><li>时间片轮转：将时间划分为固定的时间片，每个任务在一个时间片内执行，然后切换到下一个任务</li><li>多级反馈队列：将任务划分为不同的队列，每个队列具有不同的优先级和调度策略，任务根据优先级和队列的规则进行调度</li></ul><p>那么题目中的调度算法属于哪一种？观察输出结果，能看出时间最短的先调度，故属于最短作业优先（SJF）</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">TaskScheduler</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 最大并发数</span>\n  maxConcurrency<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  <span class="token comment">// 任务队列</span>\n  tasks<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span> delay<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> taskName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token comment">// 正在执行的任务数</span>\n  runningTasks<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n\n  <span class="token function">constructor</span><span class="token punctuation">(</span>maxConcurrency<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 初始化</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>maxConcurrency <span class="token operator">=</span> maxConcurrency<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>tasks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>runningTasks <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 添加任务</span>\n  <span class="token function">addTask</span><span class="token punctuation">(</span>delay<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> taskName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>tasks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> delay<span class="token punctuation">,</span> taskName <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">scheduleTasks</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 执行任务</span>\n  <span class="token keyword">async</span> <span class="token function">executeTask</span><span class="token punctuation">(</span>task<span class="token operator">:</span> <span class="token punctuation">{</span> delay<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> taskName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> task<span class="token punctuation">.</span>delay<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>task<span class="token punctuation">.</span>taskName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>runningTasks <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">scheduleTasks</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 调度任务</span>\n  <span class="token function">scheduleTasks</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>runningTasks <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxConcurrency <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tasks<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 取出任务(用数组模拟队列)</span>\n      <span class="token keyword">const</span> task <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tasks<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>task<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>runningTasks <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">executeTask</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> scheduler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TaskScheduler</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nscheduler<span class="token punctuation">.</span><span class="token function">addTask</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nscheduler<span class="token punctuation">.</span><span class="token function">addTask</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nscheduler<span class="token punctuation">.</span><span class="token function">addTask</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nscheduler<span class="token punctuation">.</span><span class="token function">addTask</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 16);
const _hoisted_17 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_17);
}
const shixianyigediaoduqi_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "shixianyigediaoduqi.html.vue"]]);
export {
  shixianyigediaoduqi_html as default
};