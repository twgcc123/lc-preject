<template>
	<view class="orderPaySuccess">
		<view class="orderDetail">
			<view class="message">支付成功！</view>
			<roomOrderInfo></roomOrderInfo>
			<view class="line"></view>
			<view class="seft">
				<text>入住人：林俊杰,张小凡</text></br>
				<text>联系电话：137****0233</text>
			</view>
		</view>
		<view class="btnOrderDetail" @tap="goOrderCenter">查看订单</view>
	</view>
</template>

<script>
import uniIcons from "@/components/uni-icons/uni-icons.vue"
import roomOrderInfo from "./commom/roomOrderInfo.vue"

export default {
	components: {
		uniIcons,
		roomOrderInfo,
	},
	name:"roomOrderPaySuccess",
	data() {
		return{
			
		}
	},
	methods:{
		goOrderCenter(){
			uni.navigateTo({url:"./roomOrderCenter"})
		}
	},
	onReady() {
		
	},
	
	onLoad() {
		
	},

}
</script>

<style lang="less" scoped>
.orderPaySuccess{
	padding-top: 50upx;
	background-color: #FFFFFF;
	font-family: PingFangSC-bold;
	height: 100vh;
}
.orderDetail{
	background-color: #FFFFFF;
	padding: 0upx 48upx;
	.message{
		color: rgba(68, 68, 68, 1);
		font-size: 56upx;
		font-weight: bold;
	}
	.seft{
		margin: 40upx 0;
		color: rgba(102, 102, 102, 1);
		font-size: 28upx;
		text{
			margin-top: 6upx;
		}
	}
}
.line{
	height: 10upx;
	margin: 0 -48upx;
	background-color: #F7F7F7;
}
.btnOrderDetail{
	position: fixed;
	left: 46upx;
	right: 50upx;
	z-index: 999;
	bottom: 106upx;
	width: 654upx;
	height: 100upx;
	line-height: 100upx;
	border-radius: 8upx;
	background-color: #EC9A44;
	color: #FFFFFF;
	font-size: 36upx;
	font-weight: 500;
	text-align: center;
	font-family: Arial;
	box-shadow: 1upx 1upx 2upx rgba(255, 255, 230, .5);
}
	
</style>
