<script setup lang="ts">
import router from "#/router";
import { useAccessStore } from "@repo/stores";
import { treeMap } from "@repo/utils";
import { Menu } from "ant-design-vue";
import { computed, reactive } from "vue";
const assetsStore = useAccessStore();
const state = reactive({
    openKeys: [] as any,
    selectedKeys: [],
});
const items = computed(() => {
    if (!assetsStore.menuTree || assetsStore.menuTree.length === 0) {
        return [];
    }

    return treeMap(assetsStore.menuTree, (node) => {
        const menuItem: any = {
            key: node.id || node.key,
            label: node.name || node.label,
            url: node.url,
        };

        if (node.children && node.children.length > 0) {
            menuItem.children = node.children;
        }

        if (node.icon) {
            // menuItem.icon = node.icon;
        }

        return menuItem;
    });
});
const rootSubmenuKeys = computed(() => {
    if (!assetsStore.menuTree || assetsStore.menuTree.length === 0) {
        return [];
    }
    const collectSubmenuKeys = (menuItems: any[]): string[] => {
        const keys: string[] = [];
        menuItems.forEach((item: any) => {
            if (item.children && item.children.length > 0) {
                keys.push(item.id);
                keys.push(...collectSubmenuKeys(item.children));
            }
        });
        return keys;
    };
    return collectSubmenuKeys(assetsStore.menuTree);
});
const handleClick = ({ item }: any) => {
    router.push(item.originItemValue.url);
}
const onOpenChange = (openKeys: any[]) => {
    const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
    if (!latestOpenKey) {
        state.openKeys = openKeys;
        return;
    }
    if (rootSubmenuKeys.value.indexOf(latestOpenKey as string) === -1) {
        state.openKeys = openKeys;
        return;
    }
    const getMenuLevel = (menuKey: string, menuItems: any[], level = 0): number => {
        for (const item of menuItems) {
            if (item.id === menuKey) {
                return level;
            }
            if (item.children && item.children.length > 0) {
                const childLevel = getMenuLevel(menuKey, item.children, level + 1);
                if (childLevel !== -1) {
                    return childLevel;
                }
            }
        }
        return -1;
    };
    const getParentKey = (menuKey: string, menuItems: any[], parentKey?: string): string | null => {
        for (const item of menuItems) {
            if (item.id === menuKey) {
                return parentKey || null;
            }
            if (item.children && item.children.length > 0) {
                const result = getParentKey(menuKey, item.children, item.id);
                if (result !== null) {
                    return result;
                }
            }
        }
        return null;
    };

    // 获取同级菜单项
    const getSiblingKeys = (menuKey: string, menuItems: any[], parentKey?: string): string[] => {
        const siblings: string[] = [];

        const findSiblings = (items: any[], currentParent?: string) => {
            for (const item of items) {
                if (currentParent === parentKey && item.children && item.children.length > 0) {
                    siblings.push(item.id);
                }
                if (item.children && item.children.length > 0) {
                    findSiblings(item.children, item.id);
                }
            }
        };

        if (!parentKey) {
            // 顶级菜单的同级项
            for (const item of menuItems) {
                if (item.children && item.children.length > 0) {
                    siblings.push(item.id);
                }
            }
        } else {
            findSiblings(menuItems);
        }

        return siblings;
    };

    const latestParentKey = getParentKey(latestOpenKey, assetsStore.menuTree);
    const siblingKeys = getSiblingKeys(latestOpenKey, assetsStore.menuTree, latestParentKey || undefined);
    const filteredOpenKeys = openKeys.filter(key => {
        // 保留不是同级菜单的项
        if (!siblingKeys.includes(key)) {
            return true;
        }
        return key === latestOpenKey;
    });

    state.openKeys = filteredOpenKeys;
};
</script>
<template>
    <div class="w-[224px] overflow-y-auto">
        <Menu :open-keys="state.openKeys" @openChange="onOpenChange" mode="inline" style="background: none;color:#fff"
            :items="items" @click="handleClick" />
    </div>
</template>
<style lang="scss" scoped>
// 菜单样式定制
:deep(.ant-menu) {
    background: none !important;
    border: none !important;
    // 下拉按钮样式
    .ant-menu-submenu-arrow {
        left: 10px;
    }
    .ant-menu-title-content {
        padding-left: 10px;
    }

    // 菜单项默认样式
    .ant-menu-item {
        color: #fff !important;
        background: none !important;
        border-radius: 6px !important;
        margin: 4px 8px !important;
        padding: 8px 16px !important;
        transition: all 0.3s ease !important;

        // 鼠标悬浮样式
        &:hover {
            background: rgba(255, 255, 255, 0.1) !important;
            color: #fff !important;
        }

        // 选中样式
        &.ant-menu-item-selected {
            background: rgba(255, 255, 255, 0.2) !important;
            color: #fff !important;
            font-weight: 600 !important;
            box-shadow: 0 2px 8px rgba(255, 255, 255, 0.1) !important;

            &::after {
                display: none !important;
            }
        }

        // 激活状态样式
        &.ant-menu-item-active {
            background: rgba(255, 255, 255, 0.15) !important;
            color: #fff !important;
        }
    }

    // 子菜单样式
    .ant-menu-submenu {
        .ant-menu-submenu-title {
            color: #fff !important;
            background: none !important;
            border-radius: 6px !important;
            margin: 4px 8px !important;
            padding: 8px 16px !important;
            transition: all 0.3s ease !important;

            &:hover {
                background: rgba(255, 255, 255, 0.1) !important;
                color: #fff !important;
            }

            .ant-menu-submenu-arrow {
                color: #fff !important;
            }
        }
    }

    // 子菜单内容样式
    .ant-menu-sub {
        background: rgba(0, 0, 0, 0.1) !important;
        border-radius: 6px !important;
        margin: 0 8px !important;

        .ant-menu-item {
            margin: 2px 4px !important;
            padding-left: 32px !important;

            &:hover {
                background: rgba(255, 255, 255, 0.15) !important;
            }

            &.ant-menu-item-selected {
                background: rgba(255, 255, 255, 0.25) !important;
            }
        }
    }
}

.ant-menu-title-content {
    color: #fff;
}
</style>