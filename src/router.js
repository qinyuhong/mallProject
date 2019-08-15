import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Index from './views/index.vue'
import Botnav from './views/Botnav.vue'
import Mine from './views/Mine.vue'
import Shopcar from './views/Shopcar.vue'
import Tab from './views/Tab.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/Register',
            name: 'Register',
            component: Register
        },
        {
            path: '/',
            name: 'login',
            redirect: '/Login'
        },
        {
            path: '/Login',
            name: 'Login',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Login.vue')
        },
        {
            path: '/Index',
            name: 'Index',
            component: () =>
                import ('./views/index.vue')
        },
        {
            path: '/Botnav',
            name: 'Botnav',
            component: () =>
                import ('./views/Botnav.vue'),
            children: [{
                    path: 'Index',
                    name: 'index',
                    component: () =>
                        import ('./views/index.vue')
                },
                {
                    path: 'Mine',
                    name: 'Mine',
                    component: () =>
                        import ('./views/Mine.vue'),
                    // 元数据  拥有这个字段 这个路由页面有登录权限
                    meta: {
                        loginRequied: true
                    }
                },
                {
                    path: 'Shopcar',
                    name: 'Shopcar',
                    component: () =>
                        import ('./views/Shopcar.vue'),
                    meta: {
                        loginRequied: true
                    }
                },
                {
                    path: 'Tab',
                    name: 'Tab',
                    component: () =>
                        import ('./views/Tab.vue')
                }
            ]
        }
    ]
})