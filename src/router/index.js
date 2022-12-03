import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/heavy-computed',
      name: 'heavy-computed',
      component: () => import('../views/HeavyComputedView.vue')
    }
  ]
})

export default router
