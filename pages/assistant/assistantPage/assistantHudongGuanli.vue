<template>
	<view class="interact-detail">
		<!-- 头部 -->
		<view class="header" :style="[{paddingTop: hasNotchInScreen ? '88upx': '44upx'}]">
			<view class="header-content">
				<uni-icons class="icons-back" type="back" color="#ffffff" size="24" @tap="goBack"></uni-icons>
				<view class="header-title">互动管理</view>
				<uni-icons class="icons" @tap="openEditPopup" type="more-filled" color="#ffffff" size="24"></uni-icons>
			</view>
		</view>

		<!-- 主体内容 -->
		<view class="container">
			<!-- 互动主题 -->
			<view class="theme">
				<view class="theme-head">
					<view class="head-bg"></view>
					<view class="theme-img"><image src="../../../static/hudong/h1.jpg" mode=""></image></view>
					<view class="theme-dcse">
						<view class="title">中国象棋</view>
						<view class="time">
							发布于
							<text>2020年03月21日 22:10</text>
						</view>
						<view class="number">互动编号：H3339</view>
						<view class="address">深圳天长地久优居</view>
					</view>
					<view class="theme-status">
						<view class="qizhi"><image src="/static/hudong/qizhi.png" mode=""></image></view>
						<text>活动类</text>
					</view>
				</view>

				<view class="theme-content">
					<view class="hudong">
						<view class="pay">
							<view class="nas">线下支付</view>
							<view class="nasc">￥ 0.00</view>
						</view>
						<view class="num">
							<view class="nas">队伍人数限制</view>
							<view class="nasc">100</view>
						</view>
						<view class="other">
							<view class="nas">其它限制</view>
							<view class="nasc">男女不限</view>
						</view>
					</view>
					<view class="hudong-dcse">“ 想找一帮50后一起玩，素质太低的不要来，如果可以的话想跟象棋高手一起玩 ”</view>
				</view>
			</view>
			
			<!-- 队伍信息 -->
			<view class="ranks">
				<view class="ranks-title">
					<view class="title">队伍信息</view>
					<view class="num"  @tap="pageTo('/pages/assistant/assistantPage/assistantHudongGuanliQueue')">
						<text>已加入89</text>
						<uni-icons class="icons" type="arrowright" color="#999999" size="14"></uni-icons>
					</view>
				</view>
				<view class="ranks-list" v-for="(ranks,index) in ranksData" :key="index">
					<view class="ranks-list-left" @tap="pageTo('/pages/interact/interactPage/interactPersonaHome')">
						<image class="imgs" v-if="ranks.avada_img !== ''" :src="ranks.avada_img" mode="scaleToFill"></image>
						<image class="imgs" v-else :src="ranks.avada_null" mode="scaleToFill"></image>
						<view class="ranks-dcse">
							<view class="ranks-name">
								<text class="nick">{{ranks.nameNick}}</text>
								<text class="name">({{ranks.name}})</text>
							</view>
							<view class="minck">
								<text class="minck-id" 
									:style="{'color': (ranks.user_id_status == 1) ? '#ed7d88':'#80a7d2'}"
								>{{ranks.user_id}}</text>
								<image v-if="ranks.ranks_status == 1" src="/static/hudong/qizhi-orgin.svg"></image>
							</view>
						</view>
					</view>
					<view class="more-filleds" @tap="openPopup(ranks)">
						<uni-icons class="more-icons" type="more-filled" color="#373737" size="18"></uni-icons>
					</view>
				</view>
				<view class="more-ranks" @tap="pageTo('/pages/assistant/assistantPage/assistantHudongGuanliQueue')">查看全部</view>
			</view>
			
			<!-- 地图 -->
			<view class="map">
				<view class="zhuli-title">签到地址</view>
				<view class="map-container">
					<view class="map-name">
						<view class="dcse">平峦山公园东北门</view>
						<view class="txt">宝安区西乡街道桃源社区前进二路与宝...</view>
					</view>
					<view class="map-see">
						<image src="/static/hudong/dingwei.png" mode="">
						<view class="txt">查看</view>
					</view>
				</view>
			</view>

			<!-- 助理 -->
			<view class="zhuli">
				<view class="zhuli-title">负责助理</view>
				<view class="zhuli-content" @tap="pageTo('/pages/interact/interactPage/interactPersonaHome')">
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
					<view class="content-right">
						深圳天长地久优居
					</view>
				</view>
			</view>
			
			<!-- 互动信息 -->
			<view class="hudong-more">
				<!-- 互动信息 -->
				<view class="zhuli-title">互动信息</view>
				<view class="contentcs">
					<view class="show-info">
						<text class="tits">开始时间</text>
						<text>2020年4月13日</text>
						<text>12:00</text>
					</view>
					<view class="show-info">
						<text class="tits">结束时间</text>
						<text>2020年4月20日</text>
						<text>13:00</text>
					</view>
					<view class="show-info">
						<text class="tits">截止报名</text>
						<text>2020年4月20日</text>
						<text>10:00</text>
					</view>
					<view class="show-info">
						<text class="tits">队员年代</text>
						<text>限</text>
						<text>50后 ~ 90后</text>
					</view>
					<view class="show-info">
						<text class="tits">线下支付</text>
						<text>￥ 0.00</text>
					</view>
				</view>
			</view>
			
			<!-- 提醒 -->
			<view class="tip-dcse">
				<view class="zhuli-title">提醒</view>
				<view class="tip-content"><text>互动开始15分钟前进行提醒</text></view>
			</view>
			
		</view>
	
		<!-- 底部tabar -->
		<view class="footer" :style="[{paddingTop: hasNotchInScreen ? '68upx': '0'}]">
			<view class="queue" @tap="pageTo('/pages/assistant/assistantPage/assistantHudongGuanliQueueApply')"><text class="number">5</text><text>申请队列</text></view>
			<view class="signing-up">报名中</view>
		</view>
		
		<!-- 队员信息弹窗 -->
		<uni-popup ref="popup" type="bottom" class="open-medol">
			<view class="popup">
				<view class="popup-item bottom-line user-info">
					<image class="user-img" :src="userInfo.adva_img" mode=""></image>
					<text class="user-names">
						<text>{{userInfo.nameNick}}</text>
						<text>( {{userInfo.name}} )</text>
					</text>
				</view>
				<view class="popup-item  bottom-line" @tap="closePopup">变更队长</view>
				<view class="popup-item bottom-line" @tap="closePopup">代用户签到</view>
				<view class="popup-item bottom-line" @tap="closePopup">电话联系TA</view>
				<view class="popup-item popup-cancle" @tap="closePopup">取消</view>
			</view>
		</uni-popup>
		
		<!-- 互动管理修改弹窗 -->
		<uni-popup ref="editPopup" type="bottom" class="open-medol">
			<view class="popup">
				<view class="popup-item  bottom-line" style="font-size: 30upx;">关于此互动的更多操作</view>
				<view class="popup-item bottom-line" @tap="termination" style="color: #ff3a30;">终止互动</view>
				<view class="popup-item bottom-line" @tap="editHudong">修改互动</view>
				<view class="popup-item popup-cancle" @tap="closeEditPopup">取消</view>
			</view>
		</uni-popup>
		
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
			ranksData:data.ranksData, // js 数据
			userInfo:{},
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
		 
		// 打开队员信息弹窗  start
		openPopup(item) {
			console.log(item)
			let user_info = {}
			user_info = {
				adva_img:item.avada_img,
				name:item.name,
				nameNick:item.nameNick,
			}
			this.userInfo = user_info
			console.log(this.userInfo)
			this.$refs.popup.open();
		},
		
		// 关闭队员信息弹窗  end
		closePopup() {
			this.$refs.popup.close();
		},
		
		
		// 打开互动管理修改弹窗  start
		openEditPopup() {
			this.$refs.editPopup.open();
			
		},
		
		// 关闭弹窗  end
		closeEditPopup() {
			this.$refs.editPopup.close();
		},
		
		// 终止互动
		termination(){
			uni.navigateTo({
				url:"/pages/assistant/assistantPage/assistantHudongStop"
			})
		},
		
		// 修改互动
		editHudong(){
			uni.navigateTo({
				url:"/pages/assistant/assistantPage/assistantHudongEdit"
			})
		}
		
	}
};
</script>

<style lang="less" scoped>
// view,text{
// 	line-height: 1;
// }
// image{
// 	border: 0;
// }
.interact-detail {
	font-family: PingFangSC-regular;
	background-color: #ffffff;
	padding-bottom: 246upx;
}

.header {
	position: sticky;
	top: 0;
	z-index: 99;
	background-color: #6b6b6b;
	padding: 44px 20px 0 20px;
	.header-content {
		height: 90upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.header-title {
			text-align: center;
			color: rgba(255, 255, 255, 1);
			font-size: 36upx;
			font-weight: bold;
			flex: 1;
		}
		.icons-back {
			// margin-left: -20upx;
		}
	}
}

// 互动主题
.theme {
	position: relative;
	padding-top:88upx;
	border-bottom: 20upx solid #F7F7F7;
	padding-bottom: 40upx;
	.head-bg{
		position: absolute;
		top: -88upx;
		left: 0;
		right: 0;
		height: 88upx;
		background-color: #6b6b6b;
	}
	.theme-head {
		padding-left: 40upx;
		position: relative;
		display: flex;
		.theme-img {
			width: 160upx;
			height: 160upx;
			image {
				position: absolute;
				top: -24px;
				left: 40upx;
				width: 160upx;
				height: 160upx;
				border-radius: 18upx;
				background-color: rgba(229, 229, 229, 1);
			}
		}
		.theme-dcse {
			// flex: 1;
			padding: 30upx 30upx 0 30upx;
			.title {
				color: rgba(0, 0, 0, 1);
				font-size: 36upx;
				font-weight: bold;
				margin-bottom: 14upx;
			}
			.time,
			.number {
				margin-bottom: 6upx;
				color: rgba(97, 97, 97, 1);
				font-size: 24upx;
			}
			.address {
				display: inline-block;
				padding: 0 12upx;
				margin-top: 8upx;
				height: 36upx;
				line-height: 36upx;
				border-radius: 4upx;
				color: rgba(89, 78, 174, 1);
				font-size: 500;
				font-size: 24upx;
				text-align: center;
				font-family: Arial;
				border: 1px solid rgba(89, 78, 174, 1);
			}
		}
		.theme-status {
			position: absolute;
			right: 0;
			top: 13px;
			background-color: #ff9205;
			height: 48upx;
			width: 160upx;
			overflow: hidden;
			text-overflow: hidden;
			white-space: nowrap;
			border-radius: 48upx 0 0 48upx;
			display: flex;
			align-items: center;
			.qizhi {
				display: inline-block;
				box-sizing: border-box;
				padding: 4upx;
				height: 40upx;
				width: 40upx;
				margin-left: 4upx;
				border-radius: 50%;
				background-color: #ffa543;
				image {
					height: 100%;
					width: 100%;
				}
			}
			text {
				display: inline-block;
				color: rgba(255, 255, 255, 1);
				font-size: 28upx;
				font-weight: 600;
				margin-left: 12upx;
			}
		}
	}
	.theme-content {
		margin-top: 8upx;
		padding: 0 40upx;
		.hudong {
			height: 112upx;
			display: flex;
			align-items: center;
			.pay,
			.num,
			.other {
				width: 33%;
				position: relative;
				.nas {
					height: 34upx;
					line-height: 34upx;
					color: rgba(153, 153, 153, 1);
					font-size: 24upx;
					font-weight: 600;
					text-align: center;
				}
				.nasc {
					margin-top: 12upx;
					color: rgba(0, 0, 0, 1);
					font-size: 28upx;
					font-weight: 600;
					text-align: center;
				}
			}
			.pay::after,
			.num::after {
				content: '';
				position: absolute;
				top: 0upx;
				right: 0;
				display: inline-block;
				height: 48upx;
				width: 1px;
				background-color: #f3f3f3;
				color: #f3f3f3;
			}
		}
		.hudong-dcse {
			line-height: 1.2;
			margin-top: 20upx;
			font-size: 30upx;
			padding: 18upx 20upx;
			background-color: rgba(247, 248, 250, 1);
			border: 1px solid rgba(255, 255, 255, 0);
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
		}
	}
}

// 队伍信息
.ranks{
	border-bottom: 20rpx solid #F7F7F7;
	.ranks-title{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-left: 40upx;
		padding-right: 40upx;
		height:112upx;
		line-height: 112upx;
		border-bottom: 1upx solid #F5F5F5;
		.title{
			color: #000000;
			font-size: 34upx;
			font-weight: bold;
		}
		.num{
			color: rgba(153, 153, 153, 1);
			font-size: 26upx;
			text{
				margin-right: 4upx;
			}
		}
	}
	.ranks-list{
		margin: 0 40upx;
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
						position: relative;
						top: 4upx;
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
	.more-ranks{
		height: 88upx;
		line-height: 88upx;
		text-align: center;
		color: rgba(255, 103, 0, 1);
		font-size: 30upx;
		font-weight: bold;
	}
}
	

// 地图
.map {
	.zhuli-title{
		border: none;
	}
	.map-container{
		margin: 0 40upx 40upx 40upx;		
		background-color: #F6F5F5;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 144upx;
		box-sizing: border-box;
		border-radius: 12upx;
		.txt{
			margin-top: 8upx;
			color: rgba(153, 153, 153, 1);
			font-size: 26upx;
		}
		.map-name{
			flex: 1;
			padding: 30upx;
			.dcse{
				color: rgba(51, 51, 51, 1);
				font-size: 32upx;
				font-weight: bold;
			}
			.txt{
				margin-top: 4upx;
			}
		}
		.map-see{
			box-sizing: border-box;
			padding: 30upx 0;
			width: 144upx;
			height: 144upx;
			
			text-align: center;
			image{
				height: 40upx;
				width: 40upx;
			}
		}
	}
}

// 互动信息
.hudong-more {
	border-top: 20rpx solid #F7F7F7;
	padding-bottom: 40upx;
	.contentcs{
		padding: 0 40upx;
		.show-info{
			height: 90upx;
			line-height: 90upx;
			font-size: 28upx;
			.tits{
				font-size: 32upx;
				color: #AAAAAA !important;
				margin-right: 44upx;
			}
			text{
				color: #333333;
			}
		}
	}
}

// 助理
.zhuli {
	background-color: #FFFFFF;
	border-top: 20upx solid #F7F7F7;
	.zhuli-content{
		padding: 0 40upx;
		height: 128upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.content-left{
			display: flex;
			image{
				height: 80upx;
				width: 80upx;
				border-radius: 8upx;
				background-color: #EEEEEE;
			}
			.zhuli-info{
				margin-left: 20upx;
				.name{
					line-height: 1;
					margin-top: 6upx;
					color: rgba(51, 51, 51, 1);
					font-size: 32upx;
					font-weight: bold;
				}
				.ids{
					line-height: 1;
					margin-top: 16upx;
					color: rgba(235, 115, 127, 1);
					font-size: 24upx;
				}
			}
		}
		.content-right{
			color: rgba(102, 102, 102, 1);
			font-size: 24upx;
		}
	}
}

// 提醒
.tip-dcse{
	background-color: #FFFFFF;
	border-top: 20upx solid #F7F7F7;
	.tip-content{
		padding: 0 40upx;
		margin-top: 32upx;
		text{
			color: #333333;
			font-size: 28upx;
		}
		
	}
}

// 公用标题
.zhuli-title{
	margin-left: 40upx;
	height:112upx;
	line-height: 112upx;
	color: #000000;
	font-size: 34upx;
	font-weight: bold;
	border-bottom: 1upx solid #F5F5F5;
}

.footer{
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	height: 88upx;
	display: flex;
	align-items: center;
	text-align: center;
	background-color: #FFFFFF;
	z-index: 97;
	.queue{
		width: 50%;
		height: 88upx;
		line-height: 88upx;
		background-color: #FDF3EA;
		color: rgba(238, 137, 53, 1);
		font-size: 32upx;
		.number{
			margin-right: 8upx;
			padding: 2upx 10upx;
			border-radius: 20upx;
			color: #FFFFFF;
			font-size: 26upx;
			background-color: #FF9502;
			text-align: center;
		}
	}
	.signing-up{
		flex: 50%;
		height: 88upx;
		line-height: 88upx;
		background-color: rgba(255, 149, 2, 1);
		color: #FFFFFF;
		font-size: 32upx;
	}
}

.popup{
	.user-info{
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;
		margin: 0 auto;
		.user-img{
			height: 56upx;
			width: 56upx;
			border-radius: 50%;
			margin-right: 12upx;
		}
		.user-names{
			font-size: 26upx;
			color: #999999;
		}
	}

}

// 弹出窗
.popup {
		background-color: #FFFFFF;
		border-radius: 20upx 20upx 0 0;
		padding-bottom: 88upx;
	}
	.popup-item {
		padding: 30upx;
		text-align: center;
		background-color: #ffffff;
		font-size: 36upx;
		border-top: 1upx solid #dedede;
	}
	.popup-cancle {
		border-top: 12upx solid #F1F1F1;
		margin-top: 15upx;
		font-size: 34upx;
	}
</style>
