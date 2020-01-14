/**
 * 设置字符串长度
 * 当长度超过指定长度后，截取 + ...
 */
const setTextLength = (str:string, length:number = 20):string => {
  // return '1'
  if(str.length < length) {
    return str
  }
  const text = str.slice(0, length);
  return `${text}...`
};

/**
 * 数字设置
 * 当 数字 >= 5 出现单位 xxx万
 * 否则直接显示
 */
const setCountType = (count:number):string => {
  let str:string = count + '';
  if(str.length < 5) {
    return str;
  } if(str.length < 9) {
    const newCount = Math.trunc(count / 10000) + ''; // 返回整数部分
    return newCount + '万'
  } else {
    const newCount = Math.trunc(count / 100000000) + ''; // 返回整数部分
    return newCount + '亿'
  }
};

/**
 * 时间戳 --> 1月14日
 */
const setData1 = (num:number) => {
  const date = new Date(num);
  let monthDate = date.getMonth() + 1;
  let dayDate = date.getDate();
  return `${monthDate}月${dayDate}日`
};


/**
 * 时间处理3
 * Fri Jul 05 2019 00:00:00 GMT+0800 (中国标准时间) 转成 2019-01-02
 * 
 * @param {*} func 
 * @param {*} isOther 是否处理时分秒 2019-01-02 06:02:03
 */
// export const setDetailedDate = (str:number, isOther = false) => {
//   // let newDate = '';
//   let yearDate = str.getFullYear();

//   let monthDate = str.getMonth() + 1;
//   if(monthDate < 10) {
//     monthDate = '0' + monthDate;
//   }

//   let dayDate = str.getDate();
//   if(dayDate < 10) {
//     dayDate = '0' + dayDate;
//   }

//   if(!isOther) {
//     return `${yearDate}-${monthDate}-${dayDate}`;
//   }
  
//   let hours = str.getHours();
//   if(hours < 10) {
//     hours = '0' + hours;
//   }

//   let minutes = str.getMinutes();
//   if(minutes < 10) {
//     minutes = '0' + minutes;
//   }

//   let seconds = str.getSeconds();
//   if(seconds < 10) {
//     seconds = '0' + seconds;
//   }

//   return `${yearDate}-${monthDate}-${dayDate} ${hours}:${minutes}:${seconds}`;
// };

export {
  setTextLength,
  setCountType,
  setData1
}
