import { coreRoutes, fallbackNotFoundRoute } from "./core";
import { mergeRouteModules } from "@repo/utils";
import type { RouteRecordRaw } from "vue-router";

const dynamicRouteFiles = import.meta.glob("./modules/**/*.ts", {
  eager: true,
});
const dynamicRoutes: RouteRecordRaw[] = mergeRouteModules(dynamicRouteFiles);
const routes = [...dynamicRoutes, ...coreRoutes, fallbackNotFoundRoute];

export { routes };
