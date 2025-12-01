import { Type, applyDecorators, UseInterceptors, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiOkResponse } from "@nestjs/swagger";
import { OperationObject } from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";
import { TransformInterceptor } from "../interceptors/transform.interceptor";
import { BaseApiResponse } from "../dto/BaseApiResponse.dto";
import { ApiField } from "./api-field.decorator";
import { PATH_METADATA, METHOD_METADATA } from '@nestjs/common/constants';
import { ApiInfoGuard } from '../guards/api-info.guard';

/**
 * Controller 信息接口
 */
export interface ControllerInfo {
  /** 权限前缀 */
  prefix: string;
  /** Controller URL */
  url: string;
  /** API 标签 */
  tag: string;
  /** 请求方法 (GET, POST, PUT, DELETE 等) */
  method: string;
  /** 方法路径 */
  path: string;
  /** 完整路径 (controller url + method path) */
  fullPath: string;
}

/**
 * ApiResponseJson 配置接口
 */
export interface ApiResponseJsonOptions extends Partial<OperationObject> {
  /** 是否启用 API 信息 Guard（仅开发环境） */
  enableInfoGuard?: boolean;
}

export function ApiResponseJson<T>(
  dto: Type<T> | [Type<T>], 
  option?: string | ApiResponseJsonOptions
) {

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): void {

    // 后续逻辑保持不变
    const isArray = Array.isArray(dto);
    const dtoClass = isArray ? (dto as [Type<T>])[0] : (dto as Type<T>);
    const interceptor = new TransformInterceptor(dtoClass);

    class CustomResponseDto extends BaseApiResponse {
      @ApiField({ type: () => isArray ? [dtoClass] : dtoClass, required: true })
      declare data: T | T[];
    }

    Object.defineProperty(CustomResponseDto, 'name', { value: `CustomResponseDto_${dtoClass.name}${isArray ? 'Array' : ''}` });

    // 解析配置
    const config = typeof option === 'string' ? { summary: option } : (option || {});
    const enableInfoGuard = typeof option === 'object' ? option.enableInfoGuard !== false : true;
    
    // 构建装饰器数组
    const decoratorsList = [
      ApiOkResponse({
        description: typeof option === 'string' ? option : option?.summary,
        type: () => CustomResponseDto,
      }),
      config ? ApiOperation(config) : () => { },
      UseInterceptors(interceptor),
    ];

    // 添加 API 信息 Guard（开发环境）
    if (enableInfoGuard && process.env.NODE_ENV !== 'production') {
      decoratorsList.push(UseGuards(ApiInfoGuard));
    }

    // 应用所有装饰器
    applyDecorators(...decoratorsList)(target, propertyKey, descriptor);

    // 延迟读取元数据：使用 setTimeout 确保类装饰器已经执行
    setTimeout(() => {
      // 获取 Controller 上的元数据
      const prefix = Reflect.getMetadata("prefix", target.constructor) || "";
      const controllerUrl = Reflect.getMetadata("controller:url", target.constructor) || "";
      const controllerTag = Reflect.getMetadata("controller:tag", target.constructor) || "default";

      // 获取方法上的路由元数据
      const methodPath = Reflect.getMetadata(PATH_METADATA, descriptor.value) || "";
      const requestMethod = Reflect.getMetadata(METHOD_METADATA, descriptor.value);
      
      // 获取方法名（从 descriptor 或装饰器上下文）
      let method = 'UNKNOWN';
      if (requestMethod !== undefined) {
        method = typeof requestMethod === 'number' ? getMethodName(requestMethod) : requestMethod;
      } else {
        // 尝试从方法名推断（如果使用了 @Get、@Post 等装饰器）
        const allKeys = Reflect.getMetadataKeys(descriptor.value);
        // 查找 path:* 这样的 key，它们通常对应 HTTP 方法
        for (const key of allKeys) {
          if (key === 'path') {
            // NestJS 使用 'method' metadata key 存储 HTTP 方法
            const methodValue = Reflect.getMetadata('method', descriptor.value);
            if (methodValue !== undefined) {
              method = typeof methodValue === 'number' ? getMethodName(methodValue) : methodValue;
              break;
            }
          }
        }
      }

      // 构建完整路径
      const fullPath = [controllerUrl, methodPath]
        .filter(Boolean)
        .join('/')
        .replace(/\/+/g, '/'); // 移除多余的斜杠

      // 组装 Controller 信息
      const controllerInfo: ControllerInfo = {
        prefix,
        url: controllerUrl,
        tag: controllerTag,
        method,
        path: methodPath,
        fullPath,
      };

      // console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      // console.log("📋 Controller Info:");
      // console.log("  - Prefix:", controllerInfo.prefix);
      // console.log("  - URL:", controllerInfo.url);
      // console.log("  - Tag:", controllerInfo.tag);
      // console.log("  - Method:", controllerInfo.method);
      // console.log("  - Path:", controllerInfo.path);
      // console.log("  - Full Path:", controllerInfo.fullPath);
      // console.log("  - Property Key:", propertyKey);
      // console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    }, 0);
  };
}

/**
 * 将 NestJS 的请求方法枚举转换为字符串
 * @param method 方法枚举值
 * @returns 方法名称字符串
 */
function getMethodName(method: number): string {
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