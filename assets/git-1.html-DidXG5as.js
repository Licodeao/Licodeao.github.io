import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "什么是版本控制",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#什么是版本控制",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 什么是版本控制")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = {
  href: "https://zh.wikipedia.org/wiki/%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<p>版本控制工具有很多，如CVS、SVN、Git等</p><p>版本控制也分为两类：</p><ul><li>集中式版本控制</li><li>分布式版本控制</li></ul><h2 id="集中式版本控制工具" tabindex="-1"><a class="header-anchor" href="#集中式版本控制工具" aria-hidden="true">#</a> 集中式版本控制工具</h2><ul><li>CVS <ul><li>早期大规模使用的就是CVS（Concurrent Versions System），代表协作版本系统</li><li>它是SVN的前身</li></ul></li><li>SVN <ul><li>SVN（Subversion）</li><li>目的是为了取代CVS，并且对CVS进行了很多优化</li></ul></li></ul><h2 id="分布式版本控制工具" tabindex="-1"><a class="header-anchor" href="#分布式版本控制工具" aria-hidden="true">#</a> 分布式版本控制工具</h2><blockquote><p>老话常说：一个新东西的出现一定是为了解决旧事物的麻烦</p><p>那么究竟集中式版本控制工具有什么问题呢？后面会提到</p></blockquote><p>首先，Git的作者是Linus，没错和Linux操作系统的名字很像，其实Git出现的历史原因也和Linux操作系统有一定关系。</p><p>早期，Linux社区都在使用BitKeeper进行版本控制，但后面因为某些原因，BitKeeper宣布收回对Linux社区的免费授权。这时候，大佬Linus看不下去了，用得好好的，干嘛突然搞个收费啊？然后，大佬就花费了一周左右的时间，推出了Git来取代BitKeeper。事实证明，BitKeeper这一步走错了，后面慢慢地在历史中淡出了大众的视野。</p><h2 id="集中式与分布式的区别" tabindex="-1"><a class="header-anchor" href="#集中式与分布式的区别" aria-hidden="true">#</a> 集中式与分布式的区别</h2>', 10);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "集中式版本控制工具",
  -1
  /* HOISTED */
);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "优点：",
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "相比较以前的老式的本地存储管理方案，集中式版本控制工具可以让每个人都在一定程度上看到项目中的其他人在做什么")
  ],
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "缺点：",
  -1
  /* HOISTED */
);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "若出现宕机，则谁都无法提交更新，也无法协同工作"),
    /* @__PURE__ */ createBaseVNode("li", null, "若服务器的数据库所在磁盘损坏，且未做备份，则将丢失所有数据")
  ],
  -1
  /* HOISTED */
);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "分布式版本控制工具",
  -1
  /* HOISTED */
);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "这样一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库来恢复",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode("版本控制(Version Control)是维护工程蓝图的标准做法，能追踪工程蓝图从诞生一直到定案的过程。此外，版本控制也是一种软件工程技巧，借此能在软件开发的过程中，确保由不同人所编辑的同一程序文件都得到同步。(来自 "),
        createBaseVNode("a", _hoisted_2, [
          createTextVNode("维基百科"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(")")
      ])
    ]),
    _hoisted_3,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _hoisted_13,
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("其主要特点是由"),
            createVNode(_component_font, { color: "red" }, {
              default: withCtx(() => [
                createTextVNode("单一服务器进行集中管理，保存所有文件的修订版本")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createTextVNode("协同开发人员"),
            createVNode(_component_font, { color: "red" }, {
              default: withCtx(() => [
                createTextVNode("通过客户端连接到这台服务器，取出最新的文件或者提交更新")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _hoisted_14,
        _hoisted_15,
        _hoisted_16,
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_font, { color: "red" }, {
              default: withCtx(() => [
                createTextVNode("中央服务器不能出现故障")
              ]),
              _: 1
              /* STABLE */
            }),
            _hoisted_17
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        _hoisted_18,
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("客户端并不只是提供最新版本的文件快照，而是"),
            createVNode(_component_font, { color: "red" }, {
              default: withCtx(() => [
                createTextVNode("把代码仓库完整地镜像下来，包括完整的历史记录")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _hoisted_19,
          createBaseVNode("li", null, [
            createTextVNode("因为每一次的克隆操作，"),
            createVNode(_component_font, { color: "red" }, {
              default: withCtx(() => [
                createTextVNode("实际上都是一次对代码仓库的完整备份")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ])
    ])
  ]);
}
const git1_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "git-1.html.vue"]]);
export {
  git1_html as default
};
