// 轮播图钩子

import { ref, onMounted } from "vue"
import { getBannerApi } from '@/apis/homeApi';
// 发送轮播图片url请求
// 准备数据
export function useBanner() {
    const bannerUrl = ref([])
    const getBanner = async () => {
        bannerUrl.value = await getBannerApi()
    }

    onMounted(() => {
        getBanner()
    })
    // 数据以对象的形式返回
    return {
        bannerUrl
    }
}


