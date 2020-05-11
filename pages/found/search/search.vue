<template>
	<view class="search">
		<view class="navbar" :style="[{paddingTop: hasNotchInScreen ? '88upx': '44upx'}]">
			<view class="navbar-left" @click="pageTo()">
				<uni-icons color="#f3f3f3" type="arrowleft" size="18"></uni-icons>
			</view>
			<view class="navbar-center">
				<uni-search-bar bgColor="#555555" @confirm="search" @input="input" clearButton="none" cancelButton="none"></uni-search-bar>
			</view>
			<view class="navbar-right">搜索</view>
		</view>
		<view class="content">
			<view class="recent">
				最近
				<uni-icons color="#f3f3f3" type="closeempty" size="18"></uni-icons>
			</view>
			<view class="tags">
				<view class="tags-item" v-for="(item,index) in tagList" :key="index">{{ item }}</view>
			</view>
			<view class="selection">
				<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab>
				<view v-show="TabCur == 0" class="recommend">
					<view v-for="(item,index) in recommendList" :key="index" class="recommend-item">
						<text class="recommend-item-title">{{ item.title }}</text>
						<text v-if="item.is_hot" class="recommend-item-hot">热</text>
					</view>
				</view>
				<view v-show="TabCur == 1" class="recommend">
					<view v-for="(item,index) in recommendList" :key="index" class="recommend-item">
						<text class="recommend-item-title">{{ item.title }}</text>
						<text v-if="item.is_hot" class="recommend-item-hot">热</text>
					</view>
				</view>
				<view v-show="TabCur == 2" class="recommend">
					<view v-for="(item,index) in recommendList" :key="index" class="recommend-item">
						<text class="recommend-item-title">{{ item.title }}</text>
						<text v-if="item.is_hot" class="recommend-item-hot">热</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import WucTab from '@/components/wuc-tab/wuc-tab.vue'
	export default {
		components:{
			uniSearchBar,
			WucTab
		},
		data() {
			return {
				tagList:['北京','篮球','温暖南国','四季如春','张晓琳','疗养','安静舒适便宜...','学习','文化','传统文化'],
				tabList: [
					{ name: '推荐搜索' },
					{ name: '热门话题' },
					{ name: '地域' }
				],
				TabCur: 0,
				recommendList:[
					{
						title: '三亚',
						is_hot: true
					},
					{
						title: '雪景',
						is_hot: true
					},
					{
						title: '温泉养生地',
						is_hot: true
					},
					{
						title: '休闲自在',
						is_hot: false
					},
					{
						title: '中国赏樱',
						is_hot: false
					},
					{
						title: '十大长寿之乡',
						is_hot: false
					}
				]
			};
		},
		methods:{
			tabChange(index) {
				this.TabCur = index;
				console.log('this.TabCur',this.TabCur)
			},
			search(e){
				console.log(e)
			},
			input(e){
				console.log(e)
			},
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
.search{
	background-color: #151619;
	width: 750upx;
	height: 100vh;
}
.navbar{
	width: 750upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	left: 0;
	top: 0;
	padding-left: 32upx;
	padding-right: 40upx;
	.navbar-left{
		line-height: 84upx;
	}
	.navbar-center{
		width: 516upx;
		.uni-searchbar{
			padding: 4px 0 !important;
			background-color: unset !important;
		}
		.uni-searchbar__box{
			border-width: 0 !important;
		}
	}
	.navbar-right{
		color: #f3f3f3;
		font-size: 32upx;
		line-height: 88upx;
	}
}
.content{
	margin-top: 72upx;
	padding: 0 40upx;
	background-color: #151619;
	.recent{
		color: #EEEEEE;
		font-size: 36upx;
		line-height: 50upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.tags{
		display: flex;
		flex-direction: row;
		margin-top: 40upx;
		flex-wrap: wrap;
		.tags-item{
			color: #333333;
			font-size: 28upx;
			line-height: 60upx;
			height: 60upx;
			background-color: #F6F6F6;
			border-radius: 60upx;
			margin-right: 24upx;
			padding: 0 24upx;
			margin-bottom: 24upx;
		}
	}
	.selection{
		margin-top: 36upx;
		.recommend{
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
			margin-top: 44upx;
			.recommend-item{
				width: 312upx;
				color: #AAAAAA;
				font-size: 28upx;
				line-height: 40upx;
				margin-bottom: 48upx;
				display: flex;
				align-items: center;
				.recommend-item-hot{
					width: 32upx;
					height: 32upx;
					font-size: 24upx;
					background-color: #FF6700;
					color: #FFFFFF;
					border-radius: 8upx;
					text-align: center;
					line-height: 32upx;
					margin-left: 12upx;
				}
			}
		}
	}
	
}
</style>
