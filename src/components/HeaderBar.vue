<template>
  <div class="header-bar">
    <h1 class="title">
      <router-link :to="{ name: 'HomeView'}">
        豆瓣
      </router-link>
    </h1>
    <ul class="nav">
      <!-- <li>
        <router-link style="color: #2384E8" :to="{ name: 'MovieView'}">
          电影
        </router-link>
      </li>
      <li>
        <router-link style="color: #9F7860" :to="{ name: 'BookView'}">
          图书
        </router-link>
      </li>
      <li>
        <router-link style="color: #E4A813" :to="{ name: 'StatusView'}">
          广播
        </router-link>
      </li>
      <li>
        <router-link style="color: #2AB8CC" :to="{ name: 'GroupView'}">
          小组
        </router-link>
      </li> -->
    </ul>
    <ul class="nav">
      <li class="talion" @click="showTalion"></li>
      <li class="place-icon"></li>
    </ul>
    <span class="place-text">{{curCity}}</span>
  </div>
</template>

<script>
export default {
  name: 'header-bar',
  data () {
    return {
      curCity : '正在定位'
    }
  },
  methods: {
    showTalion: function () {
      this.$emit('showTalion')
    }
  },
  created(){
    console.log(returnCitySN["cip"] + ',' + returnCitySN["cname"])
    this.curCity = returnCitySN["cname"].split('省')[1];
  }
}
</script>

<style lang="scss" scoped>
.header-bar {
  background-color:#F6F6F6;
  .title {
    flex: 1;
    max-width: 7.6rem;
    max-height: 2.2rem;
    margin-right: 1.8rem;
    font-size: 0;
    line-height: 3.2rem;
    color: #00b600;
    word-break: break-all;
    background: url('../assets/bonjour.png');
    background-size: cover;

    a {
      display: block;
    }
  }

  ul {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }

  li {
    display: inline-block;
    font-size: 1.6rem;
    margin-right: 1.2rem;
  }

  .talion {
    font-size: 0;
    background: url('../assets/search.png');
    background-size: cover;
    width: 2rem;
    height: 2rem;
    margin-top: 0.4rem;
  }
  .place-icon {
    font-size: 0;
    background: url('../assets/place.png');
    background-size: cover;
    width: 2rem;
    height: 2rem;
    margin-top: 0.4rem;
  }
  .place-text {
    margin-left: -0.5rem;
    font-size: 140%;
  }
}
</style>
