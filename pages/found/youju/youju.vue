<template>
	<view class="youju">
		<!-- <index-header bgColor="bg-index-header" index="2" fixed="false"/> -->
		<view class="you-header" :style="[{paddingTop: hasNotchInScreen ? '88upx': '44upx'}]">
			<view class="header-content">
				<view class="back-icon" @tap="back">
					<uni-icons color="#fcfdfd" type="arrowleft" size="22"></uni-icons>
				</view>
				<view class="share-icon" style="margin-right: 4upx;">
					<uni-icons color="#fcfdfd" type="redo-filled" size="22"></uni-icons>
				</view>
			</view>
		</view>
		<!-- <view class="youju-content"> -->
		<image class="youju-bgimg" :src="house[0].image"></image>
		<image class="youju-mask-bottom" src="../../../static/youju/mask-bottom.png"></image>
		<image class="youju-mask-top" src="../../../static/youju/mask-top.png"></image>
		<view class="youju-house">
			<view class="youju-house-name">{{ house[0].name }}</view>
			<view class="youju-house-desc">{{ house[0].desc }}</view>
			<view class="youju-house-rote">
				<view class="youju-house-rote-img">
					<view class="tenct">
						<view class="txt">当季</view>
						<view class="txt">指标</view>
					</view>
				</view>
				<view class="tenct-right">
					
					<view class="youju-house-rote-environment">
						<text>居住环境</text>
						<view class="youju-house-rote-environment-num">{{ house[0].environment }}</view>
					</view>
					
					<view class="youju-house-rote-modernize">
						<text>现代化</text>
						<view class="youju-house-rote-modernize-num">{{ house[0].modernize }}</view>
					</view>
					
					<view class="youju-house-rote-agree">
						<text>舒心度</text>
						<view class="youju-house-rote-agree-num">{{ house[0].agree }}</view>
					</view>
					
					<view class="youju-house-rote-overall">
						<view class="rote_score">
							<text class="rote_score_txt">综合评价</text>
							<view class="rote_score_add"><uni-icons color="#ddd" type="arrowright" size="12"></uni-icons></view>
						</view>
						<view class="youju-house-rote-overall-num">
							{{ house[0].overall }}
							<text class="rote-add" v-if="house[0].overall">+</text>
						</view>
					</view>
					
				</view>
			</view>
		</view>
		<!-- </view> -->

		<!-- 房源列表 -->
		<view class="room-list" :style="isIphoneX ? 'top:' + '688upx' : '668upx'">
			<view class="room-list-title">选择合心意的房间</view>
			<view class="room-list-item" v-for="(item, index) in roomList" :key="index" @click="goTo('/pages/found/youju/room')">
				<uni-swiper-dot 
				:info="item.image" 
				:current="current" 
				field="content" 
				:mode="mode"
				:dotsStyles="dotsStyles"
				>
					<swiper 
					class="swiper-box" 
					@change="change" 
					:autoplay="false"
					>
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
			sysheight: 0,
			height: '',
			current: 0,
			mode: 'dot',
			dotsStyles:{
				width:'7',
				height:'7',
				color:'#FFFFFF',
				backgroundColor:"rgba(250,250,250,.66)",
				border:'1px rgba(250, 250, 250, 0) solid',
				selectedBackgroundColor:'#FFFFFF',
				selectedBorder:'1px rgba(250, 250, 250, 0) solid',
			},
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
		if (uni.getSystemInfoSync().model == 'iPhoneX' || uni.getSystemInfoSync().model == 'iPhoneXR' || uni.getSystemInfoSync().model == 'iPhoneXS') {
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
		goTo(url) {
			console.log('goTourl:',url)
			uni.navigateTo({
				url: url
			});
		},
		back(){
			uni.navigateBack({})
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
	.you-header{
		position: sticky;
		top: 0;
		z-index: 999;
		padding:0 34upx ;
		height: 128upx;
		padding-top: 44upx;
		box-sizing: border-box;
		.header-content{
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 90upx;
		}
		
	}
	.youju-bgimg {
		position: absolute;
		top: 0;
		// height: 382px;
		height: 764upx;
		width: 100%;
		overflow: hidden;
	}
	.youju-mask-top {
		width: 750upx;
		position: absolute;
		top: 0;
		left: 0;
		height: 764upx;
		// border: 1px solid red;
	}
	.youju-mask-bottom {
		width: 750upx;
		position: relative;
		top: -128upx;
		left: 0;
		height: 764upx;
		// border: 1px solid blue;
	}
	.youju-house {
		box-sizing: border-box;
		position: absolute;
		top: 360upx !important;
		.youju-house-name {
			font-size: 48upx;
			color: #ffffff;
			margin: 0 32upx;
			font-weight: bolder;
			line-height: 66upx;
		}
		.youju-house-desc {
			color: #ffffff !important;
			font-size: 28upx;
			margin: 18upx 40upx 30upx 32upx;
			line-height:40upx;
			font-size: 28upx;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			font-family: PingFangSC-regular !important;
			-webkit-font-smoothing: antialiased;
			font-weight: normal;
		}
		.youju-house-desc::after {
			color: #ffffff;
		}
		.youju-house-rote {
			display: flex;
			// justify-content: space-around;
			color: #f7f7f7;
			font-size: 24upx;
			text-align: center;
			margin: 0 0 0 32upx;
			text{
				line-height: 40upx;
			}
			.youju-house-rote-img {
				width: 96upx;
				height: 96upx;
				border-radius: 50%;
				border: 2upx solid #f3d0aa;
				text-align: center;
				font-size: 30upx;
				.tenct{
					position: relative;
					top: 50%;
					left: 50%;
					transform: translate(-50%,-50%);
					.txt {
						line-height: 1;
						letter-spacing: 1.1px;
						color: #f3d0aa;
					}
				}

			}
			.tenct-right{
				flex: 1;
				display: flex;
				justify-content: space-around;
				.youju-house-rote-environment,
				.youju-house-rote-modernize,
				.youju-house-rote-agree,
				.youju-house-rote-overall
				{
					text-align: right;
					// width: 25%;
					
					box-sizing: border-box;
				}
				.rote_score{
					height: 20px;
					line-height: 20px;
					.rote_score_txt,
					.rote_score_add
					{
						display: inline-block;
						position: relative;
						right: -6upx;
					}
				}
			}
			.youju-house-rote-overall-num,
			.youju-house-rote-agree-num,
			.youju-house-rote-modernize-num,
			.youju-house-rote-environment-num {
				height: 56upx;
				line-height: 56upx;
				text-align: right;
				font-size: 40upx;
				.rote-add {
					font-size: 24upx;
					font-weight: normal;
					margin-left: 4upx;
					color: #FFFFFF;
				}
			}
		}
	}
	.room-list {
		background-color: #f3f3f3;
		border-radius: 20upx;
		position: absolute;
		top: 685upx;
		padding: 40upx;
		width: 100%;
		.room-list-item {
			background-color: #ffffff;
			margin-bottom: 100upx;
			/deep/.swiper-box{
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
.room-list-title {
	margin-top: -40upx;
	height: 88upx;
	line-height: 88upx;
	color: #666666;
	font-size: 32upx;
	font-weight: bolder;
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
