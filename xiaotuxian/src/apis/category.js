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