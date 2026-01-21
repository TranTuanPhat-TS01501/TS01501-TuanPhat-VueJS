<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const post = ref({
  title: '',
  content: '',
  image: '' 
});

const currentUser = ref(null);

onMounted(() => {
  // 1. Kiểm tra đăng nhập
  const userStr = localStorage.getItem('currentUser');
  if (!userStr) {
    alert("Bạn cần đăng nhập để viết bài!");
    router.push('/login');
    return;
  }
  currentUser.value = JSON.parse(userStr);
});

const createPost = () => {
  // 2. Lấy danh sách bài viết cũ
  const posts = JSON.parse(localStorage.getItem('posts')) || [];

  // 3. Tạo bài viết mới
  const newPost = {
    id: Date.now(), // Dùng thời gian làm ID cho không trùng
    title: post.value.title,
    content: post.value.content,
    image: post.value.image || 'https://via.placeholder.com/800x400', // Ảnh mặc định nếu để trống
    author: currentUser.value.name,
    authorEmail: currentUser.value.email, // Lưu email để sau này check quyền sửa/xóa
    date: new Date().toLocaleDateString('vi-VN')
  };

  // 4. Lưu và chuyển hướng
  posts.unshift(newPost); // Thêm vào đầu danh sách
  localStorage.setItem('posts', JSON.stringify(posts));
  
  alert("Đăng bài thành công!");
  router.push('/'); // Về trang chủ
};
</script>

<template>
  <div class="row justify-content-center mt-4">
    <div class="col-md-8">
      <div class="card shadow-sm">
        <div class="card-header bg-primary text-white">
          <h4 class="mb-0">Viết bài mới</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="createPost">
            <div class="mb-3">
              <label class="form-label">Tiêu đề bài viết</label>
              <input v-model="post.title" type="text" class="form-control" required placeholder="Nhập tiêu đề...">
            </div>
            
            <div class="mb-3">
              <label class="form-label">Link hình ảnh (URL)</label>
              <input v-model="post.image" type="url" class="form-control" placeholder="https://example.com/image.jpg">
              <div class="form-text">Bạn có thể copy link ảnh trên mạng dán vào đây.</div>
            </div>

            <div class="mb-3">
              <label class="form-label">Nội dung</label>
              <textarea v-model="post.content" class="form-control" rows="6" required placeholder="Nội dung bài viết..."></textarea>
            </div>

            <div class="d-flex justify-content-end">
              <router-link to="/" class="btn btn-secondary me-2">Hủy</router-link>
              <button type="submit" class="btn btn-primary">Đăng bài</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>