<template>
	<view class="know-list">
		<view v-for="(item, index) in list" :key="index" >
			<view class="may-nowk-title">{{item.title}}</view>
			<view class="list" v-for="(user, index) in item.user" :key="index" >
				<view class="list-left" @tap="pageTo('/pages/interact/interactPage/interactPersonaHome')">
					<image class="advada_img" :src="user.advada_img"></image>
				</view>
				<view class="list-right">
					<text class="name" @tap="pageTo('/pages/interact/interactPage/interactPersonaHome')">{{ user.name }}</text>
					<view class="" @tap="guanzhu(user)">
						<view class="guanzhu0" v-if="user.status">
							<text style="font-size: 36upx;font-weight: normal;">+</text>
							<text>关注</text>
						</view>
						<view class="guanzhu1" v-else>已关注</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default: () => []
		}
	},
	methods:{
		guanzhu(item){
			item.status = !item.status 
		},
		
		pageTo(url) {
			uni.navigateTo({
				url: url
			});
		},
		
	}
};
</script>

<style lang="less" scoped>
.know-list {
	background-color: #ffffff;
	.list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 160upx;
		text-align: center;
		padding: 0 40upx;
		.list-left{
			.advada_img{
				height: 80upx;
				width: 80upx;
				border-radius: 50%;
			}
		}
		.list-right{
			height: 160upx;
			flex: 1;
			margin-left: 24upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 2upx solid #f3f3f3;
			.name{
				color: rgba(51, 51, 51, 1);
				font-size: 36upx;
			}
			.guanzhu0 {
				width: 120upx;
				height: 48upx;
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				border: 2upx solid #ff9500;
				border-radius: 24upx;
				color: #ff9500;
			}
			.guanzhu1{
				width: 120upx;
				height: 48upx;
				line-height: 48upx;
				text-align: center;
				border: 2upx solid #999999;
				border-radius: 24upx;
				color: #999999;
			}
		}
	}
	.may-nowk-title{
		height: 64upx;
		line-height: 64upx;
		padding: 0 40upx;
		background-color: #F3F3F3;
		color: #999999;
		font-size: 26upx;
	}
}
</style>
