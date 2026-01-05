import path from 'node:path'
import dotenv from 'dotenv'
import { defineConfig, env } from 'prisma/config'

dotenv.config({ path: path.join(__dirname, '.env') })
dotenv.config({ path: path.join(__dirname, '../../.env') })

export default defineConfig({
  schema: 'prisma/schema',
  datasource: {
    url: env('DATABASE_URL'),
  },
})
