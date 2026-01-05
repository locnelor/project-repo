import { Prisma } from '../generated/client'

export const pageExtension = Prisma.defineExtension({
  name: 'pageExtension',
  model: {
    $allModels: {
      async page<T, A>(
        this: T,
        args: Prisma.Exact<
          A,
          Prisma.Args<T, 'findMany'> & {
            pageNo: number
            pageSize?: number
          }
        >,
      ): Promise<{
        records: Prisma.Result<T, A, 'findMany'>
        pageNo: number
        pageSize: number
        total: number
      }> {
        const context: any = Prisma.getExtensionContext(this)
        const { pageNo: rawPageNo = 1, pageSize: rawPageSize = 10, ...rest } = args as any
        const pageNo = Number.parseInt(rawPageNo.toString())
        const pageSize = Number.parseInt(rawPageSize.toString())
        const pagination = {
          skip: (pageNo - 1) * pageSize,
          take: pageSize,
        }
        const [records, total] = await context.$parent.$transaction([
          context.findMany({
            ...pagination,
            ...rest,
          }),
          context.count({
            where: rest.where,
          }),
        ])
        return {
          records,
          pageNo,
          pageSize,
          total,
        }
      },
    },
  },
})
