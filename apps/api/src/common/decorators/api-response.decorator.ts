import { Type, applyDecorators, UseInterceptors } from "@nestjs/common";
import { ApiResponse, ApiOperation, ApiExtraModels, getSchemaPath } from "@nestjs/swagger";
import { OperationObject } from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";
import { TransformInterceptor } from "../interceptors/transform.interceptor";
import { BaseApiResponse } from "../dto/BaseApiResponse.dto";

/**
 * ApiResponseDTO 装饰器
 * @param dto DTO class
 * @param summary swagger summary 可选
 *
 * 使用示例：
 * @Get()
 * @ApiResponseDTO(TestResult, '测试接口')
 * async test() { return { result: '123', rest: '666' } }
 */
export function ApiResponseJson(dto: Type<any>, option?: string | Partial<OperationObject>) {
  // 这里直接 new 一个拦截器实例并传入 dto（不依赖 DI）
  const interceptor = new TransformInterceptor(dto);

  return applyDecorators(
    ApiExtraModels(BaseApiResponse, dto),
    ApiResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(BaseApiResponse) },
          {
            type: 'object',
            properties: {
              data: { $ref: getSchemaPath(dto) },
            },
          },
        ],
      },
    }),
    option ? ApiOperation(typeof option === 'string' ? { summary: option } : option) : (target) => target,
    UseInterceptors(interceptor),
  );
}
