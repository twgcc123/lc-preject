<template>
	<view class="container">
		<view class="list">
			<view class="list-item" v-for="(item,index) in dataList" :key="index">
				<view class="list-item-left">
					<image class="avatar" :src="item.avatar" @click="pageTo('/pages/interact/interactPage/interactPersonaHome')"></image>
					<view class="nikename">{{ item.nikename }}</view>
				</view>
				<view class="list-item-right">
					<view v-if="item.is_follow" class="follow">已关注</view>
					<view v-else class="no-follow"> <text>+</text>关注</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:[
					{
						id: 1,
						avatar: '/static/hudong/c1.jpg',
						nikename: '文小鱼',
						is_follow: false
					},
					{
						id: 2,
						avatar: '/static/hudong/c2.jpg',
						nikename: '刘晓雪',
						is_follow: true
					},
					{
						id: 3,
						avatar: '/static/hudong/c3.jpg',
						nikename: '刘晓雪',
						is_follow: false
					}
				]
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
				});
			}
		}
	}
</script>

<style lang="less" scoped>
.container{
	.list{
		background-color: #FFFFFF;
		width: 750upx;
		padding: 0 40upx;
		.list-item{
			height: 128upx;
			border-bottom: 1upx solid #eaeaea;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.list-item-left{
				display: flex;
				align-items: center;
			}
			.avatar{
				width: 80upx;
				height: 80upx;
				border-radius: 80upx;
			}
			.nikename{
				color: #333333;
				font-size: 32upx;
				line-height: 44upx;
				margin-left: 24upx;
			}
			.follow{
				color: #AAAAAA;	
				font-size: 28upx;
				line-height: 40upx;
			}
			.no-follow{
				width: 120upx;
				height: 48upx;
				border: 1px solid #FF9500;
				border-radius: 48upx;
				text-align: center;
				color: #FF9500;
				font-size: 28upx;
				line-height: 40upx;
				display: flex;
				align-items: center;
				justify-content: center;
				text{
					font-size: 36upx;
					margin-bottom: 10upx;
				}
			}
		}
	}
}
</style>
