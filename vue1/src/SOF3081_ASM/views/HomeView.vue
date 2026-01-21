<script setup>
import { ref, onMounted } from 'vue';

const posts = ref([]);

onMounted(() => {
  // Lấy dữ liệu từ LocalStorage khi load trang
  posts.value = JSON.parse(localStorage.getItem('posts')) || [];
});
</script>

<template>
  <div class="row mt-4">
    <div class="col-md-8">
      <h3 class="mb-4 border-bottom pb-2">Bài viết mới nhất</h3>
      
      <div v-if="posts.length === 0" class="alert alert-info">
        Chưa có bài viết nào. Hãy là người đầu tiên đăng bài!
      </div>

      <div v-for="post in posts" :key="post.id" class="card mb-4 shadow-sm">
        <img :src="post.image" class="card-img-top" style="height: 300px; object-fit: cover;" alt="Post Image">
        
        <div class="card-body">
          <h2 class="card-title h4">{{ post.title }}</h2>
          <p class="text-muted small">
            <i class="bi bi-person-circle"></i> {{ post.author }} | 
            <i class="bi bi-calendar3"></i> {{ post.date }}
          </p>
          
          <p class="card-text text-truncate">{{ post.content }}</p>
          
          <router-link :to="{ name: 'post-detail', params: { id: post.id } }" class="btn btn-outline-primary">
            Xem chi tiết &rarr;
          </router-link>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card mb-3">
        <div class="card-header bg-light">Giới thiệu</div>
        <div class="card-body">
          <p>Chào mừng đến với Poly Blog! Nơi chia sẻ kiến thức và đam mê lập trình VueJS.</p>
        </div>
      </div>
    </div>
  </div>
</template>