<template>
	<view class="container">
		<block v-if="type === '1'">
			<view class="sign" :style="[{width: width,height: height,marginTop: marginTop}]">
				<view class="sign-left">
					<view class="sign-left-top">{{ sign.time }}</view>
					<view class="sign-left-bottom">{{ sign.mark == 1 ? '原创' : '引用'}}</view>
				</view>
				<view class="sign-middle">
					<view class="sign-middle-content">{{ sign.content }}</view>
				</view>
				<view class="sign-right">
					<view class="sign-right-top">{{ sign.title }}</view>
					<view class="sign-right-bottom">
						<text class="sign-right-bottom-name">{{ sign.author }}</text><text class="sign-right-bottom-text">说</text>
					</view>
				</view>
			</view>
		</block>
		<block v-else>
			<view class="sign2" :style="[{width: width,height: height,marginTop: marginTop}]">
				<view class="sign-left2">
					<view class="sign-left-top2">{{ sign.time }}</view>
					<view class="sign-left-bottom2">{{ sign.mark == 1 ? '原创' : '引用'}}</view>
				</view>
				<view class="sign-middle2">
					<view class="sign-middle-content2">{{ sign.content }}</view>
				</view>
				<view class="sign-right2">
					<view class="sign-right-top2">{{ sign.title }}</view>
					<view class="sign-right-bottom2">
						<text class="sign-right-bottom-name2">{{ sign.author }}</text><text class="sign-right-bottom-text2">说</text>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			width:{
				type: String,
				default: ''
			},
			height:{
				type: String,
				default: ''
			},
			sign: {
				type: Object,
				default: null
			},
			marginTop:{
				type: String,
				default: ''
			},
			type:{
				type: String,
				default: '1'
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
.container{
	// padding-bottom: 82px;
	.sign{
		width: 594upx;
		height: 936upx;
		margin: auto;
		margin-top: 190rpx;
		border: 2px solid #101010;
		background-color: #FFFFFF;
		text-align: center;
		display: flex;
		.sign-left{
			width: 70upx;
			border-right: 1px solid #101010;
			display: flex;
			flex-direction: column;
			.sign-left-top{
				color: #333333;
				font-size: 36upx;
			}
			.sign-left-bottom{
				color: #E31717;
				font-size: 28upx;
				border: 1px solid #E31717;
				border-radius: 4upx;
				margin: auto;
				margin-bottom: 32upx;
				width: 40upx;
				height: 88upx;
			}
		}
		.sign-middle{
			width: 396upx;
			height: 928upx;
			color: #000000;
			font-size: 56upx;
			padding: 160upx 0 150upx 0;
			pointer-events: none;
			writing-mode: vertical-rl; /*从右向左 从左向右是 writing-mode: vertical-lr;*/
			display: flex;
			.sign-middle-content{
				margin: auto;
			}
		}
		.sign-right{
			width: 120upx;
			border-left: 1px solid #101010;
			display: flex;
			flex-direction: column;
			.sign-right-top{
				margin: auto;
				margin-top: 40upx;
				font-size: 64upx;
				color: #000000;
				font-weight: 600;
			}
			.sign-right-bottom{
				color: rgba(51, 51, 51, 1);
				font-size: 44upx;
				// writing-mode: vertical-rl;
				margin: auto;
				margin-bottom: 156upx;
				display: flex;
				flex-direction: column;
				.sign-right-bottom-name{
					line-height: 44upx;
					width: 44upx;
					height: 230upx;
				}
				.sign-right-bottom-text{
					margin-top: 40upx;
				}
			}
		}
	}
	
	.sign2{
		width: 430upx;
		height: 680upx;
		margin: auto;
		margin-top: 26rpx;
		border: 2px solid #101010;
		background-color: #FFFFFF;
		text-align: center;
		display: flex;
		.sign-left2{
			width: 52upx;
			border-right: 1px solid #101010;
			display: flex;
			flex-direction: column;
			.sign-left-top2{
				color: #333333;
				font-size: 32upx;
				// line-height: 32upx;
			}
			.sign-left-bottom2{
				color: #E31717;
				font-size: 22upx;
				line-height: 30upx;
				border: 1px solid #E31717;
				border-radius: 4upx;
				margin: auto;
				margin-bottom: 24upx;
				width: 30upx;
				height: 64upx;
			}
		}
		.sign-middle2{
			width: 288upx;
			height: 672upx;
			color: #000000;
			font-size: 40upx;
			padding: 84upx 0;
			pointer-events: none;
			writing-mode: vertical-rl; /*从右向左 从左向右是 writing-mode: vertical-lr;*/
			display: flex;
			.sign-middle-content2{
				margin: auto;
			}
		}
		.sign-right2{
			width: 86upx;
			border-left: 1px solid #101010;
			display: flex;
			flex-direction: column;
			.sign-right-top2{
				width: 44upx;
				margin: auto;
				line-height: 44upx;
				margin-top: 34upx;
				font-size: 40upx;
				color: #000000;
				font-weight: 600;
			}
			.sign-right-bottom2{
				color: rgba(51, 51, 51, 1);
				font-size: 32upx;
				// writing-mode: vertical-rl;
				margin: auto;
				margin-bottom: 106upx;
				display: flex;
				flex-direction: column;
				.sign-right-bottom-name2{
					line-height: 32upx;
					width: 32upx;
					height: 168upx;
				}
				.sign-right-bottom-text2{
					margin-top: 20upx;
				}
			}
		}
	}
}

</style>
