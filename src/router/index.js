import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Shop from '@/views/Shop'
import Trade from '@/views/Trade/Trade'
import Finance from '@/views/Finance'
import test from '@/views/test'
import OrderManagement from "@/views/Trade/OrderManagement/OrderManagement"
import Refund from "@/views/Trade/Refund/Refund"
import TradeSetting from "@/views/Trade/TradeSetting/TradeSetting"
import Login from "@/views/Login"


// const homeChildren = [
//   {
//     path: "test",
//     component: test
//   },
// ]
Vue.use(Router)
// 交易的子路由
const tradeChirdens = [
  {name:"OrderManagement",path:'OrderManagement',component:OrderManagement},
  {path:'Refund',component:Refund},
  {path:'TradeSetting',component:TradeSetting},
]
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      name: 'Login',
      path: '/Login',
      component: Login,

    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      // children:[...homeChildren]
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/Trade',
      redirect: "/Trade/OrderManagement"      
    },
    {
      path: '/Trade',
      name: 'Trade',
      component: Trade,
      children:[...tradeChirdens]
    },
    {
      path: '/Finance',
      name: 'Finance',
      component: Finance
    },
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: test,
    //   children: [
    //     {path:"Home",component:Home}
    //   ]
    // },
  ]
})
