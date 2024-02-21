import { _ as _export_sfc, o as openBlock, c as createElementBlock, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>最近在进行更改一个项目时，由于是老项目，发现项目中还在使用tslint进行自动格式化代码，但很尴尬的是tslint早已被废弃了，转投eslint了，但项目都拉下来了，而且电脑里还是全新的VS Code，什么插件配置都没安装。那怎么办嘛？遇到困难就去尝试解决啰~</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><ul><li><p>首要的是安装tslint插件</p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/486397993203053251.png" width="100%"></li><li><p>然后通过<code>Ctrl + , </code>快捷键打开设置面板，搜索Default Formatter，将其值设置为TSLint(deprecated)</p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/277918476352909413.png"></li><li><p>随后在VS Code右下角的 <code>{ }</code> 图标中，选择&quot;使用工作区版本&quot;的TypeScript</p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/506315008781405659.png" width="100%"><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/120757996874422801.png" width="100%"></li><li><p>同时，在settings.json文件中，添加以下配置：</p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/640705701755363270.png" width="100%"><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;tslint.autoFixOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>至此，关于tslint配置不生效的问题就能够顺利解决了。</p>', 4);
const _hoisted_5 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_5);
}
const tslintConfigurationError_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "tslintConfigurationError.html.vue"]]);
export {
  tslintConfigurationError_html as default
};
