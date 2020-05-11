<template>
	<view class="queue-list">
		
		<!-- 头部 -->
		<view class="header" :style="[{paddingTop: hasNotchInScreen ? '88upx': '44upx'}]">
			<view class="header-content">
				<uni-icons class="back-icons" @tap="goBack" type="arrowleft" color="#565656" size="18" ></uni-icons>
				<view class="header-title">选择互动类型</view>
			</view>
		</view>
		
		<view class="container">
			<view class="list-type" v-for="(item,index) in dataType" :key="index" @tap="listType(item)">{{item.value}}</view>
		</view>

	</view>
</template>

<script>
import data from '@/utils/assistant.js';

export default {
	name: 'assistantCreateHudonglist2Type',
	components: {},
	data() {
		return {
			dataType:[
				{
					id:1,
					value:"助暖类型"
				},
				{
					id:2,
					value:"互动类型"
				}
			]
		};
	},
	onShow() {
		
	},
	onLoad() {},
	updated() {},
	methods: {
		pageTo(url) {
			uni.navigateTo({
				url: url
			});
		},
		goBack() {
			uni.navigateBack({});
		},
		
		listType(item){
			let dataType = item
			// uni.$emit('huoDongdataType',dataType)
			uni.setStorage({
			    key: 'huoDongdataType',
			    data: dataType,
			});
			uni.navigateTo({
				url: '/pages/assistant/assistantPage/assistantCreateHudongDetail'
			});
		}
	}
};
</script>


<style lang="less" scoped>
.header {
	position: sticky;
	top: 0;
	z-index: 99;
	background-color: #FFFFFF;
	padding: 44px 20px 0 20px;
	.header-content {
		height: 90upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		.header-title {
			text-align: center;
			color: #000000;
			font-size: 32upx;
			font-weight: bold;
			flex: 1;
		}
		.back-icons{
			position: absolute;
			left: 0;
		}
	}
}
.container{
	margin-top: 42upx;
	background-color: #FFFFFF;
	.list-type{
		margin-left: 30upx;
		height: 112upx;
		line-height: 112upx;
		border-bottom: 1upx solid #f3f3f3;
		color: rgba(16, 16, 16, 1);
		font-size: 32upx;
	}
}

</style>

