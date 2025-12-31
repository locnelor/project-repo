import { Prisma } from "../generated/client";

const makeUUID = () => {
    return crypto.randomUUID().toString().split('-').join('');
};
type GenerateOption = {
    generateId?: boolean; // 是否格式化id（自动创建不带横线的uuid）
    generateCreateTime?: boolean;// 是否格式化create_time（自动创建当前时间）
    generateUpdateTime?: boolean;// 是否格式化update_time（自动创建当前时间）
}
const injectOption = (args: any, options: GenerateOption) => {
    const data = { ...args };
    const {
        generateId = false,
        generateCreateTime = false,
        generateUpdateTime = false
    } = options;
    if (generateId) {
        // data.id = makeUUID();
    }
    if (generateCreateTime) {
        data.create_time = new Date();
    }
    if (generateUpdateTime) {
        data.update_time = new Date();
    }
    return data
}
const writeFieldConfig = {
    create: {
        generateId: true,
        generateCreateTime: true,
        generateUpdateTime: true,
    },
    createMany: {
        generateId: true,
        generateCreateTime: true,
        generateUpdateTime: true,
    },
    connectOrCreate: {
        generateId: true,
        generateCreateTime: true,
        generateUpdateTime: true,
    },
    update: {
        generateUpdateTime: true,
    },
    updateMany: {
        generateUpdateTime: true,
    },
    upsert: {
        generateId: true,
        generateCreateTime: true,
        generateUpdateTime: true,
    },
}
// 递归处理嵌套对象中的id与create_time等参数
const dfs = (args: any, options: GenerateOption) => {
    // 处理基本类型和日期对象
    if (!args || typeof args !== "object") return args;
    if (args instanceof Date) return args;

    // 递归处理数组中的元素并
    if (Array.isArray(args)) return args.map(item => dfs(item, options));
    const result = { ...args };
    // 处理object类型;
    for (const field in writeFieldConfig) {
        if (field in args) {
            // 子项存在data，递归处理
            if (result[field].data) {
                result[field].data = dfs(result[field].data, writeFieldConfig[field]);
            }
        }
    }
    return injectOption(result, options);
}
const generated = (generateOption: GenerateOption) => {
    return ({ args, query }) => {
        const data = Array.isArray(args.data) ? [...args.data] : injectOption(args.data || {}, generateOption);
        args.data = dfs(data, generateOption)
        return query(args);
    }
}
export const prismaClientExtends = Prisma.defineExtension({
    name: "autoTimestampAndUUID",
    query: {
        $allModels: {
            ...Object.keys(writeFieldConfig).reduce((acc, key) => {
                acc[key] = generated(writeFieldConfig[key]);
                return acc;
            }, {} as any),
        }
    }
})