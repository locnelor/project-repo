<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 构建iframe的src URL，将当前路由作为参数传递
const iframeSrc = computed(() => {
  const baseUrl = '/cidg-ibmo-test/'
  const currentPath = route.fullPath
  // 将当前路由作为查询参数传递
  return `${baseUrl}#${currentPath}`
})
</script>

<template>
  <iframe :src="iframeSrc" width="100%" height="100%" frameborder="0" style="min-height: 100vh;" />
</template>
