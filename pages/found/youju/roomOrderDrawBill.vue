<template>
	<view class="dramblill">
		<view class="order-item">
			<roomOrderItem></roomOrderItem>
		</view>
		<view class="blill-detail">
			<view class="blill-title">发票详情</view>
			<view class="blill-list">
				<view class="blill-list-title">
					<view class="bname">发票抬头</view>
					<view class="bdcse">
						<view class="items" v-for="(item,index) in blillType" :key="item.id">
							<view
							class="check"
							:class="['check',{checkedbox:index == activeIndex}]"
							@tap="checked(item,index)" type="radio">
								<uni-icons type="checkmarkempty" color="#3F3F3F 100%" size="16"></uni-icons>
							</view>
							<text>{{item.name}}</text>
						</view>
					</view>
				</view>
				<view class="content-list" v-for="(item,index) in blillItem" :key="item.id">
					<view class="lname"> {{item.name}} </view>
					<input class="lcon" v-model="item.content" :disabled="activeIndex === index"/>
				</view>
				<view class="content-list">
					<view class="lname">更多内容</view>
					<view class="lname-other" @tap="blillEdit">
						填写备注、地址等（非必填）
						<uni-icons type="arrowright" color="#C0C0C0" size="16"></uni-icons>
					</view>
				</view>
			</view>	
			<view class="blill-money">
				<view class="lname">总金额</view>
				<view class="lmoney">￥3669.00</view>
			</view>
			<view class="blill-way">
				<view class="blill-title">收款方式</view>
				<view class="email">
					<view class="ename">电子邮箱</view>
					<view class="eemai">
						<input class="lcon"v-model="emai" />
					</view>
				</view>
			</view>
			<view class="blill-grant">
				<view class="grant">
					<view class="grant-iteml">
						<image src="../../../static/youju/wxpay.svg" mode=""></image>
						<text>微信卡包</text>
					</view>
					<view class="grant-itemr">
						<text>授权同步</text>
						<uni-icons type="arrowright" color="#C0C0C0" size="16"></uni-icons>
					</view>
				</view>
				<view class="grant">
					<view class="grant-iteml">
						<image src="../../../static/youju/alipay.svg" mode=""></image>
						<text>支付宝发票管家</text>
					</view>
					<view class="grant-itemr">
						<text>授权同步</text>
						<uni-icons type="arrowright" color="#C0C0C0" size="16"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		<view class="blill-btn">提交</view>
	</view>
</template>

<script>
import uniIcons from "@/components/uni-icons/uni-icons.vue"	
import roomOrderItem from "./commom/roomOrderItem.vue"
export default {
	name:"roomOrderDrawBill",
	components: {
		uniIcons,
		roomOrderItem
	},
	data() {
		return{
			activeIndex:0,
			emai:"12345678@qq.com",
			blillType:[
				{
					"id":"b01",
					"name":"企业单位",
					"status":0,
					"checked":true,
				},
				{
					"id":"b02",
					"name":"个人/非企业单位",
					"status":1,
					"checked":false,
				},
			],
			blillItem:[
				{
					"id":"t01",
					"name":"发票抬头",
					"content":"深圳市森特网发展有限公司",
				},
				{
					"id":"t02",
					"name":"税号",
					"content":"9144 0300 MA5E TBDW 17",
				}
			]
		}
	},
	methods:{
		checked(item,index){
			console.log(item)
			console.log(index)
			this.activeIndex = index
		},
		blillEdit(){uni.navigateTo({
			url:"./roomOrderDrawBillEdit"
		})}
	},
	onReady() {},
	onLoad() {},
}
</script>


<style lang="less" scoped>
	.dramblill{
		font-family: PingFangSC-regular;
		margin-bottom: 150upx;
	}
	.order-item{
		border-top: 1upx solid #DDDDDD;
		background-color: #FFFFFF;
		padding: 16upx 40upx;
	}
	.blill-detail{
		.blill-title{
			height: 80upx;
			padding: 16upx 40upx;
			background-color: #F3F3F3;
			color: rgba(153, 153, 153, 1);
			font-size: 28upx;	
		}
		.blill-list{
			background-color: #FFFFFF;
			.blill-list-title{
				padding: 30upx 40upx;
				display: flex;
				align-items: center;
				border-bottom: 1upx solid #f3f3f3;
				.bname{
					width: 160upx;
					text-align: left;
				}
				.bdcse{
					flex: 1;
					display: flex;
					.items{
						display: flex;
						align-items: center;
						margin-right: 20upx;
						.check{
							margin-right: 10upx;
							height: 16px;
							width: 16px;
							line-height: 16px;
							color: #FFFFFF;
							background-color: #AAAAAA;
							text-align: center;
							border-radius: 50%;
						}
					}

				}
			}
			.content-list{
				display: flex;
				align-items: center;
				padding: 30upx 40upx;
				border-bottom: 1upx solid #f3f3f3;
				.lname{
					width: 160upx;
					color: rgba(51, 51, 51, 1);
					font-size: 32upx;
				}
				.lcon{
					flex: 1;
					color: rgba(51, 51, 51, 1);
					font-size: 28upx;
					font-family: Arial;
				}
				.lname-other{
					flex: 1;
					color: rgba(170, 170, 170, 1);
					font-size: 28upx;
					text-align: right;
				}
			}
		}
		.blill-money{
			margin-top:40upx;
			display: flex;
			align-items: center;
			padding: 30upx 40upx;
			border-bottom: 1upx solid #f3f3f3;
			background-color: #FFFFFF;
			.lname{
				width: 160upx;
				color: rgba(51, 51, 51, 1);
				font-size: 32upx;
			}
			.lmoney{
				color: rgba(240, 156, 86, 1);
				font-size: 32upx;
			}
			
		}
		.blill-way{

			.email{
				display: flex;
				align-items: center;
				background-color: #FFFFFF;
				padding: 16upx 40upx;
				.ename{
					width: 160upx;
				}
				.eemai{
					flex: 1;
				}
			}
		}
		.blill-grant{
			margin-top: 10upx;
			.grant{
				padding: 16upx 40upx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				background-color: #FFFFFF;
				border-bottom: 1upx solid #DDDDDD;
				.grant-iteml{
					display: flex;
					align-items: center;
					width: 50%;
					image{
						display: inline-block;
						width: 36upx;
						height: 36upx;
					}
					text{
						margin-left: 10upx;
					}
				}
				.grant-itemr{
					flex: 1;
					align-items: center;
					text-align: right;
					text{
						margin-left: 10upx;
					}
				}
			}
		}
	}
.checkedbox{
	background-color: #EC9A44 !important;
}
.blill-btn{
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100upx;
	line-height: 100upx;
	border-radius: 8upx;
	background-color: rgba(74, 74, 74, 1);
	color: rgba(255, 255, 255, 1);
	font-size: 32upx;
	text-align: center;
	font-family: Arial;
	border: 1px solid rgba(255, 255, 255, 0);
}
	
</style>
