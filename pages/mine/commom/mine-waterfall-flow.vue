<template>
	<view class="flow-box" :style="'height: ' + loadingTop + 'px'">
		<view 
			class="item"
			:class="left[index] == 1 ? 'left' : ''"
			:style="'top:' + top[index] + 'px;'"
			v-for="(item, index) in newList" :key="index"
			:data-index="index"
			@click="choose"
		>
			<view class="pic">
				<image class="image" mode="widthFix" :src="item.image" style="width: 100%; display: block;" ></image>
				<view class="player">
					<image src="/static/nime/player.svg" mode=""></image>
				</view>
			</view>
			<view class="content">
				<text class="world">{{item.content}}</text>
				<view class="user">
					<image src="/static/nime/dingwei0.svg"></image>
					<text class="dcse">{{item.user.name}}</text>
				</view>
			</view>
		</view>
		<view class="loading" v-show="loading" :style="'top: ' + loadingTop + 'px'" >
			<image src="/static/nime/loading.gif" style="width: 80upx; height: 80upx;"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 数据列表
			list: {
				type: Array,
				default() {
					return []
				}
			},
			// 加载动画
			loading: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				mark: 0,
				newList: [],
				boxHeight: [],
				top: [], 
				left: [],
				loadingTop: 0
			}
		},
		watch: {
			// 数据
			list: function (newVal, oldVal) {
				this.mark = oldVal.length;
				if (newVal != oldVal) {
					this.newList = this.list;
					this.$nextTick(function () {
						setTimeout(() => {
							this.waterFall();
						}, 120)
					})
				}
			}
		},
		methods: {
			// 瀑布流定位
			waterFall() {
				const query = uni.createSelectorQuery().in(this);
				query.selectAll('.flow-box .item').boundingClientRect(res => {
					let len = this.newList.length;
					let height = 0;
					for (let i = this.mark; i < len; i++) {
						height = res[i].height;
						if (i < 2) {
							this.$set(this.newList[i], 'top', 0);
							this.$set(this.newList[i], 'left', i);
							this.boxHeight.push(height);
							this.top.push(0);
							this.left.push(i);
						} else {
							let minHeight = this.boxHeight[0];
							let index = 0;
							if (minHeight > this.boxHeight[1]) {
								minHeight = this.boxHeight[1];
								index = 1;
							}
							this.boxHeight[index] = minHeight + height + 5;
							this.top.push(minHeight + 5);
							this.left.push(index);
							this.$set(this.newList[i], 'top', minHeight + 5);
							this.$set(this.newList[i], 'left', index);
							this.loadingTop = this.boxHeight[index];
						}
					}
				}).exec();
			},
			// 选中
			choose(e) {
				let index = e.currentTarget.dataset.index;
				this.$emit('chooseClick', this.newList[index]);
				uni.switchTab({url:"/pages/found/found"})
			},
		}
	}
</script>

<style lang="less" scoped>
	.flow-box {
		font-family: PingFangSC-regular;
		position: relative;
		color: #1a1a1a;
		padding-bottom: var(--window-bottom);
	}
	.flow-box .item {
		position: absolute;
		left: 10upx;
		width: calc(50% - 20upx);
		border: 1upx solid #f9f9f9;
		background: #fff;
	}
	.flow-box .left {
		left: 380upx;
	}
	.flow-box .pic {
		background: #f6f6f6;
		position: relative;
		.player{
			position: absolute;
			top: 20upx;
			right: 20upx;
			z-index: 3;
			background-color: rgba(0,0,0,.35);
			height: 48upx;
			width: 48upx;
			text-align: center;
			line-height: 48upx;
			border-radius: 50%;
			image{
				
				height: 20upx;
				width: 20upx;
			}
		}
	}
	.flow-box .content {
		padding: 20upx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.flow-box .content text {
		width: 100%;
		color: #000000;
		font-size: 28upx;
		font-weight: bold;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.flow-box .user {
		margin-top: 16upx;
		display: flex;
		align-items: center;
		font-size: 26upx;
		color: #666;
		image{
			width: 24upx; 
			height: 24upx; 
			margin-right: 12upx;
			color: #222222;
		}
		.dcse{
			flex: 1;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			color: #6A6A6A;
			font-size: 24upx;
		}
	}
	.loading {
		position: absolute;
		width: 100%;
		text-align: center;
		padding: 20upx 0;
	}
</style>
