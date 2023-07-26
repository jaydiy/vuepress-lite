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
  '/site/': [
    {
      text: 'VuePress',
      children: [
        { text: '新建项目', link: '../../site/vuepress/new-project.html' },
        { text: '布局', link: '../../site/vuepress/layout.html' },
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
