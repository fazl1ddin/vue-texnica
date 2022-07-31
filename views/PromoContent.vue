<template>
    <h1>{{ content.title }}</h1>
    <div class="newContent">
        <div class="newText">
            <p>{{ content.content }}</p>
            <h4>Условия Акции:</h4>
            <ol>
                <li v-for="(every, i) in content.terms" :key="i">{{ every }}</li>
            </ol>
        </div>
        <div class="newImg">
            <img :src="content.src">
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('promos', { all: 'all' }),
        content(){
            return this.all[Number(this.$route.path.split('/')[this.$route.path.split('/').length - 1] - 1)]
        },
    },
}
</script>

<style>
@import '@/css/PromoContent.css';
</style>