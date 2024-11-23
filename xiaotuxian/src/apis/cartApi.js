import  httpInstance from '@/utils/http'

// 添加购物车api
export const insertCartApi = ({skuId,count})=>{
    return httpInstance({
        url:'/member/cart',
        method:'POST',
        data:{
            skuId,
            count
        }

    })
}

// 获取购物车列表
export const getCartApi = ()=>{
    return httpInstance({
        url:'/member/cart',
    })
}