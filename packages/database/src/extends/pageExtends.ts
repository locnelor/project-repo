import { Prisma } from "../generated/prisma/client";


export const pageExtension = Prisma.defineExtension(prisma => prisma.$extends({
    name: 'pageExtension',
    model: (Object.keys(Prisma.ModelName) as Prisma.ModelName[]).reduce(
        (pre, cur) => {
            const page = async ({
                pageNo = 1,
                pageSize = 10,
                ...rest
            }: {
                pageNo: number;
                pageSize?: number;
            } & {
                    [key in string]: any;
                }) => {
                pageNo = parseInt(pageNo.toString());
                pageSize = parseInt(pageSize.toString());
                const pagination = {
                    skip: (pageNo - 1) * pageSize,
                    take: pageSize,
                };
                const records = await (prisma[cur].findMany as any)({
                    ...pagination,
                    ...rest,
                });

                const total = await (prisma[cur].count as any)({
                    where: rest.where,
                });
                return {
                    records,
                    total,
                    pageNo,
                    pageSize,
                };
            };
            pre[cur] = { page };
            return pre;
        },
        {} as {
            [key in Prisma.ModelName]: {
                page: (
                    params: {
                        pageNo: number;
                        pageSize?: number;
                    } & {
                        [key in string]: any;
                    },
                ) => Promise<{
                    records: any[];
                    total: number;
                    pageNo: number;
                    pageSize: number;
                }>;
            };
        },
    )
}))