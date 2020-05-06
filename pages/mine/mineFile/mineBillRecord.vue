<template>
	<view class="bill-record">
		<view class="container">
			<view class="tatol-record flexbox">
				<view class="mouth">本月</view>
				<view class="tatol-money">
					<view class="">出账 ￥265.26</view>
					<view class="">入账 ￥0.00</view>
				</view>
			</view>
			<view>
				<view class="tatol-list" v-for="(item,index) in recordList" :key="index" @click="goDetail(item.status)">
					<view class="tatol-item flexbox">
						<view class="ticon"> ¥ </view>
						<view class="dcse">
							<view class="flexbox">
								<text class="dcse-title">{{item.title}}</text>
								<text 
									class="dcse-money" 
									:style="{'color': ((item.status == 2 || item.status == 3) ? '#FF6600':'#101010')}"
								>{{item.money}}</text>
							</view>
							<view class="dcse-name">{{item.name}}</view>
							<view class="dcse-time">{{item.time}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
export default{
	name:"mineBillRecord",
	data(){
		return {
			recordList:[
				{
					"id":"r01",
					"title":"支付订单付款",
					"money":"-1100.00",
					"name":"某某某酒店",
					"time":"2020-1-4 15:22:06",
					"status":"1"
				},
				{
					"id":"r02",
					"title":"充值-银行卡",
					"money":"+1100.00",
					"name":"招商银行",
					"time":"2020-1-4 15:22:06",
					"status":"3"
				},
				{
					"id":"r03",
					"title":"充值-第三方支付",
					"money":"+500.00",
					"name":"支付宝",
					"time":"2020-1-4 15:22:06",
					"status":"2"
				},
				{
					"id":"r04",
					"title":"支付订单付款",
					"money":"-600.00",
					"name":"南山桃园酒店",
					"time":"2020-3-25 15:22:06",
					"status":"1"
				},
			]
		}
	},
	methods:{
		goDetail(status){
			let url = ''
			if( status == 1){
				url = "/pages/mine/mineFile/mineBillRecordDetail1"
			}		
			if( status == 2){
				url = "/pages/mine/mineFile/mineBillRecordDetail2"
			}
			if( status == 3){
				url = "/pages/mine/mineFile/mineBillRecordDetail3"
			}
			uni.navigateTo({
				url:url,
			})
		},
	},
}
</script>

<style lang="less" scoped>
/deep/.uni-navbar--border{
	border: none !important;
}
.flexbox{
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.container{
	font-family: PingFangSC-regular;
	background-color: #FFFFFF;
}
.tatol-record{
	padding: 0 32upx;
	height: 112upx;
	background-color: rgba(245, 245, 245, 1);
	border: 1px solid rgba(255, 255, 255, 0);
	.mouth{
		width: 128upx;
		height: 56upx;
		margin-right: 20upx;
		line-height: 56upx;
		padding-right: 30upx;
		border-radius: 128upx;
		text-align: center;
		border: 1px solid rgba(255, 255, 255, 0);
		background-color: #FFFFFF;
		position: relative;
	}
	.mouth::after{
		content:"";
		position: absolute;
		top: 24upx;
		right:20rpx;
		display: inline-block;
		width: 0;   
		height: 0;   
		border-left: 8upx solid transparent;  
		border-right: 8upx solid transparent; 
		border-top: 8upx solid #222; 
		font-size: 0;  
		line-height: 0; 
	}
	
	.tatol-money{
		flex: 1;
		color: rgba(153, 153, 153, 1);
		font-size: 26upx;
		text-align: right;
		text{
			margin-bottom: 10upx;
		};
	}
}
.tatol-list{
	padding:30upx 0 0upx 32upx;
	.flexbox{align-items: flex-start;}
	.ticon{
		width: 72upx;
		height: 72upx;
		line-height: 72upx;
		font-size: 40upx;
		text-align: center;
		font-family: Arial;
		color: #FFFFFF;
		border-radius: 50%;
		background-color: rgba(0, 164, 255, 1);
		border: 1px solid rgba(255, 255, 255, 0);
	}
	.dcse{
		box-sizing: border-box;
		padding:0 30upx 30upx 0;
		box-sizing: border-box;
		margin-left: 20upx;
		flex: 1;
		font-size: 32upx;
		border-bottom:1upx solid #DDDDDD;
		.dcse-title{
			color: rgba(51, 51, 51, 1);
			font-size: 32upx;
		}
		.dcse-money{
			color: rgba(16, 16, 16, 1);
		}
		.dcse-name{
			margin-top: 20upx;
			color: rgba(102, 102, 102, 1);
			font-size: 26upx;
		}
		.dcse-time{
			margin-top: 10upx;
			color: rgba(170, 170, 170, 1);
			font-size: 26upx;
		}
	}
}


</style>

