import { getCategoryById } from '@/apis/category'
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router'

// 面包屑
// 引入useRoute，并实例化，获取路径传入的参数id


export function useCategory() {
    const route = useRoute()
    const categoryData = ref({})
    const getCategorData = async (id = route.params.id) => {
        const res = await getCategoryById(id)
        categoryData.value = res.result
    }
    onMounted(() => {
        getCategorData()
    })

    // 当有缓存的时候，路由组件就会复用，组件的挂载生命周期失效
    // 这样组件就不会更新

    // 方法1： 使用watch监听，当路由变化时候，重新发送请求
    // watch(() => {
    //     route,
    //     getCategorData()
    // })

    // 方法2： 使用组件的更新生命周期钩子，当组件更新时候，发送请求

    onBeforeRouteUpdate((to) => {
        getCategorData(to.params.id)
    })

    // 方法3 在组件中使用key,强制组件进行挂载，不让组件复用
    // 这是路由守卫功能
    // <RouterView :key="$route.fullPath"/>
    return { categoryData }
}