<template>
	<view class="sun-tech-card">
		<view class="container">
			<view class="money">
				<view class="title">可用余额</view>
				<view class="only-money">
					<text class="yl">¥</text><text class="yr">999.91</text>
				</view>
			</view>
			<view class="card flexbox" @tap="goDetail('/pages/mine/mineFile/mineSunTechCardRecharge')">
				<view class="card-img"><image src="/static/nime/sunteck/recharge.svg" mode=""></image></view>
				<view class="card-txt card-bottom flexbox">
					<text>充值</text>
					<uni-icons type="arrowright" size="14"  color="#838383"></uni-icons>
				</view>
			</view>
			<view class="card flexbox"  @tap="goDetail('/pages/mine/mineFile/mineSunTechCardWithdrawal')">
				<view class="card-img"><image src="/static/nime/sunteck/withdrawal.svg" mode=""></image></view>
				<view class="card-txt flexbox">
					<text>提现</text>
					<uni-icons type="arrowright" size="14"  color="#838383"></uni-icons>
				</view>
			</view>
		</view>
		<view class="record" @tap="goDetail('/pages/mine/mineFile/mineBillRecord')">账单记录</view>
	</view>
</template>

<script>

export default{
	name:"mineSunTechCard",
	data(){
		return {}
	},
	methods:{
		goDetail(url){
			uni.navigateTo({url:url})
		},
	},
}
</script>

<style lang="less" scoped>
/deep/.uni-navbar--border{
	border: none !important;
}
.flexbox{
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.sun-tech-card{
	height: 100vh;
	background-color: #F3F3F3;
	font-family: PingFangSC-regular;
	.money{
		padding: 0 40upx;
		height: 280upx;
		text-align: center;
		background-color: rgba(243, 243, 243, 1);
		border: 1px solid rgba(255, 255, 255, 0);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		.title{
			height: 40upx;
			color: rgba(102, 102, 102, 1);
			font-size: 28upx;
			margin-top: 40upx;
		}
		.only-money{
			margin-top: 50upx;
			height: 134upx;
			.yl{
				color: rgba(51, 51, 51, 1);
				font-size: 56upx;
				margin-left: 4upx;
			}
			.yr{
				color: rgba(51, 51, 51, 1);
				font-size: 92upx;
			}

		}
	}
	.card{
		padding-left: 40upx;
		background-color: #FFFFFF;
		height: 92upx;
		border: 1px solid rgba(255, 255, 255, 0);
		.card-img{
			width: 48upx;
			height: 48upx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.card-txt{
			flex: 1;
			height: 100%;
			padding-right: 40upx;
			margin-left: 20upx;
			text{
				width: 80upx;
				color: rgba(51, 51, 51, 1);
				font-size: 32upx;
			}
		}
	}
	.card-bottom{
		border-bottom: 1upx solid #EEEEEE;
	}
}
.record{
	position: fixed;
	left: 0;
	right: 0;
	bottom: 50upx;
	text-align: center;
	color: rgba(153, 153, 153, 1);
	font-size:28upx;
}
</style>
