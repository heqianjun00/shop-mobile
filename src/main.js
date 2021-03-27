// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//导入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//设置全局图片基础路径
Vue.prototype.$imgUrl = "http://localhost:3000"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
