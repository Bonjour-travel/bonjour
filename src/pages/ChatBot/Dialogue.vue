<template>
  <div>
    <mu-list class="wrap" v-for="(item, index) in nowMessageList" :key="index">
      <mu-list-item :disableRipple="true">
        <mu-avatar :src="item.id===1?userData.user.avatar:userData.bot.avatar"
                   :slot="item.id===1?'rightAvatar':'leftAvatar'" />
        <span :slot="item.id===1?'after':'title'">
            <span class="content" style="color: rgba(0, 0, 0, .9)">{{item.message}}</span>
        </span>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "dialogue",
  props: ["userData"],
  computed: {
    ...mapGetters(["nowMessageList"]),
    updated() {
      this.$emit("scrollC");
    }
  }
};
</script>

<style lang="less" scoped>
.wrap {
  margin-top: 10px;
  font-size: 16px;
  background-color: #f4f4f6;
  .content {
    display: inline-block;
    padding: 5px;
    background: #fff;
  }
}
</style>
