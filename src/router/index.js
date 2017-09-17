import Vue from 'vue'
import Router from 'vue-router'
import ProductPanel from '@/components/ProductPanel'
import HomePanel from '@/components/HomePanel'
import ProductView from '@/components/ProductView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePanel
    },
    {
      path: '/produto/:nome',
      name: 'product name',
      component: ProductView
    },
    {
      path: '/categoria/:categoria',
      name: 'product category',
      component: ProductPanel
    }
  ]
})
