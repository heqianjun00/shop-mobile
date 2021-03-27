<template>
 <div>
        <van-nav-bar
        title="购物车"
        left-arrow
        @click-left="$router.back()"
        />
      <van-card
        v-for="item in cartList" :key="item.id"
        :price="item.price"
        :title="item.goodsname"
        :thumb="$imgUrl + item.img"
        >
            <template #footer>
                <van-stepper v-model="item.num" theme="round" button-size="22" disable-input @plus="plus(item.id)" @minus="minus(item.id)"/>
                <div class="btn"><van-button size="small" type="danger" @click="del(item.id)">删除</van-button></div>
            </template>
        </van-card>
        <div class="box">
            <van-submit-bar :price="getSum" button-text="提交订单" @submit="onSubmit" />
        </div>
 </div>
</template>

<script>
import {getCartList,cartDelete,cartEdit} from '../utils/api';
export default {
computed:{
    getSum(){
        let sum = 0
        for(let i in this.cartList){
            
            sum +=this.cartList[i].price * this.cartList[i].num
        }
        return sum * 100
    }
},
 data(){
 return{
     cartList:[],
     uid:''
 }
 },
 created(){
     this.uid = JSON.parse(localStorage.getItem('member')||"{}").uid
     getCartList(this.uid).then(res=>{
         console.log(res.list);
         this.cartList = res.list
     })
 },
 methods:{
     plus(id){
         cartEdit(id,2)
     },
     minus(id){
         cartEdit(id,1)
     },
     del(id){
         cartDelete(id)
         //刷新购物车列表
         getCartList(this.uid).then(res=>{
         console.log(res.list);
         this.cartList = res.list
     })
     },
     onSubmit(){}
 },
 components:{}
}

</script>
<style scoped>
.btn{
    margin-top: 10px;
}
.box{
    padding: 20px 10px;
}
</style>