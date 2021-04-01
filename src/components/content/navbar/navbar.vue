// 导航条
<template>
 <nav class="nav navbar-inverse navbar-fixed-top">
    <div class="container ">
        <div class="navbar-header">
          
            <!--在移动端的时候导航条折叠起来，三横的样式出现，点击该样式可以显示或隐藏导航条上的内容-->
            <button class="navbar-toggle" data-toggle="collapse" data-target="#menu">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#" >
            <img src="~assets/img/logo.png" alt="icon" style="height: 20px" />
          </a>
              <!-- 搜索框 -->
                  <form class="navbar-form pull-right visible-xs ">
                     <div class="form-group">
                        <input type="text" v-model="keyword"   @keydown.13.prevent="search"  class="form-control" placeholder="Search">
                     </div>
                  </form>
        </div>
        <div id="menu" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <slot></slot>
               
                <!--下拉菜单功能的实现-->
                <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    category
                    <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a href="#" @click.prevent="listmore('censored')">censored</a></li>
                    <li><a href="#" @click.prevent="listmore('self-photo')">self-photo</a></li>
                    <li><a href="#" @click.prevent="listmore('uncensored')">uncensored</a></li>
                    <li><a href="#" @click.prevent="listmore('censored-chinese')">censored-chinese</a></li>
                </ul>
                </li>
                <li>
                   <!-- 搜索框 -->
                  <form class="navbar-form pull-right hidden-xs ">
                      <div class="input-group input-group-sm">
                       <input type="text" class="form-control" v-model="keyword"   @keydown.13.prevent="search">

                          <span class="input-group-btn">
                            <button class="btn btn-primary" @click.prevent="search" type="button">search</button>
                          </span>
                     </div>
                  </form>   
                </li>
            </ul>
            <ul class="nav navbar-nav  pull-right hidden-xs hidden-sm">
            <li>
               <router-link to="/login">{{datacontent}}</router-link>
            </li>
            <li>
              <router-link to="/register">{{messagecontent}}</router-link>
            </li>
            </ul>
           <ul class="nav navbar-nav  visible-xs">
            <li>
               <router-link to="/login">{{datacontent}}</router-link>
            </li>
            <li>
              <router-link to="/register">{{messagecontent}}</router-link>
            </li>
          </ul>
        </div>
    </div>
</nav>

</template>

<script>
export default {
  name: "navbar",
  data(){
    return {
      messagecontent:"register",
      datacontent:"login",
      keyword:null
    }

  },
  methods: {
    search(){
      if(this.keyword!=null&&this.keyword!=""){
          this.$router.push({path:"/searchvideo",query:{keyword:this.keyword,page:1}});
      }
    },
    listmore(category){
       if(category!=null&&category!=""){
         this.$router.push({path:"/listmore",query:{category:category,page:1}}); 
       }
     }
  },
  created(){
    if(this.$store.state.username!=null){
        console.log(222222);
    }
  }
}
</script>
<style scoped>
div.container{
  padding-left: 0px;
  padding-right: 0px;
}
form.navbar-form.visible-xs{
    float: left;
    box-shadow: none;
    border: none;
}
#navbar {
  color: red;
  display: flex;
  font-size: 20px;
}
strong.text-title {
  font-size: larger;
  line-height: 50px;
}

a.btn-title {
  margin-top: 30px;
}

div.nav-footer {
  margin-bottom: 20px;
}

a.text-left {
  margin-bottom: 15px;
}

div.container-content {
  margin-top: 25px;
  margin-bottom: 25px;
}

body.mobile-body {
  background-color: rgb(236, 236, 236);
}

button.category-btn {
  margin-bottom: 5px;
  margin-right: 2px;
}

a.btn-searchkey {
  margin-bottom: 5px;
  margin-right: 2px;
}

div.thumbnail {
  padding: 0px;
  position: relative;
}

div.well1 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

div.has-feedback {
  position: relative;
}

@media screen and (max-width: 768px) {
  div.btn-searchxs {
    margin-left: 90px;
  }

  /* 搜索框图标定位 */
  span.formfeedback-xs {
    position: absolute;
    left: 180px;
  }

  body.mobile-body {
    padding-top: 61px;
  }

  div.video-type {
    position: absolute;
    left: 285px;
    top: 3.36667px;
    background-color: orange;
    color: black;
  }

  div.video-time {
    position: absolute;
    left: 251px;
    top: 143px;
    background-color: rgba(0, 0, 0, 0.726);
    color: rgb(255, 255, 255);
  }

  input.mobile-searchform {
    width: 120px !important;
  }
}

@media screen and (min-width: 768px) {
  /* 搜索框图标定位 */
  span.form-control-feedback {
    position: absolute;
    left: 112px;
  }

  body.mobile-body {
    padding-top: 51px;
  }

  div.video-type {
    position: absolute;
    left: 174px;
    top: 2.36667px;
    background-color: rgb(255, 123, 0);
    color: black;
  }

  div.video-time {
    position: absolute;
    left: 137px;
    top: 89px;
    background-color: rgba(0, 0, 0, 0.726);
    color: rgb(255, 255, 255);
  }
}

@media screen and (min-width: 992px) {
  div.video-type {
    position: absolute;
    left: 170.5px;
    top: 4px;
    background-color: rgb(255, 123, 0);
    color: black;
  }

  div.video-time {
    position: absolute;
    left: 135px;
    top: 87px;
    background-color: rgba(0, 0, 0, 0.726);
    color: rgb(255, 255, 255);
  }
}

.navbar-header .navbar-form {
  padding-top: 2px;
}

@media screen and (min-width: 1200px) {
  div.navbar-container {
    padding-left: 50px;
    padding-right: 50px;
  }

  div.video-type {
    position: absolute;
    left: 219.5px;
    top: 4px;
    background-color: rgb(255, 123, 0);
    color: black;
  }

  div.video-time {
    position: absolute;
    left: 184.5px;
    top: 109.267px;
    background-color: rgba(0, 0, 0, 1);
    color: rgb(255, 251, 240);
  }
}

.video-title {
  padding-top: 15px;
  padding-left: 10px;
  font-size: 20px;
}

form.mobileform {
  width: 140px;
}

@media screen and (max-width: 1200px) {
  div.mobile-container {
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>