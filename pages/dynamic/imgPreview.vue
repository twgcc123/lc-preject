<template>
	<view class="">
		<view class="navbar" :style="[{paddingTop: hasNotchInScreen ? '44px': '20px'}]">
			<view class="navbar-left" @click="pageTo()">
				<uni-icons color="#ffffff" type="back" size="24"></uni-icons>
			</view>
			<view class="navbar-title">
				<view class="navbar-title-time">2020年3月3日 18:30</view>
				<view class="navbar-title-count">{{ current + 1 }} / {{ picList.length }}</view>
			</view>
			<view class="navbar-right" @click="openPopup">
				<uni-icons color="#ffffff" type="more-filled" size="24"></uni-icons>
			</view>
		</view>
		<view class="mask">
			<swiper  @change="changeSwiper" class="my_swiper" :current="current" :circular="circular" :indicator-dots="indicatorDots" :autoplay="autoplay" :duration="duration">
				<swiper-item v-for="(item, index) in picList" :key="index">
					<view class="bg_img" :style="{ backgroundImage: 'url('+ item +')'}"></view>
				</swiper-item>
			</swiper>
		</view>
		<view class="footer" :style="[{paddingBottom: isIphoneX ? '49px': '15px'}]">
			<view class="footer-left">
				<text>示范换行</text>
				<text>合适女性朋友</text>
				<text>2016年保存品订单 </text>
				<text>配件：盒子、尘袋、钥匙锁、购</text>
				<text>好价仅 2W+</text>
			</view>
			<image @click="pageTo('/pages/dynamic/eventDetail')" class="footer-right" src="/static/dongtai/next.svg"></image>
		</view>
		<!-- 弹窗 -->
		<uni-popup ref="popup" type="bottom">
			<view class="popup">
				<view class="popup-item bottom-line popup-first" @tap="closePopup">设为仅亲友可见</view>
				<view class="popup-item bottom-line" @tap="closePopup">设为仅自己可见</view>
				<view class="popup-item popup-unfollow" @tap="closePopup">删除此动态</view>
				<view class="popup-item popup-cancle" @tap="closePopup">取消</view>
				<view class="popup-item popup-bottom"></view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniIcons from '@/components/uni-icons/uni-icons.vue';
export default { 
	components: {
		uniIcons,
		uniPopup
	},
	data() {
		return {
			picList: [],
			indicatorDots: false,
			autoplay: false,
			duration: 500,
			circular: true,
			current: 0,
			isShowSwiper: false
		};
	},
	onLoad() {
		this.picListInit();
	}, 
	methods: {
		/**
		 * @desc 打开弹窗
		 */
		openPopup() {
			this.$refs.popup.open();
		},
		/**
		 * @desc 关闭弹窗
		 */
		closePopup() {
			this.$refs.popup.close();
		},
		/**
		 * @desc 跳转页面
		 */
		pageTo(url){
			if(!url){
				uni.navigateBack();
				return;
			}
			uni.navigateTo({
				url: url
			})
		},
		/**
		 * @desc 获取图片列表及index
		 */
		async picListInit() {
			this.current = uni.getStorageSync("currentImgIndex");
			this.picList = uni.getStorageSync("currentImg");
			uni.showToast({
				title: this.picList,
				duration: 1000
			})
		},
		changeSwiper(e) {
			this.current = e.target.current;
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	position: fixed;
	z-index: 6;
	color: #fff;
	bottom: 20rpx;
	text-align: center;
	width: 100%;
}
.navbar{
	width: 750upx;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9;
	color: #FFFFFF;
	background-color: #1b1b1b;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 32upx;
	padding-right: 32upx;
	.navbar-title{
		text-align: center;
		.navbar-title-time{
			font-size: 34upx;
			line-height: 48upx;
		}
		.navbar-title-count{
			font-size: 26upx;
			line-height: 36upx;
		}
	}
}
.mask {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #000;
	z-index: 5;
	> .my_swiper {
		width: 100%;
		height: 60vh;
		.bg_img {
			background-size: 100% auto;
			background-repeat: no-repeat;
			background-position:center;
			width: 100%;
			height: 100%;
		}
	}
}

.pic_list {
	display: flex;
	flex-flow: row wrap;
	> view {
		flex: 0 0 33.3vw;
		height: 33.3vw;
		padding: 1vw;
		> image {
			width: 100%;
			height: 100%;
		}
	}
}
.footer{
	width: 750upx;
	position: fixed;
	left: 0;
	bottom: 0;
	padding: 30upx;
	z-index: 9;
	color: #FFFFFF;
	background-color: #1b1b1b;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.footer-left{
		font-size: 26upx;
		line-height: 32upx;
		display: flex;
		flex-direction: column;
		text-align: left;
	}
	.footer-right{
		width: 32upx;
		height: 32upx;
		margin-right: 40upx;
	}
}
.popup {
	background-color: #4b4b4b;
	border-radius: 20upx 20upx 0 0;
	font-size: 32upx;
	color: #000000;
	.popup-first{
		border-radius: 20upx 20upx 0 0;
	}
	.popup-item {
		padding: 30upx;
		text-align: center;
		background-color: #ffffff;
	}
	.popup-cancle {
		margin-top: 15upx;
	}
	.popup-unfollow {
		color: #ff0000;
	}
	.bottom-line {
		border-bottom: 1px solid #eaeaea;
	}
	.popup-bottom{
		height: 68upx;
	}
}

</style>
