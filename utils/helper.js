import md5 from 'js-md5';

const setConfig = function(param) {
	console.log('666666',param)
	let timestamp = new Date().getTime();
	let appid = 'bmdh00ecfbc943a124151';
	let str = 'timestamp=' + timestamp + param + '&key=' + appid;
	let signature = md5(str).toUpperCase();
	return {
		timestamp: timestamp,
		appid: appid,
		str: str,
		signature: signature
	};
};
/**
 * @desc 时间戳转换
 * @param {Object} param 时间戳
 */
function add0(m){
	return m < 10 ? '0' + m : m;
}

const timestampToDate = function(param){
	let time = new Date(param);
	let y = time.getFullYear();
	let m = time.getMonth()+1;
	let d = time.getDate();
	let h = time.getHours();
	let mm = time.getMinutes();
	let s = time.getSeconds();
	return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
};

export default {
	setConfig,
	timestampToDate,
}