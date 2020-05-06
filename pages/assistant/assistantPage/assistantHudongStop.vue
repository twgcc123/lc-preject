<template>
	<view class="stop-hudong">
		<!-- 头部 -->
		<view class="header" :style="[{paddingTop: hasNotchInScreen ? '88upx': '44upx'}]">
			<view class="header-content">
				<uni-icons class="back-icons" @tap="goBack" type="arrowleft" color="#565656" size="24"></uni-icons>
				<view class="header-title">取消互动</view>
			</view>
		</view>

		<!-- 主要内容 -->
		<view class="container">
			<view class="title">请选择解散队伍的原因</view>
			<view class="uni-list">
				<radio-group @change="radioChange" style="width: 100%;">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
						<view class="dcse">{{item.name}}</view>
						<view class="radios">
							<radio color="#fe7c3c" style="transform:scale(0.8);background-color: #FFFFFF;" class="check-radio" :value="item.value" :checked="index === current" />
						</view>
					</label>
				</radio-group>
			</view>
		</view>
		<view class="footer" :style="[{paddingBottom: hasNotchInScreen ? '88upx': '20upx'}]">
			<view class="sure" @tap="pageTo('/pages/assistant/assistant')" >确定</view>
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
			return {
				items: [{
						value: 'A',
						name: '遇到不可抗力',
						checked: 'true'
					},
					{
						value: 'B',
						name: '涉嫌违法/违规行为'
						
					},
					{
						value: 'C',
						name: '队员不足以开始此互动'
					},
					{
						value: 'D',
						name: '存在影响互动良好进行的环境因素'
					},
					{
						value: 'F',
						name: '其他'
					}
				],
				current: 0
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
			
			goBack() {
				uni.navigateBack({})
			},
			
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
		},
		computed: {

		}
	};
</script>

<style lang="less" scoped>
	.stop-hudong {
		font-family: PingFangSC-regular;
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
					flex: 1;
					color: rgba(255, 45, 85, 1);
					font-size: 34upx;
					text-align: center;
				}

				.back-icons {
					position: absolute;
					left: 0;
				}
			}
		}
		.container {
			background-color: #FFFFFF;
			padding-top: 14upx;
			.title {
				padding: 0 40upx;
				height: 100upx;
				line-height: 100upx;
				color: rgba(51, 51, 51, 1);
				font-size: 36upx;
				font-weight: bold;
				font-family: PingFangSC-bold;
			}
			.uni-list{
				margin-left: 40upx;
				.uni-list-cell-pd{
					height: 96upx;
					display: flex;
					justify-content: space-between;
					align-items:  center;
					color: rgba(51, 51, 51, 1);
					font-size: 28upx;
					border-bottom: 1upx solid #f7f7f7;
					padding-right: 40upx;
					.dcse{
						flex: 1;
					}
				}
			}
		}
		.footer{
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			box-shadow: 0px 2px 6px -2px rgba(102, 102, 102, 0.4);
			border-bottom: 1px solid #f7f7f7;
			padding: 20upx 26upx;
			box-sizing: border-box;
			background-color: #FFFFFF;
			.sure{
				height: 80upx;
				line-height: 80upx;
				border-radius: 8upx;
				background-color: rgba(255, 149, 2, 1);
				text-align: center;
				color: rgba(255, 255, 255, 1);
				font-size: 28upx;
				font-weight: bold;
			}
		}
	}
</style>
