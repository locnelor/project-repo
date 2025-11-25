# Form 表单组件

## 📋 概述

Form表单组件是一个基于 vee-validate 的高度可配置的表单解决方案。它支持 schema 驱动的表单创建，提供了丰富的表单验证、动态表单、表单联动等功能，适用于各种复杂的业务场景。

表单底层使用 vee-validate 进行表单验证，所以你可以使用 vee-validate 的所有功能。

## 🎯 核心思想

对于复杂业务逻辑，本质上还是一个表单。但是对于表单项是能支持自定义拆分，也就是表单与表单项的拆分。使用 zod 来自定义表单的创建，子项任意搭配，只要能够在表单组件上下文中即可随意组合。

### 设计理念

- **Schema 驱动** - 通过配置化的方式创建表单，减少重复代码
- **组件分离** - 表单容器与表单项分离，支持灵活组合
- **类型安全** - 基于 TypeScript 和 Zod 提供完整的类型支持
- **验证集成** - 深度集成 vee-validate，支持复杂验证规则
- **动态表单** - 支持表单项的动态显示、隐藏、禁用等

## 🚀 特性

- 🏗️ **Schema 配置** - 通过 JSON 配置快速创建表单
- 🔧 **灵活布局** - 支持水平、垂直、内联三种布局方式
- ✅ **强大验证** - 基于 Zod 和 vee-validate 的验证体系
- 🔄 **表单联动** - 支持字段间的依赖关系和动态更新
- 🎨 **自定义组件** - 支持注册和使用自定义表单组件
- 📱 **响应式** - 内置响应式设计，适配各种屏幕尺寸
- 🎯 **类型安全** - 完整的 TypeScript 类型支持

## 💡 基础用法

使用 `useQiyunForm` 来创建一个表单实例：
4
<DemoPreview dir="qiyun-form/basic" />

```vue
<template>
  <div>
    <Form />
    <div class="mt-4">
      <Button @click="handleSubmit" type="primary">提交</Button>
      <Button @click="handleReset" class="ml-2">重置</Button>
    </div>
  </div>
</template>

<script setup>
import { useQiyunForm } from "@repo/form-ui";
import { Button } from "ant-design-vue";
import { z } from "zod";

// 创建表单实例
const [Form, formApi] = useQiyunForm({
  // 表单配置
  layout: "vertical",
  schema: [
    {
      component: "Input",
      name: "username",
      label: "用户名",
      rules: z.string().min(1, "请输入用户名"),
      componentProps: {
        placeholder: "请输入用户名",
      },
    },
    {
      component: "Input",
      name: "email",
      label: "邮箱",
      rules: z.string().email("请输入正确的邮箱格式"),
      componentProps: {
        type: "email",
        placeholder: "请输入邮箱",
      },
    },
    {
      component: "Select",
      name: "role",
      label: "角色",
      rules: z.string().min(1, "请选择角色"),
      componentProps: {
        placeholder: "请选择角色",
        options: [
          { label: "管理员", value: "admin" },
          { label: "用户", value: "user" },
        ],
      },
    },
  ],
  // 提交回调
  onSubmit: (values) => {
    console.log("表单提交:", values);
  },
});

// 手动提交表单
const handleSubmit = async () => {
  await formApi.submitForm();
};

// 重置表单
const handleReset = () => {
  formApi.resetForm();
};
</script>
```

### 简单示例

```vue
<template>
  <Form />
</template>

<script setup>
import { useQiyunForm } from "@repo/form-ui";

const [Form] = useQiyunForm({
  schema: [
    {
      component: "Input",
      name: "name",
      label: "姓名",
      rules: "required",
    },
  ],
  onSubmit: (values) => {
    alert(`Hello, ${values.name}!`);
  },
});
</script>
```

## 🔧 Props 属性

### QiyunForm 组件属性

| 属性名               | 类型                                     | 默认值         | 说明                               |
| -------------------- | ---------------------------------------- | -------------- | ---------------------------------- |
| `layout`             | `'horizontal' \| 'vertical' \| 'inline'` | `'horizontal'` | 表单布局方式                       |
| `mode`               | `'create' \| 'edit' \| 'view'`           | `'create'`     | 表单模式，影响字段的显示和交互     |
| `schema`             | `FormSchema[]`                           | `[]`           | 表单字段配置数组                   |
| `initialValues`      | `Record<string, any>`                    | `{}`           | 表单初始值                         |
| `disabled`           | `boolean`                                | `false`        | 是否禁用整个表单                   |
| `readonly`           | `boolean`                                | `false`        | 是否只读模式                       |
| `size`               | `'small' \| 'middle' \| 'large'`         | `'middle'`     | 表单组件尺寸                       |
| `labelAlign`         | `'left' \| 'right'`                      | `'right'`      | 标签对齐方式                       |
| `labelWidth`         | `number \| string`                       | `auto`         | 标签宽度                           |
| `labelWrap`          | `boolean`                                | `false`        | 标签是否换行                       |
| `requiredMark`       | `boolean \| 'optional'`                  | `true`         | 必填标记显示方式                   |
| `colon`              | `boolean`                                | `true`         | 是否显示标签后的冒号               |
| `validateTrigger`    | `string \| string[]`                     | `'change'`     | 验证触发方式                       |
| `scrollToFirstError` | `boolean`                                | `false`        | 验证失败时是否滚动到第一个错误字段 |
| `autoComplete`       | `'on' \| 'off'`                          | `'off'`        | 表单自动完成                       |
| `preserve`           | `boolean`                                | `true`         | 是否保留字段值（卸载时）           |
| `name`               | `string`                                 | -              | 表单名称，用于 DevTools            |
| `gutter`             | `number \| [number, number]`             | `0`            | 表单项间距                         |
| `responsive`         | `boolean`                                | `true`         | 是否启用响应式布局                 |

### FormSchema 字段属性

| 属性名           | 类型                                                | 默认值  | 说明                                          |
| ---------------- | --------------------------------------------------- | ------- | --------------------------------------------- |
| `component`      | `BaseFormComponentType \| string`                   | -       | **必填** 组件类型                             |
| `name`           | `string`                                            | -       | **必填** 字段名称，支持嵌套路径如 `user.name` |
| `label`          | `string`                                            | -       | 字段标签文本                                  |
| `rules`          | `ZodSchema \| ZodSchema[]`                          | -       | 验证规则，使用 Zod 模式                       |
| `componentProps` | `Record<string, any>`                               | `{}`    | 传递给组件的属性                              |
| `dependencies`   | `FormItemDependencies`                              | -       | 字段依赖配置                                  |
| `hidden`         | `boolean`                                           | `false` | 是否隐藏字段                                  |
| `disabled`       | `boolean`                                           | `false` | 是否禁用字段                                  |
| `readonly`       | `boolean`                                           | `false` | 是否只读                                      |
| `required`       | `boolean`                                           | `false` | 是否必填（显示红色星号）                      |
| `help`           | `string`                                            | -       | 字段帮助信息                                  |
| `extra`          | `string`                                            | -       | 字段额外信息                                  |
| `tooltip`        | `string`                                            | -       | 标签提示信息                                  |
| `validateStatus` | `'success' \| 'warning' \| 'error' \| 'validating'` | -       | 验证状态                                      |
| `hasFeedback`    | `boolean`                                           | `false` | 是否显示验证反馈图标                          |
| `labelAlign`     | `'left' \| 'right'`                                 | -       | 标签对齐方式（覆盖表单设置）                  |
| `labelWidth`     | `number \| string`                                  | -       | 标签宽度（覆盖表单设置）                      |
| `wrapperProps`   | `Record<string, any>`                               | `{}`    | 字段包装器属性                                |

### 栅格布局属性

| 属性名   | 类型                                           | 默认值 | 说明                 |
| -------- | ---------------------------------------------- | ------ | -------------------- |
| `span`   | `number`                                       | `24`   | 栅格占位格数         |
| `offset` | `number`                                       | `0`    | 栅格左侧间隔格数     |
| `push`   | `number`                                       | `0`    | 栅格向右移动格数     |
| `pull`   | `number`                                       | `0`    | 栅格向左移动格数     |
| `order`  | `number`                                       | `0`    | 栅格顺序             |
| `xs`     | `number \| { span?: number; offset?: number }` | -      | `<576px` 响应式栅格  |
| `sm`     | `number \| { span?: number; offset?: number }` | -      | `≥576px` 响应式栅格  |
| `md`     | `number \| { span?: number; offset?: number }` | -      | `≥768px` 响应式栅格  |
| `lg`     | `number \| { span?: number; offset?: number }` | -      | `≥992px` 响应式栅格  |
| `xl`     | `number \| { span?: number; offset?: number }` | -      | `≥1200px` 响应式栅格 |
| `xxl`    | `number \| { span?: number; offset?: number }` | -      | `≥1600px` 响应式栅格 |

### FormItemDependencies 依赖属性

| 属性名      | 类型                                                        | 默认值 | 说明                      |
| ----------- | ----------------------------------------------------------- | ------ | ------------------------- |
| `fields`    | `string[]`                                                  | -      | **必填** 依赖的字段名数组 |
| `condition` | `(values: Record<string, any>) => boolean`                  | -      | 条件判断函数              |
| `props`     | `(values: Record<string, any>) => Record<string, any>`      | -      | 动态属性函数              |
| `rules`     | `(values: Record<string, any>) => ZodSchema \| ZodSchema[]` | -      | 动态验证规则函数          |
| `options`   | `(values: Record<string, any>) => any[]`                    | -      | 动态选项函数              |
| `show`      | `(values: Record<string, any>) => boolean`                  | -      | 显示/隐藏控制函数         |
| `disabled`  | `(values: Record<string, any>) => boolean`                  | -      | 禁用状态控制函数          |
| `required`  | `(values: Record<string, any>) => boolean`                  | -      | 必填状态控制函数          |

### 组件特定属性

#### Input 输入框

| 属性名        | 类型              | 默认值  | 说明             |
| ------------- | ----------------- | ------- | ---------------- |
| `placeholder` | `string`          | -       | 占位符文本       |
| `maxLength`   | `number`          | -       | 最大输入长度     |
| `showCount`   | `boolean`         | `false` | 是否显示字符计数 |
| `allowClear`  | `boolean`         | `false` | 是否显示清除按钮 |
| `addonBefore` | `string \| VNode` | -       | 前置标签         |
| `addonAfter`  | `string \| VNode` | -       | 后置标签         |
| `prefix`      | `string \| VNode` | -       | 前缀图标         |
| `suffix`      | `string \| VNode` | -       | 后缀图标         |

#### Select 选择器

| 属性名         | 类型                                                     | 默认值  | 说明                   |
| -------------- | -------------------------------------------------------- | ------- | ---------------------- |
| `options`      | `Array<{label: string, value: any, disabled?: boolean}>` | `[]`    | 选项数据               |
| `mode`         | `'multiple' \| 'tags'`                                   | -       | 选择模式               |
| `placeholder`  | `string`                                                 | -       | 占位符文本             |
| `allowClear`   | `boolean`                                                | `false` | 是否显示清除按钮       |
| `showSearch`   | `boolean`                                                | `false` | 是否支持搜索           |
| `filterOption` | `boolean \| function`                                    | `true`  | 是否根据输入项进行筛选 |
| `maxTagCount`  | `number`                                                 | -       | 最多显示多少个标签     |
| `loading`      | `boolean`                                                | `false` | 是否显示加载状态       |

#### DatePicker 日期选择器

| 属性名         | 类型                                                 | 默认值         | 说明             |
| -------------- | ---------------------------------------------------- | -------------- | ---------------- |
| `format`       | `string`                                             | `'YYYY-MM-DD'` | 日期格式         |
| `placeholder`  | `string`                                             | -              | 占位符文本       |
| `showTime`     | `boolean \| object`                                  | `false`        | 是否显示时间选择 |
| `disabledDate` | `(date: Dayjs) => boolean`                           | -              | 不可选择的日期   |
| `allowClear`   | `boolean`                                            | `true`         | 是否显示清除按钮 |
| `picker`       | `'date' \| 'week' \| 'month' \| 'quarter' \| 'year'` | `'date'`       | 选择器类型       |

#### Upload 上传

| 属性名          | 类型                                       | 默认值   | 说明           |
| --------------- | ------------------------------------------ | -------- | -------------- |
| `action`        | `string`                                   | -        | 上传地址       |
| `accept`        | `string`                                   | -        | 接受的文件类型 |
| `multiple`      | `boolean`                                  | `false`  | 是否支持多选   |
| `maxCount`      | `number`                                   | -        | 最大文件数量   |
| `listType`      | `'text' \| 'picture' \| 'picture-card'`    | `'text'` | 上传列表样式   |
| `beforeUpload`  | `(file: File) => boolean \| Promise<File>` | -        | 上传前的钩子   |
| `customRequest` | `function`                                 | -        | 自定义上传实现 |

### 事件回调属性

| 属性名           | 类型                                                                           | 说明             |
| ---------------- | ------------------------------------------------------------------------------ | ---------------- |
| `onSubmit`       | `(values: Record<string, any>) => void \| Promise<void>`                       | 表单提交回调     |
| `onValuesChange` | `(changedValues: Record<string, any>, allValues: Record<string, any>) => void` | 字段值变化回调   |
| `onReset`        | `() => void`                                                                   | 表单重置回调     |
| `onFinishFailed` | `(errorInfo: any) => void`                                                     | 表单验证失败回调 |
| `onFieldsChange` | `(changedFields: any[], allFields: any[]) => void`                             | 字段变化回调     |

### 样式定制属性

| 属性名              | 类型            | 默认值 | 说明            |
| ------------------- | --------------- | ------ | --------------- |
| `className`         | `string`        | -      | 自定义 CSS 类名 |
| `style`             | `CSSProperties` | -      | 自定义样式      |
| `formItemClassName` | `string`        | -      | 表单项 CSS 类名 |
| `formItemStyle`     | `CSSProperties` | -      | 表单项样式      |
| `labelClassName`    | `string`        | -      | 标签 CSS 类名   |
| `labelStyle`        | `CSSProperties` | -      | 标签样式        |
| `wrapperClassName`  | `string`        | -      | 包装器 CSS 类名 |
| `wrapperStyle`      | `CSSProperties` | -      | 包装器样式      |

## 🎯 Slots 插槽

表单组件提供了丰富的插槽支持，让你可以灵活定制表单的各个部分。

### 表单级插槽

#### `#header`

表单头部插槽，通常用于显示表单标题、描述或操作按钮。

```vue
<template>
  <QiyunForm>
    <template #header>
      <div class="form-header">
        <h2>用户信息表单</h2>
        <p>请填写完整的用户信息</p>
      </div>
    </template>
  </QiyunForm>
</template>
```

#### `#footer`

表单底部插槽，通常用于放置提交、重置等操作按钮。

```vue
<template>
  <QiyunForm>
    <template #footer="{ formApi, loading }">
      <div class="form-footer">
        <Button @click="formApi.resetFields()">重置</Button>
        <Button type="primary" :loading="loading" @click="formApi.submit()">
          提交
        </Button>
        <Button type="link" @click="handleCancel">取消</Button>
      </div>
    </template>
  </QiyunForm>
</template>
```

#### `#extra`

表单额外内容插槽，用于在表单中插入自定义内容。

```vue
<template>
  <QiyunForm>
    <template #extra>
      <Alert
        message="提示"
        description="请确保所有信息准确无误"
        type="info"
        show-icon
      />
    </template>
  </QiyunForm>
</template>
```

### 字段级插槽

#### `#[fieldName]`

为特定字段提供完全自定义的渲染。

```vue
<template>
  <QiyunForm>
    <template #username="{ field, formApi, errors }">
      <div class="custom-field">
        <label>{{ field.label }}</label>
        <Input
          :value="formApi.getFieldValue('username')"
          @update:value="formApi.setFieldValue('username', $event)"
          :status="errors.length > 0 ? 'error' : ''"
        />
        <div v-if="errors.length > 0" class="error-message">
          {{ errors[0] }}
        </div>
      </div>
    </template>
  </QiyunForm>
</template>
```

#### `#[fieldName]-label`

自定义字段标签。

```vue
<template>
  <QiyunForm>
    <template #email-label>
      <span>
        <MailOutlined />
        邮箱地址
        <Tooltip title="用于接收重要通知">
          <QuestionCircleOutlined />
        </Tooltip>
      </span>
    </template>
  </QiyunForm>
</template>
```

#### `#[fieldName]-help`

自定义字段帮助信息。

```vue
<template>
  <QiyunForm>
    <template #password-help>
      <div class="password-help">
        <p>密码要求：</p>
        <ul>
          <li>至少8个字符</li>
          <li>包含大小写字母</li>
          <li>包含数字和特殊字符</li>
        </ul>
      </div>
    </template>
  </QiyunForm>
</template>
```

#### `#[fieldName]-extra`

自定义字段额外信息。

```vue
<template>
  <QiyunForm>
    <template #avatar-extra="{ field, formApi }">
      <div class="avatar-preview">
        <img
          v-if="formApi.getFieldValue('avatar')"
          :src="formApi.getFieldValue('avatar')"
          alt="头像预览"
          style="width: 100px; height: 100px; object-fit: cover;"
        />
      </div>
    </template>
  </QiyunForm>
</template>
```

### 组件内部插槽

#### Select 选择器插槽

```vue
<template>
  <QiyunForm>
    <template #category-option="{ option }">
      <div class="custom-option">
        <Icon :type="option.icon" />
        <span>{{ option.label }}</span>
        <Tag v-if="option.hot" color="red">热门</Tag>
      </div>
    </template>

    <template #category-suffixIcon>
      <DownOutlined />
    </template>
  </QiyunForm>
</template>
```

#### Upload 上传组件插槽

```vue
<template>
  <QiyunForm>
    <template #files-uploadButton>
      <div class="custom-upload-button">
        <PlusOutlined />
        <div>点击上传</div>
      </div>
    </template>

    <template #files-itemRender="{ file, actions }">
      <div class="custom-file-item">
        <FileOutlined />
        <span>{{ file.name }}</span>
        <Button size="small" @click="actions.preview(file)">预览</Button>
        <Button size="small" danger @click="actions.remove(file)">删除</Button>
      </div>
    </template>
  </QiyunForm>
</template>
```

### 动态插槽

#### 条件插槽

```vue
<template>
  <QiyunForm>
    <template #userType-extra="{ formApi }">
      <div v-if="formApi.getFieldValue('userType') === 'vip'">
        <Alert message="VIP用户享有更多特权" type="success" />
      </div>
    </template>
  </QiyunForm>
</template>
```

#### 循环插槽

```vue
<template>
  <QiyunForm>
    <template #contacts-item="{ item, index, actions }">
      <Card :title="`联系人 ${index + 1}`">
        <template #extra>
          <Button size="small" danger @click="actions.remove(index)">
            删除
          </Button>
        </template>

        <Row :gutter="16">
          <Col :span="12">
            <FormItem label="姓名">
              <Input
                :value="item.name"
                @update:value="actions.update(index, 'name', $event)"
              />
            </FormItem>
          </Col>
          <Col :span="12">
            <FormItem label="电话">
              <Input
                :value="item.phone"
                @update:value="actions.update(index, 'phone', $event)"
              />
            </FormItem>
          </Col>
        </Row>
      </Card>
    </template>

    <template #contacts-addButton="{ actions }">
      <Button type="dashed" block @click="actions.add()">
        <PlusOutlined />
        添加联系人
      </Button>
    </template>
  </QiyunForm>
</template>
```

### 插槽参数

#### 通用插槽参数

| 参数名     | 类型                  | 说明             |
| ---------- | --------------------- | ---------------- |
| `field`    | `FormSchema`          | 当前字段配置     |
| `formApi`  | `FormApi`             | 表单API实例      |
| `values`   | `Record<string, any>` | 当前表单所有值   |
| `errors`   | `string[]`            | 当前字段错误信息 |
| `loading`  | `boolean`             | 表单提交状态     |
| `disabled` | `boolean`             | 字段禁用状态     |
| `readonly` | `boolean`             | 字段只读状态     |

#### 特定插槽参数

##### `#footer` 插槽参数

| 参数名    | 类型      | 说明           |
| --------- | --------- | -------------- |
| `formApi` | `FormApi` | 表单API实例    |
| `loading` | `boolean` | 表单提交状态   |
| `valid`   | `boolean` | 表单验证状态   |
| `dirty`   | `boolean` | 表单是否有变更 |

##### `#[fieldName]-option` 插槽参数

| 参数名     | 类型      | 说明     |
| ---------- | --------- | -------- |
| `option`   | `any`     | 选项数据 |
| `index`    | `number`  | 选项索引 |
| `selected` | `boolean` | 是否选中 |

##### `#[fieldName]-item` 插槽参数

| 参数名    | 类型     | 说明         |
| --------- | -------- | ------------ |
| `item`    | `any`    | 列表项数据   |
| `index`   | `number` | 项目索引     |
| `actions` | `object` | 操作方法集合 |

### 插槽使用示例

#### 完整的自定义表单

```vue
<template>
  <QiyunForm :schema="schema">
    <!-- 表单头部 -->
    <template #header>
      <div class="form-header">
        <Title level={3}>个人信息设置</Title>
        <Text type="secondary">请完善您的个人信息</Text>
      </div>
    </template>

    <!-- 自定义头像字段 -->
    <template #avatar="{ formApi }">
      <div class="avatar-field">
        <Avatar
          :size="100"
          :src="formApi.getFieldValue('avatar')"
          icon={<UserOutlined />}
        />
        <Upload
          :show-upload-list="false"
          :before-upload="handleAvatarUpload"
        >
          <Button>
            <UploadOutlined />
            更换头像
          </Button>
        </Upload>
      </div>
    </template>

    <!-- 自定义技能标签 -->
    <template #skills-extra="{ formApi }">
      <div class="skills-suggestions">
        <Text>推荐技能：</Text>
        <Tag
          v-for="skill in suggestedSkills"
          :key="skill"
          @click="addSkill(skill, formApi)"
          style="cursor: pointer; margin: 2px;"
        >
          {{ skill }}
        </Tag>
      </div>
    </template>

    <!-- 表单底部 -->
    <template #footer="{ formApi, loading, valid }">
      <div class="form-footer">
        <Space>
          <Button @click="formApi.resetFields()">
            重置
          </Button>
          <Button
            type="primary"
            :loading="loading"
            :disabled="!valid"
            @click="formApi.submit()"
          >
            保存设置
          </Button>
        </Space>
      </div>
    </template>
  </QiyunForm>
</template>

<script setup>
import { ref } from 'vue';
import { useQiyunForm } from '@repo/form-ui';
import { z } from 'zod';

const suggestedSkills = ['Vue.js', 'React', 'TypeScript', 'Node.js'];

const schema = [
  {
    component: 'Input',
    name: 'avatar',
    label: '头像',
    hidden: true
  },
  {
    component: 'Input',
    name: 'name',
    label: '姓名',
    rules: z.string().min(1, '请输入姓名')
  },
  {
    component: 'TagInput',
    name: 'skills',
    label: '技能标签',
    rules: z.array(z.string()).min(1, '请至少添加一个技能')
  }
];

const handleAvatarUpload = (file) => {
  // 处理头像上传逻辑
  return false;
};

const addSkill = (skill, formApi) => {
  const currentSkills = formApi.getFieldValue('skills') || [];
  if (!currentSkills.includes(skill)) {
    formApi.setFieldValue('skills', [...currentSkills, skill]);
  }
};
</script>
```

## 📚 API 文档

### useQiyunForm

表单的核心 Hook，用于创建和管理表单实例。

#### 语法

```typescript
const [FormComponent, formApi] = useQiyunForm(options);
```

#### 参数

- **options** `FormOptions` - 表单配置选项

#### 返回值

- **FormComponent** `Component` - 表单组件
- **formApi** `FormApi` - 表单API实例

#### FormOptions

```typescript
interface FormOptions {
  // 表单布局
  layout?: "horizontal" | "vertical" | "inline";

  // 表单模式
  mode?: "create" | "edit" | "view";

  // 表单字段配置
  schema: FormSchema[];

  // 初始值
  initialValues?: Record<string, any>;

  // 表单提交处理
  onSubmit?: (values: Record<string, any>) => void | Promise<void>;

  // 表单值变化处理
  onValuesChange?: (
    changedValues: Record<string, any>,
    allValues: Record<string, any>,
  ) => void;

  // 表单重置处理
  onReset?: () => void;

  // 表单验证失败处理
  onFinishFailed?: (errorInfo: any) => void;

  // 是否保留字段值
  preserve?: boolean;

  // 表单名称
  name?: string;

  // 是否禁用表单
  disabled?: boolean;

  // 表单大小
  size?: "small" | "middle" | "large";

  // 标签对齐方式
  labelAlign?: "left" | "right";

  // 标签宽度
  labelWidth?: number | string;

  // 标签换行
  labelWrap?: boolean;

  // 必填标记位置
  requiredMark?: boolean | "optional";

  // 冒号显示
  colon?: boolean;

  // 验证触发方式
  validateTrigger?: string | string[];

  // 滚动到错误字段
  scrollToFirstError?: boolean;

  // 自动完成
  autoComplete?: "on" | "off";

  // 表单项间距
  gutter?: number | [number, number];

  // 响应式配置
  responsive?: boolean;

  // 提供给子组件的数据
  provide?: Record<string, any>;
}
```

#### FormSchema

```typescript
interface FormSchema {
  // 组件类型
  component: BaseFormComponentType | string;

  // 字段名称
  name: string;

  // 字段标签
  label?: string;

  // 验证规则
  rules?: ZodSchema | ZodSchema[];

  // 组件属性
  componentProps?: Record<string, any>;

  // 字段依赖
  dependencies?: FormItemDependencies;

  // 是否隐藏
  hidden?: boolean;

  // 是否禁用
  disabled?: boolean;

  // 是否只读
  readonly?: boolean;

  // 字段说明
  help?: string;

  // 额外信息
  extra?: string;

  // 标签提示
  tooltip?: string;

  // 是否必填
  required?: boolean;

  // 验证状态
  validateStatus?: "success" | "warning" | "error" | "validating";

  // 是否有反馈图标
  hasFeedback?: boolean;

  // 标签对齐
  labelAlign?: "left" | "right";

  // 标签宽度
  labelWidth?: number | string;

  // 包装器属性
  wrapperProps?: Record<string, any>;

  // 栅格布局
  span?: number;
  offset?: number;
  push?: number;
  pull?: number;
  order?: number;

  // 响应式栅格
  xs?: number | { span?: number; offset?: number };
  sm?: number | { span?: number; offset?: number };
  md?: number | { span?: number; offset?: number };
  lg?: number | { span?: number; offset?: number };
  xl?: number | { span?: number; offset?: number };
  xxl?: number | { span?: number; offset?: number };
}
```

#### FormItemDependencies

```typescript
interface FormItemDependencies {
  // 依赖的字段名
  fields: string[];

  // 条件函数
  condition?: (values: Record<string, any>) => boolean;

  // 动态属性
  props?: (values: Record<string, any>) => Record<string, any>;

  // 动态规则
  rules?: (values: Record<string, any>) => ZodSchema | ZodSchema[];

  // 动态选项
  options?: (values: Record<string, any>) => any[];

  // 是否显示
  show?: (values: Record<string, any>) => boolean;

  // 是否禁用
  disabled?: (values: Record<string, any>) => boolean;

  // 是否必填
  required?: (values: Record<string, any>) => boolean;
}
```

### FormApi

表单API实例，提供表单操作方法。

#### 方法

##### getFieldValue

获取字段值。

```typescript
getFieldValue(name: string): any
```

##### getFieldsValue

获取多个字段值或所有字段值。

```typescript
getFieldsValue(): Record<string, any>
getFieldsValue(nameList: string[]): Record<string, any>
```

##### setFieldValue

设置字段值。

```typescript
setFieldValue(name: string, value: any): void
```

##### setFieldsValue

设置多个字段值。

```typescript
setFieldsValue(values: Record<string, any>): void
```

##### resetFields

重置字段。

```typescript
resetFields(): void
resetFields(nameList: string[]): void
```

##### validateFields

验证字段。

```typescript
validateFields(): Promise<Record<string, any>>
validateFields(nameList: string[]): Promise<Record<string, any>>
```

##### validateField

验证单个字段。

```typescript
validateField(name: string): Promise<any>
```

##### clearValidate

清除验证状态。

```typescript
clearValidate(): void
clearValidate(nameList: string[]): void
```

##### submit

提交表单。

```typescript
submit(): Promise<void>
```

##### getFieldError

获取字段错误信息。

```typescript
getFieldError(name: string): string[]
```

##### getFieldsError

获取多个字段错误信息。

```typescript
getFieldsError(): Array<{ name: string; errors: string[] }>
getFieldsError(nameList: string[]): Array<{ name: string; errors: string[] }>
```

##### isFieldTouched

检查字段是否被触摸。

```typescript
isFieldTouched(name: string): boolean
```

##### isFieldsTouched

检查多个字段是否被触摸。

```typescript
isFieldsTouched(): boolean
isFieldsTouched(nameList: string[], allTouched?: boolean): boolean
```

##### isFieldValidating

检查字段是否正在验证。

```typescript
isFieldValidating(name: string): boolean
```

##### scrollToField

滚动到指定字段。

```typescript
scrollToField(name: string, options?: ScrollOptions): void
```

### registerFormComponent

注册自定义表单组件。

#### 语法

```typescript
registerFormComponent(name: string, component: Component): void
```

#### 参数

- **name** `string` - 组件名称
- **component** `Component` - Vue组件

#### 示例

```typescript
import { registerFormComponent } from "@repo/form-ui";
import CustomInput from "./CustomInput.vue";

registerFormComponent("CustomInput", CustomInput);
```

### 内置组件类型

```typescript
type BaseFormComponentType =
  | "Input" // 输入框
  | "InputPassword" // 密码输入框
  | "InputNumber" // 数字输入框
  | "InputSearch" // 搜索输入框
  | "Textarea" // 文本域
  | "Select" // 选择器
  | "TreeSelect" // 树选择器
  | "Cascader" // 级联选择器
  | "DatePicker" // 日期选择器
  | "TimePicker" // 时间选择器
  | "RangePicker" // 范围选择器
  | "Upload" // 上传
  | "Switch" // 开关
  | "Slider" // 滑动输入条
  | "Rate" // 评分
  | "Checkbox" // 多选框
  | "CheckboxGroup" // 多选框组
  | "Radio" // 单选框
  | "RadioGroup" // 单选框组
  | "AutoComplete" // 自动完成
  | "Mention" // 提及
  | "Transfer" // 穿梭框
  | "ColorPicker"; // 颜色选择器
```

### 工具函数

#### createFormSchema

创建表单配置的工具函数。

```typescript
function createFormSchema<T = any>(schema: FormSchema[]): FormSchema[] {
  return schema;
}
```

#### createFormRules

创建验证规则的工具函数。

```typescript
function createFormRules<T = any>(
  rules: Record<keyof T, ZodSchema>,
): Record<keyof T, ZodSchema> {
  return rules;
}
```

#### mergeFormOptions

合并表单选项的工具函数。

```typescript
function mergeFormOptions(
  defaultOptions: Partial<FormOptions>,
  userOptions: Partial<FormOptions>,
): FormOptions {
  // 实现合并逻辑
}
```

## 🎨 自定义组件

表单组件支持注册和使用自定义组件，让你可以根据业务需求扩展表单功能。

### 注册自定义组件

```vue
<template>
  <CustomComponentForm />
</template>

<script setup>
import { useQiyunForm, registerFormComponent } from "@repo/form-ui";
import { z } from "zod";
import { defineComponent, ref } from "vue";
import { Input, Button, Upload, message } from "ant-design-vue";
import { UploadOutlined } from "@ant-design/icons-vue";

// 自定义图片上传组件
const ImageUploader = defineComponent({
  name: "ImageUploader",
  props: {
    value: {
      type: [String, Array],
      default: "",
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    maxCount: {
      type: Number,
      default: 1,
    },
  },
  emits: ["update:value", "change"],
  setup(props, { emit }) {
    const fileList = ref([]);

    const handleChange = (info) => {
      let newFileList = [...info.fileList];

      // 限制文件数量
      newFileList = newFileList.slice(-props.maxCount);

      // 只保留已上传成功的文件
      newFileList = newFileList.map((file) => {
        if (file.response) {
          file.url = file.response.url;
        }
        return file;
      });

      fileList.value = newFileList;

      // 提取URL值
      const urls = newFileList
        .filter((file) => file.status === "done")
        .map((file) => file.url || file.response?.url)
        .filter(Boolean);

      const value = props.multiple ? urls : urls[0] || "";
      emit("update:value", value);
      emit("change", value);
    };

    const beforeUpload = (file) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("只能上传图片文件！");
        return false;
      }

      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error("图片大小不能超过 2MB！");
        return false;
      }

      return true;
    };

    return () => (
      <Upload
        fileList={fileList.value}
        action="/api/upload"
        beforeUpload={beforeUpload}
        onChange={handleChange}
        multiple={props.multiple}
        listType="picture"
      >
        {fileList.value.length < props.maxCount && (
          <Button icon={<UploadOutlined />}>上传图片</Button>
        )}
      </Upload>
    );
  },
});

// 自定义标签输入组件
const TagInput = defineComponent({
  name: "TagInput",
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "请输入标签",
    },
  },
  emits: ["update:value", "change"],
  setup(props, { emit }) {
    const inputValue = ref("");
    const inputRef = ref();

    const handleInputConfirm = () => {
      const value = inputValue.value.trim();
      if (value && !props.value.includes(value)) {
        const newTags = [...props.value, value];
        emit("update:value", newTags);
        emit("change", newTags);
      }
      inputValue.value = "";
    };

    const handleClose = (removedTag) => {
      const newTags = props.value.filter((tag) => tag !== removedTag);
      emit("update:value", newTags);
      emit("change", newTags);
    };

    return () => (
      <div class="tag-input">
        {props.value.map((tag) => (
          <span key={tag} class="tag">
            {tag}
            <button onClick={() => handleClose(tag)}>×</button>
          </span>
        ))}
        <Input
          ref={inputRef}
          value={inputValue.value}
          placeholder={props.placeholder}
          size="small"
          style={{ width: "120px" }}
          onUpdate:value={(val) => (inputValue.value = val)}
          onPressEnter={handleInputConfirm}
          onBlur={handleInputConfirm}
        />
      </div>
    );
  },
});

// 自定义富文本编辑器组件
const RichTextEditor = defineComponent({
  name: "RichTextEditor",
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "请输入内容",
    },
    height: {
      type: Number,
      default: 200,
    },
  },
  emits: ["update:value", "change"],
  setup(props, { emit }) {
    const editorRef = ref();

    const handleChange = (content) => {
      emit("update:value", content);
      emit("change", content);
    };

    return () => (
      <div class="rich-text-editor">
        <div class="toolbar">
          <button onClick={() => document.execCommand("bold")}>B</button>
          <button onClick={() => document.execCommand("italic")}>I</button>
          <button onClick={() => document.execCommand("underline")}>U</button>
        </div>
        <div
          ref={editorRef}
          contenteditable
          style={{
            height: `${props.height}px`,
            border: "1px solid #d9d9d9",
            padding: "8px",
            minHeight: "100px",
          }}
          innerHTML={props.value}
          onInput={(e) => handleChange(e.target.innerHTML)}
          placeholder={props.placeholder}
        />
      </div>
    );
  },
});

// 注册自定义组件
registerFormComponent("ImageUploader", ImageUploader);
registerFormComponent("TagInput", TagInput);
registerFormComponent("RichTextEditor", RichTextEditor);

const [CustomComponentForm] = useQiyunForm({
  layout: "vertical",
  schema: [
    {
      component: "Input",
      name: "title",
      label: "文章标题",
      rules: z.string().min(1, "请输入文章标题"),
      componentProps: {
        placeholder: "请输入文章标题",
      },
    },
    {
      component: "ImageUploader",
      name: "coverImage",
      label: "封面图片",
      rules: z.string().min(1, "请上传封面图片"),
      componentProps: {
        multiple: false,
        maxCount: 1,
      },
    },
    {
      component: "ImageUploader",
      name: "gallery",
      label: "图片集",
      rules: z.array(z.string()).optional(),
      componentProps: {
        multiple: true,
        maxCount: 5,
      },
    },
    {
      component: "TagInput",
      name: "tags",
      label: "标签",
      rules: z.array(z.string()).min(1, "请至少添加一个标签"),
      componentProps: {
        placeholder: "输入标签后按回车",
      },
    },
    {
      component: "RichTextEditor",
      name: "content",
      label: "文章内容",
      rules: z.string().min(10, "文章内容至少10个字符"),
      componentProps: {
        placeholder: "请输入文章内容",
        height: 300,
      },
    },
  ],
  onSubmit: (values) => {
    console.log("自定义组件表单提交:", values);
  },
});
</script>

<style scoped>
.tag-input {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  background: #f0f0f0;
  border-radius: 4px;
  font-size: 12px;
}

.tag button {
  margin-left: 4px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 14px;
  color: #999;
}

.rich-text-editor .toolbar {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid #d9d9d9;
  border-bottom: none;
  background: #fafafa;
}

.rich-text-editor .toolbar button {
  padding: 4px 8px;
  border: 1px solid #d9d9d9;
  background: white;
  cursor: pointer;
  border-radius: 4px;
}

.rich-text-editor .toolbar button:hover {
  background: #f0f0f0;
}
</style>
```

### 使用第三方组件

```vue
<template>
  <ThirdPartyComponentForm />
</template>

<script setup>
import { useQiyunForm, registerFormComponent } from "@repo/form-ui";
import { z } from "zod";
import { defineComponent } from "vue";

// 假设使用第三方日期范围选择器
import DateRangePicker from "some-date-range-picker";

// 包装第三方组件以适配表单
const WrappedDateRangePicker = defineComponent({
  name: "WrappedDateRangePicker",
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    format: {
      type: String,
      default: "YYYY-MM-DD",
    },
    placeholder: {
      type: Array,
      default: () => ["开始日期", "结束日期"],
    },
  },
  emits: ["update:value", "change"],
  setup(props, { emit }) {
    const handleChange = (dates) => {
      emit("update:value", dates);
      emit("change", dates);
    };

    return () => (
      <DateRangePicker
        value={props.value}
        format={props.format}
        placeholder={props.placeholder}
        onChange={handleChange}
      />
    );
  },
});

// 自定义评分组件
const StarRating = defineComponent({
  name: "StarRating",
  props: {
    value: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 5,
    },
    allowHalf: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:value", "change"],
  setup(props, { emit }) {
    const handleClick = (rating) => {
      emit("update:value", rating);
      emit("change", rating);
    };

    return () => (
      <div class="star-rating">
        {Array.from({ length: props.max }, (_, index) => {
          const rating = index + 1;
          const isFilled = rating <= props.value;
          const isHalfFilled = props.allowHalf && rating - 0.5 === props.value;

          return (
            <span
              key={rating}
              class={[
                "star",
                { filled: isFilled, "half-filled": isHalfFilled },
              ]}
              onClick={() => handleClick(rating)}
            >
              ★
            </span>
          );
        })}
      </div>
    );
  },
});

// 注册组件
registerFormComponent("DateRangePicker", WrappedDateRangePicker);
registerFormComponent("StarRating", StarRating);

const [ThirdPartyComponentForm] = useQiyunForm({
  layout: "vertical",
  schema: [
    {
      component: "Input",
      name: "eventName",
      label: "活动名称",
      rules: z.string().min(1, "请输入活动名称"),
      componentProps: {
        placeholder: "请输入活动名称",
      },
    },
    {
      component: "DateRangePicker",
      name: "dateRange",
      label: "活动时间",
      rules: z.array(z.date()).length(2, "请选择活动开始和结束时间"),
      componentProps: {
        format: "YYYY-MM-DD HH:mm",
        placeholder: ["活动开始时间", "活动结束时间"],
      },
    },
    {
      component: "StarRating",
      name: "priority",
      label: "优先级",
      rules: z.number().min(1, "请选择优先级"),
      componentProps: {
        max: 5,
        allowHalf: false,
      },
    },
    {
      component: "StarRating",
      name: "satisfaction",
      label: "满意度",
      rules: z.number().min(0.5, "请选择满意度"),
      componentProps: {
        max: 5,
        allowHalf: true,
      },
    },
  ],
  onSubmit: (values) => {
    console.log("第三方组件表单提交:", values);
  },
});
</script>

<style scoped>
.star-rating {
  display: flex;
  gap: 4px;
}

.star {
  font-size: 20px;
  color: #ddd;
  cursor: pointer;
  transition: color 0.2s;
}

.star.filled {
  color: #ffd700;
}

.star.half-filled {
  background: linear-gradient(90deg, #ffd700 50%, #ddd 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.star:hover {
  color: #ffd700;
}
</style>
```

### 组件通信与事件处理

```vue
<template>
  <CommunicationForm />
</template>

<script setup>
import { useQiyunForm, registerFormComponent } from "@repo/form-ui";
import { z } from "zod";
import { defineComponent, ref, inject } from "vue";
import { Button, Modal, List } from "ant-design-vue";

// 自定义选择器组件，支持与表单通信
const CustomSelector = defineComponent({
  name: "CustomSelector",
  props: {
    value: {
      type: [String, Array],
      default: "",
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "请选择",
    },
  },
  emits: ["update:value", "change"],
  setup(props, { emit }) {
    const visible = ref(false);
    const selectedItems = ref(
      props.multiple ? props.value || [] : [props.value].filter(Boolean),
    );

    // 注入表单上下文
    const formApi = inject("formApi", null);

    const handleSelect = (item) => {
      if (props.multiple) {
        const index = selectedItems.value.findIndex(
          (selected) => selected.value === item.value,
        );
        if (index > -1) {
          selectedItems.value.splice(index, 1);
        } else {
          selectedItems.value.push(item);
        }
      } else {
        selectedItems.value = [item];
        visible.value = false;
      }
    };

    const handleConfirm = () => {
      const value = props.multiple
        ? selectedItems.value.map((item) => item.value)
        : selectedItems.value[0]?.value || "";

      emit("update:value", value);
      emit("change", value);

      // 可以触发其他字段的更新
      if (formApi) {
        formApi.validateField("relatedField");
      }

      visible.value = false;
    };

    const displayText = () => {
      if (selectedItems.value.length === 0) return props.placeholder;
      return selectedItems.value.map((item) => item.label).join(", ");
    };

    return () => (
      <div>
        <Button onClick={() => (visible.value = true)}>{displayText()}</Button>
        <Modal
          title="请选择"
          visible={visible.value}
          onOk={handleConfirm}
          onCancel={() => (visible.value = false)}
        >
          <List
            dataSource={props.options}
            renderItem={(item) => (
              <List.Item
                onClick={() => handleSelect(item)}
                style={{
                  cursor: "pointer",
                  background: selectedItems.value.some(
                    (selected) => selected.value === item.value,
                  )
                    ? "#f0f0f0"
                    : "transparent",
                }}
              >
                {item.label}
              </List.Item>
            )}
          />
        </Modal>
      </div>
    );
  },
});

registerFormComponent("CustomSelector", CustomSelector);

const [CommunicationForm, formApi] = useQiyunForm({
  layout: "vertical",
  // 提供表单API给子组件
  provide: {
    formApi,
  },
  schema: [
    {
      component: "CustomSelector",
      name: "category",
      label: "分类",
      rules: z.string().min(1, "请选择分类"),
      componentProps: {
        multiple: false,
        options: [
          { label: "电子产品", value: "electronics" },
          { label: "服装鞋帽", value: "clothing" },
          { label: "家居用品", value: "home" },
          { label: "图书音像", value: "books" },
        ],
      },
    },
    {
      component: "CustomSelector",
      name: "tags",
      label: "标签",
      rules: z.array(z.string()).min(1, "请至少选择一个标签"),
      componentProps: {
        multiple: true,
        options: [
          { label: "热门", value: "hot" },
          { label: "新品", value: "new" },
          { label: "促销", value: "sale" },
          { label: "限量", value: "limited" },
        ],
      },
    },
    {
      component: "Input",
      name: "relatedField",
      label: "相关字段",
      rules: z.string().optional(),
      componentProps: {
        placeholder: "这个字段会在选择器变化时验证",
      },
    },
  ],
  onSubmit: (values) => {
    console.log("组件通信表单提交:", values);
  },
});
</script>
```

## 🔄 表单联动（Dependencies）

表单联动是指表单项之间存在依赖关系，一个字段的值变化会影响其他字段的显示、隐藏、禁用状态或选项内容。本组件提供了强大的联动功能。

### 基础联动

```vue
<template>
  <BasicDependencyForm />
</template>

<script setup>
import { useQiyunForm } from "@repo/form-ui";
import { z } from "zod";

const [BasicDependencyForm] = useQiyunForm({
  layout: "vertical",
  schema: [
    {
      component: "Select",
      name: "hasAddress",
      label: "是否有收货地址",
      rules: z.enum(["yes", "no"], {
        errorMap: () => ({ message: "请选择是否有收货地址" }),
      }),
      componentProps: {
        placeholder: "请选择",
        options: [
          { label: "是", value: "yes" },
          { label: "否", value: "no" },
        ],
      },
    },
    {
      component: "Select",
      name: "province",
      label: "省份",
      rules: z.string().optional(),
      componentProps: {
        placeholder: "请选择省份",
        options: [
          { label: "北京市", value: "beijing" },
          { label: "上海市", value: "shanghai" },
          { label: "广东省", value: "guangdong" },
          { label: "浙江省", value: "zhejiang" },
        ],
      },
      dependencies: {
        hasAddress: {
          when: (value) => value === "yes",
          then: {
            show: true,
            rules: z.string().min(1, "请选择省份"),
          },
          else: {
            show: false,
            rules: z.string().optional(),
          },
        },
      },
    },
    {
      component: "Select",
      name: "city",
      label: "城市",
      rules: z.string().optional(),
      componentProps: {
        placeholder: "请选择城市",
        options: [],
      },
      dependencies: {
        hasAddress: {
          when: (value) => value === "yes",
          then: {
            show: true,
          },
          else: {
            show: false,
          },
        },
        province: {
          when: (value) => !!value,
          then: {
            componentProps: {
              options: (formValues) => {
                const cityMap = {
                  beijing: [
                    { label: "东城区", value: "dongcheng" },
                    { label: "西城区", value: "xicheng" },
                    { label: "朝阳区", value: "chaoyang" },
                  ],
                  shanghai: [
                    { label: "黄浦区", value: "huangpu" },
                    { label: "徐汇区", value: "xuhui" },
                    { label: "长宁区", value: "changning" },
                  ],
                  guangdong: [
                    { label: "广州市", value: "guangzhou" },
                    { label: "深圳市", value: "shenzhen" },
                    { label: "珠海市", value: "zhuhai" },
                  ],
                  zhejiang: [
                    { label: "杭州市", value: "hangzhou" },
                    { label: "宁波市", value: "ningbo" },
                    { label: "温州市", value: "wenzhou" },
                  ],
                };
                return cityMap[formValues.province] || [];
              },
            },
            rules: z.string().min(1, "请选择城市"),
          },
          else: {
            componentProps: {
              options: [],
            },
            rules: z.string().optional(),
          },
        },
      },
    },
    {
      component: "Input",
      name: "detailAddress",
      label: "详细地址",
      rules: z.string().optional(),
      componentProps: {
        placeholder: "请输入详细地址",
      },
      dependencies: {
        hasAddress: {
          when: (value) => value === "yes",
          then: {
            show: true,
            rules: z.string().min(1, "请输入详细地址"),
          },
          else: {
            show: false,
          },
        },
      },
    },
  ],
  onSubmit: (values) => {
    console.log("基础联动表单提交:", values);
  },
});
</script>
```

### 复杂联动场景

```vue
<template>
  <ComplexDependencyForm />
</template>

<script setup>
import { useQiyunForm } from "@repo/form-ui";
import { z } from "zod";

const [ComplexDependencyForm] = useQiyunForm({
  layout: "vertical",
  schema: [
    {
      component: "Select",
      name: "productType",
      label: "产品类型",
      rules: z.enum(["physical", "digital", "service"], {
        errorMap: () => ({ message: "请选择产品类型" }),
      }),
      componentProps: {
        placeholder: "请选择产品类型",
        options: [
          { label: "实体商品", value: "physical" },
          { label: "数字商品", value: "digital" },
          { label: "服务商品", value: "service" },
        ],
      },
    },
    {
      component: "InputNumber",
      name: "weight",
      label: "重量(kg)",
      rules: z.number().optional(),
      componentProps: {
        placeholder: "请输入重量",
        min: 0,
        precision: 2,
      },
      dependencies: {
        productType: {
          when: (value) => value === "physical",
          then: {
            show: true,
            rules: z.number().min(0.01, "重量必须大于0"),
          },
          else: {
            show: false,
          },
        },
      },
    },
    {
      component: "Select",
      name: "shippingMethod",
      label: "配送方式",
      rules: z.string().optional(),
      componentProps: {
        placeholder: "请选择配送方式",
        options: [],
      },
      dependencies: {
        productType: {
          when: (value) => value === "physical",
          then: {
            show: true,
            rules: z.string().min(1, "请选择配送方式"),
          },
          else: {
            show: false,
          },
        },
        weight: {
          when: (value, formValues) =>
            formValues.productType === "physical" && value > 0,
          then: {
            componentProps: {
              options: (formValues) => {
                const weight = formValues.weight || 0;
                if (weight <= 1) {
                  return [
                    { label: "标准快递", value: "standard" },
                    { label: "特快专递", value: "express" },
                  ];
                } else if (weight <= 10) {
                  return [
                    { label: "标准快递", value: "standard" },
                    { label: "物流配送", value: "logistics" },
                  ];
                } else {
                  return [
                    { label: "物流配送", value: "logistics" },
                    { label: "专车配送", value: "special" },
                  ];
                }
              },
            },
          },
        },
      },
    },
    {
      component: "Select",
      name: "downloadFormat",
      label: "下载格式",
      rules: z.string().optional(),
      componentProps: {
        placeholder: "请选择下载格式",
        options: [
          { label: "PDF", value: "pdf" },
          { label: "ZIP", value: "zip" },
          { label: "MP4", value: "mp4" },
          { label: "MP3", value: "mp3" },
        ],
      },
      dependencies: {
        productType: {
          when: (value) => value === "digital",
          then: {
            show: true,
            rules: z.string().min(1, "请选择下载格式"),
          },
          else: {
            show: false,
          },
        },
      },
    },
    {
      component: "Select",
      name: "serviceType",
      label: "服务类型",
      rules: z.string().optional(),
      componentProps: {
        placeholder: "请选择服务类型",
        options: [
          { label: "咨询服务", value: "consulting" },
          { label: "技术支持", value: "support" },
          { label: "培训服务", value: "training" },
        ],
      },
      dependencies: {
        productType: {
          when: (value) => value === "service",
          then: {
            show: true,
            rules: z.string().min(1, "请选择服务类型"),
          },
          else: {
            show: false,
          },
        },
      },
    },
    {
      component: "DatePicker",
      name: "serviceDate",
      label: "服务日期",
      rules: z.date().optional(),
      componentProps: {
        placeholder: "请选择服务日期",
      },
      dependencies: {
        serviceType: {
          when: (value) => !!value,
          then: {
            show: true,
            rules: z.date().min(new Date(), "服务日期不能早于今天"),
          },
          else: {
            show: false,
          },
        },
      },
    },
  ],
  onSubmit: (values) => {
    console.log("复杂联动表单提交:", values);
  },
});
</script>
```

### 动态表单项

```vue
<template>
  <div>
    <DynamicForm />
    <div class="mt-4">
      <Button @click="addContact" type="dashed" block> + 添加联系人 </Button>
    </div>
  </div>
</template>

<script setup>
import { useQiyunForm } from "@repo/form-ui";
import { Button } from "ant-design-vue";
import { z } from "zod";
import { ref, computed } from "vue";

const contactCount = ref(1);

const addContact = () => {
  contactCount.value++;
  // 动态更新表单schema
  formApi.updateSchema(dynamicSchema.value);
};

const removeContact = (index) => {
  if (contactCount.value > 1) {
    contactCount.value--;
    // 清除被删除联系人的数据
    formApi.setFieldValue(`contact_${index}_name`, undefined);
    formApi.setFieldValue(`contact_${index}_phone`, undefined);
    formApi.setFieldValue(`contact_${index}_email`, undefined);
    // 更新schema
    formApi.updateSchema(dynamicSchema.value);
  }
};

// 动态生成schema
const dynamicSchema = computed(() => {
  const baseSchema = [
    {
      component: "Input",
      name: "companyName",
      label: "公司名称",
      rules: z.string().min(1, "请输入公司名称"),
      componentProps: {
        placeholder: "请输入公司名称",
      },
    },
  ];

  // 动态添加联系人字段
  for (let i = 0; i < contactCount.value; i++) {
    baseSchema.push(
      {
        component: "Input",
        name: `contact_${i}_name`,
        label: `联系人${i + 1}姓名`,
        rules: z.string().min(1, "请输入联系人姓名"),
        componentProps: {
          placeholder: "请输入联系人姓名",
          addonAfter:
            i > 0
              ? {
                  component: "Button",
                  props: {
                    type: "link",
                    danger: true,
                    size: "small",
                    onClick: () => removeContact(i),
                  },
                  children: "删除",
                }
              : undefined,
        },
      },
      {
        component: "Input",
        name: `contact_${i}_phone`,
        label: `联系人${i + 1}电话`,
        rules: z
          .string()
          .min(1, "请输入联系人电话")
          .regex(/^1[3-9]\d{9}$/, "请输入正确的手机号"),
        componentProps: {
          placeholder: "请输入联系人电话",
        },
      },
      {
        component: "Input",
        name: `contact_${i}_email`,
        label: `联系人${i + 1}邮箱`,
        rules: z
          .string()
          .email("请输入正确的邮箱格式")
          .optional()
          .or(z.literal("")),
        componentProps: {
          placeholder: "请输入联系人邮箱（可选）",
        },
      },
    );
  }

  return baseSchema;
});

const [DynamicForm, formApi] = useQiyunForm({
  layout: "vertical",
  schema: dynamicSchema,
  onSubmit: (values) => {
    console.log("动态表单提交:", values);
  },
});
</script>
```

### 条件禁用与样式联动

```vue
<template>
  <ConditionalDisableForm />
</template>

<script setup>
import { useQiyunForm } from "@repo/form-ui";
import { z } from "zod";

const [ConditionalDisableForm] = useQiyunForm({
  layout: "vertical",
  schema: [
    {
      component: "Checkbox",
      name: "isVip",
      label: "VIP会员",
      rules: z.boolean().optional(),
      componentProps: {
        children: "我是VIP会员",
      },
    },
    {
      component: "InputNumber",
      name: "discountRate",
      label: "折扣率(%)",
      rules: z.number().optional(),
      componentProps: {
        placeholder: "请输入折扣率",
        min: 1,
        max: 100,
        formatter: (value) => `${value}%`,
        parser: (value) => value.replace("%", ""),
      },
      dependencies: {
        isVip: {
          when: (value) => value === true,
          then: {
            disabled: false,
            rules: z
              .number()
              .min(1, "折扣率不能小于1%")
              .max(50, "VIP最大折扣50%"),
            componentProps: {
              max: 50,
            },
          },
          else: {
            disabled: true,
            rules: z.number().optional(),
            componentProps: {
              max: 100,
            },
          },
        },
      },
    },
    {
      component: "Select",
      name: "memberLevel",
      label: "会员等级",
      rules: z.string().optional(),
      componentProps: {
        placeholder: "请选择会员等级",
        options: [
          { label: "青铜会员", value: "bronze" },
          { label: "白银会员", value: "silver" },
          { label: "黄金会员", value: "gold" },
          { label: "钻石会员", value: "diamond" },
        ],
      },
      dependencies: {
        isVip: {
          when: (value) => value === true,
          then: {
            show: true,
            rules: z.string().min(1, "请选择会员等级"),
          },
          else: {
            show: false,
          },
        },
      },
    },
    {
      component: "Input",
      name: "specialPrivilege",
      label: "专属特权",
      rules: z.string().optional(),
      componentProps: {
        placeholder: "请输入专属特权",
      },
      dependencies: {
        memberLevel: {
          when: (value) => ["gold", "diamond"].includes(value),
          then: {
            show: true,
            rules: z.string().min(1, "请输入专属特权"),
            componentProps: {
              style: {
                borderColor: "#gold",
              },
            },
          },
          else: {
            show: false,
          },
        },
      },
    },
  ],
  onSubmit: (values) => {
    console.log("条件禁用表单提交:", values);
  },
});
</script>
```

## ✅ 表单校验

表单校验是确保数据质量的重要环节。本组件基于 Zod 和 vee-validate 提供了强大的校验功能，支持同步校验、异步校验、自定义校验规则等。

### 基础校验

```vue
<template>
  <div>
    <ValidationForm />
    <div class="mt-4">
      <Button @click="handleSubmit" type="primary">提交</Button>
      <Button @click="handleValidate" class="ml-2">验证</Button>
      <Button @click="handleReset" class="ml-2">重置</Button>
    </div>
  </div>
</template>

<script setup>
import { useQiyunForm } from "@repo/form-ui";
import { Button, message } from "ant-design-vue";
import { z } from "zod";

const [ValidationForm, formApi] = useQiyunForm({
  layout: "vertical",
  schema: [
    {
      component: "Input",
      name: "username",
      label: "用户名",
      rules: z
        .string()
        .min(3, "用户名至少3个字符")
        .max(20, "用户名最多20个字符")
        .regex(/^[a-zA-Z0-9_]+$/, "用户名只能包含字母、数字和下划线"),
      componentProps: {
        placeholder: "请输入用户名",
      },
    },
    {
      component: "Input",
      name: "password",
      label: "密码",
      rules: z
        .string()
        .min(8, "密码至少8个字符")
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
          "密码必须包含大小写字母和数字",
        ),
      componentProps: {
        type: "password",
        placeholder: "请输入密码",
      },
    },
    {
      component: "Input",
      name: "confirmPassword",
      label: "确认密码",
      rules: z.string().min(1, "请确认密码"),
      componentProps: {
        type: "password",
        placeholder: "请再次输入密码",
      },
    },
    {
      component: "Input",
      name: "email",
      label: "邮箱",
      rules: z
        .string()
        .email("请输入正确的邮箱格式")
        .refine(async (email) => {
          // 模拟异步校验邮箱是否已存在
          await new Promise((resolve) => setTimeout(resolve, 500));
          return !["admin@example.com", "test@example.com"].includes(email);
        }, "该邮箱已被注册"),
      componentProps: {
        placeholder: "请输入邮箱",
      },
    },
    {
      component: "InputNumber",
      name: "age",
      label: "年龄",
      rules: z
        .number()
        .min(18, "年龄不能小于18岁")
        .max(100, "年龄不能大于100岁"),
      componentProps: {
        placeholder: "请输入年龄",
        min: 1,
        max: 150,
      },
    },
    {
      component: "Select",
      name: "gender",
      label: "性别",
      rules: z.enum(["male", "female"], {
        errorMap: () => ({ message: "请选择性别" }),
      }),
      componentProps: {
        placeholder: "请选择性别",
        options: [
          { label: "男", value: "male" },
          { label: "女", value: "female" },
        ],
      },
    },
    {
      component: "Checkbox",
      name: "agreement",
      label: "同意条款",
      rules: z.boolean().refine((val) => val === true, "请同意用户协议"),
      componentProps: {
        children: "我已阅读并同意用户协议",
      },
    },
  ],
  // 表单级别的校验
  validationSchema: z
    .object({
      username: z.string(),
      password: z.string(),
      confirmPassword: z.string(),
      email: z.string(),
      age: z.number(),
      gender: z.enum(["male", "female"]),
      agreement: z.boolean(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "两次输入的密码不一致",
      path: ["confirmPassword"],
    }),
  onSubmit: (values) => {
    message.success("表单提交成功！");
    console.log("表单数据:", values);
  },
});

const handleSubmit = async () => {
  try {
    await formApi.submitForm();
  } catch (error) {
    message.error("表单验证失败，请检查输入");
  }
};

const handleValidate = async () => {
  try {
    const isValid = await formApi.validate();
    if (isValid) {
      message.success("表单验证通过！");
    } else {
      message.error("表单验证失败！");
    }
  } catch (error) {
    message.error("验证过程中出现错误");
  }
};

const handleReset = () => {
  formApi.resetForm();
  message.info("表单已重置");
};
</script>
```

### 自定义校验规则

```vue
<template>
  <CustomValidationForm />
</template>

<script setup>
import { useQiyunForm } from "@repo/form-ui";
import { z } from "zod";

// 自定义校验函数
const validatePhone = (phone) => {
  const phoneRegex = /^1[3-9]\d{9}$/;
  return phoneRegex.test(phone);
};

const validateIdCard = (idCard) => {
  const idCardRegex =
    /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  return idCardRegex.test(idCard);
};

// 异步校验用户名是否可用
const checkUsernameAvailable = async (username) => {
  // 模拟API调用
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const unavailableUsernames = ["admin", "root", "test", "user"];
  return !unavailableUsernames.includes(username.toLowerCase());
};

const [CustomValidationForm] = useQiyunForm({
  schema: [
    {
      component: "Input",
      name: "username",
      label: "用户名",
      rules: z
        .string()
        .min(1, "请输入用户名")
        .refine(checkUsernameAvailable, "该用户名不可用"),
      componentProps: {
        placeholder: "请输入用户名",
      },
    },
    {
      component: "Input",
      name: "phone",
      label: "手机号",
      rules: z
        .string()
        .min(1, "请输入手机号")
        .refine(validatePhone, "请输入正确的手机号格式"),
      componentProps: {
        placeholder: "请输入手机号",
      },
    },
    {
      component: "Input",
      name: "idCard",
      label: "身份证号",
      rules: z
        .string()
        .min(1, "请输入身份证号")
        .refine(validateIdCard, "请输入正确的身份证号格式"),
      componentProps: {
        placeholder: "请输入身份证号",
      },
    },
    {
      component: "Input",
      name: "website",
      label: "个人网站",
      rules: z
        .string()
        .url("请输入正确的网址格式")
        .optional()
        .or(z.literal("")), // 允许空值
      componentProps: {
        placeholder: "请输入个人网站（可选）",
      },
    },
  ],
  onSubmit: (values) => {
    console.log("自定义校验表单提交:", values);
  },
});
</script>
```

### 条件校验

```vue
<template>
  <ConditionalValidationForm />
</template>

<script setup>
import { useQiyunForm } from "@repo/form-ui";
import { z } from "zod";

const [ConditionalValidationForm] = useQiyunForm({
  schema: [
    {
      component: "Select",
      name: "userType",
      label: "用户类型",
      rules: z.enum(["individual", "company"], {
        errorMap: () => ({ message: "请选择用户类型" }),
      }),
      componentProps: {
        placeholder: "请选择用户类型",
        options: [
          { label: "个人用户", value: "individual" },
          { label: "企业用户", value: "company" },
        ],
      },
    },
    {
      component: "Input",
      name: "personalName",
      label: "姓名",
      rules: z.string().optional(),
      componentProps: {
        placeholder: "请输入姓名",
      },
      dependencies: {
        userType: {
          when: (value) => value === "individual",
          then: {
            rules: z.string().min(1, "请输入姓名"),
          },
        },
      },
    },
    {
      component: "Input",
      name: "companyName",
      label: "公司名称",
      rules: z.string().optional(),
      componentProps: {
        placeholder: "请输入公司名称",
      },
      dependencies: {
        userType: {
          when: (value) => value === "company",
          then: {
            rules: z.string().min(1, "请输入公司名称"),
          },
        },
      },
    },
    {
      component: "Input",
      name: "taxNumber",
      label: "税号",
      rules: z.string().optional(),
      componentProps: {
        placeholder: "请输入税号",
      },
      dependencies: {
        userType: {
          when: (value) => value === "company",
          then: {
            rules: z
              .string()
              .min(1, "请输入税号")
              .regex(/^[A-Z0-9]{15,20}$/, "税号格式不正确"),
          },
        },
      },
    },
  ],
  // 使用 Zod 的条件校验
  validationSchema: z.discriminatedUnion("userType", [
    z.object({
      userType: z.literal("individual"),
      personalName: z.string().min(1, "请输入姓名"),
      companyName: z.string().optional(),
      taxNumber: z.string().optional(),
    }),
    z.object({
      userType: z.literal("company"),
      personalName: z.string().optional(),
      companyName: z.string().min(1, "请输入公司名称"),
      taxNumber: z
        .string()
        .min(1, "请输入税号")
        .regex(/^[A-Z0-9]{15,20}$/, "税号格式不正确"),
    }),
  ]),
  onSubmit: (values) => {
    console.log("条件校验表单提交:", values);
  },
});
</script>
```

### 实时校验与防抖

```vue
<template>
  <RealtimeValidationForm />
</template>

<script setup>
import { useQiyunForm } from "@repo/form-ui";
import { z } from "zod";
import { debounce } from "lodash-es";

// 防抖的异步校验函数
const debouncedEmailCheck = debounce(async (email) => {
  if (!email) return true;

  // 模拟API调用
  await new Promise((resolve) => setTimeout(resolve, 500));
  const existingEmails = ["admin@example.com", "test@example.com"];
  return !existingEmails.includes(email);
}, 300);

const [RealtimeValidationForm] = useQiyunForm({
  // 启用实时校验
  validateOnChange: true,
  validateOnBlur: true,
  schema: [
    {
      component: "Input",
      name: "email",
      label: "邮箱",
      rules: z
        .string()
        .email("请输入正确的邮箱格式")
        .refine(debouncedEmailCheck, "该邮箱已被注册"),
      componentProps: {
        placeholder: "请输入邮箱",
      },
    },
    {
      component: "Input",
      name: "password",
      label: "密码",
      rules: z
        .string()
        .min(8, "密码至少8个字符")
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
          "密码必须包含大小写字母和数字",
        ),
      componentProps: {
        type: "password",
        placeholder: "请输入密码",
      },
    },
    {
      component: "Input",
      name: "confirmPassword",
      label: "确认密码",
      rules: z.string().min(1, "请确认密码"),
      componentProps: {
        type: "password",
        placeholder: "请再次输入密码",
      },
    },
  ],
  // 表单级别的实时校验
  validationSchema: z
    .object({
      email: z.string(),
      password: z.string(),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "两次输入的密码不一致",
      path: ["confirmPassword"],
    }),
  onSubmit: (values) => {
    console.log("实时校验表单提交:", values);
  },
});
</script>
```

## 🔍 查询表单

查询表单通常用于数据筛选和搜索场景，具有以下特点：

- 内联布局，节省空间
- 支持实时搜索
- 提供重置功能
- 可配置默认值

```vue
<template>
  <div>
    <!-- 查询表单 -->
    <div class="bg-white p-4 rounded-lg shadow-sm mb-4">
      <SearchForm />
    </div>

    <!-- 查询结果 -->
    <div class="bg-white p-4 rounded-lg shadow-sm">
      <div v-if="loading" class="text-center py-8">
        <Spin size="large" />
      </div>
      <div v-else>
        <p class="mb-4">查询结果：{{ results.length }} 条记录</p>
        <div v-for="item in results" :key="item.id" class="border-b py-2">
          {{ item.name }} - {{ item.email }} - {{ item.status }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQiyunForm } from "@repo/form-ui";
import { Spin } from "ant-design-vue";
import { ref, watch } from "vue";

const loading = ref(false);
const results = ref([]);

// 模拟搜索API
const searchUsers = async (params) => {
  loading.value = true;
  // 模拟API调用
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // 模拟返回数据
  results.value = [
    { id: 1, name: "张三", email: "zhang@example.com", status: "激活" },
    { id: 2, name: "李四", email: "li@example.com", status: "禁用" },
  ].filter((item) => {
    if (params.name && !item.name.includes(params.name)) return false;
    if (params.status && item.status !== params.status) return false;
    return true;
  });

  loading.value = false;
};

// 创建查询表单
const [SearchForm, searchFormApi] = useQiyunForm({
  layout: "inline",
  submitOnChange: true, // 值变化时自动提交
  schema: [
    {
      component: "Input",
      name: "name",
      label: "用户名",
      componentProps: {
        placeholder: "请输入用户名",
        allowClear: true,
      },
    },
    {
      component: "Select",
      name: "status",
      label: "状态",
      componentProps: {
        placeholder: "请选择状态",
        allowClear: true,
        options: [
          { label: "激活", value: "激活" },
          { label: "禁用", value: "禁用" },
        ],
      },
    },
    {
      component: "DatePicker",
      name: "createTime",
      label: "创建时间",
      componentProps: {
        placeholder: "请选择创建时间",
        allowClear: true,
      },
    },
  ],
  // 查询回调
  onSubmit: (values) => {
    console.log("查询参数:", values);
    searchUsers(values);
  },
  // 显示操作按钮
  showActiveButton: true,
  showResetButton: true,
  activeButtonText: "查询",
  resetButtonText: "重置",
});

// 监听表单值变化，实现实时搜索
watch(
  () => searchFormApi.getValues(),
  (newValues) => {
    searchUsers(newValues);
  },
  { deep: true },
);

// 初始化查询
searchUsers({});
</script>
```

### 高级查询表单

```vue
<template>
  <div>
    <AdvancedSearchForm />

    <!-- 展开/收起更多筛选条件 -->
    <div class="mt-4">
      <Button @click="toggleExpanded" type="link">
        {{ expanded ? "收起" : "展开" }}更多筛选条件
        <DownOutlined v-if="!expanded" />
        <UpOutlined v-if="expanded" />
      </Button>
    </div>
  </div>
</template>

<script setup>
import { useQiyunForm } from "@repo/form-ui";
import { Button } from "ant-design-vue";
import { DownOutlined, UpOutlined } from "@ant-design/icons-vue";
import { ref, computed } from "vue";

const expanded = ref(false);

const toggleExpanded = () => {
  expanded.value = !expanded.value;
};

// 基础查询字段
const baseSchema = [
  {
    component: "Input",
    name: "keyword",
    label: "关键词",
    componentProps: {
      placeholder: "请输入关键词搜索",
    },
  },
  {
    component: "Select",
    name: "category",
    label: "分类",
    componentProps: {
      placeholder: "请选择分类",
      options: [
        { label: "用户管理", value: "user" },
        { label: "订单管理", value: "order" },
        { label: "商品管理", value: "product" },
      ],
    },
  },
];

// 高级查询字段
const advancedSchema = [
  {
    component: "DatePicker",
    name: "startDate",
    label: "开始日期",
    componentProps: {
      placeholder: "请选择开始日期",
    },
  },
  {
    component: "DatePicker",
    name: "endDate",
    label: "结束日期",
    componentProps: {
      placeholder: "请选择结束日期",
    },
  },
  {
    component: "InputNumber",
    name: "minAmount",
    label: "最小金额",
    componentProps: {
      placeholder: "请输入最小金额",
      min: 0,
    },
  },
  {
    component: "InputNumber",
    name: "maxAmount",
    label: "最大金额",
    componentProps: {
      placeholder: "请输入最大金额",
      min: 0,
    },
  },
];

// 动态计算schema
const dynamicSchema = computed(() => {
  return expanded.value ? [...baseSchema, ...advancedSchema] : baseSchema;
});

const [AdvancedSearchForm, formApi] = useQiyunForm({
  layout: "inline",
  schema: dynamicSchema,
  onSubmit: (values) => {
    console.log("高级查询:", values);
  },
});
</script>
```
