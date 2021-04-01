<template>
  <div class="container">
    
    <form class="form-horizontal" action="" method="post">
      <!-- 用户名 -->
      <div class="form-group">
        <div class="col-lg-offset-4 col-lg-4">
          <input
            v-model="username"
            type="text"
            class="form-control"
            name="username"
            id="inputusername"
            placeholder="用户名"
          />
        </div>
      </div>
      <!-- 密码 -->
      <div class="form-group">
        <div class="col-lg-offset-4 col-lg-4">
          <input
            type="password"
            v-model="password"
            name="password"
            class="form-control"
            id="inputpassword"
            placeholder="密码"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="col-lg-offset-4 col-lg-4"><span style="color:red">{{errorMessage}}</span></div>
      </div>
      <!-- 登录 -->
       <div class="text-center"><button @click.prevent="submitForm">登录</button></div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: null,
      password: null,
      errorMessage:null
    };
  },
  methods: {
    //表单提交
    submitForm() {
      axios({
        url: "http://192.168.0.109/login",
        method: "post",
        params: {
          username: this.username,
          password: this.password
        },
      }).then((result) => {
         if(result.data.code=="200"){
           //保存用户信息
           this.$store.commit("putUser",result.data.data);
           //跳转到首页
           this.$router.push("/index"); 
         }else{
           //提示错误信息
           this.errorMessage=result.data.message
         }
      });
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 120px;
  background-color: whitesmoke;
}
div.form-group{
  margin-bottom: 10px;
}
form div>button{
  color: black;
  font-size: 18px;
  background-color: #007bff;
  width:360px ;
  height:36px;
}
div.btngroup{
  padding-left: 0px;
  padding-right: 0px;
  position: relative;
  left: 10px;
}
  div.btngroup button{
  color: black;
  font-size: 18px;
  background-color: #007bff;
  /* width:180px ; */
  height:36px;
}

</style>