<template>
  <div class="settings-tab">
    <h2>Cài đặt chung</h2>
    <form @submit.prevent="save">
      <div class="form-control">
        <label>Đổi mật khẩu</label>
        <input type="password" placeholder="Mật khẩu mới...">
      </div>
      
      <div class="form-control">
        <label>Ngôn ngữ</label>
        <select>
          <option>Tiếng Việt</option>
          <option>English</option>
        </select>
      </div>

      <div class="checkbox-control">
        <input type="checkbox" id="noti" checked>
        <label for="noti">Nhận thông báo qua Email</label>
      </div>

      <button class="btn-save">Lưu thay đổi</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    save() {
      alert("Đã lưu cài đặt thành công!");
    }
  }
}
</script>

<style scoped>
h2 { color: #2c3e50; margin-bottom: 1.5rem; border-bottom: 2px solid #42b883; display: inline-block; padding-bottom: 5px; }

.form-control { margin-bottom: 1.5rem; }
.form-control label { display: block; margin-bottom: 0.5rem; font-weight: 500; }
.form-control input, .form-control select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.checkbox-control { display: flex; align-items: center; gap: 10px; margin-bottom: 2rem; }

.btn-save {
  background-color: #35495e;
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 6px;
  cursor: pointer;
}
.btn-save:hover { background-color: #2c3e50; }
</style>