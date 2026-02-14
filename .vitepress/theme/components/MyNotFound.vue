<template>
  <div class="sims-404-container">
    <div class="sims-404-content">
      <img src="/plumbob.png" alt="Plumbob" class="giant-plumbob" />
      
      <h1 class="sims-404-title">404</h1>
      <h2 class="sims-404-subtitle">Sul Sul! 你的小人似乎迷路了...</h2>
      
      <p class="sims-404-desc">
        你想找的页面可能被外星人绑架了，或者已经被死神带走。<br>
        别慌，点击下方按钮可以安全回家。
      </p>

      <a href="/" class="sims-home-btn">
        传送到安全地带
      </a>
    </div>
  </div>
</template>

<style scoped>
.sims-404-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  padding: 40px 20px;
  text-align: center;
}

.sims-404-content {
  background: var(--vp-c-bg-soft);
  padding: 60px 40px;
  border-radius: 24px;
  border: 2px solid var(--vp-c-brand-soft);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  max-width: 600px;
  width: 100%;
  transition: transform 0.3s ease;
}

.sims-404-content:hover {
  transform: translateY(-5px);
  border-color: var(--vp-c-brand-1);
}

/* 巨型绿水晶悬浮动画 */
.giant-plumbob {
  width: 80px;
  margin: 0 auto 20px;
  display: block;
  filter: drop-shadow(0 10px 15px rgba(91, 179, 45, 0.4));
  animation: float-up-down 3s ease-in-out infinite;
}

@keyframes float-up-down {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-15px) scale(1.05); }
}

.sims-404-title {
  font-size: 84px;
  font-weight: 900;
  margin: 0;
  /* 渐变文字效果 */
  background: linear-gradient(135deg, #5bb32d 0%, #2da4ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
}

.sims-404-subtitle {
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0 15px;
  color: var(--vp-c-text-1);
}

.sims-404-desc {
  font-size: 16px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 35px;
}

.sims-home-btn {
  display: inline-block;
  background-color: var(--vp-c-brand-1);
  color: #ffffff !important;
  font-size: 18px;
  font-weight: bold;
  padding: 14px 36px;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 15px rgba(91, 179, 45, 0.3);
}

.sims-home-btn:hover {
  background-color: var(--vp-c-brand-2);
  transform: scale(1.05);
  box-shadow: 0 12px 20px rgba(91, 179, 45, 0.4);
}
</style>
