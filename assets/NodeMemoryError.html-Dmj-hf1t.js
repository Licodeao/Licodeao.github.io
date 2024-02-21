import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, d as createVNode, e as withCtx, b as createTextVNode, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="前瞻" tabindex="-1"><a class="header-anchor" href="#前瞻" aria-hidden="true">#</a> 前瞻</h2><p>昨天，在公司项目中使用写的 calculate-cn-node 脚本时，出现了一个内存超标的错误，于是晚上回去进行了优化，总结出了很多问题。</p><p>借着这个机会，也好好地梳理一下<code>JavaScript Garbage Collection</code>(GC)和<code>V8 Engine垃圾回收机制</code>。</p><p>以下是内存超标版本的源码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> createCsvWriter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;csv-writer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>createObjectCsvWriter<span class="token punctuation">;</span>\n<span class="token keyword">const</span> Segment <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;segment&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> chineseRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\u4e00-\\u9fa5]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> matchCnStringLiteral <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&#39;[\\u4e00-\\u9fa5]+&#39;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> commentRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\/</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> consoleRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">console\\..*</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">calculateCnNode</span><span class="token punctuation">(</span><span class="token parameter">directory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> segment <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Segment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  segment<span class="token punctuation">.</span><span class="token function">useDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> files <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>directory<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> files<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> file <span class="token operator">=</span> files<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>directory<span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> stats <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">statSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>stats<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">calculateCnNode</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>stats<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> fileContent <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">const</span> lines <span class="token operator">=</span> fileContent<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\r?\\n</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> lines<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> line <span class="token operator">=</span> lines<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>commentRegex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>consoleRegex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">const</span> chineseMatches <span class="token operator">=</span> line<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>chineseRegex<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span>chineseMatches<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">const</span> chineseString <span class="token operator">=</span> chineseMatches<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">const</span> words <span class="token operator">=</span> segment<span class="token punctuation">.</span><span class="token function">doSegment</span><span class="token punctuation">(</span>chineseString<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              <span class="token literal-property property">simple</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n              <span class="token literal-property property">stripPunctuation</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">const</span> wordIndex <span class="token operator">=</span> line<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            info<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n              <span class="token literal-property property">char</span><span class="token operator">:</span> words<span class="token punctuation">,</span>\n              <span class="token literal-property property">line</span><span class="token operator">:</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>\n              <span class="token literal-property property">column</span><span class="token operator">:</span> wordIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>\n              <span class="token literal-property property">file</span><span class="token operator">:</span> filePath<span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span>\n          <span class="token keyword">const</span> stringLiteralMatches <span class="token operator">=</span> line<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>matchCnStringLiteral<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span>stringLiteralMatches<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> match <span class="token keyword">of</span> stringLiteralMatches<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              <span class="token keyword">const</span> chineseString <span class="token operator">=</span> match<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n              <span class="token keyword">const</span> words <span class="token operator">=</span> segment<span class="token punctuation">.</span><span class="token function">doSegment</span><span class="token punctuation">(</span>chineseString<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n                <span class="token literal-property property">simple</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">stripPunctuation</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n              <span class="token keyword">const</span> wordIndex <span class="token operator">=</span> line<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">;</span>\n              info<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                <span class="token literal-property property">char</span><span class="token operator">:</span> words<span class="token punctuation">,</span>\n                <span class="token literal-property property">line</span><span class="token operator">:</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">column</span><span class="token operator">:</span> wordIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">file</span><span class="token operator">:</span> filePath<span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> input <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> output <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token function">calculateCnNode</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> csvWriter <span class="token operator">=</span> <span class="token function">createCsvWriter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">path</span><span class="token operator">:</span> output<span class="token punctuation">,</span>\n  <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;char&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Character&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Line&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;column&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Column&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;File&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ncsvWriter<span class="token punctuation">.</span><span class="token function">writeRecords</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;CSV file written successfully&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出错后，晚上回家分析了一下，发现了几点问题：</p><ul><li>Segment 对象被放在了函数中创建</li><li>在遇见大量数据或文件时，采用同步读取文件的方式会阻塞主线程，从而导致效率过低</li><li>所有的结果被写入到一个数组中，少量数据时数组可以支撑；在大量数据下，数组显然不是一个好的存储方式</li><li>指定遍历的文件夹下可能会存在大量的资源文件（如图片、样式、图标等等），读取这些文件会造成乱码与程序阻塞等问题</li></ul><p>在发现上述问题后，对代码进行了优化，并一一对上述问题进行解决：</p><ul><li>Segment 对象移到全局中，只创建一次</li><li>采用异步或者流式的方式来读取文件</li><li>采用流式的方式将结果写入文件</li><li>避免遍历上述提到的资源文件</li></ul><p>优化后的代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> createCsvWriter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;csv-writer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>createObjectCsvWriter<span class="token punctuation">;</span>\n<span class="token keyword">const</span> Segment <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;segment&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> chineseRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\u4e00-\\u9fa5]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> matchCnStringLiteral <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&#39;[\\u4e00-\\u9fa5]+&#39;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> commentRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\/</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> consoleRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">console\\..*</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> segment <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Segment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nsegment<span class="token punctuation">.</span><span class="token function">useDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token doc-comment comment">/**\n *\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">directory</span> 需要遍历的文件夹\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">csvWriter</span> 创建的csvWriter对象\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">avoidFiles</span> 需要避免遍历的文件\n * <span class="token keyword">@returns</span>\n */</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">calculateCnNode</span><span class="token punctuation">(</span><span class="token parameter">directory<span class="token punctuation">,</span> csvWriter<span class="token punctuation">,</span> avoidFiles</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> baseName <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>directory<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>avoidFiles<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>baseName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> files <span class="token operator">=</span> <span class="token keyword">await</span> fs<span class="token punctuation">.</span>promises<span class="token punctuation">.</span><span class="token function">readdir</span><span class="token punctuation">(</span>directory<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> files<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> file <span class="token operator">=</span> files<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>directory<span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> stats <span class="token operator">=</span> <span class="token keyword">await</span> fs<span class="token punctuation">.</span>promises<span class="token punctuation">.</span><span class="token function">stat</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>stats<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">await</span> <span class="token function">calculateCnNode</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> csvWriter<span class="token punctuation">,</span> avoidFiles<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>stats<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> fileContent <span class="token operator">=</span> <span class="token keyword">await</span> fs<span class="token punctuation">.</span>promises<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">const</span> lines <span class="token operator">=</span> fileContent<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\r?\\n</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> lines<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> line <span class="token operator">=</span> lines<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>commentRegex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>consoleRegex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">const</span> chineseMatches <span class="token operator">=</span> line<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>chineseRegex<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span>chineseMatches<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">const</span> chineseString <span class="token operator">=</span> chineseMatches<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">const</span> words <span class="token operator">=</span> segment<span class="token punctuation">.</span><span class="token function">doSegment</span><span class="token punctuation">(</span>chineseString<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              <span class="token literal-property property">simple</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n              <span class="token literal-property property">stripPunctuation</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">const</span> wordIndex <span class="token operator">=</span> line<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">await</span> csvWriter<span class="token punctuation">.</span><span class="token function">writeRecords</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n              <span class="token punctuation">{</span>\n                <span class="token literal-property property">char</span><span class="token operator">:</span> words<span class="token punctuation">,</span>\n                <span class="token literal-property property">line</span><span class="token operator">:</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">column</span><span class="token operator">:</span> wordIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">file</span><span class="token operator">:</span> filePath<span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span>\n          <span class="token keyword">const</span> stringLiteralMatches <span class="token operator">=</span> line<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>matchCnStringLiteral<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span>stringLiteralMatches<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> match <span class="token keyword">of</span> stringLiteralMatches<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              <span class="token keyword">const</span> chineseString <span class="token operator">=</span> match<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n              <span class="token keyword">const</span> words <span class="token operator">=</span> segment<span class="token punctuation">.</span><span class="token function">doSegment</span><span class="token punctuation">(</span>chineseString<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n                <span class="token literal-property property">simple</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">stripPunctuation</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n              <span class="token keyword">const</span> wordIndex <span class="token operator">=</span> line<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">;</span>\n              <span class="token keyword">await</span> csvWriter<span class="token punctuation">.</span><span class="token function">writeRecords</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                  <span class="token literal-property property">char</span><span class="token operator">:</span> words<span class="token punctuation">,</span>\n                  <span class="token literal-property property">line</span><span class="token operator">:</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>\n                  <span class="token literal-property property">column</span><span class="token operator">:</span> wordIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>\n                  <span class="token literal-property property">file</span><span class="token operator">:</span> filePath<span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;当前已完成一个分词操作~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> input <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> output <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> avoidArray <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> csvWriter <span class="token operator">=</span> <span class="token function">createCsvWriter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">path</span><span class="token operator">:</span> output<span class="token punctuation">,</span>\n  <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;char&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Character&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Line&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;column&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Column&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;File&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ncsvWriter<span class="token punctuation">.</span><span class="token function">writeRecords</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">calculateCnNode</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> csvWriter<span class="token punctuation">,</span> avoidArray<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;CSV file written successfully&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实，关于避免遍历的文件可以扩展的更多，取决于项目以及你的需要。</p><p>回到出现问题的关键，在于内存。</p><p>当我们创建一个变量或者一个对象时，都会在内存中开辟一个空间去存储这些被创建的变量。但这个空间并不是无限大，特别是栈空间，在 V8 中栈空间的大小是被限制了的，具体可以去看之前的 V8 文章。不是无限大，就意味着如果我们没有及时清除那些没有使用的变量，那么当之后再创建新的变量时，就没有足够的空间去容纳，这就会导致内存超标。</p><p>Node 的内存超标问题可以将 Node 的内存限制直接调大，避免达到内存上限。但我觉得这只是一种临时解决方案，并不能一劳永逸或者说从根本上解决问题。</p><h2 id="v8-垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#v8-垃圾回收机制" aria-hidden="true">#</a> V8 垃圾回收机制</h2><p>实际上，JavaScript Garbage Collection 的一切工作都是交给 V8 的垃圾回收机制来处理的。</p><p>在 V8 中存在着两个垃圾回收器，存在两个是因为这样能针对于不同的场景来更高效地回收垃圾。</p><h3 id="垃圾数据是如何产生的" tabindex="-1"><a class="header-anchor" href="#垃圾数据是如何产生的" aria-hidden="true">#</a> 垃圾数据是如何产生的</h3><p>频繁地使用数据时，这些数据都会被放到栈和堆中。</p><p>常用的方式是，在内存中开辟一块空间，使用这块空间，在不需要的时候回收这块空间。</p><p>之前的文章提到过，栈空间一般存储的是函数调用，而堆空间一般存储的则是对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>licodeao <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nwindow<span class="token punctuation">.</span>licodeao<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint16Array</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例如，执行上述代码时，会先在 window 对象上创建一个 licodeao 属性，并在堆空间中创建一个空对象，将该空对象的地址指向了 window.licodeao 属性。随后又创建了一个空间大小为 100 的数组，并将地址指向了 licodeao.a 的属性值。</p><p>此时的内存布局：</p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/6538f7000e5d22df4848260d8a2b334.png" style="width:100%;"><p>栈中保存了 window 的指针，可以通过该指针访问到 window 对象，通过 window 对象可以访问到 licodeao 对象，通过 licodeao 对象可以访问到 a 对象（数组也是对象嘛~）</p><p>如果将之前的代码更改成：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>licodeao<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么此时 a 对象就不会指向之前的数组对象了，而是会指向了一个空对象，那么此时堆中的数组对象就变成了垃圾数据，因为无法从一个根对象遍历到这个数组对象了。此时，V8 的垃圾回收器就起作用了。</p><h3 id="垃圾回收算法" tabindex="-1"><a class="header-anchor" href="#垃圾回收算法" aria-hidden="true">#</a> 垃圾回收算法</h3><blockquote><p>垃圾回收的过程大致分为以下几步：</p></blockquote>', 32);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "V8 是如何判断一个对象是否是活动对象还是非活动对象的呢？")
  ],
  -1
  /* HOISTED */
);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "堆中的对象是否是活动对象",
  -1
  /* HOISTED */
);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "可访问性算法具体是如何执行的呢？")
  ],
  -1
  /* HOISTED */
);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "在所有的标记完成后，统一地清理内存中所有被标记为可回收的对象")
  ],
  -1
  /* HOISTED */
);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "当内存中存在着大量的内存碎片，如果需要分配较大的连续内存时，可能会出现内存不足的情况。",
  -1
  /* HOISTED */
);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "垃圾回收器",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#垃圾回收器",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 垃圾回收器")
  ],
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "前面提到，V8 目前采用两个垃圾回收器：",
  -1
  /* HOISTED */
);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "代际假说",
  -1
  /* HOISTED */
);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "表明了很多对象在内存中存在的时间很短（die young）",
  -1
  /* HOISTED */
);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "代际假说有两个特点：",
  -1
  /* HOISTED */
);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "如定义在函数或者块级作用域中的变量，当函数或者代码块执行结束时，作用域中的变量就会被销毁。",
  -1
  /* HOISTED */
);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "如全局的 window、DOM、Web API 等对象",
  -1
  /* HOISTED */
);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "V8 的垃圾回收策略就是基于该假说之上，如果只使用一个垃圾回收器，在优化大多数新对象时，很难优化到那些老对象，因此需要权衡各种场景，根据对象生命周期的不同，来使用不同的算法，以便达到最好的效果。因此，在 V8 中有两个垃圾回收器，并且把堆分为了新生代和老生代两个区域，新生代中存放的是生存时间短的对象，老生代中存放的是生存时间长的对象。",
  -1
  /* HOISTED */
);
const _hoisted_46 = {
  id: "主垃圾回收器",
  tabindex: "-1"
};
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
  "a",
  {
    class: "header-anchor",
    href: "#主垃圾回收器",
    "aria-hidden": "true"
  },
  "#",
  -1
  /* HOISTED */
);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "主垃圾回收器（Major Garbage Collection）")
  ],
  -1
  /* HOISTED */
);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("一些大的对象会直接被分配到老生代中，因此"),
    /* @__PURE__ */ createBaseVNode("strong", null, "老生代中的对象有两个特点"),
    /* @__PURE__ */ createTextVNode("：")
  ],
  -1
  /* HOISTED */
);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "标记 - 清除（Mark - Sweep）",
  -1
  /* HOISTED */
);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "标记 - 清除（Mark - Sweep）算法又是什么？",
  -1
  /* HOISTED */
);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "让所有存活的对象都向一端移动，然后直接清理掉这一端之外的内存",
  -1
  /* HOISTED */
);
const _hoisted_53 = {
  id: "副垃圾回收器",
  tabindex: "-1"
};
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
  "a",
  {
    class: "header-anchor",
    href: "#副垃圾回收器",
    "aria-hidden": "true"
  },
  "#",
  -1
  /* HOISTED */
);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createTextVNode("副垃圾回收器（Minor Garbage Collection）- "),
      /* @__PURE__ */ createBaseVNode("strong", null, "Scavenger（又称为清道夫）")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "Scavenger 算法又是什么？")
  ],
  -1
  /* HOISTED */
);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "对象区域（from-space）",
  -1
  /* HOISTED */
);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "空闲区域（to-space）",
  -1
  /* HOISTED */
);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode(
  "img",
  {
    src: "https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/52e87bc600ef87f6fa21f6e5cf1fb20.jpg",
    width: "100%"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "对对象区域中的垃圾进行标记",
  -1
  /* HOISTED */
);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "把这些存活的对象复制到空闲区域中",
  -1
  /* HOISTED */
);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "把这些对象有序地排列起来",
  -1
  /* HOISTED */
);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "对象晋升策略",
  -1
  /* HOISTED */
);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "如何避免内存泄漏",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#如何避免内存泄漏",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 如何避免内存泄漏")
  ],
  -1
  /* HOISTED */
);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "尽管前端框架和浏览器已经帮助我们处理了常见的内存相关的问题，但是我们仍然有必要和义务去了解一些常见的内存泄漏问题以及龟波方式：",
  -1
  /* HOISTED */
);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("全局变量因为其存在时间长并且会存储在老生代区域中，最终由主垃圾回收器进行回收。正因为其存在时间长，过多的全局变量会导致内存占用增加，即老生代区域中可使用空间减少。为了避免整个问题，应该减少全局变量的使用，尽可能将变量限定在局部作用域中。如果确实需要使用全局变量，确保在使用完毕后将其设置为"),
    /* @__PURE__ */ createBaseVNode("code", null, "null"),
    /* @__PURE__ */ createTextVNode("，以便及时地进行垃圾回收和释放内存。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("使用定时器时，一定要在适当的时机手动清除定时器。如果忘记清除定时器，定时器的回调函数将会一直执行，可能导致内存泄漏。确保在不需要定时器时，使用"),
    /* @__PURE__ */ createBaseVNode("code", null, "clearTimeout"),
    /* @__PURE__ */ createTextVNode("和"),
    /* @__PURE__ */ createBaseVNode("code", null, "clearInterval"),
    /* @__PURE__ */ createTextVNode("主动清除定时器。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_68 = /* @__PURE__ */ createStaticVNode('<p>错误地使用闭包，可能会导致内存泄漏。当闭包中引用了外部函数的变量时，即使外部函数执行完毕，被引用的变量也不会被垃圾回收，直到闭包不再被引用。因此，避免创建不必要的闭包或确保在不需要的时候解除对闭包的引用，以便垃圾回收和释放内存。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ClosureFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token string">&quot;Data&quot;</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 闭包中引用了外部函数的data变量</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> closure <span class="token operator">=</span> <span class="token function">ClosureFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 当不再需要闭包时，解除对闭包的引用</span>\nclosure <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 2);
const _hoisted_70 = /* @__PURE__ */ createStaticVNode('<p>操作 DOM 元素时，确保在不需要使用它们时清除对 DOM 元素的引用。如果仍然保留对已经移除或隐藏的 DOM 元素的引用，这些被引用的 DOM 元素将无法被垃圾回收。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 手动清除引用</span>\nel <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 2);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("WeakSet 和 WeakMap 可以帮助我们避免内存泄漏，这两个数据结构采用弱引用，当对象没有其他引用时，垃圾回收机制会自动释放它们所占用的内存。那么，引入这个新的数据结构带来了什么好处呢？使用"),
    /* @__PURE__ */ createBaseVNode("code", null, "WeakSet"),
    /* @__PURE__ */ createTextVNode("和"),
    /* @__PURE__ */ createBaseVNode("code", null, "WeakMap"),
    /* @__PURE__ */ createTextVNode("可以减少手动清除引用的工作量。")
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("通过 GC Root 标记空间中的活动对象和非活动对象")
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_33,
        createBaseVNode("p", null, [
          createTextVNode("V8 采用的是"),
          createVNode(_component_font, { color: "blue" }, {
            default: withCtx(() => [
              createTextVNode("可访问性算法(reachability)")
            ]),
            _: 1
            /* STABLE */
          }),
          createTextVNode("来判断"),
          _hoisted_34
        ]),
        _hoisted_35,
        createBaseVNode("p", null, [
          createTextVNode("其实就是"),
          createVNode(_component_font, { color: "blue" }, {
            default: withCtx(() => [
              createTextVNode("以 GC Root 对象为起点，遍历 GC Root 中所有的对象")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("通过 GC Root 遍历到的对象，被认为是可访问的(reachable)")
              ]),
              _: 1
              /* STABLE */
            }),
            createTextVNode("，既然可访问到，那么必须保证这些对象应该在内存中保留。"),
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("可访问的对象也称为活动对象")
              ]),
              _: 1
              /* STABLE */
            }),
            createTextVNode("。")
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("通过 GC Root 遍历不到的对象，被认为是不可访问的(unreachable)")
              ]),
              _: 1
              /* STABLE */
            }),
            createTextVNode("，那么这些不能访问的对象就有可能被回收。"),
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("不可访问的对象也称为非活动对象")
              ]),
              _: 1
              /* STABLE */
            }),
            createTextVNode("。")
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("回收非活动对象占据的内存")
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_36
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("进行内存整理")
          ]),
          _: 1
          /* STABLE */
        }),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("在进行频繁地回收对象后，会造成内存中存在大量不连续空间，这些"),
            createVNode(_component_font, { color: "red" }, {
              default: withCtx(() => [
                createTextVNode("不连续的内存空间被称为内存碎片")
              ]),
              _: 1
              /* STABLE */
            }),
            createTextVNode("。")
          ]),
          _hoisted_37,
          createBaseVNode("li", null, [
            createTextVNode("因此，最后需要进行内存整理。但"),
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("这一步骤不一定是必需的（可选）")
              ]),
              _: 1
              /* STABLE */
            }),
            createTextVNode("，因为有的垃圾回收器（副垃圾回收器）不会产生内存碎片")
          ])
        ])
      ])
    ]),
    _hoisted_38,
    _hoisted_39,
    createBaseVNode("blockquote", null, [
      createVNode(_component_font, { color: "black" }, {
        default: withCtx(() => [
          createTextVNode("为什么会有两个垃圾回收器？")
        ]),
        _: 1
        /* STABLE */
      }),
      createBaseVNode("p", null, [
        createTextVNode("主要是受到了"),
        createVNode(_component_font, { color: "black" }, {
          default: withCtx(() => [
            _hoisted_40
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode("的影响，代际假说"),
        createVNode(_component_font, { color: "black" }, {
          default: withCtx(() => [
            _hoisted_41
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _hoisted_42,
      createBaseVNode("ol", null, [
        createBaseVNode("li", null, [
          createVNode(_component_font, { color: "blue" }, {
            default: withCtx(() => [
              createTextVNode("大部分对象在内存中的存在时间很短")
            ]),
            _: 1
            /* STABLE */
          }),
          _hoisted_43,
          createVNode(_component_font, { color: "lightblue" }, {
            default: withCtx(() => [
              createTextVNode("因此这一类对象一经分配内存，很快就会变得不可访问了")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_font, { color: "blue" }, {
            default: withCtx(() => [
              createTextVNode("不死的对象，会活的很久")
            ]),
            _: 1
            /* STABLE */
          }),
          _hoisted_44
        ])
      ]),
      _hoisted_45
    ]),
    createBaseVNode("p", null, [
      createTextVNode("新生代通常"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("只支持 1~8M")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("的容量， 而老生代支持的容量就很多了，对于这两个区域，V8 分别使用了不同的垃圾回收器，以便高效地实现垃圾回收。")
    ]),
    createBaseVNode("h4", _hoisted_46, [
      _hoisted_47,
      createTextVNode(),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("主垃圾回收器")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_48,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createTextVNode("主要"),
          createVNode(_component_font, { color: "blue" }, {
            default: withCtx(() => [
              createTextVNode("负责老生代")
            ]),
            _: 1
            /* STABLE */
          }),
          createTextVNode("的垃圾回收")
        ])
      ]),
      createBaseVNode("li", null, [
        _hoisted_49,
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("对象占用空间大")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("对象存活时间长")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createTextVNode("由于老生代中的对象比较大，若要在老生代中使用 Scavenger 算法进行垃圾回收，显然不是一个合适的办法，因为复制这些大的对象将会花费比较多的时间，从而导致回收执行效率不高，同时还会浪费一半的空间。因此，主垃圾回收器采用"),
          createVNode(_component_font, { color: "red" }, {
            default: withCtx(() => [
              _hoisted_50
            ]),
            _: 1
            /* STABLE */
          }),
          createTextVNode("算法来进行垃圾回收的。")
        ]),
        createBaseVNode("blockquote", null, [
          _hoisted_51,
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_font, { color: "blue" }, {
                default: withCtx(() => [
                  createTextVNode("标记过程阶段")
                ]),
                _: 1
                /* STABLE */
              }),
              createTextVNode("：从一组根元素开始，递归遍历这组根元素，在这个遍历过程中，能到达的元素称为活动对象，没有到达的元素就可以判断为垃圾数据了。")
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_font, { color: "blue" }, {
                default: withCtx(() => [
                  createTextVNode("垃圾清除阶段：")
                ]),
                _: 1
                /* STABLE */
              }),
              createTextVNode("它和副垃圾回收器的垃圾清除过程完全不同，"),
              createVNode(_component_font, { color: "red" }, {
                default: withCtx(() => [
                  createTextVNode("主垃圾回收器会直接将被标记为垃圾的数据清理掉")
                ]),
                _: 1
                /* STABLE */
              }),
              createTextVNode("。")
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_font, { color: "blue" }, {
                default: withCtx(() => [
                  createTextVNode("对垃圾数据进行标记，然后清除，这就是标记 - 清除算法")
                ]),
                _: 1
                /* STABLE */
              }),
              createTextVNode("。")
            ])
          ])
        ]),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("对一块内存多次执行标记 - 清除算法后，会产生大量不连续的内存碎片")
              ]),
              _: 1
              /* STABLE */
            }),
            createTextVNode("，碎片如果过多，会导致大对象无法分配到足够的连续内存，于是又"),
            createVNode(_component_font, { color: "lightblue" }, {
              default: withCtx(() => [
                createTextVNode("出现了另一种算法：标记 - 整理算法（Mark - Compact）")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              createTextVNode("标记 - 整理算法（Mark -Compact）的标记过程仍然与标记 - 清除算法里的是一样的，先标记为可回收对象，但后续步骤就不是直接清除了，而是"),
              createVNode(_component_font, { color: "blue" }, {
                default: withCtx(() => [
                  _hoisted_52
                ]),
                _: 1
                /* STABLE */
              }),
              createTextVNode("。")
            ])
          ])
        ])
      ])
    ]),
    createBaseVNode("h4", _hoisted_53, [
      _hoisted_54,
      createTextVNode(),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("副垃圾回收器")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_55,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createTextVNode("主要"),
          createVNode(_component_font, { color: "blue" }, {
            default: withCtx(() => [
              createTextVNode("负责新生代")
            ]),
            _: 1
            /* STABLE */
          }),
          createTextVNode("的垃圾回收")
        ])
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "blue" }, {
          default: withCtx(() => [
            createTextVNode("新生代中的垃圾数据使用 Scavenger 算法来处理")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode("，所以副垃圾回收器又称为 Scavenger 清道夫"),
        _hoisted_56,
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              createTextVNode("Scavenger 算法实际上就是"),
              createVNode(_component_font, { color: "lightblue" }, {
                default: withCtx(() => [
                  createTextVNode("将新生代空间分成了两块区域，一半是复制过来的"),
                  _hoisted_57,
                  createTextVNode("，另一半是"),
                  _hoisted_58
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _hoisted_59
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_font, { color: "lightblue" }, {
              default: withCtx(() => [
                createTextVNode("新加入的对象就会被放入到对象区域（from-space）")
              ]),
              _: 1
              /* STABLE */
            }),
            createTextVNode("，当对象区域快被写满时，此时就需要进行一次垃圾回收操作了。")
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              createTextVNode("在垃圾回收过程中，"),
              createVNode(_component_font, { color: "red" }, {
                default: withCtx(() => [
                  createTextVNode("首先要"),
                  _hoisted_60
                ]),
                _: 1
                /* STABLE */
              }),
              createTextVNode("；"),
              createVNode(_component_font, { color: "red" }, {
                default: withCtx(() => [
                  createTextVNode("标记完成后，就进入垃圾清理阶段了")
                ]),
                _: 1
                /* STABLE */
              }),
              createTextVNode("。"),
              createVNode(_component_font, { color: "red" }, {
                default: withCtx(() => [
                  createTextVNode("副垃圾回收器会"),
                  _hoisted_61,
                  createTextVNode("，同时它还会"),
                  _hoisted_62,
                  createTextVNode("，相当于完成了内存整理操作")
                ]),
                _: 1
                /* STABLE */
              }),
              createTextVNode("，复制后空闲区域就没有内存碎片了。")
            ])
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_font, { color: "red" }, {
              default: withCtx(() => [
                createTextVNode("完成复制后，对象区域和空闲区域进行角色翻转")
              ]),
              _: 1
              /* STABLE */
            }),
            createTextVNode("，即原来的对象区域变成空闲区域，原来的空闲区域变成了对象区域，这样就完成了垃圾回收操作。"),
            createVNode(_component_font, { color: "red" }, {
              default: withCtx(() => [
                createTextVNode("这种角色翻转的操作还能让新生代中的两块区域无限重复使用下去")
              ]),
              _: 1
              /* STABLE */
            }),
            createTextVNode("。")
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              createTextVNode("副垃圾回收器每次执行清理操作时，都需要将存活的对象从对象区域复制到空闲区域，进行复制操作肯定需要时间成本，倘若新生代区域设置的太大，那么每次进行清理操作的时间就会很长，所以"),
              createVNode(_component_font, { color: "red" }, {
                default: withCtx(() => [
                  createTextVNode("为了执行效率，一般新生代区域的空间会被设置得比较小")
                ]),
                _: 1
                /* STABLE */
              }),
              createTextVNode("。")
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              createTextVNode("正是因为新生代区域的空间不够大，所以很容易造成存活的对象装满整个区域，副垃圾回收器一旦监控到对象区域装满了，便会执行垃圾回收。同时，副垃圾回收器还采用了"),
              createVNode(_component_font, { color: "red" }, {
                default: withCtx(() => [
                  _hoisted_63
                ]),
                _: 1
                /* STABLE */
              }),
              createTextVNode("，也就是"),
              createVNode(_component_font, { color: "red" }, {
                default: withCtx(() => [
                  createTextVNode("移动那些经过两次垃圾回收依然还存活的对象到老生代区域中")
                ]),
                _: 1
                /* STABLE */
              }),
              createTextVNode("。")
            ])
          ])
        ])
      ])
    ]),
    _hoisted_64,
    _hoisted_65,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("尽可能少地使用全局变量")
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_66
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("手动清除定时器")
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_67
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("避免不必要的闭包")
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_68
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("清除 DOM 引用")
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_70
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("使用弱引用")
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_72
      ])
    ])
  ]);
}
const NodeMemoryError_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "NodeMemoryError.html.vue"]]);
export {
  NodeMemoryError_html as default
};
