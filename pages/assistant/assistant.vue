<template>
	<view class="assistant">
		
		<view class="swiper" v-show="activeTab == 0">
			<assistantAcceptance></assistantAcceptance>
			<!-- <view class="loadMore" v-if="loadMore">{{ loadMoreDcse }}</view> -->
		</view>
		
		<view class="swiper" v-show="activeTab == 2">
			<assistantFollowUp></assistantFollowUp>
			<!-- <view class="loadMore" v-if="loadMore">{{ loadMoreDcse }}</view> -->
		</view>
		
		<assistantFooter :tabList="tabList" :activeTab="activeTab" @onClickTab="onClickTab"></assistantFooter>
	</view>
</template>

<script>
	import assistantAcceptance from './assistantAcceptance';
	import assistantFollowUp from './assistantFollowUp';
	import dataList from '@/utils/assistant.js';
	import assistantFooter from './assistantPage/assistantFooter';
	export default {
		name: 'assistant',
		components: {
			assistantAcceptance,
			assistantFollowUp,
			assistantFooter,
		},
		data() {
			return {
				activeTab:2,
				tabList: dataList.tabar,
			}
		},
		onShow() {
			this.activeTab = 2
		},
		onLoad() {
			console.log(dataList.tabar)
			  // uni.$on('openMedol',this.openPopup) ; 
		},
		updated() {},
		
		methods: {
			onClickTab(index) {
				console.log(index)
				this.activeTab = index;
				if(index == 1){
					uni.navigateTo({
						url: "/pages/assistant/assistantCreateHudong"
					});
					this.activeTab = 2
					return
				}
			},
			scroll(){}
		},
	};
</script>

<style lang="less" scoped>
	
	.assistant {
		margin-bottom: 200upx;
		font-family: PingFangSC-bold;
		.assistant-header{
			background-color: #f3f3f3;
			position: sticky;
			top: 0;
			z-index: 999;
			padding-bottom: 28upx;
		}
	}
	.header {
		height: 178upx;
		padding: 88upx 40upx 0 40upx;

		.content {
			height: 90upx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.title {
				color: rgba(53, 52, 52, 1);
				font-size: 40upx;
				font-weight: bold;
				margin-top: -4upx; // 照片有空隙，所有负值
			}
		}
	}

	.address {
		padding: 0 40upx;
		display: flex;
		align-items: center;
		// margin-bottom: 8upx;
		.location {
			font-size: 28upx;
			margin: 0 8upx 0 4upx;
			color: #333333;
		}
	}
	.container{
		margin:10upx 20upx 30upx 30upx;
	}

</style>
