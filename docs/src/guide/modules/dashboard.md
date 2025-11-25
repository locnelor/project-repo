# 大屏

## 概述

Qiyun-Repo 项目的大屏模块 (`packages/dashboard`) 提供了数据可视化大屏的完整解决方案，支持多种图表类型、实时数据更新、响应式布局和主题定制等功能。

## 大屏架构

### 技术栈

- **图表库**: ECharts 5.x
- **3D 图表**: Three.js
- **地图**: 高德地图 API
- **动画**: GSAP
- **布局**: CSS Grid + Flexbox
- **数据流**: WebSocket + EventSource
- **工具库**: Lodash-es, Day.js
- **类型支持**: TypeScript

### 项目结构

```
packages/dashboard/
├── src/                    # 源代码
│   ├── components/        # 大屏组件
│   │   ├── charts/        # 图表组件
│   │   │   ├── line/      # 折线图
│   │   │   ├── bar/       # 柱状图
│   │   │   ├── pie/       # 饼图
│   │   │   ├── map/       # 地图
│   │   │   ├── gauge/     # 仪表盘
│   │   │   ├── radar/     # 雷达图
│   │   │   ├── scatter/   # 散点图
│   │   │   ├── heatmap/   # 热力图
│   │   │   └── index.ts   # 图表导出
│   │   ├── widgets/       # 小部件
│   │   │   ├── counter/   # 数字计数器
│   │   │   ├── progress/  # 进度条
│   │   │   ├── ranking/   # 排行榜
│   │   │   ├── calendar/  # 日历
│   │   │   ├── clock/     # 时钟
│   │   │   └── index.ts   # 小部件导出
│   │   ├── layouts/       # 布局组件
│   │   │   ├── grid/      # 网格布局
│   │   │   ├── flex/      # 弹性布局
│   │   │   ├── absolute/  # 绝对定位
│   │   │   └── index.ts   # 布局导出
│   │   ├── decorations/   # 装饰组件
│   │   │   ├── border/    # 边框
│   │   │   ├── background/# 背景
│   │   │   ├── particle/  # 粒子效果
│   │   │   └── index.ts   # 装饰导出
│   │   └── index.ts       # 组件总导出
│   ├── composables/       # 组合式函数
│   │   ├── useChart.ts    # 图表管理
│   │   ├── useResize.ts   # 响应式处理
│   │   ├── useWebSocket.ts# WebSocket 连接
│   │   ├── useAnimation.ts# 动画控制
│   │   ├── useTheme.ts    # 主题管理
│   │   └── index.ts       # Composables 导出
│   ├── utils/             # 工具函数
│   │   ├── chart.ts       # 图表工具
│   │   ├── color.ts       # 颜色处理
│   │   ├── format.ts      # 数据格式化
│   │   ├── animation.ts   # 动画工具
│   │   └── index.ts       # 工具导出
│   ├── themes/            # 主题配置
│   │   ├── dark.ts        # 暗色主题
│   │   ├── light.ts       # 亮色主题
│   │   ├── blue.ts        # 蓝色主题
│   │   ├── green.ts       # 绿色主题
│   │   └── index.ts       # 主题导出
│   ├── types/             # 类型定义
│   │   ├── chart.ts       # 图表类型
│   │   ├── widget.ts      # 小部件类型
│   │   ├── layout.ts      # 布局类型
│   │   ├── theme.ts       # 主题类型
│   │   └── index.ts       # 类型导出
│   └── index.ts           # 大屏库入口
├── __tests__/             # 测试文件
├── dist/                  # 构建输出
├── package.json           # 包配置
├── vite.config.ts         # Vite 配置
├── tsconfig.json          # TypeScript 配置
└── README.md              # 使用说明
```

## 核心组件

### 图表组件

#### 折线图 (LineChart)

```vue
<!-- packages/dashboard/src/components/charts/line/LineChart.vue -->

<template>
  <div ref="chartRef" class="line-chart" :style="{ width, height }"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as echarts from 'echarts'
import { useChart } from '../../../composables/useChart'
import { useResize } from '../../../composables/useResize'
import type { LineChartOptions, ChartData } from '../../../types'

interface Props {
  data: ChartData[]
  options?: LineChartOptions
  width?: string
  height?: string
  theme?: string
  autoResize?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '400px',
  theme: 'dark',
  autoResize: true,
})

const emit = defineEmits<{
  click: [params: any]
  legendselectchanged: [params: any]
  datazoom: [params: any]
}>()

const chartRef = ref<HTMLElement>()
const { chart, initChart, updateChart, disposeChart } = useChart()
const { onResize } = useResize()

// 默认配置
const defaultOptions: LineChartOptions = {
  grid: {
    top: '10%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  legend: {
    data: [],
    textStyle: {
      color: '#fff',
    },
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [],
    axisLine: {
      lineStyle: {
        color: '#4a5568',
      },
    },
    axisLabel: {
      color: '#a0aec0',
    },
  },
  yAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#4a5568',
      },
    },
    axisLabel: {
      color: '#a0aec0',
    },
    splitLine: {
      lineStyle: {
        color: '#2d3748',
      },
    },
  },
  series: [],
}

// 处理数据
const processData = (data: ChartData[]) => {
  if (!data || data.length === 0) return defaultOptions

  const categories = [...new Set(data.map(item => item.category))]
  const series = [...new Set(data.map(item => item.series))]

  const xAxisData = categories
  const seriesData = series.map(seriesName => {
    const seriesItems = data.filter(item => item.series === seriesName)
    const values = categories.map(category => {
      const item = seriesItems.find(si => si.category === category)
      return item ? item.value : 0
    })

    return {
      name: seriesName,
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 6,
      lineStyle: {
        width: 2,
      },
      areaStyle: {
        opacity: 0.1,
      },
      data: values,
    }
  })

  return {
    ...defaultOptions,
    legend: {
      ...defaultOptions.legend,
      data: series,
    },
    xAxis: {
      ...defaultOptions.xAxis,
      data: xAxisData,
    },
    series: seriesData,
  }
}

// 初始化图表
onMounted(() => {
  if (chartRef.value) {
    initChart(chartRef.value, props.theme)
    
    // 绑定事件
    chart.value?.on('click', (params) => emit('click', params))
    chart.value?.on('legendselectchanged', (params) => emit('legendselectchanged', params))
    chart.value?.on('datazoom', (params) => emit('datazoom', params))
    
    // 更新图表
    updateChart()
    
    // 自动调整大小
    if (props.autoResize) {
      onResize(() => chart.value?.resize())
    }
  }
})

// 监听数据变化
watch([() => props.data, () => props.options], updateChart, { deep: true })

// 更新图表配置
function updateChart() {
  if (!chart.value) return
  
  const processedData = processData(props.data)
  const finalOptions = {
    ...processedData,
    ...props.options,
  }
  
  chart.value.setOption(finalOptions, true)
}

// 清理
onUnmounted(() => {
  disposeChart()
})

// 暴露方法
defineExpose({
  chart,
  updateChart,
  getDataURL: () => chart.value?.getDataURL(),
  resize: () => chart.value?.resize(),
})
</script>

<style scoped>
.line-chart {
  position: relative;
}
</style>
```

#### 柱状图 (BarChart)

```vue
<!-- packages/dashboard/src/components/charts/bar/BarChart.vue -->

<template>
  <div ref="chartRef" class="bar-chart" :style="{ width, height }"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useChart } from '../../../composables/useChart'
import { useResize } from '../../../composables/useResize'
import type { BarChartOptions, ChartData } from '../../../types'

interface Props {
  data: ChartData[]
  options?: BarChartOptions
  width?: string
  height?: string
  theme?: string
  autoResize?: boolean
  direction?: 'vertical' | 'horizontal'
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '400px',
  theme: 'dark',
  autoResize: true,
  direction: 'vertical',
})

const emit = defineEmits<{
  click: [params: any]
  legendselectchanged: [params: any]
}>()

const chartRef = ref<HTMLElement>()
const { chart, initChart, updateChart, disposeChart } = useChart()
const { onResize } = useResize()

// 默认配置
const getDefaultOptions = (): BarChartOptions => ({
  grid: {
    top: '10%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    data: [],
    textStyle: {
      color: '#fff',
    },
  },
  xAxis: props.direction === 'vertical' ? {
    type: 'category',
    data: [],
    axisLine: {
      lineStyle: {
        color: '#4a5568',
      },
    },
    axisLabel: {
      color: '#a0aec0',
    },
  } : {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#4a5568',
      },
    },
    axisLabel: {
      color: '#a0aec0',
    },
    splitLine: {
      lineStyle: {
        color: '#2d3748',
      },
    },
  },
  yAxis: props.direction === 'vertical' ? {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#4a5568',
      },
    },
    axisLabel: {
      color: '#a0aec0',
    },
    splitLine: {
      lineStyle: {
        color: '#2d3748',
      },
    },
  } : {
    type: 'category',
    data: [],
    axisLine: {
      lineStyle: {
        color: '#4a5568',
      },
    },
    axisLabel: {
      color: '#a0aec0',
    },
  },
  series: [],
})

// 处理数据
const processData = (data: ChartData[]) => {
  if (!data || data.length === 0) return getDefaultOptions()

  const categories = [...new Set(data.map(item => item.category))]
  const series = [...new Set(data.map(item => item.series))]

  const seriesData = series.map((seriesName, index) => {
    const seriesItems = data.filter(item => item.series === seriesName)
    const values = categories.map(category => {
      const item = seriesItems.find(si => si.category === category)
      return item ? item.value : 0
    })

    return {
      name: seriesName,
      type: 'bar',
      barWidth: '60%',
      itemStyle: {
        borderRadius: props.direction === 'vertical' ? [4, 4, 0, 0] : [0, 4, 4, 0],
        color: `hsl(${200 + index * 60}, 70%, 50%)`,
      },
      data: values,
    }
  })

  const options = getDefaultOptions()
  
  if (props.direction === 'vertical') {
    options.xAxis.data = categories
  } else {
    options.yAxis.data = categories
  }
  
  options.legend.data = series
  options.series = seriesData

  return options
}

// 初始化图表
onMounted(() => {
  if (chartRef.value) {
    initChart(chartRef.value, props.theme)
    
    // 绑定事件
    chart.value?.on('click', (params) => emit('click', params))
    chart.value?.on('legendselectchanged', (params) => emit('legendselectchanged', params))
    
    // 更新图表
    updateChart()
    
    // 自动调整大小
    if (props.autoResize) {
      onResize(() => chart.value?.resize())
    }
  }
})

// 监听数据变化
watch([() => props.data, () => props.options, () => props.direction], updateChart, { deep: true })

// 更新图表配置
function updateChart() {
  if (!chart.value) return
  
  const processedData = processData(props.data)
  const finalOptions = {
    ...processedData,
    ...props.options,
  }
  
  chart.value.setOption(finalOptions, true)
}

// 清理
onUnmounted(() => {
  disposeChart()
})

// 暴露方法
defineExpose({
  chart,
  updateChart,
  getDataURL: () => chart.value?.getDataURL(),
  resize: () => chart.value?.resize(),
})
</script>

<style scoped>
.bar-chart {
  position: relative;
}
</style>
```

#### 地图组件 (MapChart)

```vue
<!-- packages/dashboard/src/components/charts/map/MapChart.vue -->

<template>
  <div ref="chartRef" class="map-chart" :style="{ width, height }"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as echarts from 'echarts'
import { useChart } from '../../../composables/useChart'
import { useResize } from '../../../composables/useResize'
import type { MapChartOptions, MapData } from '../../../types'

interface Props {
  data: MapData[]
  mapName?: string
  geoJson?: any
  options?: MapChartOptions
  width?: string
  height?: string
  theme?: string
  autoResize?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  mapName: 'china',
  width: '100%',
  height: '400px',
  theme: 'dark',
  autoResize: true,
})

const emit = defineEmits<{
  click: [params: any]
  geoselectchanged: [params: any]
}>()

const chartRef = ref<HTMLElement>()
const { chart, initChart, updateChart, disposeChart } = useChart()
const { onResize } = useResize()

// 默认配置
const defaultOptions: MapChartOptions = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}<br/>{c}',
  },
  visualMap: {
    min: 0,
    max: 1000,
    left: 'left',
    top: 'bottom',
    text: ['高', '低'],
    calculable: true,
    inRange: {
      color: ['#50a3ba', '#eac736', '#d94e5d'],
    },
    textStyle: {
      color: '#fff',
    },
  },
  series: [
    {
      name: '数据',
      type: 'map',
      map: props.mapName,
      roam: true,
      scaleLimit: {
        min: 1,
        max: 5,
      },
      itemStyle: {
        borderColor: '#4a5568',
        borderWidth: 1,
      },
      emphasis: {
        itemStyle: {
          areaColor: '#ffd700',
        },
        label: {
          show: true,
          color: '#000',
        },
      },
      data: [],
    },
  ],
}

// 注册地图
const registerMap = async () => {
  if (props.geoJson) {
    echarts.registerMap(props.mapName!, props.geoJson)
  } else {
    // 动态加载地图数据
    try {
      const response = await fetch(`/maps/${props.mapName}.json`)
      const geoJson = await response.json()
      echarts.registerMap(props.mapName!, geoJson)
    } catch (error) {
      console.error('Failed to load map data:', error)
    }
  }
}

// 处理数据
const processData = (data: MapData[]) => {
  const seriesData = data.map(item => ({
    name: item.name,
    value: item.value,
    ...item.extra,
  }))

  return {
    ...defaultOptions,
    series: [
      {
        ...defaultOptions.series[0],
        data: seriesData,
      },
    ],
  }
}

// 初始化图表
onMounted(async () => {
  if (chartRef.value) {
    await registerMap()
    initChart(chartRef.value, props.theme)
    
    // 绑定事件
    chart.value?.on('click', (params) => emit('click', params))
    chart.value?.on('geoselectchanged', (params) => emit('geoselectchanged', params))
    
    // 更新图表
    updateChart()
    
    // 自动调整大小
    if (props.autoResize) {
      onResize(() => chart.value?.resize())
    }
  }
})

// 监听数据变化
watch([() => props.data, () => props.options], updateChart, { deep: true })

// 更新图表配置
function updateChart() {
  if (!chart.value) return
  
  const processedData = processData(props.data)
  const finalOptions = {
    ...processedData,
    ...props.options,
  }
  
  chart.value.setOption(finalOptions, true)
}

// 清理
onUnmounted(() => {
  disposeChart()
})

// 暴露方法
defineExpose({
  chart,
  updateChart,
  getDataURL: () => chart.value?.getDataURL(),
  resize: () => chart.value?.resize(),
})
</script>

<style scoped>
.map-chart {
  position: relative;
}
</style>
```

### 小部件组件

#### 数字计数器 (Counter)

```vue
<!-- packages/dashboard/src/components/widgets/counter/Counter.vue -->

<template>
  <div class="counter-widget" :class="[`counter-${size}`, `counter-${variant}`]">
    <div class="counter-icon" v-if="icon">
      <component :is="icon" />
    </div>
    <div class="counter-content">
      <div class="counter-value">
        {{ displayValue }}
      </div>
      <div class="counter-label" v-if="label">
        {{ label }}
      </div>
      <div class="counter-change" v-if="change !== undefined" :class="changeClass">
        <span class="counter-change-icon">
          {{ change >= 0 ? '↗' : '↘' }}
        </span>
        <span class="counter-change-value">
          {{ Math.abs(change) }}{{ changeUnit }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useAnimation } from '../../../composables/useAnimation'

interface Props {
  value: number
  label?: string
  icon?: any
  size?: 'small' | 'medium' | 'large'
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  prefix?: string
  suffix?: string
  precision?: number
  separator?: string
  animated?: boolean
  duration?: number
  change?: number
  changeUnit?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  variant: 'default',
  precision: 0,
  separator: ',',
  animated: true,
  duration: 2000,
  changeUnit: '%',
})

const currentValue = ref(0)
const { animate } = useAnimation()

// 格式化数值
const formatNumber = (num: number): string => {
  const { prefix = '', suffix = '', precision, separator } = props
  
  let formatted = num.toFixed(precision)
  
  if (separator && num >= 1000) {
    formatted = formatted.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
  }
  
  return `${prefix}${formatted}${suffix}`
}

// 显示值
const displayValue = computed(() => formatNumber(currentValue.value))

// 变化样式类
const changeClass = computed(() => ({
  'counter-change--positive': props.change !== undefined && props.change >= 0,
  'counter-change--negative': props.change !== undefined && props.change < 0,
}))

// 动画更新数值
const animateValue = (from: number, to: number) => {
  if (!props.animated) {
    currentValue.value = to
    return
  }

  animate({
    from: { value: from },
    to: { value: to },
    duration: props.duration,
    easing: 'easeOutCubic',
    onUpdate: (values) => {
      currentValue.value = values.value
    },
  })
}

// 监听值变化
watch(() => props.value, (newValue, oldValue) => {
  animateValue(oldValue || 0, newValue)
}, { immediate: true })

// 初始化
onMounted(() => {
  if (props.animated) {
    animateValue(0, props.value)
  } else {
    currentValue.value = props.value
  }
})
</script>

<style scoped>
.counter-widget {
  @apply flex items-center p-4 rounded-lg border;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.counter-small {
  @apply p-3 text-sm;
}

.counter-medium {
  @apply p-4 text-base;
}

.counter-large {
  @apply p-6 text-lg;
}

.counter-icon {
  @apply mr-4 text-2xl opacity-80;
}

.counter-content {
  @apply flex-1;
}

.counter-value {
  @apply text-2xl font-bold text-white;
  font-family: 'Courier New', monospace;
}

.counter-small .counter-value {
  @apply text-xl;
}

.counter-large .counter-value {
  @apply text-3xl;
}

.counter-label {
  @apply text-sm text-gray-300 mt-1;
}

.counter-change {
  @apply flex items-center mt-2 text-xs;
}

.counter-change--positive {
  @apply text-green-400;
}

.counter-change--negative {
  @apply text-red-400;
}

.counter-change-icon {
  @apply mr-1;
}

/* 主题变体 */
.counter-primary {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.1));
  border-color: rgba(59, 130, 246, 0.5);
}

.counter-success {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(34, 197, 94, 0.1));
  border-color: rgba(34, 197, 94, 0.5);
}

.counter-warning {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.3), rgba(245, 158, 11, 0.1));
  border-color: rgba(245, 158, 11, 0.5);
}

.counter-danger {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.3), rgba(239, 68, 68, 0.1));
  border-color: rgba(239, 68, 68, 0.5);
}
</style>
```

#### 进度条 (Progress)

```vue
<!-- packages/dashboard/src/components/widgets/progress/Progress.vue -->

<template>
  <div class="progress-widget" :class="`progress-${size}`">
    <div class="progress-header" v-if="label || showPercent">
      <span class="progress-label" v-if="label">{{ label }}</span>
      <span class="progress-percent" v-if="showPercent">{{ displayPercent }}%</span>
    </div>
    
    <div class="progress-container">
      <div 
        class="progress-track"
        :class="`progress-track--${variant}`"
      >
        <div 
          class="progress-bar"
          :class="`progress-bar--${variant}`"
          :style="{ width: `${animatedPercent}%` }"
        >
          <div class="progress-glow" v-if="glow"></div>
        </div>
      </div>
    </div>
    
    <div class="progress-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useAnimation } from '../../../composables/useAnimation'

interface Props {
  value: number
  max?: number
  label?: string
  size?: 'small' | 'medium' | 'large'
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  showPercent?: boolean
  animated?: boolean
  duration?: number
  glow?: boolean
  striped?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  max: 100,
  size: 'medium',
  variant: 'primary',
  showPercent: true,
  animated: true,
  duration: 1500,
  glow: false,
  striped: false,
})

const animatedValue = ref(0)
const { animate } = useAnimation()

// 计算百分比
const percent = computed(() => {
  return Math.min(Math.max((props.value / props.max) * 100, 0), 100)
})

const animatedPercent = computed(() => {
  return Math.min(Math.max((animatedValue.value / props.max) * 100, 0), 100)
})

const displayPercent = computed(() => {
  return Math.round(animatedPercent.value)
})

// 动画更新值
const animateValue = (from: number, to: number) => {
  if (!props.animated) {
    animatedValue.value = to
    return
  }

  animate({
    from: { value: from },
    to: { value: to },
    duration: props.duration,
    easing: 'easeOutCubic',
    onUpdate: (values) => {
      animatedValue.value = values.value
    },
  })
}

// 监听值变化
watch(() => props.value, (newValue, oldValue) => {
  animateValue(oldValue || 0, newValue)
}, { immediate: true })

// 初始化
onMounted(() => {
  if (props.animated) {
    animateValue(0, props.value)
  } else {
    animatedValue.value = props.value
  }
})
</script>

<style scoped>
.progress-widget {
  @apply w-full;
}

.progress-header {
  @apply flex justify-between items-center mb-2;
}

.progress-label {
  @apply text-sm text-gray-300;
}

.progress-percent {
  @apply text-sm font-mono text-white;
}

.progress-container {
  @apply relative;
}

.progress-track {
  @apply w-full rounded-full overflow-hidden;
  background: rgba(255, 255, 255, 0.1);
}

.progress-small .progress-track {
  @apply h-1;
}

.progress-medium .progress-track {
  @apply h-2;
}

.progress-large .progress-track {
  @apply h-3;
}

.progress-bar {
  @apply h-full transition-all duration-300 ease-out relative overflow-hidden;
  background: linear-gradient(90deg, #3b82f6, #1d4ed8);
}

.progress-bar--primary {
  background: linear-gradient(90deg, #3b82f6, #1d4ed8);
}

.progress-bar--success {
  background: linear-gradient(90deg, #22c55e, #15803d);
}

.progress-bar--warning {
  background: linear-gradient(90deg, #f59e0b, #d97706);
}

.progress-bar--danger {
  background: linear-gradient(90deg, #ef4444, #dc2626);
}

.progress-glow {
  @apply absolute inset-0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: glow 2s infinite;
}

@keyframes glow {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.progress-footer {
  @apply mt-2;
}
</style>
```

## 组合式函数

### 图表管理 (useChart)

```typescript
// packages/dashboard/src/composables/useChart.ts

import { ref, onUnmounted } from 'vue'
import * as echarts from 'echarts'
import type { ECharts, EChartsOption } from 'echarts'

export function useChart() {
  const chart = ref<ECharts>()

  // 初始化图表
  const initChart = (container: HTMLElement, theme = 'dark') => {
    if (chart.value) {
      chart.value.dispose()
    }
    
    chart.value = echarts.init(container, theme, {
      renderer: 'canvas',
      useDirtyRect: false,
    })
    
    return chart.value
  }

  // 更新图表配置
  const setOption = (option: EChartsOption, notMerge = false) => {
    if (chart.value) {
      chart.value.setOption(option, notMerge)
    }
  }

  // 调整图表大小
  const resize = () => {
    if (chart.value) {
      chart.value.resize()
    }
  }

  // 显示加载动画
  const showLoading = (text = '加载中...') => {
    if (chart.value) {
      chart.value.showLoading('default', {
        text,
        color: '#3b82f6',
        textColor: '#fff',
        maskColor: 'rgba(0, 0, 0, 0.8)',
        zlevel: 0,
      })
    }
  }

  // 隐藏加载动画
  const hideLoading = () => {
    if (chart.value) {
      chart.value.hideLoading()
    }
  }

  // 获取图表实例
  const getInstance = () => chart.value

  // 获取图表图片
  const getDataURL = (options?: {
    type?: string
    pixelRatio?: number
    backgroundColor?: string
  }) => {
    if (chart.value) {
      return chart.value.getDataURL({
        type: 'png',
        pixelRatio: 2,
        backgroundColor: '#fff',
        ...options,
      })
    }
    return ''
  }

  // 销毁图表
  const dispose = () => {
    if (chart.value) {
      chart.value.dispose()
      chart.value = undefined
    }
  }

  // 组件卸载时自动销毁
  onUnmounted(() => {
    dispose()
  })

  return {
    chart,
    initChart,
    setOption,
    resize,
    showLoading,
    hideLoading,
    getInstance,
    getDataURL,
    dispose,
  }
}
```

### WebSocket 连接 (useWebSocket)

```typescript
// packages/dashboard/src/composables/useWebSocket.ts

import { ref, onUnmounted, watch } from 'vue'

export interface WebSocketOptions {
  url: string
  protocols?: string | string[]
  reconnect?: boolean
  reconnectInterval?: number
  maxReconnectAttempts?: number
  heartbeat?: boolean
  heartbeatInterval?: number
  heartbeatMessage?: string
}

export function useWebSocket(options: WebSocketOptions) {
  const {
    url,
    protocols,
    reconnect = true,
    reconnectInterval = 3000,
    maxReconnectAttempts = 5,
    heartbeat = true,
    heartbeatInterval = 30000,
    heartbeatMessage = 'ping',
  } = options

  const ws = ref<WebSocket>()
  const isConnected = ref(false)
  const isConnecting = ref(false)
  const lastMessage = ref<any>()
  const reconnectAttempts = ref(0)
  
  let heartbeatTimer: number | undefined
  let reconnectTimer: number | undefined

  // 连接 WebSocket
  const connect = () => {
    if (isConnecting.value || isConnected.value) return

    isConnecting.value = true
    
    try {
      ws.value = new WebSocket(url, protocols)
      
      ws.value.onopen = () => {
        isConnected.value = true
        isConnecting.value = false
        reconnectAttempts.value = 0
        
        // 启动心跳
        if (heartbeat) {
          startHeartbeat()
        }
        
        console.log('WebSocket connected:', url)
      }
      
      ws.value.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data)
          lastMessage.value = data
        } catch {
          lastMessage.value = event.data
        }
      }
      
      ws.value.onclose = () => {
        isConnected.value = false
        isConnecting.value = false
        
        // 停止心跳
        stopHeartbeat()
        
        // 自动重连
        if (reconnect && reconnectAttempts.value < maxReconnectAttempts) {
          scheduleReconnect()
        }
        
        console.log('WebSocket disconnected')
      }
      
      ws.value.onerror = (error) => {
        console.error('WebSocket error:', error)
        isConnecting.value = false
      }
      
    } catch (error) {
      console.error('Failed to create WebSocket:', error)
      isConnecting.value = false
    }
  }

  // 断开连接
  const disconnect = () => {
    if (ws.value) {
      ws.value.close()
    }
    
    stopHeartbeat()
    clearReconnectTimer()
  }

  // 发送消息
  const send = (data: any) => {
    if (isConnected.value && ws.value) {
      const message = typeof data === 'string' ? data : JSON.stringify(data)
      ws.value.send(message)
      return true
    }
    return false
  }

  // 启动心跳
  const startHeartbeat = () => {
    stopHeartbeat()
    
    heartbeatTimer = window.setInterval(() => {
      if (isConnected.value) {
        send(heartbeatMessage)
      }
    }, heartbeatInterval)
  }

  // 停止心跳
  const stopHeartbeat = () => {
    if (heartbeatTimer) {
      clearInterval(heartbeatTimer)
      heartbeatTimer = undefined
    }
  }

  // 计划重连
  const scheduleReconnect = () => {
    clearReconnectTimer()
    
    reconnectTimer = window.setTimeout(() => {
      reconnectAttempts.value++
      console.log(`Attempting to reconnect (${reconnectAttempts.value}/${maxReconnectAttempts})`)
      connect()
    }, reconnectInterval)
  }

  // 清除重连定时器
  const clearReconnectTimer = () => {
    if (reconnectTimer) {
      clearTimeout(reconnectTimer)
      reconnectTimer = undefined
    }
  }

  // 监听消息
  const onMessage = (callback: (data: any) => void) => {
    return watch(lastMessage, callback, { immediate: false })
  }

  // 组件卸载时断开连接
  onUnmounted(() => {
    disconnect()
  })

  return {
    ws,
    isConnected,
    isConnecting,
    lastMessage,
    reconnectAttempts,
    connect,
    disconnect,
    send,
    onMessage,
  }
}
```

### 动画控制 (useAnimation)

```typescript
// packages/dashboard/src/composables/useAnimation.ts

import { ref, onUnmounted } from 'vue'
import { gsap } from 'gsap'

export interface AnimationOptions {
  from: Record<string, number>
  to: Record<string, number>
  duration?: number
  delay?: number
  easing?: string
  onUpdate?: (values: Record<string, number>) => void
  onComplete?: () => void
}

export function useAnimation() {
  const animations = ref<gsap.core.Tween[]>([])

  // 缓动函数映射
  const easingMap: Record<string, string> = {
    linear: 'none',
    easeIn: 'power2.in',
    easeOut: 'power2.out',
    easeInOut: 'power2.inOut',
    easeInCubic: 'power3.in',
    easeOutCubic: 'power3.out',
    easeInOutCubic: 'power3.inOut',
    easeInQuart: 'power4.in',
    easeOutQuart: 'power4.out',
    easeInOutQuart: 'power4.inOut',
    easeInBack: 'back.in(1.7)',
    easeOutBack: 'back.out(1.7)',
    easeInOutBack: 'back.inOut(1.7)',
    easeInElastic: 'elastic.in(1, 0.3)',
    easeOutElastic: 'elastic.out(1, 0.3)',
    easeInOutElastic: 'elastic.inOut(1, 0.3)',
    easeInBounce: 'bounce.in',
    easeOutBounce: 'bounce.out',
    easeInOutBounce: 'bounce.inOut',
  }

  // 执行动画
  const animate = (options: AnimationOptions) => {
    const {
      from,
      to,
      duration = 1,
      delay = 0,
      easing = 'easeOutCubic',
      onUpdate,
      onComplete,
    } = options

    const target = { ...from }
    
    const tween = gsap.to(target, {
      ...to,
      duration,
      delay,
      ease: easingMap[easing] || easing,
      onUpdate: () => {
        onUpdate?.(target)
      },
      onComplete: () => {
        onComplete?.()
        // 从数组中移除已完成的动画
        const index = animations.value.indexOf(tween)
        if (index > -1) {
          animations.value.splice(index, 1)
        }
      },
    })

    animations.value.push(tween)
    return tween
  }

  // 创建时间线
  const createTimeline = () => {
    const timeline = gsap.timeline()
    return timeline
  }

  // 暂停所有动画
  const pauseAll = () => {
    animations.value.forEach(tween => tween.pause())
  }

  // 恢复所有动画
  const resumeAll = () => {
    animations.value.forEach(tween => tween.resume())
  }

  // 停止所有动画
  const killAll = () => {
    animations.value.forEach(tween => tween.kill())
    animations.value = []
  }

  // 数字动画
  const animateNumber = (
    from: number,
    to: number,
    duration = 2,
    onUpdate: (value: number) => void,
    easing = 'easeOutCubic'
  ) => {
    return animate({
      from: { value: from },
      to: { value: to },
      duration,
      easing,
      onUpdate: (values) => onUpdate(values.value),
    })
  }

  // 进入动画
  const fadeIn = (
    element: HTMLElement,
    duration = 0.5,
    delay = 0
  ) => {
    gsap.set(element, { opacity: 0 })
    return gsap.to(element, {
      opacity: 1,
      duration,
      delay,
      ease: 'power2.out',
    })
  }

  // 退出动画
  const fadeOut = (
    element: HTMLElement,
    duration = 0.5,
    delay = 0
  ) => {
    return gsap.to(element, {
      opacity: 0,
      duration,
      delay,
      ease: 'power2.out',
    })
  }

  // 滑入动画
  const slideIn = (
    element: HTMLElement,
    direction: 'left' | 'right' | 'up' | 'down' = 'up',
    duration = 0.5,
    delay = 0
  ) => {
    const distance = 50
    const fromProps: any = { opacity: 0 }
    const toProps: any = { opacity: 1, duration, delay, ease: 'power2.out' }

    switch (direction) {
      case 'left':
        fromProps.x = -distance
        toProps.x = 0
        break
      case 'right':
        fromProps.x = distance
        toProps.x = 0
        break
      case 'up':
        fromProps.y = distance
        toProps.y = 0
        break
      case 'down':
        fromProps.y = -distance
        toProps.y = 0
        break
    }

    gsap.set(element, fromProps)
    return gsap.to(element, toProps)
  }

  // 缩放动画
  const scaleIn = (
    element: HTMLElement,
    duration = 0.5,
    delay = 0
  ) => {
    gsap.set(element, { scale: 0, opacity: 0 })
    return gsap.to(element, {
      scale: 1,
      opacity: 1,
      duration,
      delay,
      ease: 'back.out(1.7)',
    })
  }

  // 组件卸载时清理动画
  onUnmounted(() => {
    killAll()
  })

  return {
    animate,
    createTimeline,
    pauseAll,
    resumeAll,
    killAll,
    animateNumber,
    fadeIn,
    fadeOut,
    slideIn,
    scaleIn,
  }
}
```

## 主题系统

### 暗色主题 (dark.ts)

```typescript
// packages/dashboard/src/themes/dark.ts

export const darkTheme = {
  // 基础颜色
  colors: {
    primary: '#3b82f6',
    secondary: '#6366f1',
    success: '#22c55e',
    warning: '#f59e0b',
    danger: '#ef4444',
    info: '#06b6d4',
    
    // 背景色
    background: {
      primary: '#0f172a',
      secondary: '#1e293b',
      tertiary: '#334155',
    },
    
    // 文本色
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
      tertiary: '#94a3b8',
      disabled: '#64748b',
    },
    
    // 边框色
    border: {
      primary: '#334155',
      secondary: '#475569',
      tertiary: '#64748b',
    },
    
    // 图表色板
    chart: [
      '#3b82f6', '#8b5cf6', '#06b6d4', '#22c55e',
      '#f59e0b', '#ef4444', '#ec4899', '#84cc16',
      '#f97316', '#6366f1', '#14b8a6', '#f43f5e',
    ],
  },
  
  // 字体
  fonts: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'Consolas', 'monospace'],
    display: ['Inter', 'system-ui', 'sans-serif'],
  },
  
  // 字号
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  
  // 间距
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  
  // 圆角
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  
  // 阴影
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },
  
  // 动画
  animations: {
    duration: {
      fast: '150ms',
      base: '300ms',
      slow: '500ms',
    },
    easing: {
      linear: 'linear',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  
  // ECharts 主题配置
  echarts: {
    color: [
      '#3b82f6', '#8b5cf6', '#06b6d4', '#22c55e',
      '#f59e0b', '#ef4444', '#ec4899', '#84cc16',
    ],
    backgroundColor: 'transparent',
    textStyle: {
      color: '#f8fafc',
      fontFamily: 'Inter, system-ui, sans-serif',
    },
    title: {
      textStyle: {
        color: '#f8fafc',
      },
    },
    line: {
      itemStyle: {
        borderWidth: 2,
      },
      lineStyle: {
        width: 2,
      },
      symbolSize: 6,
      symbol: 'circle',
      smooth: true,
    },
    radar: {
      itemStyle: {
        borderWidth: 2,
      },
      lineStyle: {
        width: 2,
      },
      symbolSize: 6,
      symbol: 'circle',
      smooth: true,
    },
    bar: {
      itemStyle: {
        barBorderWidth: 0,
        barBorderColor: '#ccc',
      },
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
    boxplot: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
    candlestick: {
      itemStyle: {
        color: '#22c55e',
        color0: '#ef4444',
        borderColor: '#22c55e',
        borderColor0: '#ef4444',
        borderWidth: 1,
      },
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      lineStyle: {
        width: 1,
        color: '#aaa',
      },
      symbolSize: 6,
      symbol: 'circle',
      smooth: true,
      color: [
        '#3b82f6', '#8b5cf6', '#06b6d4', '#22c55e',
        '#f59e0b', '#ef4444', '#ec4899', '#84cc16',
      ],
      label: {
        color: '#f8fafc',
      },
    },
    map: {
      itemStyle: {
        areaColor: '#334155',
        borderColor: '#64748b',
        borderWidth: 0.5,
      },
      label: {
        color: '#f8fafc',
      },
      emphasis: {
        itemStyle: {
          areaColor: '#3b82f6',
        },
        label: {
          color: '#f8fafc',
        },
      },
    },
    geo: {
      itemStyle: {
        areaColor: '#334155',
        borderColor: '#64748b',
        borderWidth: 0.5,
      },
      label: {
        color: '#f8fafc',
      },
      emphasis: {
        itemStyle: {
          areaColor: '#3b82f6',
        },
        label: {
          color: '#f8fafc',
        },
      },
    },
    categoryAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: '#64748b',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: '#64748b',
        },
      },
      axisLabel: {
        show: true,
        color: '#cbd5e1',
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: ['#475569'],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
        },
      },
    },
    valueAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: '#64748b',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: '#64748b',
        },
      },
      axisLabel: {
        show: true,
        color: '#cbd5e1',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#475569'],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
        },
      },
    },
    logAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: '#64748b',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: '#64748b',
        },
      },
      axisLabel: {
        show: true,
        color: '#cbd5e1',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#475569'],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
        },
      },
    },
    timeAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: '#64748b',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: '#64748b',
        },
      },
      axisLabel: {
        show: true,
        color: '#cbd5e1',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#475569'],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
        },
      },
    },
    toolbox: {
      iconStyle: {
        borderColor: '#cbd5e1',
      },
      emphasis: {
        iconStyle: {
          borderColor: '#f8fafc',
        },
      },
    },
    legend: {
      textStyle: {
        color: '#cbd5e1',
      },
    },
    tooltip: {
      axisPointer: {
        lineStyle: {
          color: '#64748b',
          width: 1,
        },
        crossStyle: {
          color: '#64748b',
          width: 1,
        },
      },
    },
    timeline: {
      lineStyle: {
        color: '#64748b',
        width: 1,
      },
      itemStyle: {
        color: '#3b82f6',
        borderWidth: 1,
      },
      controlStyle: {
        color: '#cbd5e1',
        borderColor: '#cbd5e1',
        borderWidth: 0.5,
      },
      checkpointStyle: {
        color: '#3b82f6',
        borderColor: '#64748b',
      },
      label: {
        color: '#cbd5e1',
      },
      emphasis: {
        itemStyle: {
          color: '#f59e0b',
        },
        controlStyle: {
          color: '#cbd5e1',
          borderColor: '#cbd5e1',
          borderWidth: 0.5,
        },
        label: {
          color: '#cbd5e1',
        },
      },
    },
    visualMap: {
      color: ['#ef4444', '#f59e0b', '#22c55e'],
      textStyle: {
        color: '#cbd5e1',
      },
    },
    dataZoom: {
      backgroundColor: 'rgba(47,69,84,0)',
      dataBackgroundColor: 'rgba(255,255,255,0.3)',
      fillerColor: 'rgba(167,183,204,0.4)',
      handleColor: '#a7b7cc',
      handleSize: '100%',
      textStyle: {
        color: '#cbd5e1',
      },
    },
    markPoint: {
      label: {
        color: '#f8fafc',
      },
      emphasis: {
        label: {
          color: '#f8fafc',
        },
      },
    },
  },
}

export default darkTheme
```

## 使用方法

### 1. 基本使用

```vue
<template>
  <div class="dashboard">
    <!-- 数字计数器 -->
    <Counter
      :value="1234"
      label="总用户数"
      prefix=""
      suffix="人"
      variant="primary"
      :animated="true"
    />
    
    <!-- 折线图 -->
    <LineChart
      :data="chartData"
      :options="chartOptions"
      width="100%"
      height="400px"
      theme="dark"
      @click="handleChartClick"
    />
    
    <!-- 进度条 -->
    <Progress
      :value="75"
      :max="100"
      label="完成进度"
      variant="success"
      :glow="true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Counter, LineChart, Progress } from '@qiyun/dashboard'

const chartData = ref([
  { category: '1月', series: '销售额', value: 1200 },
  { category: '2月', series: '销售额', value: 1800 },
  { category: '3月', series: '销售额', value: 1500 },
  // ... 更多数据
])

const chartOptions = ref({
  title: {
    text: '月度销售趋势',
    textStyle: { color: '#fff' }
  }
})

const handleChartClick = (params: any) => {
  console.log('图表点击:', params)
}
</script>
```

### 2. 实时数据大屏

```vue
<template>
  <div class="realtime-dashboard">
    <div class="dashboard-header">
      <h1>实时监控大屏</h1>
      <div class="dashboard-time">{{ currentTime }}</div>
    </div>
    
    <div class="dashboard-grid">
      <!-- 关键指标 -->
      <div class="metrics-section">
        <Counter
          v-for="metric in metrics"
          :key="metric.key"
          :value="metric.value"
          :label="metric.label"
          :variant="metric.variant"
          :change="metric.change"
          :animated="true"
        />
      </div>
      
      <!-- 图表区域 -->
      <div class="charts-section">
        <LineChart
          :data="realtimeData"
          :options="lineChartOptions"
          @click="handleChartClick"
        />
        
        <BarChart
          :data="categoryData"
          :options="barChartOptions"
          direction="vertical"
        />
        
        <MapChart
          :data="regionData"
          map-name="china"
          :options="mapOptions"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useWebSocket } from '@qiyun/dashboard'
import dayjs from 'dayjs'

// 当前时间
const currentTime = ref('')
const updateTime = () => {
  currentTime.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
}

// WebSocket 连接
const { connect, disconnect, onMessage } = useWebSocket({
  url: 'ws://localhost:8080/dashboard',
  reconnect: true,
})

// 实时数据
const metrics = ref([
  { key: 'users', label: '在线用户', value: 0, variant: 'primary', change: 0 },
  { key: 'orders', label: '今日订单', value: 0, variant: 'success', change: 0 },
  { key: 'revenue', label: '今日收入', value: 0, variant: 'warning', change: 0 },
])

const realtimeData = ref([])
const categoryData = ref([])
const regionData = ref([])

// 监听 WebSocket 消息
onMessage((data) => {
  if (data.type === 'metrics') {
    updateMetrics(data.payload)
  } else if (data.type === 'chart') {
    updateChartData(data.payload)
  }
})

// 更新指标数据
const updateMetrics = (payload: any) => {
  metrics.value.forEach(metric => {
    if (payload[metric.key]) {
      const oldValue = metric.value
      metric.value = payload[metric.key].value
      metric.change = payload[metric.key].change
    }
  })
}

// 更新图表数据
const updateChartData = (payload: any) => {
  if (payload.realtime) {
    realtimeData.value = payload.realtime
  }
  if (payload.category) {
    categoryData.value = payload.category
  }
  if (payload.region) {
    regionData.value = payload.region
  }
}

// 生命周期
onMounted(() => {
  updateTime()
  const timer = setInterval(updateTime, 1000)
  
  connect()
  
  onUnmounted(() => {
    clearInterval(timer)
    disconnect()
  })
})
</script>

<style scoped>
.realtime-dashboard {
  @apply min-h-screen bg-gray-900 text-white p-6;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}

.dashboard-header {
  @apply flex justify-between items-center mb-8;
}

.dashboard-header h1 {
  @apply text-4xl font-bold;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dashboard-time {
  @apply text-xl font-mono text-blue-400;
}

.dashboard-grid {
  @apply grid grid-cols-12 gap-6;
}

.metrics-section {
  @apply col-span-12 grid grid-cols-4 gap-4 mb-6;
}

.charts-section {
  @apply col-span-12 grid grid-cols-2 gap-6;
}
</style>
```

### 3. 主题定制

```typescript
// 创建自定义主题
import { createTheme } from '@qiyun/dashboard'

const customTheme = createTheme({
  colors: {
    primary: '#ff6b6b',
    secondary: '#4ecdc4',
    background: {
      primary: '#2c3e50',
      secondary: '#34495e',
    },
    chart: [
      '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4',
      '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd',
    ],
  },
})

// 应用主题
import { useTheme } from '@qiyun/dashboard'

const { setTheme } = useTheme()
setTheme(customTheme)
```

### 4. 自定义图表

```vue
<template>
  <div class="custom-chart">
    <div ref="chartRef" class="chart-container"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useChart } from '@qiyun/dashboard'

const chartRef = ref<HTMLElement>()
const { initChart, setOption } = useChart()

onMounted(() => {
  if (chartRef.value) {
    const chart = initChart(chartRef.value, 'dark')
    
    // 自定义图表配置
    const option = {
      title: {
        text: '自定义图表',
        textStyle: { color: '#fff' }
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        }
      }]
    }
    
    setOption(option)
  }
})
</script>
```

## 最佳实践

### 1. 性能优化

```typescript
// 图表懒加载
import { defineAsyncComponent } from 'vue'

const LineChart = defineAsyncComponent(() => import('@qiyun/dashboard/LineChart'))
const BarChart = defineAsyncComponent(() => import('@qiyun/dashboard/BarChart'))

// 数据分页加载
const loadChartData = async (page: number, pageSize: number) => {
  const response = await api.get('/chart-data', {
    params: { page, pageSize }
  })
  return response.data
}

// 图表防抖更新
import { debounce } from 'lodash-es'

const updateChart = debounce((data) => {
  chart.setOption(processData(data))
}, 300)
```

### 2. 响应式设计

```vue
<template>
  <div class="responsive-dashboard">
    <div class="dashboard-grid" :class="gridClass">
      <div v-for="widget in widgets" :key="widget.id" :class="widget.class">
        <component :is="widget.component" v-bind="widget.props" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints({
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
})

const gridClass = computed(() => ({
  'grid-cols-1': breakpoints.smaller('md'),
  'grid-cols-2': breakpoints.between('md', 'lg'),
  'grid-cols-3': breakpoints.greaterOrEqual('lg'),
}))
</script>
```

### 3. 数据管理

```typescript
// 使用 Pinia 管理大屏数据
import { defineStore } from 'pinia'

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    metrics: [],
    chartData: {},
    isLoading: false,
    lastUpdate: null,
  }),
  
  actions: {
    async fetchMetrics() {
      this.isLoading = true
      try {
        const response = await api.get('/dashboard/metrics')
        this.metrics = response.data
        this.lastUpdate = new Date()
      } finally {
        this.isLoading = false
      }
    },
    
    updateRealtime(data: any) {
      // 实时数据更新逻辑
      this.chartData = { ...this.chartData, ...data }
    },
  },
})
```

## 相关资源

- [ECharts 官方文档](https://echarts.apache.org/)
- [Three.js 文档](https://threejs.org/docs/)
- [GSAP 动画库](https://greensock.com/gsap/)
- [WebSocket API](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket)
- [组件系统](/guide/modules/components)
- [钩子函数](/guide/modules/hooks)
- [样式系统](/guide/modules/styles)