import { ref,  } from 'vue'
import { defineStore } from 'pinia'
import {getCategory} from '@/apis/layoutApi'

export const useCategoryStore = defineStore('category', () => {
    // 准备数据 state
    const categoryList = ref([])


    // 获取分类列表 action
    const getList = async () => {
        const res = await getCategory()

        categoryList.value = res.result

    }

    // 挂载生命周期调用api

    return{
        categoryList,
        getList
      }
})
