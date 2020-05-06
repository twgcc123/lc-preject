<template>
	<view class="guanzhu">
		<view class="container" v-for="(item, index) in gzList" :key="index">
			<!-- 头部 -->
			<view class="header flexlr">
				<view class="header-left flexlr">
					<image :src="item.avada_img" mode=""></image>
					<view class="header-left-dcsc">
						<view class="">
							<text class="name">{{ item.name }}</text>
							<image class="yuan" src="../../../static/hudong/yuan.png" mode=""></image>
							<text>{{item.guanxi}}</text>
						</view>
						<view class="time">
							<text>活动</text>
							<image class="yuan" src="../../../static/hudong/yuan.png" mode=""></image>
							<text>发布于 {{ item.time }}分钟</text>
						</view>
					</view>
				</view>
				<view class="header-right flexlr">
					<view class="see">
						<image src="../../../static/hudong/see.png" mode=""></image>
						<text>{{ item.see | filterIn }}</text>
					</view>
					<view class="sign">
						<view class="signup" v-show="item.status == true" @tap="signHandle(item)">报名</view>
						<view class="signuping" v-show="item.status == false" @tap="signHandle(item)">已报名</view>
					</view>
				</view>
			</view>

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
					<image class="right_arrow" src="../../../static/right_arrow.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'interactGuanzhu',
	data() {
		return {};
	},
	props: {
		gzList: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		scroll: function() {
			// console.log('11');
		},
		signHandle(sign) {
			this.gzList.some(item => {
				if (item.id == sign.id) {
					this.$emit('signStatus', sign);
				}
			});
		},
		onReachBottom() { //监听上拉触底事件
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
		},
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
	padding: 40upx;
	font-size: 28upx;
	font-family: PingFangSC-bold;
	background-color: #FFFFFF;
	border-bottom: 20upx solid #f3f3f3;
	.header-left {
		image {
			width: 60upx;
			height: 60upx;
			border-radius: 50%;
		}
		.header-left-dcsc {
			flex: 1;
			margin-left: 20upx;
			color: rgba(51, 51, 51, 1);
			font-size: 24upx;
			.name {
				font-weight: bold;
			}
			.time {
				margin-top: 2upx;
				color: rgba(153, 153, 153, 1);
				font-size: 22upx;
			}
			.yuan {
				margin: 0 14upx;
				width: 8upx;
				height: 8upx;
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
			.signup {
				color: #ffffff;
				background-color: #1093bc;
				border-radius: 48upx;
			}
			.signuping {
				color: #333333;
				border: 1upx solid #333333;
				border-radius: 48upx;
			}
		}
	}
	.dcse {
		margin-top: 28upx;
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
		margin-top: 28upx;
		color: rgba(102, 102, 102, 1);
		.c2 {
			width: 568upx;
			height: 42upx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
	.zhuanfa {
		margin-top: 28upx;
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
				margin-top: 6upx;
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
</style>
