<template>
    <div class="header">
        <div class="window">
            <div class="headerContent">
                <transition name="custom-classes"
                mode="out-in"
                enter-active-class="widthEnter"
                leave-active-class="widthLeave">
                    <div class="slider db" v-show="this.$store.getters.dropDown" :class="this.$store.getters.dropDown ? 'w-970' : 'w-100vh'">
                        <transition name="custom-classes"
                        mode="out-in"
                        v-for="(item, i) in animate" :key="i"
                        :enter-active-class="i > last ? 'animate__animated animate__slideInLeft' : 'animate__animated animate__slideInRight'"
                        :leave-active-class="i > past ? 'animate__animated animate__slideOutLeft' :'animate__animated animate__slideOutRight'">
                            <div v-if="item" class="slider-item">
                                <img src="@/img/series_6.png" alt="">
                                <h3>уже в наличии</h3>
                            </div>
                        </transition>
                        <div class="pagination">
                            <div class="pagination-items" v-for="(item, i) in animate" :key="i" :class="animate[i] ? 'pagination-active' : ''" @click="animater(i)"></div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
    <div class="xityProdaj" v-for="(ever, k) of products(0, 2)" :key="k">
        <div class="window">
            <h1>{{ ever.title }}</h1>
            <a href="" class="a">{{ ever.href }}</a>
            <div class="xityProdajContent">
                <div class="xityProdajBox mb-15" v-for="(prod, i) in ever.every" :key="i">
                    <router-link :to="'/product/' + prod.id">
                        <img @click="addV(prod)" :src="prod.product.src[0]" :class="prod.product.class">
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
                                        <img v-else src="@/img/likebutton.png" @click="addL(prod)">
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
    <div class="banner">
        <div class="window">
            <div class="bannerContent">
                <div class="bannerBox">
                    <h1 class="w-210">Скидки до 30% на сигвеи</h1>
                    <img src="@/img/pngwing-1.png" alt="">
                </div>
                <div class="bannerBox">
                    <h1 class="w-180">Неделя смарт часов</h1>
                    <img src="@/img/pngwыing-1.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="xityProdaj" v-for="(ever, k) of products(2, 4)" :key="k">
        <div class="window">
            <h1>{{ ever.title }}</h1>
            <a href="" class="a">{{ ever.href }}</a>
            <div class="xityProdajContent">
                <div class="xityProdajBox mb-15" v-for="(prod, i) in ever.every" :key="i">
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
                                        <img v-else src="@/img/likebutton.png" @click="addL(prod)">
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
    <div class="banner pb-40">
        <div class="window">
            <div class="bannerContent">
                <div class="bannerBox">
                    <h1 class="w-180">Распродажа до — 50%</h1>
                    <img src="@/img/percent.png">
                </div>
                <div class="bannerBox pr-0">
                    <h1 class="w-330">Smart Balance Premium по специальной цене</h1>
                    <img src="@/img/pфngegg-1.png" class="mr-20">
                </div>
            </div>
        </div>
    </div>
    <div class="xityProdaj" v-for="(ever, k) of products(4, 5)" :key="k">
        <div class="window">
            <h1>{{ ever.title }}</h1>
            <a href="" class="a">{{ ever.href }}</a>
            <div class="xityProdajContent">
                <div class="xityProdajBox mb-15" v-for="(prod, i) in ever.every" :key="i">
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
                                        <img v-else src="@/img/likebutton.png" @click="addL(prod)">
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
    <div class="news">
        <div class="window">
        <h1>Новости</h1>
        <a href="" class="a">Читать все</a>
            <div class="newsContent">
                <div class="newsBox">
                    <h1>Открытие нового магазина</h1>
                    <h6>Разнообразный и богатый опыт говорит нам, что консультация с широким активом требует от нас анализа анализа существующих паттернов поведения</h6>
                    <div class="flexer">
                        <a href="" class="ppp">Подробнее</a>
                        <p>05 июня 2021</p>
                    </div>
                </div>
                <div class="newsBox">
                    <h1>Открытие нового магазина</h1>
                    <h6>Разнообразный и богатый опыт говорит нам, что консультация с широким активом требует от нас анализа анализа существующих паттернов поведения</h6>
                    <div class="flexer">
                        <a href="" class="ppp">Подробнее</a>
                        <p>05 июня 2021</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
        animate: [
            true,
            false,
            false,
            false,
            false,
        ],
        last: '',
        past: ''
    }),
    computed: {
        ...mapGetters("products", { products: "products", brackets: "bracket", space: 'space', sale: 'sale', indexer: 'indexer', includ: 'includ' }), 
    },
    methods: {
        ...mapActions('products', { star: 'star' }),
        ...mapActions('cart', { remove: 'remove', add: 'add' }),
        ...mapActions('compare', { addC: 'add', removeC: 'remove' }),
        ...mapActions('favorites', { addL: 'add', removeL: 'remove' }),
        ...mapActions('viewed', { addV: 'add' }),
        animater(k){
            this.last = this.animate.indexOf(true)
            for(let i = 0; i < this.animate.length; i++){
                this.animate[i] = false
            }
            this.animate[k] = true
            this.past = this.animate.indexOf(true)
        },
    }
}
</script>

<style>
@import 'animate.css';
@import "@/css/Index\ main.css";
:root {
    --animate-duration: 700ms;
}
</style>