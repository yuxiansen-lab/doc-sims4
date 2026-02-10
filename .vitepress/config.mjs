
import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/",
  title: "SulSul! Sims4 Mods", 
  description: "模拟人生4 模组安装与中文教程站",
  
  head: [
    ['meta', { name: 'msvalidate.01', content: 'CA8108492CD30C720C25C8FA6F32E0B5' }]
  ],
  sitemap: {
    hostname: 'https://sulsul.top'
  },

  themeConfig: {
    // 🔍 本地搜索配置
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件'
          }
        }
      }
    },
    
    // --- 顶部导航栏 ---
    nav: [
      { text: '首页', link: '/' },
      { text: '前言', link: '/foreword' }
      // 💡 下拉菜单示例已安全注释，不会触发报错
      /* , {
        text: '快速分类',
        items: [
          { text: '🟢 全年龄', link: '/mods/safe/' },
          { text: '🔞 限制级', link: '/mods/cas/' }
        ]
      } 
      */
    ],

    // --- 侧边栏 (多级折叠结构) ---
    sidebar: [
      {
        text: '索引',
        collapsed: false, // 默认展开，因为这是入门必看的
        items: [
          { text: '前言', link: '/foreword' },
          { text: '安装基础教程', link: '/install-basic' },
          { text: 'Markdown 管理手册', link: '/markdown-instruction' }
        ]
      },
      
      {
        text: '📦 模组中心', 
        collapsed: false, // 设置为 false，让这两个子分类直接露出来
        items: [
          {
            text: '🟢 全年龄向 (SFW)',
            collapsed: true, // 默认收起
            items: [
              { text: 'MCCC 控制中心', link: '/mods/mccc' },
              { text: 'UI 界面修改', link: '/ui-cheats' },
              { text: '功能性小模组', link: '/mods/safe/general' }
            ]
          },
          {
            text: '🔞 限制级内容 (18+)',
            collapsed: true, // 默认收起，保持页面整洁
            items: [
              { 
                text: '<img src="/ww-icon.png" class="ww-icon-sidebar"> WW 绅士包', 
                link: '/mods/cas/wickedwhimsmod' 
              }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yuxiansen-lab/' },
      { icon: 'twitter', link: 'https://x.com/YuYxsen' },
      {
        icon: {
          svg: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M777.514667 131.669333a53.333333 53.333333 0 0 1 0 75.434667L728.746667 255.829333h49.92A160 160 0 0 1 938.666667 415.872v320a160 160 0 0 1-160 160H245.333333A160 160 0 0 1 85.333333 735.872v-320a160 160 0 0 1 160-160h49.749334L246.4 207.146667a53.333333 53.333333 0 1 1 75.392-75.434667l113.152 113.152c3.370667 3.370667 6.186667 7.04 8.448 10.965333h137.088c2.261333-3.925333 5.12-7.68 8.490667-11.008l113.109333-113.152a53.333333 53.333333 0 0 1 75.434667 0z m1.152 231.253334H245.333333a53.333333 53.333333 0 0 0-53.205333 49.365333l-0.128 4.010667v320c0 28.117333 21.76 51.157333 49.365333 53.162666l3.968 0.170667h533.333334a53.333333 53.333333 0 0 0 53.205333-49.365333l0.128-3.968v-320c0-29.44-23.893333-53.333333-53.333333-53.333334z m-426.666667 106.666666c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z m320 0c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z" fill="currentColor"></path></svg>'
        },
        link: 'https://space.bilibili.com/1453363767'
      },
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Xiansen Yu' 
    }
  }
})
