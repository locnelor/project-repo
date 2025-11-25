import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateMenuDto {
  @IsOptional()
  @IsString()
  pid?: string; // 父级菜单id

  @IsOptional()
  @IsString()
  name?: string; // 菜单名称

  @IsOptional()
  @IsString()
  url?: string; // 菜单url

  @IsOptional()
  @IsString()
  perms?: string; // 授权（多个用逗号分隔，如： user:list,user:create）

  @IsOptional()
  @IsInt()
  type?: number; // 0:目录 1:菜单 2:按钮

  @IsOptional()
  @IsString()
  mode?: string; // 模式，pc、app

  @IsOptional()
  @IsString()
  icon?: string; // 菜单图标

  @IsOptional()
  @IsString()
  color?: string; // 颜色

  @IsOptional()
  @IsString()
  routeUrl?: string; // 路由地址

  @IsOptional()
  @IsBoolean()
  breadCrumb?: boolean; // 是否显示面包屑

  @IsOptional()
  @IsString()
  componentPath?: string; // 组件路径

  @IsOptional()
  @IsString()
  componentName?: string; // 组件名称

  @IsOptional()
  @IsInt()
  orderNum?: number; // 排序

  @IsOptional()
  @IsBoolean()
  display?: boolean; // 是否显示
}
