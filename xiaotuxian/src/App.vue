<script setup>
import {RouterView } from 'vue-router'

</script>

<template>

  <el-button type="primary">Primary</el-button>
  <RouterView />
  <div class="test">
    var 导入测试
  </div>
</template>

<style scoped lang="scss">

.test{
  color: $priceColor;
}
</style>
