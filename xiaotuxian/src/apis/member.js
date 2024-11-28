import httpInstance from "@/utils/http";

// 获取猜你喜欢信息
export const getRelevantApi = (limit)=>{
    return httpInstance({
        url:'/goods/relevant',
        params:{
            limit
        }

    })
}



// 获取用户订单信息
/*
params: {
	orderState:0,
  page:1,
  pageSize:2
}
*/
export const getUserOrderApi = (params) => {
    return httpInstance({
      url:'/member/order',
      params
    })
  }