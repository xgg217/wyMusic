import axios from 'axios';

const HOST = process.env.REACT_APP_HOST
 
 /* 创建axios实例 */
const service = axios.create({
  baseURL: HOST, // api的base_url
  timeout: 5000, // 请求超时时间
 });
 
/**
 * 拦截器 - 发送请求
 * 请求的配置参数（config）做处理
 */
service.interceptors.request.use((config: any) => {
  return config;
}, (error: any) => {
  return Promise.reject(error);
});

/**
 * 收到请求
 * 可以对返回的数据进行处理
 */
axios.interceptors.response.use(
  response => {
    return response;
  }, error => {
    return Promise.reject(error);
  }
);

export default service;
