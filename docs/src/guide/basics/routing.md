# 路由和菜单

## 路由系统概览

Qiyun-Repo 使用 Vue Router 4 作为路由管理器，支持现代化的路由功能，包括动态路由、嵌套路由、路由守卫等。

## 路由配置

### 基础路由配置

每个应用都有独立的路由配置文件：

```typescript
// apps/admin/src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('@/views/Users.vue'),
    meta: {
      title: '用户管理',
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
```

### 路由模式配置

支持通过环境变量配置路由模式：

```typescript
// 根据环境变量选择路由模式
const history = import.meta.env.VITE_ROUTER_HISTORY === "hash"
  ? createWebHashHistory(import.meta.env.VITE_BASE)
  : createWebHistory(import.meta.env.VITE_BASE)

const router = createRouter({
  history,
  routes
})
```

## 嵌套路由

### 布局路由

使用嵌套路由实现布局系统：

```typescript
const routes: RouteRecordRaw[] = [
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue')
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('@/views/Users.vue')
      }
    ]
  }
]
```

### 布局组件

```vue
<!-- AdminLayout.vue -->
<template>
  <div class="admin-layout">
    <aside class="sidebar">
      <Navigation />
    </aside>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>
```

## 动态路由

### 参数路由

```typescript
const routes: RouteRecordRaw[] = [
  {
    path: '/user/:id',
    name: 'UserDetail',
    component: () => import('@/views/UserDetail.vue'),
    props: true // 将路由参数作为 props 传递
  }
]
```

### 在组件中使用

```vue
<template>
  <div>
    <h1>用户详情: {{ userId }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const userId = route.params.id
</script>
```

## 路由守卫

### 全局前置守卫

```typescript
import { useUserStore } from '@internal/stores'

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  
  // 检查是否需要认证
  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    next('/login')
    return
  }
  
  // 检查权限
  if (to.meta.permissions && !userStore.hasPermissions(to.meta.permissions)) {
    next('/403')
    return
  }
  
  next()
})
```

### 路由元信息

```typescript
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    requiresAuth?: boolean
    permissions?: string[]
    icon?: string
    hidden?: boolean
  }
}
```

## 菜单系统

### 菜单配置

基于路由配置自动生成菜单：

```typescript
// 菜单配置类型
interface MenuItem {
  key: string
  title: string
  icon?: string
  path?: string
  children?: MenuItem[]
  hidden?: boolean
}

// 从路由生成菜单
function generateMenuFromRoutes(routes: RouteRecordRaw[]): MenuItem[] {
  return routes
    .filter(route => !route.meta?.hidden)
    .map(route => ({
      key: route.name as string,
      title: route.meta?.title || route.name as string,
      icon: route.meta?.icon,
      path: route.path,
      children: route.children ? generateMenuFromRoutes(route.children) : undefined
    }))
}
```

### 菜单组件

```vue
<template>
  <nav class="navigation">
    <ul class="menu">
      <MenuItem 
        v-for="item in menuItems" 
        :key="item.key"
        :item="item"
      />
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import MenuItem from './MenuItem.vue'

const router = useRouter()

const menuItems = computed(() => {
  return generateMenuFromRoutes(router.getRoutes())
})
</script>
```

### 菜单项组件

```vue
<template>
  <li class="menu-item">
    <router-link 
      v-if="item.path && !item.children"
      :to="item.path"
      class="menu-link"
      active-class="active"
    >
      <Icon v-if="item.icon" :name="item.icon" />
      <span>{{ item.title }}</span>
    </router-link>
    
    <div v-else class="menu-group">
      <div class="menu-group-title">
        <Icon v-if="item.icon" :name="item.icon" />
        <span>{{ item.title }}</span>
      </div>
      <ul v-if="item.children" class="submenu">
        <MenuItem 
          v-for="child in item.children"
          :key="child.key"
          :item="child"
        />
      </ul>
    </div>
  </li>
</template>

<script setup lang="ts">
interface Props {
  item: MenuItem
}

defineProps<Props>()
</script>
```

## 面包屑导航

### 面包屑组件

```vue
<template>
  <nav class="breadcrumb">
    <router-link 
      v-for="(item, index) in breadcrumbItems"
      :key="item.path"
      :to="item.path"
      :class="[
        'breadcrumb-item',
        { 'active': index === breadcrumbItems.length - 1 }
      ]"
    >
      {{ item.title }}
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumbItems = computed(() => {
  const matched = route.matched.filter(item => item.meta?.title)
  
  return matched.map(item => ({
    title: item.meta?.title || item.name as string,
    path: item.path
  }))
})
</script>
```

## 路由懒加载

### 组件懒加载

```typescript
const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    // 使用动态导入实现懒加载
    component: () => import('@/views/Dashboard.vue')
  }
]
```

### 路由分组

```typescript
// 将相关路由分组到同一个 chunk
const UserManagement = () => import(
  /* webpackChunkName: "user-management" */ 
  '@/views/UserManagement.vue'
)

const UserList = () => import(
  /* webpackChunkName: "user-management" */ 
  '@/views/UserList.vue'
)
```

## 路由缓存

### 页面缓存

```vue
<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive :include="cachedViews">
      <component :is="Component" :key="route.fullPath" />
    </keep-alive>
  </router-view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const cachedViews = computed(() => {
  // 根据路由配置决定哪些页面需要缓存
  return route.matched
    .filter(item => item.meta?.keepAlive)
    .map(item => item.name)
})
</script>
```

## 路由过渡动画

### 页面切换动画

```vue
<template>
  <router-view v-slot="{ Component, route }">
    <transition 
      :name="getTransitionName(route)"
      mode="out-in"
    >
      <component :is="Component" :key="route.fullPath" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
function getTransitionName(route: RouteLocationNormalized) {
  return route.meta?.transition || 'fade'
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
```

## 最佳实践

### 1. 路由命名

- 使用有意义的路由名称
- 保持命名一致性
- 避免使用特殊字符

### 2. 路由组织

- 按功能模块组织路由
- 使用嵌套路由实现布局
- 合理使用路由懒加载

### 3. 权限控制

- 在路由元信息中定义权限
- 使用路由守卫进行权限检查
- 提供友好的错误页面

### 4. 性能优化

- 使用路由懒加载
- 合理配置路由缓存
- 避免过深的路由嵌套

## 相关资源

- [Vue Router 官方文档](https://router.vuejs.org/)
- [项目配置](/guide/basics/configuration)
- [权限管理](/guide/basics/permissions)