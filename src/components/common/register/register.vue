<template>
  <div class="container">
    <form
      class="form-horizontal"
      action="/register"
      method="post"
      enctype="multipart/form-data"
    >
      <!-- 用户名 -->
      <div class="form-group">
        <div class="col-lg-offset-4 col-lg-4">
          <input
            type="text"
            v-model="username"
            class="form-control"
            id="inputusername"
            name="username"
            placeholder="用户名"
          />
        </div>
      </div>
      <!-- 密码 -->
      <div class="form-group">
        <div class="col-lg-offset-4 col-lg-4">
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="inputpassword"
            placeholder="密码"
            name="password"
          />
        </div>
      </div>
      <!-- 邮箱 -->
      <div class="form-group">
        <div class="col-lg-offset-4 col-lg-4">
          <input
            type="email"
            v-model="email"
            name="email"
            class="form-control"
            id="inputEmail"
            placeholder="邮箱"
          />
        </div>
      </div>
       <!--性别-->
      <div class="form-group" >
          <div  >
         <label class="radio-inline col-lg-offset-4 col-lg-4">
          <input  v-model="gender" type="radio" name="gender" id="inlineRadio1" value="男"> 男
        </label>
        <label class="radio-inline">
          <input type="radio" v-model="gender" name="gender" id="inlineRadio2" value="女"> 女
        </label>
          </div>
      </div>
      <!-- 提交 -->
      <div class="form-group">
        <div class="col-lg-offset-4 col-lg-3">
          <button type="button" @click.prevent="submitForm" class="btn btn-default">注册</button>
        </div>
      </div>
       <div class="form-group">
        <div class="col-lg-offset-4 col-lg-4"><span style="color:red">{{errorMessage}}</span></div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
     name:"register",
     data(){
          return{
             username:null,
             password:null,
             email:null,
             errorMessage:null,
             gender:null
          }
     },
     methods:{
         //表单提交
         submitForm(){
          axios({
          url: "http://192.168.0.109/register",
          method: "post",
          withCredentials: true,
         params: {
          username: this.username,
          password: this.password,
          email:this.email,
          gender:this.gender
        },
      }).then((result) => {
         if(result.data.code=="200"){
           //跳转到信息提示页面，提示邮箱激活
           this.$router.push("/info/"+result.data.message); 
         }else{
           //提示错误信息
           this.errorMessage=result.data.message
         }
      })
    },
         }
     }
</script>

<style scoped>
.container {
  margin-top: 120px;
}
div.form-group{
  margin-bottom: 10px;
}
div>button{
  color: black;
  font-size: 18px;
  background-color: #007bff;
  width:360px ;
  height:36px;
}
</style>