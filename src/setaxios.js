import axios from 'axios'
import router from './router'
import store from './store'


//全局拦截


export default function setaxios() {
    // 请求拦截
    axios.interceptors.request.use(config => {
        if (store.state.token) {
            config.headers.token = store.state.token
        }
        return config
    });

    // 响应拦截
    axios.interceptors.response.use(result => {

        if (result.status == 200) {
            const data = result.data;
            if (data.code == -1) {
                // 登录信息过期 清空vuex和localStorage中的token
                store.commit('settoken', "");
                localStorage.removeItem('mytoken')
                    // 让页面重定向登录页面
                router.replace({ path: '/Login' })
            }
            return data;
        }
        return result
    })
}