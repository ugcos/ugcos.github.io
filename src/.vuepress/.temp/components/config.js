import { hasGlobalComponent } from "D:/Project/blog/ugcos/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_6bdf719cbe9fb2bfbc1eddebb38fc7c3/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "D:/Project/blog/ugcos/node_modules/.pnpm/vuepress-plugin-components@_52a83456241be7a419e80e92176cbda0/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/Project/blog/ugcos/node_modules/.pnpm/vuepress-plugin-components@_52a83456241be7a419e80e92176cbda0/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "D:/Project/blog/ugcos/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_6bdf719cbe9fb2bfbc1eddebb38fc7c3/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
