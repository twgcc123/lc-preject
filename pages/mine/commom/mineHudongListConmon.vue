<template>
	<view class="guanzhu" :style="marginTop ? 'margin-top:' + marginTop : ''">
		<view class="container" v-for="(item, index) in hudongList" :key="index">
			<!-- 头部 -->
			<view class="header flexlr">
				<view class="header-left flexlr" @tap="pageTo('/pages/interact/interactPage/interactPersonaHome')">
					<image :src="item.avada_img" mode=""></image>
					<view class="header-left-dcsc">
						<view class="advar">
							<text :class="['name', item.guanxi_status == 0 ? 'acvice-bule' : null]">{{ item.name }}</text>
							<view class="guangxi" v-if="item.guanxi_status == 1">
								<text v-if ="item.guanxi" class="yuangs"></text>
								<text>{{ item.guanxi }}</text>
							</view>
							<view class="guanxi_arrow" v-else>く</view>
						</view>
						<view class="time">
							<text>活动</text>
							<text>发布于 {{ item.time }}分钟</text>
						</view>
					</view>
				</view>
				<view class="header-right">
					<view>{{item.guanxi}}</view>
				</view>
			</view>
			<view class="line-bottom"></view>
			
			<!-- 活动详情 -->
			<view class="details" @tap="pageTo('/pages/interact/interactPage/interactDetail')">
				<!-- T说 -->
				<view class="dcse">
					<text class="dcse-bold" style="margin-right: 6upx;">“</text>
					<text class="dcse-txt">{{ item.ta_take }}</text>
					<text class="dcse-bold" style="margin-left: 6upx;">”</text>
				</view>
				<view class="line-bottom"></view>
				
				<!-- 活动简要 -->
				<view class="concent">
					<view class="ruzhu">入住优居：{{item.ruzhu}}</view>
					<view class="call_time">来电时间：{{item.call_time}}</view>
					<view class="hudong_number">互动编号：{{item.hudong_number}}</view>
				</view>
				
				<!-- 转发 -->
				<view class="zhuanfa flexlr">
					<image class="imga" :src="item.hd_img" mode=""></image>
					<view class="z2 flexlr">
						<view class="">
							<view class="z2-title">散步</view>
							<view class="z2-txt">
								<image class="rili" src="/static/assistant/rili.svg" mode=""></image>
								<text class="times">开始于 {{ item.old_time }}</text>
							</view>
							<view class="text_address">{{item.text_address}}</view>
						</view>
		
					</view>
				</view>
				
			</view>
			
			<view class="footer-status">
				<view class="btn-left" v-if="item.texts_likai !== ''">
					{{item.texts_likai}}
				</view>
				<view class="btn-right">
					{{item.texts_stutsa}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>

export default {
	components:{
	},
	data() {
		return {};
	},
	props: {
		hudongList: {
			type: Array,
			default: () => []
		},
		marginTop: {
			type: String,
			default: ''
		}
	},
	created() {
		console.log(this.marginTop);
	},
	methods: {
		pageTo(url) {
			uni.navigateTo({
				url: url
			});
		},
		scroll: function() {
			// console.log('11');
		},
		signHandle(iid) {
			let datas = this.gzList
			datas.some(item => {
				if (item.id == iid) {
					this.$emit('signStatus', iid);
				}
			});
		},
		// signHandled(iid) {
		// 	let datas = this.gzList
		// 	datas.some(item => {
		// 		if (item.id == iid) {
		// 			this.$emit('signStatusd', iid);
		// 		}
		// 	});
		// },
		onReachBottom() {
			//监听上拉触底事件
			console.log('onReachBottom');
			// this.showLoadMore = true;
			// setTimeout(() => {
			// 	//获取数据
			// 	if (this.posts.length < 20){//测试数据
			// 		this.posts = this.posts.concat(this.posts);
			// 	}else{
			// 		this.loadMoreText = "暂无更多";
			// 	}
			// }, 1000);
		}
	},
	filters: {
		filterIn(val) {
			let numIn;
			if (val > 999) {
				numIn = Number(Math.floor(val / 1000) / 10) + 'K';
			} else {
				numIn = Number(val);
			}
			return numIn;
		}
	}
};
</script>

<style lang="less" scoped>
.guanzhu{
	background-color: #f3f3f3;
	padding: 20upx;
	margin-bottom: 80upx;
}
.flexlr {
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.container {
	padding: 20upx;
	font-size: 28upx;
	font-family: PingFangSC-bold;
	background-color: #ffffff;
	border-radius: 20upx;
	margin-bottom: 20upx;
	.line-bottom{
		height: 1px;
		background-color: #f3f3f3;
		margin-top: 10upx;
	}
	.header{
		height: 88upx;
		.header-left {
			image {
				width: 60upx;
				height: 60upx;
				border-radius: 50%;
			}
			.header-left-dcsc {
				flex: 1;
				margin-left: 14upx;
				color: rgba(51, 51, 51, 1);
				font-size: 24upx;
				.name {
					font-weight: bold;
				}
				.guanxi_arrow {
					margin-left: 2upx;
					color: #cccccc;
					font-weight: bold;
					font-size: 20upx;
					-moz-transform: rotate(180deg);
					-webkit-transform: rotate(180deg);
					filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=12);
				}
				.advar,
				.guangxi {
					display: flex;
					align-items: center;
					text{
						display: inline-block;
					}
					.yuangs{
						margin: 0 10upx;
						width: 6upx;
						height: 6upx;
						border-radius: 50%;
						background-color: #999999;
					}
				}
				.time {
					margin-top: 2upx;
					color: rgba(153, 153, 153, 1);
					font-size: 22upx;
					display: flex;
					align-items: center;
					text {
						display: inline-block;
					}
				}
		
				.yuan2 {
					margin: 0 14upx;
					width: 6upx;
					height: 6upx;
				}
			}
		}
		.header-right {
			color: rgba(51, 51, 51, 1);
			font-size: 26upx;
		}
		
	}
	.details{
		margin-top: 30upx;
	}
	.dcse {
		font-size: 32upx;
		margin-bottom: 18upx;
		.dcse-bold {
			color: rgba(170, 170, 170, 1);
			font-weight: bold;
		}
		.dcse-txt {
			color: #414141;
		}
	}
	.concent {
		margin: 18upx 0;
		color: rgba(153, 153, 153, 1);
		font-size: 26upx;
		.ruzhu,.call_time,.hudong_number{
			margin-top: 4upx;
		}
	}
	.zhuanfa {
		margin-top: 20upx;
		padding: 20upx;
		height: 200upx;
		border-radius: 8upx;
		background-color: rgba(243, 243, 243, 1);
		color: rgba(16, 16, 16, 1);
		font-family: Arial;
		border: 1px solid rgba(255, 255, 255, 0);
		.imga {
			width: 156upx;
			height: 156upx;
			border-radius: 6upx;
			background-color: rgba(229, 229, 229, 1);
		}
		.rili{
			height: 24upx;
			width: 24upx;
			margin-right: 10upx;
		}
		.z2 {
			flex: 1;
			margin-left: 20upx;
			padding-right: 20upx;
			.z2-title {
				height: 42upx;
				line-height: 42upx;
				color: rgba(51, 51, 51, 1);
				font-size: 32upx;
				font-weight: bold;
			}
			.z2-txt {
				margin-top: 34upx;
				height: 42upx;
				line-height: 42upx;
				width: 404upx;
				color: rgba(51, 51, 51, 1);
				font-size: 26upx;
			}
			.text_address {
				margin-top: 2upx;
				color: rgba(102, 102, 102, 1);
				font-size: 26upx;
			}
		}
	}
	.footer-status{
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-top: 24upx;
		.btn-left,.btn-right{
			border-radius: 8upx;
			padding: 12upx 18upx;
			text-align: center;
			font-size: 28upx;
			font-family: Arial;
			border: 1px solid rgba(222, 222, 222, 1);
			color: rgba(51, 51, 51, 1);
		}
		.btn-right{
			margin-left: 30upx;
		}
	}
}
.acvice-bule {
	color: #506b83;
}
</style>
