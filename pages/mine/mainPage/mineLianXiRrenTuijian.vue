<template>
	<view class="">
		<!-- 头部 -->
		<!-- 头部 -->
		<view class="header" :style="[{paddingTop: hasNotchInScreen ? '88upx': '44upx'}]">
			<view class="header-content">
				<uni-icons :style="[{Top: hasNotchInScreen ? '110upx': '66upx'}]" class="icons-back" type="arrowleft" color="#565656" size="22" @tap="goBack"></uni-icons>
				<view class="header-title">推荐关注</view>
			</view>
		</view>

		<!-- 推荐关注的人 -->
		<view class="may-know">
			<mayKnow :list="list"></mayKnow>
		</view>
	
	</view>
</template>

<script>
import mayKnow from "../commom/mineLianXiRrenMayKnow.vue"
import data from '@/utils/assistant.js';

export default {
	components:{
		mayKnow,
	},
	data() {
		return {
			list:data.mineTuijianLianXiRen
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
	background-color: #f3f3f3;
	position: sticky;
	top: 0;
	z-index: 99;
	/*#ifdef MP-WEIXIN*/
		padding: 44upx 20px 0 20px;
	/*#endif*/
	/*#ifdef APP-PLUS*/
		padding: 88upx 20px 0 20px;
	/*#endif*/
	border-bottom: 2upx solid #f3f3f3;
	.header-content {
		height: 90upx;
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
			top: 66upx;
			left: 32upx;
		}
	}
}
</style>
