<template>
	<view class="footer">
		<view class="footer-left">
			<view class="footer-left-price">
				<text class="footer-left-price-new">¥ {{ new_price }}</text>
				<text class="footer-left-price-old">¥ {{ old_price }}</text>
				/晚
			</view>
			<view class="footer-left-rote">
				<uni-rate class="item-rotes" size="12" :value="Number(rote)" disabled></uni-rate>

				<text class="footer-left-rote-num">{{ rote }}星评价</text>
			</view>
			<view class="footer-left-detail" @click="pageTo('')">价格明细</view>
		</view>
		<view class="footer-right">
			<view class="footer-right-chat">
				<uni-icons class="footer-right-chat-icon" type="chat" size="20"></uni-icons>
				沟通
			</view>
			<button class="footer-right-btn" @click="pageTo()">预订</button>
		</view>
	</view>
</template>

<script>
import uniRate from '@/components/uni-rate/uni-rate.vue'
export default {
	components: {
		uniRate,
	},
	props:{
		old_price: {
			type: String,
			default: ''
		},
		new_price: {
			type: String,
			default: ''
		},
		rote: {
			type: String,
			default: ''
		},
		housingID: {
			type: String,
			default: ''
		},
		show_detail: {
			type: Boolean,
			default: false
		},
		show_service: {
			type: Boolean,
			default: false
		},
	},
	data() {
		return {

		};
	},
	methods:{
		/**
		 * @desc 跳转页面
		*/
		pageTo(){
			// console.log('44444',this.housingID)
				uni.navigateTo({
					url: `/pages/found/youju/roomDetail?id=${this.housingID}`
				});

		}
	},


}
</script>

<style lang="less">
.footer {
	background-color: #ffffff;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	// height: 200upx;
	display: flex;
	justify-content: space-between;
	padding: 30upx 0upx 30upx 50upx;
	&-left {
		&-price {
			font-size: 24upx;
			color: #555555;
			margin-bottom: 15upx;
			&-new {
				color: #000000;
				font-size: 30upx;
			}
			&-old {
				color: #cccccc;
				font-size: 24upx;
				text-decoration: line-through;
				margin-left: 10upx;
			}
		}
		&-rote {
			&-num {
				color: #555555;
				font-size: 24upx;
				position: relative;
				left: 140upx;
				top: -20upx;
			}
		}
		&-detail {
			color: #e45061;
			font-size: 24upx;
			margin-top: -20upx;
		}
	}
	&-right {
		display: flex;
		width: 50%;
		justify-content: space-between;
		&-chat {
			color: #e45061;
			font-size: 24upx;
			&-icon {
				display: block;
			}
		}
		&-btn {
			background-color: #e45061;
			color: #ffffff;
			font-size: 30upx;
			width: 100px;
			height: 49px;
			line-height: 49px;
			border-radius: 0;
			padding-top: 10upx;
		}
		
	}
}
</style>
