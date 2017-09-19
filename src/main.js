// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueFormGenerator from 'vue-form-generator'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueFormGenerator)
Vue.use(BootstrapVue)

// import of global components for props usage
import Breadcrumb from './components/Breadcrumbs.vue'

Vue.component('breadcrumb', {
  template: Breadcrumb,
  props: ['route'],
  router
})

/* eslint-disable no-new */
new Vue({
  el: `#app`,
  router,
  template: '<App/>',
  components: { App }
})
