import { defineStore } from "pinia";
import { ref } from "vue";

export const useAccessStore = defineStore(
  "access",
  () => {
    // 状态定义
    const menuList = ref<any[]>([]);
    const menuTree = ref<any>([]);
    const permsList = ref<string[]>([]);
    const userInfo = ref<any>({});
    const accessToken = ref("");
    const isAccessChecked = ref(false);
    const orgId = ref("");

    const setUserInfo = (user: any) => {
      userInfo.value = user;
      isAccessChecked.value = true;
      if (user.token) accessToken.value = user.token;
      if (user.orgEntId) orgId.value = user.orgEntId;
      window.localStorage.setItem("token", accessToken.value);
      window.localStorage.setItem("orgId", orgId.value);
      window.localStorage.setItem("userId", user.userId);
      window.localStorage.setItem("userInfo", JSON.stringify(user.userInfo));
    };
    const setMenu = (tree: any) => {
      menuTree.value = tree;
      // permsList.value = menu
      //   .filter((e: any) => !!e.perms)
      //   .map((e: any) => e.perms);
      // menuList.value = menu.filter((e: any) => e.type != 2);
      // window.localStorage.setItem("menuList", JSON.stringify(menu));
      // menuTree.value = array2tree(menuList.value, {
      //   cbk: (item: any) => {
      //     item.children = item.children.sort(
      //       (a: any, b: any) => a.orderNum - b.orderNum
      //     );
      //     return item;
      //   },
      // }).sort((a: any, b: any) => a.orderNum - b.orderNum);
    };
    const generateMenu = (menu: any[]) => {

    }
    // 返回状态
    return {
      menuList,
      permsList,
      userInfo,
      accessToken,
      orgId,
      setUserInfo,
      setMenu,
      menuTree,
      isAccessChecked,
    };
  },
  {
    persist: {
      key: "access-store",
      storage: localStorage,
      pick: ["accessToken", "menuTree", "menuList", "permsList", "userInfo", "orgId"],
    },
  }
);
