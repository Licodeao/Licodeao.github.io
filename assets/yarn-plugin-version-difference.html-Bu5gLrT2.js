import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<ol><li><p>首先，查看两台电脑的镜像源是否一致：</p><p>发现其中一台电脑的镜像源为<code>https://registry.yarnpkg.com</code>，于是改成一样的镜像源，再尝试了一番，发现依然不同，其中笔记本是一直能获取到最新的版本，而公司电脑却只能查询到之前的版本。</p></li><li><p>其次，查看 npm&amp;yarn 版本是否一致”</p><p>检查后，两台电脑 npm 版本一致，并且都能查询到最新版本；yarn 版本基本一致，一个是 v1.22.9，一个是 v1.22.14，但我认为这不是大版本更新，没啥问题，所以排除了。</p></li><li><p>查看 npm&amp;yarn 查询策略</p><ul><li><p>npm 查询线上版本时，默认先直接从线上仓库查询，而非优先本地缓存</p></li><li><p>yarn 查询线上版本时，默认先从本地缓存中查询，而非线上仓库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 如果要强制从线上仓库中查询，使用以下命令</span>\n$ <span class="token function">yarn</span> info <span class="token operator">&lt;</span>package-name<span class="token operator">&gt;</span> versions --no-cache\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>将 yarn 的查询策略改为强制从线上仓库中查询后，依然查询不到最新版本。</p></li><li><p>查看两台电脑的网络环境是否一致</p><p>查看笔记本的网络环境：公司 WiFi + 无 VPN，公司电脑的网络环境：公司网线 + 有 VPN</p><p>对比后，关闭公司电脑上的 VPN，再进行查询线上版本，发现可以查询到最新版本了。</p></li></ol><p>造成这样问题的原因有很多，如：</p><ul><li>yarn 的配置不同</li><li>镜像源不同</li><li>查询策略不同</li><li>网络环境不同</li><li>是否开启了代理</li><li>等等...</li></ul>', 3);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("p", null, [
      createTextVNode("今天在"),
      createVNode(_component_font, { style: { "text-decoration": "line-through", "color": "gray", "text-decoration-thickness": "3px" } }, {
        default: withCtx(() => [
          createTextVNode("摸鱼")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("搬砖中，发现之前写的 babel 插件在运用时有点问题，于是在更新后便在我的笔记本上发布了。发布成功后，在公司的电脑上安装插件时，发现命令行出现的还是以前的版本，这就很奇怪了，明明都推上去了怎么还是下载的以前版本呢？")
    ]),
    _hoisted_1
  ]);
}
const yarnPluginVersionDifference_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "yarn-plugin-version-difference.html.vue"]]);
export {
  yarnPluginVersionDifference_html as default
};
