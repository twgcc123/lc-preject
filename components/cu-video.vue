<template>
	<view>
		<swiper class="swiper" autoplay="false" vertical="true" interval="990000" @change="changeVideo">
			<swiper-item v-for="(item,index) in video_list" :key="index">
				<video
					:src="item.video_url"
					preload
					show-play-btn="true"
					controls="false"
					loop="true"
					:id="`video_${item.id}`"
					objectFit="fill"
					:enable-progress-gesture="false"
					@click="clickVideo"
					ref="video_url"
					play-btn-position="center"
					class="video"
					:poster="item.video_image"
					@timeupdate="timeupdate"
					:initial-time="timePaly"
				>
						<!-- preload -->
					<!-- :poster="item.video_image" -->
				</video>
				<cover-image 
				class="play" v-if="show_play" 
				@tap="videoPlay"
				src="/static/youju/play.svg"></cover-image>
				
				<cover-view class="cover-view-left">
					<cover-view class="view-left-text">@ {{ item.nickname }} <view class="guanzhu-text" @click.stop="attention(item)">{{ item.video_attention == '0'?'关注':'已关注' }}</view></cover-view>
					<cover-view class="view-left-text-content">
						<cover-view class="text-content-text">{{ item.desc }}</cover-view>
						<!-- <cover-view class="text-content-text">这是一个“普通”的示范，示范了内容的字体间隔、段落。如果最多，可以拥有3行这是一个“普通”的示范，示范了内容的字体间隔、段落。如果最多，可以拥有3行</cover-view> -->
					</cover-view>
					<cover-view class="view-left-dcses">
						<cover-view class="dcses-left"> 
							<cover-image class="dcses-left-img" src="../static/youju/location.png" mode=""></cover-image>
							<cover-view class="word">{{item.city}}</cover-view>
						</cover-view>
						<cover-view class="dcses-right"> 
							<cover-image class="dcses-right-img" src="../static/youju/jing.png" mode=""></cover-image>
							<cover-view class="word">{{item.keyword}}</cover-view>
						</cover-view>
					</cover-view>
				</cover-view>
				
				<cover-view class="cover-view-right">
					<cover-image :src="item.image_app"
					 class="avater img" 
					 @click.stop="tapAvater(item.cid)"></cover-image>
<!-- 					 <cover-image src="../../../static/youju/f3.jpg"
					  class="avater img" 
					  @click.stop="tapAvater(index)"></cover-image> -->
					<cover-view class="right-follow">+</cover-view>
					<cover-image 
					style="position:relative;top:-20upx;"
					:src="item.video_likenum==0 ? '../static/youju/aixin.png' : '../static/youju/aixin_red.png' " 
					class="img-left"  @click.stop ="tapLove(item)"></cover-image>
					<cover-view class="right-text">{{item.comment_num}}</cover-view>
					<cover-image src="/static/youju/pinglun.png" 
					style="height: 80upx;" class="img-left" @click.stop="tapMsg"></cover-image>
					<cover-view class="right-text">{{item.transpond_num}}</cover-view>
					
					<cover-image src="../static/youju/zhuanfa.png" 
					style="height: 76upx;" class="img-left" @click.stop="tapShare($event,itme)"></cover-image>
					<cover-view class="right-text">{{item.transpond_num}}</cover-view>
				</cover-view>
			</swiper-item>
		</swiper>
		<view v-if="show_comment">
			<com-comment :id="video_list[current_index].id" @hideComment="hideComment"></com-comment>
		</view>
	</view>
</template>
<script>
	import comComment from '@/pages/found/tuijian/comment.vue'
	import appShare, { closeShare } from '@/js_sdk/zhouWei-APPshare/utils/share.js'
	let play = false;
export default {
	components: {
		comComment
	},
	props: {
		video_list: {
			type: Array,
			default: () => {}
		},
		timePaly:{
			type:Number,
			default:() => {}
		}
	},
	data() {
		return {
			time: 0,
			barWidth:0,
			animationData: {},
			times:null,
			play: false,
			show_play:false,
			current_index: 0,
			show_comment: false,
			timepaly:0,
			isShow:0,
			isShow1:0
		};
	},
	created() {
		setTimeout(()=>{
			play = true;
			this.videoPlay();	
		},1000)
	},
	mounted() {
		this.videoCtx = uni.createVideoContext(`video_${item.id}`,this)
	},
	methods: {
		timeupdate(event) {
			uni.setStorageSync('time',event.detail.currentTime);
			// console.log('77777',uni.getStorageSync('time'))
			let t_w = parseInt(this.width);
			this.duration = event.detail.duration;
			this.time = event.detail.currentTime;
			let width = (this.time / this.duration) * t_w;
			let w = 0;
		},
		clickVideo() {
			// console.log('单视频点击事件');
			this.videoPlay();
		},
		videoPlay() {
			let video_id = this.video_list[this.current_index].id;
			
			if (play) {
				console.log('播放视频',`video_${video_id}`);
				this.videoCtx = uni.createVideoContext(`video_${video_id}`, this);
				this.videoCtx.play();
				this.show_play = false;
				play = false;
			} else {
				console.log('暂停视频',`video_${video_id}`);
				this.videoCtx = uni.createVideoContext(`video_${video_id}`, this);
				this.videoCtx.pause();
				this.show_play = true;
				play = true;
			}
		},
		videoPause() {
			let video_id = this.video_list[this.current_index].video_id;
			this.videoCtx = uni.createVideoContext(`video_${video_id}`, this);
			this.videoCtx.pause();
			this.show_play = true;
			play = true;
		},
		changeVideo(e){
			
			// 暂停之前的视频
			this.videoPause();
			this.current_index = e.detail.current;
			console.log(e.detail.current);
			// 播放现在的视频
			this.videoPlay();
			
			// 判断是否第一条
			if( e.detail.current == 0 ){
				console.log('到顶了');
				return false;
			}
			
			// 判断是否最后一条
			if( e.detail.current == this.video_list.length-1 ){
				console.log('到底了');
				return false;
			}
			
		},
		// tapAvater(url){
		// 	uni.navigateTo({
		// 		url:url
		// 	})
		// },
		tapMsg(e) {
			console.log(5, e);
			this.show_comment = true
		},
		async attention(e){
		var is_show=e.video_attention==0?1:0
		let user=uni.getStorageSync('USERINFO')
		 let token=user.token
						let param = this.$helper.setConfig('&token='+token+'&userby_id=' + e.user_id+'&is_show='+is_show);
							let res = await this.$http.request({
								method: 'post',
								url: '/index/Video/video_attention',
								data: {
									signature: param.signature,
									timestamp: param.timestamp,
									token:token,
									userby_id:e.user_id,
									is_show:is_show
								
								}
							});
							console.log(res)
							if(res.state == 10000){
		                    // e.video_attention=res.data
							this.$set(e,'video_attention',res.data)
						
							
						}
		},
		tapShare(e,item) {
			let shareData = {
			shareUrl:"https://kemean.com/",
			shareTitle:item.title,
			shareContent:item.desc,
			shareImg:item.video_image,
			}; 
				shareData.appId = "wx27f2cebdaff69dec";
				shareData.appPath = "pages/found/found";
				shareData.appWebUrl = "https://kemean.com/";
				shareData.type = 5;
			appShare(shareData,res => {
				console.log("分享成功回调",res);
			});
		},
		async tapLove(item) {
			   let user=uni.getStorageSync('USERINFO')
			   console.log(user)
			    let token=user.token
				console.log(token)
				let param = this.$helper.setConfig('&token='+token+'&id=' + item.id);
					let res = await this.$http.request({
						method: 'post',
						url: '/index/Video/video_likenum',
						data: {
							signature: param.signature,
							timestamp: param.timestamp,
							token:token,
							id:item.id
						
						}
					});
					console.log(res)
					if(res.state == 10000){
                         this.isShow1=res.data.isShow
						if(this.isShow1==1){
							let favorite_num=Number(item.favorite_num)
							 item.favorite_num=favorite_num+=Number(1)
							 item.video_likenum=1
						}else{
									item.favorite_num--
									item.video_likenum=0
									
														   
						}
				
					
				}
			
			// console.log(this.video_list[this.current_index].check)
			// this.video_list[this.current_index].check = !this.video_list[this.current_index].check;
			// // this.$forceUpdate()
			// this.$set(this.video_list[this.current_index], 'check', false)
			// // console.log(this.video_list[this.current_index].check)
			
			// console.log(this.video_list[this.current_index].check)
			// this.video_list[this.current_index].check = !this.video_list[this.current_index].check;
			// console.log(this.video_list[this.current_index].check)
		},
		hideComment(){
			this.show_comment = false
		},
		tapAvater(id){
			uni.navigateTo({
				url:`/pages/found/youju/youju?id=${id}`
			})
			uni.showLoading({
				title:"正在加载....",
				duration: 2000,
			})
		}
		
	},
	watch: {
		play(newVal, oldVal) {
			this.videoPlay();
		}
	},
};
</script>

<style lang="less" scoped>
.swiper{
	width: 100vw;
	height: 100vh;	
	position: fixed;
	top: 0;
	left: 0;
}
.video {
	width: 100%;
	height: 100%;
	position: relative;
}
.play{
	position: absolute;
	width: 20vw;
	height: 20vw;
	left: 40vw;
	top: 40vh;
	opacity: 0.5;
}
.progressBar {
	border-radius: 2upx;
	height: 4upx;
	background-color: #FF4500;
	z-index: 999999;
	position: absolute;
	bottom: 68rpx;
}

.cover-view-left {
	position: absolute;
	left: 48rpx;
	width: 520rpx;
	bottom: 28upx;
	z-index: 9999;
	font-size: 28upx;
	color: #ffffff;
}
.left-text {
	font-size: 28upx;
	color: #ffffff;
}

.cover-view-right {
	position: absolute;
	bottom: 40px;
	right: 44upx;
	z-index: 9999;
	text-align: center;
}

.avater {
	border-radius: 50%;
	border-width: 2upx;
	border-style: solid;
	border-color: #ffffff;
}

.img {
	height: 90upx;
	width: 90upx;
	margin-bottom: 110upx;
}

.img-left {
	width: 76upx;
	height: 76upx;
	padding-left: 4px;
}
.right-follow {
	position: absolute;
	z-index: 100;
	top: 75upx;
	left: 28upx;
	color: #ffffff;
	font-size: 16px;
	width: 34upx;
	height: 34upx;
	background-color: #f12f5b;
	text-align: center;
	line-height: 34upx;
	border-radius: 17upx;
}

.right-text {
	color: #ffffff;
	font-size: 11px;
	text-align: center;
	margin-bottom: 40upx;
}
.musicIcon {
	margin-top: 40upx;
}
@keyframes rotating {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
.view-left-text-content {
	flex: 1;
	overflow : hidden;
	/* height: 120upx; */
}
.view-left-text {
	font-size: 30upx;
	color: #ffffff;
	margin-bottom: 22upx;
	font-weight: bolder;
	display: flex;
	align-items: center;
}
.guanzhu-text{
	display: inline-block;
	margin-left: 20upx;
	width: 104upx;
	height: 44upx;
	line-height: 42upx;
	border-radius: 44upx;
	font-size: 26upx;
	text-align: center;
	font-weight: normal !important;
	border: 1upx solid rgba(204, 204, 204, 1);
	color: rgba(204, 204, 204, 1);
	font-family: PingFangSC-regular;
}
.text-content-text {
	color: #ffffff;
	font-size: 30upx;
	line-height: 1.3;
	max-height: 120upx;
	overflow: hidden;
	display: -webkit-box !important;
	-webkit-box-orient: vertical !important;
	-webkit-line-clamp: 3 !important;
	overflow: hidden !important;
	white-space: normal !important;
}

.view-left-dcses{
	margin-top: 18upx;
	display: flex;
	flex-direction: row;
	.dcses-left,.dcses-right{
		border-radius: 40upx;
		margin-right: 20upx;
		padding: 0 12upx;
		font-size: 26upx;
		font-weight: bold;
		font-family: PingFangSC-bold;
		background-color: rgba(0,0,0,.3);
		color: rgba(255, 255, 255, 1);
		border: 1upx solid rgba(255, 255, 255, 0);
		display: flex;
		flex-direction: row;
		align-items: center;
		.dcses-left-img,.dcses-right-img{
			background-color: #FFFFFF;
			width: 25upx;
			height: 25upx;
			border-radius: 100%;
			margin-right: 8upx;
		}
		.word{
			margin-top: 6upx;
			display: inline-block;
			color: rgba(255, 255, 255, 1);
			font-size: 26upx;
			font-weight: bold;
		}
	}
}
</style>
