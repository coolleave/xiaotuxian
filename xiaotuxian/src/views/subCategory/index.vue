<script setup>
import { getCategoryFilterAPI } from '@/apis/category.js'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { getSubCategoryAPI } from '@/apis/category'
import goodsItme from '@/views/home/components/goodsItme.vue'

// 二级分类
const route = useRoute()
const categroyDate = ref({})

const getCategoryDate = async () => {

  const res = await getCategoryFilterAPI(route.params.id)
  categroyDate.value = res.result
}

onMounted(() => {
  getCategoryDate()
})

// 获取孙类商品数据
const categoryList = ref({})
const data = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: "publishTime"
})
const getCategoryList = async () => {
  const resList = await getSubCategoryAPI(data.value)
  categoryList.value = resList.result.items

}

const tabChange = () => {
  data.value.page = 1
}
onMounted(() => {
  getCategoryList()
})

// 商品滚动无限加载
const disable = ref(false)  // 是否禁用
const loadGood = async()=>{
  data.value.page++
  const res = await getSubCategoryAPI(data.value)
  // 如果滚动到底了，就禁用
  if(res.result.items.length === 0){
    disable.value = true
  }
  
  // 列表的展开运算符
  categoryList.value = [...categoryList.value,...res.result.items]
}
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categroyDate.parentId}` }">{{ categroyDate.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categroyDate.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="data.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <!-- 商品滚动无限加载 -->
      <div class="body" v-infinite-scroll="loadGood" :infinite-scroll-disabled="disable">
        <!-- 商品列表-->
        <goodsItme v-for="good in categoryList" :good="good" :key="good.id" />


      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>