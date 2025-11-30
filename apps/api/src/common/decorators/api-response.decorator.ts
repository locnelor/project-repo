import { Type, applyDecorators, UseInterceptors } from "@nestjs/common";
import { ApiOperation, ApiOkResponse } from "@nestjs/swagger";
import { OperationObject } from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";
import { TransformInterceptor } from "../interceptors/transform.interceptor";
import { BaseApiResponse } from "../dto/BaseApiResponse.dto";
import { ApiField } from "./api-field.decorator";


export function ApiResponseJson<T>(dto: Type<T>, option?: string | Partial<OperationObject>) {
  const interceptor = new TransformInterceptor(dto);
  class CustomResponseDto extends BaseApiResponse {
    @ApiField({ type: () => dto })
    declare data: T;
  }
  Object.defineProperty(CustomResponseDto, 'name', { value: `CustomResponseDto_${dto.name}` });
  return applyDecorators(
    ApiOkResponse({
      description: typeof option === 'string' ? option : option?.summary,
      type: () => CustomResponseDto,
    }),
    option ? ApiOperation(typeof option === "string" ? { summary: option } : option) : () => { },
    UseInterceptors(interceptor),
  );
}
