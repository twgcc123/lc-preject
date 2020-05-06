<template>
	<view :class="['subHeader',{'fontwidth':fontWidth},{'seleteHeight':seleteHeight}]">
		<view v-for="(item,index) in tabList" :key="index" :class="['tab-item',{'heights':heightFlag},currentTab===index?'active-tab':'',]"
		 @click="onClickTab(item,index)">
			<text>{{item.title}}</text>
		</view>
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
			fontWidth: {
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
				heigh: true,
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
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
		}
	}
</script>

<style lang="less" scoped>
	.scroll-tops {
		width: 100%;
	}

	.subHeader {
		height: 78rpx;
		width: 100vw;
		overflow-x: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 1upx solid #DDDDDD;

		.tab-item {
			display: inline-block;
			font-size: 28rpx;
			color: #999999;
			position: relative;

			&+.tab-item {
				margin-left: 50rpx;
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

	.fontwidth {
		height: 90upx;
		line-height: 90upx;

		.active-tab {
			&::after {
				content: "";
				width: 80%;
				height: 6rpx;
				bottom: 2rpx;
				left: 10%;
				border-radius: 8upx;
			}
		}

		.tab-item {
			text {
				font-size: 36upx;
			}
		}
	}

	.seleteHeight {
		height: 90upx;
		line-height: 90upx;

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
