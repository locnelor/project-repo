<script setup lang="ts">
import { useQiyunForm, type FormProps } from "@repo/form-ui";
import { Button } from "ant-design-vue"
import { Page } from "@repo/components";
import { reactive, ref } from "vue";


const layout = ref<any>("vertical");

const options = reactive<FormProps>({
  schema: [{
    component: "Select",
    name: "layout",
    label: "layout",
    rules: "required",
    defaultValue: "vertical",
    componentProps: {
      options: [{
        label: "vertical",
        value: "vertical"
      }, {
        label: "horizontal",
        value: "horizontal"
      }, {
        label: "inline",
        value: "inline"
      }]
    }
  }, {
    colon: false,
    component: "Input",
    name: "name2",
    label: "菜单名称2",
    rules: "required",
    dependencies: {
      dependsOn: ["layout"],
      if(values, formApi) {
        return values.layout === "vertical";
      },
      trigger(values, formApi) {
        console.log(values);
      }
    },
    componentProps: {
      placeholder: "只有在vertical布局下才会显示"
    },
  }],
  layout: layout.value,
  onValuesChange(values) {
    options.layout = values.layout;
  },
})
/**
 * 基本表单配置。
 */
const [Form, formApi] = useQiyunForm(options);
// const [Form2] = useQiyunForm({
//   schema: [{
//     component: "Input",
//     name: "name3",
//     rules: "required",
//     label: "菜单名称3"
//   }],
//   form: formApi.form
// })

const handleClick = () => {
  console.log(formApi)
  console.log(formApi.getValues())
  console.log(formApi.form.values)
  formApi.submitForm()
}
</script>

<template>
  <Page>
    {{ formApi.getValues() }}
    <Form />
    <div class="mt-20"></div>
    <!-- <Form2 /> -->
    <Button @click="handleClick">click</Button>
  </Page>
</template>

<style scoped lang="scss"></style>
