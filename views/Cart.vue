<template>
    <div class="oformleniye">
        <div class="window">
            <h1>Оформление заказа</h1>
            <div class="oforContent">
                <div class="oforZakaza">
                    <div class="obert">
                        <div class="vashZakaz" :class="ready[0] == 'start' ? 'empty' : ready[0] == 'end' ? 'end' : ''">
                            <h3 class="pb-0">Ваш заказ</h3>
                            <div class="obb">
                                <div class="tovari">
                                    <div class="tovar" v-for="( product, i ) in all.products" :key="i">
                                        <div class="imgt">
                                            <img class="img" :src="product.src">
                                            <img class="aqua" src="@/img/aqua.png">
                                        </div>
                                        <div class="ff">
                                            <h4>{{ product.title }}</h4>
                                            <form>
                                                <button type="button" value="1" @click="decrease({ id: product.id, index: i, count: product.count })">-</button>
                                                <input type="text" :value="product.count" @change="onInput(product.id, $event)">
                                                <button type="button" value="1" @click="increase({ id: product.id, index: i, count: product.count })">+</button>
                                            </form>
                                            <div class="price">
                                                <del v-if="product.price != sale(product.id)">{{ product.price }} ₽</del>
                                                <h2>{{ sale(product.id) }} ₽</h2>
                                            </div>
                                            <button class="delete"><img src="@/img/delete.png" @click="remove(product.id); nadzor"></button>
                                        </div>
                                    </div>
                                </div>
                                <button class="change" @click="ready[0] = 'middle'; changer(0)">Изменить</button>
                            </div>
                        </div>
                        <button class="dalee" :class="ready[0] == 'middle' ? '' : 'none'" @click="ready[0] = 'end'; ready[1] = 'middle'">Далее</button>
                    </div>
                    <div class="obert">
                        <div class="vashZakaz" :class="ready[1] == 'start' ? 'empty' : ready[1] == 'end' ? 'end' : ''">
                            <h3>Способ получения</h3>
                            <div class="obb">
                                <form class="delivery">
                                        <div class="to">
                                            <h5 class="type">{{ one == 'deliv' ? 'Доставка :' : 'Самовывоз из:'}}</h5>
                                            <div v-if="one == 'pick'">
                                                <p>{{ toAddress }}</p>
                                                <span>{{ toDate }}</span>
                                            </div>
                                            <div v-else>
                                                <p>{{ two + ' ' + deliv.street + ' ' + deliv.flat }}</p>
                                                <span>{{ five + ' ' + six }}</span>
                                            </div>
                                        </div>
                                        <div class="regDel">
                                            <div>
                                                <label for="cityr">Ваш город</label>
                                                <select id="cityr" v-model="two">
                                                    <option :value="cit" v-for="(cit, i) in city" :key="i">{{ cit }}</option>
                                                </select>
                                            </div>
                                            <div class="pickup">
                                                <div :class="one == 'deliv' ? 'active' : ''">
                                                    <input type="radio" name="club" id="deliv" value="deliv" v-model="one">
                                                    <label for="deliv">Доставка</label>
                                                </div>
                                                <div :class="one == 'pick' ? 'active' : ''">
                                                    <input type="radio" name="club" id="pick" value="pick" v-model="one">
                                                    <label for="pick">Самовывоз</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="address" v-if="one == 'deliv'">
                                            <div>
                                                <h4>Дата</h4>
                                                <select v-model="five">
                                                    <option :value="deli" v-for="(deli, i) in deliv.date" :key="i">{{ deli }}</option>
                                                </select>
                                            </div>
                                            <div>
                                                <h4>Улица, дом/корпус</h4>
                                                <input type="text" @input="modelStreet($event.target.value)">
                                            </div>
                                            <div>
                                                <h4>Время</h4>
                                                <select v-model="six">
                                                    <option :value="clck" v-for="(clck, i) in deliv.clock" :key="i">{{ clck }}</option>
                                                </select>
                                            </div>
                                            <div>
                                                <h4>Квартира</h4>
                                                <input type="text" @input="modelFlat($event.target.value)">
                                            </div>
                                            <div class="area">
                                                <h4>Комментарий курьеру</h4>
                                                <textarea cols="30" rows="10"></textarea>
                                            </div>
                                        </div>
                                        <div class="pick" v-show="one == 'pick'">
                                            <div class="aviable">
                                                <h5>Товар доступен в 15 магазинах</h5>
                                                <form :style="'height:' + height(nine) + 'px'">
                                                    <div v-for="(pick, i) in pickUp(two)" :key="i" :ref="setItemRef">
                                                        <input type="radio" name="address" :id="i">
                                                        <label :for="i">
                                                            <p>{{ pick.address }} </p>
                                                            <span>{{ pick.date }}</span>
                                                        </label>
                                                    </div>
                                                </form>
                                            <button type="button" class="yewe" @click="nine == eight.length ? nine = 4 : nine += eleven"> {{ nine == eight.length ? 'Скрыть' : 'Показать еще ' + eleven }}</button>
                                            </div>
                                            <div class="map">
                                                <iframe src="https://www.google.com/maps/embed/v1/place?key=API_KEY&q=Space+Needle,Seattle+WA" frameborder="0"></iframe>
                                            </div>
                                        </div>
                                </form>
                                <button class="change" @click="ready[1] = 'middle'; changer(1)">Изменить</button>
                            </div>
                        </div>
                        <button class="dalee mt-10" :class="ready[1] == 'middle' ? '' : 'none'" @click="ready[2] = 'middle'; ready[1] = 'end'">Далее</button>
                    </div>
                    <div class="obert">
                        <div class="vashZakaz" :class="ready[2] == 'start' ? 'empty' : ready[2] == 'end' ? 'end' : ''">
                            <h3>Способ оплаты</h3>
                            <div class="obb">
                                <form class="cash">
                                    <select @change="typePay($event.target.value)">
                                        <option value="Наличными">Наличными</option>
                                        <option value="Mastercard">Mastercard</option>
                                        <option value="Visa">Visa</option>
                                        <option value="МИР">МИР</option>
                                        <option value="Qiwi">Qiwi</option>
                                    </select>
                                </form>
                                <button class="change" @click="ready[2] = 'middle'; changer(2)">Изменить</button>
                            </div>
                        </div>
                        <button class="dalee" :class="ready[2] == 'middle' ? '' : 'none'" @click="ready[2] = 'end'; ready[3] = 'middle'">Далее</button>
                    </div>
                    <div class="obert mb-20">
                        <div class="vashZakaz" :class="ready[3] == 'start' ? 'empty' : ready[3] == 'end' ? 'end' : ''">
                        <h3>Получатель</h3>
                        <form class="recipient">
                            <div v-for="(ma, i) in man" :key="i">
                                <label :for="ma.id">{{ ma.name }}</label>
                                <input type="text" :id="ma.id" placeholder="Например, Иван" @input="modeler({i: i, value: $event.target.value})">
                            </div>
                            <div class="dont">
                                <input type="checkbox" checked id="dont">
                                <label for="dont">Не перезванивать мне для подтверждения заказа</label>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                <div class="itogo">
                    <div class="itogoContent">
                        <h1>Итого</h1>
                        <div class="summu">
                            <h5>{{ all.products.length > 0 ? all.products.length + ' товара на сумму' : 'Корзина пусто' }}<span>{{ total }}</span></h5>
                            <h5>Стоимость доставки <span>бесплатно</span></h5>
                        </div>
                        <div class="oplata" v-if="all.products.length > 0">
                            <h4>К оплате</h4>
                            <h1>{{ total }} ₽</h1>
                        </div>
                        <button class="zakazat" :class="readySend ? 'ready' : ''" :disabled="!readySend">Оформить заказ</button>
                    </div>
                    <form>
                        <input type="checkbox" id="soglasheniya" checked>
                        <label for="soglasheniya">Подтверждая заказ, я принимаю условия <a href="">пользовательского соглашения</a></label>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import store from '@/store/index'

export default {
        data: () => ({
            ready: [
                'start',
                'start',
                'start',
                'start',
            ],
            one: 'deliv',
            two: 'Санкт-Петербург',
            three: [],
            four: [],
            five: 'Завтра, 11 июля, вс',
            six: '15:00–18:00 (бесплатно)',
            eight: [],
            nine: 4,
            ten: '',
            go: false
        }),
        computed: {
            ...mapGetters('cart', { all: 'all', city: 'city', pickUp: 'pickUp', deliv: 'deliv', man: 'man', total: 'total' }),
            ...mapGetters('products', { sale: 'sale' }),
            toAddress(){
                if(this.go == true){
                    return this.pickUp(this.two)[this.four.children.address.id].address
                }
            },
            toDate(){;
                if(this.go == true){
                    return this.pickUp(this.two)[this.four.children.address.id].date
                }
            },
            nadzor(){
                if(this.$route == '/cart'){
                if(this.length == 0){
                    this.ready[0] = 'start'
                }}
            },
            readySend(){if(this.$route == '/cart'){
                let valid = this.man.every(element => element.valid == true)
                if(!valid){
                    this.man.filter(element => element.valid == false)
                }
                let valid2 = this.ready.slice(0, 3).every(element => element == 'end')
                if(valid && valid2){
                    return true
                } else {
                    return false
                }}
            },
            height(){
                return function(index){if(this.$route == '/cart'){
                    return this.eight.slice(0, index).reduce((t, pr) => t + pr.clientHeight, 0) + (index - 1) * 20
                }}
            },
            eleven(){if(this.$route == '/cart'){
                if(this.nine > this.eight.length){
                    this.nine = this.eight.length
                }
                let elv = this.eight.length - this.nine
                if(elv > 10 && this.nine + 10 < this.eight.length){
                    return 10
                } else if(elv < 10){
                    return elv % 10
                }}
            },
        },
        methods: {
            ...mapActions('cart', { count: 'count', increase: 'increase', decrease: 'decrease', input: 'input', modelStreet: 'modelStreet', modelFlat: 'modelFlat', typePay: 'typePay', modeler: 'modeler', remove: 'remove' }),
            onInput(id, e){
                let index = store.getters['cart/id'].indexOf(id)
                let last = this.all.products[index].count
                this.input({ id: id, count: e.target.value })
                if(e.target.value !== last && last === this.all.products[index].count){
                    e.target.value = this.all.products[index].count
                    console.log(this.all.products[index].count);
                }
            },
            changer(index){
                for(let i = 0; i < index; i++){
                    this.ready[i] = 'end'
                }
                for(let i = this.ready.length; i > index; i--){
                    this.ready[i] = 'start'
                }
            },
            setItemRef(el){
                if(el){
                    this.three.push(el)
                }
            },
        },
        created(){
            if(this.length != 0){
                this.ready[0] = 'middle'
            }
        },
        beforeUpdate(){
            this.three = []
        },
        updated(){
            this.eight = this.three.flat()
            this.four = this.three.find(element => element.children.address.checked === true)
            this.four != undefined ? this.go = true : this.go
        },
}
</script>

<style>
@import '@/css/Cart.css';
</style>