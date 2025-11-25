# 请求

## 概述

Qiyun-Repo 项目通过 `packages/request` 包提供了统一的 HTTP 请求解决方案，基于 Axios 封装，提供请求拦截、响应处理、错误统一处理、请求缓存等功能。

## 请求库架构

### 技术栈

- **HTTP 客户端**: Axios
- **缓存**: Memory Cache + LocalStorage
- **加密**: Crypto-js
- **工具库**: Lodash-es
- **类型支持**: TypeScript

### 项目结构

```
packages/request/
├── src/                    # 源代码
│   ├── core/              # 核心功能
│   │   ├── client.ts      # HTTP 客户端
│   │   ├── interceptors.ts # 拦截器
│   │   ├── cache.ts       # 缓存管理
│   │   ├── retry.ts       # 重试机制
│   │   └── index.ts       # 核心导出
│   ├── types/             # 类型定义
│   │   ├── request.ts     # 请求类型
│   │   ├── response.ts    # 响应类型
│   │   ├── config.ts      # 配置类型
│   │   └── index.ts       # 类型导出
│   ├── utils/             # 工具函数
│   │   ├── url.ts         # URL 处理
│   │   ├── params.ts      # 参数处理
│   │   ├── headers.ts     # 请求头处理
│   │   └── index.ts       # 工具导出
│   ├── adapters/          # 适配器
│   │   ├── rest.ts        # RESTful 适配器
│   │   ├── graphql.ts     # GraphQL 适配器
│   │   └── index.ts       # 适配器导出
│   ├── plugins/           # 插件
│   │   ├── loading.ts     # 加载插件
│   │   ├── mock.ts        # Mock 插件
│   │   ├── logger.ts      # 日志插件
│   │   └── index.ts       # 插件导出
│   └── index.ts           # 请求库入口
├── __tests__/             # 测试文件
├── dist/                  # 构建输出
├── package.json           # 包配置
├── vite.config.ts         # Vite 配置
├── tsconfig.json          # TypeScript 配置
└── README.md              # 使用说明
```

## 核心功能

### HTTP 客户端 (client.ts)

```typescript
// packages/request/src/core/client.ts

import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { setupInterceptors } from './interceptors'
import { CacheManager } from './cache'
import { RetryManager } from './retry'
import type { RequestConfig, ApiResponse } from '../types'

export interface ClientConfig extends AxiosRequestConfig {
  // 基础配置
  baseURL?: string
  timeout?: number
  
  // 认证配置
  auth?: {
    type: 'bearer' | 'basic' | 'custom'
    token?: string
    username?: string
    password?: string
    getToken?: () => string | Promise<string>
  }
  
  // 缓存配置
  cache?: {
    enabled?: boolean
    ttl?: number // 缓存时间（毫秒）
    storage?: 'memory' | 'localStorage' | 'sessionStorage'
    keyGenerator?: (config: AxiosRequestConfig) => string
  }
  
  // 重试配置
  retry?: {
    enabled?: boolean
    times?: number
    delay?: number
    condition?: (error: any) => boolean
  }
  
  // 加载状态
  loading?: {
    enabled?: boolean
    global?: boolean
    target?: string | HTMLElement
  }
  
  // 错误处理
  errorHandler?: {
    global?: boolean
    showMessage?: boolean
    logError?: boolean
    onError?: (error: any) => void
  }
}

export class HttpClient {
  private instance: AxiosInstance
  private cacheManager: CacheManager
  private retryManager: RetryManager
  private config: ClientConfig

  constructor(config: ClientConfig = {}) {
    this.config = {
      timeout: 30000,
      cache: {
        enabled: true,
        ttl: 5 * 60 * 1000, // 5分钟
        storage: 'memory',
      },
      retry: {
        enabled: true,
        times: 3,
        delay: 1000,
      },
      loading: {
        enabled: true,
        global: true,
      },
      errorHandler: {
        global: true,
        showMessage: true,
        logError: true,
      },
      ...config,
    }

    // 创建 Axios 实例
    this.instance = axios.create({
      baseURL: this.config.baseURL,
      timeout: this.config.timeout,
      ...this.config,
    })

    // 初始化管理器
    this.cacheManager = new CacheManager(this.config.cache!)
    this.retryManager = new RetryManager(this.config.retry!)

    // 设置拦截器
    setupInterceptors(this.instance, {
      config: this.config,
      cacheManager: this.cacheManager,
      retryManager: this.retryManager,
    })
  }

  // GET 请求
  async get<T = any>(
    url: string,
    config?: RequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: 'GET', url })
  }

  // POST 请求
  async post<T = any>(
    url: string,
    data?: any,
    config?: RequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: 'POST', url, data })
  }

  // PUT 请求
  async put<T = any>(
    url: string,
    data?: any,
    config?: RequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: 'PUT', url, data })
  }

  // DELETE 请求
  async delete<T = any>(
    url: string,
    config?: RequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: 'DELETE', url })
  }

  // PATCH 请求
  async patch<T = any>(
    url: string,
    data?: any,
    config?: RequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: 'PATCH', url, data })
  }

  // 通用请求方法
  async request<T = any>(config: RequestConfig): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await this.instance.request(config)
      return response.data
    } catch (error) {
      throw this.handleError(error)
    }
  }

  // 上传文件
  async upload<T = any>(
    url: string,
    file: File | FormData,
    config?: RequestConfig & {
      onUploadProgress?: (progressEvent: any) => void
    }
  ): Promise<ApiResponse<T>> {
    const formData = file instanceof FormData ? file : new FormData()
    if (file instanceof File) {
      formData.append('file', file)
    }

    return this.post<T>(url, formData, {
      ...config,
      headers: {
        'Content-Type': 'multipart/form-data',
        ...config?.headers,
      },
    })
  }

  // 下载文件
  async download(
    url: string,
    filename?: string,
    config?: RequestConfig
  ): Promise<void> {
    const response = await this.instance.request({
      ...config,
      url,
      method: 'GET',
      responseType: 'blob',
    })

    const blob = new Blob([response.data])
    const downloadUrl = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    
    link.href = downloadUrl
    link.download = filename || this.extractFilename(response) || 'download'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    window.URL.revokeObjectURL(downloadUrl)
  }

  // 批量请求
  async batch<T = any>(
    requests: RequestConfig[]
  ): Promise<ApiResponse<T>[]> {
    const promises = requests.map(config => this.request<T>(config))
    return Promise.all(promises)
  }

  // 并发请求（带限制）
  async concurrent<T = any>(
    requests: RequestConfig[],
    limit: number = 5
  ): Promise<ApiResponse<T>[]> {
    const results: ApiResponse<T>[] = []
    
    for (let i = 0; i < requests.length; i += limit) {
      const batch = requests.slice(i, i + limit)
      const batchResults = await this.batch<T>(batch)
      results.push(...batchResults)
    }
    
    return results
  }

  // 取消请求
  createCancelToken() {
    return axios.CancelToken.source()
  }

  // 设置认证信息
  setAuth(auth: ClientConfig['auth']) {
    this.config.auth = auth
  }

  // 清除缓存
  clearCache(pattern?: string) {
    this.cacheManager.clear(pattern)
  }

  // 错误处理
  private handleError(error: any) {
    if (this.config.errorHandler?.onError) {
      this.config.errorHandler.onError(error)
    }
    return error
  }

  // 提取文件名
  private extractFilename(response: AxiosResponse): string | null {
    const contentDisposition = response.headers['content-disposition']
    if (contentDisposition) {
      const matches = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)
      if (matches && matches[1]) {
        return matches[1].replace(/['"]/g, '')
      }
    }
    return null
  }

  // 获取实例（用于高级用法）
  getInstance(): AxiosInstance {
    return this.instance
  }
}

// 创建默认实例
export const httpClient = new HttpClient({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
})

// 导出便捷方法
export const { get, post, put, delete: del, patch, upload, download } = httpClient
```

### 拦截器 (interceptors.ts)

```typescript
// packages/request/src/core/interceptors.ts

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { message } from 'ant-design-vue'
import type { ClientConfig } from './client'
import type { CacheManager } from './cache'
import type { RetryManager } from './retry'

export interface InterceptorContext {
  config: ClientConfig
  cacheManager: CacheManager
  retryManager: RetryManager
}

export function setupInterceptors(
  instance: AxiosInstance,
  context: InterceptorContext
) {
  const { config, cacheManager, retryManager } = context

  // 请求拦截器
  instance.interceptors.request.use(
    async (requestConfig: AxiosRequestConfig) => {
      // 添加认证信息
      if (config.auth) {
        await addAuthHeader(requestConfig, config.auth)
      }

      // 添加请求ID（用于追踪）
      requestConfig.metadata = {
        requestId: generateRequestId(),
        startTime: Date.now(),
      }

      // 检查缓存
      if (shouldUseCache(requestConfig, config.cache)) {
        const cachedResponse = cacheManager.get(requestConfig)
        if (cachedResponse) {
          // 返回缓存的响应（需要特殊处理）
          return Promise.reject({
            isCache: true,
            data: cachedResponse,
            config: requestConfig,
          })
        }
      }

      // 显示加载状态
      if (config.loading?.enabled) {
        showLoading(requestConfig, config.loading)
      }

      // 请求日志
      if (config.errorHandler?.logError) {
        console.log(`[Request] ${requestConfig.method?.toUpperCase()} ${requestConfig.url}`, {
          config: requestConfig,
          timestamp: new Date().toISOString(),
        })
      }

      return requestConfig
    },
    (error: AxiosError) => {
      console.error('[Request Error]', error)
      return Promise.reject(error)
    }
  )

  // 响应拦截器
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      const { config: requestConfig } = response

      // 隐藏加载状态
      if (config.loading?.enabled) {
        hideLoading(requestConfig, config.loading)
      }

      // 缓存响应
      if (shouldCacheResponse(requestConfig, config.cache)) {
        cacheManager.set(requestConfig, response.data)
      }

      // 响应日志
      if (config.errorHandler?.logError) {
        const duration = Date.now() - (requestConfig.metadata?.startTime || 0)
        console.log(`[Response] ${requestConfig.method?.toUpperCase()} ${requestConfig.url}`, {
          status: response.status,
          duration: `${duration}ms`,
          data: response.data,
          timestamp: new Date().toISOString(),
        })
      }

      // 检查业务错误
      if (response.data && !response.data.success) {
        const error = new Error(response.data.message || '请求失败')
        error.code = response.data.code
        error.response = response
        throw error
      }

      return response
    },
    async (error: AxiosError) => {
      const { config: requestConfig } = error

      // 处理缓存响应
      if (error.isCache) {
        return Promise.resolve({
          data: error.data,
          status: 200,
          statusText: 'OK',
          headers: {},
          config: error.config,
        })
      }

      // 隐藏加载状态
      if (config.loading?.enabled && requestConfig) {
        hideLoading(requestConfig, config.loading)
      }

      // 重试机制
      if (config.retry?.enabled && shouldRetry(error, config.retry)) {
        return retryManager.retry(instance, error)
      }

      // 错误处理
      handleError(error, config.errorHandler)

      return Promise.reject(error)
    }
  )
}

// 添加认证头
async function addAuthHeader(
  config: AxiosRequestConfig,
  auth: NonNullable<ClientConfig['auth']>
) {
  if (!config.headers) {
    config.headers = {}
  }

  switch (auth.type) {
    case 'bearer':
      const token = auth.getToken ? await auth.getToken() : auth.token
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      break
      
    case 'basic':
      if (auth.username && auth.password) {
        const credentials = btoa(`${auth.username}:${auth.password}`)
        config.headers.Authorization = `Basic ${credentials}`
      }
      break
      
    case 'custom':
      // 自定义认证逻辑
      break
  }
}

// 生成请求ID
function generateRequestId(): string {
  return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// 检查是否应该使用缓存
function shouldUseCache(
  config: AxiosRequestConfig,
  cacheConfig?: ClientConfig['cache']
): boolean {
  if (!cacheConfig?.enabled) return false
  if (config.method?.toLowerCase() !== 'get') return false
  if (config.cache === false) return false
  return true
}

// 检查是否应该缓存响应
function shouldCacheResponse(
  config: AxiosRequestConfig,
  cacheConfig?: ClientConfig['cache']
): boolean {
  return shouldUseCache(config, cacheConfig)
}

// 检查是否应该重试
function shouldRetry(
  error: AxiosError,
  retryConfig: NonNullable<ClientConfig['retry']>
): boolean {
  if (!retryConfig.enabled) return false
  if (error.config?.__retryCount >= retryConfig.times) return false
  
  // 自定义重试条件
  if (retryConfig.condition) {
    return retryConfig.condition(error)
  }
  
  // 默认重试条件：网络错误或5xx错误
  return !error.response || (error.response.status >= 500)
}

// 显示加载状态
function showLoading(
  config: AxiosRequestConfig,
  loadingConfig: NonNullable<ClientConfig['loading']>
) {
  if (loadingConfig.global) {
    // 全局加载状态
    window.__globalLoading = (window.__globalLoading || 0) + 1
    document.body.classList.add('loading')
  }
  
  if (loadingConfig.target) {
    // 局部加载状态
    const target = typeof loadingConfig.target === 'string'
      ? document.querySelector(loadingConfig.target)
      : loadingConfig.target
      
    if (target) {
      target.classList.add('loading')
    }
  }
}

// 隐藏加载状态
function hideLoading(
  config: AxiosRequestConfig,
  loadingConfig: NonNullable<ClientConfig['loading']>
) {
  if (loadingConfig.global) {
    window.__globalLoading = Math.max((window.__globalLoading || 1) - 1, 0)
    if (window.__globalLoading === 0) {
      document.body.classList.remove('loading')
    }
  }
  
  if (loadingConfig.target) {
    const target = typeof loadingConfig.target === 'string'
      ? document.querySelector(loadingConfig.target)
      : loadingConfig.target
      
    if (target) {
      target.classList.remove('loading')
    }
  }
}

// 错误处理
function handleError(
  error: AxiosError,
  errorConfig?: ClientConfig['errorHandler']
) {
  if (!errorConfig?.global) return

  let message = '请求失败'
  
  if (error.response) {
    // 服务器响应错误
    const { status, data } = error.response
    
    switch (status) {
      case 400:
        message = data?.message || '请求参数错误'
        break
      case 401:
        message = '未授权，请重新登录'
        // 可以在这里触发登录逻辑
        break
      case 403:
        message = '权限不足'
        break
      case 404:
        message = '请求的资源不存在'
        break
      case 500:
        message = '服务器内部错误'
        break
      default:
        message = data?.message || `请求失败 (${status})`
    }
  } else if (error.request) {
    // 网络错误
    message = '网络连接失败，请检查网络'
  } else {
    // 其他错误
    message = error.message || '未知错误'
  }

  // 显示错误消息
  if (errorConfig?.showMessage) {
    message.error(message)
  }

  // 错误日志
  if (errorConfig?.logError) {
    console.error('[Response Error]', {
      message,
      error,
      timestamp: new Date().toISOString(),
    })
  }
}
```

### 缓存管理 (cache.ts)

```typescript
// packages/request/src/core/cache.ts

import type { AxiosRequestConfig } from 'axios'
import { md5 } from 'crypto-js'

export interface CacheConfig {
  enabled: boolean
  ttl: number
  storage: 'memory' | 'localStorage' | 'sessionStorage'
  keyGenerator?: (config: AxiosRequestConfig) => string
}

export interface CacheItem {
  data: any
  timestamp: number
  ttl: number
}

export class CacheManager {
  private memoryCache = new Map<string, CacheItem>()
  private config: CacheConfig

  constructor(config: CacheConfig) {
    this.config = config
  }

  // 生成缓存键
  private generateKey(config: AxiosRequestConfig): string {
    if (this.config.keyGenerator) {
      return this.config.keyGenerator(config)
    }

    const { method, url, params, data } = config
    const keyData = {
      method: method?.toLowerCase(),
      url,
      params,
      data,
    }
    
    return md5(JSON.stringify(keyData)).toString()
  }

  // 获取缓存
  get(config: AxiosRequestConfig): any | null {
    const key = this.generateKey(config)
    
    let item: CacheItem | null = null
    
    switch (this.config.storage) {
      case 'memory':
        item = this.memoryCache.get(key) || null
        break
        
      case 'localStorage':
        try {
          const stored = localStorage.getItem(`cache_${key}`)
          item = stored ? JSON.parse(stored) : null
        } catch {
          item = null
        }
        break
        
      case 'sessionStorage':
        try {
          const stored = sessionStorage.getItem(`cache_${key}`)
          item = stored ? JSON.parse(stored) : null
        } catch {
          item = null
        }
        break
    }

    if (!item) return null

    // 检查是否过期
    if (Date.now() - item.timestamp > item.ttl) {
      this.delete(key)
      return null
    }

    return item.data
  }

  // 设置缓存
  set(config: AxiosRequestConfig, data: any): void {
    const key = this.generateKey(config)
    const item: CacheItem = {
      data,
      timestamp: Date.now(),
      ttl: this.config.ttl,
    }

    switch (this.config.storage) {
      case 'memory':
        this.memoryCache.set(key, item)
        break
        
      case 'localStorage':
        try {
          localStorage.setItem(`cache_${key}`, JSON.stringify(item))
        } catch (error) {
          console.warn('localStorage cache failed:', error)
        }
        break
        
      case 'sessionStorage':
        try {
          sessionStorage.setItem(`cache_${key}`, JSON.stringify(item))
        } catch (error) {
          console.warn('sessionStorage cache failed:', error)
        }
        break
    }
  }

  // 删除缓存
  delete(key: string): void {
    switch (this.config.storage) {
      case 'memory':
        this.memoryCache.delete(key)
        break
        
      case 'localStorage':
        localStorage.removeItem(`cache_${key}`)
        break
        
      case 'sessionStorage':
        sessionStorage.removeItem(`cache_${key}`)
        break
    }
  }

  // 清除缓存
  clear(pattern?: string): void {
    switch (this.config.storage) {
      case 'memory':
        if (pattern) {
          const regex = new RegExp(pattern)
          for (const key of this.memoryCache.keys()) {
            if (regex.test(key)) {
              this.memoryCache.delete(key)
            }
          }
        } else {
          this.memoryCache.clear()
        }
        break
        
      case 'localStorage':
        this.clearStorage(localStorage, pattern)
        break
        
      case 'sessionStorage':
        this.clearStorage(sessionStorage, pattern)
        break
    }
  }

  // 清除存储
  private clearStorage(storage: Storage, pattern?: string): void {
    const keys = Object.keys(storage).filter(key => key.startsWith('cache_'))
    
    if (pattern) {
      const regex = new RegExp(pattern)
      keys.forEach(key => {
        const cacheKey = key.replace('cache_', '')
        if (regex.test(cacheKey)) {
          storage.removeItem(key)
        }
      })
    } else {
      keys.forEach(key => storage.removeItem(key))
    }
  }

  // 获取缓存统计
  getStats(): { size: number; keys: string[] } {
    switch (this.config.storage) {
      case 'memory':
        return {
          size: this.memoryCache.size,
          keys: Array.from(this.memoryCache.keys()),
        }
        
      case 'localStorage':
      case 'sessionStorage':
        const storage = this.config.storage === 'localStorage' ? localStorage : sessionStorage
        const keys = Object.keys(storage).filter(key => key.startsWith('cache_'))
        return {
          size: keys.length,
          keys: keys.map(key => key.replace('cache_', '')),
        }
        
      default:
        return { size: 0, keys: [] }
    }
  }
}
```

### 重试机制 (retry.ts)

```typescript
// packages/request/src/core/retry.ts

import type { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios'

export interface RetryConfig {
  enabled: boolean
  times: number
  delay: number
  condition?: (error: AxiosError) => boolean
}

export class RetryManager {
  private config: RetryConfig

  constructor(config: RetryConfig) {
    this.config = config
  }

  async retry(instance: AxiosInstance, error: AxiosError): Promise<any> {
    const { config: requestConfig } = error

    if (!requestConfig) {
      return Promise.reject(error)
    }

    // 初始化重试计数
    if (!requestConfig.__retryCount) {
      requestConfig.__retryCount = 0
    }

    // 检查重试次数
    if (requestConfig.__retryCount >= this.config.times) {
      return Promise.reject(error)
    }

    // 增加重试计数
    requestConfig.__retryCount++

    // 计算延迟时间（指数退避）
    const delay = this.config.delay * Math.pow(2, requestConfig.__retryCount - 1)

    console.log(`[Retry] Attempt ${requestConfig.__retryCount}/${this.config.times} after ${delay}ms`, {
      url: requestConfig.url,
      method: requestConfig.method,
      error: error.message,
    })

    // 等待延迟
    await new Promise(resolve => setTimeout(resolve, delay))

    // 重新发送请求
    return instance.request(requestConfig)
  }
}
```

## RESTful 适配器

```typescript
// packages/request/src/adapters/rest.ts

import { HttpClient } from '../core/client'
import type { RequestConfig, ApiResponse } from '../types'

export interface RestResource {
  name: string
  endpoint: string
  idField?: string
}

export class RestAdapter {
  private client: HttpClient
  private resource: RestResource

  constructor(client: HttpClient, resource: RestResource) {
    this.client = client
    this.resource = {
      idField: 'id',
      ...resource,
    }
  }

  // 获取列表
  async list<T = any>(params?: any): Promise<ApiResponse<{ list: T[]; total: number }>> {
    return this.client.get(this.resource.endpoint, { params })
  }

  // 获取详情
  async get<T = any>(id: string | number): Promise<ApiResponse<T>> {
    return this.client.get(`${this.resource.endpoint}/${id}`)
  }

  // 创建
  async create<T = any>(data: any): Promise<ApiResponse<T>> {
    return this.client.post(this.resource.endpoint, data)
  }

  // 更新
  async update<T = any>(id: string | number, data: any): Promise<ApiResponse<T>> {
    return this.client.put(`${this.resource.endpoint}/${id}`, data)
  }

  // 部分更新
  async patch<T = any>(id: string | number, data: any): Promise<ApiResponse<T>> {
    return this.client.patch(`${this.resource.endpoint}/${id}`, data)
  }

  // 删除
  async delete(id: string | number): Promise<ApiResponse<void>> {
    return this.client.delete(`${this.resource.endpoint}/${id}`)
  }

  // 批量操作
  async batchCreate<T = any>(items: any[]): Promise<ApiResponse<T[]>> {
    return this.client.post(`${this.resource.endpoint}/batch`, { items })
  }

  async batchUpdate<T = any>(items: any[]): Promise<ApiResponse<T[]>> {
    return this.client.put(`${this.resource.endpoint}/batch`, { items })
  }

  async batchDelete(ids: (string | number)[]): Promise<ApiResponse<void>> {
    return this.client.delete(`${this.resource.endpoint}/batch`, {
      data: { ids }
    })
  }

  // 搜索
  async search<T = any>(query: string, params?: any): Promise<ApiResponse<T[]>> {
    return this.client.get(`${this.resource.endpoint}/search`, {
      params: { q: query, ...params }
    })
  }

  // 自定义操作
  async action<T = any>(
    action: string,
    id?: string | number,
    data?: any,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'POST'
  ): Promise<ApiResponse<T>> {
    const url = id 
      ? `${this.resource.endpoint}/${id}/${action}`
      : `${this.resource.endpoint}/${action}`

    switch (method) {
      case 'GET':
        return this.client.get(url, { params: data })
      case 'POST':
        return this.client.post(url, data)
      case 'PUT':
        return this.client.put(url, data)
      case 'DELETE':
        return this.client.delete(url, { data })
      default:
        throw new Error(`Unsupported method: ${method}`)
    }
  }
}

// 创建资源适配器的工厂函数
export function createRestResource(
  client: HttpClient,
  resource: RestResource
): RestAdapter {
  return new RestAdapter(client, resource)
}

// 使用示例
export function createUserApi(client: HttpClient) {
  return createRestResource(client, {
    name: 'user',
    endpoint: '/users',
  })
}

export function createPostApi(client: HttpClient) {
  return createRestResource(client, {
    name: 'post',
    endpoint: '/posts',
  })
}
```

## 插件系统

### 加载插件 (loading.ts)

```typescript
// packages/request/src/plugins/loading.ts

import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

export interface LoadingPluginOptions {
  global?: boolean
  target?: string | HTMLElement
  className?: string
  showSpinner?: boolean
  showOverlay?: boolean
  text?: string
}

export class LoadingPlugin {
  private options: LoadingPluginOptions
  private loadingCount = 0
  private loadingElement?: HTMLElement

  constructor(options: LoadingPluginOptions = {}) {
    this.options = {
      global: true,
      className: 'loading',
      showSpinner: true,
      showOverlay: true,
      text: '加载中...',
      ...options,
    }
  }

  onRequest(config: AxiosRequestConfig) {
    this.showLoading()
    return config
  }

  onResponse(response: AxiosResponse) {
    this.hideLoading()
    return response
  }

  onError(error: AxiosError) {
    this.hideLoading()
    return Promise.reject(error)
  }

  private showLoading() {
    this.loadingCount++
    
    if (this.loadingCount === 1) {
      if (this.options.global) {
        this.showGlobalLoading()
      } else if (this.options.target) {
        this.showTargetLoading()
      }
    }
  }

  private hideLoading() {
    this.loadingCount = Math.max(this.loadingCount - 1, 0)
    
    if (this.loadingCount === 0) {
      if (this.options.global) {
        this.hideGlobalLoading()
      } else if (this.loadingElement) {
        this.hideTargetLoading()
      }
    }
  }

  private showGlobalLoading() {
    document.body.classList.add(this.options.className!)
    
    if (this.options.showOverlay) {
      this.createLoadingOverlay()
    }
  }

  private hideGlobalLoading() {
    document.body.classList.remove(this.options.className!)
    this.removeLoadingOverlay()
  }

  private showTargetLoading() {
    const target = typeof this.options.target === 'string'
      ? document.querySelector(this.options.target)
      : this.options.target

    if (target) {
      target.classList.add(this.options.className!)
      
      if (this.options.showOverlay) {
        this.createTargetOverlay(target as HTMLElement)
      }
    }
  }

  private hideTargetLoading() {
    if (this.loadingElement) {
      this.loadingElement.classList.remove(this.options.className!)
      this.removeTargetOverlay()
    }
  }

  private createLoadingOverlay() {
    const overlay = document.createElement('div')
    overlay.className = 'loading-overlay'
    overlay.innerHTML = this.getLoadingHTML()
    
    document.body.appendChild(overlay)
    this.loadingElement = overlay
  }

  private createTargetOverlay(target: HTMLElement) {
    const overlay = document.createElement('div')
    overlay.className = 'loading-overlay loading-overlay--target'
    overlay.innerHTML = this.getLoadingHTML()
    
    target.style.position = 'relative'
    target.appendChild(overlay)
    this.loadingElement = overlay
  }

  private removeLoadingOverlay() {
    const overlay = document.querySelector('.loading-overlay')
    if (overlay) {
      overlay.remove()
    }
    this.loadingElement = undefined
  }

  private removeTargetOverlay() {
    if (this.loadingElement) {
      this.loadingElement.remove()
      this.loadingElement = undefined
    }
  }

  private getLoadingHTML(): string {
    const spinner = this.options.showSpinner
      ? '<div class="loading-spinner"></div>'
      : ''
    
    const text = this.options.text
      ? `<div class="loading-text">${this.options.text}</div>`
      : ''

    return `
      <div class="loading-content">
        ${spinner}
        ${text}
      </div>
    `
  }
}
```

### Mock 插件 (mock.ts)

```typescript
// packages/request/src/plugins/mock.ts

import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface MockRule {
  method?: string
  url: string | RegExp
  response: any | ((config: AxiosRequestConfig) => any)
  delay?: number
  status?: number
}

export class MockPlugin {
  private rules: MockRule[] = []
  private enabled = false

  constructor(enabled = false) {
    this.enabled = enabled
  }

  // 添加 Mock 规则
  addRule(rule: MockRule) {
    this.rules.push({
      method: 'GET',
      status: 200,
      delay: 0,
      ...rule,
    })
  }

  // 批量添加规则
  addRules(rules: MockRule[]) {
    rules.forEach(rule => this.addRule(rule))
  }

  // 启用/禁用 Mock
  setEnabled(enabled: boolean) {
    this.enabled = enabled
  }

  // 请求拦截
  async onRequest(config: AxiosRequestConfig): Promise<AxiosRequestConfig> {
    if (!this.enabled) {
      return config
    }

    const matchedRule = this.findMatchingRule(config)
    if (matchedRule) {
      // 模拟延迟
      if (matchedRule.delay && matchedRule.delay > 0) {
        await new Promise(resolve => setTimeout(resolve, matchedRule.delay))
      }

      // 生成响应数据
      const responseData = typeof matchedRule.response === 'function'
        ? matchedRule.response(config)
        : matchedRule.response

      // 抛出特殊错误，在响应拦截器中处理
      throw {
        isMock: true,
        config,
        data: responseData,
        status: matchedRule.status,
        statusText: 'OK',
        headers: {},
      }
    }

    return config
  }

  // 查找匹配的规则
  private findMatchingRule(config: AxiosRequestConfig): MockRule | null {
    return this.rules.find(rule => {
      // 检查请求方法
      if (rule.method && rule.method.toLowerCase() !== config.method?.toLowerCase()) {
        return false
      }

      // 检查 URL
      if (typeof rule.url === 'string') {
        return config.url === rule.url
      } else if (rule.url instanceof RegExp) {
        return rule.url.test(config.url || '')
      }

      return false
    }) || null
  }

  // 清除所有规则
  clearRules() {
    this.rules = []
  }

  // 获取所有规则
  getRules(): MockRule[] {
    return [...this.rules]
  }
}

// Mock 数据生成器
export class MockDataGenerator {
  // 生成用户数据
  static user(override: any = {}) {
    return {
      id: Math.random().toString(36).substr(2, 9),
      username: `user_${Math.random().toString(36).substr(2, 6)}`,
      email: `user${Math.floor(Math.random() * 1000)}@example.com`,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random()}`,
      createdAt: new Date().toISOString(),
      ...override,
    }
  }

  // 生成列表数据
  static list<T>(generator: () => T, count = 10): { list: T[]; total: number } {
    const list = Array.from({ length: count }, generator)
    return { list, total: count }
  }

  // 生成分页数据
  static pagination<T>(
    generator: () => T,
    page = 1,
    pageSize = 20,
    total = 100
  ): { list: T[]; total: number; page: number; pageSize: number } {
    const start = (page - 1) * pageSize
    const end = Math.min(start + pageSize, total)
    const count = Math.max(0, end - start)
    
    const list = Array.from({ length: count }, generator)
    
    return { list, total, page, pageSize }
  }
}
```

## 使用方法

### 1. 基本使用

```typescript
// 创建客户端实例
import { HttpClient } from '@qiyun/request'

const client = new HttpClient({
  baseURL: 'https://api.example.com',
  timeout: 30000,
  auth: {
    type: 'bearer',
    getToken: () => localStorage.getItem('token') || '',
  },
})

// 发送请求
const response = await client.get('/users')
const users = response.data

// 创建用户
const newUser = await client.post('/users', {
  username: 'john',
  email: 'john@example.com',
})
```

### 2. RESTful API

```typescript
import { createUserApi } from '@qiyun/request'

const userApi = createUserApi(client)

// 获取用户列表
const users = await userApi.list({ page: 1, pageSize: 20 })

// 获取用户详情
const user = await userApi.get('123')

// 创建用户
const newUser = await userApi.create({
  username: 'john',
  email: 'john@example.com',
})

// 更新用户
const updatedUser = await userApi.update('123', {
  username: 'john_updated',
})

// 删除用户
await userApi.delete('123')

// 自定义操作
await userApi.action('activate', '123')
```

### 3. 文件上传下载

```typescript
// 文件上传
const file = document.querySelector('input[type="file"]').files[0]
const response = await client.upload('/upload', file, {
  onUploadProgress: (progressEvent) => {
    const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total)
    console.log(`上传进度: ${percent}%`)
  }
})

// 文件下载
await client.download('/files/document.pdf', 'my-document.pdf')
```

### 4. 缓存使用

```typescript
// 启用缓存的请求
const response = await client.get('/users', {
  cache: {
    enabled: true,
    ttl: 5 * 60 * 1000, // 5分钟
  }
})

// 清除缓存
client.clearCache('users')
```

### 5. Mock 数据

```typescript
import { MockPlugin, MockDataGenerator } from '@qiyun/request'

const mockPlugin = new MockPlugin(true)

// 添加 Mock 规则
mockPlugin.addRule({
  method: 'GET',
  url: '/users',
  response: () => MockDataGenerator.list(() => MockDataGenerator.user(), 20),
  delay: 500,
})

mockPlugin.addRule({
  method: 'GET',
  url: /\/users\/\d+/,
  response: (config) => {
    const id = config.url?.split('/').pop()
    return MockDataGenerator.user({ id })
  },
})
```

## 最佳实践

### 1. 错误处理

```typescript
// 全局错误处理
const client = new HttpClient({
  errorHandler: {
    global: true,
    showMessage: true,
    onError: (error) => {
      // 自定义错误处理逻辑
      if (error.response?.status === 401) {
        // 跳转到登录页
        window.location.href = '/login'
      }
    },
  },
})

// 局部错误处理
try {
  const response = await client.get('/users')
} catch (error) {
  console.error('获取用户列表失败:', error)
  // 处理特定错误
}
```

### 2. 请求取消

```typescript
// 创建取消令牌
const cancelToken = client.createCancelToken()

// 发送可取消的请求
const request = client.get('/users', {
  cancelToken: cancelToken.token,
})

// 取消请求
cancelToken.cancel('用户取消了请求')
```

### 3. 并发控制

```typescript
// 批量请求
const requests = [
  { url: '/users' },
  { url: '/posts' },
  { url: '/comments' },
]

const responses = await client.batch(requests)

// 并发限制
const responses = await client.concurrent(requests, 3) // 最多3个并发
```

## 相关资源

- [Axios 官方文档](https://axios-http.com/)
- [HTTP 状态码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)
- [RESTful API 设计](https://restfulapi.net/)
- [API 系统](/guide/basics/api)
- [钩子函数](/guide/modules/hooks)
- [工具函数](/guide/modules/utils)