<template>
	<view class="order-score">
		<view class="container">
			<view class="title">请您评分</view>
			<roomOrderItem></roomOrderItem>
			<!-- 星评  start -->
			<view class="content">
				<view class="score-item" v-for="item in scoreItem" :key="item.id">
					<view class="item-title">{{item.title}}</view>
					<view class="item-rote">
						<view class="score">
							<uni-rate size="20" @change="scores($event,item.id)" color="#DEDEDE" max="5" :value="item.rote" margin = "10"></uni-rate>
						</view>
						<text class="rotes" v-show="item.rote ===1">差评</text>
						<text class="rotes" v-show="item.rote ===2">一般</text>
						<text class="rotes" v-show="item.rote ===3">好</text>
						<text class="rotes" v-show="item.rote ===4">很好</text>
						<text class="rotes" v-show="item.rote ===5">非常好</text>
					</view>
				</view>
			</view>
			<!-- 星评  end -->
			
			<!-- 添加评价  start -->
			<view class="add-opin">
				<view class="opinl">
					<text>建议细节点评，</text><text>因为您的意见很重要</text>
				</view>
				<view class="opinr"> + 细节点评 </view>
			</view>
			<!-- 添加评价  end -->
			
			<!-- textarea -->
			<view class="text-opin">
				<textarea v-model="text" maxlength="500" class="txt" placeholder="优居满足您的期待吗？谈谈您的感受吧~" />
			</view>
			<view class="submi" @tap="submi">发布</view>
		</view>
	</view>
</template>

<script>
import uniIcons from "@/components/uni-icons/uni-icons.vue"
import uniRate from '@/components/uni-rate/uni-rate.vue'
import roomOrderItem from "./commom/roomOrderItem.vue"
export default{
	components:{
		uniRate,
		uniIcons,
		roomOrderItem
	},
	data(){
		return{
			text:"",
			scoreItem:[
				{
					"id":"r01",
					"title":"居住环境",
					"rote":"0",
				},
				{
					"id":"r02",
					"title":"硬件设施",
					"rote":"0",
				},
				{
					"id":"r03",
					"title":"舒心便利",
					"rote":"0",
				},
				{
					"id":"r04",
					"title":"暖助评分（名称：康友新）",
					"rote":"0",
				}
			],
		}
	},
	methods:{
		scores(e,id){
			this.scoreItem.forEach(item =>{
				if(item.id === id){
					item.rote = e.value
				}
			})
		},
		
		// 提交保存
		submi(){
			console.log("提交")
		}
	},
	computed:{}
}
</script>

<style lang="less" scoped>
.order-score{
	font-family: PingFangSC-bold;
	background-color: #FFFFFF;
	padding-bottom: 150upx;
	.container{
		padding: 20upx 48upx;
		.title{
			color: rgba(51, 51, 51, 1);
			font-size: 28px;
			margin-bottom: 20upx;
		}
		.content{
			.score-item{
				padding: 24upx 0;
				border-bottom: 1upx solid #DDDDDD;
				.item-title{
					color: rgba(51, 51, 51, 1);
					font-size: 36upx;
					margin-bottom: 20upx;
				}
				.item-rote{
					height: 48upx;
					display: flex;
					align-items: center;
					.score{
						flex: 1;
						margin-left: -10px;
						height: 40px;
						margin-bottom: -39px;
					}
					.rotes{
						flex: 1;
						margin-left: 30upx;
						font-size: 36upx;
						color: #666;
					}
				}
			}
		}
		.add-opin{
			padding: 32upx 0;
			border-bottom: 1upx solid #DDDDDD;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.opinl{
				flex: 1;
				display: flex;
				flex-flow: column;
				text{
					margin-top: 6upx;
					color: rgba(51, 51, 51, 1);
					font-size: 28upx;
				}
			}
			.opinr{
				width: 194upx;
				height: 64upx;
				line-height: 64upx;
				border-radius: 4upx;
				color: rgba(240, 156, 86, 1);
				font-size: 32upx;
				text-align: center;
				font-family: Arial;
				border: 1px solid rgba(240, 156, 86, 1);
			}
		}
		.text-opin{
			margin-top: 20upx;
			width: 100%;
			height: 166upx;
			line-height: 46upx;
			background-color: rgba(255, 255, 255, 0);
			color: rgba(153, 153, 153, 1);
			font-size: 32upx;
			font-family: Microsoft Yahei;
		}
		.submi{
			position: fixed;
			bottom: 100upx;
			z-index: 99;
			width: 654upx;
			height: 100upx;
			line-height:100upx;
			border-radius: 4upx;
			background-color: rgba(236, 154, 68, 1);
			color: rgba(255, 255, 255, 1);
			font-size: 32upx;
			text-align: center;
			font-family: Arial;
			border: 1px solid rgba(255, 255, 255, 0);
		}
	}

}
</style>
