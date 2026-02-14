import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import AgeGate from './components/AgeGate.vue'
// 【新增】引入我们刚才写的超美 404 组件
import MyNotFound from './components/MyNotFound.vue'

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

      // 【精简】直接调用刚才写的 MyNotFound 组件
      'not-found': () => h(MyNotFound)
    })
  },

  enhanceApp({ app }) {
    app.component('AgeGate', AgeGate)
  }
}
