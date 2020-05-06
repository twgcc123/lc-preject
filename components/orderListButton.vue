<template>
	<view class="c-button">
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
.c-button{
	display: flex;
	align-items: center;
	justify-content: flex-end;
	box-sizing: border-box;
	.fleft,.fright{
		width: 156upx;
		height: 60upx;
		line-height: 60upx;
		border-radius: 8upx;
		font-size: 28upx;
		text-align: center;
		font-family: Arial;
		background-color: rgba(255, 255, 255, 1);
	}
	.fleft{
		color: rgba(102, 102, 102, 1);
		border: 1px solid rgba(102, 102, 102, 1);
	}
	.fright{
		margin-left: 20upx;
		color: #FF8F43;
		border: 1px solid  #FF8F43;
	}
}
</style>

