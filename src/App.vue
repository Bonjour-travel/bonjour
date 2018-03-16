<template>
  <div id="app">
    <router-view class="view"></router-view>
    <!-- <router-view class="view" name="subject"></router-view> -->
    <!-- <router-view class="view" name="search"></router-view> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  created(){
    // this.$store.dispatch('getLocation','da')
    // console.log(this.$store.state.location)
  }
}
</script>

<style lang="scss">

// Base setting and rest
html {
  font-size: 62.5%;
}
</style>
