<script setup lang="ts">
import { Page, useQiyunForm, useQiyunForm2 } from "@repo/components";


const [Form] = useQiyunForm2({
  hideLabel: true
});
const [Form2] = useQiyunForm2({});
</script>

<template>
  <Page title="用户管理">
    <template #footer>
      footer
    </template>
    <div>
      <Form />
      <Form2 />
    </div>
  </Page>
</template>

<style scoped lang="scss"></style>
