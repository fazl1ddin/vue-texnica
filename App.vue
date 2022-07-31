<template>
  <div class="headerNav">
        <div class="window">
            <div class="headerNavContent">
                <div class="headerNavLogo">
                    <router-link to="/">
                        <img src="@/img/logo.png">
                    </router-link>
                </div>
                <div class="headerNavContacts">
                    <p>+7 (812) 660-50-54</p>
                    <p class="center-margin-20">+7 (958) 111-95-03</p>
                    <p class="c-838">Пн-вс: с 10:00 до 21:00</p>
                </div>
                <div class="headerNavSearch">
                    <button class="sbutton">
                        <img src="@/img/search-icon.png">
                        Поиск
                    </button>
                    <router-link v-for="(router, i) in routers" :key="i" :to="router.to" class="dota">
                        <span class="dotspan" v-if="length(router.class) !== 0">{{ length(router.class) }}</span>
                        <img :class="router.class" :src="router.src">
                    </router-link>
                    <button class="headerButton">Войти</button>
                </div>
            </div>
        </div>
    </div>
    <div class="navbar" v-if="$route.path !== '/cart'">
        <div class="window">
            <div class="navbarContent">
                <div class="navbarContentBox">
                    <router-link to="/" class="maiNiz">
                        <img src="@/img/Frame-50.png">
                        <p>Главная</p>
                    </router-link>
                    <div class="dropdownCatalog" @click="menue('catalog'); this.$store._actions.droper[0]()">
                        <img src="@/img/menu-icon.png" alt="">
                        <p>Каталог<span> товаров</span></p>
                    </div>
                    <router-link to="/cart" class="cartNiz dota">
                        <img src="@/img/cart-niz.png">
                        <span class="dotspan" v-if="length('cart') !== 0">{{ length('cart') }}</span>
                        <p>Корзина</p>
                    </router-link>
                    <div class="searchNiz" @click="menue('search')">
                        <img src="@/img/search-icon-niz.png">
                        <p>Поиск</p>
                    </div>
                    <div class="moreNiz" @click="menue('more')">
                        <img src="@/img/more.png">
                        <span class="dotyellow" v-if="(length('cart') + length('compare') + length('favorites')) !== 0"></span>
                        <p>Ещё</p>
                    </div>
                </div>
                <transition name="custom-classes"
                :enter-active-class="width > 770 ? 'heightEnter' : 'animEnter'"
                :leave-active-class="width > 770 ? 'heightLeave' : 'animLeave'">
                    <ul v-if="menu.catalog" class="dropdownElem">
                        <div class="title">
                            <h1>Каталог</h1>
                            <button @click="menu.catalog = false">&#215;</button>
                        </div>
                        <li>
                            <a href="">
                                <img src="@/img/icons-for-menu.png" alt="">
                                Гироскутеры
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="@/img/icons-for-menu-(1).png" alt="">
                                Электросамокаты
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="@/img/icons-for-menu-(2).png" alt="">
                                Моноколеса
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="@/img/icons-for-menu-(3).png" alt="">
                                Сигвеи и мини-сигвеи
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="@/img/icons-for-menu-(4).png" alt="">
                                Электроскутеры
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="@/img/icons-for-menu-(5).png" alt="">
                                Электровелосипеды
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="@/img/icons-for-menu-(6).png" alt="">
                                Электроскейты
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="@/img/icons-for-menu-(7).png" alt="">
                                Электромобили
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="@/img/icons-for-menu-(8).png" alt="">
                                Аксессуары
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="@/img/icons-for-menu-(9).png" alt="">
                                Умные игрушки
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="@/img/icons-for-menu-(10).png" alt="">
                                Smart Watch
                            </a>
                        </li>
                    </ul>
                    <ul class="more" v-else-if="menu.more">
                        <div class="title">
                            <h1>Ещё</h1>
                            <button @click="menu.more = false">&#215;</button>
                        </div>
                        <div class="navs">
                            <router-link v-for="(router, i) in routers.slice(0, 3)" :key="i" :to="router.to" class="dota">
                                <span class="dotspan" v-if="length(router.class) !== 0">{{ length(router.class) }}</span>
                                <img :class="router.class" :src="router.src">
                            </router-link>
                        </div>
                        <li>
                            <a>О компании</a>
                        </li>
                        <li>
                            <a>Акции</a>
                        </li>
                        <li>
                            <a>Рассрочка 0–0-12</a>
                        </li>
                        <li>
                            <a>Сервис и ремонт</a>
                        </li>
                        <li>
                            <a>Опт/дропшиппинг</a>
                        </li>
                        <li>
                            <a>Контакты</a>
                        </li>
                    </ul>
                    <ul class="search" v-else-if="menu.search">
                        <div class="title">
                            <h1>Поиск</h1>
                            <button @click="menu.search = false">&#215;</button>
                        </div>
                        <input type="text" placeholder="Введите запрос, например «Smart balance»">
                    </ul>
                </transition>
                <ol class="navbarul">
                    <li>
                        <a href="">О компании</a>
                    </li>
                    <li>
                        <a href="">Акции</a>
                    </li>
                    <li>
                        <a href="">Рассрочка 0|0|18</a>
                    </li>
                    <li>
                        <a href="">Сервис и гарантия</a>
                    </li>
                    <li>
                        <a href="">Опт/дропшиппинг</a>
                    </li>
                    <li>
                        <a href="">Контакты</a>
                    </li>
                </ol>
            </div>
        </div>
    </div>
    <router-view></router-view>
    <div class="footer" v-if="$route.path !== '/cart'">
        <div class="window">
            <div class="footerContent">
                <div class="logo">
                    <img src="@/img/logo.png">
                    <h2>+7 (958) 111-95-03</h2>
                    <h2>+7 (812) 660-50-54</h2>
                    <h4>Пн-вс: с 10:00 до 21:00</h4>
                    <p>Проспект Стачек 67 к.5</p>
                    <p>Лиговский проспект 205</p>
                    <p>Гражданский проспект, 116 к.5</p>
                </div>
                <ul>
                    <h2>Для клиента</h2>
                    <li>
                        <a href="">Как купить</a>
                    </li>
                    <li>
                        <a href="">Доставка и оплата</a>
                    </li>
                    <li>
                        <a href="">Кредит</a>
                    </li>
                    <li>
                        <a href="">Политика конфиденциальности</a>
                    </li>
                    <li>
                        <a href="">Вопросы и ответы (F.A.Q.)</a>
                    </li>
                    <li>
                        <a href="">Сервис и гарантия</a>
                    </li>
                </ul>
                <ul>
                    <h2>О магазине</h2>
                    <li>
                        <a href="">Отзывы</a>
                    </li>
                    <li>
                        <a href="">Наши преимущества</a>
                    </li>
                    <li>
                        <a href="">История компании</a>
                    </li>
                    <li>
                        <a href="">Сотрудничество</a>
                    </li>
                    <li>
                        <a href="">Партнёрская программа</a>
                    </li>
                    <li>
                        <a href="">Вакансии</a>
                    </li>
                </ul>
                <ul class="drop">
                    <h2>Сотрудничество</h2>
                    <li>
                        <a href="">Оптом</a>
                    </li>
                    <li>
                        <a href="">Дропшиппинг</a>
                    </li>
                </ul>
                <ul class="servisf">
                    <h2>Сервис и ремонт</h2>
                    <li>
                        <a href="">Ремонт гироскутеров и гироциклов</a>
                    </li>
                    <li>
                        <a href="">Ремонт моноколес и моноциклов</a>
                    </li>
                    <li>
                        <a href="">Ремонт сигвеев и мини сигвеев</a>
                    </li>
                    <li>
                        <a href="">Ремонт электроквадроциклов</a>
                    </li>
                    <li>
                        <a href="">Ремонт электроскейтов</a>
                    </li>
                    <li>
                        <a href="">Ремонт электроскутеров</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="copyright">
        <div class="window">
            <div class="copyrightContent" :class="$route.path == '/cart' ? 'h-66' : ''">
                <div class="copytexts">
                    <p>SmartТехника © 2021 Все права защищены</p>
                    <h6>Разработка: fazl1dd1n</h6>
                </div>
                <div class="icons">
                    <img src="@/img/twitter.png">
                    <img src="@/img/facebook.png">
                    <img src="@/img/vk.png">
                    <img src="@/img/instagram.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cart from "@/img/cart.png"
import compare from "@/img/compare.png"
import like from "@/img/like.png"
import eye from "@/img/eye.png"
import main from '@/img/Frame-50.png'
import catalog from "@/img/menu-icon-niz.png"
import cartniz from "@/img/cart-niz.png"
import search from "@/img/search-icon-niz.png"
import more from "@/img/more.png"
import store from './store'

export default {
    data: () => ({
        routers: [
            {
                to: '/viewed',
                class: 'viewed',
                src: eye
            },
            {
                to: '/favorites',
                class: 'favorites',
                src: like
            },
            {
                to: '/compare',
                class: 'compare',
                src: compare
            },
            {
                to: '/cart',
                class: 'cart',
                src: cart
            },
        ],
        menu: {
            catalog: store.getters.dropDown,
            more: false,
            search: false
        }
    }),
    computed: {
        length(){
            return function(name){
                return store.state[`${name}`].products.length
            }
        },
        width(){
            return window.innerWidth
        }
    },
    methods: {
        menue(parametr){
            Object.keys(this.menu).filter(e => e !== parametr).forEach(e => this.menu[e] = false)
            this.menu[parametr] = !this.menu[parametr]
        }
    },
}
</script>

<style>
@import "@/css/App.css";
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Fjalla+One&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>