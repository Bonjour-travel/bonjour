<template>
  <div class="bo-footer">
    <div class="footer-nav">
      <div class="box" v-for="nav in navLists">{{nav.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLists: [
        {
          title: "首页",
          path: "??",
          active: true
        },
        {
          title: "玩法",
          path: "??"
        },
        {
          title: "出行",
          path: "??"
        },
        {
          title: "我的",
          path: "??"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.bo-footer {
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.623);
  // border: 1px solid black;
  .footer-nav {
    font-size: 150%;
    display: flex;
    color: #fff;
    .box {
      width: 25%;
      line-height: 50px;
      padding-left: 2.5rem;
    }
    .active {
      background-color: gainsboro;
    }
  }
}
</style>
