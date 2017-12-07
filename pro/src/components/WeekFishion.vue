<template>
<div class="week">
	<div class="fashion">
		<img src="https://s10.mogucdn.com/mlcdn/c45406/171030_6ja2gfl82cl093768ilk7g0fb2fj1_740x543.jpg_800x9999.v1c7E.70.webp
	"/>
		<a href=""></a>
		<a href=""></a>
		<a href=""></a>
		<a href=""></a>
		<a href=""></a>
		<a href=""></a>
		<a href=""></a>
		<a href=""></a>
	</div>
	<div class="seemore">
		查看更多&nbsp;&nbsp;>
	</div>
</div>
</template>

<script>
  import MyAjax from "@/md/MyAjax.js";
	
	export default{
		data(){
			return{
				fishionList:[]
			}
		},
		mounted(){
			
		},
		methods:{
			
		},
		components:{
			
		}
		
	}
</script>

<style scoped lang = "scss">
@import "~@/scss/main";	
	.fashion{
		@include bgcolor(#fff);
		$height:2.7516rem;
		@include rect(100%,$height);
		position:relative;
		img{
			@include rect(100%,auto);
			position:absolute;
		}
		a{
			float:left;
			display:block;
			@include rect(25%,0.40*$height);
			&:nth-child(2),&:nth-child(3),&:nth-child(4),&:nth-child(5){
				margin-top:$height*0.20;
			}
		}
	}
	.seemore{
		@include bgcolor(#fff);
		@include rect(100%,auto);
		text-align:center;
		color:#f36;
		font-size:12px;
		line-height:0.42rem;
		border-bottom:10px solid #EEEEEE
	}
</style>