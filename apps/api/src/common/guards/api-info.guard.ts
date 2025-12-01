import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PATH_METADATA, METHOD_METADATA } from '@nestjs/common/constants';

/**
 * API 信息输出 Guard
 * 用于在开发环境输出接口调用信息
 */
@Injectable()
export class ApiInfoGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // 仅在开发环境输出
    if (process.env.NODE_ENV === 'production') {
      return true;
    }

    const handler = context.getHandler();
    const controller = context.getClass();
    const request = context.switchToHttp().getRequest();

    // 获取控制器元数据
    const prefix = this.reflector.get<string>('prefix', controller) || '';
    const controllerUrl = this.reflector.get<string>('controller:url', controller) || '';
    const controllerTag = this.reflector.get<string>('controller:tag', controller) || 'default';

    // 获取方法元数据
    const methodPath = Reflect.getMetadata(PATH_METADATA, handler) || '';
    const requestMethod = Reflect.getMetadata(METHOD_METADATA, handler);
    
    // 获取 HTTP 方法
    let httpMethod = 'UNKNOWN';
    if (requestMethod !== undefined) {
      httpMethod = this.getMethodName(requestMethod);
    } else {
      // 尝试从元数据键中查找
      const allKeys = Reflect.getMetadataKeys(handler);
      for (const key of allKeys) {
        if (key === 'path') {
          const methodValue = Reflect.getMetadata('method', handler);
          if (methodValue !== undefined) {
            httpMethod = this.getMethodName(methodValue);
            break;
          }
        }
      }
    }

    // 获取鉴权配置
    const authConfig = this.reflector.getAllAndOverride<any>('auth:config', [
      handler,
      controller,
    ]);

    // 获取权限配置
    const permissionsConfig = this.reflector.getAllAndOverride<any>('permissions:config', [
      handler,
      controller,
    ]);

    // console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    // console.log('📡 API Request Info:');
    // console.log('  ├─ Controller:', controller.name);
    // console.log('  ├─ Handler:', handler.name);
    // console.log('  ├─ Method:', httpMethod);
    // console.log('  ├─ methodPath:', methodPath);
    // console.log('  ├─ URL:', request.url);
    // console.log('  ├─ Path:', request.path);
    // console.log('  └─ IP:', request.ip);
    // console.log('');
    // console.log('🔧 Configuration:');
    // console.log('  ├─ Prefix:', prefix);
    // console.log('  ├─ Controller URL:', controllerUrl);
    // console.log('  ├─ Tag:', controllerTag);
    // console.log('  ├─ Auth Required:', authConfig?.required ?? true);
    // console.log('  ├─ Auth Ignore:', authConfig?.ignore ?? false);
    // console.log('  ├─ Permissions Check:', !permissionsConfig?.ignore);
    // console.log('  └─ Required Permissions:', permissionsConfig?.permissions || []);
    // console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    return true;
  }

  private getMethodName(method: number | string): string {
    if (typeof method === 'string') return method;
    
    const methodMap: Record<number, string> = {
      0: 'GET',
      1: 'POST',
      2: 'PUT',
      3: 'DELETE',
      4: 'PATCH',
      5: 'ALL',
      6: 'OPTIONS',
      7: 'HEAD',
    };
    return methodMap[method] || 'UNKNOWN';
  }
}
