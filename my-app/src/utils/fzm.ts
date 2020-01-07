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
}

export {
  setTextLength,
  setCountType
}
