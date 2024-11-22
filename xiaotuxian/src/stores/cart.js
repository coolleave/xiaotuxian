import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore('cart', ()=>{
    // state
    const cartList = ref([])

    // action
    const addCart = (goods) => {
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
    return {
        cartList,
        addCart
    }
},
{
    persist: true  // 使用pinia组件进行持久化保存
}
)