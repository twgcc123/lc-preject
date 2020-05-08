<template>
	<view class="contaier">
		<!-- 头部tab标签切换 -->
		<view class="header" :style="[{ paddingTop: hasNotchInScreen ? '88upx': '44upx'}]">
			<view class="navbar-back" @click="pageTo()">
				<uni-icons type="back" size="20"></uni-icons>
			</view>
			<view class="navbar">
				<view class="navbar-item" @click="pageTo('/pages/dynamic/collectionSign')">收藏</view>
				<view class="navbar-item active">精选 · 日签</view>
				<view class="navbar-item" @click="pageTo('/pages/dynamic/mySign')">我的</view>
			</view>
		</view>
		<view class="content">
			<scroll-view class="swiper-tab" scroll-x :scroll-left="scrollLeft" :scroll-with-animation="true">
				<view class="swiper-tab-list" v-for="(item,index) in signList" :key="item.id">
					<view class="swiper-tab-list-item">
						<heart-sign :sign="item" marginTop="188rpx" width="594rpx" height="936rpx"></heart-sign>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<!-- 底部tabbar -->
		<footer-bar></footer-bar>
	</view>
</template>

<script>
import heartSign from '@/components/heart-sign.vue'
import footerBar from '@/components/footer-bar.vue'
export default{
	name:"mineDailySign",
	components:{
		footerBar,
		heartSign
	},
	data() {
		return {
			scrollLeft: 1 ,//滚动位置
			signList:[
				{
					id: 1,
					time: '二零二零年一月三十日',
					mark: 1,
					title: '念',
					content: '山高远阔，人间烟火。无一是你，无一不是你。',
					author: '东野圭吾'
				},
				{
					id: 2,
					time: '二零二零年一月三十日',
					mark: 1,
					title: '念',
					content: '山高远阔，人间烟火。无一是你，无一不是你。',
					author: '东野圭吾'
				},
				{
					id: 3,
					time: '二零二零年一月三十日',
					mark: 1,
					title: '念',
					content: '山高远阔，人间烟火。无一是你，无一不是你。',
					author: '东野圭吾'
				}
			]
		}
	},
	methods:{
		onClickTab(index) {
			this.activeTab = index;
		},
		/**
		 * 跳转页面
		 */
		pageTo(url){
			if(!url){
				uni.navigateBack();
				return;
			}
			uni.navigateTo({
				url: url
			})
		}
	}
}
</script>

<style lang="less">
	.header{
		position: sticky;
		top: 0;
		z-index: 999;
		background-color: #F3f3f3;
		display: flex;
		align-items: center;
		.navbar-back{
			height: 88upx;
			margin-left: 40upx;
			margin-right: 113upx;
			display: flex;
			align-items: center;
			// background-color: #F0AD4E;
		}
		.navbar{
			height: 88upx;
			display: flex;
			flex-direction: row;
			align-items: center;
		}
		.navbar-item{
			// background-color: #F43F3B;
			margin-right: 50upx;
			font-size: 36upx;
			color: #666666;
			line-height: 44upx;
		}
		.active{
			color: #333333;
			font-weight: bold;
		}
	}
	.content{
		padding-bottom: 200upx;
	}
	.swiper-tab {
		width: 100%;
		white-space: nowrap;
		border: 0;
	}
	.swiper-tab-list {
		display: inline-block;
	}
	.swiper-tab-list-item{
		margin: 0 44upx;
		white-space: pre-wrap;
	}
	
	// .line{
	// 	width: 1px;
	// 	height: 500upx;
	// 	background-color: #F43F3B;
	// 	position: absolute;
	// 	top: 0;
	// 	left: 187px;
	// 	z-index: 999999;
	// }
</style>
