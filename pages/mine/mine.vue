<template>
	<view class="my">
		<view class="header">
			<view class="username"><text @tap="goDetail('/pages/mine/mineFile/mineEdit')">用户大力出奇迹</text></view>
			<view class="userinfo" @tap="goDetail('/pages/mine/mineFile/mineSet')">
				<uni-icons type="personadd-filled" color="#D1D1D1" size="14"></uni-icons>
				<text>亲情账号</text>
				<uni-icons class="icons" type="gear" color="#F3F3F3" size="22"></uni-icons>
			</view>
		</view>

		<view class="personal">
			<view class="vip">
				<view class="vip1"><uni-icons class="person_icon" type="person" color="rgba(249, 164, 58, 1)" size="12"></uni-icons></view>
				<view class="vip2">VIP 0</view>
			</view>
			<view class="content flexlr">
				<view class="user-info flexlr">
					<image @tap="goDetail('/pages/mine/mineFile/mineEdit')" class="user-img" :src="users.img_url" mode=""></image>
					<view class="user-hb flextb">
						<text class="b1">红包</text>
						<text class="b2">{{ users.user_hb }} 个</text>
					</view>
					<view class="user-jf flextb">
						<text class="b1">积分</text>
						<text class="b2">{{ users.user_jf | filterIn }}</text>
					</view>
				</view>
				<view class="user-card flextb" @tap="goDetail('/pages/mine/mineFile/mineSunTechCard')">
					<text>星特卡</text>
					<text class="money">{{ users.user_m | filterMoney }}</text>
				</view>
			</view>
		</view>

		<view class="order">
			<view class="order-title flexlr">
				<view class="tname">我的订单</view>
				<view class="torder" @tap="goDetail('/pages/mine/mineFile/mineAllOrder')">
					<text>全部订单</text>
					<uni-icons type="arrowright" color="#ccc" size="14"></uni-icons>
				</view>
			</view>
			<view class="order-list" @tap="goDetail('/pages/found/youju/roomOrderCenter')">
				<view class="order-item flexlr">
					<image class="user-img" :src="orderList.img_url" mode=""></image>
					<view class="user-detail">
						<view class="time">{{ orderList.time }}</view>
						<view class="address">{{ orderList.address }}</view>
						<view class="rooms">{{ orderList.rooms }}</view>
					</view>
					<view class="user-status">{{ orderList.status }}</view>
				</view>
				<view class="user-tip flexlr">
					<text>{{ orderList.content }}</text>
					<view class="more-detail">详细</view>
				</view>
			</view>
		</view>

		<view class="server">
			<view class="server-list">
				<view class="s1" @tap="goDetail('/pages/mine/mainPage/mineDailySign')">
					<image src="/static/nime/riqian.svg" mode=""></image>
					<view class="dcse">日签</view>
					<text class="txt">心识与智慧</text>
				</view>
				<view class="s2" @tap="goDetail('/pages/mine/mainPage/mineLianXiRen')">
					<image src="/static/nime/lianxi.svg" mode=""></image>
					<view class="dcse">联系人</view>
					<text class="txt">关注家人与朋友</text>
				</view>
				<view class="s3" @tap="goDetail('/pages/mine/mainPage/mineLifeRecord')">
					<image src="/static/nime/jilu.svg" mode=""></image>
					<view class="dcse">人生记录</view>
					<text class="txt">记录我的自在生活</text>
				</view>
			</view>
		</view>
		<view class="server">
			<view class="server-list">
				<view class="s1" @tap="goDetail('/pages/mine/mainPage/mineFaPiao')">
					<image src="/static/nime/fapiao.svg" mode=""></image>
					<view class="dcse">发票</view>
					<text class="txt">历史发票</text>
				</view>
				<view class="s2" @tap="goDetail('/pages/mine/mainPage/mineKefu')">
					<image src="/static/nime/kefu.svg" mode=""></image>
					<view class="dcse">优居客服</view>
				</view>
				<view class="s3" @tap="goDetail('/pages/mine/mainPage/mineFind')">
					<image src="/static/nime/mineFind.svg" mode=""></image>
					<view class="dcse">我的收藏</view>
					<text class="txt">收藏的内容集合</text>
				</view>
			</view>
		</view>
		<view class="server">
			<view class="server-list">
				<view class="s1" @tap="goDetail('/pages/mine/mainPage/mineKaJuan')">
					<image src="/static/nime/kajuan.svg" mode=""></image>
					<view class="dcse">卡卷</view>
					<text class="txt">会员卡优惠券</text>
				</view>
				<view class="s2" @tap="goDetail('/pages/found/youju/roomDetailAddGuest')">
					<image src="/static/nime/mineinfo.svg" mode=""></image>
					<view class="dcse">常用信息</view>
					<text class="txt">入住人、地址</text>
				</view>
				<view class="s3" @tap="goDetail('/pages/mine/mainPage/mineHuDong')">
					<image src="/static/nime/hudong.svg" mode=""></image>
					<view class="dcse">我的互动</view>
					<text class="txt">兴趣与活动</text>
				</view>
			</view>
		</view>
		<!-- 进入助理账号 -->
		<view class="assistant" @tap="goDetail('/pages/assistant/assistant')">助理</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				users:{
					"id":"u01",
					"img_url":"/static/youju/fangjian.jpg",
					"user_hb":"99",
					"user_jf":"9999",
					"user_m":"999.91",
				},
				orderList:{
					"id":"r01",
					"img_url":"/static/youju/fangjian.jpg",
					"time":"12月16日—01月16日",
					"address":"深圳市·南山第一养生基地",
					"rooms":"1室1卫1床",
					"status":"待入住",
					"content":"预订了1个优居，期待您的入住~",
				}
			}
		},

	methods: {
		goDetail(url) {
			uni.navigateTo({
				url: url
			});
		},
		hanlde() {
			console.log('000');
		}
		// onTabItemTap:function(e){
		// 	let san = e.index;
		// 	if(san == 3){
		// 		uni.scanCode({
		// 			success(res) {
		// 				console.log(res)
		// 			}
		// 		})
		// 	}
		// }
	},

	filters: {
		filterMoney(val) {
			return '¥' + Number(val).toFixed(1);
		},
		filterIn(val) {
			let numIn;
			if (val > 9999) {
				numIn = Number(Math.floor(val / 1000) / 10) + '万';
			} else {
				numIn = Number(val);
			}
			return numIn;
		}
	},
	onLoad() {}
};
</script>

<style lang="less" scoped>
.my {
	background-color: #ffffff;
	width: 100vw;
	height: 100vh;
	.flexlr {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.flextb {
		display: flex;
		flex-flow: column;
	}
}

.header {
	position: sticky;
	top: 0;
	z-index: 99;
	padding: 88upx 40upx 15upx 40upx;
	background-color: #333333;
	display: flex;
	flex-direction: row;
	/* #ifndef MP-WEIXIN */
	justify-content: space-between;
	/* #endif*/
	.username {
		color: rgba(255, 255, 255, 1);
		font-size: 34upx;
		font-weight: 500;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		/* #ifdef MP-WEIXIN */
		margin-right: 30upx;
		/* #endif*/
	}
	.userinfo {
		text-align: left;
		display: flex;
		align-items: center;
		text {
			color: rgba(153, 153, 153, 1);
			font-size: 28upx;
			margin-left: 6upx;
		}
		.icons {
			margin-left: 40upx;
		}
	}
}
.personal {
	background-color: #333333;
	padding: 10upx 40upx 0 40upx;
	.vip {
		display: flex;
		align-items: center;

		.vip1,
		.vip2 {
			display: inline-block;
			margin-right: 12upx;
			text-align: center;
		}
		.vip1 {
			width: 40upx;
			height: 32upx;
			line-height: 32upx;
			border: 2upx solid rgba(249, 164, 58, 1);
			position: relative;
			.person_icon {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
		.vip2 {
			width: 90upx;
			height: 34upx;
			line-height: 34upx;
			border-radius: 4upx;
			background-color: rgba(255, 255, 255, 0);
			color: rgba(176, 176, 176, 1);
			font-size: 20upx;
			font-family: Arial;
			border: 1px solid rgba(187, 187, 187, 1);
		}
	}

	.content {
		padding: 34px 0 36upx 0;
		.user-info {
			.user-img,
			.user-hb,
			.user-jf {
				margin-right: 40upx;
			}
			.user-img {
				width: 128upx;
				height: 128upx;
				border-radius: 50%;
				box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.4);
			}
			.b1 {
				color: rgba(170, 170, 170, 1);
				font-size: 24upx;
			}
			.b2 {
				color: rgba(255, 255, 255, 1);
				font-size: 32upx;
				margin-top: 10upx;
			}
		}
		.user-card {
			color: rgba(255, 255, 255, 1);
			font-size: 24upx;
			text-align: right;
			.money {
				color: rgba(255, 255, 255, 1);
				font-size: 32upx;
				margin-top: 10upx;
			}
		}
	}
}
.order {
	padding: 0 40upx;
	.order-title {
		height: 104upx;
		height: 104upx;
		background-color: rgba(255, 255, 255, 0);
		border: 1px solid rgba(255, 255, 255, 0);
		.tname {
			color: rgba(51, 51, 51, 1);
			font-size: 36upx;
			font-weight: bold;
		}
		.torder {
			text {
				color: rgba(102, 102, 102, 1);
				font-size: 14px;
				margin-right: 10upx;
			}
		}
	}
	.order-list {
		padding: 36upx 28upx 36upx 36upx;
		margin-bottom: 36upx;
		border-radius: 10upx;
		background-color: rgba(255, 255, 255, 1);
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		box-shadow: 0px 0px 6px 0px rgba(234, 234, 234, 1);
		font-family: Arial;
		.order-item {
			align-items: flex-start;
			.user-img {
				width: 160upx;
				height: 120upx;
				border-radius: 6upx;
			}
			.user-detail {
				flex: 1;
				margin-left: 20upx;
				.time {
					color: rgba(51, 51, 51, 1);
					font-size: 32upx;
				}
				.address,
				.rooms {
					margin-top: 4upx;
					color: rgba(102, 102, 102, 1);
					max-width: 336upx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
			.user-status {
				color: rgba(255, 149, 2, 1);
				text-align: left;
			}
		}
		.user-tip {
			margin-top: 6upx;
			color: rgba(0, 0, 0, 1);
			text {
				flex: 1;
			}
			.more-detail {
				width: 138upx;
				height: 50upx;
				line-height: 48upx;
				border-radius: 50upx;
				background-color: rgba(252, 219, 0, 1);
				color: rgba(51, 51, 51, 1);
				font-size: 24upx;
				text-align: center;
				font-family: Microsoft Yahei;
				border: 1upx solid rgba(255, 255, 255, 0);
			}
		}
	}
}
.server {
	padding: 0 20upx;
	background-color: #ffffff;
	.server-list {
		display: flex;
		height: 168upx;
		align-items: center;
		.s1,
		.s2,
		.s3 {
			box-sizing: border-box;
			width: 33.33%;
			text-align: center;
			image {
				width: 44upx;
				height: 44upx;
			}
			.dcse {
				color: rgba(0, 0, 0, 1);
				font-size: 28upx;
				font-weight: bold;
				// margin-top: 10upx;
			}
			.txt {
				color: rgba(163, 163, 163, 1);
				font-size: 22upx;
				margin-top: 4upx;
			}
		}
	}
}
.assistant {
	position: fixed;
	font-size: 30upx;
	right: 0;
	bottom: 0px;
	text-align: center;
	height: 60upx;
	line-height: 60upx;
	background-color: #fcdb00;
	color: #ffffff;
	border-radius: 36upx 0 0 36upx;
	z-index: 9999;
	width: 120upx;
	z-index: 99;
}
</style>
