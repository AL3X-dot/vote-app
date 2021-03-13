<template>
    <div class="col blue-text flow-text text-darken-1">
        <div class="row valign-wrapper" @click="create">
            <i class="material-icons ">add</i>
            <span>Create a poll</span>
        </div>
        <div class="row valign-wrapper" @click="join">
            <i class="material-icons ">add_task</i>
            <span>Join a poll</span>
        </div>
    </div>
</template>
<script>
import store from '../modules/store' 
export default {
    name:'Main',
    store:store,
    methods:{
        create(){
            this.$store.commit('setCompName','Create')
        },
        join(){
            this.$store.commit('setCompName','Join')
        }
    }
}
</script>
<style scoped>
    .material-icons{
        margin:0 20px;
    }
    .row{
        cursor: pointer;
    }
</style>