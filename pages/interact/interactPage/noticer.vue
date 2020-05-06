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
				<view :class=" item.relation ? 'list-item-right': 'list-item-right red'">{{ item.relation ? item.relation : '+ 关注'}}</view>
				<!-- <view class="list-item-right red"> + 关注</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:[
					{
						id: 1,
						avatar: '/static/hudong/c1.jpg',
						nikename: '郑少秋',
						desc: '知名演员、歌手',
						relation: null
					},
					{
						id: 2,
						avatar: '/static/hudong/c2.jpg',
						nikename: '郑少秋',
						desc: '知名演员、歌手',
						relation: '已相互关注'
					},
					{
						id: 3,
						avatar: '/static/hudong/c3.jpg',
						nikename: '郑少秋',
						desc: '知名演员、歌手',
						relation: '已关注'
					},
				]
			};
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
			color: #999999;
			font-size: 26upx;
			text-align: right;
			line-height: 36upx;
		}
		.red{
			color: #f1605b;
		}
	}
}
</style>
