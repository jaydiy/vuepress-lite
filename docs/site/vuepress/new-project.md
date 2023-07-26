## 简介

- 项目结构

- 步骤

  - 新建

  - 规范

    ```text
    代码提交规范
    基础配置
    	.browserslistrc
    .vscode
    EditorConfig
    Stylelint
    Prettier ESlint
    ```

  - 1

- 1

## 新建项目

目录结构

```text
├─ docs
│  ├─ .vuepress
│  │  ├─ client.js   <--- 客户端配置文件
│  │  └─ config.js   <--- 配置文件
│  └─ README.md
├─ .gitignore
└─ package.json
```

1. 创建并进入一个新目录

   ```sh
   mkdir vuepress-lite
   cd vuepress-lite
   ```

2. 初始化项目

   ```sh
   git init
   npm init -y
   ```

3. 将 VuePress 安装为本地依赖

   ```sh
   npm install -D vuepress@next
   ```

4. 在 `package.json` 中添加一些 [scripts](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts)

   ```json
   {
     "scripts": {
       "dev": "vuepress dev docs",
       "build": "vuepress build docs"
     }
   }
   ```

5. 将默认的临时目录和缓存目录添加到 `.gitignore` 文件中

   ```markdown
   node_modules
   package-lock.json
   .temp
   .cache
   ```

6. 创建你的第一篇文档

   ```sh
   mkdir docs
   echo '# Hello VuePress' > docs/README.md
   ```

7. 配置文件 `config.ts` [ 可以省略，用默认值 ]

   `@/docs/.vuepress/config.ts`

   ```ts
   import { defineUserConfig } from 'vuepress'

   export default defineUserConfig({
     lang: 'zh-CN',
     title: '你好， VuePress ！',
     description: '这是我的第一个 VuePress 站点',
     port: 5000,
   })
   ```

8. 启动服务器，开发网站，VuePress 会在 [http://localhost:8080在新窗口打开](http://localhost:8080/) 启动一个热重载的开发服务器

   ```sh
   npm run dev
   ```

## 规范
