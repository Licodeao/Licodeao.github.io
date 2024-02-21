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
const _hoisted_2 = {
  href: "https://www.licodeao.top/blogs/articles/NodeMemoryError.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "对于这个问题，V8引擎采取了哪些优化垃圾回收器的执行效率的办法呢？",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "一次完整的垃圾回收分为标记和清理两个阶段，垃圾数据标记之后，V8会继续执行清理和整理操作，虽然主垃圾回收器和副垃圾回收器的处理方式会有不同，但都是在主线程上执行的，执行垃圾回收过程中，会暂停主线程上的其他任务。",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "img",
  {
    src: "https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/c3ace258021ad3c5e159347f4ac7058.jpg",
    width: "100%"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "如图示，执行垃圾回收时会占用主线程时间，如果在执行垃圾回收的过程中，垃圾回收器占用主线程时间过久，就像上面图片展示的那样，垃圾回收耗费一定的时间，并且在这期间主线程是不能做其他事情的。如，页面正在执行一个动画，因为垃圾回收器的原因，就会导致这个动画在一定时间内无法执行，造成页面的卡顿，给用户带来不好的体验。",
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "v8-垃圾回收的优化操作",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#v8-垃圾回收的优化操作",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" V8 垃圾回收的优化操作")
  ],
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  '为了避免这种"全停顿"的情况出现，V8做出了以下优化操作：',
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "并行回收",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#并行回收",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 并行回收")
  ],
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "img",
  {
    src: "https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/0f4150f15cabc9aa18b9dac8fcdd177.jpg",
    width: "100%"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "采用并行回收时，垃圾回收所消耗的时间 = 总体协助线程所消耗的时间，再加上一些同步开销时间。在执行垃圾标记的过程中，主线程并不会同时执行JavaScript代码，因此JavaScript代码也不会改变回收的过程。",
  -1
  /* HOISTED */
);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "增量标记回收",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#增量标记回收",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 增量标记回收")
  ],
  -1
  /* HOISTED */
);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "虽然并行回收策略能增加垃圾回收的效率，能够很好地优化副垃圾回收器，但这仍然是一种全停顿的垃圾回收方式，在主线程执行回收工作时才会开启协助线程，这依然还会存在效率问题。",
  -1
  /* HOISTED */
);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: "https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230726134337357.png",
      alt: "image-20230726134337357"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "垃圾回收的暂停和恢复启动是如何实现的？")
  ],
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "在没有采用增量标记之前，V8使用黑色和白色来标记数据。在执行一次完整的垃圾回收之前，垃圾回收器会将所有的数据设置为白色，用来表示这些数据还没有被标记，之后垃圾回收器会从GC Roots出发，将所有能访问到的数据标记为黑色。遍历结束后，被标记为黑色的数据就是活动数据，那些白色数据就是垃圾数据。",
  -1
  /* HOISTED */
);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "但是这样有个问题：如果内存中的数据只有两种状态，黑和白，那么当暂停了当前的垃圾回收器后，再次恢复启动垃圾回收器时，垃圾回收器就不知道从哪个位置继续开始执行了。",
  -1
  /* HOISTED */
);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "引入灰色标记之后，垃圾回收器就可以依据当前内存中是否有灰色节点，来判断整个标记是否完成，如果没有灰色节点了，就可以进行清理工作了。如果还有灰色标记，当下次恢复启动垃圾回收器时，便从灰色的节点开始继续执行。因此，三色标记可以很好地支持增量式垃圾回收。",
  -1
  /* HOISTED */
);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "标记好的垃圾数据如果被JavaScript修改了，V8是如何做的？")
  ],
  -1
  /* HOISTED */
);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "在一次完整的垃圾回收操作完成后，GC Roots遍历访问到的数据都变为了黑色，倘若我们将某个数据在内存中的指向变更为一个新的数据，这个数据为白色，此时的垃圾回收操作已经完成了，并不能再次遍历访问整个数据，这就造成了一个现象：黑色 -> 白色。",
  -1
  /* HOISTED */
);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("所以在V8中，每次执行譬如 "),
    /* @__PURE__ */ createBaseVNode("code", null, "window.a.b = value"),
    /* @__PURE__ */ createTextVNode(" 的写入操作时，V8会插入写屏障代码，强制将value这块内存标记为灰色。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "并发回收",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#并发回收",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 并发回收")
  ],
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "虽然增量标记回收通过三色标记和写屏障机制可以很好地实现垃圾回收，但由于这些操作都是在主线程上执行的，如果主线程繁忙时，增量标记回收依然会降低主线程处理任务的吞入量。",
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "有什么办法能在不阻塞主线程的情况下，执行垃圾回收操作吗？")
  ],
  -1
  /* HOISTED */
);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "并发回收机制可以办到。",
  -1
  /* HOISTED */
);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: "https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/985a569d4cbe39d7857d2efe7b9f671.jpg",
      alt: "985a569d4cbe39d7857d2efe7b9f671"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "并发回收机制的优势非常明显，主线程不会被挂起，JavaScript可以自由地执行，在执行的同时，协助线程可以执行垃圾回收操作。",
  -1
  /* HOISTED */
);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "三种回收机制不会单独使用，通常会将其融合在一起使用，V8的主垃圾回收器就融合了这三种机制来实现垃圾回收。",
  -1
  /* HOISTED */
);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: "https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/a78c4aca5676342d828ef9856441218.jpg",
      alt: "a78c4aca5676342d828ef9856441218"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "主垃圾回收器采用了3种策略：",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("在"),
      createBaseVNode("a", _hoisted_2, [
        createTextVNode("此篇文章"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("中提到了V8引擎有两个垃圾回收器来处理垃圾回收的，分别为主垃圾回收器和副垃圾回收器。在两个垃圾回收器中分别有对应的算法，执行算法需要时间，这个时间由内存中需要垃圾回收的对象的大小决定，于是，当遇上了很多的垃圾需要回收时，其执行算法所需的时间也会相应地延长。算法也是代码，而又由于JavaScript是运行在主线程之上的，过久的垃圾回收必然会导致后面的程序无法执行。")
    ]),
    _hoisted_3,
    createBaseVNode("p", null, [
      createTextVNode("上面提到，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("由于JavaScript是运行在主线程之上的，因此一旦执行垃圾回收算法，都需要将正在执行的JavaScript脚本暂停下来，待垃圾回收完毕后再恢复脚本执行。这种行为被称为全停顿（Stop-The-World）")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_4,
    _hoisted_5,
    _hoisted_6,
    _hoisted_7,
    _hoisted_8,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("添加 "),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("并行回收")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode(" 操作")
      ]),
      createBaseVNode("li", null, [
        createTextVNode("添加 "),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("增量标记回收")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode(" 操作")
      ]),
      createBaseVNode("li", null, [
        createTextVNode("添加 "),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("并发回收")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode(" 操作")
      ])
    ]),
    _hoisted_9,
    createBaseVNode("p", null, [
      createTextVNode("既然执行一次完整的垃圾回收过程比较耗时，那么为了解决效率问题，首先就会想到引入多个辅助线程来并行处理。所以第一个思路就是："),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("主线程在执行垃圾回收的任务时，引入多个辅助线程来并行处理")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，这样就会加快垃圾回收的执行速度。")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("所谓并行回收，就是指"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("垃圾回收器在主线程上执行的过程中，还会开启多个协助线程，同时执行同样的回收工作")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_10,
    _hoisted_11,
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("副垃圾回收器所采用的就是并行回收策略")
      ]),
      _: 1
      /* STABLE */
    }),
    createTextVNode("，它在执行垃圾回收的过程中，"),
    createVNode(_component_font, { color: "red" }, {
      default: withCtx(() => [
        createTextVNode("启动了多个线程来负责新生代中的垃圾清理操作，这些线程同时将对象空间中的数据移动到空闲区域")
      ]),
      _: 1
      /* STABLE */
    }),
    createTextVNode("。由于数据的地址发生了改变，所以还需要同步更新引用这些对象的指针。"),
    _hoisted_12,
    _hoisted_13,
    createBaseVNode("p", null, [
      createTextVNode("在完整执行老生代的垃圾回收的过程中，时间依然还会很久，这些大的对象都是主垃圾回收器的，所以又增加了增量标记的方式，这种垃圾回收的方式被称为"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("增量式垃圾回收")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("所谓增量式垃圾回收，是指"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("垃圾回收器将标记工作分解为更小的块，并且穿插在主线程不同的任务之间执行")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("采用增量式垃圾回收时，垃圾回收器没有必要一次执行完整的垃圾回收过程，每次执行的只是整个垃圾回收过程中的一小部分工作")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_14,
    createBaseVNode("p", null, [
      createTextVNode("增量标记的实现比全停顿的算法要更为复杂，这是因为"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("增量回收是并发的")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，要实现增量执行，需要满足以下两个条件：")
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "blue" }, {
          default: withCtx(() => [
            createTextVNode("垃圾回收可以被随时暂停和启动，暂停时需要保存当时的扫描结果，等下一波垃圾回收来了之后，才能继续启动")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "blue" }, {
          default: withCtx(() => [
            createTextVNode("在暂停期间，被标记好的垃圾数据如果被JavaScript修改了，那么垃圾回收器需要做出正确的处理")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _hoisted_15,
    _hoisted_16,
    _hoisted_17,
    createBaseVNode("p", null, [
      createTextVNode("为了解决无法识别上次暂停位置的问题，V8采用了"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("三色标记法")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，额外引入了灰色：")
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "blue" }, {
          default: withCtx(() => [
            createTextVNode("黑色表示这个节点被GC Roots遍历访问到了，而且该节点的子节点都已经标记完成了")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "blue" }, {
          default: withCtx(() => [
            createTextVNode("灰色表示这个节点被GC Roots遍历访问到了，但该节点的子节点还没被垃圾回收器标记处理，也表明目前正在处理这个节点")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "blue" }, {
          default: withCtx(() => [
            createTextVNode("白色表示这个节点没有被GC Roots遍历访问到，如果在本轮遍历结束时还是白色，那么这块数据就会被垃圾回收")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _hoisted_18,
    _hoisted_19,
    _hoisted_20,
    createBaseVNode("p", null, [
      createTextVNode("为了解决整个问题，在增量式回收中添加了一个约束条件："),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("不能让黑色指向白色")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。通常使用"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("写屏障(Write-barrier)机制")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("来实现这个约束条件，也就是说，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("当发生了黑色的节点引用了（即指向）白色的节点，写屏障机制会强制地将被引用的白色节点变成灰色的")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，这样就保证了黑色节点不能指向白色节点的约束条件，整个方法也称为"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("强三色不变性")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，它保证了垃圾回收器能正确地回收数据，因为在标记结束时的所有被标记为白色的对象，对于垃圾回收器来说，都是不可到达的。")
    ]),
    _hoisted_21,
    _hoisted_22,
    _hoisted_23,
    _hoisted_24,
    _hoisted_25,
    createBaseVNode("p", null, [
      createTextVNode("所谓并发回收，是指"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("主线程在执行JavaScript的过程中，协助线程能够在后台完成执行垃圾回收的操作")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_26,
    _hoisted_27,
    _hoisted_28,
    _hoisted_29,
    _hoisted_30,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("主垃圾回收器主要使用"),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("并发标记")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode("，可以看到，在主线程执行JavaScript时，协助线程就开始执行标记操作了，所以说标记是在协助线程中完成的")
      ]),
      createBaseVNode("li", null, [
        createTextVNode("标记完成之后，再执行"),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("并行清除")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode("。主线程在执行清理操作时，多个协助线程也在执行清除操作。")
      ]),
      createBaseVNode("li", null, [
        createTextVNode("另外，主垃圾回收器还采用了"),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("增量标记")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode("的方式，清除整理的任务会穿插在主线程各种JavaScript任务之间执行")
      ])
    ])
  ]);
}
const V8_Engine_shisan__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "V8 Engine(shisan).html.vue"]]);
export {
  V8_Engine_shisan__html as default
};
