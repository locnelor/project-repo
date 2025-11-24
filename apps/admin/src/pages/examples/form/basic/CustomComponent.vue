<script lang="ts" setup>
import { Button } from 'ant-design-vue';
const props = defineProps(["modelValue"])
const emit = defineEmits(["update:modelValue"]);
</script>
<template>
    <div>
        功德{{ modelValue }}
        <Button @click="emit('update:modelValue', (modelValue || 1) + 1)">+1</Button>
    </div>
</template>