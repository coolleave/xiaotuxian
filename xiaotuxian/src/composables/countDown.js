import { computed, ref } from 'vue'
import { onUnmounted } from 'vue'
export const useCountDown = () => {
    let timer = null
    const time = ref(0)

    // 倒计时逻辑
    const start = (currenTime) => {
        time.value = currenTime

        timer = setInterval(() => {
            time.value--
        }, 1000)

        

    }


    // 格式化时间
    const formateTime = computed(() =>{
        const minutes = Math.floor(time.value / 60)
        const seconds = time.value % 60
        return `${minutes}分${seconds}秒`}
    )



    // 倒计时结束，清除倒计时
    onUnmounted(() => {
        timer && clearInterval(timer)
    })

    return {
        formateTime,
        start
    }
}



