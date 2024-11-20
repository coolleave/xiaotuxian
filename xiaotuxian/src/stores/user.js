import { defineStore } from 'pinia'
import { ref } from 'vue'
import {LoginApi} from '@/apis/userApi'

export const useUserStore = defineStore('user',()=>{
    // 用户信息
    const userInfo  = ref({})

    // 获取用户信息
    const getUserInfo = async({account,password})=>{
        const res = await LoginApi({account,password})
        userInfo.value = res.result
    }

    const clearUserInfo = ()=>{
        userInfo.value = {}
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