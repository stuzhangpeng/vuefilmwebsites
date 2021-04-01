<template>
   <div class="container">
   <rotationchart v-bind:arrayResult="result"></rotationchart>
   <productList v-bind:productArray="videoList" > </productList>
   </div>
</template>
<script>
import rotationchart from 'components/common/RotationChart/rotationchart.vue'
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