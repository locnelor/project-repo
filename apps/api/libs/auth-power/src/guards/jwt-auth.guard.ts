import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IgnorePermissionMetaKey, PermissionMetaKey } from '../constants';
import { PermissionMeta } from '../decorators';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  async canActivate(context: ExecutionContext) {
    const ignore = this.reflector.getAllAndOverride<boolean>(IgnorePermissionMetaKey, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (ignore) return true;
    const can = await super.canActivate(context);
    if (!can) return false;
    const request: Request & { user: any } = context.switchToHttp().getRequest();
    const user = request.user;

    const permissionMeta: PermissionMeta = this.reflector.getAllAndOverride<PermissionMeta>(PermissionMetaKey, [
      context.getHandler(),
      context.getClass(),
    ]);

    const method = request.method;
    const url = request.route.path;

    this.checkPermission(user, permissionMeta, method, url);

    console.log(user);
    return true;
  }

  handleRequest(err, user, info) {
    console.log(err, user, info)
    if (err || !user) {
      throw err || new UnauthorizedException('认证失败，请重新登录');
    }
    return user;
  }

  private generatePermission() {
    
  }

  private checkPermission(user: any, meta?: PermissionMeta, method?: string, url?: string) {
    // if (!meta) return true;
    // const permission = 
  }
}
