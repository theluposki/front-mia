import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    children: [
      {
        path: '',
        component: () => import('../views/LoginMain.vue')
      },
      {
        path: 'sign-in',
        component: () => import('../views/SignIn.vue')
      },
      {
        path: 'sign-up',
        component: () => import('../views/SignUp.vue')
      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
