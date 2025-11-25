# 数据库

## 概述

Qiyun-Repo 项目使用 Prisma 作为数据库 ORM，支持多种数据库类型，提供类型安全的数据库操作和自动化的数据库迁移管理。

## 技术栈

- **ORM**: Prisma 5.x
- **数据库**: PostgreSQL / MySQL / SQLite
- **查询构建器**: Prisma Client
- **迁移工具**: Prisma Migrate
- **数据库管理**: Prisma Studio

## 项目结构

```
apps/api/
├── prisma/
│   ├── schema.prisma      # 数据库模式定义
│   ├── migrations/        # 数据库迁移文件
│   │   ├── 20231201000001_init/
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   ├── seeds/             # 数据种子文件
│   │   ├── index.ts       # 种子入口文件
│   │   ├── users.ts       # 用户数据种子
│   │   ├── roles.ts       # 角色数据种子
│   │   └── permissions.ts # 权限数据种子
│   └── generated/         # Prisma 生成的客户端代码
├── src/
│   ├── database/          # 数据库相关代码
│   │   ├── prisma.service.ts    # Prisma 服务
│   │   ├── database.module.ts   # 数据库模块
│   │   └── migrations/          # 自定义迁移脚本
│   └── modules/           # 业务模块
│       ├── users/         # 用户模块
│       │   ├── entities/  # 实体定义
│       │   ├── dto/       # 数据传输对象
│       │   └── repositories/ # 数据访问层
│       └── auth/          # 认证模块
└── package.json
```

## 数据库模式定义

### schema.prisma 配置

```prisma
// apps/api/prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
  output   = "./generated/client"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// 用户表
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  username  String   @unique
  password  String
  nickname  String?
  avatar    String?
  phone     String?
  gender    Int      @default(0) // 0: 未知, 1: 男, 2: 女
  status    Int      @default(1) // 0: 禁用, 1: 启用
  lastLoginAt DateTime?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // 关联关系
  roles     UserRole[]
  profile   UserProfile?
  logs      UserLog[]
  
  @@map("users")
}

// 用户资料表
model UserProfile {
  id       String  @id @default(cuid())
  userId   String  @unique
  realName String?
  birthday DateTime?
  address  String?
  bio      String?
  
  // 关联关系
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@map("user_profiles")
}

// 角色表
model Role {
  id          String   @id @default(cuid())
  name        String   @unique
  code        String   @unique
  description String?
  status      Int      @default(1)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  // 关联关系
  users       UserRole[]
  permissions RolePermission[]
  
  @@map("roles")
}

// 用户角色关联表
model UserRole {
  id     String @id @default(cuid())
  userId String
  roleId String
  
  // 关联关系
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  role Role @relation(fields: [roleId], references: [id], onDelete: Cascade)
  
  @@unique([userId, roleId])
  @@map("user_roles")
}

// 权限表
model Permission {
  id          String   @id @default(cuid())
  name        String   @unique
  code        String   @unique
  resource    String   // 资源类型
  action      String   // 操作类型
  description String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  // 关联关系
  roles RolePermission[]
  
  @@map("permissions")
}

// 角色权限关联表
model RolePermission {
  id           String @id @default(cuid())
  roleId       String
  permissionId String
  
  // 关联关系
  role       Role       @relation(fields: [roleId], references: [id], onDelete: Cascade)
  permission Permission @relation(fields: [permissionId], references: [id], onDelete: Cascade)
  
  @@unique([roleId, permissionId])
  @@map("role_permissions")
}

// 菜单表
model Menu {
  id        String   @id @default(cuid())
  parentId  String?
  name      String
  path      String?
  component String?
  icon      String?
  type      String   // directory, menu, button
  order     Int      @default(0)
  status    Int      @default(1)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // 自关联
  parent   Menu?  @relation("MenuHierarchy", fields: [parentId], references: [id])
  children Menu[] @relation("MenuHierarchy")
  
  @@map("menus")
}

// 系统配置表
model SystemConfig {
  id          String   @id @default(cuid())
  key         String   @unique
  value       String
  description String?
  type        String   @default("string") // string, number, boolean, json
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@map("system_configs")
}

// 用户操作日志表
model UserLog {
  id        String   @id @default(cuid())
  userId    String
  action    String   // 操作类型
  resource  String   // 操作资源
  method    String   // HTTP 方法
  path      String   // 请求路径
  ip        String   // IP 地址
  userAgent String?  // 用户代理
  params    Json?    // 请求参数
  result    Json?    // 操作结果
  createdAt DateTime @default(now())
  
  // 关联关系
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@map("user_logs")
}

// 文件表
model File {
  id        String   @id @default(cuid())
  filename  String   // 原始文件名
  path      String   // 文件路径
  size      Int      // 文件大小
  mimetype  String   // MIME 类型
  hash      String   // 文件哈希
  uploadBy  String   // 上传者
  createdAt DateTime @default(now())
  
  @@map("files")
}

// 数据字典表
model Dictionary {
  id          String   @id @default(cuid())
  type        String   // 字典类型
  code        String   // 字典编码
  label       String   // 字典标签
  value       String   // 字典值
  description String?
  order       Int      @default(0)
  status      Int      @default(1)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@unique([type, code])
  @@map("dictionaries")
}
```

## Prisma 服务

### 数据库服务类

```typescript
// apps/api/src/database/prisma.service.ts

import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common'
import { PrismaClient } from '../prisma/generated/client'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'],
      errorFormat: 'pretty',
    })
  }

  async onModuleInit() {
    await this.$connect()
    console.log('数据库连接成功')
  }

  async onModuleDestroy() {
    await this.$disconnect()
    console.log('数据库连接已断开')
  }

  /**
   * 清理数据库连接
   */
  async enableShutdownHooks(app: any) {
    this.$on('beforeExit', async () => {
      await app.close()
    })
  }

  /**
   * 软删除扩展
   */
  async softDelete(model: string, where: any) {
    return this[model].update({
      where,
      data: {
        deletedAt: new Date(),
      },
    })
  }

  /**
   * 批量软删除
   */
  async softDeleteMany(model: string, where: any) {
    return this[model].updateMany({
      where,
      data: {
        deletedAt: new Date(),
      },
    })
  }

  /**
   * 恢复软删除
   */
  async restore(model: string, where: any) {
    return this[model].update({
      where,
      data: {
        deletedAt: null,
      },
    })
  }

  /**
   * 分页查询辅助方法
   */
  async paginate<T>(
    model: string,
    {
      page = 1,
      pageSize = 20,
      where = {},
      orderBy = {},
      include = {},
    }: {
      page?: number
      pageSize?: number
      where?: any
      orderBy?: any
      include?: any
    }
  ) {
    const skip = (page - 1) * pageSize
    
    const [data, total] = await Promise.all([
      this[model].findMany({
        where,
        orderBy,
        include,
        skip,
        take: pageSize,
      }),
      this[model].count({ where }),
    ])

    return {
      data,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    }
  }

  /**
   * 事务执行辅助方法
   */
  async executeTransaction<T>(callback: (prisma: PrismaClient) => Promise<T>): Promise<T> {
    return this.$transaction(callback)
  }
}
```

### 数据库模块

```typescript
// apps/api/src/database/database.module.ts

import { Global, Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}
```

## 数据访问层 (Repository)

### 基础 Repository

```typescript
// apps/api/src/common/repositories/base.repository.ts

import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../database/prisma.service'

export interface PaginationOptions {
  page?: number
  pageSize?: number
  orderBy?: any
  include?: any
}

export interface PaginationResult<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

@Injectable()
export abstract class BaseRepository<T> {
  protected abstract modelName: string

  constructor(protected readonly prisma: PrismaService) {}

  /**
   * 创建记录
   */
  async create(data: any): Promise<T> {
    return this.prisma[this.modelName].create({ data })
  }

  /**
   * 根据 ID 查找记录
   */
  async findById(id: string, include?: any): Promise<T | null> {
    return this.prisma[this.modelName].findUnique({
      where: { id },
      include,
    })
  }

  /**
   * 查找多条记录
   */
  async findMany(where?: any, include?: any): Promise<T[]> {
    return this.prisma[this.modelName].findMany({
      where,
      include,
    })
  }

  /**
   * 分页查询
   */
  async findManyWithPagination(
    where: any = {},
    options: PaginationOptions = {}
  ): Promise<PaginationResult<T>> {
    return this.prisma.paginate(this.modelName, {
      where,
      ...options,
    })
  }

  /**
   * 更新记录
   */
  async update(id: string, data: any): Promise<T> {
    return this.prisma[this.modelName].update({
      where: { id },
      data,
    })
  }

  /**
   * 删除记录
   */
  async delete(id: string): Promise<T> {
    return this.prisma[this.modelName].delete({
      where: { id },
    })
  }

  /**
   * 批量删除
   */
  async deleteMany(where: any): Promise<{ count: number }> {
    return this.prisma[this.modelName].deleteMany({ where })
  }

  /**
   * 统计记录数
   */
  async count(where?: any): Promise<number> {
    return this.prisma[this.modelName].count({ where })
  }

  /**
   * 检查记录是否存在
   */
  async exists(where: any): Promise<boolean> {
    const count = await this.count(where)
    return count > 0
  }
}
```

### 用户 Repository

```typescript
// apps/api/src/modules/users/repositories/user.repository.ts

import { Injectable } from '@nestjs/common'
import { User, Prisma } from '../../../prisma/generated/client'
import { BaseRepository } from '../../../common/repositories/base.repository'
import { PrismaService } from '../../../database/prisma.service'

@Injectable()
export class UserRepository extends BaseRepository<User> {
  protected modelName = 'user'

  constructor(prisma: PrismaService) {
    super(prisma)
  }

  /**
   * 根据邮箱查找用户
   */
  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
      include: {
        profile: true,
        roles: {
          include: {
            role: {
              include: {
                permissions: {
                  include: {
                    permission: true,
                  },
                },
              },
            },
          },
        },
      },
    })
  }

  /**
   * 根据用户名查找用户
   */
  async findByUsername(username: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { username },
    })
  }

  /**
   * 创建用户及其资料
   */
  async createWithProfile(userData: Prisma.UserCreateInput, profileData?: any): Promise<User> {
    return this.prisma.user.create({
      data: {
        ...userData,
        profile: profileData ? {
          create: profileData,
        } : undefined,
      },
      include: {
        profile: true,
      },
    })
  }

  /**
   * 更新用户最后登录时间
   */
  async updateLastLoginAt(id: string): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: {
        lastLoginAt: new Date(),
      },
    })
  }

  /**
   * 为用户分配角色
   */
  async assignRoles(userId: string, roleIds: string[]): Promise<void> {
    // 先删除现有角色
    await this.prisma.userRole.deleteMany({
      where: { userId },
    })

    // 分配新角色
    await this.prisma.userRole.createMany({
      data: roleIds.map(roleId => ({
        userId,
        roleId,
      })),
    })
  }

  /**
   * 获取用户权限
   */
  async getUserPermissions(userId: string): Promise<string[]> {
    const userRoles = await this.prisma.userRole.findMany({
      where: { userId },
      include: {
        role: {
          include: {
            permissions: {
              include: {
                permission: true,
              },
            },
          },
        },
      },
    })

    const permissions = new Set<string>()
    
    userRoles.forEach(userRole => {
      userRole.role.permissions.forEach(rolePermission => {
        permissions.add(rolePermission.permission.code)
      })
    })

    return Array.from(permissions)
  }

  /**
   * 搜索用户
   */
  async searchUsers(
    keyword: string,
    options: { page?: number; pageSize?: number } = {}
  ) {
    const where = {
      OR: [
        { email: { contains: keyword, mode: 'insensitive' as const } },
        { username: { contains: keyword, mode: 'insensitive' as const } },
        { nickname: { contains: keyword, mode: 'insensitive' as const } },
        {
          profile: {
            realName: { contains: keyword, mode: 'insensitive' as const },
          },
        },
      ],
    }

    return this.findManyWithPagination(where, {
      ...options,
      include: {
        profile: true,
        roles: {
          include: {
            role: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
  }
}
```

## 数据迁移

### 迁移命令

```bash
# 生成迁移文件
npx prisma migrate dev --name init

# 应用迁移
npx prisma migrate deploy

# 重置数据库
npx prisma migrate reset

# 查看迁移状态
npx prisma migrate status

# 解决迁移冲突
npx prisma migrate resolve --applied "20231201000001_init"
```

### 自定义迁移脚本

```typescript
// apps/api/src/database/migrations/add-indexes.ts

import { PrismaClient } from '../../prisma/generated/client'

const prisma = new PrismaClient()

async function addIndexes() {
  try {
    // 添加用户邮箱索引
    await prisma.$executeRaw`
      CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
    `

    // 添加用户状态索引
    await prisma.$executeRaw`
      CREATE INDEX IF NOT EXISTS idx_users_status ON users(status);
    `

    // 添加用户创建时间索引
    await prisma.$executeRaw`
      CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at);
    `

    // 添加用户角色联合索引
    await prisma.$executeRaw`
      CREATE INDEX IF NOT EXISTS idx_user_roles_user_role ON user_roles(user_id, role_id);
    `

    console.log('索引添加成功')
  } catch (error) {
    console.error('索引添加失败:', error)
  } finally {
    await prisma.$disconnect()
  }
}

addIndexes()
```

## 数据种子

### 种子入口文件

```typescript
// apps/api/prisma/seeds/index.ts

import { PrismaClient } from '../generated/client'
import { seedUsers } from './users'
import { seedRoles } from './roles'
import { seedPermissions } from './permissions'
import { seedMenus } from './menus'

const prisma = new PrismaClient()

async function main() {
  console.log('开始执行数据种子...')

  try {
    // 清理现有数据
    await prisma.userRole.deleteMany()
    await prisma.rolePermission.deleteMany()
    await prisma.userProfile.deleteMany()
    await prisma.user.deleteMany()
    await prisma.role.deleteMany()
    await prisma.permission.deleteMany()
    await prisma.menu.deleteMany()

    // 执行种子数据
    await seedPermissions(prisma)
    await seedRoles(prisma)
    await seedUsers(prisma)
    await seedMenus(prisma)

    console.log('数据种子执行完成')
  } catch (error) {
    console.error('数据种子执行失败:', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
```

### 用户种子数据

```typescript
// apps/api/prisma/seeds/users.ts

import { PrismaClient } from '../generated/client'
import * as bcrypt from 'bcrypt'

export async function seedUsers(prisma: PrismaClient) {
  console.log('创建用户数据...')

  const hashedPassword = await bcrypt.hash('123456', 10)

  // 创建超级管理员
  const admin = await prisma.user.create({
    data: {
      email: 'admin@qiyun.com',
      username: 'admin',
      password: hashedPassword,
      nickname: '超级管理员',
      status: 1,
      profile: {
        create: {
          realName: '系统管理员',
          bio: '系统超级管理员账户',
        },
      },
    },
  })

  // 创建普通用户
  const user = await prisma.user.create({
    data: {
      email: 'user@qiyun.com',
      username: 'user',
      password: hashedPassword,
      nickname: '普通用户',
      status: 1,
      profile: {
        create: {
          realName: '测试用户',
          bio: '普通测试用户账户',
        },
      },
    },
  })

  // 分配角色
  const adminRole = await prisma.role.findUnique({
    where: { code: 'admin' },
  })

  const userRole = await prisma.role.findUnique({
    where: { code: 'user' },
  })

  if (adminRole) {
    await prisma.userRole.create({
      data: {
        userId: admin.id,
        roleId: adminRole.id,
      },
    })
  }

  if (userRole) {
    await prisma.userRole.create({
      data: {
        userId: user.id,
        roleId: userRole.id,
      },
    })
  }

  console.log('用户数据创建完成')
}
```

## 数据库查询优化

### 查询优化技巧

```typescript
// 1. 使用 select 减少数据传输
const users = await prisma.user.findMany({
  select: {
    id: true,
    email: true,
    username: true,
    profile: {
      select: {
        realName: true,
      },
    },
  },
})

// 2. 使用 include 预加载关联数据
const userWithRoles = await prisma.user.findUnique({
  where: { id: userId },
  include: {
    roles: {
      include: {
        role: {
          include: {
            permissions: {
              include: {
                permission: true,
              },
            },
          },
        },
      },
    },
  },
})

// 3. 使用索引优化查询
const activeUsers = await prisma.user.findMany({
  where: {
    status: 1, // 确保 status 字段有索引
    createdAt: {
      gte: new Date('2023-01-01'), // 确保 createdAt 字段有索引
    },
  },
})

// 4. 使用批量操作
const userIds = ['id1', 'id2', 'id3']
const users = await prisma.user.findMany({
  where: {
    id: {
      in: userIds,
    },
  },
})

// 5. 使用原生 SQL 进行复杂查询
const result = await prisma.$queryRaw`
  SELECT u.id, u.email, COUNT(ur.role_id) as role_count
  FROM users u
  LEFT JOIN user_roles ur ON u.id = ur.user_id
  WHERE u.status = 1
  GROUP BY u.id, u.email
  HAVING COUNT(ur.role_id) > 0
`
```

### 事务处理

```typescript
// 交互式事务
const result = await prisma.$transaction(async (prisma) => {
  // 创建用户
  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      username: 'test',
      password: 'hashedPassword',
    },
  })

  // 创建用户资料
  const profile = await prisma.userProfile.create({
    data: {
      userId: user.id,
      realName: '测试用户',
    },
  })

  // 分配角色
  await prisma.userRole.create({
    data: {
      userId: user.id,
      roleId: 'role-id',
    },
  })

  return { user, profile }
})

// 批量事务
const [updatedUser, createdLog] = await prisma.$transaction([
  prisma.user.update({
    where: { id: userId },
    data: { lastLoginAt: new Date() },
  }),
  prisma.userLog.create({
    data: {
      userId,
      action: 'login',
      resource: 'auth',
      method: 'POST',
      path: '/auth/login',
      ip: '127.0.0.1',
    },
  }),
])
```

## 数据库监控

### 查询日志

```typescript
// apps/api/src/database/prisma.service.ts

import { Injectable } from '@nestjs/common'
import { PrismaClient } from '../prisma/generated/client'

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      log: [
        {
          emit: 'event',
          level: 'query',
        },
        {
          emit: 'event',
          level: 'error',
        },
        {
          emit: 'event',
          level: 'info',
        },
        {
          emit: 'event',
          level: 'warn',
        },
      ],
    })

    // 监听查询事件
    this.$on('query', (e) => {
      console.log('Query: ' + e.query)
      console.log('Params: ' + e.params)
      console.log('Duration: ' + e.duration + 'ms')
    })

    // 监听错误事件
    this.$on('error', (e) => {
      console.error('Database Error:', e)
    })
  }
}
```

### 性能监控

```typescript
// apps/api/src/common/interceptors/database.interceptor.ts

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable()
export class DatabaseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const start = Date.now()
    
    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - start
        const request = context.switchToHttp().getRequest()
        
        if (duration > 1000) { // 超过 1 秒的查询记录警告
          console.warn(`Slow database query detected: ${request.url} took ${duration}ms`)
        }
      }),
    )
  }
}
```

## 最佳实践

### 1. 数据模型设计

- 合理设计表结构和关联关系
- 使用适当的数据类型和约束
- 添加必要的索引提高查询性能
- 考虑数据的扩展性和维护性

### 2. 查询优化

- 避免 N+1 查询问题
- 使用 select 和 include 优化数据传输
- 合理使用索引和复合索引
- 对复杂查询使用原生 SQL

### 3. 事务管理

- 合理使用事务保证数据一致性
- 避免长时间事务锁定资源
- 处理事务异常和回滚
- 使用批量操作提高性能

### 4. 安全考虑

- 使用参数化查询防止 SQL 注入
- 对敏感数据进行加密存储
- 实施适当的访问控制
- 定期备份数据库

## 相关资源

- [Prisma 官方文档](https://www.prisma.io/docs)
- [PostgreSQL 文档](https://www.postgresql.org/docs/)
- [数据库设计最佳实践](https://www.prisma.io/dataguide/database-design)
- [API 接口文档](/guide/basics/api)
- [工程规范](/guide/engineering/standards)