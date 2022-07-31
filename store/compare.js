import store from "."
import imgAqua from "@/img/aqua.png"
import imgTovar from "@/img/image-18.png"

export default {
    namespaced: true,
    state: {
        products: [
        ]
    },
    getters: {
        products: state => (filte, only) => {
            let com = []
            let ok = []
            let last = 0
            let product = state.products
            if(filte != 'Все'){
                product = state.products.filter(element => element.specification['Тип:'] == filte)
            }
            for(let i = 0; i < product.length; i++){
                ok[i] = {
                    specification: product[i].specification,
                    id: product[i].id,
                    protection: product[i].protection,
                    product: product[i].product,
                    price: product[i].price,
                    sale: product[i].sale,
                    productName: product[i].productName,
                }
            }
            if(only){
                function removeDuplicates(arr){

                    const result = []
                    const duplicatesIndices = []

                    arr.forEach((current, index) => {

                        if(duplicatesIndices.includes(index)) return

                        result.push(current)

                        for(let comparisonIndex = index + 1; comparisonIndex < arr.length; comparisonIndex++){

                            const comparison = arr[comparisonIndex]
                            const currentKeys = Object.keys(current.specification)
                            const comparisonKeys = Object.keys(comparison.specification)

                            if(currentKeys.length !== comparisonKeys.length) continue

                            const currentKeysString = currentKeys.sort().join("").toLowerCase()
                            const comparisonKeysString = comparisonKeys.sort().join("").toLowerCase()

                            if(currentKeysString !== comparisonKeysString) continue

                            const comparison1 = arr[comparisonIndex]

                            let valuesEqual = true
                            for(let i = 0; i < currentKeys.length; i++){
                                const key = currentKeys[i]
                                if(current.specification[key] !== comparison.specification[key] ||
                                    store.getters['products/sale'](current.id) !== store.getters['products/sale'](comparison1.id) ||
                                    current.productName !== comparison1.productName){
                                    valuesEqual = false
                                    break
                                }
                            }

                            if(valuesEqual) duplicatesIndices.push(comparisonIndex)

                        }
                    })
                    return result;
                }
                ok = removeDuplicates(ok)
            }
            let n = window.innerWidth <= 770 ? 2 : 3
            for(let i = 0; i <= Math.ceil(ok.length / n) * n; i += n){
                if(!i && !last){
                } else {
                    com.push(ok.slice(last, i))
                    last = i
                }
            }
            return com
        },
        id: state => {
            let id = []
            state.products.forEach(element => {
                id.push(element.id)
            })
            return id
        },
        has: state => id => state.products.some(e => e.id == id)
    },
    mutations: {
        add(state, item){
            if(!store.getters['compare/has'](item.id)){
                state.products.push({ specification: item.specification, id: item.id, price: item.price, sale: item.sale, productName: item.productName, protection: item.protection, product: item.product })
            }
        },
        remove(state, item){
            state.products = state.products.filter(element => element.id !== item)
        },
    },
    actions: {
        add(store, item){
            store.commit('add', item)
        },
        remove(store, item){
            store.commit('remove', item)
        }
    }
}             