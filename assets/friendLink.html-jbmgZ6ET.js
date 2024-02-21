import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, g as createCommentVNode, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = { class: "custom-container tip" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p>', 2);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "a",
  { href: "mailto:licodeao@gmail.com" },
  "点击这里给我发送邮箱 📮",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<div style="display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-items:center;gap:30px;"><a style="display:flex;justify-content:space-around;align-items:center;border:1px solid #eee;border-radius:10px;width:200px;height:75px;background-color:rgba(200,200,200,.32);cursor:pointer;" href="https://7gugu.com/" target="__blank"><img src="https://avatars.githubusercontent.com/u/8674852?v=4" alt="7gugu" style="width:55px;height:55px;border-radius:10px;"><div style="display:flex;flex-direction:column;justify-content:space-around;"><span style="font-weight:bold;font-size:21px;">7gugu</span><span style="font-size:14px;">鹅厂师兄</span></div></a><a style="display:flex;justify-content:space-around;align-items:center;border:1px solid #eee;border-radius:10px;width:300px;height:75px;background-color:rgba(200,200,200,.32);cursor:pointer;" href="https://simonme.netlify.app/" target="__blank"><img src="https://avatars.githubusercontent.com/u/57086651?v=4" alt="7gugu" style="width:55px;height:55px;border-radius:10px;"><div style="display:flex;flex-direction:column;justify-content:space-around;"><span style="font-weight:bold;font-size:21px;">Simon He</span><span style="font-size:14px;">unocss/vue-vine 核心成员</span></div></a><a style="display:flex;justify-content:space-around;align-items:center;border:1px solid #eee;border-radius:10px;width:230px;height:75px;background-color:rgba(200,200,200,.32);cursor:pointer;" href="https://kuizuo.cn" target="__blank"><img src="https://kuizuo.cn/img/logo.png" alt="7gugu" style="width:55px;height:55px;border-radius:10px;"><div style="display:flex;flex-direction:column;justify-content:space-around;"><span style="font-weight:bold;font-size:21px;">愧怍</span><span style="font-size:14px;">道阻且长，行则将至</span></div></a></div>', 1);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1, [
      _hoisted_2,
      createBaseVNode("p", null, [
        createTextVNode("你可以在此页面留下评论，申请友链。内容包含"),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("你的昵称、头像链接、博客链接、简介")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode("。"),
        _hoisted_4,
        createTextVNode(" 或者 👉🏻 "),
        _hoisted_5,
        _hoisted_6,
        createTextVNode(" 欢迎来做朋友呀 🧑‍🤝‍🧑 ～")
      ])
    ]),
    createCommentVNode(" more "),
    _hoisted_7
  ]);
}
const friendLink_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "friendLink.html.vue"]]);
export {
  friendLink_html as default
};
