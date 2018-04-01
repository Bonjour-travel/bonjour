
<template>
    <div class="swiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in slides" :key="index"><img :src="item"></swiper-slide>
      </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
require("swiper/dist/css/swiper.css");

export default {
  name: "scroller",
  components: { swiper, swiperSlide },
  props: ["slides"],
  data() {
    return {
      // slides: [
      //   "../static/pic/bon-1.png",
      //   "../static/pic/bon-2.png",
      //   "../static/pic/bon-3.png",
      //   "../static/pic/bon-4.png",
      //   "../static/pic/bon-5.png"
      // ],
      swiperOption: {
        debugger: true,
        slidesPerView: "auto",
        centeredSlides: true,
        // spaceBetween: 0,
        roundLengths: true,
        initialSlide: 1
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.swiper {
  margin: 0 auto;
  width: 100%;
  height: 200px;
  // overflow: hidden;
  .swiper-wrapper {
    // position: relative;
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    width: 90%;
    height: 200px;
    // display: -webkit-box;
    // display: -ms-flexbox;
    // display: -webkit-flex;
    // display: flex;
    // -webkit-box-pack: center;
    // -ms-flex-pack: center;
    // -webkit-justify-content: center;
    // justify-content: center;
    // -webkit-box-align: center;
    // -ms-flex-align: center;
    // -webkit-align-items: center;
    // align-items: center;

    &.swiper-slide-active {
      img {
        margin-top: 0;
        width: 100%;
        height: 100%;
      }
    }
    img {
      display: block;
      margin: 0 auto;
      margin-top: 3.5%;
      width: 95.625%;
      height: 90.625%;
      -webkit-transition: all 1s ease 0s;
      -moz-transition: all 1s ease 0s;
      -ms-transition: all 1s ease 0s;
      -o-transition: all 1s ease 0s;
      transition: all 1s ease 0s;
    }
  }
}
</style>
