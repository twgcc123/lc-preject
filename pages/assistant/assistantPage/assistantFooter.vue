<template>
	<view class="footer">
		<view v-for="(item,index) in tabList" :key="index" class="tab-item" @tap="onClickTab(index)">
			<view class="tabar_list">
				<view class="tabar_img">
					<image :src="currentTab==index ? item.img_url_bg : item.img_url"></image>
				</view>
				<view :class="['title',currentTab == index ? 'activeTab' : '',currentTab == 1 ? 'activeTab-color' : '']">{{item.title}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import dataList from '@/utils/assistant.js';
	export default {
		components: {

		},
		props:{
			tabList:{
				type:Array,
				default:()=>[]
			},
			activeTab: {
				type: Number,
				default: 0
			},
		},
		data() {
			return {
				currentTab: 0,
			}
	
		},
		watch: {
			activeTab: {
				handler: function(newValue, oldValue) {
					this.currentTab = newValue;
				},
				immediate: true
			}
		},
		methods: {
			onClickTab(index) {
				console.log(index)
				this.currentTab = index;
				this.$emit('onClickTab', index);
			}
		},
		onShow() {},
		onLoad() {},
		updated() {},
	};
</script>

<style lang="less" scoped>
	.footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		box-sizing: border-box;
		height: 168upx;
		padding-bottom: 68upx;
		background-color: #FFFFFF;
		border-top: 1upx solid #F5F5F5;
		display: flex;
		z-index: 3;
		.tab-item {
			width: 33.333%;
			color: #C1C1C1;
			font-size: 30upx;
			text-align: center;

			.tabar_list {
				margin: 0 auto;
				margin-top: 14upx;
				width: 130upx;
				// background-color: #FF9700;
				.tabar_img {
					image {
						width: 56upx;
						height: 56upx;
						border: 0;
					}
				}

				.title {
					font-size: 28upx;
					// margin-top: 4upx;
					color: #CACACA;
				}
				.activeTab {
					color: #ff8836;
				}
				.activeTab-color{
					color: #CACACA !important;
				}
			}
		}
	}

</style>
