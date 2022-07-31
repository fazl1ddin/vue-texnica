import store from ".";

export default {
    namespaced: true,
    state: {
        products: [
        ],
        wayget: {
            checkeDel: false,
            checkedPick: false,
            delivery: {
                city: [
                    'Санкт-Петербург',
                    'Питер',
                    'Москва',
                    'Питер2',
                    'Екатеринбург',
                ],
                address: {
                    date: [
                        'Завтра, 11 июля, вс',
                        'Завтра, 12 июля, вс',
                        'Завтра, 13 июля, вс',
                        'Завтра, 14 июля, вс',
                    ],
                    street: '',
                    clock: [
                        '15:00–18:00 (бесплатно)',
                        '18:00–21:00',
                        '21:00–00:00 (бесплатно)',
                        '08:00–11:00',
                    ],
                    flat: '',
                }
            },
            pickUp: {
                sankt: [
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                    {
                        address: 'г. Санкт-Петербург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                    },
                ],
                piter: [{
                        address: 'г. Питер, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Питер, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Питер, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Питер, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Питер, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Питер, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                }],
                moscow: [{
                        address: 'г. Москва, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Москва, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Москва, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Москва, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Москва, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Москва, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                },],
                piter2: [{
                        address: 'г. Питер2, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Питер2, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Питер2, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Питер2, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Питер2, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Питер2, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Питер2, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Питер2, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                },],
                ekaterinburg: [{
                        address: 'г. Екатеринбург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Екатеринбург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Екатеринбург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Екатеринбург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Екатеринбург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                    },
                    {
                        address: 'г. Екатеринбург, Бульвар Новаторов, 75',
                        date: 'ПН-ВС 09:00 — 22:00',
                        check: true
                },]
        },
        typePaye: 'Наличными',
        man: [
            {
                name: 'Имя',
                value: '',
                id: 'name',
                pattern: /[0-9\\.,:]/,
                valid: false
            },
            {
                name: 'Фамилия',
                value: '',
                id: 'surname',
                pattern: /[0-9\\.,:]/,
                valid: false
            },
            {
                name: 'Номер телефона',
                value: '',
                id: 'phone',
                pattern: /[0-9\\.,:]/,
                valid: false
            },
            {
                name: 'Эл. почта',
                value: '',
                id: 'email',
                pattern: /[0-9\\.,:]/,
                valid: false
            },
        ]
        },
    },
    getters: {
        all: state => state,
        has: state => id => state.products.some(elem => elem.id == id),
        id: state => {
            let id = []
            state.products.forEach(element => {
                id.push(element.id)
            })
            return id
        },
        count: state => {
            let count = []
            state.products.forEach(element => {
                count.push(element.count)
            });
            return count
        },
        city: state => state.wayget.delivery.city,
        pickUp: state => city => {
            if(city == 'Санкт-Петербург'){
                return state.wayget.pickUp.sankt
            } else if(city == 'Питер'){
                return state.wayget.pickUp.piter
            } else if(city == 'Москва'){
                return state.wayget.pickUp.moscow
            } else if(city == 'Питер2'){
                return state.wayget.pickUp.piter2
            } else if(city == 'Екатеринбург'){
                return state.wayget.pickUp.ekaterinburg
            }
        },
        deliv: state => state.wayget.delivery.address,
        man: state => state.wayget.man,
        total: state => {
            if(state.products.length > 0){
                return state.products.reduce((prev, next) => prev + next.price * next.count, 0)
            } else {
                return 'Пусто'
            }
        }
    },
    mutations: {
        add(state, item){
            if(!store.getters['cart/has'](item.id)){
                state.products.push({ id: item.id, src: item.product.src, title: item.productName, price: item.price, count: 1 })
            }
        },
        remove(state, item){
            state.products = state.products.filter(element => element.id !== item)
        },
        count(state, item){
            if(store.getters['cart/has'](item.id)){
                state.products[store.getters['cart/id'].indexOf(item.id)].count = Math.max(1, item.count)
            }
        },
        modelStreet(state, item){
            state.wayget.delivery.address.street = item
        },
        modelFlat(state, item){
            state.wayget.delivery.address.flat = item
        },
        typePay(state, item){
            state.typePay = item
        },
        modeler(state, item){
            state.wayget.man[item.i].value = item.value
            state.wayget.man[item.i].valid = state.wayget.man[item.i].pattern.test(state.wayget.man[item.i].value); 
        }
    },
    actions: {
        add(store, item){
            store.commit('add', item)
        },
        remove(store, item){
            store.commit('remove', item)
        },
        increase(store, { id, count }){
            store.commit('count', { id: id, count: count + 1 })
        },
        decrease(store, { id, count }){
            store.commit('count', { id: id, count: count - 1 })
        },
        input(store, { id, count }){
            count = parseInt(count)
            store.commit('count', { id: id, count: isNaN(count) ? 1 : count })
        },
        modelStreet(store, item){
            store.commit('modelStreet', item)
        },
        modelFlat(store, item){
            store.commit('modelFlat', item)
        },
        typePay(store, item){
            store.commit('typePay', item)
        },
        modeler(store, { i, value }){
            store.commit('modeler', { i, value })
        }
    }
}