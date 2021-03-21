<template>
    <div class="container">
        <span><h5>Join a Poll</h5></span>
        <div class="row valign-wrapper">
            <div class="col l10 m10 input-field">
                <label for="">Enter Room Id</label>
                <input type="text" v-model="roomId">
            </div>
            <div class="col l1 m1">
                <i class="material-icons" @click="enterRoom()">done</i>
            </div>
        </div>
        <!-- <div class="row">
            <blockquote  v-if="msg.length > 0">{{msg}}</blockquote>
        </div> -->
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