<template>
	<view class="order-list">
		<view class="order-item" v-for="(item,index) in ordorList" :key="index" @tap="goDetail('/pages/found/youju/roomOrderCenter')">
			<view class="title orderflex">
				<text class="taddress">{{item.title}}</text>
				<text 
					class="tstatus" 
					v-show="item.status" 
					:style="{'color': (item.status==1 ? '#FF9502':'rgba(174, 174, 178, 1)')}"
				>{{item.status_text}}</text>
				<!-- <text class="tstatus">待支付</text> -->
			</view>
			<view class="content">
				<image :src="item.img_url" mode=""></image>
				<view class="count-down" v-show="item.count_down">{{item.count_time}}</view>
				<view class="info orderflex">
					<view class="time orderflex">
						<view class="titem">
							<view class="otime1">{{item.in_data}}</view>
							<view class="odcse"><text>{{item.in_week}}</text><text>{{item.in_time}}</text></view>	
						</view>
						<view class="or">至</view>
						<view class="titem">
							<view class="otime2">{{item.out_data}}</view>
							<view class="odcse"><text>{{item.out_week}}</text><text>{{item.out_time}}</text></view>	
						</view>
					</view>
					<view class="total">
						<view class="tname">支付总价</view>
						<view class="tprice">{{item.price}}</view>	
					</view>
				</view>
			</view>
			<view class="buttons">
				<orderListButton order_left="取消订单" order_right="去支付"></orderListButton>
			</view>
		</view>
	</view>
</template>
<script>  
import orderListButton from "@/components/orderListButton.vue"
export default { 
	components:{
		orderListButton,
	},
    data() {  
        return {  
           ordorList:[
			   {
					"id":"o01",
					"title":"深圳自在优居（南山1号）",
					"status":"1",
					"status_text":"已取消",
					"img_url":"../../../static/youju/fangjian.jpg",
					"in_data":"12月10日",
					"out_data":"12月11日",
					"in_week":"周二",
					"out_week":"周五",
					"in_time":"15:00",
					"out_time":"12:00",
					"count-down":false,
					"price":"188.00",
					"handle":"1", // 删除
					"chooes":"2",  //再次预购
			   },
			   {
					"id":"o02",
					"title":"深圳桃园优居（南山3号）",
					"status":"2",
					"status_text":"待支付",
					"img_url":"../../../static/youju/fangjian.jpg",
					"in_data":"12月10日",
					"out_data":"12月11日",
					"in_week":"周二",
					"out_week":"周三",
					"in_time":"15:00",
					"out_time":"12:00",
					"count_down":true,
					"count_time":"28分钟33秒后过期",
					"price":"128.00",
					"handle":"3", // 取消订单
					"chooes":"4"  // 去支付
			   },
			   {
					"id":"o03",
					"title":"深圳福田九号公馆",
					"status":"1",
					"status_text":"已支付",
					"img_url":"../../../static/youju/fangjian.jpg",
					"in_data":"12月10日",
					"out_data":"12月11日",
					"in_week":"周二",
					"out_week":"周五",
					"in_time":"15:00",
					"out_time":"12:00",
					"count-down":false,
					"price":"188.00",
					"handle":"1", // 删除
					"chooes":"2",  //再次预购
			   },
			   {
					"id":"o04",
					"title":"南山欢乐还岸2B",
					"status":"2",
					"status_text":"待支付",
					"img_url":"../../../static/youju/fangjian.jpg",
					"in_data":"12月10日",
					"out_data":"12月11日",
					"in_week":"周二",
					"out_week":"周三",
					"in_time":"15:00",
					"out_time":"12:00",
					"count_down":true,
					"count_time":"28分钟33秒后过期",
					"price":"128.00",
					"handle":"3", // 取消订单
					"chooes":"4"  // 去支付
			   }
		   ]
        }  
    },
	methods:{
		goDetail(url){
			uni.navigateTo({
				url:url
			})
		}
	}
}  
</script> 

<style lang="less" scoped>
.orderflex{
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
}	
.order-list{
	margin-top: 20upx;
	font-family: PingFangSC-bold;
	.order-item{
		margin-top: 20upx;
		padding: 0 40upx;
		padding-bottom: 40upx;
		background-color: rgba(255, 255, 255, 1);
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		font-family: Arial;
		border: 1px solid rgba(255, 255, 255, 0);
		.title{
			margin: 40upx 0;
			.taddress{
				color: rgba(51, 51, 51, 1);
				font-size: 28upx;
			}
			.tstatus{
				color: rgba(174, 174, 178, 1);
				font-size: 36upx;
			}
		}
		.content{
			height: 452upx;
			border-radius: 10upx;
			position: relative;
			overflow: hidden;
			image{
				width: 100%;
				height: 452upx;
				border-radius: 10upx;
			}
			.count-down{
				position: absolute;
				top: 52upx;
				right: 0;
				height: 80upx;
				line-height: 80upx;
				width: 300upx;
				text-align: center;
				color: #FFFFFF;
				background-color: #F04441;
				font-size: 28upx;
				border-radius:80upx 0 0 80upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.info{
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0;
				color: #FFFFFF;
				box-sizing: border-box;
				padding:10upx 20upx;
				height: 130upx;
				background-color: rgba(0,0,0,.65);
				.time{
					text-align: right;
					.otime1,.otime2{
						font-size: 32upx;
						flex: 1;
						
					}
					.odcse{
						font-size: 24upx;
						margin-top: 8upx;
						text{
							margin-left: 8upx;
						}
					}
					.or{
						text-align: center;
						width: 146upx;
						color: #FF9502;
					}
				}
				.total{
						text-align: right;
						width: 180upx;
						border-left: 1upx solid #FFFFFF;
						color: #FFFFFF;
						.tname{
							font-size: 24upx;
						}
						.tprice{
							margin-top: 8upx;
							font-size: 36upx;
							color: #FF9502;
						}
				}
			}
	}
	.buttons{
		margin-top: 40upx;
	}
   }
}
</style>
