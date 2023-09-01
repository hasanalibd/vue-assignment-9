import { createRouter, createWebHistory } from 'vue-router'
import BlogList from '../views/BlogList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/NewPost.vue')
    },
    {
      path: '/home/:id',
      name: 'postDetails',
      component: () => import('../components/PostDetails.vue'),
      props:true,
    },

    {
      path: '/list',
      name: 'list',
      component: BlogList
    },
    {
      path: '/:pathMatch(.*)',
      name: 'Not Found',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
