<template>
   <div class="container">
    <!-- 用户信息 -->
    <div class="media " v-if="loaded">
     <div class="media-left">
    <a href="#">
      <img class="media-object " :src="videodata.imageurl" v-if="loaded" >
    </a>
  </div>
  <div class="media-body">
   <!--  <h2 class="media-heading">{{videodata.videoTittle}}</h2> -->
    <h3 class="media-heading">{{videodata.size}}</h3>
    <h3>{{videodata.category}}</h3>
    <h3>{{videodata.createDate}}</h3>
  </div>
    </div>
    <!-- 收藏列表，播放历史 -->
   <productList v-bind:productArray="videoList" ></productList>
   </div>
</template>
<script>
import productList from 'components/content/productlist/productlist.vue'
import axios from 'axios'
   export default{
    name:"index",
    data(){
      return {
        //轮播图数据
        result:null,
        videoList:null
      }
    },
    components:{
         rotationchart,
         productList
    },
    created() {
      //发送网络请求获取首页数据
      axios({
      url: "http://192.168.0.109/indexPage",
      method:"get",
      params: {
          category: "censored",
          type:"uncensored",
          page:1,
          pagesize:48
        },
        }).then(res => {
        this.result= res.data.data.rotationCharts;
        this.videoList=res.data.data.list;
      })
    }

   }
   

</script>

<style scoped>
 div.container{
   padding-left: 0px;
   padding-right: 0px;
 }
 </style>