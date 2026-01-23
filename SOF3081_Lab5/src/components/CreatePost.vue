<template>
  <div class="card border-0 shadow-lg sticky-top" style="top: 20px; z-index: 1;">
    <div class="card-header bg-white border-0 pt-4 px-4">
      <h5 class="text-primary fw-bold"><i class="bi bi-pen"></i> Đăng bài mới</h5>
    </div>
    <div class="card-body px-4 pb-4">
      <div class="mb-3">
        <label class="form-label text-muted small fw-bold">TIÊU ĐỀ</label>
        <input v-model="title" class="form-control form-control-lg" placeholder="Nhập tiêu đề..." />
      </div>
      
      <div class="mb-3">
        <label class="form-label text-muted small fw-bold">TÁC GIẢ</label>
        <input v-model="author" class="form-control" placeholder="Tên của bạn..." />
      </div>
      
      <div class="mb-3">
        <label class="form-label text-muted small fw-bold">NỘI DUNG</label>
        <textarea v-model="content" class="form-control" rows="4" placeholder="Bạn đang nghĩ gì?"></textarea>
      </div>
      
      <button class="btn btn-primary w-100 fw-bold py-2" @click="submitPost">
        ĐĂNG NGAY
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['add-post']);
const title = ref('');
const content = ref('');
const author = ref('');

function submitPost() {
  if (title.value && content.value) {
    emit('add-post', {
      title: title.value,
      content: content.value,
      author: author.value || 'Ẩn danh'
    });
    // Reset form
    title.value = ''; content.value = ''; author.value = '';
  } else {
    alert("Đừng để trống tiêu đề hoặc nội dung nha!");
  }
}
</script>