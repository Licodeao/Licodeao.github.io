import { _ as _export_sfc, o as openBlock, c as createElementBlock, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>最近将生产力换成了Mac OS，用着很舒服。令人头疼的是之前在Win本上的文件资料也需要转移到Mac上，没有去买硬盘，所以直接用百度网盘转移算了，正巧也是会员。其他文件转移挺顺利的，但唯独shell文件转移到Mac上后，运行出现了 <code>command not found</code>，我就很纳闷。于是，我自己又在项目里创建了一个<code>1.sh</code> 文件去测试，通过 <code>sh 1.sh</code> 命令发现可以成功输出内容。转头想了想，这个文件是我在Mac上刚刚创建的，不符合从Windows系统迁移过来的情况。于是，我问了问gpt，它说我可能没有增加权限，<code>chmod +x deploy.sh</code> 一顿操作也无济于事。</p><p>最终原因是由于Mac系统下的shell文件的编码格式不同，需要对Mac系统下的文件进行转码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 确保当前文件具有足够的权限</span>\n$ <span class="token function">chmod</span> +x deploy.sh\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 通过 vi 打开文件</span>\n$ <span class="token function">vi</span> deploy.sh\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在当前界面通过 set ff 查看该文件格式</span>\n<span class="token comment"># Windows平台对应的是 fileformat=dos，而Mac上需要的是 fileformat=unix</span>\n$ <span class="token builtin class-name">set</span> ff\n\n<span class="token comment"># 设置文件格式，最后键入 :wq 保存并退出</span>\n$ <span class="token builtin class-name">set</span> <span class="token assign-left variable">ff</span><span class="token operator">=</span>unix\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经过以上设置，使用命令重新运行shell文件，发现就可以跑起来了。</p>', 6);
const _hoisted_7 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_7);
}
const macShell_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "mac-shell.html.vue"]]);
export {
  macShell_html as default
};
