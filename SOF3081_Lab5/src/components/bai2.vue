<template>
  <div class="card border-0 shadow-sm rounded-3 h-100">
    <div class="card-header bg-white border-bottom-0 pt-4 px-4">
      <h5 class="text-danger fw-bold mb-0">
        <i class="bi bi-arrow-repeat me-2"></i>Bài 2:
      </h5>
      <p class="text-muted small">Dữ liệu đồng bộ hai chiều ngay lập tức</p>
    </div>

    <div class="card-body px-4 pb-4">
      <div class="mb-3">
        <label class="form-label fw-bold text-uppercase small text-secondary">Nhập dữ liệu vào đây:</label>
        <div class="input-group input-group-lg">
          <span class="input-group-text bg-light border-end-0">✍️</span>
          <input 
            v-model="userInput" 
            class="form-control border-start-0 bg-light" 
            placeholder="Gõ gì đó đi..." 
          />
        </div>
      </div>

      <div class="p-3 bg-primary bg-opacity-10 border border-primary border-opacity-25 rounded-3 text-center">
        <p class="mb-1 text-muted small">Kết quả hiển thị (Real-time):</p>
        <h3 class="text-primary fw-bold m-0 text-break">
          {{ userInput || '...' }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const userInput = ref('FPT Polytechnic');
</script>