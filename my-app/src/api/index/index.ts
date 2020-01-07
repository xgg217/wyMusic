import request from 'utils/request';

/**
 * 获取轮播图
 */
const getBanner = () => {
  return request({
    url: "/banner",
    method:"post",
    data: {
      type: 2
    }
  }).then(res => res.data)
};

/**
 * 推荐歌单
 */
const getPersonalized = (val:number = 6) => {
  return request({
    url: "/personalized",
    method:"get",
    params: {
      limit: val
    }
  }).then(res => res.data)
}

export {
  getBanner,
  getPersonalized
}