<template>
  <div class="search-container">
    <search-bar></search-bar>
    <div class="search-index">
      <div class="history">
        <h1>历史记录</h1>
        <div v-for="item in history"></div>
      </div>
      <div class="hotTags">
        <h1>热门标签</h1> 
        <div v-for="item in searchTags">
          {{item.name}}
        </div>
      </div>
      <div class="hotPlace">
        <h1>热门景点</h1>
        <div v-for="item in searchPlace">
          {{item.name}}          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import { mapState } from "vuex";

export default {
  name: "Search",
  components: {
    SearchBar
  },
  data() {
    return {
      history: [],
      tags: [],
      place: []
    };
  },
  methods: {},
  watch: {},
  computed: {
    ...mapState({
      searchTags: state => state.searchInfo.searchTags,
      searchPlace: state => state.searchInfo.searchPlace
    })
  },
  created() {
    this.$store.dispatch("getHotTags");
    this.$store.dispatch("getHotPlace");
  }
};
</script>

<style lang="scss" scoped>
.search-container {
  background-attachment: fixed;
  // background-color: aliceblue;
}
</style>
