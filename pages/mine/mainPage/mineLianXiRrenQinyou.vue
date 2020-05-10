<template>
	<view class="">
		<!-- 头部 -->
		<view class="header" :style="[{paddingTop: hasNotchInScreen ? '88upx': '44upx'}]">
			<view class="header-content">
				<uni-icons class="icons-back" type="closeempty" color="#565656" size="28" @tap="goBack" :style="[{Top: hasNotchInScreen ? '110upx': '66upx'}]"></uni-icons>
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
	position: sticky;
	top: 0;
	z-index: 99;
	background-color: #ffffff;
	/*#ifdef MP-WEIXIN*/
		padding: 44upx 20px 0 20px;
	/*#endif*/
	/*#ifdef APP-PLUS*/
		padding: 88upx 20px 0 20px;
	/*#endif*/
	border-bottom: 1px solid #f3f3f3;
	.header-content {
		height: 90upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		align-items:;
		.header-title {
			text-align: center;
			color: #000000;
			font-size: 36upx;
			font-weight: bold;
			flex: 1;
		}
		.icons-back {
			position: fixed;
			top: 66upx;
			left: 32upx;
		}
	}
}

</style>
