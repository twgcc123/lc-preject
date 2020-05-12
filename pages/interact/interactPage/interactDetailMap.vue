<template>
    <view>
		<cover-view style="position: absolute;z-index: 9999;">0000</cover-view>
        <view class="page-body">
            <view class="page-section page-section-gap">
                <map style="width: 100%; height: 100vh;" :latitude="latitude" :longitude="longitude" :markers="covers">
                </map>
            </view>
        </view>
		<cover-view style="position: absolute; bottom:120px; z-index: 999999;">
			我是导航
		</cover-view>
    </view>
</template>
<script>
export default {
    data() {
        return {
      id:0, // 使用 marker点击事件 需要填写id
            title: 'map',
            latitude: 39.909,
            longitude: 116.39742,
            covers: [{
                latitude: 39.909,
                longitude: 116.39742,
                iconPath: '/static/add.png'
            }, {
                latitude: 39.90,
                longitude: 116.39,
                iconPath: '/static/add.png'
            }]
        }
    },
    methods: {

    }
}
</script>

<style>
	
</style>
