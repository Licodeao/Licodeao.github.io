import { _ as _export_sfc, o as openBlock, c as createElementBlock, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="前瞻" tabindex="-1"><a class="header-anchor" href="#前瞻" aria-hidden="true">#</a> 前瞻</h2><p>前面的章节中了解了V8中的JavaScript，但似乎对V8本身了解较浅，那么本章会来揭晓V8的细节以及它的编译流水线。</p><h2 id="深入v8引擎" tabindex="-1"><a class="header-anchor" href="#深入v8引擎" aria-hidden="true">#</a> 深入V8引擎</h2><p>当你想执行一段JavaScript代码时，只需要将代码丢给V8虚拟机即可，V8便会执行并返回给你结果。</p><p>其实在执行JavaScript代码前，V8就已经准备好了代码的运行环境，这个环境包括了堆空间和栈空间、全局执行上下文、全局作用域、内置的内建函数、宿主环境提供的扩展函数和对象，当还有消息循环系统（上一章说过，V8执行代码时，会进入消息循环的状态）。在准备好运行时环境后，V8才可以执行JavaScript代码，这一过程包括<strong>解析源码、生成字节码、解释执行或编译执行</strong>这一操作。</p><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230302230022457.png" alt="image-20230302230022457"></p><p>环境中的各个部分到底有啥用？</p><p>堆空间和栈空间可以让我们了解为什么要有传值和传引用，栈空间可以让我们了解函数是怎么被调用的，事件循环系统可以让我们了解各种回调函数是怎么被执行的等等...</p><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230302230814426.png" alt="image-20230302230814426"></p><p><strong>什么是宿主环境？</strong></p><p>提到宿主，就会想到病毒。宿主为病毒提供了生存环境，并且宿主有自己的完整的系统，而病毒是没有的，因此病毒想要完成自我复制，是需要和宿主共用一套系统的。简言之，病毒离开宿主就生活不了了。同样地，可以把V8和浏览器的渲染进程的关系看成病毒和宿主，浏览器为V8提供了基础的消息循环系统、全局变量、web API等，而V8的核心是实现了ECMAScript规范，V8只提供了ECMAScript定义的一些对象和一些核心的函数，除此以外，V8还提供了垃圾回收器、协程等内容，当然提供的一切内容都需要配合宿主环境才能完整执行。</p><p>假如V8使用不当，如不规范的代码触发了频繁的垃圾回收，或者某个函数执行时间过长，这些都会占用宿主环境的主线程，从而影响到程序的执行效率，甚至导致宿主环境的死机。</p><p>当然除了浏览器可以作为V8的宿主环境，Node.js当然也可以作为V8的宿主环境，只是二者提供的宿主对象和API不同罢了。正因为V8实现的是ECMAScript规范，所以它都可以兼容浏览器和Node环境，只是两个环境自身的差异造就了不同，而非V8造成了不同。</p><p>总之，现在我们了解了要执行V8，需要有一个宿主环境，宿主环境可以是浏览器中的渲染进程，也可以是Node.js进程，或者其他适配V8的开发环境。</p><p><strong>堆空间和栈空间</strong></p><p>堆空间和栈空间构造了数据存储的空间，由于V8堪比病毒，寄生在浏览器或者Node.js这些宿主中的，那么V8也是被这些宿主启动的。如，在Chrome中，只要打开一个渲染进程，渲染进程便会初始化V8，同时初始化堆空间和栈空间。</p><p>其实，上面提到过堆空间和栈空间的作用是什么。栈空间主要是用来管理JavaScript函数调用的，栈是内存中连续的一块空间，同时栈结构是&quot;先进后出&quot;的策略。在函数调用过程中，涉及到上下文相关的内容都会存放到栈上，如原生类型、引用到的对象的地址、函数的执行状态、this值等都会存在栈上。当一个函数执行结束后，那么该函数的执行上下文便会被销毁掉。</p><p>栈空间最大的特点就是空间连续，所以栈中每个元素的地址都会固定的，因此栈空间的查找效率非常高，但是通常在内存中，很难分配到一块很大的连续空间，因此，V8对栈空间的大小做了限制，如果函数调用层过深，那么V8就有可能抛出栈溢出的错误。其实，在日常开发中，很容易看到这个错误，下次看到这个错误时，就不要以为是浏览器警告的啦，实际上是V8在告诉你：栈溢出了哦❌</p><p>如果有一些占用内存比较大的数据，或者不需要存储在连续空间中的数据，使用栈空间就不太合适了，所以V8又使用了堆空间。</p><p>堆空间是另一种数据结构，它是一种树形的存储结构，用来存储对象类型的离散的数据，那么比如函数、数组等等这些都是存储在堆空间的。</p><p>宿主在启动V8的过程中，会同时创建堆空间和栈空间，再继续往下执行，产生的新数据都会存放在这两个空间中。</p><p><strong>全局执行上下文和全局作用域</strong></p><p>V8初始化了基础的存储空间后，接下来就需要初始化全局执行上下文和全局作用域了。</p><p>当V8开始执行一段可执行代码时，会生成一个执行上下文。V8用执行上下文来维护执行当前代码所需要的变量声明、this指向等。</p><p>执行上下文中主要包含了三部分：变量环境、词法环境、this关键字。如在浏览器环境中，全局执行上下文就包括了window对象，还有默认指向window的this关键字，另外还有一些Web API函数。而词法环境则包含了let、const等变量的内容。</p><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230303001614910.png" alt="image-20230303001614910"></p><p>全局执行上下文在V8的生存周期内是不会被销毁的，它会一直保存在堆中，这样当下次在需要使用函数或者全局变量时，就不需要重新创建了。另外，如果执行了一段全局代码时，全局代码中有声明的函数或者定义的变量，那么函数对象和声明的变量都会被添加到全局执行上下文中，如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>V8在执行这段代码时，会在全局执行上下文中添加变量x和函数foo。</p><p>需要注意的是：全局作用域和全局执行上下文的关系。同一个全局执行上下文中，能存在多个作用域。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中，就存在两个对应的作用域，一个是全局作用域，另外一个是括号内部的作用域，但是这些作用域都会保存到全局执行上下文中。</p><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230303141131202.png" alt="image-20230303141131202"></p><p>当V8调用了一个函数时，就会进入函数的执行上下文，这时候全局执行上下文和当前的函数执行上下文就形成了一个栈结构。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方代码中，当执行到foo函数时，其栈状态如下：</p><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230303141800751.png" alt="image-20230303141800751"></p><p><strong>事件循环系统</strong></p><p>有了堆空间和栈空间，生成了全局执行上下文和全局作用域，接下来就可以执行JavaScript代码了吗？是不行的。因为V8还需要一个主线程，用来执行JavaScript和执行垃圾回收等工作。V8是寄生在宿主环境中的，它并没有自己的主线程，而是使用宿主所提供的主线程，V8所执行的代码都是在宿主的主线程上执行的。</p><p>显然地，只有一个主线程依然不行，如果只开启一个线程，在该线程中执行一段代码，那么当该线程执行完这段代码后，就会自动退出了，执行过程中的一些栈上的数据也随之销毁，下次执行另一段代码时，还需要另外重新启动一个线程，重新初始化栈数据，严重影响到程序执行时的性能。</p><p>为了在代码执行完后，让线程继续运行，通常是在代码中添加一个循环语句。在循环语句中，监听下个事件，要执行另外一个语句时，激活该循环就行了。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Task task <span class="token operator">=</span> <span class="token function">GetNewTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">RunTask</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码中使用了一个循环，不断地获取新任务，一旦有新任务，便立即执行该任务。</p><p>如果主线程正在执行一个任务，这时又来了一个新任务，如V8正在操作DOM，这时又需要V8注册监听下载完成的事件，那么这种情况下就需要引入一个消息队列，让下载完成的事件暂存到消息队列中，等当前任务结束之后，再从消息队列中取出正在排队的任务。当执行完一个任务之后，事件循环系统就会重复这个过程，继续从消息队列中取出并执行下个任务。需要注意的是：因为所有的任务都是运行在主线程的，在浏览器的页面中，V8会和页面共用主线程，共用消息队列，所以如果V8执行一个函数过久，那么就会影响到浏览器页面的交互性能。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ul><li><strong>V8并不是一个完整的系统，它的核心就是实现了ECMAScript规范，所以在执行时，是需要宿主环境配合的。</strong></li><li><strong>V8不会自启动，而是伴随着宿主环境的启动而启动，启动后会构造堆空间和栈空间，堆空间是树形结构，用来存放一些对象数据；栈空间则是用来存放原生数据和函数调用的。由于堆空间不是连续存储，因此读取速度会比较慢，但可以存储很多数据；栈空间是连续的，所以查找速度非常快，由于在内存中开辟一块连续的区域有点难度，所以V8会限制栈空间的大小，从而会很容易出现栈溢出错误。</strong></li><li><strong>全局执行上下文在V8启动过程中就已经准备好了。全局执行上下文和函数执行上下文的生命周期是不同的，函数执行上下文在函数执行结束之后就销毁了，而全局执行上下文则和V8的生命周期一致。</strong></li><li><strong>宿主环境还需要构造事件循环系统，事件循环系统主要用来处理任务的排队和任务的调度。</strong></li><li><strong>作用域是静态的，函数定义时就已经确定了；而执行上下文是动态的，调用函数时才创建，并且结束后会释放掉。</strong></li></ul>', 46);
const _hoisted_47 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_47);
}
const V8_Engine_shi__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "V8 Engine(shi).html.vue"]]);
export {
  V8_Engine_shi__html as default
};
