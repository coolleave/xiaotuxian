<script setup>
import { getGoodsApi } from '@/apis/homeApi'
import { onMounted } from 'vue';
import { ref } from 'vue';
import HomePanel from './HomePanel.vue';
// 新鲜好物 界面


// 调用api并传入 新鲜好物参数
const goodList = ref([])
const getGood = async () => {
    goodList.value = await getGoodsApi()
}

onMounted(() => {
    getGood()
    
})
</script>

<template>
    <div>
        <HomePanel title="新鲜好物" sub-title="新鲜好物 优质甄选">
            <!-- 下面是插槽主体内容模版 -->
  <ul class="goods-list">
    <li v-for="item in goodList.result" :key="item.id">
      <RouterLink :to="`/detail/${item.id}`">
        <img :src="item.picture"/>
        <p class="name">{{ item.name }}</p>
        <p class="price">&yen;{{ item.price }}</p>
      </RouterLink>
    </li>
  </ul>

        </HomePanel>

    </div>

</template>


<style scoped lang='scss'>
.goods-list {
    display: flex;
    justify-content: space-between;
    height: 406px;

    li {
        width: 306px;
        height: 406px;

        background: #f0f9f4;
        transition: all .5s;

        &:hover {
            transform: translate3d(0, -3px, 0);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }

        img {
            width: 306px;
            height: 306px;
        }

        p {
            font-size: 22px;
            padding-top: 12px;
            text-align: center;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        .price {
            color: $priceColor;
        }
    }
}
</style>