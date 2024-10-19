import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index'


// 测试axios

import { getCategory } from '@/apis/apiTest'

getCategory().then(res => { 
    console.log(res)
    console.log("测试api")
 }
)


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
