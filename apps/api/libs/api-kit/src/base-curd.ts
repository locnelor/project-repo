import { Prisma } from "@repo/database"

type AnyFn = (...args: any[]) => any

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
    findOne<
        TArgs extends Prisma.Args<TDelegate, 'findUnique'>
    >(
        args: TArgs
    ): Promise<Prisma.Result<TDelegate, TArgs, 'findUnique'>> {
        return this.model.findUnique(args)
    }

    page<TArgs extends Prisma.Args<TDelegate, 'findMany'> & { pageNo: number, pageSize: number }>(
        args: TArgs
    ): Promise<{
        records: Prisma.Result<TDelegate, TArgs, 'findMany'>,
        total: number,
        pageNo: number,
        pageSize: number
    }> {
        return this.model.page(args)
    }

    create<
        TArgs extends Prisma.Args<TDelegate, 'create'>
    >(
        args: TArgs
    ): Promise<Prisma.Result<TDelegate, TArgs, 'create'>> {
        return this.model.create(args)
    }

    update<
        TArgs extends Prisma.Args<TDelegate, 'update'>
    >(
        args: TArgs
    ): Promise<Prisma.Result<TDelegate, TArgs, 'update'>> {
        return this.model.update(args)
    }

    delete<
        TArgs extends Prisma.Args<TDelegate, 'delete'>
    >(
        args: TArgs
    ): Promise<Prisma.Result<TDelegate, TArgs, 'delete'>> {
        return this.model.delete(args)
    }
}
type CrudServiceClass<TDelegate extends { findUnique: AnyFn; page: AnyFn; create: AnyFn; update: AnyFn; delete: AnyFn }> = new () => BaseCrudService<TDelegate>

export const BaseCurd = <
  TDelegate extends {
    findUnique: AnyFn
    page: AnyFn
    create: AnyFn
    update: AnyFn
    delete: AnyFn
  }
>(
  model: TDelegate
): CrudServiceClass<TDelegate> => {
  return class extends BaseCrudService<TDelegate> {
    constructor() {
      super(model)
    }
  }
}