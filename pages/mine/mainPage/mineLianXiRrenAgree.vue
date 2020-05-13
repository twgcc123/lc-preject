<template>
	<view class="">
		<!-- 头部 -->
		<!-- 头部 -->
		<view class="header" :style="[{paddingTop: hasNotchInScreen ? '88upx': '44upx'}]">
			<view class="header-content">
				<uni-icons class="icons-back" type="arrowleft" color="#333333" size="22" @tap="goBack" :style="[{Top: hasNotchInScreen ? '110upx': '66upx'}]"></uni-icons>
				<view class="header-title">亲友关系申请</view>
			</view>
		</view>

		<!-- 推荐关注的人 -->
		<view class="agree-list">
			<view class="list-item" v-for="(item,index) in list" :key="index" @tap="pageTo('/pages/interact/interactPage/interactPersonaHome')">
				<view class="list-left">
					<image :src="item.image_app" mode=""></image>
					<text>{{item.nickname}}</text>
				</view>
				<view class="list-right">
					<text class="agree" v-if="item.status == 0">同意</text>
					<text class="hasAgree" v-if="item.status == 1">已同意</text>
					<text class="noAgree" v-if="item.status == 2">已过期</text>
				</view>
			</view>
		</view>
	
	</view>
</template>

<script>

export default {

	data() {
		return {
			list:[
				{
					id:1,
					advada_img:"/static/hudong/c1.jpg",
					name:"张三",
					status:0,
				},
				{
					id:2,
					advada_img:"/static/hudong/c2.jpg",
					name:"孙悟空",
					status:1,
				},
				{
					id:3,
					advada_img:"/static/hudong/c3.jpg",
					name:"里斯可达",
					status:2,
				},
				{
					id:4,
					advada_img:"/static/hudong/c4.jpg",
					name:"普金",
					status:2,
				},
				{
					id:5,
					advada_img:"/static/hudong/c1.jpg",
					name:"夏艺旋",
					status:2,
				},
			]
		};
	},

	methods: {
		goBack(){
			uni.navigateBack({})
		},
		async getApplyList() {
		    let token=uni.getStorageSync('token')
			let param = this.$helper.setConfig('&token=' + token);
			let res = await this.$http.request({
				method: 'post',
				url: '/users/Linkman/new_family_list',
				data: {
					signature: param.signature,
					timestamp: param.timestamp,
					token: token
				}
			});
			console.log('55555',res)
			if (res.state == 10000) {
				this.list=res.data
			   
			}
		
		},
		
		pageTo(url) {
			uni.navigateTo({
				url: url
			});
		},
	},
	onLoad(){
		this.getApplyList();
	}
};
</script>

<style lang="less" scoped>
.header {
	position: sticky;
	top: 0;
	z-index: 99;
	background-color: #f3f3f3;
	/*#ifdef MP-WEIXIN*/
		padding: 44upx 20px 0 20px;
	/*#endif*/
	/*#ifdef APP-PLUS*/
		padding: 88upx 20px 0 20px;
	/*#endif*/
	.header-content {
		height: 90upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		align-items:;
		.header-title {
			text-align: center;
			color: #000000;
			font-size: 36upx;
			font-weight: bold;
			flex: 1;
		}
		.icons-back {
			position: fixed;
			top: 66upx;
			left: 32upx;
		}
	}
}
.agree-list{
	.list-item{
		height: 128upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 2upx solid #f3f3f3;
		padding: 0 40upx;
		background-color: #FFFFFF;
		.list-left{
			display: flex;
			align-items: center;
			image{
				width: 80upx;
				height: 80upx;
				border-radius: 50%;
			}
			text{
				color: rgba(51, 51, 51, 1);
				font-size: 32upx;
				margin-left: 24upx;
			}
		}
		.list-right{
			font-size: 32upx;
			.agree{
				color: rgba(0, 154, 252, 1);
				
			}
			.hasAgree,.noAgree{
				color: #AAAAAA;
			}
		}
	}
}


</style>
