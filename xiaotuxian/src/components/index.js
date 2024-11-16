// 将组件通过全局注册的方式进行优化
// 通过插件的方式

import ImageView from '@/components/imageView/index.vue'
import xtxSku from '@/components/XtxSku/index.vue'


export const componentPlugin ={
    install(app){
        app.component('xtxImageView',ImageView)
        app.component('xtxSku',xtxSku)
    }
}