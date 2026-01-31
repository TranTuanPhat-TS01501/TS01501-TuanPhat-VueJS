<template>
  <div class="info-tab">
    <h2>Thông tin tài khoản</h2>
    <div class="info-group">
      <div class="info-row">
        <span class="label">Họ và tên:</span>
        <span class="value">Trần Tuấn Phát</span>
      </div>
      <div class="info-row">
        <span class="label">Mã sinh viên:</span>
        <span class="value">TS01501</span>
      </div>
      <div class="info-row">
        <span class="label">Email:</span>
        <span class="value">phattt@fpt.edu.vn</span>
      </div>
      <div class="info-row">
        <span class="label">Chuyên ngành:</span>
        <span class="value">Lập trình Web (Vue.js)</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 { color: #2c3e50; margin-bottom: 1.5rem; border-bottom: 2px solid #42b883; display: inline-block; padding-bottom: 5px; }

.info-group { display: flex; flex-direction: column; gap: 1rem; }
.info-row {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 8px;
}
.label { font-weight: bold; color: #555; }
.value { color: #333; }
</style>