<template>
	<view>
		<view class="item">
			<view class="item-title">亲友关系</view>
			<switch color="#00ff00" checked @change="switchChange" />
		</view>
		<button class="unfollow">取消关注</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			switchChange(e){
				console.log(e.target.value)
			},
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
.item{
	background-color: #FFFFFF;
	padding: 0 32upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 40upx 0;
	height: 102upx;
	.item-title{
		color: #333333;
		font-size: 34upx;
		text-align: left;
		line-height: 48upx;
	}
}
.unfollow{
	border: 0;
	background-color: #FFFFFF;
	color: #FF3A30;
	font-size: 34upx;
	line-height: 108upx;
}
button::after{
	border: 0 !important;
}
</style>
