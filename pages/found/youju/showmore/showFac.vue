<template>
	<view class="showFac">
		<view class="head-title">全部设施</view>
		<view class="into-service">
			<view class="title">入住服务</view>
			<uni-grid :column="4" :show-border="false"  :square="false">
			    <uni-grid-item class="item" v-for="(item,index) in serviceList" :key="index">
					<image class="item-icon" src="/static/youju/gou8.svg"></image>
					<text class="item-text">{{ item.text }}</text>
			    </uni-grid-item>
			</uni-grid>
		</view>
		<view class="baseFac">
			<view class="title">基础设施</view>
			<uni-grid :column="4" :show-border="false"  :square="true" :highlight="false">
			    <uni-grid-item class="item" v-for="(item,index) in facList" :key="index">
					<image class="item-icon" :src="item.src"></image>
					<text class="item-text">{{ item.text }}</text>
			    </uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>

<script>
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	export default {
		components: {uniGrid,uniGridItem},
		data() {
			return {
				serviceList:[
					{
						imgsrc: '/static/youju/gou8.svg',
						text: '自助入住'
					},
					{
						imgsrc: '/static/youju/gou8.svg',
						text: '电梯'
					},
					{
						imgsrc: '/static/youju/gou8.svg',
						text: '可预定长期入住'
					},
					{
						imgsrc: '/static/youju/gou8.svg',
						text: '可以存放行李'
					},
					{
						imgsrc: '/static/youju/gou8.svg',
						text: '密码钥匙盒'
					},
				],
				facList:[
					{
						src: '/static/youju/gou8.svg',
						text: '空调'
					},
					{
						src: '/static/youju/gou8.svg',
						text: '洗衣机'
					},
					{
						src: '/static/youju/gou8.svg',
						text: '无线网络'
					},
					{
						src: '/static/youju/gou8.svg',
						text: '衣架'
					},
					{
						src: '/static/youju/gou8.svg',
						text: '书桌/工作区域'
					},
					{
						src: '/static/youju/gou8.svg',
						text: '熨斗'
					},
					{
						src: '/static/youju/gou8.svg',
						text: '室内壁炉'
					},
					{
						src: '/static/youju/gou8.svg',
						text: '电视'
					},
					{
						src: '/static/youju/gou8.svg',
						text: '床单'
					},
					{
						src: '/static/youju/gou8.svg',
						text: '有线电视'
					},
					{
						src: '/static/youju/gou8.svg',
						text: '随身无线路由器'
					},
					{
						src: '/static/youju/gou8.svg',
						text: '网络连接'
					},
				]
			};
		}
	}
</script>

<style lang="less">
.showFac{
	background-color: #FFFFFF;
	padding: 0 30upx;
	.head-title{
		font-size: 44upx;
		color: #333333;
		font-weight: 500;
	}
	.into-service{
		padding: 40upx 0;
		border-bottom: 1upx solid #eaeaea;
	}
	.baseFac{
		margin-top: 40upx;
	}
	.title{
		color: #444444;
		font-size: 26upx;
		margin-bottom: 30upx;
	}
	.item-icon{
		width: 50upx;
		height: 50upx;
		text-align: center;
		margin: 0 auto;
	}
	.item-text{
		color: #444444;
		font-size: 24upx;
		width: 120rpx;
		margin: 0 auto;
		text-align: center;
	}
}
</style>
