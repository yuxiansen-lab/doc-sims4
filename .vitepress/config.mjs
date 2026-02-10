import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "SulSul! Sims4 Mods", 
  description: "模拟人生4 模组安装与中文教程站",
  
  // 注入 Bing 验证标签和 Sitemap
  head: [
    ['meta', { name: 'msvalidate.01', content: 'CA8108492CD30C720C25C8FA6F32E0B5' }]
  ],
  sitemap: {
    hostname: 'https://sulsul.top'
  },

  themeConfig: {
    // 🔍 新增：本地搜索功能
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    
    // --- 导航栏 ---
    nav: [
      { text: '首页', link: '/' },
      { text: '详情', link: '/markdown-examples' },
      
      // =========== 以后如果你想加折叠菜单，参考下面这个格式 ===========
      // {
      //   text: '我是折叠菜单',
      //   items: [
      //     { text: '子选项 A', link: '/path-a' },
      //     { text: '子选项 B', link: '/path-b' }
      //   ]
      // }
      // ==========================================================
    ],

    sidebar: [
      // 第一个分组：基础索引
      {
        text: '📖 索引',
        items: [
          { text: '前言', link: '/foreword' },
          { text: 'SulSul! 教程 (必看!)', link: '/install-basic' },
          { text: 'Markdown 管理手册', link: '/markdown-instruction' }
        ]
      },
      
      // 第二个分组：模组中心
      {
        text: '📦 模组中心 (MODS)', 
        collapsed: false, 
        items: [
          // ⚠️ 
          { 
            text: '<img src="/ww-icon.png" class="ww-icon-sidebar"> WW 绅士包', 
            link: '/mods/cas/wickedwhimsmod' 
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
