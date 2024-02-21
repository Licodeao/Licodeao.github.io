import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx } from "./app-5wU-U7Lk.js";
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
  "在网络中，一个文件通常会被拆分为很多数据包来进行传输，而数据包在传输过程中可能会出现丢失或者出错的情况。",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "那么如何保证页面文件能被完整地送达浏览器呢？",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "什么是fp",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#什么是fp",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 什么是FP？")
  ],
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "更快的页面响应意味着更多的PV（Page View）、更高的参与度，以及更高的转化率。",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "那么，什么又影响FP指标呢？",
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "通过优化网络加载速度，降低了FP指标，进而提升Web页面性能。",
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "数据包如何被完整地送达到应用程序",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#数据包如何被完整地送达到应用程序",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 数据包如何被完整地送达到应用程序？")
  ],
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "​ 👇",
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "​ 👇",
  -1
  /* HOISTED */
);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "ip",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#ip",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" IP")
  ],
  -1
  /* HOISTED */
);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "数据包在互联网上进行传输时，就要符合网际协议标准，同时，互联网上不同的在线设备都有唯一的地址。",
  -1
  /* HOISTED */
);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: "https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230412234051901.png",
      alt: "image-20230412234051901"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "传输的过程：",
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "上层将数据包传输给网络层",
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "底层通过网络再将数据包传递给主机B",
  -1
  /* HOISTED */
);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "数据包被传输到主机B的网络层，这时主机B拆开数据包的IP头信息，解析出数据部分并传输给上层",
  -1
  /* HOISTED */
);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "最终，数据包到达了主机B的上层",
  -1
  /* HOISTED */
);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "udp",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#udp",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" UDP")
  ],
  -1
  /* HOISTED */
);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "IP协议是非常底层的协议，只负责将数据包传输到对方主机，而对方主机并不知道将数据包交给哪个程序。因此，需要能和应用程序进行对话的协议，最常见的就是UDP协议了。",
  -1
  /* HOISTED */
);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: "https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230413003859926.png",
      alt: "image-20230413003859926"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "传输的过程：",
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "上层将数据包传输给传输层",
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "数据包被传输到主机B的网络层，在这里主机B拆开IP头信息，并将拆开来的数据部分交给传输层",
  -1
  /* HOISTED */
);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "在主机B的传输层中，数据包的UDP头会被拆开，并根据UDP头中所提供的端口号，将数据部分传递给指定的应用程序",
  -1
  /* HOISTED */
);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "最终，数据包被传送到了主机B的应用程序中",
  -1
  /* HOISTED */
);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "tcp",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#tcp",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" TCP")
  ],
  -1
  /* HOISTED */
);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "在使用UDP协议进行传输数据时，会存在两个问题：",
  -1
  /* HOISTED */
);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "数据包在传输过程中容易丢失"),
    /* @__PURE__ */ createBaseVNode("li", null, "在大文件会被拆分成很多小的数据包来传输时，这些小的数据包会经过不同的路由，到达接收端的时间也各不相同，并且UDP协议并不知道如何封装这些数据包，然后把这些数据包还原成原来完整的文件。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "相对于UDP协议，TCP协议具有以下特点：",
  -1
  /* HOISTED */
);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: "https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230413004024219.png",
      alt: "image-20230413004024219"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: "https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230413091858167.png",
      alt: "image-20230413091858167"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "互联网中的数据都是通过数据包来传输的，而数据包在传输过程中容易丢失或出错"),
    /* @__PURE__ */ createBaseVNode("li", null, "IP负责将数据包发送到目标主机"),
    /* @__PURE__ */ createBaseVNode("li", null, "UDP负责将数据包发送到具体的目标应用程序"),
    /* @__PURE__ */ createBaseVNode("li", null, "TCP负责保证传输数据的完整性，其连接的生命周期可分为三个阶段：建立连接、传输数据、断开连接")
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    createBaseVNode("p", null, [
      createTextVNode("使用"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("TCP协议")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_4,
    createBaseVNode("blockquote", null, [
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("FP（First Paint），指从页面加载到首次开始绘制的时长")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_5,
    _hoisted_6,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("其中一个重要的因素是："),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("网络加载速度")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _hoisted_7,
    _hoisted_8,
    createBaseVNode("p", null, [
      createTextVNode("我们都知道，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("数据是通过数据包来传输的。如果发送的数据很大，那么该数据就会被拆分为很多小数据包来传输")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("而"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("数据包被送达到应用程序需要经过以下阶段")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("：")
    ]),
    createBaseVNode("blockquote", null, [
      createVNode(_component_font, { color: "blue" }, {
        default: withCtx(() => [
          createTextVNode("通过IP，将数据包发送到目标主机")
        ]),
        _: 1
        /* STABLE */
      }),
      _hoisted_9,
      createVNode(_component_font, { color: "blue" }, {
        default: withCtx(() => [
          createTextVNode("通过UDP，将数据包发送到指定的应用程序中")
        ]),
        _: 1
        /* STABLE */
      }),
      _hoisted_10,
      createVNode(_component_font, { color: "blue" }, {
        default: withCtx(() => [
          createTextVNode("通过TCP，保证了数据完整地传输")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_11,
    createBaseVNode("blockquote", null, [
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("什么是IP呢？")
        ]),
        _: 1
        /* STABLE */
      }),
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_font, { color: "red" }, {
            default: withCtx(() => [
              createTextVNode("网际协议（Internet Protocol），简称IP")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_font, { color: "red" }, {
            default: withCtx(() => [
              createTextVNode("计算机的地址就称为IP地址，访问任何网站实际上只是你的计算机向另外一台计算机请求信息")
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ]),
    _hoisted_12,
    createBaseVNode("p", null, [
      createTextVNode("如果想要把一个数据包从主机A发送到主机B，那么在传输之前，数据包上会被附加上主机B的IP地址信息，这样在传输的过程中才能正确地寻找到主机B。另外，数据包上也会有主机A本身的IP地址信息，有了这些信息，主机B才会向主机A进行回复。这些信息会被装进IP头，而"),
      createVNode(_component_font, { color: "blue" }, {
        default: withCtx(() => [
          createTextVNode("IP头是IP数据包开头的信息，包含了IP版本、源IP地址、目标IP地址、生存时间等信息。")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_13,
    createBaseVNode("blockquote", null, [
      _hoisted_14,
      createBaseVNode("ul", null, [
        _hoisted_15,
        createBaseVNode("li", null, [
          createVNode(_component_font, { color: "blue" }, {
            default: withCtx(() => [
              createTextVNode("网络层再将IP头附加到数据包上，组成新的IP数据包")
            ]),
            _: 1
            /* STABLE */
          }),
          createTextVNode("，并传递给下一层")
        ]),
        _hoisted_16,
        _hoisted_17,
        _hoisted_18
      ])
    ]),
    _hoisted_19,
    createBaseVNode("blockquote", null, [
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("什么是UDP呢？")
        ]),
        _: 1
        /* STABLE */
      }),
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_font, { color: "red" }, {
            default: withCtx(() => [
              createTextVNode("用户数据包协议（User Datagram Protocol），简称UDP")
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ]),
    _hoisted_20,
    createBaseVNode("p", null, [
      createTextVNode("UDP协议中，有一个最重要的信息是端口号，每个想访问网络的程序都需要绑定一个端口号。通过端口号，UDP就能把指定的数据包发送给指定的应用程序了。所以，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("IP通过IP地址信息把数据包发送给指定的主机，而UDP则通过端口号将数据包分发给正确的应用程序")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。同样，端口号会被装进UDP头里面，UDP头再和原始的数据包进行合并组成新的UDP数据包。UDP头中除了目标端口，还有源端口号等信息。")
    ]),
    _hoisted_21,
    createBaseVNode("blockquote", null, [
      _hoisted_22,
      createBaseVNode("ul", null, [
        _hoisted_23,
        createBaseVNode("li", null, [
          createVNode(_component_font, { color: "blue" }, {
            default: withCtx(() => [
              createTextVNode("传输层会在数据包前面附加上UDP头，组成新的UDP数据包，再将新的UDP数据包传输给网络层")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_font, { color: "blue" }, {
            default: withCtx(() => [
              createTextVNode("网络层再将IP头附加到数据包上，组成新的IP数据包，并传输给下一层")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _hoisted_24,
        _hoisted_25,
        _hoisted_26
      ])
    ]),
    createBaseVNode("p", null, [
      createTextVNode("在使用UDP协议发送数据时，可能会出现各种因素导致的错误，进而导致数据包发送失败。虽然UDP可以校验数据是否正确，但"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("对于错误的数据包，UDP协议并不具备重发机制，只是丢弃当前的包，而且UDP在发送数据包之后也无法确认数据包是否能够到达目的地")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("虽然UDP协议不能保证数据可靠性，但是其"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("传输速度还是非常快的")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，因此，UDP协议会应用在一些注重传输速度、但对数据完整性要求不严格的场景，如在线视频等。")
    ]),
    _hoisted_27,
    createBaseVNode("blockquote", null, [
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("什么是TCP呢？")
        ]),
        _: 1
        /* STABLE */
      }),
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_font, { color: "red" }, {
            default: withCtx(() => [
              createTextVNode("传输控制协议（Transmission Control Protocol），简称TCP。")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        createBaseVNode("li", null, [
          createTextVNode("TCP协议是一种"),
          createVNode(_component_font, { color: "red" }, {
            default: withCtx(() => [
              createTextVNode("面向连接的、可靠的、基于字节流")
            ]),
            _: 1
            /* STABLE */
          }),
          createTextVNode("的"),
          createVNode(_component_font, { color: "red" }, {
            default: withCtx(() => [
              createTextVNode("传输层通信协议")
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ]),
    _hoisted_28,
    _hoisted_29,
    _hoisted_30,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("对于数据包丢失的情况，TCP提供重传机制")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("TCP引入了数据包排序机制，用来保证把乱序的数据包组合成一个完整的文件")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    createBaseVNode("p", null, [
      createTextVNode("和UDP头一样，"),
      createVNode(_component_font, { color: "blue" }, {
        default: withCtx(() => [
          createTextVNode("TCP头除了包含了目标端口和本机端口外，还提供了用于排序的序列号，以便接收端通过序号来重排数据包")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_31,
    createBaseVNode("blockquote", null, [
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("TCP是如何保证重排机制和数据包排序机制呢？")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_32,
    createBaseVNode("blockquote", null, [
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("一个完整的TCP连接的生命周期")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("："),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("建立连接 👉 传输数据 👉 断开连接")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("建立连接阶段 "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("该阶段"),
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode('通过"三次握手"来建立客户端和服务器的连接')
              ]),
              _: 1
              /* STABLE */
            }),
            createTextVNode("，TCP是一种面向连接的传输层协议，所谓的"),
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("面向连接是指，在数据通信开始之前，先做好两端之间的准备工作")
              ]),
              _: 1
              /* STABLE */
            }),
            createTextVNode("。所谓的"),
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("三次握手是指，在建立一个TCP连接时，客户端和服务器之间需要发送3个数据包以确认连接的建立")
              ]),
              _: 1
              /* STABLE */
            }),
            createTextVNode("。")
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("传输数据阶段 "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("该阶段，"),
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("接收端需要对每个数据包进行确认操作")
              ]),
              _: 1
              /* STABLE */
            }),
            createTextVNode("，也就是"),
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("接收端接收到数据之后，需要发送确认数据包给发送端")
              ]),
              _: 1
              /* STABLE */
            }),
            createTextVNode("。所以"),
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("当发送端发送了一个数据包之后，在规定时间内没有接收到接收端的反馈的确认信息，则判断为数据包丢失，并触发发送端的重发机制")
              ]),
              _: 1
              /* STABLE */
            }),
            createTextVNode("。")
          ]),
          createBaseVNode("li", null, [
            createTextVNode("同样，"),
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode("一个大的文件在传输过程中会被拆分成多个小的数据包，这些数据包到达接收端之后，接收端会按照TCP头中的序号为其排序，从而保证文件数据的完整性")
              ]),
              _: 1
              /* STABLE */
            }),
            createTextVNode("。")
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("断开连接阶段 "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("数据传输完毕后，就要断开连接了。而在最后，需要"),
            createVNode(_component_font, { color: "blue" }, {
              default: withCtx(() => [
                createTextVNode('通过"四次挥手"来保证双方都能断开连接')
              ]),
              _: 1
              /* STABLE */
            }),
            createTextVNode("。")
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("浏览整个生命周期，可以看出："),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode('TCP为了保证数据传输的可靠性，牺牲了数据包的传输速度，因为"三次握手"和"数据包校验机制"等在传输过程中增加了大量的数据包')
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode("。")
      ])
    ]),
    _hoisted_33,
    _hoisted_34
  ]);
}
const ChromeBrowser2_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ChromeBrowser-2.html.vue"]]);
export {
  ChromeBrowser2_html as default
};
