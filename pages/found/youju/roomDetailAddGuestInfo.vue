<template>
<view class="add-guset-info">
	<view class="container">
		<view class="add-tip">
			<view class="title">{{EditorsSave?'修改入住人':'新增入住人'}}</view>
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
					<input class="uni-input"  v-model="identity.idnumber"  @input="idnumberF" confirm-type="done" type="idcard" placeholder="请输入身份证号" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="idname">证件中的姓名</view>
					<input class="uni-input" v-model="identity.idname" @input="idnameF" confirm-type="done" placeholder="与身份证件姓名一致" />
				</view>
				<view class="submit" @tap="saveinfo(EditorsSave?'编辑':'新增')">保存</view>
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
			array: ['身份证',],
			identity:{
				idnumber:'',
				idname:'',
			},
			idtype:"身份证",
			xgID:null,
			EditorsSave:false,
			amendID:''
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
			}
		},
		idnumberF(event){
			console.log(event)
			this.identity.idnumber = event.detail.value

		},
		idnameF(event){
			console.log(event)
			this.identity.idname = event.detail.value

		},
		async saveinfo(data){
			console.log(data)
			if (this.identity.idnumber != '' && this.identity.idname != '') {
				let user=uni.getStorageSync('USERINFO')
				let token=user.token
				if(data=='编辑'){
					let param = this.$helper.setConfig('&token=' + token + '&id_number=' + this.identity.idnumber+'&type=1'+'&username='+this.identity.idname+'&id='+this.amendID);
						let res = await this.$http.request({
							method: 'post',
							url: '/index/Lodger/set_lodger',
							data: {
								signature: param.signature,
								timestamp: param.timestamp,
								token:token,
								id_number:this.identity.idnumber,
								type: '1',
								username:this.identity.idname,
								id:this.amendID
							
							}
						});
						console.log(res)
						if(res.state == 10000){
							
							  uni.navigateTo({
							  	url: "/pages/found/youju/roomDetailAddGuest"
							  })
						
					}
				}else{
					console.log(122121)
					let param = this.$helper.setConfig('&token=' + token + '&id_number=' + this.identity.idnumber+'&type=1'+'&username='+this.identity.idname);
						let res = await this.$http.request({
							method: 'post',
							url: '/index/Lodger/set_lodger',
							data: {
								signature: param.signature,
								timestamp: param.timestamp,
								token:token,
								id_number:this.identity.idnumber,
								type: '1',
								username:this.identity.idname,
							
							}
						});
						console.log(res)
						if(res.state == 10000){
							
							  uni.navigateTo({
							  	url: "/pages/found/youju/roomDetailAddGuest"
							  })
						
					}
				}
							
						   
					
				
			}
		}
	},
	computed: {
	  
	},
	onUnload() {
		 uni.removeStorageSync('identity_information');
	},
	onHide(){
		 uni.removeStorageSync('identity_information');
	},
	
	created() {
	
	},
    onLoad () {
	if(uni.getStorageSync('identity_information')){
		console.log(uni.getStorageSync('identity_information'))
		this.EditorsSave=true
		var identity_information=uni.getStorageSync('identity_information')
		this.amendID=identity_information.id
	   this.$set(this.identity,'idnumber',identity_information.id_number)
	   this.$set(this.identity,'idname',identity_information.username)
	}else{
		this.EditorsSave=false
    }
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
