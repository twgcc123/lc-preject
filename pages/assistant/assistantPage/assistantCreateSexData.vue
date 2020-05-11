<template>
	<view class="stop-hudong">
		<!-- 头部 -->
		<view class="header" :style="[{paddingTop: hasNotchInScreen ? '88upx': '44upx'}]">
			<view class="header-content">
				<uni-icons class="back-icons" @tap="goBack" type="arrowleft" color="#565656" size="20"></uni-icons>
				<view class="header-title">助理性别限定</view>
			</view>
		</view>

		<!-- 主要内容 -->
		<view class="container">
			<view class="uni-list">
				<radio-group @change="radioChange" style="width: 100%;">
					<label 
						v-for="(item, index) in items" 
						:key="item.value" 
						:class="['uni-list-cell','uni-list-cell-pd',index == 0 ? 'active-bottom':null]"
					>
						<view class="dcse">{{item.gender}}</view>
						<view class="radios">
							<radio color="#fe7c3c" style="transform:scale(0.8);background-color: #FFFFFF;" class="check-radio" :value="item.value" :checked="index === current" />
						</view>
					</label>
				</radio-group>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {

		},
		data() {
			return {
				items: [{
						id:1,
						value: 'A',
						gender: '性别不限',
					},
					{
						id:2,
						value: 'B',
						gender: '限女性'
						
					},
					{
						id:3,
						value: 'C',
						gender: '限男性'
					},
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
						let sexType = this.items[i].gender
						uni.$emit("sexType",sexType)
						uni.navigateBack({})
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
					color: rgb(51, 51, 51);
					font-size: 32upx;
					text-align: center;
					font-weight: bold;
				}

				.back-icons {
					position: absolute;
					left: -20upx;
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
				.uni-list-cell-pd{
					height: 96upx;
					display: flex;
					justify-content: space-between;
					align-items:  center;
					color: rgba(51, 51, 51, 1);
					font-size: 28upx;
					border-bottom: 1upx solid #f7f7f7;
					padding-right: 40upx;
					margin-left: 40upx;
					.dcse{
						flex: 1;
					}
				}
				.active-bottom{
					border-top: 20upx solid #f3f3f3;
					border-bottom: 20upx solid #f3f3f3;
					height: 136upx;
					margin-left:0;
					padding-left: 40upx;
				}
			}
		}
	}
</style>
