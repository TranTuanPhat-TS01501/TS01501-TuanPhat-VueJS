<template>
  <div class="home-container">
    <div class="hero-section">
      <h1>Chào mừng đến với MyBlog 🚀</h1>
      <p>Nơi chia sẻ kiến thức về lập trình Vue.js, Java và Minecraft Server.</p>
      <div class="actions">
        <button @click="$router.push({ name: 'BlogList' })" class="btn-primary">Xem bài viết</button>
        <button @click="$router.push({ name: 'Login' })" class="btn-outline">Đăng nhập</button>
      </div>
    </div>
    
    <div class="features">
      <div class="feature-item">
        <h3>⚡ Tốc độ cao</h3>
        <p>Xây dựng trên nền tảng Vite và Vue 3 mới nhất.</p>
      </div>
      <div class="feature-item">
        <h3>🎨 Giao diện đẹp</h3>
        <p>Thiết kế hiện đại, tối giản và thân thiện người dùng.</p>
      </div>
      <div class="feature-item">
        <h3>🛡️ Bảo mật</h3>
        <p>Hệ thống Route Guard bảo vệ các trang quan trọng.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  text-align: center;
}

.hero-section {
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  color: white;
  padding: 4rem 2rem;
  border-radius: 15px;
  margin-bottom: 3rem;
  box-shadow: 0 10px 30px rgba(66, 184, 131, 0.3);
}

.hero-section h1 { font-size: 2.5rem; margin-bottom: 1rem; }
.hero-section p { font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.9; }

.actions { display: flex; gap: 1rem; justify-content: center; }

.btn-primary {
  background: white;
  color: #42b883;
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
}
.btn-primary:hover { transform: scale(1.05); }

.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 10px 30px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-outline:hover { background: rgba(255,255,255,0.1); }

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-item {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}
.feature-item h3 { color: #35495e; margin-bottom: 0.5rem; }
.feature-item p { color: #666; }
</style>