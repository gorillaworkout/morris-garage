import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import CarDetail from '../views/carDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,

  },
  {
    path: '/car-detail',
    name: 'carDetail',
    component: CarDetail
  },
]


export const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router


