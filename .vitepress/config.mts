import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "fe-lib",
  description: "front end lib",
  base: '/fe-lib/',
  srcDir: './src',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LOUSANPANG/fe-lib' }
    ],

    nav: [
      { text: 'JavaScript', link: '/js' },
      { text: 'CSS', link: '/css' },
      { text: 'Vue', link: '/vue' },
      { text: 'uni-app', link: '/uniapp' },
    ],

    sidebar: {

      '/js/': [
        {
          text: '概述',
          items: [ { text: 'js工具箱', link: '/js/index' } ]
        },
        {
          collapsed: false,
          text: '正则校验',
          items: [
            { text: '用户信息相关', link: '/js/regexp/user' },
            { text: '支付信息相关', link: '/js/regexp/pay' },
          ]
        }
      ],

      '/css/': [
        {
          text: '概述',
          items: [ { text: 'css工具箱', link: '/css/index' } ]
        },
        {
          collapsed: false,
          text: '动画',
          items: [
            { text: '加载', link: '/css/animation/loading' },
            { text: '骨架屏', link: '/css/animation/skeleton' },
            { text: '进度条', link: '/css/animation/progress' },
            { text: '倒计时', link: '/css/animation/countdown' },
          ]
        }
      ],

      '/vue/': [
        {
          text: '概述',
          items: [ { text: 'vue工具箱', link: '/vue/index' } ]
        },
        {
          collapsed: false,
          text: 'mixins',
          items: [
            { text: '加载', link: '/vue/mixins/loadmore' },
          ]
        }
      ],

      '/uniapp/': [
        {
          text: '概述',
          items: [ { text: 'uniapp工具箱', link: '/uniapp/index' } ]
        },
        {
          collapsed: false,
          text: '上线部署',
          items: [
            { text: '微信小程序', link: '/uniapp/deploy/wx' },
            { text: '安卓', link: '/uniapp/deploy/android' },
            { text: 'IOS', link: '/uniapp/deploy/ios' },
          ]
        }
      ],

    }
  }
})
