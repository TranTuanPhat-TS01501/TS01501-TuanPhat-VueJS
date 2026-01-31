<template>
  <div class="post-detail">
    <button @click="$router.push({ name: 'BlogList' })" class="btn-back">
      &larr; Quay lại danh sách
    </button>
    
    <div class="post-content">
      <h1>Bài viết số #{{ $route.params.id }}</h1>
      <p class="meta">Đăng bởi <strong>Admin</strong> vào ngày 29/01/2026</p>
      
      <hr>
      
      <div class="body-text">
        <p>Đây là nội dung mô phỏng cho bài viết có ID là <strong>{{ $route.params.id }}</strong>.</p>
        <p>Trong thực tế, bạn sẽ gọi API để lấy nội dung chi tiết dựa trên ID này. Vue Router giúp việc lấy tham số từ URL trở nên cực kỳ dễ dàng thông qua <code>$route.params.id</code>.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-back {
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 5px;
}
.btn-back:hover { color: #42b883; }

.post-content {
  background: white;
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}

h1 { margin-top: 0; color: #2c3e50; }
.meta { color: #999; font-size: 0.9rem; margin-bottom: 2rem; }
hr { border: 0; border-top: 1px solid #eee; margin: 2rem 0; }
.body-text { line-height: 1.8; color: #444; font-size: 1.1rem; }
</style>