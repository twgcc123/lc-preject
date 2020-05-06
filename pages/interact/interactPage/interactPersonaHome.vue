<template>
	<view class="person">
		<view class="header">
			<view class="" @tap="goBack"><uni-icons color="#707070" type="arrowleft" size="22"></uni-icons></view>
			<view class="" @click="pageTo('/pages/interact/interactPage/moreAction')"><uni-icons color="#707070" type="more-filled" size="24"></uni-icons></view>
		</view>
		<view class="container">
			<!-- 头部数据 -->
			<view class="person-info">
				<view class="advada">
					<image src="../../../static/hudong/c4.jpg" mode=""></image>
					<view class="tits">守约率 99%</view>
				</view>
				<view class="infos">
					<view class="name">
						<text>小李子</text>
						<view class="name-status"> V </view>
					</view>
					<view class="nickname">
						昵称 ：
						<text>风里的春天</text>
					</view>
					<view class="ealID">
						唯一ID：
						<text>1000399139</text>
					</view>
					<view class="realName">
						实名：
						<text>莱昂纳多</text>
					</view>
				</view>
			</view>
			<!-- 关注粉丝 -->
			<view class="person-fans">
				<view class="fans" @click="pageTo('/pages/interact/interactPage/noticer')">
					<view class="nub">312万+</view>
					<view class="tips">关注者</view>
				</view>
				<view class="fans" @click="pageTo('/pages/interact/interactPage/focusOn')">
					<view class="nub">32</view>
					<view class="tips">关注中</view>
				</view>
				<view class="fans" @click="pageTo('/pages/interact/interactPage/personalDynamics')">
					<view class="nub">123</view>
					<view class="tips">动态</view>
				</view>
				<view class="fans" @click="swichTo">
					<view class="nub">13</view>
					<view class="tips">互动</view>
				</view>
			</view>

			<view class="person-beizhu" @click="pageTo('/pages/interact/interactPage/setNickname')">
				<view class="left-name">备注名称</view>
				<view class="rigth-content">
					<text class="rigth-text">小李子</text>
					<uni-icons color="#ddd" type="arrowright" size="20"></uni-icons>
				</view>
			</view>
			<view class="person-guanxi" @click="pageTo('/pages/interact/interactPage/relation')">
				<view class="left-name">关系</view>
				<view class="rigth-content">
					<text class="rigth-text">相互关注</text>
					<uni-icons color="#ddd" type="arrowright" size="20"></uni-icons>
				</view>
			</view>

			<view class="costent">
				<view class="person-dongtai" @click="pageTo('/pages/interact/interactPage/personalDynamics')">
					<view class="left-name">最新动态</view>
					<view class="rigth-content">
						<view class="dongtai-img">
							<image src="../../../static/hudong/s1.jpg" mode=""></image>
							<image src="../../../static/hudong/s2.jpg" mode=""></image>
							<image src="../../../static/hudong/s3.jpg" mode=""></image>
							<image src="../../../static/hudong/s4.jpg" mode=""></image>
						</view>
						<view class=""><uni-icons color="#ddd" type="arrowright" size="20"></uni-icons></view>
					</view>
				</view>
				<view class="person-yuanfen">
					<view class="left-name">缘分</view>
					<view class="rigth-content">
						<view class="yuanfen-yuan"></view>
						<view class="yuanfen-content">
							<view class="yuanfen-address">起于·优居活动</view>
							<view class="yuanfen-time">2019年12月03日 18:16</view>
						</view>
					</view>
				</view>
			</view>

			<view class="person-shenqing">
				<view class="txt">亲友关系申请</view>
			</view>
			<view class="person-dianhua">
				<view class="tel">
					<image src="../../../static/hudong/phone01.png" mode=""></image>
					<text>电话联系</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniIcons from '@/components/uni-icons/uni-icons.vue';
export default {
	name: 'interactPersonaHome',
	components: {
		uniIcons
	},
	data() {
		return {};
	},

	methods: {
		goBack(){
			uni.navigateBack();
		},
		pageTo(url){
			uni.navigateTo({
				url: url
			})
		},
		swichTo(){
			uni.switchTab({
				url: '/pages/interact/interact'
			})
		},
	},

	filters: {}
};
</script>

<style lang="less" scoped>
.person {
	background-color: #ffffff;
	font-family: PingFangSC-regular;
}
.header {
	padding: 88upx 32upx 0 18upx;
	height: 178upx;
	background-color: rgba(255, 255, 255, 0);
	color: rgba(51, 51, 51, 1);
	font-size: 36upx;
	font-family: Arial;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
}
.container {
	.person-info {
		padding: 0 48upx;
		display: flex;
		margin-bottom: 40upx;
		.advada {
			text-align: center;
			image {
				margin: 0 auto;
				width: 128upx;
				height: 128upx;
				border-radius: 12upx;
				border: 1px solid rgba(255, 255, 255, 0);
			}
			.tits {
				margin-top: 2upx;
				color: rgba(255, 149, 2, 1);
				font-size: 22upx;
				text-align: center;
			}
		}
		.infos {
			margin-left: 34upx;
			.name {
				height: 56upx;
				color: rgba(51, 51, 51, 1);
				font-size: 40upx;
				margin-bottom: 8upx;
				font-weight: bolder;
				display: flex;
				align-items: flex-end;
				text{
					line-height: 56upx;
				}
				.name-status{
					height: 30upx;
					width: 30upx;
					background-color: #F3B63B;
					text-align: center;
					line-height: 30upx;
					color: #FFFFFF;
					font-size: 20upx;
					margin-left: 10upx;
					border-radius: 6upx;
					margin-bottom: 8upx;
				}
			}
			.nickname,
			.ealID,
			.realName {
				color: rgba(102, 102, 102, 1);
				font-size: 30upx;
				margin-bottom: 6upx;
			}
		}
	}

	.person-fans,
	.person-beizhu,
	.person-guanxi,
	.person-dongtai,
	.person-yuanfen {
		padding-right: 32upx;
		margin-left: 32upx;
		display: flex;
		align-items: center;
	}
	.person-fans {
		height: 142upx;
		border-top: 1upx solid #eee;
		.fans {
			width: 25%;
			text-align: left;
			.nub {
				font-weight: bolder;
				color: rgba(0, 0, 0, 1);
				font-size: 30upx;
			}
			.tips {
				margin-top: 4upx;
				color: rgba(102, 102, 102, 1);
				font-size: 26upx;
			}
		}
	}
	.left-name {
		width: 25%;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		font-size: 34upx;
	}
	.rigth-content {
		flex: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.rigth-text {
		color: rgba(119, 119, 119, 1);
		font-size: 34upx;
	}
	.person-beizhu,
	.person-guanxi {
		align-items: center;
		height: 112upx;
		border-top: 1upx solid #eee;
	}
	.costent {
		border-top: 14upx solid #ededed;
		border-bottom: 20upx solid #ededed;
		.person-dongtai {
			height: 160upx;
			.rigth-content {
				.dongtai-img {
					height: 96upx;
					max-width: 475upx;
					overflow: hidden;
					image {
						height: 96upx;
						width: 96upx;
						margin-right: 8upx;
					}
				}
			}
		}
	}
	.person-yuanfen {
		border-top: 1upx solid #eee;
		height: 144upx;
		.rigth-content {
			justify-content: flex-start;
			.yuanfen-yuan {
				height: 20upx;
				width: 20upx;
				border: 4upx solid #f9a43a;
				border-radius: 50%;
			}
			.yuanfen-content {
				margin-left: 30upx;
				.yuanfen-address {
					color: rgba(51, 51, 51, 1);
					font-size: 30upx;
				}
				.yuanfen-time {
					margin-top: 6upx;
					color: rgba(153, 153, 153, 1);
					font-size: 24upx;
				}
			}
		}
	}
	.person-shenqing,.person-dianhua{
		height: 112upx;
		line-height: 112upx;
		text-align: center;
		.txt{
			baseline: .2;
			font-size: 36upx;
			color: #7889A9;
		}
		.tel{
			color: #FF6700;
			image{
				height: 28upx;
				width: 28upx;
			}
			text{
				margin-left: 14upx;
				font-size: 34upx;
				font-weight: bold;
			}
		}
	}
	.person-dianhua{
		border-top: 1upx solid #ededed;
	}
}
</style>
