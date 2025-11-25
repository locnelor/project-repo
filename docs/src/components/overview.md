# 组件库概览

Qiyun 组件库 (`@repo/components`) 提供了一套完整的 Vue 3 组件解决方案，基于 TypeScript 开发，支持按需引入，具有良好的类型提示和文档支持。

## 🎯 设计理念

### 统一性

- 统一的设计语言和交互规范
- 一致的 API 设计和命名规范
- 统一的主题系统和样式变量

### 可复用性

- 高度可配置的组件属性
- 灵活的插槽系统
- 支持自定义样式和主题

### 易用性

- 完整的 TypeScript 类型支持
- 详细的文档和示例
- 良好的开发者体验

---

## 📦 安装使用

### 安装组件库

```bash
# 在项目中安装
pnpm add @repo/components
```

### 全局注册

```typescript
// main.ts
import { createApp } from "vue";
import QiyunComponents from "@repo/components";
import "@repo/components/style.css";

const app = createApp(App);
app.use(QiyunComponents);
app.mount("#app");
```

### 按需引入

```vue
<template>
  <div>
    <QButton type="primary" @click="handleClick"> 点击按钮 </QButton>
  </div>
</template>

<script setup lang="ts">
import { QButton } from "@repo/components";

const handleClick = () => {
  console.log("按钮被点击");
};
</script>
```

---

## 🧩 组件分类

### 基础组件 (Basic)

基础组件是构建用户界面的基本元素，提供最常用的交互功能。

| 组件名    | 说明       | 状态      |
| --------- | ---------- | --------- |
| QButton   | 按钮组件   | ✅ 已完成 |
| QInput    | 输入框组件 | ✅ 已完成 |
| QSelect   | 选择器组件 | ✅ 已完成 |
| QCheckbox | 复选框组件 | ✅ 已完成 |
| QRadio    | 单选框组件 | ✅ 已完成 |
| QSwitch   | 开关组件   | ✅ 已完成 |
| QSlider   | 滑块组件   | 🚧 开发中 |
| QRate     | 评分组件   | 📋 计划中 |

### 数据展示 (Display)

用于展示和组织数据的组件。

| 组件名    | 说明       | 状态      |
| --------- | ---------- | --------- |
| QTable    | 表格组件   | ✅ 已完成 |
| QList     | 列表组件   | ✅ 已完成 |
| QCard     | 卡片组件   | ✅ 已完成 |
| QTag      | 标签组件   | ✅ 已完成 |
| QBadge    | 徽章组件   | ✅ 已完成 |
| QAvatar   | 头像组件   | ✅ 已完成 |
| QProgress | 进度条组件 | 🚧 开发中 |
| QTimeline | 时间轴组件 | 📋 计划中 |

### 反馈组件 (Feedback)

用于向用户提供操作反馈的组件。

| 组件名        | 说明       | 状态      |
| ------------- | ---------- | --------- |
| QModal        | 弹窗组件   | ✅ 已完成 |
| QDrawer       | 抽屉组件   | ✅ 已完成 |
| QMessage      | 消息提示   | ✅ 已完成 |
| QNotification | 通知组件   | ✅ 已完成 |
| QPopconfirm   | 气泡确认框 | ✅ 已完成 |
| QTooltip      | 文字提示   | ✅ 已完成 |
| QPopover      | 气泡卡片   | 🚧 开发中 |
| QAlert        | 警告提示   | 📋 计划中 |

### 导航组件 (Navigation)

用于页面导航和信息架构的组件。

| 组件名      | 说明     | 状态      |
| ----------- | -------- | --------- |
| QMenu       | 导航菜单 | ✅ 已完成 |
| QTabs       | 标签页   | ✅ 已完成 |
| QBreadcrumb | 面包屑   | ✅ 已完成 |
| QPagination | 分页组件 | ✅ 已完成 |
| QSteps      | 步骤条   | 🚧 开发中 |
| QAffix      | 固钉组件 | 📋 计划中 |

### 布局组件 (Layout)

用于页面布局和结构组织的组件。

| 组件名   | 说明     | 状态      |
| -------- | -------- | --------- |
| QLayout  | 布局容器 | ✅ 已完成 |
| QHeader  | 页面头部 | ✅ 已完成 |
| QSider   | 侧边栏   | ✅ 已完成 |
| QContent | 内容区域 | ✅ 已完成 |
| QFooter  | 页面底部 | ✅ 已完成 |
| QGrid    | 栅格系统 | 🚧 开发中 |
| QSpace   | 间距组件 | 📋 计划中 |

### 业务组件 (Business)

针对特定业务场景的复合组件。

| 组件名          | 说明         | 状态      |
| --------------- | ------------ | --------- |
| QUserSelect     | 用户选择器   | ✅ 已完成 |
| QRoleSelect     | 角色选择器   | ✅ 已完成 |
| QPermissionTree | 权限树       | ✅ 已完成 |
| QFileUpload     | 文件上传     | ✅ 已完成 |
| QImageUpload    | 图片上传     | ✅ 已完成 |
| QRichEditor     | 富文本编辑器 | 🚧 开发中 |
| QSearchForm     | 搜索表单     | 📋 计划中 |
| QDataTable      | 数据表格     | 📋 计划中 |

---

## 🎨 主题系统

### 设计令牌 (Design Tokens)

组件库使用设计令牌来管理颜色、字体、间距等设计属性。

```css
:root {
  /* 主色调 */
  --q-color-primary: #1890ff;
  --q-color-primary-hover: #40a9ff;
  --q-color-primary-active: #096dd9;

  /* 功能色 */
  --q-color-success: #52c41a;
  --q-color-warning: #faad14;
  --q-color-error: #ff4d4f;
  --q-color-info: #1890ff;

  /* 中性色 */
  --q-color-text: #262626;
  --q-color-text-secondary: #595959;
  --q-color-text-disabled: #bfbfbf;

  /* 背景色 */
  --q-color-bg: #ffffff;
  --q-color-bg-secondary: #fafafa;
  --q-color-bg-disabled: #f5f5f5;

  /* 边框色 */
  --q-color-border: #d9d9d9;
  --q-color-border-secondary: #f0f0f0;

  /* 字体 */
  --q-font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --q-font-size-sm: 12px;
  --q-font-size-base: 14px;
  --q-font-size-lg: 16px;
  --q-font-size-xl: 18px;

  /* 间距 */
  --q-spacing-xs: 4px;
  --q-spacing-sm: 8px;
  --q-spacing-md: 16px;
  --q-spacing-lg: 24px;
  --q-spacing-xl: 32px;

  /* 圆角 */
  --q-border-radius-sm: 2px;
  --q-border-radius-base: 6px;
  --q-border-radius-lg: 8px;

  /* 阴影 */
  --q-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.03);
  --q-shadow-base: 0 1px 6px rgba(0, 0, 0, 0.2);
  --q-shadow-lg: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### 暗色主题

```css
[data-theme="dark"] {
  --q-color-text: #ffffff;
  --q-color-text-secondary: #a6a6a6;
  --q-color-bg: #141414;
  --q-color-bg-secondary: #1f1f1f;
  --q-color-border: #434343;
}
```

### 主题切换

```typescript
// 主题切换工具
import { useTheme } from "@repo/components";

const { theme, setTheme, toggleTheme } = useTheme();

// 设置主题
setTheme("dark");

// 切换主题
toggleTheme();
```

---

## 🔧 组件详解

### QButton - 按钮组件

按钮用于触发操作，是最常用的交互元素。

#### 基础用法

```vue
<template>
  <div class="space-x-2">
    <QButton>默认按钮</QButton>
    <QButton type="primary">主要按钮</QButton>
    <QButton type="success">成功按钮</QButton>
    <QButton type="warning">警告按钮</QButton>
    <QButton type="danger">危险按钮</QButton>
  </div>
</template>
```

#### 按钮尺寸

```vue
<template>
  <div class="space-x-2">
    <QButton size="small">小型按钮</QButton>
    <QButton size="medium">中等按钮</QButton>
    <QButton size="large">大型按钮</QButton>
  </div>
</template>
```

#### 加载状态

```vue
<template>
  <QButton :loading="loading" @click="handleSubmit"> 提交 </QButton>
</template>

<script setup lang="ts">
import { ref } from "vue";

const loading = ref(false);

const handleSubmit = async () => {
  loading.value = true;
  try {
    await submitForm();
  } finally {
    loading.value = false;
  }
};
</script>
```

#### API 参数

| 参数     | 类型                                                           | 默认值      | 说明     |
| -------- | -------------------------------------------------------------- | ----------- | -------- |
| type     | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` | 按钮类型 |
| size     | `'small' \| 'medium' \| 'large'`                               | `'medium'`  | 按钮尺寸 |
| loading  | `boolean`                                                      | `false`     | 加载状态 |
| disabled | `boolean`                                                      | `false`     | 禁用状态 |
| ghost    | `boolean`                                                      | `false`     | 幽灵按钮 |
| block    | `boolean`                                                      | `false`     | 块级按钮 |
| htmlType | `'button' \| 'submit' \| 'reset'`                              | `'button'`  | 原生类型 |

#### 事件

| 事件名 | 说明     | 参数                          |
| ------ | -------- | ----------------------------- |
| click  | 点击事件 | `(event: MouseEvent) => void` |

---

### QTable - 表格组件

表格用于展示结构化数据，支持排序、筛选、分页等功能。

#### 基础用法

```vue
<template>
  <QTable
    :columns="columns"
    :data="tableData"
    :loading="loading"
    :pagination="pagination"
    @change="handleTableChange"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TableColumn, TablePagination } from "@repo/components";

interface User {
  id: string;
  name: string;
  email: string;
  status: string;
  createdAt: string;
}

const columns: TableColumn<User>[] = [
  {
    key: "name",
    title: "姓名",
    dataIndex: "name",
    sorter: true,
  },
  {
    key: "email",
    title: "邮箱",
    dataIndex: "email",
  },
  {
    key: "status",
    title: "状态",
    dataIndex: "status",
    render: (value) => {
      const statusMap = {
        active: { text: "活跃", color: "success" },
        inactive: { text: "非活跃", color: "warning" },
      };
      const status = statusMap[value];
      return `<QTag color="${status.color}">${status.text}</QTag>`;
    },
  },
  {
    key: "actions",
    title: "操作",
    render: (_, record) => `
      <QButton size="small" @click="handleEdit('${record.id}')">编辑</QButton>
      <QButton size="small" type="danger" @click="handleDelete('${record.id}')">删除</QButton>
    `,
  },
];

const tableData = ref<User[]>([]);
const loading = ref(false);
const pagination = ref<TablePagination>({
  current: 1,
  pageSize: 10,
  total: 0,
});

const handleTableChange = (newPagination: TablePagination) => {
  pagination.value = newPagination;
  fetchData();
};
</script>
```

#### 选择功能

```vue
<template>
  <QTable
    :columns="columns"
    :data="tableData"
    :row-selection="rowSelection"
    @select="handleSelect"
    @select-all="handleSelectAll"
  />
</template>

<script setup lang="ts">
const selectedRowKeys = ref<string[]>([]);

const rowSelection = {
  selectedRowKeys: selectedRowKeys.value,
  onChange: (keys: string[]) => {
    selectedRowKeys.value = keys;
  },
};
</script>
```

---

### QModal - 弹窗组件

弹窗用于在当前页面上显示临时内容。

#### 基础用法

```vue
<template>
  <div>
    <QButton @click="showModal = true">打开弹窗</QButton>

    <QModal
      v-model:visible="showModal"
      title="用户信息"
      width="600px"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <QForm :model="formData" :rules="rules">
        <QFormItem label="用户名" name="username">
          <QInput v-model:value="formData.username" />
        </QFormItem>
        <QFormItem label="邮箱" name="email">
          <QInput v-model:value="formData.email" />
        </QFormItem>
      </QForm>
    </QModal>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const showModal = ref(false);
const formData = reactive({
  username: "",
  email: "",
});

const rules = {
  username: [{ required: true, message: "请输入用户名" }],
  email: [
    { required: true, message: "请输入邮箱" },
    { type: "email", message: "邮箱格式不正确" },
  ],
};

const handleOk = () => {
  // 表单验证和提交逻辑
  showModal.value = false;
};

const handleCancel = () => {
  showModal.value = false;
};
</script>
```

---

## 🎯 最佳实践

### 组件命名

```vue
<!-- ✅ 推荐 - 使用 Q 前缀 -->
<QButton type="primary">按钮</QButton>
<QTable :columns="columns" :data="data" />

<!-- ❌ 不推荐 - 直接使用原生标签名 -->
<Button>按钮</Button>
<Table />
```

### 属性传递

```vue
<!-- ✅ 推荐 - 明确的属性类型 -->
<QButton
  :loading="isLoading"
  :disabled="!canSubmit"
  type="primary"
  size="large"
>
  提交
</QButton>

<!-- ❌ 不推荐 - 模糊的属性值 -->
<QButton loading disabled>提交</QButton>
```

### 事件处理

```vue
<template>
  <!-- ✅ 推荐 - 明确的事件处理函数 -->
  <QButton @click="handleSubmit">提交</QButton>
  <QTable @change="handleTableChange" />

  <!-- ❌ 不推荐 - 内联复杂逻辑 -->
  <QButton
    @click="
      loading = true;
      submitForm().finally(() => (loading = false));
    "
  >
    提交
  </QButton>
</template>
```

### 样式定制

```vue
<template>
  <!-- ✅ 推荐 - 使用 CSS 变量 -->
  <QButton class="custom-button">自定义按钮</QButton>
</template>

<style scoped>
.custom-button {
  --q-color-primary: #722ed1;
  --q-color-primary-hover: #9254de;
}
</style>
```

---

## 🔧 开发指南

### 创建新组件

1. **组件目录结构**

```
packages/components/src/button/
├── Button.vue          # 组件实现
├── index.ts           # 组件导出
├── types.ts           # 类型定义
├── Button.test.ts     # 单元测试
└── README.md          # 组件文档
```

2. **组件模板**

```vue
<!-- Button.vue -->
<template>
  <button
    :class="buttonClass"
    :disabled="disabled || loading"
    :type="htmlType"
    @click="handleClick"
  >
    <QIcon v-if="loading" name="loading" spin />
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ButtonProps, ButtonEmits } from "./types";

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "default",
  size: "medium",
  htmlType: "button",
});

const emit = defineEmits<ButtonEmits>();

const buttonClass = computed(() => [
  "q-button",
  `q-button--${props.type}`,
  `q-button--${props.size}`,
  {
    "q-button--loading": props.loading,
    "q-button--disabled": props.disabled,
    "q-button--ghost": props.ghost,
    "q-button--block": props.block,
  },
]);

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit("click", event);
  }
};
</script>
```

3. **类型定义**

```typescript
// types.ts
export interface ButtonProps {
  type?: "default" | "primary" | "success" | "warning" | "danger";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  block?: boolean;
  htmlType?: "button" | "submit" | "reset";
}

export interface ButtonEmits {
  click: [event: MouseEvent];
}
```

### 组件测试

```typescript
// Button.test.ts
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Button from "./Button.vue";

describe("Button", () => {
  it("should render correctly", () => {
    const wrapper = mount(Button, {
      slots: {
        default: "Click me",
      },
    });

    expect(wrapper.text()).toBe("Click me");
    expect(wrapper.classes()).toContain("q-button");
  });

  it("should emit click event", async () => {
    const wrapper = mount(Button);

    await wrapper.trigger("click");

    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("should not emit click when disabled", async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
    });

    await wrapper.trigger("click");

    expect(wrapper.emitted("click")).toBeFalsy();
  });
});
```

---

## 📚 相关资源

### 设计资源

- [Figma 设计稿](https://figma.com/qiyun-design-system)
- [Sketch 组件库](https://sketch.com/qiyun-components)
- [图标库](https://icons.qiyun.com)

### 开发工具

- [组件开发脚手架](https://github.com/qiyun/component-cli)
- [Storybook 文档](https://storybook.qiyun.com)
- [组件测试工具](https://github.com/qiyun/component-test-utils)

### 社区资源

- [组件库 GitHub](https://github.com/qiyun/components)
- [问题反馈](https://github.com/qiyun/components/issues)
- [更新日志](https://github.com/qiyun/components/releases)

---

## 🔗 相关文档

- [快速开始](../guide/getting-started.md)
- [开发指南](../guide/development.md)
- [主题定制](./theming.md)
- [国际化](./i18n.md)
