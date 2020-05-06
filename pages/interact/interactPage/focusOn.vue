<template>
	<view class="container">
		<view class="list">
			<view class="list-item" v-for="(item,index) in dataList" :key="index">
				<view class="list-item-left">
					<image class="list-item-avatar" :src="item.avatar"></image>
					<view class="list-item-left-content">
						<view class="list-item-left-nikename">{{ item.nikename }}</view>
						<view class="list-item-left-desc">{{ item.desc }}</view>
					</view>
				</view>
				<view class="list-item-right">
					<view class="list-item-right-authority">不看他动态</view>
					<view class="list-item-right-relation" @click="open">{{ item.relation }}</view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom">
			<view class="popup">
				<view class="popup-title">确定要取消所有关系并取消关注？</view>
				<view class="popup-sure" @click="close">确定</view>
				<view class="popup-cancle" @click="close">取消</view>
				<view class="popup-bottom"></view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {uniPopup},
		data() {
			return {
				dataList:[
					{
						id: 1,
						avatar: '/static/hudong/c1.jpg',
						nikename: '郑少秋',
						desc: '知名演员、歌手',
						relation: '已关注',
						authority: '不看他动态'
					},
					{
						id: 2,
						avatar: '/static/hudong/c2.jpg',
						nikename: '郑少秋',
						desc: '知名演员、歌手',
						relation: '已关注',
						authority: ''
					},
					{
						id: 3,
						avatar: '/static/hudong/c3.jpg',
						nikename: '郑少秋',
						desc: '知名演员、歌手',
						relation: '已关注',
						authority: ''
					},
				]
			};
		},
		methods:{
			open(){
				 this.$refs.popup.open()
			},
			close(){
				this.$refs.popup.close()
			}
		}
	}
</script>

<style lang="less">
.container{
	background-color: #FFFFFF;
}
.list{
	padding: 0 30upx;
	.list-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 144upx;
		.list-item-left{
			display: flex;
			.list-item-avatar{
				width: 72upx;
				height: 72upx;
				border-radius: 100%;
				margin-right: 30upx;
			}
			.list-item-left-content{
				display: flex;
				flex-direction: column;
				font-size: 28upx;
				line-height: 40upx;
				text-align: left;
				.list-item-left-content-nikename{
					color: #333333;
				}
				.list-item-left-content-desc{
					color: #999999;
				}
			}
		}
		.list-item-right{
			display: flex;
			font-size: 26upx;
			line-height: 36upx;
			.list-item-right-authority{
				color: #666666;
				text-align: left;
			}
			.list-item-right-relation{
				color: #999999;
				text-align: right;
				margin-left: 20upx;
			}
		}
		.red{
			color: #f1605b;
		}
	}
}
.popup{
	width: 750upx;
	text-align: center;
	.popup-title{
		height: 104upx;
		line-height: 104upx;
		background-color: #FFFFFF;
		color: #333333;
		font-size: 26upx;
		border-radius: 20upx 20upx 0 0;
		border-bottom: 1upx solid #eaeaea;
	}
	.popup-sure{
		height: 104upx;
		line-height: 104upx;
		background-color: #FFFFFF;
		color: #F1605B;
		font-size: 32upx;
	}
	.popup-cancle{
		margin-top: 15upx;
		height: 104upx;
		line-height: 104upx;
		background-color: #FFFFFF;
		color: #333333;
		font-size: 32upx;
		border-bottom: 1upx solid #eaeaea;
	}
	.popup-bottom{
		height: 72upx;
		background-color: #FFFFFF;
	}
}
</style>
