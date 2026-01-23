<template>
  <div class="card border-0 shadow-sm rounded-3 h-100">
    <div class="card-header bg-white border-bottom-0 pt-4 px-4">
      <h5 class="text-primary fw-bold mb-0">
        <i class="bi bi-lightning-charge-fill me-2"></i>Bài 1:
      </h5>
      <p class="text-muted small">Click nút bên dưới để xem sự thay đổi (Reactivity)</p>
    </div>
    
    <div class="card-body d-flex flex-column align-items-center justify-content-center py-4">
      <div 
        class="alert px-5 py-3 mb-4 fw-bold transition-all" 
        :class="isChanged ? 'alert-success' : 'alert-secondary'"
        role="alert"
      >
        {{ message }}
      </div>

      <button 
        class="btn btn-lg fw-bold px-4"
        :class="isChanged ? 'btn-outline-success' : 'btn-dark'"
        @click="updateMessage"
      >
        {{ isChanged ? 'Đã cập nhật!' : 'Nhấn vào tôi' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Thông điệp ban đầu');
const isChanged = ref(false); // Biến để kiểm soát trạng thái màu sắc

const updateMessage = () => {
  message.value = 'Thông điệp đã được thay đổi thành công!';
  isChanged.value = true;
};
</script>

<style scoped>
.transition-all { transition: all 0.3s ease; }
</style>