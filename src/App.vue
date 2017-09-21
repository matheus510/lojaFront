/* eslint-disable */
<template>
  <div id="app">
    <div v-if="isLogin">
      <router-view></router-view>
    </div>
    <div v-else>
      <navbar></navbar>
      <breadcrumb v-bind:route="this.route"></breadcrumb>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Breadcrumb from './components/Breadcrumbs.vue'
import Login from './components/Login.vue'



export default {
  data () {
    return{}
  },
  components: {
    Navbar,
    Breadcrumb
  },
  computed: {
    route: function () {
      let urlPath = document.URL
      let isCategory = urlPath.includes('categoria/')
      let isProductView = urlPath.includes('produto/')
      let categoryName = this.$route.params.categoria
      let productName = this.$route.params.produto
      if (isCategory === true) {
        return [{
          text: 'Home',
          to: 'http://localhost:8080/',
        }, {
          text: 'Categorias',
          to: { name: 'product-category' },
        }, {
          text: `${categoryName}`,
          active: true
        }]
      } else if (isProductView === true) {
        return [{
          text: 'Home',
          to: 'http://localhost:8080/',
        }, {
          text: 'Produtos',
          to: { name: 'product', params: { name: productName }},
        }, {
          text: `${productName}`,
          active: true
        }]
      } else {
          return [{
            text: 'Home',
            to: 'http://localhost:8080/',
          }]
        }
      },
    isLogin: function () {
      return (this.$route.path.includes('login')) ? true : false
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
