<template>
	<view class="creat-hudong">
		<!-- 头部搜索 -->
		<view class="search-header">
			<view class="search">
				<view class="uni-form-item uni-column">
					<uni-icons class="search-icon" type="search" color="#cccccc" size="16"></uni-icons>
					<input class="uni-input" v-model="inputValue" confirm-type="search" placeholder="输入用户完整手机号码" />
				</view>
			</view>
			<text class="cancel" @tap="cancel">取消</text>
		</view>

		<!-- 列表 -->
		<view class="container">
			<!-- 创建活动 队员列表 -->
			<view class="">
				<!-- 我自己 -->
				<view class="list-title">我自己</view>
				<view class="zhuli">
					<view class="zhuli-content" @tap="pageTo('/pages/assistant/assistantPage/assistantCreateHudonglist2')">
						<view class="content-left">
							<image src="/static/hudong/c2.jpg" mode=""></image>
							<view class="zhuli-info">
								<view class="name">
									周欣欣
								</view>
								<view class="ids">
									ID 169441
								</view>
							</view>
						</view>
						<view class="content-right">深圳天长地久优居</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue';

	export default {
		name: "assistantCreateHudonglist",
		components: {
			uniIcons,
		},
		props: {

		},
		data() {
			return {
				inputValue:"",
			}
		},
		onShow() {},
		onLoad() {

		},
		updated() {},
		methods: {
			pageTo(url) {
				uni.navigateTo({
					url: url
				})
			},
			cancel(){
				this.inputValue = '',
				uni.navigateBack({})
			}
		},
		computed: {

		}
	};
</script>

<style lang="less" scoped>
	.creat-hudong {
		font-family: PingFangSC-regular;
		.search-header {
			position: sticky;
			top: 0;
			padding: 88upx 32upx 0 20upx;
			background-color: rgba(255, 255, 255, 1);
			display: flex;
			justify-content: space-between;
			align-items: center;
			.search {
				flex: 1;
				height: 90upx;

				.uni-form-item {
					height: 72upx;
					background-color: #EAEAEA;
					border-radius: 72upx;
					padding: 0;
					display: flex;
					align-items: center;
					flex-flow: row;
					padding: 0 40upx;

					.search-icon {
						margin-right: 8upx;
					}

					.uni-input {
						flex: 1;
					}
				}
			}

			.cancel {
				width: 64upx;
				color: rgba(0, 122, 255, 1);
				font-size: 32upx;
				margin-left: 24upx;
				position: relative;
				top: -10upx;
			}
		}

		// 我自己
		.list-title {
			height: 60upx;
			line-height: 60upx;
			color: rgba(102, 102, 102, 1);
			font-size: 28upx;
			background-color: #F3F3F3;
			padding: 0 20upx;
		}

		.zhuli {
			background-color: #FFFFFF;

			.zhuli-content {
				padding: 0 20upx;
				height: 128upx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.content-left {
					display: flex;

					image {
						height: 80upx;
						width: 80upx;
						border-radius: 8upx;
						background-color: #EEEEEE;
					}

					.zhuli-info {
						margin-left: 20upx;

						.name {
							line-height: 1;
							margin-top: 6upx;
							color: rgba(51, 51, 51, 1);
							font-size: 32upx;
							font-weight: bold;
						}

						.ids {
							line-height: 1;
							margin-top: 16upx;
							color: rgba(235, 115, 127, 1);
							font-size: 24upx;
						}
					}
				}

				.content-right {
					color: rgba(102, 102, 102, 1);
					font-size: 24upx;
				}
			}
		}

	}
</style>
