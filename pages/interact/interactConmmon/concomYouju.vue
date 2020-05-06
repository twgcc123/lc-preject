<template>
	<view class="guanzhu">
		<view class="container" v-for="(item, index) in fabuList" :key="index">
			<!-- 头部 -->
			<view class="header flexlr">
				<view class="header-left flexlr"  @tap="pageTo('/pages/interact/interactPage/interactPersonaHome')">
					<image :src="item.avada_img" mode=""></image>
					<view class="header-left-dcsc">
						<view class="header-left-title">
							<text class="name">{{ item.name }}</text>
							<uni-icons  class="name_lts" color="#aaaaaa" type="arrowright" size="13"></uni-icons>
						</view>
						<view class="time">
							<text>官方</text>
							<text class="yuans"></text>
							<text>发布于 {{ item.time }}分钟</text>
						</view>
					</view>
				</view>
				<view class="header-right flexlr">
					<view class="see">
						<image src="../../../static/hudong/see.png" mode=""></image>
						<text>{{ item.see | filterIn }}</text>
					</view>
				</view>
			</view>
			
			
			<!-- 主要内容 -->
			<view class="">
				
				<!-- 标题 -->
				<view class="dcse">
					<text>{{ item.dcse }}</text>
				</view>

				<!-- 照片-->
				<view class="preimg">
					<view :class="item.list_img.length === 1 ? 'only' : 'img-item'" v-for="(imga, index) in item.list_img" :key="index">
						<image class="big_img" lazy-load mode="aspectFill" :src="imga" :data-src="imga" @tap="previewImage(item.list_img, index)"></image>
					</view>
				</view>
				
				<!-- 发布的优居和时间 -->
				<view class="youju">
					<view class="fabuz">
						发布者
						<text class="fabuz-title" @tap="pageTo(`/pages/found/youju/youju?id=${index + 1}`)">{{ item.fabuz }}</text>
					</view>
					<view class="flexlr">
						<view class="fabut">
							发布于
							<text>{{ item.old_time }}</text>
						</view>
						<view class="fabu-detail">
							<text>活动详情</text>
							<uni-icons  class="lts" color="#333333" type="arrowright" size="14"></uni-icons>
						</view>
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
		return {
			// screenHeight: '', //屏幕高度(系统)
			// platform: '',
			// windowHeight: '' ,//可用窗口高度(不计入软键盘)
		};
	},
	props: {
		fabuList: {
			type: Array,
			default: () => []
		}
	},
	// onLoad() {
	// 	uni.getSystemInfo({
	// 		//获取设备信息
	// 		success: res => {
	// 			this.screenHeight = res.screenHeight;
	// 			this.platform = res.platform;
	// 		}
	// 	});
	// },
	// onShow() {
	// 	uni.onWindowResize(res => {
	// 		if (this.platform === 'ios') {
	// 			this.windowHeight = res.size.windowHeight;
	// 		} else {
	// 			if (this.screenHeight - res.size.windowHeight > 60 && this.windowHeight <= res.size.windowHeight) {
	// 				this.windowHeight = res.size.windowHeight;
	// 			}
	// 		}
	// 	});
	// },
	// onHide() {
	// 	uni.offWindowResize(); //取消监听窗口尺寸变化
	// },
	methods: {
		pageTo(url){
			uni.navigateTo({
				url:url
			})
		},
		scroll: function() {
			// console.log('11');
		},
		previewImage(img, index) {
			console.log('img:', img, 'index:', index);
			var current = img[index];
			uni.previewImage({
				current: current,
				urls: img
			});
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
			margin-left: 20upx;
			color: rgba(51, 51, 51, 1);
			font-size: 24upx;
			.header-left-title {
				display: flex;
				align-items: center;
				.name {
					color: rgba(221, 77, 66, 1);
					font-size: 24upx;
					font-weight: bold;
				}
				.name_lts{
					font-weight: bold;
					position: relative;
					top: 1upx;
				}
				
			}
			.time {
				margin-top: 2upx;
				color: rgba(153, 153, 153, 1);
				font-size: 22upx;
				display: flex;
				align-items: center;
			}
			text{
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
		margin-top: 30upx;
		font-size: 32upx;
		letter-spacing: 1.1px;
		line-height: 42upx;
		color: #000000;
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

.preimg {
	margin-top: 20upx;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}
.big_img {
	width: 100%;
	height: 100%;
}
.img-item {
	box-sizing: border-box;
	width: 166upx;
	height: 166upx;
	margin-right: 6upx;
	margin-bottom: 6upx;
	background: #757575;
	overflow: hidden;
}

.only {
	width: 250upx;
	height: 400upx;
	margin: 4upx;
	background: #757575;
	overflow: hidden;
}
.youju{
	margin-top: 18upx;
	font-size: 28upx;
	color: rgba(102, 102, 102, 1);
}
.fabuz,.fabut{
	height: 42upx;
	line-height: 42upx;
	text{
		margin-left: 10upx;
	}
	.fabuz-title{
		color: #6C8397;
	}
}
.fabu-detail{
	width: 170upx;
	height: 56upx;
	line-height: 56upx;
	text-align: center;
	border: 1px solid rgba(243, 243, 243, 1);
	color: rgba(51, 51, 51, 1);
	font-weight: bold;
	border-radius: 2upx;
	.lts{
		position: relative;
		top: 1upx;
		left: 2upx;
		font-weight: normal;
	}
}

</style>
