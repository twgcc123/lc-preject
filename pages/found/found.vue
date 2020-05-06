<template>
	<view class="content">
		<index-header bgColor="bg-index-header" fixed="false" index="1" @headerSwitch="headerSwitch"></index-header>
		<view v-if="navIndex == 1" class="list">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scroll="scroll">
				<view class="list-item" v-for="(item, index) in hotelList" @click="goDetail(index)" :key="index">
					<view class="list-item-left">
						<image class="list-item-left-video" src="../../static/youju/f3.jpg"></image>
						<image class="list-item-left-play" src="../../static/youju/play.svg"></image>
					</view>
					<!-- @click="pageTo('/pages/found/youju/youju')" -->
					<view class="list-item-right">
						<view class="list-item-right-title">{{ item.name }}</view>
						<view class="list-item-right-appraise">
							<uni-rate class="rote-appraise" size="13" :value="item.appraise" disabled></uni-rate>
							<text class="list-item-right-appraise-rote">{{ item.appraise }}分</text>
						</view>
						<view class="list-item-right-tip">{{ item.brief }}</view>
						<view class="list-item-right-address" v-show="item.id == 1">台湾 日月潭</view>
						<view class="list-item-right-address" v-show="item.id == 2">杭州西湖，桂林</view>
						<view class="list-item-right-address" v-show="item.id == 3">广州白山，深圳欢乐谷</view>
						<view class="list-item-right-address" v-show="item.id == 4">深圳西街，上海虎门</view>
						<view class="list-item-right-address" v-show="item.id == 5">日月潭，西安</view>
						<view class="list-item-right-scenery">
							<!-- <image class="" src="../../static/youju/play.svg"></image>暂无 -->
							<view class="scenery-tip">景</view>
							<view class="scenery-dcse">日月潭</view>
						</view>
						<view class="list-item-right-warm">
							<!-- <image class="" src="../../static/youju/play.svg"></image>暂无 -->
							<view class="scenery-tip">温</view>
							<view class="scenery-dcse">温度特别温暖</view>
						</view>
					</view>
				</view>
				<view class="list-item" v-for="(item, index) in hotelList" @click="goDetail(index)" :key="index">
					<view class="list-item-left">
						<image class="list-item-left-video" src="../../static/youju/f4.jpg">
							<image class="list-item-left-play" src="../../static/youju/play.svg"></image>
					</view>
					<!-- @click="pageTo('/pages/found/youju/youju')" -->
					<view class="list-item-right">
						<view class="list-item-right-title">{{ item.name }}</view>
						<view class="list-item-right-appraise">
							<uni-rate class="rote-appraise" size="13" :value="item.appraise" disabled></uni-rate>
							<text class="list-item-right-appraise-rote">{{ item.appraise }}分</text>
						</view>
						<view class="list-item-right-tip">{{ item.brief }}</view>
						<view class="list-item-right-address" v-show="item.id == 1">台湾 日月潭</view>
						<view class="list-item-right-address" v-show="item.id == 2">杭州西湖，桂林</view>
						<view class="list-item-right-address" v-show="item.id == 3">广州白山，深圳欢乐谷</view>
						<view class="list-item-right-address" v-show="item.id == 4">深圳西街，上海虎门</view>
						<view class="list-item-right-address" v-show="item.id == 5">日月潭，西安</view>
						<view class="list-item-right-scenery">
							<!-- <image class="" src="../../static/youju/play.svg"></image>暂无 -->
							<view class="scenery-tip">景</view>
							<view class="scenery-dcse">日月潭</view>
						</view>
						<view class="list-item-right-warm">
							<!-- <image class="" src="../../static/youju/play.svg"></image>暂无 -->
							<view class="scenery-tip">温</view>
							<view class="scenery-dcse">温度特别温暖</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 视频组件 -->
		<view v-if="navIndex == 2" class="index">
			<cu-video class="video" :video_list="videoList" :currentVideo="currentVideo" @changeVideo="changeVideo" />
		</view>
		<view v-if="navIndex == 3" style="width: 750upx;height: 100vh;overflow: hidden;">
			<image style="width: 100%; height: 100%;" src="../../static/baiying/baiying.jpg"></image>
		</view>
	</view>
</template>
<script>
	import indexHeader from '@/components/index-header.vue';
	import cuVideo from '@/components/cu-video.vue';
	import uniRate from '@/components/uni-rate/uni-rate.vue';
	import md5 from 'js-md5';
	export default {
		components: {
			indexHeader,
			cuVideo,
			uniRate
		},
		data() {
			return {
				navIndex: 2,
				hotelList:[
					{	
						id:1,
						image:"../../static/youju/s1-1.jpg",
						name:"福田莲花城市",
						appraise:5,
						community_tag:[
							{
								id:1,
								name:"疗养胜地"
							},
							{
								id:2,
								name:"治愈系酒店"
							},						{
								id:3,
								name:"网红酒店"
							}
						],
						address:"台湾 日月台",
						scenery:"日月潭",
						warm:"温度特别温暖"
					},
					{
						id:2,
						image:"../../static/youju/s2-4.jpg",
						name:"龙岗鸿荣源公园大地",
						appraise:5,
						community_tag:[
							{
								id:1,
								name:"公园社区"
							},
							{
								id:2,
								name:"网红居住地"
							},						{
								id:3,
								name:"酒店试居住"
							}
						],
						address:"深圳 大地",
						scenery:"大地公园",
						warm:"温度特别温暖"
					},
					{
						id:3,
						image:"../../static/youju/s3-4.jpg",
						name:"龙华金苹果社区",
						appraise:5,
						community_tag:[
							{
								id:1,
								name:"疗养胜地"
							},
							{
								id:2,
								name:"贵族社区"
							},						{
								id:3,
								name:"金苹果社区"
							}
						],
						address:"台湾 日月台",
						scenery:"日月潭",
						warm:"温度特别温暖"
					},
					{
						id:4,
						image:"../../static/youju/s4-1.jpg",
						name:"南山万象城社区",
						appraise:5,
						community_tag:[
							{
								id:1,
								name:"居住圣地"
							},
							{
								id:2,
								name:"景色社区"
							},						{
								id:3,
								name:"网红居住地"
							}
						],
						address:"台湾 日月台",
						scenery:"日月潭",
						warm:"温度特别温暖"
					},
				],
				scrollTop: 0, // 滚动
				videoList: [],
				// 默认第一个视频
				currentVideo: 0,
				
				// 时间戳
				timestamp:'',
				signature:'',
			};
		},
		onLoad() {
			// this.getHotelList();
			let timestamp = (new Date()).getTime()
			let appid = 'bmdh00ecfbc943a124151'
			let str= 'timestamp=' + timestamp + '&page=1' + '&type=1' + '&key=' + appid
			let signature= md5(str).toUpperCase();
			console.log('signature : ' +  signature , "timestamp : "  + timestamp)
			this.getVideo(signature,timestamp);
		},
		onShow() {
			// this.getHotelList();
			// let timestamp = (new Date()).getTime()
			// let appid = 'bmdh00ecfbc943a124151'
			// let str= 'timestamp='+timestamp+'&page=1'+'&type=1'+'&key='+ appid
			// let signature= md5(str).toUpperCase();
			// console.log('signature : ' +  signature , "timestamp : "  + timestamp)
			// this.getVideo(signature,timestamp);
		},
		methods: {
			changeVideo(index) {
				this.currentVideo = index;
			},
			/**
			 * @desc 获取优居列表
			 */
			// async getHotelList() {
			// 	console.log('请求接口');
			// 	let res = await this.$http.request({
			// 		method: 'get',
			// 		url: '/api/Community/getList'
			// 	});
			// 	if (res.errno == 0) {
			// 		// console.log(res)
			// 		let hotelList = res.data.list;
			// 		this.hotelList = hotelList;
			// 		console.log(this.hotelList);
			// 	}
			// 	//  else {
			// 	// 	uni.showToast({
			// 	// 		title: 'res.errstr',
			// 	// 		duration: 5000,
			// 	// 		icon: 'loading'
			// 	// 	});
			// 	// }
			// },

			goDetail(index) {
				console.log(index); // id = 1
				uni.navigateTo({
					url: `/pages/found/youju/youju?id=${index + 1}`
				});
			},

			/**
			 * 	
			 * Signature (数据签名)计算方法：将系统分配的 Timestamp(时间戳)、(其他参数)、Appid(bmdh00ecfbc943a124151) 
			 * 三个字符串按先后顺序拼接成一个字符串并进行 MD5 加密计算，加密完成的字符串转大写。
			 * 如果调用的数据签名验证失败，接口调用会返回 HTTP 状态码 40001。
			 * 其他状态码请参见状态码表。
			 * 
			 * var appid = 'bmdh00ecfbc943a124151';//加密过后的AppId
			 * var timestamp = (new Date()).getTime();//当前时间戳
			 * var parameter = '&page=1'+'&limit=3';(数据参数没有就不参与签名)
			 * Var str= 'timestamp='+timestamp+'&page=1'+'&limit=3'+'&key='+appid;
			 * var signature = hex_md5(str).toUpperCase(); //密钥
			 * 
			 * 
			 * 
			 * @获取视频数据
			 * 
			 * 
			 * 
			 * 
			 */
			// async getVideo() {
			// 	let res = await this.$http.request({
			// 		method: 'get',
			// 		url: '/api/video/getList',
			// 		data: {
			// 			'signature ': signature,
			// 			'timestamp': timestamp,
			// 		}
			// 	});
			// 	// console.log(res)
			// 	if (res.errno == 0) {
			// 		console.log(res);
			// 		let videoList = res.data.list;
			// 		console.log(videoList)
			// 		this.videoList = videoList;
			// 	}
			// 	// else {
			// 	// 	uni.showToast({
			// 	// 		title: 'res.errstr',
			// 	// 		duration: 5000,
			// 	// 		icon: 'loading'
			// 	// 	});
			// 	// }
			// },
			
			async getVideo(signature,timestamp) {
				console.log(signature)
				console.log(timestamp)
				// return
				let res = await this.$http.request({
					method: 'POST',
					url: '/index/Lists/video_list',
					data: {
						signature:signature ,
						timestamp:timestamp,
						page:1,
						type:1
					}
				});
				if (res.state == 10000) {
					console.log(res);
					let videoList = res.data;
					console.log(videoList)
					this.videoList = videoList;
				}
				// else {
				// 	uni.showToast({
				// 		title: 'res.errstr',
				// 		duration: 5000,
				// 		icon: 'loading'
				// 	});
				// }
			},
			

			/**
			 * @desc 顶部导航栏切换
			 */
			headerSwitch(val) {
				val == 0 ? this.pageTo('/pages/found/search/search') : (this.navIndex = val);
			},
			/**
			 * @desc 跳转页面
			 */
			pageTo(url) {
				uni.navigateTo({
					url: url
				});
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			}
		}
	};
</script>

<style lang="less">
	.content {
		background-color: #151619;
		font-family: PingFangSC-bold;

		.list {
			background-color: #151619;

			&-item {
				display: flex;
				padding: 20upx 20upx 24upx 20upx;
				border-bottom: 1rpx solid #444444;

				&-left {
					width: 180upx;
					height: 180upx;
					position: relative;

					&-video {
						width: 100%;
						height: 100%;
						border-radius: 10upx;
					}

					&-play {
						width: 64upx;
						height: 64upx;
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						z-index: 999;

					}
				}

				&-right {
					flex: 1;
					margin-left: 20upx;

					&-title {
						color: #ffffff;
						font-size: 32upx;
						margin-bottom: 16upx;
						font-weight: bold;
					}

					&-appraise {
						display: flex;
						align-items: center;
						margin-bottom: 18upx;

						&-rote {
							color: #787878;
							font-size: 24upx;
							margin-left: 10upx;
						}

						.rote-appraise {
							height: 1upx;
						}
					}

					&-tip {
						font-weight: bold;
						font-size: 24upx;
						color: rgba(255, 103, 0, 1);
					}

					&-address {
						margin: 10upx 0;
						font-size: 24upx;
						color: #f3f3f3;
					}

					&-scenery {
						margin-top: 12upx;
						display: flex;
						align-items: center;
						font-size: 24upx;
						color: #f3f3f3;

						.scenery-tip {
							background-color: rgba(139, 195, 74, 1);
						}

						// image {
						// 	width: 24upx;
						// 	height: 24upx;
						// 	margin-right: 10upx;
						// }
					}

					&-warm {
						margin-top: 12upx;
						display: flex;
						align-items: center;
						font-size: 24upx;
						color: #f3f3f3;

						.scenery-tip {
							background-color: #FF8F43;
						}

						// image {
						// 	width: 24upx;
						// 	height: 24upx;
						// 	margin-right: 10upx;
						// }
					}
				}
			}
		}

		.index {
			display: flex;
			flex-direction: column;
			/* align-items: center; */
			justify-content: center;
			background-color: #333333;
			// height: 100vh;
		}

		// .sideline{
		// 	height: 1px;
		// 	content: '';
		// 	-webkit-transform: scaleY(.5);
		// 	transform: scaleY(.5);
		// 	background-color: #e5e5e5;
		// }
		.scenery-tip {
			width: 28upx;
			height: 28upx;
			line-height: 22upx;
			border-radius: 6upx;
			background-color: rgba(139, 195, 74, 1);
			color: rgba(255, 255, 255, 1);
			font-size: 20upx;
			text-align: center;
			font-family: Microsoft Yahei;
			border: 1px solid rgba(255, 255, 255, 0);
		}

		.scenery-dcse {
			margin-left: 12upx;
		}
	}
</style>
