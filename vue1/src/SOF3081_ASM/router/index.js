// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { 
      path: '/login', 
      name: 'login', 
      component: () => import('../views/LoginView.vue') 
    },
    { 
      path: '/register', 
      name: 'register', 
      component: () => import('../views/RegisterView.vue') 
    },
    { 
      path: '/profile', 
      name: 'profile', 
      component: () => import('../views/ProfileView.vue') 
    },
    { 
      path: '/post/create', 
      name: 'create-post', 
      component: () => import('../views/CreatePostView.vue') 
    },
    { 
      path: '/post/:id', 
      name: 'post-detail', 
      component: () => import('../views/PostDetailView.vue') 
    }
  ]
})

export default router