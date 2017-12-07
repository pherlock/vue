<template>
  <div class="content">
  	<v-search></v-search>
    <div id="content">
      <mt-swipe :auto="3000" :show-indicators="true">
        <mt-swipe-item v-for="(item,index) in bannerlist" key="index">
          <img :src="item"/>
        </mt-swipe-item>
      </mt-swipe>
	    <v-silde_box></v-silde_box>
	    <v-lazy></v-lazy>
	    <v-time></v-time>
		<v-week></v-week>
		<v-homekind></v-homekind>
    </div>
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>

<script>
import Vue from "vue";
import SildeBox from "./SildeBox.vue";
import Lazy_Data from "./LazyData.vue";
import Time_Out from "./TimeOut.vue";
import Week_Fishion from "./WeekFishion.vue";
import Home_Kind from './HomeKind.vue';
import Search from './Search.vue';
import footerToggle from "@/md/footerToggle.js";
import MyAjax from "@/md/MyAjax.js";
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import { Actionsheet } from 'mint-ui';

Vue.component(Actionsheet.name, Actionsheet);


  export default {
    data(){
      return {
        bannerlist:[],
        actions:[
          {
            name:"拍照",
            method: this.takePhoto()
          },
          {
            name:"拍选取照",
            method: this.changePhoto()
          }
        ],
        sheetVisible:false
      }
    },
    mounted(){
      var that = this;
      footerToggle.show();
      var url = "https://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730%2C59540%2C42287";
      
      MyAjax.vueRscJsonp(url,{
       },function(data){
       	
       	var arr = [];
           console.log(data.data);
           for(var i in data.data){
						arr.push(data.data[i])           	
           }
           for(var j = 0;j< arr[4].list.length;j++){
           	that.bannerlist.push(arr[4].list[j].image)
           }
//         console.log(that.bannerlist)
        },function(err){
          console.log(err)
        })
    },
    methods:{
      takePhoto(){
        
      },
      callback(){
      }
      ,
      changePhoto(){
        
      },
      getPicture(){
        this.sheetVisible = !this.sheetVisible
      }
    },
    components:{
      'v-silde_box':SildeBox,
      'v-lazy':Lazy_Data,
      'v-time':Time_Out,
      'v-week':Week_Fishion,
      'v-homekind':Home_Kind,
      'v-search':Search,
    }
  }
</script>

<style scoped lang="scss">
@import "~@/scss/main.scss";

.mint-swipe{
  @include rect(100%,1.9rem);
  overflow:hidden;
  .mint-swipe-item{
    
    img{
       @include rect(100%,auto);
    }
  }
}

</style>