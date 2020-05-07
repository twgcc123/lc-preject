<template>
	<view class="mine-find">
		<!-- 头部  :style="[{paddingTop: hasNotchInScreen ? '88upx': '44upx'}]"-->
		<view class="header">
			<view class="header-content">
				<uni-icons class="back-icons" @tap="goBack" type="arrowleft" color="#565656" size="22" ></uni-icons>
				<view class="header-title">我的收藏</view>
			</view>
		</view>
		
		<view class="menu">
			<view class="menu-item" v-for="(item,index) in tabList" :key="index" @click="handlerMenu(index)">
				<text :class="['menu-text',activeTab==index ? 'menu-item-active':null]">{{item.title}}</text>
			</view>
		</view>

		<view class="container">
			<view class="history" v-show="activeTab == 0">
				<mySign></mySign>
			</view>
			<view class="collcet"  v-show="activeTab == 1">
				<waterFallFlow :list="list" :loading="loading" @chooseClick="choose"></waterFallFlow>
			</view>
			<view class="dianzan"  v-show="activeTab == 2">
				<mineFindRoom></mineFindRoom>
			</view>			
		</view>
	</view>
</template>

<script>
	// 瀑布流组件
	import waterFallFlow from '../commom/mine-waterfall-flow.vue';
	// 收藏房间组件
	import mineFindRoom from '../commom/mineFindRoom.vue';
	// 模拟 JSON 数据
	const data = require('../../../static/mock/data.json');
	// 头部导航
	import mineFindHeader from "@/components/mineFindHeader"
	import mySign from "@/components/mySign"
	
	export default {
		name:"mineFind",
		components: {
			waterFallFlow,
			mineFindHeader,
			mySign,
			mineFindRoom
		},
		data() {
			return {
				// menu
				activeTab: 1,
				tabList: [{
					
						id:1,
						title: '日签'
					},
					{
						id:2,
						title: '视频'
					},
					{
						id:3,
						title: '房间'
					}
				],
				
				// 瀑布流
				page: 1,
				start: '',
				end: '',
				list: [], // 列表
				loading: true,
			}	
		},
		onLoad() {
			this.getList();
			console.log(this.hasNotchInScreen)
		}, 
		onReachBottom() {
			this.page++;
			this.loading = true;
			this.getList();
		},
		methods: {
			
			handlerMenu(index){
				this.activeTab = index
			},
			
			goBack(){
				uni.navigateBack({})
			},
			//  menu ******* start
			onClickTab(index) {
				this.activeTab = index;
			},
			swiperChange(e) {
				console.log(e);
				this.activeTab = e.detail.current;
			},
			//  menu ******* end
			
			// 选中
			choose(item) {
				// item 返回选中 JSON 对象
				console.log(item)
			},
			// 模拟加载数据
			getList() {
				if (this.list.length < data.list.length) {
					setTimeout(() => {
						this.end = this.page * 10;
						this.list = this.list.concat(data.list.slice(this.start, this.end));
						this.start = this.end;
						// 延迟 120 毫秒隐藏加载动画，为了跟组件里面的 100 毫秒定位有个平缓过度
						setTimeout(() => {
							this.loading = false;
						}, 120);
					}, 1000)
				} else {
					this.loading = false;
				}
			}
		},
		onShow() {
			// let _this = this
			// uni.getSystemInfo({
			//     success: function (res) {
			// 		 _this.heightW = res.windowHeight;
			// 		 console.log(_this.heightW)
			// 		let infoh = uni.createSelectorQuery().select(".content");
			// 		console.log(infoh)
			// 		infoh.boundingClientRect(data=>{
			// 			console.log(data)
			// 			 _this.swiperHeight = data.height
			// 			 console.log(_this.swiperHeight)
			// 		}).exec();
			//     }
			// });
		}
	}
</script>

<style lang="less" scoped>
.header {
	position: sticky;
	top: 0;
	z-index: 99;
	background-color: #FFFFFF;
	padding: 88upx 32upx 0 32upx;
	.header-content {
		height: 90upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		.header-title {
			text-align: center;
			color: #333333;
			font-size: 36upx;
			font-weight: bold;
			flex: 1;
		}
		.back-icons{
			position: absolute;
			left: 0;
		}
	}
}

.menu{
	position: sticky;
	top:178upx;
	z-index: 9999;
	height: 88upx;
	text-align: center;
	background-color: #FFFFFF;
	border-top: 1px solid #EEEEEE;
	border-bottom: 1px solid #EEEEEE;
	display: flex;
	align-items: center;
	justify-content: center;
	.menu-item{
		display: flex;
		align-items: center;
		height: 88upx;
		width: 20%;
		box-sizing: border-box;
		color: #888888;
		text-align: center;
		font-size: 34upx;
		.menu-text{
			display: inline-block;
			width: 124upx;
			text-align: center;
			position: relative;
		}
		.menu-item-active{
			color: #4F4F4F;
			font-weight: bold;
		}
		.menu-item-active::after{
			content: "";
			position: absolute;
			width: 50%;
			height: 4px;
			border-radius: 6upx;
			background-color: #FF9502;
			bottom: -16upx;
			left: 50%;
			transform: translateX(-50%);
		}
	}
}

.container{
	display: flex;
	flex-flow: column;
	// padding-top: 10upx;
	background-color: #FFFFFF;
	.collcet{
		margin-top: 20upx;
	}
	// .content{
	// 	flex: 1;
	// 	height: 100%;
		
	// 	.swiper {
	// 	// 	/* #ifdef H5 */
	// 	// 	height: calc(100vh - 88rpx - 100rpx);
	// 	// 	/* #endif */
	// 	// 	/* #ifdef MP-WEIXIN */
	// 	// 	height: 100vh;
		
	// 	// 	/* #endif */
	// 	// 	.swiper-item {
	// 	// 		height: 100%;
	// 	// 	}
	// 	height: 9999px;
	// 	}
	// }
}
</style>
