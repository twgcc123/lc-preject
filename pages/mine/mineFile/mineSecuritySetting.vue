<template>
<view class="about-us">
	<view class="container">
		<view class="title">账号绑定</view>
		<view class="tel">
			<text class="tell">绑定手机号</text>
			<view class="telr">
				<text>{{number | hideIdcard }}</text>
				<uni-icons type="arrowright" size="16" color="#838383"></uni-icons>
			</view>
		</view>
	</view>
</view>
</template>

<script>
export default{
	name:"mineSecuritySetting",
	data(){
		return {
			number:"13455556666"
		}
	},
	methods:{
		
	},
	filters: {
		hideIdcard(val) {
			return `${val.substring(0,4)}****${val.substring(val.length-4)}`
		}
	},
}
</script>

<style lang="less" scoped>
/deep/.uni-navbar--border{
	border: none !important;
}
.about-us{
	font-family: PingFangSC-regular;
	.title{
		height: 90upx;
		line-height: 90upx;
		padding: 0 32upx;
		font-size: 28upx;
		color: rgba(16, 16, 16, 1);
	}
	.tel{
		padding: 0 32upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 112upx;
		color: rgba(51, 51, 51, 1);
		background-color: #FFFFFF;
		border: 1px solid rgba(255, 255, 255, 0);
		.tell{
			width: 160upx;
			font-size: 32upx;
		}
		.telr{
			font-size: 28upx;
			text{
				margin-right: 20upx;
			}
		}
	}
}

</style>

