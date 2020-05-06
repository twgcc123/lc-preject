<template>
	<view class="personal-data">
		<view class="container">
			<view class="box flexlr" v-for="(item,index) in menuList" :key="index">
				<text class="prel">{{item.value}}</text>
				<view class="prer">
					<text @tap="goDetail('/pages/mine/mineFile/minePersonalDataChange')">设置</text>
					<uni-icons type="arrowright" color="#dddddd" size="14"></uni-icons>
				</view>
			</view>		
		</view>
	</view>
</template>

<script>

export default{
	name:"minePersonalData",
	data(){
		return {
			menuList:[
				{
					"id":"p01",
					"value":"性别",
					"status":"1",
					"options":[
						{
							"sex":"男",
							"values":"1",
						},
						{
							"sex":"女",
							"values":"2",
						}
					]
				},
				{
					"id":"p02",
					"value":"年龄",
					"status":"1",
					"options":[
						{
							"sex":"男",
							"values":"1",
						},
						{
							"sex":"女",
							"values":"2",
						}
					]
				},
				{
					"id":"p03",
					"value":"家乡"
				},
				{
					"id":"p04",
					"value":"所在城市"
				},
				{
					"id":"p05",
					"value":"教育"
				},
				{
					"id":"p06",
					"value":"行业"
				}
			],
		}
	},
	methods:{
		change(item){
			let prer = item.options
			console.log(prer)
			// uni.$emit("options",prer)
		},
		goDetail(url){
			uni.navigateTo({url:url})
		},
	},
}
</script>

<style lang="less" scoped>
.flexlr{
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.container{
	background-color: #FFFFFF;
	padding: 0 32upx;
	.box{
		height: 112upx;
		line-height:112upx;
		border-bottom: 1px solid #ECECEC;
		.prel{
			color: rgba(51, 51, 51, 1);
			font-size: 32upx;
		}
		.prer{
			color: rgba(170, 170, 170, 1);
			font-size: 32upx;
			text{
				margin-right: 10upx;
			}
		}
	}
}
	
</style>
