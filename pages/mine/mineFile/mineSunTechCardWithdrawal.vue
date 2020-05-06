<template>
	<view class="card-withdrawal">
		<view class="container">
			<view class="choose-card flexbox">
				<text>选择银行卡</text>
				<uni-icons type="arrowright" size="14"></uni-icons>
			</view>
			<view class="content">
				<view class="title">充值金额</view>
				<view class="withdrawal flexbox">
					<text>￥</text>
					<input type="text" value="" />
				</view>
			</view>
			<view class="balance">可提取余额 999.91 元</view>
			<view class="next">下一步</view>
		</view>
	</view>
</template>

<script>

export default{
	name:"mineSunTechCardWithdrawal",
	data(){
		return {
			checked:false
		}
	},
	methods:{
		
	},
}
</script>

<style lang="less" scoped>
.container{
	color: rgba(51, 51, 51, 1);
	font-family: PingFangSC-regular;
	.flexbox{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}
.choose-card{
	margin-top: 20upx;
	padding: 0 32upx;
	height: 120upx;
	font-size: 32upx;
	border: 1px solid rgba(255, 255, 255, 0);
	background-color: rgba(255, 255, 255, 1);
}
.content{
	margin-top: 20upx;
	box-sizing: border-box;
	padding: 32upx;
	height: 244upx;
	background-color: rgba(255, 255, 255, 1);
	border: 1px solid rgba(255, 255, 255, 0);
	font-family: PingFangSC-bold;
	background-color: #FFFFFF;
	border: 1upx solid #DDDDDD;
	.title{
		color: rgba(51, 51, 51, 1);
		font-size: 32upx;
	}
	.withdrawal{
		text{
			width: 60upx;
			height: 42px;
			color: rgba(51, 51, 51, 1);
			font-size: 30px;
		}
		input{
			flex: 1;
			margin-left: 10upx;
			height: 154upx;
			border: 1px solid rgba(255, 255, 255, 0);
			font-size: 72upx;
		}
	}
}
.balance{
	padding: 0 46upx;
	height: 96upx;
	line-height: 96upx;
	font-size: 28upx;
	color: rgba(102, 102, 102, 1);
	border: 1px solid rgba(255, 255, 255, 0);
	background-color: rgba(255, 255, 255, 1);
}
.next{
	position: fixed;
	left: 32upx;
	bottom: 128upx;
	width: 686upx;
	height: 96upx;
	line-height: 96upx;
	border-radius: 6upx;
	background-color: rgba(164, 202, 238, 1);
	color: rgba(255, 255, 255, 1);
	font-size: 36upx;
	text-align: center;
	font-family: Arial;
	border: 1px solid rgba(255, 255, 255, 0);
}
</style>
