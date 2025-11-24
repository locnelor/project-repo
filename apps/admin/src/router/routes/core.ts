import type { RouteRecordRaw } from "vue-router";
import Login from "#/pages/_core/authentication/login.vue";
import AuthPageLayout from "#/layout/AuthPageLayout.vue";
import { LOGIN_PATH } from "@repo/constants";
import PageLayout from "#/layout/PageLayout.vue";

/** 全局404页面 */
const fallbackNotFoundRoute: RouteRecordRaw = {
  component: PageLayout,
  meta: {
    title: "404",
    ignoreAuth: true,
  },
  name: "FallbackNotFound",
  path: "/:path(.*)*",
  children: [
    {
      component: () => import("#/pages/_core/fallback/not-found.vue"),
      meta: {
        title: "页面未找到",
        ignoreAuth: true,
      },
      name: "NotFoundDefault",
      path: "",
    },
  ],
};

const coreRoutes: RouteRecordRaw[] = [
  {
    component: AuthPageLayout,
    meta: {
      title: "Authentication",
    },
    name: "Authentication",
    path: "/auth",
    redirect: LOGIN_PATH,
    children: [
      {
        component: Login,
        meta: {
          title: "登录",
          ignoreAuth: true,
        },
        name: "Login",
        path: LOGIN_PATH,
      },
    ],
  },
];

export { coreRoutes, fallbackNotFoundRoute };
