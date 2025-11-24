<script setup lang="ts">
import { useContentSpinner } from '@repo/hooks';
import Loading from '../../components/Loading.vue';

const spinner = useContentSpinner();
</script>
<template>
    <div class="flex-1 layout-content rounded-lg mr-2">
        <Transition name="content-fade" mode="out-in">
            <Loading v-if="spinner.contentSpinner.value" key="loading" />
            <div v-else key="content" class="content-wrapper">
                <slot>
                    <RouterView v-slot="{ Component, route }">
                        <Transition name="fade" mode="out-in">
                            <KeepAlive>
                                <component :is="Component" :key="route.path" />
                            </KeepAlive>
                        </Transition>
                    </RouterView>
                </slot>
            </div>
        </Transition>
    </div>
</template>
<style lang="scss" scoped>
.layout-content {
    border-radius: 8px;
    overflow-y: auto;
    background: #fff;
}

.content-wrapper {
    width: 100%;
    height: 100%;
}


</style>