<template>
    <div class="container">
        <div class="row flow-text">
            <span><h4>Room Details</h4></span>
        </div>
        <div class="row flow-text">
            <span><h6>Choose any 1</h6></span>
        </div>
        <div v-if="options.length > 0">
            <div class="row myCol" v-for="option in  options" :key="option.id" @click="selectOption(option)">
                <div class="col flow-text">
                    {{option.content}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import store from '../../modules/store'
export default {
    name:'JoinedRoom',
    store,
    socket:{},
    roomId:'',
    methods:{
        selectOption(option){
            this.clicked = true
            console.log(option.content);
            this.socket.emit('voted',option)
            this.$router.push('/')
        }
    },
    data(){
        return {
            options:[],
            clicked:false,
        }
    },
    created(){
        this.roomId = this.$store.getters.getRoomId
        this.socket = this.$store.getters.getSocket
    },
    mounted(){
        this.socket.on('data',data=>{
            this.options = data
        })
    }
}
</script>
<style scoped>
    .myCol{
        border:2px solid lightblue;
    }

    .myCol:hover{
        cursor: pointer;
        border:2px solid green;
        box-shadow: 0 0 0 0 2px grey;
    }
    .clicked{
        border:2px solid teal;
        border-radius: 20px;
    }
</style>