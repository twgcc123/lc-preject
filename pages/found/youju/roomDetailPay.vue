<template>
	<view class="detail-apy">
		<view class="total">
			<text class="money">￥{{price}}</text>
			<text class="night">共{{night}}晚</text>
			<view class="price">价格明细</view>
		</view>
		<view class="pay" @tap="goPay">支付</view>
	</view>
</template>

<script>
	export default {
		components: {
		
		},
		props:{
			price: {
				type: String,
				default: ''
			},
			night: {
				type: String,
				default: ''
			},
		},
		data() {
			return {
			};
		},
		methods:{
			goPay(){
				console.log('uni.navigateTo');
				uni.navigateTo({url:"/pages/found/youju/roomOrderPay?price=" + this.price})
				// let price = this.price
				// uni.setStorage({
				//     key: 'storage_orderPay',
				//     data: price,
				//     success: function () {
				// 		uni.showLoading({title: '加载中'})
				//     },
				// });	
				
			}
		}
	}
</script>

<style lang="less">
	.detail-apy{
		background-color: #FFFFFF;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 7px 24px;
		border-top: 1px solid #DDDDDD;
		.money{
			height: 22px;
			color: rgba(51, 51, 51, 1);
			font-size: 16px;
			font-weight: bold;
		}
		.night{
			color: rgba(102, 102, 102, 1);
			font-size: 12px;
			margin-left: 5px;
		}
		.price{
			color: rgba(236, 154, 68, 1);
			font-size: 12px;
			margin-top: 2px;
		}
		.pay{
			background-color: #E45061;
			color: #FFFFFF;
			width: 90px;
			height: 50px;
			border-radius: 0;
			text-align: center;
			line-height: 49px;
			border-radius: 5px;
			color: rgba(255, 255, 255, 1);
			font-size: 16px;
		}	
	}		
</style>

