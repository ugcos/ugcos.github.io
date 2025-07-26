import { hasGlobalComponent } from "D:/Project/blog/ugcos/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_6bdf719cbe9fb2bfbc1eddebb38fc7c3/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "D:/Project/blog/ugcos/node_modules/.pnpm/@vueuse+core@13.5.0_vue@3.5.18/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "D:/Project/blog/ugcos/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0_8116c128475c1f004dd1a7f30741a6b4/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "fa6-solid:",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
