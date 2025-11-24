import type { Router } from "vue-router";
import { coreRoutes } from "./routes/core";
import { useAccessStore } from "@repo/stores";
import { LOGIN_PATH } from "@repo/constants";
import { useAuthStore } from "#/store";
import { startProgress, stopProgress } from "@repo/hooks";
import { useContentSpinner } from "@repo/hooks";

const setupCommonGuard = (router: Router) => {
  const loadedPaths = new Set<string>();
  router.beforeEach(async (to) => {
    const spinner = useContentSpinner();
    spinner.showContentSpinner();
    to.meta.loaded = loadedPaths.has(to.path);
    // 页面加载进度条
    if (!to.meta.loaded) {
      await startProgress();
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 400);
      });
    }
    return true;
  });

  router.afterEach((to) => {
    const spinner = useContentSpinner();
    spinner.hideContentSpinner();
    // 记录页面是否加载,如果已经加载，后续的页面切换动画等效果不在重复执行
    loadedPaths.add(to.path);
    // 关闭页面加载进度条
    stopProgress();
  });
};
const setupAccessGuard = (router: Router) => {
  // 全局前置守卫
  router.beforeEach(async (to) => {
    const accessStore = useAccessStore();
    const authStore = useAuthStore();
    const spinner = useContentSpinner();
    return await (async () => {
      // 若路由明确忽略认证，直接放行
      if (to.meta.ignoreAuth) {
        return true;
      }
      // 若已经是登录页，不需要重定向
      if (to.path === LOGIN_PATH) {
        return true;
      }
      // 如果token不存在
      if (!accessStore.accessToken) {
        // 若为基本路由，放行
        if (coreRoutes.map((e) => e.path).some((e) => e === to.path)) {
          return true;
        }
        // 没有访问权限，跳转登录页面
        if (to.fullPath !== LOGIN_PATH) {
          return {
            path: LOGIN_PATH,
            // 携带当前跳转的页面，登录后重新跳转该页面
            replace: true,
          };
        }
      }
      // 是否已经进行过路由初始化
      if (accessStore.isAccessChecked) {
        return true;
      }
      try {
        await spinner.pageSpinnerCallback(async () => {
          await Promise.all([
            authStore.generateMenu(),
            authStore.generateUserInfo(),
          ]);
        });
      } catch (error) {
        return {
          path: LOGIN_PATH,
          replace: true,
        };
      }
      return to;
    })().finally(() => {
      spinner.hidePageSpinner();
    });
  });
};
export const createRouterGuard = (router: Router) => {
  setupCommonGuard(router);
  setupAccessGuard(router);
};
