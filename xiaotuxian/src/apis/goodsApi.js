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

export const fetchHotGoodsAPI = ({ id, type, limit = 3 }) => {
    return httpInstance({
      url:'/goods/hot',
      params:{
        id, 
        type, 
        limit
      }
    })
  }