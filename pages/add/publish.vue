<template>
	<view class="container">
		<view class="content">
			<view class="content-top">
				<textarea class="content-textarea" v-model="title" adjust-position="false" placeholder="请输入标题" />
				<image class="content-image" src="/static/hudong/c1.jpg"></image>
			</view>
			<view class="content-footer">
				<view class="content-footer-left" @click="pageTo('/pages/add/tags')">
					<text> # </text>
					<text>{{label}}</text>
				</view>
				<view class="content-footer-right" @tap="selectCoverPage">选封面</view>
			</view>
		</view>
		<view class="menus">
			<view 
				class="menus-item" 
				v-for="(item,index) in menuList" 
				:key="index"
				@click="onClick(index)"
			>
				<view class="menus-item-left">
					<image class="menus-item-left-icon" :src="item.imgUrl"></image>
					<text class="menus-item-left-title">{{ item.title }}</text>
				</view>
				<view class="menus-item-right">
					<text class="menus-item-right-text">{{ item.rightText }}</text>
					<uni-icons type="arrowright" color="#666666" size="16"></uni-icons>
				</view>
			</view>
		</view>
		<view class="footer" :style="[{paddingBottom: isIphoneX ? '47px': '13px'}]">
			<view class="footer-tip">
				<image @click="radioChange" class="footer-tip-img" :src="checked ? '/static/add/gou.svg': '/static/add/gou2.svg'"></image>
				<text :class="checked ? '':'footer-tip-text'">同时保存到手机</text>
			</view>
			<view class="footer-btn">
				<button class="footer-btn-left">草稿</button>
				<button class="footer-btn-right" @tap="sbmit()">发布</button>
			</view>
		</view>
		
		<!-- 弹窗 -->
		<uni-popup ref="popup1" type="bottom">
			<view class="popup">
				<view class="popup-item bottom-line" @tap="closePopup">
					预约助理体验社区
					<view class="popup-small-text">链接到社区体验助理的预约</view>
				</view>
				<view class="popup-item bottom-line" @tap="closePopup">
					详情页
					<view class="popup-small-text">链接到一个活动/文章</view>
				</view>
				<view class="popup-item bottom-line" @tap="closePopup">
					优居社区
					<view class="popup-small-text">链接到优居社区</view>
				</view>
				<view class="popup-item bottom-line" @tap="closePopup">
					房间
					<view class="popup-small-text">链接到房间</view>
				</view>
				<view class="popup-item popup-unfollow" @tap="closePopup">清除链接</view>
				<view class="popup-item popup-cancle bottom-line" @tap="closePopup">取消</view>
				<view class="popup-item popup-bottom"></view>
			</view>
		</uni-popup>
		<!-- 弹窗 -->
		<uni-popup ref="popup2" type="bottom">
			<view class="popup">
				<view class="popup-item bottom-line" style="border-radius: 20upx 20upx 0 0;" @tap="closePopup">
					公开
					<view class="popup-small-text">所有人和关注可见</view>
				</view>
				<view class="popup-item bottom-line" @tap="closePopup">
					亲友可见
					<view class="popup-small-text">仅自己和亲友关系可见</view>
				</view>
				<view class="popup-item bottom-line" @tap="closePopup">
					私密
					<view class="popup-small-text">仅自己可见</view>
				</view>
				<view class="popup-item popup-cancle bottom-line" @tap="closePopup">取消</view>
				<view class="popup-item popup-bottom"></view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	export default {
		components:{
			uniPopup
		},
		data() {
			return {
				paths: [],
				checked: false,
				menuList:[
					{
						title: '添加位置',
						imgUrl: '/static/add/location.svg',
						rightText: '',
					},
					{
						title: '视频连接到',
						imgUrl: '/static/add/link.svg',
						rightText: '无',
					},
					{
						title: '谁可以看',
						imgUrl: '/static/add/user.svg',
						rightText: '公开',
					},
					{
						title: '原创作者',
						imgUrl: '/static/add/dot.svg',
						rightText: '昵称123456',
					},
				],
				
				/**
				 *   后台数据字段
				**/ 
				tempFilePaths:[], // 选择上传的相册
				token:'',  //token
				title: '', // 标题输入的内容
				label:"标签", // 选择的标签
				author_id:'',  //原创作者ID
				link_type:'', // 关联类型 0=清除链接，1=预约助理体验社区，2=详情页，3=优居社区，4=房间
				link_id:'',  // 关联id
				access:'',  //0=公开，1=仅亲友可见，2=私密
				status:'', // 0=发布，1=草稿
				lat:'', //地图定位经度
				lng:'', //地图定位纬度
				img_list:'', //图片（注：如果是上传视频，此字段赋空值，如果没有上传视频则必须赋值）
				video_url:'', //视频地址（注：如果是上传图片，此字段赋空值，如果没有上传图片则必须赋值）
				video_image:'', //视频封面（注：如果是上传图片，此字段赋空值，如果没有上传图片则必须赋值）
				province:'', //省
				city:'', //市
				district:'', //详细地址
				id:'', //人生记录id（新增的时候此参数为空）
				
				hasLocation: false,
				location: {},
				locationAddress: ''
				
			};
		},
		onLoad() {
			// 获取token
			this.token = uni.getStorageSync('token');
			
			// 进入页面加载已经选择的照片
			uni.getStorage({
			    key: 'tempFilePaths_key',
			    success: function (res) {
			        console.log("传过来的相册" + res.data);
					this.tempFilePaths = res.data
			    }
			});
			
			// 获取标签选择内容
			uni.$on('chooseTypeTags', data => {
				this.label = data.title
				console.log(data.title )
			});
			
		},
		
		mounted() {
	
		},
		
		methods:{
			radioChange(){
				this.checked = !this.checked;
			},
			onClick(index){
				index == 0 ? this.chooseLocation() : 
				index == 1 ? this.openPopup(1): 
				index == 2 ? this.openPopup(2): this.pageTo('/pages/add/authors');
			},
			/**
			 * @desc 打开弹窗
			 */
			openPopup(index) {
				index == 1 ? this.$refs.popup1.open() : this.$refs.popup2.open();
			},
			/**
			 * @desc 关闭弹窗
			 */
			closePopup() {
				this.$refs.popup1.close();
				this.$refs.popup2.close();
			},
			/**
			 * @desc 跳转页面
			 */
			pageTo(url) {
				uni.navigateTo({
					url: url
				});
			},
			/**
			 * @desc 发布照片或者视频
			 */
			async release() {
				let param = this.$helper.setConfig('&token='+ token +'&title=' + item.user_id + '&img_list='+tempFilePaths);
				let res = await this.$http.request({
					method: 'post',
					url: '/users/Publish/record_the_life',
					data: {
						signature: param.signature,
						timestamp: param.timestamp,
						token:token,
						img_list:tempFilePaths
				
					}
				});
		
				if (res.state == 10000) {
				
				}
			},
			// 选择封面
			selectCoverPage(){
				const that = this;
				uni.chooseImage({
				    count: 1,
				    sizeType: ['original', 'compressed'], 
				    success: function (res) {
				      
				    }
				});
			},
			// 选择位置  保存地址和经纬度
			chooseLocation: function () {
				uni.chooseLocation({
					success: (res) => {
						this.hasLocation = true,
							this.location = this.formatLocation(res.longitude, res.latitude),
							this.lat = res.longitude
							this.lng = res.latitude
							this.menuList[0].title = res.address
							console.log(this.lat)
							console.log(this.lng)
							console.log(this.menuList[0].title)
					}
				})
			},
			
			formatLocation(longitude, latitude) {
				if (typeof longitude === 'string' && typeof latitude === 'string') {
					longitude = parseFloat(longitude)
					latitude = parseFloat(latitude)
				}
				longitude = longitude.toFixed(2)
				latitude = latitude.toFixed(2)
				return {
					longitude: longitude.toString().split('.'),
					latitude: latitude.toString().split('.')
				}
			},
			// 点击发布按钮
			sbmit(){
				this.release()
			}
		}
	}
</script>

<style lang="less" scoped>
.container{
	background-color: #FFFFFF;
	height: 100vh;
	.content{
		width: 100%;
		padding: 16upx 32upx;
		.content-top{
			display: flex;
			justify-content: space-between;
			.content-textarea{
				height: 144upx;
				width: 490upx;
			}
			.content-image{
				width: 186upx !important;
				height: 186upx !important;
			}
		}
		.content-footer{
			display: flex;
			justify-content: space-between;
			align-items: center;
			text-align: center;
			color: #FFFFFF;
			font-size: 28upx;
			line-height: 48upx;
			.content-footer-left{
				padding:0 12upx;
				height: 48upx;
				line-height: 48upx;
				border-radius: 6upx;
				background-color: #23262F;
			}
			.content-footer-right{
				width: 186upx;
				height: 48upx;
				background-color: #23262F;
			}
		}
	}
	.menus{
		padding: 16upx 66upx 0 32upx;
		.menus-item{
			height: 102upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: #333333;
			font-size: 32upx;
			line-height: 44upx;
			border-bottom: 1upx solid #eaeaea;
			.menus-item-left{
				display: flex;
				align-items: center;
				.menus-item-left-icon{
					width: 32upx;
					height: 32upx;
					margin-right: 32upx;
				}
			}
			.menus-item-right{
				display: flex;
				align-items: center;
				.menus-item-right-text{
					margin-right: 16upx;
				}
			}
		}
		.menus-item:first-child{
			border-top: 1upx solid #eaeaea;
		}
	}
	.footer{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 750upx;
		padding: 0 32upx 94upx;
		.footer-tip{
			display: flex;
			align-items: center;
			height: 144upx;
			font-size: 32upx;
			color: #ff6700;
			.footer-tip-img{
				width: 40upx;
				height: 40upx;
				margin-right: 20upx;
			}
			.footer-tip-text{
				color: #666666;
			}
		}
		.footer-btn{
			display: flex;
			align-items: center;
			font-size: 32upx;
			line-height: 44upx;
			border-radius: 6upx;
			.footer-btn-left{
				width: 146upx;
				height: 88upx;
				color: #FFFFFF;
				background-color: #333333;
				margin-right: 20upx;
			}
			.footer-btn-right{
				width: 520upx;
				height: 88upx;
				color: #FFFFFF;
				background-color: #FE5E10;
			}
		}
	}
}
.popup {
	background-color: #f1f1f1;
	border-radius: 20upx 20upx 0 0;
	.bottom-line {
		border-bottom: 1px solid #eaeaea;
	}
	.popup-small-text{
		font-size: 26upx;
		color: #666666;
		font-weight: 400;
	}
	.popup-item {
		color: #000000;
		font-weight: 400;
		font-size: 32upx;
		padding: 30upx;
		text-align: center;
		background-color: #ffffff;
	}
	.popup-cancle {
		margin-top: 15upx;
	}
	.popup-bottom{
		padding-bottom: 34upx ;
	}
	.popup-unfollow {
		color: #ff0000;
	}
}
</style>
