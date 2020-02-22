import axios from 'axios'
import {message} from 'antd'
import {getConfig} from "@/config";
import { router } from "umi";

const request = axios.create({
  baseURL: getConfig('hostname') + '/api',
  timeout: 5000,
})

request.interceptors.request.use(
  config => {
    if(!config.headers['Content-Type'])
      config.headers['Content-Type'] = 'application/json';
    const token = localStorage.getItem(getConfig('loginTokenKey'));
    if(token)
      config.headers['Authorization'] = 'Bearer ' + token;
    return config;
  }, err => {
    message.error(JSON.stringify(err));
    return Promise.reject(err);
  }
)

request.interceptors.response.use(
  response => {
    if(response.status === 200) {
      return response.data;
    } else {
      message.error(JSON.stringify(response));
      return Promise.reject(response);
    }

  },
  err => {
    if(err.response.status === 401) {
      router.replace({
        pathname: '/login',
        state: {from: window.location.pathname}
      })
    }
    message.error(JSON.stringify(err));
    return Promise.reject(err);
  }

)

export default request;
