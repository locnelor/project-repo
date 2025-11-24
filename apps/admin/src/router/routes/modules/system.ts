import type { RouteRecordRaw } from "vue-router";
import PageLayout from "#/layout/PageLayout.vue";

const routes: RouteRecordRaw[] = [
  {
    component: PageLayout,
    name: "System",
    path: "/system",
    redirect: "/settings/menu",
    meta: {
      title: "系统管理",
    },
    children: [
      {
        component: () => import("#/pages/system/menu/index.vue"),
        meta: {
          title: "菜单管理",
        },
        name: "systemMenu",
        path: "/settings/menu",
      },
      {
        component: () => import("#/pages/system/user/index.vue"),
        meta: {
          title: "用户管理",
        },
        name: "systemUser",
        path: "/settings/userManagement",
      },
    ],
  },
];

export default routes;
