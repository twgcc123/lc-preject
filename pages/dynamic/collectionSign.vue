<template>
	<view class="container">
		<view class="list">
			<view class="list-item" v-for="(item,index) in signList" :key="index">
				<view class="list-item-top">
					<view class="list-item-top-left">
						<image class="list-item-top-left-avatar" :src="item.avatar"></image>
						<view class="list-item-top-left-nikename">{{ item.username }}</view>
					</view>
					<view class="list-item-top-right" @click="openPopup(1)">
						<image class="list-item-top-right-dot" src="/static/dongtai/dot_black.svg"></image>
					</view>
				</view>
				<view class="list-item-sign">
					<heart-sign :sign="item.sign" marginTop="26rpx" width="430rpx" height="680rpx" type="2"></heart-sign>
				</view>
				<view class="list-item-bottom-first">
					<image class="list-item-bottom-first-icon" src="/static/dongtai/head-1.svg"></image>
					<view class="list-item-bottom-first-nikename">暂无评论</view>
				</view>
				<view class="list-item-bottom-bar">
					<view class="list-item-bottom-bar-left">
						<text class="list-item-bottom-bar-left-comment">0 评论</text>
						<text class="list-item-bottom-bar-left-zan">0 点赞</text>
						<text class="list-item-bottom-bar-left-conllect">0 收藏</text>
					</view>
					<view class="list-item-bottom-bar-right">
						<view class="list-item-bottom-bar-right-imgbox" @tap="tapZan(item)">
							<image :src="item.is_zan ? '/static/dongtai/zan_on.svg':'/static/dongtai/zan.svg'"></image>
						</view>
						<view class="list-item-bottom-bar-right-imgbox" @tap="tapCollect(item)">
							<image :src="item.is_collect ? '/static/dongtai/star_ac.svg':'/static/dongtai/star.svg'"></image>
						</view>
						<view class="list-item-bottom-bar-right-imgbox" @tap="tapComment(item.id)">
							<image src="/static/dongtai/comment_block.svg"></image>
						</view>
					</view>
				</view>
				<view class="list-item-bottom-date">
					<view class="list-item-bottom-date-time">{{ item.time }}</view>
					<view class="list-item-bottom-public" @click="openPopup(2)">
						<image class="list-item-bottom-public-icon" src="/static/dongtai/head_gray.svg"></image>
						<view class="list-item-bottom-public-text">私密</view>
					</view>
				</view>
			</view>
		</view>
		
		<view v-if="show_comment">
			<com-comment :id="currentId" @hideComment="hideComment"></com-comment>
		</view>
		
		<!-- 弹窗 -->
		<uni-popup ref="popup1" type="bottom">
			<view class="popup">
				<view class="popup-item bottom-line" style="border-radius: 20upx 20upx 0 0;" @tap="closePopup">分享</view>
				<view class="popup-item bottom-line" @tap="closePopup">取消收藏</view>
				<view class="popup-item popup-cancle popup-bottom" @tap="closePopup">取消</view>
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
				<view class="popup-item popup-cancle" @tap="closePopup">取消</view>
				<view class="popup-item popup-bottom"></view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import heartSign from '@/components/heart-sign.vue'
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import comComment from '@/pages/found/tuijian/comment.vue'
	export default {
		components:{
			uniIcons,
			heartSign,
			comComment
		},
		data() {
			return {
				show_comment: false,
				currentId: null,
				signList:[
					{
						id: 1,
						avatar:'../../static/hudong/c3.jpg',
						username: '化名千千',
						sign:{
							time: '二零二零年三月三十日',
							mark: 1,
							content: '山高远阔，人间烟火。无一是你，无一不是你。',
							title: '这个是标题',
							author: '东野圭吾呀'
						},
						is_zan: false,
						is_collect: false,
						time: '2020年2月20日 18:00'
					},
					{
						id: 2,
						avatar:'../../static/hudong/c3.jpg',
						username: '化名千千',
						sign:{
							time: '二零二零年三月三十日',
							mark: 1,
							content: '山高远阔，人间烟火。无一是你，无一不是你。',
							title: '这个是标题',
							author: '东野圭吾'
						},
						is_zan: false,
						is_collect: false,
						time: '2020年2月20日 18:00'
					},
					{
						id: 3,
						avatar:'../../static/hudong/c3.jpg',
						username: '化名千千',
						sign:{
							time: '二零二零年三月三十日',
							mark: 1,
							content: '山高远阔，人间烟火。无一是你，无一不是你。',
							title: '这个是标题',
							author: '东野圭吾'
						},
						is_zan: false,
						is_collect: false,
						time: '2020年2月20日 18:00'
					}
				]
			};
		},
		methods:{
			/**
			 * @desc 评论
			 */
			tapComment(id){
				this.currentId = id;
				this.show_comment = false;
			},
			hideComment(){
				this.show_comment = false;
			},
			/**
			 * @desc 点赞
			 */
			tapZan(item){
				item.is_zan = !item.is_zan;
			},
			/**
			 * @desc 收藏
			 */
			tapCollect(item){
				item.is_collect = !item.is_collect;
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
		}
	}
</script>

<style lang="less" scoped>
.container{
	background-color: #FFFFFF;
	.list{
		width: 750upx;
		padding: 0 40upx;
		.list-item{
			padding: 40upx 0;
			border-bottom: 1upx solid #eaeaea;
			.list-item-top{
				// background-color: #007AFF;
				display: flex;
				justify-content: space-between;
				.list-item-top-left{
					display: flex;
					align-items: center;
					.list-item-top-left-avatar{
						width: 64upx;
						height: 64upx;
						border-radius: 100%;
					}
					.list-item-top-left-nikename{
						color: #333333;
						font-size: 32upx;
						margin-left: 24upx;
						line-height: 64upx;
					}
				}
				.list-item-top-right{
					height: 64upx;
					display: flex;
					align-items: center;
					.list-item-top-right-dot{
						width: 40upx;
						height: 40upx;
					}
				}
			}
			.list-item-sign{
				width: 430upx;
				// border: 1px solid red;
			}
			.list-item-bottom-first{
				display: flex;
				flex-direction: row;
				margin-top: 24upx;
				.list-item-bottom-first-icon{
					width: 40upx;
					height: 40upx;
				}
				.list-item-bottom-first-nikename{
					font-size: 28upx;
					line-height: 40upx;
					color: #999999;
					margin-left: 20upx;
				}
			}
			.list-item-bottom-bar{
				display: flex;
				flex-direction: row;
				margin-top: 24upx;
				justify-content: space-between;
				.list-item-bottom-bar-left{
					display: flex;
					flex-direction: row;
					width: 304upx;
					height: 80upx;
					background-color: #eaeaea;
					border-radius: 10upx;
					// padding: 0 20upx;
					text{
						font-size: 24upx;
						color: #444444;
						line-height: 80upx;
						margin-left: 20upx;
					}
				}
				.list-item-bottom-bar-right{
					display: flex;
					flex-direction: row;
					.list-item-bottom-bar-right-imgbox{
						width: 80upx;
						height: 80upx;
						display: flex;
						align-items: center;
						justify-content: center;
						image{
							width: 48upx;
							height: 48upx;
						}
					}
				}
			}
			.list-item-bottom-date{
				display: flex;
				flex-direction: row;
				margin-top: 34upx;
				.list-item-bottom-date-time{
					font-size: 28upx;
					line-height: 40upx;
				}
				.list-item-bottom-public{
					display: flex;
					flex-direction: row;
					align-items: center;
					.list-item-bottom-public-icon{
						width: 24upx;
						height: 24upx;
						margin-left: 20upx;
					}
					.list-item-bottom-public-text{
						color: #AAAAAA;
						font-size: 28upx;
						line-height: 40upx;
						margin-left: 10upx;
					}
				}
			}
		}
	}
	.popup {
		background-color: #f1f1f1;
		border-radius: 20upx 20upx 0 0;
	}
	.popup:first-child{
		border-radius: 20upx 20upx 0 0;
	}
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
}
</style>
