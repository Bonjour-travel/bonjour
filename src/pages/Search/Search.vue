<template>
  <div class="search-container">
    <search-bar></search-bar>
    <div class="search-index">
      <div class="location">
        <h2>当前位置：{{local}}</h2>
      </div>
      <div v-if="Object.keys(searchResult).length" class="block result">
        <h2>您正在查找的是不是：</h2>
        <div class="text">
          <div class="box" v-for="item in searchResult.place_arr">
            {{item.place}}
          </div>
        </div>
      </div>
      <div v-else class="block history">
        <h1>历史记录</h1>
        <div class="text">
          <div class="box" v-for="item in searchHistory">
            {{item.content}}
          </div>
        </div>
      </div>
      <div class="block hotTags">
        <h1>热门标签</h1> 
        <div class="text">
          <div class="box" v-for="item in searchTags">
          {{item.name}}
          </div>
        </div>
      </div>
      <div class="block hotPlace">
        <h1>热门景点</h1>
        <div class="text">
           <div class="box" v-for="item in searchPlace">
            {{item.name}}          
          </div>
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
      searchPlace: state => state.searchInfo.searchPlace,
      searchHistory: state => state.searchInfo.searchHistory,
      searchResult: state => state.searchInfo.searchResult,
      local: state => state.userInfo.local,
      ip: state => state.userInfo.ip
    })
  },
  created() {
    this.$store.dispatch("getHotTags");
    this.$store.dispatch("getHotPlace");
    this.$store.dispatch("getHistory");
  }
};
</script>

<style lang="scss" scoped>
.search-container {
  background-attachment: fixed;
  // background-color: aliceblue;
}
.search-index {
  margin: 0 20px;
  .block {
    padding: 10px 0;
    .text {
      display: flex;
      flex-wrap: wrap;
      .box {
        font-size: 150%;
        padding: 5px;
        margin: 5px;
        color: rgb(82, 77, 77);
        background-color: rgb(236, 182, 120);
        border-radius: 5px;
      }
    }
  }
}
</style>
