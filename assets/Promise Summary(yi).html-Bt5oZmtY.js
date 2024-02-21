import { _ as _export_sfc, o as openBlock, c as createElementBlock, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="什么是promise" tabindex="-1"><a class="header-anchor" href="#什么是promise" aria-hidden="true">#</a> 什么是Promise？</h2><p>​ Promise是ES6中新规定的一门技术，是JavaScript中进行<strong>异步编程</strong>的新解决方案，当然，之前的<strong>旧方案是指：单纯使用回调函数</strong>。因此，Promise的出现很好地解决了&quot;回调地狱&quot;的情况。这么说，可能有点抽象。具体是指：1.从<strong>语法上</strong>来讲：<strong>Promise是一个构造函数</strong> 2.从<strong>功能上</strong>来讲：Promise对象<strong>用来封装一个异步操作</strong>并可以获取其成功或失败的结果</p><p>​ 常见的异步操作有：使用Node.js中的fs模块进行文件操作、数据库(MySQL/mongoDB)操作、Ajax进行网络请求、定时器等。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fs文件操作：\n  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&#39;./index.html&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\nAjax网络请求：\n  $<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/server&#39;</span><span class="token punctuation">,</span> <span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n定时器：\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 为什么上面用的是回调函数，而不是Promise呢？</p><h2 id="promise相对于之前的回调函数有什么优势吗-面试知识点" tabindex="-1"><a class="header-anchor" href="#promise相对于之前的回调函数有什么优势吗-面试知识点" aria-hidden="true">#</a> Promise相对于之前的回调函数有什么优势吗？<strong>(面试知识点)</strong></h2><ol><li><h4 id="promise支持链式调用-可以解决回调地狱问题" tabindex="-1"><a class="header-anchor" href="#promise支持链式调用-可以解决回调地狱问题" aria-hidden="true">#</a> Promise<strong>支持链式调用</strong>，<strong>可以解决回调地狱问题</strong></h4><h5 id="什么是回调地狱" tabindex="-1"><a class="header-anchor" href="#什么是回调地狱" aria-hidden="true">#</a> 什么是回调地狱？</h5><p>​ 回调地狱即是<strong>回调函数嵌套使用</strong>，<strong>外部回调函数异步执行的结果</strong>是<strong>嵌套的回调函数执行的条件</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">asyncFunc1</span><span class="token punctuation">(</span>opt<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arg1</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n   <span class="token function">asyncFunc2</span><span class="token punctuation">(</span>opt<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arg2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">asyncFunc3</span><span class="token punctuation">(</span>opt<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arg3</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n         <span class="token function">asyncFunc4</span><span class="token punctuation">(</span>opt<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arg4</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          <span class="token operator">...</span><span class="token operator">...</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="回调地狱的缺点" tabindex="-1"><a class="header-anchor" href="#回调地狱的缺点" aria-hidden="true">#</a> 回调地狱的缺点？</h5><p>​ 不便于阅读、不便于异常处理</p></li><li><h4 id="指定回调函数的方式更加灵活" tabindex="-1"><a class="header-anchor" href="#指定回调函数的方式更加灵活" aria-hidden="true">#</a> <strong>指定回调函数的方式更加灵活</strong></h4></li></ol><p>​ 使用<strong>旧方式</strong>时，<strong>必须在启动异步任务前指定</strong>；而Promise，不需要，其启动过程：启动异步任务 =&gt; <strong>返回Promise对象</strong> =&gt; <strong>给Promise对象绑定回调函数</strong>(甚至可以在异步任务结束后指定/多个)</p><p>​ 这里举个例子：使用Promise模拟抽奖</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\n   <span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">&quot;btn&quot;</span><span class="token operator">&gt;</span>点击抽奖<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n   <span class="token doc-comment comment">/**\n    *  模拟需求：点击按钮，1s后显示是否中奖(30%中奖率)，若中奖则弹出&quot;恭喜中奖&quot;；反正，则弹出&quot;再接再厉&quot;\n    */</span>\n\n    <span class="token comment">// 生成随机数</span>\n    <span class="token keyword">function</span> <span class="token function">rand</span><span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n       <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token number">1.</span>传统方法\n    <span class="token keyword">const</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n       <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n         <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token function">rand</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n         <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">30</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;恭喜中奖&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n         <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;再接再厉&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n    <span class="token number">2</span><span class="token punctuation">.</span>Promise\n      <span class="token comment">// 实例化Promise时，需要传入一个回调函数，并且函数的形参也是函数；即resolve, reject是函数类型的数据</span>\n    btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n       <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n            <span class="token comment">// 处理异步操作</span>\n            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n              <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token function">rand</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n              <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">30</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                 <span class="token function">resolve</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">-</span><span class="token operator">&gt;</span> 执行resolve函数，将Promise对象设置为fulfilled（resolved）状态（已成功），可以进行传参\n              <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                 <span class="token function">reject</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">-</span><span class="token operator">&gt;</span> 执行reject函数，将Promise对象设置为rejected状态（已失败），可以进行传参\n              <span class="token punctuation">}</span>\n           <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n       <span class="token comment">// 执行了相应的函数并不代表能给出对应的内容，只能代表当前Promise对象处于哪种状态</span>\n       <span class="token comment">// 想要得到结果，必须调用Promise对象的then方法。同样，then方法的参数也是两个函数类型数据，分别对应Promise对象处于resolved状态和rejected状态</span>\n       p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;恭喜中奖，中奖号码是&#39;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n       <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;再接再厉，号码是&#39;</span> <span class="token operator">+</span> reason<span class="token punctuation">)</span><span class="token punctuation">;</span>\n       <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 10);
const _hoisted_11 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_11);
}
const Promise_Summary_yi__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Promise Summary(yi).html.vue"]]);
export {
  Promise_Summary_yi__html as default
};