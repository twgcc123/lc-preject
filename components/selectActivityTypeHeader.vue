<template>
	<view :class="['subHeader',{'seleteHeight':seleteHeight}]">
		<scroll-view class="swiper-tab" scroll-x="true" :scroll-left="scrollLeft" :scroll-with-animation="true">
			<block v-for="(item,index) in tabList" :key="index">
				<view :class="['tab-item',{'heights':heightFlag},currentTab===index?'active-tab':'',]" @click="onClickTab(item,index)">
					{{item.title}}
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			// tab数组
			tabList: {
				type: Array,
				default: () => []
			},
			activeTab: {
				type: Number,
				default: 1
			},
			heightFlag: {
				type: Boolean,
				default: false
			},
			seleteHeight: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				currentTab: 0,
				scrollLeft: 0
			}

		},
		watch: {
			activeTab: {
				handler: function(newValue, oldValue) {
					this.currentTab = newValue;
				},
				immediate: true
			}
		},
		methods: {
			onClickTab(item, index) {
				this.currentTab = index;
				this.$emit('onClickTab', index);
			},
		}
	}
</script>

<style lang="less" scoped>
	.swiper-tab {
		width: 100%;
		white-space: nowrap;
		border: 0;
	}

	.subHeader {
		height: 78rpx;
		padding: 0 40upx;
		border-bottom: 1upx solid #DDDDDD;

		.tab-item {
			display: inline-block;
			font-size: 28rpx;
			color: #999999;
			position: relative;

			&+.tab-item {
				margin-left: 44rpx;
			}
		}

		.active-tab {
			color: #333;
			font-weight: bold;

			&::after {
				content: "";
				width: 100%;
				height: 4rpx;
				background-color: #F7CD49;
				position: absolute;
				bottom: 4rpx;
				left: 0;
			}
		}

		.heights {
			&::after {
				width: 100%;
				bottom: -12rpx;
			}
		}
	}

	.seleteHeight {
		height: 90upx;
		line-height: 90upx;
		overflow-x: hidden;

		.tab-item {
			text {
				font-size: 32upx;
			}
		}

		.active-tab {
			&::after {
				content: "";
				width: 70%;
				height: 8rpx;
				bottom: 2upx;
				left: 10%;
				border-radius: 8upx;
			}
		}
	}
</style>
