// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'


export const directivePlugin = {
    install(app){
        // 懒加载指令逻辑
        app.directive('img-lazy',{
            mounted (el,binding){
                // el dom元素
                // bindling.value 等号后边的值
                const { stop } = useIntersectionObserver(
                    // 被监视元素
                    el,
                    ([{ isIntersecting }]) => {

                      // 如果被显示，则发送图片src
                    if(isIntersecting){
                        el.src = binding.value
                        // 被加载后，及时关闭监视，防止资源浪费
                        stop()
                    }
                    },
                  )
            }
        })
    }
}