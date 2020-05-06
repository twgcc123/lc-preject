import vue from "../main.js";
import config from './config.js'
// import md5 from 'js-md5'

let http = {};
// var appid = 'bmdh00ecfbc943a124151'; // 加密过后的AppId
// var timestamp = (new Date()).getTime(); // 当前时间戳
// var parameter = '&page=1'+'&limit=3'; // (数据参数没有就不参与签名)
// var str = 'timestamp=' + timestamp + '&page=1' + '&limit=3' + '&key=' + appid;
// var signature = md5(str).toUpperCase(); //密钥

http.request = function({ method = "GET", url, data, loadingStatus = true }) {
  return new Promise((resolve, reject) => {
    if (loadingStatus) {
      uni.showLoading({ title: "Loading.." });
    }
    uni.request({
      url: config.baseURL + url,
      method: method,
      data: data,
      header: {
        "content-type": "application/json",
        Token: uni.getStorageSync("TOKEN") || "",
        way: "app"
      },
      dataType: "json",
      fail: res => {
        let ret = new Object();
        ret.code = 0;
        ret.msg = res.errMsg;
        reject(ret);
      },
      complete: res => {
        // console.log("complete", res);
        if (res.statusCode === 200) {
          //成功
          uni.hideLoading();
          resolve(res.data);
        } else if (res.statusCode === 401) {
          // uni.removeStorageSync("USER_INFO");
          // uni.reLaunch({ url: "/pages/login/login" });
        } else {
          uni.hideLoading();
          let ret = new Object();
          ret.code = 0;
          ret.msg = res.errMsg;
          reject(ret);
        }
      }
    });
  });
};

export { http };
