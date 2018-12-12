
/*
* 提供请求类
* */
import Vue from 'vue'
import axios from  'axios'
Vue.prototype.$http = axios;
const vm = new Vue();

export class HttpRequest {
    get(url, data = {}){
        return new Promise((resolve, reject)=>{
            vm.$http.get(url).then(res=>{
                resolve(res.data)
            }).catch(e=>{
                reject(e)
            })
        })

    }
}
