import type { SysUserModel } from '@app/prisma'
import type { Prisma } from '@repo/database'

type AnyFn = (...args: any[]) => any
type PageArgs<TDelegate> = Prisma.Args<TDelegate, 'findMany'> & {
  pageNo: number
  pageSize: number
  where?: Prisma.Args<TDelegate, 'findMany'>['where']
}
interface AuditData {
  create_by?: number | string
  update_by?: number | string
  deleted?: boolean
}
type CreateArgs<TDelegate>
  = Prisma.Args<TDelegate, 'create'> & {
    data: Prisma.Args<TDelegate, 'create'>['data'] & AuditData
  }

type UpdateArgs<TDelegate>
  = Prisma.Args<TDelegate, 'update'> & {
    data: Prisma.Args<TDelegate, 'update'>['data'] & AuditData
  }

type FindUniqueArgs<TDelegate> = Prisma.Args<TDelegate, 'findUnique'> & {
  where: Prisma.Args<TDelegate, 'findUnique'>['where'] & {
    deleted?: boolean
  }
}
export class BaseCrudService<
  TDelegate extends {
    findUnique: AnyFn
    page: AnyFn
    create: AnyFn
    update: AnyFn
    delete: AnyFn
  },
> {
  constructor(protected readonly model: TDelegate) { }
  findOne<TArgs extends FindUniqueArgs<TDelegate>>(args: TArgs) {
    return this.model.findUnique({
      ...args,
      where: {
        deleted: false,
        ...args.where,
      },
    }) as Promise<Prisma.Result<TDelegate, TArgs, 'findUnique'>>
  }

  page<TArgs extends PageArgs<TDelegate>>(args: TArgs) {
    return this.model.page({
      ...args,
      where: {
        deleted: false,
        ...args.where,
      },
    }) as Promise<{
      records: Prisma.Result<TDelegate, TArgs, 'findMany'>
      total: number
      pageNo: number
      pageSize: number
    }>
  }

  create<TArgs extends CreateArgs<TDelegate>>(args: TArgs, user?: SysUserModel) {
    return this.model.create({
      ...args,
      data: {
        ...args.data,
        create_by: user?.id,
        update_by: user?.id,
      },
    }) as Promise<Prisma.Result<TDelegate, TArgs, 'create'>>
  }

  update<TArgs extends UpdateArgs<TDelegate>>(args: TArgs, user?: SysUserModel) {
    return this.model.update({
      ...args,
      data: {
        ...args.data,
        update_by: user?.id,
      },
    }) as Promise<Prisma.Result<TDelegate, TArgs, 'update'>>
  }

  softDelete<TArgs extends Prisma.Args<TDelegate, 'delete'>>(args: TArgs, user?: SysUserModel) {
    return this.update({
      ...(args as any),
      data: {
        deleted: true,
      },
    }, user)
  }

  delete<TArgs extends Prisma.Args<TDelegate, 'delete'>>(args: TArgs) {
    return this.model.delete(args) as Promise<Prisma.Result<TDelegate, TArgs, 'delete'>>
  }
}
type CrudServiceClass<TDelegate extends { findUnique: AnyFn, page: AnyFn, create: AnyFn, update: AnyFn, delete: AnyFn }> = new () => BaseCrudService<TDelegate>

export const BaseCrud = <
  TDelegate extends {
    findUnique: AnyFn
    page: AnyFn
    create: AnyFn
    update: AnyFn
    delete: AnyFn
  },
>(
  model: TDelegate,
): CrudServiceClass<TDelegate> => {
  return class extends BaseCrudService<TDelegate> {
    constructor() {
      super(model)
    }
  }
}
