// docs/.vitepress/config.mts
import { defineConfig } from "file:///D:/proj/doc/OpenMoPlugins/node_modules/vitepress/dist/node/index.js";
var vitePressConfig = {
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }]
  ],
  lang: "zh-cn",
  title: "OpenMoPlugins",
  description: "OpenMoPlugins\u6587\u6863\u7AD9\u70B9",
  ignoredeadlinks: {
    // 添加排除规则，忽略指定路径的死链检测
    exclude: ["guide/projects.md", "/bukkit/mosimpletitle"]
    // 新增排除 mosimpletitle 的死链检测
  },
  themeConfig: {
    i18nRouting: true,
    sidebar: [
      { text: "\u9879\u76EE\u4ECB\u7ECD", link: "/guide/whats-this" },
      { text: "\u9879\u76EE\u5BFC\u822A", link: "/guide/projects" },
      { text: "\u65E5\u5FD7", link: "/guide/dairy" },
      {
        text: "Bukkit\u9879\u76EE",
        items: [
          {
            text: "MoModeratorPlus",
            link: "/bukkit/momoderatorplus/",
            // 在链接末尾添加斜杠修复路径解析
            collapsed: true,
            items: [
              { text: "\u4ECB\u7ECD", link: "/bukkit/momoderatorplus" },
              { text: "\u6307\u4EE4\u5217\u8868", link: "/bukkit/momoderatorplus/commands" },
              { text: "\u914D\u7F6E\u6587\u4EF6", link: "/bukkit/momoderatorplus/config-examples" },
              { text: "\u8DE8\u670D\u540C\u6B65", link: "/bukkit/momoderatorplus/sync" }
            ]
          },
          {
            text: "MoSimpleTitle",
            link: "/bukkit/mosimpletitle/",
            // 修正链接格式，添加斜杠
            collapsed: true,
            items: [
              { text: "\u4ECB\u7ECD", link: "/bukkit/mosimpletitle" },
              { text: "\u914D\u7F6E\u6587\u4EF6", link: "/bukkit/mosimpletitle/config-examples" }
            ]
          }
        ]
      }
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright \xA9 2025 OpenMoPlugins Teams"
    },
    search: {
      provider: "local"
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "", link: "/" }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/moran0710/OpenMoPluginsDocs/" }
    ]
  },
  lastUpdated: true
};
var config_default = defineConfig(vitePressConfig);
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qXFxcXGRvY1xcXFxPcGVuTW9QbHVnaW5zXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvalxcXFxkb2NcXFxcT3Blbk1vUGx1Z2luc1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvai9kb2MvT3Blbk1vUGx1Z2lucy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcblxuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xuY29uc3Qgdml0ZVByZXNzQ29uZmlnID0ge1xuICBoZWFkOiBbXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9mYXZpY29uLmljbycgfV1cbiAgXSxcbiAgbGFuZzogICd6aC1jbicsXG4gIHRpdGxlOiBcIk9wZW5Nb1BsdWdpbnNcIixcbiAgZGVzY3JpcHRpb246IFwiT3Blbk1vUGx1Z2luc1x1NjU4N1x1Njg2M1x1N0FEOVx1NzBCOVwiLFxuICBpZ25vcmVkZWFkbGlua3M6IHtcbiAgICAvLyBcdTZERkJcdTUyQTBcdTYzOTJcdTk2NjRcdTg5QzRcdTUyMTlcdUZGMENcdTVGRkRcdTc1NjVcdTYzMDdcdTVCOUFcdThERUZcdTVGODRcdTc2ODRcdTZCN0JcdTk0RkVcdTY4QzBcdTZENEJcbiAgICBleGNsdWRlOiBbJ2d1aWRlL3Byb2plY3RzLm1kJywgJy9idWtraXQvbW9zaW1wbGV0aXRsZSddICAvLyBcdTY1QjBcdTU4OUVcdTYzOTJcdTk2NjQgbW9zaW1wbGV0aXRsZSBcdTc2ODRcdTZCN0JcdTk0RkVcdTY4QzBcdTZENEJcbiAgfSxcbiAgdGhlbWVDb25maWc6IHtcbiAgICBpMThuUm91dGluZzogdHJ1ZSxcbiAgICBzaWRlYmFyOiAgW1xuICAgICAgICAgIHt0ZXh0OiBcIlx1OTg3OVx1NzZFRVx1NEVDQlx1N0VDRFwiLCBsaW5rOlwiL2d1aWRlL3doYXRzLXRoaXNcIn0sXG4gICAgICAgICAge3RleHQ6IFwiXHU5ODc5XHU3NkVFXHU1QkZDXHU4MjJBXCIsIGxpbms6XCIvZ3VpZGUvcHJvamVjdHNcIn0sXG4gICAgICAgICAge3RleHQ6IFwiXHU2NUU1XHU1RkQ3XCIsIGxpbms6XCIvZ3VpZGUvZGFpcnlcIn0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJCdWtraXRcdTk4NzlcdTc2RUVcIiwgXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJNb01vZGVyYXRvclBsdXNcIiwgXG4gICAgICAgICAgICAgICAgbGluazpcIi9idWtraXQvbW9tb2RlcmF0b3JwbHVzL1wiLCAvLyBcdTU3MjhcdTk0RkVcdTYzQTVcdTY3MkJcdTVDM0VcdTZERkJcdTUyQTBcdTY1OUNcdTY3NjBcdTRGRUVcdTU5MERcdThERUZcdTVGODRcdTg5RTNcdTY3OTBcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgIHt0ZXh0OiBcIlx1NEVDQlx1N0VDRFwiLCBsaW5rOlwiL2J1a2tpdC9tb21vZGVyYXRvcnBsdXNcIn0sXG4gICAgICAgICAgICAgICAgICB7dGV4dDogXCJcdTYzMDdcdTRFRTRcdTUyMTdcdTg4NjhcIiwgbGluazpcIi9idWtraXQvbW9tb2RlcmF0b3JwbHVzL2NvbW1hbmRzXCJ9LFxuICAgICAgICAgICAgICAgICAge3RleHQ6IFwiXHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2XCIsIGxpbms6XCIvYnVra2l0L21vbW9kZXJhdG9ycGx1cy9jb25maWctZXhhbXBsZXNcIn0sXG4gICAgICAgICAgICAgICAgICB7dGV4dDogXCJcdThERThcdTY3MERcdTU0MENcdTZCNjVcIiwgbGluazpcIi9idWtraXQvbW9tb2RlcmF0b3JwbHVzL3N5bmNcIn0sXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJNb1NpbXBsZVRpdGxlXCIsIFxuICAgICAgICAgICAgICAgIGxpbms6XCIvYnVra2l0L21vc2ltcGxldGl0bGUvXCIsIC8vIFx1NEZFRVx1NkI2M1x1OTRGRVx1NjNBNVx1NjgzQ1x1NUYwRlx1RkYwQ1x1NkRGQlx1NTJBMFx1NjU5Q1x1Njc2MFxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAge3RleHQ6IFwiXHU0RUNCXHU3RUNEXCIsIGxpbms6XCIvYnVra2l0L21vc2ltcGxldGl0bGVcIn0sXG4gICAgICAgICAgICAgICAgICB7dGV4dDogXCJcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjZcIiwgbGluazpcIi9idWtraXQvbW9zaW1wbGV0aXRsZS9jb25maWctZXhhbXBsZXNcIn1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIGZvb3Rlcjoge1xuICAgICAgICBtZXNzYWdlOiAnUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLicsXG4gICAgICAgIGNvcHlyaWdodDogJ0NvcHlyaWdodCBcdTAwQTkgMjAyNSBPcGVuTW9QbHVnaW5zIFRlYW1zJ1xuICAgICAgfSxcbiAgICAgIHNlYXJjaDoge1xuICAgICAgICBwcm92aWRlcjogJ2xvY2FsJ1xuICAgICAgfSxcbiAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXG4gICAgbmF2OiBbXG4gICAgICB7IHRleHQ6ICcnLCBsaW5rOiAnLycgfSxcbiAgICBdLFxuXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vbW9yYW4wNzEwL09wZW5Nb1BsdWdpbnNEb2NzLycgfVxuICAgIF1cbiAgfSxcbiAgbGFzdFVwZGF0ZWQ6IHRydWVcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcodml0ZVByZXNzQ29uZmlnKVxuXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlULFNBQVMsb0JBQW9CO0FBRzlVLElBQU0sa0JBQWtCO0FBQUEsRUFDdEIsTUFBTTtBQUFBLElBQ0osQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0sZUFBZSxDQUFDO0FBQUEsRUFDaEQ7QUFBQSxFQUNBLE1BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBO0FBQUEsSUFFZixTQUFTLENBQUMscUJBQXFCLHVCQUF1QjtBQUFBO0FBQUEsRUFDeEQ7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLGFBQWE7QUFBQSxJQUNiLFNBQVU7QUFBQSxNQUNKLEVBQUMsTUFBTSw0QkFBUSxNQUFLLG9CQUFtQjtBQUFBLE1BQ3ZDLEVBQUMsTUFBTSw0QkFBUSxNQUFLLGtCQUFpQjtBQUFBLE1BQ3JDLEVBQUMsTUFBTSxnQkFBTSxNQUFLLGVBQWM7QUFBQSxNQUNoQztBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQUs7QUFBQTtBQUFBLFlBQ0wsV0FBVztBQUFBLFlBQ1gsT0FBTztBQUFBLGNBQ0wsRUFBQyxNQUFNLGdCQUFNLE1BQUssMEJBQXlCO0FBQUEsY0FDM0MsRUFBQyxNQUFNLDRCQUFRLE1BQUssbUNBQWtDO0FBQUEsY0FDdEQsRUFBQyxNQUFNLDRCQUFRLE1BQUssMENBQXlDO0FBQUEsY0FDN0QsRUFBQyxNQUFNLDRCQUFRLE1BQUssK0JBQThCO0FBQUEsWUFDcEQ7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBSztBQUFBO0FBQUEsWUFDTCxXQUFXO0FBQUEsWUFDWCxPQUFPO0FBQUEsY0FDTCxFQUFDLE1BQU0sZ0JBQU0sTUFBSyx3QkFBdUI7QUFBQSxjQUN6QyxFQUFDLE1BQU0sNEJBQVEsTUFBSyx3Q0FBdUM7QUFBQSxZQUM3RDtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNGLFFBQVE7QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBO0FBQUEsSUFFRixLQUFLO0FBQUEsTUFDSCxFQUFFLE1BQU0sSUFBSSxNQUFNLElBQUk7QUFBQSxJQUN4QjtBQUFBLElBRUEsYUFBYTtBQUFBLE1BQ1gsRUFBRSxNQUFNLFVBQVUsTUFBTSxrREFBa0Q7QUFBQSxJQUM1RTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGFBQWE7QUFFZjtBQUVBLElBQU8saUJBQVEsYUFBYSxlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
