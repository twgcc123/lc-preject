<template>
	<view class="room">
		<index-header bgColor="bg-index-header" index="2" fixed="true" />
		<uni-swiper-dot :info="room.img_list" field="content" :mode="mode" :dotsStyles="dotsStyles">
		    <swiper class="swiper-box" @change="change" autoplay="true">
		        <swiper-item v-for="(item ,i) in room.img_list" :key="i">
					<image class="swiper-item" :src="item"></image>
		        </swiper-item>
		    </swiper>
		</uni-swiper-dot>
		<calendar
			@change="changeDays" 
			:startDate="initStartDate" 
			:endDate="initEndDate" 
			:daysCount="daysCount"
		>
		</calendar>
		<view class="room-desc">
			<view class="room-desc-indoor">{{ room.type }}</view>
			<view class="room-desc-title">{{ room.name }}</view>
			<view class="room-desc-tag">
				<view v-for="(item,index) in room.label" :key="index" class="room-desc-tag-item">{{ item }}</view>
			</view>
			<view class="room-desc-maxinto">最多可入住{{ room.population }}人</view>
		</view>
		<view class="coupon">
			<view class="coupon-left">
				<view class="coupon-left-top">12月1日-12月30日 冬季优惠</view>
				<view class="coupon-left-bottom">期间预订均可获得9折的大优惠礼包</view>
			</view>
			<image class="coupon-right" src="/static/youju/wxpay.svg"></image>
		</view>
		<view class="detail">
			<view class="detail-title">详情概要</view>
			<SZqianggou ref="qianggou" index="1" :list1="detailList"></SZqianggou>
		</view>
		<view class="service">
			<view class="service-title">设施/服务</view>
			<view class="service-base" style="border-top: none;">
				<view class="service-base-left">
					<image class="service-base-left-img" src="/static/youju/base.svg"></image>
					<view class="service-base-left-name">基本服务</view>
				</view>
				<view class="service-base-center">
					<view class="service-con1">
						<image class="service-icon" src="/static/youju/gou.svg"></image>
						<text class="service-text">站接送</text>
					</view>
					<view class="service-con2">
						<image class="service-icon" src="/static/youju/gou.svg"></image>
						<text class="service-text">小物件借用</text>
					</view>
				</view>
				<view class="service-base-right">
					<view class="service-con1">
						<image class="service-icon" src="/static/youju/gou.svg"></image>
						<text class="service-text">电梯</text>
					</view>
					<view class="service-con2">
						<image class="service-icon" src="/static/youju/gou.svg"></image>
						<text class="service-text">传统节日活动</text>
					</view>
				</view>
			</view>
			<view class="service-base">
				<view class="service-base-left">
					<image class="service-base-left-img" src="/static/youju/wifi.svg"></image>
					<view class="service-base-left-name">现代生活</view>
				</view>
				<view class="service-base-center">
					<view class="service-con1">
						<image class="service-icon" src="/static/youju/gou.svg"></image>
						<text class="service-text">空调</text>
					</view>
					<view class="service-con2">
						<image class="service-icon" src="/static/youju/gou.svg"></image>
						<text class="service-text">洗衣机</text>
					</view>
				</view>
				<view class="service-base-right">
					<view class="service-con1">
						<image class="service-icon" src="/static/youju/gou.svg"></image>
						<text class="service-text">高速无线网络</text>
					</view>
					<view class="service-con2">
						<image class="service-icon" src="/static/youju/gou.svg"></image>
						<text class="service-text">公用停车位</text>
					</view>
				</view>
			</view>
			<view class="service-base">
				<view class="service-base-left">
					<image class="service-base-left-img" src="/static/youju/health.svg"></image>
					<view class="service-base-left-name">养生服务</view>
				</view>
				<view class="service-base-center">
					<view class="service-con1">
						<image class="service-icon" src="/static/youju/gou.svg"></image>
						<text class="service-text">定期体检</text>
					</view>
					<view class="service-con2">
						<image class="service-icon" src="/static/youju/gou.svg"></image>
						<text class="service-text">足浴服务</text>
					</view>
				</view>
				<view class="service-base-right">
					<view class="service-con1">
						<image class="service-icon" src="/static/youju/gou.svg"></image>
						<text class="service-text">养生指南</text>
					</view>
					<view class="service-con2">
						<image class="service-icon" src="/static/youju/gou.svg"></image>
						<text class="service-text">营养补品供应</text>
					</view>
				</view>
			</view>
			<view class="service-base">
				<view class="service-base-left">
					<image class="service-base-left-img" src="/static/youju/racket.svg"></image>
					<view class="service-base-left-name">舒心康乐</view>
				</view>
				<view class="service-base-center">
					<view class="service-con1">
						<image class="service-icon" src="/static/youju/gou.svg"></image>
						<text class="service-text">义工机会</text>
					</view>
					<view class="service-con2">
						<image class="service-icon" src="/static/youju/gou.svg"></image>
						<text class="service-text">乒乓球</text>
					</view>
				</view>
				<view class="service-base-right">
					<view class="service-con1">
						<image class="service-icon" src="/static/youju/gou.svg"></image>
						<text class="service-text">棋牌</text>
					</view>
					<view class="service-con2">
						<image class="service-icon" src="/static/youju/gou.svg"></image>
						<text class="service-text">舞蹈</text>
					</view>
				</view>
			</view>
			<view class="service-link" @click="pageTo('/pages/found/youju/showmore/showFac')">查看完整设施</view>
		</view>
		<view class="into_need_know">
			<view class="into_need_know-title">入住须知</view>
			<view class="into_need_know-lable">入住退房时间</view>
			<view class="into_need_know-content">{{room.notice}}</view>
		</view>
		<view class="section">
			<view class="section-title">取消政策</view>
			<view class="section-content">宽松</view>
			<view class="section-link" @click="pageTo('/pages/found/youju/showmore/cancellation')">查看详情</view>
		</view>
		<view class="section">
			<view class="section-title">基本要求</view>
			<view class="section-content">不允许在房间内举办派对和活动·禁止吸烟</view>
			<view class="section-link" @click="pageTo('/pages/found/youju/showmore/baseRequire')">查看详情</view>
		</view>
		<view class="section">
			<view class="section-title">交易提示</view>
			<view class="section-content" style="margin-bottom: 22upx;line-height: 44upx;">如果您需要开具房费收据，请在入住后的1个月内在APP中申请，请不要相信其它任何平台的折扣或礼金券代订，并始终在爸妈都好的应用/网站内转账和交流。</view>
		</view>
		<view class="other">
			<view class="other-title">其他房间</view>
			<SZqianggou ref="qianggou" index="2" :list2="otherlist"></SZqianggou>
		</view>
		<comFooter :old_price="originalPrice" :housingID='housingID' :new_price="salesPrice"   show_detail show_service></comFooter>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	import indexHeader from '@/components/index-header.vue';
	import calendar from '@/components/date-picker/date-picker';
	import comFooter from '@/components/footer.vue';
	import SZqianggou from '@/components/SZ-qianggou/SZ-qianggou.vue'
	export default {
		components: {
			uniRate,
			uniSwiperDot,
			indexHeader,
			calendar,
			comFooter,
			SZqianggou,
		},
		data() {
			return {
				current: 0,
				mode: 'dot',
				dotsStyles:{
					width:'7',
					height:'7',
					color:'#FFFFFF',
					backgroundColor:"rgba(250,250,250,.66)",
					border:'1px rgba(250, 250, 250, 0) solid',
					selectedBackgroundColor:'#FFFFFF',
					selectedBorder:'1px rgba(250, 250, 250, 0) solid',
				},
				room:{
				},
				detailList:[
					
				],
				daysCount: 130,
				//初始日期
				initStartDate: '2019-12-06',
				initEndDate: '2019-12-07',
				otherlist:[
				],
				originalPrice:'',
				salesPrice:'',
				appraise:'',
				housingID:''
			};
		},
		onLoad: function(option) {
			console.log('9999999',option)
			let did = (option.id = '' ? '1' : option.id);
			this.getParticularsList(did);
	       uni.setStorageSync('housing', did);
		},
		methods:{
		
			/**
			 * @desc 选择入住日期
			 * @param choiceDate 时间区间（开始时间和结束时间）
			 * @param dayCount 共多少晚
			 */
			changeDays({ choiceDate, dayCount }) {
				uni.setStorage({
				    key: 'timeDate',
				    data: choiceDate,
				    success: function () {
				        console.log('success');
				    }
				});
			 uni.setStorageSync('inAll', dayCount);
			 console.log(dayCount)
				console.log(choiceDate[0].re + '  到 ' + choiceDate[1].re)
				console.log(choiceDate[0].re + '  到 ' + choiceDate[1].re + '  共 ' + dayCount + ' 晚');
			},
			change(e) {
				this.current = e.detail.current;
			},
				//获取订单详情
						async getParticularsList(id){
							let param = this.$helper.setConfig('&id=' + id);
							console.log(param.signature,param.timestamp)
							let res = await this.$http.request({
								method: 'post',
								url: '/index/Community/get_house_particulars',
								data: {
									signature: param.signature,
									timestamp: param.timestamp,
									id: id,
								}
							});
							if(res.state == 10000){
								console.log(res)
								this.room=res.data.house;
								this.detailList=res.data.house.details_attr
								this.otherlist=res.data.directs
								this.originalPrice=res.data.house.original_price
								this.salesPrice=res.data.house.sales_price
								// this.appraise=res.data.house.appraise
								this.housingID=Number(res.data.house.id)
								uni.setStorageSync('appraise', res.data.house.appraise);
							
							
						}
					},
			/**
			 * @desc 跳转页面
			*/
			pageTo(url){
				console.log('url',url)
				
				// uni.showToast({
				// 	title:"点击了",
				// 	duration:6666666
				// })
				uni.navigateTo({
					url:url
				})
			}
		},
		
	   
	}
</script>

<style lang="less">
image {
	padding: 0;
	margin: 0;
	border: 0;
}

.room{
	background-color: #F3F3F3;
	// ios底部安全距离-bottom
	bottom: constant(safe-area-inset-bottom);
	bottom: env(safe-area-inset-bottom); 
	.swiper-box{
		height: 500upx !important;
	}
	.swiper-item{
		width: 100%;
		height: 500upx;
	}
	&-desc{
		background-color: #ffffff;
		width: 100%;
		padding: 40upx 48upx 32upx 48upx;
		border-top: 1upx solid #e5e5e5;
		border-bottom: 1upx solid #e5e5e5;
		&-indoor{
			color: #393E4F;
			font-size: 24upx;
			font-weight: bold;
		}
		&-title{
			color: #494A41;
			font-size: 36upx;
			margin-top: 8upx;
			margin-bottom: 20upx;
			font-weight: bold;
			line-height: 44upx;
		}
		&-tag{
			color: #494A41;
			font-size: 28upx;
			&-item{
				display: inline-block;
				margin-bottom: 16upx;
				background-color: #f3f3f3;
				margin-right: 16upx;
				padding: 8upx 12upx;
				border-radius: 8upx;
			}
		}
		&-maxinto{
			color: #365535;
			font-size: 28upx;
			margin-top: 4upx;
		}
	}
	.coupon{
		width: 100%;
		display: flex;
		flex-direction: row;
		background-color: #ffffff;
		padding: 35upx 48upx;
		justify-content: space-between;
		&-left{
			font-size: 24upx;
			&-top{
				color: rgba(51, 51, 51, 1);
				font-size: 28upx;
				font-weight: bold;
			}
			&-bottom{
				color: rgba(51, 51, 51, 1);
				font-size: 28upx;
			}
		}
		&-right{
			width: 60upx;
			height: 60upx;
		}
	}
	.detail{
		background-color: #FFFFFF;
		width: 100%;
		padding: 32upx 48upx 30upx 48upx;
		margin-top: 14upx;
		&-title{
			color: #101010;
			font-size: 36upx;
			font-weight: bold;
			margin-bottom:40upx;
		}
	}
	.service{
		margin-top: 14upx;
		background-color: #FFFFFF;
		padding: 28upx 0 32upx 0;
		&-title{
			color: #101010;
			font-size: 36upx;
			font-weight: bold;
			padding: 0 48upx;
		}
		&-base{
			border-top: 1upx solid #eaeaea;
			display: flex;
			justify-content: space-around;
			padding: 40upx;
			&-left{
				width: 96upx;
				text-align: center;
				overflow: hidden;
				&-img{
					width: 48upx;
					height: 48upx;
				}
				&-name{
					color: #444444;
					font-size: 22upx;
					font-weight: 500;
					margin-top: 4upx;
					font-weight: bold;
					// text-align: left;
				}
			}
			&-center{
				width: 236upx;
				margin-left: 50upx;
			}
			&-right{
				width: 236upx;
			}
		}
		&-icon{
			width: 32upx;
			height: 32upx;
			margin-bottom: -5upx;
		}
		&-text{
			color: #444444;
			font-size: 28upx;
			margin-left: 4upx;
		}
		&-link{
			padding: 0 48upx;
			color: #DA7B07;
			font-size: 32upx;
		}
		&-con1{
			margin-bottom: 20upx;
		}
	}
	.into_need_know{
		margin-top: 14upx;
		background-color: #FFFFFF;
		padding: 30upx 48upx;
		&-title{
			color: #101010;
			font-size: 36upx;
			font-weight: bold;
			margin-bottom: 30upx;
		}
		&-lable{
			color: #333333;
			font-size: 28upx;
			margin-bottom: 14upx;
			font-size: bold;
		}
		&-content{
			color: #333333;
			font-size: 32upx;
		}
	}
	.section{
		background-color: #FFFFFF;
		border-top: 1upx solid #eaeaea;
		color: #333333;
		font-size: 36upx;
		padding: 30upx 48upx;
		&-title{
			font-size: 28upx;
			font-weight: bold;
			margin-bottom: 14upx;
		}
		&-content{
			margin-bottom: 18upx;
			font-size: 32upx;
			color: #333333;
		}
		&-link{
			color: #DA7B07;
		}
	}
	.other{
		margin-top:14upx;
		background-color: #FFFFFF;
		padding:  30upx 48upx 10upx 48upx;
		margin-bottom: 200upx;
		&-title{
			color: #101010;
			font-size: 36upx;
			font-weight:bold;
			margin-bottom: 46upx;
		}
	}
}
		/deep/.uni-icons{
			line-height: 1 !important;
		}
		
		/deep/.uni-rate__icon-on{
			top:0 !important;
		}
		
</style>
