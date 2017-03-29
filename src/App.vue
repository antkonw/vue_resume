<template>
  <div class="container" id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.container{
  width:100%;
  max-width:1280px;
  margin: 0 auto;
}
</style>
