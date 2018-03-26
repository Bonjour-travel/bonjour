<template>
  <div id="app">
    <router-view class="view"></router-view>
    <!-- <footer-bar></footer-bar> -->
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

a {
  text-decoration: none;
}

ul,
li {
  list-style: none;
}

body {
  overflow-x: hidden;
}
</style>