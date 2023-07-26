import type { Bundler } from '@vuepress/core'
import { viteBundler } from 'vuepress'

export const bundler: Bundler = viteBundler({
  vuePluginOptions: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === 'center',
      },
    },
  },
})
