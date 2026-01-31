<template>
  <div>
    <h1 class="page-title">Bài viết mới nhất 📰</h1>
    <div class="blog-grid">
      <div class="blog-card" @click="$router.push({ name: 'BlogPost', params: { id: 1 }})">
        <div class="card-img" style="background-color: #ff9a9e;"></div>
        <div class="card-body">
          <h3>Học Vue Router cơ bản</h3>
          <p>Tìm hiểu cách điều hướng trang trong Vue.js...</p>
          <span class="read-more">Đọc tiếp &rarr;</span>
        </div>
      </div>

      <div class="blog-card" @click="$router.push({ name: 'BlogPost', params: { id: 2 }})">
        <div class="card-img" style="background-color: #a18cd1;"></div>
        <div class="card-body">
          <h3>Nested Routes là gì?</h3>
          <p>Cách tạo menu con và cấu trúc route lồng nhau...</p>
          <span class="read-more">Đọc tiếp &rarr;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-title { text-align: center; margin-bottom: 2rem; color: #2c3e50; }

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.blog-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  cursor: pointer;
  transition: transform 0.2s;
}
.blog-card:hover { transform: translateY(-5px); }

.card-img { height: 150px; width: 100%; }
.card-body { padding: 1.5rem; }
.card-body h3 { margin: 0 0 10px; color: #333; }
.card-body p { color: #666; font-size: 0.9rem; line-height: 1.5; }
.read-more { color: #42b883; font-weight: bold; font-size: 0.9rem; }
</style>