<template>
	<view>
		<view class="footer-tabbar" :style="[{zINdex: z_index}]">
			<view class="footer-tabbar-zan" @tap="tapLove">
				<image :src="is_like ? '/static/dongtai/zan_ac.svg' : '/static/dongtai/zan.svg'"></image>
			</view>
			<view class="footer-tabbar-comment" @click="tapComment">
				<uni-icons type="chat" size="20"></uni-icons>
			</view>
			<view class="footer-tabbar-pen" @click="pageTo('/pages/dynamic/writeHeartSign')">
				<image src="/static/dongtai/pen.svg"></image>
				<!-- <uni-icons type="camera" size="20"></uni-icons> -->
			</view>
			<view class="footer-tabbar-xing" @click="tapCollect">
				<image :src="is_collection ? '/static/dongtai/xing_ac.svg' : '/static/dongtai/xing.svg'"></image>
				<!-- <uni-icons type="star" size="20"></uni-icons> -->
			</view>
			<view class="footer-tabbar-share">
				<uni-icons type="redo" size="20"></uni-icons>
			</view>
		</view>
		<popup-comment ref="popupComment" :signid="1"></popup-comment>
		<!-- <uni-popup ref="popup" type="bottom">
			<pop-comment :id="1" @hideComment="hideComment"></pop-comment>
		</uni-popup> -->
		<!-- <view v-if="show_comment">
			<pop-comment :id="1" @hideComment="hideComment"></pop-comment>
		</view> -->
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import popupComment from '@/components/popup-comment.vue'
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components:{
			uniIcons,
			popupComment,
			uniPopup
		},
		data() {
			return {
				is_like: false,
				is_collection: false,
				show_comment: false,
				z_index: 9999
			};
		},
		methods:{
			/**
			 * @desc 评论
			 */
			tapComment(){
				this.$refs.popupComment.open();
				this.z_index = 0;
			},
			/**
			 * @desc 点赞
			 */
			tapLove(){
				this.is_like = !this.is_like;
			},
			/**
			 * @desc 收藏
			 */
			tapCollect(){
				this.is_collection = !this.is_collection;
			},
			hideComment(){
				this.$refs.popup.close();
			},
			/**
			 * 跳转页面
			 */
			pageTo(url){
				if(!url){
					uni.navigateBack();
					return;
				}
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="less">
.footer-tabbar{
	background-color: #FFFFFF;
	position: fixed;
	left: 0;
	bottom: 0;
	// z-index: 9999;
	display: flex;
	width: 750upx;
	height: 164upx;
	padding-bottom: 34upx;
	justify-content: space-around;
	// border: 1px solid red;
	align-items: center;
	image{
		width: 40upx;
		height: 40upx;
	}
	.footer-tabbar-pen{
		background-color: #666666;
		width: 100upx;
		height: 80upx;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>
