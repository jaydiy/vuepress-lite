import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { bundler, head, navbar, sidebar } from './config/index.js'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  head,
  theme: defaultTheme({
    docsDir: 'docs',
    navbar: navbar,
    sidebar: sidebar,
    repo: 'vuejs/vuepress',
    repoLabel: `Gitee`,

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
  bundler,
  pagePatterns: ['**/*.md', '!.vuepress', '!node_modules', '!**/README.md'],
  port: 5000,
})
