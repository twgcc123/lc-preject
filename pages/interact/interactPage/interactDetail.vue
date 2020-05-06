<template>
	<view class="interact-detail">
		<!-- 头部 -->
		<view class="header">
			<view class="header-content">
				<uni-icons class="icons-back" type="back" color="#ffffff" size="24" @tap="goBack"></uni-icons>
				<view class="header-title">互动详情</view>
				<uni-icons class="icons" type="redo-filled" color="#ffffff" size="18"></uni-icons>
			</view>
		</view>

		<!-- 主体内容 -->
		<view class="container">
			<!-- 互动主题 -->
			<view class="theme">
				<view class="theme-head">
					<view class="head-bg"></view>
					<view class="theme-img">
						<image src="../../../static/hudong/h1.jpg" mode=""></image>
					</view>
					<view class="theme-dcse">
						<view class="title">中国象棋</view>
						<view class="time">
							发布于
							<text>2020年03月21日 22:10</text>
						</view>
						<view class="number">互动编号：H3339</view>
						<view class="address">深圳天长地久优居</view>
					</view>
					<view class="theme-status">
						<view class="qizhi">
							<image src="../../../static/hudong/qizhi.png" mode=""></image>
						</view>
						<text>报名中</text>
					</view>
				</view>

				<view class="theme-content">
					<view class="hudong">
						<view class="pay">
							<view class="nas">线下支付</view>
							<view class="nasc">￥ 125.00</view>
						</view>
						<view class="num">
							<view class="nas">队伍人数限制</view>
							<view class="nasc">5</view>
						</view>
						<view class="other">
							<view class="nas">其它限制</view>
							<view class="nasc">男女不限</view>
						</view>
					</view>
					<view class="hudong-dcse">“ 想找一帮50后一起玩，素质太低的不要来，如果可以的话想跟象棋高手一起玩 ”</view>
					<view class="hudong-more">
						<view class="title" v-show="fold" @tap="btnHandle">查看更多细节</view>
						<view class="contentcs" v-show="!fold">
							<view class="show-info">
								<text class="tits">开始时间</text>
								<text>2020年4月13日</text>
								<text>12:00</text>
							</view>
							<view class="show-info">
								<text class="tits">结束时间</text>
								<text>2020年4月20日</text>
								<text>13:00</text>
							</view>
							<view class="show-info">
								<text class="tits">截止报名</text>
								<text>2020年4月20日</text>
								<text>10:00</text>
							</view>
							<view class="show-info">
								<text class="tits">队员年代</text>
								<text>限</text>
								<text>50后 ~ 90后</text>
							</view>
							<view class="show-info">
								<text class="tits">线下支付</text>
								<text>￥ 0.00</text>
							</view>
						</view>
					</view>
					<view class="title" v-show="!fold" @tap="supHandle">收起细节</view>
				</view>
			</view>

			<!-- 地图 -->
			<view class="map">
				<view class="map-name">
					<view class="dcse">平峦山公园东北门</view>
					<view class="txt">宝安区西乡街道桃源社区前进二路与宝...</view>
				</view>
				<view class="map-see" @tap="openLocation">
					<image src="/static/hudong/dingwei.png" mode="">
						<view class="txt">查看</view>
				</view>
			</view>

			<!-- 截至时间 -->
			<view class="deadline">
				<view class="deadline-title">
					<image src="/static/hudong/times.png" mode="">
						<text>距截止报名还剩 3天 12时 12分 21秒</text>
				</view>
				<view class="join-num" @tap="pageTo('/pages/interact/interactConmmon/concomDetailUserList')">
					<view class="join">
						<view class="imgb">
							<image class="advace" src="../../../static/hudong/c1.jpg" mode=""></image>
							<image class="bag-img" src="../../../static/hudong/advace.png" mode=""></image>
						</view>
						<view class="imgb">
							<image class="advace" src="../../../static/hudong/c2.jpg" mode=""></image>
							<image class="bag-img" src="../../../static/hudong/advace.png" mode=""></image>
						</view>
						<view class="imgb">
							<image class="advace" src="../../../static/hudong/c3.jpg" mode=""></image>
							<image class="bag-img" src="../../../static/hudong/advace.png" mode=""></image>
						</view>
						<view class="imgb">
							<image class="bag-img" src="../../../static/hudong/advace.png" mode=""></image>
						</view>
						<view class="imgb">
							<image class="bag-img" src="../../../static/hudong/advace.png" mode=""></image>
						</view>
						<view class="imgb">
							<image class="bag-img" src="../../../static/hudong/advace.png" mode=""></image>
						</view>
					</view>
					<view class="num">
						<text><text class="unm-ren">3人 </text>已参加</text>
						<uni-icons style="position: relative;top: 1px;" type="arrowright" color="#cdcdcd" size="12"></uni-icons>
					</view>
				</view>
				<view class="release-time">发布于 2020年12月19日 18:01</view>
			</view>

			<!-- 助理 -->
			<view class="zhuli">
				<view class="zhuli-title">负责助理</view>
				<view class="zhuli-content" @tap="pageTo('/pages/interact/interactPage/interactPersonaHome')">
					<view class="content-left">
						<image src="../../../static/hudong/c2.jpg" mode=""></image>
						<view class="zhuli-info">
							<view class="name">
								周欣欣
							</view>
							<view class="ids">
								ID 169441
							</view>
						</view>
					</view>
					<view class="content-right">
						深圳天长地久优居
					</view>
				</view>
			</view>
		</view>

		<view class="footer">
			<view class="content">
				<view class="dcse">
					<view class="" style="text-align: center;">
						<image class="imgs" src="../../../static/hudong/kefu02.png" mode=""></image>
						<view class="txt1">
							问助理
						</view>
					</view>
					<view class="" style="margin-left: 56upx; text-align: center;">
						<image class="imgs" src="../../../static/hudong/ren.png" mode=""></image>
						<view class="txt2">
							待签到
						</view>
					</view>
				</view>
				<view class="sign-up" @tap="handleShow">
					<text v-show="isShow">报名</text>
					<text v-show="!isShow">已报名</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue';

	export default {
		name: 'interactDetail',
		components: {
			uniIcons
		},
		data() {
			return {
				fold: true,
				isShow: true
			};
		},
		onShow() {

		},
		onLoad() {
			this.detailData()
		},
		updated() {},
		methods: {
			async detailData() {
				let tokenValue = this.$token
				let ids = 4
				console.log(tokenValue)
				let param = this.$helper.setConfig("&token=" + tokenValue, "&id=" + ids);
				let res = await this.$http.request({
					method: 'post',
					url: '/assistant/Interaction/hudong_details',
					data: {
						signature: param.signature,
						timestamp: param.timestamp,
						token: tokenValue,
						id:ids
					}
				});
				console.log(res);
				if (res.state == 10000) {
				}
			},
			
			
			openLocation: function() {
				uni.openLocation({
					scale:5,
					longitude: 113.979958,
					latitude: 22.540135,
					name: "深圳",
					address: "深圳市南山世界之窗白沙路5号"
				})
			},
			pageTo(url) {
				uni.navigateTo({
					url: url
				});
			},
			goBack() {
				uni.navigateBack({});
			},
			btnHandle() { // 收起 展开
				this.fold = !this.fold;
			},
			supHandle() {
				if (this.fold == false) {
					this.fold = true;
				}
			},
			handleShow() {
				this.isShow = !this.isShow
			}
		}
	};
</script>

<style lang="less" scoped>
	// view,text{
	// 	line-height: 1;
	// }
	// image{
	// 	border: 0;
	// }
	.interact-detail {
		font-family: PingFangSC-regular;
		background-color: #ffffff;
		padding-bottom: 246upx;
	}

	.header {
		position: sticky;
		top: 0;
		z-index: 99;
		background-color: #6b6b6b;
		padding: 44px 20px 0 20px;

		.header-content {
			height: 45px;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.header-title {
				text-align: center;
				color: rgba(255, 255, 255, 1);
				font-size: 36upx;
				font-weight: bold;
				flex: 1;
			}

			.icons-back {
				// margin-left: -20upx;
			}
		}
	}

	// 互动主题
	.theme {
		position: relative;
		padding-top: 88upx;
		border-bottom: 20upx solid #F7F7F7;
		padding-bottom: 40upx;

		.head-bg {
			position: absolute;
			top: -88upx;
			left: 0;
			right: 0;
			height: 88upx;
			background-color: #6b6b6b;
		}

		.theme-head {
			padding-left: 40upx;
			position: relative;
			display: flex;

			.theme-img {
				width: 160upx;
				height: 160upx;

				image {
					position: absolute;
					top: -24px;
					left: 40upx;
					width: 160upx;
					height: 160upx;
					border-radius: 18upx;
					background-color: rgba(229, 229, 229, 1);
				}
			}

			.theme-dcse {
				// flex: 1;
				padding: 30upx 30upx 0 30upx;

				.title {
					color: rgba(0, 0, 0, 1);
					font-size: 36upx;
					font-weight: bold;
					margin-bottom: 14upx;
				}

				.time,
				.number {
					margin-bottom: 6upx;
					color: rgba(97, 97, 97, 1);
					font-size: 24upx;
				}

				.address {
					display: inline-block;
					padding: 0 12upx;
					margin-top: 8upx;
					height: 36upx;
					line-height: 36upx;
					border-radius: 4upx;
					color: rgba(89, 78, 174, 1);
					font-size: 500;
					font-size: 24upx;
					text-align: center;
					font-family: Arial;
					border: 1px solid rgba(89, 78, 174, 1);
				}
			}

			.theme-status {
				position: absolute;
				right: 0;
				top: 13px;
				background-color: #ff9205;
				height: 48upx;
				width: 160upx;
				overflow: hidden;
				text-overflow: hidden;
				white-space: nowrap;
				border-radius: 48upx 0 0 48upx;
				display: flex;
				align-items: center;

				.qizhi {
					display: inline-block;
					box-sizing: border-box;
					padding: 4upx;
					height: 40upx;
					width: 40upx;
					margin-left: 4upx;
					border-radius: 50%;
					background-color: #ffa543;

					image {
						height: 100%;
						width: 100%;
					}
				}

				text {
					display: inline-block;
					color: rgba(255, 255, 255, 1);
					font-size: 28upx;
					font-weight: 600;
					margin-left: 12upx;
				}
			}
		}

		.theme-content {
			margin-top: 8upx;
			padding: 0 40upx;

			.hudong {
				height: 112upx;
				display: flex;
				align-items: center;

				.pay,
				.num,
				.other {
					width: 33%;
					position: relative;

					.nas {
						height: 34upx;
						line-height: 34upx;
						color: rgba(153, 153, 153, 1);
						font-size: 24upx;
						font-weight: 600;
						text-align: center;
					}

					.nasc {
						margin-top: 12upx;
						color: rgba(0, 0, 0, 1);
						font-size: 28upx;
						font-weight: 600;
						text-align: center;
					}
				}

				.pay::after,
				.num::after {
					content: '';
					position: absolute;
					top: 0upx;
					right: 0;
					display: inline-block;
					height: 48upx;
					width: 1px;
					background-color: #f3f3f3;
					color: #f3f3f3;
				}
			}

			.hudong-dcse {
				line-height: 1.2;
				margin-top: 20upx;
				font-size: 30upx;
				padding: 18upx 20upx;
				background-color: rgba(247, 248, 250, 1);
				border: 1px solid rgba(255, 255, 255, 0);
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
			}

			.title {
				color: rgba(16, 147, 188, 1);
				font-size: 28upx;
				text-align: center;
				font-weight: bold;
			}

			.hudong-more {
				margin-top: 24upx;

				.contentcs {

					// display: none;
					.show-info {
						height: 80upx;
						line-height: 80upx;
						font-size: 28upx;

						.tits {
							font-size: 32upx;
							color: #AAAAAA !important;
							margin-right: 44upx;
						}

						text {
							color: #333333;
						}
					}
				}
			}
		}
	}

	// 地图
	.map {
		margin: 40upx;
		background-color: #F6F5F5;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 144upx;
		box-sizing: border-box;
		border-radius: 12upx;

		.txt {
			margin-top: 8upx;
			color: rgba(153, 153, 153, 1);
			font-size: 26upx;
		}

		.map-name {
			flex: 1;
			padding: 30upx;

			.dcse {
				color: rgba(51, 51, 51, 1);
				font-size: 32upx;
				font-weight: bold;
			}

			.txt {
				margin-top: 4upx;
			}
		}

		.map-see {
			box-sizing: border-box;
			padding: 30upx 0;
			width: 144upx;
			height: 144upx;

			text-align: center;

			image {
				height: 40upx;
				width: 40upx;
			}
		}
	}

	// 截至时间
	.deadline {
		border-top: 20upx solid #F7F7F7;
		padding: 0 40upx;

		.deadline-title {
			height: 89upx;
			line-height: 90upx;
			color: #333333;
			font-size: 28upx;
			font-family: Arial;
			display: flex;
			align-items: center;
			// flex-direction: column;
			border-bottom: 1px solid #f7f7f7;

			image {
				height: 36upx;
				width: 36upx;
			}

			text {
				margin-left: 12upx;
			}
		}

		.join-num {
			height: 112upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #f7f7f7;

			.join {
				.imgb {
					display: inline-block;
					height: 64upx;
					width: 64upx;
					margin-right: 12upx;
					// background: url('../../../static/hudong/advace.png');
					background-size: 68upx 68upx;
					border-radius: 8upx;
					position: relative;

					.advace {
						height: 64upx;
						width: 64upx;
						border-radius: 8upx;
						position: relative;
						z-index: 1;
					}

					.bag-img {
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						height: 64upx;
						width: 64upx;
						border-radius: 8upx;
					}
				}
			}

			.num {
				display: flex;
				align-items: center;
				margin-left: 20upx;
				width: 150upx;
				color: #cdcdcd;
				font-size: 24upx;

				.unm-ren {
					color: #333333;
					margin-right: 6upx;
				}
			}
		}

		.release-time {
			margin: 40upx 0;
			color: rgba(170, 170, 170, 1);
			font-size: 24upx;
		}
	}

	// 助理
	.zhuli {
		background-color: #FFFFFF;
		border-top: 20upx solid #F7F7F7;

		.zhuli-title {
			margin-left: 40upx;
			height: 111upx;
			line-height: 112upx;
			border-bottom: 1px solid #f7f7f7;
			color: #000;
			font-size: 34upx;
			font-family: Arial;
			font-weight: bold;
		}

		.zhuli-content {
			padding: 0 40upx;
			height: 128upx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.content-left {
				display: flex;

				image {
					height: 80upx;
					width: 80upx;
					border-radius: 8upx;
					background-color: #EEEEEE;
				}

				.zhuli-info {
					margin-left: 20upx;

					.name {
						line-height: 1;
						margin-top: 6upx;
						color: rgba(51, 51, 51, 1);
						font-size: 32upx;
						font-weight: bold;
					}

					.ids {
						line-height: 1;
						margin-top: 16upx;
						color: rgba(235, 115, 127, 1);
						font-size: 24upx;
					}
				}
			}

			.content-right {
				color: rgba(102, 102, 102, 1);
				font-size: 24upx;
			}
		}

	}

	.footer {
		border-top: 1px solid #D5D5D5;
		position: fixed;
		height: 168upx;
		background-color: #FFFFFF;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 999;

		.content {
			box-sizing: border-box;
			padding: 20upx 40upx 0 38upx;
			display: flex;
			justify-content: space-between;
			height: 100upx;

			.dcse {
				display: flex;
				align-items: center;

				.imgs {
					height: 48upx;
					width: 48upx;
				}

				.txt1 {
					margin-top: 2upx;
					height: 16px;
					color: rgba(51, 51, 51, 1);
					font-size: 22upx;
				}

				.txt2 {
					margin-top: 2upx;
					height: 16px;
					color: rgba(170, 170, 170, 1);
					font-size: 22upx;
				}
			}

			.sign-up {
				width: 294upx;
				height: 80upx;
				line-height: 78upx;
				border-radius: 80upx;
				background-color: rgba(16, 147, 188, 1);
				color: rgba(255, 255, 255, 1);
				font-size: 32upx;
				text-align: center;
				box-shadow: 0px 2px 6px 0px rgba(128, 210, 236, 1);
				font-family: Arial;
				border: 1px solid rgba(255, 255, 255, 0);
			}


		}
	}
</style>
