<template>
  <div class="content">
    <div class="header">
     	<span></span><span>购物车</span><span>删除</span>
    </div>
    <div class="content2">
      	<div class="cart-title">
      		<div></div>
      		<div class="allprice">
      		<!--	合计：<span>￥{{allprice}}</span>-->
      			<p>不含运费、优惠折扣</p>
      		</div>
      		<a>去结算</a>
      	</div>
      	<ul class="cartLists">
      		<li v-for="item in lists">
      			<div class="cartImg">
      				<img :src="item.img"/>
      			</div>
      			<div class="cartInfo">
      				<p>{{item.title}}</p>
      				<div class="num">
      					
      					<span class="down">-</span>
      					<span class="count">{{item.count}}</span>
      					<span class="up">+</span>
      				</div>
      			</div>
      			<div class="do">
      				<p class="price" style="color:#f39">{{item.price}}</p>
      				<span style="font-size:16px;">删除</span>
      			</div>
      		</li>
      	</ul>
    </div>
  </div>
</template>

<script>
  import footerToggle from "@/md/footerToggle.js"
  export default {
    data(){
      return {
        lists:[],
        allprice:''
      }
    },
    mounted(){
      footerToggle.show();
      var arr= JSON.parse(localStorage.getItem("classID"))
      for(var list of arr){
      	this.lists.push(list)
      	
      }
      console.log(arr)
    },
    methods:{
      
    },
    components:{
      
    }
  }
</script>

<style scoped lang="scss">
@import "~@/scss/main";
.content{
	@include rect(100%,100%);
	.header{
		@include bgcolor(#fff);
		@include rect(100%,0.55rem);
		font-size:0.20rem;
		color:#333;
		@include flexbox();
		@include justify-content();
		@include align-content();
		border-bottom:1px solid #eee;	
		span{
			text-align:center;
			line-height:0.55rem;
			&:nth-of-type(1),&:nth-of-type(3){
				@include rect(0.6rem,100%)
			}
			&:nth-of-type(2){
				@include flex();
				
			}
		}
	}
	.content2{
		@include rect(100%,100%);
	/*	@include bgcolor(#fff);*/
		position: relative;
		.cart-title{
			position:fixed;
			bottom:0.50rem;
			left:0;
			@include bgcolor(#fff);
			 
			@include flexbox();
			@include justify-content();
			@include align-items();
			@include rect(100%,0.44rem);
			font-size:16px;
			padding-right:20px;
			.allprice{
					span{
						color:#f39
					}
					p{
						color:#999
					}
			}
			a{
				margin-left:0.5rem;
				display: block;
				@include rect(1.2rem,0.4rem);
				background: #f39;
				text-align:center;
				line-height: 0.4rem;
				color:#fff
			}
		}
		.cartLists{
			@include rect(100%,auto);
			padding:0 15px;
			@include bgcolor(#fff);
			li{
				@include rect(100%,1.15rem)
				border-bottom:1px solid #eee;
				padding:15px 10px;
				@include flexbox();
				.cartImg{
					width:0.6rem;
					height:0.6rem;
					img{
						width:0.6rem;
					}
				}
				.cartInfo{
					width:70%;
					margin-left:10px;
					p{
						font-size:16px;
						color:#666;
						line-height:1;
					@include ellipsis(98%,1) 
					}
					.num{
						margin-left:20px;
						margin-top:20px;
						width:70px;
						height:25px;
						@include flexbox()
						span{
							display:block;
							color:#666;
							font-size:14px;
							text-align: center;
							line-height:0.2rem;
							flex:1;
							&:nth-of-type(1),&:nth-of-type(3){
								width:0.2rem;
								height:0.2rem;
								border:1px solid #999;
							
							}
							&:nth-of-type(2){
								width:25px;
								height:0.2rem;
								border-top:1px solid #eee;
								border-bottom:1px solid #eee;
							}
						}
					}
				}
			}
		}
	}
}


</style>