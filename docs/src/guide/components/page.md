# Page常规页面组件

## 📋 概述

Page组件提供一个常规页面布局的组件，包括头部、内容和底部三个部分。该组件会让所有业务页面的风格保持一致，提供统一的页面结构和样式。

## 🎯 特性

- 🏗️ **统一布局** - 提供标准的页面结构（头部、内容、底部）
- 📱 **响应式设计** - 自适应不同屏幕尺寸
- 🎨 **灵活样式** - 支持自定义各区域的CSS类
- 📏 **自动高度** - 支持内容区域高度自适应
- 🔧 **插槽支持** - 支持多种插槽自定义内容

## 📝 Props

| 属性名              | 描述                   | 类型      | 默认值  | 说明                                                        |
| ------------------- | ---------------------- | --------- | ------- | ----------------------------------------------------------- |
| `title`             | 页面标题               | `string`  | -       | 显示在头部区域的主标题，也可通过 `title` 插槽自定义         |
| `description`       | 页面描述               | `string`  | -       | 显示在标题下方的描述文字，也可通过 `description` 插槽自定义 |
| `contentClass`      | 内容区域的class        | `string`  | -       | 自定义内容区域的CSS类名                                     |
| `headerClass`       | 头部区域的class        | `string`  | -       | 自定义头部区域的CSS类名                                     |
| `footerClass`       | 底部区域的class        | `string`  | -       | 自定义底部区域的CSS类名                                     |
| `autoContentHeight` | 自动调整内容区域的高度 | `boolean` | `false` | 开启后内容区域会根据可见高度自适应，超出部分显示滚动条      |

## 🎪 插槽

| 插槽名        | 描述             | 参数 |
| ------------- | ---------------- | ---- |
| `default`     | 主要内容区域     | -    |
| `title`       | 自定义页面标题   | -    |
| `description` | 自定义页面描述   | -    |
| `extra`       | 头部右侧额外内容 | -    |
| `footer`      | 底部内容         | -    |

## 💡 使用示例

### 基础用法

```vue
<template>
  <Page title="用户管理" description="管理系统中的所有用户信息">
    <div>
      <!-- 页面主要内容 -->
      <p>这里是页面的主要内容区域</p>
    </div>
  </Page>
</template>

<script setup>
import { Page } from "@repo/components";
</script>
```

### 使用插槽自定义

```vue
<template>
  <Page>
    <template #title>
      <div class="flex items-center gap-2">
        <Icon name="users" />
        <span>用户管理</span>
      </div>
    </template>

    <template #description>
      <div class="text-gray-600">
        管理系统中的所有用户信息，包括用户的基本信息、权限设置等
      </div>
    </template>

    <template #extra>
      <Button type="primary">新增用户</Button>
    </template>

    <!-- 主要内容 -->
    <UserTable />

    <template #footer>
      <div class="flex justify-between">
        <span>共 100 条记录</span>
        <Pagination :total="100" />
      </div>
    </template>
  </Page>
</template>
```

### 自定义样式

```vue
<template>
  <Page
    title="数据统计"
    description="查看系统的各项数据统计信息"
    :auto-content-height="true"
    header-class="bg-gradient-to-r from-blue-500 to-purple-600 text-white"
    content-class="bg-gray-50"
    footer-class="border-t-2 border-blue-200"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- 统计卡片 -->
    </div>

    <template #footer>
      <div class="text-center text-sm text-gray-500">
        数据更新时间：{{ updateTime }}
      </div>
    </template>
  </Page>
</template>
```

### 自适应高度

```vue
<template>
  <Page
    title="长列表页面"
    description="演示自适应高度功能"
    :auto-content-height="true"
  >
    <div class="space-y-4">
      <!-- 很多内容项 -->
      <div v-for="item in 100" :key="item" class="p-4 bg-white rounded shadow">
        列表项 {{ item }}
      </div>
    </div>
  </Page>
</template>
```

## 🎨 样式说明

### 默认样式结构

```css
.page-container {
  /* 整体容器：相对定位，全高度，垂直弹性布局 */
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
}

.page-header {
  /* 头部：自动高度，带边框和内边距 */
  height: auto;
  background: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
  padding: 1rem 1.5rem;
}

.page-content {
  /* 内容区域：占据剩余空间，可滚动 */
  flex-grow: 1;
  overflow-y: auto;
  padding: 1rem;
  background: var(--base-100);
}

.page-footer {
  /* 底部：绝对定位在底部 */
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--card-bg);
  padding: 1rem 1.5rem;
}
```

## 🔧 最佳实践

### 1. 合理使用自适应高度

```vue
<!-- ✅ 推荐：列表、表格等需要滚动的内容 -->
<Page :auto-content-height="true">
  <Table :data="tableData" />
</Page>

<!-- ❌ 不推荐：内容较少的表单页面 -->
<Page :auto-content-height="true">
  <Form />
</Page>
```

### 2. 头部内容设计

```vue
<!-- ✅ 推荐：简洁明了的标题和描述 -->
<Page title="用户管理" description="管理系统用户的基本信息和权限设置">

<!-- ✅ 推荐：使用插槽添加操作按钮 -->
<Page title="商品列表">
  <template #extra>
    <Button type="primary">添加商品</Button>
  </template>
</Page>
```

### 3. 底部内容使用

```vue
<!-- ✅ 推荐：分页、统计信息等 -->
<template #footer>
  <div class="flex justify-between items-center">
    <span class="text-sm text-gray-500">共 {{ total }} 条记录</span>
    <Pagination v-model="currentPage" :total="total" />
  </div>
</template>
```

## 🚨 注意事项

1. **高度计算**：使用 `autoContentHeight` 时，组件会自动计算头部和底部高度，确保内容区域正确显示
2. **滚动容器**：内容区域的滚动容器ID为 `page-scroll-content`，可用于滚动控制
3. **响应式**：组件已内置响应式设计，在移动端会自动调整布局
4. **性能考虑**：大量数据时建议配合虚拟滚动组件使用

## 🔗 相关组件

- [Table 表格组件](./table.md) - 常与Page组件配合使用
- [Form 表单组件](./form.md) - 表单页面的主要内容
- [Dialog 弹窗组件](./dialog.md) - 页面中的弹窗交互
