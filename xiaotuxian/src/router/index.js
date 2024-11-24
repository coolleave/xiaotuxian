import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/views/layout/index.vue'
import home from '@/views/home/Homeindex.vue'
import category from '@/views/category/index.vue'
import subCategory from '@/views/subCategory/index.vue'
import detail from '@/views/detail/index.vue'
import login from '@/views/login/index.vue'
import cartList from '@/views/cartList/index.vue'
import checkout from '@/views/checkout/index.vue'
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
          path:'category/:id',  // 根据id导航
          name:'category',
          component:category
        },
        {
          path:'category/sub/:id',  // 根据id导航
          name:'subCategory',
          component:subCategory
        },
        {
          path:'detail/:id',
          component:detail
        },
        {
          path:'cart',
          component:cartList
        },
        {
          path:'checkout',
          component:checkout
        }

        




        // {
        //   path: '/:catchAll(.*)',
        //   redirect: '/'
        // }
        

      ]
    },
    {
      path:'/login',
      name:login,
      component:login
    }


 
  ],
  // 配置滚动路由
  scrollBehavior(){
  return {
   top:0
  }
}
})

export default router
