import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "./generated/prisma/client";
import { prismaClientExtends } from "./extends/autoTimestampAndUUID";
import { pageExtension } from "./extends/pageExtends";
export * from "@prisma/client/runtime/client"

export * from "./generated/prisma/client"
export * from "@prisma/adapter-mariadb";

const prismaInstance = new PrismaClient({
    adapter: new PrismaMariaDb({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        connectionLimit: 5
    }),
});

export const prisma = prismaInstance
    .$extends(prismaClientExtends)
    .$extends(pageExtension(prismaInstance));

export type ExtendedPrismaClient = typeof prisma;
