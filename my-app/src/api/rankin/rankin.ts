import request from 'utils/request';

/**
 * 所有榜单
 */
const getToplist = () => {
  return request({
    url: '/toplist',
    method: 'GET'
  }).then(res => res.data)
};

/**
 * 所有榜单内容摘要
 */
const gettToplistTetail = () => {
  return request({
    url: '/toplist/detail',
    method: 'GET'
  }).then(res => res.data)
}

export {
  getToplist,
  gettToplistTetail
}