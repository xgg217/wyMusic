import request from 'utils/request';

/**
 * 获取指定榜单
 * @param idx 榜单对应的歌曲
 */
const getList = (idx:string = '0') => {
  return request({
    url: `/top/list?idx=${idx}`,
    method:"get",
  }).then(res => res.data)
}

export {
  getList
}