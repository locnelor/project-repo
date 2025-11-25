# 图标

## 图标系统概览

Qiyun-Repo 采用统一的图标系统，支持多种图标库，包括 Ant Design Icons、自定义 SVG 图标等，提供一致的图标使用体验。

## Ant Design Icons

### 安装和配置

```bash
# 安装 Ant Design Icons
pnpm add @ant-design/icons-vue
```

### 基础使用

```vue
<template>
  <div>
    <!-- 直接使用图标组件 -->
    <UserOutlined />
    <SettingOutlined />
    <HomeOutlined />

    <!-- 带样式的图标 -->
    <UserOutlined :style="{ fontSize: '16px', color: '#1890ff' }" />

    <!-- 使用 spin 属性 -->
    <LoadingOutlined spin />
  </div>
</template>

<script setup lang="ts">
import {
  UserOutlined,
  SettingOutlined,
  HomeOutlined,
  LoadingOutlined,
} from "@ant-design/icons-vue";
</script>
```

### 按需引入

```typescript
// plugins/icons.ts
import type { App } from "vue";
import {
  UserOutlined,
  SettingOutlined,
  HomeOutlined,
  MenuOutlined,
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  DownloadOutlined,
  UploadOutlined,
  ReloadOutlined,
  CheckOutlined,
  CloseOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
  QuestionCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons-vue";

const icons = {
  UserOutlined,
  SettingOutlined,
  HomeOutlined,
  MenuOutlined,
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  DownloadOutlined,
  UploadOutlined,
  ReloadOutlined,
  CheckOutlined,
  CloseOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
  QuestionCircleOutlined,
  WarningOutlined,
};

export function setupIcons(app: App) {
  Object.keys(icons).forEach((key) => {
    app.component(key, icons[key as keyof typeof icons]);
  });
}

export { icons };
```

### 在 main.ts 中注册

```typescript
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import { setupIcons } from "./plugins/icons";

const app = createApp(App);

// 注册图标
setupIcons(app);

app.mount("#app");
```

## 自定义 SVG 图标

### SVG 图标组件

```vue
<!-- components/Icon/SvgIcon.vue -->
<template>
  <svg
    :class="['svg-icon', className]"
    :style="{ width: size, height: size, color }"
    aria-hidden="true"
  >
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  size?: string;
  color?: string;
  className?: string;
}

withDefaults(defineProps<Props>(), {
  size: "1em",
  color: "currentColor",
  className: "",
});
</script>

<style scoped>
.svg-icon {
  display: inline-block;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
```

### SVG Sprite 自动导入

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

export default defineConfig({
  plugins: [
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",
      // 自定义插入位置
      inject: "body-last",
      // 自定义dom id
      customDomId: "__svg__icons__dom__",
    }),
  ],
});
```

### 图标管理器

```typescript
// utils/iconManager.ts
interface IconInfo {
  name: string;
  category: string;
  tags: string[];
  size?: string;
}

class IconManager {
  private icons: Map<string, IconInfo> = new Map();

  // 注册图标
  register(name: string, info: Omit<IconInfo, "name">) {
    this.icons.set(name, { name, ...info });
  }

  // 获取图标信息
  getIcon(name: string): IconInfo | undefined {
    return this.icons.get(name);
  }

  // 搜索图标
  search(keyword: string): IconInfo[] {
    const results: IconInfo[] = [];

    this.icons.forEach((icon) => {
      if (
        icon.name.includes(keyword) ||
        icon.tags.some((tag) => tag.includes(keyword))
      ) {
        results.push(icon);
      }
    });

    return results;
  }

  // 按分类获取图标
  getByCategory(category: string): IconInfo[] {
    return Array.from(this.icons.values()).filter(
      (icon) => icon.category === category,
    );
  }

  // 获取所有分类
  getCategories(): string[] {
    const categories = new Set<string>();
    this.icons.forEach((icon) => categories.add(icon.category));
    return Array.from(categories);
  }
}

export const iconManager = new IconManager();

// 注册常用图标
iconManager.register("user", {
  category: "user",
  tags: ["用户", "人员", "person"],
});

iconManager.register("setting", {
  category: "system",
  tags: ["设置", "配置", "config"],
});
```

## 通用图标组件

### 统一图标组件

```vue
<!-- components/Icon/Icon.vue -->
<template>
  <component
    :is="iconComponent"
    v-bind="iconProps"
    :class="['app-icon', className]"
    :style="iconStyle"
  />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import SvgIcon from "./SvgIcon.vue";

interface Props {
  name: string;
  type?: "antd" | "svg" | "custom";
  size?: string | number;
  color?: string;
  className?: string;
  spin?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "antd",
  size: "1em",
  color: "currentColor",
  className: "",
  spin: false,
});

// 动态加载 Ant Design 图标
const loadAntdIcon = (name: string) => {
  return defineAsyncComponent(() =>
    import("@ant-design/icons-vue").then((module) => {
      const iconName =
        name.charAt(0).toUpperCase() + name.slice(1) + "Outlined";
      return module[iconName] || module.QuestionCircleOutlined;
    }),
  );
};

const iconComponent = computed(() => {
  switch (props.type) {
    case "svg":
      return SvgIcon;
    case "antd":
      return loadAntdIcon(props.name);
    default:
      return props.name;
  }
});

const iconProps = computed(() => {
  if (props.type === "svg") {
    return {
      name: props.name,
      size: typeof props.size === "number" ? `${props.size}px` : props.size,
      color: props.color,
    };
  }

  return {
    spin: props.spin,
  };
});

const iconStyle = computed(() => {
  if (props.type === "antd") {
    return {
      fontSize: typeof props.size === "number" ? `${props.size}px` : props.size,
      color: props.color,
    };
  }

  return {};
});
</script>

<style scoped>
.app-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
```

### 图标选择器

```vue
<!-- components/Icon/IconPicker.vue -->
<template>
  <div class="icon-picker">
    <a-input
      v-model:value="searchKeyword"
      placeholder="搜索图标"
      class="search-input"
    >
      <template #prefix>
        <SearchOutlined />
      </template>
    </a-input>

    <a-tabs v-model:activeKey="activeCategory" class="icon-tabs">
      <a-tab-pane
        v-for="category in categories"
        :key="category"
        :tab="category"
      >
        <div class="icon-grid">
          <div
            v-for="icon in filteredIcons"
            :key="icon.name"
            :class="['icon-item', { active: selectedIcon === icon.name }]"
            @click="selectIcon(icon.name)"
          >
            <Icon :name="icon.name" :type="iconType" />
            <span class="icon-name">{{ icon.name }}</span>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { SearchOutlined } from "@ant-design/icons-vue";
import Icon from "./Icon.vue";
import { iconManager } from "@/utils/iconManager";

interface Props {
  modelValue?: string;
  iconType?: "antd" | "svg";
}

interface Emits {
  (e: "update:modelValue", value: string): void;
  (e: "select", value: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  iconType: "antd",
});

const emit = defineEmits<Emits>();

const searchKeyword = ref("");
const activeCategory = ref("");
const selectedIcon = ref(props.modelValue);

const categories = computed(() => iconManager.getCategories());

const filteredIcons = computed(() => {
  let icons = activeCategory.value
    ? iconManager.getByCategory(activeCategory.value)
    : Array.from(iconManager.getIcons());

  if (searchKeyword.value) {
    icons = iconManager.search(searchKeyword.value);
  }

  return icons;
});

const selectIcon = (iconName: string) => {
  selectedIcon.value = iconName;
  emit("update:modelValue", iconName);
  emit("select", iconName);
};

// 初始化第一个分类
if (categories.value.length > 0) {
  activeCategory.value = categories.value[0];
}
</script>

<style scoped>
.icon-picker {
  width: 100%;
}

.search-input {
  margin-bottom: 16px;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 8px;
  max-height: 300px;
  overflow-y: auto;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.icon-item:hover {
  border-color: #1890ff;
  background-color: #f0f8ff;
}

.icon-item.active {
  border-color: #1890ff;
  background-color: #e6f7ff;
}

.icon-name {
  margin-top: 4px;
  font-size: 12px;
  text-align: center;
  word-break: break-all;
}
</style>
```

## 图标工具函数

### 图标工具类

```typescript
// utils/iconUtils.ts
export class IconUtils {
  // 获取图标 URL
  static getIconUrl(name: string, type: "svg" | "png" = "svg"): string {
    return `/src/assets/icons/${name}.${type}`;
  }

  // 预加载图标
  static preloadIcon(name: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = this.getIconUrl(name, "png");
    });
  }

  // 批量预加载图标
  static async preloadIcons(names: string[]): Promise<void> {
    const promises = names.map((name) => this.preloadIcon(name));
    await Promise.all(promises);
  }

  // 检查图标是否存在
  static async checkIconExists(name: string): Promise<boolean> {
    try {
      await this.preloadIcon(name);
      return true;
    } catch {
      return false;
    }
  }

  // 获取图标尺寸
  static getIconSize(size: string | number): string {
    if (typeof size === "number") {
      return `${size}px`;
    }

    const sizeMap: Record<string, string> = {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "20px",
      xl: "24px",
      xxl: "32px",
    };

    return sizeMap[size] || size;
  }
}
```

### 图标 Composable

```typescript
// composables/useIcon.ts
import { ref, computed } from "vue";
import { IconUtils } from "@/utils/iconUtils";

export function useIcon() {
  const loadingIcons = ref<Set<string>>(new Set());
  const loadedIcons = ref<Set<string>>(new Set());
  const failedIcons = ref<Set<string>>(new Set());

  const isIconLoading = (name: string) => loadingIcons.value.has(name);
  const isIconLoaded = (name: string) => loadedIcons.value.has(name);
  const isIconFailed = (name: string) => failedIcons.value.has(name);

  const loadIcon = async (name: string) => {
    if (isIconLoaded(name) || isIconFailed(name)) {
      return;
    }

    loadingIcons.value.add(name);

    try {
      await IconUtils.preloadIcon(name);
      loadedIcons.value.add(name);
    } catch {
      failedIcons.value.add(name);
    } finally {
      loadingIcons.value.delete(name);
    }
  };

  const preloadIcons = async (names: string[]) => {
    const promises = names.map((name) => loadIcon(name));
    await Promise.all(promises);
  };

  return {
    loadingIcons: computed(() => Array.from(loadingIcons.value)),
    loadedIcons: computed(() => Array.from(loadedIcons.value)),
    failedIcons: computed(() => Array.from(failedIcons.value)),
    isIconLoading,
    isIconLoaded,
    isIconFailed,
    loadIcon,
    preloadIcons,
  };
}
```

## 图标最佳实践

### 1. 图标命名规范

- 使用语义化的名称
- 保持命名一致性
- 避免使用缩写

```typescript
// 好的命名
"user-add";
"setting-general";
"file-download";

// 不好的命名
"usr-add";
"set-gen";
"dl-file";
```

### 2. 图标尺寸规范

```typescript
// 定义标准尺寸
const ICON_SIZES = {
  xs: 12,
  sm: 14,
  md: 16, // 默认尺寸
  lg: 20,
  xl: 24,
  xxl: 32,
} as const;
```

### 3. 图标颜色规范

```css
/* 使用 CSS 变量定义图标颜色 */
.icon-primary {
  color: var(--color-primary);
}
.icon-success {
  color: var(--color-success);
}
.icon-warning {
  color: var(--color-warning);
}
.icon-error {
  color: var(--color-error);
}
.icon-disabled {
  color: var(--color-text-disabled);
}
```

### 4. 性能优化

- 使用 SVG Sprite 减少 HTTP 请求
- 按需加载图标组件
- 预加载关键图标
- 使用图标字体作为备选方案

### 5. 无障碍访问

```vue
<template>
  <!-- 装饰性图标 -->
  <Icon name="user" aria-hidden="true" />

  <!-- 功能性图标 -->
  <Icon
    name="close"
    :aria-label="$t('common.close')"
    role="button"
    tabindex="0"
  />
</template>
```

## 相关资源

- [Ant Design Icons](https://ant.design/components/icon/)
- [SVG 图标最佳实践](https://css-tricks.com/svg-icon-systems/)
- [组件文档](/guide/intro/components)
- [样式指南](/guide/modules/styles)
