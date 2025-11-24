import PageLayout from "#/layout/PageLayout.vue";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    component: PageLayout,
    name: "example",
    path: "/example",
    meta: {
      title: "示例",
    },
    redirect: "/example/form/basic",
    children: [
      {
        name: "formExample",
        path: "/example/form",
        meta: {
          title: "表单",
        },
        redirect: "/example/form/basic",
        children: [
          {
            name: "formExampleBasic",
            path: "/example/form/basic",
            meta: {
              title: "基础表单",
            },
            component: () => import("#/pages/examples/form/basic/index.vue"),
          },
        ],
      },
    ],
  },
];
export default routes;
