import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'

// import * as Sentry from '@sentry/browser';

import version from '../../version'

const defaultVersion = 16

const freshPage = function() {
  freshPage.isShow = true
  MessageBox.confirm('检测到新版本已发布，是否刷新页面启用新版本?', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    location.reload()
  }).catch(() => {}).finally(() => freshPage.isShow = false)
}

Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => {
      throw reason
    })
  );
}

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
})


// request拦截器
service.interceptors.request.use(config => {
  // 版本号
  config.headers['apiVersion'] = version.apiVersion

  if (store.getters.token) {
    config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  // console.log(config)
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  (response) => {
    if (response.headers['content-type'].indexOf('application/json') === -1) {
      return response.data
    }

    const lastApiVersion = (response.headers['apiVersion'] || defaultVersion) / 1

    // 接口版本 > 本地版本
    // 提示升级
    if (lastApiVersion > version.apiVersion) {
      if (!freshPage.isShow)
        freshPage()
    }

    /**
    * code为非200是抛错 可结合自己业务进行修改
    */
   
    const res = response.data
    if (res.code !== 200) {
      Message({
        message: res.message,
        type: 'error',
        duration: 3 * 1000
      })

      // 401:未登录;
      if (res.code === 401 || res.code === 403) {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload()// 为了重新实例化vue-router对象 避免bug
          })
        })
      }

      // if (process.env.NODE_ENV === 'production')
        // Sentry.captureException(res);

      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    const data = error.response.data || {}
    console.log('err' + error)// for debug
    Message({
      message: data.message || error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

// 上传
service.upload = function(url, data) {
  return service.post(url, data, {
    'Content-Type': 'multipart/form-data'
  })
}

service.baseUrl = process.env.VUE_APP_BASE_API

export default service

// export function insertGroupBatch(ids, groupIds) {
//   return request({
//     url: "/product/insertGroupBatch",
//     method:"post",
//     data: {
//       groupIds,
//       ids
//     }
//   })
// }

