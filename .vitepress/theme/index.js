import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import AgeGate from './components/AgeGate.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,

  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 仅保留导航栏绿水晶
      'nav-bar-title-before': () => h('img', { 
        src: '/plumbob.png', 
        class: 'plumbob-logo', 
        alt: 'Sims Plumbob' 
      }),
    })
  },

  enhanceApp({ app }) {
    app.component('AgeGate', AgeGate)
  }
}
