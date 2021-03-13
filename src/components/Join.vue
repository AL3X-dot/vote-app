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
        <div class="row">
            <blockquote  v-if="msg.length > 0">{{msg}}</blockquote>
        </div>
    </div>
</template>
<script>
import store from '../modules/store'

export default {
    name:'Join',
    roomId:String,
    store:store,
    msg:'',
    methods:{
        enterRoom(){
            console.log('Joining room');
            if(this.roomId != ''){
                this.$store.commit('joinRoom',this.roomId)
            }else{
                console.log('No room id');
            }
        }
    },created(){
        this.roomId = ''
        this.msg = ''
    },mounted(){
        this.$store.state.socket.on('roomStatus',data=>{
            console.log(data);
            if(data.status == 'pass'){
                this.$store.commit('setCompName','JoinedRoom')
            }else if(data.status == 'fail'){
                this.msg = data.msg
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