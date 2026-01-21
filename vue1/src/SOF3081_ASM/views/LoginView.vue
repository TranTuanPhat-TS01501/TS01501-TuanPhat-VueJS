<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');

const login = () => {
  // 1. Lấy danh sách tài khoản từ LocalStorage
  const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

  // 2. Tìm tài khoản khớp email và password
  const user = accounts.find(acc => acc.email === email.value && acc.password === password.value);

  if (user) {
    // 3. Nếu tìm thấy -> Lưu thông tin người dùng đang đăng nhập
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    // Gửi sự kiện để App.vue biết (hoặc sau này dùng Pinia sẽ xịn hơn)
    window.dispatchEvent(new Event('storage')); 

    alert("Đăng nhập thành công!");
    router.push('/'); // Chuyển về trang chủ
  } else {
    alert("Email hoặc mật khẩu không đúng!");
  }
};
</script>

<template>
  <div class="d-flex justify-content-center mt-5">
    <div class="card p-4 shadow" style="width: 400px;">
      <h3 class="text-center mb-4">Đăng nhập</h3>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input v-model="email" type="email" class="form-control" required placeholder="name@example.com">
        </div>
        <div class="mb-3">
          <label class="form-label">Mật khẩu</label>
          <input v-model="password" type="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-success w-100">Đăng nhập</button>
      </form>
      <div class="text-center mt-3">
        <span>Chưa có tài khoản? <router-link to="/register">Đăng ký ngay</router-link></span>
      </div>
    </div>
  </div>
</template>