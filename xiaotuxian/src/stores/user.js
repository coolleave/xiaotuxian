import { defineStore } from 'pinia'
import { ref } from 'vue'
import { LoginApi } from '@/apis/userApi'
import { useCartStore } from './cart'
import {mergeCartApi} from '@/apis/cartApi'


export const useUserStore = defineStore('user', () => {
    // 用户信息
    const userInfo = ref({})


    // 获取用户信息
    const getUserInfo = async ({ account, password }) => {
        const res = await LoginApi({ account, password })
        userInfo.value = res.result

        // 合并本地购物车
        const data = cartStore.cartList.map((item)=>{
            return {
                skuId:item.skuId,
                selected:item.selected,
                count:item.count
            }
        })

        await mergeCartApi(data)
        cartStore.updateCart()
    }







    // 退出登录，清空token，清空购物车
    const cartStore = useCartStore()
    const clearUserInfo = () => {
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
        persist: true  // 使用pinia组件进行持久化保存
    }
)