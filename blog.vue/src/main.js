import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import api from './api/http.js'

// 将API方法绑定到全局
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')