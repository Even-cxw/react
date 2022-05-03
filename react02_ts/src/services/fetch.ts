
import axios, { AxiosRequestConfig, AxiosResponse, Canceler }  from 'axios';

let responseInterceptorsId:number = -1;
const DEFAULT_ERROR_MESSAGE = '请求失败，请稍后再试'
export const SUCCESS = 0
export const UNAUTHORIZED = 401

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
const requestErrorInterceptors:(error:any)=>never = error => {
  throw new Error(error)
}

// 添加请求拦截器
instance.interceptors.request.use(requestInterceptors,requestErrorInterceptors)

// 响应拦截
const responseInterceptors = response => {
  return Promise.resolve(response.data)
}

// 响应容错处理
const responeseErrorInterceptors:(error:any)=>never = error => {
  throw new Error(error)
}

// 根据originResponse判断是否需要使用拦截器
const handleResponseInterceptors = options => {
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


// 请求参数等于401，强制退出
export const authorizationFailedHandler = (error: any): any => {
  const status = error?.response?.status
  if (status !== UNAUTHORIZED) {
    throw error
  }
  // 来源于portal
  // (window as any).logout()
}

export function httpErrorStatusMapping(error: any): Error {
  const status = error.response?.status
  const errorMsg = errorStatus.get(status as number) ?? DEFAULT_ERROR_MESSAGE

  throw new Error(errorMsg)
}

interface axiosData {
  url:string,
  data?:{any}
}

export const get = ({data={},url}) => {
  handleResponseInterceptors(data)
  return instance.get(url,{params:{...data}})
  .catch(authorizationFailedHandler)
  .catch(httpErrorStatusMapping)
}

export const post = ({data={},url}) => {
  handleResponseInterceptors(data)
  return instance.get(url,data)
  .catch(authorizationFailedHandler)
  .catch(httpErrorStatusMapping)
}