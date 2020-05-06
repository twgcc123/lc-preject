<template>
	<view class="assistant-list">
		<view class="list-item" v-for="(item,index) in dataLists" :key="index">
			<view class="" @tap="pageTo('/pages/interact/interactPage/interactPersonaHome')">
				<view class="head-list">
					<view class="head-info">
						<view class="advada">
							<image class="imgs" v-if="item.avada_img !== ''" :src="item.avada_img" mode=""></image>
							<image :src="item.avada_null"></image>
						</view>
						<text class="name">{{item.name}} <text class="nick">({{item.nameNick}})</text></text>
						<uni-icons style="margin-top: 3upx;" type="arrowright" size="14" color="#999999"></uni-icons>
					</view>
					<view class="liat-status">{{item.guanxi}}</view>
				</view>
				<view class="real-name-list">
					<text class="l1">{{item.ruzhu}}</text>
					<text :class="['l2',item.shiming_status == 1 ? 'avtiveColor' : '' ]">{{item.shiming}}</text>
				</view>
				<view class="prent-list">
					<view class="lisy1">
						<text class="list-tip">活动次数</text><text class="list-num"> {{item.time}}</text>
					</view>
					<view class="lisy2">
						<text class="list-tip">守约率</text><text class="list-num"> {{item.shouyue}}</text>
					</view>
					<view class="lisy3">
						<text class="list-tip">守时率</text><text class="list-num"> {{item.shoushi}}</text>
					</view>
				</view>
			</view>
			<!-- 行线 -->
			<view class="lins"></view>

			<view class="info-list">
				<view class="txt">
					<text>入住优居：</text><text>{{item.address}}</text>
				</view>
				<view class="txt">
					<text>来电时间：</text><text>{{item.call_time}}</text>
				</view>
				<view class="txt">
					<text>互动编号：</text><text>{{item.bianhao}}</text>
				</view>
			</view>
			<view class="status-list">
				<text class="delete" @tap="deleteItem(item,index)">删除</text>
				<text class="call" @tap="openPopup">联系TA</text>
				<view class="order_status">
					<image class="order_img" src="../../../static/assistant/jilu.png" mode=""></image> {{item.order_status}}
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
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue';
	export default {
		name: 'assistant',
		components: {
			uniIcons,
		},
		props: {
			dataList: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {}
		},
		onShow() {},
		onLoad() {

		},
		updated() {},
		methods: {
			pageTo(url) {
				uni.navigateTo({
					url: url
				})
			},
			// 删除用户
			deleteItem(i, index) {
				let datas = this.dataLists
				datas.filter(item => {
					if (item.id == i.id) {
						uni.showModal({
							title: '提示',
							confirmColor: "#333333",
							content: '确定删除该数据？',
							success: function(res) {
								if (res.confirm) {
									datas.splice(i, 1)
								} else if (res.cancel) {
									return
								}
							}
						});
					}
				})
			},

			// 打开弹窗
			openPopup() {
				this.$refs.popup.open();
			},

			// 关闭弹窗
			closePopup() {
				this.$refs.popup.close();
			},

			callTel() {
				uni.makePhoneCall({
					phoneNumber: '1341046999' //仅为示例
				});
				this.$refs.popup.close();
			},

		},
		computed: {
			dataLists() {
				return this.dataList
			}
		}
	};
</script>

<style lang="less" scoped>
	.assistant-list {
		font-family: PingFangSC-bold;

		.list-item {
			border-radius: 16upx;
			padding: 20upx 28upx 32upx 28upx;
			margin-bottom: 30upx;
			background-color: #FFFFFF;
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
				content: "";
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
				content: "";
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

	// 弹出窗
	.open-medol {
		/*#ifdef APP-PLUS*/
			position: fixed;
			background-color: rgba(0, 0, 0, .5);
			z-index: 9999;
		/*#endif*/
		/*#ifdef H5 || MP-WEIXIN*/
			position: absolute;
			z-index: 9999;
		/*#endif*/
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		.popup {
			background-color: #FFFFFF;
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
			border-top: 1upx solid #F1F1F1;
		}

		.popup-cancle {
			border-top: 12upx solid #F1F1F1;
			margin-top: 15upx;
			font-size: 34upx;
		}

		.popup-unfollow {
			color: #ff0000;
		}
	}
</style>
