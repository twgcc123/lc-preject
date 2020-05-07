<template>
<view class="login">
		<view class="container">
			<view class="tel">
				<view class="phone">134****8888</view>
				<view class="txt">认证服务由中国移动提供</view>
			</view>
			<view class="login-mode">
				<view class="mode-phone" @tap="goSwitchTab('/pages/mine/mine')">本机号码一键登录</view>
				<view class="mode-other" @tap="goDetail('/pages/login/loginPhone')">其他手机号登录</view>	
			</view>
			<view class="statement">
				<label class="radio" @tap="checkeds"><radio :checked="checked" style="transform:scale(0.6)" value="r1"/></label>
				<text>我已阅读并同意 000000<text class="cbg">用户协议</text> 和 <text class="cbg">隐私政策</text>以及 <text class="cbg">中国移动认证服务条款</text></text>
			</view>
		</view>
		<view class="login-other" @tap="goDetail('/pages/login/loginPhone')">其他方式登录</view>
</view>
</template>

<script>

export default{
	name:"login",
	data(){
		return {
			checked:false
		}
	},
	methods:{
		checkeds(){
			this.checked = !this.checked
		},
		goDetail(url){
			if(this.checked == true){
				uni.navigateTo({url:url})	
			}else{
				uni.showToast({
					title:"请打勾服务条款",
					duration: 1000,
					icon:"none"
				})
			}
		},
		goSwitchTab(url){
			if(this.checked == true){
				uni.switchTab({url:url})
				uni.showToast({
					title:"登录成功",
					duration: 1000,
				})
			}else{
				uni.showToast({
					title:"请打勾服务条款",
					duration: 1000,
					icon:"none"
				})
			}
		},
	},
}
</script>

<style lang="less" scoped>
.login{
	height: 100vh;
	background-color: #FFFFFF;
}
.container{
	text-align: center;
	padding: 20upx 40upx;
	font-family: PingFangSC-regular;
	.tel{
		text-align: center;
		margin-top: 204upx;
		.phone{
			height: 90upx;
			line-height: 90upx;
			color: rgba(16, 16, 16, 1);
			font-size: 64upx;
		}
		.txt{
			height: 36upx;
			color: rgba(170, 170, 170, 1);
			font-size: 26upx;
		}
	}
	.login-mode{
		margin: 0 auto;
		margin-top: 120upx;
		.mode-phone,.mode-other{
			margin: 0 auto;
			width: 622upx;
			height: 88upx;
			line-height: 88upx;
			border-radius: 6upx;
			text-align: center;
			font-family: Arial;
			font-size: 30upx;
		}
		.mode-phone{
			font-family: Arial;
			border: 1px solid rgba(255, 255, 255, 0);
			color: rgba(255, 255, 255, 1);
			background-color: rgba(51, 51, 51, 1);
		}
		.mode-other{
			margin-top: 20upx;
			background-color: rgba(255, 255, 255, 1);
			border: 1px solid rgba(207, 207, 207, 1);
			color: rgba(0, 0, 0, 1);
		}
	}
	.statement{
		margin: 20upx auto;
		text-align: center;
		width: 444upx;
		color: rgba(136, 136, 136, 1);
		font-size: 26upx;
		.cbg{
			color: #2F7CE9;
			margin: 0 4upx;
		}
	}
}
.login-other{
	position: absolute;
	left: 50%;
	bottom: 10%;
	transform: translate(-50%,-10%;);
	margin: 0 auto;
	width: 156upx;
	height: 36upx;
	color: rgba(37, 118, 233, 1);
	font-size: 26upx;
}

	
</style>
