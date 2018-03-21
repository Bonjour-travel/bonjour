<template>
  <div id="app">
    <router-view class="view"></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from "./components/FooterBar.vue";
export default {
  name: "app",
  components: {
    FooterBar
  },
  created() {}
};
</script>

<style lang="scss">
// Base setting and rest
html {
  font-size: 62.5%;
}
body {
  overflow-x: hidden;
}
</style>
