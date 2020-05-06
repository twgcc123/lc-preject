<template>
	<view>
		<uni-list>
		    <uni-list-item @click="pageTo('/pages/interact/interactPage/setNickname')" title="设置备注" rightText="老张"></uni-list-item>
			<uni-list-item class="list-item" @click="pageTo('/pages/interact/interactPage/relation')" title="关系" rightText="亲友"></uni-list-item>
			<uni-list-item class="list-item" title="不看ta的动态" :show-switch="true" :show-arrow="false"></uni-list-item>
			<uni-list-item class="list-item" title="允许ta拨打我的电话" :show-switch="true" :show-arrow="false" color="#00e266"></uni-list-item>
			<uni-list-item class="list-item" title="投诉/举报"></uni-list-item>
		</uni-list>
		<button class="unfollow">取消关注</button>
	</view>
</template>
<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				
			};
		},
		methods:{
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
.uni-list-item{
	background-color: #FFFFFF;
}

.list-item{
	margin-bottom: 20upx;
}
.unfollow{
	border: 0;
	background-color: #FFFFFF;
	color: #FF3A30;
	font-size: 34upx;
	line-height: 108upx;
}
button::after{
	border: 0 !important;
}
</style>
