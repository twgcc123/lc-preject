<template>
	<view class="guanzhu" :style="marginTop ? 'margin-top:' + marginTop : ''">
		<view class="container" v-for="(item, index) in gzList" :key="index">
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
							<text class="yuans"></text>
							<text>发布于 {{ item.time }}分钟</text>
						</view>
					</view>
				</view>
				<view class="header-right flexlr">
					<view class="see" v-if="item.see_status == 1">
						<image src="../../../static/hudong/see.png" mode=""></image>
						<text>{{ item.see | filterIn }}</text>
					</view>
					<view class="sign">
						<view class="signup" v-show="item.status == true" @tap="signHandle(item.id)">报名</view>
						<view class="signuping" v-show="item.status == false" @tap="signHandle(item.id)">已报名</view>
					</view>
				</view>
			</view>
			
			<!-- 活动详情 -->
			<view class="details" @tap="pageTo('/pages/interact/interactPage/interactDetail')">
				<!-- T说 -->
				<view class="dcse">
					<text class="dcse-bold">TA说：“</text>
					<text class="dcse-txt">{{ item.ta_take }}</text>
					<text class="dcse-bold">”</text>
				</view>

				<!-- 活动简要 -->
				<view class="concent">
					<view class="c1">{{ item.detail_time }} | 最多{{ item.number_ren }}人 | 男女不限</view>
					<view class="c2">{{ item.dcse }}</view>
				</view>

				<!-- 转发 -->
				<view class="zhuanfa flexlr">
					<image class="imga" :src="item.hd_img" mode=""></image>
					<view class="z2 flexlr">
						<view class="">
							<view class="z2-title">散步</view>
							<view class="z2-txt">距截止报名还剩 {{ item.old_time }}</view>
						</view>
						<uni-icons  class="lts" color="#aaaaaa" type="arrowright" size="14"></uni-icons>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
import uniIcons from '@/components/uni-icons/uni-icons.vue';
export default {
	components:{
		uniIcons,
	},
	data() {
		return {};
	},
	props: {
		gzList: {
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
.flexlr {
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.container {
	padding: 38upx 40upx 40upx 40upx;
	font-size: 28upx;
	font-family: PingFangSC-bold;
	background-color: #ffffff;
	border-bottom: 20upx solid #f3f3f3;
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
				.yuans {
					margin: 0 10upx;
					width: 4upx;
					height: 4upx;
					border-radius: 50%;
					background-color: #999999;
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
		.see {
			color: rgba(170, 170, 170, 1);
			image {
				height: 18upx;
				width: 28upx;
			}
			text {
				margin-right: 12upx;
				margin-left: 8upx;
			}
		}
		.sign {
			margin-left: 20upx;
			text-align: center;
			width: 116upx;
			height: 48upx;
			line-height: 48upx;
			border: 2upx solid rgba(250,250,250,0);
			box-sizing: border-box;
			.signup {
				color: #ffffff;
				border: 2upx solid  #1093bc;
				background-color: #1093bc;
				border-radius: 48upx;
			}
			.signuping {
				color: #333333;
				border: 2upx solid #333333;
				border-radius: 48upx;
			}
		}
	}
	.details{
		margin-top: 30upx;
	}
	.dcse {
		font-size: 32upx;
		.dcse-bold {
			color: rgba(170, 170, 170, 1);
			font-weight: bold;
		}
		.dcse-txt {
			color: #232323;
		}
	}
	.concent {
		color: rgba(102, 102, 102, 1);
		.c1 {
			margin-top: 22upx;
			height: 42upx;
			line-height: 42upx;
		}
		.c2 {
			height: 42upx;
			line-height: 42upx;
			width: 568upx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
	.zhuanfa {
		margin-top: 30upx;
		height: 156upx;
		border-radius: 8upx;
		background-color: rgba(243, 243, 243, 1);
		color: rgba(16, 16, 16, 1);
		font-family: Arial;
		border: 1px solid rgba(255, 255, 255, 0);
		.imga {
			width: 156upx;
			height: 156upx;
			border-radius: 8upx 0px 0px 8upx;
			background-color: rgba(229, 229, 229, 1);
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
				margin-top: 4upx;
				height: 42upx;
				line-height: 42upx;
				width: 404upx;
				color: rgba(51, 51, 51, 1);
				font-size: 26upx;
			}
			.right_arrow {
				width: 40upx;
				height: 40upx;
			}
		}
	}
}
.acvice-bule {
	color: #506b83;
}
</style>
