<template>
	<view class="guset">
		<view class="add-dcse">
			<view class="title">{{duset.title}}</view>
			<view class="content">{{duset.content}}</view>
		</view>
		<view class="add-guset">
			<text class="add-text">添加房客信息</text>
			<view class="add-icon" @tap="addGuset">
				<uni-icons type="plusempty" color="#3F3F3F 100%" size="22"></uni-icons>
			</view>
		</view>
		<view class="gusst-item">
			<scroll-view 
				:scroll-top="scrollTop" 
				scroll-y="true" 
				class="scroll-Y" 
				@scrolltoupper="upper" 
				@scrolltolower="lower"
				@scroll="scroll"
			>
				<view class="scroll-view-item">
					<view class="item" v-for="(item,index) in gusstInfo" :key="index">
						<image class="check-img" @tap="checked(item)" :src="item.status == true ? '/static/youju/gou4.svg':'/static/youju/gou3.svg'"></image>
						<view class="info">
							<view class="name">{{item.username}}</view>
							<view class="idcard">{{item.type}} • {{item.id_number }} </view>
						</view>
						<view class="edit">
							<uni-icons type="arrowright" color="#cccccc" size="18"></uni-icons>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="save">
			<text class="save-total"> 已选: {{getTotal}} </text>
			<button class="save-btn" @tap="saveGuset">确认保存</button>
		</view>
	</view>
</template>

<script>
import uniIcons from "@/components/uni-icons/uni-icons.vue"
export default {
	name:"roomDetailAddGuest",
	components: {uniIcons},
	data() {
		return {
			duset:{	
				"id":"001",
				"title":"房客信息",
				"content":"根据有关部门规定，所有在中国预订住宿的旅客都必须提供以下信息。作为中国居民，您的信息将由爸妈都好存储并处理。完成本次预订，您同意爸妈都好向中国政府披露您的信息而不向您提供进一步通知。"
			},
			gusstInfo:[
				{
					"id":"01",
					"status":true,
					"idtype":"身份证",
					"name":"梅西",
					"idcard":"450866666600044636"
				},
				{
					"id":"02",
					"status":false,
					"idtype":"户口簿",
					"name":"贝克汉姆",
					"idcard":"4508811698014611"
				},
				{
					"id":"03",
					"status":true,
					"idtype":"身份证",
					"name":"李白",
					"idcard":"1102102000103366"
				},
			],
			scrollTop: 0,
			old: {
			    scrollTop: 0
			}
		};
	},
	methods:{
		//添加乘客
				async addPassengers(id){
					let param = this.$helper.setConfig('&id=' + id);
					console.log(param.signature,param.timestamp)
					let res = await this.$http.request({
						method: 'post',
						url: '/index/Community/get_house_particulars',
						header: {
						'content-type': 'application/json'
						},
						data: {
							signature: param.signature,
							timestamp: param.timestamp,
							id: id,
						}
					});
					if(res.state == 10000){
					
					
				}
			},
		upper: function(e) {
			// console.log(e)
		},
		lower: function(e) {
			// console.log(e)
		},
		scroll: function(e) {
			// console.log(e)
			this.old.scrollTop = e.detail.scrollTop
		},
		goTop: function(e) {
			this.scrollTop = this.old.scrollTop
			this.$nextTick(function() {
				this.scrollTop = 0
		});
		// uni.showToast({
		// 		icon:"none",
		// 		title:"纵向滚动 scrollTop 值已被修改为 0"
		// 	})
		},
		
		// 选中客人信息
		checked(item){
			item.status = !item.status
		},
		
		goBack(){
			uni.navigateBack()
		},
		
		// 保存客人信息
		saveGuset(){
			var obj = []
			this.gusstInfo.forEach(item =>{
				if(item.status == true){
					obj.push(item)
				}
			})
			console.log(obj)
			if(obj.length != 0) {
				uni.setStorage({
				    key: 'storage_saveinfo',
				    data: obj,
				    success: function () {
				        console.log('success');
						uni.showLoading({title: '加载中'})
				    },
				});	
				uni.navigateTo({url:"./roomDetail"})
			}
			uni.showToast({title: '至少选择一位',duration: 2000});
		},
		// 怎加客人信息
		addGuset(){
			uni.navigateTo({url:"/pages/found/youju/roomDetailAddGuestInfo"})
		}
	},
	filters: {
		hideIdcard(val) {
			return `${val.substring(0,6)}******${val.substring(val.length-4)}`
		}
	},
   computed:{
		getTotal() {
			let count = 0;
			this.gusstInfo.forEach(item => {
				if (item.status === true) {
					count++;
				}
			})
			return count;
		},
	},
	onReady() {
		
	},
	onLoad(option) {
		console.log('88888',option)
		setTimeout(function () {
		    uni.hideLoading();
		}, 300);
		var that = this
		uni.getStorage({
			key: 'tenantInformation',
			success: function (res) {
				console.log(res);
				that.gusstInfo=res.data.lodger
				that.gusstInfo.forEach((item)=>{
					item.status==false
				})
				
				
			}
		});
		uni.getStorage({
		    key: 'storage_info',
		    success: function (res) {
		        console.log(res.data);
				let infos = res.data
				that.gusstInfo.push(infos)
		    }
		});
	
	}
}
</script>

<style lang="less" scoped>
	.guset{background-color: #FFFFFF;}
	.add-dcse{
		padding: 20upx 24upx;
		.title{
			color: rgba(68, 68, 68, 1);
			font-size: 50upx;
		}
		.content{
			margin-top: 15upx;
			color: rgba(51, 51, 51, 1);
			font-size: 26upx;
		}
	}
	.add-guset{
		display: flex;
		justify-content: space-between;
		padding: 30upx;
		border-top:1upx solid #DDDDDD;
		border-bottom:1upx solid #DDDDDD;
		.add-text{
			color: rgba(236, 154, 68, 1);
			font-size: 30upx;
		}
		.add-icon{
			color: rgba(236, 154, 68, 1);
			height: 46upx;
			width: 46upx;
			border: 2upx solid rgba(236, 154, 68, 1);
			text-align: center;
			line-height: 41upx;
			border-radius: 50%;
		}
	}
	.gusst-item{
		// height: 400upx;
		// overflow: hidden;
		// margin-top: 5upx;
		.scroll-Y{
			height: 100%;
			.item{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20upx;
				margin-left: 24upx;
				border-bottom: 1upx solid #DDDDDD;
				.check-img{
					height: 30upx;
					width: 30upx;
				}
				.info{
					margin-right: 14upx;
					flex:1;
					padding-left: 14upx;
					text-align: left;
					.name{
						color: #444444;
						font-size: 28upx;
						font-weight: 500;
						margin-bottom: 5upx;
					}
					.idcard{
						color: #333333;
						font-size: 26upx;
					}
				}
				.edit{
					color: #AAAAAA;
				}
			}
		}	
	}
	.save{
		background-color: #FFFFFF;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items:center;
		padding: 30upx;
		border-top: 1upx solid #DDDDDD;
		.save-total{
			color: #333333;
			font-size: 26upx;
			flex: 1;
		}
		.save-btn{
			padding: 15rpx 40rpx;
			border-radius: 2upx;
			background-color: rgba(236, 154, 68, 1);
			color: rgba(255, 255, 255, 1);
			font-size: 24upx;
		}	
	}
</style>
