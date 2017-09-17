<template>
  <b-breadcrumb :items="routes"></b-breadcrumb>
</template>
<script>
export default {
  props: { 
    route: {
      type: Array,
      required: true 
    }
  },
  data () {
    return {
      routes: this.route
    }
  }
}
</script>