<template>
  <div class="show-list">
      <div v-for="(list,i) in lists" :key="i" class="list-item">
          <div class="list-item-img" :style="{backgroundImage:picUrl[i]}"></div>
          <div class="list-item-title">{{list.title}}</div>
          <div class="list-item-tags">
              <div class="tag" v-for="(tag,i) in list.tags" :key="i">{{tag}}</div>
          </div>
      </div>
  </div>
</template>
<style scoped>
.show-list{
    display:flex;
    justify-content:flex-start;
    flex-wrap: wrap;
    margin: 1rem 0;
}
.list-item{
    /* background-color: green; */
    width:50%;
    height:15rem;
    padding:1rem;
    box-sizing: border-box;
    border-top:1px solid rgb(219, 214, 214)

}
.list-item-img{
    background-size:cover;
    height:10rem;
}
.list-item-title{
    font-size: 160%;
    margin:0.2rem;
}
.list-item-tags{
    margin-top:0.5rem;
}
.list-item-tags .tag{
    background-color:rgb(197, 203, 206);
    margin:0.2rem;
    border-radius: 1rem;
    padding: 0.1rem 0.4rem;
    display: inline;
}
</style>

<script>
export default {
  data(){
      return{
          picUrl: [
              "url("+ require('../assets/pic/bon-1.png')+ ")",
              "url("+ require('../assets/pic/bon-2.png')+ ")",
              "url("+ require('../assets/pic/bon-3.png')+ ")",
              "url("+ require('../assets/pic/bon-4.png')+ ")",
              "url("+ require('../assets/pic/bon-5.png')+ ")",
              "url("+ require('../assets/pic/bon-6.png')+ ")",
          ],
          lists:[
              {
                title:'最美夜空', 
                text:'这真是美丽啊',
                tags:['民宿','星空']
              },
              {
                title:'最美夜空', 
                text:'这真是美丽啊',
                tags:['民宿','奇妙玄石']
              },
              {
                title:'最美夜空', 
                text:'这真是美丽啊',
                tags:['民宿','星空','跳伞','蹦极']
              },
              {
                title:'最美夜空', 
                text:'这真是美丽啊',
                tags:['民宿','星空']
              },
              {
                title:'最美夜空', 
                text:'这真是美丽啊',
                tags:['民宿','星空']
              },
              {
                title:'最美夜空', 
                text:'这真是美丽啊',
                tags:['民宿','星空']
              },
          ]
      }
  }
}
</script>
