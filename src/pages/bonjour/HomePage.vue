<template>
  <div class="home-view has-header">
    <HotelDatePicker :i18n="ptBr" class="my-date-picker"></HotelDatePicker>    
    <sub-nav mold="quickNav"></sub-nav>
    <list mold="thumbnail" :items="events"></list>
    <infinite-loading @infinite="onInfinite">
      <loading slot="spinner"></loading>
    </infinite-loading>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import InfiniteLoading from 'vue-infinite-loading'
import HotelDatePicker from 'vue-hotel-datepicker'

import SubNav from '../components/db/SubNav'
import List from '../components/db/List'
import Loading from '../components/db/Loading'

export default {
  name: 'home-view',
  components: { SubNav, List, InfiniteLoading, Loading, HotelDatePicker },
  data () {
    return {
        ptBr: {
        night: 'Noite',
        nights: 'Noites',
        'day-names': ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        'check-in': '出发日期',
        'check-out': '返回日期',
        'month-names': ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      },
    }
  },
  computed: {
    // Getting Vuex State from store/modules/activities
    ...mapState({
      events: state => state.activities.events
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

<style lang="scss" scoped>
.sub-nav {
  margin: 0 1.8rem;
  padding-top: 0.2rem;
}
</style>
