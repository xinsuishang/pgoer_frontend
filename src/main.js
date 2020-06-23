import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

//生产环境去除注释
Vue.config.productionTip = false

Vue.use(Router)

new Vue({
  render: h => h(App),
}).$mount('#app')
