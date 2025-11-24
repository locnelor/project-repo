import { ref } from "vue";

const globalContentSpinner = ref(false);
const globalPageSpinner = ref(true);

export const useContentSpinner = () => {
  /**
   * 页面加载回调
   */
  const pageSpinnerCallback = async (cbk: () => Promise<any>) => {
    globalPageSpinner.value = true;
    return cbk().finally(() => {
      globalPageSpinner.value = false;
    });
  };

  /**
   * 内容加载回调
   */
  const contentSpinnerCallback = async (cbk: () => Promise<any>) => {
    globalContentSpinner.value = true;
    return cbk().finally(() => {
      globalContentSpinner.value = false;
    });
  };

  /**
   * 手动控制内容加载状态
   */
  const showContentSpinner = () => {
    globalContentSpinner.value = true;
  };

  const hideContentSpinner = () => {
    globalContentSpinner.value = false;
  };

  /**
   * 手动控制页面加载状态
   */
  const showPageSpinner = () => {
    globalPageSpinner.value = true;
  };

  const hidePageSpinner = () => {
    globalPageSpinner.value = false;
  };

  return {
    // 全局共享的响应式状态
    contentSpinner: globalContentSpinner,
    pageSpinner: globalPageSpinner,

    // 回调方法
    pageSpinnerCallback,
    contentSpinnerCallback,

    // 手动控制方法
    showContentSpinner,
    hideContentSpinner,
    showPageSpinner,
    hidePageSpinner,
  };
};
