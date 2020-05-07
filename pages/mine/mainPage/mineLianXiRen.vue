<template>
	<view class="">
		<!-- 头部 -->
		<view class="headers">
			<view class="header-content">
				<view class="header-left" @tap="goBack"><uni-icons class="back-icons" type="arrowleft" color="#565656" size="22"></uni-icons></view>
				<view class="header-title">联系人</view>
				<view class="header-right">
					<uni-icons type="search" color="#565656" size="22"></uni-icons>
					<uni-icons style="margin-left: 40upx;font-weight: 500;" type="plusempty" color="#565656" size="24"></uni-icons>
				</view>
			</view>
		</view>

		<!-- tabList -->
		<view class="menu">
			<view class="menu-item" v-for="(item, index) in tabList" :key="index" @click="handlerMenu(index)">
				<text :class="['menu-text', activeTab == index ? 'menu-item-active' : null]">{{ item.title }}</text>
			</view>
		</view>

		<!-- 亲友关系 -->
		<view class="new_guanzhu" v-if="activeTab == 0">
			<view class="lines"></view>
			<view class="shenqing" @tap="pageTo('/pages/mine/mainPage/mineLianXiRrenAgree')">
				<view class="shen_left">
					<view class="icons"><image src="/static/nime/add_whtie.svg" mode=""></image></view>
					<text class="dcse-title">亲友关系申请</text>
				</view>
				<view class="shen_right">
					<text class="number">3</text>
					<uni-icons style="position: relative;top: 4upx;" type="arrowright" color="#dddddd" size="15"></uni-icons>
				</view>
			</view>

			<view class="tuijian" @tap="pageTo('/pages/mine/mainPage/mineLianXiRrenTuijian')">
				<view class="shen_left">
					<view class="icons icons_yellow"><image src="/static/nime/guanzhu_whtie.svg" mode=""></image></view>
					<text class="dcse-title">推荐关注</text>
				</view>
				<view class="shen_right">
					<text class="texts">去找暖助、名人、大V</text>
					<uni-icons style="position: relative;top: 4upx;" type="arrowright" color="#dddddd" size="15"></uni-icons>
				</view>
			</view>

			<!-- 可能认识的人 -->
			<view class="may-know">
				<mayKnow :list="list"></mayKnow>
			</view>
		</view>

		<!-- 亲友关系 -->
		<view class="shenqing" v-if="activeTab == 1">
			<view class="">
				<image src="/static/nime/add_whtie.svg" mode=""></image>
				<text>亲友关系申请</text>
			</view>
			<view class="">
				<text></text>
				<uni-icons type="arrowright" color="#dddddd" size="14"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
import mayKnow from "../commom/mineLianXiRrenMayKnow.vue"
import data from '@/utils/assistant.js';

export default {
	name: 'mineLianXiRen',
	components:{
		mayKnow,
	},
	data() {
		return {
			activeTab: 0,
			tabList: [
				{
					id: 1,
					title: '新的关注'
				},
				{
					id: 2,
					title: '已关注'
				}
			],
			list:data.mineLianXiRen
		};
	},

	methods: {
		handlerMenu(index) {
			this.activeTab = index;
		},
		goBack(){
			uni.navigateBack({})
		},
		pageTo(url) {
			uni.navigateTo({
				url: url
			});
		},
	}
};
</script>

<style lang="less" scoped>
.headers {
	position: sticky;
	top: 0;
	z-index: 99;
	background-color: #ffffff;
	padding: 44px 20px 0 20px;
	.header-content {
		height: 112upx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-flow: row;
		.header-title {
			flex: 1;
			text-align: center;
			color: #333333;
			font-size: 36upx;
			font-weight: bold;
			flex: 1;
		}
		.header-left {
			width: 60upx;
		}
		.header-right {
			font-weight: 500;
			display: flex;
			align-items: center;
			width: 120upx;
			text-align: right;
		}
	}
}

.menu {
	position: sticky;
	top: 178upx;
	z-index: 9999;
	background-color: #ffffff;
	border-top: 2upx solid #eeeeee;
	border-bottom: 2upx solid #eeeeee;
	padding: 0 40upx;
	.menu-item {
		display: inline-block;
		height: 88upx;
		line-height: 88upx;
		box-sizing: border-box;
		color: #888888;
		font-size: 32upx;
		margin-right: 40upx;
		.menu-text {
			display: inline-block;
			text-align: center;
			position: relative;
		}
		.menu-item-active {
			color: #424242;
			font-weight: bold;
		}
		.menu-item-active::after {
			content: '';
			position: absolute;
			width: 40%;
			height: 3px;
			border-radius: 6upx;
			background-color: #ff9502;
			bottom: 2upx;
			left: 50%;
			transform: translateX(-50%);
		}
	}
}

.new_guanzhu {
	.lines {
		height: 18upx;
		background-color: #f3f3f3;
	}
	.shenqing,
	.tuijian {
		padding: 0 30upx 0 40upx;
		background-color: #ffffff;
		height: 112upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 2upx solid #f3f3f3;
		.shen_left {
			display: flex;
			align-items: center;
			.icons {
				display: inline-block;
				height: 48upx;
				width: 48upx;
				text-align: center;
				border-radius: 8upx;
				background-color: rgba(0, 154, 252, 1);
				image {
					margin-top: 8upx;
					width: 32upx;
					height: 32upx;
				}
			}
			.icons_yellow {
				background-color: #fcca00 !important;
			}
			.dcse-title {
				color: #333333;
				font-size: 32upx;
				margin-left: 24upx;
			}
		}
		.shen_right {
			.number {
				display: inline-block;
				padding: 2upx 10upx;
				background-color: rgba(255, 59, 48, 1);
				color: rgba(255, 255, 255, 1);
				font-size: 28upx;
				font-family: Arial;
				border-radius: 50%;
				margin-right: 24upx;
			}
			.texts {
				color: rgba(153, 153, 153, 1);
				font-size: 24upx;
				margin-right: 24upx;
			}
		}
	}
}

.may-nowk-title{
	height: 64upx;
	line-height: 64upx;
	padding: 0 40upx;
	background-color: #F3F3F3;
	color: #999999;
	font-size: 26upx;
}



</style>
