<template>
 <div>
     <van-nav-bar
        title="用户中心"
        />
   <div class="header-img">
        <van-image
        round
        width="10rem"
        height="10rem"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <h3>{{username}}</h3>
   </div>
   <div class="btn">
       <van-button type="danger" block @click="quit">安全退出</van-button>
   </div>
    <van-cell title="我的收藏" is-link/>
    <van-cell title="我的评论" is-link />
    <van-cell title="我的订单" is-link />
 </div>
</template>

<script>
export default {
 data(){
 return{
     username:''
 }
 },
 created(){
     this.username = JSON.parse(localStorage.getItem("member") || '{}').nickname
 },
 methods:{
     quit(){
         this.$router.push('/login')
         localStorage.removeItem("member")
     }
 },
 components:{}
}

</script>
<style scoped>
.header-img{
    width: 100%;
    height: 250px;
    background-color: skyblue;
    overflow: hidden;
}
.van-image{
    display: block;
    margin: 10px auto;
}
h3{
    text-align: center;
}
.btn{
    padding: 10px 5px;
}
</style>