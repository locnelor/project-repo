# API 文档概览

本文档介绍 Qiyun 项目的 API 接口规范、认证方式、数据格式等内容，帮助前端开发者快速集成后端服务。

## 🌐 API 基础信息

### 服务地址

| 环境 | 地址 | 说明 |
|------|------|------|
| 开发环境 | `http://localhost:3000` | 本地开发服务器 |
| 测试环境 | `https://api-test.qiyun.com` | 测试环境 API |
| 生产环境 | `https://api.qiyun.com` | 生产环境 API |

### API 版本

当前 API 版本：`v1`

所有 API 接口都以 `/api/v1` 为前缀。

---

## 🔐 认证方式

### JWT Token 认证

API 使用 JWT (JSON Web Token) 进行身份认证。

#### 获取 Token

```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "password123"
}
```

**响应示例：**

```json
{
  "code": 200,
  "message": "登录成功",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 3600,
    "user": {
      "id": "user_123",
      "username": "admin",
      "email": "admin@example.com",
      "roles": ["admin"]
    }
  },
  "timestamp": 1703123456789
}
```

#### 使用 Token

在请求头中添加 Authorization 字段：

```http
GET /api/v1/users
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### Token 刷新

```http
POST /api/v1/auth/refresh
Content-Type: application/json

{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## 📋 数据格式规范

### 统一响应格式

所有 API 响应都遵循统一的数据格式：

```typescript
interface ApiResponse<T = any> {
  code: number        // 状态码
  message: string     // 响应消息
  data: T            // 响应数据
  timestamp: number   // 时间戳
}
```

### 状态码说明

| 状态码 | 说明 | 示例场景 |
|--------|------|----------|
| 200 | 成功 | 请求处理成功 |
| 201 | 创建成功 | 资源创建成功 |
| 400 | 请求错误 | 参数验证失败 |
| 401 | 未认证 | Token 无效或过期 |
| 403 | 无权限 | 权限不足 |
| 404 | 资源不存在 | 用户不存在 |
| 409 | 资源冲突 | 用户名已存在 |
| 500 | 服务器错误 | 内部服务器错误 |

### 分页数据格式

```typescript
interface PaginatedResponse<T> {
  code: 200
  message: string
  data: {
    items: T[]          // 数据列表
    total: number       // 总数量
    page: number        // 当前页码
    pageSize: number    // 每页大小
    totalPages: number  // 总页数
  }
  timestamp: number
}
```

### 错误响应格式

```json
{
  "code": 400,
  "message": "请求参数错误",
  "data": {
    "errors": [
      {
        "field": "email",
        "message": "邮箱格式不正确"
      },
      {
        "field": "password",
        "message": "密码长度至少6位"
      }
    ]
  },
  "timestamp": 1703123456789
}
```

---

## 👤 用户管理 API

### 用户数据模型

```typescript
interface User {
  id: string
  username: string
  email: string
  avatar?: string
  roles: Role[]
  status: 'active' | 'inactive' | 'banned'
  createdAt: string
  updatedAt: string
}

interface Role {
  id: string
  name: string
  description?: string
  permissions: Permission[]
}

interface Permission {
  id: string
  name: string
  resource: string
  action: string
}
```

### 用户列表

```http
GET /api/v1/users?page=1&pageSize=10&search=admin&status=active
Authorization: Bearer <token>
```

**查询参数：**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| page | number | 否 | 页码，默认 1 |
| pageSize | number | 否 | 每页大小，默认 10 |
| search | string | 否 | 搜索关键词 |
| status | string | 否 | 用户状态筛选 |

**响应示例：**

```json
{
  "code": 200,
  "message": "获取用户列表成功",
  "data": {
    "items": [
      {
        "id": "user_123",
        "username": "admin",
        "email": "admin@example.com",
        "avatar": "https://example.com/avatar.jpg",
        "roles": [
          {
            "id": "role_1",
            "name": "管理员",
            "description": "系统管理员"
          }
        ],
        "status": "active",
        "createdAt": "2023-12-01T10:00:00Z",
        "updatedAt": "2023-12-01T10:00:00Z"
      }
    ],
    "total": 100,
    "page": 1,
    "pageSize": 10,
    "totalPages": 10
  },
  "timestamp": 1703123456789
}
```

### 获取用户详情

```http
GET /api/v1/users/:id
Authorization: Bearer <token>
```

### 创建用户

```http
POST /api/v1/users
Authorization: Bearer <token>
Content-Type: application/json

{
  "username": "newuser",
  "email": "newuser@example.com",
  "password": "password123",
  "roleIds": ["role_1", "role_2"]
}
```

### 更新用户

```http
PUT /api/v1/users/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "username": "updateduser",
  "email": "updated@example.com",
  "roleIds": ["role_1"]
}
```

### 删除用户

```http
DELETE /api/v1/users/:id
Authorization: Bearer <token>
```

---

## 🔑 角色权限 API

### 角色列表

```http
GET /api/v1/roles
Authorization: Bearer <token>
```

### 权限列表

```http
GET /api/v1/permissions
Authorization: Bearer <token>
```

### 用户权限检查

```http
POST /api/v1/auth/check-permission
Authorization: Bearer <token>
Content-Type: application/json

{
  "resource": "user",
  "action": "read"
}
```

**响应示例：**

```json
{
  "code": 200,
  "message": "权限检查成功",
  "data": {
    "hasPermission": true
  },
  "timestamp": 1703123456789
}
```

---

## 📁 文件上传 API

### 单文件上传

```http
POST /api/v1/upload/single
Authorization: Bearer <token>
Content-Type: multipart/form-data

file: <binary-data>
```

**响应示例：**

```json
{
  "code": 200,
  "message": "文件上传成功",
  "data": {
    "id": "file_123",
    "filename": "document.pdf",
    "originalName": "原始文件名.pdf",
    "mimeType": "application/pdf",
    "size": 1024000,
    "url": "https://cdn.example.com/files/document.pdf",
    "uploadedAt": "2023-12-01T10:00:00Z"
  },
  "timestamp": 1703123456789
}
```

### 多文件上传

```http
POST /api/v1/upload/multiple
Authorization: Bearer <token>
Content-Type: multipart/form-data

files: <binary-data>
files: <binary-data>
```

### 文件删除

```http
DELETE /api/v1/upload/:fileId
Authorization: Bearer <token>
```

---

## 📊 数据统计 API

### 仪表板数据

```http
GET /api/v1/dashboard/stats
Authorization: Bearer <token>
```

**响应示例：**

```json
{
  "code": 200,
  "message": "获取统计数据成功",
  "data": {
    "userCount": 1250,
    "activeUsers": 890,
    "todayVisits": 3456,
    "revenue": 125000.50,
    "growthRate": {
      "users": 12.5,
      "visits": 8.3,
      "revenue": 15.2
    },
    "chartData": {
      "visits": [
        { "date": "2023-12-01", "count": 1200 },
        { "date": "2023-12-02", "count": 1350 }
      ],
      "revenue": [
        { "month": "2023-11", "amount": 108000 },
        { "month": "2023-12", "amount": 125000 }
      ]
    }
  },
  "timestamp": 1703123456789
}
```

---

## 🔍 搜索 API

### 全局搜索

```http
GET /api/v1/search?q=关键词&type=user&page=1&pageSize=10
Authorization: Bearer <token>
```

**查询参数：**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| q | string | 是 | 搜索关键词 |
| type | string | 否 | 搜索类型 (user, role, permission) |
| page | number | 否 | 页码 |
| pageSize | number | 否 | 每页大小 |

---

## 🚀 前端集成示例

### Axios 配置

```typescript
// api/client.ts
import axios from 'axios'
import { useUserStore } from '@repo/stores'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1',
  timeout: 10000,
})

// 请求拦截器
apiClient.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    const token = userStore.token
    
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
apiClient.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token 过期，跳转到登录页
      const userStore = useUserStore()
      userStore.logout()
      window.location.href = '/login'
    }
    
    return Promise.reject(error)
  }
)

export default apiClient
```

### API 服务封装

```typescript
// api/user.ts
import type { User, ApiResponse, PaginatedResponse } from '@repo/types'
import apiClient from './client'

export interface GetUsersParams {
  page?: number
  pageSize?: number
  search?: string
  status?: string
}

export interface CreateUserDto {
  username: string
  email: string
  password: string
  roleIds: string[]
}

export const userApi = {
  // 获取用户列表
  getUsers(params: GetUsersParams): Promise<PaginatedResponse<User>> {
    return apiClient.get('/users', { params })
  },

  // 获取用户详情
  getUserById(id: string): Promise<ApiResponse<User>> {
    return apiClient.get(`/users/${id}`)
  },

  // 创建用户
  createUser(data: CreateUserDto): Promise<ApiResponse<User>> {
    return apiClient.post('/users', data)
  },

  // 更新用户
  updateUser(id: string, data: Partial<CreateUserDto>): Promise<ApiResponse<User>> {
    return apiClient.put(`/users/${id}`, data)
  },

  // 删除用户
  deleteUser(id: string): Promise<ApiResponse<null>> {
    return apiClient.delete(`/users/${id}`)
  }
}
```

### 在组件中使用

```vue
<template>
  <div>
    <QTable 
      :columns="columns"
      :data="users"
      :loading="loading"
      :pagination="pagination"
      @change="handleTableChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { userApi } from '@/api/user'
import type { User } from '@repo/types'

const users = ref<User[]>([])
const loading = ref(false)
const pagination = ref({
  page: 1,
  pageSize: 10,
  total: 0
})

const fetchUsers = async () => {
  loading.value = true
  try {
    const response = await userApi.getUsers({
      page: pagination.value.page,
      pageSize: pagination.value.pageSize
    })
    
    users.value = response.data.items
    pagination.value.total = response.data.total
  } catch (error) {
    console.error('获取用户列表失败:', error)
  } finally {
    loading.value = false
  }
}

const handleTableChange = (newPagination: any) => {
  pagination.value = { ...pagination.value, ...newPagination }
  fetchUsers()
}

onMounted(() => {
  fetchUsers()
})
</script>
```

---

## 🔧 开发工具

### API 测试

推荐使用以下工具进行 API 测试：

1. **Postman**: 功能强大的 API 测试工具
2. **Insomnia**: 轻量级的 API 客户端
3. **VS Code REST Client**: VS Code 插件

### Postman 集合

项目提供了 Postman 集合文件，包含所有 API 接口的示例请求：

```bash
# 导入 Postman 集合
docs/api/postman/qiyun-api.postman_collection.json
```

### 环境变量

```json
{
  "development": {
    "baseUrl": "http://localhost:3000/api/v1",
    "token": "{{authToken}}"
  },
  "production": {
    "baseUrl": "https://api.qiyun.com/api/v1",
    "token": "{{authToken}}"
  }
}
```

---

## 📚 相关文档

- [认证授权详解](./auth.md)
- [错误处理指南](./error-handling.md)
- [API 版本管理](./versioning.md)
- [性能优化建议](./performance.md)

---

## 🔗 外部链接

- [NestJS 官方文档](https://nestjs.com/)
- [Prisma 数据库文档](https://www.prisma.io/docs/)
- [JWT 官方网站](https://jwt.io/)
- [RESTful API 设计指南](https://restfulapi.net/)