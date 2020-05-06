<template>
	<view class="container">
		<view :class="hasNotchInScreen ? 'navbar ': 'navbar' ">
			<view class="navbar-left" @click="pageTo()">取消</view>
			<view class="navbar-title">设置备注名</view>
			<view class="navbar-right" @click="pageTo()">完成</view>
		</view>
		<view class="content">
			<view class="title">备注名</view>
			<input class="input-box" type="text" value="" placeholder="设置备注名" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
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
.navbar{
	padding: 0 32upx;
	padding-top: 40upx;
	width: 750upx;
	height: 130upx;
	position: sticky;
	left: 0;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.navbar-left{
		color: #101010;
		font-size: 32upx;
		text-align: left;
	}
	.navbar-title{
		color: #000000;
		font-size: 34upx;
		text-align: center;
		font-weight: 500;
	}
	.navbar-right{
		width: 120upx;
		height: 64upx;
		line-height: 64upx;
		border-radius: 8upx;
		background-color: #333333;
		color: #ffffff;
		font-size: 32upx;
		text-align: center;
	}
}
.ac-navbar{
	padding-top: 88upx;
	height: 178upx;
}
.content{
	margin-top: 28upx;
	width: 750upx;
	.title{
		padding: 0 32upx;
		color: #333333;
		font-size: 28upx;
		text-align: left;
	}
	.input-box{
		background-color: #FFFFFF;
		width: 750upx;
		height: 102upx;
		padding: 0 32upx;
	}
}
</style>
