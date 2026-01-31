<template>
  <div class="dashboard-container">
    <div class="dashboard-header">
      <h1>Dashboard Quản Trị</h1>
      <button @click="logout" class="btn-logout">Đăng xuất</button>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <h3>Bài viết</h3>
        <p class="number">12</p>
      </div>
      <div class="stat-card">
        <h3>Lượt xem</h3>
        <p class="number">1,240</p>
      </div>
      <div class="stat-card">
        <h3>Bình luận</h3>
        <p class="number">85</p>
      </div>
    </div>

    <div class="welcome-box">
      <h3>👋 Xin chào Admin!</h3>
      <p>Hệ thống hoạt động bình thường. Bạn có thể quản lý nội dung tại đây.</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      if(confirm("Bạn có chắc muốn đăng xuất?")) {
        localStorage.removeItem('isAuthenticated');
        this.$router.push({ name: 'Login' });
      }
    }
  }
}
</script>

<style scoped>
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.btn-logout {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}
.btn-logout:hover { background-color: #c0392b; }

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  text-align: center;
}
.stat-card h3 { margin: 0; color: #7f8c8d; font-size: 0.9rem; text-transform: uppercase; }
.stat-card .number { font-size: 2.5rem; font-weight: bold; color: #2c3e50; margin: 10px 0 0; }

.welcome-box {
  background: #e8f6f3;
  border: 1px solid #d1f2eb;
  padding: 1.5rem;
  border-radius: 10px;
  color: #0e6655;
}
</style>