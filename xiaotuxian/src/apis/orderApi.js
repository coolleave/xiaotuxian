import httpInstance from "@/utils/http";

export const creatOrderApi=(data)=>{
    return httpInstance({
        url:'/member/order',
        method:'POST',
        data
    })
}