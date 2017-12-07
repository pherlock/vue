<template>
	<div></div>
</template>

<script>
  import MyAjax from "@/md/MyAjax.js";
	
	export default{
		data(){
			return{
				sildelist:[]
			}
		},
		mounted(){
			 var that = this;
	      	var url = "https://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730%2C59540%2C42287";
	      
	      	MyAjax.vueRscJsonp(url,{
	       	},function(data){
	       	
		       	var arr = [];
		           console.log(data.data);
		           for(var i in data.data){
						arr.push(data.data[i])           	
		           }
		           for(var j = 0;j< arr[2].list.length;j++){
		           	that.sildelist.push(arr[2].list[j])
		           }
		//         console.log(that.bannerlist)
		        },function(err){
		          console.log(err)
	        })
		},
		methods:{
			
		},
		components:{
			
		}
		
	}
</script>

<style scoped lang = "scss">
@import "~@/scss/main";
ul{
	@include bgcolor(#fff);
	@include rect(100%,1.1rem)
	@include flexbox();
	margin:10px 0;
	@include flex-direction(row);

	li{
		@include flex(1);
		@include flexbox();
		@include flex-direction(column);
		@include align-items(center);
		@include justify-content(space-between);
		color:#666
		
	}
}
	img{
		@include rect(0.8rem,0.8rem)
	}
	
	
	
</style>