<script setup>
import { onMounted } from 'vue';
import HomePanel from './HomePanel.vue'
import goodsItme from './goodsItme.vue'
import { getProductApi } from '@/apis/homeApi';
import { ref } from 'vue';

// 准备数据，发送请求

const productList = ref([])
const getProduct = async () => {
  productList.value = await getProductApi()
}

onMounted(() => {
  getProduct()
})
</script>

<template>
  <div class="home-product">
    <HomePanel :title="item.name" v-for="item in productList.result" :key="item.id">
      <div class="box">
        <RouterLink class="cover" to="/">
          <img :src="item.picture" />
          <strong class="label">
            <span>{{ item.name }}馆</span>
            <span>{{ item.saleInfo }}</span>
          </strong>
        </RouterLink>
        <ul class="goods-list">
          <li v-for="good in item.goods" :key="good.id">
            <goodsItme :good="good">

            </goodsItme>
          </li>
        </ul>
      </div>
    </HomePanel>
  </div>
</template>

<style scoped lang='scss'>
.home-product {

  background: #fff;
  margin-top: 20px;

  .sub {
    margin-bottom: 2px;

    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;

      &:hover {
        background: $xtxColor;
        color: #fff;
      }

      &:last-child {
        margin-right: 80px;
      }
    }
  }

  .box {
    display: flex;
    justify-content: space-around;

    .cover {
      width: 640px;
      height: 610px;
      margin-right: 10px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .label {
        width: 288px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);

        span {

          text-align: center;

          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }

    .goods-list {
      width: 990px;
      display: flex;
      flex-wrap: wrap;

      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;

        &:nth-last-child(-n + 4) {
          margin-bottom: 0;
        }

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }

    .goods-item {
      display: block;
      width: 220px;
      padding: 20px 30px;
      text-align: center;
      transition: all .5s;

      &:hover {
        transform: translate3d(0, -3px, 0);
        box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
      }

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
        height: 29px; // 增加高度
        overflow: hidden; // 添加这行
        text-overflow: ellipsis; // 添加这行
        white-space: nowrap; // 添加这行以防换行
      }

      .price {
        color: $priceColor;
        font-size: 20px;

      }
    }
  }
}
</style>