import { _ as _export_sfc, o as openBlock, c as createElementBlock, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>​ 此篇是旧博客迁移的文章之一，但在今天(<strong>2022-8-10</strong>)对内容进行了大量的补充与修正。为何今天才修改内容？主要是因为最近的精力在学习 python 爬虫，在准备爬虫文章的更新，因此搁置了 V8 引擎。平心而论，V8 引擎系列文章会是我真正意义上的&quot;专栏&quot;，一切源于兴趣使然。当然，Chrome 成为当今浏览器巨头的原因，很大一部分在于 V8 引擎，因此我会尝试去阅读 V8 源码，尽管它有一部分源码由 C++组成，但仍有大部分源码使用了 JavaScript，可能不会将源码阅读完(实际上对我来说也不可能)，但这能够进一步去了解 V8，算是我对它的 respect...</p><p>​ 文章的时间记为 2022-4-9，实际上我也是从这一天开始了解 V8 引擎，就让时间回溯到那一天开始...</p><h2 id="为什么需要-javascript-引擎呢" tabindex="-1"><a class="header-anchor" href="#为什么需要-javascript-引擎呢" aria-hidden="true">#</a> 为什么需要 JavaScript 引擎呢？</h2><p>​ 由于 JavaScript 是高级编程语言，而高级编程语言都是需要转成<strong>最终的机器指令</strong>来执行的。事实上，我们编写的 JavaScript 代码无论交给浏览器或者 Node 来执行，最后都是需要被<strong>CPU</strong>执行的。但<strong>只有机器语言才能被 CPU 执行，</strong> 因此<strong>JavaScript 引擎帮助我们将 JavaScript 代码编译成 CPU 指令</strong>来执行。</p><h3 id="常见的-javascript-引擎有哪些" tabindex="-1"><a class="header-anchor" href="#常见的-javascript-引擎有哪些" aria-hidden="true">#</a> 常见的 JavaScript 引擎有哪些？</h3><ol><li>SpiderMonkey: 第一款 JavaScript 引擎，由 JavaScript 之父开发</li><li>JavaScriptCore: WebKit 中的 JavaScript 引擎，<strong>小程序也在使用该引擎</strong></li><li>V8: Chrome 浏览器的 JavaScript 引擎</li></ol><h3 id="浏览器内核和-javascript-引擎的关系" tabindex="-1"><a class="header-anchor" href="#浏览器内核和-javascript-引擎的关系" aria-hidden="true">#</a> 浏览器内核和 JavaScript 引擎的关系</h3><p>​ 以 WebKit 为例子，WebKit 事实上由两部分组成：</p><ul><li>WebCore：负责<strong>HTML 解析、布局、渲染</strong>等相关工作</li><li>JavaScriptCore：<strong>解析、执行 JavaScript 代码</strong></li></ul><h2 id="什么是-d8" tabindex="-1"><a class="header-anchor" href="#什么是-d8" aria-hidden="true">#</a> 什么是 d8?</h2><p>​ d8 是 V8 引擎的一个调试工具，通过 d8 的一些指令，我们可以查看 V8 引擎在执行 JavaScript 代码过程中的各种中间数据，比如作用域、AST、bytecode(字节码)、优化的二进制代码、垃圾回收的状态等</p><h3 id="如何在-windows-上安装-d8" tabindex="-1"><a class="header-anchor" href="#如何在-windows-上安装-d8" aria-hidden="true">#</a> 如何在 Windows 上安装 d8？</h3><p>​ 一般来说，网上没有直接获取 d8 的途径，而是<strong>通过编译 V8 的源码来生成 d8</strong>。</p><h3 id="如何通过编译-v8-的源码构建-d8" tabindex="-1"><a class="header-anchor" href="#如何通过编译-v8-的源码构建-d8" aria-hidden="true">#</a> 如何通过编译 V8 的源码构建 d8?</h3><p>​ 这里我简单概括下，分为三步：下载 V8 源码 -&gt; 生成工程文件 -&gt; 通过相关工具的指令编译 V8 的工程并生成 d8</p><p>​ 这里，我在网上找到了其他大佬编译好的 d8：</p><ul><li>Windows 系统 64 位：https://storage.googleapis.com/chromium-v8/official/canary/v8-win64-dbg-8.4.109.zip</li><li>Mac 系统：https://storage.googleapis.com/chromium-v8/official/canary/v8-mac64-dbg-8.4.109.zip</li></ul><p>​ <strong>介于我使用的是 Windows 系统</strong>，下面我将介绍<strong>如何在 Windows 系统下安装 d8</strong>：</p><ol><li>通过上方的链接，下载压缩包，解压压缩包到任何地方都行</li><li>打开解压出的文件，会发现一个<code>d8.exe</code>文件</li><li>此时，将<code>d8.exe</code>所在的文件路径 copy 一下</li><li>打开高级系统设置，点击环境变量</li><li>在<strong>系统变量</strong>中的 path 里添加刚刚 copy 的文件路径</li></ol><p>​ <strong>测试是否安装成功</strong>：</p><ol><li>添加成功后，可以检测一下 d8 是否可以使用，在电脑的任何地方，按住 shift 键+鼠标右键，选择启动<code>PowerShell</code>窗口</li><li>输入<code>d8 --help</code>命令，若出现很多行即表示可以使用 d8 了</li></ol><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/微信图片_20220409010408.png" alt=""></p><h2 id="v8-引擎的原理" tabindex="-1"><a class="header-anchor" href="#v8-引擎的原理" aria-hidden="true">#</a> V8 引擎的原理</h2><p>​ V8 引擎是由 C++编写的高性能<strong>JavaScript</strong>和 WebAssembly 引擎，它能实现 ECMAScript 和 WebAssembly，也能独立运行并嵌入到任何 C++应用程序中。</p><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20220810173856000.png" alt="image-20220810173856000"></p><p>​ (V8 引擎-过程图)</p><h3 id="优化策略" tabindex="-1"><a class="header-anchor" href="#优化策略" aria-hidden="true">#</a> 优化策略</h3><blockquote><ul><li>函数只声明并且未被调用, 则不会被解析成 AST</li><li>函数若只被调用一次, bytecode 则直接被 Ignition 解释执行</li><li>函数若被多次调用, Ignition 会将该函数标记为 hot 函数, 若多次调用且参数都为相同类型, 则会被编译成 MachineCode; 若多次调用并且传入不同类型的参数, 则会被反向优化成 bytecode</li></ul></blockquote><h2 id="过程分段解析" tabindex="-1"><a class="header-anchor" href="#过程分段解析" aria-hidden="true">#</a> 过程分段解析</h2><h3 id="过程一" tabindex="-1"><a class="header-anchor" href="#过程一" aria-hidden="true">#</a> 过程一</h3><blockquote><p>JavaScript 源代码 -&gt; Parse(解析) -&gt; AST(抽象语法树)</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;licodeao&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment">//	Parse(解析) = 词法分析 + 语法分析</span>\n<span class="token number">1.</span>词法分析：\n    词法分析类似切割，将一段代码分成几部分\n    <span class="token constant">JS</span>代码经过Parse中的词法分析后\n    					↓\n    <span class="token function">生成一个tokens数组，并且数组里面是一个个对象</span><span class="token punctuation">(</span>类似<span class="token constant">JSON</span><span class="token punctuation">)</span>，tokens <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    					↓\n    词法分析从左到右依次分析代码\n        			↓\n    遇见<span class="token keyword">const</span>时，会将它解析为关键字类型，并往tokens数组中添加\n    <span class="token literal-property property">tokens</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;keyword&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;const&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>\n    					↓\n    随后遇见name，将它解析为标识符类型，往tokens数组中添加\n    <span class="token literal-property property">tokens</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;keyword&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;const&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;identifier&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>\n    					↓\n    再往后遇见<span class="token string">&#39;licodeao&#39;</span>，将它解析为字面量类型，往tokens数组中添加\n    <span class="token literal-property property">此时tokens</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;keyword&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;const&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;identifier&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;literal&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;licodeao&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>\n<span class="token number">2.</span>语法分析：\n	得益于词法分析的类切割效果，tokens数组中存储的是一个个对象，那么接下来就会对这些对象进行语法分析\n    				↓\n 	进而生成一个<span class="token constant">AST</span><span class="token punctuation">(</span>抽象语法树<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="过程二" tabindex="-1"><a class="header-anchor" href="#过程二" aria-hidden="true">#</a> 过程二</h3><blockquote><p>AST(抽象语法树) -&gt; Ignition(转换器/解释器) -&gt; bytecode(字节码)</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 过程概述</span>\n	语法分析生成了<span class="token constant">AST</span>抽象语法树之后，再通过ignition转换器，将抽象语法树中的各个语法，转换为对应的字节码\n	此时<span class="token constant">V8</span>引擎就会将字节码转换为不同平台上的<span class="token constant">CPU</span>指令\n<span class="token comment">// 那么，如何执行这些CPU指令呢？</span>\n	在上一步中，字节码会先被转为汇编代码，通过汇编代码去执行<span class="token constant">CPU</span>指令，进而得到最开始的<span class="token constant">JS</span>代码的运行结果\n	字节码 <span class="token operator">-</span><span class="token operator">&gt;</span> 汇编代码 <span class="token operator">-</span><span class="token operator">&gt;</span> 通过汇编代码执行<span class="token constant">CPU</span>指令 <span class="token operator">-</span><span class="token operator">&gt;</span> 运行结果\n	因此，实际上在字节码被转换为运行结果之间，需要被转换为汇编代码\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>AST(抽象语法树) -&gt; Ignition(转换器/解释器) -&gt; TurboFan(编译器)</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 过程概述</span>\n在<span class="token constant">JS</span>代码中，可能会有部分函数被执行多次\n    				↓\n<span class="token function">那么此时ignition会将该函数标记为hot</span><span class="token punctuation">(</span>热函数<span class="token punctuation">)</span>，并交给TurboFan进行转换\n    				↓\n<span class="token function">转换为对应的MachineCode</span><span class="token punctuation">(</span>优化的机器码<span class="token punctuation">)</span>\n    				↓\n那么当下次再执行该函数时，即可不通过转换，就能直接执行机器指令，得到运行结果，提高了性能\n<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>\n但会出现一个问题，例如一个sum求和函数\n\n  <span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> 第一次调用sum函数，参数为Number类型\n  <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token function">第二次调用sum函数，参数为Number类型，此时被ignition标记为hot</span><span class="token punctuation">(</span>热函数<span class="token punctuation">)</span>\n  <span class="token function">sum</span><span class="token punctuation">(</span><span class="token string">&#39;aaa&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;bbb&#39;</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> 第三次调用sum函数，参数为String类型\n\n<span class="token function">第二次调用sum函数时，被ignition标记为hot</span><span class="token punctuation">(</span>热函数<span class="token punctuation">)</span><span class="token function">，交给TurboFan</span><span class="token punctuation">(</span>编译器<span class="token punctuation">)</span><span class="token function">转换为对应的MachineCode</span><span class="token punctuation">(</span>优化机器码<span class="token punctuation">)</span>\n<span class="token comment">// 第三次调用sum函数时，会不用通过TurboFan转换，直接执行机器指令吗?</span>\n显然不会<span class="token operator">!</span>\n此时，问题出现了，前两次传的是Number类型，并返回的是一个Number类型\n而第三次调用sum函数时，传的是String类型，那么此时返回的是字符串拼接的结果，显然与之前转换成的机器码相悖了\n\n<span class="token comment">// 那么，如何解决这种传递不同类型参数的问题呢？</span>\n	<span class="token constant">V8</span><span class="token function">引擎提供了一个Deoptimization</span><span class="token punctuation">(</span>反向优化<span class="token punctuation">)</span>的解决方案，这也是相比较于<span class="token number">5.9</span>版本之前的<span class="token constant">V8</span>引擎所增添的一点\n	当遇到了不同类型参数的问题时，<span class="token constant">V8</span><span class="token function">引擎就会将原来的MachineCode</span><span class="token punctuation">(</span>优化机器码<span class="token punctuation">)</span><span class="token function">通过Deoptimization</span><span class="token punctuation">(</span>反向优化<span class="token punctuation">)</span><span class="token function">转换为bytecode</span><span class="token punctuation">(</span>字节码<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">因为之前的MachineCode</span><span class="token punctuation">(</span>优化机器码<span class="token punctuation">)</span>不能正确地处理运算<span class="token operator">!</span>\n      							↓\n  			<span class="token function">bytecode</span><span class="token punctuation">(</span>字节码<span class="token punctuation">)</span>转换为汇编代码\n      							↓\n  				通过汇编代码去执行<span class="token constant">CPU</span>指令\n      							↓\n    						 运行结果\n<span class="token function">解决了这问题，必然得浪费一点性能</span><span class="token punctuation">(</span>因为执行了反向优化的过程<span class="token punctuation">)</span>\n\n<span class="token comment">// 假如用TypeScript重写sum函数，是否能提高一点性能呢？</span>\n<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">num1</span><span class="token operator">:</span>number<span class="token punctuation">,</span> <span class="token literal-property property">num2</span><span class="token operator">:</span>number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n	答案在某种意义上来说，是肯定的<span class="token punctuation">,</span>因为TypeScript的强类型使得sum函数只能传递同样类型的参数，这就符合上面说的第一种情况，即没有出现传递不同类型参数的问题。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v8-引擎的架构" tabindex="-1"><a class="header-anchor" href="#v8-引擎的架构" aria-hidden="true">#</a> V8 引擎的架构</h2><ol><li><p>Parse 模块：</p><p>Parse 模块会<strong>将 JavaScript 代码转换成抽象语法树</strong>，帮助 Ignition 解释器认识 JavaScript 代码</p><blockquote><p>如果<strong>函数没有被调用，则不会被转换为抽象语法树</strong></p></blockquote></li><li><p>Ignition 解释器：</p><p>Ignition 解释器会<strong>将抽象语法树转换为 bytecode 字节码</strong></p><p>同时会收集 TurboFan 优化所需要的信息(比如函数参数的类型信息)</p><blockquote><p>如果<strong>函数只调用一次，Ignition 会直接执行解释 bytecode 字节码</strong></p></blockquote></li><li><p>TurboFan 编译器：</p><blockquote><p>如果<strong>一个函数被多次调用</strong>，那么就会<strong>被 Ignition 标记为 hot 热函数</strong>，随后被 TurboFan 转换成优化的机器码，提高性能</p></blockquote><p>当出现<strong>类型发生变化时</strong>，机器码会被还原成 bytecode, <strong>因为之前的优化机器码并不能正确的处理运算</strong>，所以就会<strong>被逆向的转化成字节码</strong>，降低性能</p></li></ol><h2 id="v8-执行的细节" tabindex="-1"><a class="header-anchor" href="#v8-执行的细节" aria-hidden="true">#</a> V8 执行的细节</h2><h3 id="parse-解析-阶段" tabindex="-1"><a class="header-anchor" href="#parse-解析-阶段" aria-hidden="true">#</a> Parse(解析)阶段</h3><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/微信图片_20220408133733.jpg" alt=""></p><p>​ (V8 引擎的<strong>解析图</strong>-官方)</p><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20220810183402226.png" alt="image-20220810183402226"></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 过程概况</span>\n<span class="token number">1.</span>首先Blink内核会将源码交给<span class="token constant">V8</span>引擎，Stream获取到源码并且进行编码转换\n      							↓\n<span class="token number">2.</span><span class="token function">Scanner</span><span class="token punctuation">(</span>词法分析器<span class="token punctuation">)</span><span class="token function">会进行词法分析</span><span class="token punctuation">(</span>lexical analysis<span class="token punctuation">)</span>，将代码转换成tokens数组\n      							↓\n<span class="token number">3.</span>通过语法分析，将tokens转换成<span class="token constant">AST</span><span class="token function">树，此时经过Parser和PreParser</span><span class="token punctuation">(</span>预解析<span class="token punctuation">)</span><span class="token operator">:</span>\n	<span class="token comment">// Parser就是直接将tokens转换成AST树架构</span>\n  <span class="token comment">// PreParser是预解析，为什么需要预解析呢？</span>\n  	<span class="token number">1.</span>并不是所有的JavaScript代码，在一开始时就会被执行。那么对所有的JavaScript代码进行解析，必然会影响网页的运行效率\n    <span class="token number">2.</span>因此<span class="token constant">V8</span>引擎就实现了Lazy <span class="token function">Parsing</span><span class="token punctuation">(</span>延迟解析<span class="token punctuation">)</span>的方案，它的作用是将不必要的函数进行预解析，也就是只解析暂时需要的内容，而对函数的全量解析是在函数被调用时才会进行。\n    <span class="token comment">// example</span>\n    <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n		就如上方的代码，foo函数被调用了，执行该函数。\n      							↓\n    <span class="token constant">V8</span>引擎会查看foo函数内部的成员，于是发现了sum函数，但sum函数并没有被调用，因此<span class="token constant">V8</span><span class="token function">引擎知道了foo函数内部有个sum函数，但不会去管sum函数，先晾在一旁。也就是说：在foo函数内部定义了一个sum函数，那么sum函数就会进行预解析</span><span class="token punctuation">(</span>大白话就是看到了不管它<span class="token punctuation">,</span>因为sum函数没有被调用<span class="token punctuation">)</span>\n      							↓\n<span class="token number">4.</span>生成<span class="token constant">AST</span>树后，会被Ignition转换器转成字节码bytecode，字节码再转成汇编代码，通过汇编代码去运行不同平台上的<span class="token constant">CPU</span>指令得到运行结果\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>未完待续...</p>', 47);
const _hoisted_48 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_48);
}
const V8_Engine_yi__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "V8 Engine(yi).html.vue"]]);
export {
  V8_Engine_yi__html as default
};