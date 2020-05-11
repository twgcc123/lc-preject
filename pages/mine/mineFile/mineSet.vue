<template>
	<view class="personal-data">
		<view class="container">
			<view class="sale flexlr" @tap="goDetail('/pages/mine/mineFile/mineSecuritySetting')">
				<text class="prel">安全设置</text>
				<view class="prer">
					<uni-icons type="arrowright" color="#979797" size="18"></uni-icons>
				</view>
			</view>
			<view class="box flexlr" @tap="goDetail('/pages/mine/mineFile/mineAboutUs')">
				<text class="prel">关于爸妈都好</text>
				<view class="prer">
					<uni-icons type="arrowright" color="#979797" size="18"></uni-icons>
				</view>
			</view>
			<view class="box flexlr" @tap="goDetail('/pages/mine/mineFile/mineFeedback')">
				<text class="prel">意见反馈</text>
				<view class="prer">
					<uni-icons type="arrowright" color="#979797" size="18"></uni-icons>
				</view>
			</view>
			<view class="box flexlr">
				<text class="prel">APP版本</text>
				<view class="prer">当前版本1.0.5</view>
			</view>
			<view class="clearMB flexlr">
				<text class="prel">清除缓存</text>
				<view class="prer">
					<text>60MB</text>
					<uni-icons type="arrowright" color="#979797" size="18"></uni-icons>
				</view>
			</view>
		</view>
		<view class="logout" @tap="goDetail('/pages/login/login')">退出登录</view>
	</view>
</template>

<script>

export default{
	name:"mineSet",
	data(){
		return {
			menuList:[
				{
					"id":"p01",
					"value":"",
					"status":"1",
				},
				{
					"id":"p02",
					"value":"意见反馈",
					"status":"1",
				},
				{
					"id":"p03",
					"value":"APP版本",
					"status":"0",
					"valuelt":"当前版本1.0.1"
				},
			],
		}
	},
	methods:{
		change(item){
			let prer = item.options
			console.log(prer)
			// uni.$emit("options",prer)
		},
		goDetail(url){
			uni.navigateTo({url:url})
		},
	},
}
</script>

<style lang="less" scoped>
.flexlr{
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.container{
	.sale,.clearMB{
		height: 112upx;
		line-height:112upx;
		font-size: 32upx;
		margin: 20upx 0;
		padding: 0 32upx;
		background-color: #FFFFFF;
		border: 1px solid rgba(255, 255, 255, 0);
		text{
			margin-right: 10upx;
			color: rgba(51, 51, 51, 1);
		}
	}
	.box{
		height: 112upx;
		line-height:112upx;
		border-bottom: 1px solid #ECECEC;
		padding: 0 32upx;
		background-color: #FFFFFF;
		.prel{
			color: rgba(51, 51, 51, 1);
			font-size: 32upx;
		}
		.prer{
			color: rgba(170, 170, 170, 1);
			font-size: 32upx;
			text{
				margin-right: 10upx;
				color: rgba(51, 51, 51, 1);
				font-size: 28upx;
			}
		}
	}
}
.logout{
	margin-top: 40upx;
	height: 112upx;
	line-height: 112upx;
	color: rgba(16, 16, 16, 1);
	font-size: 32upx;
	text-align: center;
	font-family: Microsoft Yahei;
	background-color: #FFFFFF;
	border: 1px solid rgba(255, 255, 255, 0);
}
	
	
</style>
