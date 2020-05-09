<script>
	import Vue from 'vue'
	export default {
		onLaunch: function() {
			
			uni.getSystemInfo({
				success: function(e) {
					
					// #ifndef MP
					console.log('e.statusBarHeight',e.statusBarHeight)
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif       
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})
			uni.setStorageSync('distance', 0);
			uni.setStorageSync('sysheight', 0);		
			console.log('App Launch')
			
			// uni.onTabBarMidButtonTap(()=>{  
			// 	console.log('11111') 
			// 	 Vue.prototype.StatusBar
			// });  
			
			// #ifndef MP-WEIXIN
			// 是否是刘海屏
			Vue.prototype.hasNotchInScreen = plus.navigator.hasNotchInScreen();
			console.log('hasNotchInScreen',this.hasNotchInScreen)
			// #endif
			
			// 是否为iphoneX
			Vue.prototype.isIphoneX = false;
			if(uni.getSystemInfoSync().model == 'iPhoneX' || uni.getSystemInfoSync().model == 'iPhoneXR' || uni.getSystemInfoSync().model == 'iPhoneXS'){
				Vue.prototype.isIphoneX = true;
			}
			
			// 获取本地token
			Vue.prototype.$token = '';
			uni.getStorage({
			    key: 'USERINFO',
			    success: function (res) {
					Vue.prototype.$token = res.data.token;
			    }
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* #ifndef APP-PLUS-NVUE */
	    @import "colorui/main.css";
	    @import "colorui/icon.css";
	/* #endif*/
	
</style>
