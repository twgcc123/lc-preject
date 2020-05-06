<template>
<view class="feedback">	
	<view class="container">
		<view class="contxt">
			<textarea v-model="text" maxlength="99" class="txt" value="" @input="textInput" placeholder="填写备注说明" />
			<view class="count">{{txtVal}} / 99</view>
		</view>
		<view class="ontact">
			<text>联系方式</text>
			<input type="text" value="" placeholder="请输入联系方式"/>
		</view>
		<view class="sbmits">提交</view>
	</view>
</view>
</template>

<script>
    export default {
		name:"mineFeedback",
		components:{},
        data() {
           return{
			   txtVal:0,
			   text:"",
		   }
        },
        methods: {
			textInput(){
				this.txtVal = this.text.length;
			},
			sbmits(){
				console.log("等待数据")
			},
        }
    }
</script>

<style lang="less" scoped>
.contxt{
	background-color: #FFFFFF;
	padding:40upx 32upx;
	.txt{
		box-sizing: border-box;
		padding: 20upx;
		width: 686upx;
		height: 392upx;
		color: rgba(170, 170, 170, 1);
		font-size: 32upx;
		font-family: Microsoft Yahei;
		border: 1px solid rgba(234, 234, 234, 1);
	}
	.count{
		height: 80upx;
		line-height: 80upx;
		color: rgba(51, 51, 51, 1);
		font-size: 28ux;
		text-align: right;
		font-family: Arial;
		border: 1px solid rgba(255, 255, 255, 0);
	}
}
.ontact{
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 20upx;
	padding:0 32upx;
	height: 88ux;
	line-height:88upx;
	background-color: #FFFFFF;
	border: 1px solid rgba(255, 255, 255, 0);
	text{
		width: 112upx;
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	input{
		flex: 1;
		color: rgba(136, 136, 136, 1);
		font-size: 28upx;
		margin-left: 40upx;
		font-family: Microsoft Yahei;
		border: 1px solid rgba(255, 255, 255, 0);
	}
}

.sbmits{
	margin: 60upx auto 20upx;
	width: 686upx;
	height: 88upx;
	line-height: 88upx;
	border-radius: 8upx;
	background-color: rgba(254, 94, 16, 1);
	color: rgba(255, 255, 255, 1);
	font-size: 32upx;
	text-align: center;
	font-family: Arial;
	border: 1px solid rgba(255, 255, 255, 0);
}
</style>
