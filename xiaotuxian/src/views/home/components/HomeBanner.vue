<script setup>
import { getBannerApi } from '@/apis/homeApi';
import { onMounted } from 'vue';
import { ref } from 'vue';
// 发送轮播图片url请求

// 准备数据
const bannerUrl = ref([])
const  getBanner = async()=>{
    bannerUrl.value = await getBannerApi()
}

onMounted(()=>{
    getBanner()
})



</script>



<template>
    <!--轮播图-->
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerUrl.result" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
    
  width: 1240px;
  height: 500px;
//   position: absolute;
  // left: 0;
  // top: 0;
  // z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>