import { defineStore } from "pinia";
import { useAccessStore } from "@repo/stores";
import { userLogin } from "#/api/_core/auth";
import { message } from "ant-design-vue";
import { getCurrentUserHaveMenu, getCurrentUserInfo } from "#/api/_core/menu/menu";
import { getFirstLeafNode, treeMap } from "@repo/utils";
import router from "#/router";
import { routes } from "#/router/routes";

export const useAuthStore = defineStore("auth", () => {
  const accessStore = useAccessStore();
  const generateMenu = async () => {
    const menu = await getCurrentUserHaveMenu();
    // accessStore.setMenu(menu.data);
    accessStore.setMenu(
      treeMap(routes, (item) => {
        return {
          ...item,
          url: item.path,
          name: item.meta?.title,
          id: item.path,
        };
      })
    );
    console.log(accessStore.menuTree);
  };
  const generateUserInfo = async () => {
    const userInfo = await getCurrentUserInfo();
    accessStore.setUserInfo(userInfo.data);
  };
  const authLogin = async (params: any) => {
    const { code, data, msg } = await userLogin(params);
    if (code !== "200") {
      message.error(msg);
      return null;
    }
    accessStore.setUserInfo(data);
    await generateMenu();
    return data;
  };
  const authLogout = () => {};
  const getFirstMenu = () => {
    const menu = accessStore.menuTree;
    console.log(menu, "menu");
    const firstMenu = getFirstLeafNode(menu);
    return firstMenu;
  };
  const redirectFirstMenu = () => {
    const firstMenu = getFirstMenu();
    router.push(firstMenu.url);
  };
  return {
    authLogin,
    authLogout,
    redirectFirstMenu,
    generateMenu,
    generateUserInfo,
    getFirstMenu,
  };
});
