<template>
  <div class="search-bar">
      <div class="search-icon"></div>
      <input class="search-input" type="text" placeholder="Welcome to Bonjour!">
  </div>
</template>

<script>
import Vue from 'Vue';
import {Input} from 'element-ui';
Vue.use(Input);
export default {
  name:'SearchBar'
}
</script>
<style lang='less'>
.search-bar{
    width:100%;
    padding:2rem 1rem;
    display: flex;
    justify-content:flex-start;
    flex-wrap: wrap;
    // bg-color不支持size?
    // background: linear-gradient(45deg, red, blue) 0 0 no-repeat;
    // background-size:100% 40%;
    .search-icon{
        background:url(../assets/search.png) 5px 5px no-repeat;
        height:40px;
        width:10%;
        margin-right:10px;
    }
    .search-input{
        border:1px solid gainsboro;
        border-top:none;
        padding:0.5rem 0rem 0.5rem 1rem;
        width:70%;
        height:30px;
        border-radius:20px;
        box-shadow:3px 3px 3px gainsboro;
        font-size:180%;
        //取消input点击后的高亮边框
        outline:none;
    }
}
</style>
