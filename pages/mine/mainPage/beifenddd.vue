<template>
	<view class="information">
		
		<view class="header" :style="[{paddingTop: hasNotchInScreen ? '88upx': '44upx'}]">
			<view class="haed">
				<uni-icons @tap="goBack" type="arrowleft" color="#565656" size="22"></uni-icons>
				<text class="title">常用信息</text>
				<view class="add-btn">
					<uni-icons @tap="goBack" type="plusempty" style="font-weight: 600;" color="#ec9a44" size="24"></uni-icons>
				</view>
			</view>
		</view>
		
		<!-- 当没有常用信息时候的代码 -->
		<view class="nothing">
			<image class="imgs" src="/static/nime/kongtan.svg" mode=""></image>
			<view class="nothing-txt">暂无常用入住人</view>
		</view>
		
		<view class="footer-btns" @tap="pageTo('/pages/mine/mainPage/mineUsedInformationAddInfo')">添加入住人</view>
	</view>
</template>

<script>
export default{
	name:"mineUsedInformation",
	data(){
		return{
			
		}
	},
	methods:{
		goBack(){
			uni.navigateBack({})
		},
		
		pageTo(url) {
			uni.navigateTo({
				url: url
			});
		},
	}
}
</script>

<style lang="less" scoped>
.information{
	height: 100vh;
	background-color: #FFFFFF;
}

.header {
	position: sticky;
	top: 0;
	padding: 88upx 32upx 0 32upx;
	background-color: #FFFFFF;
	border: 1px solid #f3f3f3;
	.haed {
		height: 90upx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		.title {
			color: #333333;
			font-size: 36upx;
			font-weight: bold;
			flex: 1;
			text-align: center;
		}
		.add-btn{
			height: 60upx;
			width: 60upx;
		}
	}
}

.nothing{
	margin-top: 272upx;
	text-align: center;
	.imgs{
		width: 128upx;
		height: 128upx;
		opacity: 0.45;
	}
	.nothing-txt{	
		margin-top:40upx;
		color: rgba(153, 153, 153, 1);
		font-size: 28upx;
		text-align: center;
		font-family: PingFangSC-regular;
	}
}
.footer-btns{
	width: 246upx;
	height: 80upx;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius:80upx;
	background-color: rgba(255, 149, 2, 1);
	color: rgba(255, 255, 255, 1);
	font-size: 32upx;
	font-family: PingFangSC-regular;
	position: fixed;
	z-index: 3;
	bottom: 108upx;
	left: 50%;
	transform: translateX(-50%);
}

</style>

