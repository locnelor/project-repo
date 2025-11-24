<script setup lang="ts">
import { useContentSpinner } from '@repo/hooks';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import Loading from './components/Loading.vue';
dayjs.locale('zh-cn');
const locale = zhCN;
const spinner = useContentSpinner();
</script>

<template>
  <a-config-provider :locale="locale">
    <a-app>
      <template v-if="!spinner.pageSpinner.value">
        <RouterView v-slot="{ Component }">
          <Transition name="system-fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </template>
      <Transition v-else name="system-fade" mode="out-in">
        <div class="flex items-center w-screen h-screen justify-center" key="loading">
          <Loading />
        </div>
      </Transition>
    </a-app>
  </a-config-provider>
</template>
