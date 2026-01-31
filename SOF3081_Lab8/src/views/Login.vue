<template>
  <div class="login-container">
    <div class="login-card">
      <h2>Welcome Back! 👋</h2>
      <p class="subtitle">Đăng nhập để vào Dashboard</p>
      
      <div class="form-group">
        <label>Username</label>
        <input type="text" placeholder="Nhập tên của bạn..." />
      </div>
      
      <div class="form-group">
        <label>Password</label>
        <input type="password" placeholder="••••••" />
      </div>

      <button @click="login" class="btn-submit">Đăng nhập</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      localStorage.setItem('isAuthenticated', 'true');
      this.$router.push({ name: 'Dashboard' });
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh; /* Căn giữa theo chiều dọc */
}

.login-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h2 { margin-bottom: 0.5rem; color: #2c3e50; }
.subtitle { color: #888; margin-bottom: 2rem; }

.form-group { text-align: left; margin-bottom: 1.5rem; }
.form-group label { display: block; margin-bottom: 0.5rem; font-weight: 600; font-size: 0.9rem;}
.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-sizing: border-box; /* Fix lỗi tràn input */
}
.form-group input:focus { outline: none; border-color: #42b883; }

.btn-submit {
  width: 100%;
  padding: 12px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}
.btn-submit:hover { background-color: #3aa876; }
</style>