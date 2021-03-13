<template>
    <div class="container">
        <div class="row">
            <span><h4>Room Details</h4></span>
        </div>
        <div v-if="errorMsg != ''" class="row red lighten-2 white-text">
            {{errorMsg}}
        </div>
    </div>
</template>
<script>
import store from '../modules/store'
export default {
    name:'JoinedRoom',
    store:store,
    errorMsg:String,
    mounted(){
        this.$store.state.socket.on('roomNotFound',data=>{
            this.errorMsg = data.msg
            console.log(this.errorMsg);
        })
    },
    methods:{
        checkMsg(){
            if(this.errorMsg == '' || this.errorMsg == null){
                return false
            }else{
                return true
            }
        }
    },
    created(){
        this.errorMsg = ''
    }
}
</script>
<style scoped>
    
</style>