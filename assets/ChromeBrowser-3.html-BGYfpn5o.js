import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "前瞻",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#前瞻",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 前瞻")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "为什么通常在第一次访问一个站点时，打开速度很慢，当再次访问这个站点时，速度就很快了？",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "为什么登录过一个网站后，下次再访问这个站点时，就已经处于登录的状态了？",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "这一切的秘密都需要HTTP协议来解答。",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "浏览器端发起http请求流程",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#浏览器端发起http请求流程",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 浏览器端发起HTTP请求流程")
  ],
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "👇",
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "👇",
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "👇",
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "👇",
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "👇",
  -1
  /* HOISTED */
);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "构建请求",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#构建请求",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 构建请求")
  ],
  -1
  /* HOISTED */
);
const _hoisted_12 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 请求行信息</span>\n<span class="token constant">GET</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>html <span class="token constant">HTTP1</span><span class="token number">.1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找缓存" tabindex="-1"><a class="header-anchor" href="#查找缓存" aria-hidden="true">#</a> 查找缓存</h3><p>在发送网络请求之前，浏览器会先在浏览器缓存中查询是否有要请求的文件。</p>', 3);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "对于服务器来说，这样做有助于缓解服务器压力，提升性能"),
    /* @__PURE__ */ createBaseVNode("li", null, "对于浏览器来说，这样做可以实现快速资源加载")
  ],
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "准备ip地址和端口",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#准备ip地址和端口",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 准备IP地址和端口")
  ],
  -1
  /* HOISTED */
);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: "https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230413231553324.png",
      alt: "image-20230413231553324"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "从上图中，可以看出：",
  -1
  /* HOISTED */
);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "HTTP请求的第一步是和服务器建立TCP连接"),
    /* @__PURE__ */ createBaseVNode("li", null, "建立连接的信息从哪儿来？建立TCP连接的第一步就是需要准备IP和端口号")
  ],
  -1
  /* HOISTED */
);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "知道了建立连接的信息在哪儿，那么如何获取这些信息呢？")
  ],
  -1
  /* HOISTED */
);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "等待tcp队列",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#等待tcp队列",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 等待TCP队列")
  ],
  -1
  /* HOISTED */
);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "IP地址和端口号已经准备就绪了，是不是就可以进行TCP连接了呢？")
  ],
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "⚠不行，因为Chrome有个机制：",
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "那么也就是说，如果在同一个域名下同时有10个请求发生，其中会有4个请求会进入排队等待状态，直至进行中的请求完成。当然，如果请求数量小于6个，会直接进入建立TCP连接的步骤。",
  -1
  /* HOISTED */
);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "建立tcp连接",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#建立tcp连接",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 建立TCP连接")
  ],
  -1
  /* HOISTED */
);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "发送http请求",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#发送http请求",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 发送HTTP请求")
  ],
  -1
  /* HOISTED */
);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "整个HTTP请求的请求信息被分为三个部分：",
  -1
  /* HOISTED */
);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Host"),
    /* @__PURE__ */ createBaseVNode("li", null, "Connection"),
    /* @__PURE__ */ createBaseVNode("li", null, "Cache-Control"),
    /* @__PURE__ */ createBaseVNode("li", null, "User-Agent"),
    /* @__PURE__ */ createBaseVNode("li", null, "等等其他信息...")
  ],
  -1
  /* HOISTED */
);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "浏览器是如何发送请求信息给服务器的？")
  ],
  -1
  /* HOISTED */
);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "发送请求行，就是告诉服务器浏览器需要什么资源，最常用的请求方法就是GET请求，如直接在浏览器地址栏输入一个域名，代表着告诉服务器要GET它的首页资源。",
  -1
  /* HOISTED */
);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "另外一个常用的请求方法就是POST请求，它用于向服务器发送一些数据，这些数据是通过请求体来发送的。",
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "在浏览器发送请求行命令之后，还要以请求头的形式发送一些其他的信息，把浏览器的一些基础信息告诉服务器，如包含了浏览器所用的操作系统、浏览器内核、当前请求的域名信息、浏览器端的Cookie信息等等。",
  -1
  /* HOISTED */
);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "服务器端处理http请求流程",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#服务器端处理http请求流程",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 服务器端处理HTTP请求流程")
  ],
  -1
  /* HOISTED */
);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "👇",
  -1
  /* HOISTED */
);
const _hoisted_35 = { start: "2" };
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "👇",
  -1
  /* HOISTED */
);
const _hoisted_37 = { start: "3" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "响应请求",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#响应请求",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 响应请求")
  ],
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "在服务器成功收到了来自浏览器的HTTP请求后，服务器便可以根据浏览器的需要来返回数据了。",
  -1
  /* HOISTED */
);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "同样地，服务器向浏览器返回响应信息时，会被分为三个部分：",
  -1
  /* HOISTED */
);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Content-Type"),
    /* @__PURE__ */ createBaseVNode("li", null, "Connection"),
    /* @__PURE__ */ createBaseVNode("li", null, "Last-Modified"),
    /* @__PURE__ */ createBaseVNode("li", null, "Content-Encoding"),
    /* @__PURE__ */ createBaseVNode("li", null, "等等其他信息...")
  ],
  -1
  /* HOISTED */
);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "返回html文件或其他相应的资源")
  ],
  -1
  /* HOISTED */
);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "服务器是如何返回响应信息给浏览器的？")
  ],
  -1
  /* HOISTED */
);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "随后，服务器会向浏览器发送响应头，响应头包含了服务器的一些信息，如服务器生成返回数据的时间、返回的数据类型等等信息。",
  -1
  /* HOISTED */
);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "发送完响应头后，服务器就可以继续发送响应体的数据了，通常情况下，响应头包含了HTML的内容。",
  -1
  /* HOISTED */
);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "断开连接",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#断开连接",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 断开连接")
  ],
  -1
  /* HOISTED */
);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "通常情况下，一旦服务器向客户端返回了请求数据，它就要关闭TCP连接了。",
  -1
  /* HOISTED */
);
const _hoisted_48 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">Connection</span><span class="token operator">:</span> Keep<span class="token operator">-</span>Alive\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', 1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "重定向",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#重定向",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 重定向")
  ],
  -1
  /* HOISTED */
);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "当实际输入的地址和最终打开页面的地址不一样时，说明发生了重定向。",
  -1
  /* HOISTED */
);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "为什么很多站点二次打开的速度会很快",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#为什么很多站点二次打开的速度会很快",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 为什么很多站点二次打开的速度会很快？")
  ],
  -1
  /* HOISTED */
);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "如果第二次页面打开很快，显然是因为第一次加载页面过程中，缓存了一些耗时的数据。",
  -1
  /* HOISTED */
);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "那哪些数据会被缓存呢？")
  ],
  -1
  /* HOISTED */
);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "这两块数据会被浏览器缓存起来，相对来说，DNS缓存比较简单了，主要就是在浏览器本地把对应的IP地址和域名关联起来。",
  -1
  /* HOISTED */
);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "而对于页面资源缓存来说，就较为复杂了，其缓存处理过程为：",
  -1
  /* HOISTED */
);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: "https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230414131336647.png",
      alt: "image-20230414131336647"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "简单来说，很多网站二次访问能够提升速度，是因为这些网站把很多资源都缓存在了本地，浏览器缓存直接使用本地副本来回应请求，而不会产生真实的网络请求，从而节省了时间。同时，DNS数据也被浏览器缓存了，也节约了DNS查询的时间。",
  -1
  /* HOISTED */
);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "登录状态是如何保持的",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#登录状态是如何保持的",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 登录状态是如何保持的？")
  ],
  -1
  /* HOISTED */
);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "通常情况下，用户打开登录页面，输入用户名和密码，点击确定按钮并触发页面脚本生成用户登录信息，调用POST方法将用户信息提交给服务器。",
  -1
  /* HOISTED */
);
const _hoisted_60 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Set<span class="token operator">-</span>Cookie<span class="token operator">:</span> <span class="token constant">UID</span><span class="token operator">=</span>216uad\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', 1);
const _hoisted_61 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">Cookie</span><span class="token operator">:</span> <span class="token constant">UID</span><span class="token operator">=</span>216uad\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>服务器在收到HTTP请求头数据后，就会查找请求头中的Cookie字段信息，当查找到包含UID=216uad的信息时，服务器查询后台，并判断该用户是已登录状态，然后生成含有该用户信息的页面数据，并把生成的数据返回给浏览器。浏览器在接收到含有当前用户的页面数据后，就可以正确地展示用户登录的状态信息了。</p>', 2);
const _hoisted_63 = /* @__PURE__ */ createStaticVNode('<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>浏览器中的HTTP请求从发起到结束一共经历了8个阶段：</p><ol><li>构建请求</li><li>查找缓存</li><li>准备IP地址和端口</li><li>等待TCP队列</li><li>建立TCP连接</li><li>发起HTTP请求</li><li>服务器处理并响应请求</li><li>断开连接</li></ol>', 3);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("HTTP协议是建立在TCP连接基础之上的，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("HTTP协议是一种允许浏览器向服务器获取资源的协议")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，是Web的基础。通常由浏览器发起请求，用来获取不同类型的文件，如HTML文件、CSS文件、JavaScript文件等。此外，HTTP也是浏览器使用最广的协议，因此，对于学好浏览器来说，了解HTTP协议很重要。")
    ]),
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    _hoisted_5,
    createBaseVNode("blockquote", null, [
      createBaseVNode("ol", null, [
        createBaseVNode("li", null, [
          createVNode(_component_font, { color: "red" }, {
            default: withCtx(() => [
              createTextVNode("构建请求")
            ]),
            _: 1
            /* STABLE */
          }),
          _hoisted_6
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_font, { color: "red" }, {
            default: withCtx(() => [
              createTextVNode("查找缓存")
            ]),
            _: 1
            /* STABLE */
          }),
          _hoisted_7
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_font, { color: "red" }, {
            default: withCtx(() => [
              createTextVNode("准备IP地址和端口")
            ]),
            _: 1
            /* STABLE */
          }),
          _hoisted_8
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_font, { color: "red" }, {
            default: withCtx(() => [
              createTextVNode("等待TCP队列")
            ]),
            _: 1
            /* STABLE */
          }),
          _hoisted_9
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_font, { color: "red" }, {
            default: withCtx(() => [
              createTextVNode("建立TCP连接")
            ]),
            _: 1
            /* STABLE */
          }),
          _hoisted_10
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_font, { color: "red" }, {
            default: withCtx(() => [
              createTextVNode("发送HTTP请求")
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ]),
    _hoisted_11,
    createBaseVNode("p", null, [
      createTextVNode("首先，浏览器构建"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("请求行")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("信息，构建好后，浏览器准备发起网络请求")
    ]),
    _hoisted_12,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("浏览器缓存是一种在本地保存资源副本，以便下次请求时直接使用的技术")
      ]),
      _: 1
      /* STABLE */
    }),
    createTextVNode("。"),
    createBaseVNode("p", null, [
      createTextVNode("当浏览器发现"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("请求的资源已经在浏览器缓存中存有副本时，它会去拦截请求，返回该资源的副本，并直接结束请求，而不会再去服务器重新下载了")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。当然，如果缓存查找失败，就会进入网络请求过程了。")
    ]),
    _hoisted_15,
    _hoisted_16,
    createBaseVNode("p", null, [
      createTextVNode("因为"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("浏览器使用HTTP协议作为应用层协议，用来封装请求的文本信息，并使用TCP/IP协议作为传输层协议将它发送到网络上，所以在HTTP工作开始之前，浏览器需要通过TCP协议与服务器建立连接")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。换句话说，也就是HTTP的内容是通过TCP的传输数据阶段来实现的。")
    ]),
    _hoisted_17,
    _hoisted_18,
    _hoisted_19,
    _hoisted_20,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("数据包是通过IP地址传输给接收端的，而IP地址仅仅只是一些数字标识，难以记忆，但使用域名就很容易记住一个网站了。因此，又出现了一个服务："),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode('负责把域名和IP地址做一一映射关系，这套将域名映射为IP地址的系统叫做"域名系统"，简称DNS（Domain Name System）')
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode("。")
      ])
    ]),
    createBaseVNode("p", null, [
      createTextVNode("那么，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("实际上第一步浏览器会请求DNS返回域名对应的IP地址，并且浏览器还提供了DNS数据缓存服务，如果某个域名已经解析过了，那么浏览器会缓存解析的结果，方便下次查询时直接使用，这样也会减少一次网络请求")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。拿到IP地址之后，就需要获取端口号了，默认情况下，如果URL没有特别指定端口号，那么HTTP协议默认为80端口。")
    ]),
    _hoisted_21,
    _hoisted_22,
    _hoisted_23,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("同一个域名同时最多只能建立6个TCP连接")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode("❗")
      ]),
      _hoisted_24
    ]),
    _hoisted_25,
    createBaseVNode("p", null, [
      createTextVNode("在排队等待之后，终于能和服务器建立连接了。由于HTTP协议是基于TCP连接之上的，所以这时候HTTP还没出场哦。因此，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("在HTTP开始工作之前，浏览器通过TCP协议与服务器建立连接")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode('，在TCP的整个周期中，通过"三次握手"与服务器建立连接，随之进行数据的传输，然后通过"四次挥手"断开连接。')
    ]),
    _hoisted_26,
    createBaseVNode("p", null, [
      createTextVNode("有必要再提醒一下，HTTP是基于TCP连接之上的协议。因此，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("一旦建立了TCP连接，浏览器就可以和服务器进行通信了，而HTTP中的数据就是在整个通信过程中传输的")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_27,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("请求行")
          ]),
          _: 1
          /* STABLE */
        }),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("请求方法")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("请求URI（Uniform Resource Identifier）")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("HTTP协议版本")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("请求头")
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_28
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("请求体")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _hoisted_29,
    createBaseVNode("p", null, [
      createTextVNode("首先，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("浏览器会向服务器发送请求行")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，它包括了请求方法、请求URI和HTTP协议版本。")
    ]),
    _hoisted_30,
    _hoisted_31,
    _hoisted_32,
    _hoisted_33,
    createBaseVNode("blockquote", null, [
      createBaseVNode("ol", null, [
        createBaseVNode("li", null, [
          createVNode(_component_font, { color: "red" }, {
            default: withCtx(() => [
              createTextVNode("响应请求")
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]),
      _hoisted_34,
      createBaseVNode("ol", _hoisted_35, [
        createBaseVNode("li", null, [
          createVNode(_component_font, { color: "red" }, {
            default: withCtx(() => [
              createTextVNode("断开连接")
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]),
      _hoisted_36,
      createBaseVNode("ol", _hoisted_37, [
        createBaseVNode("li", null, [
          createVNode(_component_font, { color: "red" }, {
            default: withCtx(() => [
              createTextVNode("重定向")
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ]),
    _hoisted_38,
    _hoisted_39,
    _hoisted_40,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("响应行")
          ]),
          _: 1
          /* STABLE */
        }),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("HTTP协议版本")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("状态码")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("响应头")
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_41
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("响应体")
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_42
      ])
    ]),
    _hoisted_43,
    createBaseVNode("p", null, [
      createTextVNode("首先"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("服务器会返回响应行，其中包含了状态码和HTTP协议版本")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_44,
    _hoisted_45,
    _hoisted_46,
    _hoisted_47,
    createBaseVNode("p", null, [
      createTextVNode("不过如果浏览器或者服务器在其头信息中加入了"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("Connection: Keep-Alive")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(":")
    ]),
    _hoisted_48,
    createBaseVNode("p", null, [
      createTextVNode("那么"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("TCP连接在发送后将仍然保持打开状态，这样浏览器就可以继续通过同一个TCP连接发送请求了")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。保持TCP连接可以省去下次请求时需要建立连接的时间，进而提升资源加载速度。如网站中的图片都来自同一个站点，那么在初始化一个持久连接后，就可以复用该连接，以请求其他资源，而不需要重新再建立新的TCP连接了。")
    ]),
    _hoisted_49,
    _hoisted_50,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("当响应行中的状态码为301时，即代表了重定向。在响应头中的Location字段代表了重定向的地址")
      ]),
      _: 1
      /* STABLE */
    }),
    createTextVNode("。"),
    _hoisted_51,
    _hoisted_52,
    _hoisted_53,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("DNS缓存")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("页面资源缓存")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _hoisted_54,
    _hoisted_55,
    _hoisted_56,
    createBaseVNode("blockquote", null, [
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("服务器是通过什么方式让浏览器缓存数据的？")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    createBaseVNode("p", null, [
      createTextVNode("从图中的第一次请求可以看出，"),
      createVNode(_component_font, { color: "blue" }, {
        default: withCtx(() => [
          createTextVNode("当服务器返回HTTP响应头给浏览器时，浏览器是通过响应头中的Cache-Control字段来设置是否缓存该资源")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。通常，还需要为这个资源设置一个缓存过期时长，而"),
      createVNode(_component_font, { color: "blue" }, {
        default: withCtx(() => [
          createTextVNode("这个时长是通过Cache-Control中的Max-age参数来设置的")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，如上图中的缓存过期时间是2000秒。这也就意味着，在该缓存资源还未过期的情况下，如果再次请求该资源，会直接返回缓存中的资源给浏览器。但"),
      createVNode(_component_font, { color: "blue" }, {
        default: withCtx(() => [
          createTextVNode('如果缓存过期了，浏览器则会继续发起网络请求，并且在HTTP请求头中带上"If-None-Match"字段，服务器收到请求头后，会根据If-None-Match的值来判断请求的资源是否有更新。如果没有更新，就返回304状态码，相当于服务器告诉浏览器：这个缓存可以继续使用，就不重新发送数据给你了。如果资源有更新，服务器就直接返回最新资源给浏览器。')
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_57,
    _hoisted_58,
    _hoisted_59,
    createBaseVNode("p", null, [
      createTextVNode("服务器接收到浏览器提交的信息后，查询后台，验证用户登录信息是否正确，如果正确的话，则会生成一段表示用户身份的字符串，并"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("把该字符串写到响应头的Set-Cookie字段里")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，然后把响应头发送给浏览器。")
    ]),
    _hoisted_60,
    createBaseVNode("p", null, [
      createTextVNode("浏览器在接收到服务器的响应头后，进行解析响应头，如果响应头中包含Set-Cookie字段时，浏览器就会把这个字段信息保存到本地。当用户再次访问时，浏览器会发起HTTP请求，但在发起请求之前，浏览器会读取之前保存的Cookie数据，并"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("把数据写进请求头里的Cookie字段里")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，然后浏览器再将请求头发送给服务器。")
    ]),
    _hoisted_61,
    createBaseVNode("p", null, [
      createTextVNode("简单来说，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("如果服务器端发送的响应头中有Set-Cookie字段，那么浏览器就会将该字段的内容保存到本地。当下次浏览器再往该服务器发送请求时，浏览器会自动在请求头中加入Cookie值后再发送出去")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。服务器端发现浏览器发送过来的Cookie后，会去对比服务器上的记录，最后得到该用户的状态信息。")
    ]),
    _hoisted_63
  ]);
}
const ChromeBrowser3_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ChromeBrowser-3.html.vue"]]);
export {
  ChromeBrowser3_html as default
};
