import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import { routes } from "./routes";
import { createRouterGuard } from "./guard";

// 创建路由实例
const router = createRouter({
  history:
    import.meta.env.VITE_ROUTER_HISTORY === "hash"
      ? createWebHashHistory(import.meta.env.VITE_BASE)
      : createWebHistory(import.meta.env.VITE_BASE),
  routes,
});
createRouterGuard(router);

export default router;
