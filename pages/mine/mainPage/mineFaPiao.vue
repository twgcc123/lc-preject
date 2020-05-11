<template>
	<view class="fapiao">
		<!-- 头部 -->
		<view class="header" :style="[{paddingTop: hasNotchInScreen ? '88upx': '44upx'}]">
			<view class="header-content">
				<uni-icons :style="[{Top: hasNotchInScreen ? '110upx': '66upx'}]" class="icons-back" type="arrowleft" color="#565656" size="22" @tap="goBack"></uni-icons>
				<view class="header-title">选择开票订单</view>
			</view>
		</view>

		<view class="container">
			<view class="block-list" v-for="(item, index) in lists" :key="index">
				<view class="ftime">完成日期：{{ item.datas }}</view>
				<view class="content">
					<view class="titles">
						<view class="t-left">
							<view class="fapiao-icon" v-if="item.type == 0">
								<image src="/static/nime/fapiao-icon.svg"></image>
							</view>
							<view class="fapiao-icon fapiao-icon_bg" v-if="item.type == 1">
								<image src="/static/nime/nuanzhu.svg"></image>
							</view>
							<view class="name-dcse">{{ item.dcse }}</view>
						</view>
						<view class="t-right" v-if="item.fapiao == 0">已开发票</view>
					</view>

					<view class="dcse">
						<view class="address">{{ item.address }}</view>
						<view class="time" v-if="item.type == 0">
							<text style="margin-right: 6upx;">{{ item.time_start }}</text>
							至
							<text style="margin: 0 6upx;">{{ item.time_end }}</text>
							<text>{{ item.all_night }}</text>
							晚
						</view>
						<view class="time" v-if="item.type == 1">
							{{ item.time_start }}
						</view>
						<view class="price">
							<view class="money">￥{{ item.price }}</view>
							<view class="details" v-if="item.fapiao == 0">查看发票</view>
							<view class="details" v-if="item.fapiao == 1" @tap="pageTo('/pages/found/youju/roomOrderDrawBill')">发票申请</view>
							<view class="details" v-if="item.fapiao == 2">受理中</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import data from '@/utils/assistant.js';

export default {
	name: 'mineFaPiao',
	data() {
		return {
			lists: data.mineFaPiao
		};
	},
	methods: {
		pageTo(url) {
			uni.navigateTo({
				url: url
			});
		},
		goBack() {
			uni.navigateBack({});
		}
	}
};
</script>

<style lang="less" scoped>
.fapiao {
	background-color: #f7f7f7;
}
.header {
	background-color: #ffffff;
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
.container {
	font-family: PingFangSC-regular;
	padding: 20upx;
	.block-list {
		.ftime {
			display: inline-block;
			height: 40upx;
			line-height: 40upx;
			text-align: center;
			padding: 0 20upx;
			border-radius: 40upx;
			background-color: rgba(238, 238, 238, 1);
			color: rgba(16, 16, 16, 1);
			font-size: 28upx;
			font-family: Arial;
		}
		.content {
			box-sizing: border-box;
			padding: 26upx 28upx 0 16upx;
			margin-top: 16upx;
			background-color: #ffffff;
			height: 286upx;
			border-radius: 12upx;
			box-shadow: 0px 2px 6px 0px rgba(204, 204, 204, 0.4);
			border: 1px solid rgba(255, 255, 255, 0);
			margin-bottom: 40upx;
			.titles {
				display: flex;
				align-items: center;
				justify-content: center;
				.t-left {
					flex: 1;
					display: flex;
					flex-flow: row;
					align-items: center;
					.fapiao-icon {
						width: 36upx;
						height: 36upx;
						border-radius: 50%;
						background-color: rgba(131, 186, 243, 1);
						text-align: center;
						border: 1px solid rgba(255, 255, 255, 0);
						image {
							height: 24upx;
							width: 24upx;
							position: relative;
							top: -2upx;
						}
					}
					.fapiao-icon_bg{
						background-color: #f3b583;
					}
					.name-dcse {
						color: rgba(51, 51, 51, 1);
						font-size: 16px;
						text-align: left;
						font-family: PingFangSC-bold;
						font-weight: bold;
						margin-left: 12upx;
					}
				}
				.t-right {
					width: 120upx;
					overflow: hidden;
					text-align: right;
					color: rgba(153, 153, 153, 1);
					font-size: 28upx;
				}
			}

			.dcse {
				margin-top: 16upx;
				padding-left: 48upx;
				.address {
					color: #666666;
					font-size: 30upx;
				}
				.time {
					color: #666666;
					margin-top: 6upx;
					font-size: 28upx;
				}
				.price {
					display: flex;
					align-items: center;
					justify-content: space-between;
					height: 112upx;
					background-color: rgba(255, 255, 255, 0);
					text-align: center;
					border: 1px solid rgba(255, 255, 255, 0);
					.money {
						color: rgba(254, 94, 16, 1);
						font-size: 32upx;
						font-weight: bold;
					}
					.details {
						width: 156upx;
						height: 60upx;
						line-height: 60upx;
						text-align: center;
						border-radius: 12upx;
						color: rgba(51, 51, 51, 1);
						font-size: 28upx;
						font-family: Arial;
						border: 1px solid rgba(203, 203, 203, 1);
					}
				}
			}
		}
	}
}
</style>
