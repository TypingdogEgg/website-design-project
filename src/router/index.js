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

      ]
    },
  ]
})

export default router
