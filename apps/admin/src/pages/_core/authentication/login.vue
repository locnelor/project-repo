<script lang="ts" setup>
import { ref } from 'vue';

import { Button, Checkbox, Form, FormItem, Input } from 'ant-design-vue';
import { useAuthStore } from "#/store";

const authStore = useAuthStore();

const params = ref({
  username: 'sky',
  password: '123456',
  deviceType: 'pc',
});
const loading = ref(false);
const handleFinish = async () => {
  loading.value = true;
  const result = await authStore.authLogin(params.value);
  if (!!result) {
    authStore.redirectFirstMenu();
  }
  loading.value = false;
};
const rememberMe = ref(false);
</script>

<template>
  <div>
    <div class="mb-2 text-4xl font-bold">欢迎回来👋🏻</div>
    <div class="mb-8 text-gray-700">请输入您的账户信息以开始管理您的项目</div>
    <Form :model="params" @finish="handleFinish">
      <FormItem name="username">
        <Input placeholder="请输入账号" v-model:value="params.username" />
      </FormItem>
      <FormItem name="password">
        <Input type="password" placeholder="请输入密码" v-model:value="params.password" />
      </FormItem>

      <div class="mb-6 flex justify-between">
        <div class="flex-center">
          <Checkbox v-model:checked="rememberMe" name="rememberMe">
            记住账号
          </Checkbox>
        </div>

        <span class="text-sm font-normal"> 忘记密码？ </span>
      </div>
      <FormItem>
        <Button :loading="loading" type="primary" block html-type="submit">登录</Button>
      </FormItem>
    </Form>
  </div>
</template>
