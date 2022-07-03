import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'opener',
      component: () => import('../views/Opener.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
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
    {
      path: '/archive',
      name: 'archive-view',
      component: () => import('../views/Archive/index.vue')
    },
    // media
    // books
    {
      path: '/blood-meridian',
      name: 'blood-meridian',
      component: () => import('../views/media/BloodMeridian/index.vue')
    },
    {
      path: '/cant-hurt-me',
      name: 'cant-hurt-me',
      component: () => import('../views/media/CantHurtMe/index.vue')
    },
    // movies
    {
      path: '/your-name',
      name: 'your-name',
      component: () => import('../views/media/YourName/index.vue')
    },
    {
      path: '/black-swan',
      name: 'black-swan',
      component: () => import('../views/media/BlackSwan/index.vue')
    },
  ]
})

export default router
