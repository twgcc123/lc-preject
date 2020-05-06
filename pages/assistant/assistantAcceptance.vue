<template>
	<view class="assistant">
		<view class="assistant-header">
			<view class="header">
				<view class="content">
					<text class="title" v-if="dataList.length !== 0">受理中心</text>
					<text class="title" v-show="dataList == ''">暂无订单</text>
					<uni-icons @tap="logout" type="more-filled" size="24" color="#353434" style="font-weight: bold;"></uni-icons>
				</view>
			</view>
			<view class="address" v-if="dataList.length !== 0">
				<uni-icons type="location-filled" size="14" color="#333333"></uni-icons>
				<text class="location" @tap="pageTo('/pages/assistant/assistantConmon/assistantAddressSearch')">
					<text style="margin-right: 10upx;">深圳</text>
					·
					<text style="margin-left: 10upx;">{{addressData.title}}</text>
				</text>
				<uni-icons type="arrowright" size="14" color="#333333"></uni-icons>
			</view>
		</view>
		<view class="container">
			<view class="assistant-list">
				<view class="list-item" v-for="(item, index) in dataList" :key="index">
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
					</view>
					<!-- 行线 -->
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
					<view class="status-list">
						<text class="delete" @tap="deleteItem(item, index)">删除</text>
						<text class="call" @tap="openPopup">联系TA</text>
						<view class="order_status" @tap="pageTo('/pages/assistant/assistantPage/assistantCreateHudonglist2')">
							<image class="order_img" src="/static/assistant/jilu.png"></image>
							{{ item.order_status }}
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 弹窗 -->
		<uni-popup ref="popup" type="bottom" class="open-medol">
			<view class="popup">
				<view class="popup-item bottom-line" @tap="closePopup">确定要联系TA吗</view>
				<view class="popup-item bottom-line popup-strong" @tap="callTel">拨打ta的联系电话</view>
				<view class="popup-item popup-cancle" @tap="closePopup">取消</view>
			</view>
		</uni-popup>

		<!-- 退出登录 -->
		<uni-popup ref="logout" type="bottom" class="open-medol">
			<view class="popup">
				<view class="popup-item bottom-line" @tap="logoutPopup">选择要进行的操作</view>
				<view class="popup-item bottom-line popup-red" @tap="pageTabarTo('/pages/mine/mine')">退出助理中心</view>
				<view class="popup-item popup-cancle" @tap="logoutPopup">取消</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import uniIcons from '@/components/uni-icons/uni-icons';
import assistantCommom from './assistantPage/assistantCommom';
import dataList from '@/utils/assistant.js';

export default {
	name: 'assistant',
	components: {
		uniIcons,
		assistantCommom
	},
	
	data() {
		return {
			addressData:{
				title: '南山世外桃源优居'
			},
			dataList: dataList.dataList,
		};
	},
	
	onShow() {},
	
	mounted() {
		uni.$on('addressChoose',(data)=>{
			let address = data
			this.addressData = { ...data };
			console.log(this.addressData)
		})
	},
	
	onLoad() {
		
	},
	
	onReady() {
		this.acceptance();
	},
	
	updated() {},

	methods: {
		async acceptance() {
			let tokenValue = this.$token
			let param = this.$helper.setConfig("&token="+tokenValue);
			let res = await this.$http.request({
				method: 'post',
				url: '/assistant/Interaction/get_aid_type',
				data: {
					signature: param.signature,
					timestamp: param.timestamp,
					token: tokenValue,
				}
			});
			console.log(res);
			if (res.state == 10000) {
			}
		},

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

		// 删除用户
		deleteItem(i, index) {
			let datas = this.dataList;
			datas.some(item => {
				if (item.id == i.id) {
					uni.showModal({
						confirmColor: '#333333',
						content: '确定删除该数据？',
						success: function(res) {
							if (res.confirm) {
								datas.splice(i, 1);
							} else if (res.cancel) {
								return;
							}
						}
					});
				}
			});
		},
		// 打开弹窗
		openPopup() {
			this.$refs.popup.open();
		},

		// 关闭弹窗
		closePopup() {
			this.$refs.popup.close();
		},

		// 电话联系
		callTel() {
			uni.makePhoneCall({
				phoneNumber: '1341046999' //仅为示例
			});
			this.$refs.popup.close();
		},

		// 退出登录
		logout() {
			this.$refs.logout.open();
		},

		logoutPopup() {
			this.$refs.logout.close();
		}
	}
};
</script>

<style lang="less" scoped>
.assistant {
	margin-bottom: 200upx;
	font-family: PingFangSC-bold;
	.assistant-header {
		background-color: #f3f3f3;
		position: sticky;
		top: 0;
		z-index: 3;
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
.container {
	margin: 10upx 20upx 30upx 30upx;
	.assistant-list {
		font-family: PingFangSC-bold;
		.list-item {
			border-radius: 16upx;
			padding: 20upx 28upx 32upx 28upx;
			margin-bottom: 30upx;
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
						color: #999999;
						margin-left: 4upx;
					}
				}
			}
			.liat-status {
				color: rgba(57, 57, 57, 1);
				font-size: 26upx;
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
			background-color: #dedede;
		}
		.info-list {
			margin-top: 12upx;
			color: rgba(153, 153, 153, 1);
			font-size: 26upx;

			.txt {
				margin-top: 4upx;
			}
		}
		.status-list {
			margin-top: 20upx;
			text-align: right;
			text,
			view {
				text-align: center;
				display: flex;
				align-items: center;
				padding: 14upx 30upx;
				display: inline-block;
				margin-left: 24upx;
				border-radius: 8upx;
				color: #333333;
				font-size: 28upx;
				font-family: Arial;
				border: 1px solid rgba(202, 202, 202, 1);
			}
			.order_status {
				color: #ff6700;
				border-color: #ff6700;
				align-items: center;

				.order_img {
					position: relative;
					top: 4upx;
					height: 32upx;
					width: 32upx;
					margin-right: 8upx;
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
