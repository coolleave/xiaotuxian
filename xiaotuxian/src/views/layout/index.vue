<script setup lang="ts" name="LayoutIndex">
import Nav from './components/LayoutNav.vue'
// 吸顶导航
import NavFixed from './components/LayoutFixed.vue';
import Header from './components/LayoutHeader.vue';
import Footer from './components/LayoutFooter.vue';
// pinia 状态管理 优化重复调用的api
import {useCategoryStore} from '@/stores/category'
import { onMounted } from 'vue';

// 在导航和吸顶式导航的父组件发送请求，这样的话就可以防止发送重复请求了
onMounted(()=>{
    const getCategoryList = useCategoryStore()
    getCategoryList.getList()
    
})

</script>

<template>

    <Nav />
    <NavFixed />
    <Header />
    <RouterView />
    <Footer />
</template>


<style scoped></style>