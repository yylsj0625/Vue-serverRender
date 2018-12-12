import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/test1'
import Test2 from '../components/test2'

Vue.use(Router);

export function createRouter () {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'test1',
                component: Home
            },
            {
                path: '/test1.html',
                component: Home
            }, {
                path: '/test2',
                component: Test2
            }
        ]
    });
}

