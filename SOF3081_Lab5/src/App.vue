<template>
  <div class="min-vh-100 bg-light d-flex flex-column">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div class="container">
        <a class="navbar-brand fw-bold" href="#">
          <span class="badge bg-light text-primary me-2">TS01501-Trần Tuấn Phát-Lab 5</span>
          SOF3081
        </a>
        <div class="d-flex gap-2">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            class="btn btn-sm transition-btn"
            :class="currentTab === tab.id ? 'btn-light text-primary fw-bold' : 'btn-outline-light'"
            @click="currentTab = tab.id"
          >
            {{ tab.name }}
          </button>
        </div>
      </div>
    </nav>

    <div class="container flex-grow-1 py-4">
      <div class="fade-in-animation">
        <Bai1 v-if="currentTab === 'bai1'" />
        <Bai2 v-if="currentTab === 'bai2'" />
        <Bai3 v-if="currentTab === 'bai3'" />
        
        <div v-if="currentTab === 'bai4'">
          <div class="row g-4">
            <div class="col-md-4">
              <CreatePost @add-post="addPost" />
            </div>
            <div class="col-md-8">
              <PostList :posts="posts" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="bg-white text-center py-3 mt-auto shadow-sm border-top">
      <small class="text-muted">
        © 2026 FPT Polytechnic | Sinh viên: <strong>Trần Tuấn Phát (TS01501)</strong>
      </small>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Bai1 from './components/bai1.vue';
import Bai2 from './components/bai2.vue';
import Bai3 from './components/bai3.vue';
import CreatePost from './components/CreatePost.vue';
import PostList from './components/PostList.vue';

// Cấu hình Tabs
const currentTab = ref('bai4'); // Mặc định mở Bài 4
const tabs = [
  { id: 'bai1', name: 'Bài 1' },
  { id: 'bai2', name: 'Bài 2' },
  { id: 'bai3', name: 'Bài 3' },
  { id: 'bai4', name: 'Bài 4' },
];

// Data cho Blog
const posts = ref([
  { 
    title: 'Review Môn SOF3081', 
    content: 'Môn này học về VueJS, rất hay và thực tế...', 
    author: 'Trần Tuấn Phát', 
    backgroundColor: '#e3f2fd', 
    textColor: '#0d6efd' 
  }
]);

function addPost(newPost) {
  const colors = [
    { bg: '#fff3cd', text: '#856404' }, // Vàng nhạt
    { bg: '#d1e7dd', text: '#0f5132' }, // Xanh lá nhạt
    { bg: '#f8d7da', text: '#842029' }, // Đỏ nhạt
    { bg: '#cff4fc', text: '#055160' }, // Xanh dương nhạt
    { bg: '#fefefe', text: '#333333' }  // Trắng
  ];
  const randomStyle = colors[Math.floor(Math.random() * colors.length)];
  
  posts.value.unshift({ // Dùng unshift để bài mới lên đầu
    ...newPost,
    backgroundColor: randomStyle.bg,
    textColor: randomStyle.text
  });
}
</script>

<style>
/* Hiệu ứng chuyển động nhẹ nhàng */
.fade-in-animation {
  animation: fadeIn 0.5s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.transition-btn { transition: all 0.3s; }
</style>