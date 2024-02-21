import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "什么是访问者模式",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#什么是访问者模式",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 什么是访问者模式?")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "其核心思想：当被操作的对象结构比较稳定，而操作对象的逻辑经常变化时，通过分离逻辑和对象结构，使得它们能够独立扩展。",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "img",
  {
    src: "https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230703154019366.png",
    width: "100%"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "于上图而言，Element和Visitor分别代表了对象结构和操作逻辑，两者可以在自己的分支独立扩展和延申，最后在Client里面组合，并使用visitor来操作element，这就是访问者模式。",
  -1
  /* HOISTED */
);
const _hoisted_5 = [
  _hoisted_1,
  _hoisted_2,
  _hoisted_3,
  _hoisted_4
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_5);
}
const DesignPattern1_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "DesignPattern-1.html.vue"]]);
export {
  DesignPattern1_html as default
};
