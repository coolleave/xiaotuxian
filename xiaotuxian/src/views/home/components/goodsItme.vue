<script setup lang="ts" name="">
defineProps({
    good: {
        type: Object,
        default: () => {}

    }
})
</script>

<template>
    <RouterLink to="/" class="goods-item">
        <img v-img-lazy="good.picture" />
        <p class="name ellipsis">{{ good.name }}</p>
        <p class="desc ellipsis" :title="good.desc">{{ good.desc }}</p>
        <p class="price">&yen;{{ good.price }}</p>
    </RouterLink>
</template>

<style scoped lang="scss">
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
</style>