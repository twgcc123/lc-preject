<template>
	<view class="recharge">
		<view class="container">
			<view class="title">充值金额</view>
			<view class="withdrawal">
				<text>￥</text>
				<input type="text" value="" autofocus="autofocus"/>
			</view>
			<view class="next">下一步</view>
		</view>
	</view>
</template>

<script>

export default{
	name:"mineSunTechCardRecharge",
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
	box-sizing: border-box;
	padding: 32upx;
	height: 244upx;
	color: rgba(51, 51, 51, 1);
	background-color: rgba(255, 255, 255, 1);
	border: 1px solid rgba(255, 255, 255, 0);
	font-family: PingFangSC-bold;
	background-color: #FFFFFF;
	.title{
		font-size: 32upx;
	}
	.withdrawal{
		display: flex;
		align-items: center;
		justify-content: space-between;
		text{
			width: 60upx;
			height: 42px;
			color: rgba(51, 51, 51, 1);
			font-size: 30px;
			font-family: PingFangSC-regular;
		}
		input{
			flex: 1;
			margin-left: 10upx;
			height:  154upx;
			border: 1px solid rgba(255, 255, 255, 0);
			font-size: 72upx;
		}
	}
	.next{
		position: fixed;
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
}
</style>
