import { _ as _export_sfc, o as openBlock, c as createElementBlock, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="前瞻" tabindex="-1"><a class="header-anchor" href="#前瞻" aria-hidden="true">#</a> 前瞻</h2><p>在上一章中，了解了什么是继承，以及JavaScript是如何实现基于原型的继承的，并且提到了原型链。</p><h2 id="基于原型的继承是如何实现的-二" tabindex="-1"><a class="header-anchor" href="#基于原型的继承是如何实现的-二" aria-hidden="true">#</a> 基于原型的继承是如何实现的？(二)</h2><p>实际上，关于继承，还有一种情况。</p><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230227100954911.png" alt="image-20230227100954911"></p><p>在上图中，因为对象D和对象C的原型都指向了对象B，对象D和对象C有同一个原型对象B。通过对象D去访问对象B中的name属性或对象A中的color属性时，返回的值和使用对象C去访问是一样的，因为它们是同一个数据。</p><p>同时，再来回顾下继承的概念：继承就是一个对象可以访问另外一个对象的属性和方法，在JavaScript中，我们通过原型和原型链的方式来实现了继承特性。</p><p>至此，是否能感觉到JavaScript中继承的实现非常简单？就是每个对象都有一个原型属性(_ _ proto_ _)，该属性指向了原型对象，查找属性时，V8会沿着原型一层一层向上查找，直到找到正确的属性为止。</p><p>理论说的多了，不妨写一段代码来看看：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;Default&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;Default&quot;</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">getInfo</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Type is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, color is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> jack <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;student&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;1.88&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中，创建了两个对象person和jack，想让jack对象继承自person对象，最直接的方式就是让jack对象的原型指向person对象，思路是这样，但如何用代码表示？</p><p>当然是将jack对象中的_ _ proto_ _属性指向person对象啦。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;Default&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;Default&quot;</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">getInfo</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Type is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, color is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> jack <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;student&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;1.88&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\njack<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> person<span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>jack<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将原型指定完毕后，就可以使用jack对象来调用person对象中的getInfo方法了。</p><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230227103059358.png" alt="image-20230227103059358"></p><p>扯个题外话，getInfo中的函数的this指向谁？为什么？</p><p>显然，我们通过jack对象来调用getInfo方法，隐式地将this绑定到了jack对象上，但隐式绑定有一个条件是：在调用的对象中必须有一个函数的引用，通过该引用来找到函数，进而间接地将this绑定到该对象上。这个怎么理解？</p><p>其实，也挺好理解的。首先，V8在jack对象中找是否有getInfo函数的引用，发现没找到，但V8发现了jack对象继承自person对象，进而去person对象中查找，终于在person对象中找到了getInfo函数的引用，并返回了该属性值。正因为jack对象继承自person对象，因此jack对象相当于也有了getInfo函数的引用，这种引用关系是通过继承加上去的，且this是在运行时绑定的，所以this指向的是jack对象。</p><p>或者，也可以这么理解。V8发现在jack对象中没有找到getInfo函数的引用，但在person对象中发现了，同时V8发现了jack对象和person对象是继承关系，它们是同一类，因此默认jack对象也有getInfo函数的引用，这层引用是通过继承关系加上的，并不是凭空而来。所以，this指向的是jack对象。</p><p>或者，直接大白话：一个对象调用一个方法时，V8去该对象中找，发现没找到，没找到就要报错啊！但发现找完该对象后，还有个后门，通向了person对象，而在person对象的新世界里找到了方法的引用。这下，JavaScript虚拟机明白了，该对象和person对象是父子关系啊，一家人嘛也就不计较谁是谁了，那就算该对象调用的吧~</p><p>总之，对象调用方法时，JavaScript虚拟机在该对象中没找到方法时，是会报错的！代码永远不会骗人，有就是有，没有就是没有，如果有，肯定是该对象和其他对象有关系。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;Default&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;Default&quot;</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">getInfo</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Type is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, color is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> jack <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;student&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;1.88&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\njack<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> person<span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>jack<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230227110317110.png" alt="image-20230227110317110"></p><p>输出结果后，发现this指向的就是jack对象。</p><hr><p>另外，需要注意的是：<strong>通常隐藏属性是不能使用JavaScript来直接与之交互的，在实际项目中，不应该直接通过_ _proto _ _来访问或修改该属性</strong>，因为：</p><ul><li><strong>这是隐藏属性，并没有被ECMAScript标准定义</strong></li><li><strong>使用该属性会造成严重的性能问题</strong></li></ul><p><strong>那么，如何正确地设置对象的原型对象呢？</strong></p><p><strong>使用构造函数来创建对象</strong></p><p>首先，可以创建一个PersonFactory函数，属性通过参数的传递，在函数体内，通过this设置属性值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">PersonFactory</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，再结合关键字new就可以创建对象了。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PersonFactory</span><span class="token punctuation">(</span><span class="token string">&quot;Default&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>通过执行new配合一个函数，JavaScript虚拟机会返回一个对象，并且这个对象是个空对象。</strong></p><p>流程实际上是这样的：</p><blockquote><p>执行new配合一个函数 -&gt; 创建了一个空对象person -&gt; 构造函数中的this指向这个空对象 -&gt; 属性通过参数的传递赋值 -&gt;完成</p></blockquote><p>PersonFactory是构造函数，这是需要明白的。</p><p>其次，对象中如果没有某个属性时，通过this对该属性进行赋值时，相当于是将该属性添加到对象上。</p><p>明白以上两点，就很好理解了：</p><p>new创建了一个空对象person，构造函数的this指向空对象，属性通过参数的传递赋值，将属性添加到空对象上，操作完成。</p><p>其实，当V8执行上面这段代码时，V8会在背后悄悄地做以下几件事：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\nperson<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">PersonFactory</span><span class="token punctuation">.</span>prototype\n<span class="token function">PersonFactory</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">&quot;Default&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Default&quot;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230227114000433.png" alt="image-20230227114000433"></p><p>观察上图，执行流程分为了三步：</p><ul><li>首先，创建了一个空白对象person</li><li>然后，将PersonFactory的prototype属性设置为person的原型对象</li><li>最后，再使用person来调用PersonFactory，这时，PersonFactory函数中的this就指向了对象person，然后在PersonFactory函数中，利用this对对象person执行属性填充操作，最终就创建了对象person。</li></ul><hr><p><strong>构造函数是如何实现继承的？</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">PersonFactory</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>constant <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PersonFactory</span><span class="token punctuation">(</span><span class="token string">&quot;Default&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PersonFactory</span><span class="token punctuation">(</span><span class="token string">&quot;Default&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> person3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PersonFactory</span><span class="token punctuation">(</span><span class="token string">&quot;Default&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中，创建了三个person对象，每个对象都占用一个空间。</p><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230227115249012.png" alt="image-20230227115249012"></p><p>图中可以看出，三个对象中都有constant属性，并且都占用了一块空间，但是这是一个通用的属性，所以没必要在每个对象中都为该属性分配一块空间，我们可以将该属性设置为公用的。如何设置呢？</p><p>在前面章节介绍函数时，提到过函数有两个隐藏属性name和code，<strong>其实函数还有另外一个隐藏属性，那就是prototype</strong>，刚才在说构造函数创建过程时有提到过。一个函数有以下几个隐藏属性：</p><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230227120123529.png" alt="image-20230227120123529"></p><p><strong>每个函数对象中都会有一个公开的prototype属性，当你将这个函数作为构造函数来创建一个新对象时，新创建的对象的原型就会指向该函数的prototype属性。当然，如果只是正常调用该函数，那么prototype将不会起作用，仅限于用作构造函数时，才会生效。</strong></p><p>现在我们知道了新对象的原型指向了构造函数的prototype属性，当通过一个构造函数创建了多个新对象时，这几个对象的原型都指向了该函数的prototype属性：</p><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230227121501386.png" alt="image-20230227121501386"></p><p>这时，我们就可以将constant属性添加到PersonFactory的prototype属性上了。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">PersonFactory</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name">PersonFactory</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constant <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PersonFactory</span><span class="token punctuation">(</span><span class="token string">&quot;Default&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PersonFactory</span><span class="token punctuation">(</span><span class="token string">&quot;Default&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> person3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PersonFactory</span><span class="token punctuation">(</span><span class="token string">&quot;Default&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，三个person对象的原型都指向了PersonFactory的prototype属性，并且prototype又包含了constant属性，这就是实现继承的正确方式了！🌟</p><hr><p><strong>一段关于new的历史</strong></p><p>现在我们知道new关键字结合构造函数，就能生成一个对象，不过这种方式很怪异，为什么会这样呢？这就不得不了解以下JavaScript的历史了，其实有时候，了解了某些历史，才能真正地理解某些特性为何会出现，这样就记忆深刻了。</p><p>在JavaScript刚刚诞生的时代，最火的语言就是Sun公司的Java，现在Sun公司被甲骨文收购了。单单从名字上看，可能会以为JavaScript和Java出自同一家公司或同一个人，其实没半毛钱关系哈哈。推出一门新的语言需要吸引开发者来，而当时最大的开发者群体就是Java程序员，因此，JavaScript就蹭了Java的热度，现如今看来，蹭的非常成功~</p><p>在Java中，创建一个对象使用的就是关键字new，而当时的JavaScript并没有使用这种方式来创建对象，为了进一步吸引Java开发者，便在语法层面蹭了Java的热点，所以JavaScript就被强制地加入了关键字new。表面上看着非常相似，但背后的原理却是大相径庭的。其实，对于JavaScript而言，new关键字的设计不是很合理，但是对于市场而言，对于历史而言，是非常成功的。若是没有当初这般作为，很难想象现如今JavaScript会被如此庞大的团体所喜欢。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ul><li><strong>JavaScript中每个对象都有一个隐藏属性__ proto __，该属性直接指向了该对象的原型对象，而原型对象也有自己的 _ _ proto _ _属性，这些属性串联在一起就变成了原型链。</strong></li><li><strong>不过，在JavaScript中并不建议直接使用__ proto __属性，原因有两个</strong><ul><li><strong>这是隐藏属性，并没有被ECMAScript标准定义</strong></li><li><strong>使用该属性会造成严重的性能问题</strong></li></ul></li><li><strong>因此，在JavaScript中，正确的做法是使用new加上构造函数这种组合来创建对象和实现对象的继承。</strong></li><li><strong>每个函数对象都有一个公开的prototype属性，将这个函数作为构造函数来创建一个新对象时，新创建的对象的原型就会指向该函数的prototype属性。当然，如果只是正常调用该函数，那么prototype将不会起作用。</strong></li></ul>', 66);
const _hoisted_67 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_67);
}
const V8_Engine_qi__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "V8 Engine(qi).html.vue"]]);
export {
  V8_Engine_qi__html as default
};