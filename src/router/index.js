import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import carDetail from '../views/carDetail.vue'
import profileCard from '../views/profile.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/car-detail/:car',
    name: 'carDetail',
    component: carDetail
  },
  {
    path: '/profile',
    name: 'profile',
    component: profileCard
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
