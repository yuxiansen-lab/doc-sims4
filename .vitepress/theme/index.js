import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// 导入你的自定义组件
import AgeGate from './components/AgeGate.vue'
import MyNotFound from './components/MyNotFound.vue'

/** @type {import('vitepress').Theme} */
export default {
  // 继承 VitePress 默认主题
  extends: DefaultTheme,

  // 使用插槽（Slots）注入自定义内容
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      /**
       * 1. 导航栏标题前的图标 (绿水晶)
       */
      'nav-bar-title-before': () => h('img', { 
        src: '/plumbob.png', 
        class: 'plumbob-logo', 
        alt: 'Sims Plumbob' 
      }),

      /**
       * 2. 全屏简约 404 页面
       * 当访问不存在的路径时，会渲染 MyNotFound.vue 的内容
       */
      'not-found': () => h(MyNotFound)
    })
  },

  /**
   * 增强应用
   * app: Vue 应用实例
   */
  enhanceApp({ app }) {
    // 注册全局组件，方便在 Markdown 中直接使用 <AgeGate />
    app.component('AgeGate', AgeGate)
  }
}
