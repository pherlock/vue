<template>
<div id="box">
	<ul class="classlist">
		<li v-for="(item, index) in ListTwo">
			<a href="javascript:;">{{item.title}}</a>
		</li>
	</ul>

	<ul class="prolist" id="prolist">
		<li class="thumbnail" v-for="(item, index) in prolist" :key="index" @click="ListThree(item)">
			<div class="img">
				
				<img :src="item.showLarge.img" alt="...">
				<img src="http://s2.mogucdn.com/p2/170307/1_1h8e97a4ed6giciglgjae69g9a269_60x28.png" />
			</div>

			<div class="caption">
				<span>
					{{item.title}}
				</span>

				<p>
					<em>{{item.price}}</em>
					<em>{{item.orgPrice}}</em>

				</p>
				<p>{{item.sale}}人已购买</p>
			</div>

		</li>
	</ul>
</div>
</template>

<script>
	import MyAjax from "@/md/MyAjax.js";
	import footerToggle from "@/md/footerToggle.js";
	
	export default{
		data(){
			return{
				prolist:[],
				ListTwo:[]
			}
		},
		mounted(){
			footerToggle.hide();
			var that = this;
			var classID = localStorage.getItem("listid");
			var pgId = classID.split("=")[1].split("&")[0];
			console.log(classID)
			console.log(pgId)
			var url="http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=de6da406-b3a1-47ed-8e0f-baa43f1011c0&fcid="+pgId

					MyAjax.vueRscJsonp(url, {
						"jsonp": "callback"
					}, function(data) {
						console.log(data.data);
						var oppen = []
						for(var item of data.data.list) {
								oppen.push(item);
							that.prolist=oppen;
							isRequest = false;
						}
					}, function(err) {
						console.log(err)
					})
				var a = 1;
				
				var isRequest = false;
				$(".mainContent").on("scroll", function() {
					var $scrollTop = $(".mainContent").scrollTop();
					var $scrollTop3 = $(".mainContent")[0].clientHeight;
					var $scrollTop2 = $("#prolist")[0].scrollHeight;
					if(isRequest == true) {
						return;
					}
					var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

					if($scrollTop + $scrollTop3 > $scrollTop2 + 500) {
						console.log('滚动到底部')
						loadMore();
					}
				})
				
				function loadMore(){
					isRequest = true;
						++a;
					console.log(a)
//					const url = "http://list.meilishuo.com/search?frame=" + a + "&page=" + a + "&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=8c5d557a-be11-4742-96dc-6b9b1f4ad351&sort=" + classID + "&_=1509540503589";
					
					const url="http://list.meilishuo.com/search?frame=0&page=" + a + "&sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=de6da406-b3a1-47ed-8e0f-baa43f1011c0&fcid="+pgId
					MyAjax.vueRscJsonp(url, {
						"jsonp": "callback"
					}, function(data) {
						console.log(data.data);
						var oppen = []
						for(var item of data.data.list) {

							that.prolist.push(item)
							isRequest = false;
						}
					}, function(err) {
						console.log(err)
					})
				}
			this.classlist()
			
		},
		methods:{
			classlist() {
				var that = this;
				var classID = localStorage.getItem("listid");
			var pgId = classID.split("=")[1].split("&")[0];
			var url="http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=de6da406-b3a1-47ed-8e0f-baa43f1011c0&fcid="+pgId
				MyAjax.vueRscJsonp(url, {
					"jsonp": "callback"
				}, function(data) {
	
					console.log(data.data.filter.list)
					for(var item of data.data.filter.list) {

						that.ListTwo.push(item)


					}

				}, function(err) {
					console.log(err)
				})
			}
			,
			ListThree(item) {
//				var cid=item.link.split('?')[1].split("&")[0].split("=")[1];

				console.log(item)
				this.$router.push({
					name: 'detail',
					params: {
						gid: item.iid
					}
				})
				localStorage.setItem("goodsid", item.iid)
				localStorage.setItem("gid", item.shopId)
			}
		},
		components:{
			
		}
	}
</script>

<style scoped lang="scss">
	@import "~@/scss/main.scss";
#box{
	@include rect(100%,100%);
	@include bgcolor(#fff);
	.classlist{
		z-index:999999;
		position:fixed;
		top:0;
		@include bgcolor(#fff);
		left:0;
		@include rect(100%,0.44rem);
		@include flexbox();
		@include justify-content();
		@include align-items()
		li{
			@include rect(auto,100%);
			@include flex();
			@include flexbox();
			@include justify-content();
			@include align-items();
			@include fontsize(14px);
		&:nth-child(1){
			a{
				@include textcolor(#ef4562)
				}
			}
		}
	}
	.prolist{
		@include bgcolor(#fff);
		@include rect(100%,auto);
		margin-top:0.44rem;
		li{
			@include bgcolor(#fff);
			@include rect(50%,auto);
			float:left;
			.img{
				@include rect(95%,2.33rem);
				overflow:hidden;
				margin:0 auto;
				position:relative;
				
				img:nth-of-type(1){
					position:absolute;
					width:100%;
					
				}
				img:nth-of-type(2){
					z-index: 9999;
					position:absolute;
					width:25%;
					bottom:0px;
					left:5px;
					
				}
				
			}
			.caption{
				@include rect(100%,auto);
				overflow: hidden;
				@include flexbox();
				flex-direction:column ;
				@include justify-content();
				@include align-items();
				@include fontsize(14px);
				span{
					color:#666666;
					display: inline-block;
					margin-top:9px;
					@include fontsize(12px)
					@include ellipsis(98%,1)
				}
				p{
					color:#999;
					em:nth-of-type(1){
						color:#F66;
					}
					em:nth-of-type(2){
						text-decoration: line-through;
					}
				}
				p:nth-of-type(2){
					@include fontsize(12px);
					line-height:30px
				}
			}
		}
	}
}
</style>