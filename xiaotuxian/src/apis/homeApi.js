import httpInstance from "@/utils/http";

// 轮播图
export function getBannerApi(params={}) {
    // distributionSite默认为 1 为 首页
    // 传入参数为 2 时，是商品的轮播图
    // 结构赋值传入默认值
    const {distributionSite = '1'} = params
    return httpInstance({
        url: '/home/banner',
        params:{
            distributionSite
        }
    })
}

// 新鲜好物
export function getGoodsApi() {
    return httpInstance({
        url: '/home/new'
    })
}

// 人气推荐
export const getHotAPI = () => {
    return httpInstance('home/hot')
}


// 商品
export const getProductApi = () => {
    return httpInstance('home/goods')
}