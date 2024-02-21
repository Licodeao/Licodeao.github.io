import { _ as _export_sfc, o as openBlock, c as createElementBlock, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>正巧，今天看《Head First JavaScript》时，看到了这一章，在理解<strong>函数声明</strong>和<strong>函数表达式</strong>时，遇到了一点问题，自己自言自语地辩论了一会儿，其实一开始我是对的，但自言自语的时候感觉还是差了那么一点点的东西来说服我自己。于是上网查了下，发现我说对了：<strong>因为函数是对象，所以函数名就是指向函数对象的一个引用或指针</strong>。这句话我是这么理解的：<strong>没有函数名，就没有引用或指针了。</strong></p><hr><h2 id="函数声明与函数表达式" tabindex="-1"><a class="header-anchor" href="#函数声明与函数表达式" aria-hidden="true">#</a> 函数声明与函数表达式</h2><p>再来，首先来说说函数声明与函数表达式的概念：</p><p>函数声明：一个标准的函数声明包含4大块（关键字function、函数名、形参、代码块），这四个缺一个都不是标准的函数声明，当然普通的函数声明肯定也是或者包含在标准里面。如：<code>function quake(num) { ... };</code></p><p>函数表达式：顾名思义，既然是表达式，就必定返回一个值。左边是一个变量，但函数表达式的右边是一个没有函数名的函数，而非一个值。如：<code>var fly = function(num){ ... };</code></p><hr><h2 id="浏览器如何执行javascript代码" tabindex="-1"><a class="header-anchor" href="#浏览器如何执行javascript代码" aria-hidden="true">#</a> 浏览器如何执行JavaScript代码</h2><p>了解了概念，就说说<strong>浏览器如何执行JavaScript代码</strong>：1、在执行任何代码之前，浏览器先查找代码中是否存在函数声明，若有，浏览器则会创建相应的函数，并把创建得到的函数引用赋值给与函数名同名的变量中，也就相当于存储在变量中。（这里又要注意一个点：<strong>不管是对象还是函数，我们把它们存储在变量中时，实际上存储的都是对象的引用或者函数的引用，而非整个函数或对象，因为变量装不下整个函数或对象</strong>）2、浏览器找完函数声明后，就会从上到下依次执行代码，在这其中函数表达式会和其余代码一同执行（这里的意思是<strong>函数表达式没有什么特殊性</strong>，在浏览器看来就和普通代码一样），当浏览器执行到函数表达式时，遇到了左边的变量，于是就创建这个变量，然后，遇到了右边，发现右边是个函数，于是浏览器就把函数存储起来，以便在其被调用时获取它。<strong>但怎么获取呢？浏览器发现它不是函数声明，不用创建函数，但发现它是函数表达式！所以浏览器就创建一个指向这个函数的引用，通过这个引用，后面我们就能调用这个函数了</strong>。3、处理完了函数表达式，浏览器就接着往下执行代码了......</p><hr><blockquote><p>我们总结一下两个各自的特点：</p></blockquote><p><strong>函数声明：有函数名、无返回值、浏览器执行代码时首先找它、浏览器会创建相应的函数。</strong></p><p><strong>函数表达式：无函数名、有返回值、浏览器不重视它、浏览器会创建一个指向函数的引用。</strong></p><hr><p>我们再来说说这两个本质都是函数的函数，它们的<strong>引用</strong>在哪里呢？</p><p>上面的浏览器执行过程中，我们提到了<strong>浏览器在处理函数声明时，浏览器会将引用赋值给与函数名同名的变量；而函数表达式则会返回一个引用。<strong>上面提到，函数表达式首先是一个表达式，表达式必定返回一个值，而这个值对于函数表达式来说肯定不是一个数值。我们再看看上面函数表达式的概念，左边是一个</strong>变量</strong>，既然是变量，右边又是一个函数，那么表达式返回的一定是<strong>一个指向函数的引用</strong>！所以，函数声明是<strong>将指向函数的引用赋值给了变量</strong>，而函数表达式则<strong>返回了指向函数的引用</strong>。</p><hr><h2 id="最后来总结一下" tabindex="-1"><a class="header-anchor" href="#最后来总结一下" aria-hidden="true">#</a> 最后来总结一下</h2><p>1、函数是对象，函数名是指向函数的引用或者指针（没有函数名就不存在引用或指针）。</p><p>2、相同点：在浏览器执行代码的过程中，二者都创建了函数和变量；不同点：函数声明是将引用存储在与函数名同名变量中，直接通过函数名调用函数，没有返回值。而函数表达式返回一个指向函数的引用，只能通过变量名来调用函数。其实就是最终结果的差别：<strong>一个最终将引用赋给变量存储，一个最终将引用作为值返回。</strong></p><p>3、还有一个不同点：函数声明，将在<strong>执行代码前</strong>创建；而函数表达式，则将在<strong>运行阶段</strong>创建。这明白浏览器是如何执行JavaScript代码就行。</p><p>好了，这就是我的思考与总结，发现自己对函数豁然开朗，面对函数不再感到害怕了。希望自己接下来多多思考，待这本书看完，我会总结这本书上的重点再发出来，加油！</p>', 22);
const _hoisted_23 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_23);
}
const JavaScript_Function_Reference_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "JavaScript Function Reference.html.vue"]]);
export {
  JavaScript_Function_Reference_html as default
};