import httpInstance from "@/utils/http";

export function LoginApi({account,password}){
    return httpInstance({
        method:'POST',
        url: '/login',
        data:{
            account,
            password
        }
    })
}