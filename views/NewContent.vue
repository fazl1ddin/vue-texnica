<template>
    <h1>{{ content.bigContent.ftitle }}</h1>
    <div class="newContent">
        <div class="newText">
            <p v-html="content.bigContent.fcontent"></p>
            <h3>{{ content.bigContent.stitle }}</h3>
            <p v-html="content.bigContent.scontent"></p>
        </div>
        <div class="newImg">
            <img :src="content.photo">
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('news', { all: 'all' }),
        content(){
            return this.all[Number(this.$route.path.split('/')[this.$route.path.split('/').length - 1] - 1)]
        },
    },
}
</script>

<style>
@import '@/css/NewContent.css';
</style>