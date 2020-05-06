<template>
	<view class="container" :style="[{paddingBottom: isIphoneX ? '42px': '8px'}]">
		<view class="navbar" :style="[{paddingTop: hasNotchInScreen ? '44px' : '20px'}]">
			<view class="navbar-icon" @click="pageTo()">
				<uni-icons type="closeempty" size="24"></uni-icons>
			</view>
			<view class="navbar-title">写心签</view>
		</view>
		<view class="sign" :style="[{marginTop: hasNotchInScreen ? '60px' : '36px'}]">
			<view class="sign-left">
				<view class="sign-left-top">二零二零年一月三十日</view>
				<view class="sign-left-bottom">引用</view>
			</view>
			<view class="sign-middle sign-middle-create">
				<view class="sign-middle-content"> {{ input_content }} </view>
			</view>
			<textarea class="sign-middle-textarea" v-model="input_content" @input="onInput"/>
			<view class="sign-right">
				<textarea class="sign-right-top" disable-default-padding v-model="input_title" placeholder="标题五个字" maxlength=5 />
				<view class="sign-right-bottom">
					<textarea class="sign-right-bottom-name" disable-default-padding v-model="input_author" placeholder="作者五个字" maxlength=5 />
					<text class="sign-right-bottom-text">说</text>
				</view>
			</view>
		</view>
		<view class="select">
			<view class="select-left">
				<uni-icons type="personadd" size="16"></uni-icons>
				<!-- <image class="select-left-icon" src="../static/dongtai/head.svg"></image> -->
				<text class="select-left-text">谁可以看</text>
			</view>
			<view class="select-right">
				<text class="select-right-text" @click="openPopup">仅自己可见</text>
				<uni-icons type="arrowright" size="14"></uni-icons>
				<!-- <image class="select-right-icon" src="../static/dongtai/arrow_r.svg"></image> -->
			</view>
		</view>
		<!-- 弹窗 -->
		<uni-popup ref="popup" type="bottom">
			<view class="popup">
				<view class="popup-item bottom-line" style="border-radius: 20upx 20upx 0 0;" @tap="closePopup">
					公开
					<view class="popup-small-text">所有人和关注可见</view>
				</view>
				<view class="popup-item bottom-line" @tap="closePopup">
					亲友可见
					<view class="popup-small-text">仅自己和亲友关系可见</view>
				</view>
				<view class="popup-item bottom-line" @tap="closePopup">
					私密
					<view class="popup-small-text">仅自己可见</view>
				</view>
				<view class="popup-item popup-cancle" @tap="closePopup">取消</view>
			</view>
		</uni-popup>
		
		<view class="bottom-tip">
			<uni-icons type="checkbox" color="#e29c45" size="18"></uni-icons>
			<view class="bottom-tip-text">我已了解并同意《<text class="bottom-tip-text-important">日签创作须知</text>》</view>
		</view>
		<view class="submit-btn">创建</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	export default {
		components:{
			uniIcons
		},
		data() {
			return {
				input_content: '日签内容', // 输入日签内容
				input_title: '', // 输入日签标题
				input_author: '', // 输入日签作者
			};
		},
		methods:{
			onInput(e){
				console.log(e)
				this.input_content = e.detail.value
			},
			/**
			 * @desc 打开弹窗
			 */
			openPopup() {
				this.$refs.popup.open();
			},
			/**
			 * @desc 关闭弹窗
			 */
			closePopup() {
				this.$refs.popup.close();
			},
			pageTo(url){
				if(!url){
					uni.navigateBack();
					return;
				}
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	background-color: #FFFFFF;
	.navbar{
		position: sticky;
		top: 0;
		left: 0;
		width: 750upx;
		height: 90upx;
		z-index: 99;
		display: flex;
		align-items: center;
		text-align: center;
		background-color: #FFFFFF;
		.navbar-icon{
			padding-left: 40upx;
			// position: relative;
		}
		.navbar-title{
			width: 100%;
			margin-left: -88upx;
			color: #000;
			font-size: 36upx;
			font-weight: 600;
			text-align: center;
		}
	}
	.sign{
		position: relative;
		width: 594upx;
		height: 936upx;
		margin: auto;
		// margin-top: 190rpx;
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
				.textarea-placeholder{
					
				}
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
			// background-color: #F43F3B;
			// background-color: #FFFFFF;
			color: #000000;
			font-size: 56upx;
			padding: 160upx 0 150upx 0;
			pointer-events: none;
			writing-mode: vertical-rl; /*从右向左 从左向右是 writing-mode: vertical-lr;*/
			display: flex;
			.sign-middle-content{
				margin: auto;
				pointer-events: none;
			}
		}
		.sign-middle-create{
			position: absolute;
			z-index: 9;
			background-color: #FFFFFF;
			transform: translateX(-120upx);
		}
		.sign-middle-textarea:focus{
			noFocusLine: expression(this.onFocus=this.blur());
		}
		.sign-middle-textarea{
			padding: 250upx 150upx;
			width: 400upx;
			height: 928upx;
			// background-color: #1CBBB4;
			position: relative;
			z-index: 0;
			outline: none;
		}
		.textarea-placeholder{
			font-size: 56upx;
			line-height: 56upx;
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
				line-height: 64upx;
				color: #000000;
				font-weight: 600;
				width: 64upx;
				height: 320upx;
				.textarea-placeholder{
					line-height: 64upx;
					font-size: 64upx;
				}
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
				.textarea-placeholder{
					line-height: 44upx;
					font-size: 44upx;
					color: rgba(51, 51, 51, 1);
				}
				.sign-right-bottom-text{
					margin-top: 40upx;
				}
			}
		}
	}
	.select{
		width: 670upx;
		margin-left: 40upx;
		margin-top: 10upx;
		padding: 20upx;
		// background-color: #007AFF;
		border-bottom: 1rpx solid #eaeaea;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.select-left,.select-right{
			display: flex;
			flex-direction: row;
			align-items: center;
		}
		.select-right-text,.select-left-text{
			font-size: 28upx;
			color: #333333;
		}
		.select-left-text{
			margin-left: 10upx;
		}
	}
	.popup {
		background-color: #f1f1f1;
		border-radius: 20upx 20upx 0 0;
	}
	.popup:first-child{
		border-radius: 20upx 20upx 0 0;
	}
	.bottom-line {
		border-bottom: 1px solid #eaeaea;
	}
	.popup-small-text{
		font-size: 26upx;
		color: #666666;
		font-weight: 400;
	}
	.popup-item {
		color: #000000;
		font-weight: 500;
		font-size: 32upx;
		padding: 30upx;
		text-align: center;
		background-color: #ffffff;
	}
	.popup-cancle {
		margin-top: 15upx;
	}
	.bottom-tip{
		width: 750rpx;
		padding: 40upx 60upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		.bottom-tip-text{
			color: #666666;
			font-size: 24upx;
			margin-left: 10upx;
		}
		.bottom-tip-text-important{
			color: #f8ceab;
		}
	}
	.submit-btn{
		background-color: #333333;
		width: 670upx;
		height: 96upx;
		color: #FFFFFF;
		text-align: center;
		line-height: 96upx;;
		font-size: 32upx;
		margin-left: 40upx;
		margin-top: 104upx;
	}
}

</style>
