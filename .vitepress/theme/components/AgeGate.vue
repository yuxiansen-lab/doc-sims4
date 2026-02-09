<template>
  <Transition name="vp-fade">
    <div v-if="isVisible" class="vp-age-gate-overlay">
      <div class="vp-age-gate-card">
        <div class="vp-age-gate-header">
          <span class="age-icon">🔞</span>
          <h2 class="title">内容确认</h2>
        </div>

        <div class="vp-age-gate-body">
          <p>您即将访问的内容包含 <strong>18+ 成人元素</strong>。</p>
          <p class="secondary">继续操作即代表您已年满 18 周岁，且愿意遵守相关法律法规并承担访问后果。</p>
        </div>

        <div class="vp-age-gate-footer">
          <button class="vp-btn primary" @click="confirm">我已满 18 岁</button>
          <button class="vp-btn default" @click="goBack">离开</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  const isConfirmed = localStorage.getItem('age-gate-confirmed')
  if (!isConfirmed) {
    // 禁止页面滚动，增强强制性
    document.body.style.overflow = 'hidden'
    isVisible.value = true
  }
})

const confirm = () => {
  localStorage.setItem('age-gate-confirmed', 'true')
  document.body.style.overflow = ''
  isVisible.value = false
}

const goBack = () => {
  window.history.back()
}
</script>

<style scoped>
/* 遮罩层使用 VitePress 官方遮罩色 */
.vp-age-gate-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vp-c-bg-mask);
  backdrop-filter: blur(8px);
}

/* 卡片样式：完全套用 VitePress 默认卡片样式 */
.vp-age-gate-card {
  background-color: var(--vp-c-bg-elv); /* 使用悬浮层背景色 */
  border: 1px solid var(--vp-c-border);
  border-radius: 16px;
  padding: 32px;
  max-width: 440px;
  width: 90%;
  box-shadow: var(--vp-shadow-5);
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.vp-age-gate-header .age-icon {
  font-size: 48px;
  display: block;
  margin-bottom: 12px;
}

.vp-age-gate-header .title {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.vp-age-gate-body {
  margin: 24px 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.vp-age-gate-body strong {
  color: var(--vp-c-brand-1); /* 品牌强调色 */
}

.secondary {
  font-size: 14px;
  margin-top: 8px;
  opacity: 0.8;
}

/* 按钮样式：对标 VitePress 首页按钮 */
.vp-age-gate-footer {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.vp-btn {
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.vp-btn.primary {
  background-color: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
}

.vp-btn.primary:hover {
  background-color: var(--vp-c-brand-2);
}

.vp-btn.default {
  background-color: var(--vp-c-default-soft);
  color: var(--vp-c-default-1);
}

.vp-btn.default:hover {
  background-color: var(--vp-c-default-soft-hover);
}

/* 动画效果 */
.vp-fade-enter-active, .vp-fade-leave-active {
  transition: opacity 0.3s ease;
}
.vp-fade-enter-from, .vp-fade-leave-to {
  opacity: 0;
}
</style>
