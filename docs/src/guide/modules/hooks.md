# 钩子

## 概述

Qiyun-Repo 项目通过 `packages/hooks` 包提供了一套完整的 Vue 3 组合式函数（Composables），封装了常用的业务逻辑和状态管理，提高开发效率和代码复用性。

## 钩子库架构

### 技术栈

- **框架**: Vue 3 Composition API
- **状态管理**: Pinia
- **HTTP 客户端**: Axios
- **工具库**: Lodash-es
- **类型支持**: TypeScript
- **测试框架**: Vitest

### 项目结构

```
packages/hooks/
├── src/                    # 源代码
│   ├── api/               # API 相关钩子
│   │   ├── useRequest.ts  # 请求钩子
│   │   ├── useApi.ts      # API 封装钩子
│   │   ├── useUserApi.ts  # 用户 API 钩子
│   │   ├── useFileApi.ts  # 文件 API 钩子
│   │   └── index.ts       # API 钩子导出
│   ├── auth/              # 认证相关钩子
│   │   ├── useAuth.ts     # 认证钩子
│   │   ├── usePermission.ts # 权限钩子
│   │   ├── useRole.ts     # 角色钩子
│   │   └── index.ts       # 认证钩子导出
│   ├── ui/                # UI 相关钩子
│   │   ├── useTheme.ts    # 主题钩子
│   │   ├── useModal.ts    # 模态框钩子
│   │   ├── useNotification.ts # 通知钩子
│   │   ├── useLoading.ts  # 加载状态钩子
│   │   ├── useTable.ts    # 表格钩子
│   │   ├── useForm.ts     # 表单钩子
│   │   └── index.ts       # UI 钩子导出
│   ├── storage/           # 存储相关钩子
│   │   ├── useLocalStorage.ts # 本地存储钩子
│   │   ├── useSessionStorage.ts # 会话存储钩子
│   │   ├── useIndexedDB.ts # IndexedDB 钩子
│   │   └── index.ts       # 存储钩子导出
│   ├── utils/             # 工具类钩子
│   │   ├── useDebounce.ts # 防抖钩子
│   │   ├── useThrottle.ts # 节流钩子
│   │   ├── useClipboard.ts # 剪贴板钩子
│   │   ├── useEventListener.ts # 事件监听钩子
│   │   ├── useResizeObserver.ts # 尺寸监听钩子
│   │   ├── useIntersectionObserver.ts # 交叉观察钩子
│   │   ├── useWebSocket.ts # WebSocket 钩子
│   │   └── index.ts       # 工具钩子导出
│   ├── business/          # 业务相关钩子
│   │   ├── useUpload.ts   # 文件上传钩子
│   │   ├── useExport.ts   # 数据导出钩子
│   │   ├── useImport.ts   # 数据导入钩子
│   │   ├── useSearch.ts   # 搜索钩子
│   │   ├── usePagination.ts # 分页钩子
│   │   └── index.ts       # 业务钩子导出
│   ├── types/             # 类型定义
│   │   ├── api.ts         # API 类型
│   │   ├── auth.ts        # 认证类型
│   │   ├── ui.ts          # UI 类型
│   │   └── index.ts       # 类型导出
│   └── index.ts           # 钩子库入口
├── __tests__/             # 测试文件
├── dist/                  # 构建输出
├── package.json           # 包配置
├── vite.config.ts         # Vite 配置
├── tsconfig.json          # TypeScript 配置
└── README.md              # 使用说明
```

## API 相关钩子

### 请求钩子 (useRequest)

```typescript
// packages/hooks/src/api/useRequest.ts

import { ref, reactive, computed } from 'vue'
import type { Ref } from 'vue'

export interface UseRequestOptions<T = any> {
  immediate?: boolean
  initialData?: T
  onSuccess?: (data: T) => void
  onError?: (error: Error) => void
  onFinally?: () => void
  retry?: number
  retryDelay?: number
  timeout?: number
}

export interface UseRequestReturn<T = any> {
  data: Ref<T | undefined>
  loading: Ref<boolean>
  error: Ref<Error | null>
  execute: (...args: any[]) => Promise<T>
  refresh: () => Promise<T>
  cancel: () => void
  retry: () => Promise<T>
}

export function useRequest<T = any>(
  requestFn: (...args: any[]) => Promise<T>,
  options: UseRequestOptions<T> = {}
): UseRequestReturn<T> {
  const {
    immediate = false,
    initialData,
    onSuccess,
    onError,
    onFinally,
    retry: maxRetry = 0,
    retryDelay = 1000,
    timeout = 30000,
  } = options

  const data = ref<T | undefined>(initialData)
  const loading = ref(false)
  const error = ref<Error | null>(null)
  
  let currentRequest: Promise<T> | null = null
  let retryCount = 0
  let lastArgs: any[] = []

  const execute = async (...args: any[]): Promise<T> => {
    lastArgs = args
    loading.value = true
    error.value = null
    retryCount = 0

    const executeRequest = async (): Promise<T> => {
      try {
        const timeoutPromise = new Promise<never>((_, reject) => {
          setTimeout(() => reject(new Error('Request timeout')), timeout)
        })

        const result = await Promise.race([
          requestFn(...args),
          timeoutPromise,
        ])

        data.value = result
        onSuccess?.(result)
        return result
      } catch (err) {
        const errorObj = err instanceof Error ? err : new Error(String(err))
        
        if (retryCount < maxRetry) {
          retryCount++
          await new Promise(resolve => setTimeout(resolve, retryDelay))
          return executeRequest()
        }
        
        error.value = errorObj
        onError?.(errorObj)
        throw errorObj
      } finally {
        loading.value = false
        onFinally?.()
      }
    }

    currentRequest = executeRequest()
    return currentRequest
  }

  const refresh = () => execute(...lastArgs)

  const cancel = () => {
    if (currentRequest) {
      loading.value = false
      currentRequest = null
    }
  }

  const retryRequest = () => {
    if (error.value) {
      return execute(...lastArgs)
    }
    return Promise.reject(new Error('No failed request to retry'))
  }

  if (immediate) {
    execute()
  }

  return {
    data,
    loading,
    error,
    execute,
    refresh,
    cancel,
    retry: retryRequest,
  }
}
```

### API 封装钩子 (useApi)

```typescript
// packages/hooks/src/api/useApi.ts

import { useRequest } from './useRequest'
import { apiClient } from '@qiyun/utils'
import type { AxiosRequestConfig } from 'axios'

export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
  success: boolean
}

export interface UseApiOptions extends AxiosRequestConfig {
  immediate?: boolean
  onSuccess?: (data: any) => void
  onError?: (error: Error) => void
}

export function useApi<T = any>(
  url: string,
  options: UseApiOptions = {}
) {
  const { immediate = false, onSuccess, onError, ...axiosConfig } = options

  const requestFn = async (params?: any): Promise<T> => {
    const config: AxiosRequestConfig = {
      url,
      ...axiosConfig,
    }

    if (axiosConfig.method?.toLowerCase() === 'get') {
      config.params = params
    } else {
      config.data = params
    }

    const response = await apiClient.request<ApiResponse<T>>(config)
    
    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    
    return response.data.data
  }

  return useRequest(requestFn, {
    immediate,
    onSuccess,
    onError,
  })
}

export function useGet<T = any>(url: string, options: UseApiOptions = {}) {
  return useApi<T>(url, { ...options, method: 'GET' })
}

export function usePost<T = any>(url: string, options: UseApiOptions = {}) {
  return useApi<T>(url, { ...options, method: 'POST' })
}

export function usePut<T = any>(url: string, options: UseApiOptions = {}) {
  return useApi<T>(url, { ...options, method: 'PUT' })
}

export function useDelete<T = any>(url: string, options: UseApiOptions = {}) {
  return useApi<T>(url, { ...options, method: 'DELETE' })
}
```

### 用户 API 钩子 (useUserApi)

```typescript
// packages/hooks/src/api/useUserApi.ts

import { useGet, usePost, usePut, useDelete } from './useApi'
import type { User, CreateUserDto, UpdateUserDto, UserQuery } from '@qiyun/types'

export function useUserApi() {
  // 获取用户列表
  const {
    data: users,
    loading: usersLoading,
    execute: fetchUsers,
  } = useGet<{ list: User[]; total: number }>('/api/users')

  // 获取用户详情
  const {
    data: userDetail,
    loading: userDetailLoading,
    execute: fetchUserDetail,
  } = useGet<User>('/api/users/:id')

  // 创建用户
  const {
    loading: createLoading,
    execute: createUser,
  } = usePost<User>('/api/users')

  // 更新用户
  const {
    loading: updateLoading,
    execute: updateUser,
  } = usePut<User>('/api/users/:id')

  // 删除用户
  const {
    loading: deleteLoading,
    execute: deleteUser,
  } = useDelete<void>('/api/users/:id')

  // 搜索用户
  const {
    data: searchResults,
    loading: searchLoading,
    execute: searchUsers,
  } = useGet<User[]>('/api/users/search')

  // 获取用户权限
  const {
    data: userPermissions,
    loading: permissionsLoading,
    execute: fetchUserPermissions,
  } = useGet<string[]>('/api/users/:id/permissions')

  // 分配角色
  const {
    loading: assignRoleLoading,
    execute: assignRole,
  } = usePost<void>('/api/users/:id/roles')

  // 封装方法
  const getUserList = (query?: UserQuery) => {
    return fetchUsers(query)
  }

  const getUserById = (id: string) => {
    return fetchUserDetail({ id })
  }

  const createNewUser = (userData: CreateUserDto) => {
    return createUser(userData)
  }

  const updateUserById = (id: string, userData: UpdateUserDto) => {
    return updateUser({ id }, userData)
  }

  const deleteUserById = (id: string) => {
    return deleteUser({ id })
  }

  const searchUsersByKeyword = (keyword: string) => {
    return searchUsers({ keyword })
  }

  const getUserPermissionsById = (id: string) => {
    return fetchUserPermissions({ id })
  }

  const assignRoleToUser = (userId: string, roleIds: string[]) => {
    return assignRole({ id: userId }, { roleIds })
  }

  return {
    // 数据
    users,
    userDetail,
    searchResults,
    userPermissions,
    
    // 加载状态
    usersLoading,
    userDetailLoading,
    createLoading,
    updateLoading,
    deleteLoading,
    searchLoading,
    permissionsLoading,
    assignRoleLoading,
    
    // 方法
    getUserList,
    getUserById,
    createNewUser,
    updateUserById,
    deleteUserById,
    searchUsersByKeyword,
    getUserPermissionsById,
    assignRoleToUser,
  }
}
```

## 认证相关钩子

### 认证钩子 (useAuth)

```typescript
// packages/hooks/src/auth/useAuth.ts

import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@qiyun/stores'
import { useLocalStorage } from '../storage'
import type { User, LoginDto, RegisterDto } from '@qiyun/types'

export function useAuth() {
  const router = useRouter()
  const authStore = useAuthStore()
  
  const { value: token, setValue: setToken, removeValue: removeToken } = useLocalStorage('auth_token', '')
  
  const loading = ref(false)
  const error = ref<string | null>(null)

  // 计算属性
  const isAuthenticated = computed(() => !!token.value && !!authStore.user)
  const user = computed(() => authStore.user)
  const permissions = computed(() => authStore.permissions)
  const roles = computed(() => authStore.roles)

  // 登录
  const login = async (credentials: LoginDto) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await authStore.login(credentials)
      setToken(response.token)
      
      // 获取用户信息
      await fetchUserInfo()
      
      return response
    } catch (err) {
      error.value = err instanceof Error ? err.message : '登录失败'
      throw err
    } finally {
      loading.value = false
    }
  }

  // 注册
  const register = async (userData: RegisterDto) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await authStore.register(userData)
      return response
    } catch (err) {
      error.value = err instanceof Error ? err.message : '注册失败'
      throw err
    } finally {
      loading.value = false
    }
  }

  // 登出
  const logout = async () => {
    loading.value = true
    
    try {
      await authStore.logout()
    } catch (err) {
      console.error('登出失败:', err)
    } finally {
      removeToken()
      authStore.clearUser()
      loading.value = false
      
      // 跳转到登录页
      router.push('/login')
    }
  }

  // 获取用户信息
  const fetchUserInfo = async () => {
    if (!token.value) return
    
    try {
      await authStore.fetchUserInfo()
    } catch (err) {
      console.error('获取用户信息失败:', err)
      // 如果获取用户信息失败，可能是 token 过期
      logout()
    }
  }

  // 刷新 token
  const refreshToken = async () => {
    try {
      const response = await authStore.refreshToken()
      setToken(response.token)
      return response
    } catch (err) {
      // 刷新失败，重新登录
      logout()
      throw err
    }
  }

  // 检查权限
  const hasPermission = (permission: string | string[]) => {
    if (!permissions.value) return false
    
    if (Array.isArray(permission)) {
      return permission.some(p => permissions.value.includes(p))
    }
    
    return permissions.value.includes(permission)
  }

  // 检查角色
  const hasRole = (role: string | string[]) => {
    if (!roles.value) return false
    
    if (Array.isArray(role)) {
      return role.some(r => roles.value.includes(r))
    }
    
    return roles.value.includes(role)
  }

  // 更新用户信息
  const updateProfile = async (profileData: Partial<User>) => {
    loading.value = true
    error.value = null
    
    try {
      const updatedUser = await authStore.updateProfile(profileData)
      return updatedUser
    } catch (err) {
      error.value = err instanceof Error ? err.message : '更新失败'
      throw err
    } finally {
      loading.value = false
    }
  }

  // 修改密码
  const changePassword = async (oldPassword: string, newPassword: string) => {
    loading.value = true
    error.value = null
    
    try {
      await authStore.changePassword(oldPassword, newPassword)
    } catch (err) {
      error.value = err instanceof Error ? err.message : '修改密码失败'
      throw err
    } finally {
      loading.value = false
    }
  }

  // 监听 token 变化
  watch(
    token,
    (newToken) => {
      if (newToken) {
        fetchUserInfo()
      } else {
        authStore.clearUser()
      }
    },
    { immediate: true }
  )

  return {
    // 状态
    loading,
    error,
    isAuthenticated,
    user,
    permissions,
    roles,
    
    // 方法
    login,
    register,
    logout,
    fetchUserInfo,
    refreshToken,
    hasPermission,
    hasRole,
    updateProfile,
    changePassword,
  }
}
```

### 权限钩子 (usePermission)

```typescript
// packages/hooks/src/auth/usePermission.ts

import { computed } from 'vue'
import { useAuth } from './useAuth'
import type { RouteLocationNormalized } from 'vue-router'

export interface PermissionConfig {
  permissions?: string[]
  roles?: string[]
  requireAll?: boolean // 是否需要满足所有权限/角色
}

export function usePermission() {
  const { permissions, roles, hasPermission, hasRole } = useAuth()

  // 检查是否有访问权限
  const checkAccess = (config: PermissionConfig): boolean => {
    const { permissions: requiredPermissions, roles: requiredRoles, requireAll = false } = config

    // 如果没有配置权限要求，默认允许访问
    if (!requiredPermissions?.length && !requiredRoles?.length) {
      return true
    }

    let hasRequiredPermissions = true
    let hasRequiredRoles = true

    // 检查权限
    if (requiredPermissions?.length) {
      if (requireAll) {
        hasRequiredPermissions = requiredPermissions.every(permission => hasPermission(permission))
      } else {
        hasRequiredPermissions = requiredPermissions.some(permission => hasPermission(permission))
      }
    }

    // 检查角色
    if (requiredRoles?.length) {
      if (requireAll) {
        hasRequiredRoles = requiredRoles.every(role => hasRole(role))
      } else {
        hasRequiredRoles = requiredRoles.some(role => hasRole(role))
      }
    }

    // 如果同时配置了权限和角色，需要都满足
    if (requiredPermissions?.length && requiredRoles?.length) {
      return hasRequiredPermissions && hasRequiredRoles
    }

    // 只配置了权限或角色
    return hasRequiredPermissions && hasRequiredRoles
  }

  // 检查路由权限
  const checkRouteAccess = (route: RouteLocationNormalized): boolean => {
    const routePermissions = route.meta?.permissions as string[] | undefined
    const routeRoles = route.meta?.roles as string[] | undefined
    const requireAll = route.meta?.requireAll as boolean | undefined

    return checkAccess({
      permissions: routePermissions,
      roles: routeRoles,
      requireAll,
    })
  }

  // 过滤有权限的菜单项
  const filterMenus = <T extends { permissions?: string[]; roles?: string[]; children?: T[] }>(
    menus: T[]
  ): T[] => {
    return menus
      .filter(menu => {
        return checkAccess({
          permissions: menu.permissions,
          roles: menu.roles,
        })
      })
      .map(menu => ({
        ...menu,
        children: menu.children ? filterMenus(menu.children) : undefined,
      }))
  }

  // 获取可访问的路由
  const getAccessibleRoutes = (routes: any[]): any[] => {
    return routes.filter(route => {
      if (route.meta?.public) return true
      return checkRouteAccess(route)
    })
  }

  return {
    permissions,
    roles,
    checkAccess,
    checkRouteAccess,
    filterMenus,
    getAccessibleRoutes,
    hasPermission,
    hasRole,
  }
}
```

## UI 相关钩子

### 表格钩子 (useTable)

```typescript
// packages/hooks/src/ui/useTable.ts

import { ref, reactive, computed, watch } from 'vue'
import { useRequest } from '../api/useRequest'
import type { Ref } from 'vue'

export interface TableColumn {
  key: string
  title: string
  dataIndex?: string
  width?: number | string
  fixed?: 'left' | 'right'
  sorter?: boolean | ((a: any, b: any) => number)
  filters?: Array<{ text: string; value: any }>
  render?: (value: any, record: any, index: number) => any
}

export interface TablePagination {
  current: number
  pageSize: number
  total: number
  showSizeChanger?: boolean
  showQuickJumper?: boolean
  pageSizeOptions?: string[]
}

export interface TableParams {
  pagination?: Partial<TablePagination>
  sorter?: {
    field?: string
    order?: 'ascend' | 'descend'
  }
  filters?: Record<string, any>
}

export interface UseTableOptions<T = any> {
  immediate?: boolean
  defaultPageSize?: number
  columns?: TableColumn[]
  rowKey?: string | ((record: T) => string)
}

export function useTable<T = any>(
  fetchFn: (params: any) => Promise<{ list: T[]; total: number }>,
  options: UseTableOptions<T> = {}
) {
  const {
    immediate = true,
    defaultPageSize = 20,
    columns = [],
    rowKey = 'id',
  } = options

  // 表格数据
  const dataSource = ref<T[]>([])
  const loading = ref(false)
  
  // 分页配置
  const pagination = reactive<TablePagination>({
    current: 1,
    pageSize: defaultPageSize,
    total: 0,
    showSizeChanger: true,
    showQuickJumper: true,
    pageSizeOptions: ['10', '20', '50', '100'],
  })

  // 排序和筛选
  const sorter = ref<{ field?: string; order?: 'ascend' | 'descend' }>({})
  const filters = ref<Record<string, any>>({})

  // 选中行
  const selectedRowKeys = ref<string[]>([])
  const selectedRows = ref<T[]>([])

  // 计算属性
  const hasSelected = computed(() => selectedRowKeys.value.length > 0)
  const selectedCount = computed(() => selectedRowKeys.value.length)

  // 请求钩子
  const { execute: fetchData, error } = useRequest(
    async () => {
      const params = {
        page: pagination.current,
        pageSize: pagination.pageSize,
        ...sorter.value,
        ...filters.value,
      }
      
      const result = await fetchFn(params)
      
      dataSource.value = result.list
      pagination.total = result.total
      
      return result
    },
    {
      immediate,
      onSuccess: () => {
        // 清空选中状态
        selectedRowKeys.value = []
        selectedRows.value = []
      },
    }
  )

  // 表格变化处理
  const handleTableChange = (
    paginationParams: TablePagination,
    filtersParams: Record<string, any>,
    sorterParams: any
  ) => {
    // 更新分页
    pagination.current = paginationParams.current
    pagination.pageSize = paginationParams.pageSize

    // 更新排序
    if (sorterParams.field) {
      sorter.value = {
        field: sorterParams.field,
        order: sorterParams.order,
      }
    } else {
      sorter.value = {}
    }

    // 更新筛选
    filters.value = filtersParams

    // 重新获取数据
    fetchData()
  }

  // 刷新数据
  const refresh = () => {
    fetchData()
  }

  // 重置表格
  const reset = () => {
    pagination.current = 1
    pagination.pageSize = defaultPageSize
    sorter.value = {}
    filters.value = {}
    selectedRowKeys.value = []
    selectedRows.value = []
    fetchData()
  }

  // 选中行变化
  const handleSelectionChange = (keys: string[], rows: T[]) => {
    selectedRowKeys.value = keys
    selectedRows.value = rows
  }

  // 行选择配置
  const rowSelection = computed(() => ({
    selectedRowKeys: selectedRowKeys.value,
    onChange: handleSelectionChange,
    onSelect: (record: T, selected: boolean, selectedRows: T[]) => {
      // 单行选择回调
    },
    onSelectAll: (selected: boolean, selectedRows: T[], changeRows: T[]) => {
      // 全选回调
    },
  }))

  // 设置筛选条件
  const setFilters = (newFilters: Record<string, any>) => {
    filters.value = { ...filters.value, ...newFilters }
    pagination.current = 1 // 重置到第一页
    fetchData()
  }

  // 设置排序
  const setSorter = (field: string, order: 'ascend' | 'descend' | null) => {
    if (order) {
      sorter.value = { field, order }
    } else {
      sorter.value = {}
    }
    fetchData()
  }

  // 监听加载状态
  watch(
    () => loading.value,
    (newLoading) => {
      loading.value = newLoading
    }
  )

  return {
    // 数据
    dataSource,
    loading,
    pagination,
    sorter,
    filters,
    error,
    
    // 选中状态
    selectedRowKeys,
    selectedRows,
    hasSelected,
    selectedCount,
    rowSelection,
    
    // 方法
    fetchData,
    refresh,
    reset,
    handleTableChange,
    handleSelectionChange,
    setFilters,
    setSorter,
  }
}
```

### 表单钩子 (useForm)

```typescript
// packages/hooks/src/ui/useForm.ts

import { ref, reactive, computed, watch } from 'vue'
import { cloneDeep, isEqual } from 'lodash-es'
import type { Ref } from 'vue'

export interface FormRule {
  required?: boolean
  message?: string
  pattern?: RegExp
  min?: number
  max?: number
  validator?: (value: any, formData: any) => boolean | string
}

export interface FormField {
  name: string
  label: string
  type?: 'input' | 'select' | 'textarea' | 'number' | 'date' | 'checkbox' | 'radio'
  rules?: FormRule[]
  options?: Array<{ label: string; value: any }>
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
}

export interface UseFormOptions<T = any> {
  initialValues?: Partial<T>
  fields?: FormField[]
  validateOnChange?: boolean
  resetOnSubmit?: boolean
}

export function useForm<T extends Record<string, any> = any>(
  options: UseFormOptions<T> = {}
) {
  const {
    initialValues = {} as Partial<T>,
    fields = [],
    validateOnChange = true,
    resetOnSubmit = false,
  } = options

  // 表单数据
  const formData = reactive<T>({ ...initialValues } as T)
  const originalData = ref<T>(cloneDeep(formData))
  
  // 验证状态
  const errors = reactive<Record<string, string>>({})
  const touched = reactive<Record<string, boolean>>({})
  const validating = ref(false)

  // 计算属性
  const isValid = computed(() => Object.keys(errors).length === 0)
  const isDirty = computed(() => !isEqual(formData, originalData.value))
  const hasErrors = computed(() => Object.keys(errors).length > 0)

  // 验证单个字段
  const validateField = (fieldName: string): boolean => {
    const field = fields.find(f => f.name === fieldName)
    if (!field || !field.rules) return true

    const value = formData[fieldName]
    let error = ''

    for (const rule of field.rules) {
      // 必填验证
      if (rule.required && (value === undefined || value === null || value === '')) {
        error = rule.message || `${field.label}不能为空`
        break
      }

      // 跳过空值的其他验证
      if (value === undefined || value === null || value === '') {
        continue
      }

      // 正则验证
      if (rule.pattern && !rule.pattern.test(String(value))) {
        error = rule.message || `${field.label}格式不正确`
        break
      }

      // 长度验证
      if (rule.min !== undefined && String(value).length < rule.min) {
        error = rule.message || `${field.label}长度不能少于${rule.min}个字符`
        break
      }

      if (rule.max !== undefined && String(value).length > rule.max) {
        error = rule.message || `${field.label}长度不能超过${rule.max}个字符`
        break
      }

      // 自定义验证
      if (rule.validator) {
        const result = rule.validator(value, formData)
        if (result !== true) {
          error = typeof result === 'string' ? result : (rule.message || `${field.label}验证失败`)
          break
        }
      }
    }

    if (error) {
      errors[fieldName] = error
      return false
    } else {
      delete errors[fieldName]
      return true
    }
  }

  // 验证所有字段
  const validate = async (): Promise<boolean> => {
    validating.value = true
    
    try {
      let isFormValid = true
      
      for (const field of fields) {
        const isFieldValid = validateField(field.name)
        if (!isFieldValid) {
          isFormValid = false
        }
        touched[field.name] = true
      }
      
      return isFormValid
    } finally {
      validating.value = false
    }
  }

  // 清除验证错误
  const clearValidation = (fieldName?: string) => {
    if (fieldName) {
      delete errors[fieldName]
      touched[fieldName] = false
    } else {
      Object.keys(errors).forEach(key => delete errors[key])
      Object.keys(touched).forEach(key => touched[key] = false)
    }
  }

  // 重置表单
  const resetForm = () => {
    Object.assign(formData, cloneDeep(originalData.value))
    clearValidation()
  }

  // 设置字段值
  const setFieldValue = (fieldName: string, value: any) => {
    formData[fieldName] = value
    touched[fieldName] = true
    
    if (validateOnChange) {
      validateField(fieldName)
    }
  }

  // 设置多个字段值
  const setFieldsValue = (values: Partial<T>) => {
    Object.assign(formData, values)
    
    if (validateOnChange) {
      Object.keys(values).forEach(fieldName => {
        validateField(fieldName)
        touched[fieldName] = true
      })
    }
  }

  // 获取字段值
  const getFieldValue = (fieldName: string) => {
    return formData[fieldName]
  }

  // 获取所有字段值
  const getFieldsValue = () => {
    return { ...formData }
  }

  // 提交表单
  const submit = async (onSubmit?: (values: T) => Promise<void> | void) => {
    const isFormValid = await validate()
    
    if (isFormValid && onSubmit) {
      try {
        await onSubmit(formData)
        
        if (resetOnSubmit) {
          resetForm()
        }
      } catch (error) {
        console.error('表单提交失败:', error)
        throw error
      }
    }
    
    return isFormValid
  }

  // 监听表单数据变化
  if (validateOnChange) {
    watch(
      formData,
      (newData, oldData) => {
        Object.keys(newData).forEach(key => {
          if (newData[key] !== oldData?.[key] && touched[key]) {
            validateField(key)
          }
        })
      },
      { deep: true }
    )
  }

  return {
    // 数据
    formData,
    errors,
    touched,
    
    // 状态
    isValid,
    isDirty,
    hasErrors,
    validating,
    
    // 方法
    validate,
    validateField,
    clearValidation,
    resetForm,
    setFieldValue,
    setFieldsValue,
    getFieldValue,
    getFieldsValue,
    submit,
  }
}
```

## 存储相关钩子

### 本地存储钩子 (useLocalStorage)

```typescript
// packages/hooks/src/storage/useLocalStorage.ts

import { ref, watch, Ref } from 'vue'

export interface UseStorageOptions<T> {
  serializer?: {
    read: (value: string) => T
    write: (value: T) => string
  }
  onError?: (error: Error) => void
  syncAcrossTabs?: boolean
}

export function useLocalStorage<T>(
  key: string,
  defaultValue: T,
  options: UseStorageOptions<T> = {}
): {
  value: Ref<T>
  setValue: (value: T) => void
  removeValue: () => void
} {
  const {
    serializer = {
      read: JSON.parse,
      write: JSON.stringify,
    },
    onError = console.error,
    syncAcrossTabs = true,
  } = options

  const storedValue = ref<T>(defaultValue)

  // 读取存储的值
  const read = (): T => {
    try {
      const item = localStorage.getItem(key)
      if (item === null) return defaultValue
      return serializer.read(item)
    } catch (error) {
      onError(error as Error)
      return defaultValue
    }
  }

  // 写入存储
  const write = (value: T): void => {
    try {
      localStorage.setItem(key, serializer.write(value))
    } catch (error) {
      onError(error as Error)
    }
  }

  // 删除存储
  const remove = (): void => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      onError(error as Error)
    }
  }

  // 初始化值
  storedValue.value = read()

  // 监听值变化并同步到 localStorage
  watch(
    storedValue,
    (newValue) => {
      write(newValue)
    },
    { deep: true }
  )

  // 跨标签页同步
  if (syncAcrossTabs) {
    window.addEventListener('storage', (e) => {
      if (e.key === key && e.newValue !== null) {
        try {
          storedValue.value = serializer.read(e.newValue)
        } catch (error) {
          onError(error as Error)
        }
      }
    })
  }

  const setValue = (value: T) => {
    storedValue.value = value
  }

  const removeValue = () => {
    remove()
    storedValue.value = defaultValue
  }

  return {
    value: storedValue,
    setValue,
    removeValue,
  }
}
```

## 工具类钩子

### 防抖钩子 (useDebounce)

```typescript
// packages/hooks/src/utils/useDebounce.ts

import { ref, watch } from 'vue'
import type { Ref } from 'vue'

export function useDebounce<T>(
  value: Ref<T>,
  delay: number = 300
): Ref<T> {
  const debouncedValue = ref<T>(value.value)
  let timeoutId: NodeJS.Timeout | null = null

  watch(
    value,
    (newValue) => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      
      timeoutId = setTimeout(() => {
        debouncedValue.value = newValue
      }, delay)
    },
    { immediate: true }
  )

  return debouncedValue
}

export function useDebounceFn<T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 300
): T {
  let timeoutId: NodeJS.Timeout | null = null

  return ((...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    
    timeoutId = setTimeout(() => {
      fn(...args)
    }, delay)
  }) as T
}
```

### WebSocket 钩子 (useWebSocket)

```typescript
// packages/hooks/src/utils/useWebSocket.ts

import { ref, onUnmounted, watch } from 'vue'
import type { Ref } from 'vue'

export interface UseWebSocketOptions {
  onConnected?: (event: Event) => void
  onDisconnected?: (event: CloseEvent) => void
  onError?: (event: Event) => void
  onMessage?: (data: any) => void
  heartbeat?: {
    message?: string | (() => string)
    interval?: number
  }
  autoReconnect?: boolean
  reconnectLimit?: number
  reconnectInterval?: number
}

export interface UseWebSocketReturn {
  data: Ref<any>
  status: Ref<'CONNECTING' | 'CONNECTED' | 'DISCONNECTED' | 'ERROR'>
  send: (data: any) => void
  connect: () => void
  disconnect: () => void
}

export function useWebSocket(
  url: string,
  options: UseWebSocketOptions = {}
): UseWebSocketReturn {
  const {
    onConnected,
    onDisconnected,
    onError,
    onMessage,
    heartbeat,
    autoReconnect = true,
    reconnectLimit = 5,
    reconnectInterval = 3000,
  } = options

  const data = ref<any>(null)
  const status = ref<'CONNECTING' | 'CONNECTED' | 'DISCONNECTED' | 'ERROR'>('DISCONNECTED')
  
  let ws: WebSocket | null = null
  let reconnectCount = 0
  let heartbeatTimer: NodeJS.Timeout | null = null
  let reconnectTimer: NodeJS.Timeout | null = null

  const connect = () => {
    if (ws && ws.readyState === WebSocket.OPEN) return

    status.value = 'CONNECTING'
    ws = new WebSocket(url)

    ws.onopen = (event) => {
      status.value = 'CONNECTED'
      reconnectCount = 0
      onConnected?.(event)
      
      // 启动心跳
      if (heartbeat) {
        startHeartbeat()
      }
    }

    ws.onmessage = (event) => {
      try {
        const parsedData = JSON.parse(event.data)
        data.value = parsedData
        onMessage?.(parsedData)
      } catch {
        data.value = event.data
        onMessage?.(event.data)
      }
    }

    ws.onclose = (event) => {
      status.value = 'DISCONNECTED'
      stopHeartbeat()
      onDisconnected?.(event)
      
      // 自动重连
      if (autoReconnect && reconnectCount < reconnectLimit) {
        reconnectCount++
        reconnectTimer = setTimeout(() => {
          connect()
        }, reconnectInterval)
      }
    }

    ws.onerror = (event) => {
      status.value = 'ERROR'
      onError?.(event)
    }
  }

  const disconnect = () => {
    if (reconnectTimer) {
      clearTimeout(reconnectTimer)
      reconnectTimer = null
    }
    
    stopHeartbeat()
    
    if (ws) {
      ws.close()
      ws = null
    }
    
    status.value = 'DISCONNECTED'
  }

  const send = (data: any) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      const message = typeof data === 'string' ? data : JSON.stringify(data)
      ws.send(message)
    } else {
      console.warn('WebSocket is not connected')
    }
  }

  const startHeartbeat = () => {
    if (!heartbeat) return
    
    const { message = 'ping', interval = 30000 } = heartbeat
    
    heartbeatTimer = setInterval(() => {
      if (ws && ws.readyState === WebSocket.OPEN) {
        const heartbeatMessage = typeof message === 'function' ? message() : message
        send(heartbeatMessage)
      }
    }, interval)
  }

  const stopHeartbeat = () => {
    if (heartbeatTimer) {
      clearInterval(heartbeatTimer)
      heartbeatTimer = null
    }
  }

  // 组件卸载时断开连接
  onUnmounted(() => {
    disconnect()
  })

  return {
    data,
    status,
    send,
    connect,
    disconnect,
  }
}
```

## 业务相关钩子

### 文件上传钩子 (useUpload)

```typescript
// packages/hooks/src/business/useUpload.ts

import { ref, computed } from 'vue'
import { useRequest } from '../api/useRequest'
import type { UploadFile, UploadOptions } from '@qiyun/types'

export interface UseUploadOptions {
  action?: string
  accept?: string
  multiple?: boolean
  maxSize?: number // MB
  maxCount?: number
  beforeUpload?: (file: File) => boolean | Promise<boolean>
  onProgress?: (percent: number, file: File) => void
  onSuccess?: (response: any, file: File) => void
  onError?: (error: Error, file: File) => void
}

export function useUpload(options: UseUploadOptions = {}) {
  const {
    action = '/api/upload',
    accept = '*/*',
    multiple = false,
    maxSize = 10, // 10MB
    maxCount = 1,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
  } = options

  const fileList = ref<UploadFile[]>([])
  const uploading = ref(false)

  const canUpload = computed(() => {
    if (!multiple && fileList.value.length >= 1) return false
    if (maxCount && fileList.value.length >= maxCount) return false
    return true
  })

  const uploadFile = async (file: File): Promise<any> => {
    // 文件大小检查
    if (file.size > maxSize * 1024 * 1024) {
      throw new Error(`文件大小不能超过 ${maxSize}MB`)
    }

    // 前置检查
    if (beforeUpload) {
      const canProceed = await beforeUpload(file)
      if (!canProceed) {
        throw new Error('文件上传被取消')
      }
    }

    const formData = new FormData()
    formData.append('file', file)

    const uploadFile: UploadFile = {
      uid: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'uploading',
      percent: 0,
      originFileObj: file,
    }

    fileList.value.push(uploadFile)

    try {
      const response = await fetch(action, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`上传失败: ${response.statusText}`)
      }

      const result = await response.json()
      
      uploadFile.status = 'done'
      uploadFile.percent = 100
      uploadFile.response = result
      uploadFile.url = result.url

      onSuccess?.(result, file)
      
      return result
    } catch (error) {
      uploadFile.status = 'error'
      uploadFile.error = error as Error
      
      onError?.(error as Error, file)
      throw error
    }
  }

  const { execute: upload, loading } = useRequest(uploadFile, {
    onSuccess: (result) => {
      console.log('上传成功:', result)
    },
    onError: (error) => {
      console.error('上传失败:', error)
    },
  })

  const handleFileSelect = async (files: FileList | File[]) => {
    if (!canUpload.value) {
      console.warn('已达到最大上传数量')
      return
    }

    const fileArray = Array.from(files)
    
    if (!multiple && fileArray.length > 1) {
      console.warn('不支持多文件上传')
      return
    }

    uploading.value = true

    try {
      if (multiple) {
        await Promise.all(fileArray.map(file => upload(file)))
      } else {
        await upload(fileArray[0])
      }
    } finally {
      uploading.value = false
    }
  }

  const removeFile = (uid: string) => {
    const index = fileList.value.findIndex(file => file.uid === uid)
    if (index > -1) {
      fileList.value.splice(index, 1)
    }
  }

  const clearFiles = () => {
    fileList.value = []
  }

  const retryUpload = async (uid: string) => {
    const file = fileList.value.find(f => f.uid === uid)
    if (file && file.originFileObj) {
      file.status = 'uploading'
      file.percent = 0
      file.error = undefined
      
      try {
        await upload(file.originFileObj)
      } catch (error) {
        console.error('重试上传失败:', error)
      }
    }
  }

  return {
    fileList,
    uploading: computed(() => uploading.value || loading.value),
    canUpload,
    handleFileSelect,
    removeFile,
    clearFiles,
    retryUpload,
  }
}
```

## 构建配置

### Vite 配置

```typescript
// packages/hooks/vite.config.ts

import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
  ],
  
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'QiyunHooks',
      fileName: (format) => `qiyun-hooks.${format}.js`,
      formats: ['es', 'cjs'],
    },
    
    rollupOptions: {
      external: [
        'vue',
        'vue-router',
        'pinia',
        'axios',
        'lodash-es',
        '@qiyun/utils',
        '@qiyun/types',
        '@qiyun/constants',
        '@qiyun/stores',
      ],
      output: {
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          pinia: 'Pinia',
          axios: 'axios',
          'lodash-es': '_',
        },
      },
    },
    
    sourcemap: true,
  },
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
```

## 使用方法

### 1. 安装依赖

```bash
# 在应用中安装钩子库
pnpm add @qiyun/hooks
```

### 2. 基本使用

```vue
<template>
  <div>
    <!-- 用户列表 -->
    <QTable
      :columns="columns"
      :data-source="users"
      :loading="usersLoading"
      :pagination="pagination"
      @change="handleTableChange"
    />
    
    <!-- 用户表单 -->
    <QForm
      :model="formData"
      @submit="handleSubmit"
    >
      <QFormItem label="用户名" name="username">
        <QInput v-model="formData.username" />
      </QFormItem>
      <QFormItem label="邮箱" name="email">
        <QInput v-model="formData.email" />
      </QFormItem>
    </QForm>
  </div>
</template>

<script setup lang="ts">
import { useUserApi, useTable, useForm } from '@qiyun/hooks'

// 用户 API
const { getUserList, createNewUser } = useUserApi()

// 表格
const { 
  dataSource: users, 
  loading: usersLoading, 
  pagination, 
  handleTableChange 
} = useTable(getUserList)

// 表单
const { formData, submit } = useForm({
  initialValues: {
    username: '',
    email: '',
  },
})

const handleSubmit = async (values) => {
  await createNewUser(values)
  // 刷新表格
  refresh()
}

const columns = [
  { key: 'username', title: '用户名' },
  { key: 'email', title: '邮箱' },
]
</script>
```

### 3. 认证使用

```vue
<template>
  <div>
    <div v-if="isAuthenticated">
      <p>欢迎，{{ user?.username }}！</p>
      <QButton @click="logout">退出登录</QButton>
    </div>
    <div v-else>
      <QButton @click="showLoginModal = true">登录</QButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '@qiyun/hooks'

const { isAuthenticated, user, login, logout } = useAuth()
const showLoginModal = ref(false)

const handleLogin = async (credentials) => {
  try {
    await login(credentials)
    showLoginModal.value = false
  } catch (error) {
    console.error('登录失败:', error)
  }
}
</script>
```

## 最佳实践

### 1. 钩子组合

```typescript
// 组合多个钩子实现复杂功能
export function useUserManagement() {
  const { getUserList, createNewUser, updateUserById, deleteUserById } = useUserApi()
  const { checkAccess } = usePermission()
  const { confirm } = useModal()
  
  const {
    dataSource: users,
    loading,
    refresh,
    handleTableChange,
  } = useTable(getUserList)

  const canCreate = computed(() => checkAccess({ permissions: ['user:create'] }))
  const canEdit = computed(() => checkAccess({ permissions: ['user:edit'] }))
  const canDelete = computed(() => checkAccess({ permissions: ['user:delete'] }))

  const handleDelete = async (userId: string) => {
    try {
      await confirm({
        title: '确认删除',
        content: '确定要删除这个用户吗？',
      })
      
      await deleteUserById(userId)
      refresh()
    } catch (error) {
      // 用户取消或删除失败
    }
  }

  return {
    users,
    loading,
    canCreate,
    canEdit,
    canDelete,
    refresh,
    handleTableChange,
    handleDelete,
  }
}
```

### 2. 错误处理

```typescript
// 统一错误处理
export function useErrorHandler() {
  const { error } = useNotification()

  const handleError = (err: Error, context?: string) => {
    console.error(`${context || '操作'}失败:`, err)
    
    error({
      title: '操作失败',
      content: err.message || '未知错误',
    })
  }

  return {
    handleError,
  }
}
```

### 3. 性能优化

```typescript
// 使用防抖优化搜索
export function useSearch() {
  const keyword = ref('')
  const debouncedKeyword = useDebounce(keyword, 300)
  
  const { data: results, loading, execute: search } = useRequest(
    (keyword: string) => searchApi(keyword)
  )

  watch(debouncedKeyword, (newKeyword) => {
    if (newKeyword.trim()) {
      search(newKeyword)
    }
  })

  return {
    keyword,
    results,
    loading,
  }
}
```

## 相关资源

- [Vue 3 Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
- [Pinia 状态管理](https://pinia.vuejs.org/)
- [VueUse 工具库](https://vueuse.org/)
- [API 系统](/guide/basics/api)
- [状态管理](/guide/modules/stores)
- [工具函数](/guide/modules/utils)