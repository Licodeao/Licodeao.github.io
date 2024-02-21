import { _ as _export_sfc, o as openBlock, c as createElementBlock, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="起因" tabindex="-1"><a class="header-anchor" href="#起因" aria-hidden="true">#</a> 起因</h2><p>今天在重写工作室小程序时，由于使用的是uniapp框架，所以在原有的ColorUI上，外加了uView组件库(原配一起使用当然更加顺滑😋)</p><p>使用Hbuilder X导入uView组件库，在配置时一直报错，怀疑引入方式错了，于是根据文件目录路径，改成了下面这种方法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n*	main.js\n*/</span>\n<span class="token keyword">import</span> uView <span class="token keyword">from</span> <span class="token string">&#39;../components/uview-v1/uview-v1.vue&#39;</span>\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>uView<span class="token punctuation">)</span>\n\n<span class="token doc-comment comment">/**\n*	uni.scss\n*/</span>\n<span class="token keyword">import</span> <span class="token string">&#39;theme.scss&#39;</span>\n\n结果：编译成功<span class="token operator">...</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在改完编译成功后，我尝试了几种组件，发现都有效果，于是就没有在意了...</p><p>当使用到u-navbar这个组件时，出现了报错并且，默认的左箭头在<strong>is-back为true</strong>的情况下，怎样都弹出不了...</p><p>然后，我就找之前用uView组件库写的项目找了出来，并复制了一段有用到u-navbar组件的代码放到此项目上，依然报错...</p><p>我左思右想，怎么会出错呢，我也跑了一遍之前的项目，发现依然有效果。</p><p>最后，我对比两个项目的package.json文件，查看了两个项目的dependencies是否一致，发现没问题。</p><h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h2><p>重装呢？</p><p>我uninstall了uView并重装了一下，并且重新按照官方文档的配置方式：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n*	main.js\n*/</span>\n<span class="token keyword">import</span> uView <span class="token keyword">from</span> <span class="token string">&quot;uview-ui&quot;</span>\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>uView<span class="token punctuation">)</span>\n\n<span class="token doc-comment comment">/**\n*	uni.scss\n*/</span>\n@<span class="token keyword">import</span> <span class="token string">&#39;uview-ui/theme.scss&#39;</span>\n\n结果：u<span class="token operator">-</span>navbar的使用没有问题\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bug总结" tabindex="-1"><a class="header-anchor" href="#bug总结" aria-hidden="true">#</a> Bug总结</h2><p>​ 重新思考了一下，当使用<code>import uView from &#39;../components/uview-v1/uview-v1.vue&#39;</code>引入时，去追溯源文件，会发现uview-v1.vue这个文件是空的，而之所以使用其他组件成功，是因为在components目录下已经存在大量导入的组件源码了。并且，在<code>import &#39;theme.scss&#39;</code>时，文件也被找到了，因此会<strong>误导用户以为uView配置完成，实际上某些组件会出现令人匪夷所思的Bug</strong>(如u-navbar)。本地之前已经安装过uView组件库的情况下，使用Hbuilder X导入uView组件库，在配置时仍然会报错，怀疑路径遭到了污染。因此，算是踩到了一个坑：<strong>之前本地若安装过uView的情况下，最好不要使用Hbuilder X导入uView组件库</strong>。最好是，<strong>uninstall之前的uView组件库，再重新下载</strong>，这样避免了路径遭到污染的情况，一步到位。</p>', 15);
const _hoisted_16 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_16);
}
const the_bug_of_uView_components_lib_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "the bug of uView components lib.html.vue"]]);
export {
  the_bug_of_uView_components_lib_html as default
};
