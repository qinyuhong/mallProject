import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import Axios from 'axios'

import setaxios from './setaxios'
setaxios()
Vue.prototype.$axios = Axios

// 路由守卫
router.beforeEach((to, from, next) => {
    // 无论是刷新还是跳转路由 第一个进入的 路由前置的钩子函数(beforEach)
    store.commit('settoken', localStorage.getItem('mytoken'))
        // 检查元数据的存在
    if (to.meta.loginRequied) {
        // 已有登录信息存在
        if (store.state.token) {
            next()
        } else {
            next({
                path: '/Login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }
})



Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')