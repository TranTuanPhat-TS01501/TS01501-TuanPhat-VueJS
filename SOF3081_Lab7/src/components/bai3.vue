<template>
  <div class="row card p-4 mb-4">
    <div class="row">
      <div class="col-md-6 border-end">
        <h3>Form Đăng Ký</h3>
        <div class="mb-3">
          <label>Họ tên:</label>
          <input v-model="info.name" class="form-control" placeholder="Nhập họ tên">
        </div>
        <div class="mb-3">
          <label>Email:</label>
          <input v-model="info.email" class="form-control" placeholder="Nhập email">
        </div>
        <div class="mb-3">
          <label>Ngày sinh:</label>
          <input type="date" v-model="info.dob" class="form-control">
        </div>
        <div class="mb-3">
          <label>Giới tính:</label>
          <div>
            <input type="radio" value="Nam" v-model="info.gender"> Nam
            <input type="radio" value="Nữ" v-model="info.gender" class="ms-2"> Nữ
          </div>
        </div>
        <div class="mb-3">
          <label>Ngôn ngữ:</label>
          <div class="d-flex gap-2">
            <input type="checkbox" value="Tiếng Việt" v-model="info.lang"> Tiếng Việt
            <input type="checkbox" value="Tiếng Anh" v-model="info.lang"> Tiếng Anh
          </div>
        </div>
        <button class="btn btn-primary">Đăng ký</button>
      </div>
      
      <div class="col-md-6 ps-4">
        <h3>Thông tin đã đăng ký:</h3>
        <p><strong>Họ tên:</strong> {{ info.name }}</p>
        <p><strong>Email:</strong> {{ info.email }}</p>
        <p><strong>Ngày sinh:</strong> {{ info.dob }}</p>
        <p><strong>Giới tính:</strong> {{ info.gender }}</p>
        <p><strong>Ngôn ngữ:</strong> {{ info.lang.join(', ') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
const info = reactive({
  name: '', email: '', dob: '', gender: 'Nam', lang: []
});
</script>