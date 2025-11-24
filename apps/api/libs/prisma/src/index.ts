import { Prisma, PrismaClient, sys_user } from '@repo/database';

// // 定义 Prisma 扩展，用于在创建记录时自动添加时间戳和 UUID
export const autoTimestampAndUUIDExtension = Prisma.defineExtension({
  name: 'autoTimestampAndUUID',
  query: {
    $allModels: {
      async create({ args, query }: any) {
        // 为新记录添加创建时间和更新时间
        // args.data.createdAt = new Date()
        // args.data.updatedAt = new Date()
        if (!!args.data.id) return query(args);
        // 生成不带横线的 UUID 作为唯一标识
        const uuid = require("crypto").randomUUID()
        args.data.id = uuid.toString().split("-").join("");
        return query(args);
      },
    }
  }
})
export const makePageModel = (handle?: (where: any, user: sys_user) => any) => (Object.keys(Prisma.ModelName) as Prisma.ModelName[]).reduce((pre, cur) => {
  const page = async ({ pageNo, pageSize = 10, ...rest }: {
    pageNo: number,
    pageSize?: number,
  } & {
    [key in string]: any
  }, user?: sys_user) => {
    const pagination = {
      skip: (pageNo - 1) * pageSize,
      take: pageSize,
    }
    const where = {
      ...rest.where,
      deleted: false
    }
    // 携带权限查询
    if (!!user && !!handle) {
      await handle(where, user)
    }
    const records = await (prisma[cur].findMany as any)({
      ...pagination,
      ...rest,
      where
    })
    const count = await (prisma[cur].count as any)({
      ...pagination,
      ...rest,
      where,
    })
    return {
      records,
      count,
      pageNo,
      pageSize
    }
  }
  pre[cur] = { page }
  return pre
}, {} as {
  [key in Prisma.ModelName]: {
    page: (params: {
      pageNo: number,
      pageSize?: number,
    } & {
      [key in string]: any
    }, user?: sys_user) => Promise<{
      records: any[],
      count: number,
      pageNo: number,
      pageSize: number,
    }>
  }
})
const pageExtension = Prisma.defineExtension({
  name: "pageExtension",
  model: makePageModel()
})
export const prisma = new PrismaClient().$extends(autoTimestampAndUUIDExtension).$extends(pageExtension)
// prisma.sys_config.page
// 导出扩展后的 Prisma 客户端类型
export type ExtendedPrismaClient = typeof prisma