import Vue from 'vue'
import App from './App.vue'
import { createRouter } from "./router";
import store from './store'
import axios from 'axios'
import { sync } from 'vuex-router-sync'
import MetaInfo from 'vue-meta-info'

Vue.use(MetaInfo);
Vue.prototype.HOST = '/api';
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
const router = createRouter();

sync(store, router);
Vue.mixin({
    beforeMount () {
        const { asyncData } = this.$options
        if (asyncData) {
            // 将获取数据操作分配给 promise
            // 以便在组件中，我们可以在数据准备就绪后
            // 通过运行 `this.dataPromise.then(...)` 来执行其他任务
            this.dataPromise = asyncData({
                store: this.$store,
                route: this.$route
            })
        }
    }
})
export function createApp () {

    const app = new Vue({
        store,
        router,
        render: h => h(App)
    });
    return { app, router, store }
}

