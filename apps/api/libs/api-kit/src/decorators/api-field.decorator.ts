import type { ApiPropertyOptions } from '@nestjs/swagger'
import { ApiProperty } from '@nestjs/swagger'
import { Expose, Transform } from 'class-transformer'

export type ApiExposeDecoratorOptions = ApiPropertyOptions & {
  /**
   * 是否暴露该字段，默认为 true
   */
  expose?: boolean

  /**
   * 脱敏函数，用于对字段值进行处理，如手机号、邮箱等
   */
  mask?: Masker // 脱敏
}

export type Masker
  = | 'phone'
    | 'email'
    | 'idCard'
    | ((value: any, obj?: any) => any)

function applyMask(value: any, type: Masker) {
  const v = String(value)

  switch (type) {
    case 'phone':
      return v.replace(/^(\d{3})\d*(\d{4})$/, '$1****$2')

    case 'email':
      return v.replace(/^(.)(.*)(@.*)$/, '$1****$3')

    case 'idCard':
      return v.replace(/^(.{4}).*(.{4})$/, '$1****$2')

    default:
      return v
  }
}
/**
 * 集成 Swagger ApiProperty + class-transformer Expose + 可选固定值
 */
export function ApiField(options: ApiExposeDecoratorOptions = {}) {
  return function (target: any, propertyKey: string) {
    const { name, expose = true, mask, ...swaggerOptions } = options
    const description = typeof swaggerOptions.type === 'function' ? undefined : swaggerOptions.description

    const required = swaggerOptions.required ?? false

    ApiProperty({ ...swaggerOptions, required: required as any, name: name ?? propertyKey, description })(target, propertyKey)

    if (expose) {
      if (name) {
        Expose({ name })(target, propertyKey)
      } else {
        Expose()(target, propertyKey)
      }
    }

    Transform(({ obj, value }) => {
      const finalValue
        = value !== undefined ? value : obj?.[propertyKey]

      // 脱敏处理
      if (mask && finalValue != null) {
        if (typeof mask === 'function') {
          return mask(finalValue, obj)
        }

        if (typeof mask === 'string') {
          return applyMask(finalValue, mask)
        }
      }

      return finalValue
    }, { toClassOnly: true })(target, propertyKey)
  }
}
