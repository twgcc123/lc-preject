<template>
	<view class="know-list">
		<!-- 新的关注 -->
		<view>
			<view class="may-nowk-title">可能认识</view>
			<view class="list" v-for="(item, index) in list" :key="index" >
				<view class="list-left" @tap="pageTo('/pages/interact/interactPage/interactPersonaHome')">
					<image class="advada_img" :src="item.image_app"></image>
				</view>
				<view class="list-right">
					<text class="name" @tap="pageTo('/pages/interact/interactPage/interactPersonaHome')">{{ item.nickname }}</text>
					<view class="" @tap="guanzhu(item)">
						<view :class="[item.attention=='0'?'guanzhu0':'guanzhu1']" >
							<text v-if="item.attention=='0'" style="font-size: 36upx;font-weight: normal;">+</text>
							<text @clcik.stop="switchState(item.attention)">{{item.attention=='0' ? '关注' :(item.attention=='2' ? '相互关注':'已关注')}}</text>
						</view>
						<!-- <view class="guanzhu1" v-else>已关注</view> -->
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default: () => []
		}
	},
	methods:{
		guanzhu(item){
			item.status = !item.status 
		},
		
		pageTo(url) {
			uni.navigateTo({
				url: url
			});
		},
		async switchState(item){
			var is_show=item.attention==0?1:0
			let user=uni.getStorageSync('USERINFO')
			 let token=user.token
							let param = this.$helper.setConfig('&token='+token+'&userby_id=' + item.user_id+'&is_show='+is_show);
								let res = await this.$http.request({
									method: 'post',
									url: '/index/Video/video_attention',
									data: {
										signature: param.signature,
										timestamp: param.timestamp,
										token:token,
										userby_id:e.user_id,
										is_show:is_show
									
									}
								});
								console.log(res)
								if(res.state == 10000){
			                    item.attention=res.data
								// this.$set(e,'video_attention',res.data)
							
								
							}
		}
		
	}
};
</script>

<style lang="less" scoped>
.know-list {
	background-color: #ffffff;
	.list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 160upx;
		text-align: center;
		padding-left: 40upx;
		.list-left{
			.advada_img{
				height: 80upx;
				width: 80upx;
				border-radius: 50%;
			}
		}
		.list-right{
			height: 160upx;
			flex: 1;
			margin-left: 24upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 2upx solid #f3f3f3;
			padding-right: 40upx;
			.name{
				color: rgba(51, 51, 51, 1);
				font-size: 36upx;
			}
			.guanzhu0 {
				width: 120upx;
				height: 48upx;
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				border: 2upx solid #ff9500;
				border-radius: 24upx;
				color: #ff9500;
			}
			.guanzhu1{
				width: 120upx;
				height: 48upx;
				line-height: 48upx;
				text-align: center;
				border: 2upx solid #999999;
				border-radius: 24upx;
				color: #999999;
			}
		}
	}
	.may-nowk-title{
		height: 64upx;
		line-height: 64upx;
		padding: 0 40upx;
		background-color: #F3F3F3;
		color: #999999;
		font-size: 26upx;
	}
}
</style>
