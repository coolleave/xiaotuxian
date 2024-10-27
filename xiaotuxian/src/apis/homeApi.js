import httpInstance from "@/utils/http";

// 轮播图
export function getBannerApi() {
    return httpInstance({
        url: '/home/banner'
    })
}

// 新鲜好物
export function getGoodsApi() {
    return httpInstance({
        url: '/home/new'
    })
}

export const getHotAPI = () => {
    return httpInstance('home/hot')
}

export const getProductApi = () => {
    return httpInstance('home/goods')
}