<template>
  <div class="center-block">
   <h1>{{$route.params.message}}</h1>
  </div>
</template>

<script>
export default {
   name:"info"
}
</script>

<style scoped>
 div>h1{
     margin-top: 80px;
 }
</style>