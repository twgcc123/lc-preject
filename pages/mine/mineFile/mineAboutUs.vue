<template>
<view class="about-us">
		<view class="container">
			<view class="content">主人很懒，什么都没有留下...</view>
			<view class="context">
				<rich-text>
					支持HTML，URL链接
				</rich-text>
			</view>
		</view>
</view>
</template>

<script>

export default{
	name:"mineAboutUs",
	data(){
		return {
			
		}
	},
	methods:{
	},
}
</script>

<style lang="less" scoped>
.about-us{
	height: 100vh;
	background-color: #FFFFFF;
}
.content{
	width: 750upx;
	height: 200upx;
	line-height: 200upx;
	background-color: rgba(247, 247, 247, 1);
	text-align: center;
	border: 1px solid rgba(255, 255, 255, 0);
}
.context{
	padding-top: 200upx;
	text-align: center;
}
</style>
