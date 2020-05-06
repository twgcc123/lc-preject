<template>
    <view>
        <cover-view class="uni-padding-wrap" :style="[{height: height}]">
            <!-- 评论区 start -->
            <cover-view class="uni-comment">
				<cover-view class="uni-comment-total">{{ count }}条评论</cover-view>
				
				<uni-icons @click="closeComment" class="uni-comment-close" type="closeempty" color="#ffffff" size="30"></uni-icons>
				<cover-view class="uni-comment-list">
                <cover-view class="uni-comment-item" v-for="(item,index) in commentList" :key="index">
                    <cover-view class="uni-comment-face">
                        <cover-image :src="item.avatar" mode="widthFix"></cover-image>
                    </cover-view>
					
                    <cover-view class="uni-comment-body">
						
                        <cover-view class="uni-comment-top">
							<cover-view class="username">{{ item.username }}</cover-view>
                        </cover-view>
						<cover-view class="uni-comment-content">{{ item.content }}</cover-view>
                       
                        <cover-view class="uni-comment-date">
							<cover-view class="uni-comment-datetime"> {{ item.time }}</cover-view>
                        </cover-view>
                    </cover-view>
                </cover-view>
				</cover-view>
            </cover-view>
			<cover-view class="foot" v-show="showInput">
				<chat-input @send-message="send_comment" @blur="blur" :focus="focus" :placeholder="input_placeholder"></chat-input>
			</cover-view>
        </cover-view>
    </view>
</template>

<script>
	import chatInput from '@/components/im-chat/chatinput.vue'; //input框
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
    export default {
		components: {
			uniPopup,
			uniIcons,
			chatInput
		},
		props:{
			id:{
				type: Number,
				default: 0
			}
		},
        data() {
            return {
                title: "评论界面",
				height: '',
				count: 6,
				focus: false,
				input_placeholder: '评论~',
				showInput: true,
				commentList:[
					{
						id: 1,
						avatar: '/static/youju/s1-1.jpg',
						username: '小猫咪',
						content: '远离一线城市的喧嚣，享受优居的清新空气，有趣自在的生活。',
						time: '08/10 07:55'
					},
					{
						id: 2,
						avatar: '/static/youju/s3-2.jpg',
						username: '网友',
						content: '有趣自在的生活，有趣自在的生活，有趣自在的生活。',
						time: '08/10 07:55'
					},
					{
						id: 3,
						avatar: '/static/youju/s2-3.jpg',
						username: 'HAPPY',
						content: '远离一线城市的喧嚣，享受优居的清新空气。',
						time: '08/10 07:55'
					},
					{
						id: 4,
						avatar: '/static/youju/s2-4.jpg',
						username: 'LUCKY',
						content: '优居社区准备筹备《元宵佳节》，欢迎各位前来赴会哦~',
						time: '08/10 07:55'
					},
					{
						id: 5,
						avatar: '/static/youju/s2-1.jpg',
						username: 'LUCKY',
						content: '霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍!',
						time: '08/10 07:55'
					},
					{
						id: 6,
						avatar: '/static/youju/s1-2.jpg',
						username: 'LUCKY',
						content: '加个微信吧!基金基金基金基金基金基金基金',
						time: '08/10 07:55'
					},
				]
            }
        },
		created() {
			console.log(uni.getSystemInfoSync().screenHeight)
			this.height = `${uni.getSystemInfoSync().screenHeight * 0.68}px`;
			// this.getCommentList()
		},
		methods:{
			/**
			 * @desc 获取评论列表
			 */
			async getCommentList(){
				let res = await this.$http.request({
					url: '/api/video/getComment',
					method: 'get',
					data:{
						video_id: this.id
					}
				});
				if(res.errno === 0){
					this.count = res.data.count;
					this.commentList = res.data.list;
				} else{
					console.log(res.errstr)
				}
			},
			blur() {
				this.init_input();
			},
			/**
			 * @desc 发送评论
			 * @param {Object} message
			 */
			async send_comment(message) {
				let res = await this.$http.request({
					url: '/api/user/videoComment',
					method: 'get',
					data:{
						video_id: this.video_id,
						content: message.content
					}
				});
				if(res.errno == 0){
					console.log('评论成功！')
				}else{
					// console.log(res.errstr)
					uni.showToast({
					    title: res.errstr,
						icon: 'none',
					    duration: 2000
					});
				}
				this.init_input();
			},
			/**
			 * 设置
			 */
			init_input() {
				this.showInput = false;
				this.focus = false;
				this.input_placeholder = '评论';
				// this.is_reply = false;
			},
			/**
			 * 关闭评论框
			 */
			 closeComment(){
				this.$emit('hideComment',false);
			 }
	    }
    }
</script>

<style lang="less" scoped>
    .uni-padding-wrap {
		width: 100%;
        padding: 30upx;
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 99999;
		border-top-left-radius: 20upx;
		border-top-right-radius: 20upx;
		box-sizing: border-box;
		background-color: #333333;
    }
	.username{
		color: #999999;
		font-size: 24upx;
	}
	.uni-comment-total{
		color: #ffffff;
		font-size: 26upx;
		text-align: center;
	}
	.uni-comment-close{
		position: absolute;
		width: 50upx;
		right: 30upx;
		top: 10upx;
	}
    .uni-comment {
		/* #ifndef APP-PLUS-NVUE */
		    display: flex;
			flex-grow: 1;
		/* #endif*/
        padding: 5upx 0;
        flex-direction: column;
		flex: 1;
    }

    .uni-comment-list {
		min-height: 200upx;
		max-height: 700upx;
		overflow: scroll;
    }
	.uni-comment-item{
		padding: 10upx 0;
		margin: 10upx 0;
		width: 100%;
		display: flex;
	}
    .uni-comment-face {
        width: 70upx;
        height: 70upx;
        border-radius: 100%;
        margin-right: 20upx;
        // flex-shrink: 0;
        overflow: hidden;
    }

    // .uni-comment-face image {
    //     width: 100%;
    //     border-radius: 100%;
    // }

    .uni-comment-body {
        width: 100%;
		/* #ifndef APP-PLUS-NVUE */
		    white-space: pre-wrap !important;
		/* #endif*/
    }

    .uni-comment-top {
        line-height: 1.5em;
        justify-content: space-between;
    }

    // .uni-comment-top text {
    //     color: #0A98D5;
    //     font-size: 24upx;
    // }

    .uni-comment-date {
		/* #ifndef APP-PLUS-NVUE */
		    display: flex !important;
		/* #endif*/
        line-height: 38upx;
        flex-direction: row;
        justify-content: space-between;
		flex: 1;
        // flex-grow: 1;
    }

    .uni-comment-datetime {
        color: #999999;
        font-size: 24upx;
        // line-height: 38upx;
    }

    .uni-comment-content {
        line-height: 1.6em;
        font-size: 26upx;
        // padding: 8upx 0;
		color: #ffffff;
		/* #ifndef APP-PLUS-NVUE */
		    white-space: pre-wrap !important;
		/* #endif*/
    }

    .uni-comment-replay-btn {
        background-color: #FFFFFF;
        font-size: 24upx;
        line-height: 28upx;
        padding: 5upx 20upx;
        border-radius: 30upx;
        color: #333 !important;
        margin: 0 10upx;
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
</style>
