<template>
	<view class="container">
		<view class="content">
			<view class="content-top">
				<textarea class="content-textarea" v-model="title" adjust-position="false" placeholder="请输入标题" />
				<image class="content-image" src="../../static/hudong/c1.jpg"></image>
			</view>
			<view class="content-footer">
				<view class="content-footer-left" @click="pageTo('/pages/add/tags')">
					<text> # </text>
					<text>标签</text>
				</view>
				<view class="content-footer-right">选封面</view>
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
				<button class="footer-btn-right">发布</button>
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
				title: '',
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
			};
		},
		onLoad() {
			
		},
		methods:{
			radioChange(){
				this.checked = !this.checked;
			},
			onClick(index){
				index == 0 ? this.pageTo('/pages/add/citylist') : 
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
				width: 120upx;
				height: 48upx;
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
