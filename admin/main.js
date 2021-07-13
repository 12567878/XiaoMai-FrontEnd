// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './route'
import './assets/css/global.css'
import axios from 'axios'
// 根路径请求连接
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/ '

Vue.prototype.$http = axios
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
}).$mount('#app')
