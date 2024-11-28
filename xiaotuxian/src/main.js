// import './assets/main.css'
import '@/assets/base.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
// 自定义全局指令加载
import {directivePlugin} from '@/directives/directivePlugin'
// 自定义全局组件
import {componentPlugin} from '@/components/index.js'

// pinia 数据持久化
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const app = createApp(App)

const pinia = createPinia()
// 应用pinia插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
// 应用全局指令
app.use(directivePlugin)
// 全局组件插件
app.use(componentPlugin)
app.mount('#app')
