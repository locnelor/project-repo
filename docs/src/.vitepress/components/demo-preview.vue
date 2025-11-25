<script setup lang="ts">
import { ref, computed, defineAsyncComponent, onMounted } from 'vue'
import PreviewGroup from './preview-group.vue'
interface Props {
  dir: string
  files?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  files: () => []
})

const showCode = ref(false)
const sourceCode = ref('')

// 动态导入组件
const DemoComponent = computed(() => {
  if (!props.dir) {
    console.error('Demo directory is required')
    return null
  }
  
  return defineAsyncComponent({
    loader: () => import(`../../demos/${props.dir}/index.vue`),
    errorComponent: {
      template: '<div class="demo-error">组件加载失败，请检查路径是否正确</div>'
    },
    loadingComponent: {
      template: '<div class="demo-loading">加载中...</div>'
    }
  })
})

// 获取文件列表，如果没有提供则默认为 index.vue
const fileList = computed(() => {
  if (props.files && props.files.length > 0) {
    return props.files
  }
  return ['index.vue']
})

const toggleCode = () => {
  showCode.value = !showCode.value
}

// 获取源代码内容
onMounted(async () => {
  try {
    const response = await fetch(`/demos/${props.dir}/index.vue`)
    if (response.ok) {
      sourceCode.value = await response.text()
    } else {
      sourceCode.value = '// 无法获取源代码，请检查文件路径'
    }
  } catch (error) {
    console.error('Failed to load source code:', error)
    sourceCode.value = `// 加载源代码时出错: ${error}`
  }
})
</script>

<template>
  <div class="demo-preview">
    <!-- 组件预览区域 -->
    <div class="demo-container">
      <Suspense>
        <template #default>
          <component :is="DemoComponent" v-if="DemoComponent" />
        </template>
        <template #fallback>
          <div class="demo-loading">
            <p>加载中...</p>
          </div>
        </template>
      </Suspense>
    </div>
    
    <!-- 代码展示区域 -->
    <div class="demo-actions">
      <button @click="toggleCode" class="demo-toggle">
        {{ showCode ? '隐藏代码' : '查看代码' }}
      </button>
    </div>
    
    <!-- 代码内容 -->
    <PreviewGroup v-if="showCode" :files="fileList">
      <template v-for="file in fileList" #[file]>
        <div class="code-block">
          <pre><code>{{ sourceCode || `// ${file} 的代码内容将在这里显示` }}</code></pre>
        </div>
      </template>
    </PreviewGroup>
  </div>
</template>

<style scoped>
.demo-preview {
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  margin: 16px 0;
  overflow: hidden;
}

.demo-container {
  padding: 24px;
  background: #fff;
  border-bottom: 1px solid #e1e5e9;
  min-height: 100px;
}

.demo-loading {
  text-align: center;
  color: #666;
  padding: 40px 0;
}

.demo-error {
  text-align: center;
  color: #ff4d4f;
  padding: 40px 0;
  background: #fff2f0;
  border: 1px solid #ffccc7;
  border-radius: 4px;
}

.demo-actions {
  padding: 12px 16px;
  background: #fafbfc;
  border-bottom: 1px solid #e1e5e9;
  display: flex;
  justify-content: flex-end;
}

.demo-toggle {
  background: none;
  border: none;
  color: #1890ff;
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.demo-toggle:hover {
  background: #e6f7ff;
}

.code-block {
  background: #f6f8fa;
  padding: 16px;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
  line-height: 1.5;
  color: #24292e;
}

.code-block code {
  background: none;
  padding: 0;
  font-size: inherit;
  color: inherit;
}
</style>
