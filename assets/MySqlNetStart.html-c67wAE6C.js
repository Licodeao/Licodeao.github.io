import { _ as _export_sfc, o as openBlock, c as createElementBlock, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="前瞻" tabindex="-1"><a class="header-anchor" href="#前瞻" aria-hidden="true">#</a> 前瞻</h2><p>最近，在进行MySQL降版本时，遇到了一个从未遇到的问题，以此记录一下。</p><p>将之前安装的MySQL v8版本降到v5，从网上下载了v5压缩包并解压后，进行安装v5，一切显得很丝滑。</p><p>但在cmd输入net start mysql命令后，最终会显示mysql启动失败，并且没有报告任何错误。</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><p>这是因为根目录下没有data文件夹，需要输入以下命令进行数据初始化。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysqld --initialize-insecure\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果MySQL安装根目录下出现了data文件夹，即表明成功。</p><p>为何data文件夹如此重要，因为在配置my.ini时，需要用到该文件路径。</p>', 9);
const _hoisted_10 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_10);
}
const MySqlNetStart_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "MySqlNetStart.html.vue"]]);
export {
  MySqlNetStart_html as default
};
