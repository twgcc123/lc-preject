 /**
  *  1.请求次数过多，设置防抖/节流函数
  * **/
 export function debounce(func, delay) {
   let timer = null;
   // 返回一个函数 ...args 传入为多个参数
   return function (...args) {
     // 如果有值，则清空定时器
     if (timer) {
       clearTimeout(timer);
     }
     // 如果没有值，启用定时器
     timer = setTimeout(() => {
       func.apply(this, args);
     }, delay);
   };
 }