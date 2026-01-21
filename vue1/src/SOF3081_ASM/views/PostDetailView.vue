<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const post = ref(null);
const comments = ref([]);
const newComment = ref('');
const currentUser = ref(null);

// Lấy ID từ URL
const postId = parseInt(route.params.id);

onMounted(() => {
  // 1. Lấy thông tin User hiện tại
  const userStr = localStorage.getItem('currentUser');
  if (userStr) {
    currentUser.value = JSON.parse(userStr);
  }

  // 2. Tìm bài viết theo ID
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  post.value = posts.find(p => p.id === postId);

  // Nếu không thấy bài viết thì đá về trang chủ
  if (!post.value) {
    alert("Bài viết không tồn tại!");
    router.push('/');
    return;
  }

  // 3. Load danh sách bình luận
  loadComments();
});

// Hàm load comment từ LocalStorage
const loadComments = () => {
  const allComments = JSON.parse(localStorage.getItem('comments')) || [];
  // Chỉ lấy comment của bài viết này
  comments.value = allComments.filter(c => c.postId === postId);
};

// Chức năng Đăng bình luận
const submitComment = () => {
  if (!currentUser.value) {
    alert("Bạn cần đăng nhập để bình luận!");
    router.push('/login');
    return;
  }

  const allComments = JSON.parse(localStorage.getItem('comments')) || [];
  
  const commentObj = {
    id: Date.now(),
    postId: postId,
    userName: currentUser.value.name,
    userEmail: currentUser.value.email,
    content: newComment.value,
    date: new Date().toLocaleString('vi-VN')
  };

  allComments.push(commentObj);
  localStorage.setItem('comments', JSON.stringify(allComments));

  // Reset ô nhập và load lại list
  newComment.value = '';
  loadComments();
};

// Chức năng Xóa bài viết (Chỉ chủ bài viết mới xóa được)
const deletePost = () => {
  if (confirm("Bạn có chắc muốn xóa bài viết này không?")) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    // Lọc bỏ bài viết hiện tại
    posts = posts.filter(p => p.id !== postId);
    localStorage.setItem('posts', JSON.stringify(posts));
    
    // Xóa luôn comment của bài đó cho sạch (Option)
    let allComments = JSON.parse(localStorage.getItem('comments')) || [];
    allComments = allComments.filter(c => c.postId !== postId);
    localStorage.setItem('comments', JSON.stringify(allComments));

    alert("Đã xóa bài viết!");
    router.push('/');
  }
};

// Kiểm tra xem người xem có phải là tác giả không
const isAuthor = computed(() => {
  return currentUser.value && post.value && currentUser.value.email === post.value.authorEmail;
});
</script>

<template>
  <div v-if="post" class="row justify-content-center mt-4 mb-5">
    <div class="col-md-10">
      <div class="card shadow-sm mb-4">
        <img :src="post.image" class="card-img-top" style="max-height: 400px; object-fit: cover;" alt="Post Image">
        <div class="card-body">
          <h1 class="card-title fw-bold">{{ post.title }}</h1>
          <div class="d-flex justify-content-between text-muted mb-3 border-bottom pb-2">
            <span>
              <i class="bi bi-person-fill"></i> Tác giả: {{ post.author }}
            </span>
            <span>
              <i class="bi bi-clock"></i> {{ post.date }}
            </span>
          </div>
          
          <p class="card-text" style="white-space: pre-line;">{{ post.content }}</p>

          <div v-if="isAuthor" class="mt-3 text-end">
            <button @click="deletePost" class="btn btn-danger btn-sm">
              <i class="bi bi-trash"></i> Xóa bài viết
            </button>
          </div>
        </div>
      </div>

      <div class="card shadow-sm">
        <div class="card-header bg-light">
          <h5 class="mb-0"><i class="bi bi-chat-dots"></i> Bình luận ({{ comments.length }})</h5>
        </div>
        <div class="card-body">
          <div v-if="currentUser" class="mb-4 d-flex gap-2">
            <img :src="currentUser.avatar || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'" 
                 class="rounded-circle" width="40" height="40">
            <div class="flex-grow-1">
              <textarea v-model="newComment" class="form-control mb-2" rows="2" placeholder="Viết bình luận của bạn..."></textarea>
              <button @click="submitComment" class="btn btn-primary btn-sm float-end" :disabled="!newComment.trim()">Gửi bình luận</button>
            </div>
          </div>
          <div v-else class="alert alert-warning">
            Vui lòng <router-link to="/login">đăng nhập</router-link> để bình luận.
          </div>

          <hr v-if="currentUser">

          <div v-if="comments.length > 0">
            <div v-for="comment in comments" :key="comment.id" class="d-flex mb-3">
              <div class="flex-shrink-0">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" class="rounded-circle" width="40" height="40" alt="...">
              </div>
              <div class="flex-grow-1 ms-3">
                <div class="bg-light p-3 rounded">
                  <h6 class="fw-bold mb-1">{{ comment.userName }} 
                    <small class="text-muted fw-normal" style="font-size: 12px;"> - {{ comment.date }}</small>
                  </h6>
                  <p class="mb-0">{{ comment.content }}</p>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="text-center text-muted py-3">
            Chưa có bình luận nào. Hãy là người đầu tiên!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>