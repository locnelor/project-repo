# 组件

## 概述

Qiyun-Repo 项目采用组件化开发模式，通过 `packages/components` 包提供统一的组件库，支持多应用共享，确保 UI 的一致性和可维护性。

## 组件库架构

### 技术栈

- **框架**: Vue 3 + TypeScript
- **构建工具**: Vite + Rollup
- **样式方案**: TailwindCSS + CSS Variables
- **图标库**: Ant Design Icons
- **测试框架**: Vitest + Vue Test Utils
- **文档工具**: Storybook

### 项目结构

```
packages/components/
├── src/                    # 源代码
│   ├── basic/             # 基础组件
│   │   ├── Button/        # 按钮组件
│   │   │   ├── index.ts   # 组件入口
│   │   │   ├── Button.vue # 组件实现
│   │   │   ├── types.ts   # 类型定义
│   │   │   └── __tests__/ # 测试文件
│   │   ├── Input/         # 输入框组件
│   │   ├── Modal/         # 模态框组件
│   │   ├── Table/         # 表格组件
│   │   └── index.ts       # 基础组件导出
│   ├── business/          # 业务组件
│   │   ├── UserSelect/    # 用户选择器
│   │   ├── DataTable/     # 数据表格
│   │   ├── FormBuilder/   # 表单构建器
│   │   ├── FileUpload/    # 文件上传
│   │   └── index.ts       # 业务组件导出
│   ├── layout/            # 布局组件
│   │   ├── Header/        # 头部组件
│   │   ├── Sidebar/       # 侧边栏组件
│   │   ├── Footer/        # 底部组件
│   │   ├── Container/     # 容器组件
│   │   └── index.ts       # 布局组件导出
│   ├── effects/           # 特效组件
│   │   ├── Loading/       # 加载动画
│   │   ├── Transition/    # 过渡动画
│   │   ├── Particles/     # 粒子效果
│   │   └── index.ts       # 特效组件导出
│   ├── charts/            # 图表组件
│   │   ├── LineChart/     # 折线图
│   │   ├── BarChart/      # 柱状图
│   │   ├── PieChart/      # 饼图
│   │   └── index.ts       # 图表组件导出
│   ├── composables/       # 组合式函数
│   │   ├── useTheme.ts    # 主题相关
│   │   ├── useModal.ts    # 模态框相关
│   │   └── index.ts       # 组合函数导出
│   ├── utils/             # 工具函数
│   │   ├── dom.ts         # DOM 操作
│   │   ├── style.ts       # 样式工具
│   │   └── index.ts       # 工具函数导出
│   ├── types/             # 类型定义
│   │   ├── component.ts   # 组件类型
│   │   ├── theme.ts       # 主题类型
│   │   └── index.ts       # 类型导出
│   └── index.ts           # 组件库入口
├── styles/                # 样式文件
│   ├── base/              # 基础样式
│   │   ├── reset.scss     # 样式重置
│   │   ├── variables.scss # CSS 变量
│   │   └── typography.scss # 字体样式
│   ├── components/        # 组件样式
│   │   ├── button.scss    # 按钮样式
│   │   ├── input.scss     # 输入框样式
│   │   └── modal.scss     # 模态框样式
│   ├── themes/            # 主题样式
│   │   ├── light.scss     # 浅色主题
│   │   ├── dark.scss      # 深色主题
│   │   └── variables.scss # 主题变量
│   └── index.scss         # 样式入口
├── docs/                  # 组件文档
│   ├── .storybook/        # Storybook 配置
│   ├── stories/           # 组件故事
│   └── README.md          # 文档说明
├── __tests__/             # 测试文件
├── dist/                  # 构建输出
├── package.json           # 包配置
├── vite.config.ts         # Vite 配置
├── tsconfig.json          # TypeScript 配置
└── README.md              # 使用说明
```

## 基础组件

### 按钮组件 (Button)

```vue
<!-- packages/components/src/basic/Button/Button.vue -->
<template>
  <button
    :class="buttonClass"
    :disabled="disabled || loading"
    :type="htmlType"
    @click="handleClick"
  >
    <QIcon v-if="loading" name="LoadingOutlined" class="animate-spin mr-2" />
    <QIcon v-else-if="icon" :name="icon" class="mr-2" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { QIcon } from "../Icon";
import type { ButtonProps, ButtonEmits } from "./types";

defineOptions({
  name: "QButton",
});

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "default",
  size: "medium",
  htmlType: "button",
  disabled: false,
  loading: false,
  block: false,
  ghost: false,
  danger: false,
});

const emit = defineEmits<ButtonEmits>();

const buttonClass = computed(() => {
  const baseClass =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const typeClass = {
    primary: "bg-primary text-white hover:bg-primary-dark focus:ring-primary",
    default:
      "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-primary",
    dashed:
      "bg-white text-gray-700 border border-dashed border-gray-300 hover:bg-gray-50 focus:ring-primary",
    text: "text-primary hover:bg-primary-light focus:ring-primary",
    link: "text-primary hover:text-primary-dark underline focus:ring-primary",
  };

  const sizeClass = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const stateClass = {
    disabled: "opacity-50 cursor-not-allowed",
    loading: "cursor-wait",
    block: "w-full",
    ghost: "bg-transparent",
    danger:
      props.type === "primary"
        ? "bg-red-500 hover:bg-red-600"
        : "text-red-500 hover:text-red-600",
  };

  return [
    baseClass,
    typeClass[props.type],
    sizeClass[props.size],
    props.disabled && stateClass.disabled,
    props.loading && stateClass.loading,
    props.block && stateClass.block,
    props.ghost && stateClass.ghost,
    props.danger && stateClass.danger,
  ]
    .filter(Boolean)
    .join(" ");
});

const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) return;
  emit("click", event);
};
</script>
```

```typescript
// packages/components/src/basic/Button/types.ts

export interface ButtonProps {
  type?: "primary" | "default" | "dashed" | "text" | "link";
  size?: "small" | "medium" | "large";
  htmlType?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
  ghost?: boolean;
  danger?: boolean;
  icon?: string;
}

export interface ButtonEmits {
  click: [event: MouseEvent];
}
```

### 输入框组件 (Input)

```vue
<!-- packages/components/src/basic/Input/Input.vue -->
<template>
  <div :class="wrapperClass">
    <label
      v-if="label"
      :for="inputId"
      class="block text-sm font-medium text-gray-700 mb-1"
    >
      {{ label }}
      <span v-if="required" class="text-red-500 ml-1">*</span>
    </label>

    <div class="relative">
      <div
        v-if="prefix || $slots.prefix"
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <slot name="prefix">
          <QIcon v-if="prefix" :name="prefix" class="text-gray-400" />
        </slot>
      </div>

      <input
        :id="inputId"
        ref="inputRef"
        :class="inputClass"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        :minlength="minlength"
        :autocomplete="autocomplete"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
      />

      <div
        v-if="suffix || $slots.suffix || clearable || showPassword"
        class="absolute inset-y-0 right-0 pr-3 flex items-center"
      >
        <QIcon
          v-if="clearable && modelValue && !disabled"
          name="CloseCircleFilled"
          class="text-gray-400 hover:text-gray-600 cursor-pointer"
          @click="handleClear"
        />
        <QIcon
          v-else-if="showPassword && type === 'password'"
          :name="passwordVisible ? 'EyeInvisibleOutlined' : 'EyeOutlined'"
          class="text-gray-400 hover:text-gray-600 cursor-pointer ml-2"
          @click="togglePasswordVisible"
        />
        <slot name="suffix">
          <QIcon v-if="suffix" :name="suffix" class="text-gray-400" />
        </slot>
      </div>
    </div>

    <div v-if="error || $slots.error" class="mt-1 text-sm text-red-600">
      <slot name="error">{{ error }}</slot>
    </div>

    <div v-if="help || $slots.help" class="mt-1 text-sm text-gray-500">
      <slot name="help">{{ help }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from "vue";
import { QIcon } from "../Icon";
import type { InputProps, InputEmits } from "./types";

defineOptions({
  name: "QInput",
});

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  size: "medium",
  disabled: false,
  readonly: false,
  clearable: false,
  showPassword: false,
  autocomplete: "off",
});

const emit = defineEmits<InputEmits>();

const inputRef = ref<HTMLInputElement>();
const focused = ref(false);
const passwordVisible = ref(false);

const inputId = computed(
  () => props.id || `input-${Math.random().toString(36).substr(2, 9)}`,
);

const wrapperClass = computed(() => {
  return [
    "q-input",
    props.size && `q-input--${props.size}`,
    props.disabled && "q-input--disabled",
    focused.value && "q-input--focused",
    props.error && "q-input--error",
  ]
    .filter(Boolean)
    .join(" ");
});

const inputClass = computed(() => {
  const baseClass =
    "block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary";

  const sizeClass = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-3 py-2 text-base",
    large: "px-4 py-3 text-lg",
  };

  const stateClass = {
    disabled: "bg-gray-50 text-gray-500 cursor-not-allowed",
    error: "border-red-300 focus:border-red-500 focus:ring-red-500",
    prefix: "pl-10",
    suffix: "pr-10",
  };

  return [
    baseClass,
    sizeClass[props.size],
    props.disabled && stateClass.disabled,
    props.error && stateClass.error,
    (props.prefix || props.$slots?.prefix) && stateClass.prefix,
    (props.suffix ||
      props.$slots?.suffix ||
      props.clearable ||
      props.showPassword) &&
      stateClass.suffix,
  ]
    .filter(Boolean)
    .join(" ");
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
  emit("input", target.value, event);
};

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("change", target.value, event);
};

const handleFocus = (event: FocusEvent) => {
  focused.value = true;
  emit("focus", event);
};

const handleBlur = (event: FocusEvent) => {
  focused.value = false;
  emit("blur", event);
};

const handleKeydown = (event: KeyboardEvent) => {
  emit("keydown", event);

  if (event.key === "Enter") {
    emit("pressEnter", event);
  }
};

const handleClear = () => {
  emit("update:modelValue", "");
  emit("clear");
  nextTick(() => {
    inputRef.value?.focus();
  });
};

const togglePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value;
  const input = inputRef.value;
  if (input) {
    input.type = passwordVisible.value ? "text" : "password";
  }
};

const focus = () => {
  inputRef.value?.focus();
};

const blur = () => {
  inputRef.value?.blur();
};

defineExpose({
  focus,
  blur,
  inputRef,
});
</script>
```

## 业务组件

### 用户选择器 (UserSelect)

```vue
<!-- packages/components/src/business/UserSelect/UserSelect.vue -->
<template>
  <QSelect
    v-model="selectedValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :loading="loading"
    :multiple="multiple"
    :allow-clear="allowClear"
    :filter-option="false"
    show-search
    @search="handleSearch"
    @change="handleChange"
  >
    <QSelectOption
      v-for="user in users"
      :key="user.id"
      :value="user.id"
      :label="user.nickname || user.username"
    >
      <div class="flex items-center">
        <QAvatar :src="user.avatar" :size="24" class="mr-2">
          {{ (user.nickname || user.username).charAt(0) }}
        </QAvatar>
        <div>
          <div class="font-medium">{{ user.nickname || user.username }}</div>
          <div class="text-xs text-gray-500">{{ user.email }}</div>
        </div>
      </div>
    </QSelectOption>
  </QSelect>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { QSelect, QSelectOption, QAvatar } from "../..";
import { useUserApi } from "@qiyun/hooks";
import type { UserSelectProps, UserSelectEmits, User } from "./types";

defineOptions({
  name: "QUserSelect",
});

const props = withDefaults(defineProps<UserSelectProps>(), {
  placeholder: "请选择用户",
  disabled: false,
  multiple: false,
  allowClear: true,
});

const emit = defineEmits<UserSelectEmits>();

const selectedValue = ref(props.modelValue);
const users = ref<User[]>([]);
const loading = ref(false);

const { searchUsers } = useUserApi();

const handleSearch = async (keyword: string) => {
  if (!keyword.trim()) {
    users.value = [];
    return;
  }

  loading.value = true;
  try {
    const result = await searchUsers(keyword);
    users.value = result.data;
  } catch (error) {
    console.error("搜索用户失败:", error);
    users.value = [];
  } finally {
    loading.value = false;
  }
};

const handleChange = (value: string | string[]) => {
  selectedValue.value = value;
  emit("update:modelValue", value);
  emit("change", value);
};

watch(
  () => props.modelValue,
  (newValue) => {
    selectedValue.value = newValue;
  },
);

onMounted(() => {
  // 如果有初始值，加载对应的用户信息
  if (props.modelValue) {
    // 这里可以调用 API 获取用户详情
  }
});
</script>
```

### 数据表格 (DataTable)

```vue
<!-- packages/components/src/business/DataTable/DataTable.vue -->
<template>
  <div class="q-data-table">
    <!-- 表格工具栏 -->
    <div v-if="showToolbar" class="mb-4 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <slot name="toolbar-left">
          <QButton v-if="showRefresh" type="default" @click="handleRefresh">
            <QIcon name="ReloadOutlined" />
            刷新
          </QButton>
        </slot>
      </div>

      <div class="flex items-center space-x-2">
        <slot name="toolbar-right">
          <QButton
            v-if="showColumnSetting"
            type="default"
            @click="showColumnModal = true"
          >
            <QIcon name="SettingOutlined" />
            列设置
          </QButton>
        </slot>
      </div>
    </div>

    <!-- 表格主体 -->
    <QTable
      :columns="visibleColumns"
      :data-source="dataSource"
      :loading="loading"
      :pagination="paginationConfig"
      :row-selection="rowSelection"
      :scroll="scroll"
      @change="handleTableChange"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </QTable>

    <!-- 列设置模态框 -->
    <QModal
      v-model:visible="showColumnModal"
      title="列设置"
      width="500px"
      @ok="handleColumnSave"
    >
      <div class="space-y-2">
        <div
          v-for="column in columns"
          :key="column.key"
          class="flex items-center justify-between p-2 border rounded"
        >
          <div class="flex items-center">
            <QCheckbox
              :checked="!hiddenColumns.includes(column.key)"
              @change="(checked) => toggleColumn(column.key, checked)"
            />
            <span class="ml-2">{{ column.title }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <QButton
              size="small"
              type="text"
              @click="moveColumn(column.key, 'up')"
            >
              <QIcon name="UpOutlined" />
            </QButton>
            <QButton
              size="small"
              type="text"
              @click="moveColumn(column.key, 'down')"
            >
              <QIcon name="DownOutlined" />
            </QButton>
          </div>
        </div>
      </div>
    </QModal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { QTable, QButton, QIcon, QModal, QCheckbox } from "../..";
import type { DataTableProps, DataTableEmits, TableColumn } from "./types";

defineOptions({
  name: "QDataTable",
});

const props = withDefaults(defineProps<DataTableProps>(), {
  showToolbar: true,
  showRefresh: true,
  showColumnSetting: true,
  pagination: true,
});

const emit = defineEmits<DataTableEmits>();

const showColumnModal = ref(false);
const hiddenColumns = ref<string[]>([]);
const columnOrder = ref<string[]>([]);

const visibleColumns = computed(() => {
  const orderedColumns =
    columnOrder.value.length > 0
      ? columnOrder.value
          .map((key) => props.columns.find((col) => col.key === key))
          .filter(Boolean)
      : props.columns;

  return orderedColumns.filter(
    (column) => !hiddenColumns.value.includes(column.key),
  );
});

const paginationConfig = computed(() => {
  if (!props.pagination) return false;

  return {
    current: props.pagination.current || 1,
    pageSize: props.pagination.pageSize || 20,
    total: props.pagination.total || 0,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total: number, range: [number, number]) =>
      `第 ${range[0]}-${range[1]} 条/共 ${total} 条`,
    ...props.pagination,
  };
});

const handleTableChange = (pagination: any, filters: any, sorter: any) => {
  emit("change", { pagination, filters, sorter });
};

const handleRefresh = () => {
  emit("refresh");
};

const toggleColumn = (key: string, checked: boolean) => {
  if (checked) {
    hiddenColumns.value = hiddenColumns.value.filter((k) => k !== key);
  } else {
    hiddenColumns.value.push(key);
  }
};

const moveColumn = (key: string, direction: "up" | "down") => {
  const currentOrder =
    columnOrder.value.length > 0
      ? columnOrder.value
      : props.columns.map((col) => col.key);

  const index = currentOrder.indexOf(key);
  if (index === -1) return;

  const newOrder = [...currentOrder];
  if (direction === "up" && index > 0) {
    [newOrder[index], newOrder[index - 1]] = [
      newOrder[index - 1],
      newOrder[index],
    ];
  } else if (direction === "down" && index < newOrder.length - 1) {
    [newOrder[index], newOrder[index + 1]] = [
      newOrder[index + 1],
      newOrder[index],
    ];
  }

  columnOrder.value = newOrder;
};

const handleColumnSave = () => {
  showColumnModal.value = false;
  emit("columnChange", {
    hiddenColumns: hiddenColumns.value,
    columnOrder: columnOrder.value,
  });
};

// 初始化列顺序
watch(
  () => props.columns,
  (newColumns) => {
    if (columnOrder.value.length === 0) {
      columnOrder.value = newColumns.map((col) => col.key);
    }
  },
  { immediate: true },
);
</script>
```

## 图表组件

### 折线图组件 (LineChart)

```vue
<!-- packages/components/src/charts/LineChart/LineChart.vue -->
<template>
  <div ref="chartRef" :style="{ width, height }" class="q-line-chart" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from "vue";
import * as echarts from "echarts";
import type { LineChartProps, LineChartEmits } from "./types";

defineOptions({
  name: "QLineChart",
});

const props = withDefaults(defineProps<LineChartProps>(), {
  width: "100%",
  height: "400px",
  theme: "light",
  smooth: false,
  showSymbol: true,
  showArea: false,
});

const emit = defineEmits<LineChartEmits>();

const chartRef = ref<HTMLDivElement>();
let chartInstance: echarts.ECharts | null = null;

const initChart = () => {
  if (!chartRef.value) return;

  chartInstance = echarts.init(chartRef.value, props.theme);

  const option = {
    title: props.title
      ? {
          text: props.title,
          left: "center",
        }
      : undefined,

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },

    legend: {
      data: props.data.map((item) => item.name),
      top: props.title ? 40 : 10,
    },

    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: props.xAxisData,
    },

    yAxis: {
      type: "value",
    },

    series: props.data.map((item) => ({
      name: item.name,
      type: "line",
      smooth: props.smooth,
      showSymbol: props.showSymbol,
      areaStyle: props.showArea ? {} : undefined,
      data: item.data,
      ...item.config,
    })),
  };

  chartInstance.setOption(option);

  // 绑定事件
  chartInstance.on("click", (params) => {
    emit("click", params);
  });

  chartInstance.on("legendselectchanged", (params) => {
    emit("legendChange", params);
  });
};

const updateChart = () => {
  if (!chartInstance) return;

  const option = {
    xAxis: {
      data: props.xAxisData,
    },
    series: props.data.map((item) => ({
      name: item.name,
      data: item.data,
      ...item.config,
    })),
  };

  chartInstance.setOption(option);
};

const resizeChart = () => {
  if (chartInstance) {
    chartInstance.resize();
  }
};

onMounted(() => {
  nextTick(() => {
    initChart();
  });

  window.addEventListener("resize", resizeChart);
});

onUnmounted(() => {
  if (chartInstance) {
    chartInstance.dispose();
    chartInstance = null;
  }

  window.removeEventListener("resize", resizeChart);
});

watch(
  () => [props.data, props.xAxisData],
  () => {
    updateChart();
  },
  { deep: true },
);

watch(
  () => props.theme,
  () => {
    if (chartInstance) {
      chartInstance.dispose();
      initChart();
    }
  },
);

defineExpose({
  chartInstance,
  resizeChart,
});
</script>
```

## 组合式函数

### 主题管理 (useTheme)

```typescript
// packages/components/src/composables/useTheme.ts

import { ref, computed, watch } from "vue";
import { THEME_TYPES, LIGHT_THEME, DARK_THEME } from "@qiyun/constants";

const currentTheme = ref<string>(THEME_TYPES.LIGHT);
const systemTheme = ref<string>(THEME_TYPES.LIGHT);

export function useTheme() {
  const isDark = computed(() => {
    if (currentTheme.value === THEME_TYPES.AUTO) {
      return systemTheme.value === THEME_TYPES.DARK;
    }
    return currentTheme.value === THEME_TYPES.DARK;
  });

  const themeConfig = computed(() => {
    return isDark.value ? DARK_THEME : LIGHT_THEME;
  });

  const setTheme = (theme: string) => {
    currentTheme.value = theme;
    updateThemeVariables();

    // 保存到本地存储
    localStorage.setItem("theme", theme);

    // 更新 HTML 类名
    document.documentElement.classList.toggle("dark", isDark.value);
  };

  const toggleTheme = () => {
    const newTheme = isDark.value ? THEME_TYPES.LIGHT : THEME_TYPES.DARK;
    setTheme(newTheme);
  };

  const updateThemeVariables = () => {
    const root = document.documentElement;
    const colors = themeConfig.value.colors;

    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  };

  const detectSystemTheme = () => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    systemTheme.value = mediaQuery.matches
      ? THEME_TYPES.DARK
      : THEME_TYPES.LIGHT;

    mediaQuery.addEventListener("change", (e) => {
      systemTheme.value = e.matches ? THEME_TYPES.DARK : THEME_TYPES.LIGHT;
    });
  };

  const initTheme = () => {
    // 检测系统主题
    detectSystemTheme();

    // 从本地存储读取主题设置
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && Object.values(THEME_TYPES).includes(savedTheme as any)) {
      currentTheme.value = savedTheme;
    }

    // 应用主题
    updateThemeVariables();
    document.documentElement.classList.toggle("dark", isDark.value);
  };

  // 监听主题变化
  watch(
    () => [currentTheme.value, systemTheme.value],
    () => {
      updateThemeVariables();
      document.documentElement.classList.toggle("dark", isDark.value);
    },
  );

  return {
    currentTheme,
    isDark,
    themeConfig,
    setTheme,
    toggleTheme,
    initTheme,
  };
}
```

### 模态框管理 (useModal)

```typescript
// packages/components/src/composables/useModal.ts

import { ref, reactive } from "vue";

interface ModalConfig {
  title?: string;
  content?: string;
  width?: string | number;
  closable?: boolean;
  maskClosable?: boolean;
  keyboard?: boolean;
  centered?: boolean;
  destroyOnClose?: boolean;
}

interface ModalInstance {
  id: string;
  visible: boolean;
  config: ModalConfig;
  resolve?: (value: any) => void;
  reject?: (reason: any) => void;
}

const modals = reactive<Map<string, ModalInstance>>(new Map());

export function useModal() {
  const createModal = (config: ModalConfig = {}): Promise<any> => {
    return new Promise((resolve, reject) => {
      const id = `modal-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

      const modal: ModalInstance = {
        id,
        visible: true,
        config,
        resolve,
        reject,
      };

      modals.set(id, modal);
    });
  };

  const closeModal = (id: string, result?: any) => {
    const modal = modals.get(id);
    if (modal) {
      modal.visible = false;
      if (modal.resolve) {
        modal.resolve(result);
      }

      // 延迟删除，等待动画完成
      setTimeout(() => {
        modals.delete(id);
      }, 300);
    }
  };

  const cancelModal = (id: string, reason?: any) => {
    const modal = modals.get(id);
    if (modal) {
      modal.visible = false;
      if (modal.reject) {
        modal.reject(reason);
      }

      setTimeout(() => {
        modals.delete(id);
      }, 300);
    }
  };

  const confirm = (
    config: ModalConfig & { onOk?: () => void; onCancel?: () => void },
  ) => {
    return createModal({
      title: "确认",
      content: "确定要执行此操作吗？",
      ...config,
    });
  };

  const info = (config: ModalConfig) => {
    return createModal({
      title: "信息",
      ...config,
    });
  };

  const success = (config: ModalConfig) => {
    return createModal({
      title: "成功",
      ...config,
    });
  };

  const error = (config: ModalConfig) => {
    return createModal({
      title: "错误",
      ...config,
    });
  };

  const warning = (config: ModalConfig) => {
    return createModal({
      title: "警告",
      ...config,
    });
  };

  return {
    modals,
    createModal,
    closeModal,
    cancelModal,
    confirm,
    info,
    success,
    error,
    warning,
  };
}
```

## 组件测试

### 测试配置

```typescript
// packages/components/vitest.config.ts

import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/__tests__/setup.ts"],
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
```

### 测试示例

```typescript
// packages/components/src/basic/Button/__tests__/Button.test.ts

import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "../Button.vue";

describe("Button", () => {
  it("renders correctly", () => {
    const wrapper = mount(Button, {
      slots: {
        default: "Click me",
      },
    });

    expect(wrapper.text()).toBe("Click me");
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("emits click event", async () => {
    const wrapper = mount(Button);

    await wrapper.find("button").trigger("click");

    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("disables button when disabled prop is true", () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
    });

    expect(wrapper.find("button").attributes("disabled")).toBeDefined();
  });

  it("shows loading state", () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
      },
    });

    expect(wrapper.find(".animate-spin").exists()).toBe(true);
  });

  it("applies correct type class", () => {
    const wrapper = mount(Button, {
      props: {
        type: "primary",
      },
    });

    expect(wrapper.find("button").classes()).toContain("bg-primary");
  });
});
```

## 构建配置

### Vite 配置

```typescript
// packages/components/vite.config.ts

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
  ],

  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "QiyunComponents",
      fileName: (format) => `qiyun-components.${format}.js`,
      formats: ["es", "umd"],
    },

    rollupOptions: {
      external: ["vue", "@qiyun/utils", "@qiyun/constants"],
      output: {
        globals: {
          vue: "Vue",
          "@qiyun/utils": "QiyunUtils",
          "@qiyun/constants": "QiyunConstants",
        },
      },
    },

    cssCodeSplit: true,
    sourcemap: true,
  },

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
```

## 使用方法

### 1. 安装依赖

```bash
# 在应用中安装组件库
pnpm add @qiyun/components
```

### 2. 全局注册

```typescript
// apps/admin/src/main.ts

import { createApp } from "vue";
import QiyunComponents from "@qiyun/components";
import "@qiyun/components/dist/style.css";
import App from "./App.vue";

const app = createApp(App);

app.use(QiyunComponents);

app.mount("#app");
```

### 3. 按需导入

```vue
<template>
  <div>
    <QButton type="primary" @click="handleClick"> 点击我 </QButton>

    <QInput v-model="inputValue" placeholder="请输入内容" clearable />

    <QUserSelect v-model="selectedUser" placeholder="选择用户" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { QButton, QInput, QUserSelect } from "@qiyun/components";

const inputValue = ref("");
const selectedUser = ref("");

const handleClick = () => {
  console.log("Button clicked!");
};
</script>
```

### 4. 主题定制

```scss
// apps/admin/src/styles/theme.scss

:root {
  --color-primary: #1890ff;
  --color-success: #52c41a;
  --color-warning: #faad14;
  --color-error: #ff4d4f;
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #000000;
  --color-text-secondary: #666666;
  --color-border: #d9d9d9;
}

.dark {
  --color-primary: #1890ff;
  --color-success: #52c41a;
  --color-warning: #faad14;
  --color-error: #ff4d4f;
  --color-background: #141414;
  --color-surface: #1f1f1f;
  --color-text: #ffffff;
  --color-text-secondary: #a6a6a6;
  --color-border: #434343;
}
```

## 最佳实践

### 1. 组件设计原则

- **单一职责**: 每个组件只负责一个功能
- **可复用性**: 设计通用的、可配置的组件
- **可扩展性**: 提供插槽和事件支持自定义
- **一致性**: 保持 API 和样式的一致性

### 2. 性能优化

- 使用 `v-memo` 优化列表渲染
- 合理使用 `v-show` 和 `v-if`
- 避免在模板中使用复杂计算
- 使用异步组件减少初始包大小

### 3. 可访问性

- 提供适当的 ARIA 属性
- 支持键盘导航
- 确保颜色对比度符合标准
- 提供屏幕阅读器支持

### 4. 文档和测试

- 为每个组件编写详细文档
- 提供使用示例和最佳实践
- 编写全面的单元测试
- 使用 Storybook 展示组件

## 相关资源

- [Vue 3 官方文档](https://vuejs.org/)
- [Ant Design Vue](https://antdv.com/)
- [TailwindCSS 文档](https://tailwindcss.com/)
- [Vitest 测试框架](https://vitest.dev/)
- [Storybook 文档](https://storybook.js.org/)
- [组件文档](/guide/intro/components)
- [样式系统](/guide/modules/styles)
