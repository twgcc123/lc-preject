<template>
<view class="detail">
	<view class="room-detail">
		<view class="header">订单详情</view>
		<view class="detail-item" >
			<view class="img">
				<image :src="detailItem.home_image" mode=""></image>
			</view>
			<view class="detail-item-text">
				<view class="detail-item-text-info">
					<view class="text-title">整住：{{detailItem.type}}</view>
					<view class="text-money">
						<text class="text-low-money" ref="price">￥{{detailItem.sales_price}}</text><text class="text-height-money">￥{{item.hight_price}}</text><text class="night">/ 晚</text>
					</view>
				</view>
				<view class="detail-item-pj">
					<uni-rate size="12" :value="detailItem.appraise" disabled></uni-rate>
					<text class="rote">{{ detailItem.appraise }}星评价</text>
				</view>
			</view>
		</view>
		<view class="line-throug"></view>
		<view class="detail-time">
			<view class="detail-time-item">
				<view class="title">入住日期</view>
				<view class="into" > {{choiceDate[0].re}} </view>
			</view>
			<view class="detail-time-item">
				<view class="title">退房日期</view>
				<view class="out" > {{choiceDate[1].re}} </view>
			</view>
			<view class="detail-time-item">
				<view class="title">入住人数</view>
				<view class="num" > 2 位</view>
			</view>
		</view>
		<view class="line-throug"></view>
		<view class="detail-money">
			<text>总额（人民币）</text>
			<text>￥{{detailItem.sales_price}}</text>
		</view>
		<view class="line-throug"></view>
		<view class="detail-info">
			<view class="info">
				<text class="dese">房客信息</text>
				<text class="choose" @tap="pageTo('/pages/found/youju/roomDetailAddGuest')">选择</text>
			</view>	
			<view class="info-add">
				<view class="" v-for="(item,index) in userinfo" :key="index" v-if="usnerinfo.length != 0">
					<view class="user-item">
						<!-- <text class="idtype">{{item.idtype}}</text> • -->
						<text class="name">{{item.id_number}}</text>
						<text class="idcard">{{item.idcard}}</text>
					</view>
				</view>
				<view class="" v-else>添加新的房客信息</view>
			</view>
		</view>
		<view class="line-throug"></view>
		<view class="detail-dcse">
			<view class="tip" v-for="item in detailDcse" :key="item.rid">
				<text class="works">{{item.title}}：</text>
				{{item.content}}
				<text class="more" @tap="pageTo('/pages/found/youju/roomDetailNotice')" v-if="item.status === 1">查看全部</text>
			</view>
		</view>
	</view>
	<payFooter :price="totalMoney" night="1" ></payFooter>
</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	import payFooter from '@/pages/found/youju/roomDetailPay.vue'
	export default {
		components: {
			payFooter,
			uniRate,
			uniIcons
		},
		props:{
			rote: {
				type: String,
				default: '4'
			}
		},
		data() {
			return {
				// 计算总价钱
				totalMoney:0,
				userinfo:[],
				choiceDate:"",//入住时间
				detailItem:[
					
				],
				detailDcse:[
					{	
						"rid":"r01",
						"title":"入住须知",
						"content":"我已知禁止吸烟，不允许携带宠物，不允许举办派对和活动。",
						"status":1,
					},
					{
						"rid":"r02",
						"title":"退订规则",
						"content":"取消订单，扣除全部房费作为违约金支付给房东，如提前离店，扣除全部剩余房费作为违约金支付给房东。",
						"status":1
					},
					{
						"rid":"r03",
						"title":"入住提示",
						"content":"平台提供7*24小时客服服务，确保您入住无忧。",
						"status":0
					}
				],
				detailData:[
				
				]
			};
		},
		methods:{
			//获取订单详情
					async getPayList(id){
						let user=uni.getStorageSync('USERINFO')
						let token=user.token
					    let param = this.$helper.setConfig('&token=' + token + '&id=' + id);
						console.log(token,id,param.signature,param.timestamp)
						let res = await this.$http.request({
							method: 'post',
							url: '/index/Confirm/order_particulars',
							data: {
								signature: param.signature,
								timestamp: param.timestamp,
								token:token,
								id: id
							}
						});
						if(res.state == 10000){
						 console.log('888888',res)
						 this.detailItem=res.data.house
						 this.userinfo=res.data.lodger
						 uni.setStorage({
						     key: 'tenantInformation',
						     data: res.data,
						     success: function () {
						         console.log('success');
						     }
						 });
							
						
					}
				},
			 totalMoneys() {
				 var totalMoney = 0
				  this.detailItem.forEach((item) => {
					  totalMoney += Number(item.low_price)
				  })
				this.totalMoney = totalMoney
			  },
			  // more(id){
				 //  console.log(id)
				 //  uni.navigateTo({
					//   url: './roomDetailNotice',
					//   success: res => {},
					//   fail: () => {},
					//   complete: () => {}
				 //  });
			  // },
			  pageTo(url){
			  	uni.navigateTo({
			  		url: url
			  	})
			  }
		},
		
		filters: {
			hideIdcard(val) {
				return `${val.substring(0,6)}******${val.substring(val.length-4)}`
			}
		},
		
		onReady() {
			this.totalMoneys()
			// uni.$on('saveinfo',function(data){
			// 	let datas = data.data
			//     this.usnerinfo = datas;
			// 	console.log(this.usnerinfo)
			// })  
		},
		
		onLoad :function(option) {
			let did = (option.id = '' ? '1' : option.id);
			this.getPayList(did);
			setTimeout(function () {
				uni.hideLoading();
			}, 300);
			var that = this
			uni.getStorage({
				key: 'storage_saveinfo',
				success: function (res) {
					// console.log(res.data);
					let userinfo = res.data
					that.userinfo = userinfo
				}
			});
			//获取入住离店日期
			uni.getStorage({
				key: 'timeDate',
				success: function (res) {
					// console.log(res.data);
					that.choiceDate=res.data
					console.log('7777',that.choiceDate)
					
				}
			});
		} 
	}
</script>

<style  lang="less" scoped>
	.detail{
		background-color: #FFFFFF;
	}
	.room-detail{
		padding: 20upx 40upx;
		.header{
			color: #444444;
			font-size: 44upx;
			// font-weight: 500;
			text-align: left;
			margin-bottom: 20upx;
		}
		.detail-item{
			display: flex;
			margin-top: 20upx;
			image{
				width: 224upx;
				height: 152upx;
				border-radius: 10upx;
			}
			.detail-item-text{
				flex: 1;
				margin-left: 20upx;
				.text-title{
					color: rgba(16, 16, 16, 1);
					font-size: 24upx;
				}
				.text-money{
					margin:6upx 0;
					.text-low-money{
						color: rgba(51, 51, 51, 1);
						font-size: 26upx;
						margin-right: 10upx;
						font-weight: bold;
					}
					.text-height-money{
						color: rgba(153, 153, 153, 1);
						font-size: 22upx;
						text-decoration: line-through;
						margin-right: 5upx;
					}
					.night{
						color: rgba(153, 153, 153, 1);
						font-size: 22upx;
					}
				}
				.detail-item-pj{
					display: flex;
					align-items: center;
					.uni-rate{
						margin-top: 3upx;
					}
					.rote{
						margin-left: 10upx;
						color: rgba(85, 85, 85, 1);
						font-size: 22upx;
					}
				}
			}
		}
		.detail-time{
			display: flex;
			.detail-time-item{
				flex: 1;
				text-align: center;
				.title{
					color: rgba(102, 102, 102, 1);
					font-size: 22upx;
					margin-bottom: 15upx;
				}
				.into,.out,.num{
					color: rgba(0, 0, 0, 1);
					font-size: 28upx;
				}
			}
		}
		.detail-money{
			padding: 6upx 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: rgba(51, 51, 51, 1);
			font-size: 28upx;
		}
		.detail-info{
			.info{
				display: flex;
				justify-content: space-between;
				font-size: 28upx;
				.dese{ 
					color: rgba(51, 51, 51, 1);
				}
				.choose{
					color: rgba(236, 154, 68, 1);
				}
			}
			.info-add{
				margin-top: 6upx;
				color: rgba(51, 51, 51, 1);
				font-size: 24upx;
				.user-item{
					margin: 20upx 0;
					.name{
						margin-right: 16upx;
					}
				}
			}
		}
		.tip{
			margin-top: 12upx;
			color: rgba(102, 102, 102, 1);
			font-size: 24upx;
			.works{
				font-weight: bold;
			}
			.more{
				color:#EC9A44;
			}
		}
	}
	.detail-dcse{
		margin-bottom: 150upx;
	}
	.line-throug{
		height: 1upx;
		width: 100%;
		background-color: #DDDDDD;
		margin: 20upx 0;
	}
</style>
