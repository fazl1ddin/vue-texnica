<template>
    <div class="news promos ">
        <div class="window">
            <h1>Акции</h1>
            <router-view></router-view>
            <div class="pagination" :class="this.promo.length < 5 ? 'minw' : 'maxw'">
                <div class="pagination-content">
                    <a @click="changePage(Math.max(this.current - 1, 1))">&#9204;</a>
                    <a
                    v-for="(pagin, i) in pagination" :key="i"
                    :class="classer(pagin)"
                    @click="changePage($event.target.innerText)">
                        {{ pagin }}
                    </a>
                    <a @click="changePage(Math.min(this.current + 1, this.promo.length ))">&#9205;</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data:() => ({
        current: null
    }),
    computed: {
        ...mapGetters('promos', { promo: 'promo' }),
        pagination(){
            if(this.promo.length <= 5){
                let pag = []
                for(let index = 1; index <= this.promo.length; index++){
                    pag.push(index)
                }
                return pag
            } else {
                let pag = {
                    start: [],
                    middle: '...',
                    end: []
                }
                if(window.screen.width == 414){
                    if(this.current < this.promo.length / 2){
                        if(this.current == 1){
                            for(let i = this.current; i < this.current + 2; i++){
                                pag.start[i] = i
                            }
                        } else {
                            for(let i = this.current - 1; i < this.current + 1; i++){
                                pag.start[i] = i
                            }
                        }
                    } else if(this.current == this.promo.length / 2){
                        pag.start = this.promo.length / 2 - 1
                        pag.middle = []
                            for(let i = this.current; i < this.current + 1; i++){
                                pag.middle[i] = i
                            }
                        pag.end = this.promo.length / 2 + 1
                    } else {
                        if(this.current == this.promo.length ){
                            for(let i = this.current; i > this.current - 2; i--){
                                pag.end[i] = i
                            }
                        } else {
                            for(let i = this.current + 1; i > this.current - 1; i--){
                                pag.end[i] = i
                            }
                        }
                    }
                } else {
                    if(this.current < Math.ceil(this.promo.length / 2)){
                        if(this.current < 2){
                            for(let i = this.current; i <= this.current + 2; i++){
                                pag.start[i] = i
                            }
                        } else{
                            for(let i = this.current - 1; i <= this.current + 1; i++){
                                pag.start[i] = i
                            }
                        }
                        pag.end = this.promo.length 
                    } else if(this.current == Math.ceil(this.promo.length / 2)){
                        pag.start = Math.ceil(this.promo.length / 2) - 2
                        pag.middle = []
                            for(let i = this.current - 1; i <= this.current + 1; i++){
                                pag.middle[i] = i
                            }
                        pag.end = Math.ceil(this.promo.length / 2) + 2
                    } else {
                        if(this.current == this.promo.length){
                            for(let i = this.current; i >= this.current - 2; i--){
                                pag.end[i] = i
                            }
                        } else{
                            for(let i = this.current + 1; i >= this.current - 1; i--){
                                pag.end[i] = i
                            }
                        }
                        pag.start = 1
                    }
                }
                return [pag.start, pag.middle, pag.end].flat()
            }
        },
        classer(){
            return function(i){
                return i == this.current ? 'active' : ''
            }
        },
    },
    methods: {
        changePage(item){
            if(isNaN(item)){
                this.current <= this.promo.length / 2 ? this.current += 2 : this.current -= 2
                this.$router.push(`/promos/${this.current}`)
            } else {
                this.current = Number(item);
                this.$router.push(`/promos/${this.current}`)
            }
        },
    },
    beforeMount(){
        this.current = Number(this.$route.path.split('/')[this.$route.path.split('/').length - 1])
    },
    beforeUpdate(){
        this.current = Number(this.$route.path.split('/')[this.$route.path.split('/').length - 1])
    }
}
</script>