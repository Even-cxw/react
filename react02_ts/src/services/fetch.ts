
import axios from 'axios';

let responseInterceptorsId:number = -1;

// 容错状态码
const errorStatus = new Map([
  [400, '该请求参数传递错误'],
  [401, '该请求认证失败'],
  [403, '该请求被禁止访问'],
  [404, '请求资源不存在'],
  [500, '服务端错误'],
  [504, '服务连接超时'],
])

interface Ioptions {
  timeout:number,
  baseURL:string,
  headers:Record<string,string>
}
const options:Ioptions = {
  timeout: 10000,
  baseURL : '/',
  headers: {
    'Content-Type':'application/json;charset=UTF-8',
  }
}

const instance = axios.create(options)

// 请求拦截
const requestInterceptors = config => {
  config.headers['Content-Type'] = 'application/json';
  return config;
}
// 请求容错处理
const requestErrorInterceptors = error => {
  throw new Error(error)
}

// 添加请求拦截器
instance.interceptors.request.use(requestInterceptors,requestErrorInterceptors)

// 响应拦截
const responseInterceptors = response => {
  return Promise.resolve(response)
}

// 响应容错处理
const responeseErrorInterceptors = error => {
  return Promise.resolve(error)
}

// 根据originResponse判断是否需要使用拦截器
const useResponseInterceptors = options => {
  options = options?options:{};
  if (options.originResponse) {
    responseInterceptorsId !== -1 && instance.interceptors.response.eject(responseInterceptorsId)
    responseInterceptorsId = -1
  } else {
    if (responseInterceptorsId == -1) {
      responseInterceptorsId = instance.interceptors.response.use(responseInterceptors,responeseErrorInterceptors)
    }
  }
}

export const $httpGet = ({data,url}) => {
  useResponseInterceptors(data)
  return instance.get(url,{params:{...data}}).catch(err => {
    throw new Error(err)
  })
}

export const $httpPost = ({data,url}) => {
  useResponseInterceptors(data)
  return instance.get(url,data).catch(err => {
    throw new Error(err)
  })
}