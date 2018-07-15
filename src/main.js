// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "normalize.css"
import "../static/css/global.css"

// 按需加载element
import { Button, Select,Option,Row,Col,Table,TableColumn,Input,Switch,Pagination,Checkbox} from 'element-ui';

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

   



// import echarts from 'echarts'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
