/* eslint-disable */
<template>
  <div id="app">
    <navbar></navbar>
    <breadcrumb></breadcrumb>
    <product-panel></product-panel>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Breadcrumb from './components/Breadcrumbs.vue'
import ProductPanel from './components/ProductPanel.vue'

let data = require('@/assets/produtos/teclado/teclado-1.jpg')

let items = [
  {
    text: 'Home',
    href: 'http://google.com',
  }, {
    text: 'Posts',
    to: { name: 'home' },
  }, {
    text: 'yess Story',
    active: true
  }
]

let state = {
  location: {
    name: 'Cabos'
  }
}

export default {
  data () {
    return state
  },
  components: {
    Navbar,
    Breadcrumb,
    ProductPanel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
