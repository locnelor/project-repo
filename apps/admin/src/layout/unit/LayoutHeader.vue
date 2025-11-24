<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { Select, SelectOption, Avatar, Popover } from 'ant-design-vue';
import { useAccessStore } from '@repo/stores';
import { useAuthStore } from '#/store';

const title = import.meta.env.VITE_APPLICATION_TITLE
const router = useRouter();
const route = useRoute();
const accessStore = useAccessStore();
const authStore = useAuthStore();
const handleRefetch = () => {
    // 先跳转到一个临时路由，然后立即跳转回当前路由
    // 这样可以触发路由守卫和生命周期，实现真正的"刷新"效果
    const currentRoute = {
        path: route.path,
        query: route.query,
        hash: route.hash
    };

    // 先跳转到根路径，然后立即跳转回来
    router.replace('/').then(() => {
        router.replace(currentRoute);
    });
}
const handleClick = () => {

}
const handleChangeOrg = (orgId: any) => {
    console.log(orgId);
}
const handleSetting = () => {

}
const handleLogout = () => {
    authStore.authLogout();
}
</script>
<template>
    <div class="h-[60px] flex justify-between items-center px-2 text-white">
        <div class="flex h-full items-center gap-2 overflow-hidden px-3 transition-all duration-500">
            <div class="text-foreground truncate text-nowrap font-semibold text-lg leading-normal">
                {{ title }}
            </div>
            <div class="cursor-pointer w-8 h-8 flex items-center justify-center rounded-lg duration-300 hover:bg-white hover:text-[#000]"
                @click="handleRefetch">
                R
            </div>
        </div>
        <div class="flex h-full items-center gap-2 px-3">
            <div class="flex h-full items-center justify-center">
                <div @click="handleClick"
                    class="w-20 mr-2 flex h-4 cursor-pointer items-center justify-center rounded-full bg-[#67c23a] p-4 font-bold text-white duration-300 hover:bg-[#85ce61]">
                    驾驶舱
                </div>
            </div>
            <div>
                <Select @change="handleChangeOrg" v-model:value="accessStore.orgId" placeholder="请选择组织">
                    <SelectOption v-for="org in accessStore.userInfo?.organizationUserRelations || []" :key="org.orgId"
                        :value="org.orgId">
                        {{ org.orgName }}
                    </SelectOption>
                </Select>
            </div>
            <div>
                <Popover placement="bottomLeft" trigger="click">
                    <Avatar class="cursor-pointer" />
                    <template #content>
                        <div class="py-2 w-48">
                            <div class="flex px-2 gap-2 items-center">
                                <div>
                                    <Avatar />
                                </div>
                                <div class="flex-1">
                                    <div>{{ accessStore.userInfo?.username }}</div>
                                </div>
                            </div>
                            <div style="height: 1px;" class="bg-[#f5f5f5] my-2"></div>
                            <div @click="handleSetting"
                                class="p-2 rounded cursor-pointer hover:bg-[#f5f5f5] flex justify-between duration-300">
                                <div>设置</div>
                            </div>
                            <div style="height: 1px;" class="bg-[#f5f5f5] my-2"></div>
                            <div @click="handleLogout"
                                class="p-2 rounded cursor-pointer hover:bg-[#f5f5f5] flex justify-between duration-300">
                                <div>退出登录</div>
                            </div>
                        </div>
                    </template>
                </Popover>
            </div>
        </div>
    </div>
</template>