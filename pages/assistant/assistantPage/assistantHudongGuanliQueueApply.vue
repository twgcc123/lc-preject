<template>
	<view class="queue-list">
		
		<!-- 头部 -->
		<view class="header" :style="[{paddingTop: hasNotchInScreen ? '88upx': '44upx'}]">
			<view class="header-content">
				<uni-icons class="back-icons" @tap="goBack" type="arrowleft" color="#565656" size="24" ></uni-icons>
				<view class="header-title">申请列表</view>
			</view>
		</view>
		
		<view style="border-top: 40upx solid #f3f3f3;">
			<view class="ranks-list" v-for="(ranks,index) in ranksData" :key="index">
				<view class="ranks-list-left" @tap="pageTo('/pages/interact/interactPage/interactPersonaHome')">
					<image class="imgs" v-if="ranks.avada_img !== ''" :src="ranks.avada_img" mode="scaleToFill"></image>
					<image class="imgs" v-else :src="ranks.avada_null" mode="scaleToFill"></image>
					<view class="ranks-dcse">
						<view class="ranks-name">
							<text class="nick">{{ranks.nameNick}}</text>
							<!-- <text class="name">({{ranks.name}})</text> -->
						</view>
						<view class="minck">
							<text class="minck-id" 
								:style="{'color': (ranks.user_id_status == 1) ? '#ed7d88':'#80a7d2'}"
							>{{ranks.user_id}}</text>
							<image v-if="ranks.ranks_status == 1" src="/static/hudong/qizhi.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="more-filleds">
					<view class="" @tap="pageTo('/pages/assistant/assistantPage/assistantHudongGuanliQueue')">同意</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniIcons from '@/components/uni-icons/uni-icons.vue';
import data from '@/utils/assistant.js';


export default {
	name: 'interactDetail',
	components: {
		uniIcons
	},
	data() {
		return {
			ranksData:data.ranksData // js 数据
		};
	},
	onShow() {
		
	},
	onLoad() {},
	updated() {},
	methods: {
		pageTo(url) {
			uni.navigateTo({
				url: url
			});
		},
		goBack() {
			uni.navigateBack({});
		},

	}
};
</script>


<style lang="less" scoped>
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
		.back-icons{
			position: absolute;
			left: 0;
		}
	}
}

.queue-apply{
	border-top: 40upx solid #f3f3f3;
	background-color: #FFFFFF;
	height: 140upx;
	padding: 0 36upx 0 40upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.apply-name{
		color: rgba(16, 16, 16, 1);
		font-size: 32upx;
	}
	.apply-more{
		display: inline-block;
		padding:10upx 20upx;
		border-radius: 4px;
		background-color: rgba(247, 247, 247, 1);
		color: rgba(51, 51, 51, 1);
		font-size: 28upx;
		font-family: Arial;
	}
}
	
	// 队伍信息
	.ranks-list{
		background-color: #FFFFFF;
		padding: 0 40upx;
		height: 120upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid #F7F7F7;
		.ranks-list-left{
			// display: flex;
			// flex-flow: row;
			// align-items: center;
			.imgs{
				height: 72upx;
				width: 72upx;
				border-radius: 50%;
				position: relative;
				top: 4upx;
			}
			.ranks-dcse{
				display: inline-block;
				margin-left: 20upx;
				.ranks-name{
					display: flex;
					align-items: center;
					.nick,.name{
						display: inline-block;
						color: rgba(51, 51, 51, 1);
						font-size: 30upx;
					}
				}
				.nick{
					max-width: 150upx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.name{
					margin-left: 4upx;
				}
				.minck{
					margin-top: -2upx;
					.minck-id{
						color: #80a7d2;
						font-size: 22upx;
					}
					image{
						height: 24upx;
						width: 24upx;
						margin-left: 4upx;
					}
				}
			}
		}
		.more-filleds{
			background-color: #F7F7F7;
			border-radius: 8upx;
			height: 60upx;
			line-height: 60upx;
			padding: 0 30upx;
			text-align: center;
		}
	}
</style>
