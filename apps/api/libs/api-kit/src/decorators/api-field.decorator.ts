import { ApiPropertyOptions, ApiProperty } from "@nestjs/swagger";
import { Expose, Transform } from 'class-transformer';

export type ApiExposeDecoratorOptions = ApiPropertyOptions & {
    /**
     * 输出对象字段名，默认为类属性名
     */
    outputKey?: string;
    /**
     * 输出值，默认使用类属性值
     */
    fixedValue?: any;
    /**
     * 是否暴露该字段，默认为 true
     */
    expose?: boolean;

    /**
     * 脱敏函数，用于对字段值进行处理，如手机号、邮箱等
     */
    mask?: Masker; // 脱敏
}

export type Masker =
    | "phone"
    | "email"
    | "idCard"
    | ((value: any, obj?: any) => any);

function applyMask(value: any, type: Masker) {
    const v = String(value);

    switch (type) {
        case 'phone':
            return v.replace(/^(\d{3})\d*(\d{4})$/, '$1****$2');

        case 'email':
            return v.replace(/^(.)(.*)(@.*)$/, '$1****$3');

        case 'idCard':
            return v.replace(/^(.{4}).*(.{4})$/, '$1****$2');

        default:
            return v;
    }
}
/**
 * 集成 Swagger ApiProperty + class-transformer Expose + 可选固定值
 */
export function ApiField(options: ApiExposeDecoratorOptions = {}) {
    return function (target: any, propertyKey: string) {
        const { outputKey, fixedValue, expose = true, mask, ...swaggerOptions } = options;
        const description = typeof swaggerOptions.type === "function" ? undefined : swaggerOptions.description;

        // 默认为非必填 (required: false)，除非显示指定 required: true
        const required = swaggerOptions.required ?? false;

        ApiProperty({ ...swaggerOptions, required: required as any, name: outputKey ?? propertyKey, description })(target, propertyKey);

        if (expose) {
            Expose({ name: outputKey })(target, propertyKey);
        }

        Transform(({ obj, value }) => {
            // if (fixedValue !== undefined) return fixedValue;
            // // 如果 Expose 已经通过 name 映射到了值，则直接使用
            // if (value !== undefined) return value;
            // // 否则尝试使用属性名从源对象获取（兜底）
            // return obj?.[propertyKey];




            // 1. 固定值最高优先级
            if (fixedValue !== undefined) return fixedValue;

            // 2. 取真实值
            let finalValue =
                value !== undefined ? value : obj?.[propertyKey];

            // 3. 脱敏处理
            if (mask && finalValue != null) {
                if (typeof mask === 'function') {
                    return mask(finalValue, obj);
                }

                if (typeof mask === 'string') {
                    return applyMask(finalValue, mask);
                }
            }

            return finalValue;
        }, { toClassOnly: true })(target, propertyKey);
    };
}
