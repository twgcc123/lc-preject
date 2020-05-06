<template>
	<scroll-view class="swiper-tab" scroll-x :scroll-left="scrollLeft" :scroll-with-animation="true">
		<view v-for="(item, index) in list1" :key="item.index" class="swiper-tab-list" :id="index" v-show="index == 1">
			<view class="list-item">
				<view>
					<view class="list-item-title">{{ item.title }}</view>
					<view class="list-item-desc">{{ item.desc }}</view>
				</view>
			</view>
		</view>

		<view v-for="(item, index) in list2" :key="item.index" class="swiper-tab-list2" :id="index" v-show="index == 2">
			<view class="list2">
				<view class="list2-item">
					<image class="list2-item-img" :src="item.img"></image>
					<view class="list2-item-room">{{ item.room }}</view>
					<view class="list2-item-title">{{ item.title }}</view>
					<view class="list2-item-price">{{ item.price }}</view>
					<view class="list2-rote">
						<uni-rate class="scores" size="12" value="4" disabled></uni-rate>
						<text class="list2-item-rate">{{ item.rote }}</text>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
export default {
	props: {
		list1: {
			type: Array,
			default: null
		},
		list2: {
			type: Array,
			default: null
		},
		index: {
			type: [String, Number],
			default: '1'
		}
	},
	data() {
		return {
			scrollLeft: 0 //滚动位置
		};
	}
};
</script>

<style lang="less" scoped>
.swiper-tab {
	width: 100%;
	white-space: nowrap;
	border: 0;
}
.swiper-tab-list {
	display: inline-block;
}
.swiper-tab-list2 {
	display: inline-block;
	width: 440upx;
	overflow: hidden;
	margin-right: 24upx;
}

.list-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1upx solid #eaeaea;
	width: 260upx;
	white-space: pre-wrap;
	padding: 22upx 32upx;
	height: 172upx;
	width: 280upx;
	box-sizing: border-box;
	margin-right: 24upx;
	text-align: left;
	&-title {
		color: #000000;
		font-size: 22upx;
		font-weight: 500;
		font-weight: bold;
		margin-bottom: 22upx;
	}
	&-desc {
		color: #333333;
		font-size: 28upx;
		line-height: 34upx;
	}
}

.list2 {
	display: flex;
	flex-direction: column;
	align-items: center;
	white-space: pre-wrap;
	&-item {
		&-img {
			width: 440upx;
			height: 292upx;
		}
		&-room {
			margin-top: 16upx;
			color: #393e4f;
			font-size: 24upx;
			font-weight: bold;
		}
		&-title {
			color: #494a41;
			font-size: 32upx;
			font-weight: bold;
			margin-top: 8upx;
			// height: 88upx;
			line-height: 40upx;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			// background-color: #0081FF;
		}
		&-price {
			color: #363636;
			font-size: 28upx;
			margin-top: 12upx;
		}
		&-rate {
			color: #555555;
			font-size: 24upx;
			position: relative;
			font-weight: bold;
			left: 130upx;
			line-height: 1;
			top: -25upx;
		}
	}
}

.list2-rote {
	margin-top: 10upx;
	line-height: 1 !important;
	view,text{
		line-height: 0 !important;
	}
}

</style>
