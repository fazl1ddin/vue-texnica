<template>
    <div class="compareB">
        <div class="window">
            <h1>Сравнение товаров</h1>
            <div class="control">
                <button :disabled="current <= 0" @click="Math.max(0, current--)">&#9204;</button>
                <button :disabled="current >= products(filter, only).length - 1" @click="Math.min(current++, products(filter, only).length - 1)">&#9205;</button>
            </div>
            <div class="tabler">
                <select v-model="filter">
                    <option value="Все">Все товары</option>
                    <option value="Сигвей">Сигвеи</option>
                    <option value="Гироскутер">Гироскутеры</option>
                    <option value="Моноколесо">Моноколеса</option>
                </select>
                <div class="xityProdaj">
                    <div class="xityProdajBox" v-for="(prod, i) in products(filter, only)[current]" :key="i">
                        <img :src="prod.product.src" class="sigvei">
                        <img :src="prod.protection.src" class="aqua">
                        <div class="xityProdajTexti">
                            <h5>{{ prod.specification.productName }}</h5>
                            <h3>{{ prod.productName }}</h3>
                        </div>
                        <div class="prices">
                            <div class="pricesText">
                                <del :class="prod.price == sale(prod.id) ? 'visible' : ''">{{ prod.price + "₽" }}</del>
                                <h3>{{ sale(prod.id) + " ₽" }}</h3>
                                <h4><span class="spanone">{{ prod.sale + "%" }}</span> <span class="spantwo">— {{ space(prod.id) + " ₽" }}</span></h4>
                            </div>
                        </div>
                        <div class="cart">
                            <a href="">Купить в 1 клик</a>
                            <transition name="custom-classes"
                            enter-active-class="animate__animate animate__flipInY"
                            leave-active-class="animate__animate animate__flipOutY"
                            mode="out-in">
                                <img v-if="includ(prod.id, 'cart')" src="@/img/cartclc.png" @click="remove(prod.id)">
                                <img v-else src="@/img/cartbutton.png" @click="add(prod)">
                            </transition>
                        </div>
                        <button class="delete" @click="remove(prod.id)">Убрать</button>
                    </div>
                </div>
                <div class="c-pagination">
                    <div class="c-pagination-item" :class="current === i ? 'active' : ''" v-for="(pagin, i) in pagination" :key="i" @click="current = i"></div>
                </div>
                <div class="only">
                    <input type="checkbox" id="only" v-model="only">
                    <label for="only">Только&nbsp;различающиеся</label>
                </div>
                <td v-if="products(filter, only).length === 0" class="w-75pr">Пусто</td>
            </div>
            <table v-if="products(filter, only).length !== 0">
                <tr v-for="(spec, i) in Object.keys(products(filter, only)[current][0].specification).slice(1)" :key="i">
                    <th>{{ spec }}</th>
                    <td v-for="(produ, index) in products(filter, only)[current]" :key="index">
                        {{ produ.specification[spec] }}
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import store from '@/store'
import { mapGetters, mapActions } from 'vuex'

export default {
    data: () => ({
        current: 0,
        filter: 'Все',
        only: true
    }),
    computed: {
        ...mapGetters('compare', { products: 'products' }),
        ...mapGetters('products', { sale: 'sale', space: 'space', includ: 'includ', all: 'all' }),
        pagination(){
            let ok = []
            for(let i = 0; i < this.products(this.filter, this.only).length; i++){
                ok[i] = i
            }
            return ok
        }
    },
    methods: {
        ...mapActions('compare', { remove: 'remove' }),
    },
    watch: {
        filter: function(){
            this.current = 0
        }
    },
}
</script>

<style>
@import '@/css/Compare.css';
</style>