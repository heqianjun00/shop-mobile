<template>
 <div>
    <div class="container">
        <div class="left">
             <van-sidebar v-model="activeKey" @change="change">
                <van-sidebar-item :title="item.catename" v-for="item in goodsCateList" :key="item.id" />
            </van-sidebar>
        </div>
        <div class="right">
      <van-grid :border="false" :column-num="3">
            <van-grid-item v-for="item in childrenList" :key="item.id">
                <van-image :src="$imgUrl+item.img" />
                <h6>{{item.catename}}</h6>
            </van-grid-item>
        </van-grid>
        </div>
    </div>
    
 </div>
</template>

<script>
import {getCate} from '../utils/api';
export default {
 data(){
 return{
     activeKey:0,
     goodsCateList:[],
     childrenList:[]
 }
 },
 created(){
     getCate().then(res=>{
         this.goodsCateList = res.list
         this.change(0)
     })
 },
 methods:{
     change(index){
         this.childrenList = this.goodsCateList[index].children
     }
 },
 components:{}
}

</script>
<style scoped>
.container{
    display: flex;
}
</style>