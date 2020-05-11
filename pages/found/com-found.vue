<template>
	<view class="page" v-if="show">
		<view class="youju-list" :style="{height: height}">
			<uni-list :scroll-y="true">
				<uni-cell class="containers" v-for="(item, index) in hotel_list" :key="item.id">
					<view class="list-item">
						<view class="list-item-left" @tap="palyVideo(index)">
							<image class="list-item-left-video" :src="item.video_image"></image>
							<image class="list-item-left-play" src="../../static/youju/playbg.png"></image>
						</view>
						<view class="list-item-right" @click="pageTo(item.id)">
							<text class="list-item-right-title">{{ item.name }}</text>
							<view class="list-rote">
								<uni-rate size="11" :value="item.appraise" disabled></uni-rate>
								<text class="list-item-right-rote">{{ item.appraise }}分</text>
							</view>

							<view class="list-item-right-tip">
								<text class="list-item-right-tip-text" v-for="(tag,i) in item.slogan" :key="i">{{ tag }}</text>
							</view>

							<text class="list-item-right-address">台湾 日月潭</text>
							<!-- <text class="list-item-right-address">{{ item.address ? 'item.address': '暂无' }}</text> -->
							<view class="list-item-right-scenery">
								<text class="list-item-right-scenery-img">景</text>
								<text class="list-item-right-scenery-text" style="width: 446upx;overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp:1;-webkit-box-orient: vertical;">{{item.community_tag[0]}}</text>
								<!-- <image class="list-item-right-scenery-img" src="../../static/youju/play.svg"></image> -->
								<!-- <text class="list-item-right-scenery-text">{{ item.scenery ? 'item.scenery': '暂无' }}</text> -->
							</view>
							<view class="list-item-right-warm">
								<text class="list-item-right-warm-img">温</text>
								<text class="list-item-right-warm-text" style="width: 446upx;overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp:1;-webkit-box-orient: vertical;">{{item.community_tag[1]}}</text>
								<!-- <image class="list-item-right-warm-img" src="../../static/youju/play.svg"></image> -->
								<!-- <text class="list-item-right-warm-text">{{ item.warm ? 'item.warm' : '暂无'}}</text> -->
							</view>
						</view>
					</view>
				</uni-cell>
			</uni-list>
		</view>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniCell from "@/components/uni-cell/uni-cell.vue"
	export default {
		props: {
			hotel_list: {
				type: Array,
				default: () => []
			},
			show: {
				type: Boolean,
				default: false
			}
		},

		components: {
			uniRate,
			uniList,
			uniCell
		},

		data() {
			return {
				navIndex: 1,
				height: '',
				dataList: [{
						id: 1,
						title: '农家乐优居',
						video_img: '../../static/youju/video.png',
						rote: '7.5',
						tip: '温暖南国 四季如春 钓鱼爱好者',
						address: '台湾 日月潭',
						scenery: '日月潭',
						warm: null
					},
					{
						id: 2,
						title: '农家乐优居',
						video_img: '../../static/youju/video.png',
						rote: '7.5',
						tip: '温暖南国 四季如春 钓鱼爱好者',
						address: '台湾 日月潭',
						scenery: '日月潭',
						warm: null
					},
					{
						id: 3,
						title: '农家乐优居',
						video_img: '../../static/youju/video.png',
						rote: '7.5',
						tip: '温暖南国 四季如春 钓鱼爱好者',
						address: '台湾 日月潭',
						scenery: '日月潭',
						warm: null
					}
				]
			};
		},
		created() {
			let heightUpx = uni.getSystemInfoSync().screenHeight * 750 / uni.getSystemInfoSync().screenWidth;
			let tabarHeightUpx = 50 / uni.getSystemInfoSync().screenHeight * heightUpx

			// this.height = `${ heightUpx - (88 + 88 + 54 + tabarHeight) }upx`;
			this.height = heightUpx - (88 + 88 + 54 + tabarHeightUpx) + "upx";
			console.log(this.height)
			console.log('88888',this.hotel_list)
		},

		methods: {
			/**
			 * @desc 顶部导航栏切换
			 */
			headerSwitch(val) {
				this.navIndex = val;
			},
			/**
			 * @desc 跳转页面
			 */
			pageTo(index) {
				console.log(index); // id = 1
				uni.navigateTo({
					url: `/pages/found/youju/youju?id=${index + 1}`
				});
			},
			goDetail(id) {
				console.log(id) // id = 1
				uni.navigateTo({
					url: `/pages/found/youju/youju?id=${id}`
				});
			},

			palyVideo(index) {
				uni.navigateTo({
					url: "/pages/found/youjuvedeo/youjuVideo"
				});
				// uni.navigateTo({ url: `/pages/found/youju/youju?id=${index + 1}`});
				// uni.navigateTo({
				// 	url: "/pages/found/youjuvedeo/youjuVideo"
				// });
			}
		}
	};
</script>

<style lang="less" scoped>
	.page {
		flex: 1;
		overflow: hidden;
		position: relative;
		background-color: #151619;
		width: 750upx;
	}

	.youju-list {
		margin-top: 230upx;
		// background-color: #ff0000;
	}

	.list-item {
		flex-direction: row;
		padding: 40upx 40upx 0 40upx;
		width: 750upx;
		border-bottom-width: 1rpx;
		border-color: #444444;
		border-style: solid;

	}

	.list-item-left {
		width: 180upx;
		height: 180upx;
		position: relative;
	}

	.list-item-left-video {
		width: 180upx;
		height: 180upx;
		margin-top: 4upx;
		border-radius: 10upx;
	}

	.list-item-left-play {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 56upx;
		height: 56upx;
	}

	.list-item-right {
		margin-left: 20upx;
	}

	.list-item-right-title {
		color: #FFFFFF !important;
		font-size: 32upx;
		margin-bottom: 16upx;
		font-weight: 800 !important;
		line-height: 32upx;
	}

	.list-rote {
		flex-direction: row;
	}

	.list-item-right-rote {
		color: #787878;
		font-size: 24upx;
		margin-left: 12upx;
		line-height: 24upx;
	}

	.list-item-right-tip {
		margin-left: 0;
		margin-top: 24upx;
		flex-direction: row;
		line-height: 24upx;
	}

	.list-item-right-tip-text {
		font-size: 24upx;
		color: #FF6700;
		font-weight: bold;
		line-height: 24upx;
	}

	.list-item-right-address {
		font-size: 24upx;
		color: #F3F3F3;
		margin-top: 24upx;
		margin-bottom: 16upx;
		line-height: 24upx;
	}

	.list-item-right-scenery {
		font-size: 24upx;
		color: #F3F3F3;
		flex-direction: row;
		margin-bottom: 16upx;
		line-height: 24upx;
		// display: flex;
		align-items: center;
	}

	.list-item-right-scenery-text {
		line-height: 24upx;
		font-size: 24upx;
		color: #F3F3F3;
		line-height: 24upx;
	}

	.list-item-right-scenery-img {
		width: 28upx;
		height: 28upx;
		line-height: 28upx;
		border-radius: 6upx;
		// padding: 3upx;
		text-align: center;
		font-size: 24upx;
		color: #FFFFFF;
		margin-right: 10upx;
		background-color: rgba(139, 195, 74, 1);
	}

	.list-item-right-warm {
		line-height: 24upx;
		margin-bottom: 36upx;
		font-size: 24upx;
		color: #F3F3F3;
		flex-direction: row;
		// display: flex;
		align-items: center;
	}

	.list-item-right-warm-text {
		line-height: 28upx;
		font-size: 24upx;
		color: #F3F3F3;
		line-height: 24upx;
	}

	.list-item-right-warm-img {
		width: 28upx;
		height: 28upx;
		line-height: 28upx;
		border-radius: 6upx;
		// padding: 3upx;
		text-align: center;
		font-size: 24upx;
		color: #FFFFFF;
		margin-right: 10upx;
		background-color: #FF8F43;
	}

	.index {
		// display: flex;
		flex-direction: column;
		/* align-items: center; */
		justify-content: center;
		background-color: #333333;
		// height: 100vh;
	}

	// .sideline{
	// 	height: 1px;
	// 	content: '';
	// 	-webkit-transform: scaleY(.5);
	// 	transform: scaleY(.5);
	// 	background-color: #e5e5e5;
	// }
</style>
