import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
const vitePressConfig = {
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  lang:  'zh-cn',
  title: "OpenMoPlugins",
  description: "OpenMoPlugins文档站点",
  ignoredeadlinks: {
    // 添加排除规则，忽略指定路径的死链检测
    exclude: ['guide/projects.md', '/bukkit/mosimpletitle']  // 新增排除 mosimpletitle 的死链检测
  },
  themeConfig: {
    i18nRouting: true,
    sidebar:  [
          {text: "项目介绍", link:"/guide/whats-this"},
          {text: "项目导航", link:"/guide/projects"},
          {text: "日志", link:"/guide/dairy"},
          {
            text: "Bukkit项目", 
            items: [
              {
                text: "MoModeratorPlus", 
                link:"/bukkit/momoderatorplus/", // 在链接末尾添加斜杠修复路径解析
                collapsed: true,
                items: [
                  {text: "介绍", link:"/bukkit/momoderatorplus"},
                  {text: "指令列表", link:"/bukkit/momoderatorplus/commands"},
                  {text: "配置文件", link:"/bukkit/momoderatorplus/config-examples"},
                  {text: "跨服同步", link:"/bukkit/momoderatorplus/sync"},
                ]
              },
              {
                text: "MoSimpleTitle", 
                link:"/bukkit/mosimpletitle/", // 修正链接格式，添加斜杠
                collapsed: true,
                items: [
                  {text: "介绍", link:"/bukkit/mosimpletitle"},
                  {text: "配置文件", link:"/bukkit/mosimpletitle/config-examples"}
                ]
              },
              {
                text: "LegendaryGuildRankAddon", 
                link:"/bukkit/LegendaryGuildRankAddon/", // 修正链接格式，添加斜杠
                collapsed: true,
                items: [
                  {text: "介绍", link:"/bukkit/LegendaryGuildRankAddon"},
                ]
              },{
                text: "MoChainMining", 
                link:"/bukkit/moChainMining/", // 修正链接格式，添加斜杠
                collapsed: true,
                items: [
                  {text: "介绍", link:"/bukkit/moChainMining/"},
                  {text: "配置文件示例", link:"/bukkit/moChainMining/config/"},
                  {text: "使用例", link:"/bukkit/moChainMining/example/"},
                ]
              },
            ]
          },
        ],
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2025 OpenMoPlugins Teams'
      },
      search: {
        provider: 'local'
      },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/moran0710/OpenMoPluginsDocs/' }
    ]
  },
  lastUpdated: true

}

export default defineConfig(vitePressConfig)

