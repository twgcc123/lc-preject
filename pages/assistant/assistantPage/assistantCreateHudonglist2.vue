<template>
	<view class="creat-hudong">
		<!-- 头部搜索 -->
		<view class="hudong-header" :style="[{paddingTop: hasNotchInScreen ? '88upx': '44upx'}]">
			<view class="haed">
				<text class="cancel" @tap="cancel">取消</text>
				<text class="title">创建互动</text>
				<text class="complete" @tap="complete">完成</text>
			</view>
		</view>
		

		<!-- 列表 -->
		<view class="container">
			<view class="user-info">
				<image class="adva_imgs" src="/static/hudong/c2.jpg" mode=""></image>
				<view class="info-item">
					<view class="user_name">吴春江</view>
					<view class="user_id">广东吴彦祖 （ID：12349）</view>
				</view>
			</view>
			<view class="type-list"  @tap="pageTo('/pages/assistant/assistantPage/assistantCreateHudonglist2Type')">
				<view class="dcse">
					<text class="yuans"></text>
					<text>选择互动类型</text>
				</view>
				<uni-icons class="search-icon" type="arrowright" color="#ACACAC" size="18"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "assistantCreateHudonglist2",
		components: {
			
		},
		props: {

		},
		data() {
			return {}
		},
		onShow() {},
		onLoad() {

		},
		updated() {},
		methods: {
			pageTo(url) {
				uni.navigateTo({
					url: url
				})
			},
			cancel(){
				uni.navigateBack({})
			},
			
			complete(){
				
			}
			
		},
		computed: {

		}
	};
</script>

<style lang="less" scoped>
	.creat-hudong {
		font-family: PingFangSC-regular;

		.hudong-header {
			position: sticky;
			top: 0;
			padding-top: 88upx;
			background-color: #FFFFFF;
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
			margin-top: 24upx;
			.user-info{
				background-color: #FFFFFF;
				padding: 0 40upx;
				height: 128upx;
				display: flex;
				align-items: center;
				.adva_imgs{
					width: 80upx;
					height: 80upx;
					border-radius: 8upx;
				}
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
			.type-list{
				margin-top: 24upx;
				padding: 0 40upx;
				height: 112upx;
				background-color: #FFFFFF;
				color: rgba(153, 153, 153, 1);
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
						background-color: rgba(170, 170, 170, 1);
						margin-right: 36upx;
						border-radius: 50%;
					}
				}
			}
				
		}
		
	}
</style>
