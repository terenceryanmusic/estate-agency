import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buy',
    name: 'Buy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Buy.vue')
  },
  {
    path: '/sell',
    name: 'Sell',
    component: () => import('../views/Sell.vue')
  },
  {
    path: '/rent',
    name: 'Rent',
    component: () => import('../views/Rent.vue')
  },
  {
    path: '/landlords',
    name: 'Landlords',
    component: () => import('../views/Landlords.vue')
  },
  {
    path: '/students',
    name: 'Students',
    component: () => import('../views/Students.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
