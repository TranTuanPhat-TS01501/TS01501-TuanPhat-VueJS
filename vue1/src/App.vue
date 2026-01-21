<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter();

// Trạng thái đăng nhập và thông tin người dùng
const isLoggedIn = ref(false);
const currentUser = ref(null);

// Hàm kiểm tra trạng thái đăng nhập từ LocalStorage
const checkLogin = () => {
  const userStr = localStorage.getItem('currentUser');
  if (userStr) {
    isLoggedIn.value = true;
    currentUser.value = JSON.parse(userStr);
  } else {
    isLoggedIn.value = false;
    currentUser.value = null;
  }
}

// Hàm đăng xuất
const logout = () => {
  localStorage.removeItem('currentUser');
  checkLogin();
  alert("Đã đăng xuất!");
  router.push('/login');
}

// Khi App được load lên thì chạy kiểm tra ngay
onMounted(() => {
  checkLogin();
  window.addEventListener('storage', checkLogin);
});
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark mb-4 sticky-top">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">
        <i class="bi bi-code-slash me-2"></i>Poly Blog
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Trang chủ</RouterLink>
          </li>
          
          <li class="nav-item" v-if="!isLoggedIn">
            <RouterLink class="nav-link" to="/login">Đăng nhập</RouterLink>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <RouterLink class="btn btn-light text-primary ms-2 fw-bold px-4 rounded-pill" to="/register" style="font-size: 0.9rem;">
              Đăng ký ngay
            </RouterLink>
          </li>

          <li class="nav-item" v-if="isLoggedIn">
            <RouterLink class="nav-link" to="/post/create">
              <i class="bi bi-pencil-square"></i> Viết bài
            </RouterLink>
          </li>
           <li class="nav-item dropdown ms-2" v-if="isLoggedIn">
            <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
              <img :src="currentUser?.avatar || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'" 
                   class="rounded-circle me-2" width="30" height="30" style="border: 2px solid white;">
              {{ currentUser ? currentUser.name : 'Tài khoản' }}
            </a>
            <ul class="dropdown-menu dropdown-menu-end shadow border-0" style="border-radius: 12px; overflow: hidden;">
              <li><RouterLink class="dropdown-item py-2" to="/profile"><i class="bi bi-person me-2"></i> Hồ sơ cá nhân</RouterLink></li>
              <li><hr class="dropdown-divider my-0"></li>
              <li><a class="dropdown-item py-2 text-danger" href="#" @click.prevent="logout"><i class="bi bi-box-arrow-right me-2"></i> Đăng xuất</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container" style="min-height: 80vh;">
    <RouterView />
  </div>

  <footer class="text-white text-center py-5 mt-5" style="background: linear-gradient(135deg, #2b32b2 0%, #1488cc 100%);">
    <div class="container">
      <h5 class="fw-bold mb-3">POLY BLOG COMMUNITY</h5>
      <p class="mb-4 opacity-75">Nơi chia sẻ kiến thức, kinh nghiệm và đam mê lập trình của sinh viên FPT Polytechnic.</p>
      
      <div class="d-flex justify-content-center gap-3 mb-4">
        <a href="#" class="btn btn-outline-light rounded-circle p-2" style="width: 40px; height: 40px;"><i class="bi bi-facebook"></i></a>
        <a href="#" class="btn btn-outline-light rounded-circle p-2" style="width: 40px; height: 40px;"><i class="bi bi-github"></i></a>
        <a href="#" class="btn btn-outline-light rounded-circle p-2" style="width: 40px; height: 40px;"><i class="bi bi-youtube"></i></a>
      </div>
      
      <div class="border-top border-white border-opacity-25 pt-3">
        <small>&copy; 2026 Designed by <b>Tuấn Phát</b>. Assignment SOF3081.</small>
      </div>
    </div>
  </footer>
</template>