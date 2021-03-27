<template>
 <div>
        <van-nav-bar
        title="商城首页"
        />
    <!-- 轮播图 -->
     <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
        <van-swipe-item v-for="item in bannerList" :key="item.id">
            <img :src="$imgUrl + item.img" alt="">
        </van-swipe-item>
    </van-swipe>
<!-- tab切换 -->
    <van-tabs v-model="active" >
    <van-tab title="热门推荐" >
        <van-card
        v-for="item in goodsList[active].content" :key="item.id"
        :price="item.price"
        :title="item.goodsname"
        :thumb="$imgUrl+item.img"
        >
            <template #footer>
                <van-button size="small" type="primary" @click="add(item.id)"><van-icon name="shopping-cart-o" /></van-button>
            </template>
        </van-card>
    </van-tab>
    <van-tab title="发现新品">
        <van-card
        v-for="item in goodsList[active].content" :key="item.id"
        :price="item.price"
        :title="item.goodsname"
        :thumb="$imgUrl+item.img"
        >
            <template #footer>
                <van-button size="small" type="primary" @click="add(item.id)"><van-icon name="shopping-cart-o" /></van-button>
            </template>
        </van-card>
    </van-tab>
    <van-tab title="全部商品">
        <van-card
         v-for="item in goodsList[active].content" :key="item.id"
        :price="item.price"
        :title="item.goodsname"
        :thumb="$imgUrl+item.img"
        >
            <template #footer>
                <van-button size="small" type="primary" @click="add(item.id)"><van-icon name="shopping-cart-o" /></van-button>
            </template>
        </van-card>
    </van-tab>
    </van-tabs>
 </div>
</template>

<script>
import {getBanner,getGoods,cartAdd} from '../utils/api';
export default {
 data(){
 return{
     bannerList:[],
     active:0,
     goodsList:[{content:{},content:{},content:{}}] ,
     uid:''
 }
 },
 created(){
     this.uid = JSON.parse(localStorage.getItem("member") || "{}").uid
     getBanner().then(res=>{
         this.bannerList = res.list
     })
     getGoods().then(res=>{
         this.goodsList = res.list
     })
 },
 methods:{
     add(goodsid){
         cartAdd(goodsid,this.uid)
     }
 },
 components:{}
}

</script>
<style scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    height: 200px;
    text-align: center;
    background-color: #39a9ed;
  }
  .van-swipe-item img{
      width: 100%;
      height: 200px;
  }
</style>