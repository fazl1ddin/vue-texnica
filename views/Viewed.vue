<template>
    <div class="favorites viewed">
        <div class="window">
            <h1>Просмотренные товары</h1>
            <div class="favoritesContent">
                <div class="filter">
                    <select v-model="filter">
                        <option value="Все">Все товары</option>
                        <option value="Сигвей">Сигвеи</option>
                        <option value="Гироскутер">Гироскутеры</option>
                        <option value="Моноколесо">Моноколеса</option>
                    </select>
                    <select v-model="first">
                        <option value="expensive">Сначала дорогие</option>
                        <option value="cheap">Сначала дешевые</option>
                    </select>
                </div>
                <div class="xityProdajContent">
                    <div class="xityProdajBox mb-15" v-for="(prod, i) in products(filter, first)" :key="i">
                        <router-link :to="'/product/' + prod.id">
                            <img :src="prod.product.src[0]" :class="prod.product.class">
                        </router-link>
                        <img :src="prod.protection.src" :class="prod.protection.class">
                        <div class="notific">
                            <p :class="prod.news.class">{{ prod.news.content }}</p>
                            <p :class="prod.hit.class">{{ prod.hit.content }}</p>
                        </div>
                        <div class="xityProdajTexti">
                            <h5>{{ prod.specification.productName }}</h5>
                            <h3>{{ prod.productName }}</h3>
                        </div>
                        <div class="rateStar">
                            <div v-for="(rate, index) in prod.rates" :key="index" @click="star({ id: prod.id, index })">
                                <img :src="rate">
                            </div>
                            <div class="comments">
                                <img src="@/img/message-square.png" >
                                <h5>{{ brackets(prod.id) }}</h5>
                            </div>
                        </div>
                        <div class="prices">
                            <div class="pricesText">
                                <del :class="prod.price == sale(prod.id) ? 'visible' : ''">{{ prod.price + "₽" }}</del>
                                <h3>{{ sale(prod.id) + " ₽" }}</h3>
                                <h4><span class="spanone">{{ prod.sale + "%" }}</span> <span class="spantwo">— {{ space(prod.id) + " ₽" }}</span></h4>
                            </div>
                            <div class="statslikes">
                                <div class="likebutton">
                                    <transition name="custom-classes"
                                    enter-active-class="animate__animate animate__flipInY"
                                    leave-active-class="animate__animate animate__flipOutY"
                                    mode="out-in">
                                        <img v-if="includ(prod.id, 'favorites')" src="@/img/likebuttonclc.png" @click="removeL(prod.id)">
                                        <img v-else src="@/img/likebutton.png">
                                    </transition>
                                </div>
                                <div class="comparebutton">
                                    <transition name="custom-classes"
                                    enter-active-class="animate__animate animate__flipInY"
                                    leave-active-class="animate__animate animate__flipOutY"
                                    mode="out-in">
                                        <img v-if="includ(prod.id, 'compare')" src="@/img/comparebuttonclc.png" @click="removeC(prod.id)">
                                        <img v-else src="@/img/comparebutton.png" @click="addC(prod)">
                                    </transition>
                                </div>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store';
import { mapActions, mapGetters } from 'vuex'

export default {
    data: () => ({
        filter: 'Все',
        first: 'expensive'
    }),
    computed: {
        ...mapGetters('viewed', { products: 'products' }),
        ...mapGetters("products", { brackets: "bracket", space: 'space', sale: 'sale', indexer: 'indexer', includ: 'includ', }),
    },
    methods: {
        ...mapActions('favorites', { removeL: 'remove' }),
        ...mapActions('compare', { removeC: 'remove', addC: 'add' }),
        ...mapActions('cart', { remove: 'remove', add: 'add' }),
    }
}
</script>

<style>
@import '@/css/Viewed.css';
</style>