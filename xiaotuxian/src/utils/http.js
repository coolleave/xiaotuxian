// axios的封装
import axios from "axios";
import 'element-plus/es/components/message/style/css'
import {ElMessage}  from 'element-plus'

import { useUserStore } from "@/stores/user";
import router from "@/router";

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 20000,  // 设置超时时间
});

// 添加请求拦截器
httpInstance.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    const userStore = useUserStore() 
    if(userStore.userInfo.token){
        const token = userStore.userInfo.token
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
},
    // 对请求错误做些什么
    e => Promise.reject(e)
);

// 添加响应拦截器
httpInstance.interceptors.response.use(res => {   // 2xx 范围内的状态码都会触发该函数。
    return res.data;       // 对响应数据做点什么
}, e => {  // 超出 2xx 范围的状态码都会触发该函数。
    ElMessage({type:'warning',message:e.response.data.message})
    if(e.response.status === 401){
        const userStore = useUserStore()
        userStore.clearUserInfo()
        router.push('/login')
    }
    return Promise.reject(e);   // 对响应错误做点什么
});

export default httpInstance