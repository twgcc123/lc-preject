<template>
	<view class="creat-hudong">
		<!-- 头部搜索 -->
		<view class="hudong-header" :style="[{ paddingTop: hasNotchInScreen ? '88upx' : '44upx' }]">
			<view class="haed">
				<text class="cancel" @tap="pageTo('/pages/assistant/assistant')">取消</text>
				<text class="title">创建活动</text>
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
				<view class="txts">TA是暖助对象</view>
			</view>

			<!-- 暖助类型 -->
			<view class="type-list" @tap="pageTo('/pages/assistant/assistantPage/assistantCreateHudonglist2Type')">
				<view class="dcse">
					<text class="yuans"></text>
					<text>{{ hudongdataTypes }}</text>
				</view>
				<uni-icons class="search-icon" type="arrowright" color="#ACACAC" size="18"></uni-icons>
			</view>

			<!-- 选择暖助分类 -->
			<view class="choose-list" @tap="pageTo('/pages/assistant/assistantPage/selectHuoDongType')">
				<view class="dcse">
					<image class="reat-icons" src="/static/assistant/cengji.svg" mode=""></image>
					<text>{{ HuoDongdesc.text }}</text>
				</view>
				<uni-icons class="search-icon" type="arrowright" color="#ACACAC" size="18"></uni-icons>
			</view>

			<!-- 添加活动的队长备注 -->
			<view class="add-note">
				<image class="reat-icons" src="/static/assistant/bianji.svg" mode=""></image>
				<view class="uni-textarea texts">
					<textarea class="text-area" v-model="textarea" placeholder-style="color:#bebebe" placeholder="添加活动的队长备注,所有人可见" />
				</view>
			</view>

			<!-- 活动行程 -->
			<view class="time-picker">
				<view class="title">活动行程</view>
				<view class="time-choose">
					<view class="start-time" @tap="startTimesc">
						<view class="data-time">
							<text class="s1">{{ startDatasTimes }}</text>
							<text>{{ startDatasWeek }}</text>
						</view>
						<view class="">{{ startDataHouer }}</view>
					</view>
					<view class="arrow-right-tim"><image src="/static/assistant/arrow-right-time.svg" mode=""></image></view>
					<view class="end-time" @tap="endTimesc">
						<view class="data-time">
							<text class="s1">{{ endDatasTimes }}</text>
							<text>{{ endDatasWeek }}</text>
						</view>
						<view class="">{{ endDataHouer }}</view>
					</view>
				</view>
			</view>

			<!-- 报名截止时间 -->
			<view class="deadline">
				<view class="deadline-time" @tap="deadlineTime">
					<view class="">报名截止时间</view>
					<view class="time-info">
							<text class="datas">{{ datasTimes }}</text>
							<text class="weeks">{{ datasWeek }}</text>
							<text class="times">{{ dataHouer }}</text>
						<uni-icons class="search-icon" type="arrowright" color="#ACACAC" size="16"></uni-icons>
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
							<input class="" type="text" v-model="inputLocation" value="" placeholder="选择活动(签到)地址" />
							<text class="site-location">选址</text>
						</view>
					</view>
					<input class="list-bottom" type="text" v-model="inputAddress" value="" placeholder="输入具体活动地址" />
				</view>
			</view>

			<!-- 线下支付 -->
			<view class="address">
				<view class="address-list">
					<view class="list-top">
						<image class="reat-icons" src="/static/assistant/qian.svg" mode=""></image>
						<view class="address-location">
							<!-- <text>选择活动(签到)地址</text> -->
							<text :class="{ 'active-switch': activeSwitch }">无需线下支付互联网费用</text>
							<switch checked @change="switchChange" color="#00e266" />
						</view>
					</view>
					<view class="money-fill">
						<text>￥</text>
						<input type="text" ref="inputMoney" v-model="inputMoney" value="" :disabled="activeSwitch" class="input-money" />
					</view>
				</view>
			</view>

			<!-- 限制人数 -->
			<view class="number-list">
				<view class="number-men">
					<image class="reat-icons" src="/static/assistant/renshu.svg" mode=""></image>
					<input class="men-input" v-model="inputMen" type="number" placeholder="队伍人数限定" />
				</view>
			</view>

			<!-- 不限队员性别 -->
			<view class="limit-list" style="border-top: none" @tap="pageTo('/pages/assistant/assistantPage/assistantCreateSexData')">
				<view class="dcse">
					<image class="reat-icons" src="/static/assistant/xingbie.svg" mode=""></image>
					<text style="color: #666666;">{{ gender }}</text>
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
		</view>

		<!-- 活动开始时间 -->
		<deline-picker
			mode="date"
			startYear="2019"
			endYear="2030"
			:current="true"
			fields="minute"
			@confirm="onConfirm1($event, 'date')"
			@cancel="onCancel1"
			:value="newValueTime"
			:disabled-after="false"
			ref="startTimesc"
		></deline-picker>
		
		<!-- 活动结束时间 -->
		<deline-picker
			mode="date"
			startYear="2019"
			endYear="2030"
			:current="true"
			fields="minute"
			@confirm="onConfirm2($event, 'date')"
			@cancel="onCancel2"
			:value="newValueTime"
			:disabled-after="false"
			ref="endTimesc"
		></deline-picker>
		
		<!-- 截至活动时间 -->
		<deline-picker
			mode="date"
			startYear="2019"
			endYear="2030"
			:current="true"
			fields="minute"
			@confirm="onConfirm($event, 'date')"
			@cancel="onCancel"
			:value="newValueTime"
			:disabled-after="false"
			ref="deadline"
		></deline-picker>
	</view>
</template>

<script>
import delinePicker from '@/components/lmg-picker-time/lmh-picker.vue';
export default {
	name: 'assistantCreateHudongDetail',
	components: {
		delinePicker
	},
	props: {},
	data() {
		return {
			textarea: '',
			inputLocation: '',
			inputMen: '',
			inputAddress: '',
			inputMoney: 0,
			activeSwitch: false,
			money: 199,
			startDatasTimes:'',
			endDatasTimes:'',
			datasTimes: '',
			startDatasWeek:'',
			endDatasWeek:'',
			datasWeek: '',
			startDataHouer:'',
			endDataHouer:'',
			dataHouer: '',
			// 获取当前年月日
			newValueTime: '',
			// 选择互动类型
			hudongdataTypes: '选择互动类型',
			// 选择活动类型
			HuoDongdesc: {
				text: '选择活动类型'
			},
			// 性别
			gender: '不限队员性别'
		};
	},
	onShow() {},

	onLoad() {
		let newDatas = new Date();
		console.log(newDatas); // 获取当前时间  Sat May 09 2020 15:11:29 GMT+0800 (中国标准时间)
		let newTimes =
			newDatas.getFullYear() +
			'-' +
			this.zeroize(newDatas.getMonth() + 1) +
			'-' +
			this.zeroize(newDatas.getDate()) +
			' ' +
			this.zeroize(newDatas.getHours()) +
			':' +
			this.zeroize(newDatas.getMinutes());
		console.log(this.newValueTime); // 转变当前时间格式 2020-5-9 16:10
		this.newValueTime = newTimes;
		this.fillterTime(newTimes);
	},

	mounted() {
		// 选择活动类型
		uni.$on('HuoDongType', data => {
			this.HuoDongdesc = { ...data };
			console.log(this.HuoDongdesc);
		});
		// 性别选择
		uni.$on('sexType', data => {
			this.gender = data;
			console.log(this.gender);
		});
		// 互动类型
		let _this = this;
		uni.getStorage({
			key: 'huoDongdataType',
			success: function(res) {
				let dataTypes = res.data.value;
				_this.hudongdataTypes = dataTypes;
			}
		});
	},

	methods: {
		pageTo(url) {
			uni.navigateTo({
				url: url
			});
		},

		switchChange: function(e) {
			console.log(e.target.value);
			this.activeSwitch = !this.activeSwitch;
			if (e.target.value == false) {
				this.inputMoney = this.money;
			} else {
				this.inputMoney = 0;
				this.activeSwitch = false;
			}
		},

		// 弹出选择开始时间层
		startTimesc() {
			this.$refs.startTimesc.show();
		},
		
		// 弹出结束时间层
		endTimesc() {
			this.$refs.endTimesc.show();
		},
		
		// 弹出截止时间层
		deadlineTime() {
			this.$refs.deadline.show();
		},
		
		// 获取开始时间
		onConfirm1(e) {
			console.log(e.value);
			// 根据时间转换成 年月日
			let time = e.value;
			let dataDay = time.split(' ')[0]; // 2020-04-22
			// console.log(dataDay)
		
			// 截取时间
			let dataHouer = time.split(' ')[1]; // 19:50:50
			this.startDataHouer = dataHouer;
			// 转换成月日格式
			let timearr = dataDay
				.replace(' ', ':')
				.replace(/\:/g, '-')
				.split('-');
			console.log(timearr);
			let timestr = Number(timearr[1]) + '月' + timearr[2] + '日';
			this.startDatasTimes = timestr;
		
			// 根据获取时间转换成星期几
			let dateArray = dataDay.split('-');
			console.log(dateArray);
			let dates = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
			let week = '星期' + '日一二三四五六'.charAt(dates.getDay());
			this.startDatasWeek = week;
		},
		
		// 获取结束时间
		onConfirm2(e) {
			
			// 根据时间转换成 年月日
			let time = e.value;
			let dataDay = time.split(' ')[0]; // 2020-04-22
			// console.log(dataDay)
		
			// 截取时间
			let dataHouer = time.split(' ')[1]; // 19:50:50
			this.endDataHouer = dataHouer;
		
			// 转换成月日格式
			let timearr = dataDay
				.replace(' ', ':')
				.replace(/\:/g, '-')
				.split('-');
			console.log(timearr);
			let timestr = Number(timearr[1]) + '月' + timearr[2] + '日';
			this.endDatasTimes = timestr;
		
			// 根据获取时间转换成星期几
			let dateArray = dataDay.split('-');
			console.log(dateArray);
			let dates = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
			let week = '星期' + '日一二三四五六'.charAt(dates.getDay());
			this.endDatasWeek = week;
		},
		
		// 获取截止时间
		onConfirm(e) {
			console.log(e.value);
			// 根据时间转换成 年月日
			let time = e.value;
			let dataDay = time.split(' ')[0]; // 2020-04-22
			// console.log(dataDay)

			// 截取时间
			let dataHouer = time.split(' ')[1]; // 19:50:50
			this.dataHouer = dataHouer;

			// 转换成月日格式
			let timearr = dataDay
				.replace(' ', ':')
				.replace(/\:/g, '-')
				.split('-');
			console.log(timearr);
			let timestr = Number(timearr[1]) + '月' + timearr[2] + '日';
			this.datasTimes = timestr;

			// 根据获取时间转换成星期几
			let dateArray = dataDay.split('-');
			console.log(dateArray);
			let dates = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
			let week = '星期' + '日一二三四五六'.charAt(dates.getDay());
			this.datasWeek = week;
		},

		// 时间不足2位数 前面加0
		zeroize(obj) {
			if (obj < 10) {
				return '0' + obj;
			} else {
				return obj;
			}
		},

		// 时间过滤
		fillterTime(time) {
			// 获取当前时间
			let dataDay = time.split(' ')[0]; // 2020-04-22
			let dataHouer = time.split(' ')[1]; // 19:50:50
			
			// 转换成月日格式
			let timearr = dataDay
				.replace(' ', ':')
				.replace(/\:/g, '-')
				.split('-');
			console.log(timearr);
			let timestr = Number(timearr[1]) + '月' + timearr[2] + '日';
			
			// 根据获取时间转换成星期几
			let dateArray = dataDay.split('-');
			console.log(dateArray);
			let dates = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
			let week = '星期' + '日一二三四五六'.charAt(dates.getDay());
			
			this.datasTimes = timestr;
			this.datasWeek = week;
			this.dataHouer = dataHouer;
			
			this.startDatasTimes = timestr;
			this.startDatasWeek = week;
			this.startDataHouer = dataHouer;
			
			this.endDatasTimes = timestr;
			this.endDatasWeek = week;
			this.endDataHouer = dataHouer;
		},

		// 隐藏时间日期
		onCancel1() {
			this.$refs.startTimesc.hide();
		},
		// 隐藏时间日期
		onCancel2() {
			this.$refs.endTimesc.hide();
		},
		// 隐藏时间日期
		onCancel() {
			this.$refs.deadline.hide();
		}
	}
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
		background-color: #ffffff;
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
	.container {
		background-color: #ffffff;
		// 暖助对象
		.user-object {
			border-top: 24upx solid #f3f3f3;
			display: flex;
			align-items: center;
			padding: 0 40upx;
			height: 128upx;
			.user-info {
				flex: 1;
				display: flex;
				align-items: center;
				.adva_imgs {
					width: 80upx;
					height: 80upx;
					border-radius: 8upx;
				}
				.info-item {
					flex: 1;
					margin-left: 20upx;
					.user_name {
						color: rgba(102, 102, 102, 1);
						font-size: 32upx;
					}
					.user_id {
						color: rgba(153, 153, 153, 1);
						font-size: 24upx;
					}
				}
			}
			.txts {
				font-weight: 400;
				font-size: 28upx;
				color: rgb(51, 51, 51);
			}
		}

		// 暖助类型
		.type-list {
			border-top: 24upx solid #f3f3f3;
			padding: 0 40upx;
			height: 112upx;
			background-color: #ffffff;
			color: #ff3a30;
			font-size: 34upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.dcse {
				text {
					display: inline-block;
				}
				.yuans {
					width: 24upx;
					height: 24upx;
					background-color: #ff3a30;
					margin-right: 36upx;
					border-radius: 50%;
				}
			}
		}

		// 选择暖助分类
		.choose-list {
			border-top: 24upx solid #f3f3f3;
			padding: 0 40upx;
			height: 112upx;
			color: #999999;
			font-size: 34upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.dcse {
				display: flex;
				align-items: center;
				text {
					display: inline-block;
				}
			}
		}

		// 添加活动的队长备注
		.add-note {
			box-sizing: border-box;
			height: 260upx;
			padding-top: 40upx;
			border-top: 1upx solid #f3f3f3;
			margin-left: 40upx;
			padding-right: 40upx;
			display: flex;
			overflow: hidden;
			.texts {
				display: table-cell;
				padding-bottom: 40upx;
				overflow: hidden;
			}
			.text-area {
				height: 100%;
			}
		}

		// 活动行程时间选择
		.time-picker {
			.title {
				height: 80upx;
				line-height: 80upx;
				background-color: #f3f3f3;
				padding: 0 40upx;
				font-family: PingFangSC-regular;
			}
			.time-choose {
				padding: 0 40upx;
				height: 126upx;
				display: flex;
				flex-flow: row;
				align-items: center;
				font-size: 32upx;
				.start-time,
				.end-time {
					flex: 1;
					text-align: left;
					.data-time {
						.s1 {
							margin-right: 16upx;
						}
					}
				}
				.arrow-right-tim {
					height: 48upx;
					width: 48upx;
					margin-right: 40upx;
					image {
						height: 48upx;
						width: 48upx;
					}
				}
			}
		}

		// 报名截止时间
		.deadline {
			border-top: 24upx solid #f3f3f3;
			font-size: 32upx;
			.deadline-time {
				height: 126upx;
				padding: 0 40upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.weeks {
					margin: 0 14upx;
				}
				.search-icon {
					position: relative;
					top: 4upx;
					margin-left: 10upx;
				}
			}
		}

		// .选择活动（签到）地址
		.address {
			border-top: 24upx solid #f3f3f3;
			.address-list {
				margin-left: 40upx;
				padding-right: 40upx;
				.list-top {
					display: flex;
					align-items: center;
					justify-content: space-between;
					height: 100upx;
					border-bottom: 1upx solid #f3f3f3;
					.address-location {
						flex: 1;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.site-location {
							color: #ffae02;
							font-size: 32upx;
						}
					}
				}
				.list-bottom {
					height: 100upx;
					line-height: 100upx;
					padding-left: 74upx;
				}
				.active-switch {
					text-decoration: line-through;
				}
			}
			.money-fill {
				height: 100upx;
				line-height: 100upx;
				display: flex;
				align-items: center;
				flex-flow: row;
				padding-left: 74upx;
				.input-money {
					color: #999999;
				}
			}
		}

		// 限定队员信息
		.limit-list,
		.number-men {
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
		.number-list {
			border-top: 24upx solid #f3f3f3;
			.number-men {
				.men-input {
					width: 100%;
					color: #cccccc;
				}
			}
		}

		// 不限队员性别  限队员出生年份
		.limit-list {
			.dcse {
				display: flex;
				align-items: center;
				text {
					display: inline-block;
				}
			}
		}
	}

	// 头像设置
	.reat-icons {
		height: 38upx;
		width: 38upx;
		margin-right: 36upx;
	}
}
</style>
