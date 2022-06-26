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
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: '/about',
      name: 'about-view',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact-view',
      component: () => import('../views/ContactView.vue')
    },
    // media
    {
      path: '/blood-meridian',
      name: 'blood-meridian',
      component: () => import('../views/media/BloodMeridian/index.vue')
    },
    // movies
    {
      path: '/your-name',
      name: 'your-name',
      component: () => import('../views/media/YourName/index.vue')
    },
  ]
})

export default router
