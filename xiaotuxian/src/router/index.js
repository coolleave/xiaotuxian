import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/views/layout/index.vue'
import login from '@/views/login.vue'
import home from '@/views/home/Homeindex.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component:layout,
      // 二级路由
      children:[  
        {
          path:'',  // 空为默认
          name:'home',
          component:home
        },

        {
          path: '/:catchAll(.*)',
          redirect: '/'
        }
        

      ]
    },

    {
      path:'/login',
      name:'login',
      component:login
    }
 
  ]
})

export default router
