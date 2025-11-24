# @repo/hooks

用于多个 `app` 公用的 hook，继承了 `@vben/hooks` 的所有能力。业务上有通用 hooks 可以放在这里。

## 用法

### 添加依赖

```bash
# 进入目标应用目录，例如 apps/xxxx-app
# cd apps/xxxx-app
pnpm add @repo/hooks
```

### 使用

```ts
import { useContentSpinner, useNProgress } from '@repo/hooks';
```

## Hook 列表

### useContentSpinner
内容和页面加载状态管理 Hook。

```ts
const { 
  contentSpinner, 
  pageSpinner, 
  contentSpinnerCallback, 
  pageSpinnerCallback 
} = useContentSpinner();

// 使用页面加载回调
await pageSpinnerCallback(async () => {
  // 异步操作
});

// 使用内容加载回调
await contentSpinnerCallback(async () => {
  // 异步操作
});
```

### useNProgress
NProgress 进度条管理 Hook，提供更现代的 Composition API 接口。

```ts
const { isLoading, start, done, set, inc } = useNProgress();

// 开始进度条
await start();

// 设置进度 (0-1)
await set(0.5);

// 增加进度
await inc(0.1);

// 完成进度条
await done();

// 监听加载状态
watch(isLoading, (loading) => {
  console.log('Loading:', loading);
});
```

#### 兼容性导出
为了向后兼容，仍然提供原有的函数式接口：

```ts
import { startProgress, stopProgress } from '@repo/hooks';

await startProgress();
await stopProgress();
```
