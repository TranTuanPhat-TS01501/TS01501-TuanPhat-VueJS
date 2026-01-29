<script setup>
// Import các bài Lab từ thư mục components
import Bai1 from './components/bai1.vue'
import Bai2 from './components/bai2.vue'
import Bai3 from './components/bai3.vue'
import Bai4 from './components/bai4.vue'
</script>

<template>
  <div class="container py-5">
    <header class="text-center mb-5">
      <h1 class="display-4 fw-bold text-primary">TS01501-Trần Tuấn Phát-Lab 7</h1>
    </header>

    <main>
      <section class="mb-5">
        <h2 class="h4 mb-3 text-info">Bài 1: Quản lý công việc</h2>
        <Bai1 />
      </section>

      <hr class="my-5">

      <section class="mb-5">
        <h2 class="h4 mb-3 text-info">Bài 2: Đăng nhập</h2>
        <Bai2 />
      </section>

      <hr class="my-5">

      <section class="mb-5">
        <h2 class="h4 mb-3 text-info">Bài 3: Form Đăng Ký</h2>
        <Bai3 />
      </section>

      <hr class="my-5">

      <section class="mb-5">
        <h2 class="h4 mb-3 text-info">Bài 4: Bình luận bài viết</h2>
        <Bai4 />
      </section>
    </main>

    <footer class="text-center mt-5 pb-3 text-muted">
      <small>&copy; 2026 - FPT Polytechnic</small>
    </footer>
  </div>
</template>

<style>
/* Bạn có thể thêm các tùy chỉnh CSS chung cho cả project ở đây */
body {
  background-color: #f8f9fa;
}
section {
  background: white;
  padding: 20px;
  border-radius: 15px;
  shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
</style>