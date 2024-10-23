<script setup lang="ts" name="Homeindex">

import category from './components/HomeCategory.vue';
import banner from './components/HomeBanner.vue';
import goods from './components/HomeGoods.vue';
import hot from './components/HomeHot.vue';
import product from './components/HomeProduct.vue';
import homePanel from './components/HomePanel.vue';
</script>

<template>

<div class="container">
    <category/>
    <banner/>
</div>


    <goods/>
    <hot/>
    <product/>
    <homePanel title="新鲜好物" sub-title="新鲜好物 细心选择">
        <div>
            我是插槽内容
        </div>
    </homePanel>
</template>

<style scoped>
.container{
  margin: auto;
  display: flex;
  justify-content: space-between;
}
</style>