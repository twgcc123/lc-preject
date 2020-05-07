<template>
	<view class="">
		<!-- 头部 -->
		<!-- 头部 -->
		<view class="header">
			<view class="header-content">
				<uni-icons class="icons-back" type="arrowleft" color="#333333" size="22" @tap="goBack"></uni-icons>
				<view class="header-title">亲友关系申请</view>
			</view>
		</view>

		<!-- 推荐关注的人 -->
		<view class="agree-list">
			<view class="list-item" v-for="(item,index) in list" :key="index">
				<view class="list-left">
					<image :src="item.advada_img" mode=""></image>
					<text>{{item.name}}</text>
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
	}
};
</script>

<style lang="less" scoped>
.header {
	background-color: #f3f3f3;
	position: sticky;
	top: 0;
	z-index: 99;
	padding: 44px 20px 0 20px;
	.header-content {
		height: 45px;
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
			top: 110upx;
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
