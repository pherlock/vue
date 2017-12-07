<template>
	<div class="content">
		<header>
			<p class="iconfont icon-huise" @click="back()"></p>
			<p class="title">标题</p>
			<router-link to="/home" class="iconfont icon-shouye" tag="p"></router-link>
		</header>
		<div id="content">
			<div class="test">
				<div id="box">
					本周流行
				</div>
				<ul class="classlist">

					<li id="aa-classlist" @click="getkindlist(item)" v-for="(item, index) in classlist" :key="index">
						<p>
							<img :src="item.image" />
						</p>
						<p>
							{{item.title}}
						</p>
					</li>
				</ul>
			</div>
			<div id="prolist">
				 子路由 
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import footerToggle from "@/md/footerToggle.js";
	import MyAjax from "@/md/MyAjax.js";

	export default {
		data() {
			return {
				classlist: []
			}
		},
		mounted() {
			footerToggle.show();
			var that = this;
			var url = "https://simba-api.meilishuo.com/venus/mce/v1/urlChange/pc?pid=20783&channel=wap&page=1&pageSize=30&_=1509541384965";
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
				this.$router.push({
					name: 'Itemlist',
					params: {
						cid: item.link
					}
				})
				sessionStorage.setItem("classid", item.link)
			}
		},
		components: {

		}
	}
</script>

<style scoped lang="scss">
	@import "~@/scss/main.scss";
	.router-link-active {
		@include textcolor(#f66)
	}
	
	#content {
		@include flexbox();
		@include flex-direction(column);
		.test {
			position: fixed;
			top: 0.44rem;
			@include bgcolor(#fff);
			width: 100%;
			/*left:0;*/
		}
	}
	
	.classlist {
		margin-left: .01rem;
		@include rect(100%, 5.4rem);
		#aa-classlist {
			@include rect(1.03rem, 1.31rem);
			float: left;
			border: .0002rem solid #eeeeee;
			p:nth-child(1) {
				text-align: center;
				img {
					margin-top: .01rem;
					@include rect(.71rem, .89rem);
				}
			}
			p:nth-child(2) {
				text-align: center;
				margin-top: .1rem;
				@include fontsize(.12rem);
			}
		}
	}
	
	#box {
		@include fontsize(.18rem);
		padding: .1rem .1rem;
	}
</style>