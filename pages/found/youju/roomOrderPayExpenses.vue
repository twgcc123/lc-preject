<template>
	<view class="expenses">
		<view class="price">
			<view class="total">
				<text>合计</text>
				<text>¥ 560.00</text>
			</view>
			<view class="detailed">
				<view class="detailed-item">
					<view class="dtitle">
						<text>全部房费</text>
						<text>￥1000.00</text>
					</view>
					<view class="ditem">
						<text>2019-12-09 晚</text>
						<text>￥450.00</text>
					</view>
					<view class="ditem">
						<text>2019-12-10 晚</text>
						<text>￥550.00</text>
					</view>
				</view>
				<view class="detailed-item">
					<view class="dtitle">
						<text>额外费用</text>
						<text>￥310.00</text>
					</view>
					<view class="ditem">
						<text>清洁费 ￥5.00 × 2</text>
						<text>￥10.00</text>
					</view>
					<view class="ditem">
						<text>押金（离店后退还）</text>
						<text>￥300.00</text>
					</view>
				</view>
				<view class="detailed-item">
					<view class="dtitle">
						<text>优惠金额</text>
						<text>-￥160.00</text>
					</view>
					<view class="ditem">
						<text>12月狂欢入住房费9折</text>
						<text>-￥50.00</text>
					</view>
					<view class="ditem">
						<text>连住2天优惠</text>
						<text>-￥110.00</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>


<script>

export default {
	name:"roomOrderPayExpenses",
	components: {
	},
	data() {
		return{

		}
	},
	methods:{},
	onReady() {},
	
	onLoad() {},
}
</script>

<style lang="less" scoped>
.expenses{background-color: #FFFFFF;height: 100vh;}
.price{
	font-family: PingFangSC-bold;
	.total{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:36upx 48upx;
		border-bottom: 1upx solid #f3f3f3;
		text{
			color: rgba(51, 51, 51, 1);
			font-size: 36upx;
			font-weight: bold;
		}
	}
	.detailed{
		padding:0 48upx;
		.detailed-item{
			padding:32upx 0;
			border-bottom: 1upx solid #f3f3f3;
			.dtitle{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 26upx;
				text{
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
					font-size: 32upx;
				}
			}
			.ditem{
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: rgba(51, 51, 51, 1);
				font-size: 28upx;
				margin-top: 16upx;
			}
		}
	}
}
</style>
