# 持久化

## 概述

`packages/persistence` 是项目的数据持久化解决方案，提供了统一的数据存储和缓存接口。支持多种存储方式，包括 LocalStorage、SessionStorage、IndexedDB 和内存缓存，并提供了数据加密、压缩、过期管理等高级功能。

## 架构

### 技术栈

- **Storage API**: 浏览器原生存储 API
- **IndexedDB**: 浏览器数据库存储
- **crypto-js**: 数据加密
- **lz-string**: 数据压缩
- **TypeScript**: 类型安全
- **Vitest**: 单元测试

### 项目结构

```
packages/persistence/
├── src/
│   ├── storage/              # 存储适配器
│   │   ├── base.ts          # 基础存储接口
│   │   ├── local.ts         # LocalStorage 适配器
│   │   ├── session.ts       # SessionStorage 适配器
│   │   ├── memory.ts        # 内存存储适配器
│   │   └── indexed-db.ts    # IndexedDB 适配器
│   ├── cache/               # 缓存管理
│   │   ├── cache-manager.ts # 缓存管理器
│   │   ├── lru-cache.ts     # LRU 缓存
│   │   └── memory-cache.ts  # 内存缓存
│   ├── encryption/          # 数据加密
│   │   ├── aes.ts          # AES 加密
│   │   └── base64.ts       # Base64 编码
│   ├── compression/         # 数据压缩
│   │   └── lz-string.ts    # LZ 字符串压缩
│   ├── serialization/       # 序列化
│   │   ├── json.ts         # JSON 序列化
│   │   └── msgpack.ts      # MessagePack 序列化
│   ├── persistence.ts       # 主入口
│   └── types.ts            # 类型定义
├── tests/                   # 测试文件
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 核心功能

### 1. 存储适配器

#### 基础存储接口

```typescript
// src/storage/base.ts
export interface IStorage {
  get<T = any>(key: string): Promise<T | null>
  set<T = any>(key: string, value: T, options?: StorageOptions): Promise<void>
  remove(key: string): Promise<void>
  clear(): Promise<void>
  keys(): Promise<string[]>
  has(key: string): Promise<boolean>
  size(): Promise<number>
}

export interface StorageOptions {
  ttl?: number          // 过期时间（毫秒）
  encrypt?: boolean     // 是否加密
  compress?: boolean    // 是否压缩
  namespace?: string    // 命名空间
}

export interface StorageItem<T = any> {
  value: T
  timestamp: number
  ttl?: number
  encrypted?: boolean
  compressed?: boolean
}
```

#### LocalStorage 适配器

```typescript
// src/storage/local.ts
import { IStorage, StorageOptions, StorageItem } from './base'
import { AESEncryption } from '../encryption/aes'
import { LZStringCompression } from '../compression/lz-string'

export class LocalStorageAdapter implements IStorage {
  private encryption = new AESEncryption()
  private compression = new LZStringCompression()
  private prefix: string

  constructor(prefix = 'qiyun_') {
    this.prefix = prefix
  }

  async get<T = any>(key: string): Promise<T | null> {
    try {
      const fullKey = this.getFullKey(key)
      const rawValue = localStorage.getItem(fullKey)
      
      if (!rawValue) return null

      const item: StorageItem<T> = JSON.parse(rawValue)
      
      // 检查过期时间
      if (this.isExpired(item)) {
        await this.remove(key)
        return null
      }

      let value = item.value

      // 解压缩
      if (item.compressed) {
        value = this.compression.decompress(value as string) as T
      }

      // 解密
      if (item.encrypted) {
        value = this.encryption.decrypt(value as string) as T
      }

      return value
    } catch (error) {
      console.error('LocalStorage get error:', error)
      return null
    }
  }

  async set<T = any>(key: string, value: T, options: StorageOptions = {}): Promise<void> {
    try {
      const fullKey = this.getFullKey(key)
      let processedValue: any = value

      // 加密
      if (options.encrypt) {
        processedValue = this.encryption.encrypt(JSON.stringify(processedValue))
      }

      // 压缩
      if (options.compress) {
        processedValue = this.compression.compress(
          typeof processedValue === 'string' ? processedValue : JSON.stringify(processedValue)
        )
      }

      const item: StorageItem<T> = {
        value: processedValue,
        timestamp: Date.now(),
        ttl: options.ttl,
        encrypted: options.encrypt,
        compressed: options.compress,
      }

      localStorage.setItem(fullKey, JSON.stringify(item))
    } catch (error) {
      console.error('LocalStorage set error:', error)
      throw error
    }
  }

  async remove(key: string): Promise<void> {
    const fullKey = this.getFullKey(key)
    localStorage.removeItem(fullKey)
  }

  async clear(): Promise<void> {
    const keys = await this.keys()
    keys.forEach(key => localStorage.removeItem(key))
  }

  async keys(): Promise<string[]> {
    const keys: string[] = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && key.startsWith(this.prefix)) {
        keys.push(key)
      }
    }
    return keys
  }

  async has(key: string): Promise<boolean> {
    const fullKey = this.getFullKey(key)
    return localStorage.getItem(fullKey) !== null
  }

  async size(): Promise<number> {
    return (await this.keys()).length
  }

  private getFullKey(key: string): string {
    return `${this.prefix}${key}`
  }

  private isExpired(item: StorageItem): boolean {
    if (!item.ttl) return false
    return Date.now() - item.timestamp > item.ttl
  }
}
```

#### IndexedDB 适配器

```typescript
// src/storage/indexed-db.ts
import { IStorage, StorageOptions, StorageItem } from './base'

export class IndexedDBAdapter implements IStorage {
  private dbName: string
  private storeName: string
  private version: number
  private db: IDBDatabase | null = null

  constructor(dbName = 'QiyunDB', storeName = 'storage', version = 1) {
    this.dbName = dbName
    this.storeName = storeName
    this.version = version
  }

  private async getDB(): Promise<IDBDatabase> {
    if (this.db) return this.db

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version)

      request.onerror = () => reject(request.error)
      request.onsuccess = () => {
        this.db = request.result
        resolve(this.db)
      }

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'key' })
        }
      }
    })
  }

  async get<T = any>(key: string): Promise<T | null> {
    try {
      const db = await this.getDB()
      const transaction = db.transaction([this.storeName], 'readonly')
      const store = transaction.objectStore(this.storeName)
      
      return new Promise((resolve, reject) => {
        const request = store.get(key)
        
        request.onerror = () => reject(request.error)
        request.onsuccess = () => {
          const result = request.result
          if (!result) {
            resolve(null)
            return
          }

          const item: StorageItem<T> = result.data
          
          // 检查过期时间
          if (this.isExpired(item)) {
            this.remove(key)
            resolve(null)
            return
          }

          resolve(item.value)
        }
      })
    } catch (error) {
      console.error('IndexedDB get error:', error)
      return null
    }
  }

  async set<T = any>(key: string, value: T, options: StorageOptions = {}): Promise<void> {
    try {
      const db = await this.getDB()
      const transaction = db.transaction([this.storeName], 'readwrite')
      const store = transaction.objectStore(this.storeName)

      const item: StorageItem<T> = {
        value,
        timestamp: Date.now(),
        ttl: options.ttl,
      }

      return new Promise((resolve, reject) => {
        const request = store.put({ key, data: item })
        
        request.onerror = () => reject(request.error)
        request.onsuccess = () => resolve()
      })
    } catch (error) {
      console.error('IndexedDB set error:', error)
      throw error
    }
  }

  async remove(key: string): Promise<void> {
    try {
      const db = await this.getDB()
      const transaction = db.transaction([this.storeName], 'readwrite')
      const store = transaction.objectStore(this.storeName)

      return new Promise((resolve, reject) => {
        const request = store.delete(key)
        
        request.onerror = () => reject(request.error)
        request.onsuccess = () => resolve()
      })
    } catch (error) {
      console.error('IndexedDB remove error:', error)
    }
  }

  async clear(): Promise<void> {
    try {
      const db = await this.getDB()
      const transaction = db.transaction([this.storeName], 'readwrite')
      const store = transaction.objectStore(this.storeName)

      return new Promise((resolve, reject) => {
        const request = store.clear()
        
        request.onerror = () => reject(request.error)
        request.onsuccess = () => resolve()
      })
    } catch (error) {
      console.error('IndexedDB clear error:', error)
    }
  }

  async keys(): Promise<string[]> {
    try {
      const db = await this.getDB()
      const transaction = db.transaction([this.storeName], 'readonly')
      const store = transaction.objectStore(this.storeName)

      return new Promise((resolve, reject) => {
        const request = store.getAllKeys()
        
        request.onerror = () => reject(request.error)
        request.onsuccess = () => resolve(request.result as string[])
      })
    } catch (error) {
      console.error('IndexedDB keys error:', error)
      return []
    }
  }

  async has(key: string): Promise<boolean> {
    const value = await this.get(key)
    return value !== null
  }

  async size(): Promise<number> {
    const keys = await this.keys()
    return keys.length
  }

  private isExpired(item: StorageItem): boolean {
    if (!item.ttl) return false
    return Date.now() - item.timestamp > item.ttl
  }
}
```

### 2. 缓存管理

#### LRU 缓存

```typescript
// src/cache/lru-cache.ts
export class LRUCache<T = any> {
  private capacity: number
  private cache = new Map<string, { value: T; timestamp: number }>()

  constructor(capacity = 100) {
    this.capacity = capacity
  }

  get(key: string): T | null {
    const item = this.cache.get(key)
    if (!item) return null

    // 更新访问时间
    this.cache.delete(key)
    this.cache.set(key, { ...item, timestamp: Date.now() })
    
    return item.value
  }

  set(key: string, value: T): void {
    // 如果已存在，删除旧的
    if (this.cache.has(key)) {
      this.cache.delete(key)
    }
    // 如果超出容量，删除最久未使用的
    else if (this.cache.size >= this.capacity) {
      const firstKey = this.cache.keys().next().value
      this.cache.delete(firstKey)
    }

    this.cache.set(key, { value, timestamp: Date.now() })
  }

  has(key: string): boolean {
    return this.cache.has(key)
  }

  delete(key: string): boolean {
    return this.cache.delete(key)
  }

  clear(): void {
    this.cache.clear()
  }

  size(): number {
    return this.cache.size
  }

  keys(): string[] {
    return Array.from(this.cache.keys())
  }
}
```

#### 缓存管理器

```typescript
// src/cache/cache-manager.ts
import { LRUCache } from './lru-cache'
import { IStorage } from '../storage/base'

export interface CacheConfig {
  maxSize?: number
  defaultTTL?: number
  storage?: IStorage
  enablePersistence?: boolean
}

export class CacheManager {
  private memoryCache: LRUCache
  private storage?: IStorage
  private config: Required<CacheConfig>

  constructor(config: CacheConfig = {}) {
    this.config = {
      maxSize: 100,
      defaultTTL: 5 * 60 * 1000, // 5分钟
      enablePersistence: false,
      ...config,
    }

    this.memoryCache = new LRUCache(this.config.maxSize)
    this.storage = config.storage
  }

  async get<T = any>(key: string): Promise<T | null> {
    // 先从内存缓存获取
    let value = this.memoryCache.get(key)
    if (value !== null) {
      return value as T
    }

    // 从持久化存储获取
    if (this.config.enablePersistence && this.storage) {
      value = await this.storage.get<T>(key)
      if (value !== null) {
        // 回写到内存缓存
        this.memoryCache.set(key, value)
        return value
      }
    }

    return null
  }

  async set<T = any>(key: string, value: T, ttl?: number): Promise<void> {
    // 设置到内存缓存
    this.memoryCache.set(key, value)

    // 持久化存储
    if (this.config.enablePersistence && this.storage) {
      await this.storage.set(key, value, {
        ttl: ttl || this.config.defaultTTL,
      })
    }
  }

  async remove(key: string): Promise<void> {
    // 从内存缓存删除
    this.memoryCache.delete(key)

    // 从持久化存储删除
    if (this.config.enablePersistence && this.storage) {
      await this.storage.remove(key)
    }
  }

  async clear(): Promise<void> {
    // 清空内存缓存
    this.memoryCache.clear()

    // 清空持久化存储
    if (this.config.enablePersistence && this.storage) {
      await this.storage.clear()
    }
  }

  async has(key: string): Promise<boolean> {
    // 检查内存缓存
    if (this.memoryCache.has(key)) {
      return true
    }

    // 检查持久化存储
    if (this.config.enablePersistence && this.storage) {
      return await this.storage.has(key)
    }

    return false
  }

  getStats() {
    return {
      memorySize: this.memoryCache.size(),
      maxSize: this.config.maxSize,
      hitRate: this.calculateHitRate(),
    }
  }

  private calculateHitRate(): number {
    // 简化的命中率计算
    return 0.85 // 实际实现需要统计命中和未命中次数
  }
}
```

### 3. 持久化管理器

```typescript
// src/persistence.ts
import { LocalStorageAdapter } from './storage/local'
import { SessionStorageAdapter } from './storage/session'
import { IndexedDBAdapter } from './storage/indexed-db'
import { MemoryStorageAdapter } from './storage/memory'
import { CacheManager } from './cache/cache-manager'
import { IStorage, StorageOptions } from './storage/base'

export type StorageType = 'local' | 'session' | 'indexeddb' | 'memory'

export interface PersistenceConfig {
  defaultStorage?: StorageType
  prefix?: string
  enableCache?: boolean
  cacheConfig?: {
    maxSize?: number
    defaultTTL?: number
  }
}

export class PersistenceManager {
  private storages = new Map<StorageType, IStorage>()
  private cacheManager?: CacheManager
  private config: Required<PersistenceConfig>

  constructor(config: PersistenceConfig = {}) {
    this.config = {
      defaultStorage: 'local',
      prefix: 'qiyun_',
      enableCache: true,
      cacheConfig: {
        maxSize: 100,
        defaultTTL: 5 * 60 * 1000,
      },
      ...config,
    }

    this.initStorages()
    this.initCache()
  }

  private initStorages() {
    this.storages.set('local', new LocalStorageAdapter(this.config.prefix))
    this.storages.set('session', new SessionStorageAdapter(this.config.prefix))
    this.storages.set('indexeddb', new IndexedDBAdapter())
    this.storages.set('memory', new MemoryStorageAdapter())
  }

  private initCache() {
    if (this.config.enableCache) {
      this.cacheManager = new CacheManager({
        ...this.config.cacheConfig,
        storage: this.getStorage('local'),
        enablePersistence: true,
      })
    }
  }

  getStorage(type?: StorageType): IStorage {
    const storageType = type || this.config.defaultStorage
    const storage = this.storages.get(storageType)
    
    if (!storage) {
      throw new Error(`Storage type "${storageType}" not found`)
    }
    
    return storage
  }

  getCache(): CacheManager {
    if (!this.cacheManager) {
      throw new Error('Cache is not enabled')
    }
    return this.cacheManager
  }

  // 便捷方法
  async get<T = any>(key: string, storage?: StorageType): Promise<T | null> {
    if (this.config.enableCache && !storage) {
      return await this.cacheManager!.get<T>(key)
    }
    return await this.getStorage(storage).get<T>(key)
  }

  async set<T = any>(
    key: string, 
    value: T, 
    options?: StorageOptions & { storage?: StorageType }
  ): Promise<void> {
    const { storage, ...storageOptions } = options || {}
    
    if (this.config.enableCache && !storage) {
      await this.cacheManager!.set(key, value, storageOptions.ttl)
    } else {
      await this.getStorage(storage).set(key, value, storageOptions)
    }
  }

  async remove(key: string, storage?: StorageType): Promise<void> {
    if (this.config.enableCache && !storage) {
      await this.cacheManager!.remove(key)
    } else {
      await this.getStorage(storage).remove(key)
    }
  }

  async clear(storage?: StorageType): Promise<void> {
    if (storage) {
      await this.getStorage(storage).clear()
    } else {
      // 清空所有存储
      for (const [, storageInstance] of this.storages) {
        await storageInstance.clear()
      }
      if (this.cacheManager) {
        await this.cacheManager.clear()
      }
    }
  }

  async has(key: string, storage?: StorageType): Promise<boolean> {
    if (this.config.enableCache && !storage) {
      return await this.cacheManager!.has(key)
    }
    return await this.getStorage(storage).has(key)
  }

  // 批量操作
  async getMultiple<T = any>(keys: string[], storage?: StorageType): Promise<Record<string, T | null>> {
    const result: Record<string, T | null> = {}
    const storageInstance = this.getStorage(storage)
    
    await Promise.all(
      keys.map(async (key) => {
        result[key] = await storageInstance.get<T>(key)
      })
    )
    
    return result
  }

  async setMultiple<T = any>(
    data: Record<string, T>, 
    options?: StorageOptions & { storage?: StorageType }
  ): Promise<void> {
    const { storage, ...storageOptions } = options || {}
    const storageInstance = this.getStorage(storage)
    
    await Promise.all(
      Object.entries(data).map(([key, value]) =>
        storageInstance.set(key, value, storageOptions)
      )
    )
  }

  // 统计信息
  async getStats(storage?: StorageType) {
    if (storage) {
      const storageInstance = this.getStorage(storage)
      return {
        type: storage,
        size: await storageInstance.size(),
        keys: await storageInstance.keys(),
      }
    }

    const stats: Record<string, any> = {}
    
    for (const [type, storageInstance] of this.storages) {
      stats[type] = {
        size: await storageInstance.size(),
        keys: await storageInstance.keys(),
      }
    }

    if (this.cacheManager) {
      stats.cache = this.cacheManager.getStats()
    }

    return stats
  }
}

// 默认实例
export const persistence = new PersistenceManager()

// 导出类型和接口
export * from './storage/base'
export * from './cache/cache-manager'
```

### 4. 构建配置

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/persistence.ts'),
      name: 'QiyunPersistence',
      formats: ['es', 'cjs'],
      fileName: (format) => `persistence.${format}.js`,
    },
    rollupOptions: {
      external: ['crypto-js', 'lz-string'],
      output: {
        globals: {
          'crypto-js': 'CryptoJS',
          'lz-string': 'LZString',
        },
      },
    },
  },
})
```

## 使用方法

### 1. 基本使用

```typescript
import { persistence } from '@qiyun/persistence'

// 存储数据
await persistence.set('user', { id: 1, name: 'John' })

// 获取数据
const user = await persistence.get('user')

// 删除数据
await persistence.remove('user')

// 检查是否存在
const exists = await persistence.has('user')
```

### 2. 指定存储类型

```typescript
// 使用 LocalStorage
await persistence.set('token', 'abc123', { storage: 'local' })

// 使用 SessionStorage
await persistence.set('temp', 'data', { storage: 'session' })

// 使用 IndexedDB
await persistence.set('large-data', bigObject, { storage: 'indexeddb' })

// 使用内存存储
await persistence.set('cache', 'value', { storage: 'memory' })
```

### 3. 高级选项

```typescript
// 设置过期时间
await persistence.set('session', userData, {
  ttl: 30 * 60 * 1000, // 30分钟
  storage: 'local'
})

// 加密存储
await persistence.set('sensitive', secretData, {
  encrypt: true,
  storage: 'local'
})

// 压缩存储
await persistence.set('large-text', longString, {
  compress: true,
  storage: 'local'
})

// 组合使用
await persistence.set('secure-data', data, {
  ttl: 60 * 60 * 1000, // 1小时
  encrypt: true,
  compress: true,
  storage: 'local'
})
```

### 4. 批量操作

```typescript
// 批量获取
const data = await persistence.getMultiple(['user', 'settings', 'preferences'])

// 批量设置
await persistence.setMultiple({
  user: userData,
  settings: userSettings,
  preferences: userPreferences
}, {
  ttl: 24 * 60 * 60 * 1000, // 24小时
  storage: 'local'
})
```

### 5. 缓存使用

```typescript
// 获取缓存管理器
const cache = persistence.getCache()

// 缓存 API 响应
const fetchUserData = async (userId: string) => {
  const cacheKey = `user:${userId}`
  
  // 先从缓存获取
  let userData = await cache.get(cacheKey)
  if (userData) {
    return userData
  }
  
  // 从 API 获取
  userData = await api.get(`/users/${userId}`)
  
  // 缓存结果
  await cache.set(cacheKey, userData, 10 * 60 * 1000) // 10分钟
  
  return userData
}
```

### 6. 自定义存储适配器

```typescript
import { IStorage, StorageOptions } from '@qiyun/persistence'

class RedisStorageAdapter implements IStorage {
  private client: RedisClient

  constructor(client: RedisClient) {
    this.client = client
  }

  async get<T = any>(key: string): Promise<T | null> {
    const value = await this.client.get(key)
    return value ? JSON.parse(value) : null
  }

  async set<T = any>(key: string, value: T, options?: StorageOptions): Promise<void> {
    const serialized = JSON.stringify(value)
    if (options?.ttl) {
      await this.client.setex(key, Math.floor(options.ttl / 1000), serialized)
    } else {
      await this.client.set(key, serialized)
    }
  }

  // ... 实现其他方法
}

// 使用自定义适配器
const customPersistence = new PersistenceManager({
  defaultStorage: 'custom'
})

// 注册自定义存储
customPersistence.registerStorage('redis', new RedisStorageAdapter(redisClient))
```

## 最佳实践

### 1. 存储选择

```typescript
// 根据数据特性选择存储类型
class DataManager {
  // 用户会话数据 - SessionStorage
  async setSessionData(key: string, data: any) {
    await persistence.set(key, data, { storage: 'session' })
  }

  // 用户偏好设置 - LocalStorage
  async setUserPreferences(preferences: any) {
    await persistence.set('preferences', preferences, { 
      storage: 'local',
      ttl: 30 * 24 * 60 * 60 * 1000 // 30天
    })
  }

  // 大量数据 - IndexedDB
  async setLargeData(key: string, data: any) {
    await persistence.set(key, data, { 
      storage: 'indexeddb',
      compress: true
    })
  }

  // 临时缓存 - Memory
  async setCacheData(key: string, data: any) {
    await persistence.set(key, data, { 
      storage: 'memory',
      ttl: 5 * 60 * 1000 // 5分钟
    })
  }
}
```

### 2. 错误处理

```typescript
class SafeStorage {
  async safeGet<T>(key: string, defaultValue: T): Promise<T> {
    try {
      const value = await persistence.get<T>(key)
      return value !== null ? value : defaultValue
    } catch (error) {
      console.error(`Failed to get ${key}:`, error)
      return defaultValue
    }
  }

  async safeSet<T>(key: string, value: T, options?: any): Promise<boolean> {
    try {
      await persistence.set(key, value, options)
      return true
    } catch (error) {
      console.error(`Failed to set ${key}:`, error)
      return false
    }
  }
}
```

### 3. 数据迁移

```typescript
class DataMigration {
  async migrateData() {
    const version = await persistence.get('data-version') || 1
    
    if (version < 2) {
      await this.migrateToV2()
      await persistence.set('data-version', 2)
    }
    
    if (version < 3) {
      await this.migrateToV3()
      await persistence.set('data-version', 3)
    }
  }

  private async migrateToV2() {
    // 迁移逻辑
    const oldData = await persistence.get('old-format-data')
    if (oldData) {
      const newData = this.transformData(oldData)
      await persistence.set('new-format-data', newData)
      await persistence.remove('old-format-data')
    }
  }

  private transformData(oldData: any): any {
    // 数据转换逻辑
    return {
      ...oldData,
      version: 2,
      updatedAt: new Date().toISOString()
    }
  }
}
```

## 相关资源

- [Web Storage API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API)
- [IndexedDB API](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API)
- [LRU Cache 算法](https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU)
- [数据加密](/guide/modules/utils#加密工具)
- [缓存策略](/guide/basics/configuration#缓存配置)