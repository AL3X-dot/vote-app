<template>
    <div class="container">
        <div class="row">
            <span><h4>Joined Room Anonymous</h4></span>
        </div>
        <div v-if="options.length > 0">
            <div class="row myCol" v-for="option in  options" :key="option.id" @click="selectOption(option)">
                <div class="col flow-text">
                    {{option.content}}
                </div>
            </div>
        </div>
        <!-- <div class="row center" v-if="clicked">
            <button class="btn btn-flat teal lighten-2 black-text">Submit</button>
        </div> -->
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
            this.$router.push('/results')
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
        border:2px solid rgb(117, 117, 245);
        border-radius: 20px;
    }

    .myCol:hover{
        cursor: pointer;
        border:2px solid rgb(29, 241, 29);
        box-shadow: 0 0 0 0 2px grey;
    }
    .clicked{
        border:2px solid teal;
        border-radius: 20px;
    }
</style>