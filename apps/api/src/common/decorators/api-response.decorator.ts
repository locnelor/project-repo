import { Type, applyDecorators, UseInterceptors } from "@nestjs/common";
import { ApiOperation, ApiOkResponse } from "@nestjs/swagger";
import { OperationObject } from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";
import { TransformInterceptor } from "../interceptors/transform.interceptor";
import { BaseApiResponse } from "../dto/BaseApiResponse.dto";
import { ApiField } from "./api-field.decorator";


export function ApiResponseJson<T>(dto: Type<T> | [Type<T>], option?: string | Partial<OperationObject>) {
  const isArray = Array.isArray(dto);
  const dtoClass = isArray ? (dto as [Type<T>])[0] : (dto as Type<T>);
  const interceptor = new TransformInterceptor(dtoClass);
  class CustomResponseDto extends BaseApiResponse {
    @ApiField({ type: () => isArray ? [dtoClass] : dtoClass, required: true })
    declare data: T | T[];
  }
  Object.defineProperty(CustomResponseDto, 'name', { value: `CustomResponseDto_${dtoClass.name}${isArray ? 'Array' : ''}` });
  return applyDecorators(
    ApiOkResponse({
      description: typeof option === 'string' ? option : option?.summary,
      type: () => CustomResponseDto,
    }),
    option ? ApiOperation(typeof option === "string" ? { summary: option } : option) : () => { },
    UseInterceptors(interceptor),
  );
}
