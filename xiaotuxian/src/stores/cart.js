import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./user";
import { insertCartApi, getCartApi, delCartApi } from '@/apis/cartApi'

export const useCartStore = defineStore('cart', () => {
    // state
    const cartList = ref([])

    // 是否登录
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    // 总件数和总价格
    const allCount = computed(() =>
        cartList.value.reduce((a, c) =>
            a + c.count, 0
        ))

    const allPrice = computed(() =>
        cartList.value.reduce((a, c) =>
            a + c.count * c.price, 0
        )
    )

    // 全选 display
    const isAll = computed(() =>
        cartList.value.every((item) => item.selected === true)
    )

    // 全选绑定

    const selAll = (selected) => {
        cartList.value.forEach((item) => item.selected = selected)
    }

    // 选中数量

    const selectedCount = computed(() =>
        cartList.value.filter((item) => item.selected === true).reduce((a, c) => a + c.count, 0)
    )

    // 选中金额

    const selectedPrice = computed(() =>
        cartList.value.filter((item) => item.selected === true).reduce((a, c) => a + c.count * c.price, 0)
    )

    // action
    // 查询购物车最新数据
    const updateCart = async () => {
        const res = await getCartApi()
        cartList.value = res.result
    }

    const addCart = async (goods) => {

        // 判断是登录
        if (isLogin.value) {
            const { skuId, count } = goods
            // 加入购物车
            await insertCartApi({ skuId, count })

            updateCart()

        } else {
            // 判断购物车中是否有相同的商品
            // 如果有，就加count
            // 如果没有就 再加一条记录
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            // console.log(cartList);


            if (item) {
                item.count += goods.count
            } else {
                cartList.value.push(goods)
            }
        }
    }

    // 删除购物车中的商品
    const delCart = async (skuId) => {
        if (isLogin.value) {
            await delCartApi([skuId])
            updateCart()
        } else {
            // 找到购物车中的索引
            const index = cartList.value.findIndex((item) => item.skuId === skuId)
            // 从index开始，删除1个
            cartList.value.splice(index, 1)
        }
    }


    // 展示选框并修改pinia中的数据
    const displayOpt = (skuId, selected) => {
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }

    // 清除购物车内容
    const clearCart= ()=>{
        cartList.value = []
    }

    return {
        cartList,
        allCount,
        allPrice,
        isAll,
        selectedCount,
        selectedPrice,
        displayOpt,
        addCart,
        delCart,
        selAll,
        clearCart,
        updateCart
    }
},
    {
        persist: true  // 使用pinia组件进行持久化保存
    }
)