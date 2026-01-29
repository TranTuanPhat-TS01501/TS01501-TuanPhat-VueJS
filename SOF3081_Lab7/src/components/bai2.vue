<template>
  <div class="col-sm-6 mx-auto card p-4 mb-3">
    <h3 class="text-center">Đăng nhập</h3>
    <div v-if="!isLoggedIn">
      <form @submit.prevent="login">
        <div class="mb-3">
          <label>Email:</label>
          <input type="email" v-model="email" class="form-control" placeholder="Nhập email">
          <p v-if="emailError" class="text-danger small">{{ emailError }}</p>
        </div>
        <div class="mb-3">
          <label>Mật khẩu:</label>
          <input type="password" v-model="password" class="form-control" placeholder="Nhập mật khẩu">
          <p v-if="passwordError" class="text-danger small">{{ passwordError }}</p>
        </div>
        <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
      </form>
    </div>
    <div v-else class="text-center">
      <h4>Chào mừng, {{ email }}!</h4>
      <button @click="isLoggedIn = false" class="btn btn-secondary mt-2">Đăng xuất</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const email = ref(''), password = ref('');
const emailError = ref(''), passwordError = ref('');
const isLoggedIn = ref(false);
const login = () => {
  emailError.value = !email.value ? 'Email là bắt buộc.' : '';
  passwordError.value = !password.value ? 'Mật khẩu là bắt buộc.' : '';
  if (!emailError.value && !passwordError.value) isLoggedIn.value = true;
};
</script>