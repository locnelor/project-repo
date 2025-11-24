import type NProgress from 'nprogress';
import { ref, readonly } from 'vue';

// 创建一个NProgress实例的变量，初始值为null
let nProgressInstance: null | typeof NProgress = null;

/**
 * 动态加载NProgress库，并进行配置。
 * 此函数首先检查是否已经加载过NProgress库，如果已经加载过，则直接返回NProgress实例。
 * 否则，动态导入NProgress库，进行配置，然后返回NProgress实例。
 *
 * @returns  NProgress实例的Promise对象。
 */
async function loadNprogress() {
  if (nProgressInstance) {
    return nProgressInstance;
  }
  nProgressInstance = await import('nprogress');
  nProgressInstance.configure({
    showSpinner: true,
    speed: 300,
  });
  return nProgressInstance;
}

/**
 * NProgress 进度条 Hook
 * 提供进度条的显示、隐藏和状态管理功能
 */
export const useNProgress = () => {
  const isLoading = ref(false);

  /**
   * 开始显示进度条
   */
  const start = async () => {
    isLoading.value = true;
    const nprogress = await loadNprogress();
    nprogress?.start();
  };

  /**
   * 停止显示进度条，并隐藏进度条
   */
  const done = async () => {
    isLoading.value = false;
    const nprogress = await loadNprogress();
    nprogress?.done();
  };

  /**
   * 设置进度条进度
   * @param progress 进度值 (0-1)
   */
  const set = async (progress: number) => {
    const nprogress = await loadNprogress();
    nprogress?.set(progress);
  };

  /**
   * 增加进度条进度
   * @param amount 增加的进度值
   */
  const inc = async (amount?: number) => {
    const nprogress = await loadNprogress();
    nprogress?.inc(amount);
  };

  return {
    isLoading: readonly(isLoading),
    start,
    done,
    set,
    inc,
  };
};

// 兼容旧版本的导出
export const startProgress = async () => {
  const nprogress = await loadNprogress();
  nprogress?.start();
};

export const stopProgress = async () => {
  const nprogress = await loadNprogress();
  nprogress?.done();
};
