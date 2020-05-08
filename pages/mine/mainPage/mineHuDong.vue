<template>
	<view class="hudong">

		<!-- 头部导航 -->
		<view class="header" :style="[{paddingTop: hasNotchInScreen ? '88upx': '44upx'}]">
			<view class="header-content">
				<uni-icons class="back-icons" @tap="goBack" type="arrowleft" color="#565656" size="22"></uni-icons>
				<view class="header-title">我的互动</view>
			</view>
		</view>
		
<!-- 		<view class="menu">
			<dropdown-menu class="dropdown-menu" @toggle="toggle" @change="change">
				<dropdown-menu-item :value="value1" :disabled="false" :options="options1"></dropdown-menu-item>
				<dropdown-menu-item :value="value2" :options="option2"></dropdown-menu-item>
				<view class="menu-address">选择地区</view>
				<view class="menu-">筛选</view>
			</dropdown-menu>
		</view> -->
		
		<view class="search-bar" style="background-color: #FFFFFF;">
			<view class="search-all" v-for="(title, index) in searchBar" :key="index" @tap="choice(title, index)" :class="activeTitle == index ? 'active-title' : null">
				<text class="tools-name">{{ title.title }}</text>
				<text class="tools-icon"></text>
			</view>
		</view>

		<view class="container">
			<view class="swiper">
				<view style="height: 100%;">
					<scroll-view @scrolltolower="lower" scroll-y="true" @scroll="scroll" style="height:100%;">
						<hudongList :hudongList="huDongtData"></hudongList>
					</scroll-view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import dropdownMenu from '@/components/dropdown-menu/dropdown-menu';
	import dropdownMenuItem from '@/components/dropdown-menu-item/dropdown-menu-item';
	import hudongList from '../commom/mineHudongListConmon.vue';
	import interactData from '@/utils/interact.data.js';
	export default {
		name: 'mineHuDong',
		components: {
			dropdownMenu,
			dropdownMenuItem,
			hudongList
		},

		data() {
			return {
				value1: '0',
				activeTitle:0,
				huDongtData: interactData.hudongData, // js 关注数据
				searchBar: [
					{
						id: 1,
						title: '全部状态'
					},
					{
						id: 1,
						title: '排序方式'
					},
					{
						id: 1,
						title: '地区选择'
					},
					{
						id: 1,
						title: '更多筛选'
					}
				],
				// options1: [{
				// 		text: '全部状态',
				// 		value: '0'
				// 	},
				// 	{
				// 		text: '待开始',
				// 		value: '1'
				// 	},
				// 	{
				// 		text: '进行中',
				// 		value: '2'
				// 	},
				// 	{
				// 		text: '已完成',
				// 		value: '3'
				// 	},
				// 	{
				// 		text: '已取消',
				// 		value: '4'
				// 	},
				// 	{
				// 		text: '已失败',
				// 		value: '5'
				// 	}
				// ],
				// value2: 'a',
				// option2: [{
				// 		text: '默认排序',
				// 		value: 'a'
				// 	},
				// 	{
				// 		text: '互动开始时间优先',
				// 		value: 'b'
				// 	},
				// 	{
				// 		text: '受理时间优先',
				// 		value: 'c'
				// 	},
				// ]
			}
		},
		onLoad() {
			
		},
		onShow() {
			console.log(this.huDongtData)
		},

		updated() {},

		methods: {
			lower: function(e) {
				// this.loadMore = true;
				// uni.showLoading({
				// 	title: '正在加载...'
				// });
				console.log("daodile")
				console.log(e)
				setTimeout(() => {
					if (this.huDongtData.length < 10) {
						uni.hideLoading();
						this.huDongtData = this.huDongtData.concat(this.huDongtData);
					} else {
						uni.hideLoading();
						this.loadMoreDcse = '我是有底线的！';
					}
				}, 800);
			},
			
			scroll: function() {},
			
			toggle(value) {
				console.log(value);
			},
			change(value, item) {
				// 这里返回选中的值
				console.log(value, item);
			},
			
			pageTo(url) {
				uni.navigateTo({
					url: url
				})
			},

			// 跳转tabar页面
			goBack(){
				uni.navigateBack({})
			},
			
			choice(item, index) {
				console.log(index)
				this.activeTitle = index
			},
		},
	};
</script>


<style lang="less" scoped>
	
	.container {
		position: relative;
		height: calc(100vh - 178upx) !important;
	}
	
	/deep/.swiper {
		height: 100% !important;
	}
	
	.header {
		position: sticky;
		top: 0;
		z-index: 99;
		background-color: #FFFFFF;
		padding: 44px 20px 0 20px;

		.header-content {
			height: 90upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;

			.header-title {
				text-align: center;
				color: #000000;
				font-size: 36upx;
				font-weight: bold;
				flex: 1;
			}

			.back-icons {
				position: absolute;
				left: -8upx;
			}
		}
	}
	.dropdown-menu{
		display: flex;
		box-sizing: border-box;
		align-items: center;
		justify-content: space-around;
	}
	.search-bar {
		// background-color: #FFFFFF;
		padding: 0 20upx;
		height: 90upx;
		display: flex;
		align-items: center;
		.search-all,
		.search-paixun,
		.search-address,
		.search-shaixun {
			text-align: center;
			display: flex;
			width: 25%;
			color: rgba(51, 51, 51, 1);
			font-size: 28upx;
			font-weight: 700;
			box-sizing: border-box;
			.tools-name {
				flex: 1;
				width: 90%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				// background-color: #FF9700;
			}
			.tools-icon {
				display: inline-block;
				width: 10%;
				position: relative;
				top: 14upx;
				left: -6upx;
				display: flex;
				align-items: center;
				margin-right: 8upx;
				width: 0;
				height: 0;
				border-left: 8rpx solid transparent;
				border-right: 8rpx solid transparent;
				border-top: 8rpx solid #222;
				font-size: 0;
				line-height: 0;
			}
		}
		.active-title {
			color: #ff9533;
			.tools-icon{
				border-top: 8rpx solid #ff9533;
			}
		}
	}
</style>
