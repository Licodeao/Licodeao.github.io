import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, d as createVNode, e as withCtx, b as createTextVNode, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="图片资源优化" tabindex="-1"><a class="header-anchor" href="#图片资源优化" aria-hidden="true">#</a> 图片资源优化</h2><p>在前端资源中，图片所占的资源消耗可以说是比足轻重，所以优化图片资源消耗就显得很重要了。借着 “我的博客背景图每次加载时都很慢” 的问题，来捋一捋图片优化的方法以及相关优化手段。</p><p>在当今，图片资源所面临的诸多问题：</p><ul><li>图片资源体积过大，造成占用的资源过多，加载耗时过长</li><li>CDN 流量开销过高</li><li>直接影响用户体验，并且影响两个测量指标：LCP(最大内容绘制) 和 FCP(首次内容绘制)</li></ul><p>现如今我们在浏览器上可以很多图片格式，如常见的 <code>JPG</code> / <code>JPEG</code> / <code>PNG</code> 等等，同时又出现了新兴的图片格式，如 <code>AVIF</code> 和 <code>WEBP</code> 。既然出现了新图片格式，必然解决了某些问题：</p><table><thead><tr><th>格式</th><th>特点</th><th>浏览器兼容性</th></tr></thead><tbody><tr><td><code>jpg</code></td><td>应用最广泛的图片格式，体积中等，一般小于 <code>gif</code> 和 <code>png</code></td><td>几乎所有浏览器都支持</td></tr><tr><td><code>png</code></td><td>支持图片部分透明，体积较大</td><td>几乎所有浏览器都支持</td></tr><tr><td><code>gif</code></td><td>支持动态图片，体积较大</td><td>几乎所有浏览器都支持</td></tr><tr><td><code>svg</code></td><td>矢量图，任意缩放都不影响清晰度，体积由内容决定</td><td>Chrome 4 以上版本支持</td></tr><tr><td><code>webp</code></td><td>支持动态图片，支持压缩(有损压缩、无损压缩)，专注 Web 端，体积较小</td><td>Chrome 32 以上版本</td></tr><tr><td><code>avif</code></td><td>支持动态图片，只支持压缩，体积较小</td><td>Chrome 85 以上版本</td></tr></tbody></table><p align="center">（表中的兼容性都来自 <a href="https://caniuse.com/">caniuse</a>）</p><p>可以从表看出：</p>', 8);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "如果我们使用现代图片格式就能够明显的解决 “图片资源体积大、加载耗时长、CDN 开销较大” 的问题，但是仍然会面临浏览器兼容性的问题，难道鱼和熊掌真的不可兼得吗？",
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "你别说，你还真别说，还真有个方案可以。",
  -1
  /* HOISTED */
);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "picture-标签",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#picture-标签",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" picture 标签")
  ],
  -1
  /* HOISTED */
);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "[!NOTE]",
  -1
  /* HOISTED */
);
const _hoisted_13 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/picture",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_14 = /* @__PURE__ */ createStaticVNode('<p>MDN 说：<strong>picture</strong> 元素可以包含零或多个 <strong>source</strong> 元素和一个 <strong><img></strong> 元素，来为不同的场景提供最佳的图像版本。浏览器会选择最匹配的子 <strong>source</strong> 元素，如果没有匹配的，就选择 <strong><img></strong> 元素所指向的图像，你可以把 <strong><img></strong> 元素看成是兜底的。</p><p>也就是说 <strong>picture</strong> 元素允许同时引入多个图片格式的子元素，并根据浏览器的兼容性，按照先后顺序来自动加载其中一种图片格式的图片，实现所有用户根据自身兼容性，获取到最优的图片格式。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picture</span><span class="token punctuation">&gt;</span></span>\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(orientation: portrait)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image/webp<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image/avif<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picture</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码中，有两个 <strong>source</strong> 元素和一个 <strong><img></strong> 元素，如果在浏览器上跑起来，那么只会触发 <code>webp</code> 一个图片资源的下载，正如前面所说的，浏览器会按照从上到下的顺序检查 <strong>source</strong> 元素，并且加载第一个浏览器兼容的图片格式，从而忽略后面的 <strong>source</strong> 元素和 <strong><img></strong> 元素。即使所有的 <strong>source</strong> 元素声明的图片格式浏览器都能够兼容，那也只会下载第一个 <strong>source</strong> 所指向的图片资源。</p><p>另外，可以看到代码中还有个 <code>media</code> 属性，它是一个用于选择的媒体条件，如果这个媒体条件匹配结果为 <code>false</code> ，那么这个 <code>source</code> 元素会被跳过。</p><blockquote><p>[!WARNING]</p><p><code>picture</code> 元素必须有一个 <code>img</code> 子元素，如果只有 <code>source</code> 元素，浏览器不会加载 <code>source</code> 元素的 <code>srcset</code> 属性对应的图片资源</p></blockquote><p>也就是说，即使用户的浏览器既不支持 <strong>source</strong> 元素指定的图片格式，甚至也不支持 <strong>picture</strong> 元素，浏览器也会自动降级到使用 <strong><img></strong> 元素，确保始终有正确的图片资源能够加载。所以，可以在</p><p><strong><img></strong> 元素中使用传统图片格式这种兼容性好的方案作为兜底。</p><p>有了 <strong>picture</strong> 元素，还可以进一步与组件进行融合，封装出加载最优图片格式的图片组件：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> imageFormatter <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;avif&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;webp&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">BestImage</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> src<span class="token punctuation">,</span> alt <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picture</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n    	</span><span class="token punctuation">{</span>\n        imageFormatter<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">formatter</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token punctuation">(</span>\n          	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span>\n              <span class="token comment">// getImageUrl 是基于图片 CDN 封装的一个函数，用于获取指定格式的图片，这里不作实现</span>\n              <span class="token attr-name">srcset</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">getImageUrl</span><span class="token punctuation">(</span>src<span class="token punctuation">,</span> <span class="token punctuation">{</span> formatter <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">image/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>formatter<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">/&gt;</span></span>\n          <span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>src<span class="token punctuation">}</span></span> <span class="token attr-name">alt</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>alt<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picture</span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图片-cdn" tabindex="-1"><a class="header-anchor" href="#图片-cdn" aria-hidden="true">#</a> 图片 CDN</h3><p>图片 CDN 能够高效地生成各种格式的图片，专用于处理图片类型的各种资源。云服务商们都有提供这个 图片 CDN 能力，你可以在上面实现自己的各种需求，如体积压缩、尺寸缩放、添加水印等等。具体的实现，可以去看各大云服务商们的文档即可。</p><h3 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h3><p>通过上方的优化方案，来优化博客的背景图片。</p><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20240221163716666.png" alt="image-20240221163716666"></p><p>可以看到背景图片是 <code>jpeg</code> 格式，<code>jpeg</code> 和 <code>jpg</code> 其实是同一个图像文件格式，它们只是文件扩展名的不同表示方式，在技术实现上是一致的。<code>jpeg</code> 是联合图像专家组的缩写（Joint Photographic Experts Group），而 <code>jpg</code> 是 <code>jpeg</code> 文件的常见文件扩展名之一，也就是说 <code>jpeg</code> 和 <code>jpg</code> 其实是父子关系，本质都是一样的。</p><p>跑题了，从上图可以看到背景图片是 <code>jpeg</code> 格式，也就是 <code>jpg</code> 格式，且它的体积大小为 <code>3.3MB</code>，这算挺大的了，所以优化它的体积是迫在眉睫的事情。可以去压缩它，但会破坏画质，也可以转换成其他图片格式，这些工作都可以交给 <code>&lt;picture&gt;</code> 元素来搞定。</p><p>但尴尬的是由于我使用的是 <code>Vuepress-theme-reco</code> 主题，且它的配置是通过解析 <code>markdown</code> 文件来实现的，并且文件里的语法还是 <code>yaml</code> ，使用的是 <code>js-yaml</code> 这个库，所以无法去实践 <code>picture</code> 元素优化方案，略显可惜🫢</p><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20240221170705936.png" alt="image-20240221170705936"></p><p>不过机会尚多，可以在其他项目中使用 <code>&lt;picture&gt;</code> 元素优化方案～对于目前这个处境，还是老老实实地转换图片格式和压缩了。</p><p>我们通过在线压缩，将原来的 <code>3.3MB</code> 体积大小，压缩为 <code>489KB</code> 体积大小，不过代价是图片质量为原来的 <code>85%</code> 了</p><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20240221172657510.png" alt="image-20240221172657510"></p><p>我们再通过将该 <code>jpeg</code> 转换为 <code>webp</code> 图片格式，看看效果：</p><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20240221172827288.png" alt="image-20240221172827288"></p><p>可以看到转换后的体积大小为 <code>150KB</code>，足以证明 <code>webp</code> 图片格式的体积较小是尊嘟！</p><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20240221173048741.png" alt="image-20240221173048741"></p><p>我们可以对比两者：左边是 <code>webp</code> 图片格式，它的体积大小是 <code>150KB</code> ；右边是压缩后的 <code>jpeg</code> 图片格式，它的体积大小是 <code>489KB</code>。</p><p>可以从图中看出 <code>webp</code> 图片相对于 <code>jpeg</code> 图片要暗淡点 / 糊点，没办法毕竟体积大小在那里摆着呢，其实整体上感觉还是没什么差别的，只是细微的地方有些清晰度损失罢了。</p>', 28);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("现代图片格式体积普通较小，都支持动态图片和压缩，但兼容性不够好")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("传统图片格式体积普遍较大，但兼容性够好")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _hoisted_9,
    _hoisted_10,
    _hoisted_11,
    createBaseVNode("blockquote", null, [
      _hoisted_12,
      createBaseVNode("p", null, [
        createTextVNode("可以在 "),
        createBaseVNode("a", _hoisted_13, [
          createTextVNode("MDN 文档"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode("查看更多")
      ])
    ]),
    _hoisted_14
  ]);
}
const pictureTag_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "picture-tag.html.vue"]]);
export {
  pictureTag_html as default
};
