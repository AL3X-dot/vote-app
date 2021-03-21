<template>
    <div class="row center">
        <router-link to="/create"><h4 class="blue-text text-lighten-1">Create a poll</h4></router-link>
    </div>

    <div class="col">
        <div class="row flow-text center">
            <h5>Join a room</h5>
        </div>
        <div class="row valign-wrapper">
            <div class="col s7 offset-s2 input-field">
                <label for="roomId">Enter room id</label>
                <input type="text" name="roomId" id="roomId" v-model="roomId">
            </div>
            <div class="col">
                <i class="material-icons"  @click="enterRoom" @keypress.enter="enterRoom">done</i>
            </div>
        </div>
    </div>
</template>
<script>
import store  from '../../modules/store'
export default {
    name:'Join',
    roomId:String,
    store,
    socket:{},
    created(){
        this.roomId = ''
    },
    methods:{
        enterRoom(){
            if(this.checkRoomId()){
                this.$store.commit('setRoomId',this.roomId)
                this.$store.commit('joinRoom',this.roomId)
            }
        },
        checkRoomId(){
            if(this.roomId == ''){
                return false
            }
            return true
        }
    },
    mounted(){
        this.$store.commit('connectToServer')
        this.socket = this.$store.getters.getSocket
        this.socket.on('roomStatus',data=>{
            if(data.status == 'pass'){
                this.$router.push('/joinedRoom')
            }
        })
    }
}
</script>
<style scoped>
    .material-icons{
        cursor: pointer;
    }
</style>