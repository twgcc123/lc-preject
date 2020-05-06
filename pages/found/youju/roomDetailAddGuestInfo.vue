<template>
<view class="add-guset-info">
	<view class="container">
		<view class="add-tip">
			<view class="title">新增入住人</view>
			<view class="dcse">请如实填写入住人信息。</view>
		</view>
		<view class="add-info">
		<!-- 	<form @submit="formSubmit" @reset="formReset"> -->
				 <view class="uni-list">
					 <view class="uni-list-cell">
						 <view class="uni-list-cell-left">身份证件类型</view>
						 <view class="uni-list-cell-db">
							 <picker @change="bindPickerChange" :value="index" :range="array">
								 <view class="uni-input">{{array[index]}}</view>
							 </picker>
						 </view>
					 </view>
				 </view>
				<view class="uni-form-item uni-column">
					<view class="idnumber">身份证号</view>
					<input class="uni-input" @confirm="idnumberF" confirm-type="done" type="idcard" placeholder="请输入身份证号" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="idname">证件中的姓名</view>
					<input class="uni-input" @confirm="idnameF" confirm-type="done" placeholder="与身份证件姓名一致" />
				</view>
				<view class="submit" @tap="saveinfo">保存</view>
					<!-- <button form-type="submit" class="submit">保存</button> -->
			<!-- </form> -->
		</view>
	</view>
</view>
</template>

<script>

export default{
	name:"roomDetailAddGuestInfo",
	data(){
		return{
			title: '证件类型',
			index:0,
			array: ['身份证', '户口簿', '驾驶证', '护照','其他'],
			idtype:"身份证",
			idnumber:"",
			idname:"",
		}
	},
	methods:{
		bindPickerChange: function(e) {
			this.index = e.target.value
			const types = e.target.value
			switch (true) {
			    case types === "0":
			        this.idtype = "身份证";
			        break;
			    case types === "1":
			        this.idtype = "户口簿";
			        break;
			    case types === "2":
			         this.idtype = "驾驶证";
			        break;
				case types === "3":
				     this.idtype = "护照";
				    break;	
			    default:
			        this.idtype = "其他";
			        break;
			}
		},
		idnumberF(event){
			this.idnumber = event.detail.value
		},
		idnameF(event){
			this.idname = event.detail.value
		},
		saveinfo(){
			if (this.idtype && this.idnumber != '' && this.idname != '') {
				// const date = new Date();
				let info = {
					"id":new Date(),
					"idtype": this.idtype,
					"name":this.idname,
					"idcard":this.idnumber,
					"status":true,
				}
				uni.setStorage({
				    key: 'storage_info',
				    data: info,
				    success: function () {
				        console.log('success');
						uni.showLoading({title: '加载中'})
				    },
				});	
				uni.navigateTo({
					url: "/pages/found/youju/roomDetailAddGuest"
				})
			}
		}
	},
	computed: {
	  
	},
    onLoad () {
   
    }
}
</script>

<style lang="less" scoped>
	.add-guset-info{
		background-color: #FFFFFF;
		height: 100vh;
		font-family: PingFangSC-bold;
		.go-back{
			height: 60px;
			line-height: 60px;
			margin-top: 10upx;
			margin-left: 40upx;
		}
		.container{
			padding: 20upx 48upx;
			.add-tip{
				margin-top: 20upx;
				.title{
					color: rgba(68, 68, 68, 1);
					font-size: 28px;
				}
				.dcse{
					margin-top: 20upx;
					color: rgba(51, 51, 51, 1);
					font-size: 32upx;
				}		
			}
			.add-info{
				margin-top: 48upx;
				.uni-form-item,.uni-list-cell{
					border-bottom: 1px solid #DDDDDD;
					padding: 40upx 0;
					.idnumber,.idname,.uni-list-cell-left{
						margin-bottom: 14upx;
						color: rgba(51, 51, 51, 1);
						font-size: 28upx;
					}
					.uni-input{
						color: rgba(170, 170, 170, 1);
						font-size: 36upx;
					}
				}
				.submit{
					margin-top: 50upx;
					text-align: center;
					width: 180upx;
					height: 80upx;
					line-height: 80upx;
					border-radius: 4upx;
					background-color: rgba(51, 51, 51, 1);
					color: rgba(255, 255, 255, 1);
					font-size: 32upx;
					font-family: Arial;
					border: 1upx solid rgba(255, 255, 255, 0);
				}	
			}
		}
	}
</style>
