import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/Main/index.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/Home/index.vue'),
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/Login.vue'),
        },
        {
          path: '/newsdetail',
          name: 'newsdetail',
          component: () => import('@/views/NewsDetail.vue'),
        },
        {
          path: '/products',
          name: 'products',
          component: () => import('@/views/Products.vue'),
        },
      ]
    },
  ]
})

export default router
