import { defineStore } from 'pinia'
import { ref } from 'vue'
import {LoginApi} from '@/apis/userApi'
import {useCartStore} from './cart'



export const useUserStore = defineStore('user',()=>{
    // 用户信息
    const userInfo  = ref({})

    // 获取用户信息
    const getUserInfo = async({account,password})=>{
        const res = await LoginApi({account,password})
        userInfo.value = res.result
    }

    // 退出登录，清空token，清空购物车
    const cartStore = useCartStore()
    const clearUserInfo = ()=>{
        userInfo.value = {}
        cartStore.clearCart()
    }

    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},
{
    persist:true  // 使用pinia组件进行持久化保存
}
)