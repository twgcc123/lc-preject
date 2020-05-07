<template>
	<view class="followup">
		<view class="assistant-header" :style="[{ paddingTop: hasNotchInScreen ? '88upx' : '44upx' }]">
			<view class="header">我的跟进</view>

			<view class="search-bar">
				<view class="search-all" v-for="(title, index) in searchBar" :key="index" @tap="choice(title, index)" :class="activeTitle == index ? 'active-title' : null">
					<text class="tools-name">{{ title.title }}</text>
					<text class="tools-icon"></text>
				</view>
			</view>

			<!-- 			<dropdown-menu class="dropdown-menu" @toggle="toggle" @change="change">
				<dropdown-menu-item :value="value1" :disabled="false" :options="options1"></dropdown-menu-item>
				<dropdown-menu-item :value="value2" :options="option2"></dropdown-menu-item>
			</dropdown-menu> -->
		</view>

		<view class="container">
			<view class="assistant-list">
				<view class="list-item" v-for="(item, index) in followList" :key="index">
					<view class="" @tap="pageTo('/pages/interact/interactPage/interactPersonaHome')">
						<view class="head-list">
							<view class="head-info">
								<view class="advada">
									<image class="imgs" v-if="item.avada_img !== ''" :src="item.avada_img" mode=""></image>
									<image :src="item.avada_null"></image>
								</view>
								<text class="name">
									{{ item.name }}
									<text class="nick">({{ item.nameNick }})</text>
								</text>
								<uni-icons style="margin-top: 3upx;" type="arrowright" size="14" color="#999999"></uni-icons>
							</view>
							<view class="liat-status">{{ item.guanxi }}</view>
						</view>
						<view class="real-name-list">
							<text class="l1">{{ item.ruzhu }}</text>
							<text :class="['l2', item.shiming_status == 1 ? 'avtiveColor' : '']">{{ item.shiming }}</text>
						</view>
						<!-- 受约率 -->
						<view class="prent-list">
							<view class="lisy1">
								<text class="list-tip">活动次数</text>
								<text class="list-num">{{ item.time }}</text>
							</view>
							<view class="lisy2">
								<text class="list-tip">守约率</text>
								<text class="list-num">{{ item.shouyue }}</text>
							</view>
							<view class="lisy3">
								<text class="list-tip">守时率</text>
								<text class="list-num">{{ item.shoushi }}</text>
							</view>
						</view>
						<!-- 行线 -->
						<view class="lins"></view>
					</view>

					<!-- 链接跳转层 -->
					<view class="" @tap="pageTo('/pages/assistant/assistantPage/assistantHudongGuanli')">
						<!-- 诉说 -->
						<view class="real-name-tell">
							<text class="txt_marks">"</text>
							{{ item.dcse }}
							<text class="txt_marks">"</text>
						</view>
						<view class="lins"></view>

						<view class="info-list">
							<view class="txt">
								<text>入住优居：</text>
								<text>{{ item.address }}</text>
							</view>
							<view class="txt">
								<text>来电时间：</text>
								<text>{{ item.call_time }}</text>
							</view>
							<view class="txt">
								<text>互动编号：</text>
								<text>{{ item.bianhao }}</text>
							</view>
						</view>

						<!-- 活动 -->
						<view class="activity">
							<view class="activity-img"><image :src="item.activity_img" mode="scaleToFill"></image></view>
							<view class="activity-info">
								<view class="activity-title">{{ item.activity_title }}</view>
								<view class="activity-dcse">
									<image class="rili" src="/static/assistant/rili.svg" mode=""></image>
									<text>
										<text style="margin-right: 4upx;">开始于</text>
										{{ item.activity_time }}
									</text>
								</view>
								<view class="activity-address">{{ item.activity_address }}</view>
							</view>
						</view>

						<!-- 互动管理 -->
						<view class="status-list">
							<text class="status-name">{{ item.status_name }}</text>
							<view class="order_status">
								<image class="order_img" src="/static/assistant/jilu.png"></image>
								<text>互动管理</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import assistantCommom from './assistantPage/assistantCommom';
// import dropdownMenu from '@/components/dropdown-menu/dropdown-menu.vue';
// import dropdownMenuItem from '@/components/dropdown-menu-item/dropdown-menu-item.vue';

import dataList from '@/utils/assistant.js';
export default {
	name: 'assistant',
	components: {
		assistantCommom
		// dropdownMenu,
		// dropdownMenuItem
	},
	data() {
		return {
			// indexArr:'',
			// valueArr:'',
			// filterData:[],
			// filterDropdownValue:[],
			followList: dataList.followList,
			// filterData:dataList.filterData, //传入数据
			searchBar: [
				{
					id: 1,
					title: '全部状态'
				},
				{
					id: 1,
					title: '排序方式'
				},
				{
					id: 1,
					title: '地区选择'
				},
				{
					id: 1,
					title: '更多筛选'
				}
			],
			activeTitle: 2
			// value1: '0',
			// options1: [
			// 	{
			// 		text: '全部商品',
			// 		value: '0'
			// 	},
			// 	{
			// 		text: '新款商品',
			// 		value: '1'
			// 	},
			// 	{
			// 		text: '活动商品',
			// 		value: '2'
			// 	}
			// ],
			// value2: 'a',
			// option2: [
			// 	{
			// 		text: '默认排序',
			// 		value: 'a'
			// 	},
			// 	{
			// 		text: '好评排序',
			// 		value: 'b'
			// 	},
			// 	{
			// 		text: '销量排序',
			// 		value: 'c'
			// 	}
			// ]
		};
	},
	onShow() {},
	onLoad: function() {},
	updated() {},

	methods: {
		// toggle(value) {
		// 	console.log(value);
		// },
		// change(value, item) {
		// 	// 这里返回选中的值
		// 	console.log(value, item);
		// },

		pageTo(url) {
			uni.navigateTo({
				url: url
			});
		},

		// 跳转tabar页面
		pageTabarTo(url) {
			uni.switchTab({
				url: url
			});
		},
		choice(item, index) {
			console.log(index);
			this.activeTitle = index;
		}
	}
};
</script>

<style lang="less" scoped>
.followup {
	font-family: PingFangSC-bold;
	.assistant-header {
		padding-top: 44upx;
		background-color: #ffffff;
		position: sticky;
		top: 0;
		z-index: 3;
		.header {
			color: rgba(0, 0, 0, 1);
			font-size: 36upx;
			text-align: center;
			height: 90upx;
			line-height: 90upx;
			font-weight: bold;
			text-align: center;
			font-family: Arial;
		}
	}
	.search-bar {
		// background-color: #FFFFFF;
		padding: 0 20upx;
		height: 90upx;
		display: flex;
		align-items: center;
		.search-all,
		.search-paixun,
		.search-address,
		.search-shaixun {
			text-align: center;
			display: flex;
			width: 25%;
			color: rgba(51, 51, 51, 1);
			font-size: 28upx;
			font-weight: 700;
			box-sizing: border-box;
			.tools-name {
				flex: 1;
				width: 90%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				// background-color: #FF9700;
			}
			.tools-icon {
				display: inline-block;
				width: 10%;
				position: relative;
				top: 14upx;
				left: -6upx;
				display: flex;
				align-items: center;
				margin-right: 8upx;

				display: inline-block;
				width: 0;
				height: 0;
				border-left: 8rpx solid transparent;
				border-right: 8rpx solid transparent;
				border-top: 8rpx solid #222;
				font-size: 0;
				line-height: 0;
			}
		}
		.active-title {
			color: #ff9533;
		}
	}
}

.container {
	margin: 20upx 20upx 30upx 30upx;
	.assistant-list {
		font-family: PingFangSC-bold;
		.list-item {
			border-radius: 16upx;
			padding: 20upx 28upx 32upx 28upx;
			margin-bottom: 20upx;
			background-color: #ffffff;
		}
		.head-list {
			display: flex;
			align-items: center;
			justify-content: space-between;
			.head-info {
				display: flex;
				align-items: center;
				.advada {
					width: 48upx;
					height: 48upx;
					border-radius: 50%;
					overflow: hidden;
					position: relative;
					image {
						width: 48upx;
						height: 48upx;
						border-radius: 50%;
					}
					.imgs {
						position: absolute;
						top: 0;
						left: 0;
						z-index: 2;
					}
				}
				.name {
					margin: 0 10upx 0 16upx;
					height: 21px;
					color: rgba(54, 54, 54, 1);
					font-size: 30upx;
					font-weight: bold;
					max-width: 350upx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					.nick {
						margin-left: 4upx;
					}
				}
			}
			.liat-status {
				color: #ff9502;
				font-size: 28upx;
			}
		}
		.real-name-list {
			margin-top: 20upx;
			text {
				margin-right: 20upx;
				padding: 0 20upx;
				display: inline-block;
				color: rgba(153, 153, 153, 1);
				height: 40upx;
				line-height: 40upx;
				border-radius: 4upx;
				font-size: 24upx;
				text-align: center;
				font-family: Arial;
				border: 1px solid rgba(238, 238, 238, 1);
			}
			.l1,
			.avtiveColor {
				color: #ff6700;
				border-color: #ff6700;
			}
		}
		.real-name-tell {
			margin: 12upx 0;
			color: #464646;
			font-size: 30upx;
			.txt_marks {
				color: rgba(153, 153, 153, 1);
			}
		}
		.prent-list {
			margin-top: 14upx;
			height: 64upx;
			display: flex;
			align-items: center;
			color: #999999;
			font-size: 28upx;

			.lisy1 {
				padding-right: 20upx;
				position: relative;
			}
			.lisy1::after {
				content: '';
				position: absolute;
				top: 8upx;
				right: 0;
				height: 24upx;
				width: 2upx;
				background-color: #999;
			}
			.lisy2 {
				padding: 0 20upx;
			}
			.lisy3 {
				position: relative;
				padding-left: 20upx;
			}
			.lisy3::after {
				content: '';
				position: absolute;
				top: 8upx;
				left: 0;
				height: 24upx;
				width: 2upx;
				background-color: #999;
			}
			.lisy1,
			.lisy2,
			.lisy3 {
				.list-num {
					color: #333333;
					margin-left: 6upx;
					font-weight: 600;
				}
			}
		}
		.lins {
			margin-top: 6upx;
			height: 1upx;
			width: 100%;
			background-color: #f3f3f3;
		}
		.info-list {
			margin-top: 20upx;
			color: rgba(153, 153, 153, 1);
			font-size: 26upx;
			.txt {
				margin-top: 4upx;
			}
		}
		.activity {
			margin-top: 20upx;
			padding: 20upx;
			background-color: #f5f5f5;
			border-radius: 8px;
			font-size: 28upx;
			font-family: Arial;
			display: flex;
			flex-flow: row;
			.activity-img {
				height: 156upx;
				width: 156upx;
				margin-right: 20upx;
				overflow: hidden;
				image {
					height: 156upx;
					width: 156upx;
					border-radius: 8upx;
				}
			}
			.activity-info {
				.activity-title {
					font-size: 32upx;
					font-weight: 700;
				}
				.activity-dcse {
					margin-top: 28upx;
					display: flex;
					align-items: center;
					color: rgba(102, 102, 102, 1);
					font-size: 28upx;
					.rili {
						height: 24upx;
						width: 24upx;
						margin-right: 10upx;
					}
				}
				.activity-address {
					margin-top: 4upx;
					color: rgba(102, 102, 102, 1);
					font-size: 28upx;
				}
			}
		}

		.status-list {
			margin-top: 24upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.status-name {
				color: rgba(15, 35, 80, 1);
				font-size: 28upx;
			}
			.order_status {
				padding: 14upx 24upx;
				color: rgba(255, 103, 0, 1);
				font-size: 28upx;
				border-radius: 8upx;
				font-weight: 700;
				font-family: Arial;
				border: 1px solid rgba(255, 103, 0, 1);
				.order_img {
					height: 24upx;
					width: 24upx;
					margin-right: 12upx;
				}
			}
		}
	}
}
// 弹出窗
.popup {
	background-color: #ffffff;
	border-radius: 20upx 20upx 0 0;
	padding-bottom: 88upx;
}

.popup-item {
	padding: 30upx;
	text-align: center;
	background-color: #ffffff;
}

.popup-strong {
	font-size: 40upx;
	border-top: 1upx solid #f1f1f1;
}

.popup-cancle {
	border-top: 12upx solid #f1f1f1;
	margin-top: 15upx;
	font-size: 34upx;
}

.popup-unfollow {
	color: #ff0000;
}
.popup-red {
	border-top: 1upx solid #f1f1f1;
	color: #cc0000;
	font-size: 40upx;
}
</style>
