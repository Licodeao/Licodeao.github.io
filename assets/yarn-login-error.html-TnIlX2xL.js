import { _ as _export_sfc, o as openBlock, c as createElementBlock, f as createStaticVNode } from "./app-5wU-U7Lk.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>今天尝试在 yarn 上发布插件时，出现了一个错误。</p><img src="https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/image-20230705094336459.png" width="100%"><p>当前 yarn 发布流程是：</p><ol><li>yarn login</li><li>yarn publish（确保发布前已经 build 了）</li></ol><p>在 login 和 publish 阶段，分别会要求输入 npm 账号和密码。根据指示输入后，会出现上述错误。</p><p>于是，我又去了 npm 官网，使用同样的账号和密码进行了登录，发现可以登录上去，说明我并没有输错。</p><p>那么，问题出在了哪儿？</p><p>忽然间，我想起了我之前将 npm registry 设置为了淘宝镜像源，而登录该镜像源是需要淘宝账号和密码的</p><p>然后，我将 npm registry 改为了官网 npm 镜像源后，再进行上述操作，发现就成功了。</p><p>综上所述，问题就出现了镜像源的地址不正确，在包管理工具中进行发布插件时需要注意一下是否为官方 npm 镜像源地址。</p>', 10);
const _hoisted_11 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_11);
}
const yarnLoginError_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "yarn-login-error.html.vue"]]);
export {
  yarnLoginError_html as default
};
