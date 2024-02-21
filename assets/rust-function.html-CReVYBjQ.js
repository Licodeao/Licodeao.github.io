import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, e as withCtx, b as createTextVNode, a as createBaseVNode, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><p>Rust 通过 <code>fn</code> 关键字声明函数，函数和变量名的命名规范都使用 <code>snake case</code> 风格，所有字母都是小写且通过下划线进行分割。</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Main Function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">anthor_fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">anthor_fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Anthor Function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Rust 并不关心函数的定义位置，你可以定义在 <code>main</code> 函数的前面和其他任何位置，这点和灵活的 <code>JavaScript</code> 是一样的。</p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>参数是特殊的变量，它属于函数签名的一部分。当函数拥有参数（形参）时，可以为这些参数提供实际的值（实参）；</p>', 6);
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<p>定义多个参数时，使用 <code>逗号</code> 分隔：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">test</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token char">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span> c<span class="token punctuation">:</span> <span class="token keyword">char</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;The value of x is: {x}, the value of c is {c}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语句和表达式" tabindex="-1"><a class="header-anchor" href="#语句和表达式" aria-hidden="true">#</a> 语句和表达式</h3><p>Rust 也是一门基于表达式的语言，这也是与其他语言更显著的区别。</p><blockquote><p>什么是语句？什么又是表达式？</p></blockquote><p>语句：执行一些操作，但是不返回值的指令</p><p>表达式：计算并产生值</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token comment">// 语句</span>\n<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 表达式</span>\n<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>\n  x <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// 表达式的结尾没有分号，如果加上了分号就变成了语句，这个代码块的值被直接绑定到了变量 y 上</span>\n<span class="token punctuation">}</span>\n\n<span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;The value of y is: {y}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="具有返回值的函数" tabindex="-1"><a class="header-anchor" href="#具有返回值的函数" aria-hidden="true">#</a> 具有返回值的函数</h3><p>通过 <code>-&gt;</code> 声明返回值的类型</p>', 10);
const _hoisted_17 = /* @__PURE__ */ createStaticVNode('<p>使用 <code>return</code> 关键字和指定值，可以从函数中提前返回，但大部分函数都是隐式返回的。</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">num</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>\n  <span class="token number">6</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">num</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  \n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;The value of num is: {num}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给函数加上参数</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">num</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>\n  x <span class="token operator">+</span> <span class="token number">1</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">num</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  \n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;The value of num is: {num}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在 返回值的末尾加上分号，这会导致一个类型错误：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">num</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>\n  x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 加上分号</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">num</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  \n  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;The value of num is: {num}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code>   <span class="token operator">|</span>\n<span class="token number">63</span> <span class="token operator">|</span> <span class="token keyword">fn</span> <span class="token function-definition function">num</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>\n   <span class="token operator">|</span>    <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>            <span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span> expected `<span class="token keyword">i32</span>`<span class="token punctuation">,</span> found `<span class="token punctuation">(</span><span class="token punctuation">)</span>` <span class="token comment">// 语句不返回值，所以返回一个单位类型()，表示空值</span>\n   <span class="token operator">|</span>    <span class="token operator">|</span>\n   <span class="token operator">|</span>    implicitly returns `<span class="token punctuation">(</span><span class="token punctuation">)</span>` <span class="token keyword">as</span> its body has no tail or `<span class="token keyword">return</span>` expression\n<span class="token number">64</span> <span class="token operator">|</span>   x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n   <span class="token operator">|</span>        <span class="token operator">-</span> help<span class="token punctuation">:</span> remove this semicolon to <span class="token keyword">return</span> this value <span class="token comment">// 编译器提示信息</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要是因为产生了类型不匹配的错误，并且 Rust 的编译器还会给你一条提示信息，帮助你去修改错误。</p><p>不得不说，Rust 的编译器真的牛～</p>', 9);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("在函数签名中，必须显式地声明每个参数的类型")
      ]),
      _: 1
      /* STABLE */
    }),
    createTextVNode("。这是 Rust 的一个设计：要求在函数定义中提供参数的类型注解，这有助于编译器理解你的意图并能给出更有用的错误提示信息。"),
    _hoisted_7,
    createBaseVNode("p", null, [
      createTextVNode("在 Rust 中，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("函数的返回值等同于函数体最后一个表达式的值")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。正由于是最后一个表达式的值，所以它"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("并无分号")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("！")
    ]),
    _hoisted_17
  ]);
}
const rustFunction_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "rust-function.html.vue"]]);
export {
  rustFunction_html as default
};