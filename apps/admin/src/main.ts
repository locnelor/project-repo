import { createApp } from "vue";
import { createPinia, createPersistedState } from "@repo/stores";
import App from "./App.vue";
import "@repo/styles";
import router from "./router";
import 'ant-design-vue/dist/reset.css';
import antd from 'ant-design-vue'

const app = createApp(App);

// 创建Pinia实例并配置持久化插件
const pinia = createPinia();
pinia.use(createPersistedState({
  storage: localStorage, // 默认使用localStorage
}));

app.use(antd);
app.use(pinia);
app.use(router);
app.mount("#app");
