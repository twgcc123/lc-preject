<template>
		<view class="roomOrderInfo">
			<view class="number">
				订单号：<text class="nums">DKADK34924929492412</text>
				<uni-icons type="paperclip" color="#B7B7B7" size="12"></uni-icons>
				<text class="copy" @tap="copy"> 复制 </text>
			</view>
			<view class="info">
				<view class="info-item">
					<text>整住 · 1室1厅1阳1卫1床</text>
					<text class="item-time">12月11日—12月21日 <text>共10晚</text></text>
				</view>
				<uni-icons type="arrowright" color="#B7B7B7" size="22"></uni-icons>
			</view>
			<view class="map">
				<view class="page-body">
					<view class="page-section page-section-gap">
						<map style="width:100%; height: 212upx;" :latitude="latitude" :longitude="longitude" :markers="covers">
						</map>
					</view>
				</view>
			</view>
			<view class="guid">
				<view class="gtaddress">
					<text>华山西街323号自乐自在社区</text>
					<text class="guid-item">3栋13号房</text>
				</view>
				<view class="mapup" @tap="getline">
					<uni-icons type="paperplane-filled" color="#515151" size="18"></uni-icons></br>
					<text>路线</text>
				</view>
			</view>
			<view class="tel">
				<view class="taddress">
					<text>自在自在社区</text>
					<text class="taddress-item">服务大厅</text>
				</view>
				<view class="callup" @tap="callup">
					<uni-icons type="phone-filled" color="#515151" size="22"></uni-icons></br>
					<text>电话</text>
				</view>
			</view>
		</view>
</template>

<script>
import uniIcons from "@/components/uni-icons/uni-icons.vue"
export default {
	components: {uniIcons},
	name:"roomOrderInfo",
	data() {
		return {
			title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					// iconPath: '../../../static/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					// iconPath: '../../../static/location.png'
				}]
		}
	},
	methods:{

		// 复制内容
		copy(){
			uni.setClipboardData({
			    data: 'DKADK34924929492412',
			    success: function () {
			        console.log('success');
			    }
			});
		},
		
		// 线路导航
		getline(){
			uni.getLocation({
			    type: 'gcj02', //返回可以用于uni.openLocation的经纬度
			    success: function (res) {
			        // const latitude = res.latitude;
			        // const longitude = res.longitude;
			        uni.openLocation({
			            latitude: latitude,
			            longitude: longitude,
			            success: function () {
			                console.log('success');
			            }
			        });
			    },
			})
		},
		
		// 拨打电话
		callup(){
			uni.makePhoneCall({
			    phoneNumber: '13410469999' //仅为示例
			});
		},
		
		// 返回上一级
		goBack(){
			uni.navigateBack()
		},
	},
	onReady() {
		
	},
	
	onLoad() {
		
	},

}
</script>

<style lang="less" scoped>
	.roomOrderInfo{
		background-color: #FFFFFF;
		.number{
			margin-top: 40upx;
			color: rgba(153, 153, 153, 1);
			font-size: 28upx;
			.nums{
				margin-right: 20px;
			}
			.copy{
				margin-left: 10upx;
				color: rgba(51, 51, 51, 1);
				font-size: 28upx;
			}
		}
		.info{
			margin-top: 30upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.info-item{
				display: flex;
				flex-flow:column;
				color: rgba(51, 51, 51, 1);
				font-size: 32upx;
				.item-time{
					margin-top: 10upx;
					color: rgba(102, 102, 102, 1);
					font-size: 24upx;
				}
			}
		}
		.map{
			margin-top: 30upx;
			width: 100%;
			height: 212upx;
		}
		.tel,.guid{
			margin: 30upx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: rgba(51, 51, 51, 1);
			font-size: 32upx;
			.taddress,.gtaddress{
				display: flex;
				flex-flow:column;
				color: rgba(51, 51, 51, 1);
				font-size: 32upx;
				.taddress-item,.guid-item{
					margin-top: 6upx;
					color: rgba(153, 153, 153, 1);
					font-size: 24upx;	
				}
			}
			.callup,.mapup{
				text-align: center;
				color: rgba(51, 51, 51, 1);
				font-size: 22upx;
				margin-top: 4upx;
			}
		}
		.guid{
			border-bottom: 1upx solid #B7B7B7;
			padding-bottom: 30upx;
			margin-bottom: 0;
		}
	}
</style>
