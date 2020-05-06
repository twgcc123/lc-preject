<template>
	<view class="notice">
		<view class="room-notice" v-for="item in notice" :key="item.id">
			<view class=".title">{{item.title}}</view>
			<view class="dcse">{{item.dcse}}</view>
			<view class="content">{{item.content}}</view>
		</view>
	</view>
</template>
<script>
export default{
	name:"roomDetailNotice",
	components: {
	},
	data() {
		return {
			"notice":[
				{
					"id":"01",
					"title":"公开日签创作须知",
					"dcse":"您在「爸妈都好」平台上的行为均必须符合《用户协议》。且须知并遵守以下内容",
					"content":"1、公开日签如引用他人创作必须声明引用方。否则只能设为隐私日签。"	
				},
				{
					"id":"02",
					"title":"公开日签创作须知",
					"dcse":"您在「爸妈都好」平台上的行为均必须符合《用户协议》。且须知并遵守以下内容",
					"content":"1、公开日签如引用他人创作必须声明引用方。否则只能设为隐私日签。"	
				}
			],
		}
	},
	methods:{
		
	},
	onLoad(option){
		console.log(option)
	}
}
</script>

<style lang="less" scoped>
.notice{
	height: 100vh;
	background-color: #FFFFFF;
	font-family: PingFangSC-bold;
	.room-notice{
		background-color: #FFFFFF;
		padding:40upx 48upx;
		.title{
			color: rgba(51, 51, 51, 1);
			font-size: 56upx;
		}
		.dcse{
			margin-top: 40upx;
			color: rgba(0, 0, 0, 1);
			font-size: 36upx;
		}
		.content{
			margin-top: 40upx;
			color: rgba(51, 51, 51, 1);
			font-size: 32upx;
		}
	}
}

</style>
