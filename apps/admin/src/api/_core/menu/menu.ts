import type { PageResult } from "#/api/type";
import request from "../../request";
import type { SysMenuVO } from "./types";

// 分页查询所有菜单数据
export const sysMenuList = (opts: object) => {
  return request.get(`/api/sys/menu/all`, {
    params: opts,
  });
};

// 查询当前用户菜单
export const getCurrentUserHaveMenu = (opts?: object) => {
  return request.get(`/api/index/current-user/menu`, {
    params: opts,
  });
};

// 查询当前用户信息
export const getCurrentUserInfo = (opts?: object) => {
  return request.get(`/api/index/current-user`, {
    params: opts,
  });
};

// 通过主键查询单条菜单数据
export const getSingleMenuData = (id: string | number) => {
  return request.get(`/api/sys/menu/${id}`);
};

// 新增菜单数据
export const addMenuData = (opts: object) => {
  return request.post(`/api/sys/menu`, opts);
};

// 修改菜单数据
export const editMenuData = (opts: any) => {
  return request.put(`/api/sys/menu/${opts.id}`, opts);
};

// 删除菜单数据
export const deleteMenuData = (id: string | number) => {
  return request.delete(`/api/sys/menu/${id}`);
};

// 获取当前空间内的菜单
export const getCurrentSpace = (opts: object) => {
  return request.get(`/api/sys/menu/all`, {
    params: opts,
  });
};

// 获取全部系统菜单
export const getAllSysMenu = (opts: object) => {
  return request.get<SysMenuVO[]>(`/api/sys/menu/all`, {
    params: opts,
  });
};

// 获取使用API数据授权的菜单数据权限链路
export const getMenuUseApiDataAuthorize = () => {
  return request.get(`/api/sys/menu/useApiDataAuthorize/list`);
};

// 图片上传（multipart/form-data）
// export const uploadSysFilePic = (formData: FormData) => {
//   return request.post(imgServerUrl, formData, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });
// };

// // 附件上传（multipart/form-data）
// export const uploadSysFile = (formData: FormData) => {
//   return request.post(fileServerUrl, formData, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });
// };
