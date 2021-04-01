/* 轮播图组件 */
<template>
  <div class="container ">
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>
        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
            <div  v-for=" (items,index) in arrayResult" :class="{item:isItem,active:!index}"">
                <img :src="items.url" class="img-responsive" alt="...">
                <div class="carousel-caption">
                    ...
                </div>
            </div>
        </div>
        <!-- Controls -->
        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>
</template>
<script>
export default {
   name:"rotationchart",
   data(){
      return{
        isItem:true,
        isActive:true
       }
   },
   props:{
       arrayResult:{
           type:Array,
           default:null
       }
   }
}
</script>

<style scoped>
   div.container{
      margin-top:50px;
      padding-left: 0px;
      padding-right: 0px;
}
</style>