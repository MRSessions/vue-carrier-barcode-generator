// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'usps',
        name: 'USPS',
        component: () => import('@/views/USPS.vue'),
      },
      {
        path: 'ups',
        name: 'UPS',
        component: () => import('@/views/UPS.vue'),
      },
      {
        path: 'fedex',
        name: 'FedEx',
        component: () => import('@/views/FedEx.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
