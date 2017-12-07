<template>
<div class="content">
	<div class="detail-swipe">
		
	
	 <mt-swipe :auto="0" :show-indicators="true">
        <mt-swipe-item v-for="(item,index) in bannerlist" key="index">
          <img :src="item"/>
       
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="title-top">
    	<p>{{title}}</p>
    	<p>{{price}}</p>
    	<p><span>{{sale}}</span><span>{{shoucang}}</span><span>{{deliveryTime}}小时发货</span><span>{{sendAddress}}</span></p>
    </div>
    <div class="threebag">
    	<span class="iconfont icon-duigou"></span>超时赔付
    	<span class="iconfont icon-duigou"></span>全场包邮
    	<span class="iconfont icon-duigou"></span>退货补邮费
    	<b style="float:right">></b>
    </div>
    <div class="store">
    	<div class="store-top">
    		<div class="store-img">
    			<img :src='shopLogo'/>{{shopname}}
    		</div>
			<div class="shoucang">
				<span>+收藏</span>
			</div>    		
    	</div>
    	<div class='store-info'>
    		<div class="info-main">
    			<div>
    				<p>{{cSells}}万</p>
    				<p>总销量</p>
    			</div>
    			<div>
    				<p>{{cGoods}}</p>
    				<p>全部宝贝</p>
    			</div>
    			
    		</div>
    		<div class="miaoshu"> 
    			<p>{{name1}}<span>{{score1}}</span><i>高</i></p>
    			<p>{{name2}}<span>{{score2}}</span><i>高</i></p>
    			<p>{{name3}}<span>{{score3}}</span><i>高</i></p>
    		</div>
    	</div>
		<div class="tostore">
			进店逛逛
		</div>
    </div>
    <div class="detail">
		<ul class='detail-title'>
			<li>图文详情</li>
			<li>商品参数</li>
			<li>评价（30）</li>
			<li>热卖推荐</li>
		</ul>
		<div class="desc">
			<div><span></span><p></p></div>
			<p>{{desc}}11111</p>
			<div><span></span><p></p></div>
		</div>
		<p>{{key}}</p>
		<ul class="img-list">
			<li v-for="item in imglist"><img :src="item"/></li>
		</ul>
		<ul class="img-list">
			<li v-for="item in ruleimg"><img :src="item"/></li>
		</ul>
    </div>
	<div class="footer">
		<ul class="footerlist">
			<li><span class="iconfont icon-kefu" style="color:#F36"></span><p>客服</p></li>
			<li><span class="iconfont icon-dianpu"></span><p>店铺</p></li>
			<li><span class="iconfont icon-shoucang"></span><p>收藏</p></li>
		</ul>
		<div class="tocart">
			<div id="cart" goodsId="" @click="cart()">加入购物车</div>
			<div id="buynow">购买</div>
		</div>
	
	</div>
 	<div class="iconfont icon-gouwuche cartche" >
 		<span class="count" @click="tocart()">{{count}}</span>
 	</div>
	
</div>
</template>

<script>import Vue from "vue";
import MyAjax from "@/md/MyAjax.js";
import footerToggle from "@/md/footerToggle.js";
import { Swipe, SwipeItem } from 'mint-ui';
import { Popup } from 'mint-ui';

Vue.component(Popup.name, Popup);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
	data() {
		return {
 			count:0,
 			cartimg:'',
			title:'',
			price:'',
			sale:'',
			shoucang:'',
			deliveryTime:"",
			sendAddress:"",
			shopLogo:'',
			shopname:'',
			cSells:'',
			cGoods:'',
			name1:'',
			name2:'',
			name3:'',
			score1:'',
			score2:'',
			score3:'',
			desc:'',
			key:'',
			goodsID:'',
			imglist:[],
			ruleimg:[],
			bannerlist: []
		}
	},
	mounted() {
		footerToggle.hide()
		var classID = localStorage.getItem("goodsid");
		var gid = localStorage.getItem("gid");
		console.log(classID)
		console.log(gid)
		this.goodsID=classID	
		var that = this;
		$.ajax({
			type: "get",
			url: "http://localhost:3000/list",
			data: {
				iid: classID
			},
			success: function(data) {
				var newData = JSON.parse(data).result.itemInfo
				that.bannerlist = newData.topImages;
				that.title=newData.title;
				that.price=newData.price;
				that.sale=newData.sale;
				var columns=JSON.parse(data).result.columns
				that.cartimg=JSON.parse(data).result.skuInfo.skus[0].img
				that.sale=columns[0]
				that.shoucang=columns[1]
				that.deliveryTime=newData.extra.deliveryTime
				that.sendAddress=newData.extra.sendAddress
				var shopInfo=JSON.parse(data).result.shopInfo
				that.shopLogo=shopInfo.shopLogo
				that.shopname=shopInfo.name
				that.cSells=parseInt(shopInfo.cSells/1000)/10
				that.cGoods=shopInfo.cGoods
				that.name1=shopInfo.score[0].name
				that.name2=shopInfo.score[1].name
				that.name3=shopInfo.score[2].name
				that.score1=shopInfo.score[0].score
				that.score2=shopInfo.score[1].score
				that.score3=shopInfo.score[2].score
				that.desc=newData.desc
				var detailImage = JSON.parse(data).result.detailInfo.detailImage[0]
				that.key=detailImage.key
				that.imglist=detailImage.list
				var rule=JSON.parse(data).result.itemParams
				that.ruleimg=rule.info.images
			}
		});

	},
	methods: {
	  cart(){
	  		if(localStorage.getItem("classID")==null){
	  			
	  			var str = {id:this.goodsID,"count":1,"title":this.title,"price":this.price,"img":this.cartimg}
				var arr= []
				arr.push(str)
				localStorage.setItem('classID',JSON.stringify(arr))
	  		}else{
	  		
	  		console.log(localStorage.getItem('classID'))
//			
	  		var classlist=JSON.parse(localStorage.getItem('classID'))
	  		console.log(classlist)
				for(var i=0;i<classlist.length;i++){
					if(this.goodsID==classlist[i].id){
						classlist[i].count+=1
						this.count=classlist[i].count
						classlist.splice(i,1);
						console.log(this.count)
//
						var str={id:this.goodsID,"count":this.count,"title":this.title,"price":this.price,"img":this.cartimg}
//						
						classlist.push(str)
						localStorage.setItem('classID',JSON.stringify(classlist))
					}
				else{
						var str = {id:this.goodsID,"count":1,"title":this.title,"price":this.price,"img":this.cartimg}
						var arr= JSON.parse(localStorage.getItem('classID'))
						arr.push(str)
						localStorage.setItem('classID',JSON.stringify(arr))
					}
				}

	  			
	  		}

			
	  },
	  tocart(){
	  	this.$router.push('/cart')
	  }
	},
	components: {

	}
}</script>

<style scoped lang="scss">
	@import "~@/scss/main.scss";
.content{
	@include rect(100%,100%);
	@include bgcolor(#fff);
	position:relative;
}
.detail-swipe{
	
	@include rect(100%,4.80rem);
	margin-bottom:21px;
	.mint-swipe{
		@include rect(100%,100%);
		
	  	overflow:hidden;
	  .mint-swipe-item{
	  	@include rect(100%,100%);
	   	img{
	       	@include rect(100%,auto);
	    }
	  }
	}
}
.title-top{
	@include rect(100%,auto);
	p{
		@include rect(100%,auto);
		padding-left:0.1rem;
		&:nth-of-type(1){
			@include fontsize(20px);
			@include textcolor(#424242);
			@include ellipsis(98%,1)
		}
		&:nth-of-type(2){
			@include fontsize(24px);
			@include textcolor(#f69);
			line-height:0.5rem
		}
		&:nth-of-type(3){
			@include flexbox();
			@include justify-content(space-around);
			span{
				@include fontsize(14px);
				@include textcolor(#999);
				@include rect(auto,100%);
				@include flex();
			}
			margin-bottom:10px;
		}
	}
}
.threebag{
	@include rect(90%,0.68rem);
	margin:0 auto;
	line-height:0.68rem;
	border-top:1px solid #eee;
	span,i{
		@include fontsize(16px);
		@include textcolor(#666);
	}
}
.store{
	@include bgcolor(#fff)
	
	@include rect(100%,auto);
	padding:20px 10px;
	.store-top{
		@include rect(90%,auto);
		@include flexbox();
		@include justify-content(space-between);
		.store-img{
			@include fontsize(18px);
			@include textcolor(#5e5e5e);
			img{
				@include rect(0.5rem,0.5rem);
				border-radius:50%;
				border:1px solid #999;
				margin-right:5px
			}
		}
		.shoucang{
			span{
				
				display: block;
				padding:2px 5px;
			
				@include bgcolor(#f69);
				color:#fff;
				border-radius:12px;
			}
		}
	}
	.store-info{
		@include flexbox();
		.info-main,.miaoshu{
			@include flex();
		}
		.info-main{
			border-right:1px solid #eee;
			@include flexbox();
			@include justify-content(space-around);
			@include align-items();
			p{
				text-align:right;
				&:nth-of-type(1){
					font-size:20px;
					color:#333;
					line-height:35px;
				}
			}
		}
		.miaoshu{
			margin-left:0.3rem;
			text-align:left;
			span{
				color:#F66;
			}
			i{
				margin-left:0.05rem;
				background:#f66;
				color:#fff;
			}
		}
	}
	.tostore{
		
		@include rect(50%,0.33rem);
		line-height:0.33rem;
		text-align: center;
		margin:15px auto 0;
		@include bgcolor(#f2f5f8);
		border-radius:0.165rem ;
		font-size:14px;
		color:#333
	}
}
.detail{
	margin:0.05rem 0 0.55rem;
	@include bgcolor(#fff);
	.detail-title{
		@include rect(100%,auto);
		@include flexbox();
		padding:0.165rem 0;
		border-bottom:1px solid #eee;
		
		li{
			@include flex();
			font-size:16px;
			text-align: center;
			border-right:1px solid #eee;
			&:nth-of-type(4){
				border:0
			}
		}
	}
	.desc{
		padding:15px 10px;
		line-height:24px;
		font-size:16px;
		color:#727272;
		}
}
.img-list{
	@include rect(100%,auto);
	li{
		img{
			width:100%
		}
	}
}
.footer{
	border-top:1px solid #eee;
	@include rect(100%,0.55rem);
	@include bgcolor(#fff);
	position:fixed;
	bottom:0;
	left:0;
	.footerlist{
		float:left;
		@include rect(50%,100%);
		@include flexbox();
		@include justify-content();
		@include align-items();
		li{
			color:#999;
			@include flex();
			@include rect(auto,100%);
			@include flexbox();
			@include flex-direction(column);
			@include justify-content();
			@include align-items();
			span{
				font-size:20px
			}
			
		}
	}
	.tocart{
		float:left;
		@include flexbox();
		@include rect(50%,100%);
		#cart{
			@include rect(60%,100%);
			text-align:center;
			line-height:0.55rem;
			@include bgcolor(#ffe817)
		}
		#buynow{
			@include rect(40%,100%);
			text-align:center;
			line-height:0.55rem;
			@include bgcolor(#f69);
			color:#fff
		}
	}
}
.cartche{		
	position:fixed;
	bottom:0.6rem;
	right:0.2rem;
	@include rect(0.4rem,0.4rem);
	background:rgba(0,0,0,.4);
	text-align: center;
	line-height:0.4rem;
	font-size:0.24rem;
	color:#fff;
	border-radius: 0.2rem;
	.count{
		display: block;
		@include rect(0.2rem,0.2rem);
		position:absolute;
		right:0;
		top:0.05rem;
		background:#f39;
		border-radius: 50%;
		text-align: center;
		line-height:0.2rem;
		font-size:14px;
	}
}

</style>