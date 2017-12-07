<template>
<div class="timeout">	
	<div class="timetop">
		<div class="timetitle">
			<fieldset>
				<legend>&nbsp;限时特惠距活动结束仅剩&nbsp;</legend>
			</fieldset >	
		</div>
		<div class="time">
			<slot>
				<span class="time">{{c1}}</span>
			  	<span class="time">{{c2}}</span>小时
				<span class="time">{{c3}}</span>
				<span class="time">{{c4}}</span>分钟
				<span class="time">{{c5}}</span>
				<span class="time">{{c6}}</span>秒
				<span class="time">{{c7}}</span>
				<span class="time">{{c8}}</span>
			</slot>
		</div>
	</div>
	<div class="time-list">
		<ul>
			<li v-for="item in timelist">
				<a href="">
				<img :src="item.image"/>
				<div class="price">
					<span>￥{{item.discountPrice}}</span>
					<span>{{item.price}}</span>	
					
				</div>
					<span id="buynow">立即抢购</span>
				</a>
			</li>
		</ul>
	</div>
</div>
</template>
<script>
   import MyAjax from "@/md/MyAjax.js";
  export default {
  	
    data(){
      return {
      c1:'',
      c2:'',
      c3:'',
      c4:'',
      c5:'',
      c6:'',
      c7:'',
      c8:'',
      timelist:[]
      }
    },
    props:{

    },
    mounted () {
 
     this.countdowm(this.endTime);
     var that = this;
     var url = "https://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730%2C59540%2C42287";
      	MyAjax.vueRscJsonp(url,{
       	},function(data){
       	
	       	var arr = [];
	           console.log(data.data);
	           for(var i in data.data){
					arr.push(data.data[i])           	
	           }
	           for(var j = 0;j< arr[3].list.length;j++){
	           	that.timelist.push(arr[3].list[j])
	           }
//	         console.log()
	        },function(err){
	          console.log(err)
        })
    },
    methods: {
      countdowm(timestamp){
      	let self = this;
        let now = new Date()
        let hour = now.getHours();//得到小时
	    let minu = now.getMinutes();//得到分钟
	    let sec = now.getSeconds();
	    let MS = now.getMilliseconds()//得到秒
      	let time=hour*60*60*1000+minu*60*1000+sec*1000+MS;
	    let all=24*60*60*1000+60*60*1000+60*1000;
	    let haha=all-time;
      	let timer = setInterval(function(){
			haha-=1000;
		let days = parseInt(haha / (1000 * 60 * 60 * 24));
	    let hours = parseInt((haha % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	    let minutes = parseInt((haha % (1000 * 60 * 60)) / (1000 * 60));
	    let seconds = Math.floor((haha % (1000 * 60)) / 1000);
	    let minsec = parseInt(((parseInt(haha % (1000 * 60)) / 1000)-seconds)*100);
	    
	    	if(hours-1<10){
	    		hours="0"+(hours-1)
	    	}
	    	if(minutes<10){
	    		minutes="0"+minutes
	    	}
	    	if(seconds<10){
	    		seconds="0"+seconds
	    	}
	    	if(minsec<10){
	    		minsec="0"+minsec
	    	}
	    	self.c1=parseInt(hours/10)
	    	self.c2=hours-self.c1*10
	    	self.c3=parseInt(minutes/10)
	    	self.c4=minutes-self.c3*10
	    	self.c5=parseInt(seconds/10)
	    	self.c6=seconds-self.c5*10
	    	self.c7=parseInt(minsec/10)
	    	self.c8=minsec-self.c7*10
	    },1000)
       }
    }
  }
</script>
<style scoped lang="scss">
@import "~@/scss/main";
.timeout{
	@include bgcolor(#fff);
}
	.time{
		
		@include rect(auto,0.3rem)
		span{
			display: inline-block;
			width:13px;
			height:14px;
			background:#000;
			line-height: 14px;
			color:#fff;
			text-align: center;
			margin-top:7px;
			margin-left:-3px
			/*float:left*/
		}
		
	}
	.timetop{
		margin-top:10px;
		@include flexbox();
		@include flex-direction(column);
		@include align-items(center)
		.timetitle{

			overflow: hidden;
			fieldset{
				display:inline-block;
				border-top:1px solid #000;
				padding:0 10px;
				/*width:200px;*/
				legend{
					text-align: center;
				}
			}
		}
		
	}
	.time-list{
    	@include rect(100%, 2.05rem);
	    padding:10px 0 0 10px;
	    margin-bottom:10px;
	   	ul{
	   		 white-space: nowrap;
		    overflow: auto;
		   
		    
		    &::-webkit-scrollbar {
		      display:none;
		    }
    		@include rect(auto, 2.05rem);
	   		li{
	   			display: inline-block;
	   			height:2.05rem;
				margin-right:9px;
				a{
					@include flexbox();
					@include flex-direction(column);
					
					img{
						width:1rem;
					}
					.price{
						@include flexbox();
						@include flex-direction(row);
						@include justify-content(space-between)
						span{
							
							&:nth-child(1){
								font-size:0.12rem;
								color:#D0011B
							}
							&:nth-child(2){
								font-size:0.12rem;
								color:#9A9A9A;
								text-decoration:line-through
							}
						}
					}
					#buynow{
						display: block;
						width:65px;
						height: 21.5px;
						text-align: center;
						color:#fff;
						font-size:12px;
						line-height:21px;
						background:#D0011B;
						margin:5px auto;
						border-radius: 10px;
						
					}
				}
	   		}
	   	}
	    
	}
</style>