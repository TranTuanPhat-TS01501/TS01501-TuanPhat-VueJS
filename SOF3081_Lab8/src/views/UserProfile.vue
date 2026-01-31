<template>
  <div class="profile-layout">
    <aside class="profile-sidebar">
      <div class="avatar">
        <img src="https://ui-avatars.com/api/?name=Tuan+Phat&background=random" alt="Avatar">
        <h3>Tuấn Phát</h3>
      </div>
      <nav class="profile-nav">
        <router-link :to="{ name: 'UserProfileInfo' }">
          📋 Thông tin cá nhân
        </router-link>
        <router-link :to="{ name: 'UserProfileSettings' }">
          ⚙️ Cài đặt
        </router-link>
      </nav>
    </aside>

    <main class="profile-content">
      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped>
.profile-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.profile-sidebar {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  text-align: center;
  height: fit-content;
}

.avatar img { border-radius: 50%; width: 80px; margin-bottom: 1rem; }

.profile-nav { margin-top: 2rem; display: flex; flex-direction: column; gap: 0.5rem; }
.profile-nav a {
  text-decoration: none;
  color: #555;
  padding: 10px;
  border-radius: 6px;
  text-align: left;
  transition: all 0.2s;
}
.profile-nav a:hover { background-color: #f0f0f0; }
.profile-nav a.router-link-active {
  background-color: #e6f7f0;
  color: #42b883;
  font-weight: bold;
}

.profile-content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  min-height: 300px;
}

/* Animation nhỏ cho tab */
.slide-fade-enter-active { transition: all 0.3s ease; }
.slide-fade-enter-from { transform: translateX(10px); opacity: 0; }
</style>