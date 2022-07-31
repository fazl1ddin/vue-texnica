<template>
    <div class="box">
        <div class="content" v-for="(onepromo, i) in promo[key]" :key="i">
            <h2>{{ onepromo.title }}</h2>
            <div class="img">
                <img :src="onepromo.src">
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    computed: {
        ...mapGetters('promos', { promo: 'promo', all: 'all' }),
        ...mapMutations('promos', { ok: 'ok' }),
        key(){
            return this.$route.path.split('/')[this.$route.path.split('/').length - 1] - 1
        },
    }
}
</script>

<style>
@import '@/css/PromosContent.css';
</style>