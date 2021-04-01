<template>
  <div id="app">
    <!-- 头部导航栏 -->
    <navbar>
      <navbaritem path="/index"><a href="javascript:void(0)">index</a></navbaritem>
      <navbaritem path="/image" ><a href="javascript:void(0)">image</a></navbaritem>
      <navbaritem path="/userhome"><a href="javascript:void(0)" >userhome</a></navbaritem>
    </navbar>
    <!--组件-->
    <router-view :key="$router.currentRoute.fullPath"></router-view> 
    <!-- 底部导航栏 -->
    <!-- <bottomnavbar></bottomnavbar> -->
  </div>
</template>
    
<script>
import navbar from 'components/content/navbar/navbar.vue'
import bottomnavbar from 'components/content/bottomnavbar/bottomnavbar.vue'
import navbaritem from 'components/content/navbaritem/navbaritem.vue'
export default {
  name: 'App',
  components: {
   navbar,
   navbaritem,
   bottomnavbar
  }

}
</script>
    
<style >
#app {
  color: black;
  font-size: 20px;
}
</style>
