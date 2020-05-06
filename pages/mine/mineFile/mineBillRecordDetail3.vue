<template>
	<view class="bill-detaill">
		<view class="container">
			<view class="head">
				<view class="head-name">某某酒店</view>
				<view class="head-money">+110.00</view>
				<view class="head-status">退款成功</view>
			</view>
			<view class="detail">
				<view class="drawal flexbox">
					<text class="dl">充值方式</text>
					<text class="dr">招商银行<text>(1293)</text></text>	
				</view>
				<view class="jifen flexbox">
					<text class="dl">消费积分</text>
					<text class="dr">+5积分</text>	
				</view>
				<view class="speed">
					<text class="dl">退款进度</text>
					<view class="content">
						<view class="items">
							<view class="items-speed">
								<uni-icons type="checkbox" size="12" color="rgba(255, 102, 0, 1)"></uni-icons>
								<text class="items-name">提交银行处理</text>
							</view>
							<text class="items-time">08-13 14:00</text>
						</view>
						<view class="items">
							<view class="items-speed">
								<uni-icons type="checkbox" size="12" color="rgba(255, 102, 0, 1)"></uni-icons>
								<text class="items-name">银行受理退款</text>
							</view>
							<text class="items-time">08-14 14:00</text>
						</view>
						<view class="items">
							<view class="items-speed">
								<uni-icons type="checkbox" size="12" color="rgba(255, 102, 0, 1)"></uni-icons>
								<text class="items-name">银行已入账</text>
							</view>
							<text class="items-time">08-16 14:00</text>
						</view>
					</view>
				</view>
				<view class="shop flexbox">
					<text class="dl">商品说明</text>
					<view class="dr">天字第一号房 背山面湖天字第一号房 背山面湖天字第一号房</view>	
				</view>
				<view class="time flexbox">
					<text class="dl">创建时间</text>
					<view class="dr">2020-01-04 15:57:15</view>	
				</view>
				<view class="order flexbox">
					<text class="dl">订单号</text>
					<view class="dr">2020010322001406400556879466</view>	
				</view>
				<view class="order flexbox">
					<text class="dl">商家单号</text>
					<view class="dr">20200103220014064005</view>	
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
export default{
	name:"mineBillRecordDetail3",
	data(){
		return {}
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
		.speed{
			margin-top: 20upx;
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			padding-right: 32upx;
			.content{
				width: 420upx;
				.items{
					display: flex;
					align-items: flex-end;
					justify-content: space-between;
					color: #FF6600;
					margin-bottom: 40upx;
					.items-speed{
						flex: 1;
						text-align: left;
						margin-right: 20upx;
						.items-name{
							color: rgba(255, 102, 0, 1);
							font-size: 30upx;
							margin-left: 10upx;
						}
					}
					.items-time{
						color: rgba(153, 153, 153, 1);
						font-size: 22upx;
					}
				}
			}
		}
		.shop{
			border-bottom:1px solid #EEEEEE;
			padding-bottom: 8upx;
			overflow: hidden;
			.dr{
				max-width: 400upx;
			}
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


