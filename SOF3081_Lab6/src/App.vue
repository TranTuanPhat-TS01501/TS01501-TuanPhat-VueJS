<template>
  <div class="container py-5">
    <h1 class="text-center mb-5 text-uppercase fw-bold">TS01501-Trần Tuấn Phát-Lab6</h1>
    
    <div class="card mb-5 border-primary">
      <div class="card-header bg-primary text-white">Bài 1: Xếp loại học sinh</div>
      <div class="card-body">
        <Bai1 />
      </div>
    </div>

    <div class="card mb-5 border-success">
      <div class="card-header bg-success text-white">Bài 2: Mùa trong năm</div>
      <div class="card-body">
        <Bai2 />
      </div>
    </div>

    <div class="card mb-5 border-info">
      <div class="card-header bg-info text-white">Bài 3: Kiến thức sức khỏe</div>
      <div class="card-body">
        <Bai3 />
      </div>
    </div>

    <div class="card mb-5 border-warning">
      <div class="card-header bg-warning text-dark">Bài 4: Quản lý học sinh</div>
      <div class="card-body">
        <Bai4 />
      </div>
    </div>
  </div>
</template>

<script setup>
// Import các bài vào để hiển thị
import Bai1 from './components/bai1.vue';
import Bai2 from './components/bai2.vue';
import Bai3 from './components/bai3.vue';
import Bai4 from './components/bai4.vue';
</script>