import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
        state: {
            token: '',
            cartarr: JSON.parse(localStorage.getItem('cartarr')) || []
        },
        mutations: {
            settoken(state, token) {
                state.token = token
            },
            // 添加商品到购物车
            tocar(state, tag) {
                // 判断购物车中有无该商品
                let goods = state.cartarr.find(val => val.title == tag.label)
                if (goods) {
                    // 存在就让商品的数量加1
                    goods.cartCount += 1;
                } else {
                    // 不存在就直接添加到购物车中
                    state.cartarr.push({ title: tag.label, cartCount: 1 })
                }
            },
            // 购物车商品点击加1
            addCar(state, index) {
                state.cartarr[index].cartCount++
            },
            // 购物车商品点击减1
            removeCar(state, index) {
                if (state.cartarr[index].cartCount > 1) {
                    state.cartarr[index].cartCount--
                } else {
                    if (window.confirm('你是否要移除该商品')) {
                        state.cartarr.splice(index, 1);
                    }
                }
            },
            // 清空购物车
            clearCar(state) {
                state.cartarr = []
            }
        },
        actions: {

        },
        // 相当于vue中的computed方法
        getters: {
            countsum: state => {
                let num = 0
                state.cartarr.forEach(v => {
                    num += v.cartCount
                })
                return num
            }
        },

    })
    // 监听每次调用mutations的时候 都会进入这个方法里面
store.subscribe((mutations, state) => {
    localStorage.setItem('cartarr', JSON.stringify(state.cartarr))
})
export default store