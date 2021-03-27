import axios from '../request/http'

//获取轮播图
export function getBanner(){
    let res = axios.get('/getbanner')
    return res
}

//获取商品信息
export function getGoods(){
    let res = axios.get('/getindexgoods')
    return res
}

//获取商品分类列表
export function getCate(){
    let res = axios.get("/getcate")
    return res
}

//用户注册
export function register(data){
    let res = axios.post('/register',data)
    return res
}
//用户登录
export function login(data){
    let res = axios.post('/login',data)
    return res
}

//获取购物车列表
export function getCartList(uid){
    let res = axios.get('/cartlist',{params:{uid:uid}})
    return res
}

//购物车添加
export function cartAdd(goodsid,uid){
    let res = axios.post("/cartadd",{goodsid:goodsid,uid:uid,num:1})
    return res
}

//购物车删除
export function cartDelete(id){
    let res = axios.post('/cartdelete',{id:id})
    return res
}

//购物车修改
export function cartEdit(id,type){
    let res = axios.post("/cartedit",{id:id,type:type})
    return res
}