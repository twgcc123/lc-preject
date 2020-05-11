<template>
	<view class="dropdown-menu">
		<slot></slot>
		<view class="content-list" id="content-list" :style="{ height: contentHeight }">
			<view :class="['options-list', active ? 'active-options-list' : '']" :style="{ top: optionsHeight > 0 ? '0px' : '-' + 200 + 'px' }">
				<view v-for="(item, index) in options" :key="index" :class="['option-item', value === item.value ? 'active-option-item' : '']" @click="changeItem(item, index)">
					<text class="text">{{ item.text }}</text>
					<view v-if="value === item.value" class="iconfont icon-check"></view>
				</view>
			</view>
			<view :class="['mask', active ? 'show-mask' : '']" @touchmove.stop.prevent="moveHandle" @click="hideOptionsList"></view>
		</view>
	</view>
</template>

<script>
export default {
	model: {
		prop: 'value',
		event: 'change'
	},
	data() {
		return {
			active: false,
			options: [],
			optionsHeight: 0,
			value: '',
			currentMenuItem: '',
			contentHeight: 0,
			systemInfo: null
		};
	},
	watch: {
		active: {
			handler: function(newValue) {
				if (!newValue) {
					this.optionsHeight = '0';
				} else {
					this.optionsHeight = `${88 * this.options.length}`;
				}
			},
			immediate: true
		}
	},
	methods: {
		onMenuItemClick(value, options, active, id) {
			this.currentMenuItem = id;
			if (!active) {
				uni.$emit('closeAllMenu');
			}
			if (this.active) {
				this.active = false;
				setTimeout(() => {
					this.toggle(active);
					this.options = options;
					this.value = value;
				}, 200);
			} else {
				this.toggle(active);
				this.options = options;
				this.value = value;
			}
		},
		toggle(active) {
			this.active = !active;
			this.$emit('toggle', this.value);
		},
		changeItem(item, index) {
			this.toggle(true);
			this.value = item.value;
			uni.$emit('menuChange', item, index, this.currentMenuItem);
			this.$emit('change', item.value, item);
		},
		hideOptionsList() {
			this.toggle(true);
			uni.$emit('menuChange', null, null, null);
		},
		queryHeight() {
			uni.getSystemInfo({
				success: resu => {
					const query = uni.createSelectorQuery().in(this);
					query.select('#content-list').boundingClientRect();
					query.selectViewport().scrollOffset();
					query.exec(res => {
						this.contentHeight = resu.windowHeight - res[0].top - 1 + 'px';
					});
				},
				fail: res => {}
			});
		},
		moveHandle() {}
	},
	mounted() {
		uni.$on('dropdownMenuItemClick', this.onMenuItemClick);
		this.queryHeight();
	},
	created() {}
};
</script>

<style lang="less">
.dropdown-menu {
	width: 100%;
	height: 88rpx;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: space-around;
	border-bottom: 1px solid rgba(182, 182, 182, 0.3);
	position: relative;
	.content-list {
		position: absolute;
		width: 100%;
		top: calc(88rpx + 1px);
		overflow: hidden;
		left: 0;
		display: flex;
		flex-direction: column;
		z-index: 999;
	}
	.options-list {
		position: absolute;
		width: 100%;
		background: white;
		transition: all 0.2s linear 0s;
		overflow: hidden;
		border-bottom: 1px solid rgba(182, 182, 182, 0.3);
		z-index: -1;
	}
	.active-options-list {
		z-index: 1000;
	}
	.mask {
		flex: 1;
		background-color: rgba(0, 0, 0, 0.4);
		z-index: -1;
		opacity: 0;
		display: none;
		-webkit-transition: opacity 0.1s;
		transition: opacity 0.1s;
	}
	.show-mask {
		z-index: 1;
		opacity: 1;
		display: block;
	}
	.option-item {
		width: calc(100% - 60rpx);
		font-size: 14px;
		height: 88rpx;
		display: flex;
		align-items: center;
		padding: 0 30rpx;
		& + .option-item {
			border-top: 1px solid rgba(182, 182, 182, 0.3);
		}
	}
	.active-option-item {
		background-color: rgba(255, 252, 241, 1);
		display: flex;
		align-items: center;
		justify-content: space-between;
		.text {
			font-weight: bold;
			color: coral;
		}
		.icon-check {
			color: coral;
			font-size: 20px;
		}
	}
}
</style>
