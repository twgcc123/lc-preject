<template>
	<view class="center-footer">
		<view class="fleft" v-if="order_left.length != ''">{{order_left}}</view>
		<view class="fright" v-if="order_right != ''">{{order_right}}</view>
	</view>
</template>

<script>
export default{
	name:"roomOrderCenterFooter",
	props:{
		order_left: {
			type: String,
			default: ''
		},
		order_right: {
			type: String,
			default: ''
		},
	},
	data(){
		return{}
	}
}
	
</script>
<style lang="less" scoped>
.center-footer{
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	height: 120upx;
	border: 1px solid rgba(255, 255, 255, 0);
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	box-sizing: border-box;
	padding: 0 40upx;
	.fleft,.fright{
		width: 160upx;
		height: 60upx;
		line-height: 60upx;
		border-radius: 4upx;
		background-color: rgba(255, 103, 0, 1);
		color: rgba(255, 255, 255, 1);
		font-size: 28upx;
		text-align: center;
		font-family: Arial;
		border: 1px solid rgba(255, 255, 255, 0);
	}
	.fleft{
		background-color: rgba(255, 255, 255, 1);
		color: rgba(102, 102, 102, 1);
		border: 1px solid rgba(102, 102, 102, 1);
	}
	.fright{
		margin-left: 20upx;
		background-color: rgba(255, 103, 0, 1);
		color: rgba(255, 255, 255, 1);
		border: 1px solid rgba(255, 255, 255, 0);
	}
}
</style>
