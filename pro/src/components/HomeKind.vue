<template>
  <div>
<mt-navbar class="hometitle" v-model="selected" >
  <mt-tab-item id="1" @click="changetab()">流行</mt-tab-item>
  <mt-tab-item id="2" @click="changetab()">精选</mt-tab-item>
  <mt-tab-item id="3" @click="changetab()">新款</mt-tab-item>
</mt-navbar>

 <!--tab-container--> 
<mt-tab-container  v-model="selected"> 
	<mt-tab-container-item id="1">
	  <ul v-infinite-scroll="loadMore1" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
		  <li v-for="item in list1">
		  	<a href="">
		  	<img :src="item.show.img" style="width:95%"/>
		  	<p class="title">{{item.title}}</p>
		  	<p class="price"><span>{{item.price}}</span><span><span class="star">☆</span>{{item.cfav}}</span></p>
		  	</a>
		  </li>
		</ul>
	</mt-tab-container-item>
  <mt-tab-container-item id="2">
    <ul v-infinite-scroll="loadMore2" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
		  <li v-for="item in list2">
		  	<a href="">
		  	<img :src="item.show.img" style="width:95%"/>
		  	<p class="title">{{item.title}}</p>
		  	<p class="price"><span>{{item.price}}</span><span><span class="star">☆</span>{{item.cfav}}</span></p>
		  	</a>
		  </li>
		</ul> 
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <ul v-infinite-scroll="loadMore3" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
		  <li v-for="item in list3">
		  	<a href="">
		  	<img :src="item.show.img" style="width:95%"/>
		  	<p class="title">{{item.title}}</p>
		  	<p class="price"><span>{{item.price}}</span><span><span class="star">☆</span>{{item.cfav}}</span></p>
		  	</a>
		  </li>
		</ul>  
  </mt-tab-container-item>
</mt-tab-container>
  </div>
</template>

<script>	
import Vue from "vue";	
import { Navbar, TabItem } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
import MyAjax from "@/md/MyAjax.js";
   import $ from 'jquery';
Vue.use(InfiniteScroll);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
export default{
	data(){
		return{
			list1:[],
			list2:[],
			list3:[],
			selected:'1',
			loading:false,
			page1:1,
			page2:1,
			page3:1,
			top:false
		}
	},
 	mounted(){

 		var that = this;
  	var url1 = "http://list.meilishuo.com/search?frame=1&page="+that.page+"&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=8c5d557a-be11-4742-96dc-6b9b1f4ad351&sort=pop&_=1509540439877"
  	var url2 = "http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=8c5d557a-be11-4742-96dc-6b9b1f4ad351&sort=sell&_=1509410145392"
  	var url3 = "http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=8c5d557a-be11-4742-96dc-6b9b1f4ad351&sort=new&_=1509540503589"
  
  	MyAjax.vueRscJsonp(url1,{
	   },function(data){
	       	var arr = [];
			     console.log(data.data.list);
			     for(var i = 0; i<data.data.list.length;i++){
			     	arr.push(data.data.list[i])
			     }
			     that.list1=arr
	        },function(err){
	          console.log(err)
	    });
	    MyAjax.vueRscJsonp(url2,{
	   },function(data){
			     console.log(data.data.list);
			     for(var i = 0; i<data.data.list.length;i++){
			     that.list2.push(data.data.list[i])
			     }
	        },function(err){
	          console.log(err)
	    });
	    MyAjax.vueRscJsonp(url3,{
	   },function(data){
			     console.log(data.data.list);
			     for(var i = 0; i<data.data.list.length;i++){
			     that.list3.push(data.data.list[i])
			     }
	        },function(err){
	          console.log(err)
	    })
  	
	  },
	methods:{
	
		loadMore1() {
		var that = this;
		
		  this.loading = true;
		  setTimeout(() => {
		  	that.page1+=1;
  		var url1 = "http://list.meilishuo.com/search?frame=1&page="+that.page1+"&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=8c5d557a-be11-4742-96dc-6b9b1f4ad351&sort=pop&_=1509540439877"
		    MyAjax.vueRscJsonp(url1,{
			   },function(data){
//					     console.log(data.data.list);
					     for(var i = 0; i<data.data.list.length;i++){
					     	that.list1.push(data.data.list[i])
					     }
			        },function(err){
			          console.log(err)
			    })
		    this.loading = false;
		  }, 2500);
		},
		loadMore2() {
		var that = this;
		
		  this.loading = true;
		  setTimeout(() => {
		  	that.page2+=1;
  		var url2 = "http://list.meilishuo.com/search?frame=1&page="+that.page2+"&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=8c5d557a-be11-4742-96dc-6b9b1f4ad351&sort=sell&_=1509410145392"
		    MyAjax.vueRscJsonp(url2,{
			   },function(data){
//					     console.log(data.data.list);
					     for(var i = 0; i<data.data.list.length;i++){
					     	that.list2.push(data.data.list[i])
					     }
			        },function(err){
			          console.log(err)
			    })
		    this.loading = false;
		  }, 2500);
		},
		loadMore3() {
		var that = this;
		
		  this.loading = true;
		  setTimeout(() => {
		  	that.page3+=1;
  		var url3 = "http://list.meilishuo.com/search?frame=1&page="+that.page3+"&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=8c5d557a-be11-4742-96dc-6b9b1f4ad351&sort=new&_=1509540503589"
		    MyAjax.vueRscJsonp(url3,{
			   },function(data){
//					     console.log(data.data.list);
					     for(var i = 0; i<data.data.list.length;i++){
					     	that.list3.push(data.data.list[i])
					     }
			        },function(err){
			          console.log(err)
			    })
		    this.loading = false;
		  }, 2500);
		}
	}
}



</script>

<style scoped lang = "scss">
@import "~@/scss/main";

ul{
	@include bgcolor(#fff);
	@include rect(100%,auto);
	overflow:hidden;
	li{
		@include rect(50%,auto);
	margin-top:10px;
	float:left;
		a{
			display:block;
			@include flexbox();
		  @include flex-direction(column);
			@include align-items(center)
			
			.title{
				margin-top:9px;
				@include fontsize(12px)
				@include ellipsis(98%,1)
			}
			img{
				@include rect(95%,2.34rem);
			}
			.price{
			@include rect(95%,auto);
			
			@include flexbox();
				
		  @include flex-direction();
			@include justify-content(center)
				
				span{
				@include fontsize(12px);
					
					&:nth-child(1){
						color:#f36
					}
					.star{
						color:#999;
						margin:0 3px 0 9px;
					}
				}
			}
		}
	}
}

</style>