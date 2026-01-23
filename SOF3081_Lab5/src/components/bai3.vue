<template>
  <div class="card border-0 shadow rounded-3 overflow-hidden">
    <div class="card-header bg-dark text-white p-3">
      <h5 class="m-0">Bài 3:</h5>
    </div>
    <div class="card-body p-0">
      <div class="row g-0">
        <div class="col-md-6 p-4 border-end">
          <h6 class="text-uppercase text-muted fw-bold mb-3">Nhập thông tin</h6>
          <form>
            <div class="form-floating mb-3">
              <input v-model="userInfo.name" class="form-control" id="nameInput" placeholder="name">
              <label for="nameInput">Họ và Tên</label>
            </div>
            <div class="form-floating mb-3">
              <input v-model="userInfo.age" type="number" class="form-control" id="ageInput" placeholder="age">
              <label for="ageInput">Tuổi</label>
            </div>
            <div class="form-floating mb-3">
              <input v-model="userInfo.email" type="email" class="form-control" id="emailInput" placeholder="email">
              <label for="emailInput">Email</label>
            </div>
          </form>
        </div>

        <div class="col-md-6 p-4 bg-light d-flex align-items-center justify-content-center">
          <div class="text-center w-100">
            <h6 class="text-uppercase text-muted fw-bold mb-4">Xem trước thẻ nhân viên</h6>
            <div class="card mx-auto shadow-sm border-0" style="max-width: 300px;">
              <div class="card-body">
                <div class="avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 60px; height: 60px; font-size: 24px;">
                  {{ userInfo.name ? userInfo.name.charAt(0).toUpperCase() : '?' }}
                </div>
                <h5 class="fw-bold">{{ userInfo.name || 'Chưa nhập tên' }}</h5>
                <p class="text-muted mb-1">{{ userInfo.email || 'email@example.com' }}</p>
                <span class="badge bg-success">{{ userInfo.age ? userInfo.age + ' tuổi' : 'Unknown' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
const userInfo = reactive({ name: '', age: null, email: '' });
</script>