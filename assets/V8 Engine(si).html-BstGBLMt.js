import { _ as _export_sfc, o as openBlock, c as createElementBlock, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="前瞻" tabindex="-1"><a class="header-anchor" href="#前瞻" aria-hidden="true">#</a> 前瞻</h2><p>在上一章中，我们介绍了JavaScript中的对象以及函数，并提到了函数调用在V8引擎中是如何表现的，那么JavaScript中的对象在V8引擎中是怎样的表现形式呢？</p><h2 id="v8引擎实现对象存储" tabindex="-1"><a class="header-anchor" href="#v8引擎实现对象存储" aria-hidden="true">#</a> V8引擎实现对象存储</h2><p>前一章中，了解到JavaScript中的对象是一组组属性和值的集合，可以通过属性找到对应的值，因此，可以将对象看作是一个字典。</p><p>然而，<strong>V8引擎实现对象存储时，并没有完全采用字典的存储方式</strong>。由于<strong>字典是非线性的数据结构</strong>，<strong>其查询效率不如线性的数据结构</strong>。于是，就如V8引擎采取即时编译(JIT)技术一样，在对象存储方面采取了折中的策略。</p><h2 id="v8引擎提升了对象属性的访问速度" tabindex="-1"><a class="header-anchor" href="#v8引擎提升了对象属性的访问速度" aria-hidden="true">#</a> V8引擎提升了对象属性的访问速度</h2><ul><li><p><strong>常规属性（properties）<strong>和</strong>排序属性（elements）</strong></p><blockquote><p>什么是常规属性和排序属性？</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">20</span>\n  <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;licodeao&quot;</span>\n  <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token string">&quot;height&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">175</span>\n  <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;man-A&#39;</span>\n  <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;man-1&#39;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> boy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> boy<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">indedx:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> value:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>boy<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">=</span> 执行结果 <span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">=</span>\n<span class="token literal-property property">indedx</span><span class="token operator">:</span><span class="token number">1</span> <span class="token literal-property property">value</span><span class="token operator">:</span>man<span class="token operator">-</span><span class="token number">1</span>\n<span class="token literal-property property">indedx</span><span class="token operator">:</span>age value<span class="token operator">:</span><span class="token number">20</span>       \n<span class="token literal-property property">indedx</span><span class="token operator">:</span>name value<span class="token operator">:</span>licodeao\n<span class="token literal-property property">indedx</span><span class="token operator">:</span>height value<span class="token operator">:</span><span class="token number">175</span>   \n<span class="token literal-property property">indedx</span><span class="token operator">:</span><span class="token constant">A</span> <span class="token literal-property property">value</span><span class="token operator">:</span>man<span class="token operator">-</span><span class="token constant">A</span>  \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 从上方的执行结果来看，输出的属性顺序并不是原来我们设置的顺序，并且有一定规律(这个例子并不一定能得出下面某些规律，你可以多增添一些属性来观察即可)：</p><ol><li><strong>设置的数字属性被最先输出出来</strong>，<strong>并且会按照数字大小的顺序打印出来</strong></li><li><strong>设置的字符串属性依然按照原来的顺序打印出来</strong></li></ol><p>之所以会有这样的规律，是因为在ECMAScript规范中定义了<strong>数字属性应该按照索引值大小升序排列</strong>，<strong>字符串属性根据创建时的顺序升序排序。<strong>这里</strong>将对象中的数字属性称为排序属性</strong>，在<strong>V8引擎中称为elements</strong>，<strong>字符串属性被称为常规属性</strong>，在<strong>V8引擎中称为properties</strong>。在V8引擎内部，<strong>为了提升存储和访问的速度，分别使用了两个线性数据结构来分别保存排序属性和常规属性</strong>。</p><p>例如上面代码的结果如下：</p><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20221021215456959.png" alt="image-20221021215456959"></p><p>​ 如图所示，boy对象包含了<strong>两个隐藏属性</strong>：<strong>elements属性和properties属性</strong>，<strong>elements属性指向了elements对象</strong>，<strong>在elements对象中，会按照顺序存放排序属性</strong>；<strong>properties属性则指向了properties对象，在properties对象中，会按照创建时的顺序存放常规属性</strong>。如此，<strong>当V8引擎执行索引操作时，会先从elements属性中按照顺序读取所有的元素，然后再在properties属性中读取所有的元素，这样就完成一次索引操作了</strong>。</p></li><li><p><strong>快属性和慢属性</strong></p><p>​ 虽然，V8引擎使用了两个线性的数据结构来简化复杂度，<strong>但是在查找元素时，却需要多一步操作：如执行boy.name整个语句时，需要先查找出properties属性所指向的properties对象，再在properties对象中查找属性name，故影响了元素的查找效率</strong>。</p><p>​ 基于这个原因，V8引擎则采取了一个权衡的策略以加快查找属性的效率，即是：<strong>将部分常规属性直接存储到对象本身</strong>，把<strong>这称为对象内属性(in-object properties)</strong>。</p><p>​ <strong>采用对象内属性后，常规属性就被保存到boy对象本身了</strong>，于是当再次使用boy.name来查找name的属性值时，V8引擎就可以直接从boy对象本身去获取该值就可以了，提升了查找效率。</p><p>​ 不过<strong>对象内属性的数量是固定的，默认为10个</strong>，如果<strong>添加的属性超出了对象分配的空间，则它们将被保存在常规属性中存储了</strong>。通常，我们<strong>将保存在线性数据结构中的属性称之为</strong>&quot;<strong>快属性</strong>&quot;，因为线性数据结构中只需要通过索引即可访问到属性，虽然访问速度快，但是如果从线性结构中添加或者删除大量的属性时，执行效率会非常低。因此，<strong>如果一个对象的属性过多时，V8引擎就会采取另外一种存储策略</strong> - &quot;<strong>慢属性</strong>&quot;<strong>策略</strong>，但<strong>慢属性的对象内部会有独立的非线性数据结构(字典)作为属性存储容器</strong>。<strong>所有的属性元信息不再是线性存储的，而是直接保存在属性字典中</strong>。</p></li></ul><h2 id="chrome中的内存快照" tabindex="-1"><a class="header-anchor" href="#chrome中的内存快照" aria-hidden="true">#</a> Chrome中的内存快照</h2><blockquote><p>在Chrome浏览器的控制台中输入以下代码</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">property_num<span class="token punctuation">,</span> element_num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 添加排序属性</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> element_num<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">element</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 添加常规属性</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> property_num<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> property <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">property</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n    <span class="token keyword">this</span><span class="token punctuation">[</span>property<span class="token punctuation">]</span> <span class="token operator">=</span> property\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> boy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>切换到内存标签，并点击左上角圆圈生成内存快照</p><p>搜索Person构造函数，即可看到创建的boy对象了</p></blockquote><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/1.png" alt="1"></p><blockquote><p>以下为所有经过构造函数Person创建的对象</p></blockquote><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/2.png" alt="2"></p><p>观察上图，可以发现boy对象有一个elements属性，这里就包含了我们创造的所有的排序属性，为何没有常规属性呢？</p><p>还记得前面说的对象内属性的默认个数吗？</p><p>这是因为只创建了10个常规属性，所以V8引擎将这些常规属性直接划为了boy对象的对象内属性了。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ul><li>由于JavaScript中的对象是一组组属性和值组成的，所以<strong>使用一个字典来保存属性和值，但是由于字典是非线性结构，导致了读取效率很低</strong>。</li><li>为了提高查找效率，V8引擎在对象中添加了<strong>两个隐藏属性</strong>：<strong>排序属性和常规属性，分别指向elements对象和properties对象，在elements对象中会按照顺序存放排序属性，而在properties对象中则按照创建时的顺序保存常规属性</strong>。</li><li>为了进一步提升查找效率，V8引擎还实现了<strong>对象内属性(in-object properties)的策略</strong>，<strong>当常规属性少于默认数量(10)时，V8引擎就会将这些常规属性直接写进对象中，超出部分则按原来的方式存储在properties对象中，并按照创建时的顺序存储常规属性</strong>。</li><li><strong>如果对象中的属性过多，或存在添加或删除大量属性的操作时，V8引擎就会将线性的数据结构变为非线性的字典存储结构，降低了查找速度，提升了修改对象的属性的速度</strong>。</li></ul>', 19);
const _hoisted_20 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_20);
}
const V8_Engine_si__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "V8 Engine(si).html.vue"]]);
export {
  V8_Engine_si__html as default
};
