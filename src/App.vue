<template>
  <div id="app">
    <router-link exact active-class="font-bold" to="/">Home</router-link>
    <router-link active-class="font-bold" to="/employees">Employees</router-link>
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style src="./assets/css/tailwind.css">

</style>
