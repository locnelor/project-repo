import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import { prismaClientExtends } from './extends/autoTimestampAndUUID'
import { pageExtension } from './extends/pageExtends'
import { PrismaClient } from './generated/client'
import 'dotenv/config'

export * from './generated/client'

export * from './types'
export * from '@prisma/adapter-mariadb'
export * from '@prisma/client/runtime/client'
console.log({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5,
})
const prismaInstance = new PrismaClient({
  adapter: new PrismaMariaDb({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    connectionLimit: 5,
  }),
})
export const prisma = prismaInstance
  .$extends(prismaClientExtends)
  .$extends(pageExtension)

export type ExtendedPrismaClient = typeof prisma
