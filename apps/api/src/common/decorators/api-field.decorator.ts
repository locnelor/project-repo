import { ApiPropertyOptions, ApiProperty } from "@nestjs/swagger";
import { Expose, Transform, Type } from 'class-transformer';

export type ApiExposeDecoratorOptions = ApiPropertyOptions & {
    /**
     * 输出对象字段名，默认为类属性名
     */
    outputKey?: string;
    /**
     * 输出值，默认使用类属性值
     */
    fixedValue?: any;
}

/**
 * 集成 Swagger ApiProperty + class-transformer Expose + 可选固定值
 */
export function ApiField(description: string, options: ApiExposeDecoratorOptions = {}) {
    return function (target: any, propertyKey: string) {
        const { outputKey, fixedValue, ...swaggerOptions } = options;

        ApiProperty({ ...swaggerOptions, name: outputKey ?? propertyKey, description })(target, propertyKey);

        if ((swaggerOptions as any).type) {
            const raw = (swaggerOptions as any).type;
            const typeFn = raw && raw.prototype ? () => raw : raw;
            Type(typeFn)(target, propertyKey);
        }

        Expose({ name: outputKey })(target, propertyKey);
        Transform(({ obj, value }) => {
            if (fixedValue !== undefined) return fixedValue;
            // 如果 Expose 已经通过 name 映射到了值，则直接使用
            if (value !== undefined) return value;
            // 否则尝试使用属性名从源对象获取（兜底）
            return obj?.[propertyKey];
        }, { toClassOnly: true })(target, propertyKey);
    };
}
