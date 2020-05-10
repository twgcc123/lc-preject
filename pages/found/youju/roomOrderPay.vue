<template>
	<view class="pay">
		<view class="order-pay">
			<view class="order-detail">
				<view class="title">订单支付</view>
				<view class="otime">剩余支付时间 29分59秒</view>
				<view class="detail-list">
					<image src="/static/youju/fangjian.jpg" mode=""></image>
					<view class="detail-item">
						<view class="dtitle">整住·1室1厅1阳1卫1床</view>
						<view class="daddress">深圳自在社区</view>
						<view class="dtime">12月11日—12月21日 共10晚</view>
					</view>
				</view>
			</view>
			<view class="line"></view>
			<view class="pay-type">
				<view class="pay-item" v-for="(item, index) in payList" :key="index">
					<image :src="item.img_url" mode="" v-if="item.type != 'qinqing'"></image>
					<view class="pay-name" :style="{ 'margin-left': item.type == 'qinqing' ? '0' : '26upx' }">
						{{ item.name }}
						<text class="balance" v-show="item.balance">（可用 {{ item.balance | balanceFil }}）</text>
					</view>
					<view class="check" :class="['check', { checkedbox: index == activeIndex }]" @tap="checked(item, index)" type="radio">
						<uni-icons type="checkmarkempty" color="#3F3F3F 100%" size="22"></uni-icons>
					</view>
				</view>
			</view>
			<!-- <view class="line"></view> -->
		</view>
		<view class="btnPay" @tap="surPay('/pages/found/youju/roomOrderPaySuccess')" :style="[{ bottom: hasNotchInScreen ? '88upx' : '20upx' }]">确定支付 {{ orderPayPrice | balanceFil }}</view>
	</view>
</template>

<script>
import uniIcons from '@/components/uni-icons/uni-icons.vue';
export default {
	name: 'roomOrderPaySuccess',
	components: { uniIcons },
	data() {
		return {
			orderPayPrice: '',
			activeIndex: 0,
			payList: [
				{
					id: 'z01',
					type: 'zhifubao',
					name: '支付宝',
					status: 0,
					checked: true,
					img_url: '../../../static/youju/alipay.svg'
				},
				{
					id: 'z02',
					type: 'weixin',
					name: '微信支付',
					status: 1,
					checked: false,
					img_url: '../../../static/youju/wxpay.svg'
				},
				{
					id: 'z03',
					type: 'xingte',
					name: '星特卡',
					balance: '36000.366',
					status: 1,
					checked: false,
					img_url: '../../../static/youju/wallet.svg'
				}
			]
		};
	},
	methods: {
		checked(item, index) {
			console.log(item);
			console.log(index);
			this.activeIndex = index;
		},
		goBack() {
			uni.showModal({
				title: '确定放弃支付吗？',
				content: '已为您生成订单，请尽快完成支付，超时支付订单将会被取消',
				success: function(res) {
					if (res.confirm) {
						uni.navigateBack();
					} else if (res.cancel) {
						uni.showToast({
							title: '请继续支付',
							duration: 1000,
							icon: 'none'
						});
					}
				}
			});
		},
		surPay(url) {
			console.log('navigateTo');
			console.log(url);
			uni.navigateTo({ url: url });
		}
	},
	onReady() {},

	onLoad(option) {
		this.orderPayPrice = option.price = 'undefined' ? '' : option.price;
	},

	filters: {
		balanceFil(value) {
			return (
				'￥' +
				Number(value)
					.toFixed(2)
					.trim()
			);
		}
	}
};
</script>

<style lang="less" scoped>
.pay {
	background-color: #ffffff;
	font-family: PingFangSC-bold;
}
.order-detail {
	padding: 24upx 48upx 0 48upx;
	.title {
		color: rgba(68, 68, 68, 1);
		font-size: 56upx;
		font-weight: bold;
		margin-top: 24upx;
	}
	.otime {
		margin-top: 30upx;
		color: rgba(255, 182, 71, 1);
		font-size: 28upx;
	}
	.detail-list {
		margin-top: 28upx;
		padding-bottom: 30upx;
		display: flex;
		align-items: center;
		color: rgba(102, 102, 102, 1);
		font-size: 28upx;
		image {
			width: 152upx;
			height: 100upx;
			border-radius: 8upx;
		}
		.detail-item {
			flex: 1;
			margin-left: 24upx;
			font-size: 28upx;
			color: #666666;
			.dtitle {
				color: #333333;
			}
		}
	}
}
.pay-type {
	padding: 0 48upx;
	.pay-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 46upx 0;
		border-bottom: 1upx solid #f3f3f3;
		image {
			width: 48upx;
			height: 48upx;
			border-radius: 4upx;
		}
		.pay-name {
			flex: 1;
			text-align: left;
			margin-left: 26upx;
			color: rgba(51, 51, 51, 1);
			font-size: 36upx;
			.balance {
				font-size: 28upx;
			}
		}
		.check {
			height: 44upx;
			width: 44upx;
			line-height: 44upx;
			color: #ffffff;
			background-color: #aaaaaa;
			text-align: center;
			border-radius: 50%;
		}
	}
}
.btnPay {
	position: absolute;
	left: 0;
	bottom: 20upx;
	// z-index: 999;
	width: 100%;
	height: 100upx;
	line-height: 100upx;
	background-color: rgba(236, 154, 68, 1);
	color: rgba(255, 255, 255, 1);
	font-size: 16px;
	text-align: center;
	font-family: Arial;
	border-top: 1px solid rgba(255, 255, 255, 0);
}
.line {
	height: 20upx;
	width: 100%;
	background-color: #f3f3f3;
}
.checkedbox {
	background-color: #ec9a44 !important;
}
</style>
