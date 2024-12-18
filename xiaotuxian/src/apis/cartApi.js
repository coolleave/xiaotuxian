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

// 删除购物车列表
export const delCartApi = (ids)=>{
    return httpInstance({
        url:'/member/cart',
        method:'DELETE',
        data:{
            ids
        }
    })
}

// 将本地购物车合并到登录后的账号去
export const mergeCartApi = (data)=>{
    return httpInstance({
        url:'/member/cart/merge',
        method:'POST',
        data
    })
}