<template>
 <div>
     <van-nav-bar
        title="用户登录"
        right-text="注册"
        left-arrow
        @click-right="$router.push('/reg')"
        />

        <!-- 表单 -->
        <van-form @submit="onSubmit">
            <van-field
                v-model="phone"
                name="phone"
                label="手机号"
                placeholder="手机号"
                :rules="[{ required: true, message: '请填写手机号' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="password"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
        </van-form>
 </div>
</template>

<script>
import {login} from '../utils/api';
export default {
 data(){
 return{
     phone:'',
     password:''
 }
 },
 created(){},
 methods:{
     onSubmit(val){
         login(val).then(res=>{
             if(res.code == 200){
                 this.$toast(res.msg)
                 localStorage.setItem('member',JSON.stringify(res.list))
                 this.$router.push("/mine")
             }else{
                 this.$toast(res.msg)
             }
         })
     }
 },
 components:{}
}

</script>
<style scoped>
</style>