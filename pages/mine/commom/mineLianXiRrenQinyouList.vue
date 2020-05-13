<template>
	<view class="know-list">
		
			<view class="may-nowk-title" v-if="item.title">全部关注</view>
			<view class="list" v-for="(user, index) in lists" :key="index" @tap="pageTo('/pages/interact/interactPage/interactPersonaHome')">
				<view class="list-left"><image class="advada_img" :src="user.image_app"></image></view>
				<view class="list-right">
					<text class="name">{{ user.nickname }} 
					<text v-if = "user.remark_name !== ''">（{{user.remark_name}}）</text>
					</text>
					<view class="guanxi">{{ user.attention=='1' ? '已关注':( user.attention=='2'?'相互关注':'亲友') }}</view>
				</view>
			</view>
		
	</view>
</template>

<script>
export default {
	props: {
		lists: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		pageTo(url) {
			uni.navigateTo({
				url: url
			});
		}
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
		padding-left:40upx;
		.list-left {
			.advada_img {
				height: 80upx;
				width: 80upx;
				border-radius: 50%;
			}
		}
		.list-right {
			height: 160upx;
			flex: 1;
			margin-left: 24upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 2upx solid #f3f3f3;
			padding-right: 40upx;
			.name {
				color: rgba(51, 51, 51, 1);
				font-size: 36upx;
			}
			.guanxi{
				color: #999999;
				font-size: 28upx;
			}
		}
	}
	.may-nowk-title {
		height: 64upx;
		line-height: 64upx;
		padding: 0 40upx;
		background-color: #f3f3f3;
		color: #999999;
		font-size: 26upx;
	}
}
</style>
