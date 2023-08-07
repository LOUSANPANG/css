import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "fe-css",
  description: "animation & styles & base components",

  base: "/fe-css/",
  srcDir: "./views",
  srcExclude: ['README.md'],
  ignoreDeadLinks: true,
  markdown: {
    lineNumbers: false
  },
  vite: {},
  vue: {},

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: 'deep',
    outlineTitle: '',
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Animation', link: '/animation/countdown' },
      { text: 'Style', link: '/style/reset' },
      { text: 'Component', link: '/component/skeleton' },
    ],

    sidebar: {
      '/animation/': [
        { text: '倒计时', link: '/animation/countdown' },
        { text: '进度条', link: '/animation/progress' },
      ],
      '/style/': [
        { text: '重置', link: '/style/reset' }
      ],
      '/component/': [
        { text: '骨架屏', link: '/component/skeleton' }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LOUSANPANG/fe-css' }
    ],

    footer: {
      message: '',
      copyright: ''
    }
  }
})
