<template>
		<view>
			<view class="order">
				<orderList></orderList>
			</view>
		</view>
</template>

<script>  
import orderList from "../commom/orderList.vue"
export default {
	name:"mineAllOrder",
	components: {
	 orderList,
	},
    data() {  
        return {  
           
        }  
    },
	methods:{

	}
}  
</script> 

<style lang="less" scoped>

</style>
