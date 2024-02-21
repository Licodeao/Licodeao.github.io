import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>什么是前端模块化？你知道哪些前端模块化规范？</p><h2 id="解题" tabindex="-1"><a class="header-anchor" href="#解题" aria-hidden="true">#</a> 解题</h2><p>说到前端模块化，可能最先映入脑海的就是CommonJS规范了，或者还有ES Module，但这种规范解决了什么问题呢？</p><h3 id="什么是前端模块化" tabindex="-1"><a class="header-anchor" href="#什么是前端模块化" aria-hidden="true">#</a> 什么是前端模块化</h3><p>随着Web应用日益复杂，就造成了需要更多的可管理和可重用的代码，于是模块化编程呼之欲出。也就是说，前端模块化解决了代码杂乱无章的问题，以应对越来越复杂的Web应用。</p><h3 id="前端模块化规范有哪些" tabindex="-1"><a class="header-anchor" href="#前端模块化规范有哪些" aria-hidden="true">#</a> 前端模块化规范有哪些？</h3><p>以历史的发展历程来叙述，可以有以下规范：</p><ul><li>全局函数式编程</li><li>命名空间模式</li><li>CommonJS</li><li>AMD</li><li>CMD</li><li>UMD</li><li>ES Module</li></ul><p>就来说说这些规范吧</p><h4 id="全局函数" tabindex="-1"><a class="header-anchor" href="#全局函数" aria-hidden="true">#</a> 全局函数</h4><blockquote><p>顾名思义，通过全局声明变量和函数的方式来管理代码</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> module <span class="token operator">=</span> <span class="token string">&#39;moduleData&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">moduleFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>module<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该规范的缺点：</p><ul><li>容易造成命名冲突</li><li>函数之间的依赖关系不明确</li><li>维护困难，有一定成本</li></ul><h4 id="命名空间模式" tabindex="-1"><a class="header-anchor" href="#命名空间模式" aria-hidden="true">#</a> 命名空间模式</h4><blockquote><p>通过定义全局对象，将所有函数和变量都封装进这个全局对象中</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> myNameSpace <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">moduleData</span><span class="token operator">:</span> <span class="token string">&#39;moduleData&#39;</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">moduleFunction</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>moduleData<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该规范的缺点：</p><ul><li>虽然解决了命名冲突的问题，但是模块之间的依赖关系仍然不清晰</li><li>所有依赖都需要在对象内手动进行管理</li></ul><h4 id="commonjs" tabindex="-1"><a class="header-anchor" href="#commonjs" aria-hidden="true">#</a> CommonJS</h4><blockquote><p>通过require函数加载模块，module.exports导出模块</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// a.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token string">&#39;Hello Module&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// b.js</span>\n<span class="token keyword">var</span> a <span class="token operator">=</span>  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 &#39;Hello Module&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Node中，我们经常可以看到require和module.exports（当然，时至今日也可以用ES Module来管理代码了），这就是CommonJS规范了。</p><h5 id="require函数的作用与实现" tabindex="-1"><a class="header-anchor" href="#require函数的作用与实现" aria-hidden="true">#</a> require函数的作用与实现</h5><ul><li>作用：根据模块的文件路径读取模块文件，然后执行模块代码，最后返回模块的exports对象</li><li>实现：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token parameter">modulePath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 读取模块代码</span>\n    <span class="token keyword">const</span> code <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>modulePath<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n    <span class="token comment">// 包装模块代码</span>\n    <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">Function</span><span class="token punctuation">(</span><span class="token string">&#39;exports&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;require&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;_filename&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;_dirname&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n return module.exports</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> module <span class="token operator">=</span> <span class="token punctuation">{</span> exports <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    \n    <span class="token comment">// 执行模块代码</span>\n    <span class="token function">wrapper</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span> require<span class="token punctuation">,</span> module<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n    <span class="token comment">// 返回模块的exports对象</span>\n    <span class="token keyword">return</span> module<span class="token punctuation">.</span>exports\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>require函数在执行模块代码时，会先将模块代码封装进一个函数中，然后调用该函数。</p><p>这样做的好处是：可以将模块代码隔离到一个函数作用域中，防止模块内的变量污染全局作用域。</p><h5 id="exports和module-exports之间有什么关系呢" tabindex="-1"><a class="header-anchor" href="#exports和module-exports之间有什么关系呢" aria-hidden="true">#</a> exports和module.exports之间有什么关系呢</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> exports <span class="token comment">// 在模块的顶层进行赋值</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一旦module.exports = { }，则exports上的任何修改都不会影响module.exports</p><h5 id="require的查找规则" tabindex="-1"><a class="header-anchor" href="#require的查找规则" aria-hidden="true">#</a> require的查找规则</h5><blockquote><p>导入格式：require(path)</p></blockquote>', 34);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "情况一："),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "如果path是一个核心模块，如fs、http等模块"),
      /* @__PURE__ */ createBaseVNode("li", null, "直接返回核心模块，并且停止查找")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "情况二：",
  -1
  /* HOISTED */
);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "如果path是以 ./ 或 ../ 或 /(根目录) 开头的",
  -1
  /* HOISTED */
);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "如果有后缀名，则按照后缀名的格式查找对应的文件",
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createTextVNode("如果没有后缀名，按照以下顺序： "),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "直接查找path文件"),
      /* @__PURE__ */ createBaseVNode("li", null, "查找path.js文件"),
      /* @__PURE__ */ createBaseVNode("li", null, "查找path.json文件"),
      /* @__PURE__ */ createBaseVNode("li", null, "查找path.node文件")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "查找path目录下的index文件"),
    /* @__PURE__ */ createBaseVNode("li", null, "查找path/index.js文件"),
    /* @__PURE__ */ createBaseVNode("li", null, "查找path/index.json文件"),
    /* @__PURE__ */ createBaseVNode("li", null, "查找path/index.node文件")
  ],
  -1
  /* HOISTED */
);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "如果当作文件和目录都没有找到，则报错：not found",
  -1
  /* HOISTED */
);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "情况三："),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "直接是一个path，并且path不是一个核心模块时"),
      /* @__PURE__ */ createBaseVNode("li", null, "直接在node_modules中去找"),
      /* @__PURE__ */ createBaseVNode("li", null, "如果没找到，则报错：not found")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_43 = /* @__PURE__ */ createStaticVNode('<h5 id="module-exports的作用" tabindex="-1"><a class="header-anchor" href="#module-exports的作用" aria-hidden="true">#</a> module.exports的作用</h5><ul><li>在CommonJS中，每个模块都有一个module对象，在该对象中有一个exports属性用于导出模块</li><li>当其他模块通过require函数导入一个模块时，其实获取到的就是module.exports对象</li><li>module.exports的初始值是一个空对象：module.exports = { }</li></ul><h4 id="amd" tabindex="-1"><a class="header-anchor" href="#amd" aria-hidden="true">#</a> AMD</h4><blockquote><p>AMD（Asynchronous Module Definition，由RequireJS提出），根据名字就能看出，AMD规范具有异步加载的特性。</p><p>通过define函数定义模块</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// AMD</span>\n<span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;dependency&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&#39;module content&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优点：</p><ul><li>支持异步加载，适合浏览器环境</li></ul><p>缺点：</p><ul><li>语法较为复杂</li></ul><h4 id="cmd" tabindex="-1"><a class="header-anchor" href="#cmd" aria-hidden="true">#</a> CMD</h4><blockquote><p>CMD（Common Module Definition），也是一种适用于浏览器的模块化解决方案</p></blockquote><p>特点：</p><ul><li>支持异步加载模块</li><li>适用于浏览器环境</li><li>同时汲取了CommonJS的优点</li></ul><h4 id="umd" tabindex="-1"><a class="header-anchor" href="#umd" aria-hidden="true">#</a> UMD</h4><blockquote><p>UMD（Universal Module Definition），是一种前后端跨平台的模块化解决方案</p><p>UMD = CommonJS + AMD</p></blockquote><p>实现原理：</p><ul><li>先判断是否支持CommonJS规范，即Node的exports对象是否存在，存在则使用</li><li>再判断是否支持AMD规范，即define函数是否存在，存在则使用</li><li>最后如果两者都不存在，则将模块暴露到全局中</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> factory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> define <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span> define<span class="token punctuation">.</span>amd<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// AMD</span>\n        <span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;jquery&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> factory<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> exports <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// Node, CommonJS</span>\n        module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jquery&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 暴露到全局中</span>\n        root<span class="token punctuation">.</span>returnExports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>jQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">$</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 模块代码</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="es-module" tabindex="-1"><a class="header-anchor" href="#es-module" aria-hidden="true">#</a> ES Module</h4><blockquote><p>由ECMA Script自己推出的模块化解决方案</p><p>通过import导入模块、export导出模块</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// a.js</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token string">&#39;Hello world&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// b.js</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> a <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./a.js&#39;</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 &#39;Hello world&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特点：</p><ul><li>自动开启严格模式</li><li>支持异步加载模块</li><li>具有静态性，使得模块之间的依赖关系更加清晰</li><li>既可以在Node环境中使用，也可以在浏览器环境中使用</li></ul><h5 id="异步加载模块" tabindex="-1"><a class="header-anchor" href="#异步加载模块" aria-hidden="true">#</a> 异步加载模块</h5><p>异步加载意味着JavaScript引擎遇到import时会去获取这个文件，但这个获取的过程是异步的，并不会阻塞主线程的继续执行。</p><p>也就是说在script标签上设置了 <code>type = module</code> 的代码，相当于在script标签上加上了async属性</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;main.js&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;module&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n\n<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 下面的js文件不会被阻塞执行 <span class="token operator">--</span><span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>scirpt src<span class="token operator">=</span><span class="token string">&quot;index.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>scirpt<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="静态性" tabindex="-1"><a class="header-anchor" href="#静态性" aria-hidden="true">#</a> 静态性</h5><blockquote><p>什么是静态性？</p><p>指模块在编译阶段进行静态分析和解析，并且模块的依赖关系是在编译时确定的，而不是在运行时。</p><p>这意味着在编译时，模块之间的依赖关系是固定的，不会受到运行时条件或动态变化的影响</p></blockquote><p>静态性带来的优势：</p><ul><li>静态分析 <ul><li>编译器可以在编译时分析模块的依赖关系，并进行优化和静态检查</li></ul></li><li>提前解析 <ul><li>模块的依赖关系在编译时就已经确定了，因此可以提前解析和加载依赖，减少了运行时的解析和查找时间，提高了性能</li></ul></li><li>静态优化 <ul><li>由于模块的依赖关系是在编译时确定的，如tree-shaking等优化技术就可以在编译时进行优化，从而减少最终的代码体积</li></ul></li></ul><h5 id="es-module的跨域问题" tabindex="-1"><a class="header-anchor" href="#es-module的跨域问题" aria-hidden="true">#</a> ES Module的跨域问题</h5><p>通过ES Module规范引入一个本地HTML文件时，控制台会出现CORS跨域问题（这是由于JavaScript模块的安全性需要）</p><blockquote><p>如何避免这种跨域问题？</p></blockquote><ul><li>开启一个本地服务器</li><li>通过IDE上的类似Live Server的工具进行开发</li></ul><p>至此，前端模块化的知识算是梳理并总结完了，撒花~</p>', 36);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      _hoisted_35,
      createBaseVNode("li", null, [
        _hoisted_36,
        createBaseVNode("ul", null, [
          _hoisted_37,
          createBaseVNode("li", null, [
            createTextVNode("先当作文件来查找，后当作目录来查找 "),
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, [
                createVNode(_component_font, { color: "red" }, {
                  default: withCtx(() => [
                    createTextVNode("将path当作文件")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createTextVNode("在对应的目录下查找")
              ]),
              _hoisted_38,
              _hoisted_39,
              createBaseVNode("li", null, [
                createTextVNode("没有找到对应的文件，"),
                createVNode(_component_font, { color: "red" }, {
                  default: withCtx(() => [
                    createTextVNode("将path当作目录")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                _hoisted_40
              ])
            ])
          ]),
          _hoisted_41
        ])
      ]),
      _hoisted_42
    ]),
    _hoisted_43
  ]);
}
const qianduanmokuaihuazongjie_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "qianduanmokuaihuazongjie.html.vue"]]);
export {
  qianduanmokuaihuazongjie_html as default
};
