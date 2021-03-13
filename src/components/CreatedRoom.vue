<template>
    <div class="container">
        <div class="row">
            <span><h4>Room is created</h4></span>
        </div>
        <div class="row">
            <span>
                <h6>RoomId is : {{roomId}}</h6>
            </span>
        </div>
        <div class="row">
            <blockquote id='bq'>
                Users Joined : {{$store.state.usersInTheRoom}}
            </blockquote>
        </div>
        <div class="row">
            <blockquote>
                Votes Recieved : {{$store.state.votesRecieved}}
            </blockquote>
        </div>
        <div class="row">
            <div class="btn btn-flat blue darken-1 white-text" @click="endRoom()">End Room</div>
        </div>
    </div>
</template>
<script>
import store from '../modules/store'
export default {
    name:'CreatedRoom',
    store:store,
    created(){
        this.roomId = this.$store.state.roomId
    },
    methods:{
        endRoom(){
            console.log('Disconnected');
            this.$store.commit('endConnection')
        }  
    }
}
</script>
<style scoped>
    
</style>