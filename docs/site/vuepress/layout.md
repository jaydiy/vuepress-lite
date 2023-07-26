## 简介

### 目录结构

```text
├─ docs
│  ├─ .vuepress
│  │  ├─ components   <-- 自定义组件库
│  │  ├─ config   <-- 布局，head.ts navbar.ts sidebar.ts index.ts[导出其它ts文件]
│  │  ├─ plugins   <-- 自定义插件
│  │  ├─ layouts   <-- 布局组件，Article.vue Category.vue Tag.vue Timeline.vue
│  │  ├─ public   <-- 静态资源，打包到项目根目录/
│  │  ├─ styles   <--
│  │  │  ├─ index.scss   <-- 覆盖默认主题的样式 :root{ scroll-behavior: smooth; }
│  │  │  └─ palette.scss   <-- 覆盖默认主题的预定义 SASS 变量 :root{ $MQNarrow: 959px !default; }
│  │  ├─ client.js   <-- 客户端配置文件
│  │  └─ config.js   <-- 配置文件
│  ├─ posts <-- 博客目录
│  └─ README.md
├─ .gitignore
└─ package.json
```

## 覆盖默认布局

- **步骤1**: 创建 `.vuepress/layouts/Layout.vue` ，并使用由默认主题的 `Layout` 布局提供的插槽

  ```vue
  <script setup>
  import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
  </script>

  <template>
    <ParentLayout>
      <template #page-bottom>
        <div class="my-footer">page footer</div>
      </template>
    </ParentLayout>
  </template>

  <style lang="css">
  .my-footer {
    text-align: center;
  }
  </style>
  ```

- **步骤2:** 在客户端配置文件 `.vuepress/client.ts` 中配置布局组件

  ```ts
  import { defineClientConfig } from '@vuepress/client'
  import Layout from './layouts/Layout.vue'

  export default defineClientConfig({
    layouts: {
      Layout,
    },
  })
  ```

  此时默认的 `Layout` 布局已经被你的本地布局覆盖，会在除了 首页外的所有页面添加一个自定义的页脚：

## 提取 head navbar sidebar 到单独的文件中

### 原配置文件示例

```ts
// @/.vuepress/
import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from '@vuepress/utils'

export default defineUserConfig({
  base: '/',

  // extra tags in `<head>`
  lang: 'zh-CN',
  title: '我的博客',
  description: 'Java 全栈知识体系',
  // head,

  // configure default theme
  theme: defaultTheme({
    docsDir: 'docs',
    navbar: [
      {
        text: '首页',
        link: '/index.md',
      },
      {
        text: '关于',
        link: '/about/me.md',
      },
    ],
    sidebar: {
      '/': [
        {
          text: '资源导航',
          children: [
            { text: '常用工具', link: '/tool/tool.md#常用工具' },
            { text: '关于我', link: '/about/me.md' },
          ],
        },
      ],
    },
    // page meta
    editLinkText: 'Edit this page on GitHub',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    notFound: ['这里什么都没有', '这是一个 404 页面'],
    backToHome: '返回首页',
  }),
})
```

### head.ts

提取到`@/docs/.vuepress/config/head.ts`

```ts
import type { HeadConfig } from '@vuepress/core'

export const head: HeadConfig[] = [
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: `/images/icons/favicon-16x16.png`,
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `/images/icons/favicon-32x32.png`,
    },
  ],
  ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
  ['meta', { name: 'application-name', content: 'VuePress' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'VuePress' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['link', { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` }],
  [
    'link',
    {
      rel: 'mask-icon',
      href: '/images/icons/safari-pinned-tab.svg',
      color: '#3eaf7c',
    },
  ],
  ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
]
```

### navbar.ts

提取到`@/docs/.vuepress/config/navbar.ts`

```ts
import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
  {
    text: '导航',
    link: '/',
  },
  {
    text: '建站',
    children: [
      {
        text: 'VuePress',
        children: [
          {
            text: '新建项目',
            link: '/web/base/js-overview.md',
          },
          {
            text: '布局',
            link: '/web/base/html-overview.md',
          },
          {
            text: 'CSS',
            link: '/web/base/css-overview.md',
          },
        ],
      },
      {
        text: '前端框架',
        children: [
          {
            text: 'Vue.js 知识体系',
            link: '/web/framework/vue/vue-overview.md',
          },
        ],
      },
    ],
  },
  {
    text: '工具|部署',
    link: '/tool/',
    children: [
      {
        text: '开发工具',
        link: '/tool/tool-list',
      },
      {
        text: 'IDE',
        children: [
          {
            text: 'IDEA',
            link: '/tool/tool-idea',
          },
          {
            text: 'VSCode',
            link: '/tool/tool-vscode',
          },
        ],
      },
      {
        text: '构建工具',
        children: [
          {
            text: 'Git',
            link: '/tool/tool-git',
          },
          {
            text: 'Maven',
            link: '/tool/tool-maven',
          },
        ],
      },
      {
        text: 'Linux',
        link: '/tool/linux/linux-summary.md',
      },
      {
        text: 'Docker',
        link: '/tool/docker/docker-summary.md',
      },
    ],
  },
  {
    text: '关于',
    children: [
      {
        text: '我',
        link: '/about/me/me.md',
      },
      {
        text: '文档',
        link: '/about/blog/blog.md',
      },
    ],
  },
]
```

### sidebar.ts

提取到`@/docs/.vuepress/config/sidebar.ts`

```ts
import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/': [
    {
      text: '导航',
      children: [
        { text: '首页', link: '/' },
        { text: '关于我', link: '/about/me/me.md' },
      ],
    },
  ],
  '/about/': [
    {
      text: '关于',
      children: [
        { text: '我', link: '/about/me/me.md' },
        { text: '文档', link: '/about/blog/blog.md' },
      ],
    },
    {
      text: 'Cookbook',
      children: [
        '/zh/advanced/cookbook/README.md',
        '/zh/advanced/cookbook/usage-of-client-config.md',
      ],
    },
  ],
}
```

### index.ts

`@/docs/.vuepress/config/index.ts`，统一导出

```ts
export * from './head.js'
export * from './navbar.js'
export * from './sidebar.js'
```

### config.ts

`@/docs/.vuepress/config.ts`

```ts
import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { head, navbar, sidebar } from './configs/index.js'
import { getDirname, path } from '@vuepress/utils'

export default defineUserConfig({
  // set site base to default value
  base: '/',

  // extra tags in `<head>`
  head,
  lang: 'zh-CN',
  title: '我的博客',
  description: 'Java 全栈知识体系',

  // configure default theme
  theme: defaultTheme({
    docsDir: 'docs',
    navbar: navbar,
    sidebar: sidebar,

    // page meta
    tip: '提示',
    warning: '注意',
    danger: '警告',
    notFound: ['我们怎么到这来了？', '看起来我们进入了错误的链接'],
    backToHome: '返回首页',
    // a11y
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏',
  }),

  // specify bundler via environment variable
  bundler: process.env.DOCS_BUNDLER === 'webpack' ? viteBundler() : viteBundler(),

  plugins: [],
})
```
