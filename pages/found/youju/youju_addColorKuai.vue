<template>
	<view class="youju">
		<index-header bgColor="bg-index-header" index="2" fixed="false" />
		<!-- <view class="youju-content"> -->
			<image class="youju-bgimg" :src="house[0].image"></image>
			<image class="youju-mask-bottom" src="../../../static/youju/mask-bottom.png"></image>
			<image class="youju-mask-top" src="../../../static/youju/mask-top.png"></image>
			<view class="youju-house">
				<view class="youju-house-name">{{ house[0].name }}</view>
				<view class="youju-house-desc">{{ house[0].desc }}</view>
				<view class="youju-house-rote">
					<view class="youju-house-rote-img"><image :src="house[0].avaders"></image></view>
					<view class="youju-house-rote-environment">
						<text class="tis">居住环境</text>
						<view class="youju-house-rote-environment-num">{{ house[0].environment }}</view>
					</view>
					<view class="youju-house-rote-modernize">
						<text class="tis">现代化</text>
						<view class="youju-house-rote-modernize-num">{{ house[0].modernize }}</view>
					</view>
					<view class="youju-house-rote-agree">
						<text class="tis">舒心度</text>
						<view class="youju-house-rote-agree-num">{{ house[0].agree }}</view>
					</view>
					<view class="youju-house-rote-overall">
						<view style="display: flex;flex-direction: row;align-items: center;height: 32upx;line-height: 32upx;">
							<text class="tis">综合评价</text>
							<!-- <image class="overall-icon" src="../../../static/right_arrow.png" mode=""></image> -->
							<view class=""><uni-icons color="#ddd" type="arrowright" size="12"></uni-icons></view>
						</view>
						<view class="youju-house-rote-overall-num">
							{{ house[0].overall }}
							<text class="rote-add" v-if="house[0].overall !== ''">+</text>
						</view>
					</view>
				</view>
			</view>
		<!-- </view> -->

		<!-- 房源列表 -->
		<view class="room-list" :style="isIphoneX ? 'top:'+ '344px':'334px'">
			<view class="room-list-title">选择合心意的房间</view>
			<view class="room-list-item" v-for="(item, index) in roomList" :key="index" @click="pageTo('/pages/found/youju/room')">
				<uni-swiper-dot :info="item.image" :current="current" field="content" :mode="mode">
					<swiper class="swiper-box" @change="change" :autoplay="false">
						<swiper-item v-for="(img, i) in item.image" :key="i"><image class="swiper-item" :src="img"></image></swiper-item>
					</swiper>
				</uni-swiper-dot>
				<view class="room-list-item-bottom">
					<view class="room-list-item-name">{{ item.name }}</view>
					<!--{{ item.name }}-->
					<view class="room-list-item-desc">{{ item.desc }}</view>
					<!--{{ item.name }}-->
					<view class="" style="background-color: #1CBBB4;">
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
					<view class="" style="background-color: #5E00FF;margin-top: 6upx;">
						<view class="list-item-rote">
							<uni-rate class="item-rotes" size="12" :value="`${item.rote}`" disabled></uni-rate>
							<text class="list-item-right-rote" v-if="item.rote == 1">一星评价</text>
							<text class="list-item-right-rote" v-if="item.rote == 2">二星评价</text>
							<text class="list-item-right-rote" v-if="item.rote == 3">三星评价</text>
							<text class="list-item-right-rote" v-if="item.rote == 4">四星评价</text>
							<text class="list-item-right-rote" v-if="item.rote == 5">五星评价</text>
						</view>
					</view>

					<view class="room-list-item-price">
						<text style="font-weight: bold;">¥ {{ item.price }}</text>
						<text class="room-list-item-price-text"> /晚</text>
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
			sysheight: 0,
			height: '',
			current: 0,
			mode: 'dot',
			isIphoneX: false,
			// page:1,
			// limit:10,
			roomList: [
				// {
				// 	id: 1,
				// 	image: ['../../../static/youju/fangjian.jpg', '../../../static/youju/fangjian.jpg', '../../../static/youju/fangjian.jpg'],
				// 	name: '天字一号房 1室1卫1床',
				// 	desc: '深圳万象城周边欢乐园/十分干净',
				// 	tip: '冬暖夏凉 四季如春 近地铁站',
				// 	rote: 4,
				// 	price: 222
				// },
				// {
				// 	id: 2,
				// 	image: ['../../../static/youju/fangjian.jpg', '../../../static/youju/fangjian.jpg', '../../../static/youju/fangjian.jpg'],
				// 	name: '天字一号房 1室1卫1床',
				// 	desc: '深圳万象城周边欢乐园/十分干净',
				// 	tip: '冬暖夏凉 四季如春 近地铁站',
				// 	rote: 4,
				// 	price: 222
				// },
				// {
				// 	id: 3,
				// 	image: ['../../../static/youju/fangjian.jpg', '../../../static/youju/fangjian.jpg', '../../../static/youju/fangjian.jpg'],
				// 	name: '天字一号房 1室1卫1床',
				// 	desc: '深圳万象城周边欢乐园/十分干净',
				// 	tip: '冬暖夏凉 四季如春 近地铁站',
				// 	rote: 4,
				// 	price: 222
				// }
			],
			house: {
				// name: '深圳龙岗优居',
				// desc: '远离一线城市的喧嚣，是个适合享受新鲜空气，适合小住几天，适合度假旅游的好去处',
				// environment: '9.0',
				// modernize: '9.0',
				// agree: '8.0',
				// overall: 'A+'
			}
		};
	},
	created() {
		this.sysheight = uni.getSystemInfoSync().windowHeight;
		this.height = `${this.sysheight}px`;
		console.log('this.height:', this.height);
		if(uni.getSystemInfoSync().model == 'iPhoneX' || uni.getSystemInfoSync().model == 'iPhoneXR' || uni.getSystemInfoSync().model == 'iPhoneXS'){
			this.isIphoneX = true;
		}
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

	// onReachBottom() {
	// 	this.page++;
	// 	this.getRoomList();
	// },

	methods: {
		// 获取youjudata  start
		loadDataRoom(id) {
			Youjudata.roomList.forEach(item => {
				if (id == item.id) {
					this.roomList = this.roomList.concat(item.room);
					console.log(this.roomList);
				}
			});
		},

		// 获取youjudata house数据 start
		loadDataHouse(id) {
			Youjudata.houseList.forEach(item => {
				if (id == item.id) {
					console.log(item.house);
					this.house = Object.assign(this.house, item.house);
					console.log(this.house);
				}
			});
		},

		change(e) {
			this.current = e.detail.current;
		},
		pageTo(url) {
			uni.navigateTo({
				url: url
			});
		},

		// 获取优居头部资源
		async getRoomHeader(did) {
			let res = await this.$http.request({
				method: 'get',
				url: `/api/Community/details?id=`,
				data: {
					id: did
				}
			});
			console.log(res);
			if (res.errno == 0) {
				console.log(res);
				let res = res.data;
				/**
				 * -- 头部数据
				 * **/
				// let house =  {
				// 	    id: res.id,
				// 	    name:res.name,
				// 		image:res.image,
				// 	    desc: res.brief,
				// 	    environment:res.season_tag.living_environment,
				// 	    modernize: res.season_tag.modernization,
				// 	    agree:res.season_tag.comfort,
				// 	    overall:res.season_tag.composite_evaluation,
				// 	}
				// this.house = house
			} 
			// else {
			// 	uni.showToast({
			// 		title: 'res.errstr',
			// 		duration: 5000,
			// 		icon: 'loading'
			// 	});
			// }
		},

		// 获取优居房间列表
		async getRoomList() {
			let res = await this.$http.request({
				method: 'get',
				url: `/api/house/getList?page=1&=10`
				// data:{
				// 	page:1,
				// 	limit:10,
				// },
			});
			console.log(res);
			if (res.errno == 0) {
				let data = res.data;
				let count = data.count;
				let list = data.list;
				// if (this.list.length < data.list.length) {
				// 	setTimeout(() => {
				// 		this.end = this.page * 10;
				// 		this.list = this.list.concat(data.list.slice(this.start, this.end));
				// 		this.start = this.end;
				// 		setTimeout(() => {
				// 			this.loading = false;
				// 		}, 120);
				// 	}, 1000)
				// }
				// this.roomList = list
			}
		}
	}
};
</script>

<style lang="less" scoped>
.youju {
	width: 100%;
	height: 100vh;
	// background-color: #333333;
	&-bgimg {
		position: absolute;
		top: 0;
		height: 382px;
		width: 100%;
		max-height: 1200upx;
		overflow: hidden;
	}
	&-mask-top{
		width: 750upx;
		position: absolute;
		top: 0;
		left: 0;
		height: 382px;
		// border: 1px solid red;
	}
	&-mask-bottom{
		width: 750upx;
		position: relative;
		top: -64px;
		left: 0;
		height: 382px;
		// border: 1px solid blue;
	}
	&-house {
		box-sizing: border-box;
		position: absolute;
		top: 180px !important;
		padding-bottom: 50upx;
		// background: -webkit-gradient(linear, 0 0, 0 100%, from(#000), to(rgba(0, 0, 0, 0)));
		// background: -moz-linear-gradient(top, rgba(255, 255, 255, 0), #000);
		// background: -o-linear-gradient(top, rgba(255, 255, 255, 0), #000);
		// background: linear-gradient(top, rgba(255, 255, 255, 0), #000);
		// filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#00ffffff,endColorstr=#000000,GradientType=0);
		&-name {
			font-size: 24px;
			color: #FFFFFF;
			margin: 0 16px;
			font-weight: bolder;
			background-color: #007AFF;
		}
		&-desc {
			color: #ffffff !important;
			font-size: 28upx;
			margin: 10px 20px 10px 16px;
			height: 80upx;
			font-size: 28upx;
			overflow : hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			background-color: #1CBBB4;
		}
		&-desc::after{
			color: #FFFFFF;
		}
		&-rote {
			display: flex;
			justify-content: space-around;
			color: #f7f7f7;
			font-size: 24upx;
			text-align: center;
			margin: 0 20upx;
			background-color: #4CD964;
			&-img {
				width: 96upx;
				height: 96upx;
				border-radius: 50%;
				image {
					width: 96upx;
					height: 96upx;
					border-radius: 50%;
				}
			}
			&-overall-num,
			&-agree-num,
			&-modernize-num,
			&-environment-num {
				margin-top: 4upx;
				text-align: right;
				font-size: 40upx;
				font-weight: bolder;
				.rote-add {
					font-size: 26upx;
					font-weight: normal;
					margin-left: 4upx;
				}
			}
		}
	}
	
	.room-list {
		background-color: #f3f3f3;
		border-radius: 20upx;
		position: absolute;
		top: 334px;
		padding:0 20px 20px 20px;
		width: 100%;
		background-color: #333333;
		&-item {
			background-color: #ffffff;
			margin-bottom: 100upx;
			.swiper-item {
				width: 100% !important;
			}
			&-bottom {
				padding: 32upx 32upx 16upx 32upx;
				background-color: #c00;
			}
			&-name {
				color: #393e4f;
				font-size: 24upx;
				font-weight: bolder;
				background-color: #4CD964;
			}
			&-desc {
				color: #494a41;
				font-size: 32upx;
				font-weight: bolder;
				margin-top: 8upx;
				margin-bottom: 12upx;
				background-color: #0C978D;
			}
			&-tip {
				display: inline-block;
				margin-right: 12upx;
				border-radius: 12upx;
				padding: 4upx 8upx;
				color: #898989;
				font-size: 24upx;
				text-align: center;
				border: 1px solid rgba(255, 255, 255, 0);
				margin-bottom: 12upx;
				background-color: #f8f8f8;
				background-color: #9000FF;
			}
			&-price {
				height: 80upx;
				line-height: 80upx;
				color: #363636;
				font-size: 32upx;
				border-top: 1upx solid #e5e5e5;
				margin-top: 14upx;
				// padding-top: 20upx;
				background-color: #1CBBB4;
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
		height: 1px;
	}
	.list-item-right-rote {
		font-weight: bold;
		margin-left: 14upx;
		color: rgba(85, 85, 85, 1);
		font-size: 24upx;
	}
}
.room-list-title {
	height: 88upx;
	line-height: 88upx;
	color: rgba(102, 102, 102, 1);
	font-size: 32upx;
	font-weight: bolder;
	background-color: #0C978D;
}

.overall-icon {
	height: 28upx;
	width: 28upx;
	margin-bottom: -8upx;
	margin-left: -6upx;
}
.tis{
	margin-top: 6upx;
}


/*iphone 6/7/8 */
@media screen and (min-width: 375px) and (max-width: 414px) {
	.youju-house {
		top: 270rpx;
	}
}

// /*iphone 6p/7p/8p */
// @media screen and (min-width: 413px) and (max-height: 737px) {
// 	.youju-house {
// 		margin-top: 194rpx;
// 	}
// }
// @media screen and (min-width: 414px) and (max-height: 897px) {
// 	.youju-house {
// 		margin-top: 194upx;
// 	}
// }

// /*iphone x */
// @media screen and (min-width: 375px) and (max-height: 813px) {
// 	.youju-house {
// 		margin-top: 134upx;
// 	}
// }
// @media screen and (min-width: 737px) and (max-height: 813px) {
// 	.youju-house {
// 		margin-top: 134upx;
// 	}
// }

// /*iphone xR */
// @media screen and (min-width: 414px) and (max-height: 897px) {
// 	.youju-house {
// 		margin-top: 156upx;
// 	}
// }
// @media screen and (min-height: 812px) and (max-height: 897px) {
// 	.youju-house {
// 		margin-top: 156upx;
// 	}
// }
</style>
