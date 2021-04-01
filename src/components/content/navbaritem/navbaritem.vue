<template>
<li @click="itemClick">
    <slot></slot>
</li>
</template>
<script>
export default {
   name:"navbaritem",
   methods:{
       itemClick(){
           this.$router.push(this.path)  //进行路由跳转
       }

   },
   props:{
       path:String
   }
}
</script>

<style scoped>

</style>