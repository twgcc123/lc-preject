<template>
<view class="loginPhone">
		<view class="container">
			<view class="title">登录</view>
			<view class="sign">
				<view class="number">
					<view class="area">+86 <text class="area-icon"></text></view>
					<input type="text" v-model="telphone" placeholder="请输入手机号"/>
				</view>
				<view class="password">
					<input type="text" v-model="code" placeholder="请输入验证码"/>
					<text @click="getVerificationCode">获取验证码</text>
				</view>	
				<view class="inform">登录即视为同意  <text>用户协议</text>  和  <text>隐私政策</text></view>
			</view>
			<view class="sign-in" @click="login">登录</view>
		</view>
</view>
</template>

<script>

export default{
	name:"loginPhone",
	data(){
		return {
			telphone: '',
			code: ''
		}
	},
	methods:{
		/**
		 * @desc 获取验证码
		 * @param {string} telphone 电话号码  
		 */
		async getVerificationCode(){
			let param = this.$helper.setConfig('&telphone=' + this.telphone);
			let res = await this.$http.request({
				method: 'post',
				url: '/index/Verify/sendText',
				data: {
					signature: param.signature,
					timestamp: param.timestamp,
					telphone: this.telphone
				}
			});
			console.log(res)
			if(res.state == 10000){
				this.code = res.data;
			}
		},
		/**
		 * @desc 登录 
		 * @param {string} telphone 电话号码 
		 * @param {string} captcha 短信验证码 
		 */
		async login(){
			let param = this.$helper.setConfig('&telphone=' + this.telphone + '&captcha=' + this.code);
			let res = await this.$http.request({
				method: 'post',
				url: '/index/Verify/mobileLogin',
				data: {
					signature: param.signature,
					timestamp: param.timestamp,
					telphone: this.telphone,
					captcha: this.code
				}
			});
			console.log(res)
			if(res.state == 10000){
				uni.setStorageSync('USERINFO',res.data.user);
				this.$token = res.data.user.token;
				this.switchTab('/pages/mine/mine');
			}
		},
		/**
		 * @desc 跳转到tabbar页面
		 */
		switchTab(url){
			uni.switchTab({
				url: url
			})
		}
	}
}
</script>

<style lang="less" scoped>
.loginPhone{
	height: 100vh;
	background-color: #FFFFFF;
	font-family: PingFangSC-bold;
}

.container{
	padding: 120upx 64upx 0 64upx;
	.title{
		color: rgba(16, 16, 16, 1);
		font-size: 40upx;
	}
	.sign{
		margin-top: 64upx;
		.number,.password{
			display: flex;
			align-items: center;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 0 30upx;
			height: 96upx;
			line-height: 96upx;
			border-radius: 5upx;
			background-color: rgba(248, 248, 248, 1);
			border: 1px solid rgba(255, 255, 255, 0);
			input{
				flex: 1;
				color: rgba(170, 170, 170, 1);
				font-size: 30upx;
				height: 100%;
			}
		}
		.number{
			.area{
				width: 132upx;
				color: rgba(16, 16, 16, 1);
				font-size: 30upx;
				position: relative;
				.area-icon{
					position: absolute;
					top: 46rpx;
					left: 74rpx;
					display: inline-block;
					width: 0;   
					height: 0;   
					border-left: 8upx solid transparent;  
					border-right: 8upx solid transparent; 
					border-top: 8upx solid #222; 
					font-size: 0;  
					line-height: 0; 
				}
			}
			.area::after{
				content:"";
				position: absolute;
				top: 42rpx;
				right: 20rpx;
				height: 20upx;
				width: 2upx;
				background-color: rgba(170, 170, 170, 1);
			}
		}
		.password{
			margin-top: 20upx;
			color: rgba(170, 170, 170, 1);
			font-size: 30upx;
			text{
				width: 150upx;
				margin-left: 20upx;
			}
		}
		.inform{
			margin-top: 20upx;
			color: rgba(170, 170, 170, 1);
			font-size: 26upx;
			text{
				color: #5A97EE;
				margin: 0 20upx;
			}
		}
	}
	.sign-in{
		margin-top: 50upx;
		width: 622upx;
		height: 88upx;
		line-height: 88upx;
		border-radius: 6upx;
		font-size: 30upx;
		text-align: center;
		font-family: Arial;
		color: rgba(255, 255, 255, 1);
		background-color: rgba(51, 51, 51, 1);
		border: 1px solid rgba(255, 255, 255, 0);
	}
}
	
</style>
