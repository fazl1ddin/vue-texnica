import { createRouter, createWebHistory } from "vue-router"

import IndexMain from "@/views/IndexMain"
import Cart from '@/views/Cart'
import News from '@/views/News'
import NewsContent from '@/views/NewsContent'
import New from '@/views/New'
import NewContent from '@/views/NewContent'
import AboutUs from '@/views/AboutUs'
import Warranty from '@/views/Warranty'
import Promos from '@/views/Promos'
import PromosContent from '@/views/PromosContent'
import Promo from '@/views/Promo'
import PromoContent from '@/views/PromoContent'
import Compare from '@/views/Compare'
import Favorites from '@/views/Favorites'
import Viewed from '@/views/Viewed'
import Catalog from '@/views/Catalog'
import Product from '@/views/Product'
import ProductOne from '@/views/ProductOne'
import store from "@/store"

export default createRouter({
    routes: [
        {
            name: "main",
            path: "/",
            component: IndexMain
        },
        {
            name: "cart",
            path: "/cart",
            component: Cart,
        },
        {
            name: 'news',
            path: '/news',
            component: News,
            children: store.getters['news/lenew'](NewsContent)
        },
        {
            name: 'new',
            path: '/new',
            component: New,
            children: store.getters['news/id'](NewContent)
        },
        {
            name: 'about us',
            path: '/about-us',
            component: AboutUs
        },
        {
            name: 'warranty',
            path: '/warranty',
            component: Warranty
        },
        {
            name: 'promos',
            path: '/promos',
            component: Promos,
            children: store.getters['promos/lenew'](PromosContent)
        },
        {
            name: 'promo',
            path: '/promo',
            component: Promo,
            children: store.getters['promos/id'](PromoContent)
        },
        {
            name: 'compare',
            path: '/compare',
            component: Compare
        },
        {
            name: 'favorites',
            path: '/favorites',
            component: Favorites
        },
        {
            name: 'viewed',
            path: '/viewed',
            component: Viewed
        },
        {
            name: 'catalog',
            path: '/catalog',
            component: Catalog,
        },
        {
            name: 'product',
            path: '/product',
            component: ProductOne,
            children: store.getters['products/id'](Product)
        },
        {
            name: '404',
            path: '/:pathMatch(.*)*',
            component: Cart
        }
    ],
    history: createWebHistory(process.env.BASE_URL)
})