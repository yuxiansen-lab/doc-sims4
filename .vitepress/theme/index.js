import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import AgeGate from './components/AgeGate.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,

  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 导航栏绿水晶图标
      'nav-bar-title-before': () => h('img', { 
        src: '/plumbob.png', 
        class: 'plumbob-logo', 
        alt: 'Sims Plumbob' 
      }),

      // 自定义 404 页面内容
      'not-found': () => h('div', { 
        style: 'text-align: center; padding: 100px 24px;' 
      }, [
        h('h1', { style: 'font-size: 80px; margin: 0; color: var(--vp-c-brand-1);' }, '404'),
        h('h2', { style: 'font-size: 24px; margin: 20px 0;' }, '哎呀！这个页面被死神带走了'),
        h('p', { style: 'color: var(--vp-c-text-2); margin-bottom: 30px;' }, '你访问的路径在模拟世界中不存在。'),
        h('a', { 
          href: '/', 
          style: 'padding: 10px 24px; background: var(--vp-c-brand-1); color: white; border-radius: 20px; font-weight: bold; text-decoration: none;' 
        }, '回到避难所 (首页)')
      ])
    })
  },

  enhanceApp({ app }) {
    app.component('AgeGate', AgeGate)
  }
}
