import { SysMenu } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysRoleMenuModel } from './SysRoleMenu';

export class SysMenuModel implements SysMenu {
  @ApiField({ description: '主键ID', required: true })
  id: bigint;

  @ApiField({ description: '标题', type: String, required: true })
  title: string;

  @ApiField({ description: '上级菜单ID', required: true })
  parentId: bigint;

  @ApiField({ description: '类型（1：目录；2：菜单；3：按钮）', type: Number, required: true })
  type: number;

  @ApiField({ description: '路由地址', type: String, nullable: true })
  path: string | null;

  @ApiField({ description: '组件名称', type: String, nullable: true })
  name: string | null;

  @ApiField({ description: '组件路径', type: String, nullable: true })
  component: string | null;

  @ApiField({ description: '重定向地址', type: String, nullable: true })
  redirect: string | null;

  @ApiField({ description: '图标', type: String, nullable: true })
  icon: string | null;

  @ApiField({ description: '是否外链', type: Boolean, nullable: true })
  isExternal: boolean | null;

  @ApiField({ description: '是否缓存', type: Boolean, nullable: true })
  isCache: boolean | null;

  @ApiField({ description: '是否隐藏', type: Boolean, nullable: true })
  isHidden: boolean | null;

  @ApiField({ description: '权限标识', type: String, nullable: true })
  permission: string | null;

  @ApiField({ description: '排序', type: Number, required: true })
  sort: number;

  @ApiField({ description: '状态（1：启用；2：禁用）', type: Number, required: true })
  status: number;

  @ApiField({ description: '创建人', required: true })
  createUser: bigint;

  @ApiField({ description: '创建时间', type: Date, required: true })
  createTime: Date;

  @ApiField({ description: '修改人', nullable: true })
  updateUser: bigint | null;

  @ApiField({ description: '修改时间', type: Date, nullable: true })
  updateTime: Date | null;

  @ApiField({ description: '是否已删除', required: true })
  deleted: bigint;

  roles?: SysRoleMenuModel[];
}
