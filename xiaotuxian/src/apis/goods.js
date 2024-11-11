import httpInstance from "@/utils/http";

// 查询分类，传入id参数
export function getGoodsApi(id){
    return httpInstance({
        url:'/goods',
        params:{
            id
        }
    })
}