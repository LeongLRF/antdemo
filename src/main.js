import Vue from 'vue'
import App from './App'
import router from './router/index'
import {Layout, Button, Icon, Menu, Drawer} from 'ant-design-vue'
import './assets/css/main.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false
Vue.use(Layout)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(Drawer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
