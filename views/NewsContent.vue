<template>
    <div class="box">
        <div class="content" v-for="(onenew, i) in news[key]" :key="i">
            <div class="img">
                <img :src="onenew.photo">
            </div>
            <div class="text">
                <div>
                    <h1>{{ onenew.title }}</h1>
                    <p>{{ onenew.content }}</p>
                </div>
                <div class="flexer">
                    <a :href="onenew.href">Подробнее</a>
                    <h5>{{ onenew.date }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('news', { news: 'new' }),
        key(){
            return this.$route.path.split('/')[this.$route.path.split('/').length - 1] - 1
        }
    }
}
</script>

<style>
@import '@/css/NewsContent.css';
</style>