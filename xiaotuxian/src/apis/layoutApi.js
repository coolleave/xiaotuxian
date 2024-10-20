import httpInstance from "@/utils/http";

// 测试api
export function getCategory () {
    return httpInstance({
        url: 'home/category/head'
    })
}
