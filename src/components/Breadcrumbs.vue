<template>
  <b-breadcrumb :items="this.items"/>
</template>
<script>
let items = [
  {
    text: 'Home',
    href: 'http://google.com',
  }, {
    text: 'Cabos',
    to: { name: 'home' },
  }
]
let data = {
    items
}
export default {
  data () {
    return data
  },
  methods: {
      loadItems: function () {
          items = this.items
      }
  }
}
</script>