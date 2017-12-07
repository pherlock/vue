<template>
	<div class="lazydata">
		<div class="lazyheader">
			<span>超值拼团</span>
			<a href="">全部拼团&gt;</a>
		</div>
		<ul>
			<li v-for="item in lazylist">
				<a href="">
					<div class="lazyimg">
						<img :src="item.image" alt="" />
					</div>
					<div class="lazycontent">
						<p>{{item.title}}</p>
						<div class="price">
							<div>
								<span>￥{{item.price}}</span>
								<p>{{item.ptUserCount}}人团.已团{{item.pintuanItemSale}}件</p>
							</div>
							<button>去开团</button>
						</div>	
					</div>						
				</a>
			</li>
		</ul>
		<div class="lazybutton">
			<a href="">
				全部超值拼团
			</a>
		</div>
	</div>
</template>

<script>
  import MyAjax from "@/md/MyAjax.js";
	
	export default{
		data(){
			return{
				lazylist:[]
			}
		},
		mounted(){
			var that = this;
	      	var url = "https://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730%2C59540%2C42287";
	      
	      	MyAjax.vueRscJsonp(url,{
	       	},function(data){
	       	
		       	var arr = [];
//		           console.log(data.data);
		           for(var i in data.data){
						arr.push(data.data[i])           	
		           }
		           for(var j = 0;j< arr[5].list.length;j++){
		           	that.lazylist.push(arr[5].list[j])
		           }
		         console.log(that.lazylist)
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
	.lazydata{
		@include bgcolor(#fff);
		@include rect(100%,auto);
		margin-top:0.26rem;
		
		.lazyheader{
			@include rect(100%,auto);	
			@include flexbox();
			@include justify-content(space-between);
			padding:0 10px 0 20px;
			span,a{
				@include textcolor(#999);
				fontweight:0;
				display: inline-block;
				width:80px;
			}
			span{
				@include textcolor(#000);
				
			}
		}
	}
	ul{
			@include rect(100%,auto);
			overflow:hidden;
		li{
			@include rect(100%,1.3rem);
			margin-left:10px;
			padding:15px 0;
			border-bottom:0.5px solid #F2F5F8;	
			a{
				@include flexbox();
				
				.lazyimg{
					@include rect(1.1rem,1rem);
					overflow:hidden;
					
						img{
							@include rect(1rem,auto);
							margin-top:-20px;
						}
					
				}
				.lazycontent{
					@include flex(1);
					p{
						width:90%;
						height:0.37rem;
						color:#333;
					}
					.price{
						width:90%;
						@include flexbox();
						margin-top:0.15rem;
						@include justify-content(space-between);
						div{
					@include flex(1);
							
						}
						span{
							@include fontsize(0.22rem);
							color:#f36
						}
						p{
							font-size:12px;
						}
						button{
							@include rect(0.9rem,0.3rem);
							border-radius:15px ;
							border:0;
							@include bgcolor(#f36);
							@include textcolor(#fff);
							margin-top:17px;
						}
					}
				}
			}
		}
	}
	.lazybutton{
		@include rect(100%,0.65rem);
		border-bottom:10px solid #EFEFEF;
		@include flexbox();
		@include justify-content(center)
		a{
			text-align: center;
			line-height: 0.3rem;
			@include rect(2.3rem,0.3rem);
			border-radius:15px ;
			border:0;
			@include bgcolor(#f36);
			@include textcolor(#fff);
			margin-top:15px;
		}
	}
	
	
</style>