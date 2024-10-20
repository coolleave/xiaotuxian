<template>

<Nav />
<NavFixed />
<Header />
<RouterView />  
<Footer />
</template>

<script setup lang="ts" name="LayoutIndex">
import Nav from './components/LayoutNav.vue'
// 吸顶导航
import NavFixed from './components/LayoutFixed.vue';
import Header from './components/LayoutHeader.vue';
import Footer from './components/LayoutFooter.vue';




</script>

<style scoped>

</style>