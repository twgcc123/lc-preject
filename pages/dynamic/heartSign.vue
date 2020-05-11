<template>
	<view class="content">
		<view class="navbar" :style="[{top: hasNotchInScreen ? '88upx': '44upx'}]">
			<view class="navbar-left" @click="pageTo()">
				<uni-icons type="back" size="20"></uni-icons>
			</view>
			<view class="navbar-title">
				<image class="navbar-title-avatar" src="/static/hudong/c3.jpg"></image>
				<text class="navbar-title-text">作者六个大字</text>
			</view>
			<view class="navbar-right" @click="pageTo('/pages/mine/mainPage/mineDailySign')">查看更多</view>
		</view>
		
		<heart-sign :sign="sign" marginTop="188rpx" width="594rpx" height="936rpx"></heart-sign>
		<view class="time">2020年2月21日 11:50:26</view>
		<footer-bar></footer-bar>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import heartSign from '@/components/heart-sign.vue'
	import footerBar from '@/components/footer-bar.vue'
	export default {
		components:{
			heartSign,
			uniIcons,
			footerBar
		},
		data() {
			return {
				sign:{
					time: '二零二零年一月三十日',
					mark: 1,
					title: '念',
					content: '山高远阔，人间烟火。无一是你，无一不是你。',
					author: '东野圭吾'
				}
			};
		},
		methods:{
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
.content{
	// padding-top: 44px;
	.time{
		text-align: center;
		color: #999999;
		font-size: 24upx;
		line-height: 24upx;
		margin-bottom: 280rpx;
		margin-top: 48upx;
	}
}
.navbar{
	width: 100%;
	height: 88rpx;
	padding: 0 30rpx 0 40upx;
	display: flex;
	position: sticky;
	top: 40rpx;
	z-index: 999;
	justify-content: space-between;
	background-color: #f3f3f3;
	.navbar-left{
		line-height: 88rpx;
	}
	.navbar-title{
		line-height: 88upx;
		display: flex;
		align-items: center;
		.navbar-title-avatar{
			width: 48upx;
			height: 48upx;
			border-radius: 100%;
		}
		.navbar-title-text{
			color: #666666;
			font-size: 28upx;
			margin-left: 10upx;
		}
	}
	.navbar-right{
		line-height: 88upx;
		color: #333333;
		font-size: 32upx;
	}
}
</style>
