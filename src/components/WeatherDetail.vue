<template>
   <div class="weather-detail">
        <p>weather_lives: {{ weather_lives }}</p>
        <p>weather_forecasts: {{ weather_forecasts }}</p>
        <p>citycode: {{ citycode }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "weather-detail",
  props: ["citycode"],
  data () {
    return {
    }
  },
//   watch:{
//       citycode(curVal,oldVal){
//           if(curVal){
//              this.citycode=curVal;
//        }
//      },
//   },
  computed: {
      // Getting Vuex State from store/modules/weather
    ...mapState({
        weather_lives: state => state.weather.weather_lives,
        weather_forecasts: state => state.weather.weather_forecasts,
    }),
  },
  created () {
    // Getting citycode
    const citycode = this.citycode
    console.log('citycode!!!!!!')
    console.log(this.citycode);
    // Dispatching getCityWeatherLives
    this.$store.dispatch({
      type: 'getCityWeatherLives',
      citycode: this.citycode,
    }).then(res => {
      // Success handle
      console.log('10')
      console.log(this.citycode)
    });

    // Dispatching getCityWeatherForecasts
    this.$store.dispatch({
      type: 'getCityWeatherForecasts',
      citycode: this.citycode,
    }).then(res => {
      // Success handle
      console.log('11')
      console.log(this.citycode)
    })
  }
}
</script>

<style lang="scss" scoped>
// .weather-detail {
//     height: 200px;
// }
</style>