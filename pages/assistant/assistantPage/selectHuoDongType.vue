<template>
	<view class="select">
		<!-- 头部导航 -->
		<view class="header" :style="[{paddingTop: hasNotchInScreen ? '88upx': '44upx'}]">
			<view class="header-content">
				<uni-icons class="back-icons" @tap="goBack" type="arrowleft" color="#565656" size="22"></uni-icons>
				<view class="header-title">选择活动类型</view>
			</view>
		</view>

		<!-- 菜单 -->
		<view class="container">

			<mineFindHeader :tabList="tabList" :activeTab="activeTab" :seleteHeight="true" @onClickTab="onClickTab"></mineFindHeader>
			
			<view class="swiper" v-show="activeTab == 0">
				<view style="height: 100%;">
					<scroll-view style="height:100%;">
						<view class="list">
							<view class="list-item" v-for="(item,index) in listItem" :key="index" @tap="addClick(item)">
								<view class="pos-status">
									<image class="imgs" :src="item.img_url" mode=""></image>
									<view class="stutas" v-if="item.status == 1">
										<image class="status-img" :src="item.status_add" mode=""></image>
									</view>
								</view>
								<text class="txt">{{item.text}}</text>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>

			<view class="swiper" v-show="activeTab == 1">
				<view style="height: 100%;">
					<scroll-view style="height:100%;">
						<view class="list">
							<view class="list-item" v-for="(item,index) in listItem2" :key="index" @tap="addClick(item)">
								<view class="pos-status">
									<image class="imgs" :src="item.img_url" mode=""></image>
									<view class="stutas" v-if="item.status == 1">
										<image class="status-img" :src="item.status_add" mode=""></image>
									</view>
								</view>
								<text class="txt">{{item.text}}</text>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>

			<view class="swiper" v-show="activeTab == 2">
				<view style="height: 100%;">
					<scroll-view style="height:100%;">
						<view class="list">
							<view class="list-item" v-for="(item,index) in listItem" :key="index" @tap="addClick(item)">
								<view class="pos-status">
									<image class="imgs" :src="item.img_url" mode=""></image>
									<view class="stutas" v-if="item.status == 1">
										<image class="status-img" :src="item.status_add" mode=""></image>
									</view>
								</view>
								<text class="txt">{{item.text}}</text>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>

			<view class="swiper" v-show="activeTab == 3">
				<view style="height: 100%;">
					<scroll-view style="height:100%;">
						<view class="list">
							<view class="list-item" v-for="(item,index) in listItem2" :key="index" @tap="addClick(item)">
								<view class="pos-status">
									<image class="imgs" :src="item.img_url" mode=""></image>
									<view class="stutas" v-if="item.status == 1">
										<image class="status-img" :src="item.status_add" mode=""></image>
									</view>
								</view>
								<text class="txt">{{item.text}}</text>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>

			<view class="swiper" v-show="activeTab == 4">
				<view style="height: 100%;">
					<scroll-view style="height:100%;">
						<view class="list">
							<view class="list-item" v-for="(item,index) in listItem" :key="index" @tap="addClick(item)">
								<view class="pos-status">
									<image class="imgs" :src="item.img_url" mode=""></image>
									<view class="stutas" v-if="item.status == 1">
										<image class="status-img" :src="item.status_add" mode=""></image>
									</view>
								</view>
								<text class="txt">{{item.text}}</text>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>

			<view class="swiper" v-show="activeTab == 5">
				<view style="height: 100%;">
					<scroll-view style="height:100%;">
						<view class="list">
							<view class="list-item" v-for="(item,index) in listItem" :key="index" @tap="addClick(item)">
								<view class="pos-status">
									<image class="imgs" :src="item.img_url" mode=""></image>
									<view class="stutas" v-if="item.status == 1">
										<image class="status-img" :src="item.status_add" mode=""></image>
									</view>
								</view>
								<text class="txt">{{item.text}}</text>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>

			<view class="swiper" v-show="activeTab == 6">
				<view style="height: 100%;">
					<scroll-view style="height:100%;">
						<view class="list">
							<view class="list-item" v-for="(item,index) in listItem2" :key="index" @tap="addClick(item)">
								<view class="pos-status">
									<image class="imgs" :src="item.img_url" mode=""></image>
									<view class="stutas" v-if="item.status == 1">
										<image class="status-img" :src="item.status_add" mode=""></image>
									</view>
								</view>
								<text class="txt">{{item.text}}</text>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import mineFindHeader from '@/components/selectActivityTypeHeader';
	export default {

		components: {
			mineFindHeader,
		},
		data() {
			return {
				activeTab: 0,
				tabList: [{
						id: 1,
						title: '全部'
					},
					{
						id: 2,
						title: '棋牌'
					},
					{
						id: 3,
						title: '休闲'
					},
					{
						id: 4,
						title: '体育'
					},
					{
						id: 5,
						title: '文艺'
					},
					{
						id: 6,
						title: '舞蹈'
					},
					{
						id: 7,
						title: '体育'
					},
				],
				listItem: [{
						id: 1,
						img_url: "/static/youju/f1.jpg",
						text: "中国象棋",
						status: "1",
						status_add: "/static/youju/add_white.svg",
						status_tick: "/static/youju/choose.svg"
					},
					{
						id: 2,
						img_url: "/static/youju/f2.jpg",
						text: "中国围棋",
						status: "1",
						status_add: "/static/youju/add_white.svg",
						status_tick: "/static/youju/choose.svg"
					},
					{
						id: 3,
						img_url: "/static/youju/f3.jpg",
						text: "娱乐活动",
						status: "1",
						status_add: "/static/youju/add_white.svg",
						status_tick: "/static/youju/choose.svg"
					},
					{
						id: 4,
						img_url: "/static/youju/f4.jpg",
						text: "聚会",
						status: "1",
						status_add: "/static/youju/add_white.svg",
						status_tick: "/static/youju/choose.svg"
					},
					{
						id: 5,
						img_url: "/static/youju/f5.jpg",
						text: "小孩娱乐场",
						status: "1",
						status_add: "/static/youju/add_white.svg",
						status_tick: "/static/youju/choose.svg"
					},
					{
						id: 6,
						img_url: "/static/youju/f6.jpg",
						text: "广场舞",
						status: "1",
						status_add: "/static/youju/add_white.svg",
						status_tick: "/static/youju/choose.svg"
					},
				],

				listItem2: [{
						id: 1,
						img_url: "/static/youju/f1.jpg",
						text: "中国象棋",
						status: "1",
						status_add: "/static/youju/add_white.svg",
						status_tick: "/static/youju/choose.svg"
					},
					{
						id: 2,
						img_url: "/static/youju/f2.jpg",
						text: "中国围棋",
						status: "1",
						status_add: "/static/youju/add_white.svg",
						status_tick: "/static/youju/choose.svg"
					},
				],
			}
		},

		methods: {
			goBack() {
				uni.navigateBack({})
			},

			onClickTab(index) {
				this.activeTab = index;
			},

			addClick(item){
				let ItemArr = item
				uni.$emit("HuoDongType",ItemArr)
				uni.navigateBack({})
			}
		},
	}
</script>


<style scoped lang="scss">
	.select {
		height: 100vh;
		background-color: #FFFFFF;
	}

	.header {
		position: sticky;
		top: 0;
		z-index: 99;
		background-color: #FFFFFF;
		padding: 44px 20px 0 20px;

		.header-content {
			height: 90upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;

			.header-title {
				text-align: center;
				color: #000000;
				font-size: 36upx;
				font-weight: bold;
				flex: 1;
			}

			.back-icons {
				position: absolute;
				left: -8upx;
			}
		}
	}

	.subscribe {
		margin-top: 28upx;

		.sub-title {
			display: flex;
			align-items: center;
			flex-flow: row;
			padding: 0 20upx;

			.dy-icon {
				height: 24upx;
				width: 24upx;
			}

			.dy-titke {
				color: rgba(51, 51, 51, 1);
				font-size: 28upx;
				font-weight: bold;
				margin-left: 8upx;
			}

			.dy-dcse {
				color: rgba(102, 102, 102, 1);
				font-size: 24upx;
				margin-left: 16upx;
			}

		}
	}

	.sub-list {
		padding: 0 20upx;
		margin-top: 22upx;
		border-bottom: 10upx solid #F7F7F7;
		padding-bottom: 16upx;

		.list-item {
			display: inline-block;
			margin-right: 30upx;
			margin-bottom: 20upx;
			padding: 12upx 30upx;
			text-align: center;
			border-radius: 30upx;
			position: relative;
			border: 1upx solid #f2f2f2;

			.txts {
				color: rgba(16, 16, 16, 1);
				font-size: 26upx;
			}

			.close {
				position: absolute;
				top: 0;
				right: 0;
				height: 28upx;
				width: 28upx;
				line-height: 24upx;
				text-align: center;
				font-size: 22upx;
				color: #FeFeFe;
				background-color: #aaaaaa;
				border-radius: 50%;
			}
		}
	}

	.swiper {
		margin-top: 40upx;

		.list {
			margin-top: 40upx;
			padding: 0 20upx;
			margin: 0 -20upx;

			.list-item {
				display: inline-block;
				flex: 1;
				width: 25%;
				box-sizing: border-box;
				padding: 0 20upx;
				text-align: center;
				margin-bottom: 20upx;

				.pos-status {
					position: relative;

					.imgs {
						height: 140upx;
						width: 140upx;
						border-radius: 10upx;
					}

					.stutas {
						height: 70upx;
						width: 70upx;
						border-radius: 50%;
						background-color: rgba(0, 0, 0, .6);
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);

						.status-img {
							margin: 0 auto;
							margin-top: 15upx;
							height: 40upx;
							width: 40upx;
							border-radius: 50%;
						}
					}
				}

				.txt {
					margin-top: 20upx;
					font-size: 28upx;
					color: #666666;
				}
			}
		}
	}
</style>

