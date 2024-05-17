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
          meta: {
            isAuth: false
          }
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/Login.vue'),
          meta: {
            isAuth: false
          }
        },
        {
          path: '/newsdetail',
          name: 'newsdetail',
          component: () => import('@/views/NewsDetail.vue'),
          meta: {
            isAuth: false
          }
        },
        {
          path: '/products',
          name: 'products',
          component: () => import('@/views/Products.vue'),
          meta: {
            isAuth: false
          }
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('@/views/User/User.vue'),
          meta: {
            isAuth: true
          },
          children: [
            {
              path: '',
              name: 'detail',
              component: () => import('@/views/User/views/Detail.vue'),
              meta: {
                isAuth: true
              }
            },
            {
              path: '/myfocus',
              name: 'myfocus',
              component: () => import('@/views/User/views/Focus.vue'),
              meta: {
                isAuth: true
              }
            },

          ]
        },
      ]
    },
  ]
})


router.beforeEach((to, from, next) => {
  const userData = JSON.parse(localStorage.getItem('userInfo'))
  if (to.path !== '/login' && to.path !== '/' && to.path !== '/newsdetail' && to.path !== '/products' && to.path !== '/user' && to.path !== '/myfocus') {
    next(from.path)
  } else {
    if (to.path === '/login' && userData) {
      next(from.path);
    } else if (to.path === '/login') {
      // 保存当前路由
      localStorage.setItem('preRoute', from.fullPath);
      next();
    } else if (to.meta.isAuth) {
      if (userData) {
        next()
      } else {
        next('/login');
      }
    } else {
      next()
    }
  }


});



export default router

