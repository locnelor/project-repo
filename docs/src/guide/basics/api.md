# API

## API 系统概览

Qiyun-Repo 采用 RESTful API 设计，基于 NestJS 框架构建，提供统一的接口规范、错误处理、认证授权和数据验证机制。

## API 架构

### 整体架构

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   API Gateway   │    │   Backend API   │
│   (Vue Apps)    │◄──►│   (Nginx/Kong)  │◄──►│   (NestJS)      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                        │
                                               ┌─────────────────┐
                                               │   Database      │
                                               │   (PostgreSQL)  │
                                               └─────────────────┘
```

### 技术栈

- **框架**: NestJS + TypeScript
- **数据库**: PostgreSQL + Prisma ORM
- **认证**: JWT + Passport
- **验证**: class-validator + class-transformer
- **文档**: Swagger/OpenAPI
- **缓存**: Redis
- **队列**: Bull Queue

## API 规范

### RESTful 设计原则

```typescript
// 资源命名规范
GET    /api/users           // 获取用户列表
GET    /api/users/:id       // 获取单个用户
POST   /api/users           // 创建用户
PUT    /api/users/:id       // 更新用户
PATCH  /api/users/:id       // 部分更新用户
DELETE /api/users/:id       // 删除用户

// 嵌套资源
GET    /api/users/:id/posts // 获取用户的文章
POST   /api/users/:id/posts // 为用户创建文章
```

### 统一响应格式

```typescript
// types/api.ts
export interface ApiResponse<T = any> {
  code: number
  message: string
  data?: T
  timestamp: string
  path: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// 成功响应
{
  "code": 200,
  "message": "Success",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "timestamp": "2024-01-01T00:00:00.000Z",
  "path": "/api/users/1"
}

// 错误响应
{
  "code": 400,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Email must be a valid email address"
    }
  ],
  "timestamp": "2024-01-01T00:00:00.000Z",
  "path": "/api/users"
}
```

### HTTP 状态码规范

```typescript
// 状态码定义
export enum HttpStatus {
  // 成功
  OK = 200,                    // 请求成功
  CREATED = 201,               // 资源创建成功
  NO_CONTENT = 204,            // 请求成功，无返回内容
  
  // 客户端错误
  BAD_REQUEST = 400,           // 请求参数错误
  UNAUTHORIZED = 401,          // 未认证
  FORBIDDEN = 403,             // 无权限
  NOT_FOUND = 404,             // 资源不存在
  CONFLICT = 409,              // 资源冲突
  UNPROCESSABLE_ENTITY = 422,  // 数据验证失败
  
  // 服务器错误
  INTERNAL_SERVER_ERROR = 500, // 服务器内部错误
  BAD_GATEWAY = 502,           // 网关错误
  SERVICE_UNAVAILABLE = 503    // 服务不可用
}
```

## 控制器设计

### 基础控制器

```typescript
// controllers/base.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: '获取用户列表' })
  @ApiResponse({ status: 200, description: '成功获取用户列表' })
  async findAll(@Query() query: FindUsersDto): Promise<PaginatedResponse<User>> {
    return this.usersService.findAll(query)
  }

  @Get(':id')
  @ApiOperation({ summary: '获取用户详情' })
  @ApiResponse({ status: 200, description: '成功获取用户详情' })
  @ApiResponse({ status: 404, description: '用户不存在' })
  async findOne(@Param('id') id: string): Promise<ApiResponse<User>> {
    return this.usersService.findOne(+id)
  }

  @Post()
  @ApiOperation({ summary: '创建用户' })
  @ApiResponse({ status: 201, description: '用户创建成功' })
  @ApiResponse({ status: 400, description: '请求参数错误' })
  async create(@Body() createUserDto: CreateUserDto): Promise<ApiResponse<User>> {
    return this.usersService.create(createUserDto)
  }

  @Put(':id')
  @ApiOperation({ summary: '更新用户' })
  @ApiResponse({ status: 200, description: '用户更新成功' })
  @ApiResponse({ status: 404, description: '用户不存在' })
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<ApiResponse<User>> {
    return this.usersService.update(+id, updateUserDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除用户' })
  @ApiResponse({ status: 204, description: '用户删除成功' })
  @ApiResponse({ status: 404, description: '用户不存在' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(+id)
  }
}
```

### 数据传输对象 (DTO)

```typescript
// dto/create-user.dto.ts
import { IsEmail, IsString, IsOptional, MinLength, MaxLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({ description: '用户名', example: 'john_doe' })
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  username: string

  @ApiProperty({ description: '邮箱', example: 'john@example.com' })
  @IsEmail()
  email: string

  @ApiProperty({ description: '密码', example: 'password123' })
  @IsString()
  @MinLength(6)
  password: string

  @ApiProperty({ description: '姓名', example: 'John Doe', required: false })
  @IsOptional()
  @IsString()
  name?: string
}

// dto/update-user.dto.ts
import { PartialType } from '@nestjs/swagger'
import { CreateUserDto } from './create-user.dto'

export class UpdateUserDto extends PartialType(CreateUserDto) {}

// dto/find-users.dto.ts
export class FindUsersDto {
  @ApiProperty({ description: '页码', example: 1, required: false })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1

  @ApiProperty({ description: '每页数量', example: 10, required: false })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 10

  @ApiProperty({ description: '搜索关键词', required: false })
  @IsOptional()
  @IsString()
  search?: string

  @ApiProperty({ description: '排序字段', required: false })
  @IsOptional()
  @IsString()
  sortBy?: string

  @ApiProperty({ description: '排序方向', enum: ['asc', 'desc'], required: false })
  @IsOptional()
  @IsIn(['asc', 'desc'])
  sortOrder?: 'asc' | 'desc' = 'desc'
}
```

## 服务层设计

### 基础服务

```typescript
// services/users.service.ts
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateUserDto, UpdateUserDto, FindUsersDto } from '../dto'
import { User } from '@prisma/client'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll(query: FindUsersDto): Promise<PaginatedResponse<User>> {
    const { page, limit, search, sortBy, sortOrder } = query
    const skip = (page - 1) * limit

    const where = search ? {
      OR: [
        { username: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { name: { contains: search, mode: 'insensitive' } }
      ]
    } : {}

    const orderBy = sortBy ? { [sortBy]: sortOrder } : { createdAt: 'desc' }

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        skip,
        take: limit,
        orderBy,
        select: {
          id: true,
          username: true,
          email: true,
          name: true,
          createdAt: true,
          updatedAt: true
        }
      }),
      this.prisma.user.count({ where })
    ])

    return {
      code: 200,
      message: 'Success',
      data: users,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      },
      timestamp: new Date().toISOString(),
      path: '/api/users'
    }
  }

  async findOne(id: number): Promise<ApiResponse<User>> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true
      }
    })

    if (!user) {
      throw new NotFoundException('User not found')
    }

    return {
      code: 200,
      message: 'Success',
      data: user,
      timestamp: new Date().toISOString(),
      path: `/api/users/${id}`
    }
  }

  async create(createUserDto: CreateUserDto): Promise<ApiResponse<User>> {
    // 检查用户名和邮箱是否已存在
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [
          { username: createUserDto.username },
          { email: createUserDto.email }
        ]
      }
    })

    if (existingUser) {
      throw new ConflictException('Username or email already exists')
    }

    // 加密密码
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10)

    const user = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword
      },
      select: {
        id: true,
        username: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true
      }
    })

    return {
      code: 201,
      message: 'User created successfully',
      data: user,
      timestamp: new Date().toISOString(),
      path: '/api/users'
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<ApiResponse<User>> {
    await this.findOne(id) // 检查用户是否存在

    const updateData = { ...updateUserDto }
    
    // 如果更新密码，需要加密
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10)
    }

    const user = await this.prisma.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        username: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true
      }
    })

    return {
      code: 200,
      message: 'User updated successfully',
      data: user,
      timestamp: new Date().toISOString(),
      path: `/api/users/${id}`
    }
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id) // 检查用户是否存在

    await this.prisma.user.delete({
      where: { id }
    })
  }
}
```

## 认证与授权

### JWT 认证

```typescript
// auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(loginDto: LoginDto): Promise<ApiResponse<{ token: string; user: User }>> {
    const user = await this.validateUser(loginDto.username, loginDto.password)
    
    if (!user) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const payload = { sub: user.id, username: user.username }
    const token = this.jwtService.sign(payload)

    return {
      code: 200,
      message: 'Login successful',
      data: {
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          name: user.name
        }
      },
      timestamp: new Date().toISOString(),
      path: '/api/auth/login'
    }
  }

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { username }
    })

    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user
      return result
    }

    return null
  }
}
```

### 权限守卫

```typescript
// guards/roles.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { ROLES_KEY } from '../decorators/roles.decorator'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass()
    ])

    if (!requiredRoles) {
      return true
    }

    const { user } = context.switchToHttp().getRequest()
    return requiredRoles.some(role => user.roles?.includes(role))
  }
}

// decorators/roles.decorator.ts
import { SetMetadata } from '@nestjs/common'

export const ROLES_KEY = 'roles'
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles)

// 使用示例
@Post()
@Roles('admin', 'moderator')
@UseGuards(JwtAuthGuard, RolesGuard)
async create(@Body() createUserDto: CreateUserDto) {
  return this.usersService.create(createUserDto)
}
```

## 错误处理

### 全局异常过滤器

```typescript
// filters/http-exception.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus
} from '@nestjs/common'
import { Request, Response } from 'express'

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()

    let status = HttpStatus.INTERNAL_SERVER_ERROR
    let message = 'Internal server error'
    let errors: any[] = []

    if (exception instanceof HttpException) {
      status = exception.getStatus()
      const exceptionResponse = exception.getResponse()
      
      if (typeof exceptionResponse === 'object') {
        message = (exceptionResponse as any).message || exception.message
        errors = (exceptionResponse as any).errors || []
      } else {
        message = exceptionResponse as string
      }
    }

    const errorResponse = {
      code: status,
      message,
      ...(errors.length > 0 && { errors }),
      timestamp: new Date().toISOString(),
      path: request.url
    }

    response.status(status).json(errorResponse)
  }
}
```

### 验证管道

```typescript
// pipes/validation.pipe.ts
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException
} from '@nestjs/common'
import { validate } from 'class-validator'
import { plainToClass } from 'class-transformer'

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value
    }

    const object = plainToClass(metatype, value)
    const errors = await validate(object)

    if (errors.length > 0) {
      const errorMessages = errors.map(error => ({
        field: error.property,
        message: Object.values(error.constraints || {}).join(', ')
      }))

      throw new BadRequestException({
        message: 'Validation failed',
        errors: errorMessages
      })
    }

    return value
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object]
    return !types.includes(metatype)
  }
}
```

## API 文档

### Swagger 配置

```typescript
// main.ts
import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Swagger 配置
  const config = new DocumentBuilder()
    .setTitle('Qiyun API')
    .setDescription('Qiyun 项目 API 文档')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header'
      },
      'JWT-auth'
    )
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/docs', app, document)

  await app.listen(3000)
}
bootstrap()
```

### API 文档注解

```typescript
// entities/user.entity.ts
import { ApiProperty } from '@nestjs/swagger'

export class User {
  @ApiProperty({ description: '用户ID', example: 1 })
  id: number

  @ApiProperty({ description: '用户名', example: 'john_doe' })
  username: string

  @ApiProperty({ description: '邮箱', example: 'john@example.com' })
  email: string

  @ApiProperty({ description: '姓名', example: 'John Doe' })
  name: string

  @ApiProperty({ description: '创建时间' })
  createdAt: Date

  @ApiProperty({ description: '更新时间' })
  updatedAt: Date
}
```

## 前端 API 调用

### API 客户端

```typescript
// api/client.ts
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { message } from 'ant-design-vue'

class ApiClient {
  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.setupInterceptors()
  }

  private setupInterceptors() {
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token')
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        return response.data
      },
      (error) => {
        const { response } = error

        if (response?.status === 401) {
          localStorage.removeItem('token')
          window.location.href = '/login'
          return
        }

        const errorMessage = response?.data?.message || '请求失败'
        message.error(errorMessage)

        return Promise.reject(error)
      }
    )
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.instance.get(url, config)
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.instance.post(url, data, config)
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.instance.put(url, data, config)
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.instance.delete(url, config)
  }
}

export const apiClient = new ApiClient()
```

### API 服务

```typescript
// api/users.ts
import { apiClient } from './client'
import type { User, CreateUserDto, UpdateUserDto, FindUsersDto } from '@/types'

export class UsersApi {
  static async getUsers(params: FindUsersDto): Promise<PaginatedResponse<User>> {
    return apiClient.get('/users', { params })
  }

  static async getUser(id: number): Promise<ApiResponse<User>> {
    return apiClient.get(`/users/${id}`)
  }

  static async createUser(data: CreateUserDto): Promise<ApiResponse<User>> {
    return apiClient.post('/users', data)
  }

  static async updateUser(id: number, data: UpdateUserDto): Promise<ApiResponse<User>> {
    return apiClient.put(`/users/${id}`, data)
  }

  static async deleteUser(id: number): Promise<void> {
    return apiClient.delete(`/users/${id}`)
  }
}
```

## API 最佳实践

### 1. 接口设计

- 遵循 RESTful 设计原则
- 使用统一的响应格式
- 提供清晰的错误信息
- 支持分页和排序

### 2. 数据验证

- 使用 DTO 进行数据验证
- 提供详细的验证错误信息
- 对敏感数据进行过滤

### 3. 性能优化

- 使用数据库索引
- 实现查询缓存
- 支持字段选择
- 避免 N+1 查询问题

### 4. 安全考虑

- 实现认证和授权
- 防止 SQL 注入
- 限制请求频率
- 验证输入数据

## 相关资源

- [NestJS 官方文档](https://nestjs.com/)
- [Prisma 文档](https://www.prisma.io/docs/)
- [Swagger 文档](https://swagger.io/docs/)
- [请求模块](/guide/modules/request)