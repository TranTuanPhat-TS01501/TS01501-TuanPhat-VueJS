<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Khởi tạo các biến để hứng dữ liệu từ form
const user = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const register = () => {
  // 1. Validate cơ bản
  if (user.value.password !== user.value.confirmPassword) {
    alert("Mật khẩu nhập lại không khớp!");
    return;
  }

  // 2. Lấy danh sách tài khoản cũ từ LocalStorage (nếu có)
  const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

  // 3. Kiểm tra email đã tồn tại chưa
  const exists = accounts.find(acc => acc.email === user.value.email);
  if (exists) {
    alert("Email này đã được đăng ký!");
    return;
  }

  // 4. Thêm tài khoản mới vào danh sách
  const newUser = {
    name: user.value.name,
    email: user.value.email,
    password: user.value.password, // Lưu ý: Thực tế không được lưu password trần như này nhé ^^
    avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' // Avatar mặc định
  };
  
  accounts.push(newUser);

  // 5. Lưu lại vào LocalStorage
  localStorage.setItem('accounts', JSON.stringify(accounts));

  alert("Đăng ký thành công! Hãy đăng nhập ngay.");
  router.push('/login'); // Chuyển hướng sang trang Login
};
</script>

<template>
  <div class="d-flex justify-content-center mt-5">
    <div class="card p-4" style="width: 400px;">
      <h3 class="text-center mb-4">Đăng ký tài khoản</h3>
      <form @submit.prevent="register">
        <div class="mb-3">
          <label class="form-label">Họ và tên</label>
          <input v-model="user.name" type="text" class="form-control" required placeholder="Nhập tên của bạn">
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input v-model="user.email" type="email" class="form-control" required placeholder="name@example.com">
        </div>
        <div class="mb-3">
          <label class="form-label">Mật khẩu</label>
          <input v-model="user.password" type="password" class="form-control" required>
        </div>
        <div class="mb-3">
          <label class="form-label">Nhập lại mật khẩu</label>
          <input v-model="user.confirmPassword" type="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary w-100">Đăng ký</button>
      </form>
      <div class="text-center mt-3">
        <span>Đã có tài khoản? <router-link to="/login">Đăng nhập</router-link></span>
      </div>
    </div>
  </div>
</template>