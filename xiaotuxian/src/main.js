// import './assets/main.css'
import '@/assets/base.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
// 自定义全局指令加载
import {directivePlugin} from '@/directives/directivePlugin'

import {componentPlugin} from '@/components/index.js'
const app = createApp(App)
app.use(createPinia())
app.use(router)
// 应用全局指令
app.use(directivePlugin)

app.use(componentPlugin)
app.mount('#app')
