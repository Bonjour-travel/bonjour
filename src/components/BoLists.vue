<template>
  <div class="bo-lists">
    <div class="list-box" v-for="list in lists">
      <div class="list-pic" :style="{backgroundImage:'url('+list.pic+')'}">
        <div class="list-cover">
          {{list.desc}}
        </div>
      </div>
      <div class="list-info">
        <div class="list-left">{{list.title}}</div>
        <div class="list-right">
          <div class="list-tag" v-for="tag in list.tags">
            {{tag}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'BoLists',
  props:['lists'],
  data(){
    return{
      color:['rgb(94, 174, 240)','rgb(222, 224, 97)','rgb(33, 83, 38)','rgb(204, 82, 44)']
    }
  },
  computed:{
    randomColor(){
      let index = Math.floor(Math.random() * this.color.length)
      console.log(index)
      return this.color[index];
    }
  }
}
</script>

<style lang="scss" scoped>
.bo-lists{
  display: flex;
  flex-wrap: wrap;
  .list-box{
    height:200px;
    width:80%;
    margin:5px auto;
    .list-pic{
      height:150px;
      border-radius: 15px;
      background-size: cover;
      display: flex;
      align-items: flex-end;
      box-shadow:1px 3px 20px;
      .list-cover{
        color:#fff;
        height:30px;
        line-height: 30px;
        font-size:120%;
        padding:0 10px;
        background-color:rgba(0, 0, 0, 0.473);
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        width:100%;
      }
    }
    .list-info{
      height:50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      .list-left{
        margin-left:10px;
        font-size: 180%;
        text-shadow: 5px 5px 5px silver;
      }
      .list-right{
        display: flex;
        align-items: center;
        .list-tag{
          font-size:120%;
          line-height: 20px;
          height:20px;
          padding: 0 5px;
          margin:0 2px;
          border-radius: 8px;
          color:aliceblue;
          box-shadow:1px 1px 5px #000;
          background-color:rgb(204, 82, 44);          
        }
      }
    }
  }

}
</style>
