import axios from 'axios';

const service = axios.create({
  baseURL: ' http://localhost:3000', // api的base_url
  timeout: 15000 // 请求超时时间
});

// respone拦截器
service.interceptors.response.use(
  (response) => {
    if (response.headers['content-type'].indexOf('application/json') === -1) {
      return response.data
    }

    return response.data;
    
  }
)

export default service;