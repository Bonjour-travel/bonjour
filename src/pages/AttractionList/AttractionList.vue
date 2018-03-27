<template>
  <div class="home-container">
    <list mold="thumbnail" :items="attractions"></list>
    <infinite-loading @infinite="onInfinite">
        <loading slot="spinner"></loading>
    </infinite-loading>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'
import List from '@/components/List'
import Loading from '@/components/Loading'

export default {
  name: 'AttractionList',
  components: { List, InfiniteLoading, Loading },
  data () {
    return {
      
    }
  },
  computed: {
    // Getting Vuex State from store/modules/attraction
    ...mapState({
      attractions: state => state.attraction.attractions
    })
  },
  methods: {
    // Using vue-infinite-loading
    onInfinite ($state) {
      setTimeout(() => {
        this.loadMore().then((res)=>{
         $state.loaded();
        })
        //无限加载的延迟时间
      }, 100)
    },
    // Dispatching Actions
    ...mapActions([
      'loadMore'
    ])
  }
}
</script>

<style lang="less" scoped>
.home-container{
    background-attachment: fixed;
    // background-color: aliceblue;
}
.sub-nav {
  margin: 0 1.8rem;
  padding-top: 0.2rem;
}
</style>
