<template>
	<view class="container" :style="[{paddingTop: hasNotchInScreen ? '44px': '20px'}]">
		<view class="header">
			<view class="header-search">
				<uni-search-bar bgColor="#f5f5f5" :radius="100" @confirm="search" clearButton="none" cancelButton="none" placeholder="搜索地点"></uni-search-bar>
			</view>
			<view class="header-cancle" @click="pageTo()">取消</view>
		</view>
		<view class="list">
			<view class="list-item" @click="pageTo()" v-for="(item,index) in cityList" :key="index">
				<view class="list-item-box">
					<view class="list-item-title">{{ item.title }}</view>
					<view class="list-item-desc">{{ item.desc }}</view>
				</view>
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
				cityList:[
					{
						title: '不显示文字',
						desc: ''
					},
					{
						title: '某地某地某地',
						desc: '广东省深圳市南山区'
					},
					{
						title: '某地某地某地',
						desc: '广东省深圳市南山区'
					},
					{
						title: '某地某地某地',
						desc: '广东省深圳市南山区'
					},
					{
						title: '某地某地某地',
						desc: '广东省深圳市南山区'
					},
				]
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
	background-color: #FFFFFF;
	padding: 0 32upx;
	height: 100vh;
}
.header{
	width: 100%;
	height: 120upx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.header-search{
		width: 620upx;
		// border: 1px solid red;
	}
	.header-cancle{
		color: #666666;
		font-size: 30upx;
		line-height: 42upx;
	}
}
.list{
	.list-item{
		height: 120upx;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid #DDDDDD;
		.list-item-title{
			color: #333333;
			font-size: 30upx;
			line-height: 42upx;
			font-weight: 500;
		}
		.list-item-desc{
			color: #999999;
			font-size: 24upx;
			line-height: 34upx;
		}
	}
}
</style>
