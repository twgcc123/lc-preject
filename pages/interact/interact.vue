<template>
	<view class="interact">
		<view class="header">
			<mineFindHeader :tabList="tabList" :activeTab="activeTab" :fontWidth="true" @onClickTab="onClickTab"></mineFindHeader>
		</view>
		<view class="container">
			<!-- 关注 -->
			<view class="swiper" v-show="activeTab == 0">
				<view style="height: 100%;">
					<scroll-view @scrolltolower="lower" scroll-y="true" @scroll="scroll" style="height:100%;">
						<concomList :gzList="dataGuanzhu" @signStatus="signStatusp"></concomList>
						<view class="loadMore" v-if="loadMore">{{ loadMoreDcse }}</view>
					</scroll-view>
				</view>
			</view>
			<view class="swiper" v-show="activeTab == 1">
				<view style="height: 100%;">
					<scroll-view @scrolltolower="lower1" scroll-y="true" @scroll="scroll" style="height:100%;">
						<concomYouju :fabuList="fabuList" @signStatus="signStatusp"></concomYouju>
						<view class="loadMore" v-if="loadMore">{{ loadMoreDcse }}</view>
					</scroll-view>
				</view>
			</view>

			<view class="swiper" v-show="activeTab == 2">
				<view style="height: 100%;">
					<view class="subnav">
						<view class="subnav-item" v-for="(item, index) in subNav1" :key="index" @tap="switchSubnav1(item.id)">
							<text :class="subNavActive1 == item.id ? 'subnav-item-title active' : 'subnav-item-title'">{{ item.title }}</text>
							<image class="subnav-item-icon" :src="subNavActive1 == item.id ? '/static/guanzhu/subnav_active.svg' : '/static/guanzhu/subnav.svg'"></image>
						</view>
					</view>
					<scroll-view @scrolltolower="lower2" scroll-y="true" @scroll="scroll" style="height:100%;">
						<concomList marginTop="88upx" :gzList="dataList" @signStatus="signStatusp"></concomList>
						<view class="loadMore" v-if="loadMore">{{ loadMoreDcse }}</view>
					</scroll-view>
				</view>
			</view>

			<view class="swiper" v-show="activeTab == 3">
				<view style="height: 100%;">
					<view class="subnav">
						<view class="subnav-item" v-for="(item, index) in subNav2" :key="index" @tap="switchSubnav2(item.id)">
							<text :class="subNavActive2 === item.id ? 'subnav-item-title active' : 'subnav-item-title'">{{ item.title }}</text>
							<image class="subnav-item-icon" :src="subNavActive2 === item.id ? '/static/guanzhu/subnav_active.svg' : '/static/guanzhu/subnav.svg'"></image>
						</view>
					</view>
					<scroll-view @scrolltolower="lower3" scroll-y="true" @scroll="scroll" style="height: 100%;">
						<concomList marginTop="88upx" :gzList="dataDaV" @signStatus="signStatusp"></concomList>
						<view class="loadMore" v-if="loadMore">{{ loadMoreDcse }}</view>
					</scroll-view>
				</view>
			</view>

		</view>

		<!-- 弹窗 -->
		<view class="popup-list">
			<uni-popup ref="popupList" type="top">
				<view class="popup" ref="popupTops">
					<view :class="['popup-item', current==index ? 'avtive' : null]" @tap="closePopup(index)" v-for="(item,index) in sortItem"
					 :key="index">
						<text class="titles">{{item.title}}</text>
						<image class="icons" v-show="current==index" src="/static/hudong/dagou.svg" mode=""></image>
					</view>
				</view>
			</uni-popup>
		</view>
		
	</view>
</template>

<script>
	import mineFindHeader from '@/components/mineFindHeader';
	import concomList from './interactConmmon/concomList.vue';
	import concomYouju from './interactConmmon/concomYouju.vue';
	import interactData from '@/utils/interact.data.js';
	import uniPopup from '@/components/uni-popup/uni-popup.vue';

	export default {
		name: 'interact',
		components: {
			mineFindHeader,
			concomList,
			concomYouju,
			uniPopup
		},
		data() {
			return {
				activeTab: 0,
				subNavActive1: 1,
				subNavActive2: 1,
				loadMore: false,
				loadMoreDcse: '加载更多...',
				dataList: interactData.dataList, // js 数据
				fabuList: interactData.fabuList, // js 数据
				dataGuanzhu: interactData.dataGuanzhu, // js 关注数据
				dataDaV: interactData.dataDaV, // js 大v数据
				tabList: [{
						id: 1,
						title: '关注'
					},
					{
						id: 2,
						title: '优居'
					},
					{
						id: 3,
						title: '居友'
					},
					{
						id: 4,
						title: '大V'
					}
				],
				subNav1: [{
						id: 1,
						title: '订阅'
					},
					{
						id: 2,
						title: '最新'
					}
				],
				subNav2: [{
						id: 1,
						title: '订阅'
					},
					{
						id: 2,
						title: '最新'
					}
				],
				current: 0,
				sortItem: [{
					id: 1,
					title: "默认排序"
				}, {
					id: 2,
					title: "按最新排序"
				}, {
					id: 3,
					title: "按热度排序"
				}]
			};
		},
		onShow() {
			// console.log("00")
			// if(this.activeTab == 2 || this.activeTab == 3){
			// 	this.$refs.scrollTops.style.marginTop = 266 + "upx"
			// }
			// if (this.activeTab == 2 || this.activeTab == 3) {
			// 	this.$refs.popupTops.style.top = 266 + "upx"
			// }
			this.$refs.popupList.close();
		},
		onLoad() {
			// console.log(this.dataList.length)
		},

		updated() {},

		methods: {
			switchSubnav1(index) {
				this.subNavActive1 = index;
				console.log(index)
				if (index == 1) {
					this.$refs.popupList.close();
					uni.navigateTo({
						url: "/pages/interact/interactPage/selectActivityTypeMore"
					})
				}
				if (index == 2) {
					this.$refs.popupList.open()
				}
			},

			/**
			 * @desc 关闭弹窗
			 */
			closePopup(index) {
				this.current = index
				this.$refs.popupList.close();
			},

			switchSubnav2(index) {
				this.subNavActive2 = index;
				if (index == 1) {
					this.$refs.popupList.close();
					uni.navigateTo({
						url: "/pages/interact/interactPage/selectActivityTypeMore"
					})
				}
				if (index == 2) {
					this.$refs.popupList.open()
				}
			},
			onClickTab(index) {
				this.activeTab = index;
				this.$refs.popupList.close();
			},
			scroll: function() {},

			signStatusp(iid) {
				// console.log(sign)
				this.dataList.some(item => {
					if (item.id == iid) {
						item.status = !item.status;
					}
				});
			},

			// signStatusp(sign) {
			// 	// console.log(sign)
			// 	this.dataGuanzhu.some(item => {
			// 		if (item.id == sign.id) {
			// 			item.status = !sign.status;
			// 		}
			// 	});
			// },

			// 触底函数
			lower: function(e) {
				this.loadMore = true;
				// uni.showLoading({
				// 	title: '正在加载...'
				// });
				setTimeout(() => {
					if (this.dataGuanzhu.length < 10) {
						uni.hideLoading();
						this.dataGuanzhu = this.dataGuanzhu.concat(this.dataGuanzhu);
					} else {
						uni.hideLoading();
						this.loadMoreDcse = '我是有底线的！';
					}
				}, 800);
			},

			lower1: function(e) {
				this.loadMore = true;
				// uni.showLoading({
				// 	title: '正在加载...'
				// });
				setTimeout(() => {
					if (this.fabuList.length < 10) {
						uni.hideLoading();
						this.fabuList = this.fabuList.concat(this.fabuList);
					} else {
						uni.hideLoading();
						this.loadMoreDcse = '我是有底线的！';
					}
				}, 800);
			},

			lower2: function(e) {
				this.loadMore = true;
				// uni.showLoading({
				// 	title: '正在加载...'
				// });
				setTimeout(() => {
					if (this.dataList.length < 10) {
						uni.hideLoading();
						this.dataList = this.dataList.concat(this.dataList);
					} else {
						uni.hideLoading();
						this.loadMoreDcse = '我是有底线的！';
					}
				}, 800);
			},

			lower3: function(e) {
				this.loadMore = true;
				// uni.showLoading({
				// 	title: '正在加载...'
				// });
				setTimeout(() => {
					if (this.dataDaV.length < 10) {
						uni.hideLoading();
						this.dataDaV = this.dataDaV.concat(this.dataDaV);
					} else {
						uni.hideLoading();
						this.loadMoreDcse = '我是有底线的！';
					}
				}, 800);
			},

			catchTouchmove() {
				return true;
			}
		},
	};
</script>

<style lang="less" scoped>
	.header {
		background-color: #ffffff;
		// padding-top: 90upx;
		position: fixed;
		top: 0;
		left: 0;
		padding-top: 88upx;
		height: 178upx;
		z-index: 99;
	}

	.container {
		position: relative;
		height: calc(100vh - 144upx) !important;
		margin-top: 178upx;
	}

	/deep/.swiper {
		height: 100% !important;
	}

	.subnav {
		position: fixed;
		width: 750upx;
		top: 178upx;
		left: 0;
		border-bottom: 1upx solid #eaeaea;
		display: flex;
		height: 88upx;
		line-height: 88upx;
		padding: 0 150upx;
		display: flex;
		justify-content: space-around;
		background-color: #ffffff;
		z-index: 100;

		&-item {
			&-title {
				color: #333333;
				font-size: 26upx;
			}

			&-icon {
				width: 32upx;
				height: 32upx;
				margin-bottom: -5upx;
			}
		}
	}

	.active {
		color: #ff9502;
		font-weight: 500;
	}

	.loadMore {
		width: 100%;
		text-align: center;
		padding: 20upx 0;
		color: #999999;
		background-color: #FFFFFF;
	}

	.popup-list {
		position: fixed;
		top: 266upx;
		z-index: 98;

		/*#ifdef APP-PLUS*/
		/deep/.popup {
			position: fixed;
			top: 266upx;
			z-index: 98;
		}

		/*#endif*/

		/*#ifdef MP-WEIXIN*/
		/deep/.popup {
			position: fixed;
			top: 266upx;
			z-index: 98;
		}

		/*#endif*/

		.popup {
			width: 100%;
			box-sizing: border-box;
			background-color: #ffffff;

			/deep/.popup-item {
				color: #666666;
				font-weight: 400;
				font-size: 32upx;
				padding: 30upx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1upx solid #f3f3f3;

				.icons {
					width: 30upx;
					height: 30upx;
				}
			}

			.avtive {
				background-color: #fffcf1;
				.titles {
					color: #ff822c;
				}
			}
		}
	}
</style>
