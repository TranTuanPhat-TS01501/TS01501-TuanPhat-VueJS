<template>
  <div class="container mt-5">
    <h3 class="mb-3">Nhập điểm của bạn:</h3>
    <input 
      type="number" 
      class="form-control mb-3" 
      v-model.number="score" 
      placeholder="Nhập điểm số (0-10)"
      min="0" max="10"
    />
    
    <div v-if="score !== null">
      <p v-if="score < 5" class="text-danger">Xếp loại: Yếu</p>
      <p v-else-if="score < 6.5" class="text-warning">Xếp loại: Trung bình</p>
      <p v-else-if="score < 8" class="text-primary">Xếp loại: Khá</p>
      <p v-else-if="score < 9" class="text-success">Xếp loại: Giỏi</p>
      <p v-else class="text-success fw-bold">Xếp loại: Xuất sắc</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const score = ref(null);
</script>