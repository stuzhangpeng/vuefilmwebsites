<template>
<div class="videobox center-block  " ref="dd">
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
  <div v-if="loaded">
    <p>{{videodata.videoTittle}}</p>
  </div>
   <div id="video" v-if="flag"> 
   </div>
   <video class="videocontainer"  v-else  
    controls="controls"  ref="video" autoplay="autoplay"
    loop="loop"
    :poster="videodata.imageurl"
    x-webkit-airplay="true" x5-video-player-fullscreen="true"
    playsinline="true" webkit-playsinline
    x5-video-player-typ="h5">
    <source type="application/x-mpegURL" :src="videodata.playUrl">
   </video>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ckplayerplugin",
  data() {
    return {
      seektime:0,
      flag:true,
      videodata: null,
      loaded:false
    };
  },
  created(){
     
    axios({
      url: "http://192.168.0.109/video/"+this.$route.query.vid,
      method:"get"
        }).then(res => {
          this.videodata=res.data.data;
          this.loaded=true;
          if(this.videodata.playUrl.indexOf("fc.aa1805.com")!=-1){
               this.flag=false;
          }else{
              var videoObject = {
              container: "#video", //“#”代表容器的ID，“.”或“”代表容器的class
              variable: "player", //播放函数名称，该属性必需设置，值等于下面的new ckplayer()的对象
              volume: 1, //音量，范围：0-1
              poster: this.videodata.imageurl,
              autoplay: true, //是否自动播放
              loop: true, //是否需要循环播放
              seek: 110,
              html5m3u8: true,
              mobileAutoFull: true,
              overspread:true,
              preview: null,
          /* loaded:'loadedHandler', */
            video: this.videodata.playUrl
          };
         var player = new ckplayer(videoObject);
          }
          
     /*  function loadedHandler(name){
        //调用到该函数后说明播放器已加载成功，可以进行部分控制了
        console.log("loaded");
	      player.addListener('time', timeHandler); //监听元数据
        };
     function timeHandler(time,name){
	   //监听到元数据信息
	    console.log('播放时间：'+time);
      }  */
      })
        
   },
   updated() {
       if(localStorage.getItem(this.videodata.vid)!=null){
                 console.log(111);
                 this.seektime=localStorage.getItem(this.videodata.vid);
                 this.$refs.video.currentTime=this.seektime;
               };
   },
   beforeRouteLeave (to, from, next) {
     //保存播放时间
     localStorage.setItem(this.videodata.vid,this.$refs.video.currentTime);
     next();
  }
}
</script>
<style scoped>
.videobox {
  margin-top: 70px;
  width: 800px;
}

img{
  width: 590px;
  height:400px;
}
#video{
   width: 100%;
   height: 600px;
   margin-bottom: 50px;
}
div.media{
  width: 800px;
  margin-bottom: 20px;
}
@media screen and (max-width: 767px) {
  .videobox {
  margin-top: 70px;
  margin-bottom: 0px;
  width: 100%;
}
img{
  width: 180px;
  height:128px;
}
#video{
   width: 100%;
}
div.media{
  width: 100%;
  margin-bottom: 20px;
}
video.videocontainer{
   width: 100%;
   margin-bottom: 0px;

}
}

</style>