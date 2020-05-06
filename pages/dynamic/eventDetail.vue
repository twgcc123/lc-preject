<template>
	<view class="container">
		<view class="navbar" :style="[{paddingTop: hasNotchInScreen ? '44px': '20px'}]">
			<view class="navbar-left" @click="pageTo()">完成</view>
			<view class="navbar-title">详情</view>
			<view class="navbar-right" @click="openPopup">
				<uni-icons color="#000000" type="more-filled" size="24"></uni-icons>
			</view>
		</view>
		<view id="moments">
			<view class="moments__post">
				<view class="post-left" @tap="pageTo('/pages/interact/interactPage/interactPersonaHome')">
					<image class="post_header" :src="post.header_image"></image>
				</view>
				<view class="post_right">
					<view class="post_title">
						<text class="post-username">{{ post.username }}</text>
					</view>
					<block v-if="post.type == 1">
						<!--  -->
						<view class="heart-sign" @click="pageTo('/pages/dynamic/heartSign')">
							<image class="heart-sign-img" :src="post.content.images[0]"></image>
							<view id="paragraph" class="heart-sign-text">{{ post.content.text }}</view>
						</view>
					</block>
					<block v-else>
						<view id="paragraph" class="paragraph">{{ post.content.text }}</view>
						<!-- 相册 -->
						<view class="thumbnails">
							<view 
								:class="post.content.images.length === 1 ? 'my-gallery' : 'thumbnail'" 
								v-for="(image, index_images) in post.content.images" 
								:key="index_images" 
								@tap="clickPic(post.content.images,index_images)"
							>
								<image class="gallery_img" lazy-load mode="aspectFill" :src="image" :data-src="image"></image>
							</view>
						</view>
					</block>
					<view @tap="pageTo(`/pages/found/youju/youju?id=${index + 1}`)" class="address">
						<text>{{ post.aear }}</text>
						<text v-if ="post.aear" class="yuans"></text>
						<image v-if="post.type == 3" class="location" src="/static/dongtai/location.svg"></image>
						<text>{{ post.address }}</text>
					</view>
					
					<!-- 资料条 -->
					<view class="toolbar">
						<view class="timestamp">{{ post.timestamp }} <text class="delete">删除</text></view>
						<view v-if="post.type == 3" class="right-detail" @click="pageTo('/pages/dynamic/eventDetail')">
							查看详情
							<uni-icons color="#333333" type="forward" size="12"></uni-icons>
						</view>
						<view v-else class="right-dot" @tap="show_win(true)">
							<!-- <image src="../../static/dongtai/dot.svg"></image> -->
							<uni-icons color="#777" type="more-filled" size="22"></uni-icons>
						</view>
						
						<view class="right-window" v-if="post.show_window">
							<view class="like" @tap="like">
								<!-- <image src="../../static/dongtai/like.svg"></image> -->
								<view class="" style="margin: 0 auto;">
									<uni-icons color="#fff" type="heart" size="17"></uni-icons>
									<text class="like-text">{{ post.islike === 0 ? '赞' : '取消赞' }}</text>
								</view>
							</view>
							<view class="line" style="background-color: #BBB;height: 32upx;width: 2upx;margin-top: 5upx;"></view>
							<view class="comment" @tap="comment">
								<!-- <image src="../../static/dongtai/comment.svg"></image> -->
								<view class="" style="margin: 0 auto;">
									<uni-icons color="#fff" type="chat" size="17"></uni-icons>
									<text class="comment-text">评论</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<!-- 结束 post -->
			</view>
		</view>
		<!-- 点赞区 -->
		<view class="zan-box" @click="pageTo('/pages/dynamic/likes')">
			<uni-icons color="#333333" type="hand-thumbsup" size="17"></uni-icons>
			<view class="zan-center">
				<image v-for="(item,index) in avatarList" :key="index" :src="item" mode=""></image>
			</view>
			<view class="zan-right">
				等32个赞
				<uni-icons color="#888563" type="forward" size="14"></uni-icons>
			</view>
		</view>
		<!-- 评论区 -->
		<view class="post-footer">
			<view class="footer_content" v-for="(comment, comment_index) in post.comments.comment" :key="comment_index" @tap="reply(index, comment_index)">
				<image class="comment-avatar" :src="avatarList[comment_index]" @tap="pageTo('/pages/interact/interactPage/interactPersonaHome')"></image>
				<view class="comment-right">
					<view class="comment-top">
						<text class="comment-nickname">{{ comment.username }}</text>
						<text class="comment-time"> 今天 15:19</text>
					</view>
					<view class="comment-content"> {{ comment.content }} </view>
				</view>
			</view>
		</view>
		<view class="footer-input">
			<chat-input @send-message="send_comment" @blur="blur" :focus="focus" :placeholder="input_placeholder"></chat-input>
		</view>
		<!-- 弹窗 -->
		<uni-popup ref="popup" type="bottom">
			<view class="popup">
				<view class="popup-item bottom-line popup-first" @tap="closePopup">设为仅亲友可见</view>
				<view class="popup-item bottom-line" @tap="closePopup">设为仅自己可见</view>
				<view class="popup-item popup-cancle bottom-line" @tap="closePopup">取消</view>
				<view class="popup-bottom popup-item"></view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import chatInput from '@/components/im-chat/chatinput.vue'; //input框
import postData from '@/utils/index.post.data.js'; //朋友圈数据
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniIcons from '@/components/uni-icons/uni-icons.vue';
export default {
	components: {
		chatInput,
		uniPopup,
		uniIcons
	},
	data() {
		return {
			post: postData[3], //模拟数据
			user_id: 4,
			username: '小happy',

			index: '',
			comment_index: '',
			
			input_placeholder: '评论', //占位内容
			focus: false, //是否自动聚焦输入框
			is_reply: false, //回复还是评论
			showInput: false, //评论输入框

			screenHeight: '', //屏幕高度(系统)
			platform: '',
			windowHeight: '', //可用窗口高度(不计入软键盘)

			loadMoreText: '加载中...',
			showLoadMore: false,
			currentPost: 0,
			avatarList:[
				"/static/youju/s1-1.jpg",
				"/static/youju/s1-2.jpg",
				"/static/youju/s1-3.jpg",
				"/static/youju/s1-4.jpg",
				"/static/youju/s2-1.jpg",
				"/static/youju/s2-2.jpg",
				"/static/youju/s2-3.jpg",
				"/static/youju/s2-4.jpg",
				"/static/youju/s3-3.jpg"
			]
		};
	},
	onLoad() {
		uni.getSystemInfo({
			//获取设备信息
			success: res => {
				this.screenHeight = res.screenHeight;
				this.platform = res.platform;
			}
		});
		uni.startPullDownRefresh();
	},
	onShow() {
		uni.onWindowResize(res => {
			//监听窗口尺寸变化,窗口尺寸不包括底部导航栏
			if (this.platform === 'ios') {
				this.windowHeight = res.size.windowHeight;
				this.adjust();
			} else {
				if (this.screenHeight - res.size.windowHeight > 60 && this.windowHeight <= res.size.windowHeight) {
					this.windowHeight = res.size.windowHeight;
					this.adjust();
				}
			}
		});
	},
	onHide() {
		uni.offWindowResize(); //取消监听窗口尺寸变化
	},
	onUnload() {
		(this.max = 0), (this.data = []), (this.loadMoreText = '加载更多'), (this.showLoadMore = false);
	},
	onPullDownRefresh() {
		//监听下拉刷新动作
		console.log('onPullDownRefresh');
		// 这里获取数据
		setTimeout(function() {
			//初始化数据
			uni.stopPullDownRefresh(); //停止下拉刷新
		}, 1000);
	},
	methods: {
		clickPic(imgList,index) {
			uni.setStorageSync("currentImg",imgList);
			uni.setStorageSync("currentImgIndex",index);
			this.pageTo('/pages/dynamic/imgPreview');
		},
		/**
		 * @desc 打开弹窗
		 */
		openPopup() {
			this.$refs.popup.open();
		},
		/**
		 * @desc 关闭弹窗
		 */
		closePopup() {
			this.$refs.popup.close();
		},
		show_win(flag) {
			this.post.show_window = false;
			this.post.show_window = flag;
		},
		
		like() {
			this.show_win(false);
			if (this.post.islike === 0) {
				this.post.islike = 1;
				this.post.like.push({
					uid: this.user_id,
					username: ',' + this.username
				});
			} else {
				this.post.islike = 0;
				this.post.like.splice(
					this.post.like.indexOf({
						uid: this.user_id,
						username: ',' + this.username
					})
				);
			}
		},
		comment() {
			this.show_win(false);
			this.focus = true;
		},
		
		adjust() {
			//当弹出软键盘发生评论动作时,调整页面位置pageScrollTo
			return;
			uni.createSelectorQuery()
				.selectViewport()
				.scrollOffset(res => {
					var scrollTop = res.scrollTop;
					let view = uni.createSelectorQuery().select('#post-' + this.index);
					view.boundingClientRect(data => {
						console.log('data:' + JSON.stringify(data));
						console.log('手机屏幕高度:' + this.screenHeight);
						console.log('竖直滚动位置' + scrollTop);
						console.log('节点离页面顶部的距离为' + data.top);
						console.log('节点高度为' + data.height);
						console.log('窗口高度为' + this.windowHeight);

						uni.pageScrollTo({
							scrollTop: scrollTop - (this.windowHeight - (data.height + data.top + 45)), //一顿乱算
							// scrollTop: 50,
							duration: 300
						});
					}).exec();
				})
				.exec();
		},
		reply(comment_index) {
			this.is_reply = true; //回复中
			this.showInput = true; //调起input框
			let replyTo = this.post.comments.comment[comment_index].username;
			this.input_placeholder = '回复' + replyTo;
			this.index = index; //post索引
			this.comment_index = comment_index; //评论索引
			this.focus = true;
		},
		blur: function() {
			this.init_input();
		},
		send_comment: function(message) {
			if (this.is_reply) {
				var reply_username = this.post.comments.comment[this.comment_index].username;
				var comment_content = '回复' + reply_username + ':' + message.content;
			} else {
				var comment_content = message.content;
			}
			this.post.comments.total += 1;
			this.post.comments.comment.push({
				uid: this.user_id,
				username: this.username,
				content: comment_content //直接获取input中的值
			});
			this.init_input();
		},
		init_input() {
			this.showInput = false;
			this.focus = false;
			this.input_placeholder = '评论';
			this.is_reply = false;
		},
		/**
		 * @desc 跳转页面
		 */
		pageTo(url) {
			if(!url){
				uni.navigateBack();
				return;
			}
			uni.navigateTo({
				url: url
			});
		}
	}
};
</script>

<style lang="less">
.container{
	background-color: #FFFFFF;
}
.navbar{
	background-color: #f3f3f3;
	position: sticky;
	top: 0;
	left: 0;
	width: 750upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30upx;
	z-index: 999;
	.navbar-left{
		color: #FF9502;
		font-size: 32upx;
		line-height: 102upx;
	}
	.navbar-title{
		color: #333333;
		font-size: 40upx;
		line-height: 102upx;
		font-weight: 500;
	}
}
.popup {
	background-color: #f1f1f1;
	border-radius: 20upx 20upx 0 0;
	font-size: 32upx;
	color: #000000;
	.popup-first{
		border-radius: 20upx 20upx 0 0;
	}
	.bottom-line {
		border-bottom: 1px solid #eaeaea;
	}
	.popup-item {
		padding: 30upx;
		text-align: center;
		background-color: #ffffff;
	}
	.popup-cancle {
		margin-top: 15upx;
	}
	.popup-unfollow {
		color: #ff0000;
	}
	.popup-bottom{
		height: 68upx;
	}
}
.heart-sign{
	display: flex;
	flex-direction: row;
	padding: 16upx;
	margin-top: 8upx;
	background-color: #F1F1F1;
	box-sizing: border-box;
	text-overflow: ellipsis;
	.heart-sign-img{
		width: 68upx;
		height:  68upx;
	}
	.heart-sign-text{
		font-size: 26upx;
		margin-left: 10upx;
		line-height: 68upx;
	}
}
.liked {
	position: relative;
	margin-right: 10upx;
	width: 24upx;
	height: 24upx;
}
.post_title{
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 14upx;
}
.post-username {
	padding: 0;
	margin: 0;
	font-size: 34upx;
	font-weight: bolder;
	color: #333333;
	display: inline-block;
	width: 460upx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.paragraph {
	color: #000000;
	font-size: 32upx;
	line-height: 42upx;
	letter-spacing: 1.1px;
	margin-bottom: 20upx;
}
.gallery_img {
	width: 100%;
	height: 100%;
}

.header {
	width: 100%;
	height: 100%;
	z-index: 10;
	border-radius: 40upx;
}
.publish {
	position: absolute;
	top: 20upx;
	right: 20upx;
}
.right-dot {
	width: 72upx;
	height: 40upx;
	line-height: 36upx;
	background-color: #F1F1F1;
	text-align: center;
	border: 1px solid rgba(255, 255, 255, 0);
	border-radius: 10upx;
	padding: 0 10upx;
	position: absolute;
	right: 0;
}
.right-window {
	width: 360upx;
	height: 80upx;
	line-height: 80upx;
	box-sizing: border-box;
	background-color: #4d5050;
	border-radius: 10upx;
	position: absolute;
	right: 92upx;
	display: flex;
	z-index: 99;
	// padding: 15upx 22upx;
	flex-direction: row;
	align-items: center;
	text-align: center;
	.like-text,
	.comment-text {
		color: #ffffff;
		font-size: 30upx;
		margin-left: 6upx;
	}
	image {
		width: 30upx !important;
		height: 30upx !important;
		margin-right: 10upx;
	}
}

.post_header {
	width: 80upx !important;
	height: 80upx !important;
	border-radius: 100%;
}
.location{
	width: 28upx;
	height: 28upx;
	margin-right: 12upx;
}
.address {
	margin-top: 16upx;
	color: #44617b;
	font-size: 28upx;
	display: inline-block;
	align-items: center;
	align-items: center;
	text{
		display: inline-block;
	}
	.yuans{
		height: 6upx;
		width: 6upx;
		background-color: #44617b;
		border-radius: 50%;
		margin: 0 8upx;
		position: relative;
		top: -8upx;
	}
}
.timestamp {
	color: #bbbbbb;
}
.delete{
	color: #44617B;
	margin-left: 20upx;
}
.zan-box{
	border-top: 1upx solid #F1F1F1;
	border-bottom: 1upx solid #F1F1F1;
	display: flex;
	align-items: center;
	padding: 16upx 28upx;
	.zan-center{
		margin-left: 30upx;
		margin-right: 25upx;
		width: 450upx;
		height: 70upx;
		overflow: hidden;
		image{
			width: 70upx;
			height: 70upx;
			border-radius: 70upx;
			border: 1px solid #FFFFFF;
		}
	}
}
#moments .moments__post {
	background: #ffffff;
	// border-bottom: 1px solid #f2eeee;
	padding: 28upx 26upx;
	position: relative;
	display: flex;
}

#moments .moments__post::before {
	content: none;
}

#moments .moments__post .post_right {
	font-size: 32upx;
	display: table-cell;
	padding-left: 20upx;
	width: 100%;
}

#moments .moments__post .title {
	color: #094dcc;
}

#moments .moments__post .thumbnails {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	line-height: 1;
}

#moments .moments__post .thumbnails .thumbnail {
	width: 166upx;
	height: 166upx;
	background: #757575;
	margin: 4upx;
	overflow: hidden;
	border: 0;
}

.my-gallery {
	width: 250upx;
	height: 400upx;
	margin: 4upx;
	background: #757575;
	overflow: hidden;
}

#moments .moments__post .toolbar {
	margin-top: 8upx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 42upx;
	line-height: 42upx;
	position: relative;
}

#moments .moments__post .toolbar .timestamp {
	color: #757575;
	font-size: 28upx;
}
.right-detail{
	color: #333333;
	font-size: 28upx;
	text-align: right;
	line-height: 40upx;
}
#moments .moments__post .like {
	width: auto;
	height: auto;
	display: flex;
	align-items: center;
	width: 50%;
	text-align: center;
}
#moments .moments__post .comment {
	width: auto;
	height: auto;
	flex: 1;
	display: flex;
	margin-left: -2upx;
	align-items: center;
	text-align: center;
}

#moments .moments__post .toolbar image {
	// padding-left: 20upx;
	width: 40upx;
	height: 28upx;
}

.post-footer {
	margin-top: 22upx;
	background-color: #FFFFFF;
	width: 750upx;
	border-radius: 6upx;
	padding-bottom: 168upx;
	.footer_content{
		display: flex;
		padding: 20upx 28upx;
		border-bottom: 1px solid #f3f3f3;
		.comment-avatar{
			width: 70upx;
			height: 70upx;
			border-radius: 70upx;
		}
		.comment-right{
			margin-left: 24upx;
			display: flex;
			width: 600upx;
			flex-direction: column;
		}
		.comment-top{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.comment-nickname{
				color: #666666;
				font-size: 26upx;
				line-height: 36upx;
			}
			.comment-time{
				color: #999999;
				font-size: 24upx;
				line-height: 34upx;
			}
		}
		.comment-content{
			margin-top: 12upx;
			color: #000000;
			font-size: 30upx;
			line-height: 36upx;
		}
	}
}

.foot {
	position: fixed;
	width: 100%;
	height: 90upx;
	min-height: 90upx;
	left: 0upx;
	bottom: 0upx;
	overflow: hidden;
}
.uni-loadmore{
	background-color: #FFFFFF;
	height: 80upx;
	line-height: 80upx;
	text-align: center;
	font-size: 30upx;
	color: #999;
}
.footer-input{
	background-color: #f7f7f7;
	position: fixed;
	width: 750upx;
	left: 0;
	bottom: 0;
	padding-bottom: 68upx;
}
</style>
