import httpInstance from "@/utils/http";

export const getRelevantApi = (limit)=>{
    return httpInstance({
        url:'/goods/relevant',
        params:{
            limit
        }

    })
}