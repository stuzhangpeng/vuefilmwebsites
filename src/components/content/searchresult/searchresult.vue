<template>
  <div class="container">
    <div class="row" >
      <!-- 一个listitem -->
      <div v-for="item in datalist"  class="col-lg-3 col-md-3 col-sm-4 col-xs-12 video-item">
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
               <!-- 视频标题 -->
            <!-- <div class="videos-titile"> -->
            <p >{{item.videoTittle}}</p>
            <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
        <!-- 分页 -->
    <div class="text-center">
    <nav aria-label="Page navigation text-center " v-if="isReturn">
     <ul class="pagination pagination-lg ">
        <li>
         <a href="#" @click.prevent="getPage(1)">首页</a> 
        </li>  
        <li v-if="isShowPrivious">
        <a href="#" @click.prevent="privious" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        </a>
       </li>
       <!-- 当前页 -->
    <li class="disabled"><a>{{curpage}}</a></li>
    <!-- 下一页 -->
    <li v-if="isShowNext">
      <a href="#"@click.prevent="next" aria-label="Next" >
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
        <li>
        <a href="#" @click.prevent="getPage(totalpage)">尾页</a> 
        </li> 
         <li class="disabled"><a>总共:{{totalpage}}页</a></li> 
     </ul>
    <!-- 分页 -->
   </nav>
    </div>
  </div> 
</template>

<script>
import axios from "axios";
export default {
  name: "searchresult",
  data() {
    return {
      pagenumber:0,
      totalpage: 0,
      curpage: 0,
      datalist: null,
      isShowPrivious: false,
      isShowNext: false,
      keyword: null,
      isReturn:false
    };
  },
  methods: {
     gotoPlay(items){
       this.$router.push({path:"/playVideo",query:{vid:items.vid}}); 
     },
    countResiduePage() {
      this.curpage < this.totalpage
        ? (this.isShowNext = true)
        : (this.isShowNext = false);
      return this.isShowNext;
    },
    countLoadPage() {
      if (this.curpage > 1) {
        this.isShowPrivious = true;
      } else {
        this.isShowPrivious = false;
      }
      return this.isShowPrivious;
    },
    next() {
      if (this.isShowNext) {
        //请求下一页数据
        this.getPage(this.curpage+1);
      }
    },
    privious() {
      console.log(111)
      if (this.isShowPrivious) {
       console.log(222);
        //请求前一页数据
        this.getPage(this.curpage-1);
      }
    },
    getPage(page) {
         this.$router.push({path:"/searchvideo",query:{keyword:this.keyword,page:page}});
    },
  },
  created() {
    this.pagenumber=this.$route.query.page;
    this.keyword = this.$route.query.keyword;
    axios({
      url: "http://192.168.0.109/videos/keyword",
      method: "get",
      params: {
        keyword: this.keyword,
        page: this.pagenumber,
        pagesize: 48
      },
    }).then((res) => {
      this.datalist = res.data.data.mapList;
      this.totalpage = res.data.data.totalpage;
      this.curpage = res.data.data.curpage;
      this.countResiduePage();
      this.countLoadPage();
      console.log(this.isShowNext)
      console.log(this.isShowPrivious)
      this.isReturn=true;
    });
  },
};
</script>

<style scoped>
.container {
  margin-top: 50px;
  margin-bottom: 55px;
}
img {
  height: 250px;
  width: 100%;
}
.well {
  height: 100%;
} 
 p{
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
 -webkit-line-clamp: 2;
 -webkit-box-orient: vertical;
}
div.text-center{
  margin-top:0px ;
}
div.container{
  padding-left: 0px;
  padding-right: 0px;
}
</style>