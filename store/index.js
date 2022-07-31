import { createStore } from "vuex"

import products from './products'
import cart from "./cart"
import news from "./news"
import promos from './promos'
import compare from "./compare"
import favorites from './favorites'
import viewed from "./viewed"

export default createStore({
    modules: {
        products,
        cart,
        news,
        promos,
        compare,
        favorites,
        viewed,
    },
    state: {
        dropDown: false
    },
    getters: {
        dropDown: state => state.dropDown
    },
    mutations: {
        droper(state){
            state.dropDown = !state.dropDown
        }
    },
    actions: {
        droper(store){
            store.commit('droper')
        }
    },
    strict: process.env.NODE_ENV !== "production",
});