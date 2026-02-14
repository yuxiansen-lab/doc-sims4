<template>
  <div class="minimal-404">
    <div class="content">
      <h1 class="code">404</h1>
      <p class="title">页面未找到</p>
      <div class="divider"></div>
      <p class="quote">山重水复疑无路，柳暗花明又一村</p>
      <a href="/" class="back-link">踏上归途</a>
    </div>
  </div>
</template>

<style scoped>
/* 容器全屏并设置淡雅背景 */
.minimal-404 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #fff5ec 0%, #eef3ff 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* 确保盖住导航栏 */
  font-family: var(--vp-font-family-base);
}

.content {
  text-align: center;
}

.code {
  font-size: 120px;
  font-weight: 600;
  color: #333;
  margin: 0;
  line-height: 1;
}

.title {
  font-size: 24px;
  color: #666;
  margin-top: 10px;
}

.divider {
  width: 40px;
  height: 1px;
  background-color: #ccc;
  margin: 30px auto;
}

.quote {
  font-size: 16px;
  color: #888;
  margin-bottom: 40px;
  letter-spacing: 2px;
}

/* 按钮样式：复刻截图中的蓝色细圆角边框 */
.back-link {
  display: inline-block;
  border: 1px solid #3e63ed;
  color: #3e63ed !important;
  padding: 8px 32px;
  border-radius: 20px;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.5);
}

.back-link:hover {
  background: #3e63ed;
  color: #fff !important;
  box-shadow: 0 4px 12px rgba(62, 99, 237, 0.2);
}

/* 适配移动端 */
@media (max-width: 768px) {
  .code { font-size: 80px; }
  .title { font-size: 20px; }
}
</style>
