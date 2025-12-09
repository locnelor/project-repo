import { sys_menu } from '@repo/database';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class SysMenuModel implements sys_menu {
  @ApiProperty({description:''})
  @Expose()
  id: string;
  @ApiProperty({description:''})
  @Expose()
  create_time: Date;
  @ApiProperty({description:''})
  @Expose()
  update_time: Date;
  @ApiProperty({description:'',required:false})
  @Expose()
  create_by?: string;
  @ApiProperty({description:'',required:false})
  @Expose()
  update_by?: string;
  @ApiProperty({description:''})
  @Expose()
  deleted: boolean;
  @ApiProperty({description:'父菜单ID',required:false})
  @Expose()
  pid?: string;
  @ApiProperty({description:'菜单名称',required:false})
  @Expose()
  name?: string;
  @ApiProperty({description:'菜单URL',required:false})
  @Expose()
  url?: string;
  @ApiProperty({description:'授权（多个用逗号分隔，如： user:list,user:create',required:false})
  @Expose()
  perms?: string;
  @ApiProperty({description:'类型 0:目录 1:菜单 2:按钮'})
  @Expose()
  type: number;
  @ApiProperty({description:'模式：pc，app',required:false})
  @Expose()
  mode?: string;
  @ApiProperty({description:'菜单图标',required:false})
  @Expose()
  icon?: string;
  @ApiProperty({description:'颜色',required:false})
  @Expose()
  color?: string;
  @ApiProperty({description:'路由地址',required:false})
  @Expose()
  routeUrl?: string;
  @ApiProperty({description:'是否显示面包屑',required:false})
  @Expose()
  breadCrumb?: string;
  @ApiProperty({description:'组件路径',required:false})
  @Expose()
  componentName?: string;
  @ApiProperty({description:'组件名称',required:false})
  @Expose()
  componentPath?: string;
  @ApiProperty({description:'排序'})
  @Expose()
  orderNum: number;
  @ApiProperty({description:'是否显示'})
  @Expose()
  display: boolean;
}
