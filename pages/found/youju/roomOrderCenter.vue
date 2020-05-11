<template>
	<view class="roomOrderCenter">
		<view class="order-status">
			<view>
				<view class="title">待入住</view>
				<view class="dcse">请在 <text> 12月10日14:00</text> 办理入住</view>
			</view>
<!-- 			<view class="cont-pin">
				<view class="title-pin"  @tap="goDetail('/pages/found/youju/roomOrderCenterScore')">评分</view>
				<view class="dcse-pin">感谢您的入住，请对本次服务作出评分</view>
			</view> -->
		</view>
		<view class="container">
			<view class="room-order-box">
				<roomOrderInfo></roomOrderInfo>
			</view>
			<view class="order-time">
				<view class="in-time">
					<text class="i-title">入住时间</text>
					<text class="t-title">12月11日</text>
					<text class="d-title">周五 14:00后</text>
				</view>
				<view class="lines"></view>
				<view class="out-time">
					<text class="i-title">离店时间</text>
					<text class="t-title">12月21日</text>
					<text class="d-title">周六11:00前</text>
				</view>
			</view>
		</view>
		<view class="order-personal">
			<text class="name">入住人：林俊杰,张小凡</text>
			<text  class="tels">联系电话：137****0233</text>
		</view>
		<view class="order-price" @tap="goDetail('/pages/found/youju/roomOrderPayExpenses')">
			<text class="cname">金额</text>
			<view  class="price"><text>¥ 3666.00</text> <uni-icons type="arrowright" color="#B1B1B1" size="16"></uni-icons></view>
		</view>
		<view class="order-invoice" @tap="goDetail('/pages/found/youju/roomOrderDrawBill')">
			<text class="cname">房费发票</text>
			<view  class="invoice"><text>申请开票</text><uni-icons type="arrowright" color="#B1B1B1" size="16"></uni-icons></view>
		</view>
		<view class="remind">
			<view class="tip">入住提示 ！</view>
			<text>需2019-11-01 14:00办理入住，早到可能需要等待。</text>
			<text>需2019-11-02 11:00之前办理退房，如需延迟退房请与平台客服联系。</text>
		</view>
		<OrderCenterFooter order_left="取消订单" order_right="去支付"></OrderCenterFooter>
	</view>
</template>

<script>
import uniIcons from "@/components/uni-icons/uni-icons.vue"
import roomOrderInfo from "./commom/roomOrderInfo.vue"
import OrderCenterFooter from "@/components/roomOrderCenterFooter.vue"
export default {
	name:"roomOrderCenter",
	components: {
		uniIcons,
		roomOrderInfo,
		OrderCenterFooter,
	},
	data() {
		return{}
	},
	methods:{
		
		// 返回上一级
		goBack(){
			uni.navigateBack()
		},
		goDetail(url){
			uni.navigateTo({url:url})
		},
	},
	onReady() {},
	
	onLoad() {},
}
</script>

<style lang="less" scoped>
	.roomOrderCenter{padding-bottom: 130upx;}
	.order-status{
		padding-top: 24rpx;
		height: 176rpx;
		display: flex;
		text-align: center;
		flex-flow: column;
		align-items: center;
		box-sizing: border-box;
		background-color: #FFFFFF;
		.title{
			color: rgba(255, 149, 2, 1);
			font-size: 48upx;
		}
		.dcse{
			margin-top: 10upx;
			color: rgba(102, 102, 102, 1);
			font-size: 12px;
			text{
				color: #353535;
				margin: 0 6upx;
				font-weight: bold;
			}
		}
		.cont-pin{
			.title-pin{
				margin: 0 auto;
				width: 142upx;
				height: 56upx;
				line-height: 52upx;
				border-radius: 56upx;
				background-color: rgba(254, 94, 16, 1);
				color: rgba(255, 255, 255, 1);
				font-size: 28upx;
				text-align: center;
				font-family: Microsoft Yahei;
				border: 1upx solid rgba(255, 255, 255, 0);
			}
			.dcse-pin{
				margin-top: 16upx;
				color: rgba(102, 102, 102, 1);
				font-size: 24upx;
				text-align: center;
				font-family: PingFangSC-regular;
			}
		}
	}
	.container{
		margin-top: 20upx;
		padding: 0upx 20upx;
		font-family: PingFangSC-regular;
		.room-order-box{
			border-radius: 4upx;
			background-color: #FFFFFF;
			padding: 30upx 28upx;
		}
		.order-time{
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #FFFFFF;
			margin-top: 40upx;
			padding: 40upx;
			border-radius: 4upx;
			.in-time,.out-time{
				display: flex;
				flex-flow: column;
				.i-title{
					color: rgba(102, 102, 102, 1);
					font-size: 24upx;
				}
				.t-title{
					margin-top: 10upx;
					color: rgba(0, 0, 0, 1);
					font-size: 36upx;
				}
				.d-title{
					margin-top: 10upx;
					color: rgba(51, 51, 51, 1);
					font-size: 24upx;
				}
			}
			.out-time{
				text-align: right;
			}
			.lines{
				height: 1upx;
				width: 60upx;
				border: 1px solid rgba(227, 227, 227, 1);
			}	
		}
	}
	.order-personal{
		background-color: #FFFFFF;
		margin-top: 40upx;
		padding: 40upx;
		display: flex;
		flex-flow: column;
		color: rgba(102, 102, 102, 1);
		font-size: 28upx;
		.tels{margin-top: 10upx;}
	}
	.order-price,.order-invoice{
		background-color: #FFFFFF;
		margin-top: 20upx;
		padding: 40upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.cname{
			color: rgba(102, 102, 102, 1);
			font-size: 28upx;
		}
		.price,.invoice{
			color: rgba(51, 51, 51, 1);
			font-size: 28upx;
			text{
				margin-right: 8upx;
			}
		}
		.price{
			text{
				font-weight: bold;
			}
		}
	}
	.remind{
		margin-top: 20upx;
		padding: 40upx 110upx 40upx 40upx;
		display: flex;
		flex-flow: column;
		.tip{
			color: rgba(51, 51, 51, 1);
			font-size: 24upx;
			font-weight: bold;
			margin-bottom: 16upx;
		}
		text{
			color: rgba(153, 153, 153, 1);
			font-size: 24upx;
			margin-bottom: 6upx;
		}
	}
		
</style>
