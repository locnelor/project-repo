import { sys_menu } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysRoleMenuModel } from './sys_role_menu';

export class SysMenuModel implements sys_menu {
  @ApiField({ description: '主键ID', type: String, required: true })
  id: string;

  @ApiField({ description: '创建时间', type: Date, required: true })
  create_time: Date;

  @ApiField({ description: '修改时间', type: Date, required: true })
  update_time: Date;

  @ApiField({ description: '创建人', type: String, nullable: true })
  create_by: string | null;

  @ApiField({ description: '修改人', type: String, nullable: true })
  update_by: string | null;

  @ApiField({ description: '是否已删除', type: Boolean, required: true })
  deleted: boolean;

  @ApiField({ description: '父菜单ID', type: String, nullable: true })
  pid: string | null;

  parent?: SysMenuModel;

  children?: SysMenuModel[];

  @ApiField({ description: '菜单名称', type: String, nullable: true })
  name: string | null;

  @ApiField({ description: '菜单URL', type: String, nullable: true })
  url: string | null;

  @ApiField({ description: '授权（多个用逗号分隔，如： user:list,user:create', type: String, nullable: true })
  perms: string | null;

  @ApiField({ description: '类型 0:目录 1:菜单 2:按钮', type: Number, required: true })
  type: number;

  @ApiField({ description: '模式：pc，app', type: String, nullable: true })
  mode: string | null;

  @ApiField({ description: '菜单图标', type: String, nullable: true })
  icon: string | null;

  @ApiField({ description: '颜色', type: String, nullable: true })
  color: string | null;

  @ApiField({ description: '路由地址', type: String, nullable: true })
  routeUrl: string | null;

  @ApiField({ description: '是否显示面包屑', type: String, nullable: true })
  breadCrumb: string | null;

  @ApiField({ description: '组件路径', type: String, nullable: true })
  componentName: string | null;

  @ApiField({ description: '组件名称', type: String, nullable: true })
  componentPath: string | null;

  @ApiField({ description: '排序', type: Number, required: true })
  orderNum: number;

  @ApiField({ description: '是否显示', type: Boolean, required: true })
  display: boolean;

  role_menus?: SysRoleMenuModel[];
}
