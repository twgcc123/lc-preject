<template>
	<view class="bill-detaill">
		<view class="container">
			<view class="head">
				<view class="head-name">充值</view>
				<view class="head-money">+20000.00</view>
				<view class="head-status">交易成功</view>
			</view>
			<view class="detail">
				<view class="drawal flexbox">
					<text class="dl">充值方式</text>
					<text class="dr">招商银行<text>(0012)</text></text>	
				</view>
				<view class="time flexbox">
					<text class="dl">创建时间</text>
					<view class="dr">2020-01-04 15:57:15</view>	
				</view>
				<view class="order flexbox">
					<text class="dl">订单号</text>
					<view class="dr">2020010322001406400556879466</view>	
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
export default{
	name:"mineBillRecordDetail2",
	data(){
		return {
		
		}
	},
	methods:{
		goDetail(url){
			uni.navigateTo({url:url})
		},
	},
}
</script>

<style lang="less" scoped>
.flexbox{
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.container{
	padding-top: 32upx;
	padding-bottom: 20upx;
	font-family: PingFangSC-regular;
	background-color: #FFFFFF;
	.head{
		text-align: center;
		.head-name{
			margin-top: 10upx;
			color: rgba(51, 51, 51, 1);
			font-size: 30upx;
		}
		.head-money{
			margin-top: 32upx;
			height: 74upx;
			color: rgba(16, 16, 16, 1);
			font-size: 52upx;
		}
		.head-status{
			margin-top: 32upx;
			color: rgba(153, 153, 153, 1);
			font-size: 30upx;
		}
	}
	.detail{
		margin-top: 60upx;
		padding-left: 30upx;
		.flexbox{
			height: 76upx;
			padding-right: 32upx;
		}
		.drawal{
			border-bottom:1px solid #EEEEEE;
			padding-bottom: 8upx;
		}
		.time{
			margin-top: 10upx;
		}
		.dl{
			display: inline-block;
			width: 120upx;
			color: rgba(153, 153, 153, 1);
			font-size: 30upx;
		}
		.dr{
			flex: 1;			
			text-align: right;
			margin-left: 40upx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			color: rgba(51, 51, 51, 1);
			font-size: 30upx;
		}
	}
}



</style>


