<template>
  <div class="home-container">
    <search-bar></search-bar>
    <bo-lists :lists="datas"></bo-lists>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import BoLists from '@/components/BoLists.vue'
export default {
  name:'Home',
  components:{
      SearchBar,
      BoLists,
  },
  data(){
      return{
          datas:'',
      }
  },
  created(){
      this.$store.dispatch('getListsInfo').then((datas)=>{
          this.datas = datas;
      })
  }
}
</script>

<style lang="less" scoped>
.home-container{
    background-attachment: fixed;
    background-color: aliceblue;
}
</style>
