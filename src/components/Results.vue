<template>
    <div>
        <h5>These are the results of Voting.</h5>
    </div>
    <blockquote v-for="(x,index) in result" :key="index">
        <span>{{x.content}}</span>
        <span class="right">{{x.value}}</span>
    </blockquote>
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
<style>
    
</style>