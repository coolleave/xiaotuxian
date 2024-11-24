import httpInstance from "@/utils/http";

export const creatOrderApi=(data)=>{
    return httpInstance({
        url:'/member/order',
        method:'POST',
        data
    })
}

export const getOrderInfoApi = (id)=>{
    return httpInstance({
        url:`/member/order/${id}`
    })
}