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
  })
};

export {
  getBanner
}