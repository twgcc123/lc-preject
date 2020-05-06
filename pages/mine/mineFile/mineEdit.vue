<template>
	<view class="mine-edit">
		<!-- 头部 -->
		<view class="header">
			<view class="header-content">
				<uni-icons class="icons-back" type="closeempty" color="#333333" size="22" @tap="goBack"></uni-icons>
				<view class="header-title">编辑社交资料</view>
				<text class="submi" @tap="submi">保存</text>
			</view>
		</view>
		
		<view class="mine-user flexlr">
			<image src="../../../static/youju/video.png" mode=""></image>
			<view class="user-name">
				<text>用户 135****3323</text>
				<uni-icons type="compose" color="#dddddd" size="16"></uni-icons>
			</view>
		</view>

		<!-- 认证信息 -->
		<view class="container">
			<view class="">
				<view class="con-name">认证信息</view>
				<view class="con-dcse">通过信用认证才可以参与活动和网络社交评论</view>
				<view class="conflex">
					<text class="conl">实名认证</text>
					<text class="conr">去认证</text>
				</view>
			</view>

			<view class="">
				<view class="con-name">社交信息</view>
				<view class="">
					<text class="con-dcse">有助于找到同趣的朋友，</text>
					<text class="con-tip">影响活动匹配结果</text>
				</view>

				<view class="conflex">
					<view class="">
						<view class="conl-type">用化名进行社交吗？</view>
						<view class="conl-name">当前化名：化名巴菲特股神</view>
					</view>
					<view class=""><switch color="#00E266" checked @change="switchChange" /></view>
				</view>
				<view class="conflex">
					<view class="conl">个人信息</view>
					<view class="conr" @tap="goDetail('/pages/mine/mineFile/minePersonalData')">完善</view>
				</view>
				<view class="conflex">
					<view class="conl">兴趣卡片</view>
					<view class="">
						<text class="conms">明细</text>
						<text class="conr">设置</text>
					</view>
				</view>
				<view class="conflex">
					<view class="conl">背景认证</view>
					<view class="conr">认证</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'mineEdit',
	data() {
		return {};
	},
	methods: {
		switchChange: function(e) {
			console.log(e.target.value);
		},
		goBack() {
			uni.navigateBack();
		},
		goDetail(url) {
			uni.navigateTo({
				url: url
			});
		},
		submi() {
			console.log('提交保存');
		}
	}
};
</script>

<style lang="less" scoped>
.header {
	position: sticky;
	top: 0;
	z-index: 99;
	background-color: #F3F3F3;
	padding: 88upx 40upx 0 40upx;
	.header-content {
		height: 90upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.header-title {
			text-align: center;
			color: #000000;
			font-size: 36upx;
			flex: 1;
		}
		.submi{
			color: #AAAAAA;
			color: rgba(170, 170, 170, 1);
			font-size: 32upx;
		}
	}
}

.mine-edit {
	background-color: #ffffff;
	font-family: PingFangSC-regular;
	padding-bottom: 40upx;
}
.flexlr {
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.mine-user {
	background-color: #f3f3f3;
	padding: 24upx 40upx;
	justify-content: flex-start;
	image {
		width: 128upx;
		height: 128upx;
		border-radius: 50%;
		box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.4);
	}
	.user-name {
		margin: 0 16upx 0 30upx;
		color: rgba(0, 0, 0, 1);
		font-size: 32upx;
		text {
			margin-right: 16upx;
		}
	}
}
.container {
	padding: 1upx 40upx;
	font-family: PingFangSC-regular;
	.con-name {
		color: rgba(51, 51, 51, 1);
		font-size: 36upx;
		font-weight: bold;
		margin-top: 40upx;
	}
	.con-dcse {
		margin-top: 10upx;
		color: rgba(153, 153, 153, 1);
		font-size: 24upx;
	}
	.con-tip {
		margin-top: 10upx;
		color: #000000;
	}
	.conflex {
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 120upx;
		background-color: rgba(243, 243, 243, 1);
		border: 1px solid rgba(255, 255, 255, 0);
		margin-top: 40upx;
		padding: 0 40upx;
		.conl {
			color: rgba(0, 0, 0, 1);
			font-size: 32upx;
		}
		.conl-type {
			color: rgba(0, 0, 0, 1);
			font-size: 28upx;
		}
		.conl-name {
			margin-top: 6upx;
			color: rgba(0, 0, 0, 1);
			font-size: 24upx;
			font-family: PingFangSC-regular;
		}
		.conr {
			color: rgba(102, 102, 102, 1);
			font-size: 28upx;
		}
		.conms {
			color: rgba(0, 176, 255, 1);
			font-size: 28upx;
			margin-right: 60upx;
		}
	}
}
</style>
