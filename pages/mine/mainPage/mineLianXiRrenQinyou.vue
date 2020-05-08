<template>
	<view class="">
		<!-- 头部 -->
		<view class="header">
			<view class="header-content">
				<uni-icons class="icons-back" type="closeempty" color="#565656" size="28" @tap="goBack"></uni-icons>
				<view class="header-title">我的亲友</view>
			</view>
		</view>

		<!-- 推荐关注的人 -->
		<view class="may-know">
			<qinyouList :lists="lists"></qinyouList>
		</view>
	
	</view>
</template>

<script>
import qinyouList from "../commom/mineLianXiRrenQinyouList.vue"
import data from '@/utils/assistant.js';

export default {
	components:{
		qinyouList,
	},
	data() {
		return {
			lists:data.qinRenList
		};
	},

	methods: {
		goBack(){
			uni.navigateBack({})
		},
	}
};
</script>

<style lang="less" scoped>
.header {
	background-color: #FFFFFF;
	position: sticky;
	top: 0;
	z-index: 99;
	padding: 44px 20px 0 20px;
	border-bottom: 2upx solid #f3f3f3;
	.header-content {
		height: 45px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.header-title {
			text-align: center;
			color: #000000;
			font-size: 36upx;
			font-weight: bold;
			flex: 1;
		}
		.icons-back {
			position: fixed;
			top: 55px;
			left: 16px;
		}
	}
}

</style>
