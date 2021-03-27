import axios from 'axios';
import {Toast} from 'vant';
import Vue from 'vue';
//全局配置
axios.defaults.baseURL = "http://localhost:3000/api"

//请求拦截
axios.interceptors.request.use(function(config){
    //设置请求头
    let token = JSON.parse(localStorage.getItem('member') || "{}").token
    config.headers.authorization = token
    return config
})

//响应拦截
axios.interceptors.response.use(function(response){
    if(response.data.code == 403){
        Toast(res.data.msg)
        $router.push("/login")
    }
    return response.data
})

export default axios
