<template>
	<view class="container">
		<view class="header" :style="[{paddingTop: hasNotchInScreen ? '44px': '20px'}]">
			<view class="header-search">
				<uni-search-bar bgColor="#f5f5f5" :radius="100" @confirm="search" clearButton="none" cancelButton="none" placeholder="输入用户完整手机号"></uni-search-bar>
			</view>
			<view class="header-cancle" @click="pageTo()">取消</view>
		</view>
		<view class="content">
			<text class="title">我自己</text>
			<view class="author" @click="pageTo()">
				<view class="author-left">
					<image class="author-left-avatar" src="../../static/hudong/c2.jpg"></image>
					<view class="author-left-info">
						<view class="author-left-info-nikename">欧阳菲菲</view>
						<view class="author-left-info-code">ID 2399</view>
					</view>
				</view>
				<view class="author-right">爸妈都好优居</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	export default {
		components:{
			uniSearchBar,
		},
		data() {
			return {
				
			};
		},
		methods:{
			search(){
				
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
.container{
}
.header{
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: 32upx;
	background-color: #FFFFFF;
	.header-search{
		flex: 1;
		padding-left: 4rpx;
		padding-right: 8rpx;
	}
	.header-cancle{
		color: #007AFF;
		font-size: 32upx;
		line-height: 44upx;
	}
}
.content{
	.title{
		color: #666666;
		font-size: 28upx;
		line-height: 40upx;
		margin: 12upx 0 10upx 20upx;
	}
	.author{
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 128upx;
		padding: 0 40upx 0 20upx;
		.author-left{
			display: flex;
			.author-left-avatar{
				width: 80upx;
				height: 80upx;
				border-radius: 8upx;
			}
			.author-left-info{
				margin-left: 20upx;
				.author-left-info-nikename{
					color: #000000;
					font-size: 32upx;
					font-weight: 500;
				}
				.author-left-info-code{
					font-size: 24upx;
					line-height: 34upx;
					color: #F2AAB1;
				}
			}
		}
		.author-right{
			font-size: 24upx;
			line-height: 34upx;
			color: #666666;
		}
	}
}
</style>
