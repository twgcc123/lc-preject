<template>
	<view class="creat-hudong">
		<!-- 头部搜索 -->
		<view class="hudong-header" :style="[{paddingTop: hasNotchInScreen ? '88upx': '44upx'}]">
			<view class="haed">
				<text class="cancel" @tap="pageTo('/pages/assistant/assistant')">取消</text>
				<text class="title">修改活动</text>
				<!-- 				<text class="title" v-if="this.dataType !==''">创建{{this.dataType}}</text>
				<text class="title" v-else>创建活动</text> -->
				<text class="complete" @tap="complete">完成</text>
			</view>
		</view>

		<!-- 列表 -->
		<view class="container">
			<!-- 暖助对象 -->
			<view class="user-object">
				<view class="user-info">
					<image class="adva_imgs" src="/static/hudong/c2.jpg" mode=""></image>
					<view class="info-item">
						<view class="user_name">吴春江</view>
						<view class="user_id">广东吴彦祖 （ID：12349）</view>
					</view>
				</view>
				<view class="txts" @tap="pageTo('/pages/assistant/assistantPage/assistantCreateHudonglist')">变更队长</view>
			</view>

			<!-- 暖助类型 -->
			<view class="type-list">
				<view class="dcse">
					<text class="yuans"></text>
					<text>活动类型</text>
				</view>
			</view>

			<!-- 选择暖助分类 -->
			<view class="choose-list">
				<view class="dcse" @tap="pageTo('/pages/assistant/assistantPage/selectActivityType')">
					<image class="reat-icons" src="/static/assistant/cengji.svg" mode=""></image>
					<text>中国象棋</text>
				</view>
				<uni-icons class="search-icon" type="arrowright" color="#ACACAC" size="18"></uni-icons>
			</view>

			<!-- 添加活动的队长备注 -->
			<view class="add-note">
				<image class="reat-icons" src="/static/assistant/bianji.svg" mode=""></image>
				<view class="uni-textarea texts">
					<textarea class="text-area" v-model="textarea" placeholder-style="color:#bebebe" />
					</view>
			</view>
			
			<!-- 活动行程 -->
			<view class="time-picker">
				<view class="title">活动行程</view>
				<view class="time-choose">
					<view class="start-time">
						<view class="data-time">
							<text class="s1">04月24日</text>
							<text>周四</text>
						</view>
						<view class="">
							12:00
						</view>
					</view>
					<view class="arrow-right-tim">
						<image src="/static/assistant/arrow-right-time.svg" mode=""></image>
					</view>
					<view class="end-time">
						<view class="data-time">
							<text class="s1">04月24日</text>
							<text>周四</text>
						</view>
						<view class="">
							12:00
						</view>
					</view>
				</view>
			</view>
			
			<!-- 选择活动（签到）地址 -->
			<view class="address">
				<view class="address-list">
					<view class="list-top">
						<image class="reat-icons" src="/static/assistant/zuobiao.svg" mode=""></image>
						<view class="address-location">
							<!-- <text>选择活动(签到)地址</text> -->
							<input class="" type="text" v-model="inputLocation" value="" placeholder="选择活动(签到)地址"/>
							<text class="site-location">选址</text>
						</view>
					</view>
					<input class="list-bottom" type="text" v-model="inputAddress" value="" placeholder="输入具体活动地址"/>
				</view>
			</view>
			
			<!-- 限制人数 -->
			<view class="number-list">
				<view class="number-men">
					<image class="reat-icons" src="/static/assistant/renshu.svg" mode=""></image>
					<input class="men-input" v-model="inputMen" type="number"/>
				</view>
			</view>
			
			<!-- 不限队员性别 -->
			<view class="limit-list" style="border-top: none" @tap="pageTo('/pages/assistant/assistantPage/assistantCreateSexData')">
				<view class="dcse">
					<image class="reat-icons" src="/static/assistant/xingbie.svg" mode=""></image>
					<text style="color: #666666;">不限队员性别</text>
				</view>
				<uni-icons class="search-icon" type="arrowright" color="#ACACAC" size="18"></uni-icons>
			</view>
			
			<!-- 不限队员出生年份 -->
			<view class="limit-list" style="border-top: none" @tap="pageTo('/pages/assistant/assistantPage/assistantCreateYearData')">
				<view class="dcse">
					<image class="reat-icons" src="/static/assistant/nianfen.svg" mode=""></image>
					<text style="color: #666666;">不限队员出生年份</text>
				</view>
				<uni-icons class="search-icon" type="arrowright" color="#ACACAC" size="18"></uni-icons>
			</view>
			
			<!-- 负责助理 -->
			<view class=""  style="height: 24upx;background-color:#F3F3F3;;"></view>
			<view class="limit-list">
				<view class="dcse">
					<image class="reat-icons" src="/static/assistant/touxiang.svg" mode=""></image>
					<view class="zhu-li">
						<image class="adva_imgs" src="/static/hudong/c3.jpg" mode=""></image>
						<text class="zhuli-name">张秋菊（ID69866）</text>
					</view>
				</view>
				<uni-icons class="search-icon" type="arrowright" color="#ACACAC" size="18"></uni-icons>
			</view>
			
			<!-- 15分钟前，提醒负责助理 -->
			<view class=""  style="height: 24upx;background-color:#F3F3F3;;"></view>
			<view class="limit-list">
				<view class="dcse">
					<image class="reat-icons" src="/static/assistant/naoling.svg" mode=""></image>
					<text style="color: #666666;">15分钟前，提醒负责助理</text>
				</view>
				<uni-icons class="search-icon" type="arrowright" color="#ACACAC" size="18"></uni-icons>
			</view>
			
		</view>
	</view>
</template>

<script>
	import delinePicker from "@/components/lmg-picker-time/lmh-picker.vue";
	export default {
		name: "assistantCreateHudongDetail",
		components: {
			delinePicker,
		},
		props: {

		},
		data() {
			return {
				dataTypes:'',
				textarea:'成功参见此活动的用户，可以免费获得京东购物优惠卷...',
				inputLocation:'',
				inputMen:'20',
				inputAddress:'',
				datasTimes:"",
				datasWeek:"",
				dataHouer:"",
				// 获取当前时间
				newValueTime:"",
			}
		},
		onShow() {
			// uni.$on('dataType',function(data){
			// 	this.dataTypes = data.msg
			// 	console.log(this.dataType)
			// })
			// this.$refs.deadlines.show()
		},
		
		onLoad() {
			let newDatas = new Date();
			console.log(newDatas)
			this.newValueTime = newDatas.getFullYear() + "-" + (newDatas.getMonth() + 1) + "-" + newDatas.getDate();
			console.log(this.newValueTime)
		},
		
		updated() {},
		
		methods: {
			
			pageTo(url) {
				uni.navigateTo({
					url: url
				})
			},
			

			// 弹出时间层
			deadlineTime(){
				console.log("点击了截至时间")
				// let _this = this
				this.$refs.deadline.show()
			},
			
			// 获取时间
			onConfirm(e){
			   console.log(e.value)
			   
			   // 根据时间转换成 年月日
			   let time = e.value
			   
			   // 获取当前时间
			   let dataDay = time.split(" ")[0] 	// 2020-04-22
			   // console.log(dataDay)
			   
			   let dataHouer = time.split(" ")[1] 	// 19:50:50
			   this.dataHouer = dataHouer
			   
			   let timearr = dataDay.replace(" ", ":").replace(/\:/g, "-").split("-");
			   console.log(timearr)
			   let timestr = Number(timearr[1])+ "月" + timearr[2]+"日";
			   this.datasTimes = timestr 
			   
			   // 根据获取时间转换成星期几
			   let dateArray = dataDay.split("-");
			   console.log(dateArray)
			   let dates = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
			   let week = "星期" + "日一二三四五六".charAt(dates.getDay());
			   this.datasWeek = week 
			},
			
			// 隐藏时间日期
			onCancel(){
				this.$refs.deadline.hide()
			}
				
		},
	};
</script>

<style lang="less" scoped>
	.creat-hudong {
		font-family: PingFangSC-regular;
		margin-bottom: 100upx;
		.hudong-header {
			position: sticky;
			top: 0;
			padding-top: 88upx;
			background-color: #FFFFFF;
			z-index: 999;
			.haed {
				height: 90upx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				padding: 0 38upx 0 40upx;
				.title {
					color: rgba(51, 51, 51, 1);
					font-size: 36upx;
					font-weight: bold;
					flex: 1;
					text-align: center;
				}
				.cancel {
					color: rgba(51, 51, 51, 1);
					font-size: 32upx;
				}
				.complete {
					color: rgba(170, 170, 170, 1);
					font-size: 32upx;
				}
			}
		}
		
		// 主体内容
		.container{
			background-color: #FFFFFF;
			// 暖助对象
			.adva_imgs{
				width: 80upx;
				height: 80upx;
				border-radius: 8upx;
			}
			
			.user-object{
				border-top: 24upx solid #F3F3F3;
				display: flex;
				align-items: center;
				padding: 0 40upx;
				height: 128upx;
				.user-info{
					flex: 1;
					display: flex;
					align-items: center;
					.info-item{
						flex: 1;
						margin-left: 20upx;
						.user_name{
							color: rgba(102, 102, 102, 1);
							font-size: 32upx;
						}
						.user_id{
							color: rgba(153, 153, 153, 1);
							font-size: 24upx;
						}
					}
				}
				.txts{
					font-weight: 400;
					font-size: 28upx;
					color: #ff9a23;
				}
			}
			
			// 暖助类型
			.type-list{
				border-top: 24upx solid #F3F3F3;
				padding: 0 40upx;
				height: 112upx;
				background-color: #FFFFFF;
				color: #ff3a30;
				font-size: 34upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.dcse{
					text{
						display: inline-block;
					}
					.yuans{
						width: 24upx;
						height: 24upx;
						background-color: #ff3a30;
						margin-right: 36upx;
						border-radius: 50%;
					}
				}
			}
			
			// 选择暖助分类
			.choose-list{
				border-top: 24upx solid #F3F3F3;
				padding: 0 40upx;
				height: 112upx;
				color: #999999;
				font-size: 34upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.dcse{
					display: flex;
					align-items: center;
					text{
						display: inline-block;
					}
				}
			}
			
			// 添加活动的队长备注
			.add-note{
				box-sizing: border-box;
				height:260upx;
				padding-top: 40upx;
				border-top: 1upx solid #F3F3F3;
				margin-left: 40upx;
				padding-right: 40upx;
				display: flex;
				overflow: hidden;
				.texts{
					display: table-cell;
					padding-bottom: 40upx;
					overflow: hidden;
				}
				.text-area{
					height: 100%;
				}
				
			}
			
			// 活动行程时间选择
			.time-picker{
				.title{
					height: 80upx;
					line-height: 80upx;
					background-color: #f3f3f3;
					padding: 0 40upx;
					font-family: PingFangSC-regular;
				}
				.time-choose{
					padding: 0 40upx;
					height: 126upx;
					display: flex;
					flex-flow: row;
					align-items: center;
					font-size: 32upx;
					.start-time,.end-time{
						flex: 1;
						text-align: left;
						.data-time{
							.s1{
								margin-right: 16upx;
							}
						}
					}
					.arrow-right-tim{
						height: 48upx;
						width: 48upx;
						margin-right: 40upx;
						image{
							height: 48upx;
							width: 48upx;
						}
					}
					
				}	
			}
		
			// .选择活动（签到）地址
			.address{
				border-top: 24upx solid #F3F3F3;
				.address-list{
					margin-left: 40upx;
					padding-right: 40upx;
					.list-top{
						display: flex;
						align-items: center;
						justify-content: space-between;
						height: 100upx;
						border-bottom: 1upx solid #f3f3f3;
						.address-location{
							flex: 1;
							display: flex;
							justify-content: space-between;
							align-items: center;
							.site-location{
								color: #ffae02;
								font-size: 32upx;
							}
						}
					}
					.list-bottom{
						height: 100upx;
						line-height: 100upx;
						padding-left: 74upx;
					}	
				}
			}
			
			// 限定队员信息
			.limit-list,.number-men{
				margin-left: 40upx;
				padding-right: 40upx;
				height: 112upx;
				color: #999999;
				font-size: 34upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1upx solid #f3f3f3;
			}
			
			// 队伍人数限定
			.number-list{
				border-top: 24upx solid #F3F3F3;
				.number-men{
					.men-input{
						width: 100%;
						color: #CCCCCC;
					}
				}
			}
			
			// 不限队员性别  限队员出生年份 
			.limit-list{
				.dcse{
					display: flex;
					align-items: center;
					text{
						display: inline-block;
					}
					.zhu-li{
						display: flex;
						align-items: center;
						.zhuli-name{
							margin-left: 40upx;
						}
					}
				}
			}
		}
		
		// 头像设置
		.reat-icons{
			height: 38upx;
			width: 38upx;
			margin-right: 36upx;
		}
	}
</style>

