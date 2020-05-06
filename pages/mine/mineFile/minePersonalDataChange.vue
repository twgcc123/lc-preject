<template>
	<view class="data-change">
		<view class="container">
			<view class="list">
				<text>博士</text><text>.。</text>
			</view>
			<view class="list">
				<text>博士</text><text>.。</text>
			</view>
			<view class="list">
				<text>博士</text><text>.。</text>
			</view>
			<view class="list">
				<text>博士</text><text>.。</text>
			</view>
			<view class="list">
				<text>博士</text><text>.。</text>
			</view>
		</view>
	</view>
</template>

<script>

export default {
	name:"minePersonalDataChange",
	computed: {},
	data() {
		return {
			options:[],
		}
	},
	props: {
		// value: {
		// 	type: Number,
		// 	defalut:'',
		// 	require: true
		// },
		// options: {
		// 	type: Array,
		// 	defalut: [],
		// 	require: true
		// }
	},
	onReady() {
		let _this = this
		uni.$on('options',function(res){
			console.log(res)
			let datas = res
			
			console.log(datas)
		})
	},
	onLoad() {
	
	},
	computed:{

	},

	methods: {

	}
}
</script>

<style lang="less">
.container{
	background-color: #FFFFFF;
	padding: 0 32upx;
}
.list{
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 112upx;
	line-height:112upx;
	border-bottom: 1px solid #ECECEC;
	color: #333333;
	font-size: 28upx;
}
</style>
