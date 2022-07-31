import store from "."
import imgAqua from "@/img/aqua.png"
import imgTovar from "@/img/image-18.png"
import star from '@/img/star.png'
import starSilver from '@/img/star-silver.png'
import products from "./products"

export default {
    namespaced: true,
    state: {
        products: [
        ]
    },
    getters: {
        has: state => id => state.products.some(elem => elem.id == id),
        products: state => (filter, first) => {
            let product = []
            for(let i = 0; i < state.products.length; i++){
                product[i] = {
                    specification: state.products[i].specification,
                    id: state.products[i].id,
                    protection: state.products[i].protection,
                    product: state.products[i].product,
                    comments: state.products[i].comments,
                    hit: state.products[i].hit,
                    news: state.products[i].news,
                    price: state.products[i].price,
                    sale: state.products[i].sale,
                    productName: state.products[i].productName,
                    rates: state.products[i].rates,
                    realPrice: state.products[i].price - (state.products[i].price * state.products[i].sale / 100)
                }
            }
            if(filter !== 'Все'){
                product = product.filter(element => element.specification['Тип:'] == filter)
            }
            product.sort((a, b) => first == 'expensive' ? b.realPrice - a.realPrice : a.realPrice - b.realPrice)
            return product
        }
    },
    mutations: {
        add(state, item){
            if(!store.getters['viewed/has'](item.id)){
                state.products.push(item)
            }
        },
    },
    actions: {
        add(store, item){
            store.commit('add', item)
        },
    }
}