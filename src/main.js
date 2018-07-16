// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import "normalize.css"
import "../static/css/global.css"


// axios.defaults.baseURL = "http://bin.dx2.me:7000/zhangwo/api/index.php/api/"
Vue.prototype.$http = axios;
// 按需加载element
import { Button, Select,Option,Row,Col,Table,TableColumn,Input,Switch,Pagination,Checkbox,Loading,Dialog,} from 'element-ui';

Vue.use(Button)
  .use(Row)
  .use(Col)
  .use(Table)
  .use(TableColumn)
  .use(Input)
  .use(Select)
  .use(Option)
  .use(Switch)
  .use(Pagination)
  .use(Checkbox)
  .use(Loading)
  .use(Dialog)
  // .use(MessageBox )

   



// import echarts from 'echarts'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
