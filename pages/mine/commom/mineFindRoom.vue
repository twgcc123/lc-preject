<template>
	<view class="youju">
		<!-- 房源列表 -->
		<view class="room-list">
			<view class="room-list-item" v-for="(item, index) in roomList" :key="index" @click="goTo('/pages/found/youju/room')">
				<uni-swiper-dot :info="item.image" :current="current" field="content" :mode="mode" :dotsStyles="dotsStyles">
					<swiper class="swiper-box" @change="change" :autoplay="false">
						<swiper-item v-for="(img, i) in item.image" :key="i"><image class="swiper-item" :src="img"></image></swiper-item>
					</swiper>
				</uni-swiper-dot>

				<view class="room-list-item-bottom">
					<view class="room-list-item-name">{{ item.name }}</view>
					<!--{{ item.name }}-->
					<view class="room-list-item-desc">{{ item.desc }}</view>
					<!--{{ item.name }}-->
					<view style="padding: 0 32upx;">
						<view
							class="room-list-item-tip"
							v-for="(item, index) in item.tip"
							:key="index"
							:style="[{ 'background-color': index == 0 && 1 ? '#F9F7F4' : '#f8f8f8' }, { color: index == 0 && 1 ? '#958269' : '#898989' }]"
						>
							{{ item }}
						</view>
					</view>
					<!--{{ item.tip }}-->
					<!--`${item.appraise}`-->
					<view class="list-item-rote" style="padding: 0 32upx;">
						<uni-rate class="item-rotes" size="12" :value="`${item.rote}`" disabled></uni-rate>
						<text class="list-item-right-rote" v-if="item.rote == 1">一星评价</text>
						<text class="list-item-right-rote" v-if="item.rote == 2">二星评价</text>
						<text class="list-item-right-rote" v-if="item.rote == 3">三星评价</text>
						<text class="list-item-right-rote" v-if="item.rote == 4">四星评价</text>
						<text class="list-item-right-rote" v-if="item.rote == 5">五星评价</text>
					</view>

					<view class="room-list-item-price">
						<text style="font-weight: bold;">¥ {{ item.price }}</text>
						<text class="room-list-item-price-text">/晚</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniRate from '@/components/uni-rate/uni-rate.vue';
import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue';
import indexHeader from '@/components/index-header.vue';
import Youjudata from '@/utils/youjudata.js';
export default {
	components: {
		uniRate,
		uniSwiperDot,
		indexHeader
	},
	data() {
		return {
			// sysheight: 0,
			// height: '',
			current: 0,
			mode: 'dot',
			dotsStyles: {
				width: '7',
				height: '7',
				color: '#FFFFFF',
				backgroundColor: 'rgba(250,250,250,.66)',
				border: '1px rgba(250, 250, 250, 0) solid',
				selectedBackgroundColor: '#FFFFFF',
				selectedBorder: '1px rgba(250, 250, 250, 0) solid'
			},
			isIphoneX: false,
			// page:1,
			// limit:10,
			roomList: [
				{
					id: '01',
					image: ['../../../static/youju/s1-1.jpg', '../../../static/youju/s1-2.jpg', '../../../static/youju/f3.jpg'],
					name: '天字一号房 1室1卫1床',
					desc: '深圳万象城周边欢乐园/十分干净',
					tip: ['冬暖夏凉', '四季如春', '近地铁站', '近巴士站', '做饭'],
					rote: '4',
					price: '366'
				},
				{
					id: '02',
					image: ['../../../static/youju/s1-4.jpg', '../../../static/youju/s1-3.jpg', '../../../static/youju/f5.jpg'],
					name: '九号公馆 3室1卫1床',
					desc: '深圳天地神圣周边意境好/十分安静',
					tip: ['近地铁站', '临海地段', '四季如春'],
					rote: '5',
					price: '166'
				},
				{
					id: '03',
					image: ['../../../static/youju/s1-1.jpg', '../../../static/youju/s1-4.jpg', '../../../static/youju/fangjian.jpg'],
					name: '龙岗花田大宅 3室1卫1床',
					desc: '深圳万象城周边欢乐园/十分干净',
					tip: ['冬暖夏凉', '四季如春', '近地铁站', '近巴士站', '做饭'],
					rote: '4',
					price: '499'
				},
				{
					id: '04',
					image: ['../../../static/youju/s1-2.jpg', '../../../static/youju/fangjian.jpg', '../../../static/youju/f6.jpg'],
					name: '南山欢乐海岸 3室2卫5床',
					desc: '深圳天地神圣周边意境好/十分安静',
					tip: ['冬暖夏凉', '四季如春', '近地铁站'],
					rote: '5',
					price: '199'
				}
			]
		};
	},
	created() {
		// this.sysheight = uni.getSystemInfoSync().windowHeight;
		// this.height = `${this.sysheight}px`;
		// console.log('this.height:', this.height);
		// if (uni.getSystemInfoSync().model == 'iPhoneX' || uni.getSystemInfoSync().model == 'iPhoneXR' || uni.getSystemInfoSync().model == 'iPhoneXS') {
		// 	this.isIphoneX = true;
		// }
	},

	onLoad: function(option) {
		let did = (option.id = '' ? '1' : option.id);
		// 头部调用
		// this.getRoomHeader(did);
		// 房间列表调用
		// this.getRoomList(page,limit)
		this.getRoomList();

		// 获取优居社区信息
		this.loadDataRoom(option.id);
		// console.log(Youjudata);
		this.loadDataHouse(option.id);
	},
	onShow() {
		uni.hideToast();
		uni.hideLoading();
	},
	// onReachBottom() {
	// 	this.page++;
	// 	this.getRoomList();
	// },

	methods: {
		// 获取youjudata  start
		// loadDataRoom(id) {
		// 	Youjudata.roomList.forEach(item => {
		// 		if (id == item.id) {
		// 			this.roomList = this.roomList.concat(item.room);
		// 			console.log(this.roomList);
		// 		}
		// 	});
		// },

		change(e) {
			this.current = e.detail.current;
		},
		goTo(url) {
			console.log('goTourl:', url);
			uni.navigateTo({
				url: url
			});
		},
		back() {
			uni.navigateBack({});
		}

		// 获取优居房间列表
		// async getRoomList() {
		// 	let res = await this.$http.request({
		// 		method: 'get',
		// 		url: `/api/house/getList?page=1&=10`
		// 		// data:{
		// 		// 	page:1,
		// 		// 	limit:10,
		// 		// },
		// 	});
		// 	console.log(res);
		// 	if (res.errno == 0) {
		// 		let data = res.data;
		// 		let count = data.count;
		// 		let list = data.list;
		// 		// if (this.list.length < data.list.length) {
		// 		// 	setTimeout(() => {
		// 		// 		this.end = this.page * 10;
		// 		// 		this.list = this.list.concat(data.list.slice(this.start, this.end));
		// 		// 		this.start = this.end;
		// 		// 		setTimeout(() => {
		// 		// 			this.loading = false;
		// 		// 		}, 120);
		// 		// 	}, 1000)
		// 		// }
		// 		// this.roomList = list
		// 	}
		// }
	}
};
</script>

<style lang="less" scoped>
.youju {
	width: 100%;
	background-color: #FFFFFF;
	.room-list {
		background-color: #FAFAFA;
		padding: 40upx;
		width: 100%;
		.room-list-item {
			background-color: #ffffff;
			margin-bottom: 100upx;
			/deep/.swiper-box {
				height: 446upx;
			}
			.swiper-item {
				width: 100% !important;
			}
			// .room-list{
			// 	height: 446upx;
			// }
			.room-list-item-bottom {
				padding-top: 32upx;
			}
			.room-list-item-name {
				color: #393e4f;
				font-size: 24upx;
				font-weight: bolder;
				padding: 0 32upx;
				line-height: 34upx;
			}
			.room-list-item-desc {
				color: #494a41;
				font-size: 32upx;
				font-weight: bolder;
				margin-top: 8upx;
				margin-bottom: 12upx;
				padding: 0 32upx;
				line-height: 44upx;
			}
			.room-list-item-tip {
				height: 48upx;
				width: 102upx;
				display: inline-block;
				margin-right: 12upx;
				border-radius: 12upx;
				color: #898989;
				font-size: 24upx;
				line-height: 48upx;
				text-align: center;
				margin-bottom: 12upx;
				background-color: #f8f8f8;
			}
			.room-list-item-price {
				color: #363636;
				font-size: 32upx;
				border-top: 1upx solid #e5e5e5;
				margin-top: 12upx;
				height: 80upx;
				padding: 0 32upx;
				box-sizing: border-box;
				line-height: 80upx;
				&-text {
					font-size: 24upx;
				}
			}
		}
	}
}
.list-item-rote {
	display: flex;
	align-items: center;
	flex-direction: row;
	.item-rotes {
		height: 2upx;
	}
	.list-item-right-rote {
		margin-left: 14upx;
		color: rgba(85, 85, 85, 1);
		font-size: 24upx;
	}
}

.overall-icon {
	height: 28upx;
	width: 28upx;
	margin-bottom: -8upx;
	margin-left: -6upx;
}

/*iphone 6/7/8 */
@media screen and (min-width: 375px) and (max-width: 414px) {
	.youju-house {
		top: 270rpx;
	}
}
</style>
