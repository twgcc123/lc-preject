<template>
	<view class="creat-hudong">
		<view class="hudong-header" :style="[{paddingTop: hasNotchInScreen ? '88upx': '44upx'}]">
			<view class="haed">
				<text class="cancel" @tap="cancel">取消</text>
				<text class="title">创建互动</text>
				<text class="complete">完成</text>
			</view>
		</view>
		<view class="choose" @tap="pageTo('/pages/assistant/assistantPage/assistantCreateHudonglist')">
			<view class="info">
				<view class="advad">
					<image src="/static/assistant/advad.png" ></image>
				</view>
				<text class="txt">选择一个用户开始</text>
			</view>
			<uni-icons type="arrowright" size="24" color="#aaaaaa"></uni-icons>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue';

	export default {
		components: {
			uniIcons,
		},
		props: {

		},
		data() {
			return {}
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
			cancel() {
				uni.showModal({
					content: '确定退出吗？',
					success: function(res) {
						if (res.confirm) {
							uni.navigateTo({
								url:"/pages/assistant/assistant"
							})
						} else if (res.cancel) {
							return
						}
					}
				});
			}

		},
		computed: {

		}
	};
</script>

<style lang="less" scoped>
	.creat-hudong {
		font-family: PingFangSC-regular;
		.hudong-header {
			position: sticky;
			top: 0;
			padding-top: 88upx;
			background-color: #FFFFFF;
			.haed {
				height: 90upx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				padding: 0 38upx 0 40upx;
				.title {
					color: rgba(51, 51, 51, 1);
					font-size: 36upx;
					font-weight: bold;
					flex: 1;
					text-align: center;
				}
				.cancel {
					color: rgba(51, 51, 51, 1);
					font-size: 32upx;
				}
				.complete {
					color: rgba(170, 170, 170, 1);
					font-size: 32upx;
				}
			}
		}
		.choose{
			background-color: #FFFFFF;
			margin-top: 20upx;
			padding: 20upx 40upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.info{
				display: flex;
				align-items: center;
			}
			.advad{
				display: inline-block;
				height: 80upx;
				width: 80upx;
				border-radius: 10upx;
				background-color: #f0f0f0;
				text-align: center;
				image{
					width: 60upx;
					height: 60upx;
					margin: 0 auto;
					margin-top: 15upx;
				}
			}
			.txt{
				font-size: 34upx;
				margin-left: 20upx;
				color: #aaaaaa;
			}
		}
	}
</style>
