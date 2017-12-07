<template>
	<div class="content">
		<v-search></v-search>
		<div id="content">
				<div class="box">
					本周流行
				</div>
				<ul class="classlist">
	
					<li id="aa-classlist" @click="getkindlist(item)" v-for="(item, index) in classlist" :key="index">
					
						<img :src="item.image" />
						
						<p>
							{{item.title}}
						</p>
					</li>
				</ul>
		</div>
		
	</div>
</template>

<script>
	import footerToggle from "@/md/footerToggle.js";
	import MyAjax from "@/md/MyAjax.js";
	import Search from "./Search.vue";

	export default {
		data() {
			return {
				classlist: []
			}
		},
		mounted() {
			footerToggle.show();
			var that = this;
			var url = "https://simba-api.meilishuo.com/venus/mce/v1/urlChange/pc?pid=20783&channel=wap&page=1&pageSize=30";
			MyAjax.vueRscJsonp(url, {
				"jsonp": "callback"
			}, function(data) {
				console.log(data)

				for(var item of data.value) {
					that.classlist.push(item);
				}

			}, function(err) {
				console.log(err)
			})
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			getkindlist(item) {
				var cid=item.link.split('?')[1].split("&")[0].split("=")[1]
				this.$router.push({
					name: 'Itemlist',
					params: {
						cid:cid
					}
				})
				localStorage.setItem("classid", item.link)
			}
		},
		components: {
			"v-search":Search
		}
	}
</script>

<style scoped lang="scss">
	@import "~@/scss/main.scss";
	.router-link-active {
		@include textcolor(#f66)
	}
	.content{
		@include bgcolor(#F2F5F8)
		#content{
			@include rect(100%,auto);
			
			.box{
				@include rect(100%,auto);
				@include fontsize(16px);
				line-height:36px;
				padding-left:10px;
				@include bgcolor(#fff);
				
			}
			.classlist{
				@include rect(100%,auto);
				li{
					float:left;
					@include bgcolor(#fff);
					@include rect(25%,auto);
					border:0.5px solid #F2F5F8;
					@include flexbox();
					@include flex-direction(column);
					@include justify-content();
					/*@include align-content()*/
					img{
						width:70%;
						margin:0 auto;
					}
					p{
						line-height:0.4rem;
						@include fontsize(12px);
						text-align: center;
					}
				}
			}
		}
	}
	
</style>