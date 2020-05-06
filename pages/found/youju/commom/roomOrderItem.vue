<template>
	<view class="">
		<view class="detail-list">
			<image src="../../../../static/youju/fangjian.jpg" mode=""></image>
			<view class="detail-item">
				<view class="dtitle">整住·1室1厅1阳1卫1床</view>
				<view class="daddress">深圳自在社区</view>
				<view class="dtime">12月11日—12月21日 共10晚</view>
			</view>
		</view>	
	</view>
</template>

<script>
	export default {
		data(){
			return{}
		},
		props:{}
	}
</script>

<style lang="less" scoped>
	.detail-list{
		margin: 32upx 0;
		display: flex;
		color: rgba(102, 102, 102, 1);
		font-size: 28upx;
		image{
			width: 152upx;
			height: 100upx;
			border-radius: 8upx;
		}
		.detail-item{
			flex: 1;
			margin-left: 20upx;
			.dtitle{
				color: rgba(51, 51, 51, 1);
			}
			.daddress{}
			.dtime{}
		}
	}
</style>
