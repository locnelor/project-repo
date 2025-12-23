import { Type, applyDecorators, UseInterceptors, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiOkResponse } from "@nestjs/swagger";
import { OperationObject } from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";
import { TransformInterceptor } from "../interceptors/transform.interceptor";
import { BaseApiResponse } from "../dto/BaseApiResponse.dto";
import { ApiField } from "./api-field.decorator";

/**
 * ApiResponseJson 配置接口
 */
export interface ApiResultOptions extends Partial<OperationObject> {
  /** 是否启用 API 信息 Guard（仅开发环境） */
  enableInfoGuard?: boolean;
}
export const ApiResult = <T>(
  dto: Type<T> | [Type<T>],
  option?: string | ApiResultOptions
) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
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
    // 构建装饰器数组
    const decoratorsList = [
      ApiOkResponse({
        description: typeof option === 'string' ? option : option?.summary,
        type: () => CustomResponseDto,
      }),
      config ? ApiOperation(config) : () => { },
      UseInterceptors(interceptor),
    ];

    // 应用所有装饰器
    applyDecorators(...decoratorsList)(target, propertyKey, descriptor);
  };
}