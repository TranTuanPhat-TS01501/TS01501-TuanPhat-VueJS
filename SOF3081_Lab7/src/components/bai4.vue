<template>
  <div class="card p-4">
    <div v-if="!userLogin" class="col-sm-6 mx-auto border p-3">
      <h5>Đăng Nhập</h5>
      <input v-model="username" class="form-control mb-2" placeholder="Tên đăng nhập">
      <button @click="handleLogin" class="btn btn-primary">Đăng nhập</button>
    </div>

    <div v-else class="row mt-3">
      <div class="col-md-8 mx-auto card p-0">
        <img src="https://picsum.photos/600/250" class="card-img-top">
        <div class="card-body">
          <h5>8 loại rau củ quả giàu canxi (User: {{ userLogin }})</h5>
          <textarea v-model="comment" class="form-control mb-2" placeholder="Nhập bình luận"></textarea>
          <button @click="sendComment" class="btn btn-success">Gửi bình luận</button>
          
          <ul class="mt-3 list-group">
            <li v-for="(item, index) in list" :key="index" class="list-group-item">
              <strong>{{ item.name }}:</strong> {{ item.text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const username = ref('');
const userLogin = ref('');
const comment = ref('');
const list = ref([]);

const handleLogin = () => {
  if(username.value) userLogin.value = username.value;
};

const sendComment = () => {
  if(comment.value) {
    list.value.push({ name: userLogin.value, text: comment.value });
    comment.value = '';
  }
};
</script>