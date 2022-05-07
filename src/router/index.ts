import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'Home' },
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: 'About' },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/:page',
      name: 'notfound',
      meta: { title: 'Not found' },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

export default router
