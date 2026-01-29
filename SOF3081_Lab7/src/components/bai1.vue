<template>
  <div class="col-sm-6 mx-auto card p-4 mb-3">
    <h3 class="text-center">Quản lý công việc</h3>
    <form @submit.prevent="addJob">
      <div class="mb-3">
        <label class="form-label">Tên công việc:</label>
        <input type="text" v-model="newJob" class="form-control" placeholder="Nhập tên công việc">
      </div>
      <button type="submit" class="btn btn-primary w-100">Thêm công việc</button>
    </form>
    <ul class="list-group mt-4">
      <li v-for="(job, index) in jobs" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
        {{ job }}
        <button @click="removeJob(index)" class="btn btn-danger btn-sm">Xóa</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const newJob = ref('');
const jobs = ref(['Ăn sáng', 'Đi học', 'Chơi bóng rổ']);
const addJob = () => {
  if (newJob.value.trim()) {
    jobs.value.push(newJob.value.trim());
    newJob.value = '';
  }
};
const removeJob = (index) => jobs.value.splice(index, 1);
</script>