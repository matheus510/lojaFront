import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ProductForm from '@/components/ProductForm'
import ProductPanel from '@/components/ProductPanel'
import HomePanel from '@/components/HomePanel'
import ProductView from '@/components/ProductView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePanel
    },
    {
      path: '/produto/:name/',
      name: 'product',
      component: ProductView
    },
    {
      path: '/categoria/:categoria/',
      name: 'product-category',
      component: ProductPanel
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: ProductForm
    }
  ]
})
