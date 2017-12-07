<template>
  <div class="content">
    <header>
      我的头部
    </header>
    <div id="content">
      我的内容
    </div>
  </div>
</template>

<script>
   import footerToggle from "@/md/footerToggle.js"
  export default {
    data(){
      return {
        
      }
    },
    mounted(){
      footerToggle.show();
    },
    methods:{
      
    },
    components:{
      
    }
  }
</script>

<style>
</style>