<template>
	<view>
		<!-- 头部导航 -->
		<view class="header" :style="[{ paddingTop: hasNotchInScreen ? '88upx' : '44upx' }]">
			<view class="header-content">
				<uni-icons class="back-icons" @tap="goBack" type="arrowleft" color="#565656" size="22"></uni-icons>
				<view class="header-title">我的互动</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
	position: sticky;
	top: 0;
	z-index: 99;
	background-color: #ffffff;
	/*#ifdef MP-WEIXIN*/
	padding: 44upx 40upx 0 40upx;
	/*#endif*/
	/*#ifdef APP-PLUS*/
	padding: 88upx 40upx 0 40upx;
	/*#endif*/
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
			left: 0;
			top: 22upx;
		}
	}
}
</style>
