<template>
	<view class="base-require">
		<view class="base-require-title">基本要求</view>
		<view class="base-require-content">请参照需要写入。</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
.base-require{
	padding: 30upx;
	background-color: #ffffff;
	height: 100vh;
	&-title{
		color: #333333;
		font-size: 44upx;
		font-weight: 500;
	}
	&-content{
		color: #333333;
		font-size: 26upx;
		line-height: 2;
		margin-top: 30upx;
	}
}
</style>
