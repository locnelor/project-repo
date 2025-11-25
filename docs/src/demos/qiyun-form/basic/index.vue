<template>
  <div class="demo-basic-form">
    <Form />
    <div class="form-result" v-if="formData">
      <h4>表单数据：</h4>
      <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQiyunForm } from '@repo/form-ui'
import { z } from 'zod'

// 表单数据
const formData = ref(null)

// 创建表单实例
const [Form, formApi] = useQiyunForm({
  layout: 'vertical',
  schema: [
    {
      component: 'Input',
      name: 'username',
      label: '用户名',
      rules: z.string().min(1, '请输入用户名').min(3, '用户名至少3个字符'),
      componentProps: {
        placeholder: '请输入用户名'
      }
    },
    {
      component: 'Input',
      name: 'email',
      label: '邮箱',
      rules: z.string().email('请输入有效的邮箱地址'),
      componentProps: {
        placeholder: '请输入邮箱地址'
      }
    },
    {
      component: 'Select',
      name: 'role',
      label: '角色',
      rules: z.string().min(1, '请选择角色'),
      componentProps: {
        placeholder: '请选择角色',
        options: [
          { label: '管理员', value: 'admin' },
          { label: '用户', value: 'user' },
          { label: '访客', value: 'guest' }
        ]
      }
    },
    {
      component: 'Checkbox',
      name: 'agree',
      label: '同意条款',
      rules: z.boolean().refine(val => val === true, '请同意用户协议'),
      componentProps: {
        children: '我已阅读并同意用户协议'
      }
    }
  ],
  onSubmit: async (values) => {
    console.log('表单提交:', values)
    formData.value = values
    return values
  }
})
</script>

<style scoped>
.demo-basic-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-result {
  margin-top: 24px;
  padding: 16px;
  background: #f6f8fa;
  border-radius: 6px;
  border: 1px solid #e1e5e9;
}

.form-result h4 {
  margin: 0 0 12px 0;
  color: #24292e;
  font-size: 14px;
  font-weight: 600;
}

.form-result pre {
  margin: 0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 12px;
  line-height: 1.5;
  color: #586069;
  background: none;
  padding: 0;
  overflow-x: auto;
}
</style>