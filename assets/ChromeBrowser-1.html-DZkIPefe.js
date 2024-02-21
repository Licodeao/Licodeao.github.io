import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="前瞻" tabindex="-1"><a class="header-anchor" href="#前瞻" aria-hidden="true">#</a> 前瞻</h2><p>作为一名前端er，浏览器一定是绕不过去的。当然，这里始终以Chrome浏览器为例，毕竟它是浏览器界中的佼佼者，因此，研究Chrome就够了。</p><h2 id="浏览器的单进程架构" tabindex="-1"><a class="header-anchor" href="#浏览器的单进程架构" aria-hidden="true">#</a> 浏览器的单进程架构</h2><p>早期，浏览器都是单进程的。顾名思义，浏览器的所有功能模块都运行在同一个进程内，这导致了当时的浏览器无法处理太多的任务，从而导致浏览器出现不稳定、崩溃的问题。</p><p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230407224314553.png" alt="image-20230407224314553"></p>', 5);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "早期浏览器需要借助插件来实现强大的功能，但如果插件出现了问题，浏览器也会随之崩溃")
  ],
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "上图中，页面渲染、页面展示、JavaScript执行以及插件的运行都是在同一个线程中，这就意味着同一时刻只能有一个模块可以执行。"),
    /* @__PURE__ */ createBaseVNode("li", null, "但如果JavaScript代码中出现了无限循环的情况，它会独占一个线程，导致其他模块无法被执行，也就无法及时地处理任务，从而导致整个浏览器失去响应，变得卡顿。"),
    /* @__PURE__ */ createBaseVNode("li", null, "同样地，页面的内存泄露也是单进程变慢的一个原因。运行一个复杂点的页面再关闭页面，会存在内存不能完全回收的情况，这导致了使用时间越长，内存占用就越高，浏览器就变得越来越慢了。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "说到不安全，也能扯上插件了。因为插件是运行在浏览器进程之中，倘若插件包含恶意的行为，那么它就会引发安全性问题。"),
    /* @__PURE__ */ createBaseVNode("li", null, "除了插件可以引发安全性问题，页面脚本也是一大因素。它可以通过浏览器的漏洞来获取系统权限，获取系统权限之后，也可以做一些恶意的事情。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "浏览器的多进程架构",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#浏览器的多进程架构",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 浏览器的多进程架构")
  ],
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "问题出现了就解决它，于是浏览器来到了多进程的时代，使得浏览器的性能得到了大幅提升。",
  -1
  /* HOISTED */
);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: "https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230407225003838.png",
      alt: "image-20230407225003838"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "上图为浏览器的多进程架构，与之前的单进程架构进行对比，可以发现：",
  -1
  /* HOISTED */
);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("✨"),
    /* @__PURE__ */ createBaseVNode("strong", null, "总的来说"),
    /* @__PURE__ */ createTextVNode("：")
  ],
  -1
  /* HOISTED */
);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createTextVNode("浏览器主线程 "),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "负责界面展示、用户交互、子进程管理等职责，同时提供存储等功能")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createTextVNode("渲染进程 "),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "主要职责是将HTML、CSS、JavaScript转换为可以与用户进行交互的网页，排版引擎Blink和JavaScript引擎V8都是运行在该进程中。默认情况下，Chrome会为每个Tab标签创建一个渲染进程，而渲染进程都是运行在沙箱中的。")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_16 = {
  href: "https://mp.weixin.qq.com/s/6o6Ci0bMEC4Y9e1Pxfi6zQ",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createTextVNode("网络进程 "),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "主要负责页面的网络资源加载。")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createTextVNode("插件进程 "),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "主要负责插件的运行，同时插件进程也是运行在沙箱中，但并不是所有系统都适用。")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_20 = {
  href: "https://zhuanlan.zhihu.com/p/508362483",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "总结",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#总结",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 总结")
  ],
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "那么，到这里我们就明白了，打开一个页面，浏览器在背后做了什么？",
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "打开1个页面至少需要1个网络进程、1个浏览器主线程、1个GPU进程以及1个渲染进程，一共4个进程。倘若打开的页面有运行插件的话，还需要再加上1个插件进程。",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("📌"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("单进程的浏览器都有哪些问题呢？")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "blue" }, {
          default: withCtx(() => [
            createTextVNode("不稳定")
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_6
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "blue" }, {
          default: withCtx(() => [
            createTextVNode("不流畅")
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_7
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "blue" }, {
          default: withCtx(() => [
            createTextVNode("不安全")
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_8
      ])
    ]),
    _hoisted_9,
    _hoisted_10,
    _hoisted_11,
    _hoisted_12,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "blue" }, {
          default: withCtx(() => [
            createTextVNode("网络进程和GPU进程从浏览器进程中独立了出来")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "blue" }, {
          default: withCtx(() => [
            createTextVNode("渲染进程采用了沙箱机制，而插件进程实际上也采用了沙箱机制，但部分系统不支持")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    createBaseVNode("blockquote", null, [
      _hoisted_13,
      createBaseVNode("p", null, [
        createTextVNode("多进程架构下的Chrome浏览器包括了"),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("1个浏览器主线程、1个GPU进程、1个网络进程、多个渲染进程以及多个插件进程")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("ul", null, [
        _hoisted_14,
        _hoisted_15,
        createBaseVNode("li", null, [
          createTextVNode("GPU进程 "),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createTextVNode("GPU进程是为了实现3D CSS，而今天"),
              createBaseVNode("a", _hoisted_16, [
                createTextVNode("Chrome团队也发布了Web GPU"),
                createVNode(_component_ExternalLinkIcon)
              ]),
              createTextVNode("，使得在Web上能够进行高性能3D图像和数据并行计算。")
            ])
          ])
        ]),
        _hoisted_17,
        _hoisted_18
      ])
    ]),
    _hoisted_19,
    createBaseVNode("p", null, [
      createTextVNode("📌"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("单进程架构出现的问题，多进程架构是如何解决的呢？")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("解决单进程架构的不稳定 "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("进程之间采用IPC机制进行相互通信")
              ]),
              _: 1
              /* STABLE */
            }),
            createTextVNode("，而Chromium IPC是基于Mojo的，关于更多Chromium IPC可以看这篇文章"),
            createBaseVNode("a", _hoisted_20, [
              createTextVNode("《深入分析Chromium IPC》"),
              createVNode(_component_ExternalLinkIcon)
            ]),
            createTextVNode("。")
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("由于进程是相互隔离的，所以当一个页面或插件崩溃时，仅仅影响当前的页面进程或插件进程，并不会影响到浏览器或其他页面，从而解决了早期浏览器的不稳定问题。")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("解决单进程架构的不流畅 "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("因为JavaScript代码是运行在渲染进程的，所以及时JavaScript代码阻塞了渲染进程，受到影响的也只是当前的渲染页面，并不会影响到浏览器和其他页面。")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createTextVNode("关于内存泄露的问题："),
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("因为当关闭一个页面时，整个渲染进程也会被关闭，之后该进程所占用的内存都会被系统回收，从而解决了内存泄漏的问题。")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("解决单进程架构的不安全 "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("多进程架构的额外好处就是可以使用"),
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("安全沙箱")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("strong", null, [
              createVNode(_component_font, { color: "lightblue" }, {
                default: withCtx(() => [
                  createTextVNode("什么是沙箱呢？")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, [
                createVNode(_component_font, { color: "lightblue" }, {
                  default: withCtx(() => [
                    createTextVNode("可以将沙箱看成是操作系统给进程上了一把锁，沙箱里面的程序可以运行，但是不能在你的硬盘上写入任何数据，也不能在敏感的地方读取任何数据。")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ])
          ]),
          createBaseVNode("li", null, [
            createTextVNode("在多进程架构的Chrome浏览器中，"),
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("渲染进程和插件进程都使用了安全沙箱，这样即使在渲染进程或插件进程中执行了恶意程序，恶意程序也无法突破沙箱去获取到系统权限。")
              ]),
              _: 1
              /* STABLE */
            }),
            createTextVNode("至此，解决了单进程架构的不安全问题。")
          ])
        ])
      ])
    ]),
    _hoisted_21,
    _hoisted_22,
    _hoisted_23,
    _hoisted_24
  ]);
}
const ChromeBrowser1_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ChromeBrowser-1.html.vue"]]);
export {
  ChromeBrowser1_html as default
};
