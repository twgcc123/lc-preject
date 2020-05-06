<template>
	<view class="user-list">
		<!-- 头部 -->
		<view class="header">
			<view class="header-content">
				<uni-icons class="icons-back" type="back" color="#555555" size="24" @tap="goBack"></uni-icons>
				<view class="header-title">队员列表</view>
			</view>
		</view>

		<!-- 主体内容 -->
		<view class="container">
			<block>
				<view class="">
					<view class="list-info" v-for="(item,index) in UserList" :key="index" @tap="pageTo('/pages/interact/interactPage/interactPersonaHome')">
						<view class="avadar">
							<image :src="item.avada_img" mode=""></image>
							<text>{{item.name}}</text>
						</view>
						<view class="qiandao">
							<image v-if="item.guanxi_status" src="../../../static/hudong/qizhi-orgin1.png" mode=""></image>
							<image  v-if="item.qian_status" src="../../../static/hudong/qian.png" mode=""></image>
						</view>
					</view>
				</view>
			</block>
			
			<block>
				
			</block>
		</view>
	</view>
</template>

<script>
import interactData from '@/utils/interact.data.js';
import uniIcons from '@/components/uni-icons/uni-icons.vue';

export default {
	name: 'concomDetailUserList',
	components: {
		uniIcons
	},
	props:{
		isBack: {
			type: [Boolean, String],
			default: false
		},
		index: {
			type: String,
			default: '1'
		},
		list:{
			type:Array,
			default:()=>[]
		}
	},
	data() {
		return {
			UserList:interactData.userList, // js 用户列表数据
		};
	},
	onShow() {
		
	},
	onLoad() {},
	updated() {},
	methods: {
		pageTo(url) {
			uni.navigateTo({
				url: url
			});
		},
		goBack() {
			uni.navigateBack({});
		},
	}
};
</script>

<style lang="less" scoped>
.user-list {
	font-family: PingFangSC-regular;
}

.header {
	background-color: #FFFFFF;
	position: sticky;
	top: 0;
	z-index: 99;
	padding: 44px 20px 0 20px;
	.header-content {
		height: 45px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.header-title {
			text-align: center;
			color: #000000;
			font-size: 36upx;
			font-weight: bold;
			flex: 1;
		}
		.icons-back {
			position: fixed;
			top: 55px;
			left: 16px;
		}
	}
}

.container{
	padding: 0 40upx;
	background-color: #FFFFFF;
	margin-top: 22upx;
	.list-info{
		height: 120upx;
		border-bottom: 1px solid #ededed;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.avadar{
			width: 50%;
			overflow: hidden;
			display: flex;
			align-items: center;
			image{
				margin-right: 20upx;
				height: 72upx;
				width: 72upx;
				border-radius: 50%;
				background-color: #C8C7CC;
				overflow: hidden;
			}
		}
		.qiandao{
			text-align: right;
			padding-right: 20upx;
			width: 50%;
			box-sizing: border-box;
			image{
				margin-left: 40upx;
				width: 32upx;
				height: 32upx;
			}
		}
	}
}

</style>

