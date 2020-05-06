<template>
	<view :class="fixed == 'true' ? 'index-header fixed-header':'index-header'">
		<view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar fixed" :style="style" :class="bgColor">
				<block v-if="index == '1'">
					<view class="nav-search" @tap.stop="SwitchTab(0)">
						<uni-icons type="search" color="#ffffff" size="24"></uni-icons>
					</view>
					<view class="content-1" :style="[{top:StatusBar + 'px'}]">
						<view class="action">
							<view class="item" 
							:class="SwitchCur == 1 ? 'selected' : null "
							@tap.stop="SwitchTab(1)">优居</view>
							<view class="item"
							 :class="SwitchCur == 2 ? 'selected' : null "
							 @tap.stop="SwitchTab(2)">
								<text>推荐</text>
							 </view>
							 <view class="item"
							  :class="SwitchCur == 3 ? 'selected' : null "
							  @tap.stop="SwitchTab(3)">
							 	<text>百应</text>
							  </view>
						</view>
					</view>
				</block>
				<block v-if="index == '2'">
					<view class="go-back" @tap="goBack">
						<uni-icons type="back" color="#ffffff" size="24"></uni-icons>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		components: {uniIcons},
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				SwitchCur: 2
			};
		},
		name: 'index-header',
		computed: {
			style() {
				var StatusBar= this.StatusBar;
				var CustomBar= this.CustomBar;
				var bgImage = this.bgImage;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				return style
			}
		},
		props: {
			bgColor: {
				type: String,
				default: ''
			},
			isBack: {
				type: [Boolean, String],
				default: false
			},
			index: {
				type: String,
				default: '1'
			},
			fixed: {
				type: [Boolean, String],
				default: false
			}
		},
		methods: {
			SwitchTab(val) {
				this.SwitchCur = val;
				console.log( this.SwitchCur );
				this.$emit('headerSwitch',val);
			},
			goBack(){
				uni.navigateBack()
			},
		}
	}
</script>

<style lang="less">
.fixed-header{
	position: fixed;
	z-index: 9999;
}
.cu-custom{
	.bg-index-header{
		background-color: rgba(255,255,255,0);
	}
	.action{
		.cuIcon-playfill{
			background-color: rgba(255,255,255,0.5);
			border-radius: 50upx;
			padding: 18upx;
			color: #FFFFFF;
		}
	}
	
	.right{
		padding-right: 30upx;
		.cuIcon-search{
			background-color: rgba(255,255,255,0.5);
			border-radius: 50upx;
			padding: 18upx;
			color: #FFFFFF;
		}
	}
	.nav-search,.go-back{
		margin-left: 40upx;
	}
	.content-1{
		.action{
			.item{
				padding: 12upx;
				margin: 0 20upx;
				color: #FFFFFF;
				position: relative;
			}
			.selected::after{
				content: "";
				position: absolute;
				width: 44upx;
				height: 6upx;
				left: 50%;
				bottom: -10%;
				transform: translate(-50%,10%);
				background-color: #FFFFFF;
			}
		}
	}
}

</style>
