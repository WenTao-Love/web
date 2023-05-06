import axios from 'axios';
import { getToken } from '@/assets/js/token';

// const apiUrl = process.env.NODE_ENV === 'production' ? 'http://gokins.cn:8030/api' : "http://localhost:8030/api";

// const apiUrl = process.env.NODE_ENV === 'production' ? '/api' : "http://192.168.50.11:8030/api";
// const apiUrl = 'http://localhost:8030/api';
const apiUrl = '/api';
const serv = axios.create({
    baseURL: apiUrl, // api base_url
    // baseURL: 'http://localhost:8082', // api base_url
    // timeout: 5000, // 请求超时时间
    withCredentials: true
});

export const ApiUrl=apiUrl;
export const Post=function(path,params,headers){
    let hds={};
    if(headers)hds=headers;
    let token = getToken();
    if(token)hds['Authorization']='TOKEN '+token;
    return serv.post(path,params,{headers:hds});
}