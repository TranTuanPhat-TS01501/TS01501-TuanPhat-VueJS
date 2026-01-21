<script setup>
import { ref, onMounted } from 'vue';

const currentUser = ref({
  name: '',
  email: '',
  password: '',
  avatar: ''
});

onMounted(() => {
  // 1. Lấy thông tin user đang đăng nhập
  const userStr = localStorage.getItem('currentUser');
  if (userStr) {
    currentUser.value = JSON.parse(userStr);
  }
});

const updateProfile = () => {
  // 2. Lấy danh sách tất cả tài khoản
  const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

  // 3. Tìm và cập nhật tài khoản trong danh sách chung (để sau này login được bằng pass mới)
  const index = accounts.findIndex(acc => acc.email === currentUser.value.email);
  
  if (index !== -1) {
    accounts[index] = currentUser.value; // Cập nhật thông tin mới
    localStorage.setItem('accounts', JSON.stringify(accounts)); // Lưu lại list accounts
    
    // 4. Cập nhật lại session hiện tại
    localStorage.setItem('currentUser', JSON.stringify(currentUser.value));
    
    // Gửi sự kiện để Header (App.vue) cập nhật lại tên/avatar ngay lập tức
    window.dispatchEvent(new Event('storage')); 

    alert("Cập nhật hồ sơ thành công!");
  } else {
    alert("Lỗi: Không tìm thấy tài khoản gốc!");
  }
};
</script>

<template>
  <div class="row justify-content-center mt-5">
    <div class="col-md-8">
      <div class="card shadow">
        <div class="card-header bg-success text-white">
          <h4 class="mb-0">Hồ sơ cá nhân</h4>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-4 text-center border-end">
              <img 
                :src="currentUser.avatar || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'" 
                class="rounded-circle img-thumbnail mb-3" 
                style="width: 150px; height: 150px; object-fit: cover;"
              >
              <h5 class="fw-bold">{{ currentUser.name }}</h5>
              <p class="text-muted">{{ currentUser.email }}</p>
            </div>

            <div class="col-md-8">
              <form @submit.prevent="updateProfile">
                <div class="mb-3">
                  <label class="form-label">Họ và tên</label>
                  <input v-model="currentUser.name" type="text" class="form-control" required>
                </div>

                <div class="mb-3">
                  <label class="form-label">Link Avatar (URL)</label>
                  <input v-model="currentUser.avatar" type="url" class="form-control" placeholder="https://example.com/anh-cua-ban.jpg">
                </div>

                <div class="mb-3">
                  <label class="form-label">Mật khẩu</label>
                  <input v-model="currentUser.password" type="text" class="form-control" required>
                  <div class="form-text text-muted">Bạn có thể đổi mật khẩu mới tại đây.</div>
                </div>

                <div class="mb-3">
                  <label class="form-label">Email (Không thể thay đổi)</label>
                  <input :value="currentUser.email" type="email" class="form-control" disabled readonly>
                </div>

                <button type="submit" class="btn btn-primary">
                  <i class="bi bi-save"></i> Lưu thay đổi
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>