<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <header class="main-header">
      <div class="logo">MyBlog 🚀</div>
      <nav>
        <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'BlogList' }">Blog</RouterLink>
        <RouterLink :to="{ name: 'UserProfile' }">Profile</RouterLink>
        <RouterLink :to="{ name: 'Dashboard' }">Dashboard</RouterLink>
        <RouterLink :to="{ name: 'Login' }" class="btn-login">Login</RouterLink>
      </nav>
    </header>

    <main class="main-content">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <footer class="main-footer">
      <p>&copy; 2026 MyBlog by Phat. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
/* Global Reset & Typography */
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f7f6;
  color: #333;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header Styles */
.main-header {
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #42b883; /* Vue Green */
}

nav a {
  margin-left: 20px;
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: color 0.3s;
}

nav a:hover, nav a.router-link-active {
  color: #42b883;
}

/* Button style cho Login */
.btn-login {
  background-color: #42b883;
  color: white !important;
  padding: 8px 16px;
  border-radius: 20px;
}
.btn-login:hover {
  background-color: #3aa876;
}

/* Main Content Styles */
.main-content {
  flex: 1;
  width: 100%;
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
}

/* Footer Styles */
.main-footer {
  text-align: center;
  padding: 1rem;
  background-color: #35495e;
  color: white;
  margin-top: auto;
}

/* Animation chuyển trang */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>