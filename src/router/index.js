import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

let router=  new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: ()=>import('../pages/Home.vue'),
      meta:{
        title:"首页"
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: ()=>import('../pages/Home.vue'),
      meta:{
        title:"首页"
      }
    },
    {
      path: '/cate',
      name: 'Cate',
      component: ()=>import('../pages/Cate.vue'),
      meta:{
        title:"分类"
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: ()=>import('../pages/Cart.vue'),
      meta:{
        title:"购物车"
      }
    },
    {
      path: '/mine',
      name: 'Mine',
      component: ()=>import('../pages/Mine.vue'),
      meta:{
        title:"用户中心"
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: ()=>import('../pages/Login.vue'),
      meta:{
        title:"用户登录"
      }
    },
    {
      path: '/reg',
      name: 'Reg',
      component: ()=>import('../pages/Reg.vue'),
      meta:{
        title:"用户注册"
      }
    }
  ]
})

router.beforeEach((to,from,next)=>{
  document.title = to.meta.title
  next()
})

export default router
