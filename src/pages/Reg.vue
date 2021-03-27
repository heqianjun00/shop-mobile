<template>
 <div>
      <van-nav-bar
        title="用户注册"
        right-text="登录"
        left-arrow
        @click-right="$router.push('/login')"
        />

        <!-- 表单 -->
           <van-form @submit="onSubmit">
            <van-field
                v-model="memberInfo.phone"
                name="phone"
                label="手机号"
                placeholder="手机号"
                :rules="[{ required: true, message: '请填写手机号' }]"
            />
            <van-field
                v-model="memberInfo.nickname"
                name="nickname"
                label="昵称"
                placeholder="昵称"
                :rules="[{ required: true, message: '请填写昵称' }]"
            />
            <van-field
                v-model="memberInfo.password"
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
import {register} from '../utils/api';
export default {
 data(){
 return{
     memberInfo:{
        phone:'',
        nickname:'',
        password:''

     }
 }
 },
 created(){},
 methods:{
     onSubmit(val){
         register(val).then(res=>{
             this.$toast("注册成功")
             this.$router.push('/login')
         })
     }
 },
 components:{}
}

</script>
<style scoped>
</style>