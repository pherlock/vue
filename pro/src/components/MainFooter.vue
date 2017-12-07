<template>
  <ul>
  	<router-link :to = "item.path" v-for = "(item, index) in list" :key = "index" tag="li">
  	  <p class="iconfont" :class="item.icon"></p>
  	  <p>{{item.name}}</p>
  	</router-link>
  </ul>
</template>

<script>
  export default {
    data(){
      return {
        list:[
           {
            icon:"icon-shouye",
            name:"首页",
            path:"/home"
          },
          {
            icon:"icon-fenlei",
            name:"分类",
             path:"/kind"
          },
          {
            icon:"icon-gouwuche",
            name:"购物车",
             path:"/cart"
          },
          {
            icon:"icon-wo10",
            name:"我",
             path:"/user"
          }
        ]
      }
    },
    mounted(){
      
    },
    methods:{
      
    },
    components:{
      
    }
  }
</script>

<style scoped lang="scss">
@import "~@/scss/main";

ul{
  @include rect(100%, 100%);
  @include flexbox();
  li{
    @include flex(1);
    @include align-items();
    @include justify-content();
    @include flexbox();
    @include flex-direction(column);
    @include textcolor(#999);
    p{
      &:nth-child(1){
         @include fontsize(0.22rem); 
         font-weight:300;
      }
      &:nth-child(2){
         font-weight:300;
        @include fontsize(0.12rem);
      }
    }
    
    &.router-link-active{
      @include textcolor(#f36);
    }
  }
}
</style>