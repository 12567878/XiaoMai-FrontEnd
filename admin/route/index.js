import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import welcome from '../components/welcome.vue'
import Users from '../components/user/User.vue'
import Discuss from '../components/discuss/Discuss.vue'
import Inform from '../components/user/inform.vue'
import Seller from '../components/user/seller.vue'

/* const Login = () => import( webpackChunkName: "Login_Home_Welcome"  '../components/Login.vue') */
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: '/Home'
    },
    {
      path: '/login', component: Login
    },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        {path: '/home', component: welcome},
        { path: '/user', component: Users },
        { path: '/discuss', component: Discuss },
        {path: '/send', component: Inform},
        {path: '/seller', component: Seller}
      ]
    }

  ]
})
