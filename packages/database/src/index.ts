import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { prismaClientExtends } from "./extends/autoTimestampAndUUID";
import { pageExtension } from "./extends/pageExtends";
export * from "@prisma/client/runtime/client"
import 'dotenv/config'
import { PrismaClient } from "./generated/client";

export * from "./generated/client";
export * from "@prisma/adapter-mariadb";
export * from "./types"
console.log({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    connectionLimit: 5
})
const prismaInstance = new PrismaClient({
    adapter: new PrismaMariaDb({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        connectionLimit: 5
    }),
});
// export const DMMF = getDMMF({
//     datamodel:
// })
export const prisma = prismaInstance
    .$extends(prismaClientExtends)
    .$extends(pageExtension);

export type ExtendedPrismaClient = typeof prisma;



