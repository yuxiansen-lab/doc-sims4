// 导入 Vue 的渲染函数 h，用于创建 HTML 元素
import { h } from 'vue'
// 导入 VitePress 的默认主题
import DefaultTheme from 'vitepress/theme'
// 导入你的自定义样式表
import './style.css'
// 【新增】导入年龄验证组件 (请确保文件路径是 .vitepress/theme/components/AgeGate.vue)
import AgeGate from './components/AgeGate.vue'

/** @type {import('vitepress').Theme} */
export default {
  // 继承 VitePress 官方提供的默认主题外观
  extends: DefaultTheme,

  // Layout 允许你通过“插槽(Slots)”在页面的特定位置插入自定义内容
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      /**
       * 插槽：'nav-bar-title-before'
       * 作用：在顶部导航栏的“网站标题”左侧插入绿水晶图片
       */
      'nav-bar-title-before': () => h('img', { 
        src: '/plumbob.png',        // 图片路径，必须放在 public 文件夹下
        class: 'plumbob-logo',      // 对应 style.css 里的旋转动画类名
        alt: 'Sims Plumbob'         // 图片的描述文本
      }),
    })
  },

  // 这个函数在应用创建时运行，适合用来安装插件或全局组件
  enhanceApp({ app, router, siteData }) {
    /**
     * 【关键修改】全局注册 AgeGate 组件
     * 注册后，你在任何 .md 文件里直接写 <AgeGate /> 就能用，不用再写 import
     */
    app.component('AgeGate', AgeGate)
  }
}
