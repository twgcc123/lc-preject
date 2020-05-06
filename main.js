import Vue from 'vue'
import App from './App'
import { http } from "./utils/http.js"
import config from "./utils/config.js"
import cuCustom from './colorui/components/cu-custom.vue'
import uniIcons from '@/components/uni-icons/uni-icons.vue';
import helper from '@/utils/helper.js'

Vue.component('cu-custom',cuCustom)
Vue.component('uniIcons',uniIcons)

Vue.config.productionTip = false
Vue.prototype.$http = http; //http请求
Vue.prototype.$baseUrl = config.baseURL; // 用于图片前缀
Vue.prototype.$helper = helper; 
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()




