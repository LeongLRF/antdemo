import Vue from 'vue'
import Router from 'vue-router'
import index from '@/index/index'
import welcome from '@/welcome/welcome'
import shop from '@/shop/shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: 'welcome',
          name: 'welcome',
          component: welcome
        },
        {
          path: 'shop',
          name: 'shop',
          component: shop
        }
      ]
    }
  ]
})
