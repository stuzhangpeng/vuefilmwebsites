<template>
<nav class="navbar  navbar-fixed-bottom navbar-inverse ">
  <div class="container ">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header center-block">
      <a class="navbar-brand"   href="#">百度</a>
      <a class="navbar-brand"   href="#">google</a>
      <a class="navbar-brand"   href="#">github</a>
      <a class="navbar-brand"   href="#">意见反馈</a>
      <a class="navbar-brand"   href="#">商务合作</a>
      <a class="navbar-brand"   href="#">联系我们</a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name:"bottomnavbar"
}
</script>

<style scoped>
a.navbar-brand{
    padding-left: 50px;
    margin-right: 80px;
}
.bottom{
    position: fixed;
    bottom: 0
}
</style>