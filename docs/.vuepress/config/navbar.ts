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
            link: '../../site/vuepress/new-project.html',
          },
          {
            text: '布局',
            link: '../../site/vuepress/layout.html',
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
