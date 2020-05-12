<template>
	<view class="content" :class="{'active':active}">
		<image class="bg-img" src="../../static/add/bg.jpg"></image>
		<!-- <image class="logo" :class="{'active':active}" src="../../../static/logo.png"  mode="aspectFit"></image> -->
		<view class="tabbar-box-wrap">
			<view class="tabbar-box">
				<view class="tabbar-box-content">
					<view class="tabbar-box-item" @click="pageTo('/pages/dynamic/writeHeartSign')">
						<image class="box-image" src="/static/add/release.png" mode="aspectFit"></image>
						<text class="explain">写心签</text>
						<text class="small-tip">心识智慧的记录</text>
					</view>
					<!-- @click="pageTo('/pages/add/publish')" -->
					<view class="tabbar-box-item" @click="chooseImage">
						<image class="box-image" src="/static/add/video.png" mode="aspectFit"></image>
						<text class="explain">记录人生</text>
						<text class="small-tip">人生视频、图文</text>
					</view>
					<view class="tabbar-box-item">
						<image class="box-image" src="/static/add/qa.png" mode="aspectFit"></image>
						<text class="explain">发需求</text>
						<text class="small-tip">找人帮忙找娱乐</text>
					</view>
				</view>
				<view class="tabbar-close" @tap="goToPage('/pages/found/found')">
					<image class="tabbar-close-icon" src="/static/add/close.svg"></image>
				</view>
			</view>
		</view>
	</view>
</template> 

<script>
export default {
	data() {
		return {
			active: false
		};
	},
	onLoad() {},
	onShow() {
		// setTimeout(() => {
		this.active = true;
		// }, 500);
	},
	onHide() {
		this.active = false;
	},
	methods: {
		pageTo(url){
			if (!url) return;
			uni.navigateTo({
				url: url
			})
		},
		goToPage(url) {
			if (!url) return;
			uni.switchTab({
				url: url
			});
		},
		chooseImage(){
			const that = this;
			uni.chooseMedia({
			    count: 6, //默认9
			    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			    sourceType: ['album'], //从相册选择
			    success: function (res) {
			        console.log(JSON.stringify(res.tempFilePaths));
					that.pageTo('/pages/add/publish');
			    }
			});
		},
	}
};
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	/* #ifdef H5 */
	height: calc(100vh - var(--window-bottom) - var(--window-top));
	/* #endif */
	/* #ifndef H5 */
	height: 100vh;
	/* #endif */
	transition: opacity 0.3s;
	background: #999;
	opacity: 0;
	&.active {
		opacity: 1;
	}
	.bg-img{
		width: 750upx;
		height: 100vh;
	}
	.logo {
		position: relative;
		margin-top: -400upx;
		width: 200upx;
		height: 200upx;
		// z-index: -1;
		opacity: 0;
		transition: opacity 0.3s;
		&.active {
			opacity: 1;
		}
	}
}
.tabbar-box-wrap {
	position: absolute;
	width: 100%;
	padding: 50upx;
	box-sizing: border-box;
	bottom: 0;
	left: 0;
	.tabbar-box {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		background: #fff;
		border-radius: 20upx;
		padding: 15upx 20upx;
		box-sizing: border-box;
		z-index: 2;
		box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
		&:after {
			content: '';
			position: absolute;
			bottom: -16upx;
			left: 0;
			right: 0;
			margin: auto;
			width: 50upx;
			height: 50upx;
			transform: rotate(45deg);
			background: #fff;
			z-index: 1;
			box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);
			border-radius: 2px;
		}
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: #ffffff;
			border-radius: 20upx;
			z-index: 2;
		}
		.tabbar-box-content{
			display: flex;
		}
		.tabbar-box-item {
			// position: relative;
			width: 100%;
			z-index: 3;
			margin: 10upx;
			color: $uni-color-subtitle;
			text-align: center;
			font-size: $uni-font-size-base;
			display: flex;
			flex-direction: column;
			.box-image {
				width: 100%;
				height: $uni-img-size-lg;
			}
			.small-tip{
				color: #999999;
				font-size: 22upx;
			}
			.explain{
				color: #101010;
				font-size: 26upx;
			}
		}
		.tabbar-close{
			width: 40upx;
			height: 40upx;
			margin: 20upx auto;
			z-index: 3;
			.tabbar-close-icon{
				width: 40upx;
				height: 40upx;
			}
		}
	}
}
</style>