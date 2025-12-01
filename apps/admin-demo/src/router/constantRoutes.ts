import type { RouteRecordRaw } from 'vue-router';

// 固定路由（默认路由）
export const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/redirect',
        // component: Layout,
        meta: { hidden: true },
        children: [
            {
                path: '/redirect/:path(.*)',
                component: () => import('#/views/default/redirect/index.vue'),
            },
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('#/views/default/error/404.vue'),
        meta: { hidden: true },
    },
    {
        path: '/403',
        component: () => import('#/views/default/error/403.vue'),
        meta: { hidden: true },
    },
]
