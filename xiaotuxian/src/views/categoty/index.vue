<script setup>
import { getCategoryById } from '@/apis/category'
import { onMounted } from 'vue';
import { ref } from 'vue';
import goodsItme from '@/views/home/components/goodsItme.vue';
// 轮播图api
import { getBannerApi } from '@/apis/homeApi';

// 面包屑
// 引入useRoute，并实例化，获取路径传入的参数id
import { useRoute } from 'vue-router';
const route = useRoute()
const categoryData = ref({})
const getCategorData = async () => {
    const res = await getCategoryById(route.params.id)
    categoryData.value = res.result
}
onMounted(() => {
    getCategorData()
})



// 发送轮播图片url请求

// 准备数据
const bannerUrl = ref([])
const getBanner = async () => {
    bannerUrl.value = await getBannerApi()
}

onMounted(() => {
    getBanner()
})

</script>

<template>
    <div class="top-category">
        <div class="container m-top-20">
            <!-- 面包屑 -->
            <div class="bread-container">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <!-- 商品轮播图 -->
        <div class="home-banner">
            <el-carousel height="500px">
                <el-carousel-item v-for="item in bannerUrl.result" :key="item.id">
                    <img :src="item.imgUrl" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="sub-list">
            <h3>全部分类</h3>
            <ul>
                <li v-for="i in categoryData.children" :key="i.id">
                    <RouterLink to="/">
                        <img :src="i.picture" />
                        <p>{{ i.name }}</p>
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div class="ref-goods" v-for="item in categoryData.children" :key="item.id">
            <div class="head">
                <h3>- {{ item.name }}-</h3>
            </div>
            <div class="body">
                <goodsItme v-for="good in item.goods" :good="good" :key="good.id" />
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.top-category {
    h3 {
        font-size: 28px;
        color: #666;
        font-weight: normal;
        text-align: center;
        line-height: 100px;
    }

    .sub-list {
        margin-top: 20px;
        background-color: #fff;

        ul {
            display: flex;
            padding: 0 32px;
            flex-wrap: wrap;

            li {
                width: 168px;
                height: 160px;


                a {
                    text-align: center;
                    display: block;
                    font-size: 16px;

                    img {
                        width: 100px;
                        height: 100px;
                    }

                    p {
                        line-height: 40px;
                    }

                    &:hover {
                        color: $xtxColor;
                    }
                }
            }
        }
    }

    .ref-goods {
        background-color: #fff;
        margin-top: 20px;
        position: relative;

        .head {
            .xtx-more {
                position: absolute;
                top: 20px;
                right: 20px;
            }

            .tag {
                text-align: center;
                color: #999;
                font-size: 20px;
                position: relative;
                top: -20px;
            }
        }

        .body {
            display: flex;
            justify-content: space-around;
            padding: 0 40px 30px;
        }
    }

    .bread-container {
        padding: 25px 0;
    }
}

// 轮播图
.home-banner {

    width: 1240px;
    height: 500px;
    // 左右居中
    margin: 0 auto;
    //   position: absolute;


    img {
        width: 100%;
        height: 500px;
    }
}
</style>