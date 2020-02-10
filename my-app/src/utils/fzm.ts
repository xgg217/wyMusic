/**
 * 设置字符串长度
 * 当长度超过指定长度后，截取 + ...
 */
const setTextLength = (str:string, length:number = 20):string => {
  if(str.length < length) {
    return str;
  }
  const text = str.slice(0, length);
  return `${text}...`
};

/**
 * 可以显示多少个汉字
 * 1个汉字等于两个英文长度的计算
 * @param count 
 */
const getlength = (str:string):number => {
  return str.replace(/[^/\x00-/xff]/ig, "aa").length / 2;
}
/* *
 *  用途：js中字符串超长作固定长度加省略号（...）处理
 *  参数说明：
 *  str:需要进行处理的字符串，可含汉字
 *  len:需要显示多少个汉字，两个英文字母相当于一个汉字
 */
const beautySub = (str:string, len:number):string => {
  const reg = /[\u4e00-\u9fa5]/g;
  const slice = str.substring(0, len);
  // const cCharNum = ~~(slice.match(reg) && slice.match(reg).length);
  const aa = slice.match(reg) || '';
  const cCharNum = ~~(aa && aa.length);
  const realen = slice.length * 2 - (cCharNum - 1);
  return str.substr(0, realen) + (realen < str.length ? "..." : "");
}

/**
 * 数字设置
 * 当 数字 >= 5 出现单位 xxx万
 * 否则直接显示
 */
const setCountType = (count:number):string => {
  let str:string = count + '';
  if(str.length < 5) {
    return str;
  }
  if(str.length < 9) {
    const newCount = Math.trunc(count / 10000) + ''; // 返回整数部分
    return newCount + '万'
  } else {
    const newCount = Math.trunc(count / 100000000) + ''; // 返回整数部分
    return newCount + '亿'
  }
};

/**
 * 将时间戳 --> 1月14日
 */
const setData1 = (num:number):string => {
  const date = new Date(num);
  let monthDate = date.getMonth() + 1;
  let dayDate = date.getDate();
  return `${monthDate}月${dayDate}日`
};


export {
  setTextLength,
  beautySub,
  getlength,
  setCountType,
  setData1,
}
