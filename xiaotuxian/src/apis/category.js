import  httpInstance from '@/utils/http'

// 查询分类，传入id参数
export function getCategoryById(id){
    return httpInstance({
        url:'/category',
        params:{
            id
        }
    })
}

// 获取二级分类数据列表
export const getCategoryFilterAPI = (id) => {
    return httpInstance({
      url:'/category/sub/filter',
      params:{
        id
      }
    })
  }

  /**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return httpInstance({
    url:'/category/goods/temporary',
    method:'POST',
    data
  })
}