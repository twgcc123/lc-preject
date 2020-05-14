<template>
	<view class="go-back" @tap="goBack">
		<uni-icons :type="types"  :color="colors" :size="sizes"></uni-icons>
	</view>
</template>

<script>
export default {
	name:"goBack",
	components: {},
	props:{
		types:{
			type:String,
			default:"",
		},
		colors:{
			type:String,
			default:"",
		},
		sizes:{
			type:Number,
			default:"",
		}
	},
	data() {
		return{}
	},
	methods:{
		goBack(){
			uni.navigateBack()
		},
	},
	onReady() {},
	
	onLoad() {},
}
</script>

<style lang="less" scoped>
	.go-back{
		position: sticky;
		width: 60upx;
		z-index: 9999;
		height: 100upx;
		line-height: 100upx;
		margin-left: 40upx;
		box-sizing: border-box;
	}
</style>
