<template>
	<view class="container">
		<view class="header" :style="[{paddingTop: hasNotchInScreen ? '44px': '20px'}]">
			<view class="header-search">
				<uni-search-bar bgColor="#f5f5f5" @confirm="search" clearButton="none" cancelButton="none" placeholder="输入用户完整手机号"></uni-search-bar>
			</view>
			<view class="header-cancle" @click="pageTo()">取消</view>
		</view>
		<view class="switch-tab">
			<view class="switch-tab-item" v-for="(item,index) in tabList" :key="index" @click="switchTab(index)">
				<view :class="TabCur == index ? 'active': 'switch-tab-item-title'">{{ item }}</view>
				<view :class="TabCur == index ? 'tabline': ''"></view>
			</view>
		</view>
		<view class="list">
			<view class="list-item" v-for="(item,index) in dataList" :key="index">
				{{ item.title }}
			</view>
		</view>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	export default {
		components:{
			uniSearchBar
		},
		data() {
			return {
				TabCur: 0,
				tabList: ['我的', '推荐','特色','话题'],
				dataList:[
					{
						title: '# 赏樱之地'
					},
					{
						title: '# 四季如春'
					}
				]
			};
		},
		methods:{
			search(){
				
			},
			switchTab(index){
				this.TabCur = index;
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
		padding: 14upx 16upx;
	}
	.header-cancle{
		color: #666666;
		font-size: 30upx;
		line-height: 42upx;
	}
}
.switch-tab{
	display: flex;
	padding: 0 20upx;
	.switch-tab-item{
		width: 120upx;
		height: 88upx;
		color: #666666;
		font-size: 30upx;
		line-height: 44upx;
		text-align: center;
		margin-right: 16upx;
		.tabline{
			width: 40upx;
			height: 8upx;
			background-color: #F8B500;
			border-radius: 4upx;
			margin: auto;
			margin-top: 20upx;
		}
	}
	.active{
		color: #333333;
		font-weight: 500;
	}
}
.list{
	padding: 0 32upx;
	.list-item{
		height: 120upx;
		color: #333333;
		font-size: 30upx;
		line-height: 120upx;
		font-weight: 500;
	}
}
</style>
