// 导入必要的依赖
import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthPowerEnum } from '../enums/auth-power.enum';

// 用户实体类型定义
interface SysUserEntity {
  uid: string;
  roles: {
    role: {
      menus: {
        menu: {
          path: string;
        };
        permissions?: string;
      }[];
    };
  }[];
  ban_menus: {
    menu: {
      path: string;
    };
  }[];
}

// 公共权限处理逻辑
const handleRequest = (user: SysUserEntity, perms: string) => {
  // if (!power) return user as any;

  // 检查用户是否在黑名单中
  // const isBanned = user?.ban_menus?.some(banMenu => banMenu.menu.path === path);
  // if (isBanned) {
  //   throw new ForbiddenException('该菜单已被禁用');
  // }

  // // 查找用户在该路径下的权限
  // let userPermissions = 0;

  // for (const userRole of user?.roles || []) {
  //   const menuRole = userRole.role.menus.find(menu => menu.menu.path === path);
  //   if (menuRole) {
  //     // 解析权限字符串，如果是JSON格式则解析，否则当作数字处理
  //     try {
  //       const permissions = menuRole.permissions ? JSON.parse(menuRole.permissions) : [];
  //       if (Array.isArray(permissions)) {
  //         userPermissions |= permissions.reduce((acc, p) => acc | p, 0);
  //       } else {
  //         userPermissions |= Number(menuRole.permissions) || 0;
  //       }
  //     } catch {
  //       userPermissions |= Number(menuRole.permissions) || 0;
  //     }
  //   }
  // }

  // if (!userPermissions) {
  //   throw new ForbiddenException('权限不足');
  // }

  // // 检查所需权限
  // const requiredPermissions = power.reduce((acc, item) => acc | item, 0);
  // if ((requiredPermissions & userPermissions) !== requiredPermissions) {
  //   throw new ForbiddenException('权限不足');
  // }

  return user as any;
};

// REST API权限守卫
@Injectable()
export class AuthPowerGuard extends AuthGuard('jwt') {
  constructor(
    private readonly perms: string,
    private readonly power: AuthPowerEnum[],
  ) {
    super();
  }

  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any) {
    if (!!err || !user) {
      throw new UnauthorizedException('请先登录！');
    }
    return handleRequest(user, this.perms);
  }
}
