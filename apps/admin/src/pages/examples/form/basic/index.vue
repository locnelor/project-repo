<script setup lang="ts">
import { Page, useQiyunForm, z, type FormProps } from '@repo/components';
import { Card, message } from 'ant-design-vue';
import { reactive, watch } from 'vue';
import CustomComponent from './CustomComponent.vue';
const options = reactive<FormProps>({
    schema: [{
        component: "Input",
        name: "field1",
        label: "以qiyun开头",
        rules: z.string("请输入内容").startsWith("qiyun", "字符串需以qiyun为开始")
    }, {
        component: "InputNumber",
        name: "field6",
        label: "数字选择器",
        defaultValue: 8,
        rules: z.number("请输入").min(10, "最少10")
    }, {
        component: "Checkbox",
        name: "field2",
        label: "多选",
        defaultValue: ['1'],
        componentProps: {
            options: [{
                label: "表单1",
                value: "1"
            }, {
                label: "表单2",
                value: "2"
            }]
        }
    }, {
        component: "Radio",
        name: "layout",
        label: "layout",
        defaultValue: '1',
        componentProps: {
            options: [{
                label: "水平",
                value: "horizontal"
            }, {
                label: "垂直",
                value: "vertical"
            }, {
                label: "行内",
                value: "inline"
            }]
        }
    }, {
        component: "Select",
        name: "field4",
        label: "选择器",
        defaultValue: '2',
        componentProps: {
            options: [{
                label: "隐藏",
                value: "1"
            }, {
                label: "显示",
                value: "2"
            }],
            clearable: true
        },

    }, {
        component: "DatePicker",
        name: "field5",
        label: "时间选择器",
        dependencies: {
            dependsOn: ['field4'],
            if: (values) => values.field4 === '2'
        }
    }],
    onSubmit: (...rest) => {
        console.log(rest);
        message.success('success')
    },
    layout: "horizontal",
    showSubmitButton: true,
    showResetButton: true
})
const [Form, formApi] = useQiyunForm(options)
const [Form2] = useQiyunForm({
    form: formApi,
    schema: [{
        component: "Input",
        name: "user.name",
        label: "其他表单"
    }, {
        component: CustomComponent,
        name: "user.功德",
        label: "自定义表单"
    }]
})
watch(() => formApi.getValues(), (newValue) => {
    options.layout = newValue.layout;
})

</script>
<template>
    <Page title="表单组件" description="表单组件基础示例">
        <Card>
            {{ formApi.getValues() }}
            <div class="flex justify-between">
                <Form />
                <Form2 />
            </div>
        </Card>
    </Page>
</template>