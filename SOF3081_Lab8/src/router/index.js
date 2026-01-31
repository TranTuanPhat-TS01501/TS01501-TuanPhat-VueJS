import { createRouter, createWebHistory } from 'vue-router'

// Import các components
import Home from '../views/Home.vue'
import BlogList from '../views/BlogList.vue'
import BlogPost from '../views/BlogPost.vue'
import UserProfile from '../views/UserProfile.vue'
import UserProfileInfo from '../views/UserProfileInfo.vue'
import UserProfileSettings from '../views/UserProfileSettings.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'BlogList',
    component: BlogList
  },
  {
    path: '/blog/:id', // Route động
    name: 'BlogPost',
    component: BlogPost
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile,
    alias: '/me', // Alias Route
    children: [ // Route lồng nhau
      {
        path: 'info',
        name: 'UserProfileInfo',
        component: UserProfileInfo
      },
      {
        path: 'settings',
        name: 'UserProfileSettings',
        component: UserProfileSettings
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true } // Đánh dấu cần bảo vệ
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Route Guard bảo vệ Dashboard
router.beforeEach((to, from, next) => {
  // Kiểm tra trạng thái đăng nhập từ localStorage
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    // Nếu chưa đăng nhập -> đá về Login
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router