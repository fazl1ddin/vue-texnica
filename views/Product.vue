<template>
    <div class="productContent">
        <h1 class="title">{{products[pageIndex].productName}}</h1>
        <div class="productGallery">
            <div class="central">
                <transition name="custom-classes"
                mode="in-out"
                enter-active-class="animate__animated animate__rollIn"
                leave-active-class="animate__animated animate__rollOut"
                v-for="(pic, i) in products[pageIndex].product.src" :key="i">
                    <div v-if="current == i">
                        <img :src="pic" class="productImg">
                        <img :src="products[pageIndex].protection.src" class="protection">
                    </div>
                </transition>
            </div>
            <div class="galleryPagination">
                <button :disabled="current <= 0" @click="Math.max(0, current--)">&#9204;</button>
                <div class="galleryPaginationItems">
                    <div class="galleryPaginationItem" :class="current == pic ? 'active' : ''" v-for="(pic, i) in pagination" :key="i" @click="current = pic">
                        <img :src="products[pageIndex].product.src[pic]">
                    </div>
                </div>
                <button :disabled="current >= products[pageIndex].product.src.length - 1" @click="Math.min(current++, products[pageIndex].product.src.length - 1)">&#9205;</button>
            </div>
        </div>
        <div class="productText">
            <h1>{{products[pageIndex].productName}}</h1>
            <div class="productPrices">
                <div class="productPricesBox">
                    <div class="rateStar">
                        <div v-for="(rate, index) in products[pageIndex].rates" :key="index" @click="star({ id: products[pageIndex].id, index })">
                            <img :src="rate">
                        </div>
                        <div class="comments">
                            <img src="@/img/message-square.png" >
                            <h5>{{ brackets(products[pageIndex].id) }}</h5>
                        </div>
                    </div>
                    <div class="statslikes">
                        <div class="likebutton">
                            <transition name="custom-classes"
                            enter-active-class="animate__animate animate__flipInY"
                            leave-active-class="animate__animate animate__flipOutY"
                            mode="out-in">
                                    <img v-if="includ(products[pageIndex].id, 'favorites')" src="@/img/likebuttonclc.png" @click="removeL(products[pageIndex].id)">
                                    <img v-else src="@/img/likebutton.png" @click="addL(products[pageIndex])">
                            </transition>
                        </div>
                        <div class="comparebutton">
                            <transition name="custom-classes"
                            enter-active-class="animate__animate animate__flipInY"
                            leave-active-class="animate__animate animate__flipOutY"
                            mode="out-in">
                                <img v-if="includ(products[pageIndex].id, 'compare')" src="@/img/comparebuttonclc.png" @click="removeC(products[pageIndex].id)">
                                <img v-else src="@/img/comparebutton.png" @click="addC(products[pageIndex])">
                            </transition>
                        </div>
                    </div>
                </div>
                <div class="productPricesBox">
                    <div class="pricesText">
                        <div class="fflex">
                            <del :class="products[pageIndex].price == sale(products[pageIndex].id) ? 'visible' : ''">{{ products[pageIndex].price + "₽" }}</del>
                            <h4><span class="spanone">{{ products[pageIndex].sale + "%" }}</span> <span class="spantwo">— {{ space(products[pageIndex].id) + " ₽" }}</span></h4>
                        </div>
                        <h3>{{ sale(products[pageIndex].id) + " ₽" }}</h3>
                    </div>
                    <div class="cart">
                        <transition name="custom-classes"
                        enter-active-class="animate__animate animate__flipInY"
                        leave-active-class="animate__animate animate__flipOutY"
                        mode="out-in">
                            <p class="bought" v-if="includ(products[pageIndex].id, 'cart')" @click="remove(products[pageIndex].id)"><img src="@/img/cartclc.png"></p>
                            <p v-else @click="add(products[pageIndex])">В корзину</p>
                        </transition>
                        <a href="">Купить в 1 клик</a>
                    </div>
                </div>
            </div>
            <div class="wayget">
                <div class="waygetBox">
                    <div class="foricon">
                        <img src="@/img/shipping.png">
                    </div>
                    <div class="fortext">
                        <h4>Доставка</h4>
                        <p>Доставим по Санкт-Петербургу в течение 2 часов и бесплатно. Стоимость доставки в другие города уточняйте у менеджера.</p>
                    </div>
                </div>
                <div class="waygetBox">
                    <div class="foricon">
                        <img src="@/img/purse.png">
                    </div>
                    <div class="fortext">
                        <h4>Оплата</h4>
                        <p>Принимаем к оплате как наличный, так и безналичный расчёт. Возможна оплата электронными кошельками.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="productDescription">
        <div class="desNav">
            <ul>
                <li :class="cur == 'des' ? 'active' : ''" @click="cur = 'des'">Описание</li>
                <li :class="cur == 'spec' ? 'active' : ''" @click="cur = 'spec'">Характеристики</li>
                <li :class="cur == 'rates' ? 'active' : ''" @click="cur = 'rates'">Отзывы ({{ products[pageIndex].comments.length }})</li>
            </ul>
        </div>
        <div class="tabs">
            <h1>{{ products[pageIndex].description.title }}</h1>
            <div class="description" v-if="cur == 'des'">
                <p class="p" v-html="products[pageIndex].description.content"></p>
                <h1>Рекомендуем</h1>
                <div class="xityProdajContent">
                    <div class="xityProdajBox mb-15" v-for="(prod, i) in rec" :key="i">
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
            <div class="specification" v-if="cur == 'spec'">
                <table>
                    <tr v-for="(th, i) in Object.keys(products[pageIndex].specification).slice(1)" :key="i">
                        <th>{{ th }}</th>
                        <td>{{ products[pageIndex].specification[th] }}</td>
                    </tr>
                </table>
            </div>
            <div class="rates" v-if="cur == 'rates'">
                <div class="ratesContent">
                    <div class="ratesAcc">
                        <div class="aboutRate">
                            <img src="@/img/avatar.png">
                            <h4>Александр <span>07 июня 2021</span></h4>
                            <div class="rates">
                                <img src="@/img/star.png">
                                <img src="@/img/star.png">
                                <img src="@/img/star.png">
                                <img src="@/img/star.png">
                                <img src="@/img/star.png">
                            </div>
                            <span>(5 из 5)</span>
                        </div>
                        <div class="rateContent">
                            <h4>Отличный самокат!</h4>
                            <p>Катаюсь каждый день после работы, заряд держит отлично!</p>
                        </div>
                    </div>
                    <div class="newRate">
                        <h4>Напишите своё мнение о товаре</h4>
                        <p>Сделайте выбор других покупалетей легче</p>
                        <button>Написать отзыв</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data: () => ({
        current: 0,
        cur: 'des'
    }),
    computed: {
        ...mapGetters("products", { brackets: "bracket", space: 'space', sale: 'sale', indexer: 'indexer', includ: 'includ', products: 'product' }),
        pageIndex(){
            return Number(this.$route.path.split('/')[this.$route.path.split('/').length - 1] - 1)
        },
        pagination(){
            let ok = []
            if(this.current < this.products[this.pageIndex].product.src.length - 1){
                if(this.current < 1){
                    for(let i = this.current; i <= this.current + 2; i++){
                        ok[i] = i
                    }
                } else {
                    for(let i = this.current - 1; i <= this.current + 1; i++){
                        ok[i] = i
                    }
                }
            } else {
                for(let i = this.current - 2; i <= this.current; i++){
                    ok[i] = i
                }
            }
            return ok.flat()
        },
        rec(){
            let ok = []
            for(let i = 0; i < 4; i++){
                ok[i] = this.products[Math.floor(Math.random() * ((this.products.length - 1) - 0 + 1)) + 0]
            }
            return ok
        }
    },
    methods: {
        ...mapActions('products', { star: 'star' }),
        ...mapActions('cart', { remove: 'remove', add: 'add' }),
        ...mapActions('compare', { addC: 'add', removeC: 'remove' }),
        ...mapActions('favorites', { addL: 'add', removeL: 'remove' }),
    }
}
</script>

<style>
@import '@/css/Product.css';
</style>