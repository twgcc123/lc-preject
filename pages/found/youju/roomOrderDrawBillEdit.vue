<template>
<view class="">
	<view class="container">
			<view class="txt1">
				<view class="title"><text class="name">发票备注说明</text></text><text class="number">{{txt1Val}}/50</text></view>
				<textarea v-model="text1s" maxlength="50" class="txt" value="" @input="textInput" placeholder="填写备注说明" />
			</view>
			<view class="txt2">
				<view class="title"><text class="name">地址和电话</text><text class="number">{{txt2Val}}/50</text></view>
				<textarea v-model="text2s" maxlength="50" class="txt" value=""  @input="textInput" placeholder="填写地址和电话" />
			</view>
			<view class="txt3">
				<view class="title"><text class="name">地址和电话</text><text class="number">{{txt3Val}}/50</text></view>
				<textarea v-model="text3s" maxlength="50" class="txt" value=""  @input="textInput" placeholder="填写地址和电话" />
			</view>
			<view class="sbmits">确定</view>
	 </view> 
</view>
</template>

<script>
    export default {
		name:"roomOrderDrawBillEdit",
		components:{},
        data() {
           return{
			   txt1Val:0,
			   txt2Val:0,
			   txt3Val:0,
			   text1s:"",
			   text2s:"",
			   text3s:"",
		   }
        },
        methods: {
			textInput(){
				this.txt1Val = this.text1s.length;
				this.txt2Val = this.text2s.length;
				this.txt3Val = this.text3s.length;
			},
			sbmits(){
				console.log("等待数据")
			},
        }
    }
</script>

<style lang="less" scoped>
.txt1,.txt2,.txt3{
	margin-top: 20upx;
	box-sizing: border-box;
	height: 268upx;
	color: #333;
	background-color: #FFFFFF;
	.title{
		height: 90upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 40upx;
		.name{
			color: rgba(51, 51, 51, 1);
			font-size: 32upx;
		}
		.number{
			color: rgba(102, 102, 102, 1);
			font-size: 26upx;
		}
	}
	.txt{
		padding: 0 40upx;
		height: 142upx;
		color: rgba(170, 170, 170, 1);
		font-size: 28upx;
		font-family: Microsoft Yahei;
		border: 1px solid rgba(255, 255, 255, 0);
	}
}

.sbmits{
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100upx;
	line-height: 100upx;
	border-radius: 8upx;
	background-color: rgba(74, 74, 74, 1);
	color: rgba(255, 255, 255, 1);
	font-size: 32upx;
	text-align: center;
	font-family: Arial;
	border: 1px solid rgba(255, 255, 255, 0);
}
</style>
