import type { DefaultTheme } from "vitepress";

import { defineConfig } from "vitepress";

import { version } from "../../../package.json";

export const zh = defineConfig({
  title: "Qiyun-Repo",
  description: "基于 Monorepo 架构的企业级前端开发解决方案",
  vite: {
    server: {
      port: 9091,
    },
  },
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/intro/about" },
      { text: "后端服务", link: "/api/overview" },
      { text: "组件库", link: "/components/overview" },
      { text: "更新日志", link: "/components/overview" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "简介",
          items: [
            { text: "关于 Qiyun-Repo", link: "/guide/intro/about" },
            { text: "技术选型", link: "/guide/intro/tech-stack" },
            { text: "快速开始", link: "/guide/intro/getting-started" },
          ],
        },
        {
          text: "基础(未完善)",
          items: [
            { text: "基础概念", link: "/guide/basics/concepts" },
            { text: "路由和菜单", link: "/guide/basics/routing" },
            { text: "配置", link: "/guide/basics/configuration" },
            { text: "图标", link: "/guide/basics/icons" },
            { text: "构建与部署", link: "/guide/basics/build-deploy" },
            { text: "API", link: "/guide/basics/api" },
          ],
        },
        {
          text: "组件",
          items: [
            { text: "基础概念", link: "/guide/components/concepts" },
            { text: "Page 页面", link: "/guide/components/page" },
            { text: "Form 表单", link: "/guide/components/form" },
            { text: "Table 表格(实现中）", link: "/guide/components/table" },
            { text: "Modal 弹窗(实现中)", link: "/guide/components/modal" },
          ],
        },
        {
          text: "模块(未完善)",
          items: [
            { text: "目录说明", link: "/guide/modules/directory" },
            { text: "常量", link: "/guide/modules/constants" },
            { text: "数据库", link: "/guide/modules/database" },
            { text: "组件", link: "/guide/modules/components" },
            { text: "钩子", link: "/guide/modules/hooks" },
            { text: "请求", link: "/guide/modules/request" },
            { text: "大屏", link: "/guide/modules/dv" },
            { text: "持久化", link: "/guide/modules/stores" },
            { text: "样式", link: "/guide/modules/styles" },
            { text: "类型", link: "/guide/modules/types" },
            { text: "工具", link: "/guide/modules/utils" },
          ],
        },
        {
          text: "工程(未完善)",
          items: [
            { text: "规范", link: "/guide/engineering/standards" },
            { text: "TypeScript", link: "/guide/engineering/typescript" },
            { text: "Vite Config", link: "/guide/engineering/vite-config" },
            { text: "TailwindCSS", link: "/guide/engineering/tailwindcss" },
          ],
        },
      ],
      "/api/": [
        {
          text: "API文档",
          items: [
            { text: "API概览", link: "/api/overview" },
            { text: "认证授权", link: "/api/auth" },
            { text: "用户管理", link: "/api/user" },
            { text: "系统管理", link: "/api/system" },
          ],
        },
      ],
      "/components/": [
        {
          text: "组件库",
          items: [
            { text: "组件概览", link: "/components/overview" },
            { text: "基础组件", link: "/components/basic" },
            { text: "表单组件", link: "/components/form" },
            { text: "数据展示", link: "/components/display" },
            { text: "特效组件", link: "/components/effects" },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://codeup.aliyun.com/5eb632e238076f00011bd0c9/WEBBASE/project-monorepo",
      },
    ],
  },
});
