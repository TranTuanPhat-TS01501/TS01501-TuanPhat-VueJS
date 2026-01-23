<template>
  <div>
    <h4 class="mb-3 text-secondary fw-bold">Bảng tin ({{ posts.length }} bài viết)</h4>
    
    <div v-if="posts.length === 0" class="text-center py-5 text-muted">
      Chưa có bài viết nào. Hãy là người đầu tiên!
    </div>

    <div class="row g-3">
      <div class="col-12" v-for="(post, index) in posts" :key="index">
        <div 
          class="card h-100 border-0 shadow-sm hover-shadow transition-card"
          :style="{ backgroundColor: post.backgroundColor, color: post.textColor }"
        >
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <h5 class="card-title fw-bold m-0">{{ post.title }}</h5>
              <span v-if="post.title.length > 20" class="badge bg-danger rounded-pill">Hot</span>
            </div>
            
            <h6 class="card-subtitle mb-3 opacity-75">
              <small>Bởi: <strong>{{ post.author }}</strong></small>
            </h6>
            
            <p class="card-text">{{ post.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({ posts: Array });
</script>

<style scoped>
.hover-shadow:hover {
  transform: translateY(-3px);
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}
.transition-card {
  transition: all 0.3s ease;
}
</style>