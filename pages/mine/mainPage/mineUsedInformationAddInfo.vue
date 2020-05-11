<template>
	<view class="add-users">
		<!-- 头部导航 -->
		<view class="header" :style="[{ paddingTop: hasNotchInScreen ? '88upx' : '44upx' }]">
			<view class="header-content">
				<uni-icons class="back-icons" @tap="goBack" type="arrowleft" color="#565656" size="22"></uni-icons>
				<view class="header-title">添加入住人</view>
			</view>
		</view>
		
		<view class="add-info">
			<view class="line"></view>
			<view class="info-text">
				<view class="lists">
					<view class="lists-left"> 姓名 </view>
					<view class="lists-right">
						 <input class="inputs" v-model="name" name="userName" type="text" placeholder="请输入入住人姓名" />
					</view>
				</view>
			</view>
			<view class="line"></view>
			<view class="info-text" style="padding: 0;">
				<view class="lists" style="border-bottom: 2upx solid #f3f3f3;margin: 0 40upx;height:96upx;width: 100%;">
					<view class="lists-left"> 证件类型 </view>
					<view class="lists-right">
						 <input class="inputs" name="userName" type="text" placeholder="选择证件类型" />
					</view>
				</view>
			</view>
			<view class="info-text">
				<view class="lists">
					<view class="lists-left"> 证件号码 </view>
					<view class="lists-right">
						 <input class="inputs" v-model="idcard" name="userName" type="number" placeholder="请输入证件号码" />
					</view>
				</view>
			</view>
						<view class="line"></view>
			<view class="info-text">
				<view class="lists">
					<view class="lists-left"> 手机号 </view>
					<view class="lists-right">
						 <input class="inputs" v-model="iphone" name="userName" type="number" placeholder="请输入手机号" />
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default{
	name:"mineUsedInformation",
	data(){
		return{
			name:'',
			idcard:'',
			iphone:'',
		}
	},
	methods:{
		goBack(){
			uni.navigateBack({})
		},
	}
}
</script>

<style lang="less" scoped>
.add-users{
	font-family: PingFangSC-regular;
}
.header {
	position: sticky;
	top: 0;
	z-index: 99;
	background-color: #ffffff;
	/*#ifdef MP-WEIXIN*/
	padding: 44upx 40upx 0 40upx;
	/*#endif*/
	/*#ifdef APP-PLUS*/
	padding: 88upx 40upx 0 40upx;
	/*#endif*/
	.header-content {
		height: 90upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		.header-title {
			text-align: center;
			color: #101010;
			font-size: 36upx;
			flex: 1;
			font-family: Arial;
		}
		.back-icons {
			position: absolute;
			left: 0;
			top: 22upx;
		}
	}
}

.info-text{
	height: 96upx;
	padding: 0 40upx;
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	.lists{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.lists-left{
			width: 184upx;
			text-align: left;
			color: rgba(51, 51, 51, 1);
			font-size: 32upx;
		}
		.lists-right{
			flex: 1;
		}
		.inputs{
			color: #AAAAAA;
			font-size:32upx;
		}
	}
		
}

.line{
	height: 18upx;
	background-color: #f3f3f3;
}
</style>
