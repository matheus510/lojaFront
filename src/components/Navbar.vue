<template>
<b-navbar toggleable="md" type="dark" variant="info" class="color">

  <b-nav-toggle target="nav_collapse"></b-nav-toggle>

  <b-navbar variant="faded" type="light">
    <b-navbar-brand href="#">
      <img src="../assets/logo.png" alt="Top Informática" id="logo">
    </b-navbar-brand>
  </b-navbar>

  <b-collapse is-nav id="nav_collapse">

    <b-nav is-nav-bar>
      <b-nav-item href="#">Filtros de Linha</b-nav-item>
      <b-nav-item href="#">Cabos</b-nav-item>
      <b-nav-item href="#">Adaptadores</b-nav-item>
      <b-nav-item href="#">Teclados</b-nav-item>
    </b-nav>

    <!-- Right aligned nav items -->
    <b-nav is-nav-bar class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>

  </b-collapse>
</b-navbar>

<!-- navbar-1.vue -->
</template>

<script>
let data = {}
export default {
  data () {
    return data
  },
  methods: {

  },
  props: {

  }

}
</script>
<style>
#logo {
  width: 50%;
  height: auto;
}
body {
  background-color: #f0f0f0 !important;
}
.color {
  background-color: #437c90 !important;
}
</style>