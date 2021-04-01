<template>
   <div class="productlist">
    <div class="row categorylist"  v-for="categorylist in productArray" >
      <!-- 内容标题 -->
        <div class="videotittle">
        <div class="video-title col-lg-2 col-md-3 col-sm-4 col-xs-5">
          <strong class="text-title">{{categorylist|getCategory}}</strong>
        </div>
        <div class="col-lg-2 col-lg-offset-8 col-md-3 col-md-offset-6 col-sm-4 col-sm-offset-4 col-xs-5 col-xs-offset-2">
         <div class="text-right hidden-xs">
          <a href="#" @click.prevent="listmore(categorylist)" class="btn btn-primary btn-sm btn-title">
            <span class="glyphicon glyphicon-plus">More&thinsp;Videos</span>
          </a>
        </div>
        <div class="text-right visible-xs">
          <a href="#"  @click.prevent="listmore(categorylist)" class="btn btn-primary btn-xs btn-title"
            >
            <span class="glyphicon glyphicon-plus">More&thinsp;Videos</span></a>
        </div>
        </div>
        </div>
      <!-- 一个listitem -->
      <div v-for="item in categorylist"  class="col-lg-3 col-md-3 col-sm-4 col-xs-12 video-item">
        <!-- well -->
        <div class="well well-sm well1">
          <!-- 视频连接 -->
          <div  @click="gotoPlay(item)">
            <!-- 视频缩略图 -->
            <div class="thumbnail">
              <img
                :src="item.imageurl"
                class="img-responsive center-block"
                alt=""
              />
            </div>
            <!-- 视频标题 -->
            <span class="videos-titile">{{item.videoTittle}}</span>
          </div>
        </div>
      </div>
    </div>
   </div> 
</template>

<script>
import axios from "axios";
export default {
   data() {
     return {
       category:""
     }
   },
   filters:{
     getCategory(list){
         if(list.length>0){
            return list[0].category;
         }
     }
  },
   methods: {
     gotoPlay(items){
       this.$router.push({path:"/playVideo",query:{vid:items.vid}}); 
     },
     listmore(category){
       if(category.length>0){
         this.$router.push({path:"/listmore",query:{category:category[0].category,page:1}}); 
       }
     }
   },
   name:"productlist",
   props:{
       productArray:{
           type:Array,
           default:null
       }
   }
}
</script>

<style scoped>
/* .categorylist{
  margin-bottom: 20px;
} */
.videotittle{
  margin-bottom:30px ;
}
.video-item{
  height: 350px;
}
.productlist{
  margin-top: 20px;
}

 p{
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
 -webkit-line-clamp: 2;
 -webkit-box-orient: vertical;
}
</style>