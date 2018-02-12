import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import ProductList from '@/components/ProductList'
import ShoppingCart from '@/components/ShoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Dashboard,
      children: [
        {
          path: 'products',
          component: ProductList
        },
        {
          path: 'cart',
          component: ShoppingCart
        }
      ]
    }
  ]
})
