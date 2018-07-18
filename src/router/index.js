import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Shop from '@/views/Shop'
import Trade from '@/views/Trade/Trade'
import Finance from '@/views/Finance'
import OrderManagement from "@/views/Trade/OrderManagement/OrderManagement"
import OrderList from "@/views/Trade/OrderManagement/OrderList/OrderList"
import Refund from "@/views/Trade/Refund/Refund"
import TradeSetting from "@/views/Trade/TradeSetting/TradeSetting"
import Login from "@/views/Login"
import OrderDetail from "@/views/Trade/OrderManagement/OrderDetail/OrderDetail"//订单详情


// const homeChildren = [
//   {
//     path: "test",
//     component: test
//   },
// ]
Vue.use(Router)
// 交易的子路由
const tradeChirdens = [
  {name: "OrderManagement", path: 'OrderManagement', component: OrderManagement},
  {name: "Refund",path:'Refund',component:Refund},
  {name: "TradeSetting",path:'TradeSetting',component:TradeSetting},
  {name: "OrderDetail",path:'OrderDetail/:id',component:OrderDetail},
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
    //   path: '/OrderNav',
    //   name: 'OrderNav',
    //   component: OrderNav,
    // },
  ]
})
