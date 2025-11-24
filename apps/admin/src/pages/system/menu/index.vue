<script setup lang="ts">
import { useQiyunForm } from "@repo/components";
import { Page } from "@repo/components";
import { getAllSysMenu } from "#/api/_core/menu/menu";
import { useRequest } from "@repo/request";
import { useTableDataSource } from "@repo/hooks";
import { Modal, Table, Button } from "ant-design-vue";
import { reactive, ref } from "vue";

const [{ loading, data }, api] = useRequest((params) => {
  return getAllSysMenu(params)
}, {
  defaultValue: [],
})
const open = ref(false);
const dataSource = useTableDataSource(data, true);
const [Form, searchApi] = useQiyunForm({
  schema: [{
    component: "Input",
    name: "name",
    label: "菜单标题"
  }],
  componentProps: {
    allowClear: true,
  },
  showSubmitButton: true,
  showResetButton: true,
  layout: "inline",
  onSubmit(values) {
    console.log(values, "123")
    api.run(values);
  },
});

const [AddForm, formApi] = useQiyunForm({
  schema: [{
    component: "Radio",
    name: "type",
    label: "菜单类型",
    componentProps: {
      options: [{
        label: "目录",
        value: 0
      }, {
        label: "菜单",
        value: 1
      }, {
        label: "按钮",
        value: 2
      },],
      class: "w-full",
      style: {
        width: "100%"
      }
    },

    defaultValue: 0
  }, {
    component: "Select",
    name: "pid",
    label: "上级菜单"
  }, {
    component: "Input",
    name: "name",
    label: "菜单标题",
    wrapperClass: "grid-cols-1"
  }, {
    component: "Input",
    name: "icon",
    label: "菜单图标"
  }, {
    component: "Radio",
    name: "mode",
    label: "归属模块",
    componentProps: {
      options: [{
        label: "APP",
        value: 'app'
      }, {
        label: "PC端模块",
        value: 'pc'
      },]
    }
  }, {
    component: "Input",
    name: "url",
    label: "路由地址"
  }, {
    component: "Input",
    name: "componentName",
    label: "组件路径"
  }, {
    component: "Input",
    name: "perms",
    label: "权限标识"
  }],
  wrapperClass: "grid-cols-2"
})

const columns = reactive([{
  title: "菜单标题",
  dataIndex: "name",
}, {
  title: "类型",
  dataIndex: "mode",
}, {
  title: "状态",
  dataIndex: "status",
}, {
  title: "路由地址",
  dataIndex: "url",
}, {
  title: "组件名称",
  dataIndex: "componentName",
}, {
  title: "组件路径",
  dataIndex: "componentPath",
}, {
  title: "权限标识",
  dataIndex: "permission",
}, {
  title: "操作",
  dataIndex: "operation",
},]);
</script>

<template>
  <Page>
    <template #title>
      <div class="flex justify-between">
        <Form />
        {{ searchApi.getValues() }}
        <Button type="primary" @click="open = true">添加菜单</Button>
      </div>
    </template>
    <Modal v-model:open="open" title="添加菜单">
      {{ formApi.getValues() }}
      <AddForm />
    </Modal>
    <Table :loading="loading" :data-source="dataSource" :columns="columns" />
  </Page>
</template>

<style scoped lang="scss"></style>
