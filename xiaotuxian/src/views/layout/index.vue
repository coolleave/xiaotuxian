<template>
<Nav />
<Header />
<RouterView />  
<Footer />
</template>

<script setup lang="ts" name="LayoutIndex">
import Nav from './components/LayoutNav.vue'
import Header from './components/LayoutHeader.vue';
import Footer from './components/LayoutFooter.vue';



</script>

<style scoped>

</style>