<template>
	<div id="title-box">
		<h2 id="title-h2">{{title0}}</h2>
		<ul class="title-list">
<!--			分类2-->
			<li @click="ListTwo(item)" v-for="(item, index) in classlist0">
					<div class="img">
						<img :src="item.image" />
						
					</div>
			
				<p>
					{{item.title}}
				</p>
			</li>
		</ul>
		<h2 id="bb-h2">{{title1}}</h2>
		<ul class="title-list">
<!--			分类2-->
			<li @click="ListTwo(item)" v-for="(item, index) in classlist1">
					<div class="img">
						<img :src="item.image" />
						
					</div>
			
				<p>
					{{item.title}}
				</p>
			</li>
		</ul>
		<h2 id="bb-h2">{{title2}}</h2>
		<ul class="title-list">
<!--			分类2-->
			<li @click="ListTwo(item)" v-for="(item, index) in classlist2">
					<div class="img">
						<img :src="item.image" />
						
					</div>
			
				<p>
					{{item.title}}
				</p>
			</li>
		</ul>
	</div>

</template>

<script>
	import MyAjax from "@/md/MyAjax.js";
	import footerToggle from "@/md/footerToggle.js";
	export default {
		data() {
			return {
				classlist0: [],
				classlist1: [],
				classlist2: [],
				title0:'',
				title1:'',
				title2:''
			}
		},
		mounted() {
			footerToggle.hide()
			var that = this;
			var classID = localStorage.getItem("classid");
			var pgId = (classID.split("=")[1]).split("&")[0];
			console.log(pgId)
			var url5 = "https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid=" + pgId;
			MyAjax.vueRscJsonp(url5, {
				"jsonp": "callback"
			}, function(data) {
				console.log(data)
				if(data.value.category_0){
					that.title0=data.value.category_0.info.title;
					for(var item of data.value.category_0.list) {
						that.classlist0.push(item);
					}
				}
				if(data.value.category_1){
					that.title1=data.value.category_1.info.title;
					for(var item1 of data.value.category_1.list) {
						that.classlist1.push(item1);
					}
				}
				if(data.value.category_2){
					that.title2=data.value.category_2.info.title;
					for(var item2 of data.value.category_2.list) {
						that.classlist2.push(item2);
					}
				}
				
			}, function(err) {
				console.log(err);
			})

		},

		methods: {
			ListTwo(item) {
				var pid=item.link.split("=")[1].split("&")[0]
				this.$router.push({
					name: 'list11',
					params: {
						gid: pid
					}
				})
				localStorage.setItem("listid", item.link)
			}
		},
		components: {

		}
	}
</script>

<style scoped lang="scss">
	@import "~@/scss/main.scss";
	#title-box{
		@include rect(100%,auto);
		@include bgcolor(#F2F5F8);
		overflow: hidden;
		#title-h2,#bb-h2{
			float:left;
			width:100%;
			line-height:36px;
			background:#fff;
			margin-top:10px;
			padding-left:10px;
			@include fontsize(16px);
			font-weight:100
		}
		.title-list{
			@include rect(100%,auto);
			float:left;
				li{
					@include bgcolor(#fff);
					float:left;
					@include rect(25%,auto);
					border:0.5px solid #F2F5F8;
					@include flexbox();
					@include flex-direction(column);
					@include justify-content();
					.img{
						width:100%;
						height:94px;
						overflow: hidden;
						@include flexbox();
						@include flex-direction(column);
						@include justify-content();
						img{
							width:70%;
							margin:0 auto;
						}
					}
					p{
						
						line-height:0.4rem;
						@include fontsize(12px);
						text-align: center;
					}
				}
			}
		}	
</style>