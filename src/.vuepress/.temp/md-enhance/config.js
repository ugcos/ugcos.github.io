import CodeDemo from "D:/Project/blog/ugcos/node_modules/.pnpm/vuepress-plugin-md-enhance@_0b636acdf7b136fd8db7f8429397a88b/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/Project/blog/ugcos/node_modules/.pnpm/vuepress-plugin-md-enhance@_0b636acdf7b136fd8db7f8429397a88b/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
