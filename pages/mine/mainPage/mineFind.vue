<template>
	<view class="mine-find">
		<view class="menu">
			<mineFindHeader :tabList="tabList" :heightFlag="true" :activeTab="activeTab" @onClickTab="onClickTab"></mineFindHeader>
		</view>
		<!-- :style="{height:heightW+'px'}"  :style="{height:swiperHeight+'px'}" -->
		<!--<view class="container">
			<view class="content">
				<swiper class="swiper" :current="activeTab" @change="swiperChange">
					<swiper-item class="swiper-item">
						<view>历史</view>
					</swiper-item>
					<swiper-item class="swiper-item">
						<view>
							<waterFallFlow :list="list" :loading="loading" @click="choose"></waterFallFlow>
						</view>
					</swiper-item>
					<swiper-item class="swiper-item">
						<view>点赞</view>
					</swiper-item>
				</swiper>
			</view>
		</view> -->
		<view class="container">
			<view class="history" v-show="activeTab == 0">
				历史
			</view>
			<view class="collcet"  v-show="activeTab == 1">
				<waterFallFlow :list="list" :loading="loading" @chooseClick="choose"></waterFallFlow>
			</view>
			<view class="dianzan"  v-show="activeTab == 2">
				点赞
			</view>			
		</view>
	</view>
</template>

<script>
	// 瀑布流组件
	import waterFallFlow from '../commom/mine-waterfall-flow.vue';
	// 模拟 JSON 数据
	const data = require('../../../static/mock/data.json');
	// 头部导航
	import mineFindHeader from "@/components/mineFindHeader"
	export default {
		name:"mineFind",
		components: {
			waterFallFlow,
			mineFindHeader
		},
		data() {
			return {
				// menu
				activeTab: 1,
				tabList: [{
						title: '历史'
					},
					{
						title: '收藏'
					},
					{
						title: '点赞'
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
		}, 
		onReachBottom() {
			this.page++;
			this.loading = true;
			this.getList();
		},
		methods: {
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
.menu{
	position: sticky;
	top: 0rpx;
	z-index: 99;
	height: 88upx;
	text-align: center;
	background-color: #FFFFFF;
	border-top: 1px solid #EEEEEE;
}
.container{
	display: flex;
	flex-flow: column;
	margin-top: 10upx;
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
