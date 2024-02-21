import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, g as createCommentVNode, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>基于 ChatGPT + Next.js13 + TailwindCSS + Vercel Serverless 的聊天机器人</p></div>', 1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "哩叩-chat",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#哩叩-chat",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 哩叩 Chat")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = {
  href: "https://lico-chat-licodeao.vercel.app/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createCommentVNode(" more "),
    _hoisted_2,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_3, [
        createTextVNode("项目演示地址"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
const licoChat_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "lico-chat.html.vue"]]);
export {
  licoChat_html as default
};
