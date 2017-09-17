/* eslint-disable */
<template>
  <div id="app">
    <navbar></navbar>
    <breadcrumb v-bind:route="this.route"></breadcrumb>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Breadcrumb from './components/Breadcrumbs.vue'
import ProductPanel from './components/ProductPanel.vue'

let state = {}

export default {
  data () {
    return state
  },
  components: {
    Navbar,
    Breadcrumb,
    ProductPanel
  },
  computed: {
    route: function() {
      let urlPath = document.URL
      let isCategory = urlPath.includes('categoria/')
      let isProductView = urlPath.includes('produto/')
      console.log('oi')
      if (isCategory === true) {
        console.log('oieee1')
        let start = urlPath.indexOf('categoria/') + 10
        let end = urlPath.lenght
        let categoryName = urlPath.substring(start, end)
        return [{
          text: 'Home',
          href: 'http://localhost:8080/',
        }, {
          text: 'Categorias',
          to: { name: 'product category' },
        }, {
          text: `${categoryName}`,
          active: true
        }]
      } else if (isProductView === true) {
        console.log('oieee2')
        let start = urlPath.indexOf('produto/') + 8
        let end = urlPath.lenght
        let productName = urlPath.substring(start, end).replace('-', ' ')
        return [{
          text: 'Home',
          href: 'http://localhost:8080/',
        }, {
          text: 'Produtos',
          to: { name: 'product name' },
        }, {
          text: `${productName}`,
          active: true
        }]
      } else {
          return [{
            text: 'Home',
            href: 'http://localhost:8080/',
          }]
        }
      }
    } 
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
