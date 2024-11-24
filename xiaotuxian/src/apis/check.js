import httpInstance from "@/utils/http";

export const getCheckoutApi = ()=>{
    return httpInstance({
        url:'/member/order/pre'
    })
}