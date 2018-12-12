/*
* 处理异步请求
* */
import * as types from './types'
import {HttpRequest} from "../utils";
let http = new HttpRequest()
export const actions = {
    getBanners({commit, state}) {
        http.get('/api/music').then(res=>{
            commit(types.GET_BANNERS,{banners:res.data.banners})
        })
    }
};
