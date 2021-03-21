<template>
    <div class="container">
        <h5>Results</h5>
        <div class="row flow-text" v-for="(x,index) in result" :key="index">
            <div class="col">
                {{x.content}}
            </div>
            <div class="col right">
                {{x.value}}
            </div>
        </div>
    </div>
    <!-- <div>
        <h5>These are the results of Voting.</h5>
    </div>
    <blockquote v-for="(x,index) in result" :key="index">
        <span>{{x.content}}</span>
        <span class="right">{{x.value}}</span>
    </blockquote> -->
</template>
<script>
import store from '../modules/store'
export default {
    name:'Results',
    store,
    data(){
        return {
            options:[]
        }
    },
    created(){
        this.result = this.$store.getters.getResult
    },
}
</script>
<style scoped>
    .row{
        border:2px solid lightblue
    }
</style>