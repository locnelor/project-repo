import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import { defineAsyncComponent } from "vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component(
      "DemoPreview",
      defineAsyncComponent(() => import("../components/demo-preview.vue")),
    );
  },
} satisfies Theme;
