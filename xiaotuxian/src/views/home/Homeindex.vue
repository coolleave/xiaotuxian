<script setup lang="ts" name="Homeindex">

import category from './components/HomeCategory.vue';
import banner from './components/HomeBanner.vue';
import goods from './components/HomeGoods.vue';
import hot from './components/HomeHot.vue';
import product from './components/HomeProduct.vue';

</script>

<template>

<div class="container">
    <category/>
    <banner/>
</div>


    <goods/>
    <hot/>
    <product/>
    
</template>

<style scoped>
.container{
  margin: auto;
  display: flex;
  justify-content: space-between;
}
</style>