<template>
  <div class="home-container">
    <search-bar></search-bar>
    <!-- 为请求到数据之前不渲染 bo-lists组件 -->
    <bo-lists v-if="homeLists.length" :lists="homeLists"></bo-lists>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import BoLists from '@/components/BoLists.vue'
import {mapState} from 'vuex'

export default {
  name:'Home',
  components:{
      SearchBar,
      BoLists,
  },
  data(){
      return{
          datas:[],
      }
  },
  methods:{

  },
  watch:{

  },
  computed:{
      ...mapState({
          homeLists:state=>state.listsStore.lists
      })
  },
  created(){
      this.$store.dispatch('getListsInfo')
  }
}
</script>

<style lang="scss" scoped>
.home-container{
    background-attachment: fixed;
    // background-color: aliceblue;
}
</style>
