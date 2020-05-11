<template>
	<view class="assistant">
		<!-- 头部搜索 -->
		<view class="search" :style="[{ paddingTop: hasNotchInScreen ? '128upx' : '88upx' }]">
			<view class="content">
				<view class="search-main">
					<uni-icons type="search" color="#B6B6B6" class="search-icon" size="18"></uni-icons>
					<input type="text" value="" class="search-input" placeholder="搜索优居名称" v-model="keyWord"/>
				</view>
				<!-- @tap="pageTo('/pages/assistant/assistantAcceptance')" -->
				<text class="cancel" @tap="cancel">取消</text>
			</view>
		</view>

		<!-- 数据列表内容 -->
		<view class="container">
			<view class="title">全部优居</view>
			<view class="title-heeight"></view>
			
			<view class="list" v-for="(item,index) in listData" :key="index" @tap="hanlderChoose(item)">
				<view class="location">
					<image class="location-icon" v-if="item.address_status == 1" src="/static/dongtai/location.svg" >
					<view v-else class="yuans"></view>
				</view>
				<view class="address">
					<view class="a-title">{{item.title}}</view>
					<view class="a-address">{{item.address}}</view>
				</view>
			</view>
			
			<view class="search-container" v-show="keyWord">
				<!-- <scroll-view style="height:100%;"> -->
					<view class="search-list" v-for="(list,inds) in searchList" :key="inds" @tap="hanlderChoose(list)">
						<view class="location">
							<image class="location-icon" v-if="list.address_status == 1" src="/static/dongtai/location.svg" >
							<view v-else class="yuans"></view>
						</view>
						<view class="address">
							<view class="a-title">{{list.title}}</view>
							<view class="a-address">{{list.address}}</view>
						</view>
					</view>
					<view class="hasNoData" v-show="hasNoData">搜索不存在</view>
				<!-- </scroll-view>	 -->
			</view>
		</view>
	</view>
</template>

<script>
import dataList from '@/utils/assistant.js';

export default {
	components: {},
	data() {
		return {
			keyWord: "",
			searchList:[],
			timer: null,
			listData: dataList.assistantAddressSearch,
		};
	},
	onShow() {},
	onLoad() {},
	updated() {},

	methods: {
		pageTo(url) {
			uni.navigateTo({
				url: url
			});
		},
		
		// 清楚搜索框
		cancel(){
			if(this.keyWord == ""){
				uni.navigateBack({})
			}else{
				this.keyWord = ""
			}
		},
		
		// 选择地址
		hanlderChoose(item){
			let addressChoose = item
			uni.$emit('addressChoose',addressChoose)
			uni.navigateBack({});
		}
			
	},
	
	computed: {
	  hasNoData() {
	    return !this.searchList.length;
	  }
	},
	
	watch: {
	  keyWord() {
		if (this.timer) {
		  clearTimeout(this.timer);
		}
		
	    if (!this.keyWord) {
	      this.searchList = [];
	      return;
	    }
		
		let datas = this.listData
		console.log(datas)  // 有数据
		this.timer = setTimeout(() => {
	      const result = [];
	        datas.some(value => {
				console.log(value)
	          if (
	            value.title.indexOf(this.keyWord) > -1 ||
	            value.address.indexOf(this.keyWord) > -1
	          ) {
	            result.push(value);
	          }
	        });
	        this.searchList = result;
	    });
	  }
	},
	
};
</script>

<style lang="less" scoped>
.assistant {
	padding-bottom: 80upx;
	font-family: PingFangSC-bold;
	background-color: #ffffff;
}

.search {
	position: sticky;
	top: 0;
	z-index: 999;
	padding: 88upx 20upx 0 20upx;
	background-color: #FFFFFF;
	.content {
		height: 90upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.search-main {
			flex: 1;
			position: relative;
			height: 72upx;
			background-color: #f3f3f3;
			border-radius: 10upx;
			.search-icon {
				position: absolute;
				left: 20upx;
				top: 18upx;
			}
			.search-input {
				height: 72upx;
				line-height: 72upx;
				padding-left: 60upx;
				font-size: 30upx;
			}
		}
		.cancel {
			margin-left: 36upx;
			color: rgba(68, 97, 123, 1);
			font-size: 32upx;
		}
		/* #ifdef MP-WEIXIN */
		margin-right: 190upx;
		/* #endif */
	}
}

.container{
	position: relative;
	background-color: #FFFFFF;
	.title{
		background-color: #FFFFFF;
		width: 100%;
		position: fixed;
		top: 178upx;
		z-index: 99;
		margin-left:20upx;
		padding-left: 28upx;
		height: 128upx;
		line-height: 128upx;
		color: rgba(51, 51, 51, 1);
		font-size: 32upx;
		font-weight: bold;
		border-bottom: 1px solid #f3f3f3;
	}
	.title-heeight{height: 128upx;}
	.list,.search-list,.hasNoData{
		background-color: #FFFFFF;
		margin-left: 20upx;
		padding-left:28upx;
		display: flex;
		align-items: center;
		height: 128upx;
		border-bottom: 1px solid #f3f3f3;
		.location{
			.location-icon{
				width: 32upx;
				height: 32upx;
				color: #474747;
			}
			.yuans{
				width: 32upx;
				height: 32upx;
				border: 10upx solid #f2f2f2;
				border-radius: 50%;
			}
		}
		.address{
			flex: 1;
			margin-left: 22upx;
			.a-title{
				color: rgba(51, 51, 51, 1);
				font-size: 32upx;
				margin-bottom: 8upx;
			}
			.a-address{
				color: rgba(153, 153, 153, 1);
				font-size: 24upx;
			}
		}
	}
	.search-container{
		position: fixed;
		top: 217upx;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 999;
		background-color: #FFFFFF;
	}
	.hasNoData{
		font-size: 32upx;
		color: #333333;
	}
}

</style>
